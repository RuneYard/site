"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/language";

type ElementKey = "fire" | "earth" | "air" | "water";
type ModalityKey = "cardinal" | "fixed" | "mutable";

type SignDef = {
  id: string;
  glyph: string;
  element: ElementKey;
  modality: ModalityKey;
  ruler: { tr: string; en: string; sv: string };
  name: { tr: string; en: string; sv: string };
};

const ZODIAC_SIGNS: readonly SignDef[] = [
  {
    id: "aries",
    glyph: "♈",
    element: "fire",
    modality: "cardinal",
    ruler: { tr: "Mars", en: "Mars", sv: "Mars" },
    name: { tr: "Koç", en: "Aries", sv: "Väduren" },
  },
  {
    id: "taurus",
    glyph: "♉",
    element: "earth",
    modality: "fixed",
    ruler: { tr: "Venüs", en: "Venus", sv: "Venus" },
    name: { tr: "Boğa", en: "Taurus", sv: "Oxen" },
  },
  {
    id: "gemini",
    glyph: "♊",
    element: "air",
    modality: "mutable",
    ruler: { tr: "Merkür", en: "Mercury", sv: "Merkurius" },
    name: { tr: "İkizler", en: "Gemini", sv: "Tvillingarna" },
  },
  {
    id: "cancer",
    glyph: "♋",
    element: "water",
    modality: "cardinal",
    ruler: { tr: "Ay", en: "Moon", sv: "Månen" },
    name: { tr: "Yengeç", en: "Cancer", sv: "Kräftan" },
  },
  {
    id: "leo",
    glyph: "♌",
    element: "fire",
    modality: "fixed",
    ruler: { tr: "Güneş", en: "Sun", sv: "Solen" },
    name: { tr: "Aslan", en: "Leo", sv: "Lejonet" },
  },
  {
    id: "virgo",
    glyph: "♍",
    element: "earth",
    modality: "mutable",
    ruler: { tr: "Merkür", en: "Mercury", sv: "Merkurius" },
    name: { tr: "Başak", en: "Virgo", sv: "Jungfrun" },
  },
  {
    id: "libra",
    glyph: "♎",
    element: "air",
    modality: "cardinal",
    ruler: { tr: "Venüs", en: "Venus", sv: "Venus" },
    name: { tr: "Terazi", en: "Libra", sv: "Vågen" },
  },
  {
    id: "scorpio",
    glyph: "♏",
    element: "water",
    modality: "fixed",
    ruler: { tr: "Mars", en: "Mars", sv: "Mars" },
    name: { tr: "Akrep", en: "Scorpio", sv: "Skorpionen" },
  },
  {
    id: "sagittarius",
    glyph: "♐",
    element: "fire",
    modality: "mutable",
    ruler: { tr: "Jüpiter", en: "Jupiter", sv: "Jupiter" },
    name: { tr: "Yay", en: "Sagittarius", sv: "Skytten" },
  },
  {
    id: "capricorn",
    glyph: "♑",
    element: "earth",
    modality: "cardinal",
    ruler: { tr: "Satürn", en: "Saturn", sv: "Saturnus" },
    name: { tr: "Oğlak", en: "Capricorn", sv: "Stenbocken" },
  },
  {
    id: "aquarius",
    glyph: "♒",
    element: "air",
    modality: "fixed",
    ruler: { tr: "Satürn", en: "Saturn", sv: "Saturnus" },
    name: { tr: "Kova", en: "Aquarius", sv: "Vattumannen" },
  },
  {
    id: "pisces",
    glyph: "♓",
    element: "water",
    modality: "mutable",
    ruler: { tr: "Jüpiter", en: "Jupiter", sv: "Jupiter" },
    name: { tr: "Balık", en: "Pisces", sv: "Fiskarna" },
  },
];

const COMPASS_UI = {
  tr: {
    badge: "Klasik Mizaç & Harita Dengesi · İnteraktif Pusula",
    title: "Element & Nitelik Terazi Pusulası",
    lead: "Haritanın üç temel direğini (Yükselen, Güneş ve Ay burcunu) seçerek mizaç terorisindeki Ateş, Toprak, Hava ve Su ağırlığını; Öncü, Sabit ve Değişken hareket kalıbını ve haritanın dengeleyici rün kapısını hesapla.",
    ascLabel: "1. Yükselen Burç (Beden & Dümen)",
    sunLabel: "2. Güneş Burcu (Öz & İrade)",
    moonLabel: "3. Ay Burcu (Hafıza & İçgüdü)",
    elementsHeading: "Dört Element Dağılımı",
    modalitiesHeading: "Üç Nitelik (Hareket) Dağılımı",
    dominantLabel: "Baskın Element & Mizaç",
    missingLabel: "Eksik / Dengeye Çağrılan Element",
    balancedNotice: "Üç ana ışık üç farklı elemente yerleşmiş; doğuştan çok yönlü bir element köprüsü taşıyorsun.",
    elements: {
      fire: {
        name: "Ateş (Sıcak & Kuru · Kolerik İrade)",
        reading:
          "İrade, başlatma cesareti, doğrudanlık ve yüksek yaşam ısısı baskın. Gölgelenirse sabırsızlık, öfke veya çabuk tükenme yaratır; suyun sükûnetine ve toprağın sabrına ihtiyaç duyar.",
        missing:
          "Ana üçlüde Ateş yoksa motivasyonu dışarıdan ateşlemek zorlaşabilir; bedensel hareket, güneş ışığı ve Kenaz (ᚲ) / Sowilo (ᛊ) pratiği iradeyi uyandırır.",
        runeSlug: "kenaz",
        runeLabel: "ᚲ Kenaz (Meşale & İç Ateş)",
      },
      earth: {
        name: "Toprak (Soğuk & Kuru · Somut & Dayanıklı)",
        reading:
          "Somutlaştırma, sadakat, bedensel dayanıklılık ve maddeye biçim verme gücü yüksek. Gölgelenirse aşırı kontrol, değişime direnç ve ağırlık doğurur; havanın esnekliğiyle nefes alır.",
        missing:
          "Ana üçlüde Toprak eksikse fikirler ve duygular havada asılı kalabilir; çıplak ayakla toprağa basmak, somut takvim tutmak ve Jera (ᛃ) / Fehu (ᚠ) pratiği köklenmeyi sağlar.",
        runeSlug: "jera",
        runeLabel: "ᛃ Jera (Hasat & Doğal Döngü)",
      },
      air: {
        name: "Hava (Sıcak & Nemli · Zihin & İletişim)",
        reading:
          "Analiz, dil, bağlantı kurma, nesnel bakış ve kavramlar arası hız baskın. Gölgelenirse zihinsel dağılma, duygudan kopup her şeyi rasyonalize etme eğilimi verir.",
        missing:
          "Ana üçlüde Hava eksikse kendi öznel dünyanda sıkışma veya derdini kelimelere dökmede tutukluk yaşanabilir; nefes egzersizi, yazma disiplini ve Ansuz (ᚨ) pratiği zihni açar.",
        runeSlug: "ansuz",
        runeLabel: "ᚨ Ansuz (Nefes & Kutsal Söz)",
      },
      water: {
        name: "Su (Soğuk & Nemli · Sezgi & Hafıza)",
        reading:
          "Derin sezgi, empati, duygusal hafıza ve görünmeyeni sezme kabiliyeti baskın. Gölgelenirse sınır kaybı, geçmişe saplanma ve duygusal taşkınlık yaratır; toprak sınırıyla korunur.",
        missing:
          "Ana üçlüde Su eksikse duygusal kırılganlığı bastırma veya sezgisel işaretleri katı mantıkla susturma eğilimi görülür; su kenarı tefekkürü, rüya günlüğü ve Laguz (ᛚ) pratiği şifalandırır.",
        runeSlug: "laguz",
        runeLabel: "ᛚ Laguz (Derin Su & Sezgi)",
      },
    },
    modalities: {
      cardinal: "Öncü (Başlatan Kıvılcım)",
      fixed: "Sabit (Köklenen Merkez)",
      mutable: "Değişken (Dönüştüren Köprü)",
    },
    courseCta: "El, Yüz ve Element Analizi Eğitimi →",
    doorCta: "12 Burç ve Nitelikler Odası →",
  },
  en: {
    badge: "Classical Temperament & Chart Balance · Interactive Compass",
    title: "Element & Modality Balance Compass",
    lead: "Select the three primary pillars of your chart (Rising, Sun, and Moon signs) to calculate your Fire, Earth, Air, and Water temperament balance, your Cardinal, Fixed, and Mutable motion pattern, and your balancing rune door.",
    ascLabel: "1. Rising Sign (Ascendant · Body & Helm)",
    sunLabel: "2. Sun Sign (Core & Will)",
    moonLabel: "3. Moon Sign (Memory & Instinct)",
    elementsHeading: "Four Elements Distribution",
    modalitiesHeading: "Three Modalities Distribution",
    dominantLabel: "Dominant Element & Temperament",
    missingLabel: "Missing / Remedy Element",
    balancedNotice: "Your three lights sit in three distinct elements—carrying an innate multi-elemental bridge.",
    elements: {
      fire: {
        name: "Fire (Hot & Dry · Choleric Will)",
        reading:
          "Willpower, courage to initiate, directness, and vital heat dominate. In shadow it breeds impatience or burnout; it requires the coolness of water and patience of earth.",
        missing:
          "When Fire is absent from the primal triad, self-ignition can feel slow; physical movement, sunlight, and working with Kenaz (ᚲ) / Sowilo (ᛊ) awaken vital drive.",
        runeSlug: "kenaz",
        runeLabel: "ᚲ Kenaz (Torch & Inner Fire)",
      },
      earth: {
        name: "Earth (Cold & Dry · Melancholic-Grounded)",
        reading:
          "Manifestation, endurance, bodily steadiness, and craft over matter dominate. In shadow it turns into rigidity or over-caution; it breathes through the flexibility of air.",
        missing:
          "When Earth is absent from the primal triad, ideas and feelings may struggle to take tangible form; rhythmic routines, craft, and Jera (ᛃ) / Fehu (ᚠ) anchor the spirit.",
        runeSlug: "jera",
        runeLabel: "ᛃ Jera (Harvest & Natural Cycle)",
      },
      air: {
        name: "Air (Hot & Moist · Sanguine Mind)",
        reading:
          "Analysis, language, relational weaving, and objective perspective dominate. In shadow it scatters attention or over-rationalizes emotion.",
        missing:
          "When Air is absent from the primal triad, stepping back objectively or articulating inner states can feel heavy; breathwork, writing, and Ansuz (ᚨ) open the channel.",
        runeSlug: "ansuz",
        runeLabel: "ᚨ Ansuz (Breath & Sacred Word)",
      },
      water: {
        name: "Water (Cold & Moist · Phlegmatic Depth)",
        reading:
          "Deep intuition, empathy, emotional memory, and psychic sensitivity dominate. In shadow it dissolves boundaries or clings to the past; earth provides its vessel.",
        missing:
          "When Water is absent from the primal triad, vulnerability and intuition may be suppressed by dry logic; dream journaling, stillness by water, and Laguz (ᛚ) restore depth.",
        runeSlug: "laguz",
        runeLabel: "ᛚ Laguz (Deep Water & Intuition)",
      },
    },
    modalities: {
      cardinal: "Cardinal (Initiating Spark)",
      fixed: "Fixed (Sustaining Center)",
      mutable: "Mutable (Adapting Bridge)",
    },
    courseCta: "Hand, Face & Element Analysis Course →",
    doorCta: "12 Signs & Modalities Room →",
  },
  sv: {
    badge: "Klassiskt Temperament & Horoskopbalans · Interaktiv Kompass",
    title: "Element- & Kvalitetskompass",
    lead: "Välj horoskopets tre grundpelare (Ascendent, Sol- och Måntecken) för att beräkna din balans mellan Eld, Jord, Luft och Vatten, ditt rörelsemönster (Kardinal, Fast, Föränderlig) och din balanserande runport.",
    ascLabel: "1. Ascendent (Kropp & Roder)",
    sunLabel: "2. Soltecken (Kärna & Vilja)",
    moonLabel: "3. Måntecken (Minne & Instinkt)",
    elementsHeading: "Fördelning av De Fyra Elementen",
    modalitiesHeading: "Fördelning av De Tre Kvaliteterna",
    dominantLabel: "Dominerande Element & Temperament",
    missingLabel: "Saknat / Balanserande Element",
    balancedNotice: "Dina tre huvudljus vilar i tre olika element — du bär en naturlig bro mellan elementen.",
    elements: {
      fire: {
        name: "Eld (Varm & Torr · Kolerisk Vilja)",
        reading:
          "Viljekraft, mod att påbörja, direkthet och livsvärme dominerar. I skugga ger det otålighet eller utbrändhet; det behöver vattnets svalka och jordens tålamod.",
        missing:
          "Saknas Eld i triaden kan gnistan kännas trögstartad; fysisk rörelse, solljus och arbete med Kenaz (ᚲ) / Sowilo (ᛊ) väcker viljan.",
        runeSlug: "kenaz",
        runeLabel: "ᚲ Kenaz (Fackla & Inre Eld)",
      },
      earth: {
        name: "Jord (Kall & Torr · Konkret & Uthållig)",
        reading:
          "Förverkligande, uthållighet, kroppslig stadga och formkraft dominerar. I skugga skapar det stelhet; det andas genom luftens rörlighet.",
        missing:
          "Saknas Jord i triaden kan idéer och känslor bli svävande; fasta rutiner, hantverk och Jera (ᛃ) / Fehu (ᚠ) ger förankring.",
        runeSlug: "jera",
        runeLabel: "ᛃ Jera (Skörd & Naturligt Kretslopp)",
      },
      air: {
        name: "Luft (Varm & Fuktig · Tanke & Språk)",
        reading:
          "Analys, språk, överblick och snabba samband dominerar. I skugga ger det splittring eller överintellektualisering av känslor.",
        missing:
          "Saknas Luft i triaden kan distans och verbal klarhet kännas tungt; andningsarbete, skrivande och Ansuz (ᚨ) öppnar flödet.",
        runeSlug: "ansuz",
        runeLabel: "ᚨ Ansuz (Andedräkt & Heligt Ord)",
      },
      water: {
        name: "Vatten (Kall & Fuktig · Intuition & Minne)",
        reading:
          "Djup intuition, inlevelse, känslominne och lyhördhet dominerar. I skugga löses gränser upp; jorden ger vattnet dess kärl.",
        missing:
          "Saknas Vatten i triaden kan sårbarhet och intuition tryckas undan av torr logik; drömarbete, stillhet vid vatten och Laguz (ᛚ) återger djupet.",
        runeSlug: "laguz",
        runeLabel: "ᛚ Laguz (Djupt Vatten & Intuition)",
      },
    },
    modalities: {
      cardinal: "Kardinal (Initierande Gnista)",
      fixed: "Fast (Bevarande Centrum)",
      mutable: "Föränderlig (Anpassande Bro)",
    },
    courseCta: "Hand-, Ansikts- & Elementanalys Kurs →",
    doorCta: "De 12 Tecknen & Kvaliteterna →",
  },
} as const;

export function ElementCompass() {
  const { lang } = useLanguage();
  const ui = COMPASS_UI[lang];

  const [ascId, setAscId] = useState<string>("scorpio");
  const [sunId, setSunId] = useState<string>("libra");
  const [moonId, setMoonId] = useState<string>("taurus");

  const asc = ZODIAC_SIGNS.find((s) => s.id === ascId) ?? ZODIAC_SIGNS[0];
  const sun = ZODIAC_SIGNS.find((s) => s.id === sunId) ?? ZODIAC_SIGNS[6];
  const moon = ZODIAC_SIGNS.find((s) => s.id === moonId) ?? ZODIAC_SIGNS[1];

  // Weighted classical points: Ascendant = 40%, Sun = 35%, Moon = 25%
  const elScores: Record<ElementKey, number> = {
    fire: 0,
    earth: 0,
    air: 0,
    water: 0,
  };
  elScores[asc.element] += 40;
  elScores[sun.element] += 35;
  elScores[moon.element] += 25;

  const modScores: Record<ModalityKey, number> = {
    cardinal: 0,
    fixed: 0,
    mutable: 0,
  };
  modScores[asc.modality] += 40;
  modScores[sun.modality] += 35;
  modScores[moon.modality] += 25;

  const elementOrder: ElementKey[] = ["fire", "earth", "air", "water"];
  const sortedElements = [...elementOrder].sort((a, b) => elScores[b] - elScores[a]);
  const dominantEl = sortedElements[0];
  const missingEl = elementOrder.find((k) => elScores[k] === 0) ?? sortedElements[3];

  return (
    <section className="mt-12 border border-chalk/20 bg-chalk/[0.025] p-6 sm:p-8">
      <p className="text-[10px] tracking-[0.22em] text-chalk/55 uppercase">
        {ui.badge}
      </p>
      <h2 className="mt-3 font-display text-2xl font-medium tracking-[-0.015em] text-chalk sm:text-3xl">
        {ui.title}
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-chalk/75">
        {ui.lead}
      </p>

      {/* Selectors */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          { label: ui.ascLabel, value: ascId, setValue: setAscId, weight: "40%" },
          { label: ui.sunLabel, value: sunId, setValue: setSunId, weight: "35%" },
          { label: ui.moonLabel, value: moonId, setValue: setMoonId, weight: "25%" },
        ].map((item) => (
          <label
            key={item.label}
            className="flex flex-col border border-chalk/15 bg-black/40 p-4"
          >
            <span className="flex items-center justify-between text-[10px] tracking-[0.16em] text-chalk/60 uppercase">
              <span>{item.label}</span>
              <span className="text-chalk/40">{item.weight}</span>
            </span>
            <select
              value={item.value}
              onChange={(e) => item.setValue(e.target.value)}
              className="mt-2.5 border border-chalk/20 bg-ink px-3 py-2 font-display text-lg text-chalk focus:border-chalk/60 focus:outline-none"
            >
              {ZODIAC_SIGNS.map((sign) => (
                <option key={sign.id} value={sign.id} className="bg-ink text-chalk">
                  {sign.glyph} {sign.name[lang]} ({sign.ruler[lang]})
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>

      {/* Bars */}
      <div className="mt-8 grid gap-8 border-t border-chalk/15 pt-6 lg:grid-cols-2">
        <div>
          <h3 className="text-[11px] tracking-[0.18em] text-chalk/60 uppercase">
            {ui.elementsHeading}
          </h3>
          <div className="mt-4 space-y-3">
            {elementOrder.map((key) => {
              const pct = elScores[key];
              return (
                <div key={key}>
                  <div className="flex justify-between text-xs text-chalk/85">
                    <span>{ui.elements[key].name}</span>
                    <span className="font-display tabular-nums">{pct}%</span>
                  </div>
                  <div className="mt-1.5 h-2 w-full bg-chalk/10">
                    <div
                      className="h-full bg-chalk/75 transition-all duration-300"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-[11px] tracking-[0.18em] text-chalk/60 uppercase">
            {ui.modalitiesHeading}
          </h3>
          <div className="mt-4 space-y-3">
            {(["cardinal", "fixed", "mutable"] as const).map((mKey) => {
              const pct = modScores[mKey];
              return (
                <div key={mKey}>
                  <div className="flex justify-between text-xs text-chalk/85">
                    <span>{ui.modalities[mKey]}</span>
                    <span className="font-display tabular-nums">{pct}%</span>
                  </div>
                  <div className="mt-1.5 h-2 w-full bg-chalk/10">
                    <div
                      className="h-full bg-chalk/60 transition-all duration-300"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Readings */}
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <div className="card-slate border border-chalk/20 bg-black/40 p-5">
          <p className="text-[10px] tracking-[0.18em] text-chalk/55 uppercase">
            {ui.dominantLabel}
          </p>
          <h4 className="mt-2 font-display text-2xl font-medium text-chalk">
            {ui.elements[dominantEl].name}
          </h4>
          <p className="mt-2.5 text-sm leading-6 text-chalk/80">
            {ui.elements[dominantEl].reading}
          </p>
          <Link
            href={`/runler/${ui.elements[dominantEl].runeSlug}`}
            className="mt-4 inline-block font-display text-xs tracking-[0.14em] text-chalk uppercase hover:underline"
          >
            {ui.elements[dominantEl].runeLabel} →
          </Link>
        </div>

        <div className="card-slate border border-chalk/20 bg-black/40 p-5">
          <p className="text-[10px] tracking-[0.18em] text-chalk/55 uppercase">
            {ui.missingLabel}
          </p>
          <h4 className="mt-2 font-display text-2xl font-medium text-chalk">
            {ui.elements[missingEl].name}
          </h4>
          <p className="mt-2.5 text-sm leading-6 text-chalk/80">
            {ui.elements[missingEl].missing}
          </p>
          <Link
            href={`/runler/${ui.elements[missingEl].runeSlug}`}
            className="mt-4 inline-block font-display text-xs tracking-[0.14em] text-chalk uppercase hover:underline"
          >
            {ui.elements[missingEl].runeLabel} →
          </Link>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-chalk/12 pt-4 text-xs">
        <Link
          href="/egitim/el-yuz-element"
          className="font-display tracking-[0.14em] text-chalk/85 uppercase transition-colors hover:text-chalk hover:underline"
        >
          {ui.courseCta}
        </Link>
        <span className="text-chalk/25">·</span>
        <Link
          href="/astroloji/on-iki-burc-ve-nitelikler"
          className="font-display tracking-[0.14em] text-chalk/70 uppercase transition-colors hover:text-chalk"
        >
          {ui.doorCta}
        </Link>
      </div>
    </section>
  );
}
