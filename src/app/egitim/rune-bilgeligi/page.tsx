import type { Metadata } from "next";
import { RuneCourseRoom } from "@/components/rune-course";

export const metadata: Metadata = {
  title: "Rune Bilgeliği Eğitimi — RuneYard",
};

export default function RuneCoursePage() {
  return <RuneCourseRoom />;
}
