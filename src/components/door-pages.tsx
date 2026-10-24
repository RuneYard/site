"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { AcademyPathfinder } from "@/components/academy-pathfinder";
import { ElementCompass } from "@/components/element-compass";
import { HallShell } from "@/components/hall-shell";
import { useLanguage } from "@/components/language";
import { PlanetaryHoursCompass } from "@/components/planetary-hours";
import { ShareBar } from "@/components/share-bar";
import {
  astrologyDoors,
  astrologyHall,
  astrologySkyNotes,
  findAstrologyDoor,
} from "@/content/astrology";
import {
  educationCourses,
  educationHall,
  findEducationCourse,
} from "@/content/education";

export function EducationRoom() {
  const { lang, t } = useLanguage();
  const ui = educationHall.ui[lang];

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-5xl px-6 py-16 sm:px-8">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">
          runeyard.net · Academy
        </p>
        <h1 className="mt-4 font-display text-5xl font-medium tracking-[-0.025em] sm:text-6xl">
          {educationHall.title[lang]}
        </h1>
        <p className="mt-3 max-w-2xl font-display text-xl text-chalk/75 italic">
          {educationHall.subtitle[lang]}
        </p>

        <figure className="mt-8 overflow-hidden border border-chalk/15 bg-black/50">
          <Image
            src={educationHall.image}
            alt={educationHall.title[lang]}
            width={1200}
            height={420}
            priority
            className="h-auto w-full object-cover"
          />
        </figure>

        <div className="mt-8 max-w-3xl space-y-4">
          {educationHall.intro[lang].map((p) => (
            <p key={p} className="text-base leading-7 text-chalk/80">
              {p}
            </p>
          ))}
        </div>

        {/* Academy Pillars */}
        <div className="mt-10 grid gap-3.5 sm:grid-cols-3">
          {educationHall.pillars[lang].map((pillar, idx) => (
            <div
              key={pillar.title}
              className="border border-chalk/15 bg-chalk/[0.02] p-5"
            >
              <p className="text-[10px] tracking-[0.18em] text-chalk/50 uppercase">
                0{idx + 1} · AKADEMİ İLKESİ
              </p>
              <h2 className="mt-2 font-display text-xl font-medium text-chalk">
                {pillar.title}
              </h2>
              <p className="mt-2 text-xs leading-5 text-chalk/70">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Academy Pathfinder */}
        <AcademyPathfinder />

        {/* Course Cards */}
        <section className="mt-14 border-t border-chalk/15 pt-10">
          <h2 className="font-display text-3xl font-medium tracking-[-0.015em] text-chalk">
            {ui.activeHeading}
          </h2>

          <ul className="mt-8 space-y-8">
            {educationCourses.map((course) => (
              <li
                key={course.slug}
                className="card-slate overflow-hidden border border-chalk/15 transition-colors hover:border-chalk/40"
              >
                <Link href={`/egitim/${course.slug}`} className="block">
                  <div className="overflow-hidden border-b border-chalk/10 bg-black/50">
                    <Image
                      src={course.image}
                      alt={course.title[lang]}
                      width={1200}
                      height={420}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] tracking-[0.18em] text-chalk/55 uppercase">
                      <span>
                        {course.code} · {course.badge[lang]}
                      </span>
                      <span className="border border-chalk/20 px-2.5 py-1 text-chalk/80">
                        {course.status[lang]}
                      </span>
                    </div>

                    <h3 className="mt-4 flex items-baseline gap-3 font-display text-3xl font-medium tracking-[-0.015em] text-chalk sm:text-4xl">
                      <span aria-hidden className="text-chalk/75">
                        {course.glyph}
                      </span>
                      <span>{course.title[lang]}</span>
                    </h3>

                    <p className="mt-2 font-display text-lg text-chalk/75 italic">
                      {course.subtitle[lang]}
                    </p>

                    <p className="mt-4 max-w-3xl text-sm leading-6 text-chalk/75 sm:text-base sm:leading-7">
                      {course.summary[lang]}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-chalk/10 pt-4">
                      <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-chalk/65">
                        {course.facts[lang].slice(0, 4).map(([k, v]) => (
                          <span key={k}>
                            <strong className="font-normal text-chalk/45 uppercase">
                              {k}:
                            </strong>{" "}
                            {v}
                          </span>
                        ))}
                      </div>
                      <span className="font-display text-xs tracking-[0.16em] text-chalk uppercase">
                        {ui.openCourse}
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Upcoming courses notice & direct WhatsApp line */}
        <section className="mt-12 border border-chalk/20 bg-chalk/[0.02] p-6 sm:p-8">
          <p className="text-sm leading-6 text-chalk/80">{ui.upcomingNotice}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/905455642164"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-chalk/45 bg-chalk/[0.06] px-5 py-2.5 font-display text-xs tracking-[0.16em] text-chalk uppercase transition-colors hover:border-chalk/80"
            >
              {ui.enrollCta} · 0545 564 21 64
            </a>
            <a
              href="tel:+905455642164"
              className="inline-block border border-chalk/25 px-5 py-2.5 font-display text-xs tracking-[0.16em] text-chalk/80 uppercase transition-colors hover:border-chalk/55"
            >
              {ui.callCta}
            </a>
          </div>
        </section>

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

export function EducationCourseDoor({ slug }: { slug: string }) {
  const { lang, t } = useLanguage();
  const course = findEducationCourse(slug);
  if (!course) return null;

  const ui = educationHall.ui[lang];
  const otherCourses = educationCourses.filter((c) => c.slug !== course.slug);

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">
          runeyard.net · {course.code} · {course.badge[lang]}
        </p>

        <h1 className="mt-4 flex flex-wrap items-baseline gap-x-4 font-display text-4xl font-medium tracking-[-0.025em] sm:text-6xl">
          <span aria-hidden className="text-[0.85em] text-chalk/75">
            {course.glyph}
          </span>
          <span>{course.title[lang]}</span>
        </h1>

        <p className="mt-3 font-display text-xl text-chalk/75 italic">
          {course.subtitle[lang]}
        </p>

        <div className="mt-4 inline-block border border-chalk/25 bg-chalk/[0.03] px-3 py-1 text-xs tracking-[0.14em] text-chalk/80 uppercase">
          {course.status[lang]}
        </div>

        <figure className="mt-7 overflow-hidden border border-chalk/15 bg-black/50">
          <Image
            src={course.image}
            alt={course.title[lang]}
            width={1200}
            height={420}
            priority
            className="h-auto w-full object-cover"
          />
        </figure>

        {/* Opening paragraphs */}
        <div className="mt-8 space-y-4 text-lg leading-8 text-chalk/85">
          {course.opening[lang].map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        {/* Optional Note (e.g., Shamanism vs Tengricilik note) */}
        {course.note && (
          <blockquote className="mt-7 border-l-2 border-chalk/35 bg-chalk/[0.03] px-5 py-4 text-sm leading-6 text-chalk/80">
            {course.note[lang]}
          </blockquote>
        )}

        {/* Optional Questions block (e.g., Rune Wisdom questions) */}
        {course.questions && (
          <section className="mt-9 border border-chalk/15 bg-chalk/[0.02] p-6">
            <p className="text-[10px] tracking-[0.18em] text-chalk/55 uppercase">
              {ui.questionsHeading}
            </p>
            <ul className="mt-4 space-y-2.5">
              {course.questions[lang].map((q) => (
                <li
                  key={q}
                  className="font-display text-2xl leading-snug font-medium text-chalk/90"
                >
                  — {q}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Optional Scope summary */}
        {course.scope && (
          <p className="mt-8 text-base leading-7 text-chalk/80">
            {course.scope[lang]}
          </p>
        )}

        {/* Structured Curriculum Modules */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-medium tracking-[-0.01em] text-chalk sm:text-3xl">
            {ui.curriculumHeading}
          </h2>

          <div className="mt-6 space-y-6">
            {course.modules[lang].map((mod) => (
              <div
                key={mod.title}
                className="border border-chalk/15 bg-chalk/[0.02] p-6 sm:p-7"
              >
                {mod.subtitle && (
                  <p className="text-[10px] tracking-[0.18em] text-chalk/50 uppercase">
                    {mod.subtitle}
                  </p>
                )}
                <h3 className="mt-1 font-display text-2xl font-medium text-chalk">
                  {mod.title}
                </h3>
                <ul className="mt-4 space-y-2.5 border-t border-chalk/10 pt-4 text-base leading-7 text-chalk/85">
                  {mod.lessons.map((lesson) => (
                    <li key={lesson} className="flex gap-3">
                      <span aria-hidden className="text-chalk/45">
                        ·
                      </span>
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Closing statements */}
        <div className="mt-10 space-y-3 border-l border-chalk/30 pl-5 text-base leading-7 text-chalk/85">
          {course.closing[lang].map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        {/* Course Facts & WhatsApp Enrollment Box */}
        <section className="mt-12 border border-chalk/25 bg-chalk/[0.03] p-6 sm:p-8">
          <h2 className="font-display text-2xl font-medium text-chalk">
            {ui.factsHeading}
          </h2>

          <dl className="mt-5 grid border border-chalk/15 sm:grid-cols-2">
            {course.facts[lang].map(([label, value]) => (
              <div
                key={label}
                className="flex items-baseline justify-between gap-4 border-b border-chalk/10 px-4 py-3.5 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 sm:odd:border-r"
              >
                <dt className="text-[10px] tracking-[0.16em] text-chalk/50 uppercase">
                  {label}
                </dt>
                <dd className="text-right text-sm text-chalk">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={course.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-chalk/50 bg-chalk/[0.08] px-6 py-3 font-display text-xs tracking-[0.16em] text-chalk uppercase transition-colors hover:border-chalk/90"
            >
              {ui.enrollCta} ({course.phone})
            </a>
            <a
              href="tel:+905455642164"
              className="inline-block border border-chalk/25 px-5 py-3 font-display text-xs tracking-[0.16em] text-chalk/80 uppercase transition-colors hover:border-chalk/60"
            >
              {ui.callCta}
            </a>
          </div>
        </section>

        {/* Other Academy Courses + Back Navigation */}
        <nav className="mt-12 border-t border-chalk/15 pt-8">
          <div className="grid gap-3 sm:grid-cols-2">
            {otherCourses.map((other) => (
              <Link
                key={other.slug}
                href={`/egitim/${other.slug}`}
                className="border border-chalk/15 px-4 py-3.5 transition-colors hover:border-chalk/45"
              >
                <span className="text-[10px] tracking-[0.16em] text-chalk/50 uppercase">
                  {other.code} · {other.badge[lang]}
                </span>
                <p className="mt-1 font-display text-xl text-chalk">
                  {other.glyph} {other.title[lang]} →
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/egitim"
              className="inline-block border border-chalk/35 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk uppercase transition-colors hover:border-chalk/65"
            >
              {ui.backToEducation}
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

export function AstrologyRoom() {
  const { lang, t } = useLanguage();

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-5xl px-4 py-12 sm:px-8 sm:py-16">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">runeyard.net · XX</p>
        <h1 className="mt-4 font-display text-4xl font-medium tracking-[-0.025em] sm:text-6xl">
          {astrologyHall.title[lang]}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-chalk/75">
          {astrologyHall.line[lang]}
        </p>

        <div className="mt-8 overflow-hidden border border-chalk/12 bg-ink/60">
          <Image
            src={astrologyHall.image}
            alt={astrologyHall.title[lang]}
            width={1200}
            height={420}
            priority
            className="h-auto w-full object-cover"
          />
        </div>

        <ElementCompass />

        <PlanetaryHoursCompass />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {astrologyDoors.map((door) => (
            <li key={door.slug}>
              <Link
                href={`/astroloji/${door.slug}`}
                className="card-slate group flex h-full min-h-52 flex-col justify-between border border-chalk/10 p-4 text-chalk transition-colors hover:border-chalk/35 sm:p-5"
              >
                <div>
                  {door.image && (
                    <div className="mb-4 overflow-hidden border border-chalk/10 bg-ink/80">
                      <Image
                        src={door.image}
                        alt={cleanText(door.title[lang])}
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

        <section className="mt-14 border-t border-chalk/15 pt-10">
          <h2 className="font-display text-2xl font-medium tracking-[-0.015em] text-chalk sm:text-3xl">
            {astrologyHall.skyNotesHeading[lang]}
          </h2>
          <ul className="mt-6 grid gap-3.5 sm:grid-cols-3">
            {astrologySkyNotes.map((note) => (
              <li key={note.href}>
                <Link
                  href={note.href}
                  className="card-slate flex h-full min-h-44 flex-col justify-between border border-chalk/10 p-6 text-chalk"
                >
                  <div>
                    <span aria-hidden className="font-display text-2xl leading-none text-chalk/70">
                      {note.glyph}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-medium tracking-[0.01em] text-chalk">
                      {note.title[lang]}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-chalk/70">{note.summary[lang]}</p>
                  </div>
                  <span className="mt-5 text-[10px] tracking-[0.2em] text-chalk/45 uppercase">
                    {t.open}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

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

export function AstrologyDoor({ doorSlug }: { doorSlug: string }) {
  const { lang } = useLanguage();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const door = findAstrologyDoor(doorSlug);
  if (!door) return null;

  const chapters = door.chapters[lang];
  const items = door.items?.[lang];
  const practice = door.practice[lang];

  const currentIdx = astrologyDoors.findIndex((d) => d.slug === door.slug);
  const prevDoor = currentIdx > 0 ? astrologyDoors[currentIdx - 1] : null;
  const nextDoor =
    currentIdx !== -1 && currentIdx < astrologyDoors.length - 1
      ? astrologyDoors[currentIdx + 1]
      : null;

  const zoomHint =
    lang === "tr"
      ? "🔍 Şemayı tam ekran incelemek için görsele dokunun"
      : lang === "sv"
      ? "🔍 Tryck på schemat för helskärmsvisning"
      : "🔍 Tap diagram to inspect full-screen";

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-4xl px-4 py-12 sm:px-8 sm:py-20">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">
          runeyard.net · {astrologyHall.title[lang]}
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
                <span>{zoomHint}</span>
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
                  <span>{zoomHint}</span>
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

        <ShareBar
          title={`${cleanText(door.title[lang])} — ${astrologyHall.title[lang]}`}
          path={`/astroloji/${door.slug}`}
        />

        {(prevDoor || nextDoor) && (
          <nav
            aria-label="Astrology room navigation"
            className="mt-8 grid gap-3 border-t border-chalk/15 pt-6 sm:grid-cols-2"
          >
            {prevDoor ? (
              <Link
                href={`/astroloji/${prevDoor.slug}`}
                className="card-slate flex flex-col justify-between border border-chalk/15 p-4 transition-colors hover:border-bronze/60"
              >
                <span className="text-[10px] tracking-[0.2em] text-bronze uppercase">
                  ← {prevDoor.glyph}
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
                href={`/astroloji/${nextDoor.slug}`}
                className="card-slate flex flex-col justify-between border border-chalk/15 p-4 text-left transition-colors hover:border-bronze/60 sm:text-right"
              >
                <span className="text-[10px] tracking-[0.2em] text-bronze uppercase">
                  {nextDoor.glyph} →
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
          <Link
            href="/astroloji"
            className="inline-block border border-chalk/30 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk uppercase transition-colors hover:border-chalk/60"
          >
            {astrologyHall.backLabel[lang]}
          </Link>
        </div>
      </main>

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
                ✕
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
