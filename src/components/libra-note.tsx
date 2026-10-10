"use client";

import { useLanguage } from "@/components/language";
import { libraNote } from "@/lib/libra-note";

export function LibraNote() {
  const { lang } = useLanguage();
  const note = libraNote(lang);

  return (
    <article className="mt-20 border-t border-chalk/15 pt-16">
      <h2 className="flex flex-wrap items-baseline gap-x-3 font-display text-5xl font-medium tracking-[-0.025em] sm:text-6xl">
        <span aria-hidden className="text-[0.72em] text-chalk/55">
          ♎
        </span>
        {note.title}
      </h2>
      <p className="mt-3 max-w-xl font-display text-2xl font-medium tracking-[-0.02em] text-chalk/80">
        {note.subtitle}
      </p>
      <p className="mt-8 max-w-xl text-lg leading-8 text-chalk/85">{note.overview}</p>
      <h3 className="mt-10 font-display text-2xl font-medium tracking-[-0.02em]">{note.ask}</h3>
      <ul className="mt-6 max-w-xl border-t border-chalk/15">
        {note.points.map((item) => (
          <li key={item.lead} className="border-b border-chalk/15 py-4">
            <p className="font-display text-2xl font-medium">{item.lead}</p>
            <p className="mt-2 text-base leading-7 text-chalk/80">{item.text}</p>
          </li>
        ))}
      </ul>
      <div className="mt-12 max-w-xl border-t border-chalk/15">
        {note.signs.map((sign) => (
          <section key={sign.name} className="border-b border-chalk/15 py-5">
            <h3 className="font-display text-2xl font-medium">{sign.name}</h3>
            <p className="mt-2 text-base leading-7 text-chalk/80">{sign.text}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
