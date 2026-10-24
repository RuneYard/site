import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EducationCourseDoor } from "@/components/door-pages";
import { educationCourses, findEducationCourse } from "@/content/education";

export function generateStaticParams() {
  return educationCourses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = findEducationCourse(slug);
  if (!course) return { title: "Eğitim — RuneYard" };

  const title = `${course.title.tr} (${course.subtitle.tr}) — RuneYard Akademi`;
  const description = course.summary.tr;

  return {
    title,
    description,
    alternates: { canonical: `/egitim/${course.slug}` },
    openGraph: {
      title,
      description,
      url: `https://www.runeyard.net/egitim/${course.slug}`,
      type: "article",
      images: [{ url: course.image, alt: course.title.tr }],
    },
  };
}

export default async function EducationCoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = findEducationCourse(slug);
  if (!course) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title.tr,
    description: course.summary.tr,
    provider: {
      "@type": "Organization",
      name: "RuneYard Akademi — Mehmet Akdeniz",
      sameAs: "https://www.runeyard.net",
    },
    image: `https://www.runeyard.net${course.image}`,
    url: `https://www.runeyard.net/egitim/${course.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EducationCourseDoor slug={slug} />
    </>
  );
}
