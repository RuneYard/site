import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TraditionDoor } from "@/components/tradition-room";
import { findTraditionDoor, traditions } from "@/content/traditions";

export function generateStaticParams() {
  return traditions.saman.doors.map((door) => ({ slug: door.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const door = findTraditionDoor("saman", slug);
  if (!door) return { title: "Şaman — RuneYard" };
  return { title: `${door.title.tr} — Şaman · RuneYard` };
}

export default async function SamanDoorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!findTraditionDoor("saman", slug)) notFound();
  return <TraditionDoor traditionSlug="saman" doorSlug={slug} />;
}
