"use client";

import { useSyncExternalStore } from "react";
import { useLanguage } from "@/components/language";
import { formatSkyClock, formatSkyDate, readSky } from "@/lib/sky";
import { skyAdvice, skyNames } from "@/lib/sky-copy";

const locale = { tr: "tr-TR", en: "en-GB", sv: "sv-SE" } as const;

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 1000);
  return () => clearInterval(id);
}

function secondNow() {
  return Math.floor(Date.now() / 1000);
}

export function SkyNote() {
  const { lang, t } = useLanguage();
  const second = useSyncExternalStore(subscribe, secondNow, secondNow);
  const sky = readSky(new Date(second * 1000));
  const names = skyNames[lang];

  return (
    <div className="mt-8 max-w-md" suppressHydrationWarning>
      <time
        dateTime={sky.date.toISOString()}
        className="block text-[10px] tracking-[0.16em] text-chalk/50 uppercase"
      >
        {formatSkyDate(sky.date, locale[lang])}
      </time>
      <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[10px] tracking-[0.14em] text-chalk/45 uppercase">
        <div>
          <dt className="inline">{t.sky.phase}</dt>{" "}
          <dd className="inline text-chalk/70">{names.phase[sky.phase]}</dd>
        </div>
        <div>
          <dt className="inline">{t.sky.sign}</dt>{" "}
          <dd className="inline text-chalk/70">{names.sign[sky.sign]}</dd>
        </div>
        <div>
          <dt className="inline">{t.sky.hour}</dt>{" "}
          <dd className="inline text-chalk/70">{names.hour[sky.hour]}</dd>
        </div>
      </dl>
      <p className="mt-3 text-base leading-7 text-chalk/90">{skyAdvice(lang, sky)}</p>
      <p
        className="mt-4 font-display text-sm tracking-[0.28em] text-chalk/45 tabular-nums"
        aria-label={formatSkyClock(sky.date)}
      >
        {formatSkyClock(sky.date)}
      </p>
    </div>
  );
}
