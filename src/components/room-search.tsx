"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/components/language";
import { apps } from "@/content/apps";
import { astrologyDoors, astrologySkyNotes } from "@/content/astrology";
import { dailyLoreEntries } from "@/content/daily-lore";
import { educationCourses } from "@/content/education";
import { runes } from "@/content/runes";
import { shopProducts } from "@/content/shop";
import { traditions } from "@/content/traditions";

type SearchEntry = {
  href: string;
  glyph: string;
  category: string;
  title: string;
  subtitle: string;
  keywords: string;
};

const SEARCH_UI = {
  tr: {
    buttonLabel: "Ara",
    modalTitle: "Kış Odası Dizin & Sembol Arama (166 Oda)",
    placeholder: "Rün, burç, gezegen, bitki, ogham, şaman, eğitim, shop ara... (Örn: Fehu, Yeşil Ahit, Velvet Love)",
    closeLabel: "Kapat (ESC)",
    emptyText: "Aradığın kelimeyle eşleşen bir oda bulunamadı.",
    categories: {
      rune: "Elder Futhark Rün",
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
    modalTitle: "Winter Hall Index & Symbol Search (165 Rooms)",
    placeholder: "Search rune, sign, planet, herb, ogham, shamanism, course, shop... (e.g. Fehu, Velvet Love)",
    closeLabel: "Close (ESC)",
    emptyText: "No room matched your search query.",
    categories: {
      rune: "Elder Futhark Rune",
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
    modalTitle: "Vinterrummet Register & Symbolsök (165 Rum)",
    placeholder: "Sök runa, tecken, planet, ört, ogham, schamanism, kurs, shop... (t.ex. Fehu, Velvet Love)",
    closeLabel: "Stäng (ESC)",
    emptyText: "Inget rum matchade din sökning.",
    categories: {
      rune: "Äldre Futhark Runa",
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

    for (const note of astrologySkyNotes) {
      list.push({
        href: note.href,
        glyph: note.glyph,
        category: ui.categories.sky,
        title: note.title[lang],
        subtitle: note.summary[lang],
        keywords: `${note.title.tr} ${note.title.en} ${note.summary[lang]} astroloji burç dolunay yeniay retro`,
      });
    }

    for (const course of educationCourses) {
      list.push({
        href: `/egitim/${course.slug}`,
        glyph: course.glyph,
        category: ui.categories.education,
        title: course.title[lang],
        subtitle: course.subtitle[lang],
        keywords: `${course.title.tr} ${course.subtitle[lang]} ${course.summary[lang]} eğitim akademi ders`,
      });
    }

    for (const rune of runes) {
      list.push({
        href: `/runler/${rune.slug}`,
        glyph: rune.glyph,
        category: `${ui.categories.rune} · ${String(rune.index).padStart(2, "0")}`,
        title: `${rune.name} (${rune.protoGermanic})`,
        subtitle: rune.subtitle[lang],
        keywords: `${rune.name} ${rune.protoGermanic} ${rune.subtitle.tr} ${rune.subtitle.en} ${rune.element[lang]} ${rune.deities.join(" ")} rün rune`,
      });
    }

    for (const door of astrologyDoors) {
      list.push({
        href: `/astroloji/${door.slug}`,
        glyph: door.glyph,
        category: ui.categories.astrology,
        title: door.title[lang],
        subtitle: door.subtitle[lang],
        keywords: `${door.title.tr} ${door.subtitle[lang]} ${door.summary[lang]} astroloji gezegen ev burç`,
      });
    }

    for (const app of apps) {
      list.push({
        href: `/uygulamalar/${app.slug}`,
        glyph: app.glyph,
        category: ui.categories.app,
        title: app.name,
        subtitle: app.line[lang],
        keywords: `${app.name} ${app.badge[lang]} ${app.line[lang]} uygulama app ios android`,
      });
    }

    for (const tKey of ["saman", "kelt", "mezopotamya", "witchcraft"] as const) {
      for (const door of traditions[tKey].doors) {
        list.push({
          href: `/${tKey}/${door.slug}`,
          glyph: door.glyph,
          category: ui.categories[tKey],
          title: door.title[lang],
          subtitle: door.subtitle[lang],
          keywords: `${door.title.tr} ${door.title.en} ${door.subtitle[lang]} ${door.summary[lang]} ${tKey}`,
        });
      }
    }

    for (const product of shopProducts) {
      list.push({
        href: `/shop/${product.slug}`,
        glyph: product.glyph,
        category: `${ui.categories.shop} · ${product.price}`,
        title: product.title[lang],
        subtitle: product.subtitle[lang],
        keywords: `${product.title.tr} ${product.title.en} ${product.subtitle[lang]} ${product.summary[lang]} shop shopier yağ iksir tuz danışmanlık ekitap`,
      });
    }

    for (const leaf of dailyLoreEntries) {
      list.push({
        href: `/gunluk/${leaf.slug}`,
        glyph: leaf.glyph,
        category:
          lang === "en"
            ? "Daily Hearth Leaf"
            : lang === "sv"
              ? "Dagligt Härdblad"
              : "Günlük Ocak Yaprağı",
        title: leaf.title[lang],
        subtitle: leaf.subtitle[lang],
        keywords: `${leaf.title.tr} ${leaf.title.en} ${leaf.subtitle[lang]} ${leaf.summary[lang]} ${leaf.keywords.join(" ")} günlük ocak`,
      });
    }

    return list;
  }, [lang, ui]);

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr");
    if (!q) return allEntries.slice(0, 18);
    return allEntries
      .filter((item) => {
        const hay = `${item.title} ${item.subtitle} ${item.category} ${item.keywords}`.toLocaleLowerCase("tr");
        return hay.includes(q);
      })
      .slice(0, 24);
  }, [allEntries, query]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 border border-chalk/20 bg-chalk/[0.03] px-2.5 py-1 text-[11px] tracking-[0.14em] text-chalk/80 uppercase transition-colors hover:border-chalk/50 hover:text-chalk"
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
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 px-4 pt-16 pb-10 backdrop-blur-xs"
          onClick={() => setOpen(false)}
        >
          <div
            className="wet-ink w-full max-w-2xl border border-chalk/25 bg-ink p-5 shadow-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-2 border-b border-chalk/15 pb-3">
              <p className="text-[10px] tracking-[0.2em] text-chalk/60 uppercase">
                {ui.modalTitle}
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-[10px] tracking-[0.16em] text-chalk/55 uppercase hover:text-chalk"
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
              className="mt-4 w-full border border-chalk/25 bg-black/50 px-4 py-3 text-sm text-chalk placeholder:text-chalk/40 focus:border-chalk/65 focus:outline-none"
            />

            <div className="mt-4 max-h-[60vh] overflow-y-auto pr-1">
              {filtered.length === 0 ? (
                <p className="py-8 text-center text-sm text-chalk/55">
                  {ui.emptyText}
                </p>
              ) : (
                <ul className="divide-y divide-chalk/10">
                  {filtered.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-start justify-between gap-3 py-3 transition-colors hover:bg-chalk/[0.04] px-2"
                      >
                        <div className="flex items-start gap-3">
                          <span
                            aria-hidden
                            className="mt-0.5 w-7 text-center font-display text-2xl leading-none text-chalk/80 group-hover:text-chalk"
                          >
                            {item.glyph}
                          </span>
                          <div>
                            <span className="block text-[9px] tracking-[0.16em] text-chalk/45 uppercase">
                              {item.category}
                            </span>
                            <span className="mt-0.5 block font-display text-lg font-medium text-chalk group-hover:underline">
                              {item.title}
                            </span>
                            <span className="mt-0.5 block text-xs text-chalk/65 line-clamp-1">
                              {item.subtitle}
                            </span>
                          </div>
                        </div>
                        <span
                          aria-hidden
                          className="mt-2 text-xs text-chalk/40 group-hover:text-chalk"
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
