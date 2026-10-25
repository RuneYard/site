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
  if (!rune) return { title: "Rune (Rünler) — RuneYard" };

  const title = `${rune.glyph} ${rune.name} Rune (Rünü) Anlamı, Sembolü ve Özellikleri — Elder Futhark · RuneYard`;
  const description =
    rune.text.tr[0] ??
    `${rune.name} rune (rünü) anlamı, Proto-Cermen kökü (${rune.protoGermanic}), tarihsel rün şiiri ve Galdr/Stöðul uygulaması.`;

  return {
    title,
    description,
    keywords: [
      `${rune.name.toLowerCase()} rune`,
      `${rune.name.toLowerCase()} rünü`,
      `${rune.name.toLowerCase()} anlamı`,
      "rune anlamları",
      "rune alfabesi",
      "elder futhark",
      rune.name,
      rune.protoGermanic,
    ],
    alternates: { canonical: `/runler/${rune.slug}` },
    openGraph: {
      title,
      description,
      url: `https://www.runeyard.net/runler/${rune.slug}`,
      type: "article",
      images: [{ url: rune.image, alt: `${rune.name} Rune (Rünü) — RuneYard` }],
    },
  };
}

export default async function RunePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const rune = runeBySlug(slug);
  if (!rune) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "RuneYard",
            item: "https://www.runeyard.net",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Rune (Rün) Alfabesi & 24 Elder Futhark",
            item: "https://www.runeyard.net/runler",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${rune.glyph} ${rune.name} Rune (Rünü)`,
            item: `https://www.runeyard.net/runler/${rune.slug}`,
          },
        ],
      },
      {
        "@type": "Article",
        headline: `${rune.glyph} ${rune.name} Rune (Rünü) — ${rune.subtitle.tr}`,
        description: rune.text.tr[0],
        image: `https://www.runeyard.net${rune.image}`,
        author: { "@type": "Person", name: "Mehmet Akdeniz" },
        publisher: {
          "@type": "Organization",
          name: "RuneYard",
          url: "https://www.runeyard.net",
        },
        mainEntityOfPage: `https://www.runeyard.net/runler/${rune.slug}`,
      },
    ],
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
