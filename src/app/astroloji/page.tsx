import type { Metadata } from "next";
import { VenusNote } from "@/components/venus-note";

export const metadata: Metadata = {
  title: "Astroloji — RuneYard",
};

export default function AstrolojiPage() {
  return <VenusNote />;
}
