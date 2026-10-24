"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language";
import { PortraitMark } from "@/components/portrait-mark";
import { runes, type Rune } from "@/content/runes";

const ZODIAC_GLYPHS = [
  "♈",
  "♉",
  "♊",
  "♋",
  "♌",
  "♍",
  "♎",
  "♏",
  "♐",
  "♑",
  "♒",
  "♓",
] as const;

const UI = {
  tr: {
    badge: "CANLI KUZEY USTURLABI · XXIV ELDER FUTHARK & GÖK KUBBE",
    viewAstrolabe: "✦ Usturlap",
    viewGallery: "🖼 Galeri",
    drawBtn: "🎲 Keseden Taş Çek",
    drawingBtn: "Taşlar Karışıyor...",
    galdrBtn: "🔊 Galdr",
    openRune: "Odaya İn →",
    hint: "Çarktaki 24 ründen birine dokun veya ortadan taş çek",
    ritualBadge: "AKTİF MEVSİM EŞİĞİ · WITCHCRAFT XXI",
    ritualTitle: "Samhain: Sessiz Ata Sofrası ve Eşik Ritüeli",
    ritualDesc:
      "Modern Wicca kurgularından uzak; tuz-demir eşik mührü, batı penceresi feneri ve 15 dakikalık sessiz sofra.",
    ritualCta: "Ritüeli Aç →",
    shopBadge: "ATÖLYE VİTRİNİ · SHOPIER 3D SECURE",
    shopTitle: "Yeşil Ahit e-Kitap & Ritüel İksirleri",
    shopDesc:
      "Kadim Bitkilerle Çalışma Sanatı (485 TL) ve kişiye özel kodlanan %100 doğal yağlar, iksirler ve danışmanlıklar.",
    shopAll: "Mağaza (19)",
    shopBuy: "Shopier →",
  },
  en: {
    badge: "LIVE NORTHERN ASTROLABE · XXIV ELDER FUTHARK & SKY VAULT",
    viewAstrolabe: "✦ Astrolabe",
    viewGallery: "🖼 Gallery",
    drawBtn: "🎲 Draw a Rune",
    drawingBtn: "Drawing Stone...",
    galdrBtn: "🔊 Galdr",
    openRune: "Enter Room →",
    hint: "Tap any of the 24 runes on the wheel or draw a stone",
    ritualBadge: "ACTIVE SEASONAL THRESHOLD · WITCHCRAFT XXI",
    ritualTitle: "Samhain: The Dumb Supper & Threshold Rite",
    ritualDesc:
      "Authentic old-craft hearth rite: salt-and-iron doorway warding, window lantern, and the 15-minute silent table.",
    ritualCta: "Open Rite →",
    shopBadge: "WORKSHOP SHOWCASE · SHOPIER SECURE",
    shopTitle: "The Green Covenant e-Book & Ritual Elixirs",
    shopDesc:
      "Art of Working with Ancient Plants (485 TL) plus personally encoded botanical oils, salts, and consultations.",
    shopAll: "Shop (19)",
    shopBuy: "Shopier →",
  },
  sv: {
    badge: "LEVANDE NORDISKT ASTROLABIUM · XXIV ÄLDRE FUTHARK",
    viewAstrolabe: "✦ Astrolabium",
    viewGallery: "🖼 Galleri",
    drawBtn: "🎲 Dra Runa",
    drawingBtn: "Blandar Stenar...",
    galdrBtn: "🔊 Galdr",
    openRune: "Öppna Rum →",
    hint: "Tryck på valfri runa i hjulet eller dra en sten",
    ritualBadge: "AKTIV ÅRSTIDSTRÖSKEL · WITCHCRAFT XXI",
    ritualTitle: "Samhain: Det Tysta Gästabudet & Tröskelriten",
    ritualDesc:
      "Ursprunglig härdrit: salt-och-järngräns vid tröskeln, fönsterljus och 15 minuters tyst förfädersbord.",
    ritualCta: "Öppna Rit →",
    shopBadge: "ATELJÉSKÅP · SHOPIER",
    shopTitle: "Det Gröna Förbundets e-Bok & Elixir",
    shopDesc:
      "Konsten att arbeta med forntida växter (485 TL) samt personligt kodade oljor, salter och konsultationer.",
    shopAll: "Butik (19)",
    shopBuy: "Shopier →",
  },
} as const;

export function SanctumAstrolabe() {
  const { lang } = useLanguage();
  const ui = UI[lang];

  const [viewMode, setViewMode] = useState<"astrolabe" | "gallery">(
    "astrolabe"
  );
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [isCasting, setIsCasting] = useState(false);

  // Set initial rune to today's solar/day rune on mount
  useEffect(() => {
    const now = new Date();
    const seed =
      now.getUTCFullYear() * 366 +
      now.getUTCMonth() * 31 +
      now.getUTCDate();
    setSelectedIdx(seed % runes.length);
  }, []);

  const activeRune: Rune = runes[selectedIdx] ?? runes[0];

  function handleCastStone() {
    if (isCasting) return;
    setIsCasting(true);
    try {
      const stoneAudio = new Audio("/audio/tas.mp3");
      stoneAudio.volume = 0.65;
      stoneAudio.play().catch(() => {});
    } catch {
      // ignore audio error
    }

    let ticks = 0;
    const interval = window.setInterval(() => {
      ticks += 1;
      setSelectedIdx(Math.floor(Math.random() * runes.length));
      if (ticks >= 9) {
        window.clearInterval(interval);
        setIsCasting(false);
      }
    }, 75);
  }

  function handlePlayGaldr(rune: Rune) {
    try {
      const audio = new Audio(`/audio/galdr/${rune.slug}.mp3`);
      audio.play().catch(() => {});
    } catch {
      // ignore
    }
  }

  if (viewMode === "gallery") {
    return (
      <div className="flex h-full flex-col justify-between gap-3">
        <div className="flex items-center justify-between border border-chalk/12 bg-soot/75 px-3.5 py-2">
          <span className="text-[10px] tracking-[0.2em] text-amber uppercase">
            {ui.badge}
          </span>
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => setViewMode("astrolabe")}
              className="border border-chalk/20 bg-ink/70 px-2.5 py-1 text-[10px] tracking-[0.15em] text-chalk/75 uppercase hover:border-amber hover:text-amber"
            >
              {ui.viewAstrolabe}
            </button>
            <button
              type="button"
              onClick={() => setViewMode("gallery")}
              className="border border-[#e5be73] bg-[#d4a857] px-2.5 py-1 text-[10px] font-bold tracking-[0.15em] text-[#141a1c] uppercase"
            >
              {ui.viewGallery}
            </button>
          </div>
        </div>
        <div className="flex-1">
          <PortraitMark />
        </div>
      </div>
    );
  }

  const cx = 280;
  const cy = 280;
  const rOuter = 258;
  const rRune = 216;
  const rMid = 166;
  const rZodiac = 142;
  const rInner = 106;

  // Selected rune angle in radians
  const selAngleDeg = -90 + selectedIdx * 15;
  const selAngleRad = (selAngleDeg * Math.PI) / 180;
  const selX = cx + rRune * Math.cos(selAngleRad);
  const selY = cy + rRune * Math.sin(selAngleRad);

  // 8-pointed Wheel of the Year star vertices on rMid
  const octagramPtsA = Array.from({ length: 4 }, (_, i) => {
    const a = ((i * 90 - 90) * Math.PI) / 180;
    return `${(cx + rMid * Math.cos(a)).toFixed(1)},${(
      cy +
      rMid * Math.sin(a)
    ).toFixed(1)}`;
  }).join(" ");

  const octagramPtsB = Array.from({ length: 4 }, (_, i) => {
    const a = ((i * 90 - 45) * Math.PI) / 180;
    return `${(cx + rMid * Math.cos(a)).toFixed(1)},${(
      cy +
      rMid * Math.sin(a)
    ).toFixed(1)}`;
  }).join(" ");

  const firstSentence =
    activeRune.text[lang][0].split(". ").slice(0, 2).join(". ") + ".";

  return (
    <div className="wet-ink bronze-frame flex h-full flex-col justify-between p-4 sm:p-6">
      {/* Top Header & Mode Switch */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-chalk/12 pb-3">
        <span className="text-[10px] font-medium tracking-[0.2em] text-amber uppercase">
          {ui.badge}
        </span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setViewMode("astrolabe")}
            className="border border-[#e5be73] bg-[#d4a857] px-2.5 py-1 text-[10px] font-bold tracking-[0.15em] text-[#141a1c] uppercase"
          >
            {ui.viewAstrolabe}
          </button>
          <button
            type="button"
            onClick={() => setViewMode("gallery")}
            className="border border-chalk/20 bg-soot/80 px-2.5 py-1 text-[10px] tracking-[0.15em] text-chalk/75 uppercase hover:border-amber hover:text-amber transition"
          >
            {ui.viewGallery}
          </button>
        </div>
      </div>

      {/* Interactive SVG Astrolabe Wheel */}
      <div className="relative my-2 flex flex-col items-center justify-center">
        <svg
          viewBox="0 0 560 560"
          className="h-auto w-full max-w-[430px] select-none"
          role="img"
          aria-label={ui.badge}
        >
          <defs>
            <radialGradient id="sanctumCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d8ae5e" stopOpacity="0.18" />
              <stop offset="65%" stopColor="#151d1a" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#090c0b" stopOpacity="1" />
            </radialGradient>
          </defs>

          {/* Outer Sanctuary Rings */}
          <circle
            cx={cx}
            cy={cy}
            r={rOuter}
            fill="url(#sanctumCoreGlow)"
            stroke="#a8824a"
            strokeWidth="1.2"
            strokeOpacity="0.55"
          />
          <circle
            cx={cx}
            cy={cy}
            r={246}
            fill="none"
            stroke="#efe8d8"
            strokeWidth="0.6"
            strokeOpacity="0.18"
          />

          {/* 72 Degree Ticks around Outer Rim */}
          {Array.from({ length: 72 }, (_, i) => {
            const deg = i * 5;
            const rad = (deg * Math.PI) / 180;
            const isMajor = deg % 15 === 0;
            const r1 = isMajor ? 246 : 251;
            const r2 = 258;
            return (
              <line
                key={deg}
                x1={cx + r1 * Math.cos(rad)}
                y1={cy + r1 * Math.sin(rad)}
                x2={cx + r2 * Math.cos(rad)}
                y2={cy + r2 * Math.sin(rad)}
                stroke={isMajor ? "#d8ae5e" : "#efe8d8"}
                strokeWidth={isMajor ? "1.2" : "0.6"}
                strokeOpacity={isMajor ? "0.65" : "0.22"}
              />
            );
          })}

          {/* Three Aettir Sector Dividers (Every 8 Runes = 120 deg) */}
          {[0, 120, 240].map((deg) => {
            const rad = ((deg - 97.5) * Math.PI) / 180;
            return (
              <line
                key={deg}
                x1={cx + rInner * Math.cos(rad)}
                y1={cy + rInner * Math.sin(rad)}
                x2={cx + 246 * Math.cos(rad)}
                y2={cy + 246 * Math.sin(rad)}
                stroke="#d8ae5e"
                strokeWidth="1"
                strokeDasharray="3 3"
                strokeOpacity="0.35"
              />
            );
          })}

          {/* Middle Sacred Octagram (Wheel of the Year) */}
          <circle
            cx={cx}
            cy={cy}
            r={rMid}
            fill="none"
            stroke="#a8824a"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <polygon
            points={octagramPtsA}
            fill="none"
            stroke="#d8ae5e"
            strokeWidth="0.8"
            strokeOpacity="0.22"
          />
          <polygon
            points={octagramPtsB}
            fill="none"
            stroke="#d8ae5e"
            strokeWidth="0.8"
            strokeOpacity="0.22"
          />

          {/* 12 Zodiac Ring */}
          <circle
            cx={cx}
            cy={cy}
            r={rZodiac - 16}
            fill="none"
            stroke="#efe8d8"
            strokeWidth="0.6"
            strokeOpacity="0.16"
          />
          {ZODIAC_GLYPHS.map((zGlyph, idx) => {
            const rad = ((-90 + idx * 30 + 15) * Math.PI) / 180;
            const zx = cx + rZodiac * Math.cos(rad);
            const zy = cy + rZodiac * Math.sin(rad);
            return (
              <text
                key={idx}
                x={zx}
                y={zy}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#efe8d8"
                fillOpacity="0.45"
                fontSize="12"
              >
                {zGlyph}
              </text>
            );
          })}

          {/* Golden Pointer Ray to Active Rune */}
          <line
            x1={cx}
            y1={cy}
            x2={selX}
            y2={selY}
            stroke="#d8ae5e"
            strokeWidth="1.8"
            strokeOpacity="0.75"
          />

          {/* 24 Interactive Elder Futhark Rune Medallions */}
          {runes.map((rItem, idx) => {
            const deg = -90 + idx * 15;
            const rad = (deg * Math.PI) / 180;
            const rx = cx + rRune * Math.cos(rad);
            const ry = cy + rRune * Math.sin(rad);
            const isSelected = idx === selectedIdx;

            return (
              <g
                key={rItem.slug}
                onClick={() => setSelectedIdx(idx)}
                className="cursor-pointer"
              >
                {isSelected && (
                  <circle
                    cx={rx}
                    cy={ry}
                    r={22}
                    fill="none"
                    stroke="#d8ae5e"
                    strokeWidth="1.2"
                    strokeOpacity="0.85"
                  />
                )}
                <circle
                  cx={rx}
                  cy={ry}
                  r={isSelected ? 17.5 : 15.5}
                  fill={isSelected ? "#d8ae5e" : "#121916"}
                  stroke={isSelected ? "#efe8d8" : "#a8824a"}
                  strokeWidth={isSelected ? "1.5" : "1"}
                  strokeOpacity={isSelected ? "1" : "0.55"}
                />
                <text
                  x={rx}
                  y={ry + 1}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill={isSelected ? "#090c0b" : "#efe8d8"}
                  fontSize={isSelected ? "19" : "16"}
                  fontWeight={isSelected ? "bold" : "normal"}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {rItem.glyph}
                </text>
              </g>
            );
          })}

          {/* Inner Sanctum Core Hub */}
          <circle
            cx={cx}
            cy={cy}
            r={rInner}
            fill="#0b100e"
            stroke="#d8ae5e"
            strokeWidth="1.6"
          />
          <circle
            cx={cx}
            cy={cy}
            r={rInner - 6}
            fill="none"
            stroke="#a8824a"
            strokeWidth="0.7"
            strokeOpacity="0.5"
          />

          {/* Active Rune Inside Center Hub */}
          <text
            x={cx}
            y={cy - 64}
            textAnchor="middle"
            fill="#d8ae5e"
            fontSize="10"
            letterSpacing="2.5"
          >
            {String(activeRune.index).padStart(2, "0")} / XXIV · AETT{" "}
            {activeRune.aett}
          </text>

          <text
            x={cx}
            y={cy - 8}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#efe8d8"
            fontSize="64"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {activeRune.glyph}
          </text>

          <text
            x={cx}
            y={cy + 46}
            textAnchor="middle"
            fill="#efe8d8"
            fontSize="20"
            fontWeight="bold"
            letterSpacing="2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {activeRune.name.toUpperCase()}
          </text>

          <text
            x={cx}
            y={cy + 68}
            textAnchor="middle"
            fill="#d8ae5e"
            fillOpacity="0.85"
            fontSize="11"
            letterSpacing="1.5"
          >
            {activeRune.protoGermanic} · [{activeRune.phoneme}]
          </text>
        </svg>

        <p className="mt-1 text-center text-[11px] tracking-[0.14em] text-chalk/55">
          {ui.hint}
        </p>
      </div>

      {/* Selected Rune Action & Reading Box */}
      <div className="border border-amber/35 bg-soot/80 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-chalk/12 pb-3">
          <div>
            <span className="text-[10px] tracking-[0.18em] text-amber uppercase">
              {activeRune.element[lang]} · {activeRune.deities.join(" · ")}
            </span>
            <h3 className="font-display text-xl text-chalk">
              {activeRune.glyph} {activeRune.name} —{" "}
              <span className="text-amber/90 italic font-normal text-base">
                {activeRune.subtitle[lang]}
              </span>
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleCastStone}
              className="border border-[#e5be73] bg-[#d4a857] px-3.5 py-1.5 text-[11px] font-bold tracking-[0.15em] text-[#141a1c] uppercase shadow-[0_2px_12px_rgba(212,168,87,0.3)] hover:bg-[#e5be73] transition"
            >
              {isCasting ? ui.drawingBtn : ui.drawBtn}
            </button>
            <button
              type="button"
              onClick={() => handlePlayGaldr(activeRune)}
              className="border border-chalk/25 bg-ink/80 px-2.5 py-1.5 text-[11px] tracking-[0.14em] text-chalk/90 uppercase hover:border-amber hover:text-amber transition"
            >
              {ui.galdrBtn} [{activeRune.phoneme}]
            </button>
            <Link
              href={`/runler/${activeRune.slug}`}
              className="border border-amber/50 bg-amber/12 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-amber uppercase hover:bg-amber hover:text-ink transition"
            >
              {ui.openRune}
            </Link>
          </div>
        </div>

        <p className="mt-3 text-xs sm:text-[13px] leading-6 text-chalk/80 line-clamp-2">
          {firstSentence}
        </p>
      </div>

      {/* Bottom 2-Column Spotlight: Active Samhain Ritual + Shopier Workshop */}
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Link
          href="/witchcraft/samhain-esik-ve-ata-ocagi"
          className="card-slate group flex flex-col justify-between border border-chalk/14 p-3.5 transition hover:border-amber/55"
        >
          <div>
            <span className="text-[9px] font-semibold tracking-[0.18em] text-amber uppercase">
              ⚝ {ui.ritualBadge}
            </span>
            <h4 className="mt-1 font-display text-base text-chalk group-hover:text-amber transition-colors">
              {ui.ritualTitle}
            </h4>
            <p className="mt-1 text-xs leading-5 text-chalk/70 line-clamp-2">
              {ui.ritualDesc}
            </p>
          </div>
          <span className="mt-2.5 inline-block text-[10px] font-medium tracking-[0.18em] text-amber uppercase">
            {ui.ritualCta}
          </span>
        </Link>

        <div className="card-slate flex flex-col justify-between border border-chalk/14 p-3.5">
          <div>
            <span className="text-[9px] font-semibold tracking-[0.18em] text-amber uppercase">
              ⚱ {ui.shopBadge}
            </span>
            <h4 className="mt-1 font-display text-base text-chalk">
              <Link
                href="/shop/yesil-ahit-ekitap"
                className="hover:text-amber transition-colors"
              >
                {ui.shopTitle}
              </Link>
            </h4>
            <p className="mt-1 text-xs leading-5 text-chalk/70 line-clamp-2">
              {ui.shopDesc}
            </p>
          </div>
          <div className="mt-2.5 flex items-center gap-2">
            <Link
              href="/shop"
              className="border border-chalk/25 bg-ink/70 px-2.5 py-1 text-[10px] tracking-[0.15em] text-chalk/85 uppercase hover:border-amber hover:text-amber transition"
            >
              {ui.shopAll}
            </Link>
            <a
              href="https://www.shopier.com/runeyard/43358059"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#e5be73] bg-[#d4a857] px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-[#141a1c] uppercase hover:bg-[#e5be73] transition"
            >
              {ui.shopBuy}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
