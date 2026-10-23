import type { Lang } from "@/lib/copy";
import { runes as runeSheets } from "@/content/runes";

export type HearthVoice = "not" | "model";

export type HearthReply = {
  answer: string;
  voice: HearthVoice;
};

type RuneIndex = {
  slug: string;
  name: string;
  glyph: string;
  aliases: string[];
};

const runeIndex: RuneIndex[] = [
  { slug: "fehu", name: "Fehu", glyph: "ᚠ", aliases: ["fehu"] },
  { slug: "uruz", name: "Uruz", glyph: "ᚢ", aliases: ["uruz"] },
  { slug: "thurisaz", name: "Thurisaz", glyph: "ᚦ", aliases: ["thurisaz", "thurs"] },
  { slug: "ansuz", name: "Ansuz", glyph: "ᚨ", aliases: ["ansuz"] },
  { slug: "raidho", name: "Raidho", glyph: "ᚱ", aliases: ["raidho", "raido"] },
  { slug: "kenaz", name: "Kenaz", glyph: "ᚲ", aliases: ["kenaz", "kaunan"] },
  { slug: "gebo", name: "Gebo", glyph: "ᚷ", aliases: ["gebo", "gyfu"] },
  { slug: "wunjo", name: "Wunjo", glyph: "ᚹ", aliases: ["wunjo"] },
  { slug: "hagalaz", name: "Hagalaz", glyph: "ᚺ", aliases: ["hagalaz", "hagal"] },
  { slug: "nauthiz", name: "Nauthiz", glyph: "ᚾ", aliases: ["nauthiz", "naudiz"] },
  { slug: "isa", name: "Isa", glyph: "ᛁ", aliases: ["isa"] },
  { slug: "jera", name: "Jera", glyph: "ᛃ", aliases: ["jera"] },
  { slug: "eihwaz", name: "Eihwaz", glyph: "ᛇ", aliases: ["eihwaz", "ihwaz"] },
  { slug: "perthro", name: "Perthro", glyph: "ᛈ", aliases: ["perthro", "perth"] },
  { slug: "algiz", name: "Algiz", glyph: "ᛉ", aliases: ["algiz", "elhaz"] },
  { slug: "sowilo", name: "Sowilo", glyph: "ᛊ", aliases: ["sowilo", "sowelu", "sigel"] },
  { slug: "tiwaz", name: "Tiwaz", glyph: "ᛏ", aliases: ["tiwaz", "tyr"] },
  { slug: "berkano", name: "Berkano", glyph: "ᛒ", aliases: ["berkano", "berkana"] },
  { slug: "ehwaz", name: "Ehwaz", glyph: "ᛖ", aliases: ["ehwaz"] },
  { slug: "mannaz", name: "Mannaz", glyph: "ᛗ", aliases: ["mannaz"] },
  { slug: "laguz", name: "Laguz", glyph: "ᛚ", aliases: ["laguz", "lagu"] },
  { slug: "ingwaz", name: "Ingwaz", glyph: "ᛜ", aliases: ["ingwaz", "ing"] },
  { slug: "dagaz", name: "Dagaz", glyph: "ᛞ", aliases: ["dagaz"] },
  { slug: "othala", name: "Othala", glyph: "ᛟ", aliases: ["othala", "odal"] },
];

type SignInfo = {
  aliases: string[];
  tr: { name: string; span: string; note: string };
  en: { name: string; span: string; note: string };
  sv: { name: string; span: string; note: string };
};

const signs: SignInfo[] = [
  {
    aliases: ["koc", "aries", "vaduren"],
    tr: { name: "Koç", span: "21 Mart – 19 Nisan", note: "Ateş. Başlangıç, öne çıkan hareket ve saf irade." },
    en: { name: "Aries", span: "21 March – 19 April", note: "Fire. Beginning, forward motion, and raw will." },
    sv: { name: "Väduren", span: "21 mars – 19 april", note: "Eld. Början, framåtrörelse och ren vilja." },
  },
  {
    aliases: ["boga", "taurus", "oxen"],
    tr: { name: "Boğa", span: "20 Nisan – 20 Mayıs", note: "Toprak. Süre, beden, köklenme ve elde tutulan değer." },
    en: { name: "Taurus", span: "20 April – 20 May", note: "Earth. Duration, body, rooting, and held value." },
    sv: { name: "Oxen", span: "20 april – 20 maj", note: "Jord. Varaktighet, kropp, förankring och bevarat värde." },
  },
  {
    aliases: ["ikizler", "gemini", "tvillingarna"],
    tr: { name: "İkizler", span: "21 Mayıs – 20 Haziran", note: "Hava. İki yön, haber, merak ve yakın konuşma." },
    en: { name: "Gemini", span: "21 May – 20 June", note: "Air. Two directions, news, curiosity, and close speech." },
    sv: { name: "Tvillingarna", span: "21 maj – 20 juni", note: "Luft. Två riktningar, budskap, nyfikenhet och nära samtal." },
  },
  {
    aliases: ["yengec", "cancer", "kraftan"],
    tr: { name: "Yengeç", span: "21 Haziran – 22 Temmuz", note: "Su. Yuva, hafıza, korunma ve köklerin suyu." },
    en: { name: "Cancer", span: "21 June – 22 July", note: "Water. Home, memory, shelter, and the water of roots." },
    sv: { name: "Kräftan", span: "21 juni – 22 juli", note: "Vatten. Hem, minne, skydd och rötternas vatten." },
  },
  {
    aliases: ["aslan", "leo", "lejonet"],
    tr: { name: "Aslan", span: "23 Temmuz – 22 Ağustos", note: "Ateş. Görünen merkez, sıcaklık ve ortaya konan öz." },
    en: { name: "Leo", span: "23 July – 22 August", note: "Fire. Visible center, warmth, and the heart set forth." },
    sv: { name: "Lejonet", span: "23 juli – 22 augusti", note: "Eld. Synligt centrum, värme och det som ställs fram." },
  },
  {
    aliases: ["basak", "virgo", "jungfrun"],
    tr: { name: "Başak", span: "23 Ağustos – 22 Eylül", note: "Toprak. Ayıklama, emek, ritim ve ince ayrıntı." },
    en: { name: "Virgo", span: "23 August – 22 September", note: "Earth. Winnowing, craft, rhythm, and fine detail." },
    sv: { name: "Jungfrun", span: "23 augusti – 22 september", note: "Jord. Sortering, hantverk, rytm och fin detalj." },
  },
  {
    aliases: ["terazi", "libra", "vagen"],
    tr: { name: "Terazi", span: "23 Eylül – 22 Ekim", note: "Hava. İlişki, tartı, adalet ve karşıdaki kişiyle kurulan denge." },
    en: { name: "Libra", span: "23 September – 22 October", note: "Air. Relation, the scales, justice, and balance with the other." },
    sv: { name: "Vågen", span: "23 september – 22 oktober", note: "Luft. Relation, vågskål, rättvisa och jämvikt med den andre." },
  },
  {
    aliases: ["akrep", "scorpio", "skorpionen"],
    tr: { name: "Akrep", span: "23 Ekim – 21 Kasım", note: "Su. Derinlik, eşik, krizle gelen dönüşüm ve gizli olan." },
    en: { name: "Scorpio", span: "23 October – 21 November", note: "Water. Depth, threshold, transformation through crisis, and the hidden." },
    sv: { name: "Skorpionen", span: "23 oktober – 21 november", note: "Vatten. Djup, tröskel, förvandling genom kris och det dolda." },
  },
  {
    aliases: ["yay", "sagittarius", "skytten"],
    tr: { name: "Yay", span: "22 Kasım – 21 Aralık", note: "Ateş. Ufuk, anlam arayışı, okun yönü ve uzağa giden yol." },
    en: { name: "Sagittarius", span: "22 November – 21 December", note: "Fire. Horizon, search for meaning, aim of the arrow, and the far road." },
    sv: { name: "Skytten", span: "22 november – 21 december", note: "Eld. Horisont, meningssökande, pilens riktning och den långa vägen." },
  },
  {
    aliases: ["oglak", "capricorn", "stenbocken"],
    tr: { name: "Oğlak", span: "22 Aralık – 19 Ocak", note: "Toprak. Süreç, sabır, omurga ve zamana dayanan yapı." },
    en: { name: "Capricorn", span: "22 December – 19 January", note: "Earth. Process, patience, spine, and structure that endures time." },
    sv: { name: "Stenbocken", span: "22 december – 19 januari", note: "Jord. Process, tålamod, ryggrad och struktur som bär genom tiden." },
  },
  {
    aliases: ["kova", "aquarius", "vattumannen"],
    tr: { name: "Kova", span: "20 Ocak – 18 Şubat", note: "Hava. Aralık, topluluk, bağımsız bakış ve alışılmamış düzen." },
    en: { name: "Aquarius", span: "20 January – 18 February", note: "Air. Interval, community, independent sight, and uncommon order." },
    sv: { name: "Vattumannen", span: "20 januari – 18 februari", note: "Luft. Mellanrum, gemenskap, fri blick och ovanlig ordning." },
  },
  {
    aliases: ["balik", "pisces", "fiskarna"],
    tr: { name: "Balık", span: "19 Şubat – 20 Mart", note: "Su. Dağılma, sınırın incelmesi, rüya ve sezgisel imge." },
    en: { name: "Pisces", span: "19 February – 20 March", note: "Water. Dissolution, thinning of borders, dream, and intuitive image." },
    sv: { name: "Fiskarna", span: "19 februari – 20 mars", note: "Vatten. Upplösning, tunna gränser, dröm och intuitiv bild." },
  },
];

const monthAliases: Record<string, number> = {
  ocak: 1, january: 1, januari: 1,
  subat: 2, february: 2, februari: 2,
  mart: 3, march: 3, mars: 3,
  nisan: 4, april: 4,
  mayis: 5, may: 5, maj: 5,
  haziran: 6, june: 6, juni: 6,
  temmuz: 7, july: 7, juli: 7,
  agustos: 8, august: 8, augusti: 8,
  eylul: 9, september: 9,
  ekim: 10, october: 10, oktober: 10,
  kasim: 11, november: 11,
  aralik: 12, december: 12,
};

function fold(value: string) {
  return value
    .toLocaleLowerCase("tr")
    .replaceAll("ı", "i")
    .replaceAll("å", "a")
    .replaceAll("ä", "a")
    .replaceAll("ö", "o")
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

function hasWord(text: string, word: string) {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`).test(text);
}

function sunSignIndex(month: number, day: number): number | null {
  const point = month * 100 + day;
  const bands: [number, number, number][] = [
    [101, 119, 9],
    [120, 218, 10],
    [219, 320, 11],
    [321, 419, 0],
    [420, 520, 1],
    [521, 620, 2],
    [621, 722, 3],
    [723, 822, 4],
    [823, 922, 5],
    [923, 1022, 6],
    [1023, 1121, 7],
    [1122, 1221, 8],
    [1222, 1231, 9],
  ];
  return bands.find(([start, end]) => point >= start && point <= end)?.[2] ?? null;
}

function findDate(text: string) {
  const numeric = text.match(/(^|[^0-9])(\d{1,2})[./](\d{1,2})(?:[./]\d{2,4})?/);
  if (numeric) {
    const day = Number(numeric[2]);
    const month = Number(numeric[3]);
    if (month >= 1 && month <= 12 && day >= 1 && day <= 31) return { day, month };
  }
  const monthKeys = Object.keys(monthAliases).join("|");
  const named = text.match(new RegExp(`(\\d{1,2})\\s+(${monthKeys})`));
  if (!named) return null;
  const day = Number(named[1]);
  const month = monthAliases[named[2]];
  if (!month || day < 1 || day > 31) return null;
  return { day, month };
}

export function answerFromNotes(question: string, lang: Lang = "tr"): string {
  const text = fold(question);

  const matchedRune = runeIndex.find(
    (item) =>
      text.includes(item.glyph) ||
      item.aliases.some((alias) => hasWord(text, alias)),
  );
  if (matchedRune) {
    const sheet = runeSheets.find((r) => r.slug === matchedRune.slug);
    if (sheet) {
      const firstParagraph = sheet.text[lang][0];
      const deities = sheet.deities.join(" · ");
      return `${sheet.glyph} ${sheet.name} (${deities}) — ${firstParagraph}`;
    }
  }

  const sign = signs.find((item) =>
    item.aliases.some((alias) => hasWord(text, alias)),
  );
  if (sign) {
    const s = sign[lang];
    return `${s.name} (${s.span}) — ${s.note}`;
  }

  const date = findDate(text);
  if (date) {
    const idx = sunSignIndex(date.month, date.day);
    if (idx === null) {
      return lang === "en"
        ? "I could not place that day on the calendar. Write the day and month together."
        : lang === "sv"
          ? "Jag kunde inte placera den dagen i kalendern. Skriv dag och månad tillsammans."
          : "Bu günü takvimde yerine oturtamadım. Günü ve ayı birlikte yaz.";
    }
    const s = signs[idx][lang];
    if (lang === "en") {
      return `For ${date.day}.${date.month}, the tropical Sun sign is ${s.name}. ${s.note} The rising sign also requires birth hour and place.`;
    }
    if (lang === "sv") {
      return `För ${date.day}.${date.month} är det tropiska soltecknet ${s.name}. ${s.note} Ascendenten kräver även födelsetimme och plats.`;
    }
    return `${date.day}.${date.month} için tropik güneş burcu ${s.name}. ${s.note} Yükselen için doğum saati ve yer de gerekir; ocak onu bu kadarıyla kurmaz.`;
  }

  if (hasWord(text, "venus") || hasWord(text, "retro") || hasWord(text, "retrosu") || hasWord(text, "retrograd")) {
    if (lang === "en") {
      return "Venus retrograde runs from 3 October to 14 November 2026: first in Scorpio (3–25 October, depth and hidden dynamics), then in Libra (25 October–14 November, balance, justice, and unfinished ties).";
    }
    if (lang === "sv") {
      return "Venus retrograd pågår 3 oktober – 14 november 2026: först i Skorpionen (3–25 oktober, djup och dolda band), sedan i Vågen (25 oktober–14 november, balans, rättvisa och oavslutade relationer).";
    }
    return "Venüs retrosu 3 Ekim – 14 Kasım 2026 arasında iki fazda ilerliyor: 3–25 Ekim Akrep fazı (derinlik ve gizli dinamikler), 25 Ekim–14 Kasım Terazi fazı (ilişkilerde adalet, denge ve geçmiş hesaplaşmalar).";
  }

  if (
    hasWord(text, "egitim") ||
    hasWord(text, "ders") ||
    hasWord(text, "kurs") ||
    hasWord(text, "samanizm") ||
    hasWord(text, "education") ||
    hasWord(text, "course") ||
    hasWord(text, "utbildning")
  ) {
    if (lang === "en") {
      return "Three study circles are open under Education: Shamanism Training (6 months), Rune Wisdom Training (5 months), and Hand, Face & Element Reading (4 months). For registration: +90 545 564 21 64.";
    }
    if (lang === "sv") {
      return "Tre studiecirklar finns under Utbildning: Schamanismutbildning (6 månader), Utbildning i runvisdom (5 månader) samt Hand-, ansikts- och elementläsning (4 månader). Kontakt: +90 545 564 21 64.";
    }
    return "Eğitim odasında üç halka açık: Şamanizm Eğitimi (6 ay), Rune Bilgeliği Eğitimi (5 ay) ve El, Yüz ve Element Okuma Teknikleri (4 ay). Kayıt ve bilgi için: 0545 564 21 64.";
  }

  if (
    hasWord(text, "uygulama") ||
    hasWord(text, "uygulamalar") ||
    hasWord(text, "app") ||
    hasWord(text, "apps") ||
    hasWord(text, "appar") ||
    hasWord(text, "moonyard") ||
    hasWord(text, "dreamyard") ||
    hasWord(text, "runewords")
  ) {
    if (lang === "en") {
      return "Rune Yard is live on Google Play and the App Store. Moon Yard (lunar calendar & planetary hours), Dream Yard, and RuneWords are on the Apps shelf and coming soon.";
    }
    if (lang === "sv") {
      return "Rune Yard finns ute på Google Play och App Store. Moon Yard (månkalender & planettimmar), Dream Yard och RuneWords står på hyllan under Appar och kommer snart.";
    }
    return "Rune Yard şu an Google Play ve App Store’da yayında. Moon Yard (ay takvimi ve gezegen saatleri), Dream Yard ve RuneWords ise Uygulamalar rafında yakında açılıyor.";
  }

  if (hasWord(text, "ekinoks") || hasWord(text, "equinox") || hasWord(text, "dagjamning") || hasWord(text, "dagjamningen")) {
    if (lang === "en") {
      return "The equinox is the threshold where day and night stand equal. The spring equinox falls around 20 March, and the autumn equinox around 22 September.";
    }
    if (lang === "sv") {
      return "Dagjämningen är tröskeln där dag och natt väger jämnt. Vårdagjämningen infaller kring 20 mars och höstdagjämningen kring 22 september.";
    }
    return "Ekinoks, gündüz ile gecenin eşitlendiği eşiktir. İlkbahar ekinoksu Mart’ın 20’si civarı, sonbahar ekinoksu Eylül’ün 22’si civarı düşer. Yıl yıl bir gün kayabilir.";
  }

  if (hasWord(text, "gundonumu") || text.includes("gun donumu") || hasWord(text, "solstice") || hasWord(text, "solstand")) {
    if (lang === "en") {
      return "The solstice marks the longest or shortest day of the sun. Summer solstice falls around 21 June, winter solstice around 21 December.";
    }
    if (lang === "sv") {
      return "Solståndet är solens längsta eller kortaste dag. Sommarsolståndet infaller kring 21 juni, vintersolståndet kring 21 december.";
    }
    return "Gündönümü, güneşin en uzun ya da en kısa günüdür. Yaz gündönümü Haziran’ın 21’i civarı, kış gündönümü Aralık’ın 21’i civarı.";
  }

  if (
    hasWord(text, "kavusum") ||
    hasWord(text, "karsit") ||
    hasWord(text, "ucgen") ||
    hasWord(text, "sekstil") ||
    hasWord(text, "aci") ||
    hasWord(text, "kare") ||
    hasWord(text, "aspect") ||
    hasWord(text, "aspects")
  ) {
    if (lang === "en") {
      return "An aspect is the angular distance between two points in the sky. Conjunction stands together, opposition faces across, trine flows, square creates friction, and sextile opens a quiet path.";
    }
    if (lang === "sv") {
      return "En aspekt är vinkelavståndet mellan två punkter på himlen. Konjunktion står tillsammans, opposition står mittemot, trigon flyter, kvadratur skaver och sextil öppnar en stilla väg.";
    }
    return "Açı, iki noktanın gökyüzünde birbirine uzaklığıdır. Kavuşum bir arada durur. Karşıtlık karşı karşıyadır. Üçgen akıcı, kare sürtünen, sekstil ise hafif bir açıklıktır. Haritada önce hangi iki nokta konuşuyor, ona bakılır.";
  }

  if (text.includes("evler") || text.includes("yukselen") || text.includes(". ev") || hasWord(text, "houses") || hasWord(text, "ascendant")) {
    if (lang === "en") {
      return "A house shows where a sky event falls in life. The Ascendant is the threshold of the first house and requires birth time and place. 1 self, 2 resources, 3 near kin, 4 home, 5 creation, 6 work & body, 7 the other, 8 threshold, 9 horizon, 10 standing, 11 community, 12 closure.";
    }
    if (lang === "sv") {
      return "Ett hus visar var en himmelshändelse landar i livet. Ascendenten är första husets tröskel och kräver födelsetid och plats. 1 jaget, 2 tillgångar, 3 närhet, 4 hem, 5 skapande, 6 arbete & kropp, 7 den andre, 8 tröskel, 9 horisont, 10 ställning, 11 gemenskap, 12 avslut.";
    }
    return "Ev, gökyüzü olayının hayatta nereye düştüğünü söyler. Yükselen birinci evin eşiğidir; doğum saati ve yer olmadan kurulmaz. Kısa sıra: 1 kişi, 2 sahip olunan, 3 yakın çevre, 4 yuva, 5 ortaya konan, 6 iş ve beden, 7 karşıdaki, 8 eşik, 9 ufuk, 10 duruş, 11 topluluk, 12 kapanan.";
  }

  if (text.includes("harita") || text.includes("natal") || text.includes("burc") || text.includes("chart") || text.includes("karta")) {
    if (lang === "en") {
      return "When reading a chart, keep the order simple: first Sun, Moon, and Ascendant. Then the house in question. Finally the aspects—which two points touch one another. The hearth explains the language rather than writing fixed fate.";
    }
    if (lang === "sv") {
      return "När man läser en karta hålls ordningen enkel: först Sol, Måne och Ascendent. Sedan huset som berörs. Sist aspekterna—vilka två punkter som möts. Härden förklarar språket, den skriver inte ett låst öde.";
    }
    return "Bir haritaya bakarken sıra sade tutulur. Önce güneş, ay ve yükselen. Sonra konuşulan ev. En son açılar: hangi iki nokta birbirine değiyor. Ocak kişiye özel kader yazmaz; dili açıklar.";
  }

  if (lang === "en") {
    return "The hearth hears the names of the runes and the tongue of the sky. Name a sign: Fehu, Uruz, Ansuz. Or ask of Venus retrograde, Libra, 15 April, or where to start with a chart.";
  }
  if (lang === "sv") {
    return "Härden hör runornas namn och himlens språk. Nämn ett tecken: Fehu, Uruz, Ansuz. Eller fråga om Venus retrograd, Vågen, 15 april eller var man börjar med en karta.";
  }
  return "Ocak rün adlarını ve gökyüzünün dilini duyar. Bir işaret söyle: Fehu, Uruz, Ansuz. Ya da bir söz: Venüs retrosu, Terazi, 15 Nisan, eğitimler, haritaya nereden bakılır.";
}

const systemPrompt: Record<Lang, string> = {
  tr: `Sen RuneYard'ın kış odasındaki ocaksın. Mehmet Akdeniz'in kişisel sayfasında, yalnızca rünler (Elder Futhark), şamanik/kadim semboller ve astroloji üzerine konuşursun.
Kısa, sade ve ağırbaşlı Türkçe yaz. İki ile beş cümle yeter.
Rün karşılıklarını tek ve kesin kader diye sunma; hareket, anlam ve sınır olarak söyle.
Kişiye özel yükselen ya da tam harita için doğum saati ve yer gerekir; veri yoksa uydurma.
Tıbbi, hukuki, finansal öğüt verme. Alışveriş önerme.`,
  en: `You are the hearth in the winter hall of RuneYard, Mehmet Akdeniz's personal study. You speak only of the runes (Elder Futhark), ancient symbols, and astrology.
Write in concise, calm English. Two to five sentences are enough.
Do not present rune readings as fixed fate; speak of meaning, movement, and limit.
Personal rising signs or full charts require birth hour and place; do not invent them if absent.`,
  sv: `Du är härden i RuneYards vinterrum, Mehmet Akdeniz personliga studierum. Du talar endast om runor (Elder Futhark), forntida symboler och astrologi.
Skriv på kort, stillsam svenska. Två till fem meningar räcker.
Framställ inte runtydningar som låst öde; tala om betydelse, rörelse och gräns.`,
};

async function answerFromModel(question: string, lang: Lang): Promise<string | null> {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;

  const base = (process.env.OPENAI_BASE_URL ?? "https://api.openai.com/v1").replace(
    /\/$/,
    "",
  );
  const model = process.env.OPENAI_MODEL ?? "gpt-4o-mini";

  try {
    const response = await fetch(`${base}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        temperature: 0.4,
        messages: [
          { role: "system", content: systemPrompt[lang] },
          { role: "user", content: question },
        ],
      }),
      signal: AbortSignal.timeout(20000),
    });
    if (!response.ok) return null;
    const data = (await response.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const text = data.choices?.[0]?.message?.content?.trim();
    return text || null;
  } catch {
    return null;
  }
}

export async function askHearth(question: string, lang: Lang = "tr"): Promise<HearthReply> {
  const cleaned = question.trim().slice(0, 500);
  const model = await answerFromModel(cleaned, lang);
  if (model) return { answer: model, voice: "model" };
  return { answer: answerFromNotes(cleaned, lang), voice: "not" };
}
