"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language";

export type SavedSeal = {
  path: string;
  title: string;
  addedAt: number;
};

const STORAGE_KEY = "runeyard_seals_v1";
const EVENT_NAME = "runeyard-seals-change";

export function readSavedSeals(): SavedSeal[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function toggleSavedSeal(entry: { path: string; title: string }): boolean {
  if (typeof window === "undefined") return false;
  const current = readSavedSeals();
  const exists = current.some((s) => s.path === entry.path);
  let next: SavedSeal[];
  if (exists) {
    next = current.filter((s) => s.path !== entry.path);
  } else {
    next = [{ path: entry.path, title: entry.title, addedAt: Date.now() }, ...current];
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch {
    // ignore storage quota errors
  }
  return !exists;
}

const UI = {
  tr: {
    btnLabel: "Defterim",
    modalTitle: "Kış Odası Çalışma Defterim (Mühürlenen Odalar)",
    emptyText:
      "Henüz çalışma defterine bir oda mühürlemedin. Herhangi bir rün, gökyüzü notu veya gelenek odasının altındaki ‘☆ Defterime Mühürle’ butonuna tıklayarak kendi okuma listeni oluşturabilirsin.",
    removeBtn: "Kaldır",
    closeLabel: "Kapat",
  },
  en: {
    btnLabel: "Study Book",
    modalTitle: "My Winter Hall Study Book (Sealed Rooms)",
    emptyText:
      "You have not sealed any rooms into your study book yet. Click ‘☆ Seal to Study Book’ at the bottom of any rune, sky note, or tradition room to save it here.",
    removeBtn: "Remove",
    closeLabel: "Close",
  },
  sv: {
    btnLabel: "Studiebok",
    modalTitle: "Min Vinterrums Studiebok (Förseglade Rum)",
    emptyText:
      "Du har ännu inte sparat några rum i din studiebok. Klicka på ’☆ Spara i Studiebok’ längst ner i valfritt rum för att samla dina anteckningar här.",
    removeBtn: "Ta bort",
    closeLabel: "Stäng",
  },
} as const;

export function SavedSealsDrawer() {
  const { lang } = useLanguage();
  const ui = UI[lang];
  const [open, setOpen] = useState(false);
  const [seals, setSeals] = useState<SavedSeal[]>([]);

  useEffect(() => {
    const sync = () => setSeals(readSavedSeals());
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  function handleRemove(path: string, title: string) {
    toggleSavedSeal({ path, title });
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 border border-chalk/20 bg-chalk/[0.03] px-2.5 py-1 text-[11px] tracking-[0.14em] text-chalk/80 uppercase transition-colors hover:border-chalk/50 hover:text-chalk"
      >
        <span aria-hidden>{seals.length > 0 ? "★" : "☆"}</span>
        <span>{ui.btnLabel}</span>
        {seals.length > 0 && (
          <span className="border border-chalk/25 px-1 text-[9px] text-chalk">
            {seals.length}
          </span>
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 px-4 pt-16 pb-10 backdrop-blur-xs"
          onClick={() => setOpen(false)}
        >
          <div
            className="wet-ink w-full max-w-xl border border-chalk/25 bg-ink p-5 shadow-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-2 border-b border-chalk/15 pb-3">
              <p className="text-[10px] tracking-[0.2em] text-chalk/60 uppercase">
                {ui.modalTitle} ({seals.length})
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-[10px] tracking-[0.16em] text-chalk/55 uppercase hover:text-chalk"
              >
                {ui.closeLabel}
              </button>
            </div>

            <div className="mt-4 max-h-[60vh] overflow-y-auto">
              {seals.length === 0 ? (
                <p className="py-8 text-sm leading-6 text-chalk/65">
                  {ui.emptyText}
                </p>
              ) : (
                <ul className="divide-y divide-chalk/10">
                  {seals.map((item) => (
                    <li
                      key={item.path}
                      className="flex items-center justify-between gap-3 py-3"
                    >
                      <Link
                        href={item.path}
                        onClick={() => setOpen(false)}
                        className="font-display text-lg text-chalk hover:underline"
                      >
                        ★ {item.title}
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleRemove(item.path, item.title)}
                        className="border border-chalk/15 px-2 py-1 text-[10px] tracking-[0.12em] text-chalk/50 uppercase hover:border-chalk/40 hover:text-chalk"
                      >
                        {ui.removeBtn}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
