import type { Metadata } from "next";
import { TraditionRoom } from "@/components/tradition-room";

export const metadata: Metadata = {
  title: "Mezopotamya — RuneYard",
};

export default function MezopotamyaPage() {
  return <TraditionRoom slug="mezopotamya" />;
}
