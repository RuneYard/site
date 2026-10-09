"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/components/language";

export function HearthAsk() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [voice, setVoice] = useState<"not" | "model" | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

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
        setError(data.error ?? t.hearth.error);
        return;
      }
      setAnswer(data.answer);
      setVoice(data.voice ?? "not");
      requestAnimationFrame(() => {
        answerRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
      });
    } catch {
      setError(t.hearth.error);
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
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <label
            htmlFor="ocak"
            className="shrink-0 font-display text-[11px] tracking-[0.16em] text-chalk uppercase"
          >
            {t.hearth.label}
          </label>
          <input
            id="ocak"
            name="question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder={t.hearth.placeholder}
            maxLength={500}
            className="h-8 min-w-0 flex-1 border border-chalk/25 bg-transparent px-2 text-sm text-chalk outline-none placeholder:text-chalk/40 focus-visible:border-chalk"
          />
          <button
            type="submit"
            disabled={pending || question.trim().length < 2}
            className="h-8 shrink-0 bg-chalk px-3 font-display text-[11px] tracking-[0.14em] text-ink uppercase disabled:opacity-50"
          >
            {pending ? "…" : t.hearth.ask}
          </button>
        </div>
        <div className="flex gap-1 overflow-x-auto">
          {t.hearth.sparks.map((spark) => (
            <button
              key={spark}
              type="button"
              onClick={() => void ask(spark)}
              className="h-6 shrink-0 border border-chalk/20 px-2 text-[11px] text-chalk/75 hover:border-chalk hover:text-chalk focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chalk"
            >
              {spark}
            </button>
          ))}
        </div>
        <div ref={answerRef} aria-live="polite" className="text-left">
          {error ? <p className="text-xs text-chalk">{error}</p> : null}
          {answer ? (
            <p className="text-sm leading-5 text-chalk">
              <span className="mr-2 font-display text-[10px] tracking-[0.18em] text-chalk/60 uppercase">
                {voice === "model" ? t.hearth.voice : t.hearth.note}
              </span>
              {answer}
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
}
