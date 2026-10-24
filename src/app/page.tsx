"use client";

import Link from "next/link";
import { HallShell } from "@/components/hall-shell";
import { HearthAsk } from "@/components/hearth-ask";
import { SanctumAstrolabe } from "@/components/sanctum-astrolabe";
import { SkyNote } from "@/components/sky-note";
import { useLanguage } from "@/components/language";

export default function Home() {
  const { lang, t } = useLanguage();

  return (
    <HallShell>
      <section className="px-6 py-10 sm:px-8 lg:min-h-[calc(100svh-180px)] lg:py-12">
        <div className="mx-auto grid w-full max-w-[1600px] gap-8 lg:min-h-[calc(100svh-280px)] lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-14">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <h1 className="font-display text-5xl leading-[0.92] font-medium tracking-[-0.025em] sm:text-7xl">
              Mehmet Akdeniz
            </h1>
            <p className="mt-2 font-display text-2xl font-medium tracking-[0.16em] uppercase sm:text-[1.55rem]">
              RuneYard
            </p>
            <p className="mt-6 max-w-md text-lg leading-relaxed tracking-[0.012em] text-chalk/85">
              {t.lines[0]}
              <br />
              {t.lines[1]}
            </p>
            <SkyNote />
          </div>
          <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:h-full">
            <SanctumAstrolabe />
          </div>
          <section
            id="ocak"
            className="relative order-3 lg:col-start-1 lg:row-start-2 lg:self-end"
          >
            <HearthAsk />
          </section>
        </div>
      </section>

      <main id="icerik" className="px-6 pt-8 pb-16 sm:px-8">
        <div className="mx-auto w-full max-w-[1600px]">
          <h2 className="mb-4 font-display text-sm font-medium tracking-[0.22em] text-amber/90 uppercase">
            {t.hall}
          </h2>
          <ul className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {t.doors.map((door) => (
              <li key={door.href} className="h-full">
                <Link
                  href={door.href}
                  className="card-slate group flex h-full min-h-56 flex-col justify-between border border-chalk/12 px-5 py-5 text-chalk transition-colors hover:border-amber/50"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] tracking-[0.18em] text-chalk/55 uppercase">
                      <span>{door.badge}</span>
                      <span
                        aria-hidden
                        className="font-display text-2xl leading-none text-amber/85 transition-transform group-hover:scale-110 group-hover:text-amber"
                      >
                        {door.glyph}
                      </span>
                    </div>
                    <span className="mt-4 block font-display text-3xl font-medium tracking-[0.01em] group-hover:text-amber transition-colors">
                      {door.title}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-chalk/72">{door.line}</span>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-chalk/10 pt-3 text-[10px] tracking-[0.18em] text-chalk/55 uppercase group-hover:text-amber">
                    <span>{t.open}</span>
                    <span aria-hidden>→</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-3.5 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
            {t.traditionDoors.map((door) => {
              const isClosed = "closed" in door && door.closed;
              return (
                <li key={door.href} className="h-full">
                  {isClosed ? (
                    <div
                      aria-disabled="true"
                      className="card-slate flex h-full min-h-56 flex-col justify-between border border-chalk/10 px-5 py-5 text-chalk/55"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[10px] tracking-[0.18em] text-chalk/40 uppercase">
                          <span>{door.badge}</span>
                          <span aria-hidden className="font-display text-2xl leading-none text-chalk/45">
                            {door.glyph}
                          </span>
                        </div>
                        <span className="mt-4 block font-display text-3xl font-medium tracking-[0.01em]">
                          {door.title}
                        </span>
                        <span className="mt-2 block text-sm leading-6 text-chalk/50">
                          {door.line}
                        </span>
                      </div>
                      <div className="mt-5 flex items-center justify-between border-t border-chalk/10 pt-3 text-[10px] tracking-[0.18em] text-chalk/45 uppercase">
                        <span>{t.closed}</span>
                        <span aria-hidden>—</span>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={door.href}
                      className="card-slate group flex h-full min-h-56 flex-col justify-between border border-chalk/12 px-5 py-5 text-chalk transition-colors hover:border-amber/50"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[10px] tracking-[0.18em] text-chalk/55 uppercase">
                          <span>{door.badge}</span>
                          <span
                            aria-hidden
                            className="font-display text-2xl leading-none text-amber/85 transition-transform group-hover:scale-110 group-hover:text-amber"
                          >
                            {door.glyph}
                          </span>
                        </div>
                        <span className="mt-4 block font-display text-3xl font-medium tracking-[0.01em] group-hover:text-amber transition-colors">
                          {door.title}
                        </span>
                        <span className="mt-2 block text-sm leading-6 text-chalk/72">
                          {door.line}
                        </span>
                      </div>
                      <div className="mt-5 flex items-center justify-between border-t border-chalk/10 pt-3 text-[10px] tracking-[0.18em] text-chalk/55 uppercase group-hover:text-amber">
                        <span>{t.open}</span>
                        <span aria-hidden>→</span>
                      </div>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-4">
            <Link
              href="/gunluk"
              className="hearth-sanctum group flex flex-col justify-between gap-4 border border-amber/40 px-6 py-5 transition-colors hover:border-amber sm:flex-row sm:items-center"
            >
              <div>
                <span className="text-[10px] font-semibold tracking-[0.22em] text-amber uppercase">
                  🔥{" "}
                  {lang === "en"
                    ? "XIV DAILY HEARTH LEAVES · NEW ANCIENT TOPIC EVERY DAY"
                    : lang === "sv"
                      ? "XIV DAGLIGA HÄRDBLAD · NYTT FORNTIDA ÄMNE VARJE DAG"
                      : "XIV GÜNLÜK OCAK YAPRAĞI · HER GÜN YENİ BİR KADİM KONU"}
                </span>
                <span className="mt-1.5 block font-display text-2xl font-medium text-chalk transition-colors group-hover:text-amber sm:text-3xl">
                  {lang === "en"
                    ? "Daily Hearth Leaves · Chronicle of Ancient Lore"
                    : lang === "sv"
                      ? "Dagliga Härdblad · Krönika över Forntida Visdom"
                      : "Günlük Ocak Yaprakları · Kadim Bilgelik Kütüğü"}
                </span>
                <span className="mt-1 block text-sm text-chalk/75">
                  {lang === "en"
                    ? "Previously untold primary-source studies in Altai hearth lore, Icelandic manuscripts, Babylonian tablets, Celtic Dark Houses, and classical star wisdom."
                    : lang === "sv"
                      ? "Tidigare oberättade studier i altajsk härdkult, isländska handskrifter, babyloniska tavlor och klassisk stjärnlära."
                      : "Daha önce hiçbir odada işlenmemiş birincil kaynaklar: Od Ana, 1860 Huld El Yazması, Babil Akītu Yemini, Kelt Karanlık İnzivası, Vörðr, Yada Taşı ve 36 Dekan."}
                </span>
              </div>
              <span className="shrink-0 border border-amber/50 bg-amber/15 px-4 py-2.5 font-display text-xs font-semibold tracking-[0.18em] text-amber uppercase transition-colors group-hover:bg-amber group-hover:text-ink">
                {t.open} →
              </span>
            </Link>
          </div>
        </div>
      </main>
    </HallShell>
  );
}
