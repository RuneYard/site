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
      className="relative z-20 border-t border-bone/15 pt-5"
      onSubmit={(event) => {
        event.preventDefault();
        void ask(question);
      }}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <label htmlFor="ocak" className="font-display text-sm tracking-[0.28em] text-bone uppercase">
            Ocağa sor
          </label>
          <p className="text-sm text-ash">Rün ya da gökyüzü.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="ocak"
            name="question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Bir rün adı, bir burç, bir gün"
            maxLength={500}
            className="min-h-12 flex-1 border border-bone/20 bg-transparent px-4 text-bone outline-none placeholder:text-ash/70 focus-visible:border-ember"
          />
          <button
            type="submit"
            disabled={pending || question.trim().length < 2}
            className="min-h-12 bg-ember px-6 font-display text-sm tracking-[0.18em] text-paper uppercase disabled:opacity-50"
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
              className="min-h-10 border border-bone/15 px-3 text-sm text-ash hover:border-ember hover:text-bone focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
            >
              {spark}
            </button>
          ))}
        </div>
        <div ref={answerRef} aria-live="polite" className="min-h-6">
          {error ? <p className="text-ember">{error}</p> : null}
          {answer ? (
            <p className="max-w-3xl leading-7 text-bone">
              <span className="mr-2 font-display text-xs tracking-[0.22em] text-lichen uppercase">
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
