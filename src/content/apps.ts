import type { Lang } from "@/lib/copy";

export type ShelfApp = {
  image: string;
  name: string;
  line: Record<Lang, string> | string;
  googlePlay: string;
  appStore: string;
};

export const apps: ShelfApp[] = [
  {
    image: "/apps/runeyard.jpg",
    name: "Rune Yard",
    line: {
      tr: "24 Elder Futhark rünü, doğum ve ruh rünü rehberliği, 5 kadim açılım, sesli Galdr ritüelleri ve niyetine özel altın mühürler.",
      en: "24 Elder Futhark runes, soul rune calendar, 5 ancient spreads, vocal Galdr rituals, and custom golden bindrunes.",
      sv: "24 Elder Futhark-runor, själsruneguide, 5 forntida läggningar, muntliga Galdr-ritualer och personliga gyllene bindrunor.",
    },
    googlePlay: "https://play.google.com/store/apps/details?id=build.runeyard",
    appStore: "https://apps.apple.com/us/app/rune-yard/id6818285230",
  },
];
