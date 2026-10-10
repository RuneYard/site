import type { Lang } from "@/lib/copy";

export type Rune = {
  slug: string;
  glyph: string;
  name: string;
  deities: readonly string[];
  text: Record<Lang, string>;
};

export const runes: readonly Rune[] = [
  {
    slug: "fehu",
    glyph: "ᚠ",
    name: "Fehu",
    deities: ["Freyja", "Frey", "Njord"],
    text: {
      tr: "Servet, altın ve sığır. Bolluk, hareket ve cömertlik; verilen ve alınan iyi şey. Yeni bir başlangıcın ve yol ile gelen şansın rünü.",
      en: "Wealth, gold, and cattle. Abundance, movement, and generosity; the good that is given and the good that is received. The rune of a new beginning and of luck that comes with the road.",
      sv: "Rikedom, guld och boskap. Överflöd, rörelse och generositet; det goda som ges och det goda som tas emot. Runan för en ny början och för tur som kommer med vägen.",
    },
  },
  {
    slug: "uruz",
    glyph: "ᚢ",
    name: "Uruz",
    deities: ["Thor", "Urd"],
    text: {
      tr: "Güç, dayanıklılık ve şifa. Yaban öküzünün yaşam gücü: cesaret, sebat ve bedenin toparlanması.",
      en: "Strength, endurance, and healing. The life-force of the aurochs: courage, perseverance, and the body's recovery.",
      sv: "Styrka, uthållighet och läkning. Uroxens livskraft: mod, ihärdighet och kroppens återhämtning.",
    },
  },
  {
    slug: "thurisaz",
    glyph: "ᚦ",
    name: "Thurisaz",
    deities: ["Thor", "Loki"],
    text: {
      tr: "Güç, diken, saldırganlık ve dev. Bilinçdışının kuvveti: atılım, uyarı ve engeli zorlayan bir direnç.",
      en: "Power, thorn, aggression, and giant. The force of the unconscious: a breakthrough, a warning, and a resistance that forces the obstacle.",
      sv: "Kraft, törne, angrepp och jätte. Det omedvetnas styrka: ett genombrott, en varning och ett motstånd som tvingar hindret.",
    },
  },
  {
    slug: "ansuz",
    glyph: "ᚨ",
    name: "Ansuz",
    deities: ["Odin", "Bragi", "Idunn"],
    text: {
      tr: "Atatanrı, ağız ve nehir ağzı. Nefes, dil ve ilham; iletişimin ve bilinçli zihnin rünü.",
      en: "The ancestor-god, the mouth, and the river mouth. Breath, speech, and inspiration; the rune of communication and of the conscious mind.",
      sv: "Förfadersguden, munnen och flodmynningen. Andedräkt, språk och inspiration; runan för kommunikation och för det medvetna sinnet.",
    },
  },
  {
    slug: "raido",
    glyph: "ᚱ",
    name: "Raido",
    deities: ["Hermod", "Ing", "Thor"],
    text: {
      tr: "Araba ve zaten olmuş olan. Yolun ritmi, dairenin dönüşü ve ileri hareket.",
      en: "The wagon, and what has already come to pass. The rhythm of the road, the turning of the circle, and movement forward.",
      sv: "Vagnen, och det som redan har skett. Vägens rytm, cirkelns vändning och rörelse framåt.",
    },
  },
  {
    slug: "kenaz",
    glyph: "ᚲ",
    name: "Kenaz",
    deities: ["Bragi", "Freyja", "Heimdall", "Weland"],
    text: {
      tr: "Meşale, yara, beceri ve yaratıcılık. Işık tutan zanaat: öğrenmek, öğretmek ve gizli olanı açmak.",
      en: "Torch, wound, skill, and creativity. The craft that holds a light: to learn, to teach, and to open what was hidden.",
      sv: "Fackla, sår, skicklighet och skapande. Hantverket som håller ett ljus: att lära, att lära ut och att öppna det dolda.",
    },
  },
  {
    slug: "gebo",
    glyph: "ᚷ",
    name: "Gebo",
    deities: ["Gefjon", "Vali", "Sjofn", "Odin"],
    text: {
      tr: "Hediye, adil değişim, kurban ve evlilik. Verme ile alma aynı tartıda durur; onur ve karşılıklılık.",
      en: "Gift, fair exchange, sacrifice, and marriage. Giving and receiving stand on the same scale; honor and reciprocity.",
      sv: "Gåva, rättvist byte, offer och äktenskap. Att ge och att ta emot står på samma våg; heder och ömsesidighet.",
    },
  },
  {
    slug: "wunjo",
    glyph: "ᚹ",
    name: "Wunjo",
    deities: ["Hnoss", "Gersemi", "Freyr", "Odin"],
    text: {
      tr: "Sevinç, umut, uyum ve mükemmellik. Paylaşılan amaç, esenlik ve birlikte duran bağ.",
      en: "Joy, hope, harmony, and perfection. A shared aim, well-being, and a bond that stands together.",
      sv: "Glädje, hopp, harmoni och fullkomlighet. Ett delat syfte, välbefinnande och ett band som står tillsammans.",
    },
  },
  {
    slug: "hagalaz",
    glyph: "ᚺ",
    name: "Hagalaz",
    deities: ["Hel", "Heimdall"],
    text: {
      tr: "Dolu, tahıl, bozulma ve değişim. Kriz ve kaçınılamayan son; her yıkımın içinden bir var oluş.",
      en: "Hail, grain, disruption, and change. Crisis and an end that cannot be avoided; a coming-into-being from inside every breaking.",
      sv: "Hagel, säd, sönderfall och förändring. Kris och ett slut som inte kan undvikas; ett blivande inifrån varje brytning.",
    },
  },
  {
    slug: "nauthiz",
    glyph: "ᚾ",
    name: "Nauthiz",
    deities: ["Skuld", "Nott"],
    text: {
      tr: "Olmayan ve ihtiyaç; sıkıntı. Kısıt, çaba ve karanlıkta yakılan ateş.",
      en: "What is missing, and need; hardship. Constraint, effort, and the fire lit in the dark.",
      sv: "Det som saknas, och behov; nöd. Begränsning, ansträngning och elden som tänds i mörkret.",
    },
  },
  {
    slug: "isa",
    glyph: "ᛁ",
    name: "Isa",
    deities: ["Skadi", "Rind", "Verthandi"],
    text: {
      tr: "Buz, kontrol, kimlik ve odak. İrade tek bir yerde durur; istenmeyen kuvvet burada kesilir.",
      en: "Ice, control, identity, and focus. The will stands in one place; an unwanted force is stopped here.",
      sv: "Is, kontroll, identitet och fokus. Viljan står på ett ställe; en oönskad kraft hejdas här.",
    },
  },
  {
    slug: "jera",
    glyph: "ᛃ",
    name: "Jera",
    deities: ["Sif", "Gefjon", "Freyr", "Verdandi", "Baldur", "Hodur"],
    text: {
      tr: "Yıl ve hasat. Doğru eylemin karşılığı, döngünün barışı ve kademeli, kalıcı değişim.",
      en: "Year and harvest. The return of a right action, the peace of the cycle, and a gradual, lasting change.",
      sv: "År och skörd. Rätt handlings gensvar, cykelns frid och en gradvis, bestående förändring.",
    },
  },
  {
    slug: "eihwaz",
    glyph: "ᛇ",
    name: "Eihwaz",
    deities: ["Skadi", "Ullr", "Odin"],
    text: {
      tr: "Porsuk ağacı ve ölümsüzlük. Uzun yaşam, omurga ve ölümün ötesi.",
      en: "The yew and immortality. A long life, the spine, and what lies beyond death.",
      sv: "Idegranen och odödlighet. Ett långt liv, ryggraden och det som ligger bortom döden.",
    },
  },
  {
    slug: "perthro",
    glyph: "ᛈ",
    name: "Perthro",
    deities: ["Frigg", "Nerthus", "Mimir", "Nornir"],
    text: {
      tr: "Zar atışı. Şans, neden ile sonuç ve kehanet; koşulların kurulduğu yer.",
      en: "The cast of the lot. Chance, cause and effect, and divination; the place where conditions are set.",
      sv: "Tärningskastet. Tur, orsak och verkan, och spådom; platsen där villkoren ställs.",
    },
  },
  {
    slug: "algiz",
    glyph: "ᛉ",
    name: "Algiz",
    deities: ["Heimdall", "Valkyrie"],
    text: {
      tr: "Geyik. Koruma, tanrılara bağ ve yolculuğun güvenli yönü.",
      en: "The elk. Protection, a bond to the gods, and the safe direction of a journey.",
      sv: "Älgen. Skydd, ett band till gudarna och resans trygga riktning.",
    },
  },
  {
    slug: "sowilo",
    glyph: "ᛊ",
    name: "Sowilo",
    deities: ["Baldur", "Sunna"],
    text: {
      tr: "Güneş. Canlanma, ısrar ve iradenin eyleme dönmesi.",
      en: "The sun. Revival, persistence, and the will turning into action.",
      sv: "Solen. Upplivning, uthållighet och viljan som blir handling.",
    },
  },
  {
    slug: "tiwaz",
    glyph: "ᛏ",
    name: "Tiwaz",
    deities: ["Tyr"],
    text: {
      tr: "Tyr. Adalet ve denge; sonucu bilerek yapılan hareket.",
      en: "Tyr. Justice and balance; a move made while the outcome is already known.",
      sv: "Tyr. Rättvisa och balans; ett drag som görs när utgången redan är känd.",
    },
  },
  {
    slug: "berkano",
    glyph: "ᛒ",
    name: "Berkano",
    deities: ["Urd", "Holda", "Perchta"],
    text: {
      tr: "Ağaç tanrıçası. Doğum, büyüme, anne ve yenilenme.",
      en: "The tree goddess. Birth, growth, the mother, and renewal.",
      sv: "Trädgudinnan. Födsel, växt, modern och förnyelse.",
    },
  },
  {
    slug: "ehwaz",
    glyph: "ᛖ",
    name: "Ehwaz",
    deities: ["Frey", "Freyja", "Loki", "Gersemi", "Hnoss"],
    text: {
      tr: "At. Ortaklık, güven ve birlikte hareket.",
      en: "The horse. Partnership, trust, and moving together.",
      sv: "Hästen. Partnerskap, tillit och att röra sig tillsammans.",
    },
  },
  {
    slug: "mannaz",
    glyph: "ᛗ",
    name: "Mannaz",
    deities: ["Odin", "Frigg", "Heimdall", "Mannus"],
    text: {
      tr: "İnsan ve insanlık. Akıl ve kendini gerçekleştirme.",
      en: "The human and humankind. Mind and self-realization.",
      sv: "Människan och mänskligheten. Förstånd och självförverkligande.",
    },
  },
  {
    slug: "laguz",
    glyph: "ᛚ",
    name: "Laguz",
    deities: ["Njord", "Nerthus", "Aegir", "Ran", "Frigg"],
    text: {
      tr: "Su ve deniz. Akış, derinlik ve bilinçaltı.",
      en: "Water and the sea. Flow, depth, and the unconscious.",
      sv: "Vatten och havet. Flöde, djup och det omedvetna.",
    },
  },
  {
    slug: "ingwaz",
    glyph: "ᛜ",
    name: "Ingwaz",
    deities: ["Ing", "Frey", "Freyja", "Nerthus"],
    text: {
      tr: "Tohum. Potansiyel, gebelik ve yeniden doğan hasat.",
      en: "The seed. Potential, gestation, and the harvest that is born again.",
      sv: "Fröet. Potential, havandeskap och skörden som föds på nytt.",
    },
  },
  {
    slug: "dagaz",
    glyph: "ᛞ",
    name: "Dagaz",
    deities: ["Dagr", "Nott", "Heimdall", "Ymir"],
    text: {
      tr: "Gün. Gündüz ile gece, cesur değişim ve aydınlanma.",
      en: "Day. Day and night, a bold change, and illumination.",
      sv: "Dagen. Dag och natt, en djärv förändring och upplysning.",
    },
  },
  {
    slug: "othala",
    glyph: "ᛟ",
    name: "Othala",
    deities: ["Odin"],
    text: {
      tr: "Yurt. Ata, miras ve ait olunan yer.",
      en: "The homestead. Ancestor, inheritance, and the place one belongs to.",
      sv: "Hemmanet. Förfader, arv och platsen man hör till.",
    },
  },
];

export function runeBySlug(slug: string): Rune | undefined {
  return runes.find((rune) => rune.slug === slug);
}
