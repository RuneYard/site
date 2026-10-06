import { HouseMark } from "@/components/house-mark";

function Nail({ drop }: { drop: string }) {
  return (
    <div className="flex flex-col items-center" style={{ paddingTop: drop }}>
      <span className="size-2 rounded-full bg-bark" aria-hidden />
      <span className="string block h-10" aria-hidden />
    </div>
  );
}

export function HungWall() {
  return (
    <section
      aria-label="Duvarda asılı olanlar"
      className="wall border-t border-bone/10 px-5 py-16 md:px-10 md:py-24"
    >
      <p className="font-display text-sm tracking-[0.28em] text-ash uppercase">
        Aynı duvar
      </p>
      <h2 className="mt-3 max-w-xl font-display text-4xl leading-none text-bone md:text-6xl">
        Taş, kâğıt, gök tabağı.
      </h2>

      <ul className="mt-14 grid items-start gap-16 md:grid-cols-3 md:gap-8">
        <li className="hung" id="tas">
          <Nail drop="0px" />
          <a
            href="#tas-not"
            className="object group block scroll-mt-8 focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-ember"
          >
            <svg viewBox="0 0 220 280" className="mx-auto w-[min(100%,240px)]" aria-hidden>
              <path
                d="M48 28c28-18 92-16 128 14 28 24 36 78 28 124-8 48-36 92-78 100-46 8-96-10-112-52C-2 154 8 58 48 28z"
                fill="#2a261f"
                stroke="#6a5e50"
              />
              <path
                d="M70 70c18-8 58-6 78 12"
                stroke="#8a7b68"
                strokeWidth="1"
                fill="none"
              />
              <text
                x="110"
                y="168"
                textAnchor="middle"
                fill="#f3eadc"
                fontSize="78"
                fontFamily="var(--font-runic), sans-serif"
              >
                ᚢ
              </text>
            </svg>
            <p className="mt-4 text-center font-display text-xs tracking-[0.32em] text-lichen uppercase">
              Taş · rün
            </p>
            <h3
              id="tas-not"
              className="mt-3 text-center font-display text-3xl text-bone"
            >
              Uruz
            </h3>
            <p className="mx-auto mt-3 max-w-xs text-center text-ash">
              Beden, direnç, ham güç. Rün notları bu taşın çevresinde birikecek.
            </p>
          </a>
        </li>

        <li className="hung md:mt-16" id="duyuru">
          <Nail drop="12px" />
          <a
            href="#duyuru-not"
            className="object group mx-auto block w-[min(100%,280px)] scroll-mt-8 -rotate-1 focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-ember"
          >
            <article className="relative bg-paper px-6 pt-8 pb-7 text-ink shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
              <span
                className="absolute -top-3 left-1/2 size-5 -translate-x-1/2 rounded-full bg-ember shadow-[0_0_0_4px_rgba(224,122,61,0.25)]"
                aria-hidden
              />
              <p className="font-display text-[0.68rem] tracking-[0.28em] uppercase">
                Duyuru
              </p>
              <h3 id="duyuru-not" className="mt-4 font-display text-3xl leading-none">
                Rün alfabesine giriş
              </h3>
              <p className="mt-4 text-[0.95rem] leading-7">
                Elder Futhark’ın yirmi dört işareti. Ses, ad, ve bir kelimenin
                nasıl okunduğu. Gün belli olunca bu kâğıda işlenecek.
              </p>
            </article>
            <p className="mt-4 text-center font-display text-xs tracking-[0.32em] text-lichen uppercase">
              Kâğıt · ders
            </p>
          </a>
        </li>

        <li className="hung md:mt-6" id="gok">
          <Nail drop="4px" />
          <a
            href="#gok-not"
            className="object group block scroll-mt-8 focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-ember"
          >
            <svg
              viewBox="0 0 260 260"
              className="mx-auto w-[min(100%,250px)]"
              aria-hidden
            >
              <circle cx="130" cy="130" r="124" fill="#1c1915" stroke="#6a5e50" />
              <circle cx="130" cy="130" r="96" fill="none" stroke="#8a7b68" strokeWidth="0.6" />
              <circle cx="130" cy="130" r="62" fill="none" stroke="#8a7b68" strokeWidth="0.6" />
              <path d="M130 18v224M18 130h224" stroke="#4a4036" strokeWidth="0.8" />
              <circle cx="130" cy="42" r="3.2" fill="#f3eadc" />
              <circle cx="176" cy="78" r="1.8" fill="#e07a3d" />
              <circle cx="92" cy="104" r="1.6" fill="#f3eadc" />
              <circle cx="168" cy="156" r="1.6" fill="#f3eadc" />
              <circle cx="108" cy="176" r="2" fill="#9aada8" />
              <text
                x="130"
                y="36"
                textAnchor="middle"
                fill="#9aada8"
                fontSize="11"
                fontFamily="var(--font-display), serif"
              >
                K
              </text>
            </svg>
            <p className="mt-4 text-center font-display text-xs tracking-[0.32em] text-lichen uppercase">
              Tabak · gökyüzü
            </p>
            <h3
              id="gok-not"
              className="mt-3 text-center font-display text-3xl text-bone"
            >
              Ekinoks notu
            </h3>
            <p className="mx-auto mt-3 max-w-xs text-center text-ash">
              Gündüz ile gecenin eşitlendiği gün. Yazı bitince bu tabağın altında
              duracak.
            </p>
          </a>
        </li>
      </ul>

      <div className="mx-auto mt-20 flex max-w-2xl gap-5 border-t border-bone/15 pt-8">
        <HouseMark className="mt-1 size-12 shrink-0 text-ember" />
        <p className="text-lg leading-8 text-bone">
          Ben Mehmet Akdeniz. RuneYard bu odanın adı. Rün notu, ders duyurusu ve
          gökyüzü yazısı aynı duvarda durur. Ocak yanınca burası dolar.
        </p>
      </div>
    </section>
  );
}
