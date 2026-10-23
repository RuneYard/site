"use client";

import Link from "next/link";
import { HallShell } from "@/components/hall-shell";
import { useLanguage } from "@/components/language";
import {
  findTraditionDoor,
  traditions,
  type TraditionSlug,
  type TraditionSubDoor,
} from "@/content/traditions";

const WHATSAPP_URL = "https://wa.me/905455642164";
const WHATSAPP_LABEL = {
  tr: "WhatsApp · İletişim",
  en: "WhatsApp · Contact",
  sv: "WhatsApp · Kontakt",
} as const;

export function TraditionRoom({ slug }: { slug: TraditionSlug }) {
  const { lang, t } = useLanguage();
  const hall = traditions[slug];

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-5xl px-6 py-16 sm:px-8">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">runeyard.net</p>
        <h1 className="mt-4 font-display text-5xl font-medium tracking-[-0.025em] sm:text-6xl">
          {hall.title[lang]}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-chalk/70">{hall.line[lang]}</p>

        <ul className="mt-10 grid gap-3.5 sm:grid-cols-2">
          {hall.doors.map((door) => (
            <li key={door.slug}>
              <Link
                href={`/${slug}/${door.slug}`}
                className="card-slate flex h-full min-h-48 flex-col justify-between border border-chalk/10 p-6 text-chalk"
              >
                <div>
                  <span aria-hidden className="font-display text-3xl leading-none text-chalk/75">
                    {door.glyph}
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-medium tracking-[0.01em] text-chalk sm:text-3xl">
                    {door.title[lang]}
                  </h2>
                  <p className="mt-2.5 text-sm leading-6 text-chalk/70">{door.summary[lang]}</p>
                </div>
                <span className="mt-6 text-[10px] tracking-[0.2em] text-chalk/45 uppercase">
                  {t.open}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/"
          className="mt-10 inline-block border border-chalk/30 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk uppercase transition-colors hover:border-chalk/60"
        >
          {t.back}
        </Link>
      </main>
    </HallShell>
  );
}

export function TraditionDoor({
  traditionSlug,
  doorSlug,
}: {
  traditionSlug: TraditionSlug;
  doorSlug: string;
}) {
  const door = findTraditionDoor(traditionSlug, doorSlug);
  if (!door) return null;
  return <TraditionDoorView traditionSlug={traditionSlug} door={door} />;
}

function splitItem(item: string): { head: string | null; body: string } {
  const idx = item.indexOf(":");
  if (idx === -1 || idx > 60) {
    return { head: null, body: item };
  }
  return {
    head: item.slice(0, idx).trim(),
    body: item.slice(idx + 1).trim(),
  };
}

function TraditionDoorView({
  traditionSlug,
  door,
}: {
  traditionSlug: TraditionSlug;
  door: TraditionSubDoor;
}) {
  const { lang } = useLanguage();
  const hall = traditions[traditionSlug];
  const items = door.items?.[lang];

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-3xl px-6 py-20 sm:px-8">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">
          runeyard.net · {hall.title[lang]}
        </p>
        <h1 className="mt-4 flex flex-wrap items-baseline gap-x-4 font-display text-4xl font-medium tracking-[-0.025em] sm:text-6xl">
          <span aria-hidden className="text-[0.8em] text-chalk/70">
            {door.glyph}
          </span>
          <span>{door.title[lang]}</span>
        </h1>

        <div className="mt-8 max-w-2xl space-y-5">
          {door.paragraphs[lang].map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-chalk/85">
              {paragraph}
            </p>
          ))}
        </div>

        {items && items.length > 0 && (
          <ul className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
            {items.map((raw) => {
              const { head, body } = splitItem(raw);
              return (
                <li
                  key={raw}
                  className="border border-chalk/12 bg-slate/50 p-4 text-sm leading-6 text-chalk/80"
                >
                  {head ? (
                    <>
                      <p className="font-display text-lg font-medium text-chalk">{head}</p>
                      <p className="mt-1 text-chalk/75">{body}</p>
                    </>
                  ) : (
                    <p>{body}</p>
                  )}
                </li>
              );
            })}
          </ul>
        )}

        <p className="mt-10 max-w-2xl border-l border-chalk/25 pl-4 font-display text-xl italic text-chalk/80">
          {door.closing[lang]}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {door.ctaHref && door.ctaLabel && (
            <Link
              href={door.ctaHref}
              className="inline-block border border-chalk/50 bg-chalk/10 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk uppercase transition-colors hover:border-chalk/80 hover:bg-chalk/15"
            >
              {door.ctaLabel[lang]}
            </Link>
          )}
          {door.whatsapp && (
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-chalk/50 bg-chalk/10 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk uppercase transition-colors hover:border-chalk/80 hover:bg-chalk/15"
            >
              {WHATSAPP_LABEL[lang]}
            </a>
          )}
          <Link
            href={`/${traditionSlug}`}
            className="inline-block border border-chalk/30 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk uppercase transition-colors hover:border-chalk/60"
          >
            {hall.backLabel[lang]}
          </Link>
        </div>
      </main>
    </HallShell>
  );
}
