"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language";
import { SealCardGenerator } from "@/components/seal-card-generator";
import type { Lang } from "@/lib/copy";

type KumalakSpread = {
  grid: [
    [number, number, number],
    [number, number, number],
    [number, number, number]
  ];
  rowSums: [number, number, number];
  totalOnGrid: number;
  remainingPool: number;
};

function mod4Kumalak(n: number): number {
  const r = n % 4;
  return r === 0 ? 4 : r;
}

function splitThreePiles(total: number): [number, number, number] {
  // Ensure each of the 3 piles has at least 4 stones
  const minPerPile = 4;
  const distributable = Math.max(0, total - 3 * minPerPile);
  const a = Math.floor(Math.random() * (distributable + 1));
  const b = Math.floor(Math.random() * (distributable - a + 1));
  const c = distributable - a - b;
  return [minPerPile + a, minPerPile + b, minPerPile + c];
}

function castKumalak41(): KumalakSpread {
  let pool = 41;
  const rows: [[number, number, number], [number, number, number], [number, number, number]] = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];

  for (let r = 0; r < 3; r++) {
    const [p1, p2, p3] = splitThreePiles(pool);
    const c1 = mod4Kumalak(p1);
    const c2 = mod4Kumalak(p2);
    const c3 = mod4Kumalak(p3);
    rows[r] = [c1, c2, c3];
    pool -= c1 + c2 + c3;
  }

  const rowSums: [number, number, number] = [
    rows[0][0] + rows[0][1] + rows[0][2],
    rows[1][0] + rows[1][1] + rows[1][2],
    rows[2][0] + rows[2][1] + rows[2][2],
  ];
  const totalOnGrid = rowSums[0] + rowSums[1] + rowSums[2];

  return {
    grid: rows,
    rowSums,
    totalOnGrid,
    remainingPool: pool,
  };
}

const UI = {
  tr: {
    badge: "ALTAY & KAZAK BÖLÜMCÜ GELENEĞİ · İNTERAKTİF UYGULAMA",
    title: "41 Kumalak (Kırk Bir Taş) Kehanet Masası",
    subtitle:
      "Beyaz keçe (Ak Kiiz) üzerinde 41 taşın 3 kez üçe bölünüp dörder dörder ayıklanmasıyla (Modulo 4) kurulan 3×3 kozmik matris.",
    castBtn: "41 Taşı Ayır ve Diz (Ak Kiiz)",
    recastBtn: "Taşları Topla ve Yeniden Diz",
    cols: ["Sol Sütun · Geçmiş / Kök", "Orta Sütun · Şimdi / Öz", "Sağ Sütun · Gelecek / Ufuk"],
    rows: [
      {
        name: "I. Alın Satırı (Mangday)",
        world: "Üst Dünya · Zihin, Niyet ve Göksel Bakış",
      },
      {
        name: "II. Kalp Satırı (Jürek)",
        world: "Orta Dünya · Duygu, İç Merkez ve Karşılaşma",
      },
      {
        name: "III. Yol Satırı (Jol)",
        world: "Alt Dünya · Adım, Eylem ve Somut Sonuç",
      },
    ],
    stoneMeanings: {
      1: "1 Taş (Birlik / Tek Kıvılcım): Net niyet, yalnız fakat engelsiz haber, yeni başlangıç.",
      2: "2 Taş (Çift / Ayna): İki yönlü görüşme, ortaklık, diyalog veya tereddüt eşiği.",
      3: "3 Taş (Üçlü Ocak / Hareket): Dinamik akış, üç dünyanın desteği, hızlanan süreç.",
      4: "4 Taş (Tört-Kül / Tam Mühür): Dört köşesi sağlam temel, ağır sorumluluk ve tamamlanma.",
    } as Record<number, string>,
    statsLabel: "Matris Üzerindeki Taş",
    poolLabel: "Kalan Nöbetçi Taş (41. Sır)",
    readingHeading: "Dizilim Okuması (Mangday · Jürek · Jol)",
  },
  en: {
    badge: "ALTAI & KAZAKH DIVINATION TRADITION · INTERACTIVE TABLE",
    title: "The 41 Kumalak Divination Table",
    subtitle:
      "The 3×3 cosmic matrix formed on white felt (Ak Kiiz) by dividing 41 stones into three piles three times and reducing each by fours (Modulo 4).",
    castBtn: "Divide & Lay Out the 41 Stones",
    recastBtn: "Gather & Cast Again",
    cols: ["Left · Past / Root", "Center · Present / Axis", "Right · Future / Horizon"],
    rows: [
      {
        name: "I. Forehead Row (Mangday)",
        world: "Upper World · Mind, Intention & Celestial Sight",
      },
      {
        name: "II. Heart Row (Jürek)",
        world: "Middle World · Emotion, Inner Center & Encounter",
      },
      {
        name: "III. Path Row (Jol)",
        world: "Lower World · Step, Action & Tangible Outcome",
      },
    ],
    stoneMeanings: {
      1: "1 Stone (Unity / Single Spark): Clear intention, unobstructed message, fresh start.",
      2: "2 Stones (Pair / Mirror): Dialogue, partnership, reciprocity, or a threshold choice.",
      3: "3 Stones (Threefold Hearth): Dynamic flow, three-world support, accelerating motion.",
      4: "4 Stones (Tört-Kül / Full Seal): Four-cornered foundation, weight, and completion.",
    } as Record<number, string>,
    statsLabel: "Stones on 3×3 Grid",
    poolLabel: "Remaining Witness Stones",
    readingHeading: "Matrix Reading (Mangday · Jürek · Jol)",
  },
  sv: {
    badge: "ALTAISK & KAZAKISK SPÅDOMSTRADITION · INTERAKTIVT BORD",
    title: "41 Kumalak — Spådomsbordet",
    subtitle:
      "Den kosmiska 3×3-matrisen på vit filt (Ak Kiiz) genom att dela 41 stenar tre gånger och räkna bort fyrtal (Modulo 4).",
    castBtn: "Dela & Lägg Ut de 41 Stenarna",
    recastBtn: "Samla & Lägg Igen",
    cols: ["Vänster · Dåtid / Rot", "Mitten · Nutid / Axel", "Höger · Framtid / Horisont"],
    rows: [
      {
        name: "I. Pannraden (Mangday)",
        world: "Övre Världen · Sinne, Avsikt & Överblick",
      },
      {
        name: "II. Hjärtraden (Jürek)",
        world: "Mellanvärlden · Känsla, Inre Centrum & Möte",
      },
      {
        name: "III. Vägraden (Jol)",
        world: "Undre Världen · Steg, Handling & Konkret Utfall",
      },
    ],
    stoneMeanings: {
      1: "1 Sten (Enhet / Gnista): Klar avsikt, fritt budskap, ny början.",
      2: "2 Stenar (Par / Spegel): Samtal, partnerskap eller vägval.",
      3: "3 Stenar (Trefaldig Härd): Dynamisk rörelse och stöd.",
      4: "4 Stenar (Tört-Kül / Fullt Sigill): Fast grund på fyra hörn och fullbordan.",
    } as Record<number, string>,
    statsLabel: "Stenar i 3×3-Matrisen",
    poolLabel: "Kvarvarande Vittnesstenar",
    readingHeading: "Matristolkning (Mangday · Jürek · Jol)",
  },
} as const;

function interpretSpread(spread: KumalakSpread, lang: Lang): string[] {
  const [m, j, l] = spread.rowSums;
  const centerStone = spread.grid[1][1];
  const futureFoot = spread.grid[2][2];

  if (lang === "tr") {
    const line1 =
      m >= 9
        ? `Alın Satırı (Mangday = ${m} taş) oldukça dolgun ('Beş Mangday' açıklığı): Zihinsel ufkun ve niyetin güçlü; düşünceler dağınıklıktan çıkıp tek bir kararda birleşiyor.`
        : `Alın Satırı (Mangday = ${m} taş) hafif ve sade: Zihni fazla kalabalık hesaplarla yormadan, sade ve tek bir soruya odaklanmak en doğru yaklaşım.`;
    const line2 =
      centerStone === 1 || centerStone === 3
        ? `Kalbin tam merkezinde (Orta Sütun · Jürek) ${centerStone} taş (Tek sayı) duruyor: İçsel tereddüt çözülüyor; kalbinin sesi ile eylemin aynı eksende buluşuyor.`
        : `Kalbin tam merkezinde (Orta Sütun · Jürek) ${centerStone} taş (Çift sayı) duruyor: Karar vermeden önce ikinci bir bakış açısını dinlemek ve acele etmeden dengeyi kurmak gerekiyor.`;
    const line3 =
      futureFoot === 1 || futureFoot === 3
        ? `Sağ alt köşedeki Yol ucu (${futureFoot} taş) 'Ak Jol' (Açık Yol) işaretidir: Attığın somut adım önündeki düğümü açıyor (Toplam matris: ${spread.totalOnGrid} taş, Nöbetçi: ${spread.remainingPool} taş).`
        : `Sağ alt köşedeki Yol ucu (${futureFoot} taş) sağlamlaştırma çağrısıdır: Yola çıkmadan önce hazırlığını ve sözleşmeni dört köşeli bir temel üzerine oturt (Toplam matris: ${spread.totalOnGrid} taş).`;
    return [line1, line2, line3];
  }

  if (lang === "sv") {
    return [
      `Pannraden (Mangday = ${m} stenar): ${
        m >= 9 ? "Stark mental klarhet och samlad avsikt." : "Håll tanken enkel och fokuserad på en sak."
      }`,
      `Hjärtats mittpunkt (Jürek = ${centerStone} stenar): ${
        centerStone % 2 === 1
          ? "Udda tal i mitten visar att inre tvekan släpper och vägen klarnar."
          : "Jämnt tal i mitten råder till tålamod och eftertanke före handling."
      }`,
      `Framtidens väg (Jol höger hörn = ${futureFoot} stenar, Totalt ${spread.totalOnGrid}/41): ${
        futureFoot % 2 === 1 ? "'Ak Jol' — öppen väg för konkret handling." : "Bygg en stadig grund steg för steg."
      }`,
    ];
  }

  return [
    `Forehead Row (Mangday = ${m} stones): ${
      m >= 9
        ? "High mental weight ('Open Mangday')—your intention and strategic overview are strongly aligned."
        : "Light and uncluttered Mangday—keep your question simple and avoid over-complicating the plan."
    }`,
    `Center of the Heart (Jürek center = ${centerStone} stones): ${
      centerStone % 2 === 1
        ? "An odd count in the central heart cell signals active momentum and inner clarity."
        : "An even count in the central heart cell counsels deliberation, partnership, and weighing both sides."
    }`,
    `Path Outcome (Lower-right Jol cell = ${futureFoot} stones, Grid total ${spread.totalOnGrid}/41): ${
      futureFoot % 2 === 1
        ? "'Ak Jol' (Open Road)—your practical step meets an open threshold."
        : "Consolidate your four corners and preparation before rushing the final step."
    }`,
  ];
}

export function KumalakOracle() {
  const { lang } = useLanguage();
  const ui = UI[lang];
  const [spread, setSpread] = useState<KumalakSpread | null>(null);

  return (
    <section
      aria-label={ui.title}
      className="my-10 border border-bronze/40 bg-ink/85 p-5 sm:p-7"
    >
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-chalk/12 pb-5">
        <div className="max-w-2xl">
          <p className="text-[10px] tracking-[0.22em] text-bronze uppercase">{ui.badge}</p>
          <h2 className="mt-2 font-display text-2xl font-medium text-chalk sm:text-3xl">
            {ui.title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-chalk/75">{ui.subtitle}</p>
        </div>
        <button
          type="button"
          onClick={() => setSpread(castKumalak41())}
          className="shrink-0 border border-bronze bg-bronze/15 px-5 py-3 font-display text-xs tracking-[0.16em] text-chalk uppercase transition-colors hover:bg-bronze/25"
        >
          {spread ? ui.recastBtn : ui.castBtn}
        </button>
      </div>

      {spread && (
        <div className="mt-6 space-y-6">
          {/* Column headers */}
          <div className="hidden grid-cols-3 gap-3 text-center text-[10px] tracking-[0.18em] text-chalk/55 uppercase sm:grid">
            {ui.cols.map((col) => (
              <div key={col} className="border border-chalk/10 bg-black/30 py-1.5">
                {col}
              </div>
            ))}
          </div>

          {/* 3x3 Ak Kiiz Grid */}
          <div className="space-y-4">
            {spread.grid.map((row, rIdx) => (
              <div
                key={ui.rows[rIdx].name}
                className="border border-chalk/15 bg-black/40 p-3.5 sm:p-4"
              >
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2 border-b border-chalk/10 pb-2">
                  <span className="font-display text-base font-medium text-bronze">
                    {ui.rows[rIdx].name}
                  </span>
                  <span className="text-[11px] text-chalk/60">{ui.rows[rIdx].world}</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {row.map((count, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex flex-col items-center justify-center border border-chalk/12 bg-ink/90 p-3 sm:p-4"
                    >
                      <span className="mb-2 text-[9px] tracking-[0.14em] text-chalk/45 uppercase sm:hidden">
                        {cIdx === 0 ? "Geçmiş" : cIdx === 1 ? "Şimdi" : "Gelecek"}
                      </span>
                      <div className="flex min-h-[38px] flex-wrap items-center justify-center gap-2">
                        {Array.from({ length: count }).map((_, sIdx) => (
                          <span
                            key={sIdx}
                            aria-hidden
                            className="inline-block h-4 w-4 rounded-full border border-chalk/80 bg-bronze shadow-sm"
                          />
                        ))}
                      </div>
                      <span className="mt-2 font-display text-sm text-chalk/90">
                        {count} {lang === "tr" ? "Taş" : lang === "sv" ? "Stenar" : "Stones"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stone Count Legend & Interpretation */}
          <div className="grid gap-4 border-t border-chalk/15 pt-5 sm:grid-cols-2">
            <div className="border border-chalk/12 bg-black/35 p-4">
              <div className="flex items-center justify-between text-xs text-bronze">
                <span>
                  {ui.statsLabel}: <strong>{spread.totalOnGrid}</strong> / 41
                </span>
                <span>
                  {ui.poolLabel}: <strong>{spread.remainingPool}</strong>
                </span>
              </div>
              <ul className="mt-3 space-y-1.5 text-xs leading-5 text-chalk/75">
                {[1, 2, 3, 4].map((n) => (
                  <li key={n}>• {ui.stoneMeanings[n]}</li>
                ))}
              </ul>
            </div>

            <div className="border border-bronze/30 bg-black/45 p-4">
              <p className="font-display text-sm tracking-[0.06em] text-bronze uppercase">
                {ui.readingHeading}
              </p>
              <ul className="mt-2.5 space-y-2 text-xs leading-5 text-chalk/85 sm:text-sm sm:leading-6">
                {interpretSpread(spread, lang).map((line, idx) => (
                  <li key={idx}>— {line}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 flex justify-end border-t border-chalk/12 pt-4">
            <SealCardGenerator
              filename="runeyard-41-kumalak-acilimi"
              badge="ALTAY & KAZAK · 41 KUMALAK (ТӨРТКҮЛ) KEHANET SOFRASI"
              title="41 Kumalak · 3×3 Törtkül Açılımı"
              subtitle={`${ui.statsLabel}: ${spread.totalOnGrid} / 41 · ${ui.poolLabel}: ${spread.remainingPool}`}
              body={interpretSpread(spread, lang).join(" ")}
              stones={[0, 1, 2].map((rIdx) => ({
                positionTag: ui.rows[rIdx].name,
                glyph: spread.grid[rIdx].map((c) => `${c}`).join("·"),
                name: `${ui.rows[rIdx].name} (${spread.rowSums[rIdx]} Taş)`,
                subtitle: ui.rows[rIdx].world,
                flowLabel: `${spread.grid[rIdx][0]} - ${spread.grid[rIdx][1]} - ${spread.grid[rIdx][2]}`,
                note: interpretSpread(spread, lang)[rIdx] || "",
              }))}
            />
          </div>
        </div>
      )}
    </section>
  );
}
