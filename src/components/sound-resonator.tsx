"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/language";

const RUNE_FREQUENCIES: Record<number, number> = {
  1: 136.1,  // Fehu
  2: 144.0,  // Uruz
  3: 152.0,  // Thurisaz
  4: 162.0,  // Ansuz
  5: 171.0,  // Raidho
  6: 180.0,  // Kenaz
  7: 192.0,  // Gebo
  8: 204.0,  // Wunjo
  9: 128.0,  // Hagalaz
  10: 132.0, // Nauthiz
  11: 114.0, // Isa
  12: 174.0, // Jera
  13: 147.0, // Eihwaz
  14: 165.0, // Perthro
  15: 198.0, // Algiz
  16: 216.0, // Sowilo
  17: 186.0, // Tiwaz
  18: 176.0, // Berkano
  19: 189.0, // Ehwaz
  20: 208.0, // Mannaz
  21: 156.0, // Laguz
  22: 168.0, // Ingwaz
  23: 222.0, // Dagaz
  24: 140.0, // Othala
};

const LABELS = {
  tr: {
    galdrIdle: "🔊 Galdr Ses Rezonansını Dinle",
    galdrActive: "⏹ Galdr Rezonansını Durdur",
    galdrHint: "Nefesini derinleştir ve rünün ses kökünü göğüs kafesinde titreştir",
    drumIdle: "🥁 Şamanik Düngür & Ocak Nabzı (4.5 Hz Theta)",
    drumActive: "⏹ Düngür & Ocak Nabzını Durdur",
    drumHint: "Okuma ve sessiz odaklanma için derin çerçeve davulu ritmi",
  },
  en: {
    galdrIdle: "🔊 Listen to Galdr Resonance",
    galdrActive: "⏹ Stop Galdr Resonance",
    galdrHint: "Deepen your breath and intone the rune's phonetic root in your chest",
    drumIdle: "🥁 Shamanic Frame Drum & Hearth Pulse (4.5 Hz Theta)",
    drumActive: "⏹ Stop Drum & Hearth Pulse",
    drumHint: "Low steady frame-drum pulse for contemplative reading and ritual focus",
  },
  sv: {
    galdrIdle: "🔊 Lyssna på Galdr-resonans",
    galdrActive: "⏹ Stoppa Galdr-resonans",
    galdrHint: "Fördjupa andningen och låt runans ljudrot vibrera i bröstkorgen",
    drumIdle: "🥁 Schamanisk Trum- & Härdpuls (4.5 Hz Theta)",
    drumActive: "⏹ Stoppa Trum- & Härdpuls",
    drumHint: "Djup, stadig ramtrumpuls för läsning och stilla fokus",
  },
} as const;

export function GaldrResonator({
  runeIndex,
  runeName,
  phoneme,
}: {
  runeIndex: number;
  runeName: string;
  phoneme: string;
}) {
  const { lang } = useLanguage();
  const ui = LABELS[lang];
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  function stopAudio() {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (ctxRef.current) {
      ctxRef.current.close().catch(() => {});
      ctxRef.current = null;
    }
    setPlaying(false);
  }

  useEffect(() => {
    return () => stopAudio();
  }, []);

  function toggleGaldr() {
    if (playing) {
      stopAudio();
      return;
    }

    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();
    ctxRef.current = ctx;
    const baseFreq = RUNE_FREQUENCIES[runeIndex] ?? 144.0;
    const now = ctx.currentTime;
    const duration = 7.5;

    // Master gain with gentle fade-in and fade-out
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.001, now);
    master.gain.exponentialRampToValueAtTime(0.24, now + 1.2);
    master.gain.setValueAtTime(0.24, now + duration - 1.8);
    master.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    master.connect(ctx.destination);

    // Warm vocal-tract formant bandpass filter
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(baseFreq * 3.2, now);
    filter.Q.setValueAtTime(2.4, now);
    filter.connect(master);

    // Fundamental drone + fifth + sub-octave
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const osc3 = ctx.createOscillator();

    osc1.type = "sawtooth";
    osc1.frequency.setValueAtTime(baseFreq, now);

    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(baseFreq * 1.5, now); // Perfect fifth

    osc3.type = "sine";
    osc3.frequency.setValueAtTime(baseFreq * 0.5, now); // Sub-octave

    const g1 = ctx.createGain();
    const g2 = ctx.createGain();
    const g3 = ctx.createGain();
    g1.gain.value = 0.35;
    g2.gain.value = 0.22;
    g3.gain.value = 0.45;

    osc1.connect(g1).connect(filter);
    osc2.connect(g2).connect(filter);
    osc3.connect(g3).connect(filter);

    osc1.start(now);
    osc2.start(now);
    osc3.start(now);

    osc1.stop(now + duration);
    osc2.stop(now + duration);
    osc3.stop(now + duration);

    setPlaying(true);
    timerRef.current = window.setTimeout(() => {
      stopAudio();
    }, duration * 1000);
  }

  const baseFreq = RUNE_FREQUENCIES[runeIndex] ?? 144.0;

  return (
    <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-amber/35 bg-soot/65 px-4 py-3.5">
      <div>
        <p className="text-xs font-medium tracking-[0.16em] text-amber uppercase">
          {runeName} · [{phoneme}] · {baseFreq.toFixed(1)} Hz
        </p>
        <p className="mt-0.5 text-xs text-chalk/70">{ui.galdrHint}</p>
      </div>
      <button
        type="button"
        onClick={toggleGaldr}
        className={`shrink-0 border px-4 py-2 text-xs font-semibold tracking-[0.16em] uppercase transition ${
          playing
            ? "border-amber bg-amber text-ink"
            : "border-amber/60 bg-amber/15 text-amber hover:bg-amber hover:text-ink"
        }`}
      >
        {playing ? ui.galdrActive : ui.galdrIdle}
      </button>
    </div>
  );
}

export function DrumPulseResonator() {
  const { lang } = useLanguage();
  const ui = LABELS[lang];
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  function stopDrum() {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (ctxRef.current) {
      ctxRef.current.close().catch(() => {});
      ctxRef.current = null;
    }
    setPlaying(false);
  }

  useEffect(() => {
    return () => stopDrum();
  }, []);

  function triggerDrumHit(ctx: AudioContext, accent: boolean) {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(accent ? 82 : 68, now);
    osc.frequency.exponentialRampToValueAtTime(38, now + 0.28);

    gain.gain.setValueAtTime(accent ? 0.32 : 0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.34);

    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.36);
  }

  function toggleDrum() {
    if (playing) {
      stopDrum();
      return;
    }

    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();
    ctxRef.current = ctx;

    let step = 0;
    triggerDrumHit(ctx, true);
    intervalRef.current = window.setInterval(() => {
      step = (step + 1) % 4;
      triggerDrumHit(ctx, step === 0);
    }, 520); // Steady ~115 BPM heartbeat / frame-drum cadence

    setPlaying(true);
  }

  return (
    <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-amber/30 bg-soot/55 px-4 py-3">
      <div>
        <p className="text-[11px] font-medium tracking-[0.18em] text-amber uppercase">
          {ui.drumIdle}
        </p>
        <p className="mt-0.5 text-xs text-chalk/65">{ui.drumHint}</p>
      </div>
      <button
        type="button"
        onClick={toggleDrum}
        className={`shrink-0 border px-4 py-2 text-xs font-semibold tracking-[0.16em] uppercase transition ${
          playing
            ? "border-amber bg-amber text-ink"
            : "border-amber/55 bg-amber/12 text-amber hover:bg-amber hover:text-ink"
        }`}
      >
        {playing ? ui.drumActive : ui.drumIdle}
      </button>
    </div>
  );
}
