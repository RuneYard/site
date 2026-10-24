"use client";

import Link from "next/link";
import { HallShell } from "@/components/hall-shell";
import { HearthAsk } from "@/components/hearth-ask";
import { PortraitMark } from "@/components/portrait-mark";
import { SkyNote } from "@/components/sky-note";
import { useLanguage } from "@/components/language";

export default function Home() {
  const { t } = useLanguage();

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
            <PortraitMark />
          </div>
          <section
            id="ocak"
            className="wet-ink relative order-3 overflow-hidden px-3 py-2.5 lg:col-start-1 lg:row-start-2 lg:self-end"
          >
            <div className="aurora-wash pointer-events-none absolute inset-x-0 top-0 h-8 opacity-70" aria-hidden />
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
        </div>
      </main>
    </HallShell>
  );
}
