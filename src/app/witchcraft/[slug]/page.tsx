import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TraditionDoor } from "@/components/tradition-room";
import { findTraditionDoor, traditions } from "@/content/traditions";

export function generateStaticParams() {
  return traditions.witchcraft.doors.map((door) => ({ slug: door.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const door = findTraditionDoor("witchcraft", slug);
  if (!door) return { title: "Cadılık — RuneYard" };
  const title = `${door.title.tr} (${door.subtitle.tr}) — Cadılık Zanaatı · RuneYard`;
  const description = door.summary.tr;
  return {
    title,
    description,
    alternates: { canonical: `/witchcraft/${door.slug}` },
    openGraph: {
      title,
      description,
      url: `https://www.runeyard.net/witchcraft/${door.slug}`,
      type: "article",
      images: door.image ? [{ url: door.image, alt: door.title.tr }] : undefined,
    },
  };
}

export default async function WitchcraftDoorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!findTraditionDoor("witchcraft", slug)) notFound();
  return <TraditionDoor traditionSlug="witchcraft" doorSlug={slug} />;
}
