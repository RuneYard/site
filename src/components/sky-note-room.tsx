"use client";

import Image from "next/image";
import Link from "next/link";
import { HallShell } from "@/components/hall-shell";
import { useLanguage } from "@/components/language";
import { ShareBar } from "@/components/share-bar";
import { astrologySkyNotes } from "@/content/astrology";
import { findExtraSkyNote } from "@/content/sky-notes";

export function SkyNoteRoom({ slug }: { slug: string }) {
  const { lang, t } = useLanguage();
  const entry = findExtraSkyNote(slug);
  if (!entry) return null;

  const note = entry.data[lang];
  const otherNotes = astrologySkyNotes.filter(
    (n) => n.href !== `/astroloji/${slug}`,
  );

  return (
    <HallShell>
      <main
        id="icerik"
        className="mx-auto min-h-[70vh] w-full max-w-3xl px-6 py-16 sm:px-8 sm:py-20"
      >
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">
          {entry.badge}
        </p>

        <h1 className="mt-4 flex flex-wrap items-baseline gap-x-3 font-display text-5xl font-medium tracking-[-0.025em] sm:text-6xl">
          <span aria-hidden className="text-[0.72em] text-chalk/65">
            {entry.glyph}
          </span>
          <span>{note.title}</span>
        </h1>

        <p className="mt-3 font-display text-2xl font-medium tracking-[-0.015em] text-chalk/80 italic">
          {note.subtitle}
        </p>

        <p className="mt-2 text-xs tracking-[0.12em] text-chalk/55 uppercase">
          {note.dates}
        </p>

        <figure className="mt-7 overflow-hidden border border-chalk/15 bg-black/50">
          <Image
            src={entry.image}
            alt={note.title}
            width={1200}
            height={420}
            priority
            className="h-auto w-full object-cover"
          />
        </figure>

        <p className="mt-8 text-lg leading-8 text-chalk/85">{note.overview}</p>

        {note.phases && note.phases.length > 0 && (
          <div className="mt-10 space-y-4">
            {note.phases.map((phase) => (
              <section
                key={phase.label}
                className="border border-chalk/15 bg-chalk/[0.02] p-6"
              >
                <h2 className="font-display text-2xl font-medium tracking-[-0.015em] text-chalk">
                  {phase.label}
                </h2>
                <p className="mt-2.5 text-base leading-7 text-chalk/80">
                  {phase.text}
                </p>
              </section>
            ))}
          </div>
        )}

        <h2 className="mt-10 font-display text-2xl font-medium tracking-[-0.015em] text-chalk">
          {note.ask}
        </h2>
        <ul className="mt-5 border-t border-chalk/15">
          {note.points.map((item) => (
            <li key={item.lead} className="border-b border-chalk/15 py-4">
              <p className="font-display text-2xl font-medium text-chalk">
                {item.lead}
              </p>
              <p className="mt-2 text-base leading-7 text-chalk/80">
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-3.5 sm:grid-cols-2">
          {note.signs.map((sign) => (
            <section
              key={sign.name}
              className="card-slate border border-chalk/15 p-5"
            >
              <h3 className="font-display text-2xl font-medium text-chalk">
                {sign.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-chalk/80">
                {sign.text}
              </p>
            </section>
          ))}
        </div>

        <ShareBar title={note.title} path={`/astroloji/${slug}`} />

        <nav className="mt-12 border-t border-chalk/15 pt-8">
          <div className="grid gap-3 sm:grid-cols-2">
            {otherNotes.map((other) => (
              <Link
                key={other.href}
                href={other.href}
                className="border border-chalk/15 px-4 py-3.5 transition-colors hover:border-chalk/45"
              >
                <span className="text-[10px] tracking-[0.14em] text-chalk/50 uppercase">
                  {other.glyph}
                </span>
                <p className="mt-1 font-display text-xl text-chalk">
                  {other.title[lang]} →
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/astroloji"
              className="inline-block border border-chalk/30 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk uppercase transition-colors hover:border-chalk/60"
            >
              {t.backSky}
            </Link>
          </div>
        </nav>
      </main>
    </HallShell>
  );
}
