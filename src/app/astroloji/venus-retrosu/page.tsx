import type { Metadata } from "next";
import { VenusNote } from "@/components/venus-note";

export const metadata: Metadata = {
  title: "Venüs retrosu — RuneYard",
};

export default function VenusPage() {
  return <VenusNote />;
}
