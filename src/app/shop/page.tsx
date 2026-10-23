import type { Metadata } from "next";
import { TraditionRoom } from "@/components/tradition-room";

export const metadata: Metadata = {
  title: "Shop — RuneYard",
};

export default function ShopPage() {
  return <TraditionRoom slug="shop" />;
}
