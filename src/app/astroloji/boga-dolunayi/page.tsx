import type { Metadata } from "next";
import { TaurusFullMoonNote } from "@/components/taurus-fullmoon-note";

export const metadata: Metadata = {
  title: "26 Ekim Boğa Dolunayı — RuneYard",
};

export default function TaurusFullMoonPage() {
  return <TaurusFullMoonNote />;
}
