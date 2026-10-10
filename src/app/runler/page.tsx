import type { Metadata } from "next";
import { RuneSheet } from "@/components/rune-room";

export const metadata: Metadata = {
  title: "Rünler — RuneYard",
};

export default function RunlerPage() {
  return <RuneSheet />;
}
