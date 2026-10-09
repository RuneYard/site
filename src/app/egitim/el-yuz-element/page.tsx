import type { Metadata } from "next";
import { ReadingCourseRoom } from "@/components/reading-course";

export const metadata: Metadata = {
  title: "El, Yüz ve Element Okuma Teknikleri — RuneYard",
};

export default function ReadingCoursePage() {
  return <ReadingCourseRoom />;
}
