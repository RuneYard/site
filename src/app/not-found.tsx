"use client";

import Link from "next/link";
import { HallShell } from "@/components/hall-shell";
import { useLanguage } from "@/components/language";

const COPY = {
  tr: {
    badge: "404 · SİSLİ EŞİK",
    title: "Bu Eşikte Henüz Bir Kapı Yok",
    body: "Aradığın oda yer değiştirmiş veya yanlış bir geçide adım atmış olabilirsin. Kuzey yıldızını ve ocağın ateşini takip ederek ana salonlara dönebilirsin.",
    home: "← Ana Hole Dön",
    runes: "ᚠ Rünler Salonu",
    astrology: "☉ Astroloji Salonu",
    witchcraft: "⚝ Witchcraft & Yeşil Ahit",
    shop: "⚱ Shop · Atölye (Shopier)",
    hearth: "🔥 Ocağa Sor",
  },
  en: {
    badge: "404 · MISTY THRESHOLD",
    title: "No Door Stands at This Threshold",
    body: "The room you seek may have shifted or the path was misread. Follow the North Star and the hearth fire back to the main halls.",
    home: "← Back to Main Hall",
    runes: "ᚠ Runes Hall",
    astrology: "☉ Astrology Hall",
    witchcraft: "⚝ Witchcraft & Green Covenant",
    shop: "⚱ Shop · Workshop",
    hearth: "🔥 Ask the Hearth",
  },
  sv: {
    badge: "404 · DIMMIG TRÖSKEL",
    title: "Ingen Dörr Står Vid Denna Tröskel",
    body: "Rummet du söker kan ha flyttats eller stigen lästs fel. Följ Polstjärnan och härdens eld tillbaka till huvudsalen.",
    home: "← Tillbaka till Hallen",
    runes: "ᚠ Runornas Sal",
    astrology: "☉ Astrologisalen",
    witchcraft: "⚝ Witchcraft & Gröna Förbundet",
    shop: "⚱ Shop · Ateljé",
    hearth: "🔥 Fråga Härden",
  },
} as const;

export default function NotFound() {
  const { lang } = useLanguage();
  const c = COPY[lang];

  return (
    <HallShell>
      <main
        id="icerik"
        className="mx-auto flex min-h-[72vh] w-full max-w-3xl flex-col justify-center px-6 py-20 text-center"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center border border-amber/45 bg-soot font-display text-4xl text-amber">
          ᛉ
        </div>
        <p className="mt-5 text-[11px] font-semibold tracking-[0.24em] text-amber uppercase">
          {c.badge}
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-[-0.02em] text-chalk sm:text-5xl">
          {c.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-chalk/75">
          {c.body}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="border border-[#e5be73] bg-[#d4a857] px-6 py-3 text-xs font-bold tracking-[0.2em] text-[#141a1c] uppercase hover:bg-[#e5be73] transition"
          >
            {c.home}
          </Link>
          <Link
            href="/#ocak"
            className="border border-amber/50 bg-amber/10 px-5 py-3 text-xs font-medium tracking-[0.18em] text-amber uppercase hover:bg-amber hover:text-ink transition"
          >
            {c.hearth}
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 border-t border-chalk/12 pt-8 sm:grid-cols-2">
          <Link
            href="/runler"
            className="card-slate border border-chalk/15 p-4 text-left hover:border-amber/50 transition"
          >
            <span className="font-display text-lg text-chalk hover:text-amber">
              {c.runes} →
            </span>
          </Link>
          <Link
            href="/astroloji"
            className="card-slate border border-chalk/15 p-4 text-left hover:border-amber/50 transition"
          >
            <span className="font-display text-lg text-chalk hover:text-amber">
              {c.astrology} →
            </span>
          </Link>
          <Link
            href="/witchcraft"
            className="card-slate border border-chalk/15 p-4 text-left hover:border-amber/50 transition"
          >
            <span className="font-display text-lg text-chalk hover:text-amber">
              {c.witchcraft} →
            </span>
          </Link>
          <Link
            href="/shop"
            className="card-slate border border-chalk/15 p-4 text-left hover:border-amber/50 transition"
          >
            <span className="font-display text-lg text-chalk hover:text-amber">
              {c.shop} →
            </span>
          </Link>
        </div>
      </main>
    </HallShell>
  );
}
