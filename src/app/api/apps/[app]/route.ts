import type { Lang } from "@/lib/copy";
import { askHearth } from "@/lib/hearth";

const ALLOWED_APPS = new Set([
  "rune-yard",
  "moon-yard",
  "dream-yard",
  "runewords",
]);

const RATE_WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_MINUTE = 30;
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

export async function POST(
  request: Request,
  { params }: { params: Promise<{ app: string }> }
) {
  const { app } = await params;

  if (!ALLOWED_APPS.has(app)) {
    return Response.json(
      { error: "Unknown RuneYard mobile application identifier." },
      { status: 404 }
    );
  }

  // Rate limiting per client IP
  const forwarded = request.headers.get("x-forwarded-for");
  const clientIp = forwarded ? forwarded.split(",")[0].trim() : "local";
  if (!checkRateLimit(clientIp)) {
    return Response.json(
      { error: "Rate limit exceeded. Please wait a moment." },
      { status: 429 }
    );
  }

  // Optional App Token verification (active when RUNEYARD_APP_SECRET is set in Vercel Environment Variables)
  const expectedSecret = process.env.RUNEYARD_APP_SECRET;
  if (expectedSecret) {
    const providedToken = request.headers.get("x-runeyard-app-token");
    if (!providedToken || providedToken !== expectedSecret) {
      return Response.json(
        { error: "Unauthorized mobile client token." },
        { status: 401 }
      );
    }
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const prompt =
    typeof body === "object" &&
    body !== null &&
    "prompt" in body &&
    typeof (body as { prompt?: unknown }).prompt === "string"
      ? (body as { prompt: string }).prompt.trim()
      : "";

  const lang: Lang =
    typeof body === "object" &&
    body !== null &&
    "lang" in body &&
    ((body as { lang?: unknown }).lang === "en" ||
      (body as { lang?: unknown }).lang === "sv" ||
      (body as { lang?: unknown }).lang === "tr")
      ? ((body as { lang: Lang }).lang)
      : "tr";

  if (prompt.length < 2) {
    return Response.json(
      { error: "Prompt must be at least 2 characters." },
      { status: 400 }
    );
  }

  // Executes safely on the server using process.env.OPENAI_API_KEY without exposing keys to the mobile binary
  const reply = await askHearth(prompt, lang);

  return Response.json({
    app,
    ok: true,
    answer: reply.answer,
    voice: reply.voice,
    href: reply.href ?? null,
    linkLabel: reply.linkLabel ?? null,
  });
}
