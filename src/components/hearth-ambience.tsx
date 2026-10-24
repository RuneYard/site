"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language";

type HearthAudioState = {
  ctx: AudioContext | null;
  masterGain: GainNode | null;
  crackleTimer: number | null;
  active: boolean;
  listeners: Set<(active: boolean) => void>;
};

const engine: HearthAudioState = {
  ctx: null,
  masterGain: null,
  crackleTimer: null,
  active: false,
  listeners: new Set(),
};

function notifyListeners() {
  for (const fn of engine.listeners) {
    fn(engine.active);
  }
}

function startHearthAudio() {
  if (engine.active) return;

  const AudioCtx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  const ctx = new AudioCtx();
  engine.ctx = ctx;

  const master = ctx.createGain();
  master.gain.setValueAtTime(0.01, ctx.currentTime);
  master.gain.exponentialRampToValueAtTime(0.26, ctx.currentTime + 1.2);
  master.connect(ctx.destination);
  engine.masterGain = master;

  // 1. Continuous Warm Ember Bed & Soft Winter Draft (Brown-Filtered Noise)
  const bufferSize = ctx.sampleRate * 4;
  const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  let lastOut = 0.0;
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    output[i] = (lastOut + 0.02 * white) / 1.02;
    lastOut = output[i];
    output[i] *= 1.8;
  }

  const warmNoise = ctx.createBufferSource();
  warmNoise.buffer = noiseBuffer;
  warmNoise.loop = true;

  const lowpass = ctx.createBiquadFilter();
  lowpass.type = "lowpass";
  lowpass.frequency.setValueAtTime(195, ctx.currentTime);

  // Subtle breathing LFO for the hearth draft
  const lfo = ctx.createOscillator();
  lfo.frequency.setValueAtTime(0.18, ctx.currentTime);
  const lfoGain = ctx.createGain();
  lfoGain.gain.setValueAtTime(45, ctx.currentTime);
  lfo.connect(lfoGain);
  lfoGain.connect(lowpass.frequency);
  lfo.start();

  const bedGain = ctx.createGain();
  bedGain.gain.setValueAtTime(0.45, ctx.currentTime);

  warmNoise.connect(lowpass);
  lowpass.connect(bedGain);
  bedGain.connect(master);
  warmNoise.start();

  // 2. Organic Wood Ember Crackles & Pops
  function triggerCrackle() {
    if (!engine.active || !engine.ctx || !engine.masterGain) return;
    const now = engine.ctx.currentTime;

    // Short burst of filtered white noise for wood pop/crackle
    const burstLen = Math.floor(engine.ctx.sampleRate * (0.012 + Math.random() * 0.028));
    const burstBuf = engine.ctx.createBuffer(1, burstLen, engine.ctx.sampleRate);
    const data = burstBuf.getChannelData(0);
    for (let i = 0; i < burstLen; i++) {
      const env = Math.pow(1 - i / burstLen, 2.2);
      data[i] = (Math.random() * 2 - 1) * env;
    }

    const src = engine.ctx.createBufferSource();
    src.buffer = burstBuf;

    const bandpass = engine.ctx.createBiquadFilter();
    bandpass.type = "bandpass";
    bandpass.frequency.setValueAtTime(1400 + Math.random() * 2200, now);
    bandpass.Q.setValueAtTime(2.5 + Math.random() * 3.5, now);

    const popGain = engine.ctx.createGain();
    popGain.gain.setValueAtTime(0.12 + Math.random() * 0.25, now);

    src.connect(bandpass);
    bandpass.connect(popGain);
    popGain.connect(engine.masterGain);
    src.start(now);

    const nextDelay = 140 + Math.random() * 680;
    engine.crackleTimer = window.setTimeout(triggerCrackle, nextDelay);
  }

  engine.active = true;
  triggerCrackle();
  notifyListeners();
}

function stopHearthAudio() {
  if (!engine.active) return;
  engine.active = false;
  if (engine.crackleTimer !== null) {
    clearTimeout(engine.crackleTimer);
    engine.crackleTimer = null;
  }
  if (engine.ctx) {
    engine.ctx.close().catch(() => {});
    engine.ctx = null;
    engine.masterGain = null;
  }
  notifyListeners();
}

const UI = {
  tr: {
    on: "🔥 Ocak Sesi: Açık",
    off: "🔥 Ocak Sesi",
    title: "Kış Odası şömine ve odun çıtırtısı atmosferini aç/kapat",
  },
  en: {
    on: "🔥 Hearth Sound: On",
    off: "🔥 Hearth Sound",
    title: "Toggle Winter Hall hearth fire crackle ambience",
  },
  sv: {
    on: "🔥 Härdljud: På",
    off: "🔥 Härdljud",
    title: "Slå på/av vinterrummets sprakande härdeld",
  },
} as const;

export function HearthAmbienceButton() {
  const { lang } = useLanguage();
  const ui = UI[lang];
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(engine.active);
    const listener = (state: boolean) => setPlaying(state);
    engine.listeners.add(listener);
    return () => {
      engine.listeners.delete(listener);
    };
  }, []);

  function toggle() {
    if (engine.active) {
      stopHearthAudio();
    } else {
      startHearthAudio();
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      title={ui.title}
      aria-pressed={playing}
      className={`flex items-center gap-1.5 border px-2.5 py-1 text-[11px] tracking-[0.14em] uppercase transition-colors ${
        playing
          ? "border-amber bg-amber/20 text-amber shadow-[0_0_12px_rgba(216,174,94,0.28)]"
          : "border-chalk/20 bg-chalk/[0.03] text-chalk/80 hover:border-amber/50 hover:text-amber"
      }`}
    >
      <span>{playing ? ui.on : ui.off}</span>
    </button>
  );
}
