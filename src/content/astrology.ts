import type { Lang } from "@/lib/copy";
import type { TraditionSubDoor } from "@/content/traditions";

export const astrologyHall = {
  "title": {
    "tr": "Astroloji",
    "en": "Astrology",
    "sv": "Astrologi"
  },
  "line": {
    "tr": "Ekliptik geometrisi, yedi klasik gezegen küresi, on iki burç matrisi, on iki ev (topoi), Ay düğümleri, 36 Dekan, Sabit Yıldızlar, Hermetik Lotlar, Sinastri ve Zaman Yöneticileri — yirmi müstakil çalışma odası.",
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
    },
    "itemImages": [
      "/astroloji/item-harita-nasil-okunur-1.jpg",
      "/astroloji/item-harita-nasil-okunur-2.jpg",
      "/astroloji/item-harita-nasil-okunur-3.jpg",
      "/astroloji/item-harita-nasil-okunur-4.jpg",
      "/astroloji/item-harita-nasil-okunur-5.jpg",
      "/astroloji/item-harita-nasil-okunur-6.jpg"
    ],
    "practiceImage": "/astroloji/practice-harita-nasil-okunur.jpg"
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
    },
    "practiceImage": "/astroloji/practice-yedi-klasik-gezegen.jpg"
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
    },
    "practiceImage": "/astroloji/practice-on-iki-burc-ve-nitelikler.jpg"
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
    },
    "itemImages": [
      "/astroloji/item-on-iki-ev-ve-alanlar-1.jpg",
      "/astroloji/item-on-iki-ev-ve-alanlar-2.jpg",
      "/astroloji/item-on-iki-ev-ve-alanlar-3.jpg",
      "/astroloji/item-on-iki-ev-ve-alanlar-4.jpg",
      "/astroloji/item-on-iki-ev-ve-alanlar-5.jpg",
      "/astroloji/item-on-iki-ev-ve-alanlar-6.jpg"
    ],
    "practiceImage": "/astroloji/practice-on-iki-ev-ve-alanlar.jpg"
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
    },
    "itemImages": [
      "/astroloji/item-ay-dugumleri-ve-tutulmalar-1.jpg",
      "/astroloji/item-ay-dugumleri-ve-tutulmalar-2.jpg",
      "/astroloji/item-ay-dugumleri-ve-tutulmalar-3.jpg",
      "/astroloji/item-ay-dugumleri-ve-tutulmalar-4.jpg",
      "/astroloji/item-ay-dugumleri-ve-tutulmalar-5.jpg",
      "/astroloji/item-ay-dugumleri-ve-tutulmalar-6.jpg"
    ],
    "practiceImage": "/astroloji/practice-ay-dugumleri-ve-tutulmalar.jpg"
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
    },
    "itemImages": [
      "/astroloji/item-ekinoks-gundonumu-ve-acilar-1.jpg",
      "/astroloji/item-ekinoks-gundonumu-ve-acilar-2.jpg",
      "/astroloji/item-ekinoks-gundonumu-ve-acilar-3.jpg",
      "/astroloji/item-ekinoks-gundonumu-ve-acilar-4.jpg",
      "/astroloji/item-ekinoks-gundonumu-ve-acilar-5.jpg",
      "/astroloji/item-ekinoks-gundonumu-ve-acilar-6.jpg"
    ],
    "practiceImage": "/astroloji/practice-ekinoks-gundonumu-ve-acilar.jpg"
  },
  {
    "slug": "on-iki-burc-otuz-alti-dekan",
    "glyph": "VII",
    "image": "/astroloji/on-iki-burc-otuz-alti-dekan.jpg",
    "title": {
      "tr": "36 Dekan, Keldani Yüzleri ve Sothis Takvimi",
      "en": "The 36 Decans, Chaldean Faces, and the Sothis Calendar",
      "sv": "De 36 Dekanerna, Kaldeiska Ansiktena och Sothiskalendern"
    },
    "subtitle": {
      "tr": "Her Burcun 10 Derecelik Üç Yüzü (Proswpon) ve Keldani Gezegen Dizilimi",
      "en": "The Three 10-Degree Faces (Prosopon) of Each Sign and Chaldean Planetary Order",
      "sv": "Varje Teckens Tre 10-Graders Ansikten (Prosopon) och Kaldeisk Planetordning"
    },
    "summary": {
      "tr": "360 derecelik ekliptiğin 10'ar derecelik 36 dilimi, Mısır tabut kapaklarındaki Baktiu yıldız saatleri ve Keldani yüz yöneticileri.",
      "en": "The 36 ten-degree slices of the 360° ecliptic, Egyptian coffin-lid Baktiu star clocks, and Chaldean face rulers.",
      "sv": "Ekliptikans 36 tiogradersavsnitt, egyptiska stjärnur och kaldeiska ansiktshärskare."
    },
    "paragraphs": {
      "tr": [
        "Klasik astrolojide her burç 30 derecelik tek parça bir blok değildir; kendi içinde **10'ar derecelik üç eşit dilime** — Yunanca *Dekanoi* (Dekanlar) ya da *Prosopon* (Yüzler) — ayrılır. Böylece 12 burçluk zodyak kuşağı toplam **36 Dekan**dan oluşur.",
        "Kökeni Orta Krallık Mısır'ındaki tabut kapaklarına işlenen **36 Baktiu ('Çalışan Yıldızlar')** takvimine dayanır: Her 10 günde bir doğu ufkunda Güneş'ten hemen önce doğan (*helyak doğuş*) bir takımyıldız, gecenin saatlerini ve o dönemin kozmik niteliğini belirlerdi. Yılın 36 × 10 = 360 gününü tamamlayan bu sistem, Sirius (*Sopdet / Sothis*) yıldızının doğuşuyla mühürlenirdi.",
        "Helenistik dönemde bu 36 dekan, **Keldani Gezegen Sırası** (*Satürn → Jüpiter → Mars → Güneş → Venüs → Merkür → Ay*) ile birleştirildi: 0°–10° Koç burcunun ilk dekanı Mars ile başlar, 10°–20° Koç Güneş'e, 20°–30° Koç Venüs'e verilir ve 20°–30° Balık yine Mars ile kapanır."
      ],
      "en": [
        "In classical astrology, no sign is a monolithic 30-degree block; each sign is divided into **three equal 10-degree segments** called *Dekanoi* (Decans) or *Prosopon* (Faces), forming a circle of **36 Decans** across the zodiac.",
        "Their origin lies in Middle Kingdom Egyptian coffin-lid star clocks (**the 36 Baktiu**): every ten days, a specific asterism rose heliacally just before dawn, marking the hours of the night and the cosmic quality of that decade, sealed annually by the heliacal rising of Sirius (*Sopdet / Sothis*).",
        "In the Hellenistic era, the 36 decans were wedded to the **Chaldean Order of Planets** (*Saturn → Jupiter → Mars → Sun → Venus → Mercury → Moon*), beginning with Mars in the first decan of Aries (0°–10°) and concluding with Mars in the final decan of Pisces (20°–30°)."
      ],
      "sv": [
        "I klassisk astrologi är inget tecken ett enhetligt block om 30 grader; varje tecken delas i **tre lika 10-gradersavsnitt** kallade *Dekanoi* (Dekaner) eller *Prosopon* (Ansikten), vilket ger **36 Dekaner** runt zodiaken.",
        "Ursprunget finns i Mellersta rikets egyptiska stjärnklockor (**de 36 Baktiu**), där en stjärnbild steg heliakiskt var tionde dag före gryningen, förseglad av Sirius (*Sothis*) uppgång.",
        "Under hellenistisk tid förenades de 36 dekanerna med den **Kaldeiska Planetordningen** (*Saturnus → Jupiter → Mars → Solen → Venus → Merkurius → Månen*)."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Keldani Dizilimi ve Yüz (Face) Asaleti",
          "body": "Bir gezegen kendi yönettiği 10 derecelik dekanda bulunduğunda, klasik asalet tablosunda **Yüz (Face / +1 puan)** asaletine sahip olur. Bu durum, kendi ülkesinde olmasa bile kendi sanatını icra edebilen, onurunu ve işlevini koruyan bir elçiye benzer."
        },
        {
          "heading": "Agrippa ve Picatrix'te 36 Dekan İkonografisi",
          "body": "Hermetik literatürde (*Picatrix* ve Agrippa'nın *De Occulta Philosophia* eseri) her dekan yalnızca bir gezegen yöneticisiyle değil, kendine özgü sembolik bir figürle betimlenir: Örneğin Koç'un ilk dekanı elinde çift ağızlı balta tutan kararlı bir muhafız, Boğa'nın ilk dekanı ise toprağı süren sabırlı bir çiftçi arketipidir."
        }
      ],
      "en": [
        {
          "heading": "The Chaldean Order and Face Dignity",
          "body": "When a planet occupies the 10-degree decan it rules, it holds **Face dignity (+1)** in traditional essential dignity tables—like an envoy maintaining poise and craft even in foreign territory."
        },
        {
          "heading": "Iconography of the 36 Decans in Picatrix and Agrippa",
          "body": "In Hermetic literature (*Picatrix* and Agrippa's *De Occulta Philosophia*), each decan is depicted with a distinct symbolic image reflecting the exact temperament of those ten degrees."
        }
      ],
      "sv": [
        {
          "heading": "The Chaldean Order and Face Dignity",
          "body": "When a planet occupies the 10-degree decan it rules, it holds **Face dignity (+1)** in traditional essential dignity tables—like an envoy maintaining poise and craft even in foreign territory."
        },
        {
          "heading": "Iconography of the 36 Decans in Picatrix and Agrippa",
          "body": "In Hermetic literature (*Picatrix* and Agrippa's *De Occulta Philosophia*), each decan is depicted with a distinct symbolic image reflecting the exact temperament of those ten degrees."
        }
      ]
    },
    "items": {
      "tr": [
        "I. Dekan (0° – 10°) — Burcun tohum ve ilk atılım evresi; arketipin en saf, doğrudan ve filtresiz tezahürü.",
        "II. Dekan (10° – 20°) — Burcun kök salma, yoğunlaşma ve kurumsal yapı kazanma evresi; merkez omurga.",
        "III. Dekan (20° – 30°) — Burcun olgunlaşma, dönüşüm ve bir sonraki burca geçiş eşiği (Anaretik sınır öncesi).",
        "Keldani Gezegen Sırası — En yavaş gezegenden en hızlıya: Satürn (♄), Jüpiter (♃), Mars (♂), Güneş (☉), Venüs (♀), Merkür (☿), Ay (☽).",
        "Sothis (Sirius) Doğuşu — Mısır'da Nil'in taşmasını ve 36 dekanlık kutsal yılın sıfırlanmasını müjdeleyen baş yıldız."
      ],
      "en": [
        "First Decan (0° – 10°) — The seed and initial impulse of the sign; its most direct expression.",
        "Second Decan (10° – 20°) — Consolidation, stabilization, and structural center of the sign.",
        "Third Decan (20° – 30°) — Maturation, synthesis, and threshold toward the next sign.",
        "Chaldean Planetary Order — Slowest to fastest: Saturn (♄), Jupiter (♃), Mars (♂), Sun (☉), Venus (♀), Mercury (☿), Moon (☽).",
        "Heliacal Rising of Sothis (Sirius) — Herald of the Nile inundation and reset of the 36-decan sacred year."
      ],
      "sv": [
        "First Decan (0° – 10°) — The seed and initial impulse of the sign; its most direct expression.",
        "Second Decan (10° – 20°) — Consolidation, stabilization, and structural center of the sign.",
        "Third Decan (20° – 30°) — Maturation, synthesis, and threshold toward the next sign.",
        "Chaldean Planetary Order — Slowest to fastest: Saturn (♄), Jupiter (♃), Mars (♂), Sun (☉), Venus (♀), Mercury (☿), Moon (☽).",
        "Heliacal Rising of Sothis (Sirius) — Herald of the Nile inundation and reset of the 36-decan sacred year."
      ]
    },
    "practice": {
      "tr": {
        "title": "Kendi Haritanda Dekan Yöneticilerini Bulma",
        "steps": [
          "Güneş, Ay ve Yükselen derecelerinin hangi 10'luk dilime düştüğünü belirle (0°–9°59' = I. Dekan, 10°–19°59' = II. Dekan, 20°–29°59' = III. Dekan).",
          "Koç I. Dekan = Mars'tan başlayarak Keldani sırasıyla (Satürn → Jüpiter → Mars → Güneş → Venüs → Merkür → Ay) sayıp o derecenin **Yüz Yöneticisini** tespit et.",
          "Ana burç yöneticin ile dekan yöneticinin birbirine nasıl renk kattığını (ör. Güneş'in Boğa'da Venüs yönetiminde, ama Merkür dekanında oluşunu) tek bir cümleyle not et."
        ]
      },
      "en": {
        "title": "Finding Your Decan Rulers in Your Natal Chart",
        "steps": [
          "Identify which 10-degree slice holds your Sun, Moon, and Ascendant (0°–9°59' = Decan I, 10°–19°59' = Decan II, 20°–29°59' = Decan III).",
          "Count through the Chaldean order starting from Mars at Aries I to find the specific **Face Ruler** of each position.",
          "Write one sentence synthesizing your sign ruler with your decan ruler."
        ]
      },
      "sv": {
        "title": "Finding Your Decan Rulers in Your Natal Chart",
        "steps": [
          "Identify which 10-degree slice holds your Sun, Moon, and Ascendant (0°–9°59' = Decan I, 10°–19°59' = Decan II, 20°–29°59' = Decan III).",
          "Count through the Chaldean order starting from Mars at Aries I to find the specific **Face Ruler** of each position.",
          "Write one sentence synthesizing your sign ruler with your decan ruler."
        ]
      }
    },
    "closing": {
      "tr": "Otuz derecelik burç bir ülkeyse, on derecelik dekan o ülkenin içinde yürüdüğün mahalledir.",
      "en": "If the thirty-degree sign is a country, the ten-degree decan is the exact neighborhood you walk within it.",
      "sv": "If the thirty-degree sign is a country, the ten-degree decan is the exact neighborhood you walk within it."
    },
    "itemImages": [
      "/astroloji/item-on-iki-burc-otuz-alti-dekan-1.jpg",
      "/astroloji/item-on-iki-burc-otuz-alti-dekan-2.jpg",
      "/astroloji/item-on-iki-burc-otuz-alti-dekan-3.jpg",
      "/astroloji/item-on-iki-burc-otuz-alti-dekan-4.jpg",
      "/astroloji/item-on-iki-burc-otuz-alti-dekan-5.jpg"
    ],
    "practiceImage": "/astroloji/practice-on-iki-burc-otuz-alti-dekan.jpg"
  },
  {
    "slug": "on-bes-behenian-sabit-yildizi",
    "glyph": "VIII",
    "image": "/astroloji/on-bes-behenian-sabit-yildizi.jpg",
    "title": {
      "tr": "15 Behenian Sabit Yıldızı ve Kraliyet Yıldızları",
      "en": "The 15 Behenian Fixed Stars and the Four Royal Stars",
      "sv": "De 15 Beheniska Fixstjärnorna och de Fyra Kungliga Stjärnorna"
    },
    "subtitle": {
      "tr": "Regulus, Antares, Aldebaran, Fomalhaut, Spica, Algol ve Parans Tekniği",
      "en": "Regulus, Antares, Aldebaran, Fomalhaut, Spica, Algol, and the Technique of Parans",
      "sv": "Regulus, Antares, Aldebaran, Fomalhaut, Spica, Algol och Parans-tekniken"
    },
    "summary": {
      "tr": "Gezegen kürelerinin ötesindeki sekizinci gök kubbe; dört yönün bekçisi Kraliyet Yıldızları ve Arapça 'Behman' (Kök) yıldızları.",
      "en": "The eighth sphere beyond the planetary orbs; the Four Royal Stars guarding the quarters and the Arabic 'Bahman' (Root) stars.",
      "sv": "Den åttonde sfären bortom planeterna; de fyra kungliga stjärnorna och de femton Beheniska rotstjärnorna."
    },
    "paragraphs": {
      "tr": [
        "Klasik kozmolojide yedi gezegen (*planetes* — 'gezginler') kendi kürelerinde hareket ederken, onların ötesindeki sekizinci kürede **Sabit Yıldızlar (*Stellae Fixae*)** yer alır. Sabit yıldızlar her 72 yılda ekliptikte yalnızca 1 derece ilerler (*presesyon*); bu yüzden haritada bir gezegenle veya köşe noktasıyla (ASC, MC) **1°–1.5° dar orb** içinde kavuştuğunda ya da aynı anda ufukta doğup battığında (*Parans*) derin ve kalıcı bir iz bırakır.",
        "Ortaçağ ve Rönesans geleneğinde en güçlü 15 yıldız, Arapça *Bahman* ('Kök') kelimesinden türeyen **15 Behenian Sabit Yıldızı** başlığı altında toplanmıştır. Her birinin kendine özgü bir taş, bitki ve geometrik mühür karşılığı vardır (Hermes Trismegistus'a atfedilen *Liber Hermetis* ve *De Quindecim Stellis* metinleri).",
        "Bunların içinde gökyüzünün dört ana kazığını tutan **Dört Kraliyet Yıldızı (*Persia'nın Dört Gözcüsü*)** özel bir yere sahiptir: Doğu gözcüsü **Aldebaran** (Boğa'nın Kızıl Gözü — dürüstlük sınavı), Kuzey/Yaz gözcüsü **Regulus** (Aslan'ın Kalbi — intikamdan uzak durma sınavı), Batı gözcüsü **Antares** (Akrep'in Kalbi — aşırılık ve takıntı sınavı) ve Güney/Kış gözcüsü **Fomalhaut** (Güney Balığı'nın Ağzı — saf idealizm sınavı)."
      ],
      "en": [
        "In classical cosmology, beyond the seven wandering planets lies the eighth sphere of the **Fixed Stars (*Stellae Fixae*)**. Moving only 1 degree every 72 years by precession, a fixed star leaves a profound mark when conjunct a natal planet or angle (ASC, MC) within a tight **1°–1.5° orb**, or when aligned by horizon/meridian **Parans**.",
        "Medieval and Renaissance tradition singled out fifteen supreme stars known as the **15 Behenian Fixed Stars** (from Arabic *Bahman*, 'Root'), each linked in *De Quindecim Stellis* to a specific stone, herb, and geometric seal.",
        "Foremost among the stars are the **Four Royal Stars of Persia**, guardians of the four celestial quarters: **Aldebaran** (Eye of the Bull — test of integrity), **Regulus** (Heart of the Lion — test of forsaking vengeance), **Antares** (Heart of the Scorpion — test of mastering obsession), and **Fomalhaut** (Mouth of the Southern Fish — test of incorruptible idealism)."
      ],
      "sv": [
        "I klassisk kosmologi ligger bortom de sju vandrande planeterna den åttonde sfären med **Fixstjärnorna (*Stellae Fixae*)**, som rör sig blott 1 grad vart 72:a år.",
        "De femton främsta stjärnorna kallas de **15 Beheniska Fixstjärnorna** (av arabiskans *Bahman*, 'rot'), var och en kopplad till en specifik sten, ört och sigill.",
        "De **Fyra Kungliga Stjärnorna** vaktar himlens fyra hörn: **Aldebaran**, **Regulus**, **Antares** och **Fomalhaut**."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Spica ve Vega: Bereket ve Sanatsal Zarafet",
          "body": "Başak takımyıldızının elindeki buğday başağı **Spica** (~24° Terazi), klasik astrolojinin en koruyucu ve verimli sabit yıldızıdır; dokunduğu gezegene ilim, sanat ve beklenmedik zarafet katar. Çalgı (*Lyra*) takımyıldızındaki **Vega** (~15° Oğlak) ise müzik, şiir ve karizmatik odak gücü verir."
        },
        {
          "heading": "Algol ve Parans (Eşzamanlı Ufuk Geçişi)",
          "body": "**Algol** (*Ra's al-Ghul* — Medusa'nın Başı, ~26° Boğa) gökyüzünün en yoğun ve ham tutkulu yıldızıdır; bastırılmış öfke yerine soğukkanlı uyanıklıkla karşılandığında korkusuz bir koruyucuya dönüşür. Ptolemy'den Bernadette Brady'ye uzanan **Parans** tekniğinde ise yıldızın ekliptik derecesine değil, gezegeniniz doğarken yıldızın gerçek ufukta veya tepede olup olmadığına bakılır."
        }
      ],
      "en": [
        {
          "heading": "Spica and Vega: Beneficence and Artistic Grace",
          "body": "**Spica** (~24° Libra), the wheat ear in the hand of the Virgin, is the most protective and fertile fixed star in traditional astrology, granting scholarship, art, and unlooked-for grace; **Vega** (~15° Capricorn) bestows musical and poetic magnetism."
        },
        {
          "heading": "Algol and the Technique of Parans",
          "body": "**Algol** (~26° Taurus) carries the raw intensity of the Gorgon's head, demanding清醒 composure rather than rage. Through **Parans**, astrologers examine whether a fixed star is simultaneously rising, culminating, or setting on the local horizon when a natal planet crosses an angle."
        }
      ],
      "sv": [
        {
          "heading": "Spica and Vega: Beneficence and Artistic Grace",
          "body": "**Spica** (~24° Libra), the wheat ear in the hand of the Virgin, is the most protective and fertile fixed star in traditional astrology, granting scholarship, art, and unlooked-for grace; **Vega** (~15° Capricorn) bestows musical and poetic magnetism."
        },
        {
          "heading": "Algol and the Technique of Parans",
          "body": "**Algol** (~26° Taurus) carries the raw intensity of the Gorgon's head, demanding清醒 composure rather than rage. Through **Parans**, astrologers examine whether a fixed star is simultaneously rising, culminating, or setting on the local horizon when a natal planet crosses an angle."
        }
      ]
    },
    "items": {
      "tr": [
        "Regulus (~0° Başak) — Aslan'ın Kalbi (*Cor Leonis*); liderlik, asalet, fakat öç alma duygusuna kapılmama sınavı.",
        "Aldebaran (~10° İkizler) — Boğa'nın Kızıl Gözü; büyük girişim gücü, ancak sözünde ve ticaretinde mutlak dürüstlük şartı.",
        "Antares (~10° Yay) — Akrep'in Kalbi; stratejik cesaret ve derinlik, ancak yıkıcı uçlara savrulmama sınavı.",
        "Fomalhaut (~4° Balık) — Güney Balığı; manevi vizyon, şiirsel ilham ve ideallerini maddi çıkar için bozmama sınavı.",
        "Spica (~24° Terazi) — Başak'ın Buğday Başağı; ilim, zanaat, adalet ve koruyucu bereket yıldızı."
      ],
      "en": [
        "Regulus (~0° Virgo) — Heart of the Lion; sovereignty and leadership, tested by foreswearing revenge.",
        "Aldebaran (~10° Gemini) — Eye of the Bull; high enterprise, tested by strict ethical integrity.",
        "Antares (~10° Sagittarius) — Heart of the Scorpion; strategic courage, tested by avoiding destructive obsession.",
        "Fomalhaut (~4° Pisces) — Mouth of the Southern Fish; spiritual vision, tested by keeping ideals pure.",
        "Spica (~24° Libra) — Ear of Wheat; scholarship, craft, justice, and protective grace."
      ],
      "sv": [
        "Regulus (~0° Virgo) — Heart of the Lion; sovereignty and leadership, tested by foreswearing revenge.",
        "Aldebaran (~10° Gemini) — Eye of the Bull; high enterprise, tested by strict ethical integrity.",
        "Antares (~10° Sagittarius) — Heart of the Scorpion; strategic courage, tested by avoiding destructive obsession.",
        "Fomalhaut (~4° Pisces) — Mouth of the Southern Fish; spiritual vision, tested by keeping ideals pure.",
        "Spica (~24° Libra) — Ear of Wheat; scholarship, craft, justice, and protective grace."
      ]
    },
    "practice": {
      "tr": {
        "title": "Haritanda Sabit Yıldız Kavuşumlarını Kontrol Etme",
        "steps": [
          "Haritandaki dört köşe (ASC, DSC, MC, IC) ile Güneş ve Ay derecelerini bir kağıda alt alta yaz.",
          "Bu derecelerin **10° İkizler (Aldebaran)**, **0° Başak (Regulus)**, **24° Terazi (Spica)**, **10° Yay (Antares)** veya **4° Balık (Fomalhaut)** derecelerine ±1.5° yakınlıkta olup olmadığını kontrol et.",
          "Eğer bir Kraliyet Yıldızı temasın varsa, o yıldızın talep ettiği **etik sınavı** (dürüstlük, intikamdan vazgeçiş, itidal veya saf niyet) çalışma defterine kendi ilken olarak kaydet."
        ]
      },
      "en": {
        "title": "Checking Fixed Star Conjunctions in Your Chart",
        "steps": [
          "Write down the exact degrees of your four angles (ASC, DSC, MC, IC), Sun, and Moon.",
          "Check whether any of them fall within ±1.5° of **10° Gemini (Aldebaran)**, **0° Virgo (Regulus)**, **24° Libra (Spica)**, **10° Sagittarius (Antares)**, or **4° Pisces (Fomalhaut)**.",
          "If a Royal Star touches your chart, record its specific **ethical test** in your study journal."
        ]
      },
      "sv": {
        "title": "Checking Fixed Star Conjunctions in Your Chart",
        "steps": [
          "Write down the exact degrees of your four angles (ASC, DSC, MC, IC), Sun, and Moon.",
          "Check whether any of them fall within ±1.5° of **10° Gemini (Aldebaran)**, **0° Virgo (Regulus)**, **24° Libra (Spica)**, **10° Sagittarius (Antares)**, or **4° Pisces (Fomalhaut)**.",
          "If a Royal Star touches your chart, record its specific **ethical test** in your study journal."
        ]
      }
    },
    "closing": {
      "tr": "Gezegenler insanın mizacını dokur; sabit yıldızlar ise karakterin hangi sınavla taçlanacağını fısıldar.",
      "en": "Planets weave human temperament; fixed stars whisper the test by which character is crowned.",
      "sv": "Planets weave human temperament; fixed stars whisper the test by which character is crowned."
    },
    "itemImages": [
      "/astroloji/item-on-bes-behenian-sabit-yildizi-1.jpg",
      "/astroloji/item-on-bes-behenian-sabit-yildizi-2.jpg",
      "/astroloji/item-on-bes-behenian-sabit-yildizi-3.jpg",
      "/astroloji/item-on-bes-behenian-sabit-yildizi-4.jpg",
      "/astroloji/item-on-bes-behenian-sabit-yildizi-5.jpg"
    ],
    "practiceImage": "/astroloji/practice-on-bes-behenian-sabit-yildizi.jpg"
  },
  {
    "slug": "hermetik-lotlar-ve-sans-noktasi",
    "glyph": "IX",
    "image": "/astroloji/hermetik-lotlar-ve-sans-noktasi.jpg",
    "title": {
      "tr": "Hermetik Lotlar ve Arap Noktaları: Şans, Ruh ve Eros",
      "en": "Hermetic Lots and Arabic Parts: Fortune, Spirit, and Eros",
      "sv": "Hermetiska Lotter och Arabiska Punkter: Lycka, Ande och Eros"
    },
    "subtitle": {
      "tr": "Pars Fortunae (Ay'ın Lotu), Pars Solis (Güneş'in Lotu) ve Gündüz/Gece Tersinmesi",
      "en": "Pars Fortunae (Lot of the Moon), Pars Solis (Lot of the Sun), and Sect Reversal",
      "sv": "Pars Fortunae (Månens Lott), Pars Solis (Solens Lott) och Sektomvändning"
    },
    "summary": {
      "tr": "Güneş, Ay ve Yükselen arasındaki yay mesafesinden doğan hassas matematiksel odak noktaları; beden talihi ile ruh iradesinin kesişimi.",
      "en": "Sensitive mathematical points born from the arc between Sun, Moon, and Ascendant; the intersection of bodily fortune and conscious will.",
      "sv": "Matematiska brännpunkter födda ur bågen mellan Sol, Måne och Ascendent; mötet mellan kroppens öde och själens vilja."
    },
    "paragraphs": {
      "tr": [
        "Helenistik astrolojide *Klêroi* ('Paylar / Kuralar'), İslam dünyasında *Sihâm* ve Ortaçağ Avrupa'sında **Arap Noktaları (*Partes Arabicae*)** olarak bilinen sistem, haritadaki iki gezegen arasındaki açısal mesafenin üçüncü bir referans noktasına (genellikle **Yükselen / ASC**) yansıtılmasıyla hesaplanan matematiksel duyarlılık noktalarıdır.",
        "Nechepso ve Petosiris'ten Vettius Valens ve Ebû Ma'şer'e (*Albumasar*) uzanan gelenekte en temel iki nokta **Şans Noktası (*Pars Fortunae* — Ay'ın Lotu)** ve **Ruh Noktası (*Pars Spiritus* — Güneş'in Lotu)**dur. Klasik kuralda haritanın Gündüz veya Gece oluşu (*Sekt*) formülü tersine çevirir: Gündüz haritalarında Şans Noktası için **Güneş'ten Ay'a** olan mesafe Yükselen'e eklenirken (`ASC + Ay - Güneş`), Gece haritalarında Sekt önderi Ay olduğu için **Ay'dan Güneş'e** olan mesafe Yükselen'e eklenir (`ASC + Güneş - Ay`).",
        "**Şans Noktası** insanın kendi iradesi dışında başına gelen somut koşulları, beden sağlığını, maddi akışı ve doğal talihi gösterirken; tam simetriği olan **Ruh Noktası** kişinin kendi bilinçli seçimiyle, niyetiyle ve mesleki iradesiyle inşa ettiği yolu gösterir."
      ],
      "en": [
        "Known as *Klêroi* ('Lots') in Hellenistic astrology, *Sihām* in Arabic tradition, and **Arabic Parts** in medieval Europe, these sensitive mathematical points project the arc between two planets from a third reference point—usually the **Ascendant (ASC)**.",
        "From Vettius Valens to Abu Ma'shar (*Albumasar*), the two foundational points are the **Lot of Fortune (*Pars Fortunae*)** and the **Lot of Spirit (*Pars Spiritus*)**. Classical doctrine reverses the formula by sect: in a **Day chart**, Fortune is measured from Sun to Moon and projected from the Ascendant (`ASC + Moon - Sun`), whereas in a **Night chart** it is measured from Moon to Sun (`ASC + Sun - Moon`).",
        "The **Lot of Fortune** signifies the body, material circumstances, and what befalls the native through the environment, while its mirror twin, the **Lot of Spirit**, signifies conscious volition, vocation, and deliberate action."
      ],
      "sv": [
        "Kända som *Klêroi* ('Lotter') i hellenistisk astrologi och **Arabiska Punkter** under medeltiden, beräknas dessa punkter genom att projicera bågen mellan två planeter från **Ascendenten (ASC)**.",
        "De två grundpelarna är **Lyckopunkten (*Pars Fortunae*)** och **Andepunkten (*Pars Spiritus*)**, vars formel vänds beroende på om kartan är en dag- eller nattkarta.",
        "**Lyckopunkten** visar kroppen och yttre omständigheter; **Andepunkten** visar medveten vilja och livskall."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Yedi Hermetik Lot (Paulus Alexandrinus)",
          "body": "MS 4. yüzyıl astrologu Paulus Alexandrinus, yedi gezegenin her birine ait **Yedi Hermetik Lot** tanımlar: Ay'a ait *Şans*, Güneş'e ait *Ruh*, Merkür'e ait *Zorunluluk (Ananke)*, Venüs'e ait *Eros (Arzu ve Dostluk)*, Mars'a ait *Cesaret (Tolma)*, Jüpiter'e ait *Zafer (Nike)* ve Satürn'e ait *Nemesis (Gizli Sorumluluk ve Karmik Hesap)*."
        },
        {
          "heading": "Şans Noktasından Burçlarla Ev Sayımı (Zodiakal Salınım)",
          "body": "Vettius Valens, Şans Noktasının bulunduğu burcu **'İkinci bir Yükselen'** (Ay Yükseleni) gibi kabul eder. Şans Noktasından itibaren 10. burç kişinin maddi başarısını, 11. burç (*Edinim Yeri / Place of Acquisition*) ise kazancın hangi kanallardan akacağını gösterir."
        }
      ],
      "en": [
        {
          "heading": "The Seven Hermetic Lots of Paulus Alexandrinus",
          "body": "4th-century astrologer Paulus Alexandrinus codifies **Seven Hermetic Lots**, one for each planet: *Fortune* (Moon), *Spirit* (Sun), *Necessity* (Mercury), *Eros* (Venus), *Courage* (Mars), *Victory* (Jupiter), and *Nemesis* (Saturn)."
        },
        {
          "heading": "Fortune as a Lunar Ascendant and the 11th Place of Acquisition",
          "body": "Vettius Valens treats the sign of the Lot of Fortune as a **Lunar Ascendant**, counting the 11th sign from Fortune as the *Place of Acquisition* indicating how material sustenance flows."
        }
      ],
      "sv": [
        {
          "heading": "The Seven Hermetic Lots of Paulus Alexandrinus",
          "body": "4th-century astrologer Paulus Alexandrinus codifies **Seven Hermetic Lots**, one for each planet: *Fortune* (Moon), *Spirit* (Sun), *Necessity* (Mercury), *Eros* (Venus), *Courage* (Mars), *Victory* (Jupiter), and *Nemesis* (Saturn)."
        },
        {
          "heading": "Fortune as a Lunar Ascendant and the 11th Place of Acquisition",
          "body": "Vettius Valens treats the sign of the Lot of Fortune as a **Lunar Ascendant**, counting the 11th sign from Fortune as the *Place of Acquisition* indicating how material sustenance flows."
        }
      ]
    },
    "items": {
      "tr": [
        "Şans Noktası (Pars Fortunae / ⊗) — Ay'ın Lotu; fiziksel beden, doğal refah, çevre koşulları ve somut talih.",
        "Ruh Noktası (Pars Spiritus / ☉) — Güneş'in Lotu; bilinçli irade, karakterin seçimi, meslek ve içsel amaç.",
        "Eros Lotu (Venüs) — Gönül bağları, estetik çekim, dostluk ve ruhun neyi sevdiği.",
        "Zafer Lotu (Nike / Jüpiter) — Güven, başarı, itibar ve girişimlerin meyve verdiği alan.",
        "Edinim Evi (Şans'tan 11. Burç) — Valens geleneğinde bereket ve rızkın aktığı ana burç kapısı."
      ],
      "en": [
        "Lot of Fortune (Pars Fortunae / ⊗) — Lot of the Moon; body, environment, and tangible circumstance.",
        "Lot of Spirit (Pars Spiritus / ☉) — Lot of the Sun; conscious will, vocation, and inner purpose.",
        "Lot of Eros (Venus) — Affection, aesthetic magnetism, friendship, and what the soul delights in.",
        "Lot of Victory (Nike / Jupiter) — Trust, achievement, and fruitful enterprise.",
        "Place of Acquisition (11th from Fortune) — Valens's key house of material flow and sustenance."
      ],
      "sv": [
        "Lot of Fortune (Pars Fortunae / ⊗) — Lot of the Moon; body, environment, and tangible circumstance.",
        "Lot of Spirit (Pars Spiritus / ☉) — Lot of the Sun; conscious will, vocation, and inner purpose.",
        "Lot of Eros (Venus) — Affection, aesthetic magnetism, friendship, and what the soul delights in.",
        "Lot of Victory (Nike / Jupiter) — Trust, achievement, and fruitful enterprise.",
        "Place of Acquisition (11th from Fortune) — Valens's key house of material flow and sustenance."
      ]
    },
    "practice": {
      "tr": {
        "title": "Şans Noktanı ve Edinim Burcunu Bulma",
        "steps": [
          "Haritanın Gündüz mü (Güneş ufuk üstünde) yoksa Gece mi (Güneş ufuk altında) olduğunu belirle.",
          "Şans Noktanın (⊗) bulunduğu burcu ve bu burcun **yönetici gezegeninin** haritada hangi evde/burçta durduğunu bul.",
          "Şans Noktanın bulunduğu burcu '1' sayarak zodyak sırasıyla **11. burca (Edinim Burcu)** ilerle; bu burcun temalarını kendi doğal bereket kanalın olarak incele."
        ]
      },
      "en": {
        "title": "Locating Your Lot of Fortune and Place of Acquisition",
        "steps": [
          "Determine whether your chart is Diurnal (Sun above horizon) or Nocturnal (Sun below horizon).",
          "Find the sign of your Lot of Fortune (⊗) and locate its **domicile ruler** in your chart.",
          "Count 11 signs forward from the sign of Fortune to identify your **Place of Acquisition**."
        ]
      },
      "sv": {
        "title": "Locating Your Lot of Fortune and Place of Acquisition",
        "steps": [
          "Determine whether your chart is Diurnal (Sun above horizon) or Nocturnal (Sun below horizon).",
          "Find the sign of your Lot of Fortune (⊗) and locate its **domicile ruler** in your chart.",
          "Count 11 signs forward from the sign of Fortune to identify your **Place of Acquisition**."
        ]
      }
    },
    "closing": {
      "tr": "Şans Noktası rüzgarın nereden estiğini, Ruh Noktası ise yelkeni hangi yöne kırdığını gösterir.",
      "en": "The Lot of Fortune shows whence the wind blows; the Lot of Spirit shows how you set the sail.",
      "sv": "The Lot of Fortune shows whence the wind blows; the Lot of Spirit shows how you set the sail."
    },
    "itemImages": [
      "/astroloji/item-hermetik-lotlar-ve-sans-noktasi-1.jpg",
      "/astroloji/item-hermetik-lotlar-ve-sans-noktasi-2.jpg",
      "/astroloji/item-hermetik-lotlar-ve-sans-noktasi-3.jpg",
      "/astroloji/item-hermetik-lotlar-ve-sans-noktasi-4.jpg",
      "/astroloji/item-hermetik-lotlar-ve-sans-noktasi-5.jpg"
    ],
    "practiceImage": "/astroloji/practice-hermetik-lotlar-ve-sans-noktasi.jpg"
  },
  {
    "slug": "antiscia-ve-gundonumu-aynasi",
    "glyph": "X",
    "image": "/astroloji/antiscia-ve-gundonumu-aynasi.jpg",
    "title": {
      "tr": "Antiscia ve Contra-Antiscia: Gündönümü Aynası",
      "en": "Antiscia and Contra-Antiscia: The Solstice Mirror",
      "sv": "Antiscia och Contra-Antiscia: Solståndsspegeln"
    },
    "subtitle": {
      "tr": "0° Yengeç – 0° Oğlak Ekseni, Eşit Gün-Gece Uzunluğu ve Gizli Açı Bağları",
      "en": "The 0° Cancer – 0° Capricorn Axis, Equal Daylight, and Hidden Symmetries",
      "sv": "0° Kräftan – 0° Stenbocken-axeln, Lika Dagslängd och Dolda Symmetrier"
    },
    "summary": {
      "tr": "Klasik görünür açılar (üçgen, kare) olmadan birbirini gündönümü aynasında gören burç çiftleri ve eşit ışık simetrisi.",
      "en": "Sign pairs beholding one another across the solstice mirror without standard aspects, bound by equal length of daylight.",
      "sv": "Teckenpar som speglar varandra över solståndsaxeln genom lika dagslängd."
    },
    "paragraphs": {
      "tr": [
        "Klasik astrolojide iki gezegen arasında görünür bir Ptolemik açı (60°, 90°, 120°, 180°) olmasa bile, eğer bu iki gezegen **Gündönümü Ekseni (0° Yengeç – 0° Oğlak)** etrafında eşit uzaklıktaysa birbirlerinin **Antiscia ('Yansıma / Gölge')** derecesinde dururlar.",
        "Bu tekniğin astronomik temeli son derece somuttur: Güneş 0° Yengeç'teki yaz gündönümüne yaklaşırken (örneğin **15° İkizler**'deyken) gündüz süresi ne kadarsa, gündönümünden uzaklaşırken (**15° Yengeç**'teyken) de gündüz süresi saniyesi saniyesine aynıdır. Yani 15° İkizler ile 15° Yengeç **aynı ışığı ve aynı gölge boyunu** paylaşan iki ayna ikizidir.",
        "Firmicus Maternus ve William Lilly'nin vurguladığı gibi, **Antiscia** gizli bir kavuşum (0° — destekleyici, perde arkasından yardım eden simetri), tam karşısındaki **Contra-Antiscia** (0° Koç – 0° Terazi ekinoks eksenine göre simetri) ise gizli bir karşıtlık (180° — dengeye zorlayan yüzleşme) gibi çalışır."
      ],
      "en": [
        "Even when two planets share no standard Ptolemaic aspect, if they stand equidistant from the **Solstice Axis (0° Cancer – 0° Capricorn)**, they occupy each other's **Antiscia ('Shadow / Mirror reflection')**.",
        "The astronomical foundation is exact: when the Sun approaches the summer solstice at **15° Gemini**, the length of daylight and solar altitude are identical to when it departs the solstice at **15° Cancer**. The two degrees share the same light.",
        "As Firmicus Maternus and William Lilly teach, **Antiscia** operates like a hidden sympathetic conjunction, whereas **Contra-Antiscia** (mirrored across the 0° Aries – 0° Libra equinox axis) acts like a subtle opposition."
      ],
      "sv": [
        "Även när två planeter saknar vanlig aspekt befinner de sig i varandras **Antiscia ('Spegelbild / Skugga')** om de ligger på exakt samma avstånd från **Solståndsaxeln (0° Kräftan – 0° Stenbocken)**.",
        "Astronomiskt delar två antisciagrader (t.ex. **15° Tvillingarna** och **15° Kräftan**) exakt samma dagslängd och solhöjd.",
        "**Antiscia** verkar som en dold, stödjande konjunktion, medan **Contra-Antiscia** verkar som en dold opposition."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Altı Antiscia Burç Çifti ve 30° Toplam Kuralı",
          "body": "Gündönümü aynasında birbirini yansıtan altı çift şunlardır: **İkizler ↔ Yengeç**, **Boğa ↔ Aslan**, **Koç ↔ Başak**, **Balık ↔ Terazi**, **Kova ↔ Akrep** ve **Oğlak ↔ Yay**. Herhangi bir derecenin Antiscia karşılığını bulmak için onu **30°'den çıkarmanız** yeterlidir: Örneğin `12° Boğa`nın Antiscia noktası `18° Aslan`dır (`12° + 18° = 30°`)."
        },
        {
          "heading": "Haritada ve Sinastride Gizli Köprüler",
          "body": "İlk bakışta birbiriyle hiçbir bağlantısı yokmuş gibi görünen iki burç (örneğin Boğa ile Aslan arasında normalde kare açı vardır, ancak `25° Boğa` ile `5° Aslan` açı dışıdır) Antiscia ile tam kavuşum kurar. İki kişinin haritasında (Sinastri) Güneş–Ay veya Venüs–Yükselen Antiscia bağları, kelimelerle açıklanamayan 'tanıdıklık' hissini verir."
        }
      ],
      "en": [
        {
          "heading": "The Six Antiscia Sign Pairs and the 30-Degree Rule",
          "body": "The six mirrored pairs across the solstice axis are **Gemini ↔ Cancer**, **Taurus ↔ Leo**, **Aries ↔ Virgo**, **Pisces ↔ Libra**, **Aquarius ↔ Scorpio**, and **Capricorn ↔ Sagittarius**. The exact degree always sums to **30°**: thus the antiscion of `12° Taurus` is `18° Leo` (`12° + 18° = 30°`)."
        },
        {
          "heading": "Hidden Bridges in Natal Charts and Synastry",
          "body": "Planets connected by tight antiscia (±1°–2°) act as secret allies behind the scenes, often explaining deep unspoken rapport in synastry."
        }
      ],
      "sv": [
        {
          "heading": "The Six Antiscia Sign Pairs and the 30-Degree Rule",
          "body": "The six mirrored pairs across the solstice axis are **Gemini ↔ Cancer**, **Taurus ↔ Leo**, **Aries ↔ Virgo**, **Pisces ↔ Libra**, **Aquarius ↔ Scorpio**, and **Capricorn ↔ Sagittarius**. The exact degree always sums to **30°**: thus the antiscion of `12° Taurus` is `18° Leo` (`12° + 18° = 30°`)."
        },
        {
          "heading": "Hidden Bridges in Natal Charts and Synastry",
          "body": "Planets connected by tight antiscia (±1°–2°) act as secret allies behind the scenes, often explaining deep unspoken rapport in synastry."
        }
      ]
    },
    "items": {
      "tr": [
        "İkizler ↔ Yengeç & Oğlak ↔ Yay — Gündönümü ekseninin hemen iki yanındaki komşu ayna çiftleri.",
        "Boğa ↔ Aslan & Kova ↔ Akrep — Sabit burçların birbirine gizli kavuşumla bağlanan ışık ikizleri.",
        "Koç ↔ Başak & Balık ↔ Terazi — Normalde birbirini görmeyen (150° / Inconjunct) burçların gizli gündönümü köprüsü.",
        "30° Tamamlama Formülü — Bir gezegenin burç içi derecesini 30°'den çıkarıp ayna burcuna yerleştirme hesabı.",
        "Contra-Antiscia — Antiscia noktasının tam 180° karşısındaki derece (Ekinoks aynası)."
      ],
      "en": [
        "Gemini ↔ Cancer & Capricorn ↔ Sagittarius — Adjacent mirror pairs flanking the solstice axis.",
        "Taurus ↔ Leo & Aquarius ↔ Scorpio — Fixed signs linked by hidden solstice symmetry.",
        "Aries ↔ Virgo & Pisces ↔ Libra — Sign pairs normally inconjunct (150°), bridged by equal daylight.",
        "The 30° Complement Rule — Subtracting a planet's degree from 30° in its mirror sign.",
        "Contra-Antiscia — The point exactly 180° opposite the antiscion (Equinox mirror)."
      ],
      "sv": [
        "Gemini ↔ Cancer & Capricorn ↔ Sagittarius — Adjacent mirror pairs flanking the solstice axis.",
        "Taurus ↔ Leo & Aquarius ↔ Scorpio — Fixed signs linked by hidden solstice symmetry.",
        "Aries ↔ Virgo & Pisces ↔ Libra — Sign pairs normally inconjunct (150°), bridged by equal daylight.",
        "The 30° Complement Rule — Subtracting a planet's degree from 30° in its mirror sign.",
        "Contra-Antiscia — The point exactly 180° opposite the antiscion (Equinox mirror)."
      ]
    },
    "practice": {
      "tr": {
        "title": "Güneş ve Ay Derecenin Gölge İkizini (Antiscia) Hesaplama",
        "steps": [
          "Güneş ve Ay'ının bulunduğu burcu ve tam derecesini yaz (ör. `11° Koç`).",
          "Dereceyi 30'dan çıkar (`30 - 11 = 19°`) ve burcun gündönümü ikizini bul (`Koç ↔ Başak` olduğu için `19° Başak`).",
          "Haritanda bu Antiscia derecelerinin (±2° orb ile) başka bir gezegenin veya köşe noktasının üzerine düşüp düşmediğini kontrol et."
        ]
      },
      "en": {
        "title": "Calculating the Antiscia of Your Sun and Moon",
        "steps": [
          "Write down the sign and degree of your Sun and Moon (e.g., `11° Aries`).",
          "Subtract the degree from 30 (`30 - 11 = 19°`) and place it in the solstice mirror sign (`Aries ↔ Virgo` gives `19° Virgo`).",
          "Check whether any natal planet or angle sits within ±2° of your Sun or Moon's antiscion."
        ]
      },
      "sv": {
        "title": "Calculating the Antiscia of Your Sun and Moon",
        "steps": [
          "Write down the sign and degree of your Sun and Moon (e.g., `11° Aries`).",
          "Subtract the degree from 30 (`30 - 11 = 19°`) and place it in the solstice mirror sign (`Aries ↔ Virgo` gives `19° Virgo`).",
          "Check whether any natal planet or angle sits within ±2° of your Sun or Moon's antiscion."
        ]
      }
    },
    "closing": {
      "tr": "Gözün görmediği yerde ışık kendi ikizini gündönümü aynasında bulur.",
      "en": "Where standard sight sees no aspect, light finds its twin in the solstice mirror.",
      "sv": "Where standard sight sees no aspect, light finds its twin in the solstice mirror."
    },
    "itemImages": [
      "/astroloji/item-antiscia-ve-gundonumu-aynasi-1.jpg",
      "/astroloji/item-antiscia-ve-gundonumu-aynasi-2.jpg",
      "/astroloji/item-antiscia-ve-gundonumu-aynasi-3.jpg",
      "/astroloji/item-antiscia-ve-gundonumu-aynasi-4.jpg",
      "/astroloji/item-antiscia-ve-gundonumu-aynasi-5.jpg"
    ],
    "practiceImage": "/astroloji/practice-antiscia-ve-gundonumu-aynasi.jpg"
  },
  {
    "slug": "firdaria-ve-zaman-yoneticileri",
    "glyph": "XI",
    "image": "/astroloji/firdaria-ve-zaman-yoneticileri.jpg",
    "title": {
      "tr": "Firdaria, Yıllık Profeksiyon ve Zaman Yöneticileri",
      "en": "Firdaria, Annual Profections, and Time Lords",
      "sv": "Firdaria, Årliga Profektioner och Tidshärskare"
    },
    "subtitle": {
      "tr": "Kronokrator (Dönem Efendisi), 12 Yıllık Profeksiyon Çarkı ve Pers-Arap Firdaria Döngüsü",
      "en": "Chronocrators (Time Lords), the 12-Year Profection Wheel, and the Persian Firdaria Cycle",
      "sv": "Kronokratorer (Tidshärskare), 12-Åriga Profektionshjulet och Persisk Firdaria"
    },
    "summary": {
      "tr": "Doğum haritasındaki vaatlerin hangi yaşta ve hangi gezegenin nöbetinde uyanacağını gösteren klasik zamanlama teknikleri.",
      "en": "Classical timing techniques revealing in which year and under which planetary watch natal promises awaken.",
      "sv": "Klassiska tidstekniker som visar under vilket år och vilken planetvakt horoskopets löften vaknar."
    },
    "paragraphs": {
      "tr": [
        "Klasik astrolojinin en temel ilkelerinden biri şudur: **Doğum haritasındaki tüm potansiyeller aynı anda aktif değildir.** Nasıl ki bir tiyatro sahnesinde bütün oyuncular aynı saniyede konuşmazsa, haritadaki gezegenler de yaşamın farklı yıllarında sırayla **Zaman Yöneticisi (*Kronokrator / Time Lord*)** olarak sahnenin merkezine gelir.",
        "En pratik ve güçlü Helenistik zamanlama yöntemi **Yıllık Profeksiyon (*Annual Profections*)** tekniğidir: Doğum anında (0 yaş) Yükselen burç (1. Ev) aktiftir; her doğum gününde saat yönünün tersine (zodyak sırasıyla) bir sonraki eve geçilir. **12, 24, 36, 48, 60 ve 72. yaşlar** yeniden 1. Evin uyanış yıllarıdır. O yıl hangi burç aktifse, o burcun yöneticisi **Yılın Efendisi (*Lord of the Year*)** olur.",
        "Pers (*Sâsânî*) ve Arap geleneğinden gelen **Firdaria** ise insan ömrünü **75 yıllık** büyük gezegen bölümlerine (*Dârî*) ayırır: Gündüz haritalarında yaşam **Güneş (10 yıl)** ile başlar, ardından **Venüs (8), Merkür (13), Ay (9), Satürn (11), Jüpiter (12), Mars (7)** ve Ay Düğümleri gelir; Gece haritalarında ise sıra **Ay (9 yıl)** ile başlar."
      ],
      "en": [
        "A foundational axiom of traditional astrology states that **not all natal potentials are active at once**. Planets step onto center stage in sequence as **Time Lords (*Chronocrators*)** governing specific chapters of life.",
        "The most immediate Hellenistic method is **Annual Profections**: at birth (age 0), the 1st House is active, advancing one sign/house per birthday in zodiacal order. Ages **12, 24, 36, 48, 60, and 72** return to the 1st House. The domicile ruler of the activated sign becomes the **Lord of the Year**.",
        "From Persian (*Sasanian*) and Arabic astrology comes **Firdaria**, dividing a 75-year span into planetary chapters: Diurnal charts begin with the **Sun (10 years)** followed by **Venus (8), Mercury (13), Moon (9), Saturn (11), Jupiter (12), Mars (7)**, and the Nodes; Nocturnal charts begin with the **Moon (9 years)**."
      ],
      "sv": [
        "En grundsats i klassisk astrologi är att **inte alla natala löften är aktiva samtidigt**; planeterna träder fram i tur och ordning som **Tidshärskare (*Kronokratorer*)**.",
        "I **Årliga Profektioner** flyttas fokus ett hus per födelsedag (åldrarna **12, 24, 36, 48, 60, 72** aktiverar 1:a huset igen), och tecknets härskare blir **Årets Herre**.",
        "Persisk-arabisk **Firdaria** delar in en 75-årscykel i planetperioder som styrs av kartans sekt."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Yılın Efendisi (Lord of the Year) ve Transit Anahtarı",
          "body": "Güncel gökyüzü transitlerini okurken herkes aynı gezegen geçişinden aynı şiddette etkilenmez. Eğer bu yıl senin **Yılın Efendisi** gezegenin Jüpiter ise, gökyüzünde Jüpiter'in yaptığı her açı ve haritandaki Jüpiter'in aldığı her transit o yılın ana olaylarını tetikler."
        },
        {
          "heading": "Firdaria Alt Dönemleri (Yedide Birlik Nöbetler)",
          "body": "Her ana Firdaria dönemi kendi içinde yedi eşit alt döneme bölünür. Örneğin 10 yıllık Güneş Firdaria'sının ilk 1.4 yılı Güneş–Güneş, ikinci 1.4 yılı Güneş–Venüs, üçüncü 1.4 yılı Güneş–Merkür alt dönemidir."
        }
      ],
      "en": [
        {
          "heading": "The Lord of the Year as the Key to Transits",
          "body": "Transits do not strike every chart equally; whichever planet serves as your **Lord of the Year** by profection acts as the primary receiver and trigger for the year's events."
        },
        {
          "heading": "Firdaria Sub-Periods",
          "body": "Each major Firdaria period is subdivided into seven equal sub-periods following the Chaldean sequence, showing the shifting tone within a multi-year chapter."
        }
      ],
      "sv": [
        {
          "heading": "The Lord of the Year as the Key to Transits",
          "body": "Transits do not strike every chart equally; whichever planet serves as your **Lord of the Year** by profection acts as the primary receiver and trigger for the year's events."
        },
        {
          "heading": "Firdaria Sub-Periods",
          "body": "Each major Firdaria period is subdivided into seven equal sub-periods following the Chaldean sequence, showing the shifting tone within a multi-year chapter."
        }
      ]
    },
    "items": {
      "tr": [
        "1. Ev Profeksiyon Yılları (0, 12, 24, 36, 48, 60, 72 Yaş) — Kişisel kimlik, beden ve yeni 12 yıllık döngü başlangıcı.",
        "10. Ev Profeksiyon Yılları (9, 21, 33, 45, 57, 69 Yaş) — Meslek, unvan, kamusal görünürlük ve zirve eşikleri.",
        "Yılın Efendisi (Lord of the Year) — Aktif profeksiyon burcunu yöneten ve o yılın dizginlerini tutan gezegen.",
        "Gündüz Firdaria Sırası — Güneş (10) → Venüs (8) → Merkür (13) → Ay (9) → Satürn (11) → Jüpiter (12) → Mars (7).",
        "Gece Firdaria Sırası — Ay (9) → Satürn (11) → Jüpiter (12) → Mars (7) → Güneş (10) → Venüs (8) → Merkür (13)."
      ],
      "en": [
        "1st House Profection Ages (0, 12, 24, 36, 48, 60, 72) — Identity, body, and reset of the 12-year wheel.",
        "10th House Profection Ages (9, 21, 33, 45, 57, 69) — Vocation, public standing, and career turning points.",
        "Lord of the Year — The domicile ruler of the profected sign holding the reins for the year.",
        "Diurnal Firdaria Sequence — Sun (10) → Venus (8) → Mercury (13) → Moon (9) → Saturn (11) → Jupiter (12) → Mars (7).",
        "Nocturnal Firdaria Sequence — Moon (9) → Saturn (11) → Jupiter (12) → Mars (7) → Sun (10) → Venus (8) → Mercury (13)."
      ],
      "sv": [
        "1st House Profection Ages (0, 12, 24, 36, 48, 60, 72) — Identity, body, and reset of the 12-year wheel.",
        "10th House Profection Ages (9, 21, 33, 45, 57, 69) — Vocation, public standing, and career turning points.",
        "Lord of the Year — The domicile ruler of the profected sign holding the reins for the year.",
        "Diurnal Firdaria Sequence — Sun (10) → Venus (8) → Mercury (13) → Moon (9) → Saturn (11) → Jupiter (12) → Mars (7).",
        "Nocturnal Firdaria Sequence — Moon (9) → Saturn (11) → Jupiter (12) → Mars (7) → Sun (10) → Venus (8) → Mercury (13)."
      ]
    },
    "practice": {
      "tr": {
        "title": "Bu Yılki Profeksiyon Evini ve Yılın Efendisini Hesaplama",
        "steps": [
          "Mevcut yaşını **12'ye böl** ve kalan sayıya **1 ekle** (örneğin 30 yaş için: `30 ÷ 12` kalan `6`, `6 + 1 = 7. Ev`).",
          "Haritanda bu evin hangi burca düştüğünü bul; o burcun klasik yöneticisi bu doğum gününden bir sonrakine kadar senin **Yılın Efendisi** gezegenindir.",
          "Yılın Efendisi gezegenin doğum haritanda hangi evde duruyorsa, o iki evin konularını bu yılın ana gündemi olarak birleştir."
        ]
      },
      "en": {
        "title": "Calculating Your Current Profection House and Lord of the Year",
        "steps": [
          "Divide your current age by **12** and add **1** to the remainder (e.g., age 30: `30 mod 12 = 6`, `6 + 1 = 7th House`).",
          "Identify the sign on that house; its traditional ruler is your **Lord of the Year** until your next birthday.",
          "Synthesize the themes of the profected house with the natal house occupied by the Lord of the Year."
        ]
      },
      "sv": {
        "title": "Calculating Your Current Profection House and Lord of the Year",
        "steps": [
          "Divide your current age by **12** and add **1** to the remainder (e.g., age 30: `30 mod 12 = 6`, `6 + 1 = 7th House`).",
          "Identify the sign on that house; its traditional ruler is your **Lord of the Year** until your next birthday.",
          "Synthesize the themes of the profected house with the natal house occupied by the Lord of the Year."
        ]
      }
    },
    "closing": {
      "tr": "Her tohum doğum anında toprağa düşer; ama her ağacın çiçek açma mevsimini Zaman Efendisi belirler.",
      "en": "Every seed is planted at birth, yet the Time Lord appoints the season in which each tree blossoms.",
      "sv": "Every seed is planted at birth, yet the Time Lord appoints the season in which each tree blossoms."
    },
    "itemImages": [
      "/astroloji/item-firdaria-ve-zaman-yoneticileri-1.jpg",
      "/astroloji/item-firdaria-ve-zaman-yoneticileri-2.jpg",
      "/astroloji/item-firdaria-ve-zaman-yoneticileri-3.jpg",
      "/astroloji/item-firdaria-ve-zaman-yoneticileri-4.jpg",
      "/astroloji/item-firdaria-ve-zaman-yoneticileri-5.jpg"
    ],
    "practiceImage": "/astroloji/practice-firdaria-ve-zaman-yoneticileri.jpg"
  },
  {
    "slug": "secim-astrolojisi-katarchic-ihtiyarat",
    "glyph": "XII",
    "image": "/astroloji/secim-astrolojisi-katarchic-ihtiyarat.jpg",
    "title": {
      "tr": "Seçim Astrolojisi (Katarchic / İhtiyarat): Doğru Zamanı Seçmek",
      "en": "Electional Astrology (Katarchic / Ikhtiyarat): Choosing the Right Moment",
      "sv": "Elektionsastrologi (Katarchic): Konsten att Välja Rätt Ögonblick"
    },
    "subtitle": {
      "tr": "Dorotheus'tan İbn Ezra'ya Başlangıç Anının Haritasını Kurma Kuralları",
      "en": "From Dorotheus to Ibn Ezra: Rules for Crafting the Chart of an Inceptional Moment",
      "sv": "Från Dorotheus till Ibn Ezra: Regler för att Välja ett Verks Födelseögonblick"
    },
    "summary": {
      "tr": "Bir işe, yolculuğa, sözleşmeye veya esere başlarken gökyüzü akıntısını arkaya alma sanatı; Ay'ın boşlukta olmaması ve Yükselen'in gücü.",
      "en": "The art of aligning a new venture, contract, or work with celestial currents; fortifying the Ascendant and the applying Moon.",
      "sv": "Konsten att inleda ett verk i medström med himlen genom att stärka Ascendenten och Månen."
    },
    "paragraphs": {
      "tr": [
        "Klasik astrolojinin üç ana dalından biri olan **Seçim Astrolojisi** — Yunanca *Katarche* ('Başlangıç / İlk Adım'), Arapça ve Osmanlıca **İhtiyârât ('Seçimler')** — bir eylemin doğduğu anın aynı zamanda o eylemin 'doğum haritası' olduğu ilkesine dayanır.",
        "Sidonlu Dorotheus'un *Carmen Astrologicum* (V. Kitap) eserinden Sehl bin Bişr ve William Lilly'ye kadar tüm ustalar aynı omurgada birleşir: Gökyüzünü değiştiremezsiniz ama **tohumu toprağa hangi saatte bırakacağınızı** seçebilirsiniz. Fırtınada yelken açmak yerine uygun rüzgarı bekleyen bir kaptan gibi, Seçim Astrolojisi de niyet ile zamanın ritmini uyumlar.",
        "Bir seçim haritasında en kritik iki aktör **Yükselen Burç (ve Yöneticisi)** ile **Ay**dır. Çünkü Yükselen işi başlatan kişiyi ve başlangıç ivmesini, Ay ise işin zaman içinde nasıl akıp sonuçlanacağını temsil eder."
      ],
      "en": [
        "**Electional Astrology**—Greek *Katarche* ('Initiative / Beginning'), Arabic **Ikhtiyārāt ('Choices')**—rests on the principle that the moment an enterprise is begun serves as the natal chart of that enterprise.",
        "From Dorotheus of Sidon (*Carmen Astrologicum*, Book V) to Sahl ibn Bishr and William Lilly, masters agree: like a navigator waiting for a fair wind rather than sailing into a squall, electional astrology harmonizes human intention with celestial timing.",
        "The two supreme actors in any electional chart are the **Ascendant (and its ruler)** and the **Moon**—the Ascendant signifying the initiator, and the Moon carrying the unfolding and outcome of the matter."
      ],
      "sv": [
        "**Elektionsastrologi** (*Katarche* / *Ikhtiyārāt*) vilar på principen att det ögonblick då ett verk inleds utgör verkets födelsekarta.",
        "Från Dorotheus av Sidon till Sahl ibn Bishr och William Lilly är de två viktigaste faktorerna i varje elektionskarta **Ascendenten (och dess härskare)** samt **Månen**."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Altın Kural 1: Ay'ın Durumu ve Boşlukta Olmaması (Void of Course)",
          "body": "Yeni ve somut sonuç beklenen bir işe başlarken **Ay Boşlukta (*Void of Course*)** olmamalıdır; yani Ay bulunduğu burçtan çıkmadan önce başka bir gezegenle temel bir açı (özellikle Jüpiter veya Venüs ile 60° / 120° uyumlu açı) kurmalıdır. Ayrıca Dolunay ve Tutulma saatlerinden kaçınılır."
        },
        {
          "heading": "Altın Kural 2: Yükselen'i ve Hedef Evi Güçlendirmek",
          "body": "İşin doğasına uygun burç ufukta yükseltilir: Uzun ömürlü bir bina, şirket veya vakıf için **Sabit burçlar** (Boğa, Aslan,Kova); hızlı tamamlanması gereken bir yolculuk veya görüşme için **Öncü/Değişken burçlar** seçilir. İşin konusu hangi evse (ör. ticaret için 2./11. ev, yayın ve akademi için 9. ev) o evin yöneticisi güçlü ve köşe evlerde tutulur."
        }
      ],
      "en": [
        {
          "heading": "Golden Rule I: The Applying Moon (Avoiding Void of Course)",
          "body": "When initiating a venture meant to bear tangible fruit, the **Moon must not be Void of Course**; she should be applying to a harmonious aspect (60° or 120°) with a dignified planet, avoiding eclipses and the combust path (*Via Combusta*)."
        },
        {
          "heading": "Golden Rule II: Fortifying the Ascendant and the Significator",
          "body": "Match the rising sign modality to the purpose: **Fixed signs** for enduring foundations; **Cardinal or Mutable signs** for swift transitions, while fortifying the ruler of the house governing the enterprise."
        }
      ],
      "sv": [
        {
          "heading": "Golden Rule I: The Applying Moon (Avoiding Void of Course)",
          "body": "When initiating a venture meant to bear tangible fruit, the **Moon must not be Void of Course**; she should be applying to a harmonious aspect (60° or 120°) with a dignified planet, avoiding eclipses and the combust path (*Via Combusta*)."
        },
        {
          "heading": "Golden Rule II: Fortifying the Ascendant and the Significator",
          "body": "Match the rising sign modality to the purpose: **Fixed signs** for enduring foundations; **Cardinal or Mutable signs** for swift transitions, while fortifying the ruler of the house governing the enterprise."
        }
      ]
    },
    "items": {
      "tr": [
        "Yükselen ve Yöneticisi — İşi başlatan kişiyi ve girişimin omurgasını temsil eder; zararlı evlerden (6, 8, 12) uzak tutulur.",
        "Ay'ın Sonraki Açısı (Applying Aspect) — İşin nasıl gelişeceğini ve ilk kiminle/neyle karşılaşacağını gösterir.",
        "Ay'ın Son Açısı (Last Lunar Aspect) — Girişimin nihai olarak nasıl bağlanacağını ve mühürleneceğini gösterir.",
        "Sabit / Öncü / Değişken Seçimi — Kalıcı eserler için Sabit, hızlı başlangıç için Öncü, esneklik için Değişken yükselen.",
        "Doğum Haritasıyla Uyum (Kök Kuralı) — Seçilen anın Yükseleni, kişinin kendi doğum haritasındaki Yükselen veya 10. eviyle uyumlu olmalıdır."
      ],
      "en": [
        "Ascendant and Its Ruler — Signifies the initiator and structural spine; kept free from houses 6, 8, and 12.",
        "Moon's Next Applying Aspect — Shows how the venture unfolds and its immediate reception.",
        "Moon's Final Aspect Before Leaving Sign — Indicates the ultimate outcome of the matter.",
        "Modality Selection — Fixed rising sign for permanence, Cardinal for swift launch, Mutable for adaptability.",
        "Natal Resonance (Root Rule) — The elected Ascendant must harmonize with the native's natal Ascendant or Midheaven."
      ],
      "sv": [
        "Ascendant and Its Ruler — Signifies the initiator and structural spine; kept free from houses 6, 8, and 12.",
        "Moon's Next Applying Aspect — Shows how the venture unfolds and its immediate reception.",
        "Moon's Final Aspect Before Leaving Sign — Indicates the ultimate outcome of the matter.",
        "Modality Selection — Fixed rising sign for permanence, Cardinal for swift launch, Mutable for adaptability.",
        "Natal Resonance (Root Rule) — The elected Ascendant must harmonize with the native's natal Ascendant or Midheaven."
      ]
    },
    "practice": {
      "tr": {
        "title": "Önemli Bir Adım İçin 3 Maddelik Hızlı Zaman Seçimi",
        "steps": [
          "Önce o gün **Ay'ın hangi burçta olduğunu** ve burç değiştirmeden önce (Boşluğa girmeden) açı yapıp yapmadığını kontrol et.",
          "Kuracağın iş kalıcı olsun istiyorsan gün içinde **Boğa veya Aslan'ın doğu ufkunda yükseldiği** iki saatlik dilimi seç.",
          "İmza veya başlangıç anını, o günün yöneticisiyle uyumlu bir **Gezegen Saatine (ör. Güneş, Jüpiter veya Venüs saati)** denk getir."
        ]
      },
      "en": {
        "title": "Three-Step Quick Election for an Important Initiative",
        "steps": [
          "Verify the **Moon's sign** and ensure she is not Void of Course.",
          "For an enduring project, select the two-hour window when a dignified **Fixed or Benefic-ruled sign rises**.",
          "Align the exact launch minute with a supportive **Planetary Hour** (Sun, Jupiter, or Venus)."
        ]
      },
      "sv": {
        "title": "Three-Step Quick Election for an Important Initiative",
        "steps": [
          "Verify the **Moon's sign** and ensure she is not Void of Course.",
          "For an enduring project, select the two-hour window when a dignified **Fixed or Benefic-ruled sign rises**.",
          "Align the exact launch minute with a supportive **Planetary Hour** (Sun, Jupiter, or Venus)."
        ]
      }
    },
    "closing": {
      "tr": "Bilge çiftçi mevsimi zorlamaz; tohumu toprağın ve göğün kabul ettiği saatte bırakır.",
      "en": "The wise sower does not force the season, but drops the seed in the hour welcomed by earth and sky.",
      "sv": "The wise sower does not force the season, but drops the seed in the hour welcomed by earth and sky."
    },
    "itemImages": [
      "/astroloji/item-secim-astrolojisi-katarchic-ihtiyarat-1.jpg",
      "/astroloji/item-secim-astrolojisi-katarchic-ihtiyarat-2.jpg",
      "/astroloji/item-secim-astrolojisi-katarchic-ihtiyarat-3.jpg",
      "/astroloji/item-secim-astrolojisi-katarchic-ihtiyarat-4.jpg",
      "/astroloji/item-secim-astrolojisi-katarchic-ihtiyarat-5.jpg"
    ],
    "practiceImage": "/astroloji/practice-secim-astrolojisi-katarchic-ihtiyarat.jpg"
  },
  {
    "slug": "saat-astrolojisi-horary-mesail",
    "glyph": "XIII",
    "image": "/astroloji/saat-astrolojisi-horary-mesail.jpg",
    "title": {
      "tr": "Saat Astrolojisi (Horary / Mesail): Sorunun Doğduğu An",
      "en": "Horary Astrology (Mesail): The Birth Chart of a Question",
      "sv": "Horary-astrologi (Frågeastrologi): Frågans Födelseögonblick"
    },
    "subtitle": {
      "tr": "Mâşâallah, Sehl bin Bişr ve William Lilly Geleneğinde Kusursuz Açı (Perfection)",
      "en": "Perfection, Reception, and Translation of Light in Masha'allah, Sahl, and William Lilly",
      "sv": "Fullbordan, Reception och Ljusöverföring hos Masha'allah, Sahl och William Lilly"
    },
    "summary": {
      "tr": "Samimi ve acil bir sorunun astrolog tarafından anlaşıldığı anın haritası; Işığın Taşınması (Translation) ve Işığın Toplanması (Collection).",
      "en": "Casting the chart for the exact moment an earnest question is understood; Translation and Collection of Light.",
      "sv": "Kartan för det ögonblick en uppriktig fråga förstås; Ljusets överföring och insamling."
    },
    "paragraphs": {
      "tr": [
        "**Saat Astrolojisi** — Latince *Astrologia Horaria*, Arapça ve Osmanlıca **Mesâil ('Sorular İlmi')** — kişinin zihnini gerçekten meşgul eden somut bir sorunun doğduğu ve astrolog tarafından tam olarak idrak edildiği an için çıkarılan haritadır.",
        "Bağdat ekolünün kurucuları **Mâşâallah bin Eserî** ve **Sehl bin Bişr**'den 17. yüzyılda Londra'da *Christian Astrology* (1647) başyapıtını yazan **William Lilly**'ye kadar Mesail ilmi, astrolojinin en matematiksel ve kristal netliğindeki dalıdır. Çünkü burada tüm harita değil, yalnızca **Soruyu Soran Kişi (1. Ev Yöneticisi ve Ay)** ile **Sorulan Konu (*Quesited* — ilgili evin yöneticisi)** arasındaki canlı ilişki incelenir.",
        "Eğer soruyu soranın gezegeni ile sorulan şeyin gezegeni birbirine engelsiz bir **Uygulayıcı Açı (*Applying Aspect*)** ile yaklaşıyorsa ve aralarında **Karşılıklı Ağırlama (*Reception*)** varsa iş tamamlanır (*Perfection*)."
      ],
      "en": [
        "**Horary Astrology**—Arabic **Masā'il ('Questions')**—casts a chart for the exact moment an earnest, pressing question is birthed and clearly understood.",
        "From **Masha'allah** and **Sahl ibn Bishr** in Baghdad to **William Lilly**'s *Christian Astrology* (1647), horary is the most crystalline branch of traditional astrology, focusing strictly on the relationship between the **Querent (1st House ruler and Moon)** and the **Quesited (ruler of the house governing the matter)**.",
        "When the significators approach an unimpeded **Applying Aspect** with **Reception**, the matter achieves **Perfection** (completion)."
      ],
      "sv": [
        "**Horary-astrologi** (*Masā'il* — 'Frågor') ställer ett horoskop för det exakta ögonblick då en allvarlig fråga förstås.",
        "Från **Masha'allah** och **Sahl ibn Bishr** till **William Lilly** undersöker horary mötet mellan **Frågaren (1:a husets härskare och Månen)** och **Det Frågade (det berörda husets härskare)**."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Işığın Taşınması (Translation) ve Toplanması (Collection)",
          "body": "İki ana gezegen birbirine doğrudan açı yapamıyorsa bile iş bitmiş sayılmaz: Eğer daha hızlı üçüncü bir gezegen (genellikle Ay veya Merkür) birinci gezegenden ayrılıp hemen ikinci gezegene açı yapıyorsa buna **Işığın Taşınması (*Translation of Light*)** denir (bir aracının veya elçinin işi çözmesi). İki gezegen kendilerinden daha ağır ve saygın üçüncü bir gezegene (ör. Satürn veya Jüpiter) aynı anda açı yapıyorsa buna **Işığın Toplanması (*Collection of Light*)** denir (bir hakemin veya büyüğün iki tarafı birleştirmesi)."
        },
        {
          "heading": "Haritanın Okunabilirlik Şartları (Strictures Against Judgment)",
          "body": "Klasik ustalar her soruya gelişigüzel bakmaz: Yükselen derecesi henüz **0°–3°** arasındaysa soru için 'henüz çok erken'dir; **27°–30°** arasındaysa koşullar çoktan değişmiştir veya soru geç kalmıştır."
        }
      ],
      "en": [
        {
          "heading": "Translation and Collection of Light",
          "body": "Even when two significators do not behold each other directly, perfection can occur through **Translation of Light** (a faster planet carrying light from one to the other, like a go-between) or **Collection of Light** (both significators applying to a heavier, dignified third planet acting as judge or mediator)."
        },
        {
          "heading": "Considerations Before Judgment",
          "body": "Traditional masters check the chart's radicality first: an Ascendant at **0°–3°** indicates the matter is premature, while **27°–30°** shows the question is post-mature or shifting."
        }
      ],
      "sv": [
        {
          "heading": "Translation and Collection of Light",
          "body": "Even when two significators do not behold each other directly, perfection can occur through **Translation of Light** (a faster planet carrying light from one to the other, like a go-between) or **Collection of Light** (both significators applying to a heavier, dignified third planet acting as judge or mediator)."
        },
        {
          "heading": "Considerations Before Judgment",
          "body": "Traditional masters check the chart's radicality first: an Ascendant at **0°–3°** indicates the matter is premature, while **27°–30°** shows the question is post-mature or shifting."
        }
      ]
    },
    "items": {
      "tr": [
        "1. Ev Yöneticisi ve Ay (Querent) — Soruyu soran kişiyi, niyetini ve duygusal odağını temsil eden iki ana gösterge.",
        "Hedef Ev Yöneticisi (Quesited) — Sorulan konunun evi (2. ev kayıp eşya/para, 7. ev ortak/eş, 10. ev iş/unvan).",
        "Işığın Taşınması (Translation of Light) — Hızlı bir gezegenin iki gösterge arasında köprü ve elçi olması.",
        "Işığın Toplanması (Collection of Light) — İki göstergenin daha ağır üçüncü bir gezegende (hakem/otorite) buluşması.",
        "Engelleme (Prohibition / Frustration) — İki gezegen kavuşmadan önce üçüncü bir gezegenin araya girip açıyı kesmesi."
      ],
      "en": [
        "1st House Ruler & Moon (Querent) — Primary significators of the person asking the question.",
        "Quesited House Ruler — Ruler of the house governing the matter sought (2nd movable goods, 7th partner, 10th career).",
        "Translation of Light — A faster planet carrying light and connection between two non-aspecting significators.",
        "Collection of Light — Two significators both applying to a weightier third planet that unites them.",
        "Prohibition & Frustration — A third planet intervening to block an applying aspect before perfection."
      ],
      "sv": [
        "1st House Ruler & Moon (Querent) — Primary significators of the person asking the question.",
        "Quesited House Ruler — Ruler of the house governing the matter sought (2nd movable goods, 7th partner, 10th career).",
        "Translation of Light — A faster planet carrying light and connection between two non-aspecting significators.",
        "Collection of Light — Two significators both applying to a weightier third planet that unites them.",
        "Prohibition & Frustration — A third planet intervening to block an applying aspect before perfection."
      ]
    },
    "practice": {
      "tr": {
        "title": "Bir Mesail (Horary) Haritasında İlk 3 Bakış",
        "steps": [
          "Sorunun tam anlaşıldığı saati ve konumu not et; **1. Evin burcunu ve yöneticisini** (Sen) belirle.",
          "Sorunun hangi eve ait olduğunu seç (ör. bir sözleşme için 7. Ev, mesleki karar için 10. Ev) ve **o evin yöneticisini** bul.",
          "Bu iki gezegenin (veya Ay'ın) birbirine **yaklaşıp yaklaşmadığını (Applying)** ya da ayrılıp ayrılmadığını (**Separating**) kontrol et."
        ]
      },
      "en": {
        "title": "First Three Steps in Reading a Horary Chart",
        "steps": [
          "Record the exact time and location the question was understood; identify the **1st House sign and ruler** (Querent).",
          "Assign the house of the **Quesited** matter (e.g., 7th for agreements, 10th for career) and find its ruler.",
          "Check whether the two significators (or the Moon) are **applying** toward an aspect or **separating**."
        ]
      },
      "sv": {
        "title": "First Three Steps in Reading a Horary Chart",
        "steps": [
          "Record the exact time and location the question was understood; identify the **1st House sign and ruler** (Querent).",
          "Assign the house of the **Quesited** matter (e.g., 7th for agreements, 10th for career) and find its ruler.",
          "Check whether the two significators (or the Moon) are **applying** toward an aspect or **separating**."
        ]
      }
    },
    "closing": {
      "tr": "Gerçek bir soru gökyüzünden bağımsız doğmaz; sorunun tohumu kendi cevabını içinde taşır.",
      "en": "No earnest question is born apart from the sky; the seed of the question carries its own answer.",
      "sv": "No earnest question is born apart from the sky; the seed of the question carries its own answer."
    },
    "itemImages": [
      "/astroloji/item-saat-astrolojisi-horary-mesail-1.jpg",
      "/astroloji/item-saat-astrolojisi-horary-mesail-2.jpg",
      "/astroloji/item-saat-astrolojisi-horary-mesail-3.jpg",
      "/astroloji/item-saat-astrolojisi-horary-mesail-4.jpg",
      "/astroloji/item-saat-astrolojisi-horary-mesail-5.jpg"
    ],
    "practiceImage": "/astroloji/practice-saat-astrolojisi-horary-mesail.jpg"
  },
  {
    "slug": "sinastri-ve-iki-haritanin-simyasi",
    "glyph": "XIV",
    "image": "/astroloji/sinastri-ve-iki-haritanin-simyasi.jpg",
    "title": {
      "tr": "Sinastri ve İlişki Haritaları: İki Gökyüzünün Karşılaşması",
      "en": "Synastry and Relationship Charts: When Two Skies Meet",
      "sv": "Synastri och Relationshoroskop: När Två Himlar Möts"
    },
    "subtitle": {
      "tr": "Ptolemy'nin Dört Uyum Katmanı, Işıkların Aynalanması ve Davison Orta Nokta Haritası",
      "en": "Ptolemy's Four Layers of Concord, Luminary Mirroring, and the Davison Midpoint Chart",
      "sv": "Ptolemaios Fyra Samklangsnivåer, Ljusens Spegling och Davison-Kartan"
    },
    "summary": {
      "tr": "İki insanın doğum haritalarının üst üste binmesiyle uyanan simya; Güneş–Ay bağları, Yükselen–Alçalan ekseni ve ilişkinin kendi kaderi.",
      "en": "The alchemy awakened when two natal charts overlay; Sun–Moon bonds, Ascendant–Descendant axes, and the relationship's own chart.",
      "sv": "Alkemin som vaknar när två födelsekartor läggs över varandra; Sol–Måne-band och relationens egen karta."
    },
    "paragraphs": {
      "tr": [
        "**Sinastri** (Yunanca *Syn-astria* — 'Yıldızların Birlikteliği'), iki insanın doğum haritalarını karşılaştırarak aralarındaki doğal çekimi, zihinsel uyumu, büyüme derslerini ve birbirlerinde hangi uyuyan odaları uyandırdıklarını inceleyen sanattır.",
        "Claudius Ptolemaios, *Tetrabiblos* (IV. Kitap) eserinde kalıcı ve derin bir dostluk ya da ortaklık için öncelikle burç bazında değil, **Işıkların (Güneş ve Ay)** ve **Yükselen eksenlerinin** birbirini nasıl gördüğüne bakar. Klasik gelenekte yalnız 'Venüs–Mars' kıvılcımına bakılmaz; çünkü kıvılcım başlatır ama ocağı yıllarca sıcak tutan şey **Güneş–Ay uyumu, Merkür'ün dil birliği ve Satürn'ün sadakat çimentosudur.**",
        "İki ayrı haritanın üst üste konulmasına **Sinastri**, iki doğum anının tam ortasındaki zaman ve mekan koordinatına göre çıkarılan gerçek gökyüzü haritasına ise **Davison İlişki Haritası** denir: Sinastri iki kişinin birbirine nasıl davrandığını, Davison haritası ise 'üçüncü bir varlık' olarak ilişkinin kendi yolculuğunu anlatır."
      ],
      "en": [
        "**Synastry** (Greek *Syn-astria*, 'bringing the stars together') compares two natal charts to examine natural magnetism, intellectual harmony, mutual growth, and which dormant rooms each person awakens in the other.",
        "In *Tetrabiblos* (Book IV), Claudius Ptolemy grounds enduring concord first in the **Luminaries (Sun and Moon)** and the **Ascendant–Descendant axis**. While Venus–Mars sparks attraction, what sustains a hearth over decades is **Sun–Moon harmony, Mercury's shared language, and Saturn's loyal commitment**.",
        "Whereas **Synastry** shows how two individuals interact, the **Davison Relationship Chart** (cast for the exact midpoint in time and space between two births) reveals the relationship itself as a third living entity."
      ],
      "sv": [
        "**Synastri** (*Syn-astria*) jämför två födelsekartor för att belysa samklang, attraktion och ömsesidig utveckling.",
        "I *Tetrabiblos* (Bok IV) lägger Ptolemaios grunden för varaktig samklang i **Solens och Månens** relation samt **Ascendent–Descendent-axeln**."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Klasik Sinastrinin Dört Ana Köprüsü",
          "body": "1. **Güneş – Ay Köprüsü:** Bir kişinin Güneş'inin diğerinin Ay'ı ile kavuşum (0°), üçgen (120°) veya altmışlık (60°) yapması en güçlü yaşam uyumu ve yuva hissidir. 2. **ASC – DSC Mıknatısı:** Birinin gezegenlerinin diğerinin Yükselen veya Alçalan (7. Ev) derecesine dokunması. 3. **Merkür ve Jüpiter Dostluğu:** Ortak dünya görüşü, nezaket ve konuşarak her düğümü çözebilme yeteneği. 4. **Satürn Çapası:** Uzun vadeli sorumluluk; ancak sert ve ağırlamasız Satürn kareleri eleştiri soğukluğuna karşı bilinçli şefkat gerektirir."
        },
        {
          "heading": "Gölge Projeksiyonu ve 7. Ev Aynası",
          "body": "Kendi haritamızda 7. Evde (Alçalan'da) duran burç ve gezegenler, çoğu zaman kendimizde sahiplenmediğimiz ve dışarıdan bir eş veya ortak aracılığıyla deneyimlediğimiz niteliklerdir."
        }
      ],
      "en": [
        {
          "heading": "The Four Classical Bridges of Synastry",
          "body": "1. **The Sun–Moon Bridge:** Conjunction, trine, or sextile between one person's Sun and the other's Moon creates natural domestic harmony. 2. **ASC–DSC Magnetism:** Planets touching the partner's horizon axis. 3. **Mercury & Jupiter Concord:** Shared philosophy and conversational grace. 4. **The Saturn Anchor:** Long-term fidelity and structure."
        },
        {
          "heading": "Shadow Projection and the Mirror of the 7th House",
          "body": "The sign and planets on our 7th House (Descendant) mirror qualities within ourselves that we first meet through the 'Other'."
        }
      ],
      "sv": [
        {
          "heading": "The Four Classical Bridges of Synastry",
          "body": "1. **The Sun–Moon Bridge:** Conjunction, trine, or sextile between one person's Sun and the other's Moon creates natural domestic harmony. 2. **ASC–DSC Magnetism:** Planets touching the partner's horizon axis. 3. **Mercury & Jupiter Concord:** Shared philosophy and conversational grace. 4. **The Saturn Anchor:** Long-term fidelity and structure."
        },
        {
          "heading": "Shadow Projection and the Mirror of the 7th House",
          "body": "The sign and planets on our 7th House (Descendant) mirror qualities within ourselves that we first meet through the 'Other'."
        }
      ]
    },
    "items": {
      "tr": [
        "Güneş – Ay Uyumu (Işıkların Evliliği) — Klasik astrolojide ruh ve beden ritminin en derin doğal uyumu.",
        "Yükselen – Alçalan (ASC – DSC) Teması — İlk karşılaşmadaki güçlü tanıma hissi ve 'sen-ben' dengesi.",
        "Venüs – Mars Simyası — Estetik çekim, romantik kıvılcım ve yaratıcı heyecan.",
        "Jüpiter – Güneş/Ay Desteği — İlişkide karşılıklı iyimserlik, büyüme, affedicilik ve bereket.",
        "Satürn Bağları (Zaman Çimentosu) — Sözünde durma, dayanıklılık ve uzun yıllara yayılan güven inşası."
      ],
      "en": [
        "Sun – Moon Concord (Marriage of the Luminaries) — Deepest natural harmony of daily rhythm and spirit.",
        "Ascendant – Descendant Contact — Immediate recognition and horizon polarity.",
        "Venus – Mars Alchemy — Aesthetic magnetism, warmth, and creative spark.",
        "Jupiter – Luminary Support — Mutual generosity, forgiveness, and shared growth.",
        "Saturn Bonds (Mortar of Time) — Commitment, endurance, and structural trust."
      ],
      "sv": [
        "Sun – Moon Concord (Marriage of the Luminaries) — Deepest natural harmony of daily rhythm and spirit.",
        "Ascendant – Descendant Contact — Immediate recognition and horizon polarity.",
        "Venus – Mars Alchemy — Aesthetic magnetism, warmth, and creative spark.",
        "Jupiter – Luminary Support — Mutual generosity, forgiveness, and shared growth.",
        "Saturn Bonds (Mortar of Time) — Commitment, endurance, and structural trust."
      ]
    },
    "practice": {
      "tr": {
        "title": "İki Harita Arasında 3 Temel Uyum Noktasını Okuma",
        "steps": [
          "Önce kendi **Yükselen (ASC) ve Alçalan (DSC)** burçların ile karşı tarafın Güneş, Ay ve Yükselen burçlarının nasıl bakıştığını kontrol et.",
          "Senin **Ay burcun** ile karşı tarafın **Güneş ve Ay burcu** arasındaki elementi (Ateş–Hava uyumu veya Toprak–Su uyumu) incele.",
          "Karşı tarafın **Güneş'inin senin haritanda hangi eve düştüğünü** bul; o ev, bu kişinin senin hayatında hangi odayı aydınlattığını gösterir."
        ]
      },
      "en": {
        "title": "Reading Three Core Concord Points Between Two Charts",
        "steps": [
          "Compare your **Ascendant–Descendant axis** with the other person's Sun, Moon, and Ascendant.",
          "Examine the elemental relationship between your **Moon sign** and their **Sun and Moon signs**.",
          "Note which **natal house of yours** receives their Sun—that house is the room their presence illuminates in your life."
        ]
      },
      "sv": {
        "title": "Reading Three Core Concord Points Between Two Charts",
        "steps": [
          "Compare your **Ascendant–Descendant axis** with the other person's Sun, Moon, and Ascendant.",
          "Examine the elemental relationship between your **Moon sign** and their **Sun and Moon signs**.",
          "Note which **natal house of yours** receives their Sun—that house is the room their presence illuminates in your life."
        ]
      }
    },
    "closing": {
      "tr": "İki harita kusursuz olduğu için değil, birbirinin eksikliğini ışıkla tamamladığı için kenetlenir.",
      "en": "Two charts lock together not because they are identical, but because each completes the other's light.",
      "sv": "Two charts lock together not because they are identical, but because each completes the other's light."
    },
    "itemImages": [
      "/astroloji/item-sinastri-ve-iki-haritanin-simyasi-1.jpg",
      "/astroloji/item-sinastri-ve-iki-haritanin-simyasi-2.jpg",
      "/astroloji/item-sinastri-ve-iki-haritanin-simyasi-3.jpg",
      "/astroloji/item-sinastri-ve-iki-haritanin-simyasi-4.jpg",
      "/astroloji/item-sinastri-ve-iki-haritanin-simyasi-5.jpg"
    ],
    "practiceImage": "/astroloji/practice-sinastri-ve-iki-haritanin-simyasi.jpg"
  },
  {
    "slug": "gunes-donusu-solar-return",
    "glyph": "XV",
    "image": "/astroloji/gunes-donusu-solar-return.jpg",
    "title": {
      "tr": "Güneş Dönüşü (Solar Return) ve Yıllık Gökyüzü Devri",
      "en": "Solar Return (Tahwil al-Sini) and the Annual Revolution of the Sky",
      "sv": "Solar Return (Solåterkomst) och Årets Himmelsvarv"
    },
    "subtitle": {
      "tr": "Ebû Ma'şer'in Tahvîlü's-Sinîn İlmi, Yıllık Yükselen ve Muntha (Yılın Durağı)",
      "en": "Abu Ma'shar's Tahwil al-Sini, the Solar Return Ascendant, and the Muntha",
      "sv": "Abu Ma'shars Tahwil al-Sini, Solåterkomstens Ascendent och Muntha"
    },
    "summary": {
      "tr": "Her yıl Güneş'in doğduğun saniyedeki tam dereceye, dakikaya ve saniyeye geri döndüğü anın yıllık haritası.",
      "en": "The annual chart cast for the exact moment the Sun returns to the precise degree, minute, and second of your birth.",
      "sv": "Årskartan för det exakta ögonblick då Solen återvänder till födelsens exakta grad, minut och sekund."
    },
    "paragraphs": {
      "tr": [
        "Her yıl doğum gününüzde (veya artık yıllar nedeniyle ±1 gün farkla) Güneş ekliptikte tam doğduğunuz andaki **derece, dakika ve saniyeye (`00°00'00\"`)** geri döner. Bu astronomik kavuşum anı için çıkarılan haritaya klasik İslam ve Osmanlı astrolojisinde **Tahvîlü's-Sinîn ('Yılların Dönüşü')**, Batı literatüründe ise **Solar Return (Güneş Dönüşü)** denir.",
        "**Ebû Ma'şer el-Belhî** (*Kitâbü Ahkâmi Tahâvîli Sinî'l-Mevâlîd*), bir Güneş Dönüşü haritasının **asla doğum haritasından bağımsız okunamayacağını** vurgular: Doğum haritası ağacın kökü ve gövdesidir; Güneş Dönüşü haritası ise o yıl ağacın hangi dalının meyve vereceğini gösteren mevsim haritasıdır.",
        "Bir Solar Return haritasına bakarken ilk incelenen üç unsur: **1. Yıllık Yükselen Burç** (ve doğum haritasının kaçıncı evine düştüğü), **2. Güneş'in Yıllık Haritada Düştüğü Ev** (o yıl bilincin ve enerjinin parlayacağı sahne) ve **3. Yılın Efendisi (*Profeksiyon Yöneticisi*)** gezegenin yıllık haritadaki durumudur."
      ],
      "en": [
        "Once every year on or near your birthday, the transiting Sun returns to the exact **degree, minute, and second** it occupied at your birth. The chart cast for this exact astronomical return is known in Arabic tradition as **Tahwīl al-Sinī ('Revolution of the Years')** and in the West as the **Solar Return**.",
        "**Abu Ma'shar al-Balkhi** emphasizes that a Solar Return chart **must never be read in isolation from the natal chart**: the natal chart is the root and trunk of the tree, while the Solar Return shows which branch bears fruit during those twelve months.",
        "The three primary keys of a Solar Return are: **1. The Solar Return Ascendant** (and which natal house it overlays), **2. The House of the Solar Return Sun**, and **3. The condition of the natal Lord of the Year (Muntha ruler)** inside the return chart."
      ],
      "sv": [
        "Varje år kring din födelsedag återvänder Solen till exakt samma **grad, minut och sekund** som vid din födelse — kallat **Tahwīl al-Sinī** eller **Solar Return**.",
        "Som **Abu Ma'shar** lär måste en Solar Return-karta alltid läsas tillsammans med födelsekartan och **Årets Herre**."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Yaklaşık 90 Derecelik Yıllık Kayma (6 Saat 49 Dakika Sırrı)",
          "body": "Bir tropikal Güneş yılı tam 365 gün değil, **365 gün 5 saat 48 dakika 46 saniye** sürer. Bu fazladan ~6 saat yüzünden her yıl Güneş doğduğunuz dereceye döndüğünde Dünya kendi ekseni etrafında çeyrek tur (~90°) daha dönmüş olur; dolayısıyla Solar Return Yükseleniniz her yıl yaklaşık 3 burç ileri kayar ve her 4 yılda bir benzer burçlara döner."
        },
        {
          "heading": "Güneş Dönüşünde Köşe Ev Vurgusu",
          "body": "Yıllık haritada köşe evlere (1, 10, 7, 4) yerleşen gezegenler o yılın en somut ve görünür olaylarını üretir. Özellikle doğum haritasındaki **Yılın Efendisi** gezegen Solar Return'de 1. veya 10. evdeyse o yıl kişi için unutulmaz bir atılım yılı olur."
        }
      ],
      "en": [
        {
          "heading": "The Quarter-Turn Shift (~6 Hours 49 Minutes)",
          "body": "Because a tropical year lasts **365 days, 5 hours, 48 minutes, and 46 seconds**, the Earth rotates roughly an extra quarter-turn (~90°) between returns, shifting the Solar Return Ascendant forward by about three signs each year."
        },
        {
          "heading": "Angularity in the Return Chart",
          "body": "Planets placed on the angles (1st, 10th, 7th, 4th) of the Solar Return speak loudest during the year, especially when the natal **Lord of the Year** is angular."
        }
      ],
      "sv": [
        {
          "heading": "The Quarter-Turn Shift (~6 Hours 49 Minutes)",
          "body": "Because a tropical year lasts **365 days, 5 hours, 48 minutes, and 46 seconds**, the Earth rotates roughly an extra quarter-turn (~90°) between returns, shifting the Solar Return Ascendant forward by about three signs each year."
        },
        {
          "heading": "Angularity in the Return Chart",
          "body": "Planets placed on the angles (1st, 10th, 7th, 4th) of the Solar Return speak loudest during the year, especially when the natal **Lord of the Year** is angular."
        }
      ]
    },
    "items": {
      "tr": [
        "Solar Return Yükseleni (SR ASC) — O yılki genel motivasyonu ve doğum haritasının hangi evini uyandırdığını gösterir.",
        "Solar Return Güneş'inin Evi — O yıl kişinin en çok görünür olacağı, emek vereceği ve parlayacağı yaşam alanı.",
        "Solar Return Ay'ı — Yıl boyunca duygusal akışı, dikkatin nereye kaydığını ve değişen koşulları anlatır.",
        "Muntha (Profeksiyon Burcu) — Doğum haritasında o yıl uyanan burcun yıllık haritadaki konumu.",
        "SR MC (Yıllık Tepe Noktası) — O yılki mesleki hedefler, unvan ve toplumsal yönelim."
      ],
      "en": [
        "Solar Return Ascendant (SR ASC) — Sets the year's primary motivation and activates the underlying natal house.",
        "House of the Solar Return Sun — The arena where conscious vitality and visibility focus during the year.",
        "Solar Return Moon — Emotional currents, shifting priorities, and adaptive rhythm across the twelve months.",
        "The Muntha (Profected Sign) — The sign activated by annual profection examined within the return chart.",
        "Solar Return Midheaven (SR MC) — Annual career direction, public standing, and concrete achievements."
      ],
      "sv": [
        "Solar Return Ascendant (SR ASC) — Sets the year's primary motivation and activates the underlying natal house.",
        "House of the Solar Return Sun — The arena where conscious vitality and visibility focus during the year.",
        "Solar Return Moon — Emotional currents, shifting priorities, and adaptive rhythm across the twelve months.",
        "The Muntha (Profected Sign) — The sign activated by annual profection examined within the return chart.",
        "Solar Return Midheaven (SR MC) — Annual career direction, public standing, and concrete achievements."
      ]
    },
    "practice": {
      "tr": {
        "title": "Yeni Yaşının Güneş Dönüşü Haritasını 3 Adımda Okuma",
        "steps": [
          "Bu yılki Solar Return haritanın **Yükselen burcunu** bul ve bu burcun kendi doğum haritanda **kaçıncı eve** denk geldiğini işaretle.",
          "Solar Return haritanda **Güneş'in kaçıncı evde** durduğunu tespit et; o ev bu yaşının ana odak sahnesidir.",
          "Önceki odada hesapladığın **Yılın Efendisi (Profeksiyon Yöneticisi)** gezegenin Solar Return haritasında hangi evde ve açıda olduğuna bak."
        ]
      },
      "en": {
        "title": "Reading Your Solar Return Chart in Three Steps",
        "steps": [
          "Find your **Solar Return Ascendant sign** and note which **natal house** it occupies.",
          "Identify the **house of the Sun** in the Solar Return chart as your primary stage for the year.",
          "Check the house and aspects of your **Lord of the Year** inside the Solar Return chart."
        ]
      },
      "sv": {
        "title": "Reading Your Solar Return Chart in Three Steps",
        "steps": [
          "Find your **Solar Return Ascendant sign** and note which **natal house** it occupies.",
          "Identify the **house of the Sun** in the Solar Return chart as your primary stage for the year.",
          "Check the house and aspects of your **Lord of the Year** inside the Solar Return chart."
        ]
      }
    },
    "closing": {
      "tr": "Her doğum günü aynı noktaya dönüş değil, yükselen bir sarmalda aynı dereceden göğe yeniden bakıştır.",
      "en": "Each birthday is not a flat circle, but a rising spiral beholding the sky anew from the degree of birth.",
      "sv": "Each birthday is not a flat circle, but a rising spiral beholding the sky anew from the degree of birth."
    },
    "itemImages": [
      "/astroloji/item-gunes-donusu-solar-return-1.jpg",
      "/astroloji/item-gunes-donusu-solar-return-2.jpg",
      "/astroloji/item-gunes-donusu-solar-return-3.jpg",
      "/astroloji/item-gunes-donusu-solar-return-4.jpg",
      "/astroloji/item-gunes-donusu-solar-return-5.jpg"
    ],
    "practiceImage": "/astroloji/practice-gunes-donusu-solar-return.jpg"
  },
  {
    "slug": "ay-menzilleri-yirmi-sekiz-konak",
    "glyph": "XVI",
    "image": "/astroloji/ay-menzilleri-yirmi-sekiz-konak.jpg",
    "title": {
      "tr": "Ay Menzilleri: 28 Konak (Menâzilü’l-Kamer ve Picatrix)",
      "en": "The 28 Lunar Mansions (Manazil al-Qamar & Picatrix)",
      "sv": "Månens 28 Stationer (Manazil al-Qamar & Picatrix)"
    },
    "subtitle": {
      "tr": "Ay'ın 27.3 Günlük Yıldızıl Yörüngesi, El-Şeratân'dan El-Reşâ'ya 28 Gece Konağı",
      "en": "The Moon's 27.3-Day Sidereal Orbit and the 28 Nightly Stations from Al-Sharatan to Al-Risha",
      "sv": "Månens 27,3-Dagars Sideriska Bana och de 28 Nattkvarteren"
    },
    "summary": {
      "tr": "Güneş'in 12 burcuna karşılık Ay'ın her gece konakladığı 12°51' genişliğindeki 28 yıldız menzili; el-Birûnî, İbnü'l-Arabî ve Picatrix geleneği.",
      "en": "Counterpart to the 12 solar signs: the 28 star stations of 12°51' each where the Moon lodges nightly in al-Biruni, Ibn 'Arabi, and Picatrix.",
      "sv": "Motsvarigheten till Solens 12 tecken: de 28 stjärnstationer om 12°51' där Månen gästar varje natt."
    },
    "paragraphs": {
      "tr": [
        "12 burçlu zodyak temelde **Güneş'in** bir yıl içindeki 12 dolunay/yeniay döngüsüne göre bölünmüş bir Güneş takvimidir. Oysa **Ay**, Dünya etrafındaki yıldızıl (*sidereal*) turunu yaklaşık **27.3 günde** tamamlar ve her gece gökyüzünde yaklaşık **12°51' (12 derece 51 dakika)** ilerleyerek farklı bir yıldız kümesinde konaklar.",
        "Babil, Hint (*Nakshatra*), Çin (*Xiu*) ve Arap astronomisinin ortak mirası olan bu 28 durağa İslam ve Osmanlı gökbiliminde **Menâzilü'l-Kamer ('Ay'ın Konakları / Menzilleri')**, Batı Rönesans literatüründe ise **28 Lunar Mansions** denir. **El-Birûnî** (*el-Âsârü'l-Bâkiye*), **İbnü'l-Arabî** (28 menzili 28 harf ve 28 ilahi isimle eşleştirdiği *Fütûhât-ı Mekkiyye*) ve *Picatrix* (*Gâyetü'l-Hakîm*) bu ilmin en derin kaynaklarıdır.",
        "360 derecelik zodyak 28 eşit konağa bölündüğünde her burca tam **2 tam konak ve üçte bir konak** düşer: I. Konak **El-Şeratân** (0° Koç – 12°51' Koç) ile başlar, III. Konak **El-Süreyyâ** (Ülker / Pleiades: 25°42' Koç – 8°34' Boğa) ve IV. Konak **El-Deberân** (Aldebaran: 8°34' Boğa – 21°25' Boğa) ile devam edip XXVIII. Konak **El-Reşâ** (Balık'ın İpi: 17°08' Balık – 30° Balık) ile tamamlanır."
      ],
      "en": [
        "While the 12-sign zodiac is fundamentally a **Solar** calendar tracking twelve lunations per year, the **Moon** completes her sidereal circuit in **27.3 days**, advancing roughly **12°51' (12 degrees 51 minutes)** each night from one star cluster to the next.",
        "Shared across Babylonian, Indian (*Nakshatra*), Chinese (*Xiu*), and Arabic astronomy, these 28 nightly stations are known as **Manāzil al-Qamar ('Mansions of the Moon')**—expounded by **al-Biruni**, **Ibn 'Arabi** (who links the 28 mansions to the 28 cosmic letters), and the *Picatrix*.",
        "Dividing the 360° circle into 28 equal segments of `12°51'26\"`, the sequence opens with Mansion I **Al-Sharatan** (0°–12°51' Aries), passes through Mansion III **Al-Thurayya** (the Pleiades) and Mansion IV **Al-Dabaran** (Aldebaran), and closes with Mansion XXVIII **Al-Risha** (17°08'–30° Pisces)."
      ],
      "sv": [
        "Medan den tolvdelade zodiaken är en solkalender, fullbordar **Månen** sitt sideriska varv på **27,3 dagar** och rör sig **12°51'** per dygn genom **28 Månstationer (*Manāzil al-Qamar*)**.",
        "Från **al-Biruni** och **Ibn 'Arabi** till *Picatrix* beskriver de 28 stationerna Månens exakta nattkvarter från **Al-Sharatan** (0° Väduren) till **Al-Risha** (30° Fiskarna)."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Ülker (El-Süreyyâ), Kalb (Antares) ve Sa'd (Kutlu Konaklar)",
          "body": "28 menzilin her birinin tarım, denizcilik, ilim ve insan ilişkileri için kendine has bir mizacı vardır: Örneğin **III. Menzil El-Süreyyâ** (Ülker, 25°42' Koç – 8°34' Boğa) ilim, simya, dostluk ve topluluk kurmak için en uğurlu konaklardan biriyken; Kova ve Balık burçlarına yayılan dört **Sa'd ('Kutlu Yıldız')** konağı (*Sa'dü'z-Zâbih, Sa'dü Bula', Sa'dü's-Su'ûd, Sa'dü'l-Ahbiye*) şifa, barış ve bereket konaklarıdır."
        },
        {
          "heading": "Doğum Ay'ının Menzili ve Kişisel Ritim",
          "body": "Doğum haritanızda Ay sadece bir burçta değil, 28 konaktan birinin içinde doğmuştur. İki kişinin Ay burcu aynı olsa bile (örneğin ikisi de Boğa'da olsa bile), biri **El-Süreyyâ** (8° Boğa), diğeri **El-Hak'a** (25° Boğa) menzilinde doğmuşsa duygusal tepkileri ve sezgisel yetenekleri bambaşka çalışır."
        }
      ],
      "en": [
        {
          "heading": "Al-Thurayya (Pleiades) and the Four Fortunate Stations (Sa'd)",
          "body": "Each of the 28 mansions carries a distinct temperament for agriculture, study, and human affairs: **Mansion III Al-Thurayya** (25°42' Aries – 8°34' Taurus) favors scholarship, alchemy, and fellowship, while the four **Sa'd ('Fortunate')** mansions across Aquarius and Pisces support healing, peace, and harvest."
        },
        {
          "heading": "Your Natal Lunar Mansion",
          "body": "Even when two people share the same Moon sign, their specific `12°51'` **Natal Lunar Mansion** reveals the exact star-station coloring their emotional and intuitive life."
        }
      ],
      "sv": [
        {
          "heading": "Al-Thurayya (Pleiades) and the Four Fortunate Stations (Sa'd)",
          "body": "Each of the 28 mansions carries a distinct temperament for agriculture, study, and human affairs: **Mansion III Al-Thurayya** (25°42' Aries – 8°34' Taurus) favors scholarship, alchemy, and fellowship, while the four **Sa'd ('Fortunate')** mansions across Aquarius and Pisces support healing, peace, and harvest."
        },
        {
          "heading": "Your Natal Lunar Mansion",
          "body": "Even when two people share the same Moon sign, their specific `12°51'` **Natal Lunar Mansion** reveals the exact star-station coloring their emotional and intuitive life."
        }
      ]
    },
    "items": {
      "tr": [
        "I. El-Şeratân (0°00' – 12°51' Koç) — Koç'un İki Boynuzu; yeni başlangıç, cesur atılım ve yol açma konağı.",
        "III. El-Süreyyâ (25°42' Koç – 8°34' Boğa) — Ülker / Yedi Kızkardeşler; ilim, zanaat, bereket ve sadık dostluk konağı.",
        "VIII. El-Nesre (0°00' – 12°51' Yengeç) — Yengeç'in Kalbi (Praesepe / Arı Kovanı); aile, sevgi, koruma ve yuva konağı.",
        "XIV. El-Simâk (21°25' Başak – 4°17' Terazi) — Spica yıldızı konağı; bilgelik, adalet, sanat ve arınma.",
        "XXIV. Sa'dü's-Su'ûd (12°51' – 25°42' Kova) — 'Kutluların Kutlusu'; bahar uyanışı, umut ve hayırlı anlaşmalar konağı."
      ],
      "en": [
        "Mansion I Al-Sharatan (0°00' – 12°51' Aries) — The Two Signals; bold initiative and opening paths.",
        "Mansion III Al-Thurayya (25°42' Aries – 8°34' Taurus) — The Pleiades; scholarship, craft, and fellowship.",
        "Mansion VIII Al-Nathrah (0°00' – 12°51' Cancer) — The Beehive Cluster; hearth, protection, and kinship.",
        "Mansion XIV Al-Simak (21°25' Virgo – 4°17' Libra) — Mansion of Spica; wisdom, justice, and refinement.",
        "Mansion XXIV Sa'd al-Su'ud (12°51' – 25°42' Aquarius) — 'Luck of Lucks'; renewal, hope, and concord."
      ],
      "sv": [
        "Mansion I Al-Sharatan (0°00' – 12°51' Aries) — The Two Signals; bold initiative and opening paths.",
        "Mansion III Al-Thurayya (25°42' Aries – 8°34' Taurus) — The Pleiades; scholarship, craft, and fellowship.",
        "Mansion VIII Al-Nathrah (0°00' – 12°51' Cancer) — The Beehive Cluster; hearth, protection, and kinship.",
        "Mansion XIV Al-Simak (21°25' Virgo – 4°17' Libra) — Mansion of Spica; wisdom, justice, and refinement.",
        "Mansion XXIV Sa'd al-Su'ud (12°51' – 25°42' Aquarius) — 'Luck of Lucks'; renewal, hope, and concord."
      ]
    },
    "practice": {
      "tr": {
        "title": "Doğum Ay'ının Kaçıncı Menzilde (Konakta) Olduğunu Hesaplama",
        "steps": [
          "Doğum Ay'ının zodyak başlangıcından (0° Koç'tan) itibaren **toplam kaçıncı derecede** olduğunu hesapla (ör. `10° Boğa = 30° + 10° = 40°`).",
          "Bu toplam dereceyi **12.857'ye böl** (`360 ÷ 28 = 12.857°`) ve çıkan tam sayıya 1 ekle (`40 ÷ 12.857 = 3.11 → IV. Menzil: El-Deberân`).",
          "Bir ay boyunca Ay kendi doğum menzilinden her geçtiğinde (27.3 günde bir) içsel enerjinin nasıl tazelendiğini gözlemle."
        ]
      },
      "en": {
        "title": "Calculating Your Natal Lunar Mansion",
        "steps": [
          "Convert your natal Moon position into **total zodiacal longitude from 0° Aries** (e.g., `10° Taurus = 30° + 10° = 40°`).",
          "Divide that total degree by **12.857** (`360 ÷ 28`) and add 1 to the whole number (`40 ÷ 12.857 = 3.11 → Mansion IV: Al-Dabaran`).",
          "Observe your inner rhythm every 27.3 days when the transiting Moon returns to your natal mansion."
        ]
      },
      "sv": {
        "title": "Calculating Your Natal Lunar Mansion",
        "steps": [
          "Convert your natal Moon position into **total zodiacal longitude from 0° Aries** (e.g., `10° Taurus = 30° + 10° = 40°`).",
          "Divide that total degree by **12.857** (`360 ÷ 28`) and add 1 to the whole number (`40 ÷ 12.857 = 3.11 → Mansion IV: Al-Dabaran`).",
          "Observe your inner rhythm every 27.3 days when the transiting Moon returns to your natal mansion."
        ]
      }
    },
    "closing": {
      "tr": "Güneş yılı on iki burçla ölçer; Ay ise gecenin sırrını yirmi sekiz konakta fısıldar.",
      "en": "The Sun measures the year by twelve signs; the Moon whispers the night through twenty-eight mansions.",
      "sv": "The Sun measures the year by twelve signs; the Moon whispers the night through twenty-eight mansions."
    },
    "itemImages": [
      "/astroloji/item-ay-menzilleri-yirmi-sekiz-konak-1.jpg",
      "/astroloji/item-ay-menzilleri-yirmi-sekiz-konak-2.jpg",
      "/astroloji/item-ay-menzilleri-yirmi-sekiz-konak-3.jpg",
      "/astroloji/item-ay-menzilleri-yirmi-sekiz-konak-4.jpg",
      "/astroloji/item-ay-menzilleri-yirmi-sekiz-konak-5.jpg"
    ],
    "practiceImage": "/astroloji/practice-ay-menzilleri-yirmi-sekiz-konak.jpg"
  },
  {
    "slug": "klasik-melothesia-ve-mizac-dengesi",
    "glyph": "XVII",
    "image": "/astroloji/klasik-melothesia-ve-mizac-dengesi.jpg",
    "title": {
      "tr": "Klasik Melothesia: Burç-Beden İzdüşümleri ve Dört Mizaç",
      "en": "Classical Melothesia: Zodiacal Body Correspondences and the Four Temperaments",
      "sv": "Klassisk Melothesia: Zodiakens Kroppsmotsvarigheter och de Fyra Temperamenten"
    },
    "subtitle": {
      "tr": "Homo Signorum (Koç'tan Balık'a Mikrokozmos), Sıcak-Soğuk / Kuru-Nemli Dengesi (Tıbbi Uyarılı)",
      "en": "Homo Signorum (Microcosm from Aries to Pisces) and Hot-Cold / Dry-Moist Balance (With Medical Disclaimer)",
      "sv": "Homo Signorum (Mikrokosmos från Väduren till Fiskarna) och Elementbalans (Med Medicinsk Varning)"
    },
    "summary": {
      "tr": "Antik felsefede insan bedeninin gökyüzünün küçük bir haritası (Mikrokozmos) olarak okunması; Dört Hılt, Dört Nitelik ve denge etiği.",
      "en": "Reading the human microcosm as a reflection of the zodiac in classical philosophy; the Four Qualities, Four Temperaments, and ethics of balance.",
      "sv": "Människan som mikrokosmos i klassisk filosofi; de fyra kvaliteterna, fyra temperamenten och balansens etik."
    },
    "paragraphs": {
      "tr": [
        "Antik Yunan, İskenderiye ve İslam doğa felsefesinde (Marcus Manilius'un *Astronomica* eserinden Galen, İbn Sînâ ve Ficino'ya kadar) insan bedeni evrenin küçültülmüş bir aynası (**Mikrokozmos**) olarak görülürdü. Gökyüzündeki 12 burcun baştan ayağa insan bedenindeki sembolik izdüşümlerini inceleyen bu tarihsel disipline **Melothesia** ve bu kozmik insan şemasına **Homo Signorum ('Burçlar İnsanı')** adı verilir.",
        "Bu sembolik haritada **Koç** baş ve yüzü, **Boğa** boyun ve boğazı, **İkizler** omuzlar, kollar ve akciğer nefesini, **Yengeç** göğüs kafesi ve mideyi, **Aslan** kalp ve sırt omurgasını, **Başak** sindirim ve bağırsak ayrıştırmasını, **Terazi** böbrekler ve bel dengesini, **Akrep** üreme ve boşaltım sistemini, **Yay** kalça ve uylukları, **Oğlak** dizleri, kemikleri ve cildi, **Kova** baldır ve dolaşımı, **Balık** ise ayakları ve lenfatik akışı temsil eder.",
        "**Önemli Tıbbi ve Yasal Uyarı:** *Melothesia* ve klasik mizaç (*Sıcak, Soğuk, Kuru, Nemli*) öğretisi tamamen **bilim tarihi, felsefe ve sembolik arketip araştırması** kapsamındadır; kesinlikle modern tıbbi teşhis, anatomi veya tedavi yöntemi değildir. Her türlü fiziksel veya ruhsal sağlık yakınmasında başvurulacak tek merci uzman hekimler ve modern tıp kurumlarıdır."
      ],
      "en": [
        "In classical Greco-Roman and Islamic natural philosophy (from Manilius's *Astronomica* to Galen, Avicenna, and Marsilio Ficino), the human frame was contemplated as a **Microcosm** mirroring the heavens. The historical study of how the twelve signs correspond symbolically from head to foot is called **Melothesia** (*Homo Signorum*, 'Zodiac Man').",
        "Symbolically, **Aries** corresponds to the head, **Taurus** to the neck and throat, **Gemini** to the shoulders, arms, and breath, **Cancer** to the chest and stomach, **Leo** to the heart and spine, **Virgo** to assimilation, **Libra** to the lower back and kidneys, **Scorpio** to regeneration, **Sagittarius** to the thighs, **Capricorn** to the knees and skeletal structure, **Aquarius** to the calves and circulation, and **Pisces** to the feet.",
        "**Important Medical & Legal Notice:** *Melothesia* and the classical doctrine of the four temperaments (*Hot, Cold, Dry, Moist*) are presented strictly within the history of philosophy and symbolic archetype study; they never replace modern medical diagnosis or treatment. Always consult a licensed physician for any health concern."
      ],
      "sv": [
        "I klassisk naturfilosofi (från Manilius till Galenos och Ficino) betraktades människan som ett **Mikrokosmos** (*Homo Signorum*), där de tolv tecknen från **Väduren** (huvudet) till **Fiskarna** (fötterna) speglar kroppens arkitektur (**Melothesia**).",
        "**Viktig Medicinsk Varning:** *Melothesia* och läran om de fyra temperamenten presenteras uteslutande som idé- och kulturhistoria och ersätter aldrig medicinsk diagnos eller läkarvård."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Dört İlk Nitelik: Sıcak, Soğuk, Kuru ve Nemli",
          "body": "Aristoteles ve Batlamyus (*Ptolemy*) doğadaki dört elementi iki çift temel nitelik üzerinden açıklar: **Ateş** (Sıcak + Kuru — Kolerik / Hamleci mizaç), **Hava** (Sıcak + Nemli — Sangunik / Sosyal ve akışkan mizaç), **Toprak** (Soğuk + Kuru — Melankolik / Derin, yapı kurucu ve analitik mizaç) ve **Su** (Soğuk + Nemli — Flegmatik / Sakin, empatik ve koruyucu mizaç)."
        },
        {
          "heading": "Mizaç Dengesi ve Karşıt Elementle İtidal (Allopati İlkesi)",
          "body": "Klasik felsefede amaç tek bir mizaca hapsolmak değil, aşırıya kaçan niteliği dengelemektir: Haritasında aşırı **Ateş (Sıcak + Kuru)** vurgusu olan ve çabuk öfkelenip tükenen bir zihin; serinletici ve yavaşlatıcı rutinlerle (doğada yürüyüş, su kenarı sessizliği, dinleme pratiği) kendi iç itidalini (*temperantia*) kurar."
        }
      ],
      "en": [
        {
          "heading": "The Four Primary Qualities: Hot, Cold, Dry, and Moist",
          "body": "Aristotle and Ptolemy ground the four elements in two pairs of primary qualities: **Fire** (Hot + Dry — Choleric), **Air** (Hot + Moist — Sanguine), **Earth** (Cold + Dry — Melancholic / analytical), and **Water** (Cold + Moist — Phlegmatic / reflective)."
        },
        {
          "heading": "Temperamental Balance and Moderation (Temperantia)",
          "body": "In classical philosophy, self-knowledge aims at equilibrium: when a chart leans heavily toward excess heat and haste, cultivating cooling stillness, nature walks, and deliberate listening restores inner moderation."
        }
      ],
      "sv": [
        {
          "heading": "The Four Primary Qualities: Hot, Cold, Dry, and Moist",
          "body": "Aristotle and Ptolemy ground the four elements in two pairs of primary qualities: **Fire** (Hot + Dry — Choleric), **Air** (Hot + Moist — Sanguine), **Earth** (Cold + Dry — Melancholic / analytical), and **Water** (Cold + Moist — Phlegmatic / reflective)."
        },
        {
          "heading": "Temperamental Balance and Moderation (Temperantia)",
          "body": "In classical philosophy, self-knowledge aims at equilibrium: when a chart leans heavily toward excess heat and haste, cultivating cooling stillness, nature walks, and deliberate listening restores inner moderation."
        }
      ]
    },
    "items": {
      "tr": [
        "Koç, Boğa, İkizler (Baş, Boğaz ve Nefes) — Algı, ses, ifade ve zihnin dünyayla ilk temas hattı.",
        "Yengeç, Aslan, Başak (Göğüs, Kalp ve Merkez) — Duygusal beslenme, yaşam ateşi ve ayırt etme merkezi.",
        "Terazi, Akrep, Yay (Bel, Kök ve Hareket) — Denge, derin dönüşüm ve ufka doğru ilerleme kasları.",
        "Oğlak, Kova, Balık (Dizler, Dolaşım ve Ayaklar) — Dayanıklılık, toplumsal ağ ve yeryüzüne basan taban.",
        "Dört Mizaç (Kolerik, Sangunik, Melankolik, Flegmatik) — Yükselen burç, Ay fazı ve mevsimden doğan karakter dokusu."
      ],
      "en": [
        "Aries, Taurus, Gemini (Head, Throat & Breath) — Perception, voice, and the mind's first contact with the world.",
        "Cancer, Leo, Virgo (Chest, Heart & Core) — Emotional nourishment, vital fire, and discernment.",
        "Libra, Scorpio, Sagittarius (Balance, Root & Stride) — Equilibrium, transformation, and forward movement.",
        "Capricorn, Aquarius, Pisces (Knees, Circulation & Feet) — Endurance, fellowship, and grounding.",
        "The Four Temperaments (Choleric, Sanguine, Melancholic, Phlegmatic) — Character weave of Ascendant and Moon."
      ],
      "sv": [
        "Aries, Taurus, Gemini (Head, Throat & Breath) — Perception, voice, and the mind's first contact with the world.",
        "Cancer, Leo, Virgo (Chest, Heart & Core) — Emotional nourishment, vital fire, and discernment.",
        "Libra, Scorpio, Sagittarius (Balance, Root & Stride) — Equilibrium, transformation, and forward movement.",
        "Capricorn, Aquarius, Pisces (Knees, Circulation & Feet) — Endurance, fellowship, and grounding.",
        "The Four Temperaments (Choleric, Sanguine, Melancholic, Phlegmatic) — Character weave of Ascendant and Moon."
      ]
    },
    "practice": {
      "tr": {
        "title": "Haritanda Baskın Element ve Mizacı Dengeleme Çalışması",
        "steps": [
          "Yükselen, Güneş ve Ay burçlarının elementlerini (Ateş, Toprak, Hava, Su) ve niteliklerini (**Sıcak/Soğuk**, **Kuru/Nemli**) not et.",
          "Haritanda **en az bulunan elementi** tespit et (örneğin hiç Toprak yoksa somut planlama ve beden rutini; hiç Su yoksa dinlenme ve duygusal paylaşım).",
          "Bu hafta eksik olan elementini destekleyecek **günlük 20 dakikalık somut bir yaşam alışkanlığı** (toprakla temas, açık hava yürüyüşü, su kenarı tefekkürü veya yaratıcı hareket) belirle."
        ]
      },
      "en": {
        "title": "Balancing Your Chart's Dominant Element and Temperament",
        "steps": [
          "Note the elements (Fire, Earth, Air, Water) and primary qualities (**Hot/Cold**, **Dry/Moist**) of your Ascendant, Sun, and Moon.",
          "Identify the **least emphasized element** in your chart.",
          "Choose one **20-minute daily habit** this week (grounding in nature, fresh-air walking, quiet reflection by water, or creative movement) to cultivate equilibrium."
        ]
      },
      "sv": {
        "title": "Balancing Your Chart's Dominant Element and Temperament",
        "steps": [
          "Note the elements (Fire, Earth, Air, Water) and primary qualities (**Hot/Cold**, **Dry/Moist**) of your Ascendant, Sun, and Moon.",
          "Identify the **least emphasized element** in your chart.",
          "Choose one **20-minute daily habit** this week (grounding in nature, fresh-air walking, quiet reflection by water, or creative movement) to cultivate equilibrium."
        ]
      }
    },
    "closing": {
      "tr": "İnsan bedeni yürüyen bir gök kubbedir; bilgelik ise dört rüzgarı tek bir nefeste dengelemektir.",
      "en": "The human frame is a walking firmament; wisdom is balancing the four winds within a single breath.",
      "sv": "The human frame is a walking firmament; wisdom is balancing the four winds within a single breath."
    },
    "itemImages": [
      "/astroloji/item-klasik-melothesia-ve-mizac-dengesi-1.jpg",
      "/astroloji/item-klasik-melothesia-ve-mizac-dengesi-2.jpg",
      "/astroloji/item-klasik-melothesia-ve-mizac-dengesi-3.jpg",
      "/astroloji/item-klasik-melothesia-ve-mizac-dengesi-4.jpg",
      "/astroloji/item-klasik-melothesia-ve-mizac-dengesi-5.jpg"
    ],
    "practiceImage": "/astroloji/practice-klasik-melothesia-ve-mizac-dengesi.jpg"
  },
  {
    "slug": "gunesin-kalbi-cazimi-ve-yaniklik",
    "glyph": "XVIII",
    "image": "/astroloji/gunesin-kalbi-cazimi-ve-yaniklik.jpg",
    "title": {
      "tr": "Güneş'in Kalbi (Cazimi), Yanıklık ve Işınlar Altında Olmak",
      "en": "The Heart of the Sun (Cazimi), Combustion, and Under the Beams",
      "sv": "Solens Hjärta (Cazimi), Förbränning och Under Solens Strålar"
    },
    "subtitle": {
      "tr": "Samîmî (0°17' Kral Tahtı), Muhterik (8°30' Yanıklık) ve Tahte'ş-Şuâ (15° Gizlenme)",
      "en": "Cazimi (0°17' Royal Throne), Combust (8°30'), and Under the Beams (15° Invisibility)",
      "sv": "Cazimi (0°17' Kungatronen), Förbränd (8°30') och Under Strålarna (15° Osynlighet)"
    },
    "summary": {
      "tr": "Bir gezegenin Güneş'e yaklaşırken görünmez oluşu, Güneş'in tam kalbinde (17 dakikalık tahtta) taçlanması ve yeniden doğuşu.",
      "en": "A planet's descent into invisibility near the Sun, its coronation in the 17-arcminute Heart of the Sun, and its heliacal rebirth.",
      "sv": "En planets nedstigning i osynlighet nära Solen, dess kröning i Solens hjärta (17 bågminuter) och dess pånyttfödelse."
    },
    "paragraphs": {
      "tr": [
        "Klasik astrolojide bir gezegenin durumu yalnızca burcuyla değil, **Güneş ile olan mesafesi ve görünürlüğüyle (*Phase / Helyak Döngü*)** ölçülür. Güneş gökyüzünün Sultanı ve yaşam ışığının kaynağıdır; ancak bir gezegen Güneş'e çok yaklaştığında onun kamaştırıcı ışığı altında gece gökyüzünde görünmez olur.",
        "Bir gezegen Güneş'e **15° ile 8°30'** mesafedeyken **Işınlar Altında (*Under the Beams / Tahte'ş-Şuâ*)** sayılır; gücü biraz örtülmüştür ve perde arkasında çalışır. Mesafe **8°30' (8.5 derece)** altına indiğinde gezegen **Yanık (*Combust / Muhterik*)** durumuna düşer; klasik ustalar bunu kralın yakıcı öfkesi veya aşırı ışığı karşısında sesini duyuramayan bir vezire benzetir (ancak gezegen kendi burcundaysa — örneğin Güneş ve Merkür Başak'taysa — kralın kendi evindeki misafiri olduğu için yanıklıktan korunur, buna **Chariot / Taht Arabası** denir).",
        "Mucizevi dönüşüm ise gezegen Güneş'in merkezine **0°17' (17 yay dakikası)** yaklaştığında gerçekleşir: Arapça *Ka'b el-Şems* veya *Samîmî* kelimesinden Latinceye **Cazimi ('Güneş'in Kalbinde')** olarak geçen bu durumda gezegen artık yanmaz; bizzat Kral'ın tahtına oturmuş, onun mührünü ve mutlak yetkisini almış olur."
      ],
      "en": [
        "In traditional astrology, a planet's condition is judged not only by sign, but by its **distance from the Sun and visual visibility**. While the Sun is the fountain of vital light, a planet drawing too close is swallowed by solar glare and disappears from the night sky.",
        "Between **15° and 8°30'** from the Sun, a planet is **Under the Beams (*Sub Radiis*)**, operating veiled behind the scenes. Within **8°30'**, it becomes **Combust**, weakened unless protected in its own domicile or exaltation (riding in its **Chariot**).",
        "Yet when the planet enters within **0°17' (17 arcminutes)** of the exact center of the Sun, a dramatic reversal occurs: called **Cazimi ('In the Heart of the Sun')**, the planet is no longer burned, but seated upon the royal throne itself, vested with extraordinary clarity and authority."
      ],
      "sv": [
        "I klassisk astrologi bedöms en planets tillstånd genom dess **avstånd till Solen och synlighet på natthimlen**.",
        "Mellan **15° och 8°30'** är planeten **Under Strålarna**; inom **8°30'** är den **Förbränd (*Combust*)**; men inom **0°17' (17 bågminuter)** sitter den i **Solens Hjärta (*Cazimi*)** på kungatronen."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Sabah Yıldızı (Oryantal) ve Akşam Yıldızı (Oksidental)",
          "body": "Güneş'ten önce doğu ufkunda doğan gezegenlere **Doğu / Oryantal (Sabah Yıldızı)**, Güneş battıktan sonra batı ufkunda parlayanlara ise **Batı / Oksidental (Akşam Yıldızı)** denir. Klasik kuralda eril gezegenler (**Satürn, Jüpiter, Mars**) Güneş'in önünden doğarken (Oryantal) daha hızlı, dışadönük ve kararlı; dişil/gece gezegenleri (**Venüs ve Ay**) ile Merkür ise Güneş'in ardından batarken (Oksidental) daha olgun, derin ve stratejik çalışır."
        },
        {
          "heading": "Kendi Arabasında Olmak (In Its Chariot)",
          "body": "Eğer Güneş ile kavuşan gezegen kendi yönettiği veya yüceldiği burçtaysa (ör. Koç'ta Güneş–Güneş, İkizler/Başak'ta Merkür, Boğa/Terazi'de Venüs, Oğlak/Kova/Terazi'de Satürn), Güneş onu yakmaz; aksine gezegen kendi kalesinde Kral'ı ağırladığı için görünür bir otorite kazanır."
        }
      ],
      "en": [
        {
          "heading": "Oriental (Morning Star) vs. Occidental (Evening Star)",
          "body": "Planets rising before the Sun in the east are **Oriental (Matutine)**—bold, swift, and pioneering; planets setting after the Sun in the west are **Occidental (Vespertine)**—reflective, strategic, and deliberate."
        },
        {
          "heading": "Protected in Its Chariot",
          "body": "When a combust planet occupies its own domicile or exaltation, it rides in its **Chariot**, shielded from solar burning and empowered by the Sun's presence."
        }
      ],
      "sv": [
        {
          "heading": "Oriental (Morning Star) vs. Occidental (Evening Star)",
          "body": "Planets rising before the Sun in the east are **Oriental (Matutine)**—bold, swift, and pioneering; planets setting after the Sun in the west are **Occidental (Vespertine)**—reflective, strategic, and deliberate."
        },
        {
          "heading": "Protected in Its Chariot",
          "body": "When a combust planet occupies its own domicile or exaltation, it rides in its **Chariot**, shielded from solar burning and empowered by the Sun's presence."
        }
      ]
    },
    "items": {
      "tr": [
        "Cazimi (0°00' – 0°17' Güneş Mesafesi) — Güneş'in tam kalbi; deha, ilham, yüksek odak ve korunan yetki.",
        "Yanıklık / Combust (0°18' – 8°30') — Güneş ışığında görünmez olma; içedönük, gizli veya aşırı baskı altında çalışma.",
        "Işınlar Altında / Under the Beams (8°30' – 15°00') — Alacakaranlık kuşağı; perde arkası hazırlık evresi.",
        "Helyak Doğuş (Heliacal Rising) — Gezegenin Güneş'in ışınlarından kurtulup şafakta ilk kez yeniden görünmesi (Yeniden Doğuş).",
        "Taht Arabası (Chariot) — Kendi burcunda veya yüceliminde olan gezegenin yanıklıktan muaf tutulması."
      ],
      "en": [
        "Cazimi (0°00' – 0°17' from Sun) — Heart of the Sun; brilliance, royal warrant, and concentrated focus.",
        "Combust (0°18' – 8°30' from Sun) — Hidden in solar glare; internalized or pressured expression.",
        "Under the Beams (8°30' – 15°00') — Twilight zone; preparation behind the curtain.",
        "Heliacal Rising — The planet's first visible reappearance at dawn emerging from the Sun's beams.",
        "In Its Chariot — A planet in domicile or exaltation shielded from combustion."
      ],
      "sv": [
        "Cazimi (0°00' – 0°17' from Sun) — Heart of the Sun; brilliance, royal warrant, and concentrated focus.",
        "Combust (0°18' – 8°30' from Sun) — Hidden in solar glare; internalized or pressured expression.",
        "Under the Beams (8°30' – 15°00') — Twilight zone; preparation behind the curtain.",
        "Heliacal Rising — The planet's first visible reappearance at dawn emerging from the Sun's beams.",
        "In Its Chariot — A planet in domicile or exaltation shielded from combustion."
      ]
    },
    "practice": {
      "tr": {
        "title": "Haritanda Güneş'e Yakın Gezegenleri (Cazimi / Yanık / Oryantal) İnceleme",
        "steps": [
          "Haritanda Güneş'in bulunduğu burçta veya komşu burçta **Güneş'e 15°'den daha yakın** bir gezegen (özellikle Merkür veya Venüs) olup olmadığına bak.",
          "Aradaki derece farkını hesapla: `0°17'` içindeyse **Cazimi**, `8°30'` içindeyse **Yanık**, `15°` içindeyse **Işınlar Altında** olarak işaretle.",
          "Gezegenin derecesi Güneş'ten **küçükse Oryantal (Güneş'ten önce doğan rehber)**, Güneş'ten **büyükse Oksidental (Güneş'ten sonra batan bilge)** olarak not et."
        ]
      },
      "en": {
        "title": "Checking Solar Proximity (Cazimi, Combust, Oriental) in Your Chart",
        "steps": [
          "Check whether any natal planet (especially Mercury or Venus) lies within **15° of your Sun**.",
          "Measure the exact orb: within `0°17'` is **Cazimi**, within `8°30'` is **Combust**, and within `15°` is **Under the Beams**.",
          "Note whether the planet is at an earlier zodiacal degree than the Sun (**Oriental / Morning Star**) or a later degree (**Occidental / Evening Star**)."
        ]
      },
      "sv": {
        "title": "Checking Solar Proximity (Cazimi, Combust, Oriental) in Your Chart",
        "steps": [
          "Check whether any natal planet (especially Mercury or Venus) lies within **15° of your Sun**.",
          "Measure the exact orb: within `0°17'` is **Cazimi**, within `8°30'` is **Combust**, and within `15°` is **Under the Beams**.",
          "Note whether the planet is at an earlier zodiacal degree than the Sun (**Oriental / Morning Star**) or a later degree (**Occidental / Evening Star**)."
        ]
      }
    },
    "closing": {
      "tr": "Ateşe uzaktan bakan ısınır, ateşe kapılan yanar; ateşin tam kalbine oturan ise ışık kesilir.",
      "en": "Who stands near the fire is warmed; who falls into the glare is burned; who sits in the heart of the Sun becomes light.",
      "sv": "Who stands near the fire is warmed; who falls into the glare is burned; who sits in the heart of the Sun becomes light."
    },
    "itemImages": [
      "/astroloji/item-gunesin-kalbi-cazimi-ve-yaniklik-1.jpg",
      "/astroloji/item-gunesin-kalbi-cazimi-ve-yaniklik-2.jpg",
      "/astroloji/item-gunesin-kalbi-cazimi-ve-yaniklik-3.jpg",
      "/astroloji/item-gunesin-kalbi-cazimi-ve-yaniklik-4.jpg",
      "/astroloji/item-gunesin-kalbi-cazimi-ve-yaniklik-5.jpg"
    ],
    "practiceImage": "/astroloji/practice-gunesin-kalbi-cazimi-ve-yaniklik.jpg"
  },
  {
    "slug": "retrograd-duraganlik-ve-sinodik-dongu",
    "glyph": "XIX",
    "image": "/astroloji/retrograd-duraganlik-ve-sinodik-dongu.jpg",
    "title": {
      "tr": "Gezegen Retroları, Durağanlık (Station) ve Sinodik Döngüler",
      "en": "Planetary Retrogrades, Stations, and Synodic Cycles",
      "sv": "Planetretrograder, Stationer och Synodiska Cykler"
    },
    "subtitle": {
      "tr": "İç Gezegenlerin (Merkür & Venüs) İlmek Hareketi ve Dış Gezegenlerin Güneş Karşıtlığı",
      "en": "The Epicyclic Loops of Mercury and Venus and the Solar Oppositions of Outer Planets",
      "sv": "Merkurius och Venus Slingor samt Yttre Planeters Soloppositioner"
    },
    "summary": {
      "tr": "Retrograd hareketin gerçek astronomisi; bir gezegenin gökyüzünde durup yön değiştirdiği Durağan (Stationary) günlerin yoğunluğu.",
      "en": "The true astronomy of retrograde motion; the intense focus of Stationary Direct and Stationary Retrograde pivots.",
      "sv": "Retrogradens verkliga astronomi och kraften i de dygn då en planet står stationär på himlen."
    },
    "paragraphs": {
      "tr": [
        "Hiçbir gezegen gerçek yörüngesinde geriye doğru gitmez; **Retrograd (℞ — Gerileme)** hareketi, farklı hızlarda Güneş etrafında dönen Dünya ile diğer gezegenlerin birbirini sollaması sırasında oluşan **yermerkezli (geosentrik) perspektif** olgusudur. Ancak astroloji yeryüzünde yaşayan insanın gökyüzüyle kurduğu açısal ilişkiyi incelediği için, bu görünür geri hareket son derece somut bir arketipsel karşılığa sahiptir.",
        "Klasik astronomide gezegenler iki gruba ayrılır: Yörüngesi Dünya ile Güneş arasında kalan **Alt/İç Gezegenler (Merkür ve Venüs)** yalnızca Güneş ile Dünya'nın arasına girdikleri **İç Kavuşum (*Inferior Conjunction*)** döneminde retro yaparlar. Yörüngesi Dünya'nın dışında kalan **Üst/Dış Gezegenler (Mars, Jüpiter, Satürn)** ise yalnızca **Güneş ile tam karşıt (180°) açıya** geldiklerinde — yani Dünya'ya en yakın ve gece boyu en parlak oldukları dönemde — retro yaparlar.",
        "Bir retro döngüsünün en güçlü anı gezegenin geriye giderken değil, yön değiştirmek için gökyüzünde adeta çivilenmiş gibi durduğu **Durağan (*Stationary Retrograde — SR* ve *Stationary Direct — SD*)** günleridir: Bir gezegenin tek bir derecede günlerce durması, o derecenin haritada taşıdığı konuyu büyüteç altına alır."
      ],
      "en": [
        "No planet reverses its physical orbit in space; **Retrograde (℞)** motion is the **geocentric perspective** created as Earth and the other planets overtake one another at different orbital speeds around the Sun. Because astrology reads the sky from the living perspective of Earth, this apparent reversal carries profound archetypal weight.",
        "Traditional astronomy divides the planets into two classes: the **Inferior Planets (Mercury and Venus)** turn retrograde only when passing between Earth and the Sun at **Inferior Conjunction**. The **Superior Planets (Mars, Jupiter, Saturn)** turn retrograde only around their **180° Opposition to the Sun**—when they are closest to Earth and shine brightest all night.",
        "The most potent moments of the cycle are the **Stations (*Stationary Retrograde — SR* and *Stationary Direct — SD*)**, when the planet halts on a single degree of the zodiac like a magnifying glass before reversing direction."
      ],
      "sv": [
        "Ingen planet vänder i sin fysiska bana; **Retrograd (℞)** rörelse uppstår ur det **geocentriska perspektivet** när Jorden och planeterna passerar varandra.",
        "**Inre planeter (Merkurius och Venus)** går retrograd vid inre solkonjunktion, medan **yttre planeter (Mars, Jupiter, Saturnus)** alltid går retrograd kring sin **180° opposition till Solen**."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Merkür (116 Gün) ve Venüs (584 Gün) Sinodik Ritimleri",
          "body": "**Merkür** yılda 3 kez (yaklaşık her 116 günde bir, 21–24 gün boyunca) retro yapar ve her yıl ağırlıklı olarak **tek bir elementin** burçlarında (ör. bir yıl Su burçlarında, ertesi yıl Hava burçlarında) geriler. **Venüs** ise her **584 günde (1.6 yılda) bir** 40–42 gün boyunca retro yapar; 8 yılda gökyüzünde kusursuz bir **Beş Köşeli Venüs Gülünü (Pentagram)** tamamlar."
        },
        {
          "heading": "Doğum Haritasında Retro Gezegen Taşımak",
          "body": "Doğum haritasında retro (℞) olan bir gezegen 'bozuk' veya 'zayıf' değildir; kalabalığın ezberlediği dışsal kurallar yerine kendi iç laboratuvarında çalışan, konuyu derinlemesine sorgulayan ve olgunluk yaşlarında özgün ustalığa dönüşen bir yetenektir."
        }
      ],
      "en": [
        {
          "heading": "The Synodic Rhythms of Mercury (116 Days) and Venus (584 Days)",
          "body": "**Mercury** retrogrades three times a year (~every 116 days for 3 weeks), clustering within a single element each year. **Venus** retrogrades once every **584 days** for ~40 days, tracing a five-petaled **Pentagram of Venus** across the zodiac every eight years."
        },
        {
          "heading": "Natal Retrograde Planets",
          "body": "A natal retrograde planet is neither broken nor weak; it operates inward first, questioning conventional formulas to forge independent mastery."
        }
      ],
      "sv": [
        {
          "heading": "The Synodic Rhythms of Mercury (116 Days) and Venus (584 Days)",
          "body": "**Mercury** retrogrades three times a year (~every 116 days for 3 weeks), clustering within a single element each year. **Venus** retrogrades once every **584 days** for ~40 days, tracing a five-petaled **Pentagram of Venus** across the zodiac every eight years."
        },
        {
          "heading": "Natal Retrograde Planets",
          "body": "A natal retrograde planet is neither broken nor weak; it operates inward first, questioning conventional formulas to forge independent mastery."
        }
      ]
    },
    "items": {
      "tr": [
        "Birinci Durağanlık (Stationary Retrograde / SR) — Gezegenin ileri hareketini durdurup içe/geriye dönmeye hazırlandığı eşik.",
        "İç Kavuşum / Karşıtlık Zirvesi — Merkür/Venüs için Güneş'in Kalbi (Cazimi); Mars/Jüpiter/Satürn için Güneş Karşıtlığı.",
        "İkinci Durağanlık (Stationary Direct / SD) — İçsel arkeolojinin tamamlanıp gezegenin yeniden ileri harekete uyandığı en güçlü odak günü.",
        "Retro Gölge Süreci (Pre & Post Shadow) — Gezegenin gerileyeceği dereceye ilk girdiği gün ile o dereceden son çıktığı gün arasındaki hazırlık ve toparlanma koridoru.",
        "Venüs Beşgeni (8 Yıllık Pentagram) — Venüs'ün her 8 yılda bir gökyüzünde 5 retro noktasıyla çizdiği altın oran yıldızı."
      ],
      "en": [
        "First Station (Stationary Retrograde / SR) — The pivot where forward motion halts and inward review begins.",
        "Midpoint Culmination — Inferior Cazimi for Mercury/Venus; 180° Solar Opposition for Mars/Jupiter/Saturn.",
        "Second Station (Stationary Direct / SD) — The decisive pivot where the planet awakens into direct motion.",
        "Retrograde Shadow Zone — The zodiacal arc traversed three times (direct, retrograde, direct).",
        "Pentagram of Venus (8-Year Cycle) — The five-pointed golden-ratio star traced by Venus's synodic conjunctions."
      ],
      "sv": [
        "First Station (Stationary Retrograde / SR) — The pivot where forward motion halts and inward review begins.",
        "Midpoint Culmination — Inferior Cazimi for Mercury/Venus; 180° Solar Opposition for Mars/Jupiter/Saturn.",
        "Second Station (Stationary Direct / SD) — The decisive pivot where the planet awakens into direct motion.",
        "Retrograde Shadow Zone — The zodiacal arc traversed three times (direct, retrograde, direct).",
        "Pentagram of Venus (8-Year Cycle) — The five-pointed golden-ratio star traced by Venus's synodic conjunctions."
      ]
    },
    "practice": {
      "tr": {
        "title": "Bir Retro Dönemini Kendi Haritanda Okuma — 3 Adım",
        "steps": [
          "Retro yapan gezegenin **hangi burç ve dereceler arasında** gerilediğini (ör. `20° Akrep → 5° Akrep`) not et.",
          "Bu burcun kendi doğum haritanda **kaçıncı eve** düştüğünü bul; o ev, bu dönemde zorlamak yerine **yeniden gözden geçireceğin ve onaracağın** odadır.",
          "Gezegenin **Durağanlaştığı (SR ve SD)** iki tarihe ve tam ortasındaki **Güneş kavuşumu/karşıtlığı** gününe özel dikkat göster."
        ]
      },
      "en": {
        "title": "Reading a Retrograde Transit in Your Chart — 3 Steps",
        "steps": [
          "Note the exact **sign and degree span** of the retrograde loop.",
          "Locate which **natal house** holds that sign—that is the life arena calling for review, repair, and recalibration.",
          "Pay special attention to the two **Station dates (SR and SD)** and the midpoint Sun alignment."
        ]
      },
      "sv": {
        "title": "Reading a Retrograde Transit in Your Chart — 3 Steps",
        "steps": [
          "Note the exact **sign and degree span** of the retrograde loop.",
          "Locate which **natal house** holds that sign—that is the life arena calling for review, repair, and recalibration.",
          "Pay special attention to the two **Station dates (SR and SD)** and the midpoint Sun alignment."
        ]
      }
    },
    "closing": {
      "tr": "Yay geriye çekilmeden ok ileriye fırlamaz; gökyüzünün her duraksaması daha uzağı görmek içindir.",
      "en": "The bowstring must be drawn back before the arrow flies forward; every celestial pause prepares a truer aim.",
      "sv": "The bowstring must be drawn back before the arrow flies forward; every celestial pause prepares a truer aim."
    },
    "itemImages": [
      "/astroloji/item-retrograd-duraganlik-ve-sinodik-dongu-1.jpg",
      "/astroloji/item-retrograd-duraganlik-ve-sinodik-dongu-2.jpg",
      "/astroloji/item-retrograd-duraganlik-ve-sinodik-dongu-3.jpg",
      "/astroloji/item-retrograd-duraganlik-ve-sinodik-dongu-4.jpg",
      "/astroloji/item-retrograd-duraganlik-ve-sinodik-dongu-5.jpg"
    ],
    "practiceImage": "/astroloji/practice-retrograd-duraganlik-ve-sinodik-dongu.jpg"
  },
  {
    "slug": "dunya-astrolojisi-kiranlar-ve-tutulmalar",
    "glyph": "XX",
    "image": "/astroloji/dunya-astrolojisi-kiranlar-ve-tutulmalar.jpg",
    "title": {
      "tr": "Dünya Astrolojisi (Ahkâm-ı Âlem): Büyük Kıranlar ve Mevsim Girişleri",
      "en": "Mundane Astrology: Great Conjunctions and Aries Ingresses",
      "sv": "Mundan Astrologi: Stora Konjunktioner och Vårdagjämningshoroskop"
    },
    "subtitle": {
      "tr": "Mâşâallah ve Ebû Ma'şer'de Jüpiter–Satürn Kıranları (20 / 200 / 800 Yıl) ve 0° Koç Haritası",
      "en": "Jupiter–Saturn Conjunctions (20 / 200 / 800 Years) and the 0° Aries Ingress in Masha'allah and Abu Ma'shar",
      "sv": "Jupiter–Saturnus-konjunktioner (20 / 200 / 800 År) och 0° Väduren-ingressen"
    },
    "summary": {
      "tr": "Bireylerin değil, medeniyetlerin, çağların, ekonomilerin ve mevsimlerin ritmini ölçen en eski gökbilim disiplini.",
      "en": "The oldest branch of astrology, measuring the macro-cycles of civilizations, economies, and epochs rather than individual nativities.",
      "sv": "Astrologins äldsta gren, som mäter civilisationers, epokers och årstiders stora cykler."
    },
    "paragraphs": {
      "tr": [
        "Astrolojinin tarihsel olarak en eski dalı bireysel doğum haritaları değil, toplumların, iklimlerin ve medeniyetlerin büyük döngülerini inceleyen **Dünya Astrolojisi**dir (Mezopotamya'da *Enûma Anu Enlil*, İslam ve Osmanlı dünyasında **Ahkâm-ı Âlem / İlm-i Kıranât**, Batı'da **Mundane Astrology**).",
        "Sâsânî İran'ından **Mâşâallah**, **Ömer bin Ferruhân et-Taberî** ve **Ebû Ma'şer**'e, oradan Johannes Kepler'e uzanan bu disiplinin omurgasını **Jüpiter ve Satürn Kavuşumları (*Büyük Kıran / Great Conjunction*)** oluşturur. Gözle görülebilen en yavaş iki gezegen olan Jüpiter (12 yıl) ve Satürn (29.5 yıl), her **20 yılda bir** gökyüzünde kavuşarak yeni bir toplumsal ve ekonomik yirmi yıl başlatır.",
        "Daha da önemlisi, bu 20 yıllık kavuşumlar yaklaşık **200 yıl boyunca hep aynı elementin** burçlarında (ör. Ateş veya Toprak) gerçekleşir; her 200 yılda bir element değiştirmesine **Orta Kıran (*Middle Mutation*)**, tüm dört elementi tamamlayıp **~800 yılda bir** yeniden Koç (Ateş) üçlüsüne dönmesine ise **Büyük Kıran (*Great Mutation*)** denir."
      ],
      "en": [
        "Historically the oldest branch of astrology is not individual natal work, but **Mundane Astrology** (Babylonian *Enūma Anu Enlil*, Arabic **Aḥkām al-'Ālam / 'Ilm al-Qirānāt**), which studies the macro-cycles of civilizations, epochs, and seasons.",
        "From **Masha'allah** and **Abu Ma'shar** to **Johannes Kepler**, its backbone is the cycle of **Jupiter–Saturn Conjunctions (*Great Conjunctions*)**. Meeting once every **20 years**, the two slowest visible planets mark generational shifts in governance, economy, and social structure.",
        "For roughly **200 years**, these 20-year conjunctions repeat within signs of the **same element (Triplicity)** before shifting to the next element (**Middle Mutation**), completing all four elements in a grand **~800-year cycle (*Great Mutation*)**."
      ],
      "sv": [
        "Astrologins äldsta gren är **Mundan Astrologi** (*Aḥkām al-'Ālam*), som studerar civilisationers och epokers stora cykler.",
        "Dess ryggrad utgörs av **Jupiter–Saturnus-konjunktionerna (*Stora Konjunktioner*)** vart **20:e år**, som byter element ungefär vart **200:e år** och fullbordar alla fyra elementen på **~800 år**."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "0° Koç Mevsim Giriş Haritası (Nevruz / Aries Ingress)",
          "body": "Dünya astrolojisinde her yılın 'doğum haritası', Güneş'in ilkbahar ekinoksunda **0°00'00\" Koç burcuna** girdiği saniye için başkent koordinatlarına göre çıkarılan **Mevsim Giriş (*Aries Ingress*)** haritasıdır. Giriş haritasının Yükselen burcu Sabit ise o harita tüm yıl (12 ay) boyunca geçerlidir; Değişken ise 6 ay (Terazi ekinoksuna kadar), Öncü ise her 3 ayda bir (Yengeç, Terazi ve Oğlak girişleriyle birlikte) okunur."
        },
        {
          "heading": "2020 Kova Kıranı: Toprak Çağından Hava Çağına Geçiş",
          "body": "1802–2020 arasındaki yaklaşık 200 yıl boyunca Jüpiter–Satürn kavuşumları ağırlıklı olarak **Toprak burçlarında** (sanayi devrimi, kömür/petrol, ulus sınırları, ağır maddi üretim) gerçekleşti. **21 Aralık 2020**'de `0° Kova` derecesinde gerçekleşen kavuşumla birlikte insanlık 200 yıllık **Hava Üçlüsü (Kova–İkizler–Terazi)** dönemine — bilgi ağları, yapay zeka, merkeziyetsiz yapılar ve zihinsel hız çağına — adım attı."
        }
      ],
      "en": [
        {
          "heading": "The 0° Aries Ingress Chart (World New Year)",
          "body": "In mundane astrology, the annual chart of a nation is cast for the exact second the Sun enters **0°00'00\" Aries** at the vernal equinox. If the Ingress Ascendant is Fixed, the single chart governs the entire year; if Mutable, six months; if Cardinal, all four seasonal ingresses (Aries, Cancer, Libra, Capricorn) are read."
        },
        {
          "heading": "The 2020 Aquarius Mutation: From Earth to Air",
          "body": "After ~200 years of Jupiter–Saturn conjunctions in **Earth signs** (industrialization, heavy material capital, fixed borders), the **21 December 2020** conjunction at `0° Aquarius` inaugurated a 200-year **Air Triplicity** epoch of networks, information, and intellectual transformation."
        }
      ],
      "sv": [
        {
          "heading": "The 0° Aries Ingress Chart (World New Year)",
          "body": "In mundane astrology, the annual chart of a nation is cast for the exact second the Sun enters **0°00'00\" Aries** at the vernal equinox. If the Ingress Ascendant is Fixed, the single chart governs the entire year; if Mutable, six months; if Cardinal, all four seasonal ingresses (Aries, Cancer, Libra, Capricorn) are read."
        },
        {
          "heading": "The 2020 Aquarius Mutation: From Earth to Air",
          "body": "After ~200 years of Jupiter–Saturn conjunctions in **Earth signs** (industrialization, heavy material capital, fixed borders), the **21 December 2020** conjunction at `0° Aquarius` inaugurated a 200-year **Air Triplicity** epoch of networks, information, and intellectual transformation."
        }
      ]
    },
    "items": {
      "tr": [
        "Küçük Kıran (20 Yıllık Jüpiter–Satürn Kavuşumu) — Toplumsal kuşak, ekonomi ve yönetim paradigması değişimi.",
        "Orta Kıran (~200 Yıllık Element Değişimi) — Medeniyetin temel üretim aracının (Toprak → Hava gibi) kökten dönüşümü.",
        "Büyük Kıran (~800 Yıllık Tam Zodyak Devri) — Tarihsel çağların ve büyük imparatorluk/kültür havzalarının döngüsü.",
        "0° Koç Giriş Haritası (Aries Ingress) — İlkbahar ekinoksunda çıkarılan ve yılın küresel gündemini gösteren ana harita.",
        "Yılın Efendisi (Mübtezz / Almuten of the Year) — Koç giriş haritasında en yüksek asalet puanına sahip olan gezegen."
      ],
      "en": [
        "20-Year Great Conjunction (Jupiter–Saturn) — Generational shift in social order and economic rhythm.",
        "~200-Year Triplicity Shift (Middle Mutation) — Transformation of civilization's primary element (e.g., Earth to Air in 2020).",
        "~800-Year Great Mutation — Full circuit of conjunctions through Fire, Earth, Air, and Water.",
        "0° Aries Ingress Chart — The vernal equinox chart governing the astrological year.",
        "Lord of the Year (Almuten of the Ingress) — The most dignified planet ruling the Aries Ingress chart."
      ],
      "sv": [
        "20-Year Great Conjunction (Jupiter–Saturn) — Generational shift in social order and economic rhythm.",
        "~200-Year Triplicity Shift (Middle Mutation) — Transformation of civilization's primary element (e.g., Earth to Air in 2020).",
        "~800-Year Great Mutation — Full circuit of conjunctions through Fire, Earth, Air, and Water.",
        "0° Aries Ingress Chart — The vernal equinox chart governing the astrological year.",
        "Lord of the Year (Almuten of the Ingress) — The most dignified planet ruling the Aries Ingress chart."
      ]
    },
    "practice": {
      "tr": {
        "title": "20 Yıllık Jüpiter–Satürn Kıranını Kendi Haritanda Bulma",
        "steps": [
          "Son büyük Jüpiter–Satürn kavuşumunun gerçekleştiği **`0° Kova`** derecesini kendi doğum haritanda bul.",
          "Kova burcunun haritanda **kaçıncı eve** düştüğünü tespit et; o ev 2020–2040 arasındaki 20 yıllık dönemde hayatında tamamen yeni bir mimariyle kurulan alandır.",
          "Bir önceki 20 yıllık döngüyü (`Mayıs 2000 — 22° Boğa`) kontrol ederek 2000–2020 arasında Boğa evinde neleri inşa ettiğini karşılaştır."
        ]
      },
      "en": {
        "title": "Locating the 20-Year Jupiter–Saturn Conjunction in Your Chart",
        "steps": [
          "Find **`0° Aquarius`** (the degree of the December 2020 Great Conjunction) in your natal chart.",
          "Identify which **natal house** Aquarius occupies—that is the life domain undergoing a 20-year structural renewal from 2020 to 2040.",
          "Compare it with the house of **`22° Taurus`** (the May 2000 conjunction) to see what you built between 2000 and 2020."
        ]
      },
      "sv": {
        "title": "Locating the 20-Year Jupiter–Saturn Conjunction in Your Chart",
        "steps": [
          "Find **`0° Aquarius`** (the degree of the December 2020 Great Conjunction) in your natal chart.",
          "Identify which **natal house** Aquarius occupies—that is the life domain undergoing a 20-year structural renewal from 2020 to 2040.",
          "Compare it with the house of **`22° Taurus`** (the May 2000 conjunction) to see what you built between 2000 and 2020."
        ]
      }
    },
    "closing": {
      "tr": "Saniyeleri yelkovan, yılları Güneş, çağları ise Jüpiter ile Satürn'ün kavuşumu yazar.",
      "en": "The second-hand writes the moment, the Sun writes the year, and the conjunction of Jupiter and Saturn writes the age.",
      "sv": "The second-hand writes the moment, the Sun writes the year, and the conjunction of Jupiter and Saturn writes the age."
    },
    "itemImages": [
      "/astroloji/item-dunya-astrolojisi-kiranlar-ve-tutulmalar-1.jpg",
      "/astroloji/item-dunya-astrolojisi-kiranlar-ve-tutulmalar-2.jpg",
      "/astroloji/item-dunya-astrolojisi-kiranlar-ve-tutulmalar-3.jpg",
      "/astroloji/item-dunya-astrolojisi-kiranlar-ve-tutulmalar-4.jpg",
      "/astroloji/item-dunya-astrolojisi-kiranlar-ve-tutulmalar-5.jpg"
    ],
    "practiceImage": "/astroloji/practice-dunya-astrolojisi-kiranlar-ve-tutulmalar.jpg"
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
      "tr": "3 Ekim – 14 Kasım 2026: Akşam yıldızından sabah yıldızına geçiş, iç kavuşum ve 12 yükselen burç yorumu.",
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
    "href": "/astroloji/merkur-retrosu",
    "glyph": "☿℞",
    "title": {
      "tr": "Merkür Akrep Retrosu (24 Ekim – 13 Kasım)",
      "en": "Mercury Retrograde in Scorpio (24 Oct – 13 Nov)",
      "sv": "Merkurius retrograd i Skorpionen (24 okt – 13 nov)"
    },
    "summary": {
      "tr": "20°58' Akrep’ten 5°02' Akrep’e zihinsel arkeoloji, 4 Kasım Merkür Cazimi, Çifte Retro (☿℞ + ♀℞) ve 12 yükselen burç yorumu.",
      "en": "From 20°58' to 5°02' Scorpio: mental archaeology, 4 November Cazimi, the Double Retrograde, and 12 rising sign readings.",
      "sv": "Från 20°58' till 5°02' Skorpionen: mental arkeologi, 4 november Cazimi, dubbelretrograden och 12 stigande tecken."
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
  },
  {
    "href": "/astroloji/akrep-yeniayi",
    "glyph": "♏●",
    "title": {
      "tr": "9 Kasım Akrep Yeniayı",
      "en": "9 November Scorpio New Moon",
      "sv": "9 november · Nymåne i Skorpionen"
    },
    "summary": {
      "tr": "16°53' Akrep’te küllerinden doğuş, kriz temizliği, ortak kaynaklar ve 12 yükselen burç için derin yenilenme.",
      "en": "Rebirth at 16°53' Scorpio: crisis clearing, shared resources, shadow alchemy, and readings for all 12 rising signs.",
      "sv": "Pånyttfödelse på 16°53' Skorpionen: krisrening, delade resurser, alkemi och läsning för alla 12 stigande tecken."
    }
  },
  {
    "href": "/astroloji/ikizler-dolunayi",
    "glyph": "♊○",
    "title": {
      "tr": "24 Kasım İkizler Dolunayı",
      "en": "24 November Gemini Full Moon",
      "sv": "24 november · Fullmåne i Tvillingarna"
    },
    "summary": {
      "tr": "2°20' İkizler–Yay ekseninde Merkür ve Venüs retroları sonrası ilk büyük netlik, sözleşmeler ve 12 yükselen burç yorumu.",
      "en": "At 2°20' Gemini–Sagittarius: the first great clarity after the retrogrades, contracts, and readings for all 12 rising signs.",
      "sv": "På 2°20' Tvillingarna–Skytten: den första stora klarheten efter retrograderna, avtal och alla 12 stigande tecken."
    }
  }
];

export function findAstrologyDoor(slug: string): TraditionSubDoor | undefined {
  return astrologyDoors.find((d) => d.slug === slug);
}
