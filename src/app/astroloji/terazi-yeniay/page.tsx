import type { Metadata } from "next";
import { LibraNote } from "@/components/libra-note";

export const metadata: Metadata = {
  title: "10 Ekim Terazi Yeniayı — RuneYard",
};

export default function LibraPage() {
  return <LibraNote />;
}
