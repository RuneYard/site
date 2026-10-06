import { HearthAsk } from "@/components/hearth-ask";

const places = [
  {
    id: "tas",
    kicker: "Taş",
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

export default function Home() {
  return (
    <div className="hall relative">
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-bone focus:px-3 focus:py-2 focus:text-ink"
      >
        İçeriğe geç
      </a>

      <header className="relative flex min-h-svh flex-col">
        <div className="north-light" aria-hidden />
        <div className="hearth-glow" aria-hidden />
        <div className="relative z-10 mx-auto flex w-full max-w-xl flex-1 flex-col justify-between px-6 py-8">
          <p className="font-display text-xs tracking-[0.28em] text-lichen lowercase">
            runeyard.com
          </p>
          <div>
            <h1
              id="oda"
              className="font-display text-6xl leading-[0.9] font-light text-bone sm:text-8xl"
            >
              Kış odası
            </h1>
            <p className="mt-5 font-display text-3xl text-bone">Mehmet Akdeniz</p>
            <p className="mt-6 max-w-md text-lg leading-8 text-ash">
              Karanlık bir kuzey odası. Rün notu, ders duyurusu ve gökyüzü yazısı
              ocak başında durur.
            </p>
          </div>
          <HearthAsk />
        </div>
      </header>

      <main id="icerik" className="relative z-10 mx-auto w-full max-w-xl px-6 pb-24">
        <ul>
          {places.map((place) => (
            <li key={place.id} id={place.id} className="border-t border-bone/15 py-12">
              <p className="font-display text-xs tracking-[0.28em] text-lichen uppercase">
                {place.kicker}
              </p>
              <h2 className="mt-3 font-display text-4xl leading-none text-bone">
                {place.title}
              </h2>
              <p className="mt-4 max-w-md leading-8 text-ash">{place.text}</p>
            </li>
          ))}
        </ul>
        <p className="border-t border-bone/15 pt-10 text-lg leading-8 text-bone">
          Ben Mehmet Akdeniz. RuneYard bu odanın adı.
        </p>
      </main>
    </div>
  );
}
