"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HallShell } from "@/components/hall-shell";
import { useLanguage } from "@/components/language";
import { SealCardGenerator } from "@/components/seal-card-generator";
import { SymbolicTwins } from "@/components/symbolic-twins";
import {
  dailyLoreEntries,
  dailyLoreHall,
  findDailyLore,
  getTodayDailyLore,
  type DailyLoreEntry,
} from "@/content/daily-lore";

function renderFormattedText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="font-semibold text-amber">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={idx} className="italic text-chalk/90">
          {part.slice(1, -1)}
        </em>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

export function DailyLoreHallView() {
  const { lang, t } = useLanguage();
  const [todayEntry, setTodayEntry] = useState<DailyLoreEntry>(() => dailyLoreEntries[0]);

  useEffect(() => {
    setTodayEntry(getTodayDailyLore(new Date()));
  }, []);

  const ui = dailyLoreHall.ui[lang];
  const dateLabel =
    lang === "en"
      ? new Date().toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : lang === "sv"
        ? new Date().toLocaleDateString("sv-SE", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        : new Date().toLocaleDateString("tr-TR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });

  return (
    <HallShell>
      <main id="icerik" className="px-6 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="text-xs tracking-[0.2em] text-chalk/60 uppercase hover:text-amber"
          >
            {t.back}
          </Link>

          <header className="mt-6 border-b border-chalk/12 pb-8">
            <p className="text-[11px] tracking-[0.22em] text-amber uppercase">
              🔥 GÜNLÜK OCAK KÜTÜĞÜ · {dailyLoreEntries.length} KADİM YAPRAK
            </p>
            <h1 className="mt-2 font-display text-4xl font-medium tracking-[-0.02em] text-chalk sm:text-6xl">
              {dailyLoreHall.title[lang]}
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-chalk/75">
              {dailyLoreHall.subtitle[lang]}
            </p>
          </header>

          {/* Today's Featured Hearth Leaf */}
          <section className="hearth-fire-shell relative mt-8 overflow-hidden border border-amber/45 bg-gradient-to-br from-[#1b140e] via-[#121714] to-[#0b0f0d] p-6 sm:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber/20 pb-4">
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-amber/50 bg-amber/15 text-sm text-amber"
                >
                  🔥
                </span>
                <span className="text-[11px] font-semibold tracking-[0.22em] text-amber uppercase">
                  {ui.todayBadge} · {dateLabel}
                </span>
              </div>
              <span className="border border-chalk/15 bg-black/35 px-2.5 py-1 text-[10px] tracking-[0.18em] text-chalk/75 uppercase">
                {todayEntry.traditionTag[lang]}
              </span>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-display text-4xl text-amber">
                    {todayEntry.glyph}
                  </span>
                  <h2 className="font-display text-3xl leading-tight font-medium text-chalk sm:text-4xl">
                    {todayEntry.title[lang]}
                  </h2>
                </div>
                <p className="mt-2 font-display text-lg text-amber/90">
                  {todayEntry.subtitle[lang]}
                </p>
                <p className="mt-4 max-w-3xl text-base leading-7 text-chalk/85">
                  {renderFormattedText(todayEntry.summary[lang])}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/gunluk/${todayEntry.slug}`}
                  className="inline-flex items-center gap-2 border border-[#f3d287]/60 bg-[#d8ae5e] px-5 py-3 font-display text-xs font-bold tracking-[0.18em] text-[#090c0b] uppercase transition-colors hover:bg-[#e5be72]"
                >
                  <span>{ui.readMore}</span>
                </Link>
                <Link
                  href="/#ocak"
                  className="inline-flex items-center gap-2 border border-amber/40 bg-black/40 px-4 py-3 font-display text-xs tracking-[0.16em] text-amber uppercase transition-colors hover:border-amber hover:bg-amber/10"
                >
                  <span>{ui.askInHearth}</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Full Archive of Daily Hearth Leaves */}
          <section className="mt-12">
            <div className="mb-5 flex items-center justify-between border-b border-chalk/12 pb-3">
              <h2 className="font-display text-xs tracking-[0.22em] text-amber uppercase">
                {ui.archiveHeading}
              </h2>
              <span className="text-[11px] tracking-[0.16em] text-chalk/55 uppercase">
                {dailyLoreEntries.length} / {dailyLoreEntries.length}
              </span>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {dailyLoreEntries.map((entry, index) => {
                const isToday = entry.slug === todayEntry.slug;
                return (
                  <li key={entry.slug} className="h-full">
                    <Link
                      href={`/gunluk/${entry.slug}`}
                      className={`card-slate group flex h-full flex-col justify-between border p-5 transition-colors ${
                        isToday
                          ? "border-amber/60 bg-amber/[0.05]"
                          : "border-chalk/12 hover:border-amber/45"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 text-[10px] tracking-[0.18em] text-chalk/55 uppercase">
                          <span>
                            YAPRAK {String(index + 1).padStart(2, "0")} ·{" "}
                            {entry.traditionTag[lang]}
                          </span>
                          <span className="font-display text-2xl text-amber">
                            {entry.glyph}
                          </span>
                        </div>
                        {isToday && (
                          <span className="mt-2 inline-block border border-amber/45 bg-amber/15 px-2 py-0.5 text-[9px] font-semibold tracking-[0.18em] text-amber uppercase">
                            🔥 BUGÜNÜN KONUSU
                          </span>
                        )}
                        <h3 className="mt-3 font-display text-2xl leading-snug font-medium text-chalk transition-colors group-hover:text-amber">
                          {entry.title[lang]}
                        </h3>
                        <p className="mt-2 text-xs leading-5 text-amber/80">
                          {entry.subtitle[lang]}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-chalk/72 line-clamp-3">
                          {entry.summary[lang].replace(/\*\*/g, "").replace(/\*/g, "")}
                        </p>
                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-chalk/10 pt-3 text-[10px] tracking-[0.18em] text-chalk/60 uppercase group-hover:text-amber">
                        <span>{ui.readMore}</span>
                        <span aria-hidden>→</span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>
    </HallShell>
  );
}

export function DailyLoreEntryView({ slug }: { slug: string }) {
  const { lang } = useLanguage();
  const entry = findDailyLore(slug);
  const ui = dailyLoreHall.ui[lang];

  if (!entry) return null;

  const entryIndex = dailyLoreEntries.findIndex((e) => e.slug === entry.slug);
  const prevEntry =
    entryIndex > 0
      ? dailyLoreEntries[entryIndex - 1]
      : dailyLoreEntries[dailyLoreEntries.length - 1];
  const nextEntry =
    entryIndex < dailyLoreEntries.length - 1
      ? dailyLoreEntries[entryIndex + 1]
      : dailyLoreEntries[0];

  const practice = entry.practice[lang];

  return (
    <HallShell>
      <main id="icerik" className="px-6 py-12 sm:px-8 sm:py-16">
        <article className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/gunluk"
              className="text-xs tracking-[0.2em] text-chalk/65 uppercase hover:text-amber"
            >
              {ui.backToDaily}
            </Link>
            <span className="border border-amber/35 bg-amber/10 px-3 py-1 text-[10px] tracking-[0.2em] text-amber uppercase">
              🔥 YAPRAK {String(entryIndex + 1).padStart(2, "0")} ·{" "}
              {entry.traditionTag[lang]}
            </span>
          </div>

          <header className="mt-6 border-b border-chalk/15 pb-8">
            <div className="flex items-center gap-3">
              <span className="font-display text-5xl text-amber">
                {entry.glyph}
              </span>
              <div>
                <h1 className="font-display text-3xl leading-tight font-medium text-chalk sm:text-5xl">
                  {entry.title[lang]}
                </h1>
                <p className="mt-2 font-display text-lg text-amber/90 sm:text-xl">
                  {entry.subtitle[lang]}
                </p>
              </div>
            </div>

            <div className="mt-6 border-l-2 border-amber/60 bg-amber/[0.05] px-5 py-4">
              <p className="text-base leading-7 text-chalk/90">
                {renderFormattedText(entry.summary[lang])}
              </p>
            </div>
          </header>

          {/* Main Paragraphs */}
          <div className="mt-8 space-y-5 text-base leading-8 text-chalk/88 sm:text-[17px]">
            {entry.paragraphs[lang].map((p, idx) => (
              <p key={idx}>{renderFormattedText(p)}</p>
            ))}
          </div>

          {/* Core Key Points */}
          <section className="card-slate mt-10 border border-chalk/15 p-6 sm:p-7">
            <h2 className="font-display text-xs tracking-[0.22em] text-amber uppercase">
              ✦ {ui.keyPointsHeading}
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {entry.keyPoints[lang].map((pt, idx) => (
                <li
                  key={idx}
                  className="border border-chalk/10 bg-black/30 p-4 text-sm leading-6 text-chalk/85"
                >
                  <span className="mr-2 text-amber">◆</span>
                  {renderFormattedText(pt)}
                </li>
              ))}
            </ul>
          </section>

          {/* Daily Practice */}
          <section className="mt-8 border border-amber/40 bg-gradient-to-br from-[#1b140d] via-[#131916] to-[#0b0f0d] p-6 sm:p-7">
            <h2 className="font-display text-lg font-medium text-amber sm:text-xl">
              🔥 {practice.title}
            </h2>
            <ol className="mt-4 space-y-3">
              {practice.steps.map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm leading-6 text-chalk/88 sm:text-base"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center border border-amber/45 bg-amber/15 font-display text-xs font-bold text-amber">
                    {idx + 1}
                  </span>
                  <span>{renderFormattedText(step)}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Closing Aphorism */}
          <blockquote className="mt-8 border-y border-chalk/15 py-6 text-center font-display text-xl italic text-chalk/90 sm:text-2xl">
            “{entry.closing[lang]}”
          </blockquote>

          <div className="mt-6 flex justify-center">
            <SealCardGenerator
              filename={`runeyard-gunluk-${entry.slug}`}
              badge={entry.traditionTag[lang]}
              glyph={entry.glyph}
              title={entry.title[lang]}
              subtitle={entry.subtitle[lang]}
              body={entry.summary[lang]}
              quote={entry.closing[lang]}
            />
          </div>

          <SymbolicTwins doorSlug={entry.slug} />

          {/* Prev / Next Navigation + Ask the Hearth */}
          <nav className="mt-10 grid gap-4 border-t border-chalk/15 pt-8 sm:grid-cols-3">
            <Link
              href={`/gunluk/${prevEntry.slug}`}
              className="card-slate border border-chalk/12 p-4 text-left transition-colors hover:border-amber/45"
            >
              <span className="block text-[10px] tracking-[0.18em] text-chalk/50 uppercase">
                ← ÖNCEKİ YAPRAK
              </span>
              <span className="mt-1 block font-display text-base text-chalk">
                {prevEntry.glyph} {prevEntry.title[lang]}
              </span>
            </Link>

            <Link
              href="/#ocak"
              className="flex flex-col items-center justify-center border border-amber/45 bg-amber/10 p-4 text-center transition-colors hover:bg-amber/20"
            >
              <span className="text-[10px] font-semibold tracking-[0.2em] text-amber uppercase">
                {ui.askInHearth}
              </span>
              <span className="mt-1 text-xs text-chalk/80">
                “{entry.keywords[0]}”
              </span>
            </Link>

            <Link
              href={`/gunluk/${nextEntry.slug}`}
              className="card-slate border border-chalk/12 p-4 text-right transition-colors hover:border-amber/45"
            >
              <span className="block text-[10px] tracking-[0.18em] text-chalk/50 uppercase">
                SONRAKİ YAPRAK →
              </span>
              <span className="mt-1 block font-display text-base text-chalk">
                {nextEntry.glyph} {nextEntry.title[lang]}
              </span>
            </Link>
          </nav>
        </article>
      </main>
    </HallShell>
  );
}
