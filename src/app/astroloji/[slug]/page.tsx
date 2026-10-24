import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AstrologyDoor } from "@/components/door-pages";
import { SkyNoteRoom } from "@/components/sky-note-room";
import { astrologyDoors, findAstrologyDoor } from "@/content/astrology";
import { extraSkyNotes, findExtraSkyNote } from "@/content/sky-notes";

export function generateStaticParams() {
  return [
    ...astrologyDoors.map((door) => ({ slug: door.slug })),
    ...extraSkyNotes.map((note) => ({ slug: note.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const door = findAstrologyDoor(slug);
  if (door) {
    const title = `${door.title.tr} (${door.subtitle.tr}) — Astroloji · RuneYard`;
    const description = door.summary.tr;
    return {
      title,
      description,
      alternates: { canonical: `/astroloji/${door.slug}` },
      openGraph: {
        title,
        description,
        url: `https://www.runeyard.net/astroloji/${door.slug}`,
        type: "article",
        images: door.image ? [{ url: door.image, alt: door.title.tr }] : undefined,
      },
    };
  }
  const skyNote = findExtraSkyNote(slug);
  if (skyNote) {
    const title = `${skyNote.data.tr.title} — Astroloji & Burç Yorumları · RuneYard`;
    const description = skyNote.data.tr.overview;
    return {
      title,
      description,
      alternates: { canonical: `/astroloji/${skyNote.slug}` },
      openGraph: {
        title,
        description,
        url: `https://www.runeyard.net/astroloji/${skyNote.slug}`,
        type: "article",
        images: [{ url: skyNote.image, alt: skyNote.data.tr.title }],
      },
    };
  }
  return { title: "Astroloji — RuneYard" };
}

export default async function AstrologyDoorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const door = findAstrologyDoor(slug);
  if (door) {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${door.title.tr} — ${door.subtitle.tr}`,
      description: door.summary.tr,
      image: door.image ? `https://www.runeyard.net${door.image}` : undefined,
      author: { "@type": "Person", name: "Mehmet Akdeniz" },
      publisher: { "@type": "Organization", name: "RuneYard", url: "https://www.runeyard.net" },
      mainEntityOfPage: `https://www.runeyard.net/astroloji/${door.slug}`,
    };
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AstrologyDoor doorSlug={slug} />
      </>
    );
  }
  const skyNote = findExtraSkyNote(slug);
  if (skyNote) {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: skyNote.data.tr.title,
      description: skyNote.data.tr.overview,
      image: `https://www.runeyard.net${skyNote.image}`,
      author: { "@type": "Person", name: "Mehmet Akdeniz" },
      publisher: { "@type": "Organization", name: "RuneYard", url: "https://www.runeyard.net" },
      mainEntityOfPage: `https://www.runeyard.net/astroloji/${skyNote.slug}`,
    };
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SkyNoteRoom slug={slug} />
      </>
    );
  }
  notFound();
}
