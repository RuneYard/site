"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLanguage } from "@/components/language";
import { runeBySlug, type Rune } from "@/content/runes";

const LETTER_TO_SLUG: Record<string, string> = {
  f: "fehu",
  u: "uruz",
  ü: "uruz",
  a: "ansuz",
  ä: "ansuz",
  å: "ansuz",
  r: "raidho",
  k: "kenaz",
  c: "kenaz",
  ç: "kenaz",
  q: "kenaz",
  x: "kenaz",
  g: "gebo",
  ğ: "gebo",
  w: "wunjo",
  v: "wunjo",
  h: "hagalaz",
  n: "nauthiz",
  i: "isa",
  ı: "isa",
  j: "jera",
  y: "jera",
  p: "perthro",
  z: "algiz",
  s: "sowilo",
  ş: "sowilo",
  t: "tiwaz",
  b: "berkano",
  e: "ehwaz",
  m: "mannaz",
  l: "laguz",
  d: "dagaz",
  o: "othala",
  ö: "othala",
};

function transliterateToRunes(input: string): {
  runicText: string;
  matchedRunes: Rune[];
} {
  const lower = input.toLocaleLowerCase("tr");
  const glyphs: string[] = [];
  const seenSlugs = new Set<string>();
  const matchedRunes: Rune[] = [];

  let i = 0;
  while (i < lower.length) {
    const ch = lower[i];
    const two = lower.slice(i, i + 2);

    if (ch === " ") {
      glyphs.push("·");
      i++;
      continue;
    }

    let slug: string | undefined;
    if (two === "th") {
      slug = "thurisaz";
      i += 2;
    } else if (two === "ng") {
      slug = "ingwaz";
      i += 2;
    } else if (two === "ei") {
      slug = "eihwaz";
      i += 2;
    } else {
      slug = LETTER_TO_SLUG[ch];
      i += 1;
    }

    if (slug) {
      const rune = runeBySlug(slug);
      if (rune) {
        glyphs.push(rune.glyph);
        if (!seenSlugs.has(slug)) {
          seenSlugs.add(slug);
          matchedRunes.push(rune);
        }
      }
    }
  }

  return {
    runicText: glyphs.join(""),
    matchedRunes,
  };
}

const UI = {
  tr: {
    badge: "Runik Fonetik Yazıt & Mühür Atölyesi",
    title: "İsim & Niyet Rün Çevirici (Elder Futhark)",
    lead: "Adını, bir niyet kelimesini veya tarihi bir formülü yaz; Elder Futhark’ın 24 fonetik taş damgasına (th → ᚦ, ng → ᛜ, ei → ᛇ dahil) nasıl dönüştüğünü ve kelimenin içinde hangi rün arketiplerinin çalıştığını gör.",
    placeholder: "İsim veya niyet kelimesi yaz (Örn: Mehmet, Koruma, Alu)...",
    presetsLabel: "Tarihsel Brakteat Formülleri:",
    copyBtn: "Rün Yazıtını Kopyala",
    copiedBtn: "Kopyalandı ✓",
    componentsTitle: "Bu Yazıtı Oluşturan Rün Arketipleri",
    runewordsBridge: "Runewords Uygulamasıyla Derinleştir →",
  },
  en: {
    badge: "Runic Phonetic Inscription & Seal Studio",
    title: "Name & Intention Rune Transliterator (Elder Futhark)",
    lead: "Type your name, an intention word, or an ancient formula to see its phonetic Elder Futhark stone inscription (including digraphs th → ᚦ, ng → ᛜ, ei → ᛇ) and the runic archetypes active within the word.",
    placeholder: "Type a name or intention word (e.g. Protection, Alu)...",
    presetsLabel: "Historical Bracteate Formulas:",
    copyBtn: "Copy Runic Inscription",
    copiedBtn: "Copied ✓",
    componentsTitle: "Runic Archetypes Comprising This Inscription",
    runewordsBridge: "Explore Further in Runewords App →",
  },
  sv: {
    badge: "Runisk Fonetisk Inskrift & Sigillverkstad",
    title: "Namn- & Avsiktsöversättare till Äldre Futhark",
    lead: "Skriv ditt namn, ett avsiktsord eller en historisk formel för att se dess fonetiska runinskrift i den äldre futharken (inklusive th → ᚦ, ng → ᛜ, ei → ᛇ) och vilka runarketyper som verkar i ordet.",
    placeholder: "Skriv ett namn eller avsiktsord (t.ex. Skydd, Alu)...",
    presetsLabel: "Historiska Brakteatformler:",
    copyBtn: "Kopiera Runinskrift",
    copiedBtn: "Kopierad ✓",
    componentsTitle: "Runarketyper i Denna Inskrift",
    runewordsBridge: "Fördjupa i Runewords-appen →",
  },
} as const;

const PRESETS = [
  { label: "ALU (Kutsal Koruma)", value: "ALU" },
  { label: "LAUKAZ (Yaşam Gücü & Şifa)", value: "LAUKAZ" },
  { label: "GIBU AUJA (Uğur & Bereket)", value: "GIBU AUJA" },
  { label: "RUNEYARD", value: "RUNEYARD" },
];

export function RuneTransliterator() {
  const { lang } = useLanguage();
  const ui = UI[lang];
  const [text, setText] = useState("ALU");
  const [copied, setCopied] = useState(false);

  const { runicText, matchedRunes } = useMemo(
    () => transliterateToRunes(text),
    [text],
  );

  function handleCopy() {
    if (!runicText) return;
    navigator.clipboard.writeText(runicText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="mt-10 border border-chalk/20 bg-chalk/[0.02] p-6 sm:p-8">
      <p className="text-[10px] tracking-[0.22em] text-chalk/55 uppercase">
        {ui.badge}
      </p>
      <h2 className="mt-3 font-display text-2xl font-medium tracking-[-0.015em] text-chalk sm:text-3xl">
        {ui.title}
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-chalk/75">
        {ui.lead}
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={ui.placeholder}
          maxLength={42}
          className="flex-1 border border-chalk/25 bg-black/45 px-4 py-2.5 text-sm text-chalk placeholder:text-chalk/40 focus:border-chalk/60 focus:outline-none"
        />
        <button
          type="button"
          onClick={handleCopy}
          disabled={!runicText}
          className="border border-chalk/45 bg-chalk/[0.07] px-5 py-2.5 font-display text-xs tracking-[0.16em] text-chalk uppercase transition-colors hover:border-chalk disabled:opacity-40"
        >
          {copied ? ui.copiedBtn : ui.copyBtn}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
        <span className="text-[10px] tracking-[0.14em] text-chalk/50 uppercase">
          {ui.presetsLabel}
        </span>
        {PRESETS.map((p) => (
          <button
            key={p.value}
            type="button"
            onClick={() => setText(p.value)}
            className="border border-chalk/15 bg-black/30 px-2.5 py-1 text-[10px] tracking-[0.12em] text-chalk/75 uppercase transition-colors hover:border-chalk/45 hover:text-chalk"
          >
            {p.label}
          </button>
        ))}
      </div>

      {runicText && (
        <div className="mt-6 border border-chalk/20 bg-black/55 p-6 text-center">
          <p className="font-display text-4xl tracking-[0.28em] text-chalk sm:text-5xl break-all">
            {runicText}
          </p>
          <p className="mt-2 text-[11px] tracking-[0.24em] text-chalk/50 uppercase">
            {text.trim()}
          </p>
        </div>
      )}

      {matchedRunes.length > 0 && (
        <div className="mt-6">
          <p className="text-[10px] tracking-[0.18em] text-chalk/55 uppercase">
            {ui.componentsTitle} ({matchedRunes.length})
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
            {matchedRunes.map((rune) => (
              <Link
                key={rune.slug}
                href={`/runler/${rune.slug}`}
                className="group flex items-center gap-3 border border-chalk/12 bg-black/35 p-3 transition-colors hover:border-chalk/45"
              >
                <span className="font-display text-3xl leading-none text-chalk/90 group-hover:text-chalk">
                  {rune.glyph}
                </span>
                <div className="min-w-0">
                  <span className="block font-display text-base font-medium text-chalk">
                    {rune.name} [{rune.phoneme}]
                  </span>
                  <span className="block truncate text-[11px] text-chalk/60">
                    {rune.subtitle[lang]}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-4 pt-2">
            <Link
              href="/uygulamalar/runewords"
              className="font-display text-xs tracking-[0.14em] text-chalk/75 uppercase transition-colors hover:text-chalk hover:underline"
            >
              {ui.runewordsBridge}
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
