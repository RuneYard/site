"use client";

import Link from "next/link";
import { HallShell } from "@/components/hall-shell";
import { useLanguage } from "@/components/language";
import { venusNote } from "@/lib/venus-note";

export function VenusNote() {
  const { lang, t } = useLanguage();
  const note = venusNote(lang);

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-3xl px-6 py-20 sm:px-8">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">runeyard.net</p>
        <h1 className="mt-4 flex flex-wrap items-baseline gap-x-3 font-display text-5xl font-medium tracking-[-0.025em] sm:text-6xl">
          <span aria-hidden className="text-[0.72em] text-chalk/55">
            ♀
          </span>
          {note.title}
          <span aria-hidden className="text-[0.38em] tracking-[0.14em] text-chalk/45">
            ℞
          </span>
        </h1>
        <p className="mt-3 text-sm tracking-[0.04em] text-chalk/60">{note.dates}</p>

        <p className="mt-8 max-w-xl text-lg leading-8 text-chalk/85">{note.overview}</p>

        <div className="mt-10 max-w-xl space-y-8">
          {note.phases.map((phase) => (
            <section key={phase.label}>
              <h2 className="font-display text-2xl font-medium tracking-[-0.02em]">{phase.label}</h2>
              <p className="mt-3 text-base leading-7 text-chalk/80">{phase.text}</p>
            </section>
          ))}
        </div>

        <ul className="mt-12 max-w-xl border-t border-chalk/15">
          {note.cautions.map((item) => (
            <li key={item.lead} className="border-b border-chalk/15 py-4">
              <p className="font-display text-2xl font-medium">{item.lead}</p>
              <p className="mt-2 text-base leading-7 text-chalk/80">{item.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 max-w-xl border-t border-chalk/15">
          {note.signs.map((sign) => (
            <section key={sign.name} className="border-b border-chalk/15 py-5">
              <h2 className="font-display text-2xl font-medium">{sign.name}</h2>
              <p className="mt-2 text-base leading-7 text-chalk/80">{sign.text}</p>
            </section>
          ))}
        </div>

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
