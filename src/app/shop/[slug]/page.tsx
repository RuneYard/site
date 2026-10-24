import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShopProductDoor } from "@/components/shop-room";
import { getShopProduct, shopProducts } from "@/content/shop";

export function generateStaticParams() {
  return shopProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getShopProduct(slug);
  if (!product) {
    return { title: "Shop — RuneYard" };
  }

  return {
    title: `${product.title.tr} (${product.price}) — RuneYard Shop`,
    description: product.summary.tr,
    alternates: {
      canonical: `https://runeyard.net/shop/${product.slug}`,
    },
    openGraph: {
      title: `${product.title.tr} — RuneYard Shop`,
      description: product.summary.tr,
      url: `https://runeyard.net/shop/${product.slug}`,
      images: [{ url: product.image, width: 800, height: 600 }],
    },
  };
}

export default async function ShopProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getShopProduct(slug);
  if (!product) {
    notFound();
  }

  const numericPrice = product.price
    .replace(/[^\d]/g, "")
    .trim();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title.tr,
    description: product.summary.tr,
    image: `https://runeyard.net${product.image}`,
    brand: {
      "@type": "Brand",
      name: "RuneYard",
    },
    offers: {
      "@type": "Offer",
      url: product.shopierUrl,
      priceCurrency: "TRY",
      price: numericPrice,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ShopProductDoor slug={slug} />
    </>
  );
}
