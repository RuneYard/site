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

  const title = `${rune.glyph} ${rune.name} Rünü (${rune.subtitle.tr}) — Elder Futhark · RuneYard`;
  const description = rune.text.tr[0] ?? `${rune.name} rünü anlamı, etimolojisi, rün şiiri ve Galdr/Stöðul uygulaması.`;

  return {
    title,
    description,
    alternates: { canonical: `/runler/${rune.slug}` },
    openGraph: {
      title,
      description,
      url: `https://www.runeyard.net/runler/${rune.slug}`,
      type: "article",
      images: [{ url: rune.image, alt: `${rune.name} — RuneYard` }],
    },
  };
}

export default async function RunePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const rune = runeBySlug(slug);
  if (!rune) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${rune.glyph} ${rune.name} — ${rune.subtitle.tr}`,
    description: rune.text.tr[0],
    image: `https://www.runeyard.net${rune.image}`,
    author: { "@type": "Person", name: "Mehmet Akdeniz" },
    publisher: { "@type": "Organization", name: "RuneYard", url: "https://www.runeyard.net" },
    mainEntityOfPage: `https://www.runeyard.net/runler/${rune.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RuneDoor slug={slug} />
    </>
  );
}
