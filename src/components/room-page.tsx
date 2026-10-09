import Link from "next/link";
import { HallShell } from "@/components/hall-shell";

export function RoomPage({ title, text }: { title: string; text: string }) {
  return (
    <HallShell>
      <main id="icerik" className="mx-auto min-h-[70vh] w-full max-w-3xl px-6 py-20 sm:px-8">
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">runeyard.net</p>
        <h1 className="mt-4 font-display text-5xl font-medium tracking-[-0.025em] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-chalk/80">{text}</p>
        <Link
          href="/"
          className="mt-10 inline-block border border-chalk/30 px-6 py-3 font-display text-sm tracking-[0.14em] text-chalk uppercase"
        >
          Hole dön
        </Link>
      </main>
    </HallShell>
  );
}
