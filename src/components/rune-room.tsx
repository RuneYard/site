"use client";

import { useMemo, useState } from "react";
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
    prevRune: "Önceki Rune",
    nextRune: "Sonraki Rune",
    quickJump: "24 Elder Futhark Rune Hızlı Geçit Çemberi",
    seoTitle: "Rune (Rün) Alfabesi · 24 Elder Futhark Sembolleri ve Anlamları",
    tableHeading: "24 Elder Futhark Rune (Rün) Alfabesi, Harf Karşılıkları ve Anlamları Tablosu",
    faqHeading: "Rune (Rün) Nedir? Sıkça Sorulan Sorular ve Okuma Rehberi",
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
    seoTitle: "Elder Futhark Runes · The 24 Sacred Symbols & Meanings",
    tableHeading: "Complete 24 Elder Futhark Runes Reference Table (Phonemes, Roots & Meanings)",
    faqHeading: "What Are Runes? Frequently Asked Questions & Study Guide",
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
    seoTitle: "Äldre Futhark Runor · De 24 Tecknen och Deras Betydelser",
    tableHeading: "Tabell över de 24 Runorna i Äldre Futhark (Ljudvärden, Rötter & Betydelser)",
    faqHeading: "Vad Är Runor? Vanliga Frågor & Läsvägledning",
  },
} as const;

export function RuneSheet() {
  const { lang, t } = useLanguage();
  const ui = LABELS[lang];

  const [activeTool, setActiveTool] = useState<"catalog" | "cast" | "transliterate" | "table">(
    "catalog",
  );
  const [selectedAett, setSelectedAett] = useState<number | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRunes = useMemo(() => {
    const q = searchQuery.trim().toLocaleLowerCase("tr");
    return runes.filter((r) => {
      if (selectedAett !== "all" && r.aett !== selectedAett) return false;
      if (!q) return true;
      const hay = `${r.index} ${r.name} ${r.protoGermanic} ${r.phoneme} ${r.subtitle[lang]} ${r.element[lang]} ${r.deities.join(" ")}`.toLocaleLowerCase(
        "tr",
      );
      return hay.includes(q);
    });
  }, [selectedAett, searchQuery, lang]);

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-5xl px-4 py-8 sm:px-8 sm:py-14">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">
          runeyard.net · Elder Futhark · XXIV Rune (Rün) Külliyatı
        </p>
        <h1 className="mt-3 font-display text-3xl font-medium tracking-[-0.025em] sm:text-5xl">
          {ui.seoTitle}
        </h1>
        <p className="mt-2.5 max-w-2xl font-display text-lg sm:text-xl text-chalk/75 italic">
          {runeHallIntro.subtitle[lang]}
        </p>

        <figure className="mt-6 overflow-hidden border border-chalk/15 bg-black/50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={runeHallIntro.image}
            alt={ui.seoTitle}
            className="h-auto w-full object-cover"
            loading="eager"
          />
        </figure>

        {/* Interactive Mode & Study Switcher */}
        <div className="mt-7 border border-amber/30 bg-black/45 p-3 sm:p-4">
          <p className="text-[10px] tracking-[0.2em] text-amber/85 uppercase">
            {lang === "en"
              ? "Rune Hall Study Modes & Interactive Tools"
              : lang === "sv"
                ? "Runhallens Studielägen & Interaktiva Verktyg"
                : "Rune Salonu Çalışma Modları & İnteraktif Araçlar"}
          </p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveTool("catalog")}
              className={`border px-3.5 py-2 text-xs tracking-[0.06em] transition-colors ${
                activeTool === "catalog"
                  ? "border-amber bg-amber/20 text-amber font-medium"
                  : "border-chalk/20 bg-ink/80 text-chalk/75 hover:border-chalk/45"
              }`}
            >
              {lang === "en"
                ? "📜 24 Runes Catalog (3 Aettir)"
                : lang === "sv"
                  ? "📜 24 Runor Katalog (3 Ättir)"
                  : "📜 24 Rune Kataloğu (3 Aett)"}
            </button>
            <button
              type="button"
              onClick={() => setActiveTool("cast")}
              className={`border px-3.5 py-2 text-xs tracking-[0.06em] transition-colors ${
                activeTool === "cast"
                  ? "border-amber bg-amber/20 text-amber font-medium"
                  : "border-chalk/20 bg-ink/80 text-chalk/75 hover:border-chalk/45"
              }`}
            >
              {lang === "en"
                ? "🎲 Draw Runes (Three Norns Cast)"
                : lang === "sv"
                  ? "🎲 Dra Runor (De Tre Nornorna)"
                  : "🎲 Rune Taşı Çek (Üç Norn Açılımı)"}
            </button>
            <button
              type="button"
              onClick={() => setActiveTool("transliterate")}
              className={`border px-3.5 py-2 text-xs tracking-[0.06em] transition-colors ${
                activeTool === "transliterate"
                  ? "border-amber bg-amber/20 text-amber font-medium"
                  : "border-chalk/20 bg-ink/80 text-chalk/75 hover:border-chalk/45"
              }`}
            >
              {lang === "en"
                ? "✒️ Write Your Name in Runes"
                : lang === "sv"
                  ? "✒️ Skriv Ditt Namn med Runor"
                  : "✒️ Adını Rune Alfabesiyle Yaz"}
            </button>
            <button
              type="button"
              onClick={() => setActiveTool("table")}
              className={`border px-3.5 py-2 text-xs tracking-[0.06em] transition-colors ${
                activeTool === "table"
                  ? "border-amber bg-amber/20 text-amber font-medium"
                  : "border-chalk/20 bg-ink/80 text-chalk/75 hover:border-chalk/45"
              }`}
            >
              {lang === "en"
                ? "📊 24 Runes Meaning Table & FAQ"
                : lang === "sv"
                  ? "📊 24 Runor Tabell & FAQ"
                  : "📊 24 Rune Anlam Tablosu & SSS"}
            </button>
          </div>
        </div>

        {/* Active Interactive Tool */}
        {activeTool === "cast" && <RuneCast />}
        {activeTool === "transliterate" && <RuneTransliterator />}

        {/* Quick 24-Rune Strip */}
        <section className="mt-7 border border-chalk/15 bg-chalk/[0.02] p-4 sm:p-5">
          <p className="text-[10px] tracking-[0.2em] text-chalk/55 uppercase">
            {ui.quickJump}
          </p>
          <div className="mt-3 grid grid-cols-6 gap-1.5 sm:grid-cols-8 md:grid-cols-12">
            {runes.map((rune) => (
              <Link
                key={rune.slug}
                href={`/runler/${rune.slug}`}
                title={`${String(rune.index).padStart(2, "0")} · ${rune.name} (${rune.protoGermanic})`}
                className="group flex flex-col items-center justify-center border border-chalk/10 bg-black/30 py-2 transition-colors hover:border-amber/50 hover:bg-chalk/[0.06]"
              >
                <span className="font-display text-2xl leading-none text-chalk/85 group-hover:text-amber">
                  {rune.glyph}
                </span>
                <span className="mt-1 text-[9px] tracking-[0.06em] text-chalk/55 uppercase group-hover:text-chalk/90">
                  {rune.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Aett Filter + Search Bar */}
        <div className="mt-8 flex flex-col gap-3 border-b border-chalk/15 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
            <button
              type="button"
              onClick={() => setSelectedAett("all")}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-xs transition-colors ${
                selectedAett === "all"
                  ? "border-amber bg-amber/20 text-amber font-medium"
                  : "border-chalk/15 bg-black/35 text-chalk/70 hover:border-chalk/35"
              }`}
            >
              {lang === "en" ? "All 24 Runes" : lang === "sv" ? "Alla 24 Runor" : "Tümü (24 Rune)"}
            </button>
            {[1, 2, 3].map((aettNum) => (
              <button
                key={aettNum}
                type="button"
                onClick={() => setSelectedAett(aettNum)}
                className={`shrink-0 rounded-full border px-3 py-1.5 text-xs transition-colors ${
                  selectedAett === aettNum
                    ? "border-amber bg-amber/20 text-amber font-medium"
                    : "border-chalk/15 bg-black/35 text-chalk/70 hover:border-chalk/35"
                }`}
              >
                {aettNum}. Aett ({(aettNum - 1) * 8 + 1}–{aettNum * 8})
              </button>
            ))}
          </div>

          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              lang === "en"
                ? "Search rune name, letter, meaning..."
                : lang === "sv"
                  ? "Sök runnamn, ljud, betydelse..."
                  : "Rune adı, harf veya anlam ara (Örn: Fehu, Korunma)..."
            }
            className="w-full sm:w-72 border border-chalk/25 bg-black/50 px-3.5 py-1.5 text-xs text-chalk placeholder:text-chalk/40 focus:border-amber focus:outline-none"
          />
        </div>

        {/* Three Aettir Sections */}
        <div className="mt-8 space-y-14">
          {runeAetts
            .filter((a) => selectedAett === "all" || a.aett === selectedAett)
            .map((aettBlock) => {
              const aettRunes = filteredRunes.filter((r) => r.aett === aettBlock.aett);
              if (aettRunes.length === 0) return null;
              return (
                <section key={aettBlock.aett} className="border-t border-chalk/12 pt-8 first:border-t-0 first:pt-0">
                  <div className="max-w-3xl">
                    <p className="text-[10px] tracking-[0.22em] text-amber/80 uppercase">
                      Elder Futhark · {ui.aettTag} {aettBlock.aett} / III
                    </p>
                    <h2 className="mt-1.5 font-display text-2xl font-medium tracking-[-0.015em] text-chalk sm:text-4xl">
                      {aettBlock.title[lang]}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-chalk/75 sm:text-base sm:leading-7">
                      {aettBlock.summary[lang]}
                    </p>
                  </div>

                  <ul className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
                    {aettRunes.map((rune) => (
                      <li key={rune.slug}>
                        <Link
                          href={`/runler/${rune.slug}`}
                          className="card-slate group flex h-full min-h-44 flex-col justify-between border border-chalk/15 px-4 py-4 text-chalk transition-colors hover:border-amber/50 sm:px-5 sm:py-5"
                        >
                          <div>
                            <div className="flex items-center justify-between text-[10px] tracking-[0.16em] text-chalk/50 uppercase">
                              <span>{String(rune.index).padStart(2, "0")} / XXIV</span>
                              <span>
                                {rune.protoGermanic} · [{rune.phoneme}]
                              </span>
                            </div>
                            <div className="mt-3.5 flex items-baseline gap-3">
                              <span
                                aria-hidden
                                className="font-display text-4xl sm:text-5xl leading-none text-amber/90 transition-transform group-hover:scale-105"
                              >
                                {rune.glyph}
                              </span>
                              <span className="font-display text-2xl font-medium tracking-[0.01em] text-chalk group-hover:text-amber transition-colors">
                                {rune.name}
                              </span>
                            </div>
                            <p className="mt-2.5 text-xs leading-5 text-chalk/70">
                              {rune.subtitle[lang]}
                            </p>
                          </div>

                          <div className="mt-4 flex items-center justify-between border-t border-chalk/10 pt-2.5 text-[10px] tracking-[0.14em] text-chalk/55 uppercase group-hover:text-amber">
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

        {/* Intro Text + Complete 24 Elder Futhark SEO Reference Table & FAQ */}
        <section className="mt-14 border-t border-chalk/15 pt-10">
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-chalk">
            {ui.tableHeading}
          </h2>
          <div className="mt-4 max-w-3xl space-y-3">
            {runeHallIntro.paragraphs[lang].map((p) => (
              <p key={p} className="text-sm sm:text-base leading-7 text-chalk/80">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-6 overflow-x-auto border border-chalk/15 bg-black/40">
            <table className="w-full min-w-[640px] border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-chalk/15 bg-chalk/[0.04] text-[10px] tracking-[0.16em] text-amber uppercase">
                  <th className="px-3 py-2.5">#</th>
                  <th className="px-3 py-2.5">Sembol</th>
                  <th className="px-3 py-2.5">Rune (Rün) Adı</th>
                  <th className="px-3 py-2.5">Ses / Harf</th>
                  <th className="px-3 py-2.5">Aett</th>
                  <th className="px-3 py-2.5">Temel Anlamı & Arketipi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-chalk/10">
                {runes.map((r) => (
                  <tr key={r.slug} className="hover:bg-chalk/[0.03]">
                    <td className="px-3 py-2 font-mono text-xs text-chalk/55">
                      {String(r.index).padStart(2, "0")}
                    </td>
                    <td className="px-3 py-2 font-display text-2xl text-amber">{r.glyph}</td>
                    <td className="px-3 py-2 font-medium text-chalk">
                      <Link href={`/runler/${r.slug}`} className="hover:text-amber hover:underline">
                        {r.name} ({r.protoGermanic})
                      </Link>
                    </td>
                    <td className="px-3 py-2 font-mono text-xs text-chalk/75">[{r.phoneme}]</td>
                    <td className="px-3 py-2 text-xs text-chalk/65">{r.aett}. Aett</td>
                    <td className="px-3 py-2 text-chalk/80">{r.subtitle[lang]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Rune FAQ Section for Google Featured Snippets */}
        <section className="mt-12 border-t border-chalk/15 pt-10">
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-chalk">
            {ui.faqHeading}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="border border-chalk/15 bg-black/35 p-4 sm:p-5">
              <h3 className="font-display text-lg font-medium text-amber">
                Rune (Rün) nedir ve kökeni nereye dayanır?
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-chalk/80">
                Rune (Türkçe okunuşuyla Rün), Proto-Cermen <em>*rūnō</em> kökünden gelir ve “sır, fısıltı, gizli bilgelik ve oyulmuş işaret” demektir. En eski ve eksiksiz sistemi MS 1.–8. yüzyıllar arasında kullanılan 24 sembollü <strong>Elder Futhark (Eski Futhark)</strong> rune alfabesidir.
              </p>
            </article>
            <article className="border border-chalk/15 bg-black/35 p-4 sm:p-5">
              <h3 className="font-display text-lg font-medium text-amber">
                Elder Futhark rune alfabesi kaç harftir ve Üç Aett nedir?
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-chalk/80">
                Elder Futhark toplam <strong>24 rune</strong> sembolünden oluşur ve 8’erli üç aileye (<strong>Aett</strong>) ayrılır: <strong>1. Freyr Aett</strong> (Fehu–Wunjo: varoluş ve bereket), <strong>2. Hagal Aett</strong> (Hagalaz–Sowilo: sınav ve dönüşüm), <strong>3. Tyr Aett</strong> (Tiwaz–Othala: adalet, bilgelik ve miras).
              </p>
            </article>
            <article className="border border-chalk/15 bg-black/35 p-4 sm:p-5">
              <h3 className="font-display text-lg font-medium text-amber">
                Rune taşları nasıl okunur? Üç Norn açılımı nasıl yapılır?
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-chalk/80">
                Geleneksel rune okumasında kese içinden niyet edilerek bir veya üç taş çekilir. <strong>Üç Norn Açılımı</strong>nda 1. taş <em>Urðr</em> (geçmişin kökü), 2. taş <em>Verðandi</em> (şimdiki eşik), 3. taş <em>Skuld</em> (doğmakta olan yönelim) olarak okunur. Yukarıdaki <strong>“Rune Taşı Çek”</strong> sekmesinden canlı uygulayabilirsiniz.
              </p>
            </article>
            <article className="border border-chalk/15 bg-black/35 p-4 sm:p-5">
              <h3 className="font-display text-lg font-medium text-amber">
                Rune alfabesiyle isim nasıl yazılır?
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-chalk/80">
                Tarihsel rune yazıtlarında kelimeler harf-harf değil, <strong>ses-ses (fonetik olarak)</strong> oyulur ve yan yana gelen çift harfler tek rune ile gösterilir. Yukarıdaki <strong>“Adını Rune Alfabesiyle Yaz”</strong> sekmesinden isminizin Elder Futhark karşılığını anında oluşturabilirsiniz.
              </p>
            </article>
          </div>
        </section>

        <ScholarSeal context="runes" />
        <ShopBridge context="runes" />

        <Link
          href="/"
          className="mt-10 inline-block border border-chalk/30 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk uppercase"
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
  const [showAllRunes, setShowAllRunes] = useState(false);
  const ui = LABELS[lang];

  const currentIdx = runes.findIndex((r) => r.slug === rune.slug);
  const prevRune = runes[(currentIdx - 1 + runes.length) % runes.length];
  const nextRune = runes[(currentIdx + 1) % runes.length];
  const aettInfo = runeAetts.find((a) => a.aett === rune.aett);

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-3xl px-4 py-8 sm:px-8 sm:py-16">
        {/* Top Breadcrumb + Quick 24-Rune Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-chalk/12 pb-3">
          <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-chalk/60 uppercase">
            <Link href="/runler" className="hover:text-amber">
              ← Elder Futhark
            </Link>
            <span>·</span>
            <span className="text-amber/85">
              {ui.aettTag} {rune.aett} · {String(rune.index).padStart(2, "0")} / XXIV
            </span>
          </div>

          <button
            type="button"
            onClick={() => setShowAllRunes((prev) => !prev)}
            className="border border-chalk/20 bg-black/40 px-3 py-1 text-[10px] tracking-[0.16em] text-chalk/80 uppercase hover:border-amber/60 hover:text-amber"
          >
            24 Rune Hızlı Geçiş ▾
          </button>
        </div>

        {showAllRunes && (
          <div className="mt-3 grid grid-cols-4 gap-1.5 border border-amber/30 bg-ink/95 p-3 sm:grid-cols-6">
            {runes.map((r) => (
              <Link
                key={r.slug}
                href={`/runler/${r.slug}`}
                onClick={() => setShowAllRunes(false)}
                className={`flex items-center gap-2 px-2.5 py-1.5 text-xs ${
                  r.slug === rune.slug
                    ? "border border-amber bg-amber/20 text-amber font-medium"
                    : "border border-chalk/10 bg-black/30 text-chalk/75 hover:border-chalk/35"
                }`}
              >
                <span className="font-display text-lg text-amber">{r.glyph}</span>
                <span className="truncate">{r.name}</span>
              </Link>
            ))}
          </div>
        )}

        <h1 className="mt-5 flex flex-wrap items-baseline gap-x-4 font-display text-4xl font-medium tracking-[-0.025em] sm:text-6xl">
          <span aria-hidden className="text-[0.95em] text-amber">
            {rune.glyph}
          </span>
          <span>
            {rune.name}{" "}
            <span className="text-2xl sm:text-3xl text-chalk/60 font-normal">
              Rune (Rünü)
            </span>
          </span>
        </h1>

        <p className="mt-2.5 font-display text-lg text-chalk/75 italic sm:text-2xl">
          {rune.subtitle[lang]}
        </p>

        {/* Philological & Cosmological Metadata Grid */}
        <div className="mt-6 grid grid-cols-2 gap-3 border border-chalk/15 bg-chalk/[0.02] p-4 sm:grid-cols-4 sm:p-5">
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
          className="mt-6 block w-full overflow-hidden border border-chalk/15 bg-black/50 text-left transition-colors hover:border-bronze/60"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={rune.image}
            alt={`${rune.name} Rune (${rune.protoGermanic})`}
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
        <blockquote className="mt-7 border-l-2 border-chalk/40 bg-chalk/[0.03] px-4 py-4 sm:px-6 sm:py-5">
          <p className="text-[10px] tracking-[0.18em] text-chalk/55 uppercase">
            {ui.poemBadge} · {rune.poem[lang].source}
          </p>
          <p className="mt-2 font-display text-base leading-7 text-chalk/90 italic sm:text-xl">
            “{rune.poem[lang].quote}”
          </p>
        </blockquote>

        {/* Poetic Edda Hávamál Stanza & Birth Rune Solar Span */}
        {havamalBySlug[rune.slug] && (
          <blockquote className="mt-4 border-l-2 border-chalk/25 bg-black/35 px-4 py-4 sm:px-6 sm:py-5">
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
            <p className="mt-2 font-display text-base leading-7 text-chalk/85 italic sm:text-xl">
              “{havamalBySlug[rune.slug].quote[lang]}”
            </p>
          </blockquote>
        )}

        {/* Core 4-Paragraph Archetypal & Cosmological Reading */}
        <section className="mt-9">
          <p className="text-[10px] tracking-[0.2em] text-chalk/55 uppercase">
            {ui.coreReading} · {aettInfo?.title[lang]}
          </p>
          <div className="mt-4 space-y-5">
            {rune.text[lang].map((paragraph) => (
              <p key={paragraph} className="text-base sm:text-lg leading-7 sm:leading-8 text-chalk/85">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Analytical Chapters (Philology + Upright/Shadow Flow) */}
        <div className="mt-10 space-y-6">
          {rune.chapters[lang].map((ch, idx) => (
            <section
              key={ch.heading}
              className="border border-chalk/15 bg-chalk/[0.02] p-5 sm:p-7"
            >
              <p className="text-[10px] tracking-[0.18em] text-chalk/50 uppercase">
                0{idx + 1} · {rune.name} ({rune.glyph})
              </p>
              <h2 className="mt-1.5 font-display text-xl sm:text-2xl font-medium tracking-[0.01em] text-chalk">
                {ch.heading}
              </h2>
              <p className="mt-2.5 text-sm sm:text-base leading-7 text-chalk/85">{ch.body}</p>
            </section>
          ))}
        </div>

        {/* 3-Step Galdr, Stöðul & Contemplation Practice */}
        <section className="mt-10 border border-chalk/25 bg-chalk/[0.03] p-5 sm:p-7">
          <h2 className="font-display text-xl sm:text-2xl font-medium tracking-[0.01em] text-chalk">
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
              className="my-4 block w-full overflow-hidden border border-chalk/15 bg-ink/80 text-left transition-colors hover:border-bronze/60"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={rune.practiceImage}
                alt={rune.practice[lang].title}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
              <div className="flex items-center justify-between border-t border-chalk/10 bg-ink/85 px-3 py-1.5 text-[11px] text-chalk/65">
                <span>
                  {lang === "tr"
                    ? "🔍 Şemayı tam ekran incelemek için dokunun"
                    : lang === "sv"
                    ? "🔍 Tryck på schemat för helskärmsvisning"
                    : "🔍 Tap diagram to inspect full-screen"}
                </span>
              </div>
            </button>
          )}
          <ol className="mt-4 space-y-3.5">
            {rune.practice[lang].steps.map((step, i) => (
              <li
                key={step}
                className="flex gap-3 text-sm sm:text-base leading-7 text-chalk/85"
              >
                <span className="font-display text-sm tracking-[0.14em] text-amber/80">
                  0{i + 1}.
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Closing Maxim */}
        <p className="mt-9 border-l border-chalk/30 pl-4 font-display text-lg sm:text-xl leading-8 text-chalk/80 italic">
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
          title={`${rune.glyph} ${rune.name} Rune (Rünü) — ${rune.subtitle[lang]}`}
          path={`/runler/${rune.slug}`}
        />

        {/* Prev / All Runes / Next Navigation */}
        <nav
          aria-label="Rune navigation"
          className="mt-10 grid grid-cols-1 gap-3 border-t border-chalk/15 pt-6 sm:grid-cols-3"
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="mx-auto h-auto max-w-none sm:max-w-full"
              />
            </div>
          </div>
        </div>
      )}
    </HallShell>
  );
}
