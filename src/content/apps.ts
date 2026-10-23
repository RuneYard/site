export type ShelfApp = {
  image: string;
  name: string;
  line: string;
  googlePlay: string;
  appStore: string;
};

export const apps: ShelfApp[] = [
  {
    image: "/apps/runeyard.jpg",
    name: "Rune Yard",
    line: "24 Elder Futhark rünü, doğum ve ruh rünü rehberliği, 5 kadim açılım, sesli Galdr ritüelleri ve niyetine özel altın mühürler.",
    googlePlay: "https://play.google.com/store/apps/details?id=build.runeyard",
    appStore: "https://apps.apple.com/us/app/rune-yard/id6818285230",
  },
];
