import type { Metadata } from "next";
import { ShopRoom } from "@/components/shop-room";
import { shopHall } from "@/content/shop";

export const metadata: Metadata = {
  title: "Shop · Atölye & Danışmanlık — RuneYard",
  description: shopHall.intro.tr,
  alternates: {
    canonical: "https://runeyard.net/shop",
  },
  openGraph: {
    title: "Shop · Atölye & Danışmanlık — RuneYard",
    description: shopHall.subtitle.tr,
    url: "https://runeyard.net/shop",
    images: [{ url: shopHall.image, width: 1200, height: 420 }],
  },
};

export default function ShopPage() {
  return <ShopRoom />;
}
