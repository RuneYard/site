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

export const metadata: Metadata = {
  title: "RuneYard — Kış odası",
  description:
    "Mehmet Akdeniz’in kış odası. Rün notları, ders duyuruları ve gökyüzü yazıları aynı duvarda asılı.",
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
