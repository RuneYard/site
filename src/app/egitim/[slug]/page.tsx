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
  return { title: `${course.title.tr} — RuneYard Akademi` };
}

export default async function EducationCoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!findEducationCourse(slug)) notFound();
  return <EducationCourseDoor slug={slug} />;
}
