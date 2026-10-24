"use client";

import Image from "next/image";
import Link from "next/link";
import { HallShell } from "@/components/hall-shell";
import { useLanguage } from "@/components/language";
import { OghamOracle } from "@/components/ogham-oracle";
import { PlanetaryHoursCompass } from "@/components/planetary-hours";
import { ShareBar } from "@/components/share-bar";
import { WheelCompass } from "@/components/wheel-compass";
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
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-4">
          <h1 className="font-display text-5xl font-medium tracking-[-0.025em] sm:text-6xl">
            {hall.title[lang]}
          </h1>
          {hall.closed && (
            <span className="border border-chalk/20 px-3 py-1 text-[10px] tracking-[0.2em] text-chalk/60 uppercase">
              {t.closed}
            </span>
          )}
        </div>
        <p className="mt-4 max-w-2xl text-base leading-7 text-chalk/75">{hall.line[lang]}</p>

        {hall.image && (
          <div className="mt-8 overflow-hidden border border-chalk/12 bg-ink/60">
            <Image
              src={hall.image}
              alt={hall.title[lang]}
              width={1200}
              height={420}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        )}

        {slug === "kelt" && <OghamOracle />}
        {slug === "mezopotamya" && <PlanetaryHoursCompass />}
        {(slug === "witchcraft" || slug === "saman") && <WheelCompass />}

        {!hall.closed && hall.doors.length > 0 && (
          <ul className="mt-10 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {hall.doors.map((door) => (
              <li key={door.slug}>
                <Link
                  href={`/${slug}/${door.slug}`}
                  className="card-slate flex h-full min-h-52 flex-col justify-between border border-chalk/10 p-6 text-chalk"
                >
                  <div>
                    <span aria-hidden className="font-display text-3xl leading-none text-chalk/75">
                      {door.glyph}
                    </span>
                    <h2 className="mt-5 font-display text-2xl font-medium tracking-[0.01em] text-chalk">
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
        )}

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
  if (idx === -1 || idx > 65) {
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
  const chapters = door.chapters[lang];
  const items = door.items?.[lang];
  const practice = door.practice[lang];

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-4xl px-6 py-20 sm:px-8">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">
          runeyard.net · {hall.title[lang]}
        </p>
        <h1 className="mt-4 flex flex-wrap items-baseline gap-x-4 font-display text-4xl font-medium tracking-[-0.025em] sm:text-6xl">
          <span aria-hidden className="text-[0.8em] text-chalk/70">
            {door.glyph}
          </span>
          <span>{door.title[lang]}</span>
        </h1>
        <p className="mt-3 max-w-2xl font-display text-2xl font-medium tracking-[-0.015em] text-chalk/75">
          {door.subtitle[lang]}
        </p>

        {door.image && (
          <div className="mt-8 overflow-hidden border border-chalk/12 bg-ink/60">
            <Image
              src={door.image}
              alt={door.title[lang]}
              width={1200}
              height={440}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        )}

        <div className="mt-8 max-w-2xl space-y-5">
          {door.paragraphs[lang].map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-chalk/85">
              {paragraph}
            </p>
          ))}
        </div>

        {chapters && chapters.length > 0 && (
          <div className="mt-12 max-w-2xl space-y-8 border-t border-chalk/15 pt-8">
            {chapters.map((chapter) => (
              <section key={chapter.heading}>
                <h2 className="font-display text-2xl font-medium tracking-[-0.015em] text-chalk sm:text-3xl">
                  {chapter.heading}
                </h2>
                <p className="mt-2.5 text-base leading-7 text-chalk/80">{chapter.body}</p>
              </section>
            ))}
          </div>
        )}

        {items && items.length > 0 && (
          <ul
            className={`mt-12 grid gap-4 ${
              door.itemImages ? "max-w-4xl sm:grid-cols-2" : "max-w-2xl sm:grid-cols-2"
            }`}
          >
            {items.map((raw, idx) => {
              const { head, body } = splitItem(raw);
              const itemImg = door.itemImages?.[idx];
              return (
                <li
                  key={raw}
                  className="border border-chalk/12 bg-slate/50 p-4 text-sm leading-6 text-chalk/80"
                >
                  {itemImg && (
                    <div className="mb-4 overflow-hidden border border-chalk/10 bg-ink/70">
                      <Image
                        src={itemImg}
                        alt={head ?? door.title[lang]}
                        width={720}
                        height={440}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  )}
                  {head ? (
                    <>
                      <p className="font-display text-xl font-medium text-chalk">{head}</p>
                      <p className="mt-1.5 text-chalk/75">{body}</p>
                    </>
                  ) : (
                    <p>{body}</p>
                  )}
                </li>
              );
            })}
          </ul>
        )}

        {practice && (
          <section className="card-slate mt-12 max-w-2xl border border-chalk/15 p-6">
            <h2 className="font-display text-xl font-medium tracking-[0.02em] text-chalk">
              {practice.title}
            </h2>
            <ol className="mt-4 list-decimal space-y-2.5 pl-5 text-sm leading-6 text-chalk/80">
              {practice.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
        )}

        <p className="mt-10 max-w-2xl border-l border-chalk/25 pl-4 font-display text-xl italic text-chalk/80">
          {door.closing[lang]}
        </p>

        <ShareBar
          title={`${door.title[lang]} — ${hall.title[lang]}`}
          path={`/${traditionSlug}/${door.slug}`}
        />

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
