"use client";

import Image from "next/image";
import Link from "next/link";
import { HallShell } from "@/components/hall-shell";
import { useLanguage } from "@/components/language";
import { apps } from "@/content/apps";

function storeHref(url: string) {
  if (!url.startsWith("https://")) return null;
  return url;
}

export function AppsShelf() {
  const { t, lang } = useLanguage();

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-3xl px-6 py-20 sm:px-8">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">runeyard.net</p>
        <h1 className="mt-4 font-display text-5xl font-medium tracking-[-0.025em] sm:text-6xl">
          {t.apps.title}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-chalk/80">
          {apps.length > 0 ? (t.apps.intro ?? t.apps.title) : t.apps.empty}
        </p>
        {apps.length > 0 ? (
          <ul className="mt-10 grid gap-3.5 sm:grid-cols-2">
            {apps.map((app) => {
              const play = storeHref(app.googlePlay);
              const store = storeHref(app.appStore);
              const lineText =
                typeof app.line === "object" && app.line !== null
                  ? app.line[lang] ?? app.line.tr
                  : app.line;
              return (
                <li key={app.name} className="card-slate border border-chalk/10">
                  {app.image ? (
                    <Image
                      src={app.image}
                      alt={app.name}
                      width={800}
                      height={600}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  ) : null}
                  <div className="px-5 py-5">
                    <h2 className="font-display text-3xl font-medium">{app.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-chalk/70">{lineText}</p>
                    {play || store ? (
                      <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[10px] tracking-[0.16em] uppercase">
                        {play ? (
                          <a
                            href={play}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-chalk/70 underline decoration-chalk/30 underline-offset-4 hover:text-chalk"
                          >
                            Google Play
                          </a>
                        ) : null}
                        {store ? (
                          <a
                            href={store}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-chalk/70 underline decoration-chalk/30 underline-offset-4 hover:text-chalk"
                          >
                            App Store
                          </a>
                        ) : null}
                      </p>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        ) : null}
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
