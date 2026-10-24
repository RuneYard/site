"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/language";
import { runes, type Rune } from "@/content/runes";

type SpreadMode = "single" | "norns";

const UI = {
  tr: {
    badge: "İNTERAKTİF KUZEY TAŞ MASASI · ELDER FUTHARK",
    title: "Kese ve Taş: Tek Rün & Üçlü Norns Açılımı",
    subtitle:
      "Tacitus’un Germania (MS 98) kaydında aktardığı kadim kuzey geleneğiyle niyetini tut; keseden Tek Rün veya Üçlü Norns (Urðr · Verðandi · Skuld) taşlarını çek.",
    modeSingle: "Tek Rün (Niyet / Günün Taşı)",
    modeNorns: "Üçlü Norns (Urðr · Verðandi · Skuld)",
    intentionPlaceholder: "İsteğe bağlı: Niyetini veya sorunun özünü buraya yaz...",
    drawBtn: "Keseden Rün Taşı Çek ᚠ",
    redrawBtn: "Keseyi Karıştır ve Yeniden Çek ↻",
    enterRoom: "Rün Odasına ve Şemasına Git →",
    positions: {
      single: "NİYETİN VE EŞİĞİN TAŞI",
      urd: "I · URÐR — Kök, Geçmişin Mirası ve Zemin",
      verdandi: "II · VERÐANDI — Şimdi, Oluş ve Odaklanılacak Eylem",
      skuld: "III · SKULD — Eşik, Sorumluluk ve Açılan Yön",
    },
    appBridgeBadge: "MOBİL UYGULAMAYA ÖZEL · RUNE YARD",
    appBridgeTitle: "Kişisel Bindrune (Bağlama Rün) Tılsımı ve Günlük Rün Defteri",
    appBridgeBody:
      "İki veya daha fazla rünü tek bir geometrik mühürde birleştiren Bindrune (Bağlama Rün) tasarım aracı yalnızca Rune Yard mobil uygulamasına özeldir.",
    appBridgeCta: "Rune Yard Uygulamasını İncele & İndir →",
  },
  en: {
    badge: "INTERACTIVE NORTHERN STONE TABLE · ELDER FUTHARK",
    title: "Pouch & Stone: Single Rune & Three Norns Casting",
    subtitle:
      "Hold your intention in stillness and draw either a Single Rune or the Three Norns spread (Urðr · Verðandi · Skuld) from the 24 Elder Futhark stones.",
    modeSingle: "Single Rune (Daily / Focus Stone)",
    modeNorns: "Three Norns (Urðr · Verðandi · Skuld)",
    intentionPlaceholder: "Optional: Write the core of your question or intention...",
    drawBtn: "Draw Rune Stones from the Pouch ᚠ",
    redrawBtn: "Return Stones to Pouch & Draw Again ↻",
    enterRoom: "Enter Rune Room & Blueprint →",
    positions: {
      single: "THE STONE OF YOUR THRESHOLD",
      urd: "I · URÐR — Root, Origin, and Underlying Foundation",
      verdandi: "II · VERÐANDI — Present Becoming and Immediate Action",
      skuld: "III · SKULD — Threshold, Duty, and Emerging Direction",
    },
    appBridgeBadge: "EXCLUSIVE TO MOBILE APP · RUNE YARD",
    appBridgeTitle: "Personal Bindrune Studio & Daily Runic Journal",
    appBridgeBody:
      "Crafting custom geometric Bindrunes (combining multiple staves into a single personal seal) is reserved exclusively for the Rune Yard mobile application.",
    appBridgeCta: "Explore & Download Rune Yard App →",
  },
  sv: {
    badge: "INTERAKTIVT NORDISKT STENBORD · ÄLDRE FUTHARK",
    title: "Påse & Sten: Enkel Runa & De Tre Nornornas Kast",
    subtitle:
      "Håll din avsikt i stillhet och dra antingen en Enkel Runa eller de Tre Nornornas läggning (Urðr · Verðandi · Skuld) ur de 24 stenarna.",
    modeSingle: "Enkel Runa (Dagens / Fokussten)",
    modeNorns: "Tre Nornor (Urðr · Verðandi · Skuld)",
    intentionPlaceholder: "Valfritt: Skriv kärnan i din fråga eller avsikt...",
    drawBtn: "Dra Runstenar ur Påsen ᚠ",
    redrawBtn: "Blanda Stenarna & Dra Igen ↻",
    enterRoom: "Gå till Runrummet & Schemat →",
    positions: {
      single: "DIN TRÖSKELS RUNSTEN",
      urd: "I · URÐR — Rot, Ursprung och Grund",
      verdandi: "II · VERÐANDI — Nuets Tillblivelse och Handling",
      skuld: "III · SKULD — Tröskel, Ansvar och Riktning",
    },
    appBridgeBadge: "EXKLUSIVT I MOBILAPPEN · RUNE YARD",
    appBridgeTitle: "Personlig Bindruneverkstad & Daglig Runbok",
    appBridgeBody:
      "Verktyget för att skapa personliga Bindrunor (att förena flera runstavar till ett sigill) finns exklusivt i mobilappen Rune Yard.",
    appBridgeCta: "Utforska & Ladda ner Rune Yard →",
  },
} as const;

export function RuneOracle() {
  const { lang } = useLanguage();
  const ui = UI[lang];

  const [mode, setMode] = useState<SpreadMode>("norns");
  const [intention, setIntention] = useState("");
  const [drawn, setDrawn] = useState<Rune[]>([]);

  function drawRunes(targetMode: SpreadMode = mode) {
    const pool = [...runes];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const count = targetMode === "single" ? 1 : 3;
    setDrawn(pool.slice(0, count));
  }

  const positionLabels =
    mode === "single"
      ? [ui.positions.single]
      : [ui.positions.urd, ui.positions.verdandi, ui.positions.skuld];

  return (
    <section
      aria-label={ui.title}
      className="mt-10 border border-amber/40 bg-soot/65 p-5 sm:p-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-[10px] font-semibold tracking-[0.22em] text-amber uppercase">
          ✦ {ui.badge}
        </span>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              setMode("single");
              setDrawn([]);
            }}
            className={`px-3 py-1.5 text-[11px] tracking-[0.16em] uppercase transition ${
              mode === "single"
                ? "border border-amber bg-amber text-ink font-semibold"
                : "border border-chalk/20 bg-ink/60 text-chalk/75 hover:border-amber/50"
            }`}
          >
            {ui.modeSingle}
          </button>
          <button
            type="button"
            onClick={() => {
              setMode("norns");
              setDrawn([]);
            }}
            className={`px-3 py-1.5 text-[11px] tracking-[0.16em] uppercase transition ${
              mode === "norns"
                ? "border border-amber bg-amber text-ink font-semibold"
                : "border border-chalk/20 bg-ink/60 text-chalk/75 hover:border-amber/50"
            }`}
          >
            {ui.modeNorns}
          </button>
        </div>
      </div>

      <h2 className="mt-3 font-display text-2xl sm:text-3xl text-chalk">
        {ui.title}
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-chalk/75">
        {ui.subtitle}
      </p>

      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={intention}
          onChange={(e) => setIntention(e.target.value)}
          placeholder={ui.intentionPlaceholder}
          className="flex-1 border border-chalk/20 bg-ink/80 px-4 py-3 text-sm text-chalk placeholder:text-chalk/40 focus:border-amber focus:outline-none"
        />
        <button
          type="button"
          onClick={() => drawRunes(mode)}
          className="border border-[#e5be73] bg-[#d4a857] px-6 py-3 text-xs font-bold tracking-[0.2em] text-[#141a1c] uppercase shadow-[0_2px_14px_rgba(212,168,87,0.3)] hover:bg-[#e5be73] transition"
        >
          {drawn.length > 0 ? ui.redrawBtn : ui.drawBtn}
        </button>
      </div>

      {drawn.length > 0 && (
        <div
          className={`mt-8 grid grid-cols-1 gap-5 ${
            drawn.length === 3 ? "lg:grid-cols-3" : "max-w-2xl"
          }`}
        >
          {drawn.map((rune, idx) => (
            <article
              key={rune.slug}
              className="flex flex-col justify-between border border-amber/35 bg-ink/75 p-5"
            >
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] text-amber uppercase border-b border-chalk/12 pb-2.5">
                  {positionLabels[idx]}
                </p>

                <div className="mt-4 flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-16 w-16 shrink-0 items-center justify-center border border-amber/45 bg-soot font-display text-4xl text-amber"
                  >
                    {rune.glyph}
                  </span>
                  <div>
                    <p className="text-[10px] tracking-[0.18em] text-chalk/55 uppercase">
                      {String(rune.index).padStart(2, "0")} · {rune.protoGermanic} · [{rune.phoneme}]
                    </p>
                    <h3 className="font-display text-2xl text-chalk">
                      {rune.name}
                    </h3>
                    <p className="text-xs text-amber/85">
                      {rune.subtitle[lang]}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm leading-6 text-chalk/82">
                  {rune.text[lang][0]}
                </p>

                <div className="mt-4 border-t border-chalk/10 pt-3">
                  <p className="text-[10px] tracking-[0.18em] text-amber/90 uppercase">
                    {rune.practice[lang].title}
                  </p>
                  <p className="mt-1.5 text-xs leading-5 text-chalk/70">
                    {rune.practice[lang].steps[idx % rune.practice[lang].steps.length]}
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-chalk/12 pt-3">
                <Link
                  href={`/runler/${rune.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.18em] text-amber uppercase hover:underline"
                >
                  <span>
                    {rune.glyph} {ui.enterRoom}
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Exclusive Mobile App Bridge for Bindrune */}
      <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-chalk/15 bg-ink/60 p-4 sm:p-5">
        <div>
          <span className="text-[10px] tracking-[0.2em] text-amber uppercase">
            ⌘ {ui.appBridgeBadge}
          </span>
          <h3 className="mt-1 font-display text-lg text-chalk">
            {ui.appBridgeTitle}
          </h3>
          <p className="mt-1 text-xs leading-5 text-chalk/70 max-w-2xl">
            {ui.appBridgeBody}
          </p>
        </div>
        <Link
          href="/uygulamalar/rune-yard"
          className="shrink-0 border border-amber/60 bg-amber/12 px-4 py-2.5 text-xs font-medium tracking-[0.18em] text-amber uppercase hover:bg-amber hover:text-ink transition text-center"
        >
          {ui.appBridgeCta}
        </Link>
      </div>
    </section>
  );
}
