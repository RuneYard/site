"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/language";
import { findEducationCourse } from "@/content/education";

type PathChoice = "el-yuz-element" | "rune-bilgeligi" | "samanizm";

const UI = {
  tr: {
    badge: "RuneYard Akademi · Kişisel Müfredat Rehberi",
    title: "Akademi Yol Pusulası: Hangi Eğitim Senin İçin?",
    lead: "Üç eğitimimiz de farklı bir okuma katmanını açar. Şu an hayatında ve pratiğinde en çok hangi kapıyı aralamak istediğini seç; senin için en doğru başlangıç kürsüsünü ve müfredat adımını görelim.",
    options: [
      {
        slug: "el-yuz-element" as PathChoice,
        tag: "I · BEDEN, MİZAÇ & KARAKTER HARİTASI",
        prompt: "“Karşımdaki insanın ve kendimin yüz hatlarını, el çizgilerini ve dört element mizacını somut olarak okumak istiyorum.”",
        why: "El, Yüz ve Element Analizi Eğitimi (27–28 Ekim); Fizyonomi, Kiromanti ve 4 Element mizaç bilimini birleştirir. Hiçbir kehanet aracına ihtiyaç duymadan insanın doğuştan getirdiği potansiyeli ve irade izlerini yüzünden ve avucundan okumanı sağlar.",
        waText: "Merhaba Mehmet Bey, El, Yüz ve Element Analizi Eğitimi hakkında bilgi almak ve kayıt olmak istiyorum.",
      },
      {
        slug: "rune-bilgeligi" as PathChoice,
        tag: "II · KADİM SEMBOL, KEHANET & KADER YASASI",
        prompt: "“Elder Futhark’ın 24 rün taşını, Galdr seslerini, açılım tekniklerini ve bağlı rün (Bindrune) mühürlerini öğrenmek istiyorum.”",
        why: "Rün Bilgelikleri Eğitimi (10–11 Kasım); 24 Elder Futhark rününün yüzeysel anahtar kelimelerini değil, 3 Aett kozmolojisini, kehanet açılımlarını ve tılsım/mühür tasarımını sıfırdan ustalığa taşır.",
        waText: "Merhaba Mehmet Bey, Rün Bilgelikleri Eğitimi hakkında bilgi almak ve kayıt olmak istiyorum.",
      },
      {
        slug: "samanizm" as PathChoice,
        tag: "III · ÜÇ DÜNYA, TRANS & RUHSAL SAĞALTIM",
        prompt: "“Üç Dünya kozmolojisini, şamanik davul/nefes yolculuğunu, güç hayvanı çalışmasını ve alan temizliğini deneyimlemek istiyorum.”",
        why: "Şamanizm Eğitimi (24–25 Kasım); Alt, Orta ve Üst Dünya haritasını, güvenli trans ve nefes tekniklerini, köklerle bağ kurmayı ve enerji sağaltımını pratik uygulamalarla öğretir.",
        waText: "Merhaba Mehmet Bey, Şamanizm Eğitimi hakkında bilgi almak ve kayıt olmak istiyorum.",
      },
    ],
    openRoomBtn: "Eğitim Müfredatını İncele →",
    waEnrollBtn: "WhatsApp ile Ön Kayıt & Bilgi Al →",
  },
  en: {
    badge: "RuneYard Academy · Personal Curriculum Guide",
    title: "Academy Pathfinder: Which Course Fits Your Calling?",
    lead: "Each of our three courses opens a distinct layer of reading. Select the threshold that speaks most directly to your current study and practice.",
    options: [
      {
        slug: "el-yuz-element" as PathChoice,
        tag: "I · BODY, TEMPERAMENT & CHARACTER MAP",
        prompt: "“I want to read facial structure, palm lines, and the four elemental temperaments in myself and others.”",
        why: "Hand, Face & Element Analysis (27–28 Oct) unites Physiognomy, Chiromancy, and Classical Four-Element Temperament—teaching you to read innate potential and lived willpower directly from the face and hand.",
        waText: "Hello Mehmet, I would like to get information and enroll in the Hand, Face & Element Analysis Course.",
      },
      {
        slug: "rune-bilgeligi" as PathChoice,
        tag: "II · ANCIENT SYMBOL, ORACLE & LAW OF WYRD",
        prompt: "“I want to master the 24 Elder Futhark runes, Galdr vocal resonance, casting spreads, and Bindrune seals.”",
        why: "Rune Wisdom (10–11 Nov) goes far beyond keywords into the cosmology of the Three Aettir, classical rune casting spreads, and the architecture of Bindrunes.",
        waText: "Hello Mehmet, I would like to get information and enroll in the Rune Wisdom Course.",
      },
      {
        slug: "samanizm" as PathChoice,
        tag: "III · THREE WORLDS, JOURNEYING & SPIRITUAL HEALING",
        prompt: "“I want to experience the Three Worlds cosmology, drum/breath journeying, power animals, and sacred space clearing.”",
        why: "Shamanism (24–25 Nov) transmits the map of the Lower, Middle, and Upper Worlds, grounded trance and breath discipline, ancestral rooting, and energetic restoration.",
        waText: "Hello Mehmet, I would like to get information and enroll in the Shamanism Course.",
      },
    ],
    openRoomBtn: "Inspect Full Syllabus →",
    waEnrollBtn: "Pre-Enroll via WhatsApp →",
  },
  sv: {
    badge: "RuneYard Akademi · Personlig Kursguide",
    title: "Akademins Vägvisare: Vilken Kurs Passar Dig?",
    lead: "Var och en av våra tre kurser öppnar ett eget skikt av kunskap. Välj den tröskel som talar starkast till ditt nuvarande sökande.",
    options: [
      {
        slug: "el-yuz-element" as PathChoice,
        tag: "I · KROPP, TEMPERAMENT & KARAKTÄRSKARTA",
        prompt: "”Jag vill lära mig läsa ansiktsdrag, handens linjer och de fyra elementens temperament.”",
        why: "Hand-, Ansikts- och Elementanalys (27–28 okt) förenar fysiognomik, kiromanti och klassisk elementlära för att avläsa medfödd potential och viljekraft.",
        waText: "Hej Mehmet, jag vill gärna få information och anmäla mig till kursen i Hand-, Ansikts- och Elementanalys.",
      },
      {
        slug: "rune-bilgeligi" as PathChoice,
        tag: "II · URÅLDRIG SYMBOL, ORAKEL & ÖDESLAG",
        prompt: "”Jag vill behärska den äldre futharkens 24 runor, Galdr-ljud, läggningar och bindrunor.”",
        why: "Runvisdom (10–11 nov) leder dig genom de tre ätternas kosmologi, klassiska runläggningar och konstruktion av bindrunor.",
        waText: "Hej Mehmet, jag vill gärna få information och anmäla mig till kursen i Runvisdom.",
      },
      {
        slug: "samanizm" as PathChoice,
        tag: "III · TRE VÄRLDAR, TRUMRESA & ANDLIG LÄKEDOM",
        prompt: "”Jag vill utforska de tre världarnas kosmologi, schamanistisk resa, kraftdjur och rening av rum.”",
        why: "Schamanism (24–25 nov) förmedlar kartan över Under-, Mellan- och Övervärlden, trygga trans- och andningstekniker samt energetisk läkedom.",
        waText: "Hej Mehmet, jag vill gärna få information och anmäla mig till kursen i Schamanism.",
      },
    ],
    openRoomBtn: "Se Hela Kursplanen →",
    waEnrollBtn: "Förhandsanmälan via WhatsApp →",
  },
} as const;

export function AcademyPathfinder() {
  const { lang } = useLanguage();
  const ui = UI[lang];
  const [selectedSlug, setSelectedSlug] = useState<PathChoice>("rune-bilgeligi");

  const activeOpt =
    ui.options.find((o) => o.slug === selectedSlug) ?? ui.options[0];
  const course = findEducationCourse(activeOpt.slug);

  return (
    <section className="mt-10 border border-chalk/20 bg-chalk/[0.025] p-6 sm:p-8">
      <p className="text-[10px] tracking-[0.22em] text-chalk/55 uppercase">
        {ui.badge}
      </p>
      <h2 className="mt-3 font-display text-2xl font-medium tracking-[-0.015em] text-chalk sm:text-3xl">
        {ui.title}
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-chalk/75">
        {ui.lead}
      </p>

      <div className="mt-6 grid gap-3 lg:grid-cols-3">
        {ui.options.map((opt) => {
          const isSelected = opt.slug === selectedSlug;
          return (
            <button
              key={opt.slug}
              type="button"
              onClick={() => setSelectedSlug(opt.slug)}
              className={`flex flex-col justify-between border p-4 text-left transition-colors ${
                isSelected
                  ? "border-chalk/75 bg-chalk/[0.09] text-chalk"
                  : "border-chalk/15 bg-black/35 text-chalk/70 hover:border-chalk/40 hover:text-chalk"
              }`}
            >
              <span className="text-[9px] tracking-[0.18em] text-chalk/55 uppercase">
                {opt.tag}
              </span>
              <p className="mt-2.5 font-display text-base leading-6 italic">
                {opt.prompt}
              </p>
            </button>
          );
        })}
      </div>

      {course && (
        <article className="card-slate mt-6 border border-chalk/25 bg-black/50 p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] tracking-[0.18em] text-chalk/60 uppercase">
            <span>
              {course.code} · {course.badge[lang]}
            </span>
            <span>{course.status[lang]}</span>
          </div>

          <h3 className="mt-3 font-display text-3xl font-medium text-chalk">
            {course.glyph} {course.title[lang]}
          </h3>
          <p className="mt-2 text-sm leading-7 text-chalk/85 sm:text-base">
            {activeOpt.why}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-chalk/12 pt-4">
            <Link
              href={`/egitim/${course.slug}`}
              className="border border-chalk/50 bg-chalk/[0.08] px-5 py-2.5 font-display text-xs tracking-[0.16em] text-chalk uppercase transition-colors hover:border-chalk hover:bg-chalk/[0.15]"
            >
              {ui.openRoomBtn}
            </Link>
            <a
              href={`https://wa.me/905455642164?text=${encodeURIComponent(
                activeOpt.waText,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-chalk/25 px-5 py-2.5 font-display text-xs tracking-[0.16em] text-chalk/85 uppercase transition-colors hover:border-chalk/65 hover:text-chalk"
            >
              {ui.waEnrollBtn}
            </a>
          </div>
        </article>
      )}
    </section>
  );
}
