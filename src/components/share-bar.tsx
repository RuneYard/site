"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language";

const UI = {
  tr: {
    label: "Bu Odayı & Notu Paylaş:",
    whatsapp: "WhatsApp’ta Paylaş",
    copy: "Bağlantıyı Kopyala",
    copied: "Bağlantı Kopyalandı ✓",
  },
  en: {
    label: "Share This Room & Note:",
    whatsapp: "Share on WhatsApp",
    copy: "Copy Link",
    copied: "Link Copied ✓",
  },
  sv: {
    label: "Dela Detta Rum & Anteckning:",
    whatsapp: "Dela på WhatsApp",
    copy: "Kopiera Länk",
    copied: "Länk Kopierad ✓",
  },
} as const;

export function ShareBar({ title, path }: { title: string; path?: string }) {
  const { lang } = useLanguage();
  const ui = UI[lang];
  const [copied, setCopied] = useState(false);

  const fullUrl =
    typeof window !== "undefined"
      ? path
        ? `https://www.runeyard.net${path}`
        : window.location.href
      : `https://www.runeyard.net${path ?? ""}`;

  const waHref = `https://wa.me/?text=${encodeURIComponent(
    `${title} — RuneYard\n${fullUrl}`,
  )}`;

  function handleCopy() {
    const targetUrl =
      typeof window !== "undefined" && !path ? window.location.href : fullUrl;
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border border-chalk/15 bg-chalk/[0.02] px-4 py-3">
      <span className="text-[10px] tracking-[0.18em] text-chalk/55 uppercase">
        {ui.label}
      </span>
      <div className="flex flex-wrap items-center gap-2.5">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-chalk/30 bg-chalk/[0.05] px-3.5 py-1.5 font-display text-xs tracking-[0.14em] text-chalk uppercase transition-colors hover:border-chalk/70 hover:bg-chalk/[0.1]"
        >
          {ui.whatsapp}
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="border border-chalk/20 px-3.5 py-1.5 font-display text-xs tracking-[0.14em] text-chalk/80 uppercase transition-colors hover:border-chalk/55 hover:text-chalk"
        >
          {copied ? ui.copied : ui.copy}
        </button>
      </div>
    </div>
  );
}
