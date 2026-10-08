"use client";

import { useRef, useState } from "react";

const sparks = [
  "Uruz ne der?",
  "Fehu",
  "Terazi",
  "15 Nisan",
  "Ekinoks nedir?",
  "Haritaya nereden bakılır?",
] as const;

export function HearthAsk() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [voice, setVoice] = useState<"not" | "model" | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const answerRef = useRef<HTMLDivElement>(null);

  async function ask(text: string) {
    const next = text.trim();
    if (next.length < 2 || pending) return;
    setQuestion(next);
    setPending(true);
    setError(null);
    try {
      const response = await fetch("/api/ocak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: next }),
      });
      const data = (await response.json()) as {
        answer?: string;
        voice?: "not" | "model";
        error?: string;
      };
      if (!response.ok || !data.answer) {
        setError(data.error ?? "Ocak şu an cevap vermedi. Bir kez daha sor.");
        return;
      }
      setAnswer(data.answer);
      setVoice(data.voice ?? "not");
      requestAnimationFrame(() => {
        answerRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
      });
    } catch {
      setError("Ocak şu an cevap vermedi. Bir kez daha sor.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      className="w-full"
      onSubmit={(event) => {
        event.preventDefault();
        void ask(question);
      }}
    >
      <div className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="ocak"
            className="font-display text-2xl font-semibold tracking-[0.06em] text-snow"
          >
            Ocağa sor
          </label>
          <p className="mt-1.5 text-xs tracking-[0.12em] text-snow/60">Rün ya da gökyüzü.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="ocak"
            name="question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Bir rün adı, bir burç, bir gün"
            maxLength={500}
            className="min-h-12 flex-1 rounded-lg border border-snow/25 bg-transparent px-4 text-left text-snow outline-none placeholder:text-snow/40 focus-visible:border-blue"
          />
          <button
            type="submit"
            disabled={pending || question.trim().length < 2}
            className="min-h-12 rounded-lg bg-snow px-8 font-display text-sm font-semibold tracking-[0.14em] text-ink uppercase disabled:opacity-50"
          >
            {pending ? "Dinliyor" : "Sor"}
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {sparks.map((spark) => (
            <button
              key={spark}
              type="button"
              onClick={() => void ask(spark)}
              className="min-h-10 rounded-lg border border-snow/25 px-3 text-sm text-snow/75 hover:border-green hover:text-snow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
            >
              {spark}
            </button>
          ))}
        </div>
        <div ref={answerRef} aria-live="polite" className="min-h-6 text-left">
          {error ? <p className="text-blue">{error}</p> : null}
          {answer ? (
            <p className="leading-7 text-snow">
              <span className="mr-2 font-display text-xs tracking-[0.22em] text-green uppercase">
                {voice === "model" ? "Ocak" : "Odanın notu"}
              </span>
              {answer}
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
}
