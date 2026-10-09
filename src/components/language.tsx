"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { type Lang, text } from "@/lib/copy";

type LanguageValue = {
  lang: Lang;
  choose: (lang: Lang) => void;
  t: ReturnType<typeof text>;
};

const LanguageContext = createContext<LanguageValue | null>(null);

const listeners = new Set<() => void>();

function readSaved(): Lang {
  const saved = window.localStorage.getItem("runeyard-lang");
  if (saved === "en" || saved === "sv" || saved === "tr") return saved;
  return "tr";
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return readSaved();
}

function getServerSnapshot(): Lang {
  return "tr";
}

function chooseLanguage(next: Lang) {
  window.localStorage.setItem("runeyard-lang", next);
  listeners.forEach((listener) => listener());
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function choose(next: Lang) {
    chooseLanguage(next);
  }

  return (
    <LanguageContext.Provider value={{ lang, choose, t: text(lang) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("Language missing");
  return value;
}
