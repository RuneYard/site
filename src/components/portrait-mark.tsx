"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language";
import type { Lang } from "@/lib/copy";

interface GalleryFrame {
  src: string;
  alt: string;
  grade: boolean;
  position: string;
  glyph: string;
  caption: Record<Lang, string>;
}

const frames: readonly GalleryFrame[] = [
  {
    src: "/portrait/mehmet-sea.jpg",
    alt: "Mehmet Akdeniz",
    grade: true,
    position: "object-[center_28%]",
    glyph: "ᚠ",
    caption: {
      tr: "Mehmet Akdeniz · Kuzey Denizi ve Kıyı",
      en: "Mehmet Akdeniz · Northern Sea & Shore",
      sv: "Mehmet Akdeniz · Nordliga Havet & Kusten",
    },
  },
  {
    src: "/portrait/still-standing-stone-aurora.jpg",
    alt: "Aurora Borealis & Runestone",
    grade: false,
    position: "object-center",
    glyph: "ᛉ",
    caption: {
      tr: "Kuzey Işıkları Altında Dikili Rün Taşı",
      en: "Standing Runestone Beneath the Aurora",
      sv: "Runsten Under Norrskenet",
    },
  },
  {
    src: "/portrait/still-shaman-drum.jpg",
    alt: "Altai Shaman Drum (Düngür)",
    grade: false,
    position: "object-center",
    glyph: "☥",
    caption: {
      tr: "Ocak Ateşi ve Altay Şaman Davulu (Düngür)",
      en: "Hearth Fire & Altai Shaman Drum (Düngür)",
      sv: "Härdeld & Altaisk Schamantrumma (Düngür)",
    },
  },
  {
    src: "/portrait/mehmet-torii.jpg",
    alt: "Mehmet Akdeniz",
    grade: true,
    position: "object-[center_16%]",
    glyph: "◈",
    caption: {
      tr: "Mehmet Akdeniz · Eşik ve Geçit",
      en: "Mehmet Akdeniz · Threshold & Gate",
      sv: "Mehmet Akdeniz · Tröskel & Port",
    },
  },
  {
    src: "/portrait/still-raven-hearth.jpg",
    alt: "Raven Skull, Amber & Elder Futhark Runes",
    grade: false,
    position: "object-center",
    glyph: "ᚺ",
    caption: {
      tr: "Huginn & Muninn · Kehribar ve Demir Rünler",
      en: "Huginn & Muninn · Baltic Amber & Iron Runes",
      sv: "Huginn & Muninn · Bärnsten & Järnrunor",
    },
  },
  {
    src: "/portrait/still-celtic-ogham.jpg",
    alt: "Celtic Oak Grove & Ogham Staves",
    grade: false,
    position: "object-center",
    glyph: "ᚇ",
    caption: {
      tr: "Kadim Meşe Korusu (Nemeton) ve Ogham Çubukları",
      en: "Sacred Oak Grove (Nemeton) & Ogham Staves",
      sv: "Helig Eklund (Nemeton) & Oghamstavar",
    },
  },
  {
    src: "/portrait/still-babylon-tablet.jpg",
    alt: "Babylonian Cuneiform Clay Tablet & Astrolabe",
    grade: false,
    position: "object-center",
    glyph: "𒀭",
    caption: {
      tr: "MUL.APIN · Babil Çivi Yazısı Tablet ve Usturlap",
      en: "MUL.APIN · Babylonian Star Tablet & Astrolabe",
      sv: "MUL.APIN · Babylonisk Stjärntavla & Astrolabium",
    },
  },
  {
    src: "/portrait/still-apothecary-cauldron.jpg",
    alt: "Hearth Apothecary, Cast Iron Cauldron & Herbs",
    grade: false,
    position: "object-center",
    glyph: "⚝",
    caption: {
      tr: "Yeşil Ahit · Ocak, Reçine ve Herbaryum Masası",
      en: "The Green Covenant · Hearth, Resin & Herbarium Table",
      sv: "Det Gröna Förbundet · Härd, Harts &Herbariumbord",
    },
  },
  {
    src: "/portrait/still-runes.jpg",
    alt: "Elder Futhark Stone Runes",
    grade: false,
    position: "object-center",
    glyph: "ᚨ",
    caption: {
      tr: "Elder Futhark · Yirmi Dört Taş Kapı",
      en: "Elder Futhark · Twenty-Four Stone Doors",
      sv: "Elder Futhark · Tjugofyra Stendörrar",
    },
  },
  {
    src: "/portrait/still-sky.jpg",
    alt: "Night Sky & Celestial Vault",
    grade: false,
    position: "object-center",
    glyph: "☉",
    caption: {
      tr: "Klasik Gök Kubbe ve Gece Nöbeti",
      en: "Classical Celestial Vault & Night Watch",
      sv: "Klassiska Himlavalvet & Nattvakten",
    },
  },
  {
    src: "/portrait/still-ritual.jpg",
    alt: "Hearth Altar & Candlelight",
    grade: false,
    position: "object-center",
    glyph: "ᚲ",
    caption: {
      tr: "Kenaz · Ocak Işığı ve Sessiz Çalışma",
      en: "Kenaz · Hearth Light & Silent Study",
      sv: "Kenaz · Härdljus & Stilla Studium",
    },
  },
  {
    src: "/portrait/still-runes-iron.jpg",
    alt: "Forged Iron & Runes",
    grade: false,
    position: "object-center",
    glyph: "ᛏ",
    caption: {
      tr: "Tiwaz · Dövme Demir ve Kuzey Pusatları",
      en: "Tiwaz · Forged Iron & Northern Implements",
      sv: "Tiwaz · Smitt Järn & Nordiska Redskap",
    },
  },
  {
    src: "/portrait/still-runes-arc.jpg",
    alt: "Circle of Runes",
    grade: false,
    position: "object-center",
    glyph: "ᛟ",
    caption: {
      tr: "Othala · Çember ve Kadim Mühürler",
      en: "Othala · The Circle & Ancient Seals",
      sv: "Othala · Cirkeln & Forntida Sigill",
    },
  },
  {
    src: "/portrait/still-sky-pines.jpg",
    alt: "Northern Pines Beneath Night Sky",
    grade: false,
    position: "object-center",
    glyph: "ᛇ",
    caption: {
      tr: "Eihwaz · Kuzey Ormanı ve Dünya Ağacı Eşiği",
      en: "Eihwaz · Northern Pines & the World Tree Threshold",
      sv: "Eihwaz · Nordisk Skog & Världsträdets Tröskel",
    },
  },
  {
    src: "/portrait/still-chart.jpg",
    alt: "Astrological Chart & Ephemeris",
    grade: false,
    position: "object-center",
    glyph: "☽",
    caption: {
      tr: "Zodyak Çarkı ve Efemeris Kayıtları",
      en: "Zodiac Wheel & Ephemeris Records",
      sv: "Zodiakhjulet & Efemeridanteckningar",
    },
  },
  {
    src: "/portrait/still-iron-candle.jpg",
    alt: "Beeswax Candle in Forged Iron Holder",
    grade: false,
    position: "object-center",
    glyph: "ᛊ",
    caption: {
      tr: "Balmumu Alevi ve Demir Şamdan",
      en: "Beeswax Flame & Forged Iron Holder",
      sv: "Bivaxlåga & Smidd Järnljusstake",
    },
  },
];

const ROMAN = [
  "I", "II", "III", "IV", "V", "VI", "VII", "VIII",
  "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI",
];

export function PortraitMark() {
  const { lang } = useLanguage();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % frames.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [paused]);

  const current = frames[active];

  return (
    <figure
      className="bronze-frame group relative h-full min-h-[440px] w-full overflow-hidden bg-ink p-3 select-none"
      aria-label="Mehmet Akdeniz · RuneYard"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-full min-h-[416px] overflow-hidden">
        {frames.map((frame, index) => {
          const isCurrent = index === active;
          return (
            <Image
              key={frame.src}
              src={frame.src}
              alt={frame.alt}
              priority={index < 2}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className={`object-cover transition-all duration-1000 ease-out ${frame.position} ${
                frame.grade ? "portrait-grade" : ""
              } ${isCurrent ? "scale-[1.02] opacity-100" : "pointer-events-none scale-100 opacity-0"}`}
            />
          );
        })}

        {/* Subtle atmospheric vignette */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent"
          aria-hidden
        />

        {/* Top-right glyph & Roman index badge */}
        <div className="pointer-events-none absolute top-3.5 right-3.5 flex items-center gap-2 border border-chalk/15 bg-ink/70 px-2.5 py-1 backdrop-blur-sm">
          <span className="font-display text-sm text-bronze" aria-hidden>
            {current.glyph}
          </span>
          <span className="text-[10px] tracking-[0.2em] text-chalk/75 uppercase">
            {ROMAN[active]} / {ROMAN[frames.length - 1]}
          </span>
        </div>

        {/* Bottom caption & controls bar */}
        <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-2.5 p-4 sm:p-5">
          <div className="flex items-end justify-between gap-3">
            <p className="font-display text-sm tracking-[0.04em] text-chalk/90 sm:text-base">
              {current.caption[lang]}
            </p>
            <div className="flex shrink-0 items-center gap-1.5">
              <button
                type="button"
                onClick={() => setActive((prev) => (prev - 1 + frames.length) % frames.length)}
                aria-label="Previous image"
                className="flex h-7 w-7 items-center justify-center border border-chalk/20 bg-ink/75 text-xs text-chalk/80 transition-colors hover:border-bronze hover:text-chalk"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => setActive((prev) => (prev + 1) % frames.length)}
                aria-label="Next image"
                className="flex h-7 w-7 items-center justify-center border border-chalk/20 bg-ink/75 text-xs text-chalk/80 transition-colors hover:border-bronze hover:text-chalk"
              >
                ›
              </button>
            </div>
          </div>

          {/* Interactive progress ticks */}
          <div className="grid grid-cols-16 gap-1">
            {frames.map((frame, idx) => (
              <button
                key={frame.src}
                type="button"
                onClick={() => setActive(idx)}
                aria-label={frame.caption[lang]}
                className={`h-1 transition-all ${
                  idx === active
                    ? "bg-bronze"
                    : "bg-chalk/20 hover:bg-chalk/45"
                }`}
              />
            ))}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
