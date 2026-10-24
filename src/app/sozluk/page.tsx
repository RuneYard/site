import type { Metadata } from "next";
import { GlossaryRoomView } from "@/components/glossary-room";

export const metadata: Metadata = {
  title: "Kadim Terimler Sözlüğü · Enki, Marduk, Rünler, Ogham ve Astroloji",
  description:
    "Sümer ve Babil tabletlerinden (Enki, Marduk, Abzu, Anunnaki, Me), Elder Futhark rünlerine (Galdr, Stöðul, Wyrd, Útiseta), Kelt Ogham ve klasik astrolojiye uzanan kadim kavramlar sözlüğü.",
};

export default function GlossaryPage() {
  return <GlossaryRoomView />;
}
