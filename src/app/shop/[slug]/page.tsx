import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TraditionDoor } from "@/components/tradition-room";
import { findTraditionDoor, traditions } from "@/content/traditions";

export function generateStaticParams() {
  return traditions.shop.doors.map((door) => ({ slug: door.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const door = findTraditionDoor("shop", slug);
  if (!door) return { title: "Shop — RuneYard" };
  return { title: `${door.title.tr} — Shop · RuneYard` };
}

export default async function ShopDoorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!findTraditionDoor("shop", slug)) notFound();
  return <TraditionDoor traditionSlug="shop" doorSlug={slug} />;
}
