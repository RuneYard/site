import type { Metadata } from "next";
import { Fraunces, Literata, Noto_Sans_Runic } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display-family",
  display: "swap",
});

const body = Literata({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body-family",
  display: "swap",
});

const runic = Noto_Sans_Runic({
  weight: "400",
  subsets: ["runic"],
  variable: "--font-runic-family",
  display: "swap",
});

const siteUrl = "https://runeyard.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "RuneYard — Kış odası",
  description:
    "Mehmet Akdeniz’in kış odası. Rün notları, ders duyuruları ve gökyüzü yazıları aynı duvarda asılı.",
  alternates: { canonical: "/" },
  openGraph: {
    url: siteUrl,
    siteName: "RuneYard",
    title: "RuneYard — Kış odası",
    description:
      "Mehmet Akdeniz’in kış odası. Rün notları, ders duyuruları ve gökyüzü yazıları aynı duvarda asılı.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${display.variable} ${body.variable} ${runic.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
