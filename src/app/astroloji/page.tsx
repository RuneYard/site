import type { Metadata } from "next";
import { VenusNote } from "@/components/venus-note";

export const metadata: Metadata = {
  title: "Venüs Retrosu — RuneYard",
};

export default function AstrolojiPage() {
  return <VenusNote />;
}
