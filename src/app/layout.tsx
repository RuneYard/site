import type { Metadata } from "next";
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
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
