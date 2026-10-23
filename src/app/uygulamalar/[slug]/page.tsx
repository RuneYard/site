import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppDoor } from "@/components/apps-shelf";
import { apps, findAppBySlug } from "@/content/apps";

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = findAppBySlug(slug);
  if (!app) return { title: "Uygulamalar — RuneYard" };
  return { title: `${app.name} — Uygulamalar · RuneYard` };
}

export default async function AppDoorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!findAppBySlug(slug)) notFound();
  return <AppDoor slug={slug} />;
}
