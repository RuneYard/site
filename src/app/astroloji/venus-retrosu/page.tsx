import type { Metadata } from "next";
import { VenusNote } from "@/components/venus-note";

export const metadata: Metadata = {
  title: "Venüs Retrosu (3 Ekim – 14 Kasım 2026 Akrep & Terazi) Analizi — RuneYard",
  description:
    "3 Ekim – 14 Kasım 2026 tarihleri arasında Akrep ve Terazi burçlarında gerçekleşen Venüs Retrosu takvimi, değer muhasebesi ve 12 yükselen burç analizi.",
  alternates: { canonical: "/astroloji/venus-retrosu" },
  openGraph: {
    title: "Venüs Retrosu (Akrep & Terazi) — Analiz & 12 Burç Yorumu · RuneYard",
    description:
      "3 Ekim – 14 Kasım 2026 Venüs Retrosu evreleri, gölge geçişleri ve 12 yükselen burç rehberi.",
    url: "https://www.runeyard.net/astroloji/venus-retrosu",
    type: "article",
    images: [{ url: "/astroloji/venus-retrosu.jpg", alt: "Venüs Retrosu — RuneYard" }],
  },
};

export default function VenusPage() {
  return <VenusNote />;
}
