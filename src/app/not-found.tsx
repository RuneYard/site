"use client";

import Link from "next/link";
import { HallShell } from "@/components/hall-shell";
import { useLanguage } from "@/components/language";

const COPY = {
  tr: {
    badge: "404 · Sisli Eşik · Tiwaz (ᛏ) Pusulası",
    title: "Bu Patika Sislerin Arasında Kaybolmuş",
    body: "Aradığın taş oda taşınmış veya hiç oyulmamış olabilir. Kuzey denizcilerinin fırtınada baktığı Kutup Yıldızı (Tiwaz · ᛏ) gibi, aşağıdaki kapılardan Kış Odası’nın merkez ocağına güvenle dönebilirsin.",
    homeBtn: "Kış Odası Ana Salonuna Dön →",
    runesBtn: "24 Rün Kapısı",
    skyBtn: "Gökyüzü Notları",
  },
  en: {
    badge: "404 · Misty Threshold · Tiwaz (ᛏ) Compass",
    title: "This Path Has Vanished Into the Mist",
    body: "The stone room you sought may have moved or was never carved. Like the Pole Star (Tiwaz · ᛏ) that guided northern seafarers through fog, the doors below will lead you safely back to the Winter Hall.",
    homeBtn: "Return to the Winter Hall →",
    runesBtn: "24 Rune Doors",
    skyBtn: "Sky Dispatches",
  },
  sv: {
    badge: "404 · Dimmig Tröskel · Tiwaz (ᛏ) Kompass",
    title: "Denna Stig Har Försvunnit i Dimman",
    body: "Stenrummet du sökte kan ha flyttats eller aldrig ristats. Liksom Polstjärnan (Tiwaz · ᛏ) ledde nordiska sjöfarare genom dimman visar portarna nedan vägen tillbaka till Vinterrummet.",
    homeBtn: "Återvänd till Vinterrummet →",
    runesBtn: "24 Runportar",
    skyBtn: "Himmelsnoter",
  },
} as const;

export default function NotFound() {
  const { lang } = useLanguage();
  const c = COPY[lang];

  return (
    <HallShell>
      <main
        id="icerik"
        className="mx-auto flex min-h-[72vh] w-full max-w-3xl flex-col items-start justify-center px-6 py-20 sm:px-8"
      >
        <p className="text-[10px] tracking-[0.22em] text-chalk/55 uppercase">
          {c.badge}
        </p>
        <div className="mt-4 flex items-baseline gap-4">
          <span
            aria-hidden
            className="font-display text-6xl leading-none text-chalk/80 sm:text-7xl"
          >
            ᛏ
          </span>
          <h1 className="font-display text-4xl font-medium tracking-[-0.02em] text-chalk sm:text-5xl">
            {c.title}
          </h1>
        </div>
        <p className="mt-5 max-w-xl text-base leading-7 text-chalk/80">
          {c.body}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="border border-chalk/55 bg-chalk/[0.08] px-6 py-3 font-display text-xs tracking-[0.16em] text-chalk uppercase transition-colors hover:border-chalk"
          >
            {c.homeBtn}
          </Link>
          <Link
            href="/runler"
            className="border border-chalk/25 px-5 py-3 font-display text-xs tracking-[0.16em] text-chalk/80 uppercase transition-colors hover:border-chalk/60 hover:text-chalk"
          >
            ᚠ {c.runesBtn}
          </Link>
          <Link
            href="/astroloji"
            className="border border-chalk/25 px-5 py-3 font-display text-xs tracking-[0.16em] text-chalk/80 uppercase transition-colors hover:border-chalk/60 hover:text-chalk"
          >
            ☉ {c.skyBtn}
          </Link>
        </div>
      </main>
    </HallShell>
  );
}
