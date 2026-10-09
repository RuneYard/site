import type { Metadata } from "next";
import { AstrologyRoom } from "@/components/door-pages";

export const metadata: Metadata = {
  title: "Astroloji — RuneYard",
};

export default function AstrolojiPage() {
  return <AstrologyRoom />;
}
