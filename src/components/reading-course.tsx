"use client";

import Link from "next/link";
import { HallShell } from "@/components/hall-shell";
import { useLanguage } from "@/components/language";
import { readingCourse } from "@/lib/reading-course";

export function ReadingCourseRoom() {
  const { lang, t } = useLanguage();
  const course = readingCourse(lang);

  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-3xl px-6 py-20 sm:px-8">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">runeyard.net</p>
        <h1 className="mt-4 font-display text-5xl font-medium tracking-[-0.025em] sm:text-6xl">
          {course.title}
        </h1>
        <p className="mt-3 text-sm text-chalk/60">{course.status}</p>

        <p className="mt-8 max-w-xl text-lg leading-8 text-chalk/85">{course.opening}</p>

        {course.sections.map((section) => (
          <section key={section.title} className="mt-12">
            <h2 className="max-w-xl font-display text-2xl font-medium tracking-[-0.02em]">
              {section.title}
            </h2>
            <ul className="mt-4 max-w-xl space-y-3 text-base leading-7 text-chalk/90">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}

        <p className="mt-10 max-w-xl text-base leading-7 text-chalk/80">{course.closing}</p>

        <dl className="card-slate mt-10 grid border border-chalk/10 sm:grid-cols-2">
          {course.facts.map(([label, value]) => (
            <div
              key={label}
              className="flex items-baseline justify-between gap-4 border-b border-chalk/10 px-4 py-3 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 sm:odd:border-r"
            >
              <dt className="text-[10px] tracking-[0.16em] text-chalk/50 uppercase">{label}</dt>
              <dd className="text-right text-sm text-chalk">
                {value === "0545 564 21 64" ? (
                  <a href="tel:+905455642164" className="tabular-nums">
                    {value}
                  </a>
                ) : (
                  value
                )}
              </dd>
            </div>
          ))}
        </dl>

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
