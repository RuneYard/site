"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/language";
import { runes, type Rune } from "@/content/runes";

type CastMode = "single" | "norns";

type DrawnStone = {
  rune: Rune;
  reversed: boolean;
};

const SYMMETRIC_SLUGS = new Set([
  "gebo",
  "hagalaz",
  "nauthiz",
  "isa",
  "jera",
  "eihwaz",
  "sowilo",
  "ingwaz",
  "dagaz",
]);

const UI = {
  tr: {
    badge: "Kylver Kesesi · İnteraktif Rün Okuması",
    title: "Taş Çek & Üç Norn Açılımı",
    lead: "Niyetini zihninde netleştir, derin bir nefes ver ve keseden taş çek. Tek taş günün ya da sorunun merkez yasasını gösterir; Üç Norn açılımı ise Urðarbrunnr (Kader Kuyusu) başındaki üç zaman katmanını (Urðr · Verðandi · Skuld) birlikte açar.",
    modeSingle: "Tek Taş (Günün Rünü)",
    modeNorns: "Üç Norn Açılımı (Kök · Şimdi · Yön)",
    intentPlaceholder: "Niyetini veya sorunu buraya yazabilirsin (isteğe bağlı)...",
    castSingleBtn: "Keseden Tek Taş Çek",
    castNornsBtn: "Üç Norn Taşını Çek",
    recastBtn: "Taşları Keseye Koy & Yeniden Çek",
    uprightBadge: "Düz Akış · Heill",
    shadowBadge: "Gölge / Uyarı Akışı · Merkstave",
    symmetricBadge: "Simetrik Mühür · Merkez Akış",
    nornsPositions: [
      {
        tag: "I · URÐR (OLAN / KÖK)",
        desc: "Meselenin geçmişten taşıdığı tohum, hafıza ve değiştirilemez zemin",
      },
      {
        tag: "II · VERÐANDI (OLMAKTA OLAN / ŞİMDİ)",
        desc: "Şu anki eşik, uyanık olunması gereken sınav ve canlı karşılaşma",
      },
      {
        tag: "III · SKULD (OLMASI GEREKEN / YÖN)",
        desc: "Mevcut tutumun doğuracağı sonuç, sorumluluk ve açılan ufuk",
      },
    ],
    openDoor: "Rünün Taş Odasına İn →",
    appBridge: "Rune Yard Uygulaması →",
    courseBridge: "Rün Bilgelikleri Eğitimi →",
  },
  en: {
    badge: "Kylver Pouch · Interactive Rune Casting",
    title: "Draw a Stone & Three Norns Spread",
    lead: "Hold your intention clearly in mind, exhale slowly, and draw from the pouch. A single stone reveals the central law of the day or question; the Three Norns spread opens the three layers of time at the Well of Urðr (Urðr · Verðandi · Skuld).",
    modeSingle: "Single Stone (Rune of the Day)",
    modeNorns: "Three Norns Spread (Root · Present · Horizon)",
    intentPlaceholder: "Write your intention or question here (optional)...",
    castSingleBtn: "Draw Single Stone",
    castNornsBtn: "Cast Three Norn Stones",
    recastBtn: "Return Stones to Pouch & Draw Again",
    uprightBadge: "Upright Current · Heill",
    shadowBadge: "Shadow / Warning Current · Merkstave",
    symmetricBadge: "Symmetric Seal · Axis Current",
    nornsPositions: [
      {
        tag: "I · URÐR (WHAT HAS BECOME / ROOT)",
        desc: "The seed carried from the past, memory, and unalterable ground",
      },
      {
        tag: "II · VERÐANDI (WHAT IS BECOMING / THRESHOLD)",
        desc: "The active test, present threshold, and living encounter",
      },
      {
        tag: "III · SKULD (WHAT SHALL BE / HORIZON)",
        desc: "The debt, direction, and unfolding outcome of present action",
      },
    ],
    openDoor: "Enter Rune’s Stone Room →",
    appBridge: "Rune Yard App →",
    courseBridge: "Rune Wisdom Course →",
  },
  sv: {
    badge: "Kylverpåsen · Interaktiv Runläggning",
    title: "Dra en Sten & De Tre Nornornas Läggning",
    lead: "Håll din avsikt klar i sinnet, andas ut långsamt och dra ur påsen. En ensam sten visar dagens eller frågans centrala lag; De tre nornornas läggning öppnar de tre tidsskikten vid Urds brunn (Urðr · Verðandi · Skuld).",
    modeSingle: "Enkel Sten (Dagens Runa)",
    modeNorns: "Tre Nornor (Rot · Nu · Riktning)",
    intentPlaceholder: "Skriv din avsikt eller fråga här (valfritt)...",
    castSingleBtn: "Dra En Sten ur Påsen",
    castNornsBtn: "Kasta Tre Nornstenar",
    recastBtn: "Lägg Tillbaka Stenarna & Dra Igen",
    uprightBadge: "Rättvänd Ström · Heill",
    shadowBadge: "Skuggvänd Ström · Merkstave",
    symmetricBadge: "Symmetriskt Sigill · Axelström",
    nornsPositions: [
      {
        tag: "I · URÐR (DET SOM BLIVIT / ROT)",
        desc: "Fröet från det förflutna, minnet och den fasta grunden",
      },
      {
        tag: "II · VERÐANDI (DET SOM BLIR / NUET)",
        desc: "Den aktiva tröskeln, prövningen och mötet i nuet",
      },
      {
        tag: "III · SKULD (DET SOM SKALL BLI / RIKTNING)",
        desc: "Riktningen, ansvaret och frukten av nuvarande handling",
      },
    ],
    openDoor: "Stig in i Runans Stenrum →",
    appBridge: "Rune Yard App →",
    courseBridge: "Runvisdom Kurs →",
  },
} as const;

function drawUniqueRunes(count: number): DrawnStone[] {
  const pool = [...runes];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count).map((rune) => ({
    rune,
    reversed: !SYMMETRIC_SLUGS.has(rune.slug) && Math.random() < 0.32,
  }));
}

export function RuneCast() {
  const { lang } = useLanguage();
  const ui = UI[lang];
  const [mode, setMode] = useState<CastMode>("single");
  const [intent, setIntent] = useState("");
  const [drawn, setDrawn] = useState<DrawnStone[] | null>(null);

  function handleCast(targetMode: CastMode = mode) {
    const count = targetMode === "single" ? 1 : 3;
    setDrawn(drawUniqueRunes(count));
  }

  function switchMode(nextMode: CastMode) {
    setMode(nextMode);
    setDrawn(null);
  }

  return (
    <section className="mt-10 border border-chalk/20 bg-chalk/[0.025] p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-[10px] tracking-[0.22em] text-chalk/55 uppercase">
          {ui.badge}
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => switchMode("single")}
            className={`border px-3.5 py-1.5 font-display text-xs tracking-[0.14em] uppercase transition-colors ${
              mode === "single"
                ? "border-chalk/60 bg-chalk/[0.09] text-chalk"
                : "border-chalk/15 text-chalk/60 hover:border-chalk/35 hover:text-chalk"
            }`}
          >
            {ui.modeSingle}
          </button>
          <button
            type="button"
            onClick={() => switchMode("norns")}
            className={`border px-3.5 py-1.5 font-display text-xs tracking-[0.14em] uppercase transition-colors ${
              mode === "norns"
                ? "border-chalk/60 bg-chalk/[0.09] text-chalk"
                : "border-chalk/15 text-chalk/60 hover:border-chalk/35 hover:text-chalk"
            }`}
          >
            {ui.modeNorns}
          </button>
        </div>
      </div>

      <h2 className="mt-4 font-display text-2xl font-medium tracking-[-0.015em] text-chalk sm:text-3xl">
        {ui.title}
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-chalk/75">
        {ui.lead}
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={intent}
          onChange={(e) => setIntent(e.target.value)}
          placeholder={ui.intentPlaceholder}
          className="flex-1 border border-chalk/20 bg-black/40 px-4 py-2.5 text-sm text-chalk placeholder:text-chalk/40 focus:border-chalk/55 focus:outline-none"
        />
        <button
          type="button"
          onClick={() => handleCast(mode)}
          className="border border-chalk/50 bg-chalk/[0.08] px-6 py-2.5 font-display text-xs tracking-[0.18em] text-chalk uppercase transition-colors hover:border-chalk hover:bg-chalk/[0.14]"
        >
          {drawn
            ? ui.recastBtn
            : mode === "single"
            ? ui.castSingleBtn
            : ui.castNornsBtn}
        </button>
      </div>

      {drawn && (
        <div className="mt-8 border-t border-chalk/15 pt-6">
          {intent.trim() && (
            <p className="mb-5 font-display text-base text-chalk/75 italic">
              “{intent.trim()}”
            </p>
          )}

          <div
            className={`grid gap-4 ${
              drawn.length === 3 ? " lg:grid-cols-3" : "max-w-2xl"
            }`}
          >
            {drawn.map((item, idx) => {
              const { rune, reversed } = item;
              const isSymmetric = SYMMETRIC_SLUGS.has(rune.slug);
              const flowChapter = rune.chapters[lang][1]?.body ?? "";
              const parts = flowChapter.split(" — ");
              const activeFlowText = reversed
                ? parts[1] ?? flowChapter
                : parts[0] ?? flowChapter;

              return (
                <article
                  key={rune.slug}
                  className="card-slate flex flex-col justify-between border border-chalk/20 bg-black/45 p-5"
                >
                  <div>
                    {drawn.length === 3 && (
                      <div className="mb-4 border-b border-chalk/12 pb-3">
                        <p className="text-[10px] tracking-[0.18em] text-chalk/75 uppercase">
                          {ui.nornsPositions[idx].tag}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-chalk/55">
                          {ui.nornsPositions[idx].desc}
                        </p>
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-2 text-[10px] tracking-[0.16em] text-chalk/50 uppercase">
                      <span>
                        {String(rune.index).padStart(2, "0")} / XXIV · Aett {rune.aett}
                      </span>
                      <span className="border border-chalk/20 px-2 py-0.5 text-chalk/80">
                        {isSymmetric
                          ? ui.symmetricBadge
                          : reversed
                          ? ui.shadowBadge
                          : ui.uprightBadge}
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-4">
                      <span
                        aria-hidden
                        className={`inline-block font-display text-6xl leading-none text-chalk transition-transform ${
                          reversed ? "rotate-180 text-chalk/75" : ""
                        }`}
                      >
                        {rune.glyph}
                      </span>
                      <div>
                        <h3 className="font-display text-3xl font-medium text-chalk">
                          {rune.name}
                        </h3>
                        <p className="mt-0.5 font-display text-sm text-chalk/70 italic">
                          {rune.subtitle[lang]}
                        </p>
                      </div>
                    </div>

                    <blockquote className="mt-4 border-l border-chalk/25 pl-3 font-display text-sm text-chalk/80 italic">
                      {rune.poem[lang].quote}
                      <span className="mt-1 block text-[10px] tracking-[0.14em] text-chalk/45 not-italic uppercase">
                        — {rune.poem[lang].source}
                      </span>
                    </blockquote>

                    <p className="mt-4 text-xs leading-5 text-chalk/80">
                      {rune.text[lang][0]}
                    </p>

                    {activeFlowText && (
                      <p className="mt-3 border-t border-chalk/10 pt-3 text-xs leading-5 text-chalk/90">
                        {activeFlowText}
                      </p>
                    )}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-chalk/12 pt-3">
                    <Link
                      href={`/runler/${rune.slug}`}
                      className="font-display text-xs tracking-[0.14em] text-chalk uppercase hover:underline"
                    >
                      {ui.openDoor}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-chalk/10 pt-4 text-xs">
            <Link
              href="/uygulamalar/rune-yard"
              className="font-display tracking-[0.14em] text-chalk/70 uppercase transition-colors hover:text-chalk"
            >
              {ui.appBridge}
            </Link>
            <span className="text-chalk/25">·</span>
            <Link
              href="/egitim/rune-bilgeligi"
              className="font-display tracking-[0.14em] text-chalk/70 uppercase transition-colors hover:text-chalk"
            >
              {ui.courseBridge}
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
