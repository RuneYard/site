import type { Metadata } from "next";
import { ShamanCourseRoom } from "@/components/shaman-course";

export const metadata: Metadata = {
  title: "Şamanizm Eğitimi — RuneYard",
};

export default function ShamanCoursePage() {
  return <ShamanCourseRoom />;
}
