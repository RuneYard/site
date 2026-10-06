import { HearthAsk } from "@/components/hearth-ask";
import { HouseMark } from "@/components/house-mark";
import { HungWall } from "@/components/hung-wall";
import { NorthWindow } from "@/components/north-window";

const hangs = [
  { href: "#tas", label: "Taş" },
  { href: "#duyuru", label: "Duyuru" },
  { href: "#gok", label: "Gökyüzü" },
] as const;

export default function Home() {
  return (
    <>
      <a
        href="#duvar"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
      >
        Duvardaki eşyalara geç
      </a>

      <header className="wall relative flex min-h-svh flex-col">
        <div className="relative flex-1">
        <div className="px-5 pt-5 md:px-8 lg:absolute lg:top-8 lg:left-8 lg:w-[min(32vw,380px)] lg:px-0 lg:pt-0">
          <NorthWindow />
        </div>

        <div className="relative z-10 flex flex-col justify-end px-5 pt-8 pb-8 md:px-10 lg:ml-[36vw] lg:h-full lg:max-w-2xl lg:justify-center lg:px-12 lg:py-8">
          <a href="#oda" className="inline-flex items-center gap-3 text-bone" aria-label="RuneYard">
            <HouseMark className="size-9 text-ember" />
            <span className="font-display text-xs tracking-[0.28em] text-bone lowercase">
              runeyard.com
            </span>
          </a>
          <h1
            id="oda"
            className="mt-6 font-display text-[4.2rem] leading-[0.86] font-light text-bone sm:text-8xl"
          >
            Kış <em className="font-light italic">odası</em>
          </h1>
          <p className="mt-6 font-display text-2xl text-bone sm:text-3xl">
            Mehmet Akdeniz
          </p>
          <p className="mt-5 max-w-md text-lg leading-8 text-ash">
            Kapıdan girince üç şey asılı: bir taş, bir duyuru kâğıdı, bir gök
            tabağı. Ocağa bir rün ya da gökyüzü sorusu bırakabilirsin.
          </p>
          <nav aria-label="Duvardaki üç eşya" className="mt-8 flex gap-6">
            {hangs.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display text-sm tracking-[0.22em] text-bone uppercase underline decoration-ember/70 decoration-1 underline-offset-8 hover:text-ember focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        </div>

        <div className="hearth pointer-events-none absolute inset-x-0 bottom-24 h-28" aria-hidden />
        <HearthAsk />
      </header>

      <main id="duvar">
        <HungWall />
      </main>
    </>
  );
}
