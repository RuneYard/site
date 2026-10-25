import type { Metadata } from "next";
import { RuneSheet } from "@/components/rune-room";
import { runes } from "@/content/runes";

export const metadata: Metadata = {
  title:
    "Rune (Rün) Nedir? 24 Elder Futhark Rune Alfabesi, Taşları ve Anlamları — RuneYard",
  description:
    "Rune (Rün) nedir, nasıl okunur? 24 Elder Futhark rune alfabesi, rune taşları anlamları tablosu, Üç Aett (Freyr, Hagal, Tyr) sistemi, sesli Galdr telaffuzu, interaktif rune çekimi ve isim çevirici.",
  keywords: [
    "rune",
    "rune nedir",
    "rune anlamları",
    "rune alfabesi",
    "rune taşları",
    "rune sembolleri",
    "rune harfleri",
    "rün",
    "rünler",
    "rün anlamları",
    "rün alfabesi",
    "elder futhark",
    "24 rune",
    "fehu",
    "algiz",
    "othala",
    "runeyard",
  ],
  alternates: { canonical: "/runler" },
  openGraph: {
    title:
      "Rune (Rün) Nedir? 24 Elder Futhark Rune Alfabesi, Sembolleri ve Anlamları — RuneYard",
    description:
      "24 Elder Futhark rune alfabesi ve anlamları tablosu, tarihsel Rün Şiirleri, interaktif Üç Norn Rune Çekimi ve Adını Rune Harflerine Çevirme stüdyosu.",
    url: "https://www.runeyard.net/runler",
    type: "website",
    images: [
      {
        url: "/runes/hall.jpg",
        width: 1200,
        height: 675,
        alt: "24 Elder Futhark Rune (Rün) Alfabesi ve Anlamları — RuneYard",
      },
    ],
  },
};

const runlerJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.runeyard.net/runler#webpage",
      url: "https://www.runeyard.net/runler",
      name: "Rune (Rün) Nedir? 24 Elder Futhark Rune Alfabesi, Taşları ve Anlamları",
      description:
        "24 Elder Futhark rune alfabesi, sembolleri, Proto-Cermen kökleri, tarihsel Rün Şiirleri ve interaktif rune çalışmaları.",
      inLanguage: "tr-TR",
      author: { "@type": "Person", name: "Mehmet Akdeniz" },
    },
    {
      "@type": "ItemList",
      "@id": "https://www.runeyard.net/runler#itemlist",
      name: "24 Elder Futhark Rune (Rün) Alfabesi ve Anlamları",
      numberOfItems: 24,
      itemListElement: runes.map((r) => ({
        "@type": "ListItem",
        position: r.index,
        name: `${r.glyph} ${r.name} Rune (Rünü) — ${r.subtitle.tr}`,
        url: `https://www.runeyard.net/runler/${r.slug}`,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.runeyard.net/runler#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Rune (Rün) nedir ve ne anlama gelir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rune (Türkçe okunuşuyla Rün), Proto-Cermen *rūnō kökünden gelir ve ‘sır, fısıltı, gizli bilgelik ve oyulmuş işaret’ demektir. En eski ve eksiksiz sistemi 24 sembolden oluşan Elder Futhark (Eski Futhark) rune alfabesidir; her rune hem bir ses değerini hem de doğa ve insan bilincindeki bir arketipsel yasayı temsil eder.",
          },
        },
        {
          "@type": "Question",
          name: "Elder Futhark rune alfabesi kaç harftir ve Aett nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Elder Futhark rune alfabesi 24 temel rune sembolünden oluşur ve 8’erli 3 gruba (Aett / Aettir) ayrılır: 1. Freyr Aett (Fehu’dan Wunjo’ya: yaratılış ve temel yaşam gücü), 2. Hagal Aett (Hagalaz’dan Sowilo’ya: sınav, dönüşüm ve kader çarkı), 3. Tyr Aett (Tiwaz’dan Othala’ya: adalet, bilgelik ve kök miras).",
          },
        },
        {
          "@type": "Question",
          name: "Rune taşları nasıl okunur ve Üç Norn açılımı nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Geleneksel rune okuması (Tacitus’un Germania kayıtlarında ve İskandinav sagalarında anlatıldığı üzere) niyet odaklı bir tefekkür ve durum okuma sanatıdır. En klasik yöntem olan Üç Norn Açılımında 1. taş Urðr (geçmişin kökü), 2. taş Verðandi (şimdiki eşik), 3. taş Skuld (doğmakta olan yönelim) olarak okunur.",
          },
        },
        {
          "@type": "Question",
          name: "Rune alfabesiyle isim nasıl yazılır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rune alfabesi harf-harf değil, ses-ses (fonetik olarak) yazılır ve çift sessizler tek rünle gösterilir. RuneYard üzerindeki interaktif ‘Adını Rune Alfabesiyle Yaz’ stüdyosunu kullanarak isminizin Elder Futhark rune karşılığını anında görebilirsiniz.",
          },
        },
      ],
    },
  ],
};

export default function RunlerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(runlerJsonLd) }}
      />
      <RuneSheet />
    </>
  );
}
