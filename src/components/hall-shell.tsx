"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { languageLabel, languages } from "@/lib/copy";
import { HearthAmbienceButton } from "@/components/hearth-ambience";
import { useLanguage } from "@/components/language";
import { CandlelightToggle, ReadingProgressBar } from "@/components/reading-comfort";
import { RoomSearch } from "@/components/room-search";
import { SavedSealsDrawer } from "@/components/saved-seals";

export function HallShell({ children }: { children: React.ReactNode }) {
  const { lang, choose, t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="wet-slate min-h-full text-chalk overflow-x-hidden">
      <ReadingProgressBar />
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-chalk"
      >
        {t.skip}
      </a>
      <header className="wet-ink bronze-hairline sticky top-0 z-40 backdrop-blur-md bg-ink/95">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-3 px-4 py-3 sm:px-8">
          <Link
            href="/"
            className="flex flex-col shrink-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="font-display text-lg sm:text-[22px] leading-none font-medium tracking-[0.06em] text-chalk">
              Mehmet Akdeniz
            </span>
            <span className="mt-1 text-[9px] sm:text-[10px] tracking-[0.22em] text-chalk/60 uppercase">
              runeyard.net
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex flex-wrap items-center gap-0.5">
            {t.nav.map((item) => {
              const isActive =
                pathname === item.href ||
                (!item.href.startsWith("/#") && pathname?.startsWith(`${item.href}/`));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-2.5 py-1.5 text-[12px] tracking-[0.12em] uppercase transition-colors ${
                    isActive
                      ? "text-amber font-medium border-b border-amber/60"
                      : "text-chalk/70 hover:text-chalk"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls (Search, Comfort Tools, Language, Mobile Hamburger) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <RoomSearch />

            <div className="hidden md:flex items-center gap-2">
              <HearthAmbienceButton />
              <CandlelightToggle />
              <SavedSealsDrawer />
            </div>

            <div
              className="flex items-center gap-1 border border-chalk/15 bg-black/30 px-1.5 py-1"
              role="group"
              aria-label={languageLabel[lang]}
            >
              {languages.map((code) => (
                <button
                  key={code}
                  type="button"
                  aria-pressed={lang === code}
                  onClick={() => choose(code)}
                  className={`px-1 text-[10px] tracking-[0.12em] uppercase ${
                    lang === code
                      ? "font-semibold text-amber"
                      : "text-chalk/45 hover:text-chalk"
                  }`}
                >
                  {languageLabel[code]}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="Menü"
              className="xl:hidden flex h-9 items-center gap-1.5 border border-chalk/25 bg-black/40 px-2.5 text-[11px] tracking-[0.14em] text-chalk uppercase hover:border-amber/60"
            >
              <span aria-hidden className="text-sm leading-none">
                {mobileMenuOpen ? "✕" : "☰"}
              </span>
              <span className="hidden xs:inline">
                {lang === "en" ? "Menu" : lang === "sv" ? "Meny" : "Menü"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Quick-Jump Horizontal Pill Bar (Always accessible in 1 tap on phones) */}
        <div className="xl:hidden flex items-center gap-1.5 overflow-x-auto border-t border-chalk/10 bg-black/35 px-4 py-2 no-scrollbar">
          {t.nav.map((item) => {
            const isActive =
              pathname === item.href ||
              (!item.href.startsWith("/#") && pathname?.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`shrink-0 rounded-full border px-3 py-1 text-[11px] tracking-[0.12em] uppercase transition-colors ${
                  isActive
                    ? "border-amber bg-amber/15 text-amber font-medium"
                    : "border-chalk/15 bg-ink/80 text-chalk/75 hover:border-chalk/40 hover:text-chalk"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Expandable Mobile Drawer for Full Navigation & Reading Comfort Tools */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-chalk/20 bg-ink/98 px-4 py-5 shadow-2xl">
            <div className="mx-auto max-w-lg space-y-5">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-amber/80 uppercase">
                  {lang === "en"
                    ? "Halls & Archives"
                    : lang === "sv"
                      ? "Hallar & Arkiv"
                      : "Salonlar & Külliyat"}
                </p>
                <div className="mt-2.5 grid grid-cols-2 gap-2">
                  {t.nav.map((item) => {
                    const isActive =
                      pathname === item.href ||
                      (!item.href.startsWith("/#") && pathname?.startsWith(`${item.href}/`));
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between border px-3.5 py-2.5 text-xs tracking-[0.12em] uppercase ${
                          isActive
                            ? "border-amber bg-amber/15 text-amber font-medium"
                            : "border-chalk/15 bg-black/40 text-chalk/85 hover:border-chalk/40"
                        }`}
                      >
                        <span>{item.label}</span>
                        <span aria-hidden className="text-chalk/40">
                          →
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-chalk/15 pt-4">
                <p className="mb-2.5 text-[10px] tracking-[0.2em] text-chalk/55 uppercase">
                  {lang === "en"
                    ? "Reading Atmosphere & Saved Seals"
                    : lang === "sv"
                      ? "Läsatmosfär & Sparade Sigill"
                      : "Okuma Atmosferi & Kayıtlı Mühürler"}
                </p>
                <div className="flex flex-wrap items-center gap-2.5">
                  <HearthAmbienceButton />
                  <CandlelightToggle />
                  <SavedSealsDrawer />
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {children}

      <footer className="wet-ink border-t border-chalk/10 px-4 py-6 text-center sm:px-8">
        <div className="mx-auto max-w-4xl space-y-2">
          <p className="text-[10px] tracking-[0.1em] text-chalk/60">
            Mehmet Akdeniz · runeyard.net ·{" "}
            <a
              href="https://instagram.com/runeyard_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-chalk"
            >
              runeyard_
            </a>{" "}
            ·{" "}
            <a
              href="https://wa.me/905455642164"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-chalk"
            >
              WhatsApp
            </a>{" "}
            ·{" "}
            <a href="mailto:runeyard@gmail.com" className="hover:text-chalk">
              runeyard@gmail.com
            </a>
          </p>
          <p className="text-[10px] leading-4 tracking-[0.04em] text-chalk/45">
            {lang === "en"
              ? "Legal & Cultural Notice: All content on RuneYard is presented strictly within the scope of cultural history, mythology, folklore, ethnobotany, and symbolic studies; it does not constitute medical diagnosis or treatment, psychological, legal, or financial advice, nor any guarantee of future events."
              : lang === "sv"
                ? "Juridisk & Kulturell Notis: Allt innehåll på RuneYard presenteras uteslutande inom ramen för kulturhistoria, mytologi, folklore, etnobotanik och symbolstudier; det utgör inte medicinsk diagnos eller behandling, psykologisk, juridisk eller finansiell rådgivning och inte heller några löften om framtida händelser."
                : "Yasal ve Kültürel Beyan: RuneYard’da yer alan tüm metin, sembol ve araçlar kültür tarihi, mitoloji, folklor (halkbilimi), etnobotanik ve arketipsel sembol dili araştırması kapsamındadır; tıbbi teşhis veya tedavi (1219 S.K.), psikolojik, hukuki ya da finansal danışmanlık veya kesin gelecek vaadi niteliği taşımaz."}
          </p>
        </div>
      </footer>
    </div>
  );
}
