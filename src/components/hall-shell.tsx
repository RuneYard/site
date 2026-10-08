import Link from "next/link";

const nav = [
  { href: "/runler", label: "Rünler" },
  { href: "/egitim", label: "Eğitim" },
  { href: "/astroloji", label: "Astroloji" },
  { href: "/#ocak", label: "Ocak" },
] as const;

export function HallShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-snow text-ink">
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-snow focus:px-3 focus:py-2 focus:text-ink"
      >
        İçeriğe geç
      </a>
      <header className="bg-ink px-6 py-3.5 sm:px-8">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <Link href="/" className="flex flex-col">
            <span className="font-display text-[22px] leading-none font-semibold tracking-[0.06em] text-snow">
              Mehmet Akdeniz
            </span>
            <span className="mt-1 text-[10px] tracking-[0.22em] text-snow/60 uppercase">
              runeyard.net
            </span>
          </Link>
          <nav className="flex flex-wrap items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-2.5 py-1.5 text-[13px] tracking-[0.12em] text-snow/70 uppercase hover:text-snow"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      {children}
      <footer className="bg-ink px-8 py-3 text-center text-[10px] tracking-[0.1em] text-snow/55">
        Mehmet Akdeniz · runeyard.net
      </footer>
    </div>
  );
}
