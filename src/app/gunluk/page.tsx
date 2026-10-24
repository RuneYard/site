import type { Metadata } from "next";
import { DailyLoreHallView } from "@/components/daily-lore-room";

export const metadata: Metadata = {
  title: "Günlük Ocak Yaprakları · Kadim Bilgelik Kütüğü",
  description:
    "Her gün ocağın ateşinde açılan, daha önce işlenmemiş kadim bir gelenek, tablet, el yazması veya doğa yasası.",
};

export default function DailyLorePage() {
  return <DailyLoreHallView />;
}
