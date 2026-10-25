"use client";

import { useMemo, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { DreamCompass } from "@/components/dream-compass";
import { HallShell } from "@/components/hall-shell";
import { KumalakOracle } from "@/components/kumalak-oracle";
import { useLanguage } from "@/components/language";
import { MardukFiftyNamesAtlas } from "@/components/marduk-fifty-names";
import { OghamOracle } from "@/components/ogham-oracle";
import { PlanetaryHoursCompass } from "@/components/planetary-hours";
import { ShareBar } from "@/components/share-bar";
import { ScholarSeal, ShopBridge, type BridgeContext } from "@/components/shop-bridge";
import { DrumPulseResonator } from "@/components/sound-resonator";
import { SymbolicTwins } from "@/components/symbolic-twins";
import { WheelCompass } from "@/components/wheel-compass";
import type { Lang } from "@/lib/copy";
import {
  findTraditionDoor,
  traditions,
  type TraditionSlug,
  type TraditionSubDoor,
} from "@/content/traditions";

const WHATSAPP_URL = "https://wa.me/905455642164";
const WHATSAPP_LABEL = {
  tr: "WhatsApp · İletişim",
  en: "WhatsApp · Contact",
  sv: "WhatsApp · Kontakt",
} as const;

const ZOOM_HINT = {
  tr: "🔍 Şemayı tam ekran incelemek için görsele dokunun",
  en: "🔍 Tap diagram to inspect full-screen",
  sv: "🔍 Tryck på schemat för helskärmsvisning",
} as const;

const CLOSE_LABEL = {
  tr: "Kapat ✕",
  en: "Close ✕",
  sv: "Stäng ✕",
} as const;

const NAV_LABELS = {
  tr: { prev: "← Önceki Oda", next: "Sonraki Oda →" },
  en: { prev: "← Previous Room", next: "Next Room →" },
  sv: { prev: "← Föregående Rum", next: "Nästa Rum →" },
} as const;

const MEDICAL_DISCLAIMER = {
  tr: {
    heading: "Tıbbi ve Yasal Bilgilendirme (Önemli Uyarı)",
    body: "Bu odada yer alan bitkisel, geleneksel, etnobotanik ve ritüel bilgiler yalnızca tarih, folklor ve kültür araştırması kapsamındadır. Hiçbir içerik tıbbi teşhis, tedavi veya reçete yerine geçmez. Hamilelik, emzirme, kronik rahatsızlık veya düzenli ilaç kullanımı durumlarında hiçbir bitki, yağ veya karışım hekim ve eczacı onayı olmadan dahilen ya da haricen kullanılmamalıdır.",
  },
  en: {
    heading: "Medical & Legal Disclaimer (Important Notice)",
    body: "All herbal, traditional, ethnobotanical, and ritual information in this room is presented strictly for historical, folkloric, and cultural study. Nothing herein constitutes medical diagnosis, treatment, or prescription. Never ingest or apply any plant, oil, or preparation without consulting a qualified physician or pharmacist, especially during pregnancy, nursing, or when taking medication.",
  },
  sv: {
    heading: "Medicinsk & Juridisk Ansvarsfriskrivning (Viktig Varning)",
    body: "All växt-, traditions-, etnobotanisk och rituell information i detta rum presenteras uteslutande i historiskt, folkloristiskt och kulturellt studiesyfte. Inget innehåll ersätter medicinsk diagnos, behandling eller läkemedel. Rådfråga alltid läkare eller apotekare innan du använder växter, oljor eller beredningar, särskilt vid graviditet eller medicinering.",
  },
} as const;

type ShelfDef = {
  id: string;
  label: Record<Lang, string>;
  match: (door: TraditionSubDoor, index: number) => boolean;
};

const HALL_SHELVES: Record<Exclude<TraditionSlug, "shop">, readonly ShelfDef[]> = {
  mezopotamya: [
    {
      id: "enki-marduk",
      label: {
        tr: "Enki, Abzu & Marduk’un 50 İsmi",
        en: "Enki, Abzu & Marduk's 50 Names",
        sv: "Enki, Abzu & Marduks 50 Namn",
      },
      match: (d) =>
        /abzu|asalluhi|marukka|marduk|enki|me-yasalari|esagila/i.test(d.slug),
    },
    {
      id: "stars-cycles",
      label: {
        tr: "Yıldız İlmi, Ay & Göksel Çağlar",
        en: "Astral Science, Moon & Celestial Ages",
        sv: "Stjärnkunskap, Måne & Tidsåldrar",
      },
      match: (d) =>
        /ziggurat|yildiz|nanna|inanna|gezegen|dekan|caglar|nibiru|akitu/i.test(d.slug),
    },
    {
      id: "purification-ward",
      label: {
        tr: "Arınma, Korunma & Mühürler",
        en: "Purification, Warding & Seals",
        sv: "Rening, Beskydd & Sigill",
      },
      match: (d) =>
        /maqlu|surpu|lamassu|muhur|pazuzu|tutsu|recine|kur/i.test(d.slug),
    },
    {
      id: "law-myth",
      label: {
        tr: "Kozmik Yasa, Kader & Destanlar",
        en: "Cosmic Law, Destiny & Epics",
        sv: "Kosmisk Lag, Öde & Epos",
      },
      match: (d) =>
        /enuma|kader|gilgamis|samas|kittum|tufan/i.test(d.slug),
    },
  ],
  saman: [
    {
      id: "cosmology",
      label: {
        tr: "Üç Dünya, Gök & Hayat Ağacı",
        en: "Three Worlds, Sky & World Tree",
        sv: "Tre Världar, Himmel & Världsträd",
      },
      match: (_, i) => i < 5,
    },
    {
      id: "drum-trance",
      label: {
        tr: "Davul, Ses, Nefes & Seiðr",
        en: "Drum, Sound, Breath & Seiðr",
        sv: "Trumma, Ljud, Andedräkt & Sejd",
      },
      match: (_, i) => i >= 5 && i < 10,
    },
    {
      id: "nature-hearth",
      label: {
        tr: "Yer-Su İyeleri, Ocak & Erk Hayvanları",
        en: "Land Spirits, Hearth & Power Animals",
        sv: "Rådande Väsen, Härd & Kraftdjur",
      },
      match: (_, i) => i >= 10 && i < 15,
    },
    {
      id: "divination-initiation",
      label: {
        tr: "Kumalak, Rüya & İnisiyasyon",
        en: "Kumalak, Dream & Initiation",
        sv: "Kumalak, Dröm & Initiation",
      },
      match: (_, i) => i >= 15,
    },
  ],
  kelt: [
    {
      id: "ogham-trees",
      label: {
        tr: "Ogham & 20 Kutsal Ağaç (Aicme)",
        en: "Ogham & 20 Sacred Trees (Aicme)",
        sv: "Ogham & 20 Heliga Träd (Aicme)",
      },
      match: (d) => /aicme|ogham|agac|fid/i.test(d.slug),
    },
    {
      id: "awen-nemeton",
      label: {
        tr: "Nemeton, Awen & Üç Kazan",
        en: "Nemeton, Awen & Three Cauldrons",
        sv: "Nemeton, Awen & Tre Kitteln",
      },
      match: (_, i) => i < 7,
    },
    {
      id: "wheel-thresholds",
      label: {
        tr: "Mevsim Eşikleri, Pınarlar & Töre",
        en: "Seasonal Thresholds, Wells & Lore",
        sv: "Årstidströsklar, Källor & Sed",
      },
      match: (d, i) => i >= 7 && !/aicme|ogham/i.test(d.slug),
    },
  ],
  witchcraft: [
    {
      id: "hearth-home",
      label: {
        tr: "Ocak, Hane & Eşik Koruma",
        en: "Hearth, Home & Threshold Warding",
        sv: "Härd, Hem & Tröskelskydd",
      },
      match: (d) => /hane|mutfak|esik|dugum|ayna|su|mum/i.test(d.slug),
    },
    {
      id: "herbs-trees",
      label: {
        tr: "Bitki İlmi, Ağaçlar & Reçineler",
        en: "Herbalism, Trees & Resins",
        sv: "Örtkunskap, Träd & Hartser",
      },
      match: (d) => /kir|aktar|agac|recine|merhem|tentur|yesil-ahit/i.test(d.slug),
    },
    {
      id: "wheel-moon",
      label: {
        tr: "Yılın Çarkı, Samhain & Ay Evreleri",
        en: "Wheel of the Year, Samhain & Moon",
        sv: "Årshjulet, Samhain & Månfaser",
      },
      match: (d, i) => /samhain|cark|ay|mevsim/i.test(d.slug) || i >= 14,
    },
  ],
};

function renderInlineText(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={i} className="font-semibold text-chalk">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return (
        <em key={i} className="italic text-chalk/95">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
}

function cleanText(text: string): string {
  return text.replace(/\*\*/g, "").replace(/\*/g, "").trim();
}

export function TraditionRoom({ slug }: { slug: TraditionSlug }) {
  const { lang, t } = useLanguage();
  const hall = traditions[slug];

  const [activeTool, setActiveTool] = useState<string>("rooms");
  const [selectedShelf, setSelectedShelf] = useState<string>("all");
  const [roomFilter, setRoomFilter] = useState<string>("");

  const shelves = slug !== "shop" ? HALL_SHELVES[slug] : [];

  const filteredDoors = useMemo(() => {
    const q = roomFilter.trim().toLocaleLowerCase("tr");
    const activeShelfObj = shelves.find((s) => s.id === selectedShelf);

    return hall.doors.filter((door, index) => {
      if (activeShelfObj && !activeShelfObj.match(door, index)) return false;
      if (!q) return true;
      const hay = `${door.glyph} ${door.title[lang]} ${door.subtitle[lang]} ${door.summary[lang]}`.toLocaleLowerCase(
        "tr",
      );
      return hay.includes(q);
    });
  }, [hall.doors, shelves, selectedShelf, roomFilter, lang]);

  const toolTabs = useMemo(() => {
    const tabs: { id: string; label: string }[] = [
      {
        id: "rooms",
        label:
          lang === "en"
            ? `📚 Archive Rooms (${hall.doors.length})`
            : lang === "sv"
              ? `📚 Arkivrum (${hall.doors.length})`
              : `📚 Külliyat Odaları (${hall.doors.length})`,
      },
    ];
    if (slug === "mezopotamya") {
      tabs.push({
        id: "marduk50",
        label:
          lang === "en"
            ? "𒀭 Marduk’s 50 Sacred Names Atlas"
            : lang === "sv"
              ? "𒀭 Marduks 50 Heliga Namn-Atlas"
              : "𒀭 Marduk’un 50 Kutsal İsmi Atlası",
      });
      tabs.push({
        id: "planetary",
        label:
          lang === "en"
            ? "⏳ Planetary Hours Compass"
            : lang === "sv"
              ? "⏳ Planettimmars Kompass"
              : "⏳ Gezegen Saatleri Pusulası",
      });
    } else if (slug === "kelt") {
      tabs.push({
        id: "ogham",
        label:
          lang === "en"
            ? "ᚁ Ogham Tree Oracle"
            : lang === "sv"
              ? "ᚁ Ogham Trädorakel"
              : "ᚁ Ogham Ağaç Kehaneti",
      });
    } else if (slug === "saman") {
      tabs.push({
        id: "kumalak",
        label:
          lang === "en"
            ? "🎲 41-Stone Kumalak"
            : lang === "sv"
              ? "🎲 41-Stenars Kumalak"
              : "🎲 41 Taş Kumalak",
      });
      tabs.push({
        id: "dream",
        label:
          lang === "en"
            ? "🌙 Dream Compass"
            : lang === "sv"
              ? "🌙 Drömkompass"
              : "🌙 Rüya Pusulası",
      });
      tabs.push({
        id: "drum",
        label:
          lang === "en"
            ? "🥁 Drum Pulse Resonator"
            : lang === "sv"
              ? "🥁 Trumresonator"
              : "🥁 Şaman Davulu Rezonatörü",
      });
    } else if (slug === "witchcraft") {
      tabs.push({
        id: "wheel",
        label:
          lang === "en"
            ? "☸ Wheel of the Year Compass"
            : lang === "sv"
              ? "☸ Årshjulets Kompass"
              : "☸ Mevsim Çarkı Pusulası",
      });
      tabs.push({
        id: "drum",
        label:
          lang === "en"
            ? "🕯 Rhythm & Focus Resonator"
            : lang === "sv"
              ? "🕯 Rytm- & Fokusresonator"
              : "🕯 Ritim & Odak Rezonatörü",
      });
    }
    return tabs;
  }, [slug, lang, hall.doors.length]);

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-5xl px-4 py-8 sm:px-8 sm:py-14">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">runeyard.net</p>
        <div className="mt-3 flex flex-wrap items-baseline justify-between gap-4">
          <h1 className="font-display text-4xl font-medium tracking-[-0.025em] sm:text-6xl">
            {hall.title[lang]}
          </h1>
          {hall.closed && (
            <span className="border border-chalk/20 px-3 py-1 text-[10px] tracking-[0.2em] text-chalk/60 uppercase">
              {t.closed}
            </span>
          )}
        </div>
        <p className="mt-3 max-w-2xl text-sm sm:text-base leading-7 text-chalk/75">
          {hall.line[lang]}
        </p>

        {hall.image && (
          <div className="mt-6 overflow-hidden border border-chalk/12 bg-ink/60">
            <Image
              src={hall.image}
              alt={hall.title[lang]}
              width={1200}
              height={420}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        )}

        {/* Interactive Workbench Switcher (Keeps page clean and uncluttered!) */}
        {!hall.closed && toolTabs.length > 1 && (
          <div className="mt-7 border border-amber/30 bg-black/45 p-3 sm:p-4">
            <p className="text-[10px] tracking-[0.2em] text-amber/85 uppercase">
              {lang === "en"
                ? "Hall View & Interactive Instruments"
                : lang === "sv"
                  ? "Hallvy & Interaktiva Verktyg"
                  : "Salon Görünümü & İnteraktif Çalışma Araçları"}
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {toolTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTool(tab.id)}
                  className={`border px-3.5 py-2 text-xs tracking-[0.08em] transition-colors ${
                    activeTool === tab.id
                      ? "border-amber bg-amber/20 text-amber font-medium"
                      : "border-chalk/20 bg-ink/80 text-chalk/75 hover:border-chalk/45 hover:text-chalk"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Active Interactive Tool View */}
        {activeTool === "marduk50" && <MardukFiftyNamesAtlas />}
        {activeTool === "planetary" && <PlanetaryHoursCompass />}
        {activeTool === "ogham" && <OghamOracle />}
        {activeTool === "kumalak" && <KumalakOracle />}
        {activeTool === "dream" && <DreamCompass />}
        {activeTool === "wheel" && <WheelCompass />}
        {activeTool === "drum" && <DrumPulseResonator />}

        {/* Thematic Shelf Filter & Instant Search Bar */}
        {!hall.closed && hall.doors.length > 0 && (
          <section className="mt-8">
            <div className="flex flex-col gap-3 border-b border-chalk/15 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:flex-wrap sm:pb-0 no-scrollbar">
                <button
                  type="button"
                  onClick={() => setSelectedShelf("all")}
                  className={`shrink-0 rounded-full border px-3 py-1.5 text-xs transition-colors ${
                    selectedShelf === "all"
                      ? "border-amber bg-amber/20 text-amber font-medium"
                      : "border-chalk/15 bg-black/35 text-chalk/70 hover:border-chalk/35"
                  }`}
                >
                  {lang === "en"
                    ? `All (${hall.doors.length})`
                    : lang === "sv"
                      ? `Alla (${hall.doors.length})`
                      : `Tümü (${hall.doors.length})`}
                </button>
                {shelves.map((shelf) => (
                  <button
                    key={shelf.id}
                    type="button"
                    onClick={() => setSelectedShelf(shelf.id)}
                    className={`shrink-0 rounded-full border px-3 py-1.5 text-xs transition-colors ${
                      selectedShelf === shelf.id
                        ? "border-amber bg-amber/20 text-amber font-medium"
                        : "border-chalk/15 bg-black/35 text-chalk/70 hover:border-chalk/35"
                    }`}
                  >
                    {shelf.label[lang]}
                  </button>
                ))}
              </div>

              <input
                type="search"
                value={roomFilter}
                onChange={(e) => setRoomFilter(e.target.value)}
                placeholder={
                  lang === "en"
                    ? "Filter rooms in this hall..."
                    : lang === "sv"
                      ? "Filtrera rum i denna hall..."
                      : "Bu salonda konu veya kavram filtrele..."
                }
                className="w-full sm:w-64 border border-chalk/25 bg-black/50 px-3.5 py-1.5 text-xs text-chalk placeholder:text-chalk/40 focus:border-amber focus:outline-none"
              />
            </div>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredDoors.map((door) => (
                <li key={door.slug}>
                  <Link
                    href={`/${slug}/${door.slug}`}
                    className="card-slate group flex h-full min-h-48 flex-col justify-between border border-chalk/12 p-4 text-chalk transition-colors hover:border-amber/50 sm:p-5"
                  >
                    <div>
                      {door.image && (
                        <div className="mb-3.5 overflow-hidden border border-chalk/10 bg-ink/80">
                          <Image
                            src={door.image}
                            alt={door.title[lang]}
                            width={600}
                            height={220}
                            className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        </div>
                      )}
                      <span aria-hidden className="font-display text-2xl leading-none text-bronze">
                        {door.glyph}
                      </span>
                      <h2 className="mt-2.5 font-display text-xl sm:text-2xl font-medium tracking-[0.01em] text-chalk group-hover:text-amber transition-colors">
                        {cleanText(door.title[lang])}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-chalk/70 line-clamp-3">
                        {renderInlineText(door.summary[lang])}
                      </p>
                    </div>
                    <span className="mt-4 flex items-center justify-between border-t border-chalk/10 pt-3 text-[10px] tracking-[0.2em] text-chalk/50 uppercase group-hover:text-amber">
                      <span>{t.open}</span>
                      <span aria-hidden>→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {slug !== "shop" && (
          <>
            <ScholarSeal context={slug as BridgeContext} />
            <ShopBridge context={slug as BridgeContext} />
          </>
        )}

        <Link
          href="/"
          className="mt-10 inline-block border border-chalk/30 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk uppercase transition-colors hover:border-chalk/60"
        >
          {t.back}
        </Link>
      </main>
    </HallShell>
  );
}

export function TraditionDoor({
  traditionSlug,
  doorSlug,
}: {
  traditionSlug: TraditionSlug;
  doorSlug: string;
}) {
  const door = findTraditionDoor(traditionSlug, doorSlug);
  if (!door) return null;
  return <TraditionDoorView traditionSlug={traditionSlug} door={door} />;
}

function splitItem(item: string): { head: string | null; body: string } {
  for (const sep of [" — ", " – ", ":"]) {
    const idx = item.indexOf(sep);
    if (idx !== -1 && idx <= 75) {
      return {
        head: cleanText(item.slice(0, idx)),
        body: item.slice(idx + sep.length).trim(),
      };
    }
  }
  return { head: null, body: item };
}

function TraditionDoorView({
  traditionSlug,
  door,
}: {
  traditionSlug: TraditionSlug;
  door: TraditionSubDoor;
}) {
  const { lang } = useLanguage();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [showRoomList, setShowRoomList] = useState(false);
  const hall = traditions[traditionSlug];
  const chapters = door.chapters[lang];
  const items = door.items?.[lang];
  const practice = door.practice[lang];

  const currentIdx = hall.doors.findIndex((d) => d.slug === door.slug);
  const prevDoor = currentIdx > 0 ? hall.doors[currentIdx - 1] : null;
  const nextDoor =
    currentIdx !== -1 && currentIdx < hall.doors.length - 1 ? hall.doors[currentIdx + 1] : null;

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-4xl px-4 py-8 sm:px-8 sm:py-16">
        {/* Top Breadcrumb + Quick Sibling Room Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-chalk/12 pb-3">
          <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-chalk/60 uppercase">
            <Link href={`/${traditionSlug}`} className="hover:text-amber">
              ← {hall.title[lang]}
            </Link>
            <span>·</span>
            <span className="text-amber/85">
              {door.glyph} ({currentIdx + 1} / {hall.doors.length})
            </span>
          </div>

          <button
            type="button"
            onClick={() => setShowRoomList((prev) => !prev)}
            className="border border-chalk/20 bg-black/40 px-3 py-1 text-[10px] tracking-[0.16em] text-chalk/80 uppercase hover:border-amber/60 hover:text-amber"
          >
            {lang === "en"
              ? `All ${hall.doors.length} Rooms ▾`
              : lang === "sv"
                ? `Alla ${hall.doors.length} Rum ▾`
                : `Salondaki Tüm Odalar (${hall.doors.length}) ▾`}
          </button>
        </div>

        {showRoomList && (
          <div className="mt-3 grid max-h-64 grid-cols-1 gap-1.5 overflow-y-auto border border-amber/30 bg-ink/95 p-3 sm:grid-cols-2">
            {hall.doors.map((d) => (
              <Link
                key={d.slug}
                href={`/${traditionSlug}/${d.slug}`}
                onClick={() => setShowRoomList(false)}
                className={`px-3 py-2 text-xs transition-colors ${
                  d.slug === door.slug
                    ? "border border-amber/60 bg-amber/15 text-amber font-medium"
                    : "border border-chalk/10 bg-black/30 text-chalk/75 hover:border-chalk/35 hover:text-chalk"
                }`}
              >
                <span className="mr-2 font-display text-bronze">{d.glyph}</span>
                <span>{cleanText(d.title[lang])}</span>
              </Link>
            ))}
          </div>
        )}

        <h1 className="mt-5 flex flex-wrap items-baseline gap-x-3 font-display text-3xl font-medium tracking-[-0.025em] sm:gap-x-4 sm:text-5xl">
          <span aria-hidden className="text-[0.8em] text-bronze">
            {door.glyph}
          </span>
          <span>{cleanText(door.title[lang])}</span>
        </h1>
        <p className="mt-3 max-w-2xl font-display text-lg font-medium tracking-[-0.015em] text-chalk/75 sm:text-2xl">
          {renderInlineText(door.subtitle[lang])}
        </p>

        {door.image && (
          <div className="mt-6 sm:mt-8">
            <button
              type="button"
              onClick={() =>
                setLightbox({ src: door.image!, alt: cleanText(door.title[lang]) })
              }
              className="group block w-full overflow-hidden border border-chalk/15 bg-ink/60 text-left transition-colors hover:border-bronze/60"
            >
              <Image
                src={door.image}
                alt={cleanText(door.title[lang])}
                width={1200}
                height={440}
                priority
                className="h-auto w-full object-cover"
              />
              <div className="flex items-center justify-between border-t border-chalk/10 bg-ink/85 px-3 py-1.5 text-[11px] text-chalk/65 group-hover:text-chalk">
                <span>{ZOOM_HINT[lang]}</span>
              </div>
            </button>
          </div>
        )}

        <div className="mt-7 max-w-2xl space-y-5">
          {door.paragraphs[lang].map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-chalk/85 sm:text-lg sm:leading-8">
              {renderInlineText(paragraph)}
            </p>
          ))}
        </div>

        {chapters && chapters.length > 0 && (
          <div className="mt-10 max-w-2xl space-y-8 border-t border-chalk/15 pt-8 sm:mt-12">
            {chapters.map((chapter) => (
              <section key={chapter.heading}>
                <h2 className="font-display text-2xl font-medium tracking-[-0.015em] text-chalk sm:text-3xl">
                  {cleanText(chapter.heading)}
                </h2>
                <p className="mt-2.5 text-base leading-7 text-chalk/80">
                  {renderInlineText(chapter.body)}
                </p>
              </section>
            ))}
          </div>
        )}

        {items && items.length > 0 && (
          <ul
            className={`mt-10 grid gap-4 sm:mt-12 ${
              door.itemImages ? "max-w-4xl sm:grid-cols-2" : "max-w-2xl sm:grid-cols-2"
            }`}
          >
            {items.map((raw, idx) => {
              const { head, body } = splitItem(raw);
              const itemImg = door.itemImages?.[idx];
              return (
                <li
                  key={raw}
                  className="border border-chalk/12 bg-slate/50 p-3.5 text-sm leading-6 text-chalk/80 sm:p-4"
                >
                  {itemImg && (
                    <button
                      type="button"
                      onClick={() =>
                        setLightbox({
                          src: itemImg,
                          alt: head ?? cleanText(door.title[lang]),
                        })
                      }
                      className="mb-3.5 block w-full overflow-hidden border border-chalk/10 bg-ink/70 transition-colors hover:border-bronze/60"
                    >
                      <Image
                        src={itemImg}
                        alt={head ?? cleanText(door.title[lang])}
                        width={720}
                        height={440}
                        className="h-auto w-full object-cover"
                      />
                    </button>
                  )}
                  {head ? (
                    <>
                      <p className="font-display text-xl font-medium text-chalk">{head}</p>
                      <p className="mt-1.5 text-chalk/75">{renderInlineText(body)}</p>
                    </>
                  ) : (
                    <p>{renderInlineText(body)}</p>
                  )}
                </li>
              );
            })}
          </ul>
        )}

        {door.slug.includes("kumalak") && <KumalakOracle />}
        {(door.slug === "mardukun-50-kutsal-ismi" ||
          door.slug === "marukka-maruttuku" ||
          door.slug === "abzu-ve-asalluhi") && (
          <MardukFiftyNamesAtlas
            initialNumber={door.slug === "marukka-maruttuku" ? 3 : 1}
          />
        )}

        {practice && (
          <section className="card-slate mt-10 max-w-4xl border border-chalk/15 p-4 sm:mt-12 sm:p-6">
            <h2 className="font-display text-xl font-medium tracking-[0.02em] text-chalk">
              {cleanText(practice.title)}
            </h2>
            {door.practiceImage && (
              <button
                type="button"
                onClick={() =>
                  setLightbox({
                    src: door.practiceImage!,
                    alt: cleanText(practice.title),
                  })
                }
                className="my-4 block w-full overflow-hidden border border-chalk/12 bg-ink/80 text-left transition-colors hover:border-bronze/60 sm:my-5"
              >
                <Image
                  src={door.practiceImage}
                  alt={cleanText(practice.title)}
                  width={1080}
                  height={380}
                  className="h-auto w-full object-cover"
                />
                <div className="flex items-center justify-between border-t border-chalk/10 bg-ink/85 px-3 py-1.5 text-[11px] text-chalk/65">
                  <span>{ZOOM_HINT[lang]}</span>
                </div>
              </button>
            )}
            <ol className="mt-4 list-decimal space-y-2.5 pl-5 text-sm leading-6 text-chalk/80">
              {practice.steps.map((step) => (
                <li key={step}>{renderInlineText(step)}</li>
              ))}
            </ol>
          </section>
        )}

        <p className="mt-10 max-w-2xl border-l border-chalk/25 pl-4 font-display text-xl italic text-chalk/80">
          {renderInlineText(door.closing[lang])}
        </p>

        <aside className="mt-8 max-w-2xl border border-chalk/20 bg-black/40 p-4 text-xs leading-5 text-chalk/70">
          <p className="font-display text-sm font-medium tracking-[0.06em] text-chalk/90 uppercase">
            ⚕ {MEDICAL_DISCLAIMER[lang].heading}
          </p>
          <p className="mt-1.5">{MEDICAL_DISCLAIMER[lang].body}</p>
        </aside>

        {(traditionSlug === "saman" || traditionSlug === "witchcraft") && (
          <DrumPulseResonator />
        )}

        <SymbolicTwins traditionSlug={traditionSlug} doorSlug={door.slug} />

        {traditionSlug !== "shop" && (
          <>
            <ScholarSeal context={traditionSlug as BridgeContext} />
            <ShopBridge context={traditionSlug as BridgeContext} />
          </>
        )}

        <ShareBar
          title={`${cleanText(door.title[lang])} — ${hall.title[lang]}`}
          path={`/${traditionSlug}/${door.slug}`}
        />

        {/* Previous / Next Room Sequential Navigation */}
        {(prevDoor || nextDoor) && (
          <nav
            aria-label="Room navigation"
            className="mt-8 grid gap-3 border-t border-chalk/15 pt-6 sm:grid-cols-2"
          >
            {prevDoor ? (
              <Link
                href={`/${traditionSlug}/${prevDoor.slug}`}
                className="card-slate flex flex-col justify-between border border-chalk/15 p-4 transition-colors hover:border-bronze/60"
              >
                <span className="text-[10px] tracking-[0.2em] text-bronze uppercase">
                  {NAV_LABELS[lang].prev} · {prevDoor.glyph}
                </span>
                <span className="mt-1.5 font-display text-lg text-chalk">
                  {cleanText(prevDoor.title[lang])}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextDoor ? (
              <Link
                href={`/${traditionSlug}/${nextDoor.slug}`}
                className="card-slate flex flex-col justify-between border border-chalk/15 p-4 text-left transition-colors hover:border-bronze/60 sm:text-right"
              >
                <span className="text-[10px] tracking-[0.2em] text-bronze uppercase">
                  {nextDoor.glyph} · {NAV_LABELS[lang].next}
                </span>
                <span className="mt-1.5 font-display text-lg text-chalk">
                  {cleanText(nextDoor.title[lang])}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {door.ctaHref && door.ctaLabel && (
            <Link
              href={door.ctaHref}
              className="inline-block border border-chalk/50 bg-chalk/10 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk uppercase transition-colors hover:border-chalk/80 hover:bg-chalk/15"
            >
              {door.ctaLabel[lang]}
            </Link>
          )}
          {door.whatsapp && (
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-chalk/50 bg-chalk/10 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk uppercase transition-colors hover:border-chalk/80 hover:bg-chalk/15"
            >
              {WHATSAPP_LABEL[lang]}
            </a>
          )}
          <Link
            href={`/${traditionSlug}`}
            className="inline-block border border-chalk/30 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk uppercase transition-colors hover:border-chalk/60"
          >
            {hall.backLabel[lang]}
          </Link>
        </div>
      </main>

      {/* Full-Screen Diagram Lightbox Modal */}
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
                {CLOSE_LABEL[lang]}
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
