import type { Metadata } from "next";
import { RuneRoom } from "@/components/door-pages";

export const metadata: Metadata = {
  title: "Rünler — RuneYard",
};

export default function RunlerPage() {
  return <RuneRoom />;
}
