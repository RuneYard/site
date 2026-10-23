import type { Metadata } from "next";
import { TraditionRoom } from "@/components/tradition-room";

export const metadata: Metadata = {
  title: "Kelt — RuneYard",
};

export default function KeltPage() {
  return <TraditionRoom slug="kelt" />;
}
