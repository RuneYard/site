"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { useLanguage } from "@/components/language";
import { runes } from "@/content/runes";
import { formatSkyClock, formatSkyDate, readSky } from "@/lib/sky";
import { skyAdvice, skyNames } from "@/lib/sky-copy";

const locale = { tr: "tr-TR", en: "en-GB", sv: "sv-SE" } as const;

const ACTIVE_SKY_DISPATCHES = {
  tr: {
    heading: "Güncel Gökyüzü Gündemi & Burç Yorumları",
    allLabel: "Tüm Gökyüzü Notları →",
    items: [
      {
        glyph: "🌕",
        tag: "26 EKİM · 3° BOĞA",
        title: "Boğa Dolunayı & 12 Burç",
        href: "/astroloji/boga-dolunayi",
      },
      {
        glyph: "☿",
        tag: "24 EKİM – 13 KASIM",
        title: "Merkür Akrep Retrosu",
        href: "/astroloji/merkur-retrosu",
      },
      {
        glyph: "♀",
        tag: "3 EKİM – 14 KASIM",
        title: "Venüs Retrosu (Akrep/Terazi)",
        href: "/astroloji/venus-retrosu",
      },
      {
        glyph: "🌑",
        tag: "9 KASIM · 17° AKREP",
        title: "Akrep Yeniayı",
        href: "/astroloji/akrep-yeniayi",
      },
    ],
  },
  en: {
    heading: "Active Sky Dispatches & Horoscopes",
    allLabel: "All Sky Notes →",
    items: [
      {
        glyph: "🌕",
        tag: "26 OCT · 3° TAURUS",
        title: "Taurus Full Moon & 12 Signs",
        href: "/astroloji/boga-dolunayi",
      },
      {
        glyph: "☿",
        tag: "24 OCT – 13 NOV",
        title: "Mercury Retrograde in Scorpio",
        href: "/astroloji/merkur-retrosu",
      },
      {
        glyph: "♀",
        tag: "3 OCT – 14 NOV",
        title: "Venus Retrograde (Scorpio/Libra)",
        href: "/astroloji/venus-retrosu",
      },
      {
        glyph: "🌑",
        tag: "9 NOV · 17° SCORPIO",
        title: "Scorpio New Moon",
        href: "/astroloji/akrep-yeniayi",
      },
    ],
  },
  sv: {
    heading: "Aktuella Himmelsnoter & Horoskop",
    allLabel: "Alla Himmelsnoter →",
    items: [
      {
        glyph: "🌕",
        tag: "26 OKT · 3° OXEN",
        title: "Fullmåne i Oxen & 12 Tecken",
        href: "/astroloji/boga-dolunayi",
      },
      {
        glyph: "☿",
        tag: "24 OKT – 13 NOV",
        title: "Merkurius Retrograd i Skorpionen",
        href: "/astroloji/merkur-retrosu",
      },
      {
        glyph: "♀",
        tag: "3 OKT – 14 NOV",
        title: "Venus Retrograd (Skorpionen/Vågen)",
        href: "/astroloji/venus-retrosu",
      },
      {
        glyph: "🌑",
        tag: "9 NOV · 17° SKORPIONEN",
        title: "Nymåne i Skorpionen",
        href: "/astroloji/akrep-yeniayi",
      },
    ],
  },
} as const;

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 1000);
  return () => clearInterval(id);
}

function secondNow() {
  return Math.floor(Date.now() / 1000);
}

export function SkyNote() {
  const { lang, t } = useLanguage();
  const second = useSyncExternalStore(subscribe, secondNow, secondNow);
  const sky = readSky(new Date(second * 1000));
  const names = skyNames[lang];
  const dispatch = ACTIVE_SKY_DISPATCHES[lang];

  const daySeed =
    sky.date.getUTCFullYear() * 366 +
    sky.date.getUTCMonth() * 31 +
    sky.date.getUTCDate();
  const dailyRune = runes[daySeed % runes.length];

  const hourWorkMap: Record<
    string,
    { href: string; label: Record<"tr" | "en" | "sv", string> }
  > = {
    sun: {
      href: "/shop/golden-divine-oil",
      label: {
        tr: "Güneş Saati Eseri: Golden Divine Oil",
        en: "Solar Hour Work: Golden Divine Oil",
        sv: "Soltimmens Verk: Golden Divine Oil",
      },
    },
    moon: {
      href: "/shop/silver-moon-elixir",
      label: {
        tr: "Ay Saati Eseri: Silver Moon Elixir",
        en: "Lunar Hour Work: Silver Moon Elixir",
        sv: "Måntimmens Verk: Silver Moon Elixir",
      },
    },
    venus: {
      href: "/shop/velvet-love-oil",
      label: {
        tr: "Venüs Saati Eseri: Velvet Love Oil",
        en: "Venus Hour Work: Velvet Love Oil",
        sv: "Venustimmens Verk: Velvet Love Oil",
      },
    },
    mercury: {
      href: "/shop/yesil-ahit-ekitap",
      label: {
        tr: "Merkür Saati Eseri: Yeşil Ahit e-Kitap",
        en: "Mercury Hour Work: Green Covenant e-Book",
        sv: "Merkuriustimmens Verk: Gröna Förbundets e-bok",
      },
    },
    mars: {
      href: "/shop/sacred-shield-oil",
      label: {
        tr: "Mars Saati Eseri: Sacred Shield Oil",
        en: "Mars Hour Work: Sacred Shield Oil",
        sv: "Marstimmens Verk: Sacred Shield Oil",
      },
    },
    jupiter: {
      href: "/shop/celestial-elixir-oil",
      label: {
        tr: "Jüpiter Saati Eseri: Celestial Elixir",
        en: "Jupiter Hour Work: Celestial Elixir",
        sv: "Jupitertimmens Verk: Celestial Elixir",
      },
    },
    saturn: {
      href: "/shop/black-salt",
      label: {
        tr: "Satürn Saati Eseri: Black Salt",
        en: "Saturn Hour Work: Black Salt",
        sv: "Saturnustimmens Verk: Black Salt",
      },
    },
  };
  const currentHourWork = hourWorkMap[sky.hour] ?? hourWorkMap.sun;

  return (
    <div className="mt-8 max-w-lg" suppressHydrationWarning>
      <time
        dateTime={sky.date.toISOString()}
        className="block text-[10px] tracking-[0.16em] text-chalk/50 uppercase"
      >
        {formatSkyDate(sky.date, locale[lang])}
      </time>
      <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[10px] tracking-[0.14em] text-chalk/45 uppercase">
        <div>
          <dt className="inline">{t.sky.phase}</dt>{" "}
          <dd className="inline text-chalk/70">{names.phase[sky.phase]}</dd>
        </div>
        <div>
          <dt className="inline">{t.sky.sign}</dt>{" "}
          <dd className="inline text-chalk/70">{names.sign[sky.sign]}</dd>
        </div>
        <div>
          <dt className="inline">{t.sky.hour}</dt>{" "}
          <dd className="inline text-chalk/70">{names.hour[sky.hour]}</dd>
        </div>
      </dl>
      <p className="mt-3 text-base leading-7 text-chalk/90">{skyAdvice(lang, sky)}</p>
      <p
        className="mt-4 font-display text-sm tracking-[0.28em] text-chalk/45 tabular-nums"
        aria-label={formatSkyClock(sky.date)}
      >
        {formatSkyClock(sky.date)}
      </p>

      {/* Daily Guardian Rune & Planetary Hour Work */}
      <div className="mt-4 flex flex-wrap gap-2">
        <Link
          href={`/runler/${dailyRune.slug}`}
          className="inline-flex items-center gap-2 border border-amber/35 bg-amber/10 px-3 py-1.5 text-[11px] tracking-[0.14em] text-amber uppercase hover:bg-amber hover:text-ink transition"
        >
          <span>{dailyRune.glyph}</span>
          <span>
            {lang === "en"
              ? `Daily Rune: ${dailyRune.name}`
              : lang === "sv"
                ? `Dagens Runa: ${dailyRune.name}`
                : `Günün Rünü: ${dailyRune.name}`}
          </span>
        </Link>
        <Link
          href={currentHourWork.href}
          className="inline-flex items-center gap-2 border border-chalk/20 bg-soot/65 px-3 py-1.5 text-[11px] tracking-[0.14em] text-chalk/85 uppercase hover:border-amber hover:text-amber transition"
        >
          <span>⚱</span>
          <span>{currentHourWork.label[lang]}</span>
        </Link>
      </div>

      {/* Active Sky Dispatches Strip */}
      <div className="mt-5 border-t border-chalk/12 pt-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] tracking-[0.18em] text-chalk/55 uppercase">
            {dispatch.heading}
          </span>
          <Link
            href="/astroloji"
            className="text-[10px] tracking-[0.14em] text-chalk/65 uppercase transition-colors hover:text-chalk"
          >
            {dispatch.allLabel}
          </Link>
        </div>
        <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {dispatch.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between border border-chalk/12 bg-chalk/[0.02] px-3 py-2 transition-colors hover:border-chalk/40 hover:bg-chalk/[0.05]"
            >
              <div className="min-w-0 pr-2">
                <span className="block text-[9px] tracking-[0.16em] text-chalk/45 uppercase">
                  {item.tag}
                </span>
                <span className="mt-0.5 block truncate font-display text-sm font-medium text-chalk/90 group-hover:text-chalk">
                  {item.glyph} {item.title}
                </span>
              </div>
              <span
                aria-hidden
                className="text-xs text-chalk/45 transition-transform group-hover:translate-x-0.5 group-hover:text-chalk/85"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
