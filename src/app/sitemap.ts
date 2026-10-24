import type { MetadataRoute } from "next";
import { apps } from "@/content/apps";
import { astrologyDoors } from "@/content/astrology";
import { educationCourses } from "@/content/education";
import { runes } from "@/content/runes";
import { shopProducts } from "@/content/shop";
import { extraSkyNotes } from "@/content/sky-notes";
import { traditions } from "@/content/traditions";

const BASE = "https://www.runeyard.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/runler",
    "/egitim",
    "/astroloji",
    "/astroloji/venus-retrosu",
    "/astroloji/terazi-yeniay",
    "/astroloji/boga-dolunayi",
    "/uygulamalar",
    "/saman",
    "/kelt",
    "/mezopotamya",
    "/witchcraft",
    "/shop",
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.9,
  }));

  for (const note of extraSkyNotes) {
    entries.push({
      url: `${BASE}/astroloji/${note.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  for (const rune of runes) {
    entries.push({
      url: `${BASE}/runler/${rune.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const course of educationCourses) {
    entries.push({
      url: `${BASE}/egitim/${course.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  }

  for (const door of astrologyDoors) {
    entries.push({
      url: `${BASE}/astroloji/${door.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const app of apps) {
    entries.push({
      url: `${BASE}/uygulamalar/${app.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const tKey of ["saman", "kelt", "mezopotamya", "witchcraft"] as const) {
    for (const door of traditions[tKey].doors) {
      entries.push({
        url: `${BASE}/${tKey}/${door.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  for (const product of shopProducts) {
    entries.push({
      url: `${BASE}/shop/${product.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  }

  return entries;
}
