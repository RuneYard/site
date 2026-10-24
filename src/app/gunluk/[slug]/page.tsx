import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DailyLoreEntryView } from "@/components/daily-lore-room";
import { dailyLoreEntries, findDailyLore } from "@/content/daily-lore";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return dailyLoreEntries.map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = findDailyLore(slug);
  if (!entry) {
    return { title: "Günlük Ocak Yaprakları" };
  }
  return {
    title: entry.title.tr,
    description: entry.summary.tr.replace(/\*\*/g, "").replace(/\*/g, ""),
  };
}

export default async function DailyLoreEntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = findDailyLore(slug);
  if (!entry) notFound();

  return <DailyLoreEntryView slug={entry.slug} />;
}
