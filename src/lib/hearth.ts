export type HearthVoice = "not" | "model";

export type HearthReply = {
  answer: string;
  voice: HearthVoice;
};

type Rune = {
  name: string;
  glyph: string;
  sound: string;
  aliases: string[];
  gloss: string;
};

const runes: Rune[] = [
  { name: "Fehu", glyph: "ᚠ", sound: "f", aliases: ["fehu"], gloss: "Sürü, taşınan mal. Kısa karşılık: elde tutulan değer." },
  { name: "Uruz", glyph: "ᚢ", sound: "u", aliases: ["uruz"], gloss: "Yaban öküz. Beden, direnç, ham güç." },
  { name: "Thurisaz", glyph: "ᚦ", sound: "þ", aliases: ["thurisaz", "thurs"], gloss: "Diken, dev. Bir sınır ya da sert bir uyarı." },
  { name: "Ansuz", glyph: "ᚨ", sound: "a", aliases: ["ansuz"], gloss: "Ağız, nefes, söz. İletilen şey." },
  { name: "Raidho", glyph: "ᚱ", sound: "r", aliases: ["raidho", "raido"], gloss: "Yol ve düzen. Bindirilmiş bir gidiş." },
  { name: "Kenaz", glyph: "ᚲ", sound: "k", aliases: ["kenaz", "kaunan"], gloss: "Çerağ. Açıklık, ortaya çıkan şey." },
  { name: "Gebo", glyph: "ᚷ", sound: "g", aliases: ["gebo", "gyfu"], gloss: "Armağan. Alışveriş, karşılıklı bağ." },
  { name: "Wunjo", glyph: "ᚹ", sound: "w", aliases: ["wunjo"], gloss: "Sevinç. Uyum, rahat bir oturuş." },
  { name: "Hagalaz", glyph: "ᚺ", sound: "h", aliases: ["hagalaz", "hagal"], gloss: "Dolu. Kırılma, havadan gelen sertlik." },
  { name: "Nauthiz", glyph: "ᚾ", sound: "n", aliases: ["nauthiz", "naudiz"], gloss: "İhtiyaç. Zorunluluk, eksik olan." },
  { name: "Isa", glyph: "ᛁ", sound: "i", aliases: ["isa"], gloss: "Buz. Durma, tutulan bir an." },
  { name: "Jera", glyph: "ᛃ", sound: "j", aliases: ["jera"], gloss: "Yıl, hasat. Mevsimin getirdiği sonuç." },
  { name: "Eihwaz", glyph: "ᛇ", sound: "ï", aliases: ["eihwaz", "ihwaz"], gloss: "Porsuk. Dayanıklılık, dik duran şey." },
  { name: "Perthro", glyph: "ᛈ", sound: "p", aliases: ["perthro", "perth"], gloss: "Anlamı tartışmalıdır. Çoğu okuma kadeh ya da gizli pay der." },
  { name: "Algiz", glyph: "ᛉ", sound: "z", aliases: ["algiz", "elhaz"], gloss: "Koruyan işaret. Sınırı tutan, yukarı bakan bir duruş." },
  { name: "Sowilo", glyph: "ᛊ", sound: "s", aliases: ["sowilo", "sowelu", "sigel"], gloss: "Güneş. Açıklık, yol gösteren ışık." },
  { name: "Tiwaz", glyph: "ᛏ", sound: "t", aliases: ["tiwaz", "tyr"], gloss: "Týr. Yön, sözünü tutma, adalet." },
  { name: "Berkano", glyph: "ᛒ", sound: "b", aliases: ["berkano", "berkana"], gloss: "Huş. Büyüme, filiz, saklanan yeşil." },
  { name: "Ehwaz", glyph: "ᛖ", sound: "e", aliases: ["ehwaz"], gloss: "At. Birlikte gidiş, güvenilen hareket." },
  { name: "Mannaz", glyph: "ᛗ", sound: "m", aliases: ["mannaz"], gloss: "İnsan. Kişi, akraba, insan hali." },
  { name: "Laguz", glyph: "ᛚ", sound: "l", aliases: ["laguz", "lagu"], gloss: "Su. Akış, derinlik, çekilen şey." },
  { name: "Ingwaz", glyph: "ᛜ", sound: "ng", aliases: ["ingwaz", "ing"], gloss: "Tohum. İçeride bekleyen potansiyel." },
  { name: "Dagaz", glyph: "ᛞ", sound: "d", aliases: ["dagaz"], gloss: "Gün. Aydınlanma, bir eşikten geçiş." },
  { name: "Othala", glyph: "ᛟ", sound: "o", aliases: ["othala", "odal"], gloss: "Yurt, kalan miras. İnsanın durduğu yer." },
];

const signs: { name: string; aliases: string[]; span: string; note: string }[] = [
  { name: "Koç", aliases: ["koc"], span: "21 Mart – 19 Nisan", note: "Ateş. Başlangıç, öne çıkan hareket." },
  { name: "Boğa", aliases: ["boga"], span: "20 Nisan – 20 Mayıs", note: "Toprak. Süre, beden, elde tutulan." },
  { name: "İkizler", aliases: ["ikizler"], span: "21 Mayıs – 20 Haziran", note: "Hava. İki yön, haber, yakın konuşma." },
  { name: "Yengeç", aliases: ["yengec"], span: "21 Haziran – 22 Temmuz", note: "Su. Yuva, korunma, geri çekilen." },
  { name: "Aslan", aliases: ["aslan"], span: "23 Temmuz – 22 Ağustos", note: "Ateş. Görünen, sıcak, ortaya konan." },
  { name: "Başak", aliases: ["basak"], span: "23 Ağustos – 22 Eylül", note: "Toprak. Ayıklama, iş, ayrıntı." },
  { name: "Terazi", aliases: ["terazi"], span: "23 Eylül – 22 Ekim", note: "Hava. İlişki, tartı, karşıdaki kişi." },
  { name: "Akrep", aliases: ["akrep"], span: "23 Ekim – 21 Kasım", note: "Su. Derinlik, eşik, bırakılmayan." },
  { name: "Yay", aliases: ["yay"], span: "22 Kasım – 21 Aralık", note: "Ateş. Ufuk, anlam, uzağa giden." },
  { name: "Oğlak", aliases: ["oglak"], span: "22 Aralık – 19 Ocak", note: "Toprak. Süreç, yük, kurulan yapı." },
  { name: "Kova", aliases: ["kova"], span: "20 Ocak – 18 Şubat", note: "Hava. Aralık, topluluk, alışılmamış." },
  { name: "Balık", aliases: ["balik"], span: "19 Şubat – 20 Mart", note: "Su. Dağılma, sınırın incelmesi, imge." },
];

const months = [
  "ocak",
  "subat",
  "mart",
  "nisan",
  "mayis",
  "haziran",
  "temmuz",
  "agustos",
  "eylul",
  "ekim",
  "kasim",
  "aralik",
];

function fold(value: string) {
  return value
    .toLocaleLowerCase("tr")
    .replaceAll("ı", "i")
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

function hasWord(text: string, word: string) {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`).test(text);
}

function runeAnswer(rune: Rune) {
  return `${rune.glyph} ${rune.name}. Ses: ${rune.sound}. ${rune.gloss} Bu, Elder Futhark için kısa ve alışılmış bir karşılıktır; tek okuma değildir.`;
}

function sunSign(month: number, day: number) {
  const point = month * 100 + day;
  const bands: [number, number, string][] = [
    [101, 119, "Oğlak"],
    [120, 218, "Kova"],
    [219, 320, "Balık"],
    [321, 419, "Koç"],
    [420, 520, "Boğa"],
    [521, 620, "İkizler"],
    [621, 722, "Yengeç"],
    [723, 822, "Aslan"],
    [823, 922, "Başak"],
    [923, 1022, "Terazi"],
    [1023, 1121, "Akrep"],
    [1122, 1221, "Yay"],
    [1222, 1231, "Oğlak"],
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
  const named = text.match(
    new RegExp(`(\\d{1,2})\\s+(${months.join("|")})`),
  );
  if (!named) return null;
  const day = Number(named[1]);
  const month = months.indexOf(named[2]) + 1;
  if (day < 1 || day > 31) return null;
  return { day, month };
}

export function answerFromNotes(question: string): string {
  const text = fold(question);

  const rune = runes.find(
    (item) =>
      text.includes(item.glyph) ||
      item.aliases.some((alias) => hasWord(text, alias)),
  );
  if (rune) return runeAnswer(rune);

  const sign = signs.find((item) =>
    item.aliases.some((alias) => hasWord(text, alias)),
  );
  if (sign) {
    return `${sign.name}. Tropik güneş aralığı: ${sign.span}. ${sign.note}`;
  }

  const date = findDate(text);
  if (date) {
    const name = sunSign(date.month, date.day);
    if (!name) return "Bu günü takvimde yerine oturtamadım. Günü ve ayı birlikte yaz.";
    const found = signs.find((item) => item.name === name);
    return `${date.day}.${date.month} için tropik güneş burcu ${name}. ${found?.note ?? ""} Yükselen için doğum saati ve yer de gerekir; ocak onu bu kadarıyla kurmaz.`;
  }

  if (hasWord(text, "ekinoks")) {
    return "Ekinoks, gündüz ile gecenin eşitlendiği eşiktir. İlkbahar ekinoksu Mart’ın 20’si civarı, sonbahar ekinoksu Eylül’ün 22’si civarı düşer. Yıl yıl bir gün kayabilir.";
  }

  if (hasWord(text, "gundonumu") || text.includes("gun donumu")) {
    return "Gündönümü, güneşin en uzun ya da en kısa gündü. Yaz gündönümü Haziran’ın 21’i civarı, kış gündönümü Aralık’ın 21’i civarı.";
  }

  if (
    hasWord(text, "kavusum") ||
    hasWord(text, "karsit") ||
    hasWord(text, "ucgen") ||
    hasWord(text, "sekstil") ||
    hasWord(text, "aci") ||
    hasWord(text, "kare")
  ) {
    return "Açı, iki noktanın gökyüzünde birbirine uzaklığıdır. Kavuşum bir arada durur. Karşıtlık karşı karşıyadır. Üçgen akıcı, kare sürtünen, sekstil ise hafif bir açıklıktır. Haritada önce hangi iki nokta konuşuyor, ona bakılır.";
  }

  if (text.includes("evler") || text.includes("yukselen") || text.includes(". ev")) {
    return "Ev, gökyüzü olayının hayatta nereye düştüğünü söyler. Yükselen birinci evin eşiğidir; doğum saati ve yer olmadan kurulmaz. Kısa sıra: 1 kişi, 2 sahip olunan, 3 yakın çevre, 4 yuva, 5 ortaya konan, 6 iş ve beden, 7 karşıdaki, 8 eşik, 9 ufuk, 10 duruş, 11 topluluk, 12 kapanan.";
  }

  if (text.includes("harita") || text.includes("natal") || text.includes("burc")) {
    return "Bir haritaya bakarken sıra sade tutulur. Önce güneş, ay ve yükselen. Sonra konuşulan ev. En son açılar: hangi iki nokta birbirine değiyor. Ocak kişiye özel kader yazmaz; dili açıklar.";
  }

  return "Ocak rün adlarını ve gökyüzünün dilini duyar. Bir işaret söyle: Fehu, Uruz, Ansuz. Ya da bir söz: ekinoks, Terazi, 15 Nisan, haritaya nereden bakılır.";
}

const systemPrompt = `Sen RuneYard'ın kış odasındaki ocaksın. Mehmet Akdeniz'in kişisel sayfasında, yalnızca rünler (Elder Futhark) ve astroloji üzerine konuşursun.
Kısa, sade Türkçe yaz. İki ile beş cümle yeter.
Rün karşılıklarını tek ve kesin kader diye sunma; alışılmış kısa anlam diye söyle.
Kişiye özel yükselen ya da tam harita için doğum saati ve yer gerekir; veri yoksa uydurma.
Tıbbi, hukuki, finansal öğüt verme. Alışveriş önerme.
Konu rün ya da gökyüzü değilse, ocağın bu iki dili duyduğunu söyle.`;

async function answerFromModel(question: string): Promise<string | null> {
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
          { role: "system", content: systemPrompt },
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

export async function askHearth(question: string): Promise<HearthReply> {
  const cleaned = question.trim().slice(0, 500);
  const model = await answerFromModel(cleaned);
  if (model) return { answer: model, voice: "model" };
  return { answer: answerFromNotes(cleaned), voice: "not" };
}
