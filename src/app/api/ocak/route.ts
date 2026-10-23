import type { Lang } from "@/lib/copy";
import { askHearth } from "@/lib/hearth";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Soru okunamadı." }, { status: 400 });
  }

  const question =
    typeof body === "object" &&
    body !== null &&
    "question" in body &&
    typeof body.question === "string"
      ? body.question.trim()
      : "";

  const lang: Lang =
    typeof body === "object" &&
    body !== null &&
    "lang" in body &&
    (body.lang === "en" || body.lang === "sv" || body.lang === "tr")
      ? body.lang
      : "tr";

  if (question.length < 2) {
    return Response.json({ error: "Ocağa bir soru bırak." }, { status: 400 });
  }

  const reply = await askHearth(question, lang);
  return Response.json(reply);
}
