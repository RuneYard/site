import type { Lang } from "@/lib/copy";
import { MARDUK_NAMES_1_10 } from "./marduk-names-1-10";
import { MARDUK_NAMES_11_20 } from "./marduk-names-11-20";
import { MARDUK_NAMES_21_30 } from "./marduk-names-21-30";
import { MARDUK_NAMES_31_40 } from "./marduk-names-31-40";
import { MARDUK_NAMES_41_50 } from "./marduk-names-41-50";

export type MardukElementKey = "water" | "fire" | "air" | "earth" | "ether";

export type MardukGeometryType =
  | "circle-wave"
  | "circle-point"
  | "triangle-up"
  | "triangle-down"
  | "hexagram"
  | "octagram"
  | "spiral"
  | "diamond"
  | "solar-cross"
  | "square-lattice"
  | "square-circle"
  | "foundation-cube"
  | "flame-shield"
  | "triple-wave-spark"
  | "axis-triangle"
  | "rising-eye"
  | "fate-spindle"
  | "spiral-point"
  | "triangle-spiral"
  | "measure-cross"
  | "axis-octagon"
  | "infinity-wave"
  | "dawn-lotus"
  | "council-circle"
  | "wind-arc"
  | "linear-blade"
  | "broken-ring"
  | "open-eye"
  | "seed-womb"
  | "primordial-sphere"
  | "crystal-prism"
  | "sprout-triangle"
  | "canal-grid"
  | "north-pillar"
  | "abundance-star"
  | "prow-triangle"
  | "twilight-iris"
  | "lineage-tree"
  | "threshold-arch"
  | "herald-sun"
  | "heart-square"
  | "tablet-star"
  | "stepped-mountain"
  | "solar-palm"
  | "cleaving-lens"
  | "shattering-lance"
  | "witness-circle"
  | "forge-triangle"
  | "rain-crescent"
  | "horizon-disc"
  | "lunar-crescent"
  | "underworld-square"
  | "mace-shield"
  | "obelisk-square"
  | "solar-crown"
  | "command-spiral"
  | "abzu-chalice"
  | "nebiru-crossing"
  | "kunukku-seal";

export type MardukSacredName = {
  number: number;
  gate: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  lesson: number;
  name: string;
  cuneiform: string;
  syllables: Record<Lang, string>;
  epithet: Record<Lang, string>;
  origin: Record<Lang, string>;
  archetype: Record<Lang, string>;
  symbolic: {
    element: MardukElementKey;
    elementLabel: Record<Lang, string>;
    direction: Record<Lang, string>;
    colors: Record<Lang, string>;
    geometry: Record<Lang, string>;
    geometryType: MardukGeometryType;
    plants: Record<Lang, string>;
    stones: Record<Lang, string>;
    animals: Record<Lang, string>;
  };
  ethicsAndBalance: {
    domains: Record<Lang, string>;
    ethics: Record<Lang, string>;
    grounding: Record<Lang, string>;
  };
  dailyMirror: Record<Lang, string>;
};

export type MardukGateInfo = {
  gate: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  roman: string;
  range: string;
  title: Record<Lang, string>;
  subtitle: Record<Lang, string>;
};

export const MARDUK_GATES: readonly MardukGateInfo[] = [
  {
    gate: 1,
    roman: "I",
    range: "1 – 4",
    title: {
      tr: "I. Kapı · Arınma, Kuruluş ve Koruma Çemberi",
      en: "Gate I · Purification, Foundation & the Protective Circle",
      sv: "Port I · Rening, Grundläggning & den Skyddande Cirkeln",
    },
    subtitle: {
      tr: "Asalluhi’nin gölge çözümünden Marduk’un merkezine, Marukka’nın temelinden Marutukku’nun ateş kalkanına (Ders 1–2).",
      en: "From Asalluhi's shadow-releasing water to Marduk's axis, Marukka's foundation, and Marutukku's fiery shield (Lessons 1–2).",
      sv: "Från Asalluhis skugglösande vatten till Marduks axel, Marukkas grund och Marutukkus eldsköld (Lektion 1–2).",
    },
  },
  {
    gate: 2,
    roman: "II",
    range: "5 – 10",
    title: {
      tr: "II. Kapı · Bağ Çözümü, Gök–Yer Yasası ve İlk Işık",
      en: "Gate II · Unbinding, Sky–Earth Law & Primordial Light",
      sv: "Port II · Förlösning, Himmel–Jord-Lag & det Första Ljuset",
    },
    subtitle: {
      tr: "Barashakushu, Lugal-Dimmer-Ankia, Nari-Lugal-Dimmer-Ankia, Asaruludu, Namtilaku ve Namru (Ders 3–5).",
      en: "Barashakushu, Lugal-Dimmer-Ankia, Nari-Lugal-Dimmer-Ankia, Asaruludu, Namtilaku, and Namru (Lessons 3–5).",
      sv: "Barashakushu, Lugal-Dimmer-Ankia, Nari-Lugal-Dimmer-Ankia, Asaruludu, Namtilaku och Namru (Lektion 3–5).",
    },
  },
  {
    gate: 3,
    roman: "III",
    range: "11 – 17",
    title: {
      tr: "III. Kapı · İlahi Ölçü, Kudret, Nefes ve Saf Ateş",
      en: "Gate III · Divine Measure, Might, Breath & Pure Flame",
      sv: "Port III · Gudomligt Mått, Kraft, Andedräkt & Ren Låga",
    },
    subtitle: {
      tr: "Asaru, Asarualim, Asarualimnunna, Tutu, Ziukkinna, Ziku ve Agaku (Ders 6–8).",
      en: "Asaru, Asarualim, Asarualimnunna, Tutu, Ziukkinna, Ziku, and Agaku (Lessons 6–8).",
      sv: "Asaru, Asarualim, Asarualimnunna, Tutu, Ziukkinna, Ziku och Agaku (Lektion 6–8).",
    },
  },
  {
    gate: 4,
    roman: "IV",
    range: "18 – 26",
    title: {
      tr: "IV. Kapı · Sükût, Kalp Görüsü, Tohum ve Yaşam Suları",
      en: "Gate IV · Silence, Heart-Vision, Seed & Living Waters",
      sv: "Port IV · Tystnad, Hjärtats Syn, Frö & Levande Vatten",
    },
    subtitle: {
      tr: "Tuku, Šazu, Zulummu, Mummu, Gilma, Epadun, Enbilulu, Gugal ve Hegal (Ders 9–11).",
      en: "Tuku, Šazu, Zulummu, Mummu, Gilma, Epadun, Enbilulu, Gugal, and Hegal (Lessons 9–11).",
      sv: "Tuku, Šazu, Zulummu, Mummu, Gilma, Epadun, Enbilulu, Gugal och Hegal (Lektion 9–11).",
    },
  },
  {
    gate: 5,
    roman: "V",
    range: "27 – 35",
    title: {
      tr: "V. Kapı · Kaos Gemisi, Gören Göz, Kutsal Soy ve Kalıcı Yasa",
      en: "Gate V · The Ark of Order, Discerning Eye, Lineage & Enduring Law",
      sv: "Port V · Ordningens Farkost, Seende Öga, Ätt & Bestående Lag",
    },
    subtitle: {
      tr: "Sirsir, Malah, Gishnumun-Ab, Lugal-Ab-Dubur, Pagal-Guenna, Lugal-Durmah, Aranunna, Dumu-Duku ve Lugal-Shanna (Ders 12–14).",
      en: "Sirsir, Malah, Gishnumun-Ab, Lugal-Ab-Dubur, Pagal-Guenna, Lugal-Durmah, Aranunna, Dumu-Duku, and Lugal-Shanna (Lessons 12–14).",
      sv: "Sirsir, Malah, Gishnumun-Ab, Lugal-Ab-Dubur, Pagal-Guenna, Lugal-Durmah, Aranunna, Dumu-Duku och Lugal-Shanna (Lektion 12–14).",
    },
  },
  {
    gate: 6,
    roman: "VI",
    range: "36 – 44",
    title: {
      tr: "VI. Kapı · Kozmik İdrak, Kırıcı Otorite ve Gezegensel Güçler",
      en: "Gate VI · Cosmic Discernment, Shattering Authority & Planetary Powers",
      sv: "Port VI · Kosmisk Ursel, Brytande Auktoritet & Planetära Krafter",
    },
    subtitle: {
      tr: "Iruga, Irqingu, Kinma, Gibil, Addu, Šamaš, Sin, Nergal ve Ninurta (Ders 15–17).",
      en: "Iruga, Irqingu, Kinma, Gibil, Addu, Šamaš, Sin, Nergal, and Ninurta (Lessons 15–17).",
      sv: "Iruga, Irqingu, Kinma, Gibil, Addu, Šamaš, Sin, Nergal och Ninurta (Lektion 15–17).",
    },
  },
  {
    gate: 7,
    roman: "VII",
    range: "45 – 50",
    title: {
      tr: "VII. Kapı · Sarsılmaz Sütun, Kraliyet Tacı, Abzu Bilgeliği, Nebiru Geçidi ve 50. Mühür",
      en: "Gate VII · Unshakable Pillar, Royal Crown, Abzu Wisdom, Nebiru Crossing & the 50th Seal",
      sv: "Port VII · Orubblig Pelare, Kungakrona, Abzu-Visdom, Nebiru-Korsning & det 50:e Sigillet",
    },
    subtitle: {
      tr: "Tukulti, Šarilu, Enlil, Ea (Enki), Nebiru (Hansha) ve Hamšâ / Kunukku (Ders 18–19).",
      en: "Tukulti, Šarilu, Enlil, Ea (Enki), Nebiru (Hansha), and Hamšâ / Kunukku (Lessons 18–19).",
      sv: "Tukulti, Šarilu, Enlil, Ea (Enki), Nebiru (Hansha) och Hamšâ / Kunukku (Lektion 18–19).",
    },
  },
];

export const MARDUK_FIFTY_NAMES: readonly MardukSacredName[] = [
  ...MARDUK_NAMES_1_10,
  ...MARDUK_NAMES_11_20,
  ...MARDUK_NAMES_21_30,
  ...MARDUK_NAMES_31_40,
  ...MARDUK_NAMES_41_50,
];
