"use client";

import { useState } from "react";
import Link from "next/link";
import { GaldrPlayer } from "@/components/galdr-player";
import { HallShell } from "@/components/hall-shell";
import { useLanguage } from "@/components/language";
import { RuneCast } from "@/components/rune-cast";
import { RuneTransliterator } from "@/components/rune-transliterator";
import { SealCardGenerator } from "@/components/seal-card-generator";
import { ShareBar } from "@/components/share-bar";
import { ScholarSeal, ShopBridge } from "@/components/shop-bridge";
import { SymbolicTwins } from "@/components/symbolic-twins";
import { havamalBySlug } from "@/content/havamal";
import {
  runeAetts,
  runeBySlug,
  runeHallIntro,
  runes,
  type Rune,
} from "@/content/runes";

const LABELS = {
  tr: {
    proto: "Proto-Cermen Kökü",
    phoneme: "Ses Değeri (Galdr)",
    element: "Kozmik Kök & Doğa",
    aettTag: "Aett",
    poemBadge: "Tarihsel Rün Şiiri Kaynağı",
    coreReading: "Arketipsel Okuma ve Kozmoloji",
    prevRune: "Önceki Rün",
    nextRune: "Sonraki Rün",
    quickJump: "24 Rün Hızlı Geçit Çemberi",
  },
  en: {
    proto: "Proto-Germanic Root",
    phoneme: "Phonetic Value (Galdr)",
    element: "Cosmic Root & Nature",
    aettTag: "Aett",
    poemBadge: "Historical Rune Poem Source",
    coreReading: "Archetypal Reading & Cosmology",
    prevRune: "Previous Rune",
    nextRune: "Next Rune",
    quickJump: "24-Rune Quick Threshold Ring",
  },
  sv: {
    proto: "Urgermansk Rot",
    phoneme: "Ljudvärde (Galdr)",
    element: "Kosmisk Rot & Natur",
    aettTag: "Ätt",
    poemBadge: "Historisk Rundiktskälla",
    coreReading: "Arketypisk Läsning & Kosmologi",
    prevRune: "Föregående Runa",
    nextRune: "Nästa Runa",
    quickJump: "24-Runors Snabbportring",
  },
} as const;

export function RuneSheet() {
  const { lang, t } = useLanguage();
  const ui = LABELS[lang];

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-5xl px-6 py-16 sm:px-8">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">
          runeyard.net · Elder Futhark · XXIV
        </p>
        <h1 className="mt-4 font-display text-5xl font-medium tracking-[-0.025em] sm:text-6xl">
          {t.runes.title}
        </h1>
        <p className="mt-3 max-w-2xl font-display text-xl text-chalk/75 italic">
          {runeHallIntro.subtitle[lang]}
        </p>

        <figure className="mt-8 overflow-hidden border border-chalk/15 bg-black/50">
          <img
            src={runeHallIntro.image}
            alt={t.runes.title}
            className="h-auto w-full object-cover"
            loading="eager"
          />
        </figure>

        <div className="mt-8 max-w-3xl space-y-4">
          {runeHallIntro.paragraphs[lang].map((p) => (
            <p key={p} className="text-base leading-7 text-chalk/80">
              {p}
            </p>
          ))}
        </div>

        {/* Interactive Rune Pouch & Three Norns Cast */}
        <RuneCast />

        {/* Runic Phonetic Transliterator & Inscription Studio */}
        <RuneTransliterator />

        {/* Quick 24-Rune Strip */}
        <section className="mt-10 border border-chalk/15 bg-chalk/[0.02] p-5">
          <p className="text-[10px] tracking-[0.2em] text-chalk/55 uppercase">
            {ui.quickJump}
          </p>
          <div className="mt-3 grid grid-cols-6 gap-1.5 sm:grid-cols-8 md:grid-cols-12">
            {runes.map((rune) => (
              <Link
                key={rune.slug}
                href={`/runler/${rune.slug}`}
                title={`${String(rune.index).padStart(2, "0")} · ${rune.name} (${rune.protoGermanic})`}
                className="group flex flex-col items-center justify-center border border-chalk/10 bg-black/30 py-2.5 transition-colors hover:border-chalk/40 hover:bg-chalk/[0.06]"
              >
                <span className="font-display text-2xl leading-none text-chalk/85 group-hover:text-chalk">
                  {rune.glyph}
                </span>
                <span className="mt-1.5 text-[9px] tracking-[0.08em] text-chalk/55 uppercase group-hover:text-chalk/85">
                  {rune.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Three Aettir Sections */}
        <div className="mt-14 space-y-16">
          {runeAetts.map((aettBlock) => {
            const aettRunes = runes.filter((r) => r.aett === aettBlock.aett);
            return (
              <section key={aettBlock.aett} className="border-t border-chalk/15 pt-10">
                <div className="max-w-3xl">
                  <p className="text-[10px] tracking-[0.22em] text-chalk/55 uppercase">
                    Elder Futhark · {ui.aettTag} {aettBlock.aett} / III
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-medium tracking-[-0.015em] text-chalk sm:text-4xl">
                    {aettBlock.title[lang]}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-chalk/75 sm:text-base sm:leading-7">
                    {aettBlock.summary[lang]}
                  </p>
                </div>

                <figure className="mt-6 overflow-hidden border border-chalk/15 bg-black/50">
                  <img
                    src={aettBlock.image}
                    alt={aettBlock.title[lang]}
                    className="h-auto w-full object-cover"
                    loading="lazy"
                  />
                </figure>

                <ul className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
                  {aettRunes.map((rune) => (
                    <li key={rune.slug}>
                      <Link
                        href={`/runler/${rune.slug}`}
                        className="card-slate group flex h-full min-h-48 flex-col justify-between border border-chalk/15 px-5 py-5 text-chalk transition-colors hover:border-chalk/45"
                      >
                        <div>
                          <div className="flex items-center justify-between text-[10px] tracking-[0.16em] text-chalk/50 uppercase">
                            <span>{String(rune.index).padStart(2, "0")} / XXIV</span>
                            <span>
                              {rune.protoGermanic} · [{rune.phoneme}]
                            </span>
                          </div>
                          <div className="mt-4 flex items-baseline gap-3.5">
                            <span
                              aria-hidden
                              className="font-display text-5xl leading-none text-chalk/90 transition-transform group-hover:scale-105"
                            >
                              {rune.glyph}
                            </span>
                            <span className="font-display text-2xl font-medium tracking-[0.01em] text-chalk">
                              {rune.name}
                            </span>
                          </div>
                          <p className="mt-3 text-xs leading-5 text-chalk/70">
                            {rune.subtitle[lang]}
                          </p>
                        </div>

                        <div className="mt-5 flex items-center justify-between border-t border-chalk/10 pt-3 text-[10px] tracking-[0.14em] text-chalk/55 uppercase group-hover:text-chalk/85">
                          <span className="truncate pr-2">{rune.element[lang]}</span>
                          <span aria-hidden>→</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <ScholarSeal context="runes" />
        <ShopBridge context="runes" />

        <Link
          href="/"
          className="mt-14 inline-block border border-chalk/30 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk uppercase"
        >
          {t.back}
        </Link>
      </main>
    </HallShell>
  );
}

export function RuneDoor({ slug }: { slug: string }) {
  const rune = runeBySlug(slug);
  if (!rune) return null;
  return <RuneDoorView rune={rune} />;
}

function RuneDoorView({ rune }: { rune: Rune }) {
  const { lang, t } = useLanguage();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const ui = LABELS[lang];

  const currentIdx = runes.findIndex((r) => r.slug === rune.slug);
  const prevRune = runes[(currentIdx - 1 + runes.length) % runes.length];
  const nextRune = runes[(currentIdx + 1) % runes.length];
  const aettInfo = runeAetts.find((a) => a.aett === rune.aett);

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">
          runeyard.net · Elder Futhark · {ui.aettTag} {rune.aett} ·{" "}
          {String(rune.index).padStart(2, "0")} / XXIV
        </p>

        <h1 className="mt-4 flex flex-wrap items-baseline gap-x-4 font-display text-5xl font-medium tracking-[-0.025em] sm:text-6xl">
          <span aria-hidden className="text-[0.95em] text-chalk/85">
            {rune.glyph}
          </span>
          <span>{rune.name}</span>
        </h1>

        <p className="mt-3 font-display text-xl text-chalk/75 italic sm:text-2xl">
          {rune.subtitle[lang]}
        </p>

        {/* Philological & Cosmological Metadata Grid */}
        <div className="mt-7 grid grid-cols-2 gap-3 border border-chalk/15 bg-chalk/[0.02] p-4 sm:grid-cols-4 sm:p-5">
          <div>
            <p className="text-[10px] tracking-[0.16em] text-chalk/50 uppercase">
              {ui.proto}
            </p>
            <p className="mt-1 font-display text-lg text-chalk/90">
              {rune.protoGermanic}
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.16em] text-chalk/50 uppercase">
              {ui.phoneme}
            </p>
            <p className="mt-1 font-display text-lg text-chalk/90">
              [{rune.phoneme}]
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.16em] text-chalk/50 uppercase">
              {ui.element}
            </p>
            <p className="mt-1 font-display text-base text-chalk/90">
              {rune.element[lang]}
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.16em] text-chalk/50 uppercase">
              {t.runes.names}
            </p>
            <p className="mt-1 font-display text-base text-chalk/90">
              {rune.deities.join(" · ")}
            </p>
          </div>
        </div>

        {/* Engraved Stone Plate */}
        <button
          type="button"
          onClick={() =>
            setLightbox({ src: rune.image, alt: `${rune.name} (${rune.protoGermanic})` })
          }
          className="mt-7 block w-full overflow-hidden border border-chalk/15 bg-black/50 text-left transition-colors hover:border-bronze/60"
        >
          <img
            src={rune.image}
            alt={`${rune.name} (${rune.protoGermanic})`}
            className="h-auto w-full object-cover"
            loading="eager"
          />
        </button>

        {/* Recorded Galdr Audio Player */}
        <GaldrPlayer
          slug={rune.slug}
          name={rune.name}
          glyph={rune.glyph}
          phoneme={rune.phoneme}
        />

        {/* Historical Rune Poem Stanza */}
        <blockquote className="mt-8 border-l-2 border-chalk/40 bg-chalk/[0.03] px-6 py-5">
          <p className="text-[10px] tracking-[0.18em] text-chalk/55 uppercase">
            {ui.poemBadge} · {rune.poem[lang].source}
          </p>
          <p className="mt-2 font-display text-lg leading-7 text-chalk/90 italic sm:text-xl">
            “{rune.poem[lang].quote}”
          </p>
        </blockquote>

        {/* Poetic Edda Hávamál Stanza & Birth Rune Solar Span */}
        {havamalBySlug[rune.slug] && (
          <blockquote className="mt-4 border-l-2 border-chalk/25 bg-black/35 px-6 py-5">
            <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] tracking-[0.18em] text-chalk/55 uppercase">
              <span>
                Poetic Edda · Hávamál ({lang === "tr" ? "Kıta" : lang === "sv" ? "Strof" : "Stanza"}{" "}
                {havamalBySlug[rune.slug].stanza})
              </span>
              <span>
                {lang === "tr"
                  ? "Güneş Döngüsü / Doğum Rünü:"
                  : lang === "sv"
                  ? "Solcykel / Födelseruna:"
                  : "Solar Cycle / Birth Rune:"}{" "}
                {havamalBySlug[rune.slug].birthSpan[lang]}
              </span>
            </div>
            <p className="mt-2 font-display text-lg leading-7 text-chalk/85 italic sm:text-xl">
              “{havamalBySlug[rune.slug].quote[lang]}”
            </p>
          </blockquote>
        )}

        {/* Core 4-Paragraph Archetypal & Cosmological Reading */}
        <section className="mt-10">
          <p className="text-[10px] tracking-[0.2em] text-chalk/55 uppercase">
            {ui.coreReading} · {aettInfo?.title[lang]}
          </p>
          <div className="mt-4 space-y-5">
            {rune.text[lang].map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-chalk/85">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Analytical Chapters (Philology + Upright/Shadow Flow) */}
        <div className="mt-12 space-y-8">
          {rune.chapters[lang].map((ch, idx) => (
            <section
              key={ch.heading}
              className="border border-chalk/15 bg-chalk/[0.02] p-6 sm:p-8"
            >
              <p className="text-[10px] tracking-[0.18em] text-chalk/50 uppercase">
                0{idx + 1} · {rune.name} ({rune.glyph})
              </p>
              <h2 className="mt-2 font-display text-2xl font-medium tracking-[0.01em] text-chalk">
                {ch.heading}
              </h2>
              <p className="mt-3 text-base leading-7 text-chalk/85">{ch.body}</p>
            </section>
          ))}
        </div>

        {/* 3-Step Galdr, Stöðul & Contemplation Practice */}
        <section className="mt-12 border border-chalk/25 bg-chalk/[0.03] p-5 sm:p-8">
          <h2 className="font-display text-2xl font-medium tracking-[0.01em] text-chalk">
            {rune.practice[lang].title}
          </h2>
          {rune.practiceImage && (
            <button
              type="button"
              onClick={() =>
                setLightbox({
                  src: rune.practiceImage!,
                  alt: rune.practice[lang].title,
                })
              }
              className="my-5 block w-full overflow-hidden border border-chalk/15 bg-ink/80 text-left transition-colors hover:border-bronze/60"
            >
              <div className="overflow-x-auto sm:overflow-visible">
                <img
                  src={rune.practiceImage}
                  alt={rune.practice[lang].title}
                  className="h-auto min-w-[580px] w-full object-cover sm:min-w-0"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between border-t border-chalk/10 bg-ink/85 px-3 py-1.5 text-[11px] text-chalk/65">
                <span>
                  {lang === "tr"
                    ? "🔍 Şemayı tam ekran incelemek için dokunun"
                    : lang === "sv"
                    ? "🔍 Tryck på schemat för helskärmsvisning"
                    : "🔍 Tap diagram to inspect full-screen"}
                </span>
                <span className="text-bronze sm:hidden">↔ Kaydır / Büyüt</span>
              </div>
            </button>
          )}
          <ol className="mt-5 space-y-4">
            {rune.practice[lang].steps.map((step, i) => (
              <li
                key={step}
                className="flex gap-3.5 text-base leading-7 text-chalk/85"
              >
                <span className="font-display text-sm tracking-[0.14em] text-chalk/55">
                  0{i + 1}.
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Closing Maxim */}
        <p className="mt-10 border-l border-chalk/30 pl-5 font-display text-xl leading-8 text-chalk/80 italic">
          “{rune.closing[lang]}”
        </p>

        <div className="mt-6">
          <SealCardGenerator
            filename={`runeyard-run-${rune.slug}`}
            badge={`ELDER FUTHARK · ${String(rune.index).padStart(2, "0")} / XXIV · AETT ${rune.aett}`}
            glyph={rune.glyph}
            title={`${rune.name} (${rune.protoGermanic})`}
            subtitle={rune.subtitle[lang]}
            body={rune.text[lang][0]}
            quote={rune.closing[lang]}
          />
        </div>

        <SymbolicTwins runeSlug={rune.slug} />

        <ScholarSeal context="runes" />
        <ShopBridge context="runes" />

        <ShareBar
          title={`${rune.glyph} ${rune.name} — ${rune.subtitle[lang]}`}
          path={`/runler/${rune.slug}`}
        />

        {/* Prev / All Runes / Next Navigation */}
        <nav
          aria-label="Rune navigation"
          className="mt-12 grid grid-cols-1 gap-3 border-t border-chalk/15 pt-8 sm:grid-cols-3"
        >
          <Link
            href={`/runler/${prevRune.slug}`}
            className="flex flex-col justify-between border border-chalk/20 px-4 py-3.5 text-left transition-colors hover:border-chalk/50"
          >
            <span className="text-[10px] tracking-[0.16em] text-chalk/50 uppercase">
              ← {ui.prevRune} ({String(prevRune.index).padStart(2, "0")}/24)
            </span>
            <span className="mt-1.5 font-display text-xl text-chalk">
              {prevRune.glyph} {prevRune.name}
            </span>
          </Link>

          <Link
            href="/runler"
            className="flex items-center justify-center border border-chalk/35 bg-chalk/[0.03] px-5 py-3.5 text-center font-display text-sm tracking-[0.14em] text-chalk uppercase transition-colors hover:border-chalk/60"
          >
            {t.backRunes}
          </Link>

          <Link
            href={`/runler/${nextRune.slug}`}
            className="flex flex-col justify-between border border-chalk/20 px-4 py-3.5 text-right transition-colors hover:border-chalk/50"
          >
            <span className="text-[10px] tracking-[0.16em] text-chalk/50 uppercase">
              {ui.nextRune} ({String(nextRune.index).padStart(2, "0")}/24) →
            </span>
            <span className="mt-1.5 font-display text-xl text-chalk">
              {nextRune.name} {nextRune.glyph}
            </span>
          </Link>
        </nav>
      </main>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-5xl overflow-auto border border-bronze/40 bg-ink p-2 sm:p-4"
          >
            <div className="mb-2 flex items-center justify-between gap-4 px-1">
              <p className="font-display text-sm text-chalk/90 sm:text-base">{lightbox.alt}</p>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="border border-chalk/25 bg-black/60 px-3 py-1 text-xs tracking-[0.15em] text-chalk uppercase hover:border-bronze"
              >
                ✕
              </button>
            </div>
            <div className="overflow-x-auto">
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="h-auto min-w-[680px] w-full object-contain sm:min-w-0"
              />
            </div>
          </div>
        </div>
      )}
    </HallShell>
  );
}
