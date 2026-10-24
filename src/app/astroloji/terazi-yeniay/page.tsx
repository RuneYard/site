import type { Metadata } from "next";
import { LibraNote } from "@/components/libra-note";

export const metadata: Metadata = {
  title: "10 Ekim Terazi Yeniayı (17° Terazi) Analizi & 12 Burç Yorumu — RuneYard",
  description:
    "10 Ekim 2026 saat 18:50’de 17° Terazi burcunda doğan Yeniay analizi, ilişkilerde denge, kontratlar ve 12 yükselen burç yorumu.",
  alternates: { canonical: "/astroloji/terazi-yeniay" },
  openGraph: {
    title: "10 Ekim Terazi Yeniayı — Analiz & 12 Burç Yorumu · RuneYard",
    description:
      "17° Terazi Yeniayı analizi, ilişkiler, anlaşmalar ve 12 yükselen burç için kapsamlı rehber.",
    url: "https://www.runeyard.net/astroloji/terazi-yeniay",
    type: "article",
    images: [{ url: "/astroloji/terazi-yeniay.jpg", alt: "10 Ekim Terazi Yeniayı — RuneYard" }],
  },
};

export default function LibraPage() {
  return <LibraNote />;
}
