"use client";

import Image from "next/image";
import Link from "next/link";
import { DreamCompass } from "@/components/dream-compass";
import { HallShell } from "@/components/hall-shell";
import { useLanguage } from "@/components/language";
import { apps, appsHall, findAppBySlug } from "@/content/apps";

function storeHref(url: string) {
  if (!url.startsWith("https://")) return null;
  return url;
}

export function AppsShelf() {
  const { lang, t } = useLanguage();
  const ui = appsHall.ui[lang];

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-5xl px-6 py-16 sm:px-8">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">
          runeyard.net · Digital Hearth
        </p>
        <h1 className="mt-4 font-display text-5xl font-medium tracking-[-0.025em] sm:text-6xl">
          {appsHall.title[lang]}
        </h1>
        <p className="mt-3 max-w-2xl font-display text-xl text-chalk/75 italic">
          {appsHall.subtitle[lang]}
        </p>

        <div className="mt-6 max-w-3xl space-y-4">
          {appsHall.intro[lang].map((p) => (
            <p key={p} className="text-base leading-7 text-chalk/80">
              {p}
            </p>
          ))}
        </div>

        <DreamCompass />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {apps.map((app) => {
            const play = storeHref(app.googlePlay);
            const store = storeHref(app.appStore);
            return (
              <li
                key={app.slug}
                className="card-slate flex flex-col justify-between overflow-hidden border border-chalk/15 transition-colors hover:border-chalk/40"
              >
                <div>
                  <Link href={`/uygulamalar/${app.slug}`} className="block overflow-hidden bg-black/50">
                    <Image
                      src={app.image}
                      alt={app.name}
                      width={800}
                      height={600}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </Link>

                  <div className="px-6 pt-5 pb-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] tracking-[0.16em] text-chalk/55 uppercase">
                      <span>{app.badge[lang]}</span>
                      <span className="border border-chalk/20 px-2 py-0.5 text-chalk/80">
                        {app.statusLabel[lang]}
                      </span>
                    </div>

                    <Link href={`/uygulamalar/${app.slug}`} className="mt-3 block">
                      <h2 className="flex items-baseline gap-2.5 font-display text-3xl font-medium text-chalk">
                        <span aria-hidden className="text-chalk/75">
                          {app.glyph}
                        </span>
                        <span>{app.name}</span>
                      </h2>
                    </Link>

                    <p className="mt-2.5 text-sm leading-6 text-chalk/75">{app.line[lang]}</p>

                    <ul className="mt-4 space-y-1.5 border-t border-chalk/10 pt-3.5 text-xs leading-5 text-chalk/70">
                      {app.features[lang].map((feat) => (
                        <li key={feat} className="flex gap-2">
                          <span aria-hidden className="text-chalk/45">
                            ·
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-chalk/15 bg-chalk/[0.02] px-6 py-4">
                  {play || store ? (
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] tracking-[0.16em] uppercase">
                      {play ? (
                        <a
                          href={play}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-chalk/35 bg-chalk/[0.06] px-3 py-1.5 text-chalk transition-colors hover:border-chalk/75"
                        >
                          Google Play ↗
                        </a>
                      ) : null}
                      {store ? (
                        <a
                          href={store}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-chalk/35 bg-chalk/[0.06] px-3 py-1.5 text-chalk transition-colors hover:border-chalk/75"
                        >
                          App Store ↗
                        </a>
                      ) : null}
                    </div>
                  ) : (
                    <span className="text-[10px] tracking-[0.16em] text-chalk/50 uppercase">
                      {t.apps.soon}
                    </span>
                  )}

                  <Link
                    href={`/uygulamalar/${app.slug}`}
                    className="font-display text-xs tracking-[0.14em] text-chalk/85 uppercase hover:text-chalk"
                  >
                    {ui.openDetails}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>

        <Link
          href="/"
          className="mt-12 inline-block border border-chalk/30 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk uppercase"
        >
          {t.back}
        </Link>
      </main>
    </HallShell>
  );
}

export function AppDoor({ slug }: { slug: string }) {
  const { lang, t } = useLanguage();
  const app = findAppBySlug(slug);
  if (!app) return null;

  const ui = appsHall.ui[lang];
  const play = storeHref(app.googlePlay);
  const store = storeHref(app.appStore);
  const otherApps = apps.filter((a) => a.slug !== app.slug);

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">
          runeyard.net · {app.badge[lang]}
        </p>

        <h1 className="mt-4 flex items-baseline gap-3.5 font-display text-5xl font-medium tracking-[-0.025em] sm:text-6xl">
          <span aria-hidden className="text-[0.85em] text-chalk/75">
            {app.glyph}
          </span>
          <span>{app.name}</span>
        </h1>

        <div className="mt-3 inline-block border border-chalk/25 bg-chalk/[0.03] px-3 py-1 text-xs tracking-[0.14em] text-chalk/80 uppercase">
          {app.statusLabel[lang]}
        </div>

        <p className="mt-6 text-lg leading-8 text-chalk/85">{app.line[lang]}</p>

        <figure className="mt-7 overflow-hidden border border-chalk/15 bg-black/50">
          <Image
            src={app.image}
            alt={app.name}
            width={900}
            height={675}
            priority
            className="aspect-[16/10] w-full object-cover"
          />
        </figure>

        {/* Store Download Buttons */}
        <section className="mt-8 border border-chalk/25 bg-chalk/[0.03] p-6">
          <p className="text-[10px] tracking-[0.18em] text-chalk/55 uppercase">
            {ui.downloadHeading}
          </p>
          {play || store ? (
            <div className="mt-4 flex flex-wrap gap-3">
              {play ? (
                <a
                  href={play}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-chalk/50 bg-chalk/[0.08] px-6 py-3 font-display text-xs tracking-[0.16em] text-chalk uppercase transition-colors hover:border-chalk/90"
                >
                  Google Play Store ↗
                </a>
              ) : null}
              {store ? (
                <a
                  href={store}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-chalk/50 bg-chalk/[0.08] px-6 py-3 font-display text-xs tracking-[0.16em] text-chalk uppercase transition-colors hover:border-chalk/90"
                >
                  Apple App Store ↗
                </a>
              ) : null}
            </div>
          ) : (
            <p className="mt-2 font-display text-lg text-chalk/80">
              {app.statusLabel[lang]}
            </p>
          )}
        </section>

        {/* Core Features List */}
        <section className="mt-10 border border-chalk/15 bg-chalk/[0.02] p-6 sm:p-7">
          <h2 className="font-display text-2xl font-medium text-chalk">
            {ui.featuresLabel}
          </h2>
          <ul className="mt-4 space-y-3 text-base leading-7 text-chalk/85">
            {app.features[lang].map((feat, i) => (
              <li key={feat} className="flex gap-3.5">
                <span className="font-display text-sm tracking-[0.14em] text-chalk/50">
                  0{i + 1}.
                </span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Detailed Chapters */}
        <div className="mt-10 space-y-6">
          {app.chapters[lang].map((ch, idx) => (
            <section
              key={ch.heading}
              className="border border-chalk/15 bg-chalk/[0.02] p-6 sm:p-7"
            >
              <p className="text-[10px] tracking-[0.18em] text-chalk/50 uppercase">
                0{idx + 1} · {app.name}
              </p>
              <h2 className="mt-2 font-display text-2xl font-medium text-chalk">
                {ch.heading}
              </h2>
              <p className="mt-3 text-base leading-7 text-chalk/85">{ch.body}</p>
            </section>
          ))}
        </div>

        <p className="mt-10 border-l border-chalk/30 pl-5 font-display text-xl leading-8 text-chalk/80 italic">
          “{app.closing[lang]}”
        </p>

        <nav className="mt-12 border-t border-chalk/15 pt-8">
          <div className="grid gap-3 sm:grid-cols-3">
            {otherApps.map((other) => (
              <Link
                key={other.slug}
                href={`/uygulamalar/${other.slug}`}
                className="border border-chalk/15 px-4 py-3.5 transition-colors hover:border-chalk/45"
              >
                <span className="text-[10px] tracking-[0.14em] text-chalk/50 uppercase">
                  {other.statusLabel[lang]}
                </span>
                <p className="mt-1 font-display text-xl text-chalk">
                  {other.glyph} {other.name} →
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/uygulamalar"
              className="inline-block border border-chalk/35 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk uppercase transition-colors hover:border-chalk/65"
            >
              {ui.backToApps}
            </Link>
            <Link
              href="/"
              className="inline-block border border-chalk/20 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk/75 uppercase transition-colors hover:border-chalk/45"
            >
              {t.back}
            </Link>
          </div>
        </nav>
      </main>
    </HallShell>
  );
}
