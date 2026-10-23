import type { Lang } from "@/lib/copy";

export type ShelfApp = {
  image: string;
  name: string;
  line: Record<Lang, string>;
  googlePlay: string;
  appStore: string;
};

export const apps: ShelfApp[] = [
  {
    image: "/apps/runeyard.jpg",
    name: "Rune Yard",
    line: {
      tr: "24 Elder Futhark rünü, doğum ve ruh rünü rehberliği, 5 kadim açılım, sesli Galdr ritüelleri ve niyetine özel altın mühürler.",
      en: "24 Elder Futhark runes, birth and soul rune guidance, 5 ancient spreads, vocal Galdr rituals, and custom golden bindrunes.",
      sv: "24 Elder Futhark-runor, födelse- och själsruneguide, 5 forntida läggningar, muntliga Galdr-ritualer och personliga gyllene bindrunor.",
    },
    googlePlay: "https://play.google.com/store/apps/details?id=build.runeyard",
    appStore: "https://apps.apple.com/us/app/rune-yard/id6818285230",
  },
  {
    image: "/apps/moonyard.jpg",
    name: "Moon Yard",
    line: {
      tr: "Konuma göre ay takvimi: günlük ay evresi, ayın bulunduğu burç, ay boşlukta saatleri ve 24 gezegen saati.",
      en: "Location-based moon calendar: daily lunar phase, Moon’s zodiac sign, void-of-course hours, and 24 planetary hours.",
      sv: "Platsbaserad månkalender: daglig månfas, månens stjärntecken, tomgångstimmar och 24 planetariska timmar.",
    },
    googlePlay: "",
    appStore: "",
  },
  {
    image: "/apps/dreamyard.jpg",
    name: "Dream Yard",
    line: {
      tr: "Rüya sembolleri rehberi, kişisel rüya günlüğü, bilinçli rüya pratikleri ve uyku öncesi frekans sesleri.",
      en: "Dream symbol guide, personal dream journal, lucid dreaming practices, and pre-sleep frequency soundscapes.",
      sv: "Drömsymbolguide, personlig drömdagbok, klardrömsövningar och frekvensljud inför sömnen.",
    },
    googlePlay: "",
    appStore: "",
  },
  {
    image: "/apps/runewords.jpg",
    name: "RuneWords",
    line: {
      tr: "İskandinav, Kelt ve Orta Asya mitolojilerinde geçen, kadim rün taşları ve tanrı güçleriyle örülü kelime macerası.",
      en: "A word adventure woven with ancient rune stones and divine powers across Norse, Celtic, and Central Asian mythologies.",
      sv: "Ett ordäventyr vävt med forntida runstenar och gudakrafter genom nordisk, keltisk och centralasiatisk mytologi.",
    },
    googlePlay: "",
    appStore: "",
  },
];
