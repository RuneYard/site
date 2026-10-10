import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RuneDoor } from "@/components/rune-room";
import { runeBySlug, runes } from "@/content/runes";

export function generateStaticParams() {
  return runes.map((rune) => ({ slug: rune.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const rune = runeBySlug(slug);
  if (!rune) return { title: "Rünler — RuneYard" };
  return { title: `${rune.name} — RuneYard` };
}

export default async function RunePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!runeBySlug(slug)) notFound();
  return <RuneDoor slug={slug} />;
}
