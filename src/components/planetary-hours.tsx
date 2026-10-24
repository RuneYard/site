"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { useLanguage } from "@/components/language";
import { planets, readSky, type Planet } from "@/lib/sky";

type PlanetLore = {
  key: Planet;
  glyph: string;
  chaldeanRank: number;
  babylonian: string;
  name: { tr: string; en: string; sv: string };
  domain: { tr: string; en: string; sv: string };
  counsel: { tr: string; en: string; sv: string };
};

const PLANET_LORE: Record<Planet, PlanetLore> = {
  saturn: {
    key: "saturn",
    glyph: "♄",
    chaldeanRank: 1,
    babylonian: "Ninurta · Kayvan",
    name: { tr: "Satürn (Zühal)", en: "Saturn", sv: "Saturnus" },
    domain: {
      tr: "Sınır, Sabır, Toprak, Mimari & Uzun Vadeli Taahhüt",
      en: "Boundary, Patience, Land, Architecture & Long-Term Structure",
      sv: "Gräns, Tålamod, Jord, Arkitektur & Långsiktig Struktur",
    },
    counsel: {
      tr: "Satürn saatinde aceleci başlangıçlardan kaçınılır; yarım kalmış ağır işleri bitirmek, sınır çizmek, disiplin kurmak, eski yükleri temizlemek ve derin tefekkür için en sağlam saattir.",
      en: "Avoid hasty beginnings in Saturn's hour; it is the strongest hour for finishing heavy tasks, setting firm boundaries, clearing old debts, and disciplined study.",
      sv: "Undvik förhastade starter under Saturnus timme; den är starkast för att avsluta tungt arbete, sätta gränser och bygga långsiktig disciplin.",
    },
  },
  jupiter: {
    key: "jupiter",
    glyph: "♃",
    chaldeanRank: 2,
    babylonian: "Marduk · Mulbabbar",
    name: { tr: "Jüpiter (Müşteri)", en: "Jupiter", sv: "Jupiter" },
    domain: {
      tr: "Bereket, Hukuk, Akademi, Cömertlik & Genişleme",
      en: "Abundance, Law, Academy, Generosity & Expansion",
      sv: "Överflöd, Lag, Akademi, Generositet & Utvidgning",
    },
    counsel: {
      tr: "Klasik geleneğin ‘Büyük İyicil’ saatidir: Eğitim başvurusu, finansal anlaşma, hayır işi, önemli görüşmeler ve bereket niyetleri için günün en açık kapısıdır.",
      en: "The hour of the Greater Benefic: ideal for educational enrollment, financial agreements, counsel with mentors, and intentions of growth and prosperity.",
      sv: "Den stora välgörarens timme: utmärkt för studier, ekonomiska avtal, rådgivning och intentioner för växt och välgång.",
    },
  },
  mars: {
    key: "mars",
    glyph: "♂",
    chaldeanRank: 3,
    babylonian: "Nergal · Salbatanu",
    name: { tr: "Mars (Merih)", en: "Mars", sv: "Mars" },
    domain: {
      tr: "Cesaret, Kesip Atma, Bedensel Efor & Savunma",
      en: "Courage, Severing, Physical Effort & Defense",
      sv: "Mod, Avskiljande, Fysisk Kraft & Försvar",
    },
    counsel: {
      tr: "Uzlaşma veya hassas ilişki konuşmaları için uygun değildir; ancak korkulan bir işe neşter vurmak, spor/bedensel antrenman ve kangren olmuş bağları kesmek için yakıcı güç verir.",
      en: "Unsuitable for delicate peace talks, yet unmatched for surgical action, physical training, confronting fear, and severing stagnant ties.",
      sv: "Olämplig för känsliga förhandlingar, men oöverträffad för beslutsam handling, fysisk träning och att skära bort stagnation.",
    },
  },
  sun: {
    key: "sun",
    glyph: "☉",
    chaldeanRank: 4,
    babylonian: "Utu · Šamaš",
    name: { tr: "Güneş (Şems)", en: "Sun", sv: "Solen" },
    domain: {
      tr: "Merkez İrade, Otorite, Görünürlük & Hakikat",
      en: "Sovereign Will, Authority, Visibility & Truth",
      sv: "Suverän Vilja, Auktoritet, Synlighet & Sanning",
    },
    counsel: {
      tr: "Sahneye çıkmak, yönetici ve otorite figürleriyle görüşmek, bir eseri veya projeyi kamuya duyurmak ve yaşam enerjisini tazelemek için altın saattir.",
      en: "The golden hour for stepping into visibility, speaking with authority figures, launching a public work, and renewing vital confidence.",
      sv: "Den gyllene timmen för att träda fram, tala med auktoriteter, lansera ett verk och förnya livskraften.",
    },
  },
  venus: {
    key: "venus",
    glyph: "♀",
    chaldeanRank: 5,
    babylonian: "Inanna · Ištar",
    name: { tr: "Venüs (Zühre)", en: "Venus", sv: "Venus" },
    domain: {
      tr: "Uyum, Aşk, Estetik, Sanat & Barışma",
      en: "Harmony, Love, Aesthetics, Art & Reconciliation",
      sv: "Harmoni, Kärlek, Estetik, Konst & Försoning",
    },
    counsel: {
      tr: "Kırgınlıkları onarmak, sanatsal üretim yapmak, ilişki ve ortaklık konuşmak, dinlenmek ve bedene özen göstermek için en zarif saattir.",
      en: "The most gracious hour for mending rifts, artistic creation, relationship dialogue, rest, and tending to beauty and the body.",
      sv: "Den mest gynnsamma timmen för försoning, konstnärligt skapande, relationssamtal och vila.",
    },
  },
  mercury: {
    key: "mercury",
    glyph: "☿",
    chaldeanRank: 6,
    babylonian: "Nabû · الكتاب",
    name: { tr: "Merkür (Utarit)", en: "Mercury", sv: "Merkurius" },
    domain: {
      tr: "Yazı, Sözleşme, Ticaret, Analiz & Çeviri",
      en: "Writing, Contracts, Commerce, Analysis & Translation",
      sv: "Skrift, Avtal, Handel, Analys & Översättning",
    },
    counsel: {
      tr: "Metin yazmak, ders çalışmak, hesap kitap yapmak, yazılım/kod üretmek, mesaj göndermek ve kısa yolculuklara çıkmak için zihnin en kıvrak olduğu saattir.",
      en: "The sharpest hour of the mind for writing, studying, accounting, coding, sending dispatches, and short journeys.",
      sv: "Sinnets skarpaste timme för att skriva, studera, räkna, skicka meddelanden och korta resor.",
    },
  },
  moon: {
    key: "moon",
    glyph: "☽",
    chaldeanRank: 7,
    babylonian: "Nanna · Sîn",
    name: { tr: "Ay (Kamer)", en: "Moon", sv: "Månen" },
    domain: {
      tr: "Sezgi, Rüya, Hane, Beslenme & Değişken Akış",
      en: "Intuition, Dream, Hearth, Nourishment & Flux",
      sv: "Intuition, Dröm, Härd, Näring & Flöde",
    },
    counsel: {
      tr: "Kalıcı ve katı yeminler yerine akışkan işler, rüya/rün okuması, ev ve aile meseleleri, su kenarı tefekkürü ve sezgisel dinleme için en derin saattir.",
      en: "Best suited for fluid matters rather than rigid vows: oracle and dream work, home and family care, and intuitive listening.",
      sv: "Bäst lämpad för följsamma ärenden snarare än stela eder: dröm- och runarbete, hemmet och intuitivt lyssnande.",
    },
  },
};

const UI = {
  tr: {
    badge: "Babil & Keldani Dizilimi (♄ · ♃ · ♂ · ☉ · ♀ · ☿ · ☽)",
    title: "Canlı Keldani Gezegen Saati Pusulası",
    lead: "Mezopotamya zigguratlarından Helenistik astrolojiye miras kalan Keldani Sırası, gündüzü (gün doğumundan gün batımına) ve geceyi 12’şer eşit gezegen saatine böler. Şu an İstanbul ufkunda aktif olan gezegen saatini aşağıda görebilir veya diğer 6 küreyi inceleyebilirsin.",
    activeNowBadge: "ŞU AN AKTİF GEZEGEN SAATİ",
    inspectPrompt: "Keldani Sırasındaki 7 Gezegen Küresi (İncelemek için tıkla):",
    babylonianLabel: "Mezopotamya Kökeni:",
    domainLabel: "Yönettiği Alan:",
    moonYardBridge: "Moon Yard Uygulamasıyla Takip Et →",
  },
  en: {
    badge: "Babylonian & Chaldean Order (♄ · ♃ · ♂ · ☉ · ♀ · ☿ · ☽)",
    title: "Live Chaldean Planetary Hour Compass",
    lead: "Inherited from Mesopotamian ziggurats into classical astrology, the Chaldean Order divides daylight (sunrise to sunset) and night into twelve planetary hours each. Below is the currently active planetary hour alongside all seven spheres.",
    activeNowBadge: "CURRENTLY ACTIVE PLANETARY HOUR",
    inspectPrompt: "The 7 Spheres in Chaldean Order (Click to inspect):",
    babylonianLabel: "Mesopotamian Root:",
    domainLabel: "Domain of Rule:",
    moonYardBridge: "Track Daily in Moon Yard App →",
  },
  sv: {
    badge: "Babylonisk & Kaldeisk Ordning (♄ · ♃ · ♂ · ☉ · ♀ · ☿ · ☽)",
    title: "Levande Kaldeisk Planettimmekompass",
    lead: "Ärvd från Mesopotamiens ziggurater delar den kaldeiska ordningen dagen (soluppgång till solnedgång) och natten i tolv planettimmar vardera. Nedan visas den nu aktiva planettimmen samt alla sju sfärer.",
    activeNowBadge: "NU AKTIV PLANETTIMME",
    inspectPrompt: "De 7 Sfärerna i Kaldeisk Ordning (Klicka för att läsa):",
    babylonianLabel: "Mesopotamiskt Ursprung:",
    domainLabel: "Styr över:",
    moonYardBridge: "Följ Dagligen i Moon Yard-appen →",
  },
} as const;

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 30000);
  return () => clearInterval(id);
}

function minuteBucket() {
  return Math.floor(Date.now() / 30000);
}

export function PlanetaryHoursCompass() {
  const { lang } = useLanguage();
  const ui = UI[lang];
  const bucket = useSyncExternalStore(subscribe, minuteBucket, minuteBucket);
  const sky = readSky(new Date(bucket * 30000));
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);

  const activePlanet = selectedPlanet ?? sky.hour;
  const lore = PLANET_LORE[activePlanet];
  const isLive = activePlanet === sky.hour;

  return (
    <section className="mt-10 border border-chalk/20 bg-chalk/[0.025] p-6 sm:p-8" suppressHydrationWarning>
      <p className="text-[10px] tracking-[0.22em] text-chalk/55 uppercase">
        {ui.badge}
      </p>
      <h2 className="mt-3 font-display text-2xl font-medium tracking-[-0.015em] text-chalk sm:text-3xl">
        {ui.title}
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-chalk/75">
        {ui.lead}
      </p>

      <p className="mt-6 text-[10px] tracking-[0.18em] text-chalk/55 uppercase">
        {ui.inspectPrompt}
      </p>
      <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
        {planets.map((pKey) => {
          const item = PLANET_LORE[pKey];
          const isCurrentHour = pKey === sky.hour;
          const isSelected = pKey === activePlanet;
          return (
            <button
              key={pKey}
              type="button"
              onClick={() => setSelectedPlanet(pKey)}
              className={`flex flex-col items-center justify-center border px-3 py-3 text-center transition-colors ${
                isSelected
                  ? "border-chalk/75 bg-chalk/[0.1] text-chalk"
                  : "border-chalk/15 bg-black/35 text-chalk/70 hover:border-chalk/40 hover:text-chalk"
              }`}
            >
              <span className="font-display text-3xl leading-none">
                {item.glyph}
              </span>
              <span className="mt-1.5 font-display text-sm font-medium">
                {item.name[lang].split(" ")[0]}
              </span>
              {isCurrentHour && (
                <span className="mt-1 border border-chalk/35 px-1.5 py-0.5 text-[8px] tracking-[0.16em] text-chalk uppercase">
                  ● LIVE
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active / Selected Planet Card */}
      <article className="card-slate mt-6 border border-chalk/20 bg-black/45 p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] tracking-[0.18em] text-chalk/60 uppercase">
          <span>
            {ui.babylonianLabel} {lore.babylonian}
          </span>
          {isLive && (
            <span className="border border-chalk/35 bg-chalk/[0.08] px-2.5 py-0.5 text-chalk">
              ● {ui.activeNowBadge}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center gap-4">
          <span
            aria-hidden
            className="font-display text-5xl leading-none text-chalk"
          >
            {lore.glyph}
          </span>
          <div>
            <h3 className="font-display text-3xl font-medium text-chalk">
              {lore.name[lang]}
            </h3>
            <p className="mt-0.5 text-xs tracking-[0.1em] text-chalk/70 uppercase">
              {ui.domainLabel} {lore.domain[lang]}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-chalk/85 sm:text-base">
          {lore.counsel[lang]}
        </p>

        <div className="mt-5 border-t border-chalk/12 pt-4">
          <Link
            href="/uygulamalar/moon-yard"
            className="font-display text-xs tracking-[0.16em] text-chalk/80 uppercase hover:text-chalk hover:underline"
          >
            {ui.moonYardBridge}
          </Link>
        </div>
      </article>
    </section>
  );
}
