"use client";

import { HallShell } from "@/components/hall-shell";
import { useLanguage } from "@/components/language";
import { runeCourse } from "@/lib/rune-course";
import Link from "next/link";

export function RuneCourseRoom() {
  const { lang, t } = useLanguage();
  const course = runeCourse(lang);

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-3xl px-6 py-20 sm:px-8">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">runeyard.net</p>
        <h1 className="mt-4 font-display text-5xl font-medium tracking-[-0.025em] sm:text-6xl">
          {course.title}
        </h1>
        <p className="mt-3 text-sm text-chalk/60">{course.status}</p>

        <div className="mt-8 max-w-xl space-y-4 text-lg leading-8 text-chalk/85">
          {course.welcome.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <ul className="mt-8 max-w-xl space-y-2">
          {course.questions.map((line) => (
            <li key={line} className="font-display text-2xl leading-snug font-medium">
              {line}
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-xl text-base leading-7 text-chalk/75">{course.scope}</p>

        <dl className="card-slate mt-10 grid border border-chalk/10 sm:grid-cols-2">
          {course.facts.map(([label, value]) => (
            <div
              key={label}
              className="flex items-baseline justify-between gap-4 border-b border-chalk/10 px-4 py-3 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 sm:odd:border-r"
            >
              <dt className="text-[10px] tracking-[0.16em] text-chalk/50 uppercase">{label}</dt>
              <dd className="text-right text-sm text-chalk">{value}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-12 font-display text-sm font-medium tracking-[0.18em] text-chalk/70 uppercase">
          {course.lessonsLabel}
        </h2>
        <ol className="mt-4 max-w-xl list-decimal space-y-2 pl-6 text-base leading-7 text-chalk/90">
          {course.lessons.map((lesson) => (
            <li key={lesson}>{lesson}</li>
          ))}
        </ol>

        <p className="mt-10 max-w-xl text-base leading-7 text-chalk/80">{course.level}</p>
        <p className="mt-4 flex flex-wrap items-baseline gap-x-3 text-base text-chalk">
          <span>{course.enroll}</span>
          <a href="tel:+905455642164" className="tabular-nums text-chalk hover:underline">
            0545 564 21 64
          </a>
          <a
            href="https://wa.me/905455642164"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.14em] text-chalk/75 underline decoration-chalk/35 underline-offset-4 uppercase hover:text-chalk"
          >
            WhatsApp
          </a>
        </p>

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
