"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { HallShell } from "@/components/hall-shell";
import { useLanguage } from "@/components/language";
import {
  glossaryTerms,
  type GlossaryCategory,
} from "@/content/glossary";

const UI = {
  tr: {
    badge: "📖 KIŞ ODASI BAŞUCU KAYNAĞI · KADİM DİLLER VE KAVRAMLAR",
    title: "Kadim Terimler Sözlüğü",
    sub: "Sümer ve Babil çivi yazısından (Enki, Marduk, Abzu, Me), Kuzey’in Elder Futhark taşlarına (Galdr, Stöðul, Wyrd, Útiseta), Kelt Ogham korularından Altay ocağına ve Hellenistik gökbilime uzanan temel kavramların telaffuzu, kökeni ve odası.",
    searchPlaceholder: "Terim, köken veya anlam ara... (Örn: Enki, Marduk, Galdr, Abzu, Cazimi)",
    pronunciationLabel: "Okunuşu",
    originLabel: "Kökeni",
    openRoom: "İlgili Odaya Git →",
    filters: {
      all: "Tümü",
      mezopotamya: "Mezopotamya & Sitchin",
      runes: "Kuzey & Rünler",
      kelt: "Kelt & Ogham",
      saman: "Şamanizm & Ocak",
      astroloji: "Klasik Astroloji",
      witchcraft: "Yeşil Ahit & Eşik",
    },
  },
  en: {
    badge: "📖 WINTER HALL LEXICON · ANCIENT TONGUES & CONCEPTS",
    title: "Lexicon of Ancient Terms",
    sub: "Pronunciation, etymology, and room references for foundational concepts spanning Sumerian/Babylonian tablets (Enki, Marduk, Abzu, Me), Elder Futhark runes, Celtic Ogham, Altai hearth lore, and Hellenistic astrology.",
    searchPlaceholder: "Search term, origin, or meaning... (e.g. Enki, Marduk, Galdr, Abzu, Cazimi)",
    pronunciationLabel: "Pronunciation",
    originLabel: "Origin",
    openRoom: "Enter Related Room →",
    filters: {
      all: "All",
      mezopotamya: "Mesopotamia & Sitchin",
      runes: "Norse & Runes",
      kelt: "Celtic & Ogham",
      saman: "Shamanism & Hearth",
      astroloji: "Classical Astrology",
      witchcraft: "Green Covenant",
    },
  },
  sv: {
    badge: "📖 VINTERRUMMETS UPPSLAGSVERK · FORNTIDA BEGREPP",
    title: "Ordbok över Forntida Begrepp",
    sub: "Uttal, ursprung och rumsreferenser för grundbegrepp från sumeriska tavlor (Enki, Marduk, Abzu, Me), nordiska runor, keltisk Ogham, altajsk härdkult och klassisk astrologi.",
    searchPlaceholder: "Sök begrepp, ursprung eller betydelse... (t.ex. Enki, Marduk, Galdr, Abzu)",
    pronunciationLabel: "Uttal",
    originLabel: "Ursprung",
    openRoom: "Gå till Rummet →",
    filters: {
      all: "Alla",
      mezopotamya: "Mesopotamien & Sitchin",
      runes: "Nordiskt & Runor",
      kelt: "Keltiskt & Ogham",
      saman: "Schamanism & Härd",
      astroloji: "Klassisk Astrologi",
      witchcraft: "Gröna Förbundet",
    },
  },
} as const;

export function GlossaryRoomView() {
  const { lang, t } = useLanguage();
  const ui = UI[lang];
  const [activeCategory, setActiveCategory] = useState<"all" | GlossaryCategory>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr");
    return glossaryTerms.filter((item) => {
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }
      if (!q) return true;
      const hay =
        `${item.term} ${item.pronunciation} ${item.origin[lang]} ${item.definition[lang]}`.toLocaleLowerCase(
          "tr",
        );
      return hay.includes(q);
    });
  }, [activeCategory, lang, query]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: ui.title,
    description: ui.sub,
    url: "https://www.runeyard.net/sozluk",
    hasDefinedTerm: glossaryTerms.map((item) => ({
      "@type": "DefinedTerm",
      name: item.term,
      description: item.definition.tr,
      url: `https://www.runeyard.net${item.href}`,
    })),
  };

  const categoryKeys: Array<"all" | GlossaryCategory> = [
    "all",
    "mezopotamya",
    "runes",
    "kelt",
    "saman",
    "astroloji",
    "witchcraft",
  ];

  return (
    <HallShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="icerik" className="px-6 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="text-xs tracking-[0.2em] text-chalk/60 uppercase hover:text-amber"
          >
            {t.back}
          </Link>

          <header className="mt-6 border-b border-chalk/12 pb-8">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-amber uppercase">
              {ui.badge}
            </p>
            <h1 className="mt-2 font-display text-4xl font-medium tracking-[-0.02em] text-chalk sm:text-6xl">
              {ui.title}
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-chalk/75">
              {ui.sub}
            </p>
          </header>

          {/* Search & Category Filter Bar */}
          <div className="mt-8 flex flex-col gap-4">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={ui.searchPlaceholder}
              className="w-full border border-amber/35 bg-black/50 px-4 py-3 text-sm text-chalk placeholder:text-chalk/45 focus:border-amber focus:outline-none"
            />

            <div className="flex flex-wrap gap-2">
              {categoryKeys.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`border px-3.5 py-1.5 font-display text-xs tracking-[0.14em] uppercase transition-colors ${
                    activeCategory === cat
                      ? "border-amber bg-amber text-ink font-bold"
                      : "border-chalk/20 bg-black/35 text-chalk/75 hover:border-amber/50 hover:text-amber"
                  }`}
                >
                  {ui.filters[cat]}
                </button>
              ))}
            </div>
          </div>

          {/* Terms Grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {filtered.map((item) => (
              <article
                id={item.id}
                key={item.id}
                className="card-slate flex flex-col justify-between border border-chalk/15 p-5 transition-colors hover:border-amber/45 sm:p-6"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] tracking-[0.18em] text-amber uppercase">
                        {ui.filters[item.category]}
                      </span>
                      <h2 className="mt-1 font-display text-2xl font-medium text-chalk sm:text-3xl">
                        {item.term}
                      </h2>
                    </div>
                    <span className="font-display text-3xl leading-none text-amber">
                      {item.glyph}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    <span className="border border-amber/30 bg-amber/10 px-2.5 py-0.5 text-amber">
                      <strong>{ui.pronunciationLabel}:</strong> [{item.pronunciation}]
                    </span>
                    <span className="border border-chalk/15 bg-black/40 px-2.5 py-0.5 text-chalk/75">
                      <strong>{ui.originLabel}:</strong> {item.origin[lang]}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-chalk/85">
                    {item.definition[lang]}
                  </p>
                </div>

                <div className="mt-5 border-t border-chalk/10 pt-3">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 font-display text-xs tracking-[0.16em] text-amber uppercase hover:underline"
                  >
                    <span>{ui.openRoom}</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </HallShell>
  );
}
