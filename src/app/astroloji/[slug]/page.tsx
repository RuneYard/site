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
    return { title: `${door.title.tr} — Astroloji · RuneYard` };
  }
  const skyNote = findExtraSkyNote(slug);
  if (skyNote) {
    return { title: `${skyNote.data.tr.title} — Astroloji · RuneYard` };
  }
  return { title: "Astroloji — RuneYard" };
}

export default async function AstrologyDoorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (findAstrologyDoor(slug)) {
    return <AstrologyDoor doorSlug={slug} />;
  }
  if (findExtraSkyNote(slug)) {
    return <SkyNoteRoom slug={slug} />;
  }
  notFound();
}
