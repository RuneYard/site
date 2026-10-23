import type { Lang } from "@/lib/copy";

export type AppChapter = {
  heading: string;
  body: string;
};

export type ShelfApp = {
  slug: string;
  glyph: string;
  image: string;
  name: string;
  badge: Record<Lang, string>;
  statusLabel: Record<Lang, string>;
  line: Record<Lang, string>;
  features: Record<Lang, readonly string[]>;
  chapters: Record<Lang, readonly AppChapter[]>;
  closing: Record<Lang, string>;
  googlePlay: string;
  appStore: string;
};

export const appsHall = {
  title: {
    tr: "Uygulamalar · RuneYard Dijital Ocak",
    en: "Applications · RuneYard Digital Hearth",
    sv: "Appar · RuneYard Digital Härd",
  },
  subtitle: {
    tr: "Kadim sembol sistemlerini, gökyüzü zamanlamasını ve rüya hafızasını günlük pratiğe taşıyan mobil araçlar",
    en: "Mobile instruments carrying ancient symbol systems, celestial timing, and dream memory into daily practice",
    sv: "Mobila verktyg som bär uråldriga symbolsystem, himmelsk tidmätning och drömminne in i daglig praktik",
  },
  intro: {
    tr: [
      "RuneYard dijital araçları; rün ilmini, ay ve gezegen saatleri hesabını, rüya sembolizmini ve mitolojik hafızayı cebinizde taşıyabileceğiniz birer çalışma defteri olarak tasarlandı. Yüzeysel bildirimler yerine gerçek astronomik hesaplamalar, sesli Galdr titreşimleri ve geleneksel açılım disiplinleriyle çalışırlar.",
      "Her uygulamanın kartından mağaza bağlantılarına ulaşabilir veya uygulama odasına girerek içerdiği modülleri ayrıntılı inceleyebilirsiniz.",
    ],
    en: [
      "The RuneYard digital tools are crafted as portable study companions for runic lore, lunar and planetary hour calculation, dream symbolism, and mythological memory. Rather than superficial notifications, they operate on authentic astronomical calculations, vocal Galdr frequencies, and traditional spread disciplines.",
      "From each card below you can access the store links directly or enter the application's study room to explore its modules in detail.",
    ],
    sv: [
      "RuneYards digitala verktyg är skapade som bärbara studieanteckningsböcker för runlära, beräkning av månfaser och planettimmar, drömsymbolik och mytologiskt minne. I stället för ytliga notiser bygger de på verkliga astronomiska beräkningar, röstburna Galdr-frekvenser och traditionella läggningar.",
      "Från varje kort nedan når du butikslänkarna direkt eller kan stiga in i appens eget rum för att utforska dess moduler i detalj.",
    ],
  },
  ui: {
    tr: {
      featuresLabel: "Temel Özellikler ve Modüller",
      openDetails: "Uygulama Odasını Aç →",
      backToApps: "← Tüm Uygulamalara Dön",
      downloadHeading: "İndirme ve Erişim Bağlantıları",
    },
    en: {
      featuresLabel: "Core Features & Modules",
      openDetails: "Open App Room →",
      backToApps: "← Back to All Apps",
      downloadHeading: "Download & Access Links",
    },
    sv: {
      featuresLabel: "Kärnfunktioner & Moduler",
      openDetails: "Öppna Apprummet →",
      backToApps: "← Tillbaka till Alla Appar",
      downloadHeading: "Nedladdnings- & Åtkomstlänkar",
    },
  },
} as const;

export const apps: ShelfApp[] = [
  {
    slug: "rune-yard",
    glyph: "ᚠ",
    image: "/apps/runeyard.jpg",
    name: "Rune Yard",
    badge: {
      tr: "Elder Futhark · Galdr · Bindrune",
      en: "Elder Futhark · Galdr · Bindrune",
      sv: "Äldre Futhark · Galdr · Bindrune",
    },
    statusLabel: {
      tr: "Yayında · iOS & Android",
      en: "Live · iOS & Android",
      sv: "Tillgänglig · iOS & Android",
    },
    line: {
      tr: "24 Elder Futhark rünü, doğum ve ruh rünü rehberliği, 5 kadim açılım, sesli Galdr ritüelleri ve niyetine özel altın mühürler.",
      en: "24 Elder Futhark runes, birth and soul rune guidance, 5 ancient spreads, vocal Galdr rituals, and custom golden bindrunes.",
      sv: "24 Elder Futhark-runor, födelse- och själsruneguide, 5 forntida läggningar, muntliga Galdr-ritualer och personliga gyllene bindrunor.",
    },
    features: {
      tr: [
        "24 Elder Futhark rününün düz ve gölge okumaları, mitolojik kökleri ve element bağları",
        "Doğum tarihine ve saate göre Doğum Rünü ve Ruh Rünü hesaplaması",
        "Tek Taş, Üç Norn (Urd–Verdandi–Skuld), Beş Element, Yggdrasil ve Dokuz Dünya dahil 5 kadim açılım",
        "Sesli Galdr frekans ritüelleri ve niyete özel altın Bindrune (rün bağlama) mühür atölyesi",
      ],
      en: [
        "Upright and shadow readings, mythological roots, and elemental correspondences for all 24 Elder Futhark runes",
        "Birth Rune and Soul Rune calculation based on natal date and solar degree",
        "5 ancient spreads including Single Stave, Three Norns (Urd–Verdandi–Skuld), Five Elements, and Yggdrasil",
        "Vocal Galdr frequency rituals and a custom golden Bindrune seal studio for personal intentions",
      ],
      sv: [
        "Raka och skuggade tolkningar, mytologiska rötter och elementband för alla 24 Elder Futhark-runor",
        "Beräkning av Födelseruna och Själsruna utifrån födelsedatum och solgrad",
        "5 forntida läggningar inklusive Enkelstav, De Tre Nornorna (Urd–Verdandi–Skuld), Fem Element och Yggdrasil",
        "Muntliga Galdr-frekvensritualer och en verkstad för personliga gyllene Bindrunor",
      ],
    },
    chapters: {
      tr: [
        {
          heading: "Yirmi Dört Kapı, Doğum Rünü ve Beş Kadim Açılım",
          body: "Rune Yard, Elder Futhark’ın 24 rününü yüzeysel tek kelimelik fal kartları olarak değil; üç Aett dizilimi, mitolojik arka planı ve düz/gölge akışlarıyla eksiksiz bir kütüphane olarak sunar. Güneşin yıl çarkındaki derecesine göre kendi Doğum Rününüzü hesaplayabilir; Tek Rün, Üç Norn (Geçmişin Kökü, Şimdinin Dokuması, Geleceğin Yönü) ve Dokuz Dünya açılımlarıyla derin okumalar yapabilirsiniz.",
        },
        {
          heading: "Sesli Galdr Ritüelleri ve Altın Bindrune Mühür Atölyesi",
          body: "Kuzey geleneğinde rün yalnızca çizilen bir şekil (Stöðul) değil, aynı zamanda seslendirilen bir titreşimdir (Galdr). Uygulama içindeki sesli Galdr modülüyle her rünün kadim ses frekansını dinleyerek nefes ve odak çalışması yapabilir; Bindrune atölyesinde ise koruma, berraklık, irade veya şifa niyetinize göre birden fazla rünü tek bir altın mühürde birleştirip kaydedebilirsiniz.",
        },
      ],
      en: [
        {
          heading: "Twenty-Four Doors, Birth Rune & Five Ancient Spreads",
          body: "Rune Yard presents the 24 staves of the Elder Futhark not as one-word fortune cards, but as a complete library structured by the Three Aettir, mythological lore, and upright/shadow dynamics. Calculate your personal Birth Rune by solar degree and cast readings across five traditional spreads including the Three Norns and Nine Worlds.",
        },
        {
          heading: "Vocal Galdr Rituals & The Golden Bindrune Studio",
          body: "In Northern tradition, a rune is both a carved stave (Stöðul) and a chanted vibration (Galdr). With the built-in vocal Galdr module, you can attune to each rune's phonetic resonance during breathwork, and use the Bindrune studio to fuse multiple runes into a balanced golden seal tailored to your intention.",
        },
      ],
      sv: [
        {
          heading: "Tjugofyra Portar, Födelseruna & Fem Forntida Läggningar",
          body: "Rune Yard presenterar den äldre futharkens 24 stavar som ett komplett bibliotek strukturerat efter de tre ätterna, mytologisk bakgrund samt raka och skuggade flöden. Beräkna din personliga Födelseruna och gör läggningar med bland annat De Tre Nornorna och De Nio Världarna.",
        },
        {
          heading: "Muntliga Galdr-Ritualer & Gyllene Bindruneverkstad",
          body: "I nordisk tradition är en runa både en ristad stav (Stöðul) och en sjungen vibration (Galdr). Med Galdr-modulen kan du lyssna till varje runas ljudresonans under andningsarbete och i Bindruneverkstaden förena flera runor till ett gyllene sigill.",
        },
      ],
    },
    closing: {
      tr: "Taşa kazınan işaret, sesle uyandırıldığında yol gösterir.",
      en: "The mark incised in stone guides the way when awakened by voice.",
      sv: "Tecknet ristat i sten visar vägen när det väcks av rösten.",
    },
    googlePlay: "https://play.google.com/store/apps/details?id=build.runeyard",
    appStore: "https://apps.apple.com/us/app/rune-yard/id6818285230",
  },
  {
    slug: "moon-yard",
    glyph: "☽",
    image: "/apps/moonyard.jpg",
    name: "Moon Yard",
    badge: {
      tr: "Ay Evreleri · Boşlukta Saatler · 24 Gezegen Saati",
      en: "Lunar Phases · Void-of-Course · 24 Planetary Hours",
      sv: "Månfaser · Tomgångstimmar · 24 Planettimmar",
    },
    statusLabel: {
      tr: "Hazırlanıyor · Yakında",
      en: "In Development · Coming Soon",
      sv: "Under Utveckling · Kommer Snart",
    },
    line: {
      tr: "Konuma göre ay takvimi: günlük ay evresi, ayın bulunduğu burç, ay boşlukta saatleri ve 24 gezegen saati.",
      en: "Location-based moon calendar: daily lunar phase, Moon’s zodiac sign, void-of-course hours, and 24 planetary hours.",
      sv: "Platsbaserad månkalender: daglig månfas, månens stjärntecken, tomgångstimmar och 24 planetariska timmar.",
    },
    features: {
      tr: [
        "Bulunduğunuz enlem ve boylama göre gerçek Gündoğumu ve Günbatımı üzerinden hesaplanan 24 Keldani Gezegen Saati",
        "Anlık Ay evresi, aydınlanma yüzdesi ve Ay’ın içinden geçtiği zodyak burcu takibi",
        "Ay Boşlukta (Void of Course) başlangıç ve bitiş saatleri ile seçim astrolojisi uyarıları",
        "Gün yöneticisi gezegen ve saat yöneticisi gezegene göre ritüel, niyet ve çalışma zamanlaması",
      ],
      en: [
        "24 Chaldean Planetary Hours calculated from true local sunrise and sunset at your exact coordinates",
        "Real-time lunar phase, illumination percentage, and the Moon's current zodiacal sign",
        "Exact Void-of-Course Moon start and end windows with electional astrology notes",
        "Ritual, study, and action timing aligned with the planetary ruler of the day and hour",
      ],
      sv: [
        "24 kaldeiska planettimmar beräknade utifrån faktisk soluppgång och solnedgång på din plats",
        "Aktuell månfas, belysningsgrad och månens nuvarande zodiaktecken",
        "Exakta start- och sluttider för månen i tomgång (Void of Course)",
        "Tidsval för ritual, studier och handling i samklang med dagens och timmens planetstyrare",
      ],
    },
    chapters: {
      tr: [
        {
          heading: "Keldani Sırası ve Gerçek Eşit Olmayan Gezegen Saatleri",
          body: "Klasik astrolojide bir gezegen saati 60 dakikalık sabit bir saat dilimi değildir; bulunduğunuz şehrin o günkü Gündoğumu ile Günbatımı arasındaki sürenin 12’ye, gece süresinin ise ayrıca 12’ye bölünmesiyle elde edilen canlı bir astronomik ölçüdür. Moon Yard, konumunuza göre Satürn, Jüpiter, Mars, Güneş, Venüs, Merkür ve Ay saatlerini Keldani dizilimiyle saniyesi saniyesine hesaplar.",
        },
        {
          heading: "Ay’ın Burç Yolculuğu ve Ay Boşlukta (Void of Course) Pencereleri",
          body: "Ay bir burçtan ayrılmadan önce son temel açısını yaptığında, bir sonraki burca geçene kadar ‘Boşlukta’ (Void of Course) kabul edilir. Geleneksel seçim astrolojisinde bu saatler yeni bir girişim başlatmak yerine tefekkür, dinlenme ve içsel arınma için kullanılır. Moon Yard bu geçiş pencerelerini önceden bildirir.",
        },
      ],
      en: [
        {
          heading: "The Chaldean Order & True Unequal Planetary Hours",
          body: "In classical astrology, a planetary hour is not a fixed 60-minute clock hour; it is a living astronomical measure found by dividing the daylight span between local sunrise and sunset into 12 equal parts, and the night span into 12 parts. Moon Yard computes the hours of Saturn, Jupiter, Mars, Sun, Venus, Mercury, and Moon for your exact coordinates.",
        },
        {
          heading: "Lunar Ingresses & Void-of-Course Windows",
          body: "Between its final major aspect in one sign and its ingress into the next, the Moon is Void of Course. Classical electional tradition reserves these windows for contemplation and rest rather than launching new ventures. Moon Yard tracks every lunar ingress and void window with precision.",
        },
      ],
      sv: [
        {
          heading: "Den Kaldeiska Ordningen & Äkta Planettimmar",
          body: "I klassisk astrologi är en planettimme inte 60 fasta minuter, utan ett levande astronomiskt mått där dagens längd mellan soluppgång och solnedgång delas i 12 delar och natten i 12 delar. Moon Yard beräknar Saturnus, Jupiters, Mars, Solens, Venus, Merkurius och Månens timmar för din exakta plats.",
        },
        {
          heading: "Månens Teckenbyten & Tomgångstimmar (Void of Course)",
          body: "Från sin sista huvudAspekt i ett tecken tills den går in i nästa befinner sig månen i tomgång (Void of Course). Moon Yard visar dessa tidsfönster i förväg så att du kan välja rätt tid för handling respektive vila.",
        },
      ],
    },
    closing: {
      tr: "Her tohum kendi mevsiminde, her niyet kendi gezegen saatinde kök salar.",
      en: "Every seed takes root in its season, every intention in its planetary hour.",
      sv: "Varje frö slår rot i sin årstid, varje avsikt i sin planettimme.",
    },
    googlePlay: "",
    appStore: "",
  },
  {
    slug: "dream-yard",
    glyph: "◈",
    image: "/apps/dreamyard.jpg",
    name: "Dream Yard",
    badge: {
      tr: "Rüya Sembolleri · Rüya Günlüğü · Lüsid Pratikler",
      en: "Dream Symbols · Dream Journal · Lucid Practices",
      sv: "Drömsymboler · Drömdagbok · Klardrömsövningar",
    },
    statusLabel: {
      tr: "Hazırlanıyor · Yakında",
      en: "In Development · Coming Soon",
      sv: "Under Utveckling · Kommer Snart",
    },
    line: {
      tr: "Rüya sembolleri rehberi, kişisel rüya günlüğü, bilinçli rüya pratikleri ve uyku öncesi frekans sesleri.",
      en: "Dream symbol guide, personal dream journal, lucid dreaming practices, and pre-sleep frequency soundscapes.",
      sv: "Drömsymbolguide, personlig drömdagbok, klardrömsövningar och frekvensljud inför sömnen.",
    },
    features: {
      tr: [
        "Arketipsel, mitolojik ve şamanik kökleriyle hazırlanmış kapsamlı Rüya Sembolleri Sözlüğü",
        "Ay evresi ve tarihle otomatik eşleşen şifreli Kişisel Rüya Günlüğü ve sembol tekrar analizi",
        "Bilinçli rüya (Lucid Dream) farkındalık egzersizleri ve uyku öncesi niyet (inkübasyon) protokolleri",
        "Gece eşiğinde zihni dinginleştiren teta/delta frekans ses dokuları",
      ],
      en: [
        "Comprehensive Dream Symbol Lexicon grounded in archetypal, mythological, and shamanic traditions",
        "Personal Dream Journal automatically tagged with lunar phase and recurring motif tracking",
        "Lucid dreaming awareness exercises and pre-sleep dream incubation protocols",
        "Pre-sleep theta/delta acoustic soundscapes for threshold stillness",
      ],
      sv: [
        "Omfattande drömsymbollexikon förankrat i arketypiska, mytologiska och schamanistiska traditioner",
        "Personlig drömdagbok automatiskt kopplad till månfas och återkommande symbolmönster",
        "Övningar för klardrömmande (Lucid Dreaming) och dröminkubation före sömnen",
        "Akustiska frekvensljudbilder för stillhet vid sömnens tröskel",
      ],
    },
    chapters: {
      tr: [
        {
          heading: "Arketipsel Rüya Sembolleri ve Rüya Günlüğü Disiplini",
          body: "Kadim geleneklerde rüya, ruhun gece yolculuğunda sembollerle konuşmasıdır. Ancak sabah uyanışından sonraki ilk dakikalarda kayıt altına alınmayan rüyalar unutulur. Dream Yard, gördüğünüz rüyayı o gecenin Ay evresiyle birlikte kaydetmenizi ve zaman içinde hangi arketiplerin (su, yılan, eşik, ağaç, uçuş vb.) size tekrar tekrar seslendiğini görmenizi sağlar.",
        },
        {
          heading: "Rüya İnkübasyonu, Bilinçli Rüya ve Eşik Frekansları",
          body: "Antik Asklepion tapınaklarından şamanik rüya çalışmalarına kadar ‘uykuya niyetle yatma’ (inkübasyon) temel bir pratiktir. Uygulama içindeki gece hazırlık adımları ve akustik frekans sesleri, uykuya geçiş eşiğini (hipnagojik evreyi) berrak bir farkındalıkla karşılamanıza yardımcı olur.",
        },
      ],
      en: [
        {
          heading: "Archetypal Dream Symbols & The Journal Discipline",
          body: "Across ancient traditions, dreams are the nocturnal speech of the soul in symbols. Dream Yard links every recorded dream with the night's lunar phase and tracks recurring archetypes—water, serpent, threshold, tree, flight—across weeks and months.",
        },
        {
          heading: "Dream Incubation, Lucid Awareness & Threshold Soundscapes",
          body: "From classical Asclepieion dream temples to shamanic dreamwork, entering sleep with a clear question (incubation) is a foundational discipline. Guided pre-sleep protocols and acoustic soundscapes help you cross the hypnagogic threshold with lucid awareness.",
        },
      ],
      sv: [
        {
          heading: "Arketypiska Drömsymboler & Dagboksdisciplin",
          body: "I uråldriga traditioner är drömmen själens nattliga tal genom symboler. Dream Yard kopplar varje nedtecknad dröm till nattens månfas och synliggör vilka arketyper som återkommer över tid.",
        },
        {
          heading: "Dröminkubation, Klardrömmande & Tröskelljud",
          body: "Från antika drömtempel till schamanistiskt drömarbete är det en grundläggande konst att gå in i sömnen med en klar avsikt. Förberedelsesteg och akustiska ljudbilder hjälper dig att möta sömnens tröskel med vaken närvaro.",
        },
      ],
    },
    closing: {
      tr: "Gündüz gözün görmediğini, gece rüya fısıldar.",
      en: "What the waking eye overlooks, the night dream whispers.",
      sv: "Det som dagens öga förbigår, viskar nattens dröm.",
    },
    googlePlay: "",
    appStore: "",
  },
  {
    slug: "runewords",
    glyph: "ᚦ",
    image: "/apps/runewords.jpg",
    name: "RuneWords",
    badge: {
      tr: "İskandinav, Kelt & Orta Asya Mitolojisi · Kelime Macerası",
      en: "Norse, Celtic & Central Asian Mythology · Word Adventure",
      sv: "Nordisk, Keltisk & Centralasiatisk Mytologi · Ordäventyr",
    },
    statusLabel: {
      tr: "Hazırlanıyor · Yakında",
      en: "In Development · Coming Soon",
      sv: "Under Utveckling · Kommer Snart",
    },
    line: {
      tr: "İskandinav, Kelt ve Orta Asya mitolojilerinde geçen, kadim rün taşları ve tanrı güçleriyle örülü kelime macerası.",
      en: "A word adventure woven with ancient rune stones and divine powers across Norse, Celtic, and Central Asian mythologies.",
      sv: "Ett ordäventyr vävt med forntida runstenar och gudakrafter genom nordisk, keltisk och centralasiatisk mytologi.",
    },
    features: {
      tr: [
        "İskandinav (Edda), Kelt (Ogham & Tuatha Dé Danann) ve Orta Asya (Altay & Türk) mitolojisi diyarı",
        "Her bölümde rün taşlarının ve kadim tanrı arketiplerinin özel güçleriyle açılan kelime bulmacaları",
        "Çözülen her kavramın gerçek mitolojik ve tarihsel hikâyesini açan Koleksiyon Kodeksi",
        "Hem kelime hazinesini hem de sembol ve mitoloji bilgisini derinleştiren oyunlaştırılmış öğrenme",
      ],
      en: [
        "Realms spanning Norse (Edda), Celtic (Ogham & Tuatha Dé Danann), and Central Asian (Altai) mythologies",
        "Word puzzles unlocked through the powers of ancient rune stones and divine archetypes",
        "A Collectible Lore Codex revealing the authentic mythological story behind every discovered term",
        "Gamified mastery that deepens both vocabulary and knowledge of ancient symbols",
      ],
      sv: [
        "Riken som spänner över nordisk (Edda), keltisk (Ogham) och centralasiatisk (Altaj) mytologi",
        "Ordpussel som låses upp med hjälp av forntida runstenar och gudaarketyper",
        "En samlarkodex som öppnar den äkta mytologiska berättelsen bakom varje funnet begrepp",
        "Spelifierat lärande som fördjupar både ordförråd och kunskap om forntida symboler",
      ],
    },
    chapters: {
      tr: [
        {
          heading: "Üç Büyük Mitoloji Coğrafyasında Kelime ve Sembol Yolculuğu",
          body: "RuneWords, sıradan bir kelime bulmacası değil; Kuzeyin buzlu fiyortlarından Kelt meşe korularına ve Orta Asya bozkırlarına uzanan mitolojik bir keşif yolculuğudur. Oyuncular harfleri birleştirirken Yggdrasil’den Erlik Han’a, Brigid’den Odin’in kuzgunları Hugin ve Munin’e kadar yüzlerce kadim kavramla tanışır.",
        },
        {
          heading: "Rün Taşı Güçleri ve Yaşayan Mitoloji Kodeksi",
          body: "Oyun boyunca kazanılan rün taşları (örneğin Kenaz’ın meşalesiyle gizli harfi aydınlatma veya Thurisaz’ın çekiciyle kilitli taşları kırma) stratejik bir derinlik sunar. Tamamlanan her bölümün sonunda açılan ‘Mitoloji Kodeksi’ ise öğrenilen kelimelerin tarihsel kaynaklardaki gerçek öykülerini kalıcı bir koleksiyona dönüştürür.",
        },
      ],
      en: [
        {
          heading: "A Word & Symbol Odyssey Across Three Mythic Realms",
          body: "RuneWords is a mythological expedition stretching from the fjords of the North to Celtic oak groves and the Central Asian steppes. As players forge words, they encounter hundreds of authentic concepts—from Yggdrasil and Erlik Khan to Brigid, Hugin, and Munin.",
        },
        {
          heading: "Rune Stone Powers & The Living Mythology Codex",
          body: "Earned rune stones grant strategic abilities on the board—such as illuminating hidden letters with the torch of Kenaz or shattering locked tiles with the hammer of Thurisaz. Every completed chapter unlocks entries in the Mythology Codex, preserving the historical stories behind the words.",
        },
      ],
      sv: [
        {
          heading: "En Ord- och Symbolresa Genom Tre Mytiska Världar",
          body: "RuneWords är en mytologisk upptäcktsfärd som sträcker sig från Nordens fjordar till keltiska eklundar och Centralasiens stäpper. När spelaren sammanfogar bokstäver möter hon hundratals uråldriga begrepp — från Yggdrasil och Erlik Khan till Brigid, Hugin och Munin.",
        },
        {
          heading: "Runstenskrafter & Den Levande Mytologikodexen",
          body: "Intjänade runstenar ger strategiska förmågor på spelplanen — som att lysa upp dolda bokstäver med Kenaz fackla eller krossa låsta brickor med Thurisaz hammare. Varje kapitel låser upp poster i Mytologikodexen.",
        },
      ],
    },
    closing: {
      tr: "Her kelime unutulmuş bir efsanenin anahtarıdır.",
      en: "Every word is the key to a forgotten legend.",
      sv: "Varje ord är nyckeln till en bortglömd saga.",
    },
    googlePlay: "",
    appStore: "",
  },
];

export function findAppBySlug(slug: string): ShelfApp | undefined {
  return apps.find((a) => a.slug === slug);
}
