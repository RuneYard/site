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

  const title = `${app.name} (${app.tagline.tr}) — iOS Uygulaması · RuneYard`;
  const description = app.summary.tr;

  return {
    title,
    description,
    alternates: { canonical: `/uygulamalar/${app.slug}` },
    openGraph: {
      title,
      description,
      url: `https://www.runeyard.net/uygulamalar/${app.slug}`,
      type: "website",
      images: [{ url: app.icon, alt: app.name }],
    },
  };
}

export default async function AppDoorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = findAppBySlug(slug);
  if (!app) notFound();
  return <AppDoor slug={slug} />;
}
