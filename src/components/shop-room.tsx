"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HallShell } from "@/components/hall-shell";
import { useLanguage } from "@/components/language";
import { ShareBar } from "@/components/share-bar";
import {
  getShopProduct,
  shopHall,
  shopProducts,
  type ShopCategory,
} from "@/content/shop";

const categoryOrder: ShopCategory[] = [
  "all",
  "ebook",
  "oils",
  "elixirs",
  "salts",
  "consultations",
];

export function ShopRoom() {
  const { lang, t } = useLanguage();
  const ui = shopHall.ui[lang];
  const cats = shopHall.categories[lang];

  const [activeCategory, setActiveCategory] = useState<ShopCategory>("all");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null
  );

  const ebookProduct = shopProducts[0];
  const filteredProducts =
    activeCategory === "all"
      ? shopProducts
      : shopProducts.filter((p) => p.category === activeCategory);

  return (
    <HallShell>
      <main
        id="icerik"
        className="mx-auto min-h-[70vh] w-full max-w-5xl px-4 py-12 sm:px-8 sm:py-16"
      >
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">
          runeyard.net · shopier
        </p>

        <header className="mt-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 border border-amber/40 bg-amber/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-amber">
              ✦ {ui.secureBadge}
            </span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-[-0.025em] text-chalk sm:text-6xl">
            {shopHall.title[lang]}
          </h1>
          <p className="mt-3 font-display text-lg text-amber/90 sm:text-2xl">
            {shopHall.subtitle[lang]}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-chalk/78">
            {shopHall.intro[lang]}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={shopHall.shopierStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#d4a857] bg-[#d4a857]/18 px-4 py-2.5 text-xs font-medium tracking-[0.2em] text-[#f0d493] uppercase transition hover:bg-[#d4a857] hover:text-[#141a1c]"
            >
              <span>{ui.openStore}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </header>

        {/* Hall Banner */}
        <figure className="mt-8 overflow-hidden border border-chalk/12 bg-ink/60">
          <button
            type="button"
            onClick={() =>
              setLightbox({
                src: shopHall.image,
                alt: shopHall.title[lang],
              })
            }
            className="group relative block w-full text-left cursor-zoom-in"
          >
            <Image
              src={shopHall.image}
              alt={shopHall.title[lang]}
              width={1200}
              height={420}
              priority
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </button>
        </figure>

        {/* Featured e-Book Spotlight */}
        {ebookProduct &&
          (activeCategory === "all" || activeCategory === "ebook") && (
            <section
              aria-label={ebookProduct.title[lang]}
              className="mt-10 border border-amber/45 bg-soot/65 p-5 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-center">
                <div className="lg:col-span-5">
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox({
                        src: ebookProduct.image,
                        alt: ebookProduct.title[lang],
                      })
                    }
                    className="group relative block w-full overflow-hidden border border-chalk/15 bg-ink cursor-zoom-in"
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={ebookProduct.image}
                        alt={ebookProduct.title[lang]}
                        fill
                        sizes="(max-width: 1024px) 100vw, 460px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    {ebookProduct.discountBadge && (
                      <span className="absolute top-3 left-3 bg-amber px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink">
                        {ebookProduct.discountBadge[lang]}
                      </span>
                    )}
                  </button>
                </div>

                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-amber">
                    <span>{ebookProduct.glyph}</span>
                    <span>·</span>
                    <span>{ebookProduct.volume[lang]}</span>
                  </div>
                  <h2 className="mt-2 font-display text-2xl sm:text-3xl text-chalk">
                    <Link
                      href={`/shop/${ebookProduct.slug}`}
                      className="hover:text-amber transition-colors"
                    >
                      {ebookProduct.title[lang]}
                    </Link>
                  </h2>
                  <p className="mt-1 font-display text-base text-amber/85">
                    {ebookProduct.subtitle[lang]}
                  </p>
                  <p className="mt-3 text-sm sm:text-[15px] leading-7 text-chalk/80">
                    {ebookProduct.summary[lang]}
                  </p>

                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-chalk/70">
                    {ebookProduct.features[lang].slice(0, 4).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber mt-0.5">✦</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-chalk/12 pt-5">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-3xl text-chalk">
                        {ebookProduct.price}
                      </span>
                      {ebookProduct.oldPrice && (
                        <span className="text-sm text-chalk/45 line-through">
                          {ebookProduct.oldPrice}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        href={`/shop/${ebookProduct.slug}`}
                        className="border border-chalk/25 bg-ink/70 px-4 py-2.5 text-xs uppercase tracking-[0.2em] text-chalk/85 hover:border-amber/60 hover:text-amber transition-colors"
                      >
                        {ui.inspectProduct}
                      </Link>
                      <a
                        href={ebookProduct.shopierUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#e5be73] bg-[#d4a857] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#141a1c] shadow-[0_2px_14px_rgba(212,168,87,0.3)] hover:bg-[#e5be73] transition-colors"
                      >
                        {ui.buyShopier}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Shop categories"
          className="mt-10 mb-8 flex flex-wrap items-center gap-2 border-b border-chalk/12 pb-4"
        >
          {categoryOrder.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors ${
                  isSelected
                    ? "border border-amber bg-amber text-ink font-semibold"
                    : "border border-chalk/15 bg-soot/40 text-chalk/70 hover:border-amber/50 hover:text-chalk"
                }`}
              >
                {cats[cat]}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <section
          aria-label="Products"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProducts.map((product) => (
            <article
              key={product.slug}
              className="group flex flex-col justify-between overflow-hidden border border-chalk/12 bg-soot/45 transition hover:border-amber/55"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-chalk/10 bg-ink">
                  <Link
                    href={`/shop/${product.slug}`}
                    className="block h-full w-full"
                  >
                    <Image
                      src={product.image}
                      alt={product.title[lang]}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </Link>
                  <span className="pointer-events-none absolute top-3 right-3 border border-chalk/20 bg-ink/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-amber">
                    {product.volume[lang]}
                  </span>
                  {product.discountBadge && (
                    <span className="pointer-events-none absolute top-3 left-3 bg-amber px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink">
                      {product.discountBadge[lang]}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-2 text-xs text-chalk/55">
                    <span className="font-display text-lg text-amber">
                      {product.glyph}
                    </span>
                    <span className="uppercase tracking-[0.18em] text-[10px]">
                      {cats[product.category]}
                    </span>
                  </div>

                  <h3 className="mt-2 font-display text-2xl text-chalk group-hover:text-amber transition-colors">
                    <Link href={`/shop/${product.slug}`}>
                      {product.title[lang]}
                    </Link>
                  </h3>

                  <p className="mt-1 font-display text-sm text-amber/80">
                    {product.subtitle[lang]}
                  </p>

                  <p className="mt-3 text-xs sm:text-[13px] leading-6 text-chalk/72 line-clamp-3">
                    {product.summary[lang]}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-chalk/10 flex flex-col gap-3">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-2xl text-chalk">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-xs text-chalk/45 line-through">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-chalk/50">
                    Shopier
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <Link
                    href={`/shop/${product.slug}`}
                    className="flex items-center justify-center border border-chalk/20 bg-ink/60 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-chalk/85 hover:border-amber/60 hover:text-amber transition-colors text-center"
                  >
                    {ui.inspectProduct}
                  </Link>
                  <a
                    href={product.shopierUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center border border-[#e5be73] bg-[#d4a857] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#141a1c] shadow-[0_2px_12px_rgba(212,168,87,0.28)] hover:bg-[#e5be73] transition-colors text-center"
                  >
                    {ui.buyShopier}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* General Medical & Legal Notice at Bottom of Shop */}
        <aside className="mt-12 border border-amber/35 bg-amber/[0.04] p-5 sm:p-6">
          <div className="flex items-center gap-2 text-amber">
            <span aria-hidden="true" className="text-base">
              ⚕
            </span>
            <p className="text-[11px] font-medium tracking-[0.22em] uppercase">
              {ui.safetyHeading}
            </p>
          </div>
          <p className="mt-2 text-xs leading-6 text-chalk/75 sm:text-sm">
            {lang === "tr" &&
              "RuneYard Atölye’de sunulan bitkisel yağlar, iksirler ve tuz karışımları geleneksel ritüel, meditasyon, aromaterapi ve mekan enerjisi çalışmaları için haricen (dıştan) kullanım amacıyla üretilmiştir. İlaç değildir; ağız yoluyla tüketilmez, göze temas ettirilmez ve hiçbir tıbbi hastalığın teşhis veya tedavisi yerine geçmez. Tüm ödemeleriniz Shopier güvenli ödeme altyapısı üzerinden gerçekleştirilir."}
            {lang === "en" &&
              "All botanical oils, elixirs, and salt blends offered in the RuneYard Workshop are crafted strictly for external ritual, meditation, aromatherapy, and space-clearing practices. They are not medicines, must not be ingested, and do not replace medical diagnosis or treatment. All payments are processed securely through Shopier."}
            {lang === "sv" &&
              "Alla botaniska oljor, elixir och saltblandningar i RuneYard Ateljén är uteslutande avsedda för utvärtes rituellt bruk, meditation och aromaterapi. De är inte läkemedel, får ej förtäras och ersätter inte medicinsk diagnos eller behandling. Alla betalningar hanteras säkert via Shopier."}
          </p>
        </aside>

        <div className="mt-8">
          <ShareBar title={shopHall.title[lang]} />
        </div>

        <div className="mt-12 border-t border-chalk/12 pt-6">
          <Link
            href="/"
            className="text-xs tracking-[0.2em] text-chalk/65 uppercase hover:text-amber"
          >
            ← {t.back}
          </Link>
        </div>
      </main>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink/95 p-3 sm:p-8 backdrop-blur-md cursor-zoom-out"
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden border border-amber/40 bg-soot shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-chalk/15 px-4 py-3">
              <p className="truncate font-display text-sm text-chalk sm:text-base">
                {lightbox.alt}
              </p>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="border border-chalk/25 px-3 py-1 text-[11px] tracking-[0.18em] text-amber uppercase hover:border-amber"
              >
                ✕
              </button>
            </div>
            <div className="relative max-h-[78vh] w-full overflow-auto p-2 sm:p-4">
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1200}
                height={900}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </HallShell>
  );
}

export function ShopProductDoor({ slug }: { slug: string }) {
  const { lang, t } = useLanguage();
  const ui = shopHall.ui[lang];
  const cats = shopHall.categories[lang];

  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null
  );

  const product = getShopProduct(slug);
  if (!product) return null;

  const currentIndex = shopProducts.findIndex((p) => p.slug === product.slug);
  const prevProduct = currentIndex > 0 ? shopProducts[currentIndex - 1] : null;
  const nextProduct =
    currentIndex >= 0 && currentIndex < shopProducts.length - 1
      ? shopProducts[currentIndex + 1]
      : null;

  return (
    <HallShell>
      <main
        id="icerik"
        className="mx-auto min-h-[70vh] w-full max-w-4xl px-4 py-12 sm:px-8 sm:py-16"
      >
        <p className="text-[10px] tracking-[0.22em] text-chalk/60 uppercase">
          <Link href="/shop" className="hover:text-amber">
            {shopHall.title[lang]}
          </Link>{" "}
          · {product.glyph}
        </p>

        {/* Product Hero */}
        <section className="mt-6 grid grid-cols-1 gap-8 border-b border-chalk/12 pb-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-6">
            <button
              type="button"
              onClick={() =>
                setLightbox({
                  src: product.image,
                  alt: product.title[lang],
                })
              }
              className="group relative block w-full overflow-hidden border border-chalk/15 bg-ink cursor-zoom-in"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={product.image}
                  alt={product.title[lang]}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              {product.discountBadge && (
                <span className="absolute top-3 left-3 bg-amber px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink">
                  {product.discountBadge[lang]}
                </span>
              )}
              <span className="absolute bottom-3 right-3 border border-amber/40 bg-ink/85 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-amber">
                🔍
              </span>
            </button>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber">
                <span className="text-base">{product.glyph}</span>
                <span>·</span>
                <span>{cats[product.category]}</span>
                <span>·</span>
                <span className="border border-chalk/20 bg-soot/60 px-2.5 py-0.5 text-[10px] text-chalk/85">
                  {product.volume[lang]}
                </span>
              </div>

              <h1 className="mt-3 font-display text-3xl font-medium tracking-[-0.02em] text-chalk sm:text-4xl">
                {product.title[lang]}
              </h1>

              <p className="mt-1.5 font-display text-lg text-amber/90">
                {product.subtitle[lang]}
              </p>

              <div className="mt-5 flex items-baseline gap-3">
                <span className="font-display text-3xl sm:text-4xl text-chalk">
                  {product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-base text-chalk/45 line-through">
                    {product.oldPrice}
                  </span>
                )}
              </div>

              <p className="mt-4 text-sm sm:text-base leading-7 text-chalk/82">
                {product.summary[lang]}
              </p>
            </div>

            <div className="mt-6 space-y-3 border-t border-chalk/12 pt-5">
              <a
                href={product.shopierUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 border border-[#e5be73] bg-[#d4a857] px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#141a1c] shadow-[0_4px_20px_rgba(212,168,87,0.35)] hover:bg-[#e5be73] transition-colors"
              >
                <span>{ui.buyShopier}</span>
              </a>
              <p className="text-center text-[11px] uppercase tracking-[0.18em] text-chalk/70">
                ✦ {ui.secureBadge}
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Paragraphs */}
        <article className="mt-8 space-y-5 text-base leading-8 text-chalk/85">
          {product.paragraphs[lang].map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </article>

        {/* Features & Step-by-Step Usage Guide */}
        <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="border border-chalk/12 bg-soot/45 p-5 sm:p-6">
            <h2 className="font-display text-xl text-chalk border-b border-chalk/12 pb-3">
              ✦ {ui.featuresHeading}
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-chalk/80">
              {product.features[lang].map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-amber mt-0.5 shrink-0">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-chalk/12 bg-soot/45 p-5 sm:p-6">
            <h2 className="font-display text-xl text-chalk border-b border-chalk/12 pb-3">
              🕯 {ui.usageHeading}
            </h2>
            <ol className="mt-4 space-y-3.5 text-sm leading-6 text-chalk/80">
              {product.usageSteps[lang].map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center border border-amber/50 bg-amber/10 text-[11px] font-display text-amber mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Spiritual Intention Box */}
        {product.intention && (
          <section className="mt-8 border border-amber/40 bg-soot/60 p-5 sm:p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-amber">
              ✦ {ui.intentionHeading}
            </p>
            <blockquote className="mt-2 font-display text-xl text-chalk leading-relaxed">
              “{product.intention[lang]}”
            </blockquote>
          </section>
        )}

        {/* Mandatory Safety / Medical Disclaimer */}
        <aside className="mt-8 border border-amber/35 bg-amber/[0.04] p-5 sm:p-6">
          <div className="flex items-center gap-2 text-amber">
            <span aria-hidden="true" className="text-base">
              ⚕
            </span>
            <p className="text-[11px] font-medium tracking-[0.22em] uppercase">
              {ui.safetyHeading}
            </p>
          </div>
          <p className="mt-2 text-xs leading-6 text-chalk/75 sm:text-sm">
            {product.safetyNote[lang]}
          </p>
        </aside>

        {/* Bottom Direct Shopier Purchase Box */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border border-amber/40 bg-soot/50 p-5 sm:p-6">
          <div>
            <p className="font-display text-xl text-chalk">
              {product.title[lang]} —{" "}
              <span className="text-amber">{product.price}</span>
            </p>
            <p className="mt-1 text-xs text-chalk/60">{ui.secureBadge}</p>
          </div>
          <a
            href={product.shopierUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center border border-[#e5be73] bg-[#d4a857] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#141a1c] shadow-[0_3px_16px_rgba(212,168,87,0.32)] hover:bg-[#e5be73] transition-colors"
          >
            {ui.buyShopier}
          </a>
        </div>

        <div className="mt-8">
          <ShareBar title={`${product.title[lang]} · RuneYard Shop`} />
        </div>

        {/* Prev / Next Product Navigation */}
        <nav
          aria-label="Product navigation"
          className="mt-10 grid grid-cols-1 gap-3 border-t border-chalk/12 pt-8 sm:grid-cols-2"
        >
          {prevProduct ? (
            <Link
              href={`/shop/${prevProduct.slug}`}
              className="group flex flex-col justify-between border border-chalk/14 bg-soot/40 p-4 transition hover:border-amber/45"
            >
              <span className="text-[10px] tracking-[0.22em] text-chalk/55 uppercase">
                {ui.prevProduct}
              </span>
              <span className="mt-1.5 font-display text-lg text-chalk group-hover:text-amber">
                {prevProduct.title[lang]}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextProduct ? (
            <Link
              href={`/shop/${nextProduct.slug}`}
              className="group flex flex-col justify-between border border-chalk/14 bg-soot/40 p-4 text-right transition hover:border-amber/45"
            >
              <span className="text-[10px] tracking-[0.22em] text-chalk/55 uppercase">
                {ui.nextProduct}
              </span>
              <span className="mt-1.5 font-display text-lg text-chalk group-hover:text-amber">
                {nextProduct.title[lang]}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>

        <div className="mt-8 flex flex-wrap gap-6 border-t border-chalk/12 pt-6 text-xs tracking-[0.2em] text-chalk/65 uppercase">
          <Link href="/shop" className="hover:text-amber">
            {ui.backToShop}
          </Link>
          <Link href="/" className="hover:text-amber">
            ← {t.back}
          </Link>
        </div>
      </main>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink/95 p-3 sm:p-8 backdrop-blur-md cursor-zoom-out"
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden border border-amber/40 bg-soot shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-chalk/15 px-4 py-3">
              <p className="truncate font-display text-sm text-chalk sm:text-base">
                {lightbox.alt}
              </p>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="border border-chalk/25 px-3 py-1 text-[11px] tracking-[0.18em] text-amber uppercase hover:border-amber"
              >
                ✕
              </button>
            </div>
            <div className="relative max-h-[78vh] w-full overflow-auto p-2 sm:p-4">
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1200}
                height={900}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </HallShell>
  );
}
