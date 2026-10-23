import type { Metadata } from "next";
import { TraditionRoom } from "@/components/tradition-room";

export const metadata: Metadata = {
  title: "Witchcraft — RuneYard",
};

export default function WitchcraftPage() {
  return <TraditionRoom slug="witchcraft" />;
}
