"use client";

import Image from "next/image";
import Link from "next/link";
import { DreamCompass } from "@/components/dream-compass";
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
        {slug === "saman" && <DreamCompass />}

        {!hall.closed && hall.doors.length > 0 && (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hall.doors.map((door) => (
              <li key={door.slug}>
                <Link
                  href={`/${slug}/${door.slug}`}
                  className="card-slate group flex h-full min-h-52 flex-col justify-between border border-chalk/10 p-5 text-chalk transition-colors hover:border-chalk/35"
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
                      {door.title[lang]}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-chalk/70">{door.summary[lang]}</p>
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
          <section className="card-slate mt-12 max-w-4xl border border-chalk/15 p-6">
            <h2 className="font-display text-xl font-medium tracking-[0.02em] text-chalk">
              {practice.title}
            </h2>
            {door.practiceImage && (
              <div className="my-5 overflow-hidden border border-chalk/12 bg-ink/80">
                <Image
                  src={door.practiceImage}
                  alt={practice.title}
                  width={1080}
                  height={380}
                  className="h-auto w-full object-cover"
                />
              </div>
            )}
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

        <aside className="mt-8 max-w-2xl border border-chalk/20 bg-black/40 p-4 text-xs leading-5 text-chalk/70">
          <p className="font-display text-sm font-medium tracking-[0.06em] text-chalk/90 uppercase">
            ⚕ {MEDICAL_DISCLAIMER[lang].heading}
          </p>
          <p className="mt-1.5">{MEDICAL_DISCLAIMER[lang].body}</p>
        </aside>

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
