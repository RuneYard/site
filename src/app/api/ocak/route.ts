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

  if (question.length < 2) {
    return Response.json({ error: "Ocağa bir soru bırak." }, { status: 400 });
  }

  const reply = await askHearth(question);
  return Response.json(reply);
}
