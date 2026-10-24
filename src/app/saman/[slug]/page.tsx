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
  const title = `${door.title.tr} (${door.subtitle.tr}) — Şamanizm · RuneYard`;
  const description = door.text.tr[0];
  return {
    title,
    description,
    alternates: { canonical: `/saman/${door.slug}` },
    openGraph: {
      title,
      description,
      url: `https://www.runeyard.net/saman/${door.slug}`,
      type: "article",
      images: [{ url: door.image, alt: door.title.tr }],
    },
  };
}

export default async function SamanDoorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!findTraditionDoor("saman", slug)) notFound();
  return <TraditionDoor traditionSlug="saman" doorSlug={slug} />;
}
