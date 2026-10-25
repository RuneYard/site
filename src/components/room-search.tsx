"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/components/language";
import { apps } from "@/content/apps";
import { astrologyDoors, astrologySkyNotes } from "@/content/astrology";
import { dailyLoreEntries } from "@/content/daily-lore";
import { educationCourses } from "@/content/education";
import { glossaryTerms } from "@/content/glossary";
import { MARDUK_FIFTY_NAMES } from "@/content/marduk-fifty-names-data";
import { runes } from "@/content/runes";
import { shopProducts } from "@/content/shop";
import { traditions } from "@/content/traditions";

type SearchGroupKey =
  | "all"
  | "rune"
  | "mezopotamya"
  | "astrology"
  | "saman"
  | "kelt"
  | "witchcraft"
  | "lexicon";

type SearchEntry = {
  id: string;
  href: string;
  glyph: string;
  group: SearchGroupKey;
  category: string;
  title: string;
  subtitle: string;
  keywords: string;
};

const SEARCH_UI = {
  tr: {
    buttonLabel: "Ara",
    modalTitle: "Kış Odası Külliyat & Sembol Arama (220+ Kayıt)",
    placeholder:
      "Rune (Fehu, Algiz), Marduk 50 İsim (Asalluhi, Nebiru), burç, bitki, ogham, şaman ara...",
    closeLabel: "Kapat (ESC)",
    emptyText: "Aradığın kelimeyle eşleşen bir kayıt bulunamadı.",
    groups: {
      all: "Tümü",
      rune: "Rune (Rünler)",
      mezopotamya: "Mezopotamya & 50 İsim",
      astrology: "Astroloji",
      saman: "Şaman",
      kelt: "Kelt & Ogham",
      witchcraft: "Witchcraft",
      lexicon: "Sözlük & Günlük",
    },
    categories: {
      rune: "Elder Futhark Rune (Rün)",
      marduk50: "Marduk’un 50 Kutsal İsmi",
      sky: "Gökyüzü Notu",
      astrology: "Astroloji Odası",
      education: "Akademi & Eğitim",
      app: "Mobil Uygulama",
      saman: "Şamanizm",
      kelt: "Kelt & Ogham",
      mezopotamya: "Mezopotamya",
      witchcraft: "Cadılık Zanaatı",
      shop: "Shop · Atölye",
    },
  },
  en: {
    buttonLabel: "Search",
    modalTitle: "Winter Hall Corpus & Symbol Search (220+ Entries)",
    placeholder:
      "Search rune (Fehu, Algiz), Marduk's 50 Names (Asalluhi, Nebiru), sign, herb, ogham...",
    closeLabel: "Close (ESC)",
    emptyText: "No entry matched your search query.",
    groups: {
      all: "All",
      rune: "Runes",
      mezopotamya: "Mesopotamia & 50 Names",
      astrology: "Astrology",
      saman: "Shamanism",
      kelt: "Celtic & Ogham",
      witchcraft: "Witchcraft",
      lexicon: "Lexicon & Daily",
    },
    categories: {
      rune: "Elder Futhark Rune",
      marduk50: "Marduk's 50 Sacred Names",
      sky: "Sky Dispatch",
      astrology: "Astrology Room",
      education: "Academy & Course",
      app: "Mobile App",
      saman: "Shamanism",
      kelt: "Celtic & Ogham",
      mezopotamya: "Mesopotamia",
      witchcraft: "Witchcraft",
      shop: "Shop · Workshop",
    },
  },
  sv: {
    buttonLabel: "Sök",
    modalTitle: "Vinterrummet Register & Symbolsök (220+ Poster)",
    placeholder:
      "Sök runa (Fehu, Algiz), Marduks 50 Namn (Asalluhi, Nebiru), tecken, ört, ogham...",
    closeLabel: "Stäng (ESC)",
    emptyText: "Ingen post matchade din sökning.",
    groups: {
      all: "Alla",
      rune: "Runor",
      mezopotamya: "Mesopotamien & 50 Namn",
      astrology: "Astrologi",
      saman: "Schamanism",
      kelt: "Keltiskt & Ogham",
      witchcraft: "Witchcraft",
      lexicon: "Ordbok & Dagligt",
    },
    categories: {
      rune: "Äldre Futhark Runa",
      marduk50: "Marduks 50 Heliga Namn",
      sky: "Himmelsnot",
      astrology: "Astrologirum",
      education: "Akademi & Kurs",
      app: "Mobilapp",
      saman: "Schamanism",
      kelt: "Keltiskt & Ogham",
      mezopotamya: "Mesopotamien",
      witchcraft: "Häxkonst",
      shop: "Shop · Ateljé",
    },
  },
} as const;

export function RoomSearch() {
  const { lang } = useLanguage();
  const ui = SEARCH_UI[lang];
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<SearchGroupKey>("all");

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const allEntries = useMemo<SearchEntry[]>(() => {
    const list: SearchEntry[] = [];

    for (const rune of runes) {
      list.push({
        id: `rune-${rune.slug}`,
        href: `/runler/${rune.slug}`,
        glyph: rune.glyph,
        group: "rune",
        category: `${ui.categories.rune} · ${String(rune.index).padStart(2, "0")}`,
        title: `${rune.name} (${rune.protoGermanic})`,
        subtitle: rune.subtitle[lang],
        keywords: `${rune.name} ${rune.protoGermanic} ${rune.subtitle.tr} ${rune.subtitle.en} ${rune.element[lang]} ${rune.deities.join(" ")} rün rune rünü elder futhark`,
      });
    }

    for (const tKey of ["saman", "kelt", "mezopotamya", "witchcraft"] as const) {
      for (const door of traditions[tKey].doors) {
        list.push({
          id: `door-${tKey}-${door.slug}`,
          href: `/${tKey}/${door.slug}`,
          glyph: door.glyph,
          group: tKey,
          category: ui.categories[tKey],
          title: door.title[lang],
          subtitle: door.subtitle[lang],
          keywords: `${door.title.tr} ${door.title.en} ${door.subtitle[lang]} ${door.summary[lang]} ${tKey}`,
        });
      }
    }

    for (const sacred of MARDUK_FIFTY_NAMES) {
      list.push({
        id: `marduk-name-${sacred.number}`,
        href: `/mezopotamya/mardukun-50-kutsal-ismi`,
        glyph: "𒀭",
        group: "mezopotamya",
        category: `${ui.categories.marduk50} · #${String(sacred.number).padStart(2, "0")}`,
        title: `${sacred.number}. ${sacred.name} — ${sacred.epithet[lang]}`,
        subtitle: sacred.syllables[lang],
        keywords: `${sacred.name} ${sacred.syllables.tr} ${sacred.epithet.tr} ${sacred.symbolic.stones.tr} ${sacred.symbolic.plants.tr} marduk 50 isim enuma elis`,
      });
    }

    for (const note of astrologySkyNotes) {
      list.push({
        id: `sky-${note.href}`,
        href: note.href,
        glyph: note.glyph,
        group: "astrology",
        category: ui.categories.sky,
        title: note.title[lang],
        subtitle: note.summary[lang],
        keywords: `${note.title.tr} ${note.title.en} ${note.summary[lang]} astroloji burç dolunay yeniay retro`,
      });
    }

    for (const door of astrologyDoors) {
      list.push({
        id: `astro-${door.slug}`,
        href: `/astroloji/${door.slug}`,
        glyph: door.glyph,
        group: "astrology",
        category: ui.categories.astrology,
        title: door.title[lang],
        subtitle: door.subtitle[lang],
        keywords: `${door.title.tr} ${door.subtitle[lang]} ${door.summary[lang]} astroloji gezegen ev burç`,
      });
    }

    for (const leaf of dailyLoreEntries) {
      list.push({
        id: `daily-${leaf.slug}`,
        href: `/gunluk/${leaf.slug}`,
        glyph: leaf.glyph,
        group: "lexicon",
        category:
          lang === "en"
            ? "Daily Hearth Leaf"
            : lang === "sv"
              ? "Dagligt Härdblad"
              : "Günlük Ocak Yaprağı",
        title: leaf.title[lang],
        subtitle: leaf.subtitle[lang],
        keywords: `${leaf.title.tr} ${leaf.title.en} ${leaf.subtitle[lang]} ${leaf.summary[lang]} ${leaf.keywords.join(" ")} günlük ocak rune`,
      });
    }

    for (const item of glossaryTerms) {
      list.push({
        id: `glossary-${item.id}`,
        href: `/sozluk#${item.id}`,
        glyph: item.glyph,
        group: "lexicon",
        category:
          lang === "en"
            ? "Lexicon · Ancient Term"
            : lang === "sv"
              ? "Ordbok · Forntida Term"
              : "Kadim Terimler Sözlüğü",
        title: `${item.term} [${item.pronunciation}]`,
        subtitle: item.definition[lang],
        keywords: `${item.term} ${item.pronunciation} ${item.origin[lang]} ${item.definition[lang]} sözlük terim`,
      });
    }

    for (const course of educationCourses) {
      list.push({
        id: `edu-${course.slug}`,
        href: `/egitim/${course.slug}`,
        glyph: course.glyph,
        group: "lexicon",
        category: ui.categories.education,
        title: course.title[lang],
        subtitle: course.subtitle[lang],
        keywords: `${course.title.tr} ${course.subtitle[lang]} ${course.summary[lang]} eğitim akademi ders`,
      });
    }

    for (const app of apps) {
      list.push({
        id: `app-${app.slug}`,
        href: `/uygulamalar/${app.slug}`,
        glyph: app.glyph,
        group: "rune",
        category: ui.categories.app,
        title: app.name,
        subtitle: app.line[lang],
        keywords: `${app.name} ${app.badge[lang]} ${app.line[lang]} uygulama app ios android`,
      });
    }

    for (const product of shopProducts) {
      list.push({
        id: `shop-${product.slug}`,
        href: `/shop/${product.slug}`,
        glyph: product.glyph,
        group: "lexicon",
        category: `${ui.categories.shop} · ${product.price}`,
        title: product.title[lang],
        subtitle: product.subtitle[lang],
        keywords: `${product.title.tr} ${product.title.en} ${product.subtitle[lang]} ${product.summary[lang]} shop shopier yağ iksir tuz danışmanlık ekitap`,
      });
    }

    return list;
  }, [lang, ui]);

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr");
    return allEntries
      .filter((item) => {
        if (selectedGroup !== "all" && item.group !== selectedGroup) return false;
        if (!q) return true;
        const hay = `${item.title} ${item.subtitle} ${item.category} ${item.keywords}`.toLocaleLowerCase("tr");
        return hay.includes(q);
      })
      .slice(0, 30);
  }, [allEntries, query, selectedGroup]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-9 items-center gap-1.5 border border-chalk/25 bg-chalk/[0.04] px-2.5 text-[11px] tracking-[0.14em] text-chalk/85 uppercase transition-colors hover:border-amber/60 hover:text-chalk"
        aria-label={ui.buttonLabel}
      >
        <span aria-hidden>⌕</span>
        <span>{ui.buttonLabel}</span>
        <kbd className="hidden border border-chalk/15 px-1 text-[9px] text-chalk/45 sm:inline">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/85 px-3 pt-4 pb-6 sm:px-4 sm:pt-14 backdrop-blur-xs"
          onClick={() => setOpen(false)}
        >
          <div
            className="wet-ink w-full max-w-2xl border border-chalk/25 bg-ink p-4 shadow-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-2 border-b border-chalk/15 pb-3">
              <p className="text-[10px] tracking-[0.18em] text-amber/85 uppercase">
                {ui.modalTitle}
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="border border-chalk/20 px-2 py-1 text-[10px] tracking-[0.16em] text-chalk/70 uppercase hover:border-chalk/50 hover:text-chalk"
              >
                {ui.closeLabel}
              </button>
            </div>

            <input
              type="search"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={ui.placeholder}
              className="mt-3 w-full border border-chalk/25 bg-black/60 px-3.5 py-2.5 text-sm text-chalk placeholder:text-chalk/40 focus:border-amber focus:outline-none"
            />

            {/* Category Filter Pills */}
            <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {(
                [
                  "all",
                  "rune",
                  "mezopotamya",
                  "astrology",
                  "saman",
                  "kelt",
                  "witchcraft",
                  "lexicon",
                ] as const
              ).map((gKey) => (
                <button
                  key={gKey}
                  type="button"
                  onClick={() => setSelectedGroup(gKey)}
                  className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] tracking-[0.12em] uppercase transition-colors ${
                    selectedGroup === gKey
                      ? "border-amber bg-amber/20 text-amber font-medium"
                      : "border-chalk/15 bg-black/40 text-chalk/65 hover:border-chalk/35"
                  }`}
                >
                  {ui.groups[gKey]}
                </button>
              ))}
            </div>

            <div className="mt-3 max-h-[62vh] overflow-y-auto pr-1">
              {filtered.length === 0 ? (
                <p className="py-8 text-center text-sm text-chalk/55">
                  {ui.emptyText}
                </p>
              ) : (
                <ul className="divide-y divide-chalk/10">
                  {filtered.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-start justify-between gap-3 py-2.5 transition-colors hover:bg-chalk/[0.04] px-2"
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <span
                            aria-hidden
                            className="mt-0.5 w-7 shrink-0 text-center font-display text-2xl leading-none text-amber/85 group-hover:text-amber"
                          >
                            {item.glyph}
                          </span>
                          <div className="min-w-0">
                            <span className="block text-[9px] tracking-[0.16em] text-chalk/45 uppercase">
                              {item.category}
                            </span>
                            <span className="mt-0.5 block font-display text-base sm:text-lg font-medium text-chalk group-hover:text-amber truncate">
                              {item.title}
                            </span>
                            <span className="mt-0.5 block text-xs text-chalk/65 line-clamp-1">
                              {item.subtitle}
                            </span>
                          </div>
                        </div>
                        <span
                          aria-hidden
                          className="mt-2 shrink-0 text-xs text-chalk/40 group-hover:text-amber"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
