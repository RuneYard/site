"use client";

import Link from "next/link";
import { HallShell } from "@/components/hall-shell";
import { useLanguage } from "@/components/language";

function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  const { t } = useLanguage();

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-3xl px-6 py-20 sm:px-8">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">runeyard.net</p>
        <h1 className="mt-4 font-display text-5xl font-medium tracking-[-0.025em] sm:text-6xl">
          {title}
        </h1>
        {children}
        <Link
          href="/"
          className="mt-10 inline-block border border-chalk/30 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk uppercase"
        >
          {t.back}
        </Link>
      </main>
    </HallShell>
  );
}

export function RuneRoom() {
  const { t } = useLanguage();

  return (
    <Frame title={t.runes.title}>
      <p className="mt-6 max-w-xl text-lg leading-8 text-chalk/80">{t.runes.line}</p>
    </Frame>
  );
}

export function EducationRoom() {
  const { t } = useLanguage();

  return (
    <Frame title={t.education.title}>
      <ul className="mt-8 border-t border-chalk/15">
        {t.education.items.map((item) => (
          <li
            key={item.date}
            className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b border-chalk/15 py-4"
          >
            <time className="text-sm tracking-[0.04em] text-chalk/60">{item.date}</time>
            <span className="font-display text-2xl font-medium">{item.topic}</span>
            <span className="text-[10px] tracking-[0.18em] text-chalk/50 uppercase">{t.draft}</span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

export function AstrologyRoom() {
  const { t } = useLanguage();

  return (
    <Frame title={t.astrology.title}>
      <p className="mt-6 text-[10px] tracking-[0.18em] text-chalk/50 uppercase">{t.draft}</p>
      <p className="mt-3 max-w-xl text-lg leading-8 text-chalk/80">{t.astrology.note}</p>
    </Frame>
  );
}
