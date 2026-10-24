"use client";

import Image from "next/image";
import Link from "next/link";
import { HallShell } from "@/components/hall-shell";
import { useLanguage } from "@/components/language";
import { ShareBar } from "@/components/share-bar";
import { taurusFullMoonNote } from "@/lib/taurus-fullmoon-note";

export function TaurusFullMoonNote() {
  const { lang, t } = useLanguage();
  const note = taurusFullMoonNote(lang);

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">
          runeyard.net · Gökyüzü Notu · ♉ 🌕
        </p>
        <h1 className="mt-4 flex flex-wrap items-baseline gap-x-3 font-display text-5xl font-medium tracking-[-0.025em] sm:text-6xl">
          <span aria-hidden className="text-[0.72em] text-chalk/65">
            ♉
          </span>
          {note.title}
        </h1>
        <p className="mt-3 font-display text-2xl font-medium tracking-[-0.015em] text-chalk/80 italic">
          {note.subtitle}
        </p>

        <figure className="mt-7 overflow-hidden border border-chalk/15 bg-black/50">
          <Image
            src="/astroloji/boga-dolunayi.jpg"
            alt={note.title}
            width={1200}
            height={420}
            priority
            className="h-auto w-full object-cover"
          />
        </figure>

        <p className="mt-8 text-lg leading-8 text-chalk/85">{note.overview}</p>

        <h2 className="mt-10 font-display text-2xl font-medium tracking-[-0.015em] text-chalk">
          {note.ask}
        </h2>
        <ul className="mt-5 border-t border-chalk/15">
          {note.points.map((item) => (
            <li key={item.lead} className="border-b border-chalk/15 py-4">
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
              <h3 className="font-display text-2xl font-medium text-chalk">{sign.name}</h3>
              <p className="mt-2 text-sm leading-6 text-chalk/80">{sign.text}</p>
            </section>
          ))}
        </div>

        <ShareBar title={note.title} path="/astroloji/boga-dolunayi" />

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
            ← ♎ 10 Ekim Terazi Yeniayı
          </Link>
          <Link
            href="/astroloji/venus-retrosu"
            className="inline-block border border-chalk/20 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk/80 uppercase transition-colors hover:border-chalk/50"
          >
            ♀ Venüs Retrosu →
          </Link>
        </div>
      </main>
    </HallShell>
  );
}
