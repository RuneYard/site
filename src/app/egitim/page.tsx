import type { Metadata } from "next";
import { EducationRoom } from "@/components/door-pages";

export const metadata: Metadata = {
  title: "Eğitim — RuneYard",
};

export default function EgitimPage() {
  return <EducationRoom />;
}
