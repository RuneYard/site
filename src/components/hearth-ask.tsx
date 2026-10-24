"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useLanguage } from "@/components/language";
import {
  dailyLoreEntries,
  getTodayDailyLore,
  type DailyLoreEntry,
} from "@/content/daily-lore";

const HEARTH_UI = {
  tr: {
    sanctumBadge: "KIŞ ODASI OCAĞI · ATEŞ VE BİLGELİK KÜRSÜSÜ",
    sanctumHint:
      "Ocağın koruna bir rün, burç, bitki, doğum günü ya da bugünün konusunu bırak; ateş yanıtlasın.",
    todayBadge: "BUGÜN OCAKTA AÇILAN YENİ KONU",
    listenBtn: "🔥 Ocakta Dinle",
    readLeafBtn: "Yaprağı Oku →",
    archiveBtn: `Arşiv (${dailyLoreEntries.length})`,
    todayChip: "🔥 Günün Konusu",
    askBtn: "Ateşe Sor 🔥",
    stoking: "Korlar harlanıyor, ocağın sesi dinleniyor…",
    oracleHeading: "OCAK KEHANETİ & ODANIN NOTU",
  },
  en: {
    sanctumBadge: "WINTER HALL HEARTH · ALTAR OF FIRE & WISDOM",
    sanctumHint:
      "Cast a rune, zodiac sign, herb, birth date, or today's topic into the embers; let the hearth answer.",
    todayBadge: "TODAY'S NEW HEARTH TOPIC",
    listenBtn: "🔥 Hear at the Hearth",
    readLeafBtn: "Read Full Leaf →",
    archiveBtn: `Chronicle (${dailyLoreEntries.length})`,
    todayChip: "🔥 Today's Lore",
    askBtn: "Ask the Fire 🔥",
    stoking: "The embers flare as the hearth recalls…",
    oracleHeading: "HEARTH COUNSEL & ROOM NOTE",
  },
  sv: {
    sanctumBadge: "VINTERRUMMETS HÄRD · ELD OCH VISDOM",
    sanctumHint:
      "Lägg en runa, ett stjärntecken, en ört, ett födelsedatum eller dagens ämne i glöden; härden svarar.",
    todayBadge: "DAGENS NYA ÄMNE VID HÄRDEN",
    listenBtn: "🔥 Lyssna vid Härden",
    readLeafBtn: "Läs Bladet →",
    archiveBtn: `Arkiv (${dailyLoreEntries.length})`,
    todayChip: "🔥 Dagens Ämne",
    askBtn: "Fråga Elden 🔥",
    stoking: "Glöden flammar upp medan härden minns…",
    oracleHeading: "HÄRDENS SVAR & RUMSANTECKNING",
  },
} as const;

const EMBERS: Array<{
  left: string;
  size: number;
  duration: string;
  delay: string;
  drift: string;
}> = [
  { left: "10%", size: 4, duration: "4.2s", delay: "0s", drift: "-10px" },
  { left: "24%", size: 3, duration: "5.1s", delay: "1.1s", drift: "12px" },
  { left: "38%", size: 5, duration: "3.8s", delay: "0.5s", drift: "-8px" },
  { left: "52%", size: 3.5, duration: "4.7s", delay: "1.8s", drift: "10px" },
  { left: "68%", size: 4, duration: "4.0s", delay: "0.9s", drift: "-12px" },
  { left: "82%", size: 3, duration: "5.3s", delay: "2.2s", drift: "9px" },
  { left: "92%", size: 4.5, duration: "4.4s", delay: "1.4s", drift: "-6px" },
];

export function HearthAsk() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [voice, setVoice] = useState<"not" | "model" | null>(null);
  const [href, setHref] = useState<string | null>(null);
  const [linkLabel, setLinkLabel] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [flaring, setFlaring] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [todayLore, setTodayLore] = useState<DailyLoreEntry>(() => dailyLoreEntries[0]);

  const answerRef = useRef<HTMLDivElement>(null);
  const { lang, t } = useLanguage();
  const ui = HEARTH_UI[lang];

  useEffect(() => {
    setTodayLore(getTodayDailyLore(new Date()));
  }, []);

  async function ask(text: string) {
    const next = text.trim();
    if (next.length < 2 || pending) return;
    setQuestion(next);
    setPending(true);
    setFlaring(true);
    setError(null);
    try {
      const response = await fetch("/api/ocak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: next, lang }),
      });
      const data = (await response.json()) as {
        answer?: string;
        voice?: "not" | "model";
        href?: string;
        linkLabel?: string;
        error?: string;
      };
      if (!response.ok || !data.answer) {
        setError(data.error ?? t.hearth.error);
        return;
      }
      setAnswer(data.answer);
      setVoice(data.voice ?? "not");
      setHref(data.href ?? null);
      setLinkLabel(data.linkLabel ?? null);
      requestAnimationFrame(() => {
        answerRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
      });
    } catch {
      setError(t.hearth.error);
    } finally {
      setPending(false);
      setTimeout(() => setFlaring(false), 1400);
    }
  }

  return (
    <div
      className={`hearth-sanctum relative overflow-hidden border border-amber/40 p-4 transition-shadow duration-500 sm:p-5 ${
        flaring || pending ? "hearth-sanctum-flare" : ""
      }`}
    >
      {/* Floating Rising Ember Particles */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 overflow-hidden" aria-hidden>
        {EMBERS.map((e, idx) => (
          <span
            key={idx}
            style={
              {
                left: e.left,
                width: `${e.size}px`,
                height: `${e.size}px`,
                "--ember-duration": e.duration,
                "--ember-delay": e.delay,
                "--ember-drift": e.drift,
              } as CSSProperties
            }
            className="ember-particle absolute bottom-1 rounded-full bg-gradient-to-t from-[#e27229] to-[#f7d58b] shadow-[0_0_8px_#e89a3c]"
          />
        ))}
      </div>

      {/* Header: Living Flame Emblem + Hearth Title */}
      <div className="relative z-10 flex items-start gap-3.5">
        <div
          aria-hidden
          className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber/45 bg-gradient-to-b from-[#26180d] to-[#0f1210] shadow-[0_0_22px_rgba(224,122,46,0.32)]"
        >
          <svg
            viewBox="0 0 48 48"
            className="h-8 w-8 overflow-visible"
            fill="none"
          >
            {/* Hearth Logs / Stone Base */}
            <path
              d="M12 40 L36 40 M15 43 L33 43"
              stroke="#a8824a"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Outer Copper Flame */}
            <path
              className="flame-outer"
              d="M24 6 C17 15 12 22 14 31 C15.5 36.5 19.5 39 24 39 C28.5 39 32.5 36.5 34 31 C36 22 31 15 24 6 Z"
              fill="url(#hearthOuterGrad)"
            />
            {/* Inner Golden-White Core Flame */}
            <path
              className="flame-inner"
              d="M24 15 C20 21 18 26 19.5 32 C20.5 35.5 22 37 24 37 C26 37 27.5 35.5 28.5 32 C30 26 28 21 24 15 Z"
              fill="url(#hearthInnerGrad)"
            />
            <defs>
              <linearGradient id="hearthOuterGrad" x1="24" y1="6" x2="24" y2="39" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f6d379" />
                <stop offset="55%" stopColor="#df8232" />
                <stop offset="100%" stopColor="#9e3816" />
              </linearGradient>
              <linearGradient id="hearthInnerGrad" x1="24" y1="15" x2="24" y2="37" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fff7df" />
                <stop offset="65%" stopColor="#f3c563" />
                <stop offset="100%" stopColor="#d97228" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-display text-[11px] font-semibold tracking-[0.2em] text-amber uppercase">
              🔥 {ui.sanctumBadge}
            </span>
            <Link
              href="/gunluk"
              className="text-[10px] tracking-[0.16em] text-chalk/65 uppercase underline decoration-amber/40 underline-offset-4 hover:text-amber"
            >
              {ui.archiveBtn} →
            </Link>
          </div>
          <p className="mt-1 text-xs leading-5 text-chalk/75">
            {ui.sanctumHint}
          </p>
        </div>
      </div>

      {/* Today's Newly Opened Hearth Lore Banner */}
      <div className="relative z-10 mt-3.5 border border-amber/30 bg-black/45 px-3.5 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="min-w-0 flex-1">
            <span className="block text-[9px] font-semibold tracking-[0.2em] text-[#e89a48] uppercase">
              ✦ {ui.todayBadge} · {todayLore.traditionTag[lang]}
            </span>
            <Link
              href={`/gunluk/${todayLore.slug}`}
              className="mt-0.5 block truncate font-display text-base font-medium text-chalk hover:text-amber"
            >
              {todayLore.glyph} {todayLore.title[lang]}
            </Link>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <button
              type="button"
              onClick={() => void ask(todayLore.keywords[0])}
              className="border border-amber/40 bg-amber/15 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-amber uppercase transition-colors hover:bg-amber hover:text-ink"
            >
              {ui.listenBtn}
            </button>
            <Link
              href={`/gunluk/${todayLore.slug}`}
              className="border border-chalk/20 bg-white/[0.03] px-2.5 py-1 text-[10px] tracking-[0.14em] text-chalk/85 uppercase transition-colors hover:border-amber/50 hover:text-amber"
            >
              {ui.readLeafBtn}
            </Link>
          </div>
        </div>
      </div>

      {/* Search / Ask Form */}
      <form
        className="relative z-10 mt-3.5 w-full"
        onSubmit={(event) => {
          event.preventDefault();
          void ask(question);
        }}
      >
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <label htmlFor="ocak-input" className="sr-only">
              {t.hearth.label}
            </label>
            <div className="relative flex min-w-0 flex-1 items-center">
              <span
                aria-hidden
                className="pointer-events-none absolute left-3 text-sm text-amber/80"
              >
                🔥
              </span>
              <input
                id="ocak-input"
                name="question"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder={t.hearth.placeholder}
                maxLength={500}
                className="h-10 w-full border border-amber/35 bg-black/55 pr-3 pl-9 text-sm text-chalk outline-none transition-colors placeholder:text-chalk/45 focus-visible:border-amber focus-visible:bg-black/75"
              />
            </div>
            <button
              type="submit"
              disabled={pending || question.trim().length < 2}
              className="h-10 shrink-0 border border-[#f5d78e]/50 bg-gradient-to-r from-[#d8ae5e] via-[#df9b48] to-[#c86d2d] px-4 font-display text-xs font-bold tracking-[0.16em] text-[#090c0b] uppercase shadow-[0_0_16px_rgba(216,174,94,0.28)] transition-all hover:brightness-110 disabled:opacity-50"
            >
              {pending ? "…" : ui.askBtn}
            </button>
          </div>

          {/* Quick Spark Chips */}
          <div className="flex gap-1.5 overflow-x-auto pb-0.5">
            <button
              type="button"
              onClick={() => void ask("günün konusu")}
              className="h-6 shrink-0 border border-amber/45 bg-amber/15 px-2.5 text-[11px] font-medium text-amber transition-colors hover:bg-amber hover:text-ink"
            >
              {ui.todayChip}
            </button>
            {t.hearth.sparks.map((spark) => (
              <button
                key={spark}
                type="button"
                onClick={() => void ask(spark)}
                className="h-6 shrink-0 border border-chalk/20 bg-black/35 px-2.5 text-[11px] text-chalk/80 transition-colors hover:border-amber/60 hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              >
                {spark}
              </button>
            ))}
          </div>

          {/* Live Answer / Oracle Output */}
          <div ref={answerRef} aria-live="polite" className="text-left">
            {pending && (
              <p className="mt-1 flex items-center gap-2 text-xs italic text-amber/90">
                <span className="inline-block animate-pulse">🔥</span>
                <span>{ui.stoking}</span>
              </p>
            )}
            {error ? <p className="mt-1 text-xs text-amber">{error}</p> : null}
            {answer && !pending ? (
              <div className="mt-2 border-l-2 border-amber bg-black/65 p-3.5 shadow-inner">
                <div className="flex items-center justify-between gap-2 text-[10px] tracking-[0.18em] text-amber uppercase">
                  <span>
                    🔥 {voice === "model" ? t.hearth.voice : ui.oracleHeading}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-6 text-chalk/95">
                  {answer}
                </p>
                {href && linkLabel ? (
                  <div className="mt-2.5">
                    <Link
                      href={href}
                      className="inline-flex items-center gap-1.5 border border-amber/45 bg-amber/15 px-3 py-1 font-display text-[11px] font-semibold tracking-[0.14em] text-amber uppercase transition-colors hover:bg-amber hover:text-ink"
                    >
                      <span>{linkLabel}</span>
                    </Link>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
}
