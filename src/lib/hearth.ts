import type { Lang } from "@/lib/copy";
import { runes as runeSheets } from "@/content/runes";

export type HearthVoice = "not" | "model";

export type HearthReply = {
  answer: string;
  voice: HearthVoice;
  href?: string;
  linkLabel?: string;
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
    tr: { name: "Koç", span: "21 Mart – 19 Nisan", note: "Ateş · Öncü · Mars yönetimi, Güneş yücelimi. Başlangıç, öne çıkan hareket ve saf irade." },
    en: { name: "Aries", span: "21 March – 19 April", note: "Fire · Cardinal · Ruled by Mars, Exaltation of Sun. Beginning, forward motion, and raw will." },
    sv: { name: "Väduren", span: "21 mars – 19 april", note: "Eld · Kardinal · Styrs av Mars, Solens upphöjelse. Början, framåtrörelse och ren vilja." },
  },
  {
    aliases: ["boga", "taurus", "oxen"],
    tr: { name: "Boğa", span: "20 Nisan – 20 Mayıs", note: "Toprak · Sabit · Venüs yönetimi, Ay yücelimi. Süre, beden, köklenme ve elde tutulan değer." },
    en: { name: "Taurus", span: "20 April – 20 May", note: "Earth · Fixed · Ruled by Venus, Exaltation of Moon. Duration, body, rooting, and held value." },
    sv: { name: "Oxen", span: "20 april – 20 maj", note: "Jord · Fast · Styrs av Venus, Månens upphöjelse. Varaktighet, kropp, förankring och bevarat värde." },
  },
  {
    aliases: ["ikizler", "gemini", "tvillingarna"],
    tr: { name: "İkizler", span: "21 Mayıs – 20 Haziran", note: "Hava · Değişken · Merkür yönetimi. İki yön, haber, merak ve yakın konuşma." },
    en: { name: "Gemini", span: "21 May – 20 June", note: "Air · Mutable · Ruled by Mercury. Two directions, news, curiosity, and close speech." },
    sv: { name: "Tvillingarna", span: "21 maj – 20 juni", note: "Luft · Föränderlig · Styrs av Merkurius. Två riktningar, budskap, nyfikenhet och nära samtal." },
  },
  {
    aliases: ["yengec", "cancer", "kraftan"],
    tr: { name: "Yengeç", span: "21 Haziran – 22 Temmuz", note: "Su · Öncü · Ay yönetimi, Jüpiter yücelimi. Yuva, hafıza, korunma ve köklerin suyu." },
    en: { name: "Cancer", span: "21 June – 22 July", note: "Water · Cardinal · Ruled by Moon, Exaltation of Jupiter. Home, memory, shelter, and the water of roots." },
    sv: { name: "Kräftan", span: "21 juni – 22 juli", note: "Vatten · Kardinal · Styrs av Månen, Jupiters upphöjelse. Hem, minne, skydd och rötternas vatten." },
  },
  {
    aliases: ["aslan", "leo", "lejonet"],
    tr: { name: "Aslan", span: "23 Temmuz – 22 Ağustos", note: "Ateş · Sabit · Güneş yönetimi. Görünen merkez, sıcaklık ve ortaya konan öz." },
    en: { name: "Leo", span: "23 July – 22 August", note: "Fire · Fixed · Ruled by Sun. Visible center, warmth, and the heart set forth." },
    sv: { name: "Lejonet", span: "23 juli – 22 augusti", note: "Eld · Fast · Styrs av Solen. Synligt centrum, värme och det som ställs fram." },
  },
  {
    aliases: ["basak", "virgo", "jungfrun"],
    tr: { name: "Başak", span: "23 Ağustos – 22 Eylül", note: "Toprak · Değişken · Merkür yönetimi ve yücelimi. Ayıklama, emek, ritim ve ince ayrıntı." },
    en: { name: "Virgo", span: "23 August – 22 September", note: "Earth · Mutable · Ruled and Exalted by Mercury. Winnowing, craft, rhythm, and fine detail." },
    sv: { name: "Jungfrun", span: "23 augusti – 22 september", note: "Jord · Föränderlig · Styrs och upphöjs av Merkurius. Sortering, hantverk, rytm och fin detalj." },
  },
  {
    aliases: ["terazi", "libra", "vagen"],
    tr: { name: "Terazi", span: "23 Eylül – 22 Ekim", note: "Hava · Öncü · Venüs yönetimi, Satürn yücelimi. İlişki, tartı, adalet ve karşıdaki kişiyle kurulan denge." },
    en: { name: "Libra", span: "23 September – 22 October", note: "Air · Cardinal · Ruled by Venus, Exaltation of Saturn. Relation, the scales, justice, and balance with the other." },
    sv: { name: "Vågen", span: "23 september – 22 oktober", note: "Luft · Kardinal · Styrs av Venus, Saturnus upphöjelse. Relation, vågskål, rättvisa och jämvikt med den andre." },
  },
  {
    aliases: ["akrep", "scorpio", "skorpionen"],
    tr: { name: "Akrep", span: "23 Ekim – 21 Kasım", note: "Su · Sabit · Klasik Mars yönetimi. Derinlik, eşik, krizle gelen dönüşüm ve gizli olan." },
    en: { name: "Scorpio", span: "23 October – 21 November", note: "Water · Fixed · Classical Mars domicile. Depth, threshold, transformation through crisis, and the hidden." },
    sv: { name: "Skorpionen", span: "23 oktober – 21 november", note: "Vatten · Fast · Klassiskt Mars-hemvist. Djup, tröskel, förvandling genom kris och det dolda." },
  },
  {
    aliases: ["yay", "sagittarius", "skytten"],
    tr: { name: "Yay", span: "22 Kasım – 21 Aralık", note: "Ateş · Değişken · Jüpiter yönetimi. Ufuk, anlam arayışı, okun yönü ve uzağa giden yol." },
    en: { name: "Sagittarius", span: "22 November – 21 December", note: "Fire · Mutable · Ruled by Jupiter. Horizon, search for meaning, aim of the arrow, and the far road." },
    sv: { name: "Skytten", span: "22 november – 21 december", note: "Eld · Föränderlig · Styrs av Jupiter. Horisont, meningssökande, pilens riktning och den långa vägen." },
  },
  {
    aliases: ["oglak", "capricorn", "stenbocken"],
    tr: { name: "Oğlak", span: "22 Aralık – 19 Ocak", note: "Toprak · Öncü · Satürn yönetimi, Mars yücelimi. Süreç, sabır, omurga ve zamana dayanan yapı." },
    en: { name: "Capricorn", span: "22 December – 19 January", note: "Earth · Cardinal · Ruled by Saturn, Exaltation of Mars. Process, patience, spine, and structure that endures time." },
    sv: { name: "Stenbocken", span: "22 december – 19 januari", note: "Jord · Kardinal · Styrs av Saturnus, Mars upphöjelse. Process, tålamod, ryggrad och struktur som bär genom tiden." },
  },
  {
    aliases: ["kova", "aquarius", "vattumannen"],
    tr: { name: "Kova", span: "20 Ocak – 18 Şubat", note: "Hava · Sabit · Klasik Satürn yönetimi. Aralık, topluluk, bağımsız bakış ve alışılmamış düzen." },
    en: { name: "Aquarius", span: "20 January – 18 February", note: "Air · Fixed · Classical Saturn domicile. Interval, community, independent sight, and uncommon order." },
    sv: { name: "Vattumannen", span: "20 januari – 18 februari", note: "Luft · Fast · Klassiskt Saturnus-hemvist. Mellanrum, gemenskap, fri blick och ovanlig ordning." },
  },
  {
    aliases: ["balik", "pisces", "fiskarna"],
    tr: { name: "Balık", span: "19 Şubat – 20 Mart", note: "Su · Değişken · Klasik Jüpiter yönetimi, Venüs yücelimi. Dağılma, sınırın incelmesi, rüya ve sezgisel imge." },
    en: { name: "Pisces", span: "19 February – 20 March", note: "Water · Mutable · Classical Jupiter domicile, Exaltation of Venus. Dissolution, thinning of borders, dream, and intuitive image." },
    sv: { name: "Fiskarna", span: "19 februari – 20 mars", note: "Vatten · Föränderlig · Klassiskt Jupiter-hemvist, Venus upphöjelse. Upplösning, tunna gränser, dröm och intuitiv bild." },
  },
];

type LoreEntry = {
  keywords: string[];
  href: string;
  tr: { label: string; text: string };
  en: { label: string; text: string };
  sv: { label: string; text: string };
};

const loreEntries: LoreEntry[] = [
  {
    keywords: ["ogham", "kelt", "celtic", "keltisk", "aicme", "duir", "mese", "beith", "luis", "uvez", "ioho", "porsuk"],
    href: "/kelt",
    tr: {
      label: "Kelt & Ogham Salonuna Git →",
      text: "Ogham (Beith-Luis-Nin), 4 Aicme (beşli grup) halinde dizilen 20 kutsal ağaç kapısıdır: Huş (Beith) arınma ve başlangıcı, Üvez (Luis) sezgi ve ocağın korunmasını, Meşe (Duir) dayanıklılık ve eşiği, Porsuk (Ioho) ise zamanın ötesindeki kökleri taşır.",
    },
    en: {
      label: "Enter Celtic & Ogham Hall →",
      text: "Ogham (Beith-Luis-Nin) is the Celtic tree alphabet of 20 sacred trees arranged into four Aicme: Birch (Beith) marks purification and beginnings, Rowan (Luis) wardship and clear sight, Oak (Duir) endurance and doorway, and Yew (Ioho) ancestral continuity.",
    },
    sv: {
      label: "Gå till Keltiska & Ogham-salen →",
      text: "Ogham (Beith-Luis-Nin) är det keltiska trädalfabetet med 20 heliga träd indelade i fyra Aicme: Björk (Beith) står för rening och början, Rönn (Luis) för beskydd, Ek (Duir) för uthållighet och Idegran (Ioho) för evig förankring.",
    },
  },
  {
    keywords: ["awen", "nemeton", "imbolc", "beltane", "lughnasadh", "samhain", "brigid"],
    href: "/kelt/nemeton-ve-cark",
    tr: {
      label: "Nemeton & Yılın Çarkı Odası →",
      text: "Kelt geleneğinde Nemeton gökle yerin buluştuğu kutsal meşe korusudur. Yılın çarkı dört ateş eşiğiyle (Imbolc, Beltane, Lughnasadh, Samhain) ve dört güneş kapısıyla döner; Awen ise akan ilham nefesidir.",
    },
    en: {
      label: "Nemeton & Wheel of the Year →",
      text: "In Celtic lore, the Nemeton is the sacred grove where sky and earth meet. The Wheel of the Year turns through the four fire festivals (Imbolc, Beltane, Lughnasadh, Samhain) and the solstices and equinoxes; Awen is the flowing breath of inspiration.",
    },
    sv: {
      label: "Nemeton & Årshjulet →",
      text: "I keltisk tradition är Nemeton den heliga lunden där himmel och jord möts. Årshjulet vrider sig genom de fyra eldfesterna (Imbolc, Beltane, Lughnasadh, Samhain); Awen är den flödande inspirationens andedräkt.",
    },
  },
  {
    keywords: ["mezopotamya", "mesopotamia", "mesopotamien", "babil", "babylon", "sumer", "ziggurat", "mulapin", "enuma", "inanna", "ishtar", "istar", "enki", "abzu", "marduk", "samas", "shamash", "nergal", "nabu", "ereshkigal"],
    href: "/mezopotamya",
    tr: {
      label: "Mezopotamya Salonuna Git →",
      text: "Mezopotamya yıldız bilimi (MUL.APIN ve Enûma Anu Enlil), gökyüzünü tanrıların kil tableti olarak okur: Sin (Ay) zamanı ölçer, Şamaş (Güneş) adaleti aydınlatır, İştar/İnanna (Venüs) sabah ve akşam yıldızı olarak yedi kapıdan geçer, Enki ise Abzu’nun derin bilgelik sularını korur.",
    },
    en: {
      label: "Enter Mesopotamia Hall →",
      text: "Mesopotamian star lore (MUL.APIN and Enûma Anu Enlil) reads the sky as the cuneiform tablet of the gods: Sin (Moon) measures time, Shamash (Sun) illuminates justice, Ishtar/Inanna (Venus) crosses the seven gates as Morning and Evening Star, and Enki guards the deep waters of the Abzu.",
    },
    sv: {
      label: "Gå till Mesopotamiensalen →",
      text: "Mesopotamisk stjärnlära (MUL.APIN och Enûma Anu Enlil) läser himlen som gudarnas kilskriftstavla: Sin (Månen) mäter tiden, Shamash (Solen) belyser rättvisan, Ishtar/Inanna (Venus) vandrar genom de sju portarna och Enki vaktar Abzus djupa visdomsvatten.",
    },
  },
  {
    keywords: ["saman", "shaman", "schaman", "kam", "dungur", "davul", "ulgen", "erlik", "seidr", "volva", "otacilik", "erk", "iye", "iyeler"],
    href: "/saman",
    tr: {
      label: "Şamanizm Salonuna Git →",
      text: "Şamanik kozmolojide evren Dünya Ağacı ekseninde Üst Dünya (Ülgen ve ışık rehberleri), Orta Dünya (doğa iyeleri) ve Alt Dünya (ata kökleri ve erk hayvanları) olarak üç katmandır. Kam, düngürün (davulun) ritmiyle bu katmanlar arasında bilinçli köprü kurar.",
    },
    en: {
      label: "Enter Shamanism Hall →",
      text: "In shamanic cosmology, the universe is joined along the World Tree into the Upper World (teachers of light), Middle World (nature spirits), and Lower World (ancestral roots and power animals). Through the rhythm of the drum (düngür), the practitioner walks between worlds.",
    },
    sv: {
      label: "Gå till Schamanismsalen →",
      text: "I schamanistisk kosmologi förenas universum längs Världsträdet i Övre Världen, Mellanvärlden och Nedre Världen. Genom trummans (düngür) rytm vandrar schamanen medvetet mellan dessa sfärer.",
    },
  },
  {
    keywords: ["witchcraft", "cadi", "cadilik", "pelin", "uzerlik", "murver", "biberiye", "alic", "karacali", "tutsu", "recine", "herbaryum", "aktar"],
    href: "/witchcraft",
    tr: {
      label: "Witchcraft & Yeşil Ahit Salonuna Git →",
      text: "Yeşil Ahit ve ocak zanaatı; doğanın bitkilerini, reçinelerini, dört elementi ve ay evrelerini hane koruması ve şifa için okumaktır: Pelin (Artemisia) eşik ve rüya görüsünü, Üzerlik (Peganum harmala) nazar ve ağırlık kırmayı, Biberiye ise berrak hafızayı taşır.",
    },
    en: {
      label: "Enter Witchcraft Hall →",
      text: "The Green Covenant and hearth craft work with wild herbs, resins, the four elements, and lunar phases: Mugwort (Artemisia) opens threshold vision, Syrian Rue (Peganum harmala) clears heavy stagnation, and Rosemary guards memory and the home.",
    },
    sv: {
      label: "Gå till Witchcraft-salen →",
      text: "Det gröna förbundet och härdhantverket arbetar med vilda örter, hartser, de fyra elementen och månens faser: Gråbo (Artemisia) öppnar tröskelseendet, Harmelruta bryter tung stagnation och Rosmarin vaktar minnet och hemmet.",
    },
  },
  {
    keywords: ["gezegen saati", "gezegen saatleri", "planetary hour", "planetary hours", "planettimme", "planettimmar", "keldani", "chaldean", "saturn", "jupiter", "mars", "merkur", "mercury"],
    href: "/astroloji/gezegen-saatleri-ve-secim",
    tr: {
      label: "Gezegen Saatleri & Seçim Astrolojisi →",
      text: "Klasik astrolojide her gün Gündoğumu ile başlar ve Keldani sırasına (Satürn – Jüpiter – Mars – Güneş – Venüs – Merkür – Ay) göre 12 gündüz ve 12 gece saatine bölünür. Güneş saati görünürlük ve irade, Venüs saati uzlaşma, Merkür saati yazı ve analiz, Satürn saati ise sabırlı inşa için seçilir.",
    },
    en: {
      label: "Planetary Hours & Electional Astrology →",
      text: "In classical astrology, each day begins at sunrise and is divided into 12 daytime and 12 nighttime hours following the Chaldean order (Saturn – Jupiter – Mars – Sun – Venus – Mercury – Moon). Each hour carries the quality of its ruling planet.",
    },
    sv: {
      label: "Planettimmar & Elektionsastrologi →",
      text: "I klassisk astrologi börjar varje dygn vid soluppgången och delas in i 12 dagtimmar och 12 nattimmar enligt den kaldeiska ordningen (Saturnus – Jupiter – Mars – Solen – Venus – Merkurius – Månen).",
    },
  },
  {
    keywords: ["merkur retrosu", "mercury retrograde", "merkurius retrograd", "cifte retro", "cazimi", "4 kasim", "13 kasim"],
    href: "/astroloji/merkur-retrosu",
    tr: {
      label: "☿ Merkür Akrep Retrosu Notu →",
      text: "24 Ekim – 13 Kasım 2026 arasında Merkür 20°58' Akrep’ten 5°02' Akrep’e geriliyor ve Venüs Retrosu ile 20 günlük bir ‘Çifte Retro’ oluşturuyor. 4 Kasım’da 11°54' Akrep’te gerçekleşen Merkür Cazimi (Güneş’in kalbi) zihinsel aydınlanma getirirken, 13–14 Kasım’da her iki gezegen de düz harekete dönüyor.",
    },
    en: {
      label: "☿ Mercury Retrograde in Scorpio →",
      text: "From 24 October to 13 November 2026, Mercury retrogrades from 20°58' to 5°02' Scorpio alongside Venus Retrograde. The 4 November Cazimi at 11°54' Scorpio brings piercing insight before both planets turn direct on 13–14 November.",
    },
    sv: {
      label: "☿ Merkurius Retrograd i Skorpionen →",
      text: "Mellan 24 oktober och 13 november 2026 går Merkurius retrograd från 20°58' till 5°02' Skorpionen parallellt med Venus retrograd. Cazimi-dagen den 4 november ger skarp klarhet innan båda vänds direkt den 13–14 november.",
    },
  },
  {
    keywords: ["akrep yeniayi", "9 kasim", "scorpio new moon"],
    href: "/astroloji/akrep-yeniayi",
    tr: {
      label: "♏ 9 Kasım Akrep Yeniayı Notu →",
      text: "9 Kasım 2026 saat 10:02’de 16°53' Akrep’te doğan Yeniay; kriz temizliği, ortak kaynakların yeniden yapılandırılması ve küllerinden doğuş (Simurg) eşiğidir.",
    },
    en: {
      label: "♏ 9 November Scorpio New Moon →",
      text: "The New Moon on 9 November 2026 at 16°53' Scorpio marks a threshold of crisis clearing, shared financial strategy, and rebirth from the ashes.",
    },
    sv: {
      label: "♏ 9 november Skorpionens Nymåne →",
      text: "Nymånen den 9 november 2026 på 16°53' Skorpionen är en tröskel för krisrening, delad ekonomi och pånyttfödelse ur askan.",
    },
  },
  {
    keywords: ["ikizler dolunayi", "24 kasim", "gemini full moon"],
    href: "/astroloji/ikizler-dolunayi",
    tr: {
      label: "♊ 24 Kasım İkizler Dolunayı Notu →",
      text: "24 Kasım 2026 saat 17:53’te 2°20' İkizler’de gerçekleşen Dolunay, Merkür ve Venüs retroları bittikten sonraki ilk büyük netlik, sözleşme ve iletişim hasadıdır.",
    },
    en: {
      label: "♊ 24 November Gemini Full Moon →",
      text: "The Full Moon on 24 November 2026 at 2°20' Gemini brings the first great clarity and harvest of agreements after the autumn retrogrades.",
    },
    sv: {
      label: "♊ 24 november Tvillingarnas Fullmåne →",
      text: "Fullmånen den 24 november 2026 på 2°20' Tvillingarna ger den första stora klarheten och avtalsskörden efter höstens retrograder.",
    },
  },
  {
    keywords: ["boga dolunayi", "26 ekim", "dolunay", "full moon", "fullmane"],
    href: "/astroloji/boga-dolunayi",
    tr: {
      label: "♉ 26 Ekim Boğa Dolunayı Notu →",
      text: "26 Ekim 2026’da Boğa burcunun 3. derecesinde (Ay’ın yücelim makamında) gerçekleşen Dolunay; özdeğer, somut güven, bütçe ve ikili ilişkilerdeki alma-verme dengesini hasat noktasına taşır. Yöneticisi Venüs 29° Terazi’de geri giderken 10 Ekim Yeniayında açılan dosyalar karara bağlanır.",
    },
    en: {
      label: "♉ 26 October Taurus Full Moon Note →",
      text: "The Full Moon on 26 October 2026 at 3° Taurus (the Moon's exaltation) brings self-worth, tangible security, finances, and relational balance to a point of harvest, ruled by Retrograde Venus at 29° Libra.",
    },
    sv: {
      label: "♉ 26 oktober Oxens Fullmåne →",
      text: "Fullmånen den 26 oktober 2026 på 3° Oxen (Månens upphöjelse) för självvärde, påtaglig trygghet, ekonomi och relationsbalans till skörd och avgörande, styrd av retrograda Venus på 29° Vågen.",
    },
  },
  {
    keywords: ["dugum", "dugumler", "rahu", "ketu", "tutulma", "eclipse", "node", "nodes", "yeniay", "boslukta", "void of course"],
    href: "/astroloji/ay-evreleri-ve-dugumler",
    tr: {
      label: "Ay Evreleri ve Düğümler Odası →",
      text: "Ay’ın 29,5 günlük sinodik döngüsü tohumdan (Yeniay) tezahüre (Dolunay) ve içe çekilişe (Balzamik Ay) akar. Kuzey Ay Düğümü (Caput Draconis) ruhun büyüme ufkunu, Güney Ay Düğümü (Cauda Draconis) ise geçmişten getirilen tortuyu ve bırakma dersini gösterir.",
    },
    en: {
      label: "Lunar Phases & Nodes Room →",
      text: "The Moon's 29.5-day synodic cycle flows from seed (New Moon) to culmination (Full Moon) and release (Balsamic). The North Node (Caput Draconis) marks the horizon of growth, while the South Node (Cauda Draconis) shows inherited mastery and release.",
    },
    sv: {
      label: "Månfaser & Månknutar →",
      text: "Månens 29,5-dagars synodiska cykel löper från frö (Nymåne) till fullbordan (Fullmåne) och vila (Balsamisk måne). Norra månknuten visar växtens riktning och Södra månknuten det som ska släppas.",
    },
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

export function answerFromNotes(
  question: string,
  lang: Lang = "tr",
): { answer: string; href?: string; linkLabel?: string } {
  const text = fold(question);

  // 1. Runes
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
      const label =
        lang === "en"
          ? `${sheet.glyph} Enter ${sheet.name} Room →`
          : lang === "sv"
            ? `${sheet.glyph} Gå till ${sheet.name}-rummet →`
            : `${sheet.glyph} ${sheet.name} Odasına Git →`;
      return {
        answer: `${sheet.glyph} ${sheet.name} (${sheet.protoGermanic} · [${sheet.phoneme}] · ${deities}) — ${firstParagraph}`,
        href: `/runler/${sheet.slug}`,
        linkLabel: label,
      };
    }
  }

  // 2. Venus Retrograde
  if (
    hasWord(text, "venus") ||
    hasWord(text, "retro") ||
    hasWord(text, "retrosu") ||
    hasWord(text, "retrograd")
  ) {
    if (lang === "en") {
      return {
        answer:
          "Venus retrograde runs from 3 October to 14 November 2026: first in Scorpio (3–25 October, depth and hidden dynamics), then in Libra (25 October–14 November, balance, justice, and unfinished ties).",
        href: "/astroloji/venus-retrosu",
        linkLabel: "♀ Read Venus Retrograde Note →",
      };
    }
    if (lang === "sv") {
      return {
        answer:
          "Venus retrograd pågår 3 oktober – 14 november 2026: först i Skorpionen (3–25 oktober, djup och dolda band), sedan i Vågen (25 oktober–14 november, balans, rättvisa och oavslutade relationer).",
        href: "/astroloji/venus-retrosu",
        linkLabel: "♀ Läs om Venus Retrograd →",
      };
    }
    return {
      answer:
        "Venüs retrosu 3 Ekim – 14 Kasım 2026 arasında iki fazda ilerliyor: 3–25 Ekim Akrep fazı (derinlik ve gizli dinamikler), 25 Ekim–14 Kasım Terazi fazı (ilişkilerde adalet, denge ve geçmiş hesaplaşmalar).",
      href: "/astroloji/venus-retrosu",
      linkLabel: "♀ Venüs Retrosu Notuna Git →",
    };
  }

  // 3. Expanded Lore (Ogham, Celtic, Mesopotamia, Shamanism, Witchcraft, Planetary Hours, Lunar Nodes)
  const matchedLore = loreEntries.find((entry) =>
    entry.keywords.some((kw) =>
      kw.includes(" ") ? text.includes(kw) : hasWord(text, kw),
    ),
  );
  if (matchedLore) {
    const content = matchedLore[lang];
    return {
      answer: content.text,
      href: matchedLore.href,
      linkLabel: content.label,
    };
  }

  // 4. Zodiac Signs
  const sign = signs.find((item) =>
    item.aliases.some((alias) => hasWord(text, alias)),
  );
  if (sign) {
    const s = sign[lang];
    return {
      answer: `${s.name} (${s.span}) — ${s.note}`,
      href: "/astroloji/on-iki-burc-ve-nitelikler",
      linkLabel:
        lang === "en"
          ? "☉ Twelve Signs & Dignities →"
          : lang === "sv"
            ? "☉ Tolv Tecken & Värdigheter →"
            : "☉ On İki Burç ve Asaletler Odası →",
    };
  }

  // 5. Calendar Date -> Sun Sign
  const date = findDate(text);
  if (date) {
    const idx = sunSignIndex(date.month, date.day);
    if (idx === null) {
      return {
        answer:
          lang === "en"
            ? "I could not place that day on the calendar. Write the day and month together."
            : lang === "sv"
              ? "Jag kunde inte placera den dagen i kalendern. Skriv dag och månad tillsammans."
              : "Bu günü takvimde yerine oturtamadım. Günü ve ayı birlikte yaz.",
      };
    }
    const s = signs[idx][lang];
    if (lang === "en") {
      return {
        answer: `For ${date.day}.${date.month}, the tropical Sun sign is ${s.name}. ${s.note} The rising sign also requires birth hour and place.`,
        href: "/astroloji/harita-nasil-okunur",
        linkLabel: "☉ How to Read a Chart →",
      };
    }
    if (lang === "sv") {
      return {
        answer: `För ${date.day}.${date.month} är det tropiska soltecknet ${s.name}. ${s.note} Ascendenten kräver även födelsetimme och plats.`,
        href: "/astroloji/harita-nasil-okunur",
        linkLabel: "☉ Hur Man Läser En Karta →",
      };
    }
    return {
      answer: `${date.day}.${date.month} için tropik güneş burcu ${s.name}. ${s.note} Yükselen için doğum saati ve yer de gerekir; ocak onu bu kadarıyla kurmaz.`,
      href: "/astroloji/harita-nasil-okunur",
      linkLabel: "☉ Harita Nasıl Okunur Odası →",
    };
  }

  // 6. Education / Courses
  if (
    hasWord(text, "egitim") ||
    hasWord(text, "ders") ||
    hasWord(text, "kurs") ||
    hasWord(text, "akademi") ||
    hasWord(text, "education") ||
    hasWord(text, "course") ||
    hasWord(text, "utbildning")
  ) {
    if (lang === "en") {
      return {
        answer:
          "Three study circles are open under RuneYard Academy: Shamanism Training (24 lessons), Rune Wisdom Training (20 lessons), and Hand, Face & Element Reading (16 lessons / 4 modules). For registration: +90 545 564 21 64.",
        href: "/egitim",
        linkLabel: "◈ Enter RuneYard Academy →",
      };
    }
    if (lang === "sv") {
      return {
        answer:
          "Tre studiecirklar finns under RuneYard Akademi: Schamanismutbildning (24 lektioner), Utbildning i runvisdom (20 lektioner) samt Hand-, ansikts- och elementläsning (16 lektioner / 4 moduler). Kontakt: +90 545 564 21 64.",
        href: "/egitim",
        linkLabel: "◈ Gå till RuneYard Akademi →",
      };
    }
    return {
      answer:
        "RuneYard Akademi’de üç canlı sınıf açık: Şamanizm Eğitimi (24 ders), Rune Bilgeliği Eğitimi (20 ders) ve El, Yüz ve Element Okuma Teknikleri (16 ders / 4 modül). Kayıt ve bilgi için: 0545 564 21 64.",
      href: "/egitim",
      linkLabel: "◈ Eğitim Salonuna Git →",
    };
  }

  // 7. Apps
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
      return {
        answer:
          "Rune Yard is live on Google Play and the App Store. Moon Yard (lunar calendar & planetary hours), Dream Yard, and RuneWords are on the Apps shelf.",
        href: "/uygulamalar",
        linkLabel: "⌘ Open Apps Shelf →",
      };
    }
    if (lang === "sv") {
      return {
        answer:
          "Rune Yard finns ute på Google Play och App Store. Moon Yard (månkalender & planettimmar), Dream Yard och RuneWords står på hyllan under Appar.",
        href: "/uygulamalar",
        linkLabel: "⌘ Öppna Apphyllan →",
      };
    }
    return {
      answer:
        "Rune Yard şu an Google Play ve App Store’da yayında. Moon Yard (ay takvimi ve gezegen saatleri), Dream Yard ve RuneWords ise Uygulamalar rafında yer alıyor.",
      href: "/uygulamalar",
      linkLabel: "⌘ Uygulamalar Rafına Git →",
    };
  }

  // 8. Equinox & Solstice
  if (
    hasWord(text, "ekinoks") ||
    hasWord(text, "equinox") ||
    hasWord(text, "dagjamning") ||
    hasWord(text, "dagjamningen")
  ) {
    if (lang === "en") {
      return {
        answer:
          "The equinox is the threshold where day and night stand equal. The spring equinox falls around 20 March (0° Aries), and the autumn equinox around 22 September (0° Libra).",
        href: "/astroloji",
        linkLabel: "☉ Enter Astrology Hall →",
      };
    }
    if (lang === "sv") {
      return {
        answer:
          "Dagjämningen är tröskeln där dag och natt väger jämnt. Vårdagjämningen infaller kring 20 mars (0° Väduren) och höstdagjämningen kring 22 september (0° Vågen).",
        href: "/astroloji",
        linkLabel: "☉ Gå till Astrologisalen →",
      };
    }
    return {
      answer:
        "Ekinoks, gündüz ile gecenin eşitlendiği eşiktir. İlkbahar ekinoksu 20 Mart civarı (0° Koç), sonbahar ekinoksu ise 22 Eylül civarı (0° Terazi) düşer.",
      href: "/astroloji",
      linkLabel: "☉ Astroloji Salonuna Git →",
    };
  }

  if (
    hasWord(text, "gundonumu") ||
    text.includes("gun donumu") ||
    hasWord(text, "solstice") ||
    hasWord(text, "solstand")
  ) {
    if (lang === "en") {
      return {
        answer:
          "The solstice marks the longest or shortest day of the sun. Summer solstice falls around 21 June (0° Cancer), winter solstice around 21 December (0° Capricorn).",
        href: "/kelt/nemeton-ve-cark",
        linkLabel: "ᚇ Wheel of the Year →",
      };
    }
    if (lang === "sv") {
      return {
        answer:
          "Solståndet är solens längsta eller kortaste dag. Sommarsolståndet infaller kring 21 juni (0° Kräftan), vintersolståndet kring 21 december (0° Stenbocken).",
        href: "/kelt/nemeton-ve-cark",
        linkLabel: "ᚇ Årshjulet →",
      };
    }
    return {
      answer:
        "Gündönümü, güneşin en uzun ya da en kısa günüdür. Yaz gündönümü 21 Haziran civarı (0° Yengeç), kış gündönümü ise 21 Aralık civarı (0° Oğlak) gerçekleşir.",
      href: "/kelt/nemeton-ve-cark",
      linkLabel: "ᚇ Yılın Çarkı Odasına Git →",
    };
  }

  // 9. Aspects, Houses, Chart Reading
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
      return {
        answer:
          "In Ptolemaic doctrine, aspects are geometric rays of sight between planets: Conjunction (0°) fuses forces, Opposition (180°) confronts, Trine (120°) harmonizes, Square (90°) drives action through friction, and Sextile (60°) opens opportunity.",
        href: "/astroloji/acilar-ve-geometri",
        linkLabel: "☉ Aspects & Cosmic Geometry →",
      };
    }
    if (lang === "sv") {
      return {
        answer:
          "I ptolemaisk lära är aspekter geometriska siktlinjer mellan planeter: Konjunktion (0°) förenar, Opposition (180°) ställer mot varandra, Trigon (120°) harmoniserar, Kvadratur (90°) skapar friktion och Sextil (60°) öppnar möjligheter.",
        href: "/astroloji/acilar-ve-geometri",
        linkLabel: "☉ Aspekter & Kosmisk Geometri →",
      };
    }
    return {
      answer:
        "Batlamyus doktrininde açılar gezegenlerin birbirini görme (bakış) geometrisidir: Kavuşum (0°) güçleri birleştirir, Karşıtlık (180°) yüzleştirir, Üçgen (120°) uyumlu akış sağlar, Kare (90°) sürtünmeyle eylem üretir, Sekstil (60°) ise fırsat kapısı açar.",
      href: "/astroloji/acilar-ve-geometri",
      linkLabel: "☉ Açılar ve Kozmik Geometri Odası →",
    };
  }

  if (
    text.includes("evler") ||
    text.includes("yukselen") ||
    text.includes(". ev") ||
    hasWord(text, "houses") ||
    hasWord(text, "ascendant") ||
    text.includes("harita") ||
    text.includes("natal") ||
    text.includes("chart") ||
    text.includes("karta")
  ) {
    if (lang === "en") {
      return {
        answer:
          "When reading a chart, keep the classical order: first Sect (day/night chart), then Sun, Moon, and Ascendant (Horoskopos) with its ruler, then the 12 Houses (Topoi), and finally the Ptolemaic aspects.",
        href: "/astroloji/harita-nasil-okunur",
        linkLabel: "☉ How to Read a Chart Room →",
      };
    }
    if (lang === "sv") {
      return {
        answer:
          "När man läser en karta hålls den klassiska ordningen: först Sekt (dag-/nattkarta), sedan Sol, Måne och Ascendent (Horoskopos) med dess styrare, därefter de 12 husen (Topoi) och sist aspekterna.",
        href: "/astroloji/harita-nasil-okunur",
        linkLabel: "☉ Hur Man Läser En Karta →",
      };
    }
    return {
      answer:
        "Bir haritaya bakarken klasik sıra korunur: Önce Harita Sekti (gündüz/gece haritası), ardından Güneş, Ay ve Yükselen (Horoskopos) ile yükselen yöneticisi, sonra 12 Ev (Topoi) ve en son gezegen açıları okunur.",
      href: "/astroloji/harita-nasil-okunur",
      linkLabel: "☉ Harita Nasıl Okunur Odası →",
    };
  }

  if (lang === "en") {
    return {
      answer:
        "The hearth hears the names of the 24 runes, the 20 Ogham trees, the gods of Mesopotamia, shamanic lore, and the tongue of the sky. Name a sign or symbol: Fehu, Uruz, Ogham, Inanna, Düngür, Venus retrograde, or 15 April.",
      href: "/runler",
      linkLabel: "ᚠ Explore the 24 Runes →",
    };
  }
  if (lang === "sv") {
    return {
      answer:
        "Härden hör de 24 runornas namn, de 20 Oghamträden, Mesopotamiens stjärnlära, schamanism och himlens språk. Nämn ett tecken: Fehu, Uruz, Ogham, Inanna, Düngür, Venus retrograd eller 15 april.",
      href: "/runler",
      linkLabel: "ᚠ Utforska de 24 Runorna →",
    };
  }
  return {
    answer:
      "Ocak 24 rünün adını, 20 Ogham ağacını, Mezopotamya tabletlerini, şamanik düngürü, otacılığı ve gökyüzünün dilini duyar. Bir işaret söyle: Fehu, Uruz, Ogham, İnanna, Düngür, Venüs retrosu, 15 Nisan ya da Haritaya nereden bakılır.",
    href: "/runler",
    linkLabel: "ᚠ 24 Rün Kapısına Git →",
  };
}

const systemPrompt: Record<Lang, string> = {
  tr: `Sen RuneYard'ın kış odasındaki ocaksın. Mehmet Akdeniz'in kişisel sayfasında, rünler (Elder Futhark), Kelt/Ogham, Mezopotamya, Şamanizm, Witchcraft/Otacılık ve Klasik Astroloji üzerine konuşursun.
Kısa, sade ve ağırbaşlı Türkçe yaz. İki ile beş cümle yeter.
Rün karşılıklarını tek ve kesin kader diye sunma; hareket, anlam ve sınır olarak söyle.
Kişiye özel yükselen ya da tam harita için doğum saati ve yer gerekir; veri yoksa uydurma.
Tıbbi, hukuki, finansal öğüt verme. Alışveriş önerme.`,
  en: `You are the hearth in the winter hall of RuneYard, Mehmet Akdeniz's personal study. You speak of the runes (Elder Futhark), Celtic Ogham, Mesopotamian lore, Shamanism, Witchcraft/Herbalism, and Classical Astrology.
Write in concise, calm English. Two to five sentences are enough.
Do not present rune readings as fixed fate; speak of meaning, movement, and limit.
Personal rising signs or full charts require birth hour and place; do not invent them if absent.`,
  sv: `Du är härden i RuneYards vinterrum, Mehmet Akdeniz personliga studierum. Du talar om runor (Elder Futhark), keltisk Ogham, Mesopotamien, schamanism, örtkunskap och klassisk astrologi.
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
  const noteMatch = answerFromNotes(cleaned, lang);
  const model = await answerFromModel(cleaned, lang);
  if (model) {
    return {
      answer: model,
      voice: "model",
      href: noteMatch.href,
      linkLabel: noteMatch.linkLabel,
    };
  }
  return {
    answer: noteMatch.answer,
    voice: "not",
    href: noteMatch.href,
    linkLabel: noteMatch.linkLabel,
  };
}
