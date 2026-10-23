import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TraditionDoor } from "@/components/tradition-room";
import { findTraditionDoor, traditions } from "@/content/traditions";

export function generateStaticParams() {
  return traditions.mezopotamya.doors.map((door) => ({ slug: door.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const door = findTraditionDoor("mezopotamya", slug);
  if (!door) return { title: "Mezopotamya — RuneYard" };
  return { title: `${door.title.tr} — Mezopotamya · RuneYard` };
}

export default async function MezopotamyaDoorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!findTraditionDoor("mezopotamya", slug)) notFound();
  return <TraditionDoor traditionSlug="mezopotamya" doorSlug={slug} />;
}
