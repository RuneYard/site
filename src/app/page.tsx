import Link from "next/link";
import { HallShell } from "@/components/hall-shell";
import { HearthAsk } from "@/components/hearth-ask";
import { PortraitMark } from "@/components/portrait-mark";

const openDoors = [
  {
    href: "/runler",
    title: "Rünler",
    line: "Kısa karşılıklar burada birikecek.",
    edge: "bg-green",
  },
  {
    href: "/egitim",
    title: "Eğitim",
    line: "Gün belli olunca bu satır dolacak.",
    edge: "bg-blue",
  },
  {
    href: "/astroloji",
    title: "Astroloji",
    line: "Yazı bitince burada duracak.",
    edge: "bg-violet",
  },
] as const;

const closedDoors = [
  "Şaman",
  "Kelt",
  "Mezopotamya",
  "Witchcraft",
  "Uygulamalar",
  "Shop",
] as const;

export default function Home() {
  return (
    <HallShell>
      <section className="flex min-h-[calc(100svh-64px)] items-center px-6 py-16 sm:px-8">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h1 className="font-display text-5xl leading-[1.05] font-semibold tracking-[0.03em] sm:text-7xl">
              Mehmet Akdeniz
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-iron">
              Merak eden de, derse gelen de bu holdan girer.
            </p>
          </div>
          <PortraitMark />
        </div>
      </section>

      <main id="icerik" className="px-6 pt-8 pb-16 sm:px-8">
        <div className="mx-auto w-full max-w-[1600px]">
          <h2 className="mb-4 font-display text-2xl font-semibold tracking-[0.06em]">Hol</h2>
          <ul className="grid gap-3.5 sm:grid-cols-3">
            {openDoors.map((door) => (
              <li key={door.href}>
                <Link
                  href={door.href}
                  className="flex min-h-52 flex-col justify-between border border-iron/25 bg-paper px-5 py-5 hover:border-iron"
                >
                  <span className={`block h-0.5 w-10 ${door.edge}`} />
                  <span>
                    <span className="block font-display text-3xl font-semibold tracking-[0.04em]">
                      {door.title}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-iron">{door.line}</span>
                  </span>
                  <span className="text-[10px] tracking-[0.18em] text-iron uppercase">Açık</span>
                </Link>
              </li>
            ))}
          </ul>

          <section id="ocak" className="relative mt-3.5 overflow-hidden bg-ink px-6 py-8 sm:px-8">
            <div className="aurora-line absolute inset-x-0 top-0 h-0.5" aria-hidden />
            <HearthAsk />
          </section>

          <ul className="mt-3.5 grid gap-3.5 sm:grid-cols-3">
            {closedDoors.map((name) => (
              <li key={name}>
                <div
                  aria-disabled="true"
                  className="flex min-h-52 flex-col justify-between border border-iron/15 bg-snow px-5 py-5 text-iron/70"
                >
                  <span className="block h-0.5 w-10 bg-iron/20" />
                  <span className="font-display text-3xl font-semibold tracking-[0.04em]">
                    {name}
                  </span>
                  <span className="text-[10px] tracking-[0.18em] uppercase">Kapalı</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </HallShell>
  );
}
