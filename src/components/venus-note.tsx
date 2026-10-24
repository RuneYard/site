"use client";

import Image from "next/image";
import Link from "next/link";
import { HallShell } from "@/components/hall-shell";
import { useLanguage } from "@/components/language";
import { ShareBar } from "@/components/share-bar";
import { venusNote } from "@/lib/venus-note";

export function VenusNote() {
  const { lang, t } = useLanguage();
  const note = venusNote(lang);

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">
          runeyard.net · Gökyüzü Notu · ♀ ℞
        </p>
        <h1 className="mt-4 flex flex-wrap items-baseline gap-x-3 font-display text-5xl font-medium tracking-[-0.025em] sm:text-6xl">
          <span aria-hidden className="text-[0.72em] text-chalk/65">
            ♀
          </span>
          {note.title}
          <span aria-hidden className="text-[0.38em] tracking-[0.14em] text-chalk/45">
            ℞
          </span>
        </h1>
        <p className="mt-3 text-sm tracking-[0.06em] text-chalk/65 uppercase">{note.dates}</p>

        <figure className="mt-7 overflow-hidden border border-chalk/15 bg-black/50">
          <Image
            src="/astroloji/venus-retrosu.jpg"
            alt={note.title}
            width={1200}
            height={420}
            priority
            className="h-auto w-full object-cover"
          />
        </figure>

        <p className="mt-8 text-lg leading-8 text-chalk/85">{note.overview}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {note.phases.map((phase) => (
            <section
              key={phase.label}
              className="border border-chalk/15 bg-chalk/[0.02] p-6"
            >
              <h2 className="font-display text-2xl font-medium tracking-[-0.015em] text-chalk">
                {phase.label}
              </h2>
              <p className="mt-3 text-base leading-7 text-chalk/80">{phase.text}</p>
            </section>
          ))}
        </div>

        <ul className="mt-10 border-t border-chalk/15">
          {note.cautions.map((item) => (
            <li key={item.lead} className="border-b border-chalk/15 py-5">
              <p className="font-display text-2xl font-medium text-chalk">{item.lead}</p>
              <p className="mt-2 text-base leading-7 text-chalk/80">{item.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-3.5 sm:grid-cols-2">
          {note.signs.map((sign) => (
            <section
              key={sign.name}
              className="card-slate border border-chalk/15 p-5"
            >
              <h2 className="font-display text-2xl font-medium text-chalk">{sign.name}</h2>
              <p className="mt-2 text-sm leading-6 text-chalk/80">{sign.text}</p>
            </section>
          ))}
        </div>

        <ShareBar title={note.title} path="/astroloji/venus-retrosu" />

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/astroloji"
            className="inline-block border border-chalk/30 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk uppercase transition-colors hover:border-chalk/60"
          >
            {t.backSky}
          </Link>
          <Link
            href="/astroloji/terazi-yeniay"
            className="inline-block border border-chalk/20 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk/80 uppercase transition-colors hover:border-chalk/50"
          >
            ♎ 10 Ekim Terazi Yeniayı →
          </Link>
          <Link
            href="/astroloji/boga-dolunayi"
            className="inline-block border border-chalk/20 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk/80 uppercase transition-colors hover:border-chalk/50"
          >
            ♉ 26 Ekim Boğa Dolunayı →
          </Link>
        </div>
      </main>
    </HallShell>
  );
}
