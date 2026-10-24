"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/language";

const UI = {
  tr: {
    badge: "Sesli Galdr Kaydı · Orijinal Frekans",
    title: "Galdr Titreşimini & Telaffuzunu Dinle",
    desc: "Eski İskandinav geleneğinde rün yalnızca gözle okunmaz; Galdr (büyülü ses/rezonans) ile nefese ve göğüs kafesine indirilir. Tek sefer dinleyebilir veya 9 tekrarlı meditatif döngüyü başlatabilirsin.",
    playOnce: "🔊 Galdr Sesini Dinle",
    playNine: "↻ 9 Tekrarlı Galdr Döngüsü",
    stop: "■ Sesi Durdur",
    playingLabel: "Galdr Rezonansı Aktif",
  },
  en: {
    badge: "Recorded Galdr Chant · Original Resonance",
    title: "Listen to the Galdr Vibration & Pronunciation",
    desc: "In Old Norse tradition a rune is not read by the eye alone; through Galdr (incantation and vocal resonance) it is drawn into the breath and chest. Listen once or start a 9-fold meditative cycle.",
    playOnce: "🔊 Play Galdr Chant",
    playNine: "↻ 9-Fold Galdr Cycle",
    stop: "■ Stop Audio",
    playingLabel: "Galdr Resonance Active",
  },
  sv: {
    badge: "Inspelad Galdr · Ursprunglig Resonans",
    title: "Lyssna till Galdr-vibrationen & Uttalet",
    desc: "I fornnordisk tradition läses en runa inte bara med ögat; genom Galdr (besvärjelse och röstresonans) sänks den i andedräkten och bröstkorgen. Lyssna en gång eller starta en niofaldig cykel.",
    playOnce: "🔊 Spela Galdr",
    playNine: "↻ 9-Faldig Galdr-cykel",
    stop: "■ Stoppa Ljud",
    playingLabel: "Galdr-resonans Aktiv",
  },
} as const;

export function GaldrPlayer({
  slug,
  name,
  glyph,
  phoneme,
}: {
  slug: string;
  name: string;
  glyph: string;
  phoneme: string;
}) {
  const { lang } = useLanguage();
  const ui = UI[lang];
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [remaining, setRemaining] = useState(0);

  const audioSrc = `/audio/galdr/${slug}.mp3`;

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [slug]);

  function startPlay(repeats: number) {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    const audio = new Audio(audioSrc);
    audioRef.current = audio;
    setPlaying(true);
    setRemaining(repeats);

    let countLeft = repeats - 1;
    audio.onended = () => {
      if (countLeft > 0) {
        countLeft -= 1;
        setRemaining(countLeft + 1);
        audio.currentTime = 0;
        audio.play().catch(() => setPlaying(false));
      } else {
        setPlaying(false);
        setRemaining(0);
      }
    };
    audio.onerror = () => {
      setPlaying(false);
      setRemaining(0);
    };
    audio.play().catch(() => {
      setPlaying(false);
      setRemaining(0);
    });
  }

  function stopPlay() {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setPlaying(false);
    setRemaining(0);
  }

  return (
    <section className="mt-8 border border-chalk/25 bg-chalk/[0.03] p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[10px] tracking-[0.2em] text-chalk/55 uppercase">
          {ui.badge} · [{phoneme}]
        </p>
        {playing && (
          <span className="animate-pulse border border-chalk/40 bg-chalk/[0.08] px-2.5 py-0.5 text-[10px] tracking-[0.16em] text-chalk uppercase">
            ● {ui.playingLabel} {remaining > 1 ? `(${remaining})` : ""}
          </span>
        )}
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-medium text-chalk">
            {glyph} {name} — {ui.title}
          </h2>
          <p className="mt-1.5 text-xs leading-5 text-chalk/75">
            {ui.desc}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {!playing ? (
            <>
              <button
                type="button"
                onClick={() => startPlay(1)}
                className="border border-chalk/55 bg-chalk/[0.08] px-4 py-2.5 font-display text-xs tracking-[0.16em] text-chalk uppercase transition-colors hover:border-chalk hover:bg-chalk/[0.15]"
              >
                {ui.playOnce}
              </button>
              <button
                type="button"
                onClick={() => startPlay(9)}
                className="border border-chalk/25 px-4 py-2.5 font-display text-xs tracking-[0.16em] text-chalk/80 uppercase transition-colors hover:border-chalk/60 hover:text-chalk"
              >
                {ui.playNine}
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={stopPlay}
              className="border border-chalk/70 bg-chalk/[0.15] px-5 py-2.5 font-display text-xs tracking-[0.16em] text-chalk uppercase transition-colors hover:border-chalk"
            >
              {ui.stop}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
