"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { DreamCompass } from "@/components/dream-compass";
import { HallShell } from "@/components/hall-shell";
import { KumalakOracle } from "@/components/kumalak-oracle";
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

const ZOOM_HINT = {
  tr: "🔍 Şemayı tam ekran incelemek için görsele dokunun",
  en: "🔍 Tap diagram to inspect full-screen",
  sv: "🔍 Tryck på schemat för helskärmsvisning",
} as const;

const CLOSE_LABEL = {
  tr: "Kapat ✕",
  en: "Close ✕",
  sv: "Stäng ✕",
} as const;

const NAV_LABELS = {
  tr: { prev: "← Önceki Oda", next: "Sonraki Oda →" },
  en: { prev: "← Previous Room", next: "Next Room →" },
  sv: { prev: "← Föregående Rum", next: "Nästa Rum →" },
} as const;

const MEDICAL_DISCLAIMER = {
  tr: {
    heading: "Tıbbi ve Yasal Bilgilendirme (Önemli Uyarı)",
    body: "Bu odada yer alan bitkisel, geleneksel, etnobotanik ve ritüel bilgiler yalnızca tarih, folklor ve kültür araştırması kapsamındadır. Hiçbir içerik tıbbi teşhis, tedavi veya reçete yerine geçmez. Hamilelik, emzirme, kronik rahatsızlık veya düzenli ilaç kullanımı durumlarında hiçbir bitki, yağ veya karışım hekim ve eczacı onayı olmadan dahilen ya da haricen kullanılmamalıdır.",
  },
  en: {
    heading: "Medical & Legal Disclaimer (Important Notice)",
    body: "All herbal, traditional, ethnobotanical, and ritual information in this room is presented strictly for historical, folkloric, and cultural study. Nothing herein constitutes medical diagnosis, treatment, or prescription. Never ingest or apply any plant, oil, or preparation without consulting a qualified physician or pharmacist, especially during pregnancy, nursing, or when taking medication.",
  },
  sv: {
    heading: "Medicinsk & Juridisk Ansvarsfriskrivning (Viktig Varning)",
    body: "All växt-, traditions-, etnobotanisk och rituell information i detta rum presenteras uteslutande i historiskt, folkloristiskt och kulturellt studiesyfte. Inget innehåll ersätter medicinsk diagnos, behandling eller läkemedel. Rådfråga alltid läkare eller apotekare innan du använder växter, oljor eller beredningar, särskilt vid graviditet eller medicinering.",
  },
} as const;

function renderInlineText(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={i} className="font-semibold text-chalk">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return (
        <em key={i} className="italic text-chalk/95">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
}

function cleanText(text: string): string {
  return text.replace(/\*\*/g, "").replace(/\*/g, "").trim();
}

export function TraditionRoom({ slug }: { slug: TraditionSlug }) {
  const { lang, t } = useLanguage();
  const hall = traditions[slug];

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-5xl px-4 py-12 sm:px-8 sm:py-16">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">runeyard.net</p>
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-4">
          <h1 className="font-display text-4xl font-medium tracking-[-0.025em] sm:text-6xl">
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
        {slug === "saman" && <KumalakOracle />}
        {slug === "saman" && <DreamCompass />}

        {!hall.closed && hall.doors.length > 0 && (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hall.doors.map((door) => (
              <li key={door.slug}>
                <Link
                  href={`/${slug}/${door.slug}`}
                  className="card-slate group flex h-full min-h-52 flex-col justify-between border border-chalk/10 p-4 text-chalk transition-colors hover:border-chalk/35 sm:p-5"
                >
                  <div>
                    {door.image && (
                      <div className="mb-4 overflow-hidden border border-chalk/10 bg-ink/80">
                        <Image
                          src={door.image}
                          alt={door.title[lang]}
                          width={600}
                          height={220}
                          className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    )}
                    <span aria-hidden className="font-display text-2xl leading-none text-bronze">
                      {door.glyph}
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-medium tracking-[0.01em] text-chalk">
                      {cleanText(door.title[lang])}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-chalk/70">
                      {renderInlineText(door.summary[lang])}
                    </p>
                  </div>
                  <span className="mt-5 flex items-center justify-between border-t border-chalk/10 pt-3 text-[10px] tracking-[0.2em] text-chalk/50 uppercase group-hover:text-chalk/85">
                    <span>{t.open}</span>
                    <span aria-hidden>→</span>
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
  for (const sep of [" — ", " – ", ":"]) {
    const idx = item.indexOf(sep);
    if (idx !== -1 && idx <= 75) {
      return {
        head: cleanText(item.slice(0, idx)),
        body: item.slice(idx + sep.length).trim(),
      };
    }
  }
  return { head: null, body: item };
}

function TraditionDoorView({
  traditionSlug,
  door,
}: {
  traditionSlug: TraditionSlug;
  door: TraditionSubDoor;
}) {
  const { lang } = useLanguage();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const hall = traditions[traditionSlug];
  const chapters = door.chapters[lang];
  const items = door.items?.[lang];
  const practice = door.practice[lang];

  const currentIdx = hall.doors.findIndex((d) => d.slug === door.slug);
  const prevDoor = currentIdx > 0 ? hall.doors[currentIdx - 1] : null;
  const nextDoor =
    currentIdx !== -1 && currentIdx < hall.doors.length - 1 ? hall.doors[currentIdx + 1] : null;

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-4xl px-4 py-12 sm:px-8 sm:py-20">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">
          runeyard.net · {hall.title[lang]}
        </p>
        <h1 className="mt-4 flex flex-wrap items-baseline gap-x-3 font-display text-3xl font-medium tracking-[-0.025em] sm:gap-x-4 sm:text-6xl">
          <span aria-hidden className="text-[0.8em] text-bronze">
            {door.glyph}
          </span>
          <span>{cleanText(door.title[lang])}</span>
        </h1>
        <p className="mt-3 max-w-2xl font-display text-xl font-medium tracking-[-0.015em] text-chalk/75 sm:text-2xl">
          {renderInlineText(door.subtitle[lang])}
        </p>

        {door.image && (
          <div className="mt-7 sm:mt-8">
            <button
              type="button"
              onClick={() =>
                setLightbox({ src: door.image!, alt: cleanText(door.title[lang]) })
              }
              className="group block w-full overflow-hidden border border-chalk/15 bg-ink/60 text-left transition-colors hover:border-bronze/60"
            >
              <div className="overflow-x-auto sm:overflow-visible">
                <Image
                  src={door.image}
                  alt={cleanText(door.title[lang])}
                  width={1200}
                  height={440}
                  priority
                  className="h-auto min-w-[540px] w-full object-cover sm:min-w-0"
                />
              </div>
              <div className="flex items-center justify-between border-t border-chalk/10 bg-ink/85 px-3 py-1.5 text-[11px] text-chalk/65 group-hover:text-chalk">
                <span>{ZOOM_HINT[lang]}</span>
                <span className="text-bronze sm:hidden">↔ Kaydır / Büyüt</span>
              </div>
            </button>
          </div>
        )}

        <div className="mt-8 max-w-2xl space-y-5">
          {door.paragraphs[lang].map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-chalk/85 sm:text-lg sm:leading-8">
              {renderInlineText(paragraph)}
            </p>
          ))}
        </div>

        {chapters && chapters.length > 0 && (
          <div className="mt-10 max-w-2xl space-y-8 border-t border-chalk/15 pt-8 sm:mt-12">
            {chapters.map((chapter) => (
              <section key={chapter.heading}>
                <h2 className="font-display text-2xl font-medium tracking-[-0.015em] text-chalk sm:text-3xl">
                  {cleanText(chapter.heading)}
                </h2>
                <p className="mt-2.5 text-base leading-7 text-chalk/80">
                  {renderInlineText(chapter.body)}
                </p>
              </section>
            ))}
          </div>
        )}

        {items && items.length > 0 && (
          <ul
            className={`mt-10 grid gap-4 sm:mt-12 ${
              door.itemImages ? "max-w-4xl sm:grid-cols-2" : "max-w-2xl sm:grid-cols-2"
            }`}
          >
            {items.map((raw, idx) => {
              const { head, body } = splitItem(raw);
              const itemImg = door.itemImages?.[idx];
              return (
                <li
                  key={raw}
                  className="border border-chalk/12 bg-slate/50 p-3.5 text-sm leading-6 text-chalk/80 sm:p-4"
                >
                  {itemImg && (
                    <button
                      type="button"
                      onClick={() =>
                        setLightbox({
                          src: itemImg,
                          alt: head ?? cleanText(door.title[lang]),
                        })
                      }
                      className="mb-3.5 block w-full overflow-hidden border border-chalk/10 bg-ink/70 transition-colors hover:border-bronze/60"
                    >
                      <Image
                        src={itemImg}
                        alt={head ?? cleanText(door.title[lang])}
                        width={720}
                        height={440}
                        className="h-auto w-full object-cover"
                      />
                    </button>
                  )}
                  {head ? (
                    <>
                      <p className="font-display text-xl font-medium text-chalk">{head}</p>
                      <p className="mt-1.5 text-chalk/75">{renderInlineText(body)}</p>
                    </>
                  ) : (
                    <p>{renderInlineText(body)}</p>
                  )}
                </li>
              );
            })}
          </ul>
        )}

        {door.slug.includes("kumalak") && <KumalakOracle />}

        {practice && (
          <section className="card-slate mt-10 max-w-4xl border border-chalk/15 p-4 sm:mt-12 sm:p-6">
            <h2 className="font-display text-xl font-medium tracking-[0.02em] text-chalk">
              {cleanText(practice.title)}
            </h2>
            {door.practiceImage && (
              <button
                type="button"
                onClick={() =>
                  setLightbox({
                    src: door.practiceImage!,
                    alt: cleanText(practice.title),
                  })
                }
                className="my-4 block w-full overflow-hidden border border-chalk/12 bg-ink/80 text-left transition-colors hover:border-bronze/60 sm:my-5"
              >
                <div className="overflow-x-auto sm:overflow-visible">
                  <Image
                    src={door.practiceImage}
                    alt={cleanText(practice.title)}
                    width={1080}
                    height={380}
                    className="h-auto min-w-[580px] w-full object-cover sm:min-w-0"
                  />
                </div>
                <div className="flex items-center justify-between border-t border-chalk/10 bg-ink/85 px-3 py-1.5 text-[11px] text-chalk/65">
                  <span>{ZOOM_HINT[lang]}</span>
                  <span className="text-bronze sm:hidden">↔ Kaydır / Büyüt</span>
                </div>
              </button>
            )}
            <ol className="mt-4 list-decimal space-y-2.5 pl-5 text-sm leading-6 text-chalk/80">
              {practice.steps.map((step) => (
                <li key={step}>{renderInlineText(step)}</li>
              ))}
            </ol>
          </section>
        )}

        <p className="mt-10 max-w-2xl border-l border-chalk/25 pl-4 font-display text-xl italic text-chalk/80">
          {renderInlineText(door.closing[lang])}
        </p>

        <aside className="mt-8 max-w-2xl border border-chalk/20 bg-black/40 p-4 text-xs leading-5 text-chalk/70">
          <p className="font-display text-sm font-medium tracking-[0.06em] text-chalk/90 uppercase">
            ⚕ {MEDICAL_DISCLAIMER[lang].heading}
          </p>
          <p className="mt-1.5">{MEDICAL_DISCLAIMER[lang].body}</p>
        </aside>

        <ShareBar
          title={`${cleanText(door.title[lang])} — ${hall.title[lang]}`}
          path={`/${traditionSlug}/${door.slug}`}
        />

        {/* Previous / Next Room Sequential Navigation */}
        {(prevDoor || nextDoor) && (
          <nav
            aria-label="Room navigation"
            className="mt-8 grid gap-3 border-t border-chalk/15 pt-6 sm:grid-cols-2"
          >
            {prevDoor ? (
              <Link
                href={`/${traditionSlug}/${prevDoor.slug}`}
                className="card-slate flex flex-col justify-between border border-chalk/15 p-4 transition-colors hover:border-bronze/60"
              >
                <span className="text-[10px] tracking-[0.2em] text-bronze uppercase">
                  {NAV_LABELS[lang].prev} · {prevDoor.glyph}
                </span>
                <span className="mt-1.5 font-display text-lg text-chalk">
                  {cleanText(prevDoor.title[lang])}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextDoor ? (
              <Link
                href={`/${traditionSlug}/${nextDoor.slug}`}
                className="card-slate flex flex-col justify-between border border-chalk/15 p-4 text-left transition-colors hover:border-bronze/60 sm:text-right"
              >
                <span className="text-[10px] tracking-[0.2em] text-bronze uppercase">
                  {nextDoor.glyph} · {NAV_LABELS[lang].next}
                </span>
                <span className="mt-1.5 font-display text-lg text-chalk">
                  {cleanText(nextDoor.title[lang])}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-3">
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

      {/* Full-Screen Diagram Lightbox Modal */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-5xl overflow-auto border border-bronze/40 bg-ink p-2 sm:p-4"
          >
            <div className="mb-2 flex items-center justify-between gap-4 px-1">
              <p className="font-display text-sm text-chalk/90 sm:text-base">{lightbox.alt}</p>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="border border-chalk/25 bg-black/60 px-3 py-1 text-xs tracking-[0.15em] text-chalk uppercase hover:border-bronze"
              >
                {CLOSE_LABEL[lang]}
              </button>
            </div>
            <div className="overflow-x-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="h-auto min-w-[680px] w-full object-contain sm:min-w-0"
              />
            </div>
          </div>
        </div>
      )}
    </HallShell>
  );
}
