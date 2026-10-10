import type { Metadata } from "next";
import { AppsShelf } from "@/components/apps-shelf";

export const metadata: Metadata = {
  title: "Uygulamalar — RuneYard",
};

export default function UygulamalarPage() {
  return <AppsShelf />;
}
