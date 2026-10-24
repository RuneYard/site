"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language";
import type { Lang } from "@/lib/copy";

type TwinNode = {
  pillar: Record<Lang, string>;
  glyph: string;
  title: Record<Lang, string>;
  reason: Record<Lang, string>;
  href: string;
};

type ArchetypeCluster = {
  id: string;
  theme: Record<Lang, string>;
  runes: string[];
  keywords: string[];
  nodes: {
    rune: TwinNode;
    kelt: TwinNode;
    mezopotamya: TwinNode;
    saman: TwinNode;
    witchcraft: TwinNode;
    astroloji: TwinNode;
  };
};

const CLUSTERS: ArchetypeCluster[] = [
  {
    id: "ward-threshold",
    theme: {
      tr: "EŞİK MUHAFIZLIĞI, ARINMA VE KALKAN ARKETİPİ",
      en: "THRESHOLD WARDSHIP, PURIFICATION & SHIELD ARCHETYPE",
      sv: "TRÖSKELSKYDD, RENING & SKÖLDARKETYP",
    },
    runes: ["algiz", "thurisaz", "eihwaz"],
    keywords: ["esik", "korun", "kalkan", "lamassu", "alaslama", "uvez", "karacali", "samhain"],
    nodes: {
      rune: {
        pillar: { tr: "Kuzey Rün İkizi", en: "Norse Rune Twin", sv: "Nordisk Run-tvilling" },
        glyph: "ᛉ",
        title: {
          tr: "Algiz & Thurisaz · Uyanık Sınır",
          en: "Algiz & Thurisaz · Vigilant Boundary",
          sv: "Algiz & Thurisaz · Vaksam Gräns",
        },
        reason: {
          tr: "Geyik boynuzu ve dikenli eşik; yabancı gölgeyi içeri sokmayan uyanık merkez.",
          en: "Elk-sedge and thorn; the vigilant boundary that keeps intrusive shadows outside.",
          sv: "Älggräs och törne; den vaksamma gränsen som håller skuggor utanför.",
        },
        href: "/runler/algiz",
      },
      kelt: {
        pillar: { tr: "Kelt Ogham İkizi", en: "Celtic Ogham Twin", sv: "Keltisk Ogham-tvilling" },
        glyph: "ᚂ",
        title: {
          tr: "Luis (Üvez) & Huath (Alıç) · Birinci Aicme",
          en: "Luis (Rowan) & Huath (Hawthorn)",
          sv: "Luis (Rönn) & Huath (Hagtorn)",
        },
        reason: {
          tr: "Kelt kapı kirişlerine asılan kızıl üvez dalı ve alıç dikeniyle eşik mühürlemesi.",
          en: "Rowan twigs above the lintel and hawthorn spine guarding the boundary between worlds.",
          sv: "Rönnkvistar över dörrposten och hagtornets tagg som vaktar tröskeln.",
        },
        href: "/kelt/birinci-aicme",
      },
      mezopotamya: {
        pillar: {
          tr: "Mezopotamya Tablet İkizi",
          en: "Mesopotamian Tablet Twin",
          sv: "Mesopotamisk Tvilling",
        },
        glyph: "𒀭",
        title: {
          tr: "Lamassu & Maqlû · Eşik Muhafızları",
          en: "Lamassu & Maqlû · Threshold Guardians",
          sv: "Lamassu & Maqlû · Tröskelväktare",
        },
        reason: {
          tr: "Babil kapılarında kanatlı taş muhafızlar ve Maqlû tabletlerindeki tuz-ateş çemberi.",
          en: "Winged stone guardians at Babylonian gates and the salt-and-fire circle of Maqlû.",
          sv: "Bevingade stenväktare vid Babylons portar och Maqlû-tavlornas saltcirkel.",
        },
        href: "/mezopotamya/lamassu-ve-esik",
      },
      saman: {
        pillar: { tr: "Şamanik Kök İkizi", en: "Shamanic Root Twin", sv: "Schamanistisk Tvilling" },
        glyph: "𐰀",
        title: {
          tr: "Alaslama, Ardıç & Ocak İyesi",
          en: "Alaslama, Juniper Smoke & Hearth Spirit",
          sv: "Alaslama, Enrök & Härdväsen",
        },
        reason: {
          tr: "Altay geleneğinde ardıç dumanıyla (‘Alas!’) mekanı ve ruhu ağır tortudan arındırma.",
          en: "Clearing space and spirit with juniper smoke ('Alas!') in Altai hearth tradition.",
          sv: "Att rena rum och sinne med enrök ('Alas!') i altajsk tradition.",
        },
        href: "/saman/alaslama-ve-arinma",
      },
      witchcraft: {
        pillar: {
          tr: "Yeşil Ahit & Otacılık İkizi",
          en: "Green Covenant Twin",
          sv: "Gröna Förbundets Tvilling",
        },
        glyph: "⚝",
        title: {
          tr: "Hane Eşiği, Tuz, Biberiye & Üzerlik",
          en: "Hearth Threshold, Salt, Rosemary & Rue",
          sv: "Hemmets Tröskel, Salt, Rosmarin & Harmel",
        },
        reason: {
          tr: "Kaya tuzu, soğuk demir ve biberiye ile hanenin sınırını mühürleyen ocak zanaatı.",
          en: "Sealing the household perimeter with rock salt, cold iron, rosemary, and rue.",
          sv: "Att försegla hemmets gräns med bergsalt, kallt järn och rosmarin.",
        },
        href: "/witchcraft/hane-ve-mutfak",
      },
      astroloji: {
        pillar: {
          tr: "Klasik Gökyüzü İkizi",
          en: "Classical Sky Twin",
          sv: "Klassisk Himmels-tvilling",
        },
        glyph: "♄",
        title: {
          tr: "Satürn & Mars · Sınır ve Savunma",
          en: "Saturn & Mars · Boundary & Defense",
          sv: "Saturnus & Mars · Gräns & Försvar",
        },
        reason: {
          tr: "Klasik astrolojide Satürn surları ve sınırı çizer; Mars ise içeri girecek olanı keser.",
          en: "In classical astrology, Saturn builds the wall and limit while Mars defends the gate.",
          sv: "I klassisk astrologi reser Saturnus muren medan Mars försvarar porten.",
        },
        href: "/astroloji/yedi-klasik-gezegen",
      },
    },
  },
  {
    id: "fire-torch-craft",
    theme: {
      tr: "OCAK ATEŞİ, İLHAM NEFESİ VE ZANAAT ARKETİPİ",
      en: "HEARTH FIRE, POETIC BREATH & SACRED CRAFT ARCHETYPE",
      sv: "HÄRDELD, SKALDEkonst & HANTVERKSARKETYP",
    },
    runes: ["kenaz", "ansuz", "sowilo"],
    keywords: ["ates", "ocak", "awen", "ilham", "nefes", "mulapin", "gunes", "mum"],
    nodes: {
      rune: {
        pillar: { tr: "Kuzey Rün İkizi", en: "Norse Rune Twin", sv: "Nordisk Run-tvilling" },
        glyph: "ᚲ",
        title: {
          tr: "Kenaz & Ansuz · Çıra Ateşi ve Nefes",
          en: "Kenaz & Ansuz · Torchlight & Breath",
          sv: "Kenaz & Ansuz · Fackla & Andedräkt",
        },
        reason: {
          tr: "Ham maddeyi bilgiye dönüştüren kontrollü ocak meşalesi (Kenaz) ve bilge söz (Ansuz).",
          en: "The controlled craft-torch (Kenaz) and inspired speech (Ansuz) that turn raw matter into wisdom.",
          sv: "Den tuktade facklan (Kenaz) och det besjälade ordet (Ansuz).",
        },
        href: "/runler/kenaz",
      },
      kelt: {
        pillar: { tr: "Kelt Ogham İkizi", en: "Celtic Ogham Twin", sv: "Keltisk Ogham-tvilling" },
        glyph: "ᚇ",
        title: {
          tr: "Awen ve Üç Isınma Kazanı",
          en: "Awen & The Three Cauldrons",
          sv: "Awen & De Tre Kastrullerna",
        },
        reason: {
          tr: "Kelt ozanlarında içsel ateşin uyanmasıyla akan şiirsel ve bilge ilham nefesi.",
          en: "The poetic breath of inspiration kindled within the three inner cauldrons of Celtic lore.",
          sv: "Inspirationens flödande andedräkt ur de tre inre kittlarna.",
        },
        href: "/kelt/awen-ve-uc-kazan",
      },
      mezopotamya: {
        pillar: {
          tr: "Mezopotamya Tablet İkizi",
          en: "Mesopotamian Tablet Twin",
          sv: "Mesopotamisk Tvilling",
        },
        glyph: "𒀭",
        title: {
          tr: "Şamaş (Utu) & Gibil · Hakikat Işığı",
          en: "Shamash (Utu) & Gibil · Light of Truth",
          sv: "Shamash (Utu) & Gibil · Sanningens Ljus",
        },
        reason: {
          tr: "Karanlıkta saklananı aydınlatan Güneş (Şamaş) ve metali saflaştıran kutsal ateş.",
          en: "Shamash who illuminates all hidden things, and the sacred forge-fire of Gibil.",
          sv: "Shamash som belyser allt dolt och Gibils renande ässjeeld.",
        },
        href: "/mezopotamya/gunes-ve-ay",
      },
      saman: {
        pillar: { tr: "Şamanik Kök İkizi", en: "Shamanic Root Twin", sv: "Schamanistisk Tvilling" },
        glyph: "🔥",
        title: {
          tr: "Od Ana (Ot Ene) & Düngürün Nefesi",
          en: "Od Ana (Mother Fire) & Breath of the Drum",
          sv: "Od Ana (Eldmodern) & Trummans Andedräkt",
        },
        reason: {
          tr: "Altay ocağının koruyucu ateş ruhu ve kamın sesle kurduğu titreşim köprüsü.",
          en: "The guardian spirit of the Altai hearth fire and the resonant voice of the shaman's drum.",
          sv: "Altajhärdens skyddande eldväsen och trummans ljudbro.",
        },
        href: "/saman/dungur-ve-nefes",
      },
      witchcraft: {
        pillar: {
          tr: "Yeşil Ahit & Otacılık İkizi",
          en: "Green Covenant Twin",
          sv: "Gröna Förbundets Tvilling",
        },
        glyph: "🕯",
        title: {
          tr: "Balmumu Mum, Reçineler ve Ateş Elementi",
          en: "Beeswax Candle, Resins & Element of Fire",
          sv: "Bivaxljus, Hartser & Eldens Element",
        },
        reason: {
          tr: "Niyeti odaklayan balmumu alevi ve güneş reçinelerinin (günlük, çam, kehribar) ısısı.",
          en: "The focused beeswax flame and solar resins (frankincense, pine, amber) warming the room.",
          sv: "Bivaxljusets fokuserade låga och soliga hartser i vinterrummet.",
        },
        href: "/witchcraft/dort-element-ve-yonler",
      },
      astroloji: {
        pillar: {
          tr: "Klasik Gökyüzü İkizi",
          en: "Classical Sky Twin",
          sv: "Klassisk Himmels-tvilling",
        },
        glyph: "☉",
        title: {
          tr: "Güneş & Merkür Cazimi · Kalp Gözü",
          en: "Sun & Mercury Cazimi · Heart of the King",
          sv: "Solen & Merkurius Cazimi · Kungens Hjärta",
        },
        reason: {
          tr: "Haritanın yaşam ışığı (Güneş) ve zihnin ateşle birleştiği berrak idrak anı.",
          en: "The vital light of the chart (Sun) and the lucid mind seated in the heart of the Sun.",
          sv: "Kartans livsljus (Solen) och den klara tanken i solens hjärta.",
        },
        href: "/astroloji/harita-nasil-okunur",
      },
    },
  },
  {
    id: "roots-earth-abundance",
    theme: {
      tr: "TOPRAK KÖKÜ, BEREKET, EMEK VE MİRAS ARKETİPİ",
      en: "EARTH ROOT, VITALITY, HARVEST & ANCESTRAL HERITAGE ARCHETYPE",
      sv: "JORDROT, LIVSKRAFT, SKÖRD & ARV-ARKETYP",
    },
    runes: ["fehu", "uruz", "jera", "ingwaz", "othala", "berkano", "wunjo"],
    keywords: ["bereket", "toprak", "hasat", "ata", "miras", "agac", "mese", "buza"],
    nodes: {
      rune: {
        pillar: { tr: "Kuzey Rün İkizi", en: "Norse Rune Twin", sv: "Nordisk Run-tvilling" },
        glyph: "ᚠ",
        title: {
          tr: "Fehu, Jera & Othala · Emek ve Kök",
          en: "Fehu, Jera & Othala · Labor & Heritage",
          sv: "Fehu, Jera & Othala · Möda & Arv",
        },
        reason: {
          tr: "Dolaşımdaki bereket (Fehu), mevsiminde biçilen dürüst hasat (Jera) ve ata toprağı (Othala).",
          en: "Circulating wealth (Fehu), honest seasonal harvest (Jera), and ancestral land (Othala).",
          sv: "Flödande välstånd (Fehu), mogen skörd (Jera) och fädernejord (Othala).",
        },
        href: "/runler/jera",
      },
      kelt: {
        pillar: { tr: "Kelt Ogham İkizi", en: "Celtic Ogham Twin", sv: "Keltisk Ogham-tvilling" },
        glyph: "ᚃ",
        title: {
          tr: "Beith (Huş) & Duir (Meşe) · Nemeton Korusu",
          en: "Beith (Birch) & Duir (Oak) · Sacred Grove",
          sv: "Beith (Björk) & Duir (Ek) · Nemeton-lunden",
        },
        reason: {
          tr: "Baharı uyandıran huş ağacı (Berkano/Beith) ve yüzyıllar boyu kök tutan meşe kapısı.",
          en: "Birch awakening the spring and the enduring Oak holding the memory of the land.",
          sv: "Björken som väcker våren och eken som bär landets djupa rötter.",
        },
        href: "/kelt/nemeton-ve-cark",
      },
      mezopotamya: {
        pillar: {
          tr: "Mezopotamya Tablet İkizi",
          en: "Mesopotamian Tablet Twin",
          sv: "Mesopotamisk Tvilling",
        },
        glyph: "𒀭",
        title: {
          tr: "Ninhursag & Çiftçi Almanağı (Sümer)",
          en: "Ninhursag & The Sumerian Farmer's Almanac",
          sv: "Ninhursag & Den Sumeriska Bondealmanackan",
        },
        reason: {
          tr: "Toprağın sabırla sürülmesi, sulama kanalları ve mevsim vaktine sadakatin bereketi.",
          en: "Patiently tending the soil, irrigation channels, and keeping faith with seasonal time.",
          sv: "Att bruka jorden med tålamod och följa årstidernas lag.",
        },
        href: "/mezopotamya/ziggurat-ve-yildizlar",
      },
      saman: {
        pillar: { tr: "Şamanik Kök İkizi", en: "Shamanic Root Twin", sv: "Schamanistisk Tvilling" },
        glyph: "☥",
        title: {
          tr: "Yer-Su (Yer-Sub) İyeleri ve Dünya Ağacı",
          en: "Yer-Su (Earth-Water Spirits) & World Tree",
          sv: "Yer-Su (Jord-Vattenväsen) & Världsträdet",
        },
        reason: {
          tr: "Dağın, pınarın ve ağacın sahibi olan doğa iyeleriyle şükran ve ölçü bağını korumak.",
          en: "Honoring the spirits of mountain, spring, and tree through gratitude and measure.",
          sv: "Att hedra bergets, källans och trädets rådare med tacksamhet.",
        },
        href: "/saman/uc-dunya",
      },
      witchcraft: {
        pillar: {
          tr: "Yeşil Ahit & Otacılık İkizi",
          en: "Green Covenant Twin",
          sv: "Gröna Förbundets Tvilling",
        },
        glyph: "🌿",
        title: {
          tr: "Kır ve Aktar · Kökler, Tohumlar ve Hasat",
          en: "Wildcrafted Roots, Seeds & Seasonal Harvest",
          sv: "Vilda Rötter, Frön & Årstidens Skörd",
        },
        reason: {
          tr: "Bitkiyi kökünden sökerken toprağa pay bırakma ve mevsim çarkıyla uyumlu yaşama.",
          en: "Leaving an offering to the earth when harvesting roots and walking with the seasonal wheel.",
          sv: "Att lämna en gåva till jorden vid skörd och vandra med årshjulet.",
        },
        href: "/witchcraft/kir-ve-aktar",
      },
      astroloji: {
        pillar: {
          tr: "Klasik Gökyüzü İkizi",
          en: "Classical Sky Twin",
          sv: "Klassisk Himmels-tvilling",
        },
        glyph: "♉",
        title: {
          tr: "Boğa, Venüs & Jüpiter · Somut Değer ve Bereket",
          en: "Taurus, Venus & Jupiter · Tangible Worth",
          sv: "Oxen, Venus & Jupiter · Påtagligt Värde",
        },
        reason: {
          tr: "Toprağın sabırlı verimliliği, bedensel sağlamlık ve kalıcı değer inşası.",
          en: "The patient fertility of earth, bodily steadiness, and building enduring value.",
          sv: "Jordens tålmodiga bördighet, kroppslig stadga och bestående värde.",
        },
        href: "/astroloji/on-iki-burc-ve-nitelikler",
      },
    },
  },
  {
    id: "water-fate-journey",
    theme: {
      tr: "DERİN SU, KADER KUYUSU, YOLCULUK VE DÖNÜŞÜM ARKETİPİ",
      en: "DEEP WATER, WELL OF FATE, JOURNEY & TRANSFORMATION ARCHETYPE",
      sv: "DJUPT VATTEN, ÖDESBRUNN, RESA & FÖRVANDLINGSARKETYP",
    },
    runes: ["raidho", "gebo", "hagalaz", "nauthiz", "isa", "perthro", "tiwaz", "ehwaz", "mannaz", "laguz", "dagaz"],
    keywords: ["su", "abzu", "kader", "yol", "rüya", "ay", "inanna", "kumalak"],
    nodes: {
      rune: {
        pillar: { tr: "Kuzey Rün İkizi", en: "Norse Rune Twin", sv: "Nordisk Run-tvilling" },
        glyph: "ᛚ",
        title: {
          tr: "Laguz, Perthro & Raidho · Akış ve Kuyu",
          en: "Laguz, Perthro & Raidho · Current & Well",
          sv: "Laguz, Perthro & Raidho · Ström & Brunn",
        },
        reason: {
          tr: "Bilinçdışının derin suyu (Laguz), Urðr Kuyusu’ndaki kader zarfı (Perthro) ve doğru ritim (Raidho).",
          en: "The deep water of intuition (Laguz), the lot at the Well of Urðr (Perthro), and right rhythm (Raidho).",
          sv: "Intuitionens djupa vatten (Laguz), Urds brunn (Perthro) och den rätta rytmen (Raidho).",
        },
        href: "/runler/laguz",
      },
      kelt: {
        pillar: { tr: "Kelt Ogham İkizi", en: "Celtic Ogham Twin", sv: "Keltisk Ogham-tvilling" },
        glyph: "ᚄ",
        title: {
          tr: "Saille (Söğüt) & Ioho (Porsuk) · Zaman ve Su",
          en: "Saille (Willow) & Ioho (Yew) · Water & Time",
          sv: "Saille (Pil) & Ioho (Idegran) · Vatten & Tid",
        },
        reason: {
          tr: "Akarsu kıyısında eğilip kırılmayan söğüt (Ay/Sezgi) ve zamanı aşan porsuk ağacı.",
          en: "The willow bending besidelunar streams without breaking, and the timeless yew.",
          sv: "Pilen som böjer sig vid vattnet utan att brista och den tidlösa idegranen.",
        },
        href: "/kelt/dorduncu-aicme",
      },
      mezopotamya: {
        pillar: {
          tr: "Mezopotamya Tablet İkizi",
          en: "Mesopotamian Tablet Twin",
          sv: "Mesopotamisk Tvilling",
        },
        glyph: "𒀭",
        title: {
          tr: "Enki’nin Abzu Suları & İnanna’nın Yedi Kapısı",
          en: "Enki's Abzu Waters & Inanna's Seven Gates",
          sv: "Enkis Abzu-vatten & Inannas Sju Portar",
        },
        reason: {
          tr: "Yerin altındaki bilgelik okyanusu (Abzu) ve fazlalıkları bırakarak öze iniş.",
          en: "The subterranean ocean of wisdom (Abzu) and descending stripped of false crowns.",
          sv: "Visdomens djupa urvatten (Abzu) och nedstigningen genom de sju portarna.",
        },
        href: "/mezopotamya/abzu-ve-asalluhi",
      },
      saman: {
        pillar: { tr: "Şamanik Kök İkizi", en: "Shamanic Root Twin", sv: "Schamanistisk Tvilling" },
        glyph: "🦌",
        title: {
          tr: "Seidr, 41 Kumalak ve Ruh Yolculuğu",
          en: "Seidr, 41 Kumalak & Soul Journeying",
          sv: "Sejd, 41 Kumalak & Själsresa",
        },
        reason: {
          tr: "Kuzeyin Seidr kürsüsü ve Orta Asya’nın 41 Kumalak taşlarıyla görünmeyen akışı okuma.",
          en: "Reading the unseen current through Northern Seidr and Central Asian 41 Kumalak stones.",
          sv: "Att läsa det osynliga flödet genom nordisk sejd och 41 Kumalak-stenar.",
        },
        href: "/saman/seidr-ve-kuzey",
      },
      witchcraft: {
        pillar: {
          tr: "Yeşil Ahit & Otacılık İkizi",
          en: "Green Covenant Twin",
          sv: "Gröna Förbundets Tvilling",
        },
        glyph: "🌙",
        title: {
          tr: "Ay Suları, Pelin Otu ve Eşik Rüyaları",
          en: "Lunar Waters, Mugwort & Threshold Dreams",
          sv: "Månvatten, Gråbo & Tröskeldrömmar",
        },
        reason: {
          tr: "Ay evreleriyle uyumlanan su hafızası ve pelin otunun (Artemisia) berrak rüya görüsü.",
          en: "Water attuned to the lunar phases and mugwort (Artemisia) opening lucid threshold sight.",
          sv: "Vattnets minne i takt med månfaserna och gråbons klara drömsyn.",
        },
        href: "/witchcraft/agaclar-ve-recineler",
      },
      astroloji: {
        pillar: {
          tr: "Klasik Gökyüzü İkizi",
          en: "Classical Sky Twin",
          sv: "Klassisk Himmels-tvilling",
        },
        glyph: "☽",
        title: {
          tr: "Ay Evreleri, Kuzey/Güney Düğümleri ve Kader",
          en: "Lunar Phases, North/South Nodes & Destiny",
          sv: "Månfaser, Månknutar & Ödesriktning",
        },
        reason: {
          tr: "Ruhun geçmişten getirdiği tortuyu (Güney Düğümü) bırakıp büyüme ufkuna (Kuzey Düğümü) yürümesi.",
          en: "Releasing inherited weight (South Node) to walk toward the soul's horizon (North Node).",
          sv: "Att släppa det förflutnas tyngd (Södra knuten) och vandra mot växten (Norra knuten).",
        },
        href: "/astroloji/ay-evreleri-ve-dugumler",
      },
    },
  },
];

const UI = {
  tr: {
    badge: "🔗 KARŞILAŞTIRMALI KADİM SEMBOL AĞI · 5 GELENEK KÖK BAĞLANTISI",
    heading: "Bu Sembolün Diğer Kadim Geleneklerdeki Kök İkizleri",
    sub: "Farklı coğrafyalardaki bilgeler aynı doğa yasasını farklı sembollerle mühürlemiştir. Bu odanın diğer dört gelenekteki ve gökyüzündeki tam karşılıkları:",
    openBtn: "İkiz Odaya Geç →",
  },
  en: {
    badge: "🔗 COMPARATIVE SYMBOL NETWORK · 5-TRADITION ROOT TWINS",
    heading: "Root Twins of This Symbol Across Ancient Traditions",
    sub: "Sages across distant lands sealed the same natural law under different emblems. Explore the direct counterparts of this room across the other traditions:",
    openBtn: "Enter Twin Room →",
  },
  sv: {
    badge: "🔗 JÄMFÖRANDE SYMBOLNÄTVERK · RÖTTER I 5 TRADITIONER",
    heading: "Denna Symbols Rottvillingar i Andra Forntida Traditioner",
    sub: "Visa män och kvinnor i skilda kulturer förseglade samma naturlag under olika tecken. Utforska motsvarigheterna i de andra traditionerna:",
    openBtn: "Gå till Tvillingrummet →",
  },
} as const;

export function SymbolicTwins({
  runeSlug,
  traditionSlug,
  doorSlug,
}: {
  runeSlug?: string;
  traditionSlug?: string;
  doorSlug?: string;
}) {
  const { lang } = useLanguage();
  const ui = UI[lang];

  let cluster = CLUSTERS[0];
  if (runeSlug) {
    cluster =
      CLUSTERS.find((c) => c.runes.includes(runeSlug)) ?? CLUSTERS[0];
  } else if (doorSlug) {
    const hay = `${traditionSlug ?? ""} ${doorSlug}`.toLowerCase();
    cluster =
      CLUSTERS.find((c) => c.keywords.some((kw) => hay.includes(kw))) ??
      CLUSTERS[Math.abs(doorSlug.length) % CLUSTERS.length];
  }

  const allNodes = [
    { key: "rune", node: cluster.nodes.rune },
    { key: "kelt", node: cluster.nodes.kelt },
    { key: "mezopotamya", node: cluster.nodes.mezopotamya },
    { key: "saman", node: cluster.nodes.saman },
    { key: "witchcraft", node: cluster.nodes.witchcraft },
    { key: "astroloji", node: cluster.nodes.astroloji },
  ].filter((item) => {
    if (runeSlug && item.key === "rune") return false;
    if (traditionSlug && item.key === traditionSlug) return false;
    return true;
  }).slice(0, 4);

  return (
    <section className="mt-12 border border-amber/35 bg-gradient-to-br from-[#161d1a] via-[#101614] to-[#0a0d0c] p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber/20 pb-3">
        <span className="text-[10px] font-semibold tracking-[0.2em] text-amber uppercase">
          {ui.badge}
        </span>
        <span className="border border-chalk/15 bg-black/40 px-2.5 py-0.5 text-[9px] tracking-[0.16em] text-chalk/70 uppercase">
          {cluster.theme[lang]}
        </span>
      </div>

      <h2 className="mt-4 font-display text-2xl font-medium text-chalk sm:text-3xl">
        {ui.heading}
      </h2>
      <p className="mt-1.5 max-w-3xl text-xs leading-5 text-chalk/72 sm:text-sm">
        {ui.sub}
      </p>

      <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
        {allNodes.map(({ key, node }) => (
          <Link
            key={key}
            href={node.href}
            className="card-slate group flex flex-col justify-between border border-chalk/15 p-4 transition-colors hover:border-amber/55"
          >
            <div>
              <div className="flex items-center justify-between gap-2 text-[10px] tracking-[0.18em] text-amber/90 uppercase">
                <span>{node.pillar[lang]}</span>
                <span className="font-display text-2xl leading-none text-amber">
                  {node.glyph}
                </span>
              </div>
              <h3 className="mt-2 font-display text-xl font-medium text-chalk group-hover:text-amber transition-colors">
                {node.title[lang]}
              </h3>
              <p className="mt-1.5 text-xs leading-5 text-chalk/75">
                {node.reason[lang]}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-chalk/10 pt-2.5 text-[10px] tracking-[0.16em] text-chalk/55 uppercase group-hover:text-amber">
              <span>{ui.openBtn}</span>
              <span aria-hidden>→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
