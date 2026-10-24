"use client";

import Link from "next/link";
import { languageLabel, languages } from "@/lib/copy";
import { HearthAmbienceButton } from "@/components/hearth-ambience";
import { useLanguage } from "@/components/language";
import { CandlelightToggle, ReadingProgressBar } from "@/components/reading-comfort";
import { RoomSearch } from "@/components/room-search";
import { SavedSealsDrawer } from "@/components/saved-seals";

export function HallShell({ children }: { children: React.ReactNode }) {
  const { lang, choose, t } = useLanguage();

  return (
    <div className="wet-slate min-h-full text-chalk">
      <ReadingProgressBar />
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-chalk"
      >
        {t.skip}
      </a>
      <header className="wet-ink bronze-hairline px-6 py-3.5 sm:px-8">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <Link href="/" className="flex flex-col">
            <span className="font-display text-[22px] leading-none font-medium tracking-[0.06em] text-chalk">
              Mehmet Akdeniz
            </span>
            <span className="mt-1 text-[10px] tracking-[0.22em] text-chalk/60 uppercase">
              runeyard.net
            </span>
          </Link>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <RoomSearch />
            <HearthAmbienceButton />
            <CandlelightToggle />
            <SavedSealsDrawer />
            <div className="flex items-center gap-2" role="group" aria-label={languageLabel[lang]}>
              {languages.map((code) => (
                <button
                  key={code}
                  type="button"
                  aria-pressed={lang === code}
                  onClick={() => choose(code)}
                  className={`text-[11px] tracking-[0.14em] uppercase ${
                    lang === code ? "text-chalk" : "text-chalk/45 hover:text-chalk"
                  }`}
                >
                  {languageLabel[code]}
                </button>
              ))}
            </div>
            <nav className="flex flex-wrap items-center gap-1">
              {t.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-2.5 py-1.5 text-[13px] tracking-[0.12em] text-chalk/70 uppercase hover:text-chalk"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
      {children}
      <footer className="wet-ink border-t border-chalk/10 px-6 py-5 text-center sm:px-8">
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
