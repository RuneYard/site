import type { Metadata } from "next";
import { TraditionRoom } from "@/components/tradition-room";

export const metadata: Metadata = {
  title: "Şaman — RuneYard",
};

export default function SamanPage() {
  return <TraditionRoom slug="saman" />;
}
