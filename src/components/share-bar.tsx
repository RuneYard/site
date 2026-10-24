"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language";
import { readSavedSeals, toggleSavedSeal } from "@/components/saved-seals";

const UI = {
  tr: {
    label: "Bu Odayı Kaydet & Paylaş:",
    seal: "☆ Defterime Mühürle",
    sealed: "★ Defterde Mühürlü",
    whatsapp: "WhatsApp’ta Paylaş",
    copy: "Bağlantıyı Kopyala",
    copied: "Bağlantı Kopyalandı ✓",
  },
  en: {
    label: "Save & Share This Room:",
    seal: "☆ Seal to Study Book",
    sealed: "★ Sealed in Study Book",
    whatsapp: "Share on WhatsApp",
    copy: "Copy Link",
    copied: "Link Copied ✓",
  },
  sv: {
    label: "Spara & Dela Detta Rum:",
    seal: "☆ Spara i Studiebok",
    sealed: "★ Sparad i Studiebok",
    whatsapp: "Dela på WhatsApp",
    copy: "Kopiera Länk",
    copied: "Länk Kopierad ✓",
  },
} as const;

export function ShareBar({ title, path }: { title: string; path?: string }) {
  const { lang } = useLanguage();
  const ui = UI[lang];
  const [copied, setCopied] = useState(false);
  const [isSealed, setIsSealed] = useState(false);

  const normalizedPath =
    path ??
    (typeof window !== "undefined" ? window.location.pathname : "/");

  useEffect(() => {
    const sync = () => {
      const list = readSavedSeals();
      setIsSealed(list.some((s) => s.path === normalizedPath));
    };
    sync();
    window.addEventListener("runeyard-seals-change", sync);
    return () => window.removeEventListener("runeyard-seals-change", sync);
  }, [normalizedPath]);

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

  function handleToggleSeal() {
    toggleSavedSeal({ path: normalizedPath, title });
  }

  return (
    <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border border-chalk/15 bg-chalk/[0.02] px-4 py-3">
      <span className="text-[10px] tracking-[0.18em] text-chalk/55 uppercase">
        {ui.label}
      </span>
      <div className="flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={handleToggleSeal}
          className={`border px-3.5 py-1.5 font-display text-xs tracking-[0.14em] uppercase transition-colors ${
            isSealed
              ? "border-chalk/70 bg-chalk/[0.12] text-chalk"
              : "border-chalk/25 text-chalk/85 hover:border-chalk/60 hover:text-chalk"
          }`}
        >
          {isSealed ? ui.sealed : ui.seal}
        </button>
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
