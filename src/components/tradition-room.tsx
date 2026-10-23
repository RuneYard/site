"use client";

import Link from "next/link";
import { HallShell } from "@/components/hall-shell";
import { useLanguage } from "@/components/language";
import { traditions, type TraditionSlug } from "@/content/traditions";

export function TraditionRoom({ slug }: { slug: TraditionSlug }) {
  const { lang, t } = useLanguage();
  const room = traditions[slug][lang];

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-3xl px-6 py-20 sm:px-8">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">runeyard.net</p>
        <h1 className="mt-4 font-display text-5xl font-medium tracking-[-0.025em] sm:text-6xl">
          {room.title}
        </h1>
        <p className="mt-3 font-display text-xl text-chalk/70">{room.subtitle}</p>

        <div className="mt-8 max-w-xl space-y-4 text-lg leading-8 text-chalk/85">
          {room.opening.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 space-y-10">
          {room.sections.map((section) => (
            <section key={section.heading} className="border-t border-chalk/15 pt-8">
              <h2 className="max-w-xl font-display text-2xl font-medium tracking-[-0.02em] text-chalk">
                {section.heading}
              </h2>
              {section.body ? (
                <p className="mt-3 max-w-xl text-base leading-7 text-chalk/75">{section.body}</p>
              ) : null}
              {section.items ? (
                <ul className="mt-4 max-w-xl space-y-3 text-base leading-7 text-chalk/90">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <p className="mt-12 max-w-xl border-l border-chalk/25 pl-4 font-display text-xl leading-8 text-chalk/85">
          {room.closing}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {room.ctaHref && room.ctaLabel ? (
            <Link
              href={room.ctaHref}
              className="inline-block bg-chalk px-6 py-3 font-display text-sm tracking-[0.14em] text-ink uppercase"
            >
              {room.ctaLabel}
            </Link>
          ) : null}
          {room.whatsappLabel ? (
            <a
              href="https://wa.me/905455642164"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-chalk px-6 py-3 font-display text-sm tracking-[0.14em] text-ink uppercase"
            >
              {room.whatsappLabel}
            </a>
          ) : null}
          <Link
            href="/"
            className="inline-block border border-chalk/30 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk uppercase"
          >
            {t.back}
          </Link>
        </div>
      </main>
    </HallShell>
  );
}
