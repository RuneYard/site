"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language";

export type SealStoneItem = {
  positionTag?: string;
  glyph: string;
  name: string;
  subtitle: string;
  flowLabel?: string;
  note: string;
};

export type SealCardProps = {
  filename: string;
  badge: string;
  glyph?: string;
  title: string;
  subtitle?: string;
  body: string;
  quote?: string;
  intent?: string;
  stones?: SealStoneItem[];
};

const UI = {
  tr: {
    downloadBtn: "📜 Mühür Kartını İndir / Paylaş (Story Görseli)",
    generating: "Mühür Kartı İşleniyor…",
    modalTitle: "Kış Odası Mühür Kartın Hazır (1080×1920 Story)",
    saveFileBtn: "⬇ Görseli Cihaza İndir (.PNG)",
    shareNativeBtn: "📲 Instagram / WhatsApp’ta Paylaş",
    closeBtn: "Kapat ✕",
    footerSub: "KADİM RÜN, GÖKYÜZÜ VE GELENEK KÜTÜPHANESİ",
    hint: "Görsel otomatik indirildi. Mobil cihazda basılı tutarak Fotoğraflara kaydedebilir veya doğrudan hikayende paylaşabilirsin.",
  },
  en: {
    downloadBtn: "📜 Download / Share Seal Card (Story Image)",
    generating: "Engraving Seal Card…",
    modalTitle: "Your Winter Hall Seal Card Is Ready (1080×1920 Story)",
    saveFileBtn: "⬇ Download Image (.PNG)",
    shareNativeBtn: "📲 Share to Instagram / WhatsApp",
    closeBtn: "Close ✕",
    footerSub: "SANCTUM OF ANCIENT RUNES, SKY & TRADITION",
    hint: "The image has been downloaded. On mobile, you can also share directly to your Story or save to Photos.",
  },
  sv: {
    downloadBtn: "📜 Ladda ner / Dela Sigillkort (Story-bild)",
    generating: "Graverar Sigillkort…",
    modalTitle: "Ditt Sigillkort från Vinterrummet Är Klart (1080×1920)",
    saveFileBtn: "⬇ Ladda ner Bild (.PNG)",
    shareNativeBtn: "📲 Dela på Instagram / WhatsApp",
    closeBtn: "Stäng ✕",
    footerSub: "BIBLIOTEK FÖR FORNTIDA RUNOR, HIMMEL & TRADITION",
    hint: "Bilden har laddats ner. På mobil kan du även dela direkt till din Story.",
  },
} as const;

function wrapLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  maxLines = 8,
): string[] {
  const cleaned = text.replace(/\*\*/g, "").replace(/\*/g, "").trim();
  const words = cleaned.split(/\s+/);
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = word;
      if (lines.length >= maxLines - 1) break;
    } else {
      current = test;
    }
  }
  if (current && lines.length < maxLines) {
    lines.push(current);
  }
  return lines;
}

export function SealCardGenerator(props: SealCardProps) {
  const { lang } = useLanguage();
  const ui = UI[lang];
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function renderCanvasToDataUrl(): Promise<string> {
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext("2d");
    if (!ctx) return "";

    // 1. Deep Basalt & Slate Background
    const bgGrad = ctx.createLinearGradient(0, 0, 1080, 1920);
    bgGrad.addColorStop(0, "#101714");
    bgGrad.addColorStop(0.5, "#0d1210");
    bgGrad.addColorStop(1, "#070908");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1080, 1920);

    // 2. Warm Hearth Radial Glow in Center
    const glow = ctx.createRadialGradient(540, 620, 40, 540, 620, 560);
    glow.addColorStop(0, "rgba(216, 174, 94, 0.18)");
    glow.addColorStop(0.55, "rgba(168, 130, 74, 0.06)");
    glow.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, 1080, 1920);

    // 3. Double Carved Bronze & Amber Frame
    ctx.strokeStyle = "rgba(168, 130, 74, 0.55)";
    ctx.lineWidth = 3;
    ctx.strokeRect(56, 56, 968, 1808);

    ctx.strokeStyle = "rgba(216, 174, 94, 0.85)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(74, 74, 932, 1772);

    // Corner Ornaments
    const corners = [
      [74, 74],
      [1006, 74],
      [74, 1846],
      [1006, 1846],
    ];
    ctx.fillStyle = "#d8ae5e";
    for (const [cx, cy] of corners) {
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.fill();
    }

    // 4. Top Crest Header
    ctx.textAlign = "center";
    ctx.fillStyle = "#d8ae5e";
    ctx.font = "600 22px Georgia, Palatino, serif";
    ctx.fillText("✦   R U N E Y A R D   ·   K I Ş   O D A S I   M Ü H R Ü   ✦", 540, 148);

    ctx.fillStyle = "rgba(239, 232, 216, 0.65)";
    ctx.font = "500 20px sans-serif";
    ctx.fillText(props.badge.toUpperCase(), 540, 192);

    // Divider line
    ctx.strokeStyle = "rgba(216, 174, 94, 0.35)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(220, 224);
    ctx.lineTo(860, 224);
    ctx.stroke();

    if (props.stones && props.stones.length === 3) {
      // THREE NORNS SPREAD LAYOUT
      ctx.fillStyle = "#efe8d8";
      ctx.font = "600 44px Georgia, Palatino, serif";
      ctx.fillText(props.title, 540, 295);

      if (props.intent && props.intent.trim()) {
        ctx.fillStyle = "#d8ae5e";
        ctx.font = "italic 26px Georgia, Palatino, serif";
        const intentLines = wrapLines(ctx, `“${props.intent.trim()}”`, 820, 2);
        intentLines.forEach((line, i) => {
          ctx.fillText(line, 540, 345 + i * 34);
        });
      }

      // 3 Horizontal Rune Cards stacked vertically for 1080x1920 readability
      let startY = 410;
      for (let i = 0; i < 3; i++) {
        const st = props.stones[i];
        // Card Box
        ctx.fillStyle = "rgba(21, 29, 26, 0.92)";
        ctx.fillRect(110, startY, 860, 370);
        ctx.strokeStyle = "rgba(216, 174, 94, 0.45)";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(110, startY, 860, 370);

        // Position Tag
        ctx.textAlign = "left";
        ctx.fillStyle = "#d8ae5e";
        ctx.font = "600 20px sans-serif";
        ctx.fillText((st.positionTag ?? "").toUpperCase(), 148, startY + 46);

        if (st.flowLabel) {
          ctx.textAlign = "right";
          ctx.fillStyle = "rgba(239, 232, 216, 0.65)";
          ctx.font = "500 18px sans-serif";
          ctx.fillText(st.flowLabel.toUpperCase(), 932, startY + 46);
        }

        // Glyph Circle on Left
        ctx.textAlign = "center";
        ctx.fillStyle = "#d8ae5e";
        ctx.font = "400 112px Georgia, Palatino, serif";
        ctx.fillText(st.glyph, 210, startY + 185);

        // Name & Subtitle
        ctx.textAlign = "left";
        ctx.fillStyle = "#efe8d8";
        ctx.font = "600 40px Georgia, Palatino, serif";
        ctx.fillText(st.name, 305, startY + 125);

        ctx.fillStyle = "#d8ae5e";
        ctx.font = "italic 24px Georgia, Palatino, serif";
        const subLines = wrapLines(ctx, st.subtitle, 610, 2);
        subLines.forEach((l, idx) => {
          ctx.fillText(l, 305, startY + 164 + idx * 30);
        });

        // Note text
        ctx.fillStyle = "rgba(239, 232, 216, 0.86)";
        ctx.font = "400 22px sans-serif";
        const noteLines = wrapLines(ctx, st.note, 610, 4);
        noteLines.forEach((l, idx) => {
          ctx.fillText(l, 305, startY + 232 + idx * 31);
        });

        startY += 405;
      }
    } else {
      // SINGLE RUNE OR DAILY HEARTH LEAF LAYOUT
      // Medallion Circle for Glyph
      ctx.beginPath();
      ctx.arc(540, 420, 138, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(21, 29, 26, 0.95)";
      ctx.fill();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = "#d8ae5e";
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(540, 420, 124, 0, Math.PI * 2);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(216, 174, 94, 0.4)";
      ctx.stroke();

      // Main Glyph
      ctx.textAlign = "center";
      ctx.fillStyle = "#d8ae5e";
      ctx.font = "400 150px Georgia, Palatino, serif";
      ctx.fillText(props.glyph ?? "ᚠ", 540, 472);

      // Title (Wrapped up to 2 lines)
      ctx.fillStyle = "#efe8d8";
      ctx.font = "600 50px Georgia, Palatino, serif";
      const titleLines = wrapLines(ctx, props.title, 840, 3);
      let cursorY = 640;
      for (const line of titleLines) {
        ctx.fillText(line, 540, cursorY);
        cursorY += 62;
      }

      // Subtitle
      if (props.subtitle) {
        cursorY += 12;
        ctx.fillStyle = "#d8ae5e";
        ctx.font = "italic 30px Georgia, Palatino, serif";
        const subLines = wrapLines(ctx, props.subtitle, 820, 3);
        for (const line of subLines) {
          ctx.fillText(line, 540, cursorY);
          cursorY += 42;
        }
      }

      // Divider
      cursorY += 24;
      ctx.strokeStyle = "rgba(216, 174, 94, 0.35)";
      ctx.beginPath();
      ctx.moveTo(340, cursorY);
      ctx.lineTo(740, cursorY);
      ctx.stroke();

      // Main Body Paragraph
      cursorY += 58;
      ctx.fillStyle = "rgba(239, 232, 216, 0.9)";
      ctx.font = "400 29px Georgia, Palatino, serif";
      const bodyLines = wrapLines(ctx, props.body, 820, 9);
      for (const line of bodyLines) {
        ctx.fillText(line, 540, cursorY);
        cursorY += 45;
      }

      // Closing Quote Box
      if (props.quote) {
        const boxY = Math.max(cursorY + 36, 1340);
        ctx.fillStyle = "rgba(216, 174, 94, 0.08)";
        ctx.fillRect(120, boxY, 840, 210);
        ctx.strokeStyle = "rgba(216, 174, 94, 0.55)";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(120, boxY, 840, 210);

        ctx.fillStyle = "#f3d287";
        ctx.font = "italic 30px Georgia, Palatino, serif";
        const quoteLines = wrapLines(ctx, `“${props.quote}”`, 760, 4);
        const startQuoteY = boxY + 68;
        quoteLines.forEach((line, idx) => {
          ctx.fillText(line, 540, startQuoteY + idx * 42);
        });
      }
    }

    // 5. Signature Seal Footer
    ctx.textAlign = "center";
    ctx.strokeStyle = "rgba(216, 174, 94, 0.4)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(200, 1685);
    ctx.lineTo(880, 1685);
    ctx.stroke();

    ctx.fillStyle = "#d8ae5e";
    ctx.font = "600 32px Georgia, Palatino, serif";
    ctx.fillText("MEHMET AKDENİZ  ·  RUNEYARD.NET", 540, 1742);

    ctx.fillStyle = "rgba(239, 232, 216, 0.65)";
    ctx.font = "500 19px sans-serif";
    ctx.fillText(ui.footerSub, 540, 1784);

    return canvas.toDataURL("image/png");
  }

  async function handleGenerate() {
    if (busy) return;
    setBusy(true);
    try {
      const dataUrl = await renderCanvasToDataUrl();
      if (!dataUrl) return;
      setPreviewUrl(dataUrl);

      // Trigger automatic download
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${props.filename}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setBusy(false);
    }
  }

  async function handleNativeShare() {
    if (!previewUrl) return;
    try {
      const res = await fetch(previewUrl);
      const blob = await res.blob();
      const file = new File([blob], `${props.filename}.png`, { type: "image/png" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: props.title,
          text: `${props.title} · Mehmet Akdeniz (runeyard.net)`,
          files: [file],
        });
      }
    } catch {
      // ignore share cancellation
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => void handleGenerate()}
        disabled={busy}
        className="inline-flex items-center gap-2 border border-amber/50 bg-amber/12 px-4 py-2.5 font-display text-xs font-semibold tracking-[0.16em] text-amber uppercase transition-colors hover:bg-amber hover:text-ink disabled:opacity-50"
      >
        <span>{busy ? ui.generating : ui.downloadBtn}</span>
      </button>

      {previewUrl && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setPreviewUrl(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="wet-ink max-h-[92vh] w-full max-w-md overflow-y-auto border border-amber/45 bg-ink p-5 shadow-2xl"
          >
            <div className="flex items-center justify-between gap-2 border-b border-chalk/15 pb-3">
              <p className="font-display text-xs tracking-[0.16em] text-amber uppercase">
                {ui.modalTitle}
              </p>
              <button
                type="button"
                onClick={() => setPreviewUrl(null)}
                className="text-xs tracking-[0.14em] text-chalk/65 uppercase hover:text-chalk"
              >
                {ui.closeBtn}
              </button>
            </div>

            <div className="mt-4 overflow-hidden border border-amber/30 bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={previewUrl}
                alt={props.title}
                className="mx-auto max-h-[56vh] w-auto object-contain"
              />
            </div>

            <p className="mt-3 text-xs leading-5 text-chalk/70">{ui.hint}</p>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <a
                href={previewUrl}
                download={`${props.filename}.png`}
                className="flex-1 border border-[#f3d287]/60 bg-[#d8ae5e] px-4 py-2.5 text-center font-display text-xs font-bold tracking-[0.16em] text-[#090c0b] uppercase hover:bg-[#e5be72]"
              >
                {ui.saveFileBtn}
              </a>
              <button
                type="button"
                onClick={() => void handleNativeShare()}
                className="flex-1 border border-amber/45 bg-amber/15 px-4 py-2.5 text-center font-display text-xs font-semibold tracking-[0.14em] text-amber uppercase hover:bg-amber hover:text-ink"
              >
                {ui.shareNativeBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
