import type { Lang } from "@/lib/copy";
import type { TraditionSubDoor } from "@/content/traditions";

export const astrologyHall = {
  "title": {
    "tr": "Astroloji",
    "en": "Astrology",
    "sv": "Astrologi"
  },
  "line": {
    "tr": "Ekliptik geometrisi, yedi klasik gezegen küresi, on iki burç matrisi, on iki ev (topoi), Ay düğümleri ve gökyüzü döngüleri.",
    "en": "Ecliptic geometry, the seven classical planetary spheres, the twelve-sign matrix, the twelve houses (topoi), lunar nodes and sky cycles.",
    "sv": "Ekliptisk geometri, de sju klassiska planetsfärerna, tolvteckensmatrisen, de tolv husen (topoi), månnoder och himmelscykler."
  },
  "backLabel": {
    "tr": "← Astroloji odasına dön",
    "en": "← Back to Astrology hall",
    "sv": "← Tillbaka till Astrologi"
  },
  "skyNotesHeading": {
    "tr": "Güncel Gökyüzü Notları ve Dönem Okumaları",
    "en": "Current Sky Notes and Period Readings",
    "sv": "Aktuella himmelsnotiser och periodläsningar"
  },
  "image": "/astroloji/astroloji-hall.jpg"
} as const;

export const astrologyDoors: TraditionSubDoor[] = [
  {
    "slug": "harita-nasil-okunur",
    "glyph": "⊕",
    "image": "/astroloji/harita-dort-kose.jpg",
    "title": {
      "tr": "Haritaya Nereden Bakılır? Dört Köşe ve Ufuk Ekseni",
      "en": "Where to Look in a Chart? The Four Angles and Horizon Axis",
      "sv": "Var börjar man i kartan? De fyra hörnen och horisontaxeln"
    },
    "summary": {
      "tr": "Horoskopos (Yükselen), Alçalan, Göğün Tepesi (MC) ve Kökü (IC); gündüz ve gece haritası ayrımı.",
      "en": "Horoskopos (Ascendant), Descendant, Midheaven (MC) and Imum Coeli (IC); diurnal vs. nocturnal chart sect.",
      "sv": "Horoskopos (Ascendenten), Descendenten, Medium Coeli (MC) och Imum Coeli (IC); dag- och nattkarta."
    },
    "subtitle": {
      "tr": "Gökyüzü haritasının omurgasını kuran ufuk ve meridyen eksenleri",
      "en": "The horizon and meridian axes that form the spine of the celestial chart",
      "sv": "Horisont- och meridianaxlarna som bildar himmelskartans ryggrad"
    },
    "paragraphs": {
      "tr": [
        "Bir doğum haritası (natal harita) rastgele bir sembol tablosu değil; belirli bir coğrafi enlem-boylamda ve belirli bir anda gökyüzünün yeryüzü ufkuna göre çekilmiş iki boyutlu astronomik kesitidir. Haritanın tam merkezinde gözlemci (yeryüzü) durur; dış çember ise Güneş'in yıl boyunca izlediği görünür yol olan ekliptik kuşağıdır.",
        "Haritaya ilk bakıldığında gözün araması gereken ilk çizgi yatay ufuk eksenidir. Haritanın sol tarafı Doğu ufkunu (Ascendant / ASC), sağ tarafı Batı ufkunu (Descendant / DSC) gösterir. Yatay çizginin üstünde kalan yarımküre o anda yerin üstünde, gözle görülebilir gökyüzüdür; çizginin altında kalan yarımküre ise o sırada ayaklarımızın altında, ufkun karanlığında kalan gökyüzüdür.",
        "İkinci ana eksen dikey meridyen çizgisidir: Gökyüzünün en yüksek doruk noktası olan MC (Medium Coeli / Göğün Ortası) haritanın tepesinde, en derin kök noktası olan IC (Imum Coeli / Göğün Dibi) ise haritanın en altında yer alır. Güneş'in ufuk çizgisinin üstünde mi yoksa altında mı olduğu, haritanın en temel kimliğini — Gündüz Haritası mı yoksa Gece Haritası mı olduğunu — belirler.",
        "Klasik astrolojide (Dorotheus, Vettius Valens ve Ptolemaios geleneğinde) bir harita okunurken önce bu dört köşe (kentra), ardından haritanın Gündüz/Gece sekti (hairesis), sonra Işıklar (Güneş ve Ay) ve nihayet Yükselen burcun yöneticisi (harita yöneticisi) incelenir. Bu omurga kurulmadan tek tek gezegen yorumuna geçilmez."
      ],
      "en": [
        "A birth chart (natal chart) is not an arbitrary table of symbols; it is a two-dimensional astronomical cross-section of the sky relative to the local horizon at a specific geographical latitude, longitude, and moment in time. At the center stands the observer on Earth; the outer ring is the ecliptic, the apparent annual path of the Sun.",
        "When looking at a chart for the first time, the eye must first locate the horizontal horizon axis. The left side marks the Eastern horizon (Ascendant / ASC), and the right side marks the Western horizon (Descendant / DSC). The hemisphere above the horizontal line is the visible sky above the earth; the hemisphere below is the sky beneath our feet, hidden below the horizon.",
        "The second primary axis is the vertical meridian: the culminating peak of the sky, MC (Medium Coeli / Midheaven), sits at the top of the chart, while the deepest root point, IC (Imum Coeli / Bottom of the Sky), sits at the bottom. Whether the Sun is above or below the horizon line determines the chart's most fundamental condition: whether it is a Diurnal (Day) chart or a Nocturnal (Night) chart.",
        "In classical astrology (the tradition of Dorotheus, Vettius Valens, and Ptolemy), reading a chart always begins with these four angles (kentra), followed by the chart's sect (hairesis), the Luminaries (Sun and Moon), and finally the domicile ruler of the Ascendant (the chart ruler). No isolated planetary interpretation is made before this structural spine is established."
      ],
      "sv": [
        "Ett födelsehoroskop (natalkarta) är inte en godtycklig symboltabell; det är ett tvådimensionellt astronomiskt tvärsnitt av himlen i förhållande till den lokala horisonten vid en specifik latitud, longitud och tidpunkt. I mitten står betraktaren på jorden; den yttre ringen är ekliptikan, solens skenbara årliga bana.",
        "När man först betraktar en karta ska blicken först söka den horisontella horisontaxeln. Vänster sida markerar den östra horisonten (Ascendenten / ASC) och höger sida den västra horisonten (Descendenten / DSC). Halvklotet ovanför linjen är den synliga himlen ovan jord; halvklotet nedanför är himlen under våra fötter.",
        "Den andra huvudaxeln är den vertikala meridianen: himlens högsta kulminationspunkt, MC (Medium Coeli), ligger högst upp i kartan, medan den djupaste rotpunkten, IC (Imum Coeli), ligger längst ned. Om solen befinner sig ovanför eller under horisontlinjen avgör kartans mest grundläggande tillstånd: om det är en dagkarta eller en nattkarta.",
        "I klassisk astrologi (Dorotheus, Vettius Valens och Ptolemaios tradition) börjar en kartläsning alltid med dessa fyra hörn (kentra), följt av kartans sekt (hairesis), ljusen (Solen och Månen) och slutligen Ascendentens härskare."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Horoskopos ve Doğu Ufku (ASC – DSC Ekseni)",
          "body": "Antik Yunancada 'Horoskopos' (saati gözleyen) kelimesi tüm haritayı değil, doğrudan doğu ufkunda yükselmekte olan burç derecesini (ASC) ifade eder. Doğu ufku yıldızların ve gezegenlerin yeryüzü sahnesine doğduğu, görünür olduğu eşiktir; bu yüzden beden, nefes, yaşama adım atış biçimi ve birincil mizaç Yükselen burçla temsil edilir. Tam karşısındaki Batı ufku (DSC / 7. Ev başlangıcı) ise ışığın battığı, 'ben'in 'öteki' ile karşılaştığı, sözleşme ve aynalanma eşiğidir."
        },
        {
          "heading": "Meridyen Ekseni: Göğün Tepesi (MC) ve Göğün Kökü (IC)",
          "body": "Bir gezegen doğu ufkundan yükseldikten sonra gökyüzündeki en yüksek noktasına güney meridyeninde (Kuzey Yarımküre'de) ulaşır; buraya MC (Medium Coeli) denir. MC, insanın toplum önünde en görünür olduğu yeri, mesleğini, eylemlerinin meyvesini ve kamusal izini gösterir. Tam karşısındaki kuzey meridyeni (IC / Imum Coeli) ise Güneş'in gece yarısı geçtiği en derin noktadır; soy kütüğünü, evi, toprağı, mahremiyeti ve yaşamın görünmeyen köklerini taşır."
        },
        {
          "heading": "Gündüz ve Gece Haritası: Sekt (Hairesis / Hayz) Kuralı",
          "body": "Güneş ufuk çizgisinin (ASC–DSC) üstündeyse harita Gündüz (Diurnal), altındaysa Gece (Nocturnal) haritasıdır. Gündüz takımının (sektinin) önderi Güneş, yardımcı gezegenleri Jüpiter ve Satürn'dür; Gece takımının önderi Ay, yardımcı gezegenleri Venüs ve Mars'tır. Örneğin Satürn gündüz haritalarında daha ölçülü, yapılandırıcı ve soğukkanlı çalışırken; Mars gece haritalarında yıkıcı öfke yerine stratejik cesaret ve dayanıklılık üretir."
        }
      ],
      "en": [
        {
          "heading": "Horoskopos and the Eastern Horizon (ASC – DSC Axis)",
          "body": "In ancient Greek, the word 'Horoskopos' (hour-marker) originally referred not to the whole chart, but specifically to the degree of the zodiac rising on the eastern horizon (ASC). The eastern horizon is the threshold where stars and planets rise into visible manifestation; thus the body, breath, primary vitality, and temperament are signified by the Ascendant. Directly opposite lies the Western horizon (DSC), where light sets and the self meets the 'other' in partnership and reflection."
        },
        {
          "heading": "The Meridian Axis: Midheaven (MC) and Imum Coeli (IC)",
          "body": "After rising in the east, a planet reaches its highest culmination at the southern meridian (in the Northern Hemisphere), called the MC (Medium Coeli). The MC signifies one's most visible standing in the world, vocation, public reputation, and actions. Opposite it lies the northern meridian (IC / Imum Coeli), the midnight nadir representing ancestry, home, land, privacy, and the unseen roots of life."
        },
        {
          "heading": "Diurnal and Nocturnal Charts: The Doctrine of Sect (Hairesis)",
          "body": "If the Sun is above the horizon line (ASC–DSC), the chart is Diurnal (Day); if below, it is Nocturnal (Night). The leader of the diurnal sect is the Sun, supported by Jupiter and Saturn; the leader of the nocturnal sect is the Moon, supported by Venus and Mars. Saturn functions more constructively andtemperately in a day chart, whereas Mars channels strategic courage and endurance far more harmoniously in a night chart."
        }
      ],
      "sv": [
        {
          "heading": "Horoskopos och den östra horisonten (ASC – DSC-axeln)",
          "body": "På antik grekiska syftade ordet 'Horoskopos' (timmarkör) ursprungligen specifikt på den zodiakgrad som steg över den östra horisonten (ASC). Den östra horisonten är tröskeln där stjärnor och planeter föds in i synlig manifestation; därför representerar Ascendenten kroppen, livskraften och det primära temperamentet. Mittemot ligger den västra horisonten (DSC), där jaget möter den andre."
        },
        {
          "heading": "Meridianaxeln: Medium Coeli (MC) och Imum Coeli (IC)",
          "body": "Efter att ha stigit i öster når en planet sin högsta kulmination vid meridianen, kallad MC (Medium Coeli). MC visar människans mest synliga plats i samhället, kall och offentliga handlingar. Mittemot ligger IC (Imum Coeli), midnattspunkten som bär ursprung, hem, jord och livets osynliga rötter."
        },
        {
          "heading": "Dag- och nattkarta: Läran om sekt (Hairesis)",
          "body": "Om solen står ovanför horisontlinjen är kartan diurn (dagkarta); om den står under är den nokturn (nattkarta). Dagsektens ledare är Solen med Jupiter och Saturnus; nattsektens ledare är Månen med Venus och Mars."
        }
      ]
    },
    "items": {
      "tr": [
        "Yükselen (Ascendant / ASC): Doğu ufkunda doğan burç derecesi; fiziksel beden, ilk nefes, mizaç ve dünyaya açılan kapı.",
        "Alçalan (Descendant / DSC): Batı ufkunda batan burç derecesi; eş, ortak, açık muhataplar ve karşıt denge.",
        "Tepe Noktası (Medium Coeli / MC): Göğün en yüksek meridyeni; meslek, toplumsal unvan, görünür eser ve yön.",
        "Dip Noktası (Imum Coeli / IC): Göğün en derin gece yarısı kökü; aile mirası, toprak, ev ve içsel temel.",
        "Sekt Işığı (Hairesis Luminary): Gündüz haritasında Güneş, gece haritasında Ay; yaşam enerjisinin birincil kaynağı.",
        "Harita Yöneticisi (Oikodespotes): Yükselen burcun yöneticisi olan gezegen; harita sahibinin gemisini yöneten dümenci."
      ],
      "en": [
        "Ascendant (ASC): The zodiac degree rising on the eastern horizon; physical body, first breath, temperament, and gateway to the world.",
        "Descendant (DSC): The zodiac degree setting on the western horizon; spouse, partner, open counterparts, and relational balance.",
        "Midheaven (Medium Coeli / MC): The highest meridian of the sky; vocation, public standing, visible work, and direction.",
        "Imum Coeli (IC): The deepest midnight root of the chart; family heritage, land, home, and inner foundation.",
        "Sect Light (Hairesis Luminary): The Sun by day, the Moon by night; the primary source of vital coherence in the chart.",
        "Chart Ruler (Oikodespotes): The domicile lord of the Ascendant sign; the helmsman steering the native's life direction."
      ],
      "sv": [
        "Ascendenten (ASC): Zodiakgraden som stiger i öster; fysisk kropp, första andetag, temperament och porten mot världen.",
        "Descendenten (DSC): Zodiakgraden som går ned i väster; partner, öppna motparter och relationell balans.",
        "Medium Coeli (MC): Himlens högsta meridian; yrke, offentlig ställning, synligt verk och riktning.",
        "Imum Coeli (IC): Kartans djupaste midnattsrot; familjearv, jord, hem och inre fundament.",
        "Sektljuset (Hairesis): Solen på dagen, Månen på natten; den primära källan till livskraft i kartan.",
        "Karthärskaren (Oikodespotes): Ascendenttecknets härskare; rorsmannen som styr livsriktningen."
      ]
    },
    "practice": {
      "tr": {
        "title": "Harita Omurgasını Okuma — İlk 3 Adım",
        "steps": [
          "Haritanızda yatay ufuk çizgisini (ASC–DSC) bulun ve Güneş'in (☉) bu çizginin üstünde mi yoksa altında mı olduğuna bakarak Gündüz mü Gece mi doğduğunuzu saptayın.",
          "Sol uçtaki Yükselen (ASC) burcunuzu ve o burcun klasik yöneticisi olan gezegeni bulun; bu gezegenin hangi evde ve burçta yerleştiğini not edin.",
          "Dört köşe evinizde (1, 4, 7 ve 10. evler) herhangi bir gezegen olup olmadığını kontrol edin; köşe evlerdeki gezegenler yaşamınızda en yüksek sesle konuşan arketiplerdir."
        ]
      },
      "en": {
        "title": "Reading the Chart Spine — First 3 Steps",
        "steps": [
          "Locate the horizontal horizon line (ASC–DSC) in your chart and check whether the Sun (☉) is above or below it to determine if you have a Day or Night chart.",
          "Identify your Ascendant (ASC) sign on the left edge and find its classical domicile ruler; note which house and sign that ruling planet occupies.",
          "Check whether any planets occupy the four angular houses (1st, 4th, 7th, and 10th); angular planets speak with the loudest and most immediate voice in your life."
        ]
      },
      "sv": {
        "title": "Att läsa kartans ryggrad — Första 3 stegen",
        "steps": [
          "Hitta den horisontella horisontlinjen (ASC–DSC) i din karta och se om Solen (☉) står ovanför eller under den för att avgöra om du har en dag- eller nattkarta.",
          "Identifiera ditt Ascendenttecken (ASC) till vänster och hitta dess klassiska härskare; notera vilket hus och tecken den planeten står i.",
          "Kontrollera om några planeter står i de fyra hörnhusen (1:a, 4:e, 7:e och 10:e); hörnplaneter talar med starkast röst i ditt liv."
        ]
      }
    },
    "closing": {
      "tr": "Ufuk çizgisi bedeni, meridyen çizgisi kaderi taşır; dört köşeyi görmeden gökyüzü okunmaz.",
      "en": "The horizon carries the body, the meridian carries destiny; without seeing the four angles, the sky cannot be read.",
      "sv": "Horisonten bär kroppen, meridianen bär ödet; utan att se de fyra hörnen kan himlen inte läsas."
    }
  },
  {
    "slug": "yedi-klasik-gezegen",
    "glyph": "♄",
    "image": "/astroloji/yedi-gezegen-keldani.jpg",
    "itemImages": [
      "/astroloji/planet-1-saturn.jpg",
      "/astroloji/planet-2-jupiter.jpg",
      "/astroloji/planet-3-mars.jpg",
      "/astroloji/planet-4-sun.jpg",
      "/astroloji/planet-5-venus.jpg",
      "/astroloji/planet-6-mercury.jpg",
      "/astroloji/planet-7-moon.jpg"
    ],
    "title": {
      "tr": "Yedi Klasik Gezegen, Keldani Sırası ve Temel Asaletler",
      "en": "The Seven Classical Planets, Chaldean Order and Essential Dignities",
      "sv": "De sju klassiska planeterna, kaldeisk ordning och essentiella värdigheter"
    },
    "summary": {
      "tr": "Satürn'den Ay'a yedi gezegen küresi, yörünge süreleri, yöneticilik ve yücelim asaletleri.",
      "en": "The seven planetary spheres from Saturn to the Moon, orbital periods, domicile and exaltation dignities.",
      "sv": "De sju planetsfärerna från Saturnus till Månen, omloppstider, domicil- och exaltationsvärdigheter."
    },
    "subtitle": {
      "tr": "Çıplak gözle görülen yedi gezgin yıldızın astronomik hızları ve asalet yasaları",
      "en": "Astronomical speeds and dignity laws of the seven naked-eye wandering stars",
      "sv": "Astronomiska hastigheter och värdighetslagar för de sju synliga vandrande stjärnorna"
    },
    "paragraphs": {
      "tr": [
        "Antik astronomi ve klasik astroloji, sabit yıldızlar küresinin altında hareket eden ve çıplak gözle görülebilen yedi gök cismini (Yunanca 'planētes' — gezginler) temel alır. Bu yedi gök cismi en yavaşından en hızlısına doğru Keldani Sırası (Chaldean Order) ile dizilir: Satürn (29.5 yıl), Jüpiter (11.86 yıl), Mars (687 gün), Güneş (365.25 gün), Venüs (225 gün), Merkür (88 gün) ve Ay (27.3 gün).",
        "Bu sıralama keyfi bir mistik kabule değil, doğrudan gözlemsel gök mekaniğine dayanır. Yörüngesi en geniş ve hareketi en ağır olan Satürn zamanın, sınırın, yaşlılığın ve kalıcı yapının taşıyıcısıdır; en iç küredeki Ay ise 27.3 günde tüm zodyakı dönerek bedenin, alışkanlıkların, gelgitlerin ve anlık değişimin ritmini tutar. Tam ortada, dördüncü kürede yer alan Güneş ise kalp ve merkezdir.",
        "Klasik astrolojide her gezegen zodyak kuşağındaki belirli burçlarla doğası gereği uyum (Temel Asalet / Essential Dignity) veya uyumsuzluk (Zayıflık / Debility) içindedir. Güneş Aslan'ı, Ay Yengeç'i yönetirken; diğer beş gezegenin her biri bir gündüz (eril) bir de gece (dişil) burcunun yöneticisidir (Domicile). Yöneticisi olduğu burçtaki bir gezegen kendi evinin sahibi gibidir; kendi kaynaklarına sahiptir ve sözünü engelsizce yerine getirir.",
        "Yöneticiliğin yanı sıra Babil yıldız kataloglarından miras kalan ikinci büyük asalet Yücelim (Exaltation / Hypsoma) dereceleridir. Bir gezegen yücelim burcunda onur konuğu gibidir; gücü en yüksek, en parlak ve en görünür seviyesine çıkar. Yönetici ve yücelim burçlarının tam karşısındaki (180° ötedeki) burçlar ise sırasıyla Zarar (Detriment) ve Düşüş (Fall) burçlarıdır."
      ],
      "en": [
        "Ancient astronomy and classical astrology are built upon the seven celestial bodies visible to the naked eye that move against the backdrop of the fixed stars (Greek 'planētes' — wanderers). Arranged from slowest to fastest, they form the Chaldean Order: Saturn (29.5 years), Jupiter (11.86 years), Mars (687 days), Sun (365.25 days), Venus (225 days), Mercury (88 days), and Moon (27.3 days).",
        "This sequence rests directly on observational celestial mechanics. Saturn, occupying the widest and slowest sphere, governs time, boundaries, endurance, and structure; the Moon, in the innermost sphere completing the zodiac in 27.3 days, governs the body, tides, habits, and rapid change. At the exact center, in the fourth sphere, stands the Sun as heart and king.",
        "In classical astrology, each planet possesses natural affinity (Essential Dignity) or tension (Debility) with specific signs of the zodiac. While the Sun rules Leo and the Moon rules Cancer, each of the other five planets rules both a diurnal (masculine) and a nocturnal (feminine) sign (Domicile). A planet in its own domicile acts like the master of its own house, possessing full resources to fulfill its significations.",
        "Alongside domicile, the second great dignity inherited from Babylonian star catalogues is Exaltation (Hypsoma). In its exaltation sign, a planet is like an honored royal guest whose power is elevated to its most brilliant peak. The signs directly opposite (180°) a planet's domicile and exaltation are its Detriment and Fall."
      ],
      "sv": [
        "Antik astronomi och klassisk astrologi bygger på de sju himlakroppar synliga för blotta ögat som rör sig mot fixstjärnornas bakgrund (grekiska 'planētes' — vandrare). Ordnade från långsammast till snabbast bildar de den kaldeiska ordningen: Saturnus (29,5 år), Jupiter (11,86 år), Mars (687 dagar), Solen (365,25 dagar), Venus (225 dagar), Merkurius (88 dagar) och Månen (27,3 dagar).",
        "Denna ordning vilar direkt på celest mekanik. Saturnus i den yttersta sfären styr tid, gränser och struktur; Månen i den innersta sfären styr kroppen, tidvattnet och rytmisk förändring. I mitten, i den fjärde sfären, står Solen som hjärta och centrum.",
        "I klassisk astrologi har varje planet naturlig samklang (essentiell värdighet) med specifika zodiaktecken. Solen härskar över Lejonet och Månen över Kräftan, medan de övriga fem planeterna härskar över varsitt dag- och nattecken (Domicil).",
        "Vid sidan av domicil är den andra stora värdigheten från babyloniska stjärnkataloger Exaltation (Hypsoma), där planetens kraft lyfts till sin högsta spets. Tecknen mittemot (180°) domicil och exaltation utgör Exil (Detriment) och Fall."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Keldani Sırası ve Yörünge Hiyerarşisi",
          "body": "♄ Satürn → ♃ Jüpiter → ♂ Mars → ☉ Güneş → ♀ Venüs → ☿ Merkür → ☽ Ay dizilimi, antik kozmolojinin omurgasıdır. Bir gezegenin zodyakı tamamlama süresi ne kadar uzunsa, haritada ve transitlerde bıraktığı iz o kadar yapısal ve uzun vadelidir. Satürn bir burçta yaklaşık 2.5 yıl, Jüpiter 1 yıl, Mars 1.5–2 ay, Güneş 1 ay, Ay ise yalnızca 2.5 gün kalır."
        },
        {
          "heading": "Temel Asaletler: Yöneticilik (Domicile) ve Yücelim (Exaltation)",
          "body": "Ptolemaios'un Tetrabiblos'ta açıkladığı Thema Mundi (Dünyanın Doğum Haritası) şemasında Yengeç ve Aslan tepede Işıklara (Ay ve Güneş) verilir; onlardan dışarı doğru sırasıyla Merkür (İkizler/Başak), Venüs (Boğa/Terazi), Mars (Koç/Akrep), Jüpiter (Yay/Balık) ve en uzakta Satürn (Oğlak/Kova) yerleşir. Yücelimler ise Güneş için Koç 19°, Ay için Boğa 3°, Jüpiter için Yengeç 15°, Merkür için Başak 15°, Satürn için Terazi 21°, Mars için Oğlak 28° ve Venüs için Balık 27° dereceleridir."
        },
        {
          "heading": "Gezegen Saatleri ve Haftanın Yedi Günü",
          "body": "Bugün kullandığımız 7 günlük hafta düzeni doğrudan Keldani sırası ile 24 saatlik gün hesabının matematiksel kesişiminden doğmuştur. Günün 24 saati Keldani sırasıyla gezegenlere dağıtıldığında (1. saat Satürn, 2. saat Jüpiter... 24. saat Mars), ertesi günün ilk saati (25. saat) Güneş'e denk gelir! Böylece Cumartesi (Saturn-day) gününden sonra Pazar (Sun-day), ardından Pazartesi (Moon-day), Salı (Mars/Tiw), Çarşamba (Mercury/Woden), Perşembe (Jupiter/Thor) ve Cuma (Venus/Freya) sıralaması ortaya çıkar."
        }
      ],
      "en": [
        {
          "heading": "The Chaldean Order and Orbital Hierarchy",
          "body": "The sequence ♄ Saturn → ♃ Jupiter → ♂ Mars → ☉ Sun → ♀ Venus → ☿ Mercury → ☽ Moon is the backbone of ancient cosmology. The longer a planet's orbital period, the more structural and enduring its imprint in natal charts and transits. Saturn spends roughly 2.5 years in a sign, Jupiter 1 year, Mars 1.5–2 months, the Sun 1 month, and the Moon only 2.5 days."
        },
        {
          "heading": "Essential Dignities: Domicile and Exaltation",
          "body": "In the Thema Mundi schema explained in Ptolemy's Tetrabiblos, Cancer and Leo are assigned to the Luminaries (Moon and Sun); radiating outward in Chaldean order come Mercury (Gemini/Virgo), Venus (Taurus/Libra), Mars (Aries/Scorpio), Jupiter (Sagittarius/Pisces), and furthest out Saturn (Capricorn/Aquarius). The exact exaltation degrees are Aries 19° for the Sun, Taurus 3° for the Moon, Cancer 15° for Jupiter, Virgo 15° for Mercury, Libra 21° for Saturn, Capricorn 28° for Mars, and Pisces 27° for Venus."
        },
        {
          "heading": "Planetary Hours and the Seven-Day Week",
          "body": "The modern seven-day week arises directly from assigning the 24 hours of each day to the seven planets in Chaldean order. Starting Day 1 Hour 1 with Saturn, Hour 24 falls to Mars, making Hour 25 (the first hour of the next day) belong to the Sun (Sunday), followed the next day by the Moon (Monday), Mars (Tuesday), Mercury (Wednesday), Jupiter (Thursday), and Venus (Friday)."
        }
      ],
      "sv": [
        {
          "heading": "Den kaldeiska ordningen och omloppshierarkin",
          "body": "Följden ♄ Saturnus → ♃ Jupiter → ♂ Mars → ☉ Solen → ♀ Venus → ☿ Merkurius → ☽ Månen är den antika kosmologins ryggrad. Ju längre omloppstid, desto mer strukturellt avtryck. Saturnus tillbringar cirka 2,5 år i ett tecken, Jupiter 1 år, Solen 1 månad och Månen 2,5 dagar."
        },
        {
          "heading": "Essentiella värdigheter: Domicil och Exaltation",
          "body": "I Thema Mundi tilldelas Kräftan och Lejonet Månen och Solen; utåt i kaldeisk ordning följer Merkurius (Tvillingarna/Jungfrun), Venus (Oxen/Vågen), Mars (Väduren/Skorpionen), Jupiter (Skytten/Fiskarna) och Saturnus (Stenbocken/Vattumannen)."
        },
        {
          "heading": "Planettimmar och sjudagarsveckan",
          "body": "Vår sjudagarsvecka uppstår direkt ur att fördela dygnets 24 timmar enligt den kaldeiska ordningen: efter Saturnus dag (lördag) infaller timme 25 på Solen (söndag), följt av Månen (måndag), Mars (tisdag), Merkurius (onsdag), Jupiter (torsdag) och Venus (fredag)."
        }
      ]
    },
    "items": {
      "tr": [
        "♄ Satürn (Phainōn · 29.46 Yıl): Soğuk ve kuru, Gündüz sekti. Yöneticilik: Oğlak ve Kova · Yücelim: Terazi (21°) · Zaman, sınır, sabır, mimari ve kalıcı yapı.",
        "♃ Jüpiter (Phaethōn · 11.86 Yıl): Sıcak ve nemli, Gündüz sekti. Yöneticilik: Yay ve Balık · Yücelim: Yengeç (15°) · Büyüme, adalet, bilgelik, bereket ve koruyucu ölçü.",
        "♂ Mars (Pyroeis · 687 Gün): Sıcak ve kuru, Gece sekti. Yöneticilik: Koç ve Akrep · Yücelim: Oğlak (28°) · İrade, keskinlik, savunma, eylem gücü ve ayırma yetisi.",
        "☉ Güneş (Hēlios · 365.25 Gün): Sıcak ve kuru, Gündüz sekti önderi. Yöneticilik: Aslan · Yücelim: Koç (19°) · Bilinç, ruh (pneuma), otorite, merkez ve görünürlük.",
        "♀ Venüs (Phōsphoros · 224.7 Gün): Soğuk ve nemli, Gece sekti. Yöneticilik: Boğa ve Terazi · Yücelim: Balık (27°) · Uyum, estetik, bağ kurma, değer ve uzlaşı.",
        "☿ Merkür (Stilbōn · 87.97 Gün): Doğu'da gündüz, Batı'da gece sekti. Yöneticilik: İkizler ve Başak · Yücelim: Başak (15°) · Dil, mantık, ticaret, yazı, analiz ve eşik bekçiliği.",
        "☽ Ay (Selēnē · 27.32 Gün): Soğuk ve nemli, Gece sekti önderi. Yöneticilik: Yengeç · Yücelim: Boğa (3°) · Beden (soma), hafıza, beslenme, alışkanlık ve gelgit ritmi."
      ],
      "en": [
        "♄ Saturn (Phainōn · 29.46 Years): Cold and dry, Diurnal sect. Domicile: Capricorn & Aquarius · Exaltation: Libra (21°) · Time, boundary, patience, architecture, and enduring structure.",
        "♃ Jupiter (Phaethōn · 11.86 Years): Hot and moist, Diurnal sect. Domicile: Sagittarius & Pisces · Exaltation: Cancer (15°) · Growth, justice, wisdom, abundance, and protective measure.",
        "♂ Mars (Pyroeis · 687 Days): Hot and dry, Nocturnal sect. Domicile: Aries & Scorpio · Exaltation: Capricorn (28°) · Will, sharpness, defense, executive drive, and severance.",
        "☉ Sun (Hēlios · 365.25 Days): Hot and dry, Diurnal sect leader. Domicile: Leo · Exaltation: Aries (19°) · Consciousness, spirit (pneuma), authority, center, and visibility.",
        "♀ Venus (Phōsphoros · 224.7 Days): Cold and moist, Nocturnal sect. Domicile: Taurus & Libra · Exaltation: Pisces (27°) · Harmony, aesthetics, bonding, value, and reconciliation.",
        "☿ Mercury (Stilbōn · 87.97 Days): Diurnal when morning star, Nocturnal when evening star. Domicile: Gemini & Virgo · Exaltation: Virgo (15°) · Language, logic, trade, writing, and analysis.",
        "☽ Moon (Selēnē · 27.32 Days): Cold and moist, Nocturnal sect leader. Domicile: Cancer · Exaltation: Taurus (3°) · Body (soma), memory, nurture, habit, and tidal rhythm."
      ],
      "sv": [
        "♄ Saturnus (Phainōn · 29,46 år): Kall och torr, dagsekt. Domicil: Stenbocken & Vattumannen · Exaltation: Vågen (21°) · Tid, gräns, tålamod och varaktig struktur.",
        "♃ Jupiter (Phaethōn · 11,86 år): Varm och fuktig, dagsekt. Domicil: Skytten & Fiskarna · Exaltation: Kräftan (15°) · Växt, rättvisa, visdom och överflöd.",
        "♂ Mars (Pyroeis · 687 dagar): Varm och torr, nattsekt. Domicil: Väduren & Skorpionen · Exaltation: Stenbocken (28°) · Vilja, skärpa, försvar och handlingskraft.",
        "☉ Solen (Hēlios · 365,25 dagar): Varm och torr, dagsektens ledare. Domicil: Lejonet · Exaltation: Väduren (19°) · Medvetande, ande (pneuma), auktoritet och centrum.",
        "♀ Venus (Phōsphoros · 224,7 dagar): Kall och fuktig, nattsekt. Domicil: Oxen & Vågen · Exaltation: Fiskarna (27°) · Harmoni, estetik, band, värde och försoning.",
        "☿ Merkurius (Stilbōn · 87,97 dagar): Gemensam sekt. Domicil: Tvillingarna & Jungfrun · Exaltation: Jungfrun (15°) · Språk, logik, skrift och analys.",
        "☽ Månen (Selēnē · 27,32 dagar): Kall och fuktig, nattsektens ledare. Domicil: Kräftan · Exaltation: Oxen (3°) · Kropp (soma), minne, näring och rytm."
      ]
    },
    "practice": {
      "tr": {
        "title": "Gezegen Asaletlerini Saptama — 3 Adım",
        "steps": [
          "Haritanızdaki 7 klasik gezegenin bulunduğu burçları listeleyin ve yukarıdaki şemadan hangilerinin kendi Yöneticilik (Domicile) veya Yücelim (Exaltation) burcunda olduğunu işaretleyin.",
          "Kendi burcunda veya yüceliminde olmayan bir gezegenin, içinde bulunduğu burcun yöneticisi (Dispositor) tarafından nasıl ağırlandığına bakın.",
          "Gezegenleri hız sırasına (Ay'dan Satürn'e) koyarak, anlık duygusal tepkileriniz (Ay) ile uzun vadeli yaşam sınavlarınız (Satürn) arasındaki farkı gözlemleyin."
        ]
      },
      "en": {
        "title": "Identifying Planetary Dignities — 3 Steps",
        "steps": [
          "List the zodiac signs occupied by the 7 classical planets in your chart and mark which ones stand in their own Domicile or Exaltation.",
          "For any planet not in its own dignity, identify the domicile ruler (Dispositor) of the sign it occupies to see who hosts it.",
          "Order your planets from fastest (Moon) to slowest (Saturn) to distinguish immediate emotional reflexes from long-term structural life lessons."
        ]
      },
      "sv": {
        "title": "Att identifiera planetvärdigheter — 3 steg",
        "steps": [
          "Lista zodiaktecknen för de 7 klassiska planeterna i din karta och markera vilka som står i eget Domicil eller Exaltation.",
          "För planeter utanför egen värdighet, hitta tecknets härskare (Dispositor) för att se vem som är dess värd.",
          "Ordna planeterna från snabbast (Månen) till långsammast (Saturnus) för att skilja omedelbara reaktioner från långsiktiga livsläxor."
        ]
      }
    },
    "closing": {
      "tr": "Yedi küre yedi farklı hızda döner; Ay günü dokur, Satürn yılları mühürler.",
      "en": "Seven spheres turn at seven speeds; the Moon weaves the day, Saturn seals the years.",
      "sv": "Sju sfärer vrider sig i sju hastigheter; Månen väver dagen, Saturnus förseglar åren."
    }
  },
  {
    "slug": "on-iki-burc-ve-nitelikler",
    "glyph": "♈",
    "image": "/astroloji/on-iki-burc-matris.jpg",
    "itemImages": [
      "/astroloji/sign-01-aries.jpg",
      "/astroloji/sign-02-taurus.jpg",
      "/astroloji/sign-03-gemini.jpg",
      "/astroloji/sign-04-cancer.jpg",
      "/astroloji/sign-05-leo.jpg",
      "/astroloji/sign-06-virgo.jpg",
      "/astroloji/sign-07-libra.jpg",
      "/astroloji/sign-08-scorpio.jpg",
      "/astroloji/sign-09-sagittarius.jpg",
      "/astroloji/sign-10-capricorn.jpg",
      "/astroloji/sign-11-aquarius.jpg",
      "/astroloji/sign-12-pisces.jpg"
    ],
    "title": {
      "tr": "On İki Burç: Dört Element ve Üç Mevsim Niteliği",
      "en": "The Twelve Signs: Four Elements and Three Seasonal Modalities",
      "sv": "De tolv tecknen: Fyra element och tre årstidskvaliteter"
    },
    "summary": {
      "tr": "360 derecelik ekliptik çemberinin 12 eşit dilimi; Ateş, Toprak, Hava, Su ve Öncü, Sabit, Değişken matrisi.",
      "en": "The 12 equal 30-degree sectors of the 360-degree ecliptic; the Fire, Earth, Air, Water and Cardinal, Fixed, Mutable matrix.",
      "sv": "De 12 lika 30-graderssektorerna av 360-graders ekliptikan; matrisen av Eld, Jord, Luft, Vatten samt Kardinal, Fast, Föränderlig."
    },
    "subtitle": {
      "tr": "Dört elementin üç mevsim evresiyle çarpımından doğan kusursuz 12'li gök geometrisi",
      "en": "The twelvefold celestial geometry born from multiplying four elements by three seasonal phases",
      "sv": "Den tolvfaldiga himmelsgeometrin född ur fyra element multiplicerade med tre årstidsfaser"
    },
    "paragraphs": {
      "tr": [
        "MÖ 5. yüzyılda Babil astronomları, Güneş'in yıl boyunca izlediği 360 derecelik ekliptik çemberini her biri tam 30 derece olan 12 eşit boylam dilimine böldüler. Bu nedenle astrolojideki burçlar (zōidia) gökyüzünde büyüklükleri birbirinden farklı olan takımyıldızların kendisi değil, İlkbahar Ekinoksu (0° Koç) noktasından başlayan 30'ar derecelik matematiksel mevsim dilimleridir.",
        "On iki burcun her biri benzersiz kimliğini iki temel eksenin kesişiminden alır: Dört Element (Ateş, Toprak, Hava, Su) ve Üç Mevsim Niteliği (Öncü / Kardinal, Sabit / Fixed ve Değişken / Mutable). 4 element ile 3 niteliğin çarpımı (4 × 3 = 12), hiçbir iki burcun aynı element ve nitelik kombinasyonuna sahip olmadığı kusursuz bir matris üretir.",
        "Empedokles ve Aristoteles fiziğine dayanan Dört Element, sıcaklık ve nem nitelikleriyle tanımlanır: Ateş (Koç, Aslan, Yay) sıcak ve kurudur — yükselen enerji, irade ve ışıktır. Toprak (Boğa, Başak, Oğlak) soğuk ve kurudur — somut form, ağırlık ve kalıcılıktır. Hava (İkizler, Terazi, Kova) sıcak ve nemlidir — zihin, ilişki, dolaşım ve dildir. Su (Yengeç, Akrep, Balık) soğuk ve nemlidir — hafıza, duygu derinliği ve kaynaşmadır.",
        "Üç Nitelik ise her mevsimin kendi içindeki üç aylık akışını anlatır: Öncü (Kardinal) burçlar (Koç, Yengeç, Terazi, Oğlak) ekinoks ve gündönümü noktalarında mevsimi başlatır; Sabit burçlar (Boğa, Aslan, Akrep, Kova) mevsimin tam ortasında enerjiyi kökleştirir ve korur; Değişken (Çift Bedenli) burçlar (İkizler, Başak, Yay, Balık) ise bir mevsimden diğerine geçiş köprüsünü kurar."
      ],
      "en": [
        "In the 5th century BCE, Babylonian astronomers divided the 360-degree ecliptic circle traced by the Sun into 12 equal sectors of exactly 30 degrees of celestial longitude each. Thus the signs of the zodiac (zōidia) are not the irregularly sized constellations themselves, but mathematical 30-degree seasonal segments measured from the Vernal Equinox (0° Aries).",
        "Each of the twelve signs derives its unique signature from the intersection of two axes: the Four Elements (Fire, Earth, Air, Water) and the Three Seasonal Modalities (Cardinal, Fixed, Mutable). Multiplying 4 elements by 3 modalities (4 × 3 = 12) produces a complete matrix in which no two signs share the same element-modality pair.",
        "Rooted in Empedoclean and Aristotelian natural philosophy, the Four Elements are defined by combinations of heat and moisture: Fire (Aries, Leo, Sagittarius) is hot and dry — radiant energy, will, and light. Earth (Taurus, Virgo, Capricorn) is cold and dry — tangible form, weight, and endurance. Air (Gemini, Libra, Aquarius) is hot and moist — mind, relation, circulation, and speech. Water (Cancer, Scorpio, Pisces) is cold and moist — memory, emotional depth, and cohesion.",
        "The Three Modalities describe the three-month arc of each season: Cardinal signs (Aries, Cancer, Libra, Capricorn) initiate the seasons at the equinoxes and solstices; Fixed signs (Taurus, Leo, Scorpio, Aquarius) stabilize and concentrate the middle of each season; Mutable (Double-Bodied) signs (Gemini, Virgo, Sagittarius, Pisces) bridge the transition from one season to the next."
      ],
      "sv": [
        "Under 400-talet f.Kr. delade babyloniska astronomer in den 360-gradiga ekliptikan i 12 lika sektorer om exakt 30 grader vardera. Zodiaktecknen är därför inte de oregelbundna stjärnbilderna i sig, utan matematiska 30-graderssegment räknade från vårdagjämningen (0° Väduren).",
        "Varje tecken får sin unika karaktär genom skärningspunkten mellan två axlar: de fyra elementen (Eld, Jord, Luft, Vatten) och de tre årstidskvaliteterna (Kardinal, Fast, Föränderlig). 4 element × 3 kvaliteter = 12 unika kombinationer.",
        "De fyra elementen definieras av värme och fukt: Eld (Väduren, Lejonet, Skytten) är varm och torr; Jord (Oxen, Jungfrun, Stenbocken) är kall och torr; Luft (Tvillingarna, Vågen, Vattumannen) är varm och fuktig; Vatten (Kräftan, Skorpionen, Fiskarna) är kall och fuktig.",
        "De tre kvaliteterna beskriver varje årstids tre faser: Kardinala tecken inleder årstiden vid dagjämningar och solstånd; Fasta tecken förankrar årstidens mitt; Föränderliga (dubbelkroppade) tecken bygger övergången till nästa årstid."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Dört Element Üçlüleri (Triplicities) ve Doğal Uyum",
          "body": "Aynı elementi paylaşan üç burç zodyak çemberinde birbirine tam 120 derecelik (Üçgen / Trigon) açıyla yerleşir. Ateş üçlüsü (Koç–Aslan–Yay) ilham ve eylemle, Toprak üçlüsü (Boğa–Başak–Oğlak) madde ve üretimle, Hava üçlüsü (İkizler–Terazi–Kova) fikir ve iletişimle, Su üçlüsü (Yengeç–Akrep–Balık) sezgi ve duygusal bağla çalışır. Ayrıca Ateş ile Hava (eril/gündüz), Toprak ile Su (dişil/gece) birbirini doğal olarak besler."
        },
        {
          "heading": "Üç Mevsim Niteliği: Öncü (Kardinal), Sabit ve Değişken",
          "body": "Aynı niteliği paylaşan dört burç birbirine 90° (Kare) ve 180° (Karşıt) açılarla bağlanarak dinamik bir haç oluşturur. Öncü Haç (Koç, Yengeç, Terazi, Oğlak) kriz anında inisiyatif alır ve yeni döngü başlatır. Sabit Haç (Boğa, Aslan, Akrep, Kova) başladığı işi bırakmaz, direnç ve sadakat gösterir. Değişken Haç (İkizler, Başak, Yay, Balık) ise esnektir, bilgiyi dağıtır, sentezler ve değişime uyum sağlar."
        },
        {
          "heading": "Burçların Yöneticileri: Burç Neden Tek Başına Konuşmaz?",
          "body": "Klasik astrolojide bir burç 'nasıl' (hangi üslupla ve hangi element doğasıyla) hareket edildiğini gösterir; fakat eylemi yapan özne her zaman gezegendir. Bu yüzden bir burcu anlamak, onun yöneticisi ve yücelim sahibi olan gezegenleri anlamaktır. Örneğin Koç burcunun atılganlığı Mars'ın keskinliği ve Güneş'in (19° yücelim) parlayan iradesinden; Boğa burcunun huzuru ise Venüs'ün uyumu ve Ay'ın (3° yücelim) besleyici dinginliğinden gelir."
        }
      ],
      "en": [
        {
          "heading": "The Four Elemental Triplicities and Natural Affinity",
          "body": "The three signs sharing the same element stand exactly 120 degrees apart (in Trine) around the zodiac wheel. The Fire triplicity (Aries–Leo–Sagittarius) operates through inspiration and action; Earth (Taurus–Virgo–Capricorn) through matter and craft; Air (Gemini–Libra–Aquarius) through thought and discourse; Water (Cancer–Scorpio–Pisces) through intuition and feeling. Fire and Air (diurnal/masculine) naturally support each other, as do Earth and Water (nocturnal/feminine)."
        },
        {
          "heading": "The Three Modalities: Cardinal, Fixed, and Mutable Crosses",
          "body": "The four signs sharing a modality stand at 90° (Square) and 180° (Opposition) to one another, forming a dynamic cross. The Cardinal Cross (Aries, Cancer, Libra, Capricorn) initiates action and pivots at turning points. The Fixed Cross (Taurus, Leo, Scorpio, Aquarius) endures, consolidates, and holds the center. The Mutable Cross (Gemini, Virgo, Sagittarius, Pisces) adapts, distributes knowledge, and mediates transitions."
        },
        {
          "heading": "Rulers of the Signs: Why a Sign Never Speaks Alone",
          "body": "In classical astrology, a sign describes 'how' (in what elemental style and seasonal mode) an energy operates, whereas the planet is always the active agent. Understanding a sign means understanding its domicile and exaltation lords: Aries' boldness flows from Mars' edge and the Sun's exaltation (19°), while Taurus' steadiness flows from Venus' harmony and the Moon's exaltation (3°)."
        }
      ],
      "sv": [
        {
          "heading": "De fyra elementtripliciteterna och naturlig samklang",
          "body": "De tre tecken som delar samma element står exakt 120 grader från varandra (i trigon) i zodiaken. Eldtripliciteten verkar genom vilja och handling, Jord genom form och hantverk, Luft genom tanke och samtal, och Vatten genom intuition och känsla."
        },
        {
          "heading": "De tre kvaliteterna: Kardinala, Fasta och Föränderliga kors",
          "body": "De fyra tecken som delar en kvalitet står i 90° (kvadratur) och 180° (opposition) till varandra. Det kardinala korset tar initiativ, det fasta korset bevarar och uthärdar, och det föränderliga korset anpassar och förmedlar övergångar."
        },
        {
          "heading": "Tecknens härskare: Varför ett tecken aldrig talar ensamt",
          "body": "I klassisk astrologi beskriver tecknet 'hur' en kraft verkar, medan planeten alltid är den handlande aktören. Att förstå ett tecken är att förstå dess domicil- och exaltationshärskare."
        }
      ]
    },
    "items": {
      "tr": [
        "♈ Koç (Aries · 0°–30°): Ateş ve Öncü (İlkbahar Ekinoksu). Yönetici: ♂ Mars · Yücelim: ☉ Güneş (19°) · İlk kıvılcım, cesaret, başlangıç ve doğrudan eylem.",
        "♉ Boğa (Taurus · 30°–60°): Toprak ve Sabit. Yönetici: ♀ Venüs · Yücelim: ☽ Ay (3°) · Toprağın köklenmesi, somut değer, duyusal dinginlik ve kalıcılık.",
        "♊ İkizler (Gemini · 60°–90°): Hava ve Değişken. Yönetici: ☿ Merkür · Çift bedenli burç; merak, dil, bağlantı kurma, zihinsel çeviklik ve diyalog.",
        "♋ Yengeç (Cancer · 90°–120°): Su ve Öncü (Yaz Gündönümü). Yönetici: ☽ Ay · Yücelim: ♃ Jüpiter (15°) · Koruyucu kabuk, hafıza, rahim, aidiyet ve besleme.",
        "♌ Aslan (Leo · 120°–150°): Ateş ve Sabit. Yönetici: ☉ Güneş · Sabit ateşin merkezi; kalp, yaratıcı özgüven, sadakat, cömertlik ve egemen duruş.",
        "♍ Başak (Virgo · 150°–180°): Toprak ve Değişken. Yönetici ve Yücelim: ☿ Merkür (15°) · Hasat ayrımı, ustalık, analiz, arındırma ve pratik düzen.",
        "♎ Terazi (Libra · 180°–210°): Hava ve Öncü (Sonbahar Ekinoksu). Yönetici: ♀ Venüs · Yücelim: ♄ Satürn (21°) · Terazi kefesi, adalet, ölçü, diplomasi ve sözleşme.",
        "♏ Akrep (Scorpio · 210°–240°): Su ve Sabit. Yönetici: ♂ Mars · Derin ve durgun su; kriz yönetimi, stratejik direnç, gizem ve köklü dönüşüm.",
        "♐ Yay (Sagittarius · 240°–270°): Ateş ve Değişken. Yönetici: ♃ Jüpiter · Okçunun ufuk hedefi; felsefe, anlam arayışı, uzak yollar ve etik vizyon.",
        "♑ Oğlak (Capricornus · 270°–300°): Toprak ve Öncü (Kış Gündönümü). Yönetici: ♄ Satürn · Yücelim: ♂ Mars (28°) · Dağ zirvesi, disiplin, devlet/kurum inşası ve ustalık.",
        "♒ Kova (Aquarius · 300°–330°): Hava ve Sabit. Yönetici: ♄ Satürn · Sabit zihinsel ilkeler, kolektif sistemler, entelektüel bağımsızlık ve soğukkanlı vizyon.",
        "♓ Balık (Pisces · 330°–360°): Su ve Değişken. Yönetici: ♃ Jüpiter · Yücelim: ♀ Venüs (27°) · Okyanusa karışan nehirler; şefkat, hayal gücü, çözülme ve bütünlük."
      ],
      "en": [
        "♈ Aries (0°–30°): Fire & Cardinal (Vernal Equinox). Ruler: ♂ Mars · Exaltation: ☉ Sun (19°) · First spark, courage, initiation, and direct action.",
        "♉ Taurus (30°–60°): Earth & Fixed. Ruler: ♀ Venus · Exaltation: ☽ Moon (3°) · Rooting in earth, tangible value, sensory calm, and permanence.",
        "♊ Gemini (60°–90°): Air & Mutable. Ruler: ☿ Mercury · Double-bodied sign; curiosity, language, connection, mental agility, and dialogue.",
        "♋ Cancer (90°–120°): Water & Cardinal (Summer Solstice). Ruler: ☽ Moon · Exaltation: ♃ Jupiter (15°) · Protective shell, memory, belonging, and nurture.",
        "♌ Leo (120°–150°): Fire & Fixed. Ruler: ☉ Sun · Center of fixed fire; heart, creative confidence, loyalty, generosity, and sovereign presence.",
        "♍ Virgo (150°–180°): Earth & Mutable. Ruler & Exaltation: ☿ Mercury (15°) · Harvest discernment, craft, analysis, refinement, and practical order.",
        "♎ Libra (180°–210°): Air & Cardinal (Autumnal Equinox). Ruler: ♀ Venus · Exaltation: ♄ Saturn (21°) · The scales, justice, measure, diplomacy, and covenant.",
        "♏ Scorpio (210°–240°): Water & Fixed. Ruler: ♂ Mars · Deep still water; crisis mastery, strategic endurance, depth, and radical transformation.",
        "♐ Sagittarius (240°–270°): Fire & Mutable. Ruler: ♃ Jupiter · The archer's horizon; philosophy, search for meaning, distant journeys, and ethical vision.",
        "♑ Capricorn (270°–300°): Earth & Cardinal (Winter Solstice). Ruler: ♄ Saturn · Exaltation: ♂ Mars (28°) · Mountain summit, discipline, structural mastery, and endurance.",
        "♒ Aquarius (300°–330°): Air & Fixed. Ruler: ♄ Saturn · Fixed intellectual principles, collective systems, independence, and composed vision.",
        "♓ Pisces (330°–360°): Water & Mutable. Ruler: ♃ Jupiter · Exaltation: ♀ Venus (27°) · Rivers merging into the ocean; compassion, imagination, and wholeness."
      ],
      "sv": [
        "♈ Väduren (0°–30°): Eld & Kardinal (Vårdagjämning). Härskare: ♂ Mars · Exaltation: ☉ Solen (19°) · Första gnistan, mod, initiativ och direkt handling.",
        "♉ Oxen (30°–60°): Jord & Fast. Härskare: ♀ Venus · Exaltation: ☽ Månen (3°) · Förankring i jorden, påtagligt värde, sinnesro och varaktighet.",
        "♊ Tvillingarna (60°–90°): Luft & Föränderlig. Härskare: ☿ Merkurius · Dubbelkroppat tecken; nyfikenhet, språk, förbindelse och dialog.",
        "♋ Kräftan (90°–120°): Vatten & Kardinal (Sommarsolstånd). Härskare: ☽ Månen · Exaltation: ♃ Jupiter (15°) · Skyddande skal, minne, tillhörighet och omsorg.",
        "♌ Lejonet (120°–150°): Eld & Fast. Härskare: ☉ Solen · Fast elds centrum; hjärta, skapande självförtroende, lojalitet och suverän närvaro.",
        "♍ Jungfrun (150°–180°): Jord & Föränderlig. Härskare & Exaltation: ☿ Merkurius (15°) · Skördens urskiljning, hantverk, analys och praktisk ordning.",
        "♎ Vågen (180°–210°): Luft & Kardinal (Höstdagjämning). Härskare: ♀ Venus · Exaltation: ♄ Saturnus (21°) · Vågskålarna, rättvisa, mått och förbund.",
        "♏ Skorpionen (210°–240°): Vatten & Fast. Härskare: ♂ Mars · Djupt stilla vatten; strategisk uthållighet, djup och genomgripande förvandling.",
        "♐ Skytten (240°–270°): Eld & Föränderlig. Härskare: ♃ Jupiter · Bågskyttens horisont; filosofi, meningssökande, långa resor och etisk blick.",
        "♑ Stenbocken (270°–300°): Jord & Kardinal (Vintersolstånd). Härskare: ♄ Saturnus · Exaltation: ♂ Mars (28°) · Bergstoppen, disciplin och strukturellt mästerskap.",
        "♒ Vattumannen (300°–330°): Luft & Fast. Härskare: ♄ Saturnus · Fasta intellektuella principer, kollektiva system och oberoende blick.",
        "♓ Fiskarna (330°–360°): Vatten & Föränderlig. Härskare: ♃ Jupiter · Exaltation: ♀ Venus (27°) · Floder som möter havet; medkänsla, fantasi och helhet."
      ]
    },
    "practice": {
      "tr": {
        "title": "Element ve Nitelik Dengesini Hesaplama — 3 Adım",
        "steps": [
          "Haritanızdaki Yükselen (ASC) ve 7 klasik gezegenin bulunduğu burçları Ateş, Toprak, Hava ve Su olarak dört sütuna ayırın.",
          "Aynı noktaları Öncü (Kardinal), Sabit ve Değişken olarak üç satırda toplayarak hangi element ve niteliğin baskın, hangisinin eksik olduğunu görün.",
          "Eksik olan elementi günlük yaşam pratiklerinizle (Toprak eksikse somut zanaat ve doğa yürüyüşü, Hava eksikse yazma ve okuma disiplini) bilinçli olarak destekleyin."
        ]
      },
      "en": {
        "title": "Calculating Elemental and Modal Balance — 3 Steps",
        "steps": [
          "Sort the signs of your Ascendant (ASC) and 7 classical planets into four columns: Fire, Earth, Air, and Water.",
          "Group those same placements into three rows — Cardinal, Fixed, and Mutable — to see which element and modality dominate or are lacking.",
          "Consciously support any missing element through daily practice (tangible craft and grounding for missing Earth; writing and study for missing Air)."
        ]
      },
      "sv": {
        "title": "Att beräkna element- och kvalitetsbalans — 3 steg",
        "steps": [
          "Sortera tecknen för din Ascendent (ASC) och de 7 klassiska planeterna i fyra kolumner: Eld, Jord, Luft och Vatten.",
          "Gruppera samma placeringar i tre rader — Kardinal, Fast och Föränderlig — för att se vilket element och vilken kvalitet som dominerar eller saknas.",
          "Stöd medvetet ett saknat element genom daglig praktik (konkret hantverk för saknad Jord; skrivande och studier för saknad Luft)."
        ]
      }
    },
    "closing": {
      "tr": "Dört element dokuyu, üç nitelik hareketi verir; on iki burç yılın nefes çemberidir.",
      "en": "Four elements give the fabric, three modalities give the motion; the twelve signs are the breathing circle of the year.",
      "sv": "Fyra element ger väven, tre kvaliteter ger rörelsen; de tolv tecknen är årets andningscirkel."
    }
  },
  {
    "slug": "on-iki-ev-ve-alanlar",
    "glyph": "⌂",
    "image": "/astroloji/on-iki-ev-topoi.jpg",
    "title": {
      "tr": "On İki Ev (Topoi) ve Gezegenlerin Sevindiği Evler",
      "en": "The Twelve Houses (Topoi) and the Planetary Joys",
      "sv": "De tolv husen (Topoi) och planeternas glädjeplatser"
    },
    "summary": {
      "tr": "Yaşamın 12 somut alanı; Köşe, Halef ve Zail evler ile 7 gezegenin sevindiği (Chara) evler.",
      "en": "The 12 concrete arenas of life; Angular, Succedent, and Cadent houses, plus the traditional Planetary Joys (Chara).",
      "sv": "Livets 12 konkreta områden; Hörn-, Efterföljande och Fallande hus samt planeternas traditionella glädjeplatser (Chara)."
    },
    "subtitle": {
      "tr": "Gökyüzü arketiplerinin yeryüzündeki hangi yaşam odasında tezahür ettiğini gösteren 12 Topos",
      "en": "The 12 Topoi showing in which concrete room of earthly life celestial archetypes manifest",
      "sv": "De 12 Topoi som visar i vilket konkret livsrum de himmelska arketyperna framträder"
    },
    "paragraphs": {
      "tr": [
        "Astrolojiye yeni başlayanların en sık karıştırdığı konu Burçlar ile Evler (Yunanca 'Topoi' — yerler/mekânlar) arasındaki farktır. Burçlar ekliptik çemberinin Güneş'in yıllık hareketine bağlı 12 göksel dilimidir; Evler ise Dünya'nın kendi ekseni etrafındaki 24 saatlik dönüşüyle oluşan, ufuk ve meridyen eksenlerine göre bölünmüş 12 yeryüzü sahnesidir. Kısaca: Gezegen 'ne' çalıştığını, Burç 'nasıl' çalıştığını, Ev ise 'nerede / hayatın hangi alanında' çalıştığını söyler.",
        "Klasik astrolojide en köklü ev sistemi Tüm Burç Ev Sistemi'dir (Whole Sign Houses): Doğu ufkunda yükselen burcun tamamı (0°'den 30°'ye kadar) 1. Ev kabul edilir; onu takip eden burç 2. Ev, bir sonraki 3. Ev olarak 12 burç 12 eve tam oturur. Daha sonraki yüzyıllarda kadran bazlı sistemler (Porphyry, Alcabitius, Regiomontanus, Placidus) geliştirilmiş olsa da evlerin anlam hiyerarşisi değişmemiştir.",
        "On iki ev güç ve görünürlük bakımından üç gruba ayrılır: Köşe Evler (Angular: 1, 4, 7, 10) haritanın dört ana direğidir ve burada bulunan gezegenler en yüksek etki gücüne sahiptir. Köşeleri takip eden Halef Evler (Succedent: 2, 5, 8, 11) istikrar, kaynak ve birikim üretir. Köşelerden uzaklaşan Zail Evler (Cadent: 3, 6, 9, 12) ise geçiş, hazırlık, öğrenme, hizmet ve içe çekilme alanlarıdır.",
        "Evlerin anlamlarının nereden geldiğini açıklayan en kadim öğreti ise 'Gezegenlerin Sevindiği Evler' (Planetary Joys / Chara) şemasıdır: Merkür 1. Evde (zihin ve dil), Ay 3. Evde (yolculuk ve yakın çevre), Venüs 5. Evde (sevinç ve yaratım), Mars 6. Evde (emek ve mücadele), Güneş 9. Evde (bilgelik ve uzak ufuk), Jüpiter 11. Evde (umut ve dostluk), Satürn ise 12. Evde (inziva ve sınır ötesi) sevinir."
      ],
      "en": [
        "The most common confusion for beginners in astrology is the difference between Signs and Houses (Greek 'Topoi' — places). Signs are the 12 celestial divisions of the ecliptic based on Earth's annual orbit around the Sun; Houses are the 12 earthly sectors formed by Earth's 24-hour rotation on its axis relative to the local horizon and meridian. Simply put: the Planet shows 'what' acts, the Sign shows 'how' it acts, and the House shows 'where' in life it acts.",
        "In classical astrology, the oldest foundational house system is Whole Sign Houses: the entire sign rising on the eastern horizon (from 0° to 30°) becomes the 1st House, the next sign in zodiacal order becomes the 2nd House, and so on around the wheel. Quadrant systems (Porphyry, Alcabitius, Regiomontanus, Placidus) were developed later, yet the hierarchy of house meanings remains rooted in this geometry.",
        "The twelve houses are classified into three tiers of strength: Angular Houses (1, 4, 7, 10) are the four pillars of the chart where planets act with maximum immediacy and power. Succedent Houses (2, 5, 8, 11) follow the angles, governing stability, resources, and consolidation. Cadent Houses (3, 6, 9, 12) fall away from the angles, governing transition, study, service, and retreat.",
        "The oldest doctrine explaining why the houses mean what they do is the scheme of the Planetary Joys (Chara): Mercury rejoices in the 1st House (mind and speech), the Moon in the 3rd (short journeys and kin), Venus in the 5th (pleasure and creation), Mars in the 6th (toil and combat), the Sun in the 9th (wisdom and distant horizons), Jupiter in the 11th (hopes and allies), and Saturn in the 12th (solitude and unseen trials)."
      ],
      "sv": [
        "Den vanligaste förväxlingen för nybörjare i astrologi är skillnaden mellan Tecken och Hus (grekiska 'Topoi' — platser). Tecknen är ekliptikans 12 himmelska avsnitt baserade på jordens årliga omlopp; Husen är de 12 jordiska sektorer som bildas av jordens 24-timmarsrotation i förhållande till horisont och meridian. Kort sagt: Planeten visar 'vad' som verkar, Tecknet 'hur' det verkar, och Huset 'var' i livet det verkar.",
        "I klassisk astrologi är det äldsta hussystemet Helteckenshus (Whole Sign Houses): hela det tecken som stiger i öster utgör det 1:a huset, nästa tecken det 2:a huset och så vidare.",
        "De tolv husen delas in i tre styrkenivåer: Hörnhus (Angular: 1, 4, 7, 10) är kartans fyra pelare med starkast kraft; Efterföljande hus (Succedent: 2, 5, 8, 11) styr resurser och stabilitet; Fallande hus (Cadent: 3, 6, 9, 12) styr övergång, lärande och tillbakadragande.",
        "Den äldsta läran om husens betydelser är Planeternas Glädjeplatser (Chara): Merkurius gläds i 1:a huset, Månen i 3:e, Venus i 5:e, Mars i 6:e, Solen i 9:e, Jupiter i 11:e och Saturnus i 12:e."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Köşe (Angular), Halef (Succedent) ve Zail (Cadent) Güç Sırası",
          "body": "1, 10, 7 ve 4. evler haritanın dört ana direğidir; bu evlerdeki gezegenler yaşamda doğrudan, hızlı ve görünür olaylar üretir. 2, 5, 8 ve 11. evler (Halef) köşe evlerin hemen arkasından gelerek maddi ve sosyal kaynakları sabitler. 3, 9, 6 ve 12. evler (Zail) ise enerjinin zihinsel veya ruhsal düzleme çekildiği yerlerdir; özellikle 3 ve 9 zihinsel/felsefi yolculuğu, 6 ve 12 ise bedensel/ruhsal sınavları ve hizmeti anlatır."
        },
        {
          "heading": "Gezegenlerin Sevindiği Evler (Chara): Gece ve Gündüz Yarımküreleri",
          "body": "Gezegen sevinçleri şemasında Gündüz gezegenleri (Güneş 9. ev, Jüpiter 11. ev, Satürn 12. ev) ufuk çizgisinin üstündeki gündüz yarımküresine; Gece gezegenleri (Ay 3. ev, Venüs 5. ev, Mars 6. ev) ufuk çizgisinin altındaki gece yarımküresine yerleşir. Her iki doğayı paylaşan Merkür ise tam doğu ufkundaki 1. Evde (Yükselen) durarak gece ile gündüz arasındaki dümenci olur."
        },
        {
          "heading": "Ev Yöneticiliği: Boş Bir Ev Nasıl Okunur?",
          "body": "Bir haritada 7 klasik gezegen ve 12 ev olduğu için, herkesin haritasında mutlaka en az 5 ev 'boş' (içinde gezegen olmayan) kalır. Boş bir ev o yaşam alanının önemsiz veya kapalı olduğu anlamına gelmez! Boş bir evi okumak için o evin başlangıç çizgisindeki (cusp) burcun yöneticisi olan gezegene bakılır: Örneğin 7. evinizde gezegen yoksa ama 7. eviniz Boğa burcuysa, ilişkilerinizin hikâyesini Venüs'ün bulunduğu ev ve burç anlatır."
        }
      ],
      "en": [
        {
          "heading": "Angular, Succedent, and Cadent Hierarchy of Strength",
          "body": "The 1st, 10th, 7th, and 4th houses are the four structural pillars of the chart; planets here produce direct, rapid, and visible manifestations. The 2nd, 5th, 8th, and 11th (Succedent) houses stabilize material and social resources. The 3rd, 9th, 6th, and 12th (Cadent) houses shift energy toward movement, study, service, or retreat."
        },
        {
          "heading": "The Planetary Joys (Chara): Diurnal and Nocturnal Hemispheres",
          "body": "In the ancient diagram of the Joys, the diurnal planets (Sun in the 9th, Jupiter in the 11th, Saturn in the 12th) occupy the upper daytime hemisphere above the horizon, while the nocturnal planets (Moon in the 3rd, Venus in the 5th, Mars in the 6th) occupy the lower nighttime hemisphere below the horizon. Mercury, sharing both sects, stands at the 1st House helm on the eastern horizon."
        },
        {
          "heading": "House Rulership: How to Read an Empty House",
          "body": "Because there are 7 classical planets and 12 houses, every birth chart contains at least 5 'empty' houses. An empty house never means that area of life is inactive! To read an empty house, locate the domicile ruler of the sign on that house cusp: if your 7th house is Taurus and holds no planets, the placement of Venus tells the story of your partnerships."
        }
      ],
      "sv": [
        {
          "heading": "Hörn-, Efterföljande och Fallande styrkehierarki",
          "body": "1:a, 10:e, 7:e och 4:e husen är kartans fyra pelare där planeter verkar med omedelbar och synlig kraft. 2:a, 5:e, 8:e och 11:e stabiliserar resurser, medan 3:e, 9:e, 6:e och 12:e styr rörelse, studier, tjänande och stillhet."
        },
        {
          "heading": "Planeternas Glädjeplatser (Chara): Dag- och natthalvklot",
          "body": "I Chara-schemat står dagplaneterna (Solen i 9:e, Jupiter i 11:e, Saturnus i 12:e) ovanför horisonten, medan nattplaneterna (Månen i 3:e, Venus i 5:e, Mars i 6:e) står under horisonten. Merkurius står vid rodret i 1:a huset."
        },
        {
          "heading": "Hushärskare: Hur man läser ett tomt hus",
          "body": "Eftersom det finns 7 klassiska planeter och 12 hus har varje karta minst 5 tomma hus. Ett tomt hus läses genom härskaren över det tecken som täcker huset."
        }
      ]
    },
    "items": {
      "tr": [
        "1. ve 7. Ev Ekseni (Ben ve Öteki): 1. Ev (Horoskopos · Merkür'ün sevinci) beden, karakter ve yaşama giriş kapısıdır; 7. Ev (Batı ufku) eş, ortak, sözleşmeler ve açık muhataplardır.",
        "4. ve 10. Ev Ekseni (Kök ve Zirve): 4. Ev (IC) aile, ata mirası, toprak, ev ve mahrem köktür; 10. Ev (MC) meslek, toplumsal itibar, otorite ve görünür eserdir.",
        "2. ve 8. Ev Ekseni (Öz Kaynak ve Paylaşılan Değer): 2. Ev kişinin kendi emeğiyle kazandığı para ve taşınır mülktür; 8. Ev ortak finans, borç/alacak, miras ve krizli dönüşümlerdir.",
        "5. ve 11. Ev Ekseni (Yaratım ve Topluluk): 5. Ev (Venüs'ün sevinci) çocuklar, neşe, sanat ve yaratıcı üretimdir; 11. Ev (Jüpiter'in sevinci) dostlar, ittifaklar, topluluklar ve gelecek umutlarıdır.",
        "3. ve 9. Ev Ekseni (Yakın Çevre ve Uzak Ufuk): 3. Ev (Ay'ın sevinci) kardeşler, komşular, günlük iletişim ve kısa yollardır; 9. Ev (Güneş'in sevinci) yüksek öğrenim, felsefe, hukuk ve uzak yolculuklardır.",
        "6. ve 12. Ev Ekseni (Emek ve Halvet): 6. Ev (Mars'ın sevinci) günlük çalışma disiplini, zanaat, sağlık ve hizmettir; 12. Ev (Satürn'ün sevinci) inziva, bilinçdışı, kayıplar ve görünmeyen sınavlardır."
      ],
      "en": [
        "1st & 7th House Axis (Self and Other): The 1st House (Joy of Mercury) is body, character, and vitality; the 7th House is spouse, partner, contracts, and open counterparts.",
        "4th & 10th House Axis (Root and Peak): The 4th House (IC) is family, ancestry, land, and private home; the 10th House (MC) is vocation, public standing, authority, and visible work.",
        "2nd & 8th House Axis (Personal and Shared Substance): The 2nd House is personal income and movable livelihood; the 8th House is shared finance, debt, inheritance, and deep thresholds.",
        "5th & 11th House Axis (Creation and Community): The 5th House (Joy of Venus) is children, joy, art, and creative pleasure; the 11th House (Joy of Jupiter) is friends, alliances, networks, and hopes.",
        "3rd & 9th House Axis (Near Environment and Far Horizon): The 3rd House (Joy of Moon) is siblings, neighbors, daily writing, and local travel; the 9th House (Joy of Sun) is higher learning, philosophy, and foreign journeys.",
        "6th & 12th House Axis (Toil and Solitude): The 6th House (Joy of Mars) is daily work, craft, health routines, and service; the 12th House (Joy of Saturn) is retreat, solitude, and unseen trials."
      ],
      "sv": [
        "1:a & 7:e husaxeln (Jag och Du): 1:a huset (Merkurius glädje) är kropp och karaktär; 7:e huset är partner, avtal och öppna motparter.",
        "4:e & 10:e husaxeln (Rot och Topp): 4:e huset (IC) är familj, jord och hem; 10:e huset (MC) är yrke, anseende och synligt verk.",
        "2:a & 8:e husaxeln (Egen och Delad resurs): 2:a huset är egen inkomst och ägodelar; 8:e huset är delad ekonomi, arv och djupa trösklar.",
        "5:e & 11:e husaxeln (Skapande och Gemenskap): 5:e huset (Venus glädje) är barn, konst och glädje; 11:e huset (Jupiters glädje) är vänner, allianser och hopp.",
        "3:e & 9:e husaxeln (Närmiljö och Fjärran horisont): 3:e huset (Månens glädje) är syskon, grannar och korta resor; 9:e huset (Solens glädje) är filosofi, högre studier och långa resor.",
        "6:e & 12:e husaxeln (Arbete och Stillhet): 6:e huset (Mars glädje) är dagligt arbete, hälsa och tjänande; 12:e huset (Saturnus glädje) är avskildhet och inre prövningar."
      ]
    },
    "practice": {
      "tr": {
        "title": "Evleri ve Yöneticilerini Haritada İzleme — 3 Adım",
        "steps": [
          "Yükselen burcunuzu 1. Ev kabul ederek (Tüm Burç Ev Sistemi ile) 12 burcu saat yönünün tersine 1'den 12'ye kadar evlere yerleştirin.",
          "Gezegenlerin yoğunlaştığı (Stelyum / kavuşum yaptığı) evi bulun; bu ev yaşam enerjinizin en büyük kısmının aktığı ana sahnedir.",
          "Meslek için 10. evinizin, ilişkiler için 7. evinizin, maddi kaynaklar için 2. evinizin burç yöneticisini bularak o gezegenin hangi evde durduğunu inceleyin."
        ]
      },
      "en": {
        "title": "Tracing Houses and Their Rulers — 3 Steps",
        "steps": [
          "Taking your Ascendant sign as the 1st House (Whole Sign system), number the 12 signs counter-clockwise from 1 to 12.",
          "Locate the house where the most planets gather (a Stellium); this is the primary arena where your life energy concentrates.",
          "Find the domicile ruler of your 10th house (vocation), 7th house (partnership), and 2nd house (livelihood), and observe which house each ruler occupies."
        ]
      },
      "sv": {
        "title": "Att spåra hus och deras härskare — 3 steg",
        "steps": [
          "Utgå från ditt Ascendenttecken som 1:a huset (Helteckenssystemet) och numrera de 12 tecknen moturs från 1 till 12.",
          "Hitta det hus där flest planeter samlas; detta är huvudscenen där din livsenergi koncentreras.",
          "Hitta härskaren över ditt 10:e hus (yrke), 7:e hus (relationer) och 2:a hus (resurser) och se i vilket hus varje härskare står."
        ]
      }
    },
    "closing": {
      "tr": "Burçlar göğün mevsimi, evler yerin odalarıdır; her yıldız kendi sevindiği odada en berrak sesini verir.",
      "en": "Signs are the seasons of heaven, houses are the rooms of earth; every star speaks clearest in the room where it rejoices.",
      "sv": "Tecknen är himlens årstider, husen är jordens rum; varje stjärna talar klarast i det rum där den gläds."
    }
  },
  {
    "slug": "ay-dugumleri-ve-tutulmalar",
    "glyph": "☊",
    "image": "/astroloji/ay-dugumleri-tutulma.jpg",
    "title": {
      "tr": "Ay Düğümleri (KAD · GAD), Tutulmalar ve Saros Döngüsü",
      "en": "Lunar Nodes (North & South), Eclipses and the Saros Cycle",
      "sv": "Månnoderna (Norra och Södra), förmörkelser och Saroscykeln"
    },
    "summary": {
      "tr": "Ay yörüngesinin ekliptikle 5.14 derecelik kesişimi; Kuzey ve Güney Ay Düğümleri, 18.6 yıl ve Saros tutulma döngüsü.",
      "en": "The 5.14-degree intersection of the lunar orbit with the ecliptic; North and South Nodes, the 18.6-year nodal return, and the Saros eclipse cycle.",
      "sv": "Månbanans 5,14-gradiga skärning med ekliptikan; Norra och Södra månnoden, den 18,6-åriga nodcykeln och Saros-förmörkelsecykeln."
    },
    "subtitle": {
      "tr": "Güneş ve Ay yollarının kesiştiği tutulma kapıları: Caput ve Cauda Draconis",
      "en": "The eclipse gates where the paths of Sun and Moon intersect: Caput and Cauda Draconis",
      "sv": "Förmörkelseportarna där Solens och Månens banor möts: Caput och Cauda Draconis"
    },
    "paragraphs": {
      "tr": [
        "Ay Düğümleri gökyüzünde fiziksel birer gezegen veya kaya parçası değil, saf astronomik kesişim noktalarıdır. Ay'ın Dünya etrafındaki yörünge düzlemi, Dünya'nın Güneş etrafındaki yörünge düzlemi (ekliptik) ile tam üst üste çakışmaz; aralarında yaklaşık 5.14 derecelik bir açısal eğim vardır. İşte Ay'ın bu eğimli yörüngede güneyden kuzeye çıkarken ekliptik çemberini kestiği noktaya Kuzey Ay Düğümü (☊), kuzeyden güneye inerken kestiği tam karşı (180°) noktaya ise Güney Ay Düğümü (☋) denir.",
        "Eğer bu 5.14 derecelik eğim olmasaydı, her Yeniay'da Güneş Tutulması, her Dolunay'da ise Ay Tutulması yaşanırdı! Oysa tutulmalar yalnızca Yeniay veya Dolunay bu iki kesişim noktasına (Ay Düğümlerine) yaklaşık 15–18 dereceden daha yakın gerçekleştiğinde meydana gelir. Bu yüzden ekliptiğin kendisi anlamına gelen 'Ekliptik' kelimesi bile Yunanca 'ekleipsis' (tutulma) kökünden türemiştir.",
        "Antik Mezopotamya, Hint (Rahu ve Ketu) ve Ortaçağ İslam-Avrupa astronomisinde bu iki kesişim noktası göksel bir ejderhanın başı (Caput Draconis — Kuzey Düğüm) ve kuyruğu (Cauda Draconis — Güney Düğüm) olarak betimlenmiştir. Klasik astrolojide Kuzey Ay Düğümü (☊) artış, büyüme, iştah, dünyaya çekilme ve çoğalma ilkesi olarak çalışırken; Güney Ay Düğümü (☋) eksiltme, arınma, bırakma, geçmişten gelen tortuyu çözme ve maddeden soyutlanma ilkesidir.",
        "Ay Düğümleri zodyak kuşağında gezegenlerin aksine geriye doğru (retrograd yönde: Koç'tan Balık'a, Balık'tan Kova'ya doğru) hareket eder. Bir burçta yaklaşık 1.5 yıl (18 ay) kalırlar ve 360 derecelik tam zodyak turlarını 18.6 yılda tamamlarlar. Babil astronomlarının keşfettiği 18 yıl 11 gün 8 saatlik (223 sinodik ay) Saros Döngüsü ise Güneş, Ay ve Ay Düğümlerinin aynı geometrik hizaya geri dönerek aynı tutulma ailesini tekrarladığı muazzam kozmik saattir."
      ],
      "en": [
        "The Lunar Nodes are not physical planetary bodies, but pure astronomical points of intersection. The plane of the Moon's orbit around the Earth does not lie flat on the plane of the Earth's orbit around the Sun (the ecliptic); it is inclined by approximately 5.14 degrees. The point where the Moon crosses the ecliptic moving from south to north is the North Lunar Node (☊), and the exact opposite point (180° away) where it crosses from north to south is the South Lunar Node (☋).",
        "Without this 5.14-degree inclination, a Solar Eclipse would occur at every New Moon and a Lunar Eclipse at every Full Moon! Instead, eclipses occur only when a New or Full Moon takes place within roughly 15–18 degrees of the Lunar Nodes. Indeed, the very word 'Ecliptic' derives from the Greek 'ekleipsis' (eclipse), because it is along this line that eclipses happen.",
        "In ancient Mesopotamian, Indian (Rahu and Ketu), and medieval Islamic and European astronomy, these two intersections were pictured as the Head of the Dragon (Caput Draconis — North Node) and the Tail of the Dragon (Cauda Draconis — South Node). In classical astrology, the North Node (☊) operates as a principle of increase, amplification, appetite, and worldly intake, while the South Node (☋) operates as a principle of decrease, release, purification, and detachment.",
        "Unlike the planets, the Lunar Nodes move backward (retrograde: from Aries into Pisces, Pisces into Aquarius) through the zodiac. They spend roughly 1.5 years (18 months) in each sign pair and complete a full 360-degree circuit in 18.6 years. The Babylonian Saros Cycle of 18 years, 11 days, and 8 hours (223 synodic months) measures the return of Sun, Moon, and Nodes to the exact same eclipse geometry."
      ],
      "sv": [
        "Månnoderna är inte fysiska himlakroppar, utan rena astronomiska skärningspunkter. Månens banplan runt jorden lutar cirka 5,14 grader i förhållande till ekliptikan. Punkten där Månen korsar ekliptikan från söder till norr är den Norra månnoden (☊), och punkten mittemot (180°) där den korsar från norr till söder är den Södra månnoden (☋).",
        "Utan denna lutning på 5,14 grader skulle en solförmörkelse inträffa vid varje nymåne och en månförmörkelse vid varje fullmåne. Förmörkelser sker endast när en nymåne eller fullmåne infaller nära månnoderna. Själva ordet 'ekliptika' kommer av grekiskans 'ekleipsis' (förmörkelse).",
        "I antik och medeltida astronomi kallades dessa punkter Drakens Huvud (Caput Draconis — Norra noden) och Drakens Svans (Cauda Draconis — Södra noden). Norra noden (☊) verkar som en princip för ökning, tillväxt och intag, medan Södra noden (☋) verkar för minskning, rening och släppande.",
        "Månnoderna rör sig baklänges (retrograd) genom zodiaken, stannar cirka 1,5 år i varje teckenpar och fullbordar ett helt varv på 18,6 år. Den babyloniska Saroscykeln på 18 år, 11 dagar och 8 timmar (223 synodiska månader) mäter när Solen, Månen och noderna återvänder till exakt samma förmörkelsegeometri."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "5.14 Derecelik Yörünge Eğimi ve Tutulma Mevsimleri",
          "body": "Güneş yılda iki kez (yaklaşık 6 ayda bir) Ay Düğümleri ekseninin bulunduğu burç derecelerinden geçer; bu dönemlere 'Tutulma Mevsimi' (Eclipse Season) denir. Her tutulma mevsiminde en az bir Güneş Tutulması (güçlü bir Yeniay ve yeni başlangıç eşiği) ve bir Ay Tutulması (güçlü bir Dolunay, görünür olma ve tamamlanma eşiği) yaşanır."
        },
        {
          "heading": "Kuzey Düğüm (Caput Draconis) ve Güney Düğüm (Cauda Draconis)",
          "body": "Kuzey ve Güney Ay Düğümleri her zaman tam 180 derece karşıt burçlarda ve evlerde durur (örneğin KAD Koç 1. Evdeyse, GAD Terazi 7. Evdedir). Güney Düğüm kişinin çok iyi bildiği, alışkanlık haline getirdiği, ancak aşırıya kaçtığında kendisini aşağı çeken konfor ve tortu alanıdır; Kuzey Düğüm ise yeni deneyim kazanılması, cesaretle adım atılması gereken büyüme yönüdür."
        },
        {
          "heading": "18.6 Yıllık Düğüm Dönüşü ve Babil Saros Döngüsü",
          "body": "İnsan yaşamında 18–19, 37, 56 ve 74–75 yaşları, gökyüzündeki Ay Düğümlerinin doğum anındaki derecelerine geri döndüğü (Nodal Return) kritik kader kavşaklarıdır. Bu yaşlarda yaşanan tutulmalar doğumdaki tutulma eksenini yeniden tetikler ve kişinin yönünü, mesleğini veya yaşam sahnesini köklü biçimde yeniler."
        }
      ],
      "en": [
        {
          "heading": "The 5.14-Degree Orbital Inclination and Eclipse Seasons",
          "body": "Twice a year (roughly every six months), the Sun crosses the zodiacal degrees occupied by the Lunar Nodes, creating an 'Eclipse Season'. Each eclipse season produces at least one Solar Eclipse (an intensified New Moon threshold) and one Lunar Eclipse (an intensified Full Moon culmination)."
        },
        {
          "heading": "North Node (Caput Draconis) and South Node (Cauda Draconis)",
          "body": "The North and South Nodes always stand 180 degrees apart in opposite signs and houses. The South Node marks familiar territory, ingrained skill, and potential stagnation or release; the North Node marks the frontier of growth, intake, and new experience."
        },
        {
          "heading": "The 18.6-Year Nodal Return and the Babylonian Saros Cycle",
          "body": "Ages 18–19, 37, 56, and 74–75 mark the Nodal Returns in a human life, when the transiting Lunar Nodes return to their exact natal degrees. Eclipses during these years reactivate the natal nodal axis and bring major turning points in vocation and life direction."
        }
      ],
      "sv": [
        {
          "heading": "Den 5,14-gradiga banlutningen och förmörkelsesäsonger",
          "body": "Två gånger om året (ungefär var sjätte månad) passerar Solen de zodiakgrader där månnoderna står, vilket skapar en förmörkelsesäsong med minst en solförmörkelse och en månförmörkelse."
        },
        {
          "heading": "Norra noden (Caput Draconis) och Södra noden (Cauda Draconis)",
          "body": "Norra och Södra månnoden står alltid 180 grader mittemot varandra. Södra noden markerar välkänd mark och det som behöver rensas ut; Norra noden markerar tillväxtens och den nya erfarenhetens riktning."
        },
        {
          "heading": "Den 18,6-åriga nodåterkomsten och Saroscykeln",
          "body": "Vid 18–19, 37, 56 och 74–75 års ålder återvänder månnoderna till sina födelsegrader (Nodal Return), vilket markerar avgörande vändpunkter i livsriktningen."
        }
      ]
    },
    "items": {
      "tr": [
        "☊ Kuzey Ay Düğümü (Caput Draconis): Ay'ın ekliptiği güneyden kuzeye kestiği nokta; artış, büyüme, iştah ve yeni deneyim yönü.",
        "☋ Güney Ay Düğümü (Cauda Draconis): Ay'ın ekliptiği kuzeyden güneye kestiği nokta; azaltma, bırakma, arınma ve tanıdık hafıza.",
        "Güneş Tutulması (Solar Eclipse): Düğümlere yakın Yeniay; Ay'ın Güneş diskini örtmesiyle başlayan güçlü dışsal olay ve yeni sayfa.",
        "Ay Tutulması (Lunar Eclipse): Düğümlere yakın Dolunay; Dünya'nın gölgesinin Ay'a düşmesiyle oluşan duygusal doruk ve hesaplaşma.",
        "18.6 Yıllık Düğüm Döngüsü: Düğümlerin zodyaktaki 12 burcu geriye doğru (retrograd) dönerek tamamladığı tam yörünge süresi (18.6, 37.2, 55.8 yaşları).",
        "Saros Döngüsü (223 Sinodik Ay): Keldani astronomlarının saptadığı 18 yıl 11 gün 8 saatlik tutulma ailesi tekrar periyodu."
      ],
      "en": [
        "☊ North Lunar Node (Caput Draconis): Where the Moon crosses the ecliptic northward; increase, growth, appetite, and new frontier.",
        "☋ South Lunar Node (Cauda Draconis): Where the Moon crosses the ecliptic southward; decrease, release, purification, and familiar memory.",
        "Solar Eclipse: A New Moon near the Nodes; the Moon occulting the solar disk, triggering major external beginnings.",
        "Lunar Eclipse: A Full Moon near the Nodes; Earth's shadow falling across the Moon, bringing culmination and reckoning.",
        "18.6-Year Nodal Cycle: The full retrograde circuit of the Nodes through all 12 signs (marking ages 18.6, 37.2, 55.8).",
        "Saros Cycle (223 Synodic Months): The Babylonian period of 18 years, 11 days, and 8 hours governing repeating eclipse families."
      ],
      "sv": [
        "☊ Norra månnoden (Caput Draconis): Där Månen korsar ekliptikan norrut; ökning, tillväxt och ny erfarenhet.",
        "☋ Södra månnoden (Cauda Draconis): Där Månen korsar ekliptikan söderut; minskning, rening och välkänt minne.",
        "Solförmörkelse: Nymåne nära noderna; Månen täcker solskivan och inleder kraftfulla yttre skeden.",
        "Månförmörkelse: Fullmåne nära noderna; jordens skugga faller över Månen och ger kulmination och bokslut.",
        "18,6-årig nodcykel: Nodernas fulla retrograda varv genom alla 12 tecken (vid 18,6, 37,2 och 55,8 års ålder).",
        "Saroscykeln (223 synodiska månader): Den babyloniska perioden på 18 år, 11 dagar och 8 timmar för förmörkelsefamiljer."
      ]
    },
    "practice": {
      "tr": {
        "title": "Düğüm Eksenini ve Tutulma Evlerini Okuma — 3 Adım",
        "steps": [
          "Haritanızda Kuzey Ay Düğümü'nün (☊) bulunduğu burç ve evi bulun; tam karşısındaki (180°) burç ve ev otomatik olarak Güney Ay Düğümü'nüzdür (☋).",
          "Kuzey Düğümünüzün bulunduğu burcun yöneticisi olan gezegeni saptayın; bu gezegen düğüm yolculuğunuzun rehberidir.",
          "İçinde bulunduğumuz yıl gerçekleşen Güneş ve Ay tutulmalarının haritanızda hangi ev aksına düştüğünü bularak yılın ana gündemini belirleyin."
        ]
      },
      "en": {
        "title": "Reading Your Nodal Axis and Eclipse Houses — 3 Steps",
        "steps": [
          "Locate the sign and house of your North Node (☊); the exact opposite sign and house (180° away) hold your South Node (☋).",
          "Identify the domicile ruler of your North Node's sign; this planet acts as the guide for your nodal development.",
          "Check which pair of houses in your chart hosts the current year's Solar and Lunar eclipses to see where major turning points are unfolding."
        ]
      },
      "sv": {
        "title": "Att läsa din nodaxel och förmörkelsehus — 3 steg",
        "steps": [
          "Hitta tecknet och huset för din Norra månnod (☊); det motsatta tecknet och huset (180°) rymmer din Södra månnod (☋).",
          "Identifiera härskaren över din Norra nods tecken; denna planet fungerar som vägvisare för nodaxeln.",
          "Se vilket huspar i din karta som tar emot årets sol- och månförmörkelser för att se var årets stora vändpunkter sker."
        ]
      }
    },
    "closing": {
      "tr": "Tutulma ışığın sönmesi değil, iki yörüngenin aynı eşikte hizalanmasıdır.",
      "en": "An eclipse is not the dying of light, but the alignment of two orbits at the same threshold.",
      "sv": "En förmörkelse är inte ljusets död, utan två banors linjering vid samma tröskel."
    }
  },
  {
    "slug": "ekinoks-gundonumu-ve-acilar",
    "glyph": "△",
    "image": "/astroloji/ekinoks-ve-acilar.jpg",
    "title": {
      "tr": "Ekinokslar, Gündönümleri ve Ptolemaios Açıları",
      "en": "Equinoxes, Solstices and the Ptolemaic Aspects",
      "sv": "Dagjämningar, solstånd och de ptolemaiska aspekterna"
    },
    "summary": {
      "tr": "Tropikal zodyakın 4 mevsim direği, İznikli Hipparkhos ve presesyon, Ptolemaios'un 5 temel bakış açısı.",
      "en": "The 4 seasonal pillars of the tropical zodiac, Hipparchus of Nicaea and precession, and Ptolemy's 5 geometrical aspects.",
      "sv": "Den tropiska zodiakens 4 årstidspelare, Hipparchos från Nicaea och precessionen samt Ptolemaios 5 geometriska aspekter."
    },
    "subtitle": {
      "tr": "Güneş'in dört mevsim kapısı ve gezegenlerin birbirini gördüğü geometrik bakış açıları (Aspectus)",
      "en": "The four seasonal gates of the Sun and the geometrical lines of sight (Aspectus) between planets",
      "sv": "Solens fyra årstidsportar och de geometriska siktlinjerna (Aspectus) mellan planeterna"
    },
    "paragraphs": {
      "tr": [
        "Batı ve Helenistik astrolojinin kullandığı Tropikal Zodyak ('tropikos' — dönüşe ait), Dünya'nın 23.4 derecelik eksen eğikliği nedeniyle Güneş ışınlarının yıl içinde yaptığı dört büyük astronomik dönüm noktasına kilitlenmiştir: İlkbahar Ekinoksu (20/21 Mart — gece ve gündüzün eşitlendiği an) her zaman 0° Koç noktasıdır. Yaz Gündönümü (21 Haziran — en uzun gündüz) 0° Yengeç, Sonbahar Ekinoksu (22/23 Eylül) 0° Terazi, Kış Gündönümü (21 Aralık — en uzun gece) ise 0° Oğlak derecesidir.",
        "MÖ 2. yüzyılda Anadolu'da, İznikli (Nikaia) büyük astronom Hipparkhos, kendi yıldız ölçümlerini kendisinden önceki Babil ve Yunan kayıtlarıyla karşılaştırdığında tarihin en önemli astronomik keşiflerinden birini yaptı: Ekinoksların Presesyonu (Devvinim / Yalpalama). Dünya tıpkı dönen bir topaç gibi ekseni etrafında yaklaşık 25.772 yılda bir tam daire çizer; bu yüzden 0° Koç ekinoks noktası arka plandaki sabit takımyıldızlara göre her 72 yılda 1 derece geriye kayar.",
        "Harita çemberi içinde gezegenlerin birbirleriyle kurduğu diyaloğa ise Açı (Yunanca 'Marartia' — tanıklık; Latince 'Aspectus' — bakış / birbirini görme) denir. Klasik astrolojide gezegenler rastgele her dereceden birbirini görmez; Claudius Ptolemaios'un Tetrabiblos'ta müzikal armoni ve Pisagor geometrisiyle açıkladığı yalnızca beş temel açı (Major / Ptolemaic Aspects) vardır: Kavuşum (0°), Altmışlık / Sekstil (60°), Kare (90°), Üçgen / Trigon (120°) ve Karşıt (180°).",
        "Bu açılar dışındaki burç ilişkilerine (yan yana duran 30°'lik burçlar ile 150° uzaktaki burçlara) antik astrolojide 'Açı Görmeme / Kör Nokta' (Inconjunct / Aversion / Asyndeton) denir. Birbirini açı ile gören iki gezegen aynı masada konuşan iki muhatap gibidir: Üçgen (120°) ve Altmışlık (60°) dostça işbirliği ve akış üretirken; Kare (90°) ve Karşıt (180°) sürtünme, meydan okuma ve somut eylem zorunluluğu doğurur."
      ],
      "en": [
        "The Tropical Zodiac ('tropikos' — of the turning) used in Western and Hellenistic astrology is anchored to the four astronomical turning points created by Earth's 23.4-degree axial tilt: the Vernal Equinox (March 20/21 — equal day and night) is always defined as 0° Aries. The Summer Solstice (June 21 — longest day) is 0° Cancer, the Autumnal Equinox (September 22/23) is 0° Libra, and the Winter Solstice (December 21 — longest night) is 0° Capricorn.",
        "In the 2nd century BCE in Anatolia, the great astronomer Hipparchus of Nicaea (modern İznik) compared his star measurements with earlier Babylonian and Greek records and made one of history's greatest astronomical discoveries: the Precession of the Equinoxes. Because Earth wobbles like a spinning top over a cycle of roughly 25,772 years, the 0° Aries equinox point shifts backward against the backdrop of the constellations by 1 degree every 72 years.",
        "Within the chart wheel, the geometrical relationships between planets are called Aspects (Greek 'Martyria' — witnessing; Latin 'Aspectus' — looking at / seeing one another). In classical astrology, planets do not 'see' each other across arbitrary angles; Claudius Ptolemy demonstrated in the Tetrabiblos through Pythagorean geometry and musical harmonics that there are five primary relationships (Ptolemaic Aspects): Conjunction (0°), Sextile (60°), Square (90°), Trine (120°), and Opposition (180°).",
        "Signs that do not form one of these geometrical ratios (those 30° or 150° apart) are said to be in 'Aversion' (Inconjunct / Asyndeton) — unable to see one another directly. Two planets in aspect converse at the same table: Trines (120°) and Sextiles (60°) produce harmonious flow and support, whereas Squares (90°) and Oppositions (180°) generate friction, tension, and decisive action."
      ],
      "sv": [
        "Den tropiska zodiaken ('tropikos' — vändningarnas) som används i västerländsk och hellenistisk astrologi är förankrad i de fyra astronomiska vändpunkter som skapas av jordaxelns lutning på 23,4 grader: vårdagjämningen (20/21 mars) är alltid 0° Väduren, sommarsolståndet (21 juni) är 0° Kräftan, höstdagjämningen (22/23 september) är 0° Vågen och vintersolståndet (21 december) är 0° Stenbocken.",
        "Under 100-talet f.Kr. i Anatolien gjorde astronomen Hipparchos från Nicaea (dagens İznik) en av historiens största astronomiska upptäckter: dagjämningarnas precession. Eftersom jordaxeln vobblar i en cykel på cirka 25 772 år förskjuts vårdagjämningspunkten 1 grad var 72:a år i förhållande till stjärnbilderna.",
        "I horoskopcirkeln kallas de geometriska relationerna mellan planeter Aspekter (latin 'Aspectus' — blick / att se varandra). Claudius Ptolemaios visade genom pythagoreisk geometri och musikteori att det finns fem grundläggande aspekter: Konjunktion (0°), Sextil (60°), Kvadratur (90°), Trigon (120°) och Opposition (180°).",
        "Tecken som inte bildar något av dessa förhållanden (30° eller 150° isär) befinner sig i 'Aversion' (osynliga för varandra). Trigon (120°) och Sextil (60°) skapar samklang och flöde, medan Kvadratur (90°) och Opposition (180°) skapar spänning och handlingskraft."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Tropikal Zodyak ve Dört Mevsim Kapısı (0° Koç, Yengeç, Terazi, Oğlak)",
          "body": "Ptolemaios, Tetrabiblos'un 1. kitabında burçların başlangıcını neden sabit yıldızlara değil de ekinoks ve gündönümü noktalarına (Tropikal Zodyak) sabitlediğini açıkça yazar: Çünkü yeryüzündeki sıcaklık, soğukluk, nem ve kuruluk döngüleri doğrudan Güneş'in ekvator düzlemiyle yaptığı açıya bağlıdır. 0° Koç baharın uyanışı, 0° Yengeç ışığın zirvesi, 0° Terazi hasat ve denge, 0° Oğlak ise kışın en derin tohum noktasıdır."
        },
        {
          "heading": "İznikli Hipparkhos ve Presesyon: Tropikal ve Sidereal Zodyak Farkı",
          "body": "Hipparkhos'un keşfettiği 25.772 yıllık presesyon döngüsü nedeniyle, yaklaşık 2000 yıl önce üst üste çakışan Tropikal Zodyak (mevsim zodyakı) ile Sidereal Zodyak (Hint/Vedik astrolojinin kullandığı sabit yıldız zodyakı) arasında bugün yaklaşık 24 derecelik (Ayanamsa) bir fark oluşmuştur. İki sistem birbirini yanlışlamaz: Tropikal zodyak Dünya-Güneş mevsim geometrisini, Sidereal zodyak ise arka plandaki yıldız kümelerini referans alır."
        },
        {
          "heading": "Ptolemaios'un Beş Geometrik Bakış Açısı (Aspectus)",
          "body": "360 derecelik çember ikiye bölündüğünde 180° (Karşıt — Satürn doğasında), üçe bölündüğünde 120° (Üçgen — Jüpiter doğasında), dörde bölündüğünde 90° (Kare — Mars doğasında), altıya bölündüğünde ise 60° (Altmışlık — Venüs doğasında) açıları ortaya çıkar. Kavuşum (0°) ise iki gezegenin aynı burçta ve aynı derecede tek bir güç gibi birleşmesidir."
        }
      ],
      "en": [
        {
          "heading": "The Tropical Zodiac and the Four Seasonal Gates (0° Aries, Cancer, Libra, Capricorn)",
          "body": "In Book I of the Tetrabiblos, Ptolemy explains why the zodiac begins with the equinoxes and solstices rather than fixed stars: earthly cycles of heat, cold, moisture, and dryness depend directly on the Sun's declination relative to the celestial equator. 0° Aries is the awakening of spring, 0° Cancer the peak of light, 0° Libra the balance of autumn, and 0° Capricorn the deepest seed of winter."
        },
        {
          "heading": "Hipparchus of Nicaea and Precession: Tropical vs. Sidereal Zodiac",
          "body": "Because of the 25,772-year precession cycle discovered by Hipparchus in Nicaea (İznik), the Tropical Zodiac (seasonal) and Sidereal Zodiac (constellational, used in Vedic astrology), which coincided roughly 2,000 years ago, are now separated by about 24 degrees (Ayanamsa). Neither invalidates the other: the Tropical measures Earth-Sun seasonal geometry, while the Sidereal references the stellar backdrop."
        },
        {
          "heading": "Ptolemy's Five Geometrical Aspects (Aspectus)",
          "body": "Dividing the 360-degree circle by two yields 180° (Opposition — of the nature of Saturn); by three yields 120° (Trine — of the nature of Jupiter); by four yields 90° (Square — of the nature of Mars); and by six yields 60° (Sextile — of the nature of Venus). Conjunction (0°) merges two planets in the same sign and degree into a single concentrated force."
        }
      ],
      "sv": [
        {
          "heading": "Den tropiska zodiaken och de fyra årstidsportarna",
          "body": "I Tetrabiblos förklarar Ptolemaios varför zodiaken utgår från dagjämningar och solstånd: jordens cykler av värme, kyla, fukt och torka beror direkt på Solens deklination. 0° Väduren är vårens uppvaknande, 0° Kräftan ljusets höjdpunkt, 0° Vågen höstens jämvikt och 0° Stenbocken vinterns djupaste frö."
        },
        {
          "heading": "Hipparchos från Nicaea och precessionen: Tropisk och siderisk zodiak",
          "body": "Genom den 25 772-åriga precessionscykel som Hipparchos upptäckte i Nicaea (İznik) skiljer det idag cirka 24 grader (Ayanamsa) mellan den tropiska zodiaken (årstidsbaserad) och den sideriska zodiaken (stjärnbildsbaserad)."
        },
        {
          "heading": "Ptolemaios fem geometriska aspekter (Aspectus)",
          "body": "När 360-graderscirkeln delas med två uppstår 180° (Opposition), med tre 120° (Trigon), med fyra 90° (Kvadratur) och med sex 60° (Sextil). Konjunktion (0°) förenar två planeter i samma grad."
        }
      ]
    },
    "items": {
      "tr": [
        "☌ Kavuşum (Conjunction · 0°): İki gezegenin aynı burçta ve yakın derecede birleşmesi; enerjilerin kaynaşması, tohum ve yoğunlaşma.",
        "⚹ Altmışlık / Sekstil (Sextile · 60° · 2 Burç Mesafe): Uyumlu elementler (Ateş–Hava veya Toprak–Su) arasındaki Venüs doğasındaki fırsat ve diyalog açısı.",
        "□ Kare (Square · 90° · 3 Burç Mesafe): Aynı nitelikteki (Öncü, Sabit veya Değişken) burçlar arasındaki Mars doğasındaki dinamik sürtünme, kriz ve somut eylem açısı.",
        "△ Üçgen / Trigon (Trine · 120° · 4 Burç Mesafe): Aynı elementten (Ateş–Ateş, Su–Su vb.) burçlar arasındaki Jüpiter doğasındaki zahmetsiz akış, yetenek ve koruma açısı.",
        "☍ Karşıt (Opposition · 180° · 6 Burç Mesafe): Tam karşı karşıya duran burçlar arasındaki Satürn doğasındaki aynalanma, kutuplaşma, farkındalık ve denge sınavı.",
        "Açı Görmeme (Aversion / Inconjunct · 30° ve 150°): Birbirini geometrik oranla görmeyen burçlar; kör nokta, bağlantı kopukluğu ve dolaylı telafi."
      ],
      "en": [
        "☌ Conjunction (0°): Two planets uniting in the same sign and degree; fusion of energies, seed point, and intense focus.",
        "⚹ Sextile (60° · 2 Signs Apart): The Venus-natured angle of opportunity and dialogue between compatible elements (Fire–Air or Earth–Water).",
        "□ Square (90° · 3 Signs Apart): The Mars-natured angle of dynamic friction, crisis, and decisive action between signs of the same modality.",
        "△ Trine (120° · 4 Signs Apart): The Jupiter-natured angle of effortless flow, natural gift, and protection between signs of the same element.",
        "☍ Opposition (180° · 6 Signs Apart): The Saturn-natured angle of mirroring, polarity, awareness, and balance across opposite signs.",
        "Aversion (Inconjunct · 30° and 150°): Signs sharing no Ptolemaic geometrical ratio; blind spots, disconnection, and indirect adjustment."
      ],
      "sv": [
        "☌ Konjunktion (0°): Två planeter som förenas i samma tecken och grad; sammansmältning av kraft, fröpunkt och fokus.",
        "⚹ Sextil (60° · 2 tecken isär): Venus-artad vinkel för möjlighet och dialog mellan förenliga element (Eld–Luft eller Jord–Vatten).",
        "□ Kvadratur (90° · 3 tecken isär): Mars-artad vinkel för dynamisk friktion, utmaning och handling mellan tecken av samma kvalitet.",
        "△ Trigon (120° · 4 tecken isär): Jupiter-artad vinkel för naturligt flöde, gåva och skydd mellan tecken av samma element.",
        "☍ Opposition (180° · 6 tecken isär): Saturnus-artad vinkel för spegling, polaritet och balansprövning mellan motsatta tecken.",
        "Aversion (Inkonjunkt · 30° och 150°): Tecken utan ptolemaiskt geometriskt förhållande; blinda fläckar och indirekt anpassning."
      ]
    },
    "practice": {
      "tr": {
        "title": "Haritada Açıları (Aspectus) Okuma — 3 Adım",
        "steps": [
          "Haritanızda aynı burç içinde yan yana duran gezegenleri (0° Kavuşum) ve tam karşı karşıya duran gezegenleri (180° Karşıt) belirleyin.",
          "Güneş ve Ay'ınızın hangi gezegenlerden 120° (Üçgen — destek) ve 90° (Kare — mücadele) açısı aldığını burç sayılarını sayarak kontrol edin (4 burç ötesi Üçgen, 3 burç ötesi Kare).",
          "Birbirine Kare (90°) yapan iki gezegeni 'kötü şans' olarak değil, yaşamınızda en çok somut eser ve dayanıklılık üreten motor güç olarak okuyun."
        ]
      },
      "en": {
        "title": "Reading Aspects in Your Chart — 3 Steps",
        "steps": [
          "Identify any planets standing together in the same sign (0° Conjunction) or directly across the wheel in opposite signs (180° Opposition).",
          "Count signs from your Sun and Moon to see which planets cast a 120° Trine (4 signs away — support) or a 90° Square (3 signs away — challenge).",
          "Read a 90° Square between two planets not as 'bad luck', but as the primary engine that drives tangible mastery and resilience in your life."
        ]
      },
      "sv": {
        "title": "Att läsa aspekter i din karta — 3 steg",
        "steps": [
          "Identifiera planeter som står tillsammans i samma tecken (0° Konjunktion) eller rakt emot varandra (180° Opposition).",
          "Räkna tecken från din Sol och Måne för att se vilka planeter som bildar 120° Trigon (4 tecken bort — stöd) eller 90° Kvadratur (3 tecken bort — utmaning).",
          "Läs en 90° Kvadratur inte som 'otur', utan som den motor som driver konkret mästerskap och uthållighet i ditt liv."
        ]
      }
    },
    "closing": {
      "tr": "Yıldızlar birbirine geometriyle bakar; üçgen akışı, kare ustalığı doğurur.",
      "en": "The stars behold one another through geometry; the trine brings flow, the square forges mastery.",
      "sv": "Stjärnorna betraktar varandra genom geometri; trigonen ger flöde, kvadraturen smider mästerskap."
    }
  }
];

export const astrologySkyNotes: {
  href: string;
  glyph: string;
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
}[] = [
  {
    "href": "/astroloji/venus-retrosu",
    "glyph": "♀℞",
    "title": {
      "tr": "Venüs Retrosu · Akrep — Terazi",
      "en": "Venus Retrograde · Scorpio — Libra",
      "sv": "Venus retrograd · Skorpionen — Vågen"
    },
    "summary": {
      "tr": "3 Ekim – 14 Kasım 2026: Akşam yıldızından sabah yıldızına geçiş, iç kavuşum ve burçlara etkileri.",
      "en": "3 October – 14 November 2026: Transition from evening star to morning star, inferior conjunction, and sign readings.",
      "sv": "3 oktober – 14 november 2026: Övergång från aftonstjärna till morgonstjärna, inre konjunktion och teckenläsningar."
    }
  },
  {
    "href": "/astroloji/terazi-yeniay",
    "glyph": "♎●",
    "title": {
      "tr": "10 Ekim Terazi Yeniayı",
      "en": "10 October Libra New Moon",
      "sv": "10 oktober · Nymåne i Vågen"
    },
    "summary": {
      "tr": "17° Terazi’de doğan Yeniay’ın denge, sözleşme, ilişki kefesi ve 12 yükselen burç üzerindeki yankısı.",
      "en": "The New Moon at 17° Libra: balance, covenants, relational scales, and its resonance across the 12 rising signs.",
      "sv": "Nymånen på 17° Vågen: balans, förbund, relationernas vågskålar och dess genklang genom de 12 stigande tecknen."
    }
  },
  {
    "href": "/astroloji/boga-dolunayi",
    "glyph": "♉○",
    "title": {
      "tr": "26 Ekim Boğa Dolunayı",
      "en": "26 October Taurus Full Moon",
      "sv": "26 oktober · Fullmåne i Oxen"
    },
    "summary": {
      "tr": "3° Boğa’da yücelimdeki Ay ile 3° Akrep Güneş karşıtlığı: Özdeğer, güven, maddi-manevi hasat ve 12 yükselen burç yorumu.",
      "en": "Exalted Moon at 3° Taurus opposite 3° Scorpio Sun: self-worth, security, harvest, and readings for all 12 rising signs.",
      "sv": "Upphöjd Måne på 3° Oxen mittemot 3° Skorpionen-Solen: självvärde, trygghet, skörd och läsning för alla 12 stigande tecken."
    }
  }
];

export function findAstrologyDoor(slug: string): TraditionSubDoor | undefined {
  return astrologyDoors.find((d) => d.slug === slug);
}
