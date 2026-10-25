import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { LanguageProvider } from "@/components/language";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  variable: "--font-display-family",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-body-family",
  display: "swap",
});

const siteUrl = "https://www.runeyard.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "RuneYard — Mehmet Akdeniz · Rune (Rün) Alfabesi, 24 Elder Futhark Anlamları, Astroloji & Kadim Gelenekler",
    template: "%s",
  },
  description:
    "Mehmet Akdeniz’in kış odası. 24 Elder Futhark Rune (Rün) alfabesi, taşları ve anlamları, interaktif rune çekimi ve isim çevirici, astroloji analizleri, Şamanizm, Kelt, Mezopotamya (Marduk’un 50 İsmi) ve Cadılık külliyatı.",
  keywords: [
    "Rune",
    "Rune Nedir",
    "Rune Anlamları",
    "Rune Alfabesi",
    "Rune Taşları",
    "Rune Sembolleri",
    "Rün",
    "Rünler",
    "Rün Anlamları",
    "Elder Futhark",
    "RuneYard",
    "Mehmet Akdeniz",
    "Rün Eğitimi",
    "Astroloji",
    "Şamanizm Eğitimi",
    "El Yüz Element Analizi",
    "Kelt Ogham",
    "Mezopotamya",
    "Marduk 50 İsim",
  ],
  authors: [{ name: "Mehmet Akdeniz", url: siteUrl }],
  creator: "Mehmet Akdeniz",
  alternates: { canonical: "/" },
  openGraph: {
    url: siteUrl,
    siteName: "RuneYard",
    title: "RuneYard — Mehmet Akdeniz · Rune (Rün) Alfabesi & Kadim Bilgelik Külliyatı",
    description:
      "24 Elder Futhark Rune (Rün) anlamları ve sembolleri, interaktif rune açılımı, gökyüzü analizleri ve kadim gelenekler kütüphanesi.",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/runes/hall.jpg",
        width: 1200,
        height: 675,
        alt: "RuneYard — 24 Elder Futhark Rune Alfabesi ve Kış Odası",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RuneYard — Mehmet Akdeniz · Rune (Rün) Alfabesi & Kadim Bilgelik",
    description:
      "24 Elder Futhark Rune (Rün) anlamları ve sembolleri, interaktif rune açılımı, gökyüzü analizleri ve kadim gelenekler kütüphanesi.",
    images: ["/runes/hall.jpg"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "RuneYard",
      description:
        "Mehmet Akdeniz’in kış odası. Rün notları, ders duyuruları, kadim gelenekler ve gökyüzü yazıları.",
      inLanguage: ["tr-TR", "en-US", "sv-SE"],
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Mehmet Akdeniz",
      url: siteUrl,
      jobTitle: "Eğitmen & Araştırmacı — Rün Bilgelikleri, Astroloji ve Kadim Gelenekler",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
