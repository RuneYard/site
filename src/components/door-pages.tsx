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

export function EducationRoom() {
  const { t } = useLanguage();

  return (
    <Frame title={t.education.title}>
      <h2 className="mt-8 font-display text-3xl font-medium tracking-[-0.02em]">
        {t.education.heading}
      </h2>
      <ul className="mt-6 border-t border-chalk/15">
        {t.education.items.map((item) => (
          <li
            key={item.name}
            className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-chalk/15 py-4"
          >
            <Link
              href={item.href}
              className="font-display text-2xl font-medium underline decoration-chalk/30 underline-offset-4"
            >
              {item.name}
            </Link>
            <span className="text-sm text-chalk/60">{t.education.status}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-chalk/55">{t.education.soon}</p>
    </Frame>
  );
}

export function AstrologyRoom() {
  const { t } = useLanguage();

  return (
    <Frame title={t.astrology.title}>
      <ul className="mt-8 border-t border-chalk/15">
        {t.astrology.items.map((item) => (
          <li key={item.href} className="border-b border-chalk/15 py-4">
            <Link
              href={item.href}
              className="font-display text-2xl font-medium underline decoration-chalk/30 underline-offset-4"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

