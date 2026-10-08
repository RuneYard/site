import type { Metadata } from "next";
import { RoomPage } from "@/components/room-page";

export const metadata: Metadata = {
  title: "Rünler — RuneYard",
};

export default function RunlerPage() {
  return (
    <RoomPage
      title="Rünler"
      text="Uruz: beden, direnç, ham güç. Kısa karşılıklar burada birikecek."
    />
  );
}
