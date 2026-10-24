"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language";

const UI = {
  tr: {
    on: "🕯 Mum Işığı: Açık",
    off: "🕯 Mum Işığı",
    title: "Gece göz yormayan sıcak mum ışığı okuma modunu aç/kapat",
  },
  en: {
    on: "🕯 Candlelight: On",
    off: "🕯 Candlelight",
    title: "Toggle warm candlelight reading mode for night study",
  },
  sv: {
    on: "🕯 Ljusläge: På",
    off: "🕯 Ljusläge",
    title: "Slå på/av varmt stearinljusläge för kvällsläsning",
  },
} as const;

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      if (total <= 120) {
        setProgress(0);
        return;
      }
      const pct = Math.min(100, Math.max(0, (window.scrollY / total) * 100));
      setProgress(pct);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (progress <= 0) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px] bg-transparent"
    >
      <div
        style={{ width: `${progress}%` }}
        className="h-full bg-gradient-to-r from-[#a8824a] via-[#d8ae5e] to-[#f5d78e] shadow-[0_0_10px_#d8ae5e] transition-[width] duration-75"
      />
    </div>
  );
}

export function CandlelightToggle() {
  const { lang } = useLanguage();
  const ui = UI[lang];
  const [active, setActive] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("runeyard_candlelight") === "1";
      setActive(saved);
      document.documentElement.classList.toggle("candlelight-mode", saved);
    } catch {
      // ignore storage error
    }
  }, []);

  function toggle() {
    const next = !active;
    setActive(next);
    document.documentElement.classList.toggle("candlelight-mode", next);
    try {
      localStorage.setItem("runeyard_candlelight", next ? "1" : "0");
    } catch {
      // ignore storage error
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      title={ui.title}
      aria-pressed={active}
      className={`flex items-center gap-1.5 border px-2.5 py-1 text-[11px] tracking-[0.14em] uppercase transition-colors ${
        active
          ? "border-amber bg-amber/20 text-amber shadow-[0_0_12px_rgba(216,174,94,0.28)]"
          : "border-chalk/20 bg-chalk/[0.03] text-chalk/80 hover:border-amber/50 hover:text-amber"
      }`}
    >
      <span>{active ? ui.on : ui.off}</span>
    </button>
  );
}
