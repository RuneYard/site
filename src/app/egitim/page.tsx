import type { Metadata } from "next";
import { RoomPage } from "@/components/room-page";

export const metadata: Metadata = {
  title: "Eğitim — RuneYard",
};

export default function EgitimPage() {
  return (
    <RoomPage
      title="Eğitim"
      text="Rün alfabesine giriş. Yirmi dört işaret. Ses, ad, ve bir kelimenin nasıl okunduğu. Gün belli olunca bu satır dolacak."
    />
  );
}
