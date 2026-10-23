import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AstrologyDoor } from "@/components/door-pages";
import { astrologyDoors, findAstrologyDoor } from "@/content/astrology";

export function generateStaticParams() {
  return astrologyDoors.map((door) => ({ slug: door.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const door = findAstrologyDoor(slug);
  if (!door) return { title: "Astroloji — RuneYard" };
  return { title: `${door.title.tr} — Astroloji · RuneYard` };
}

export default async function AstrologyDoorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!findAstrologyDoor(slug)) notFound();
  return <AstrologyDoor doorSlug={slug} />;
}
