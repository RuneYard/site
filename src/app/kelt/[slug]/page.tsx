import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TraditionDoor } from "@/components/tradition-room";
import { findTraditionDoor, traditions } from "@/content/traditions";

export function generateStaticParams() {
  return traditions.kelt.doors.map((door) => ({ slug: door.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const door = findTraditionDoor("kelt", slug);
  if (!door) return { title: "Kelt — RuneYard" };
  const title = `${door.title.tr} (${door.subtitle.tr}) — Kelt Geleneği · RuneYard`;
  const description = door.summary.tr;
  return {
    title,
    description,
    alternates: { canonical: `/kelt/${door.slug}` },
    openGraph: {
      title,
      description,
      url: `https://www.runeyard.net/kelt/${door.slug}`,
      type: "article",
      images: door.image ? [{ url: door.image, alt: door.title.tr }] : undefined,
    },
  };
}

export default async function KeltDoorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!findTraditionDoor("kelt", slug)) notFound();
  return <TraditionDoor traditionSlug="kelt" doorSlug={slug} />;
}
