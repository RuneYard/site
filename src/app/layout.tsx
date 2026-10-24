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
    default: "RuneYard — Mehmet Akdeniz · Rünler, Astroloji, Kadim Gelenekler & Akademi",
    template: "%s",
  },
  description:
    "Mehmet Akdeniz’in kış odası. 24 Elder Futhark rün incelemesi, gökyüzü ve astroloji analizleri, Şamanizm, Kelt, Mezopotamya, Cadılık gelenekleri ve RuneYard Akademi eğitimleri.",
  keywords: [
    "RuneYard",
    "Mehmet Akdeniz",
    "Rünler",
    "Elder Futhark",
    "Rün Eğitimi",
    "Astroloji",
    "Boğa Dolunayı",
    "Merkür Retrosu",
    "Venüs Retrosu",
    "Şamanizm Eğitimi",
    "El Yüz Element Analizi",
    "Kelt Ogham",
    "Mezopotamya",
  ],
  authors: [{ name: "Mehmet Akdeniz", url: siteUrl }],
  creator: "Mehmet Akdeniz",
  alternates: { canonical: "/" },
  openGraph: {
    url: siteUrl,
    siteName: "RuneYard",
    title: "RuneYard — Mehmet Akdeniz · Kış Odası",
    description:
      "24 Elder Futhark rün incelemesi, gökyüzü ve astroloji analizleri, kadim gelenekler ve RuneYard Akademi eğitimleri.",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/runes/hall.jpg",
        width: 1200,
        height: 675,
        alt: "RuneYard — Kış Odası",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RuneYard — Mehmet Akdeniz · Kış Odası",
    description:
      "24 Elder Futhark rün incelemesi, gökyüzü ve astroloji analizleri, kadim gelenekler ve RuneYard Akademi eğitimleri.",
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
