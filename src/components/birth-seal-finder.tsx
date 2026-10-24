"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/language";
import { SealCardGenerator } from "@/components/seal-card-generator";
import { runes, type Rune } from "@/content/runes";
import type { Lang } from "@/lib/copy";

type OghamTreeSpan = {
  start: number; // MMDD
  end: number;   // MMDD
  glyph: string;
  name: Record<Lang, string>;
  subtitle: Record<Lang, string>;
  note: Record<Lang, string>;
  href: string;
};

const OGHAM_CALENDAR: OghamTreeSpan[] = [
  {
    start: 1224,
    end: 120,
    glyph: "ᚁ",
    name: { tr: "Beith · Huş Ağacı", en: "Beith · Birch Tree", sv: "Beith · Björk" },
    subtitle: {
      tr: "Arınma, İlk Işık ve Yeni Döngü",
      en: "Purification, First Light & Renewal",
      sv: "Rening, Första Ljus & Förnyelse",
    },
    note: {
      tr: "Kış karanlığından sonra toprağa ilk yerleşen öncü ağaç; eski yükü siler ve temiz sayfa açar.",
      en: "The pioneer tree that colonizes bare earth after winter, clearing old weight for a clean beginning.",
      sv: "Pionjärträdet som slår rot efter vintern och öppnar en ren början.",
    },
    href: "/kelt/birinci-aicme",
  },
  {
    start: 121,
    end: 217,
    glyph: "ᚂ",
    name: { tr: "Luis · Üvez Ağacı", en: "Luis · Rowan Tree", sv: "Luis · Rönn" },
    subtitle: {
      tr: "Eşik Kalkanı ve Sezgisel Uyanıklık",
      en: "Threshold Shield & Intuitive Sight",
      sv: "Tröskelsköld & Klarsyn",
    },
    note: {
      tr: "Meyvesinin altında beş köşeli yıldız taşıyan üvez; zihni yanılsamadan ve yabancı gölgeden korur.",
      en: "Bearing a five-pointed star beneath its berry, Rowan wards the threshold against illusion.",
      sv: "Med en femuddig stjärna i sitt bär skyddar rönnen mot bländverk.",
    },
    href: "/kelt/birinci-aicme",
  },
  {
    start: 218,
    end: 317,
    glyph: "ᚅ",
    name: { tr: "Nion · Dişbudak Ağacı", en: "Nion · Ash Tree", sv: "Nion · Ask" },
    subtitle: {
      tr: "Evren Ekseni ve Derin Bağlantı",
      en: "World Axis & Deep Connection",
      sv: "Världsaxel & Djup Förbindelse",
    },
    note: {
      tr: "Kökleri derin suya, dalları göğe uzanan Dünya Ağacı; iç dünya ile dış dünyayı birleştirir.",
      en: "Roots in deep water and crown in the sky; Ash bridges inner vision and outer structure.",
      sv: "Med rötter i djupet och krona i skyn förenar asken inre syn och yttre ordning.",
    },
    href: "/kelt/birinci-aicme",
  },
  {
    start: 318,
    end: 414,
    glyph: "ᚃ",
    name: { tr: "Fearn · Kızılağaç", en: "Fearn · Alder Tree", sv: "Fearn · Al" },
    subtitle: {
      tr: "Suda Çürümeyen Köprü ve Cesaret",
      en: "Unfading Bridge Over Water & Courage",
      sv: "Bro Över Vatten & Mod",
    },
    note: {
      tr: "Suyun içinde sertleşip taşlaşan kızılağaç; duygusal fırtınalarda sarsılmaz köprü kurar.",
      en: "Growing harder when submerged in water, Alder builds unshakable bridges across emotional depths.",
      sv: "Alen hårdnar i vatten och bygger fasta broar över djupa strömmar.",
    },
    href: "/kelt/birinci-aicme",
  },
  {
    start: 415,
    end: 512,
    glyph: "ᚄ",
    name: { tr: "Saille · Söğüt Ağacı", en: "Saille · Willow Tree", sv: "Saille · Pil" },
    subtitle: {
      tr: "Ay Hafızası, Esneklik ve Rüya Akışı",
      en: "Lunar Memory, Flexibility & Dream Flow",
      sv: "Månminne, Följsamhet & Drömflöde",
    },
    note: {
      tr: "Fırtınada eğildiği için asla kırılmayan su ağacı; derin sezgiyi ve ritmik uyumu taşır.",
      en: "Bending with the gale so it never snaps, the lunar Willow carries deep intuition and grace.",
      sv: "Pilen böjer sig i stormen utan att brista och bär djup intuition.",
    },
    href: "/kelt/birinci-aicme",
  },
  {
    start: 513,
    end: 609,
    glyph: "ᚆ",
    name: { tr: "Huath · Alıç Ağacı", en: "Huath · Hawthorn Tree", sv: "Huath · Hagtorn" },
    subtitle: {
      tr: "Kalp Koruyucusu ve Sabırlı Eşik",
      en: "Guardian of the Heart & Sacred Pause",
      sv: "Hjärtats Väktare & Helig Gräns",
    },
    note: {
      tr: "Hem narin beyaz çiçek hem keskin diken taşıyan alıç; sevgiyi sınır bilinciyle korur.",
      en: "Bearing both delicate blossom and sharp thorn, Hawthorn guards the heart with clear boundaries.",
      sv: "Med både vita blommor och skarpa törnen skyddar hagtornen hjärtat.",
    },
    href: "/kelt/ikinci-aicme",
  },
  {
    start: 610,
    end: 707,
    glyph: "ᚇ",
    name: { tr: "Duir · Meşe Ağacı", en: "Duir · Oak Tree", sv: "Duir · Ek" },
    subtitle: {
      tr: "Kudret Kapısı, Dayanıklılık ve Egemenlik",
      en: "Doorway of Strength, Endurance & Sovereignty",
      sv: "Styrkans Port, Uthållighet & Suveränitet",
    },
    note: {
      tr: "Yıldırımı toprağa indiren orman kralı; zorlukta dik duran omurgayı ve cömertliği temsil eder.",
      en: "King of the grove that grounds the lightning; Oak embodies steadfast spine and shelter.",
      sv: "Skogens konung som jordar blixten; eken står för ryggrad och beskydd.",
    },
    href: "/kelt/ikinci-aicme",
  },
  {
    start: 708,
    end: 804,
    glyph: "ᚈ",
    name: { tr: "Tinne · Çobanpüskülü", en: "Tinne · Holly Tree", sv: "Tinne · Järnek" },
    subtitle: {
      tr: "Adil İrade ve Demir Disiplini",
      en: "Righteous Will & Forged Discipline",
      sv: "Rättvis Vilja & Smidd Disciplin",
    },
    note: {
      tr: "Kış ortasında bile yaprağını dökmeyen çobanpüskülü; odaklanmış eylem ve onurlu mücadeledir.",
      en: "Evergreen through the frost, Holly represents focused action and honorable resolve.",
      sv: "Städsegrön genom frosten står järneken för fokuserad handling.",
    },
    href: "/kelt/ikinci-aicme",
  },
  {
    start: 805,
    end: 901,
    glyph: "ᚉ",
    name: { tr: "Coll · Fındık Ağacı", en: "Coll · Hazel Tree", sv: "Coll · Hassel" },
    subtitle: {
      tr: "Bilgelik Pınarı ve Yoğunlaştırılmış Öz",
      en: "Well of Wisdom & Concentrated Essence",
      sv: "Visdomens Källa & Koncentrerad Kärna",
    },
    note: {
      tr: "Kelt mitolojisinde Bilgelik Pınarı’na dokuz fındık düşüren ağaç; derin ilmi ve sezgiyi birleştirir.",
      en: "Dropping nine nuts into the Well of Segais, Hazel unites scholarship with poetic intuition.",
      sv: "Hasseln vid visdomens källa förenar lärdom med poetisk klarsyn.",
    },
    href: "/kelt/ikinci-aicme",
  },
  {
    start: 902,
    end: 929,
    glyph: "ᚋ",
    name: { tr: "Muin · Asma / Böğürtlen", en: "Muin · Vine & Bramble", sv: "Muin · Vinranka" },
    subtitle: {
      tr: "Olgunlaşan Hasat ve İçsel Hakikat",
      en: "Ripened Harvest & Inner Truth",
      sv: "Mogen Skörd & Inre Sanning",
    },
    note: {
      tr: "Sonbahar güneşinde tatlanan meyve; sabırla beklenen emeğin olgun bilgeliğe dönüşmesidir.",
      en: "Fruit sweetened by autumn sun; patience transmuted into mature wisdom.",
      sv: "Frukten som mognar i höstsolen; tålamod förvandlat till visdom.",
    },
    href: "/kelt/ucuncu-aicme",
  },
  {
    start: 930,
    end: 1027,
    glyph: "ᚌ",
    name: { tr: "Gort · Sarmaşık", en: "Gort · Ivy", sv: "Gort · Murgröna" },
    subtitle: {
      tr: "Azim, Labirentte Yol Bulma ve Sadakat",
      en: "Perseverance, Wayfinding & Fidelity",
      sv: "Uthållighet, Vägledning & Trofasthet",
    },
    note: {
      tr: "Karanlık taş duvarlarda bile ışığa tırmanan sarmaşık; vazgeçmeyen ruhsal direnci taşır.",
      en: "Climbing stone walls toward the light even in winter, Ivy embodies relentless spiritual stamina.",
      sv: "Murgrönan som klättrar mot ljuset även på kalla stenmurar bär uthållig kraft.",
    },
    href: "/kelt/ucuncu-aicme",
  },
  {
    start: 1028,
    end: 1124,
    glyph: "ᚍ",
    name: { tr: "Ngetal · Kamış & Ioho (Porsuk)", en: "Ngetal · Reed & Ioho (Yew)", sv: "Ngetal · Vass & Idegran" },
    subtitle: {
      tr: "Derin Kök, Sırların Muhafazası ve Dönüşüm",
      en: "Deep Root, Keeper of Secrets & Rebirth",
      sv: "Djup Rot, Hemligheters Väktare & Förnyelse",
    },
    note: {
      tr: "Enki’nin kamış duvarı ve Keltlerin ölümsüz porsuk ağacı gibi; krizin içinden bilgelik sesi çıkarır.",
      en: "Drawing clear voice and ancestral endurance out of the deepest waters of autumn.",
      sv: "Att föra fram klar röst och uthållighet ur höstens djupaste vatten.",
    },
    href: "/kelt/ucuncu-aicme",
  },
  {
    start: 1125,
    end: 1223,
    glyph: "ᚏ",
    name: { tr: "Ruis · Mürver Ağacı", en: "Ruis · Elder Tree", sv: "Ruis · Fläder" },
    subtitle: {
      tr: "Döngünün Tamamlanışı ve Eşik Bilgeliği",
      en: "Completion of the Cycle & Threshold Lore",
      sv: "Cykelns Fullbordan & Tröskelvisdom",
    },
    note: {
      tr: "Yılın son ağacı; eski yılı onurla kapatıp kış gündönümü ışığına yer açan bilge bekçidir.",
      en: "The final tree of the year, closing the old cycle with honor to prepare for the solstice light.",
      sv: "Årets sista träd som avslutar den gamla cykeln inför vintersolståndets ljus.",
    },
    href: "/kelt/ucuncu-aicme",
  },
];

// 24 Rune Solar Wheel (approx 15-day bands starting June 29 with Fehu)
const RUNE_SOLAR_STARTS: Array<{ month: number; day: number; slug: string }> = [
  { month: 1, day: 6, slug: "perthro" },
  { month: 1, day: 21, slug: "algiz" },
  { month: 2, day: 5, slug: "sowilo" },
  { month: 2, day: 20, slug: "tiwaz" },
  { month: 3, day: 7, slug: "berkano" },
  { month: 3, day: 22, slug: "ehwaz" },
  { month: 4, day: 6, slug: "mannaz" },
  { month: 4, day: 21, slug: "laguz" },
  { month: 5, day: 6, slug: "ingwaz" },
  { month: 5, day: 21, slug: "dagaz" },
  { month: 6, day: 6, slug: "othala" },
  { month: 6, day: 21, slug: "fehu" },
  { month: 7, day: 6, slug: "uruz" },
  { month: 7, day: 22, slug: "thurisaz" },
  { month: 8, day: 7, slug: "ansuz" },
  { month: 8, day: 23, slug: "raidho" },
  { month: 9, day: 8, slug: "kenaz" },
  { month: 9, day: 23, slug: "gebo" },
  { month: 10, day: 8, slug: "wunjo" },
  { month: 10, day: 23, slug: "hagalaz" },
  { month: 11, day: 7, slug: "nauthiz" },
  { month: 11, day: 22, slug: "isa" },
  { month: 12, day: 7, slug: "jera" },
  { month: 12, day: 22, slug: "eihwaz" },
];

type MesopotamianSignSeal = {
  glyph: string;
  signName: Record<Lang, string>;
  anunnakiPatron: Record<Lang, string>;
  decanRulers: [Record<Lang, string>, Record<Lang, string>, Record<Lang, string>];
  note: Record<Lang, string>;
  href: string;
};

const MESOPOTAMIA_ZODIAC: MesopotamianSignSeal[] = [
  // 0: Aries
  {
    glyph: "♈",
    signName: { tr: "Koç (LU.HUN.GA)", en: "Aries (LU.HUN.GA)", sv: "Väduren (LU.HUN.GA)" },
    anunnakiPatron: {
      tr: "Marduk (Ra) · Koç Çağı ve Bâb-ilim’in Kurucu İradesi",
      en: "Marduk (Ra) · Sovereign Will of the Age of Aries",
      sv: "Marduk (Ra) · Vädurens Tidsålders Suveräna Vilja",
    },
    decanRulers: [
      { tr: "I. Dekan: Mars Yüzü (Saf Cesaret)", en: "I. Decan: Face of Mars", sv: "I. Dekanen: Mars Ansikte" },
      { tr: "II. Dekan: Güneş / Ra Yüzü (Merkez ve Asalet)", en: "II. Decan: Face of the Sun / Ra", sv: "II. Dekanen: Solens / Ras Ansikte" },
      { tr: "III. Dekan: Venüs Yüzü (Ustalık ve Çekim)", en: "III. Decan: Face of Venus", sv: "III. Dekanen: Venus Ansikte" },
    ],
    note: {
      tr: "Sitchin kroniklerinde Marduk’un (Ra) göksel burcu; eski düzeni aşarak kendi merkezini kurma ve öncülük gücü.",
      en: "In Sitchin's chronicles, the celestial sign of Marduk (Ra): pioneering will and claiming one's rightful center.",
      sv: "I Sitchins krönikor Marduks (Ras) himmelstecken: pionjärkraft och förmågan att inta sitt centrum.",
    },
    href: "/mezopotamya/sitchin-enki-ve-marduk-kronikleri",
  },
  // 1: Taurus
  {
    glyph: "♉",
    signName: { tr: "Boğa (GU.ANNA · Gök Boğası)", en: "Taurus (GU.ANNA · Bull of Heaven)", sv: "Oxen (GU.ANNA · Himmelskon)" },
    anunnakiPatron: {
      tr: "Enlil & Ninhursag · Toprağın Kudreti ve Ülker (MUL.MUL)",
      en: "Enlil & Ninhursag · Earth Power & The Pleiades (MUL.MUL)",
      sv: "Enlil & Ninhursag · Jordens Kraft & Plejaderna (MUL.MUL)",
    },
    decanRulers: [
      { tr: "I. Dekan: Merkür Yüzü (Somut Planlama)", en: "I. Decan: Face of Mercury", sv: "I. Dekanen: Merkurius Ansikte" },
      { tr: "II. Dekan: Ay Yüzü (Bereket ve Hafıza)", en: "II. Decan: Face of the Moon", sv: "II. Dekanen: Månens Ansikte" },
      { tr: "III. Dekan: Satürn Yüzü (Sarsılmaz Yapı)", en: "III. Decan: Face of Saturn", sv: "III. Dekanen: Saturnus Ansikte" },
    ],
    note: {
      tr: "MUL.APIN yıldız kataloğunun ilk takımyıldızı (Ülker ve Gök Boğası); kalıcı değer, sadakat ve sarsılmaz zemin.",
      en: "The opening constellation of the MUL.APIN catalogue; enduring worth, loyalty, and unshakable ground.",
      sv: "Den första stjärnbilden i MUL.APIN-katalogen; bestående värde och fast grund.",
    },
    href: "/mezopotamya/ziggurat-ve-yildizlar",
  },
  // 2: Gemini
  {
    glyph: "♊",
    signName: { tr: "İkizler (MASH.TAB.BA · Büyük İkizler)", en: "Gemini (MASH.TAB.BA · Great Twins)", sv: "Tvillingarna (MASH.TAB.BA)" },
    anunnakiPatron: {
      tr: "Ningişzida (Thoth) & Nabu · Kalem, Sarmal Yılan ve Bilim",
      en: "Ningishzida (Thoth) & Nabu · Stylus, Serpent & Science",
      sv: "Ningishzida (Thoth) & Nabu · Skrivkonst & Vetenskap",
    },
    decanRulers: [
      { tr: "I. Dekan: Jüpiter Yüzü (Derin Öğrenme)", en: "I. Decan: Face of Jupiter", sv: "I. Dekanen: Jupiters Ansikte" },
      { tr: "II. Dekan: Mars Yüzü (Keskin Zihin)", en: "II. Decan: Face of Mars", sv: "II. Dekanen: Mars Ansikte" },
      { tr: "III. Dekan: Güneş Yüzü (Parlak Söz)", en: "III. Decan: Face of the Sun", sv: "III. Dekanen: Solens Ansikte" },
    ],
    note: {
      tr: "Enki’nin bilge oğlu Ningişzida (Thoth) ve kader kâtibi Nabu’nun frekansı; iki dünya arasında köprü kuran zeka.",
      en: "Aligned with Enki's wise son Ningishzida (Thoth) and Nabu; intelligence bridging worlds.",
      sv: "Förbunden med Enkis vise son Ningishzida (Thoth) och Nabu; tankens bro mellan världar.",
    },
    href: "/mezopotamya/sitchin-enki-ve-marduk-kronikleri",
  },
  // 3: Cancer
  {
    glyph: "♋",
    signName: { tr: "Yengeç (AL.LUL · Göksel Kök)", en: "Cancer (AL.LUL)", sv: "Kräftan (AL.LUL)" },
    anunnakiPatron: {
      tr: "Nannar (Sin) & Ningal · Ay Işığı ve Soy Hafızası",
      en: "Nannar (Sin) & Ningal · Lunar Light & Ancestral Memory",
      sv: "Nannar (Sin) & Ningal · Månljus & Släktminne",
    },
    decanRulers: [
      { tr: "I. Dekan: Venüs Yüzü (Şefkat ve Yuva)", en: "I. Decan: Face of Venus", sv: "I. Dekanen: Venus Ansikte" },
      { tr: "II. Dekan: Merkür Yüzü (Sezgisel Hafıza)", en: "II. Decan: Face of Mercury", sv: "II. Dekanen: Merkurius Ansikte" },
      { tr: "III. Dekan: Ay Yüzü (Derin Koruyuculuk)", en: "III. Decan: Face of the Moon", sv: "III. Dekanen: Månens Ansikte" },
    ],
    note: {
      tr: "Ur ve Harran’ın Ay Efendisi Nannar/Sin’in koruyucu suları; haneyi, kökü ve içsel pusulayı tutan hafıza.",
      en: "The protective waters of Nannar/Sin; deep memory holding home, root, and inner sanctuary.",
      sv: "Nannars/Sins skyddande vatten; det djupa minne som bär hem och rot.",
    },
    href: "/mezopotamya/gunes-ve-ay",
  },
  // 4: Leo
  {
    glyph: "♌",
    signName: { tr: "Aslan (UR.GU.LA · Göksel Aslan)", en: "Leo (UR.GU.LA · Celestial Lion)", sv: "Lejonet (UR.GU.LA)" },
    anunnakiPatron: {
      tr: "Şamaş (Utu) & Marduk · Hakikat Güneşi ve Regulus",
      en: "Shamash (Utu) & Marduk · Sun of Justice & Regulus",
      sv: "Shamash (Utu) & Marduk · Rättvisans Sol & Regulus",
    },
    decanRulers: [
      { tr: "I. Dekan: Satürn Yüzü (Onurlu Otorite)", en: "I. Decan: Face of Saturn", sv: "I. Dekanen: Saturnus Ansikte" },
      { tr: "II. Dekan: Jüpiter Yüzü (Cömert Hüküm)", en: "II. Decan: Face of Jupiter", sv: "II. Dekanen: Jupiters Ansikte" },
      { tr: "III. Dekan: Mars Yüzü (Korkusuz Kalp)", en: "III. Decan: Face of Mars", sv: "III. Dekanen: Mars Ansikte" },
    ],
    note: {
      tr: "Babil’de Kral Yıldızı (LUGAL / Regulus) ve Şamaş’ın her şeyi gören ışığı; gizlisi olmayan vakur liderlik.",
      en: "The King Star (LUGAL / Regulus) of Babylon and the all-seeing light of Shamash.",
      sv: "Kungastjärnan (LUGAL / Regulus) i Babylon och Shamashs klara sol.",
    },
    href: "/mezopotamya/samas-kittum-ve-kozmik-adalet",
  },
  // 5: Virgo
  {
    glyph: "♍",
    signName: { tr: "Başak (AB.SIN · Buğday Başağı)", en: "Virgo (AB.SIN · The Furrow)", sv: "Jungfrun (AB.SIN)" },
    anunnakiPatron: {
      tr: "Ninhursag (Ninmah) & Nisaba · Şimti Evi ve Kutsal Zanaat",
      en: "Ninhursag (Ninmah) & Nisaba · House of Shimti & Craft",
      sv: "Ninhursag (Ninmah) & Nisaba · Shimtis Hus & Hantverk",
    },
    decanRulers: [
      { tr: "I. Dekan: Güneş Yüzü (Titiz Ustalık)", en: "I. Decan: Face of the Sun", sv: "I. Dekanen: Solens Ansikte" },
      { tr: "II. Dekan: Venüs Yüzü (Şifalı Dokunuş)", en: "II. Decan: Face of Venus", sv: "II. Dekanen: Venus Ansikte" },
      { tr: "III. Dekan: Merkür Yüzü (Analitik İdrak)", en: "III. Decan: Face of Mercury", sv: "III. Dekanen: Merkurius Ansikte" },
    ],
    note: {
      tr: "Enki ile birlikte insanlığı şekillendiren başhekim Ninhursag (Ninmah) ve tahıl/yazı tanrıçası Nisaba’nın ince ustalığı.",
      en: "The fine precision of Ninhursag (Ninmah), who fashioned humanity alongside Enki, and Nisaba.",
      sv: "Ninhursags (Ninmahs) fina läkekonst och hantverk vid Enkis sida.",
    },
    href: "/mezopotamya/sitchin-enki-ve-marduk-kronikleri",
  },
  // 6: Libra
  {
    glyph: "♎",
    signName: { tr: "Terazi (ZI.BA.AN.NA · Gökyüzü Terazisi)", en: "Libra (ZI.BA.AN.NA · Scales of Heaven)", sv: "Vågen (ZI.BA.AN.NA)" },
    anunnakiPatron: {
      tr: "İnanna (İştar) & Şamaş · Kittum u Mīšarum (Kozmik Tartı)",
      en: "Inanna (Ishtar) & Shamash · Cosmic Scales of Justice",
      sv: "Inanna (Ishtar) & Shamash · Kosmisk Jämvikt",
    },
    decanRulers: [
      { tr: "I. Dekan: Ay Yüzü (Diplomatik Ayna)", en: "I. Decan: Face of the Moon", sv: "I. Dekanen: Månens Ansikte" },
      { tr: "II. Dekan: Satürn Yüzü (Yücelim / Adil Yasa)", en: "II. Decan: Face of Saturn", sv: "II. Dekanen: Saturnus Ansikte" },
      { tr: "III. Dekan: Jüpiter Yüzü (Barış ve Uyum)", en: "III. Decan: Face of Jupiter", sv: "III. Dekanen: Jupiters Ansikte" },
    ],
    note: {
      tr: "Enki’den Me yasalarını Uruk’a taşıyan İnanna ve Şamaş’ın adalet terazisi; ilişkide ve sözde kusursuz denge.",
      en: "Inanna who carried the Me decrees from Enki, and the scales of Shamash.",
      sv: "Inanna som bar Me-lagarna från Enki och rättvisans vågskål.",
    },
    href: "/mezopotamya/inanna-ve-yedi-kapi",
  },
  // 7: Scorpio
  {
    glyph: "♏",
    signName: { tr: "Akrep (GIR.TAB · Derin Eşik)", en: "Scorpio (GIR.TAB)", sv: "Skorpionen (GIR.TAB)" },
    anunnakiPatron: {
      tr: "E.A / Enki & Ereşkigal · Abzu’nun Sırları ve Küllerinden Doğuş",
      en: "E.A / Enki & Ereshkigal · Secrets of the Abzu & Rebirth",
      sv: "E.A / Enki & Ereshkigal · Abzus Hemligheter & Förvandling",
    },
    decanRulers: [
      { tr: "I. Dekan: Mars Yüzü (Sarsılmaz İrade)", en: "I. Decan: Face of Mars", sv: "I. Dekanen: Mars Ansikte" },
      { tr: "II. Dekan: Güneş Yüzü (Karanlığı Aydınlatan Göz)", en: "II. Decan: Face of the Sun", sv: "II. Dekanen: Solens Ansikte" },
      { tr: "III. Dekan: Venüs Yüzü (Derin Sadakat)", en: "III. Decan: Face of Venus", sv: "III. Dekanen: Venus Ansikte" },
    ],
    note: {
      tr: "Yüzeyin altındaki gerçeği gören derin Abzu bakışı; sahte olanı yakıp özdeki altını çıkaran simya gücü.",
      en: "The deep gaze of the Abzu seeing beneath the surface; transmuting crisis into gold.",
      sv: "Abzus djupa blick som ser under ytan och förvandlar prövning till styrka.",
    },
    href: "/mezopotamya/abzu-ve-asalluhi",
  },
  // 8: Sagittarius
  {
    glyph: "♐",
    signName: { tr: "Yay (PA.BIL.SAG · Kanatlı Okçu)", en: "Sagittarius (PA.BIL.SAG)", sv: "Skytten (PA.BIL.SAG)" },
    anunnakiPatron: {
      tr: "Marduk & Ninurta · Uzak Ufuk ve Göksel Yörünge",
      en: "Marduk & Ninurta · Far Horizon & Celestial Orbit",
      sv: "Marduk & Ninurta · Horisont & Himmelsk Bana",
    },
    decanRulers: [
      { tr: "I. Dekan: Merkür Yüzü (Felsefi Ok)", en: "I. Decan: Face of Mercury", sv: "I. Dekanen: Merkurius Ansikte" },
      { tr: "II. Dekan: Ay Yüzü (Gezgin Sezgisi)", en: "II. Decan: Face of the Moon", sv: "II. Dekanen: Månens Ansikte" },
      { tr: "III. Dekan: Satürn Yüzü (Usta Öğretmen)", en: "III. Decan: Face of Saturn", sv: "III. Dekanen: Saturnus Ansikte" },
    ],
    note: {
      tr: "Hedefe kilitlenen ok ve genişleyen ufuk; sınırları aşarak hakikati ve yüksek anlamı arayan bilge ruh.",
      en: "The arrow aimed at the far horizon; seeking truth and higher meaning across boundaries.",
      sv: "Pilen riktad mot horisonten; sökandet efter sanning och mening.",
    },
    href: "/mezopotamya/ziggurat-ve-yildizlar",
  },
  // 9: Capricorn
  {
    glyph: "♑",
    signName: { tr: "Oğlak (SUHUR.MASH · Enki’nin Su Keçisi)", en: "Capricorn (SUHUR.MASH · Enki's Goat-Fish)", sv: "Stenbocken (SUHUR.MASH · Enkis Getfisk)" },
    anunnakiPatron: {
      tr: "E.A / Enki · Su Keçisi (Abzu’nun Derinliği ve Zirvenin İnşası)",
      en: "E.A / Enki · The Goat-Fish (Depth of Abzu & Mountain Peak)",
      sv: "E.A / Enki · Getfisken (Abzus Djup & Bergets Topp)",
    },
    decanRulers: [
      { tr: "I. Dekan: Jüpiter Yüzü (Bilge Mimari)", en: "I. Decan: Face of Jupiter", sv: "I. Dekanen: Jupiters Ansikte" },
      { tr: "II. Dekan: Mars Yüzü (Yücelim / Yorumsuz Azim)", en: "II. Decan: Face of Mars", sv: "II. Dekanen: Mars Ansikte" },
      { tr: "III. Dekan: Güneş Yüzü (Zamana Dayanan Taç)", en: "III. Decan: Face of the Sun", sv: "III. Dekanen: Solens Ansikte" },
    ],
    note: {
      tr: "Babil sınır taşlarında (Kudurru) doğrudan **Enki’nin kişisel sembolü** olan Su Keçisi (*Suhurmashu*): Hem en derin okyanusta (Abzu) yüzebilen hem en dik dağa tırmanabilen bilgelik.",
      en: "On Babylonian boundary stones, the Goat-Fish (*Suhurmashu*) is **Enki's personal emblem**: at home both in the deepest Abzu and on the highest summit.",
      sv: "På babyloniska gränsstenar är Getfisken (*Suhurmashu*) **Enkis eget tecken**: hemma både i Abzus djup och på bergets krön.",
    },
    href: "/mezopotamya/sitchin-enki-ve-marduk-kronikleri",
  },
  // 10: Aquarius
  {
    glyph: "♒",
    signName: { tr: "Kova (GU.LA · Hayat Suyunu Döken)", en: "Aquarius (GU.LA · The Great Water-Pourer)", sv: "Vattumannen (GU.LA)" },
    anunnakiPatron: {
      tr: "E.A / Enki · Abzu Testisinden İnsanlığa Bilgelik Döken Efendi",
      en: "E.A / Enki · Pouring the Waters of Wisdom from the Abzu",
      sv: "E.A / Enki · Den Som Gjutit Visdomens Vatten ur Abzu",
    },
    decanRulers: [
      { tr: "I. Dekan: Venüs Yüzü (İnsancıl Vizyon)", en: "I. Decan: Face of Venus", sv: "I. Dekanen: Venus Ansikte" },
      { tr: "II. Dekan: Merkür Yüzü (Özgün Buluş ve Bilim)", en: "II. Decan: Face of Mercury", sv: "II. Dekanen: Merkurius Ansikte" },
      { tr: "III. Dekan: Ay Yüzü (Geleceği Sezen Göz)", en: "III. Decan: Face of the Moon", sv: "III. Dekanen: Månens Ansikte" },
    ],
    note: {
      tr: "Sümer mühürlerinde omuzlarından iki nehir (Dicle ve Fırat / yaşam sarmalı) akan **Enki (E.A)** tasvirinin gökyüzündeki karşılığı: Bilimi ve özgür düşünceyi insanlığa akıtan kaynak.",
      en: "Derived directly from cylinder seals of **Enki (E.A)** with twin streams flowing from his shoulders: pouring science and freedom into human consciousness.",
      sv: "Härledd ur cylindersigillen av **Enki (E.A)** med två strömmar från sina axlar: vetenskapens och den fria tankens källa.",
    },
    href: "/mezopotamya/sitchin-enki-ve-marduk-kronikleri",
  },
  // 11: Pisces
  {
    glyph: "♓",
    signName: { tr: "Balık (SIM.MAH & ANUNITU · İki Göksel Kordon)", en: "Pisces (SIM.MAH & ANUNITU)", sv: "Fiskarna (SIM.MAH & ANUNITU)" },
    anunnakiPatron: {
      tr: "E.A / Enki, Anu & Yedi Apkallu Bilgesi · Derin Okyanus Hafızası",
      en: "E.A / Enki, Anu & Seven Apkallu Sages · Deep Ocean Memory",
      sv: "E.A / Enki, Anu & De Sju Apkallu-Vise · Djuphavsminne",
    },
    decanRulers: [
      { tr: "I. Dekan: Satürn Yüzü (Derin Tefekkür)", en: "I. Decan: Face of Saturn", sv: "I. Dekanen: Saturnus Ansikte" },
      { tr: "II. Dekan: Jüpiter Yüzü (Ruhsal Zenginlik)", en: "II. Decan: Face of Jupiter", sv: "II. Dekanen: Jupiters Ansikte" },
      { tr: "III. Dekan: Mars Yüzü (Yeni Döngüye Doğuş)", en: "III. Decan: Face of Mars", sv: "III. Dekanen: Mars Ansikte" },
    ],
    note: {
      tr: "Eridu’nun Yedi Apkallu bilgesinin (Oannes) derin sulardan çıkıp insanlığa bilgelik getirdiği burç; yüksek sezgi ve merhamet.",
      en: "The sign of Eridu's Seven Apkallu sages rising from the deep waters to teach civilization.",
      sv: "Tecknet för Eridus Sju Apkallu-vise som steg ur djupet med visdom.",
    },
    href: "/mezopotamya/eridu-yedi-bilgesi-apkallu",
  },
];

const MONTHS: Record<Lang, string[]> = {
  tr: [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ],
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  sv: [
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December",
  ],
};

function findBirthRune(month: number, day: number): Rune {
  const mmdd = month * 100 + day;
  let chosenSlug = "eihwaz"; // Dec 22 - Jan 5 wraps around year end
  for (const item of RUNE_SOLAR_STARTS) {
    const startMmdd = item.month * 100 + item.day;
    if (mmdd >= startMmdd) {
      chosenSlug = item.slug;
    }
  }
  return runes.find((r) => r.slug === chosenSlug) ?? runes[0];
}

function findOghamTree(month: number, day: number): OghamTreeSpan {
  const mmdd = month * 100 + day;
  if (mmdd >= 1224 || mmdd <= 120) return OGHAM_CALENDAR[0];
  return (
    OGHAM_CALENDAR.find((t) => mmdd >= t.start && mmdd <= t.end) ??
    OGHAM_CALENDAR[0]
  );
}

function findMesopotamiaZodiac(
  month: number,
  day: number,
): { sign: MesopotamianSignSeal; decanIndex: 0 | 1 | 2 } {
  const point = month * 100 + day;
  const bands: Array<[number, number, number, number]> = [
    [101, 119, 9, 1222],
    [120, 218, 10, 120],
    [219, 320, 11, 219],
    [321, 419, 0, 321],
    [420, 520, 1, 420],
    [521, 620, 2, 521],
    [621, 722, 3, 621],
    [723, 822, 4, 723],
    [823, 922, 5, 823],
    [923, 1022, 6, 923],
    [1023, 1121, 7, 1023],
    [1122, 1221, 8, 1122],
    [1222, 1231, 9, 1222],
  ];
  const matched = bands.find(([s, e]) => point >= s && point <= e) ?? bands[0];
  const signIdx = matched[2];
  // Approximate decan (0, 1, or 2) based on position in the sign
  let decanIndex: 0 | 1 | 2 = 0;
  if (day >= 1 && day <= 10) decanIndex = 1;
  else if (day >= 11 && day <= 20) decanIndex = 2;
  else decanIndex = 0;

  return {
    sign: MESOPOTAMIA_ZODIAC[signIdx],
    decanIndex,
  };
}

const UI = {
  tr: {
    badge: "🧭 KİŞİSEL KADİM DOĞUM MÜHRÜ HESAPLAYICI · 3 GELENEK BİR ARADA",
    heading: "Doğum Gününden 3 Kadim Mührünü Bul",
    sub: "Doğduğun gün ve ayı seç; Kuzey Güneş Halkası Rününü, Kelt Ogham Ağacını ve Sitchin/Mezopotamya Gökyüzü Gözcünü (Enki · Marduk · 36 Dekan) aynı anda keşfet ve kendi Story kartını indir.",
    dayLabel: "Gün",
    monthLabel: "Ay",
    pillar1: "I · KUZEY DOĞUM RÜNÜ",
    pillar2: "II · KELT OGHAM AĞACI",
    pillar3: "III · MEZOPOTAMYA & SITCHIN GÖK MÜHRÜ",
    openRoom: "Bu Odayı İncele →",
    cardTitlePrefix: "Doğum Mührü",
  },
  en: {
    badge: "🧭 PERSONAL ANCIENT BIRTH SEAL FINDER · 3 TRADITIONS IN ONE",
    heading: "Find Your 3 Ancient Seals by Birth Date",
    sub: "Select your birth day and month to reveal your Northern Solar Birth Rune, Celtic Ogham Tree, and Mesopotamian/Sitchin Sky Watcher (Enki · Marduk · 36 Decans), then download your Story card.",
    dayLabel: "Day",
    monthLabel: "Month",
    pillar1: "I · NORTHERN BIRTH RUNE",
    pillar2: "II · CELTIC OGHAM TREE",
    pillar3: "III · MESOPOTAMIA & SITCHIN SKY SEAL",
    openRoom: "Explore This Room →",
    cardTitlePrefix: "Birth Seal",
  },
  sv: {
    badge: "🧭 PERSONLIGT FORNTIDA FÖDELSESIGILL · 3 TRADITIONER",
    heading: "Finn Dina 3 Forntida Sigill utifrån Födelsedag",
    sub: "Välj födelsedag och månad för att se din Nordiska Födelseruna, ditt Keltiska Oghamträd och din Mesopotamiska Stjärnväktare (Enki · Marduk · 36 Dekaner).",
    dayLabel: "Dag",
    monthLabel: "Månad",
    pillar1: "I · NORDISK FÖDELSERUNA",
    pillar2: "II · KELTISKT OGHAMTRÄD",
    pillar3: "III · MESOPOTAMISKT HIMMELSSIGILL",
    openRoom: "Utforska Rummet →",
    cardTitlePrefix: "Födelsesigill",
  },
} as const;

export function BirthSealFinder() {
  const { lang } = useLanguage();
  const ui = UI[lang];
  const [day, setDay] = useState<number>(15);
  const [month, setMonth] = useState<number>(4); // Default 15 April (Aries / Marduk / Saille / Mannaz)

  const birthRune = findBirthRune(month, day);
  const oghamTree = findOghamTree(month, day);
  const { sign: mesoSign, decanIndex } = findMesopotamiaZodiac(month, day);
  const decanLabel = mesoSign.decanRulers[decanIndex][lang];
  const dateTitle = `${day} ${MONTHS[lang][month - 1]}`;

  return (
    <section className="mt-8 border border-amber/40 bg-gradient-to-br from-[#161d1a] via-[#111714] to-[#0a0d0b] p-5 sm:p-8">
      <div className="flex flex-col justify-between gap-4 border-b border-amber/20 pb-5 lg:flex-row lg:items-end">
        <div>
          <span className="text-[10px] font-semibold tracking-[0.22em] text-amber uppercase">
            {ui.badge}
          </span>
          <h2 className="mt-2 font-display text-3xl font-medium text-chalk sm:text-4xl">
            {ui.heading}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-chalk/75">
            {ui.sub}
          </p>
        </div>

        {/* Day & Month Selector */}
        <div className="flex shrink-0 items-center gap-2.5 border border-amber/35 bg-black/50 p-2.5">
          <div className="flex flex-col">
            <label
              htmlFor="birth-day-select"
              className="text-[9px] tracking-[0.18em] text-amber/80 uppercase"
            >
              {ui.dayLabel}
            </label>
            <select
              id="birth-day-select"
              value={day}
              onChange={(e) => setDay(Number(e.target.value))}
              className="mt-1 border border-chalk/25 bg-[#0e1311] px-3 py-1.5 font-display text-base text-chalk focus:border-amber focus:outline-none"
            >
              {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="birth-month-select"
              className="text-[9px] tracking-[0.18em] text-amber/80 uppercase"
            >
              {ui.monthLabel}
            </label>
            <select
              id="birth-month-select"
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
              className="mt-1 border border-chalk/25 bg-[#0e1311] px-3 py-1.5 font-display text-base text-chalk focus:border-amber focus:outline-none"
            >
              {MONTHS[lang].map((mName, idx) => (
                <option key={mName} value={idx + 1}>
                  {mName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Three Ancient Birth Seals Grid */}
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {/* 1. Northern Birth Rune */}
        <article className="card-slate flex flex-col justify-between border border-chalk/15 p-5">
          <div>
            <div className="flex items-center justify-between text-[10px] tracking-[0.18em] text-amber uppercase">
              <span>{ui.pillar1}</span>
              <span>
                {String(birthRune.index).padStart(2, "0")} / XXIV · Aett {birthRune.aett}
              </span>
            </div>
            <div className="mt-4 flex items-center gap-3.5">
              <span className="font-display text-5xl leading-none text-amber">
                {birthRune.glyph}
              </span>
              <div>
                <h3 className="font-display text-2xl font-medium text-chalk">
                  {birthRune.name} ({birthRune.protoGermanic})
                </h3>
                <p className="mt-0.5 text-xs text-amber/85 italic">
                  {birthRune.subtitle[lang]}
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs leading-5 text-chalk/80 line-clamp-4">
              {birthRune.text[lang][0]}
            </p>
          </div>
          <Link
            href={`/runler/${birthRune.slug}`}
            className="mt-5 flex items-center justify-between border-t border-chalk/10 pt-3 text-[10px] tracking-[0.16em] text-chalk/70 uppercase hover:text-amber"
          >
            <span>{ui.openRoom}</span>
            <span aria-hidden>→</span>
          </Link>
        </article>

        {/* 2. Celtic Ogham Tree */}
        <article className="card-slate flex flex-col justify-between border border-chalk/15 p-5">
          <div>
            <div className="flex items-center justify-between text-[10px] tracking-[0.18em] text-amber uppercase">
              <span>{ui.pillar2}</span>
              <span>BEITH-LUIS-NIN</span>
            </div>
            <div className="mt-4 flex items-center gap-3.5">
              <span className="font-display text-5xl leading-none text-amber">
                {oghamTree.glyph}
              </span>
              <div>
                <h3 className="font-display text-2xl font-medium text-chalk">
                  {oghamTree.name[lang]}
                </h3>
                <p className="mt-0.5 text-xs text-amber/85 italic">
                  {oghamTree.subtitle[lang]}
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs leading-5 text-chalk/80">
              {oghamTree.note[lang]}
            </p>
          </div>
          <Link
            href={oghamTree.href}
            className="mt-5 flex items-center justify-between border-t border-chalk/10 pt-3 text-[10px] tracking-[0.16em] text-chalk/70 uppercase hover:text-amber"
          >
            <span>{ui.openRoom}</span>
            <span aria-hidden>→</span>
          </Link>
        </article>

        {/* 3. Mesopotamian / Sitchin & Chaldean Decan Seal */}
        <article className="card-slate flex flex-col justify-between border border-chalk/15 p-5">
          <div>
            <div className="flex items-center justify-between text-[10px] tracking-[0.18em] text-amber uppercase">
              <span>{ui.pillar3}</span>
              <span>{decanLabel.split(":")[0]}</span>
            </div>
            <div className="mt-4 flex items-center gap-3.5">
              <span className="font-display text-5xl leading-none text-amber">
                {mesoSign.glyph}
              </span>
              <div>
                <h3 className="font-display text-2xl font-medium text-chalk">
                  {mesoSign.signName[lang]}
                </h3>
                <p className="mt-0.5 text-xs text-amber/90 font-medium">
                  {mesoSign.anunnakiPatron[lang]}
                </p>
              </div>
            </div>
            <p className="mt-2 border-l-2 border-amber/45 pl-2.5 text-[11px] text-chalk/75">
              {decanLabel}
            </p>
            <p className="mt-2.5 text-xs leading-5 text-chalk/80">
              {mesoSign.note[lang]}
            </p>
          </div>
          <Link
            href={mesoSign.href}
            className="mt-5 flex items-center justify-between border-t border-chalk/10 pt-3 text-[10px] tracking-[0.16em] text-chalk/70 uppercase hover:text-amber"
          >
            <span>{ui.openRoom}</span>
            <span aria-hidden>→</span>
          </Link>
        </article>
      </div>

      {/* Download 1080x1920 Personal Birth Seal Story Card */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-amber/20 pt-4">
        <p className="text-xs text-chalk/70">
          ✦ <strong className="text-amber">{dateTitle}</strong> · {birthRune.glyph}{" "}
          {birthRune.name} · {oghamTree.glyph} {oghamTree.name[lang]} · {mesoSign.glyph}{" "}
          {mesoSign.anunnakiPatron[lang]}
        </p>
        <SealCardGenerator
          filename={`runeyard-dogum-muhru-${day}-${month}`}
          badge={`3 KADİM GELENEK DOĞUM MÜHRÜ · ${dateTitle.toUpperCase()}`}
          title={`${dateTitle} · ${ui.cardTitlePrefix}`}
          body={birthRune.text[lang][0]}
          stones={[
            {
              positionTag: ui.pillar1,
              glyph: birthRune.glyph,
              name: `${birthRune.name} (${birthRune.protoGermanic})`,
              subtitle: birthRune.subtitle[lang],
              flowLabel: `Aett ${birthRune.aett}`,
              note: birthRune.text[lang][0],
            },
            {
              positionTag: ui.pillar2,
              glyph: oghamTree.glyph,
              name: oghamTree.name[lang],
              subtitle: oghamTree.subtitle[lang],
              flowLabel: "Ogham",
              note: oghamTree.note[lang],
            },
            {
              positionTag: ui.pillar3,
              glyph: mesoSign.glyph,
              name: mesoSign.signName[lang],
              subtitle: mesoSign.anunnakiPatron[lang],
              flowLabel: decanLabel.split(":")[0],
              note: mesoSign.note[lang],
            },
          ]}
        />
      </div>
    </section>
  );
}
