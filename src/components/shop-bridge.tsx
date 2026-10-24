"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/language";
import { shopProducts, type ShopProduct } from "@/content/shop";

export type BridgeContext =
  | "witchcraft"
  | "astrology"
  | "runes"
  | "saman"
  | "kelt"
  | "mezopotamya";

const CONTEXT_SLUGS: Record<BridgeContext, string[]> = {
  witchcraft: [
    "yesil-ahit-ekitap",
    "sacred-shield-oil",
    "black-salt",
  ],
  astrology: [
    "dogum-haritasi-ve-ongoru-danismanligi",
    "dogum-haritasi-astroloji-danismanligi",
    "bir-yillik-ongoru-danismanligi",
  ],
  runes: [
    "sacred-shield-oil",
    "golden-divine-oil",
    "tarot-danismanligi",
  ],
  saman: [
    "forest-treasure-salt",
    "astral-harmony-oil",
    "sacred-shield-oil",
  ],
  kelt: [
    "yesil-ahit-ekitap",
    "forest-treasure-salt",
    "elemental-magic-salt",
  ],
  mezopotamya: [
    "ras-eternal-light-elixir",
    "silver-moon-elixir",
    "dogum-haritasi-astroloji-danismanligi",
  ],
};

const BRIDGE_COPY = {
  tr: {
    badge: "RUNEYARD ATÖLYE & DANIŞMANLIK · SHOPIER",
    headings: {
      witchcraft: "Bu Odadaki Bitki ve Ocak Çalışmaları İçin Atölye Eserleri",
      astrology: "Kişisel Harita Analizi, Rektifikasyon ve Öngörü Danışmanlıkları",
      runes: "Rün ve İrade Çalışmalarını Destekleyen Atölye Eserleri",
      saman: "Topraklama, Alan Koruması ve Astral Denge Eserleri",
      kelt: "Yeşil Ahit e-Kitap, Orman ve Dört Element Tuzları",
      mezopotamya: "Güneş-Ay İksirleri ve Klasik Gökyüzü Danışmanlığı",
    },
    inspect: "İncele",
    buy: "Shopier ile Satın Al →",
    allShop: "Tüm Shopier Mağazasını Gör (19 Eser) →",
  },
  en: {
    badge: "RUNEYARD WORKSHOP & CONSULTATIONS · SHOPIER",
    headings: {
      witchcraft: "Workshop Creations for Herbal & Hearth Practice",
      astrology: "Personal Natal Chart, Rectification & Forecast Consultations",
      runes: "Workshop Oils & Readings for Runic Practice",
      saman: "Grounding, Shielding & Astral Balance Creations",
      kelt: "The Green Covenant e-Book, Forest & Elemental Salts",
      mezopotamya: "Solar-Lunar Elixirs & Classical Sky Consultations",
    },
    inspect: "Details",
    buy: "Buy via Shopier →",
    allShop: "View Full Shopier Store (19 Works) →",
  },
  sv: {
    badge: "RUNEYARD ATELJÉ & KONSULTATIONER · SHOPIER",
    headings: {
      witchcraft: "Ateljéverk för Ört- och Härdarbete",
      astrology: "Personligt Horoskop, Rektifikation & Prognoskonsultationer",
      runes: "Ateljéoljor & Läsningar för Runarbete",
      saman: "Jordning, Skydd & Astral Balans",
      kelt: "Det Gröna Förbundets e-bok, Skogs- & Elementsalter",
      mezopotamya: "Sol- & Månelixir samt Astrologisk Konsultation",
    },
    inspect: "Detaljer",
    buy: "Köp via Shopier →",
    allShop: "Visa Hela Butiken (19 Verk) →",
  },
} as const;

export function ShopBridge({ context }: { context: BridgeContext }) {
  const { lang } = useLanguage();
  const ui = BRIDGE_COPY[lang];
  const slugs = CONTEXT_SLUGS[context];
  const items = slugs
    .map((s) => shopProducts.find((p) => p.slug === s))
    .filter((p): p is ShopProduct => Boolean(p));

  return (
    <section
      aria-label={ui.headings[context]}
      className="mt-12 border border-amber/35 bg-soot/60 p-5 sm:p-7"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-[10px] font-semibold tracking-[0.22em] text-amber uppercase">
          ⚱ {ui.badge}
        </span>
        <Link
          href="/shop"
          className="text-xs font-medium tracking-[0.16em] text-amber uppercase hover:underline"
        >
          {ui.allShop}
        </Link>
      </div>

      <h2 className="mt-2 font-display text-2xl text-chalk sm:text-3xl">
        {ui.headings[context]}
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map((product) => (
          <article
            key={product.slug}
            className="flex flex-col justify-between border border-chalk/12 bg-ink/75 p-4 transition hover:border-amber/50"
          >
            <div>
              <Link
                href={`/shop/${product.slug}`}
                className="relative block aspect-[4/3] w-full overflow-hidden border border-chalk/10 bg-ink"
              >
                <Image
                  src={product.image}
                  alt={product.title[lang]}
                  fill
                  sizes="(max-width: 640px) 100vw, 280px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </Link>
              <div className="mt-3 flex items-baseline justify-between gap-2">
                <span className="text-[10px] tracking-[0.18em] text-amber uppercase">
                  {product.volume[lang]}
                </span>
                <span className="font-display text-lg text-chalk">
                  {product.price}
                </span>
              </div>
              <h3 className="mt-1 font-display text-lg text-chalk">
                <Link
                  href={`/shop/${product.slug}`}
                  className="hover:text-amber transition-colors"
                >
                  {product.title[lang]}
                </Link>
              </h3>
              <p className="mt-1 text-xs leading-5 text-chalk/70 line-clamp-2">
                {product.summary[lang]}
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 pt-3 border-t border-chalk/10">
              <Link
                href={`/shop/${product.slug}`}
                className="flex items-center justify-center border border-chalk/20 bg-soot/60 px-2.5 py-2 text-[10px] uppercase tracking-[0.16em] text-chalk/85 hover:border-amber/60 hover:text-amber transition text-center"
              >
                {ui.inspect}
              </Link>
              <a
                href={product.shopierUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-[#e5be73] bg-[#d4a857] px-2.5 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#141a1c] hover:bg-[#e5be73] transition text-center"
              >
                {ui.buy}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const SCHOLAR_SOURCES: Record<
  BridgeContext,
  Record<"tr" | "en" | "sv", { title: string; body: string }>
> = {
  runes: {
    tr: {
      title: "Filolojik ve Arkeolojik Birincil Kaynak Disiplini",
      body: "Bu odadaki içerikler popüler New Age uydurmalarına değil; Gotland Kylver Taşı (MS ~400), Vadstena ve Grumpan brakteatları, Poetik Edda (Hávamál & Sigrdrífumál) ve Eski İskandinav/Anglo-Sakson Rün Şiirlerine dayanır.",
    },
    en: {
      title: "Philological & Archaeological Primary-Source Discipline",
      body: "This room is grounded in primary epigraphic and manuscript witnesses—the Kylver Stone of Gotland (c. 400 CE), the Vadstena and Grumpan bracteates, the Poetic Edda (Hávamál & Sigrdrífumál), and the Old Norse/Old English Rune Poems.",
    },
    sv: {
      title: "Filologisk & Arkeologisk Källdisciplin",
      body: "Detta rum vilar på primära epigrafiska och handskriftsmässiga källor—Kylverstenen på Gotland, Vadstena- och Grumpanbrakteaterna, Den poetiska Eddan samt de fornnordiska rundikterna.",
    },
  },
  astrology: {
    tr: {
      title: "Klasik Gökyüzü ve Helenistik-Pers Kaynak Metodolojisi",
      body: "Bu odadaki harita okuma ilkeleri modern gazete burçlarına değil; Klaudios Batlamyus (Tetrabiblos), Sidonlu Dorotheus (Carmen Astrologicum), Vettius Valens (Anthologiae) ve Ebu Ma’şer el-Belhî’nin klasik asalet, sekt ve ev doktrinine dayanır.",
    },
    en: {
      title: "Classical Hellenistic & Persian Astrological Methodology",
      body: "Chart interpretation here follows Claudius Ptolemy (Tetrabiblos), Dorotheus of Sidon (Carmen Astrologicum), Vettius Valens (Anthologies), and Abu Ma'shar—honoring sect, essential dignity, and whole-sign/classical house doctrine.",
    },
    sv: {
      title: "Klassisk Hellenistisk & Persisk Astrologisk Metod",
      body: "Karttolkningen följer Klaudios Ptolemaios (Tetrabiblos), Dorotheus från Sidon, Vettius Valens och Abu Ma'shar—med sekt, essentiella värdigheter och klassisk huslära.",
    },
  },
  saman: {
    tr: {
      title: "Altay-Sibirya Kamlığı ve Kuzey Seidr Etnografik Kaynakçası",
      body: "Bu odadaki kozmoloji Wilhelm Radloff, Uno Harva, Mircea Eliade ve Abdülkadir İnan’ın saha kayıtları ile İskandinav Eiríks saga rauða (Völva/Seidr) birincil metinlerine dayanır.",
    },
    en: {
      title: "Altai-Siberian Kam & Norse Seidr Ethnographic Sources",
      body: "This room draws upon primary ethnographic records of Altai-Siberian shamanism (Radloff, Harva, Eliade, İnan) alongside the Old Norse saga accounts of Seidr (Eiríks saga rauða & Völuspá).",
    },
    sv: {
      title: "Altaj-Sibirisk Schamanism & Fornnordisk Sejd",
      body: "Detta rum bygger på etnografiska primärkällor om altajsk-sibirisk schamanism samt de isländska sagornas skildringar av sejd och völvor.",
    },
  },
  kelt: {
    tr: {
      title: "Erken İrlanda-Galler El Yazmaları ve Ogham Epigrafisi",
      body: "Bu odadaki ağaç ve mevsim bilgisi 20. yüzyıl kurgularına değil; Ballymote Kitabı (Auraicept na n-Éces), Lebor Gabála Érenn, Cath Maige Tuired ve İrlanda-İskoç dikili Ogham taş yazıtlarına dayanır.",
    },
    en: {
      title: "Early Irish-Welsh Manuscripts & Ogham Epigraphy",
      body: "Tree and seasonal lore in this room is drawn from the Book of Ballymote (Auraicept na n-Éces), Lebor Gabála Érenn, Cath Maige Tuired, and inscribed Ogham pillar stones across Ireland and Scotland.",
    },
    sv: {
      title: "Tidigirländska Handskrifter & Ogham-epigrafik",
      body: "Träd- och årstidsläran i detta rum hämtas ur Book of Ballymote (Auraicept na n-Éces), Lebor Gabála Érenn samt irländska och skotska Oghamstenar.",
    },
  },
  mezopotamya: {
    tr: {
      title: "Asurbanipal Kütüphanesi Çivi Yazılı Tablet Kaynakçası",
      body: "Bu odadaki yıldız, zaman ve arınma bilgisi Ninova çivi yazılı kil tabletlerine — MUL.APIN astronomi serisi, Enûma Anu Enlil, Enûma Eliş, İnanna’nın İnişi ve Šurpu/Maqlû serilerine — dayanır.",
    },
    en: {
      title: "Cuneiform Tablet Corpus of Nineveh & Babylon",
      body: "Star lore and ritual structure here rest directly on the cuneiform tablets of the Library of Ashurbanipal—MUL.APIN, Enûma Anu Enlil, Enûma Eliš, the Descent of Inanna, and the Šurpu/Maqlû series.",
    },
    sv: {
      title: "Kilskriftstavlor från Nineve och Babylon",
      body: "Stjärnläran i detta rum bygger direkt på kilskriftstavlorna från Assurbanipals bibliotek—MUL.APIN, Enûma Anu Enlil, Enûma Eliš och Inannas nedstigning.",
    },
  },
  witchcraft: {
    tr: {
      title: "Geleneksel Ocak Bilgisi ve Etnobotanik Kaynak Disiplini",
      body: "Bu odadaki çalışmalar modern popüler Wicca kurgularından bağımsızdır; Dioskorides (De Materia Medica), Anadolu-Akdeniz ve Kuzey Avrupa kırsal ocak folkloru ile biyo-bölgesel etnobotanik geleneğine dayanır.",
    },
    en: {
      title: "Traditional Hearth Lore & Ethnobotanical Discipline",
      body: "Independent of modern pop-Wiccan inventions, this room draws on Dioscorides (De Materia Medica), traditional Anatolian-Mediterranean and Northern European hearth folklore, and bioregional ethnobotany.",
    },
    sv: {
      title: "Traditionell Härdkunskap & Etnobotanisk Disciplin",
      body: "Oberoende av moderna nyandliga påfund bygger detta rum på Dioskorides (De Materia Medica), äldre nordisk och mediterran folktro samt bioregional örtkunskap.",
    },
  },
};

export function ScholarSeal({ context }: { context: BridgeContext }) {
  const { lang } = useLanguage();
  const s = SCHOLAR_SOURCES[context][lang];

  return (
    <div className="mt-8 border border-chalk/14 bg-ink/65 px-5 py-4">
      <p className="text-[10px] font-semibold tracking-[0.22em] text-amber uppercase">
        📜 {s.title}
      </p>
      <p className="mt-1.5 text-xs leading-6 text-chalk/72">{s.body}</p>
    </div>
  );
}

type IntentionId = "shield" | "love" | "moon" | "sun" | "destiny";

const INTENTIONS: {
  id: IntentionId;
  glyph: string;
  label: Record<"tr" | "en" | "sv", string>;
  roomHref: string;
  roomLabel: Record<"tr" | "en" | "sv", string>;
  runeHref: string;
  runeLabel: string;
  productSlugs: string[];
  advice: Record<"tr" | "en" | "sv", string>;
}[] = [
  {
    id: "shield",
    glyph: "ᛉ",
    label: {
      tr: "Koruma, Sınır & Negatif Enerji Kalkanı",
      en: "Protection, Boundaries & Energy Shielding",
      sv: "Skydd, Gränser & Energisköld",
    },
    roomHref: "/witchcraft/samhain-esik-ve-ata-ocagi",
    roomLabel: {
      tr: "XXI · Samhain Eşik Mührü & Tuz-Demir Sınırı Odası",
      en: "XXI · Samhain Threshold Warding Room",
      sv: "XXI · Samhain Tröskelskyddsrum",
    },
    runeHref: "/runler/algiz",
    runeLabel: "ᛉ Algiz (Elhaz)",
    productSlugs: ["black-salt", "sacred-shield-oil", "elemental-magic-salt"],
    advice: {
      tr: "Haneni ve enerji alanını ağır dış etkilerden arındırmak için önce kapı eşiğinde Black Salt ile sınır çiz, bilek ve ense kökünde Sacred Shield Oil ile kalkanını mühürle ve Algiz rününün uyanık sınır bilincini oku.",
      en: "To clear heavy external influences and seal your space, lay a boundary with Black Salt at your threshold, anoint your pulse points with Sacred Shield Oil, and study the vigilant boundary law of Algiz.",
      sv: "För att rena ditt utrymme och sätta en tydlig gräns, använd Black Salt vid tröskeln, bär Sacred Shield Oil och fördjupa dig i runan Algiz.",
    },
  },
  {
    id: "love",
    glyph: "ᚷ",
    label: {
      tr: "Sevgi, İlişki Uyumu & Öz-Şefkat",
      en: "Love, Relational Harmony & Self-Compassion",
      sv: "Kärlek, Relationsharmoni & Självmedkänsla",
    },
    roomHref: "/astroloji/sinastri-ve-iliski-uyumu",
    roomLabel: {
      tr: "XVIII · Sinastri ve İlişki Uyumu Odası",
      en: "XVIII · Synastry & Relational Harmony Room",
      sv: "XVIII · Synastri & Relationsharmoni",
    },
    runeHref: "/runler/gebo",
    runeLabel: "ᚷ Gebo (Denk Takas)",
    productSlugs: [
      "velvet-love-oil",
      "aphrodites-charm-salt",
      "iliski-ve-sinastri-danismanligi",
    ],
    advice: {
      tr: "Kalp merkezini yumuşatmak, öz-değerini yükseltmek ve ilişkideki alma-verme dengesini (Gebo) kurmak için Velvet Love Oil ve Aphrodite's Charm Tuzu ile çalışabilir; iki haritanın gerçek uyumunu görmek için Sinastri Danışmanlığı alabilirsin.",
      en: "To soften the heart center, elevate self-worth, and honor balanced reciprocity (Gebo), work with Velvet Love Oil and Aphrodite's Charm Salt, or commission a full Synastry Chart Consultation.",
      sv: "För att stärka självkärlek och ömsesidig balans (Gebo), arbeta med Velvet Love Oil, Aphrodite's Charm Salt eller en fullständig Synastrikonsultation.",
    },
  },
  {
    id: "moon",
    glyph: "ᛚ",
    label: {
      tr: "Sezgi, Rüya Görüsü & Ruhsal Huzur",
      en: "Intuition, Dream Vision & Deep Calm",
      sv: "Intuition, Drömsyn & Inre Ro",
    },
    roomHref: "/witchcraft/pelin-ve-ruya-otlari",
    roomLabel: {
      tr: "IV · Pelin (Artemisia) ve Eşik Otları Odası",
      en: "IV · Mugwort (Artemisia) & Dream Herbs Room",
      sv: "IV · Gråbo (Artemisia) & Drömörter",
    },
    runeHref: "/runler/laguz",
    runeLabel: "ᛚ Laguz (Derin Su)",
    productSlugs: [
      "silver-moon-elixir",
      "astral-harmony-oil",
      "relaxation-elixir",
    ],
    advice: {
      tr: "Zihinsel gürültüyü susturup rüya hafızasını ve duru sezgiyi (Laguz) açmak için gece çalışmalarından önce Silver Moon İksiri veya Astral Harmony Yağı ile alanı kodla.",
      en: "To quiet mental noise and awaken dream recall and deep intuition (Laguz), prepare your evening space with Silver Moon Elixir or Astral Harmony Oil.",
      sv: "För att stilla tankebruset och öppna drömminnet (Laguz), förbered kvällens rum med Silver Moon Elixir eller Astral Harmony Oil.",
    },
  },
  {
    id: "sun",
    glyph: "ᛊ",
    label: {
      tr: "İrade, Bereket & Güneş Işığı",
      en: "Willpower, Abundance & Solar Vitality",
      sv: "Viljekraft, Överflöd & Solkraft",
    },
    roomHref: "/mezopotamya/ziggurat-ve-yildizlar",
    roomLabel: {
      tr: "I · Ziggurat ve Gökyüzü Tabletleri Odası",
      en: "I · Ziggurat & Celestial Tablets Room",
      sv: "I · Ziggurat & Himmelska Tavlor",
    },
    runeHref: "/runler/sowilo",
    runeLabel: "ᛊ Sowilo & ᚠ Fehu",
    productSlugs: [
      "golden-divine-oil",
      "ras-eternal-light-elixir",
      "celestial-elixir-oil",
    ],
    advice: {
      tr: "Yaşam enerjisini, görünürlüğü ve bereket akışını (Fehu & Sowilo) harekete geçirmek için Güneş saatinde Golden Divine Oil ve Ra's Eternal Light İksiri ile niyetini mühürle.",
      en: "To kindle vitality, visibility, and purposeful abundance (Fehu & Sowilo), seal your intention during the Solar hour with Golden Divine Oil and Ra's Eternal Light Elixir.",
      sv: "För att väcka livskraft, synlighet och flöde (Fehu & Sowilo), arbeta under Solens timme med Golden Divine Oil och Ra's Eternal Light Elixir.",
    },
  },
  {
    id: "destiny",
    glyph: "☉",
    label: {
      tr: "Kader Haritası, Zamanlama & Kadim Bitki Bilgisi",
      en: "Natal Blueprint, Timing & Herbal Mastery",
      sv: "Födelsekarta, Tidsval & Örtmästerskap",
    },
    roomHref: "/astroloji/harita-nasil-okunur",
    roomLabel: {
      tr: "I · Doğum Haritası Nasıl Okunur Odası",
      en: "I · How to Read a Natal Chart Room",
      sv: "I · Hur Man Läser En Födelsekarta",
    },
    runeHref: "/runler/perthro",
    runeLabel: "ᛈ Perthro & ᛃ Jera",
    productSlugs: [
      "yesil-ahit-ekitap",
      "dogum-haritasi-ve-ongoru-danismanligi",
      "dogum-saati-bulma-rektifikasyon",
    ],
    advice: {
      tr: "Kendi yaşam döngünü, önündeki 1 yılın gezegen eşiklerini veya kesin doğum saatini öğrenmek için bireysel Astroloji Danışmanlıklarını; kadim bitki zanaatını baştan sona öğrenmek içinse Yeşil Ahit e-Kitabını seç.",
      en: "To understand your natal blueprint, upcoming yearly transits, or exact birth time, select a personal Astrology Consultation; to master traditional botanical craft, begin with The Green Covenant e-Book.",
      sv: "För att förstå din födelsekarta, kommande årsprognos eller exakta födelsetid, välj en astrologisk konsultation; för att studera örtkonsten på djupet, läs Det Gröna Förbundets e-bok.",
    },
  },
];

export function IntentionMatcher() {
  const { lang } = useLanguage();
  const [selectedId, setSelectedId] = useState<IntentionId>("shield");

  const current =
    INTENTIONS.find((i) => i.id === selectedId) ?? INTENTIONS[0];
  const matchedProducts = current.productSlugs
    .map((s) => shopProducts.find((p) => p.slug === s))
    .filter((p): p is ShopProduct => Boolean(p));

  const titleText =
    lang === "en"
      ? "Which Threshold Are You Standing At? (Ritual & Work Matcher)"
      : lang === "sv"
        ? "Vid Vilken Tröskel Står Du Nu? (Ritual- & Verksväljare)"
        : "Şu An Hangi Eşiktesin? · Niyetine Göre Ritüel & Eser Pusulası";

  return (
    <section
      aria-label={titleText}
      className="mt-10 border border-amber/40 bg-soot/65 p-5 sm:p-7"
    >
      <p className="text-[10px] font-semibold tracking-[0.22em] text-amber uppercase">
        ✦ {titleText}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {INTENTIONS.map((item) => {
          const active = item.id === selectedId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedId(item.id)}
              className={`px-3.5 py-2 text-xs tracking-[0.14em] transition ${
                active
                  ? "border border-[#e5be73] bg-[#d4a857] text-[#141a1c] font-bold"
                  : "border border-chalk/18 bg-ink/70 text-chalk/80 hover:border-amber/55 hover:text-amber"
              }`}
            >
              <span className="mr-1.5">{item.glyph}</span>
              <span>{item.label[lang]}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-5 border-t border-chalk/12 pt-5">
        <p className="text-sm leading-7 text-chalk/85">
          {current.advice[lang]}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
          <Link
            href={current.roomHref}
            className="border border-amber/45 bg-amber/10 px-3.5 py-1.5 tracking-[0.15em] text-amber uppercase hover:bg-amber hover:text-ink transition"
          >
            📖 {current.roomLabel[lang]} →
          </Link>
          <Link
            href={current.runeHref}
            className="border border-chalk/25 bg-ink/80 px-3.5 py-1.5 tracking-[0.15em] text-chalk/85 uppercase hover:border-amber hover:text-amber transition"
          >
            {current.runeLabel} →
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {matchedProducts.map((product) => (
            <div
              key={product.slug}
              className="flex flex-col justify-between border border-chalk/14 bg-ink/80 p-4"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-amber">
                  <span>{product.glyph}</span>
                  <span className="font-display text-base text-chalk">
                    {product.price}
                  </span>
                </div>
                <h3 className="mt-1.5 font-display text-lg text-chalk">
                  <Link
                    href={`/shop/${product.slug}`}
                    className="hover:text-amber"
                  >
                    {product.title[lang]}
                  </Link>
                </h3>
                <p className="mt-1 text-xs leading-5 text-chalk/70 line-clamp-2">
                  {product.summary[lang]}
                </p>
              </div>
              <div className="mt-3 flex gap-2 pt-2.5 border-t border-chalk/10">
                <Link
                  href={`/shop/${product.slug}`}
                  className="flex-1 border border-chalk/20 py-1.5 text-center text-[10px] uppercase tracking-[0.16em] text-chalk/80 hover:border-amber hover:text-amber"
                >
                  {BRIDGE_COPY[lang].inspect}
                </Link>
                <a
                  href={product.shopierUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-[#e5be73] bg-[#d4a857] py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-[#141a1c] hover:bg-[#e5be73]"
                >
                  Shopier →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
