"use client";

import Link from "next/link";
import { HallShell } from "@/components/hall-shell";
import { useLanguage } from "@/components/language";
import { runeBySlug, runes, type Rune } from "@/content/runes";

export function RuneSheet() {
  const { t } = useLanguage();

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-5xl px-6 py-16 sm:px-8">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">runeyard.net</p>
        <h1 className="mt-4 font-display text-5xl font-medium tracking-[-0.025em] sm:text-6xl">
          {t.runes.title}
        </h1>
        <p className="mt-4 max-w-xl text-base text-chalk/70">{t.runes.line}</p>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {runes.map((rune) => (
            <li key={rune.slug}>
              <Link
                href={`/runler/${rune.slug}`}
                className="card-slate flex min-h-36 flex-col justify-between border border-chalk/10 px-4 py-4 text-chalk"
              >
                <span aria-hidden className="font-display text-4xl leading-none text-chalk/80">
                  {rune.glyph}
                </span>
                <span className="mt-6 font-display text-2xl font-medium tracking-[0.02em]">
                  {rune.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
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

export function RuneDoor({ slug }: { slug: string }) {
  const rune = runeBySlug(slug);
  if (!rune) return null;
  return <RuneDoorView rune={rune} />;
}

function RuneDoorView({ rune }: { rune: Rune }) {
  const { lang, t } = useLanguage();

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-3xl px-6 py-20 sm:px-8">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">runeyard.net</p>
        <h1 className="mt-4 flex flex-wrap items-baseline gap-x-4 font-display text-5xl font-medium tracking-[-0.025em] sm:text-6xl">
          <span aria-hidden className="text-[0.85em] text-chalk/70">
            {rune.glyph}
          </span>
          {rune.name}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-chalk/85">{rune.text[lang]}</p>
        <p className="mt-10 text-[10px] tracking-[0.18em] text-chalk/50 uppercase">{t.runes.names}</p>
        <p className="mt-2 font-display text-xl font-medium tracking-[0.02em] text-chalk/80">
          {rune.deities.join(" · ")}
        </p>
        <Link
          href="/runler"
          className="mt-10 inline-block border border-chalk/30 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk uppercase"
        >
          {t.backRunes}
        </Link>
      </main>
    </HallShell>
  );
}
