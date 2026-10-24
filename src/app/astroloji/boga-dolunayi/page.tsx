import type { Metadata } from "next";
import { TaurusFullMoonNote } from "@/components/taurus-fullmoon-note";

export const metadata: Metadata = {
  title: "26 Ekim Boğa Dolunayı (3° Boğa) Analizi & 12 Burç Yorumu — RuneYard",
  description:
    "26 Ekim 2026 saat 07:12’de 3° Boğa burcunda gerçekleşen Dolunay analizi, maddi-manevi güven ekseni, sabit burç hasadı ve 12 yükselen burç yorumu.",
  alternates: { canonical: "/astroloji/boga-dolunayi" },
  openGraph: {
    title: "26 Ekim Boğa Dolunayı — Analiz & 12 Burç Yorumu · RuneYard",
    description:
      "3° Boğa Dolunayı analizi, maddi ve duygusal köklenme, Venüs retrosu hasadı ve 12 yükselen burç için detaylı rehber.",
    url: "https://www.runeyard.net/astroloji/boga-dolunayi",
    type: "article",
    images: [{ url: "/astroloji/boga-dolunayi.jpg", alt: "26 Ekim Boğa Dolunayı — RuneYard" }],
  },
};

export default function TaurusFullMoonPage() {
  return <TaurusFullMoonNote />;
}
