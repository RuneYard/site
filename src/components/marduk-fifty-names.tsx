"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/language";
import type { Lang } from "@/lib/copy";
import {
  MARDUK_FIFTY_NAMES,
  MARDUK_GATES,
  type MardukElementKey,
  type MardukGeometryType,
  type MardukSacredName,
} from "@/content/marduk-fifty-names-data";

const UI_COPY: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    allGates: string;
    allElements: string;
    searchPlaceholder: string;
    randomSeal: string;
    gateLabel: string;
    lessonLabel: string;
    originTitle: string;
    archetypeTitle: string;
    symbolicTitle: string;
    ethicsTitle: string;
    mirrorTitle: string;
    elementField: string;
    directionField: string;
    colorsField: string;
    geometryField: string;
    plantsField: string;
    stonesField: string;
    animalsField: string;
    domainsField: string;
    ethicsField: string;
    groundingField: string;
    prevSeal: string;
    nextSeal: string;
    elements: Record<MardukElementKey, string>;
  }
> = {
  tr: {
    eyebrow: "ENÛMA ELIŠ · TABLET VII · 7 KOZMİK KAPI · 50 ARKETİPSEL MÜHÜR",
    title: "Marduk’un 50 Kutsal İsmi · Yaşayan Bilgelik Atlası",
    subtitle:
      "Eridu’nun Apsû pınarlarından Babil’in Esagila tapınağına uzanan 50 kutsal isim; dışsal bir yakarış değil, insan bilincinin arınma, irade, şefkat, söz, adalet ve bilgelik basamaklarında uyanış haritasıdır.",
    allGates: "Tüm Kapılar (1–50)",
    allElements: "Tüm Elementler",
    searchPlaceholder: "İsim, numara (1–50), taş, bitki veya kavram ara...",
    randomSeal: "Bilinç Aynası Seç (Rastgele Mühür)",
    gateLabel: "Kapı",
    lessonLabel: "Külliyat halkası",
    originTitle: "I · Kaynak, Köken & Tablet Bağı",
    archetypeTitle: "II · Kozmik Hikâye & Arketipsel Okuma",
    symbolicTitle: "III · Sembolik Dosya & Kutsal Geometri",
    ethicsTitle: "IV · Yaşam Alanları, Etik Yasa & Dengeleme İlkesi",
    mirrorTitle: "V · Günlük Farkındalık Aynası",
    elementField: "Element",
    directionField: "Yön & Eksen",
    colorsField: "Renk Frekansı",
    geometryField: "Kutsal Geometri",
    plantsField: "Bitki & Reçineler",
    stonesField: "Taş & Mineraller",
    animalsField: "Hayvan Rehberi",
    domainsField: "Yaşam Alanları",
    ethicsField: "Etik Yasa",
    groundingField: "Gölge & Topraklama İlkesi",
    prevSeal: "Önceki İsim",
    nextSeal: "Sonraki İsim",
    elements: {
      water: "Su (Apsû)",
      fire: "Ateş",
      air: "Hava (Nefes)",
      earth: "Toprak",
      ether: "Eter (Kozmik Öz)",
    },
  },
  en: {
    eyebrow: "ENÛMA ELIŠ · TABLET VII · 7 COSMIC GATES · 50 ARCHETYPAL SEALS",
    title: "The 50 Sacred Names of Marduk · Living Wisdom Atlas",
    subtitle:
      "Spanning from the Apsû springs of Eridu to the Esagila sanctuary of Babylon, the fifty sacred names form an archetypal map of human consciousness awakening through purification, will, compassion, word, justice, and wisdom.",
    allGates: "All Gates (1–50)",
    allElements: "All Elements",
    searchPlaceholder: "Search by name, number (1–50), stone, plant, or theme...",
    randomSeal: "Draw Mirror of Awareness (Random Seal)",
    gateLabel: "Gate",
    lessonLabel: "Corpus Ring",
    originTitle: "I · Source, Lineage & Tablet VII Connection",
    archetypeTitle: "II · Cosmic Myth & Archetypal Reading",
    symbolicTitle: "III · Symbolic Dossier & Sacred Geometry",
    ethicsTitle: "IV · Life Domains, Ethical Law & Grounding Principle",
    mirrorTitle: "V · Daily Mirror of Awareness",
    elementField: "Element",
    directionField: "Direction & Axis",
    colorsField: "Color Resonance",
    geometryField: "Sacred Geometry",
    plantsField: "Plants & Resins",
    stonesField: "Stones & Minerals",
    animalsField: "Animal Guide",
    domainsField: "Life Domains",
    ethicsField: "Ethical Law",
    groundingField: "Shadow & Grounding Principle",
    prevSeal: "Previous Name",
    nextSeal: "Next Name",
    elements: {
      water: "Water (Apsû)",
      fire: "Fire",
      air: "Air (Breath)",
      earth: "Earth",
      ether: "Ether (Cosmic Essence)",
    },
  },
  sv: {
    eyebrow: "ENÛMA ELIŠ · TAVLA VII · 7 KOSMISKA PORTAR · 50 ARKETYPISKA SIGILL",
    title: "Marduks 50 Heliga Namn · Levande Visdomsatlas",
    subtitle:
      "Från Eridus Apsû-källor till Babylons Esagila-helgedom utgör de femtio heliga namnen en arketypisk karta över medvetandets mognad genom rening, vilja, medkänsla, ord, rättvisa och visdom.",
    allGates: "Alla Portar (1–50)",
    allElements: "Alla Element",
    searchPlaceholder: "Sök namn, nummer (1–50), sten, växt eller tema...",
    randomSeal: "Välj Medvetandespegel (Slumpmässigt Sigill)",
    gateLabel: "Port",
    lessonLabel: "Korpusring",
    originTitle: "I · Källa, Ursprung & Tavla VII-Koppling",
    archetypeTitle: "II · Kosmisk Berättelse & Arketypisk Läsning",
    symbolicTitle: "III · Symbolisk Akt & Helig Geometri",
    ethicsTitle: "IV · Livsområden, Etisk Lag & Grundningsprincip",
    mirrorTitle: "V · Daglig Medvetandespegel",
    elementField: "Element",
    directionField: "Riktning & Axel",
    colorsField: "Färgresonans",
    geometryField: "Helig Geometri",
    plantsField: "Växter & Hartser",
    stonesField: "Stenar & Mineraler",
    animalsField: "Djurvägledare",
    domainsField: "Livsområden",
    ethicsField: "Etisk Lag",
    groundingField: "Skugg- & Grundningsprincip",
    prevSeal: "Föregående Namn",
    nextSeal: "Nästa Namn",
    elements: {
      water: "Vatten (Apsû)",
      fire: "Eld",
      air: "Luft (Andedräkt)",
      earth: "Jord",
      ether: "Eter (Kosmisk Essens)",
    },
  },
};

function SacredGeometryEmblem({ type, number }: { type: MardukGeometryType; number: number }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-28 w-28 shrink-0 text-gold drop-shadow-[0_0_18px_rgba(201,168,106,0.22)]"
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeOpacity="0.24" strokeWidth="1" />
      <circle cx="60" cy="60" r="46" fill="none" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3 3" />

      {type === "circle-wave" && (
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="60" cy="60" r="34" strokeOpacity="0.7" />
          <path d="M 32 52 Q 46 42, 60 52 T 88 52" />
          <path d="M 30 62 Q 45 52, 60 62 T 90 62" />
          <path d="M 34 72 Q 47 62, 60 72 T 86 72" strokeOpacity="0.75" />
        </g>
      )}

      {type === "circle-point" && (
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="60" cy="60" r="34" />
          <circle cx="60" cy="60" r="20" strokeOpacity="0.65" />
          <line x1="60" y1="18" x2="60" y2="102" strokeOpacity="0.45" />
          <line x1="18" y1="60" x2="102" y2="60" strokeOpacity="0.45" />
          <circle cx="60" cy="60" r="4" fill="currentColor" />
        </g>
      )}

      {type === "triangle-up" && (
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="60,22 95,82 25,82" />
          <polygon points="60,34 83,75 37,75" strokeOpacity="0.55" />
          <circle cx="60" cy="62" r="4" fill="currentColor" />
        </g>
      )}

      {type === "triangle-down" && (
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="25,36 95,36 60,96" />
          <polygon points="37,44 83,44 60,84" strokeOpacity="0.55" />
          <circle cx="60" cy="56" r="4" fill="currentColor" />
        </g>
      )}

      {type === "hexagram" && (
        <g fill="none" stroke="currentColor" strokeWidth="1.4">
          <polygon points="60,22 93,79 27,79" />
          <polygon points="60,98 93,41 27,41" />
          <circle cx="60" cy="60" r="3.5" fill="currentColor" />
        </g>
      )}

      {type === "octagram" && (
        <g fill="none" stroke="currentColor" strokeWidth="1.35">
          <rect x="34" y="34" width="52" height="52" />
          <rect x="34" y="34" width="52" height="52" transform="rotate(45 60 60)" />
          <circle cx="60" cy="60" r="12" strokeOpacity="0.7" />
          <circle cx="60" cy="60" r="3" fill="currentColor" />
        </g>
      )}

      {type === "spiral" && (
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M60,60 m0,0 a4,4 0 1,0 8,0 a8,8 0 1,0 -16,0 a14,14 0 1,0 28,0 a21,21 0 1,0 -42,0 a29,29 0 1,0 58,0" />
          <circle cx="60" cy="60" r="2.5" fill="currentColor" />
        </g>
      )}

      {type === "diamond" && (
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="60,20 98,60 60,100 22,60" />
          <polygon points="60,34 84,60 60,86 36,60" strokeOpacity="0.6" />
          <circle cx="60" cy="60" r="4" fill="currentColor" />
        </g>
      )}

      {type === "solar-cross" && (
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="60" cy="60" r="32" />
          <line x1="60" y1="20" x2="60" y2="100" />
          <line x1="20" y1="60" x2="100" y2="60" />
          <line x1="34" y1="34" x2="86" y2="86" strokeOpacity="0.55" />
          <line x1="86" y1="34" x2="34" y2="86" strokeOpacity="0.55" />
          <circle cx="60" cy="60" r="7" fill="currentColor" fillOpacity="0.25" />
        </g>
      )}

      {type === "square-lattice" && (
        <g fill="none" stroke="currentColor" strokeWidth="1.35">
          <rect x="28" y="28" width="64" height="64" />
          <line x1="49" y1="28" x2="49" y2="92" strokeOpacity="0.55" />
          <line x1="71" y1="28" x2="71" y2="92" strokeOpacity="0.55" />
          <line x1="28" y1="49" x2="92" y2="49" strokeOpacity="0.55" />
          <line x1="28" y1="71" x2="92" y2="71" strokeOpacity="0.55" />
          <circle cx="60" cy="60" r="4" fill="currentColor" />
        </g>
      )}

      <text
        x="60"
        y="112"
        textAnchor="middle"
        className="fill-gold/75 font-mono text-[8px] tracking-[0.2em]"
      >
        #{String(number).padStart(2, "0")}
      </text>
    </svg>
  );
}

export function MardukFiftyNamesAtlas({ initialNumber = 1 }: { initialNumber?: number }) {
  const { lang } = useLanguage();
  const t = UI_COPY[lang];

  const [selectedGate, setSelectedGate] = useState<number | "all">("all");
  const [selectedElement, setSelectedElement] = useState<MardukElementKey | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeNumber, setActiveNumber] = useState<number>(initialNumber);

  const filteredNames = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return MARDUK_FIFTY_NAMES.filter((item) => {
      if (selectedGate !== "all" && item.gate !== selectedGate) return false;
      if (selectedElement !== "all" && item.symbolic.element !== selectedElement) return false;
      if (!q) return true;
      return (
        String(item.number) === q ||
        `#${item.number}` === q ||
        item.name.toLowerCase().includes(q) ||
        item.syllables[lang].toLowerCase().includes(q) ||
        item.epithet[lang].toLowerCase().includes(q) ||
        item.symbolic.stones[lang].toLowerCase().includes(q) ||
        item.symbolic.plants[lang].toLowerCase().includes(q) ||
        item.ethicsAndBalance.domains[lang].toLowerCase().includes(q)
      );
    });
  }, [selectedGate, selectedElement, searchQuery, lang]);

  const activeItem: MardukSacredName = useMemo(() => {
    const found = MARDUK_FIFTY_NAMES.find((n) => n.number === activeNumber);
    return found ?? filteredNames[0] ?? MARDUK_FIFTY_NAMES[0];
  }, [activeNumber, filteredNames]);

  const activeGateInfo = useMemo(
    () => MARDUK_GATES.find((g) => g.gate === activeItem.gate) ?? MARDUK_GATES[0],
    [activeItem.gate],
  );

  const handleRandomSeal = () => {
    const pool = filteredNames.length > 0 ? filteredNames : MARDUK_FIFTY_NAMES;
    const randomPick = pool[Math.floor(Math.random() * pool.length)];
    if (randomPick) {
      setActiveNumber(randomPick.number);
    }
  };

  return (
    <section className="my-12 rounded-2xl border border-gold/25 bg-[#090806]/95 p-5 sm:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.65)]">
      {/* Header */}
      <div className="border-b border-gold/15 pb-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-gold/80">
          {t.eyebrow}
        </p>
        <div className="mt-2 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-parchment">
              {t.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-parchment/75">
              {t.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={handleRandomSeal}
            className="inline-flex items-center justify-center gap-2 self-start rounded-full border border-gold/45 bg-gold/10 px-4 py-2 text-xs font-medium tracking-wider text-gold transition hover:bg-gold/20"
          >
            <span>✦</span>
            <span>{t.randomSeal}</span>
          </button>
        </div>
      </div>

      {/* 7 Cosmic Gates Selector */}
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSelectedGate("all")}
          className={`rounded-full border px-3.5 py-1.5 text-xs transition ${
            selectedGate === "all"
              ? "border-gold bg-gold/20 text-parchment"
              : "border-gold/20 bg-black/30 text-parchment/70 hover:border-gold/40"
          }`}
        >
          {t.allGates}
        </button>
        {MARDUK_GATES.map((g) => (
          <button
            key={g.gate}
            type="button"
            onClick={() => {
              setSelectedGate(g.gate);
              const firstInGate = MARDUK_FIFTY_NAMES.find((n) => n.gate === g.gate);
              if (firstInGate) setActiveNumber(firstInGate.number);
            }}
            className={`rounded-full border px-3.5 py-1.5 text-xs transition ${
              selectedGate === g.gate
                ? "border-gold bg-gold/20 text-parchment"
                : "border-gold/20 bg-black/30 text-parchment/70 hover:border-gold/40"
            }`}
          >
            {g.roman}. {t.gateLabel} ({g.range})
          </button>
        ))}
      </div>

      {/* Search & Element Filter */}
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setSelectedElement("all")}
            className={`rounded-md border px-2.5 py-1 text-[11px] transition ${
              selectedElement === "all"
                ? "border-gold/60 bg-gold/15 text-gold"
                : "border-white/10 bg-black/20 text-parchment/65 hover:border-gold/30"
            }`}
          >
            {t.allElements}
          </button>
          {(["water", "fire", "air", "earth", "ether"] as const).map((elKey) => (
            <button
              key={elKey}
              type="button"
              onClick={() => setSelectedElement(elKey)}
              className={`rounded-md border px-2.5 py-1 text-[11px] transition ${
                selectedElement === elKey
                  ? "border-gold/60 bg-gold/15 text-gold"
                  : "border-white/10 bg-black/20 text-parchment/65 hover:border-gold/30"
              }`}
            >
              {t.elements[elKey]}
            </button>
          ))}
        </div>

        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
          className="w-full sm:w-72 rounded-lg border border-gold/25 bg-black/50 px-3.5 py-1.5 text-xs text-parchment placeholder:text-parchment/40 focus:border-gold focus:outline-none"
        />
      </div>

      {/* 50 Seals Compact Selector Grid */}
      <div className="mt-5 grid grid-cols-5 sm:grid-cols-10 gap-1.5">
        {filteredNames.map((item) => {
          const isSelected = item.number === activeItem.number;
          return (
            <button
              key={item.number}
              type="button"
              onClick={() => setActiveNumber(item.number)}
              className={`group flex flex-col items-start justify-between rounded-lg border p-2 text-left transition ${
                isSelected
                  ? "border-gold bg-gold/20 shadow-[0_0_20px_rgba(201,168,106,0.2)]"
                  : "border-gold/15 bg-black/40 hover:border-gold/45 hover:bg-gold/5"
              }`}
            >
              <span className="font-mono text-[10px] text-gold/80">
                {String(item.number).padStart(2, "0")}
              </span>
              <span className="mt-1 line-clamp-1 font-serif text-xs text-parchment">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Gate Banner */}
      <div className="mt-6 rounded-xl border border-gold/20 bg-gold/[0.04] px-4 py-3">
        <p className="text-xs font-medium text-gold">
          {activeGateInfo.title[lang]}
        </p>
        <p className="mt-0.5 text-xs text-parchment/65">
          {activeGateInfo.subtitle[lang]}
        </p>
      </div>

      {/* Active Sacred Name Detail Card */}
      <div className="mt-6 rounded-2xl border border-gold/30 bg-gradient-to-b from-[#120f0a] to-[#090806] p-5 sm:p-7">
        {/* Top Row: Emblem + Name + Cuneiform */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between border-b border-gold/15 pb-6">
          <div className="flex items-center gap-5">
            <SacredGeometryEmblem
              type={activeItem.symbolic.geometryType}
              number={activeItem.number}
            />
            <div>
              <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gold/80">
                <span>
                  #{String(activeItem.number).padStart(2, "0")} · {activeGateInfo.roman}. {t.gateLabel}
                </span>
                <span>·</span>
                <span>
                  {t.lessonLabel} {activeItem.lesson}
                </span>
              </div>
              <h3 className="mt-1 font-serif text-2xl sm:text-3xl text-parchment">
                {activeItem.name}
              </h3>
              <p className="mt-1 text-xs font-medium text-gold/90">
                {activeItem.syllables[lang]}
              </p>
              <p className="mt-1.5 text-sm italic text-parchment/80">
                “{activeItem.epithet[lang]}”
              </p>
            </div>
          </div>

          <div className="self-start sm:self-center rounded-xl border border-gold/25 bg-black/50 px-4 py-2.5 text-center">
            <div className="text-xl sm:text-2xl tracking-widest text-gold">
              {activeItem.cuneiform}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-parchment/55">
              {t.elements[activeItem.symbolic.element]}
            </div>
          </div>
        </div>

        {/* Layer I & II: Origin & Archetype */}
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <div className="rounded-xl border border-gold/15 bg-black/35 p-4 sm:p-5">
            <h4 className="font-serif text-sm uppercase tracking-[0.16em] text-gold">
              {t.originTitle}
            </h4>
            <p className="mt-2.5 text-sm leading-relaxed text-parchment/85">
              {activeItem.origin[lang]}
            </p>
          </div>

          <div className="rounded-xl border border-gold/15 bg-black/35 p-4 sm:p-5">
            <h4 className="font-serif text-sm uppercase tracking-[0.16em] text-gold">
              {t.archetypeTitle}
            </h4>
            <p className="mt-2.5 text-sm leading-relaxed text-parchment/85">
              {activeItem.archetype[lang]}
            </p>
          </div>
        </div>

        {/* Layer III: Symbolic Dossier */}
        <div className="mt-5 rounded-xl border border-gold/15 bg-black/35 p-4 sm:p-5">
          <h4 className="font-serif text-sm uppercase tracking-[0.16em] text-gold">
            {t.symbolicTitle}
          </h4>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-xs">
            <div className="rounded-lg border border-white/10 bg-black/40 p-3">
              <span className="block text-[10px] uppercase tracking-wider text-gold/75">
                {t.elementField}
              </span>
              <span className="mt-1 block text-parchment/90">
                {activeItem.symbolic.elementLabel[lang]}
              </span>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/40 p-3">
              <span className="block text-[10px] uppercase tracking-wider text-gold/75">
                {t.directionField}
              </span>
              <span className="mt-1 block text-parchment/90">
                {activeItem.symbolic.direction[lang]}
              </span>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/40 p-3">
              <span className="block text-[10px] uppercase tracking-wider text-gold/75">
                {t.colorsField}
              </span>
              <span className="mt-1 block text-parchment/90">
                {activeItem.symbolic.colors[lang]}
              </span>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/40 p-3">
              <span className="block text-[10px] uppercase tracking-wider text-gold/75">
                {t.geometryField}
              </span>
              <span className="mt-1 block text-parchment/90">
                {activeItem.symbolic.geometry[lang]}
              </span>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/40 p-3">
              <span className="block text-[10px] uppercase tracking-wider text-gold/75">
                {t.plantsField}
              </span>
              <span className="mt-1 block text-parchment/90">
                {activeItem.symbolic.plants[lang]}
              </span>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/40 p-3">
              <span className="block text-[10px] uppercase tracking-wider text-gold/75">
                {t.stonesField}
              </span>
              <span className="mt-1 block text-parchment/90">
                {activeItem.symbolic.stones[lang]}
              </span>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/40 p-3 sm:col-span-2">
              <span className="block text-[10px] uppercase tracking-wider text-gold/75">
                {t.animalsField}
              </span>
              <span className="mt-1 block text-parchment/90">
                {activeItem.symbolic.animals[lang]}
              </span>
            </div>
          </div>
        </div>

        {/* Layer IV: Ethics & Balance */}
        <div className="mt-5 rounded-xl border border-gold/15 bg-black/35 p-4 sm:p-5">
          <h4 className="font-serif text-sm uppercase tracking-[0.16em] text-gold">
            {t.ethicsTitle}
          </h4>
          <div className="mt-3 grid gap-4 lg:grid-cols-3 text-xs leading-relaxed">
            <div className="rounded-lg border border-white/10 bg-black/40 p-3.5">
              <span className="block text-[10px] uppercase tracking-wider text-gold/80">
                {t.domainsField}
              </span>
              <p className="mt-1.5 text-parchment/85">
                {activeItem.ethicsAndBalance.domains[lang]}
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/40 p-3.5">
              <span className="block text-[10px] uppercase tracking-wider text-gold/80">
                {t.ethicsField}
              </span>
              <p className="mt-1.5 text-parchment/85">
                {activeItem.ethicsAndBalance.ethics[lang]}
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/40 p-3.5">
              <span className="block text-[10px] uppercase tracking-wider text-gold/80">
                {t.groundingField}
              </span>
              <p className="mt-1.5 text-parchment/85">
                {activeItem.ethicsAndBalance.grounding[lang]}
              </p>
            </div>
          </div>
        </div>

        {/* Layer V: Daily Awareness Mirror */}
        <div className="mt-5 rounded-xl border border-gold/35 bg-gold/[0.07] p-4 sm:p-5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
            {t.mirrorTitle}
          </p>
          <p className="mt-2 font-serif text-base sm:text-lg italic leading-relaxed text-parchment">
            “{activeItem.dailyMirror[lang]}”
          </p>
        </div>

        {/* Prev / Next Navigation */}
        <div className="mt-6 flex items-center justify-between border-t border-gold/15 pt-4 text-xs">
          <button
            type="button"
            onClick={() =>
              setActiveNumber(activeItem.number > 1 ? activeItem.number - 1 : 50)
            }
            className="rounded-lg border border-gold/25 bg-black/40 px-3.5 py-2 text-parchment/80 transition hover:border-gold hover:text-gold"
          >
            ← {t.prevSeal}
          </button>
          <span className="font-mono text-gold/75">
            {String(activeItem.number).padStart(2, "0")} / 50
          </span>
          <button
            type="button"
            onClick={() =>
              setActiveNumber(activeItem.number < 50 ? activeItem.number + 1 : 1)
            }
            className="rounded-lg border border-gold/25 bg-black/40 px-3.5 py-2 text-parchment/80 transition hover:border-gold hover:text-gold"
          >
            {t.nextSeal} →
          </button>
        </div>
      </div>
    </section>
  );
}
