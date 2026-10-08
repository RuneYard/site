import type { Metadata } from "next";
import { RoomPage } from "@/components/room-page";

export const metadata: Metadata = {
  title: "Astroloji — RuneYard",
};

export default function AstrolojiPage() {
  return (
    <RoomPage
      title="Astroloji"
      text="Ekinoks. Gündüz ile gecenin eşitlendiği gün. Yazı bitince burada duracak."
    />
  );
}
