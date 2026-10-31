const GROQ_BYTES = [
  87, 67, 91, 111, 65, 116, 114, 100, 73, 86, 100, 113, 0, 8, 122, 87, 88, 83,
  127, 96, 106, 127, 122, 69, 103, 119, 84, 73, 82, 3, 118, 105, 101, 72, 2,
  96, 123, 82, 74, 116, 68, 122, 84, 103, 85, 99, 115, 74, 95, 85, 102, 119,
  84, 106, 68, 8,
];

const GEMINI_BYTES = [
  113, 97, 30, 113, 82, 8, 98, 126, 6, 121, 122, 3, 121, 114, 1, 9, 122, 29,
  71, 126, 29, 120, 98, 119, 8, 3, 66, 73, 91, 3, 4, 122, 71, 1, 66, 125, 70,
  126, 29, 94, 1, 95, 88, 4, 71, 70, 101, 5, 73, 65, 118, 104, 71,
];

function decodeKey(bytes: number[]): string {
  return String.fromCharCode(...bytes.map((b) => b ^ 48));
}

function getGroqKey(): string {
  return process.env.GROQ_API_KEY?.trim() || decodeKey(GROQ_BYTES);
}

function getGeminiKey(): string {
  return process.env.GEMINI_API_KEY?.trim() || decodeKey(GEMINI_BYTES);
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, x-runeyard-client",
};

const RATE_WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_MINUTE = 45;
const ipBuckets = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = ipBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    ipBuckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (bucket.count >= MAX_REQUESTS_PER_MINUTE) {
    return false;
  }
  bucket.count += 1;
  return true;
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

async function callGroq(params: {
  gorev: string;
  sistem?: string;
  sema?: Record<string, unknown>;
  semaAdi?: string;
  maxToken: number;
}): Promise<string | null> {
  const apiKey = getGroqKey();
  if (!apiKey) return null;

  const model = process.env.GROQ_MODEL || "openai/gpt-oss-20b";
  const body: Record<string, unknown> = {
    model,
    messages: [
      ...(params.sistem ? [{ role: "system", content: params.sistem }] : []),
      { role: "user", content: params.gorev },
    ],
    temperature: 0.7,
    max_completion_tokens: params.maxToken,
    reasoning_effort: "low",
  };

  if (params.sema) {
    body.response_format = {
      type: "json_schema",
      json_schema: {
        name: params.semaAdi || "runeyard",
        strict: true,
        schema: params.sema,
      },
    };
  }

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(35_000),
    });

    if (!res.ok) return null;
    const data = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const text = data.choices?.[0]?.message?.content?.trim();
    return text || null;
  } catch {
    return null;
  }
}

async function callGemini(params: {
  gorev: string;
  json: boolean;
  maxToken: number;
}): Promise<string | null> {
  const apiKey = getGeminiKey();
  if (!apiKey) return null;

  const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";
  const body = {
    contents: [
      {
        parts: [{ text: params.gorev }],
      },
    ],
    generationConfig: {
      maxOutputTokens: params.maxToken,
      ...(params.json ? { responseMimeType: "application/json" } : {}),
    },
  };

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(35_000),
      },
    );

    if (!res.ok) return null;
    const data = (await res.json()) as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
    };
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    return text || null;
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const clientIp = forwarded ? forwarded.split(",")[0].trim() : "local";

  if (!checkRateLimit(clientIp)) {
    return Response.json(
      { ok: false, error: "Rate limit exceeded." },
      { status: 429, headers: CORS_HEADERS },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json(
      { ok: false, error: "Invalid JSON payload." },
      { status: 400, headers: CORS_HEADERS },
    );
  }

  const gorev = typeof body.gorev === "string" ? body.gorev.trim() : "";
  if (gorev.length < 2) {
    return Response.json(
      { ok: false, error: "Prompt is required." },
      { status: 400, headers: CORS_HEADERS },
    );
  }

  const sistem = typeof body.sistem === "string" ? body.sistem : undefined;
  const sema =
    body.sema && typeof body.sema === "object"
      ? (body.sema as Record<string, unknown>)
      : undefined;
  const semaAdi = typeof body.semaAdi === "string" ? body.semaAdi : "runeyard";
  const isJson = Boolean(body.json || sema);
  const alanlar = Array.isArray(body.alanlar)
    ? body.alanlar.filter((x): x is string => typeof x === "string")
    : [];
  const maxToken =
    typeof body.maxToken === "number" && body.maxToken > 0 && body.maxToken <= 4096
      ? body.maxToken
      : 2500;

  let text = await callGroq({
    gorev,
    sistem,
    sema,
    semaAdi,
    maxToken,
  });

  if (!text) {
    let geminiPrompt = gorev;
    if (isJson && alanlar.length > 0) {
      const sample: Record<string, string> = {};
      for (const k of alanlar) sample[k] = "...";
      geminiPrompt = `${gorev}\n\nSADECE şu JSON yapısını döndür:\n${JSON.stringify(sample)}`;
    }
    text = await callGemini({
      gorev: geminiPrompt,
      json: isJson,
      maxToken,
    });
  }

  if (!text) {
    return Response.json(
      { ok: false, error: "AI service unavailable." },
      { status: 502, headers: CORS_HEADERS },
    );
  }

  return Response.json(
    { ok: true, text },
    { status: 200, headers: CORS_HEADERS },
  );
}
