import { HearthAsk } from "@/components/hearth-ask";

const places = [
  {
    id: "tas",
    kicker: "Not",
    title: "Rün notları",
    text: "Uruz: beden, direnç, ham güç. Kısa karşılıklar burada birikecek.",
  },
  {
    id: "duyuru",
    kicker: "Duyuru",
    title: "Rün alfabesine giriş",
    text: "Yirmi dört işaret. Ses, ad, ve bir kelimenin nasıl okunduğu. Gün belli olunca bu satır dolacak.",
  },
  {
    id: "gok",
    kicker: "Gökyüzü",
    title: "Ekinoks",
    text: "Gündüz ile gecenin eşitlendiği gün. Yazı bitince burada duracak.",
  },
] as const;

const nav = [
  { href: "#tas", label: "Rün" },
  { href: "#duyuru", label: "Duyuru" },
  { href: "#gok", label: "Gökyüzü" },
  { href: "#ocak", label: "Ocak" },
] as const;

export default function Home() {
  return (
    <div className="bg-cream text-ink">
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-cream focus:px-3 focus:py-2 focus:text-ink"
      >
        İçeriğe geç
      </a>

      <header className="bg-ink px-6 py-3.5 sm:px-8">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <a href="#oda" className="flex flex-col">
            <span className="font-display text-[22px] leading-none font-semibold tracking-[0.06em] text-gold-light">
              Mehmet Akdeniz
            </span>
            <span className="mt-1 text-[10px] tracking-[0.22em] text-[#aaa] uppercase">
              runeyard.net
            </span>
          </a>
          <nav className="flex flex-wrap items-center gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2.5 py-1.5 text-[13px] tracking-[0.12em] text-[#bbb] uppercase hover:text-gold-light"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="oda" className="relative flex min-h-[calc(100svh-72px)] items-center px-6 py-16 sm:px-8">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start justify-between gap-16 lg:flex-row lg:items-center">
          <div className="max-w-[580px]">
            <h1 className="font-display text-5xl leading-[1.12] font-bold tracking-[0.04em] text-ink sm:text-[52px]">
              Kış odası
            </h1>
            <p className="mt-[18px] max-w-[520px] text-[15px] leading-[1.8] text-mist">
              Karanlık bir kuzey odası. Rün notu, ders duyurusu ve gökyüzü yazısı
              ocak başında durur.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#icerik"
                className="rounded-lg bg-ink px-9 py-3 font-display text-[15px] font-semibold tracking-[0.14em] text-gold-light uppercase"
              >
                Notlar
              </a>
              <a
                href="#ocak"
                className="rounded-lg border-[1.5px] border-ink px-9 py-3 font-display text-[15px] font-semibold tracking-[0.14em] text-ink uppercase hover:bg-ink hover:text-gold-light"
              >
                Ocağa sor
              </a>
            </div>
          </div>
          <ul className="font-display text-3xl leading-tight font-semibold tracking-[0.06em] text-gold sm:text-4xl">
            <li>Rün notları</li>
            <li className="mt-3">Ders duyurusu</li>
            <li className="mt-3">Gökyüzü yazısı</li>
          </ul>
        </div>
        <a
          href="#icerik"
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5"
        >
          <span className="font-display text-[13px] font-semibold tracking-[0.2em] text-gold uppercase">
            Keşfet
          </span>
          <span
            aria-hidden
            className="mt-1 block h-3 w-3 rotate-45 border-r-[1.5px] border-b-[1.5px] border-gold"
          />
        </a>
      </section>

      <main id="icerik" className="px-6 pt-12 pb-8 sm:px-8">
        <div className="mx-auto w-full max-w-[1600px]">
          <h2 className="mb-4 font-display text-2xl font-semibold tracking-[0.06em]">
            Odada
          </h2>
          <ul className="grid gap-3.5 md:grid-cols-3">
            {places.map((place) => (
              <li key={place.id} id={place.id}>
                <article className="flex h-full flex-col rounded-xl border border-line bg-warm px-[18px] py-5">
                  <p className="mb-2 inline-flex w-fit rounded-full bg-ink px-2.5 py-0.5 text-xs tracking-[0.1em] text-gold-light uppercase">
                    {place.kicker}
                  </p>
                  <h3 className="font-display text-[26px] leading-none font-bold tracking-[0.06em]">
                    {place.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.7] text-mist">{place.text}</p>
                </article>
              </li>
            ))}
          </ul>

          <section id="ocak" className="mt-4 rounded-[10px] bg-ink px-6 py-7 text-center sm:px-8">
            <HearthAsk />
          </section>
        </div>
      </main>

      <footer className="bg-ink px-8 py-3 text-center text-[10px] tracking-[0.1em] text-[#9a948c]">
        Mehmet Akdeniz · runeyard.net
      </footer>
    </div>
  );
}
