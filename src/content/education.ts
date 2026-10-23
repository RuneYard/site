import type { Lang } from "@/lib/copy";

export type CourseModule = {
  title: string;
  subtitle?: string;
  lessons: readonly string[];
};

export type EducationCourse = {
  slug: string;
  code: string;
  glyph: string;
  image: string;
  title: Record<Lang, string>;
  subtitle: Record<Lang, string>;
  status: Record<Lang, string>;
  badge: Record<Lang, string>;
  summary: Record<Lang, string>;
  opening: Record<Lang, readonly string[]>;
  questions?: Record<Lang, readonly string[]>;
  note?: Record<Lang, string>;
  scope?: Record<Lang, string>;
  modules: Record<Lang, readonly CourseModule[]>;
  closing: Record<Lang, readonly string[]>;
  facts: Record<Lang, readonly (readonly [string, string])[]>;
  phone: string;
  whatsappUrl: string;
};

export const educationHall = {
  image: "/egitim/akademi-hall.jpg",
  title: {
    tr: "RuneYard Akademi · Eğitimler",
    en: "RuneYard Academy · Trainings",
    sv: "RuneYard Akademi · Utbildningar",
  },
  subtitle: {
    tr: "Canlı sınıflar, kayıt arşivleri ve kadim disiplinlerin uygulamalı müfredatı",
    en: "Live classes, recorded archives, and the applied curriculum of ancient disciplines",
    sv: "Direktsända lektioner, inspelade arkiv och tillämpad läroplan i uråldriga discipliner",
  },
  intro: {
    tr: [
      "RuneYard Akademi’de yer alan tüm eğitimler, yüzeysel derlemeler değil; kökeni, tarihi, kozmolojisi ve ritüel uygulaması adım adım işlenen canlı ders programlarıdır. Her sınıf haftalık düzenli buluşmalarla ilerler ve her dersin video kaydı katılımcılarla paylaşılır.",
      "Mevcut üç temel akademi programımız aşağıda yer almaktadır. Yeni dönem sınıfları ve yeni eğitim başlıkları açıldıkça bu salona eklenir.",
    ],
    en: [
      "All trainings within RuneYard Academy are live, structured programs where origin, history, cosmology, and ritual application are worked step by step. Each class progresses through weekly live sessions on Zoom, and every lesson recording is shared with participants.",
      "Our three foundational academy programs are open below. As new cohorts and new training disciplines open, they are added to this hall.",
    ],
    sv: [
      "Alla utbildningar i RuneYard Akademi är direktsända, strukturerade program där ursprung, historia, kosmologi och rituell tillämpning bearbetas steg för steg. Varje klass går framåt genom veckovisa möten på Zoom, och inspelningen av varje lektion delas med deltagarna.",
      "Våra tre grundläggande akademiprogram finns nedan. När nya grupper och nya utbildningar öppnar läggs de till i denna sal.",
    ],
  },
  pillars: {
    tr: [
      {
        title: "Canlı Zoom Sınıfları & Kayıt Arşivi",
        body: "Dersler haftalık canlı oturumlarla işlenir; kaçırılan veya tekrar edilmek istenen dersler için tüm kayıtlar katılımcılara iletilir.",
      },
      {
        title: "Teori, Sembol ve Uygulama Bütünlüğü",
        body: "Her müfredat önce tarihsel ve kozmolojik temeli kurar, ardından okuma, kehanet, ritüel veya trans pratiğine geçer.",
      },
      {
        title: "Yeni Eğitimler & Dönem Duyuruları",
        body: "Bu katalog yaşayan bir akademi yapısıdır; yeni açılacak uzmanlık sınıfları ve atölyeler doğrudan bu sayfada ilan edilir.",
      },
    ],
    en: [
      {
        title: "Live Zoom Classes & Recording Archive",
        body: "Lessons are held in weekly live sessions; full recordings are shared with every participant for review or missed classes.",
      },
      {
        title: "Unity of Theory, Symbol & Practice",
        body: "Every curriculum first establishes historical and cosmological foundations before moving into reading, divination, ritual, or trance practice.",
      },
      {
        title: "New Trainings & Cohort Announcements",
        body: "This catalog is a living academy structure; newly opened specialized classes and workshops are announced directly in this hall.",
      },
    ],
    sv: [
      {
        title: "Direktsända Zoom-lektioner & Arkiv",
        body: "Lektionerna hålls varje vecka i realtid; alla inspelningar delas med deltagarna för repetition eller missade tillfällen.",
      },
      {
        title: "Enhet av Teori, Symbol & Praktik",
        body: "Varje läroplan lägger först den historiska och kosmologiska grunden innan den går vidare till läsning, spådom, ritual eller trans.",
      },
      {
        title: "Nya Utbildningar & Kommande Grupper",
        body: "Denna katalog är en levande akademi; nya fördjupningskurser och seminarier meddelas direkt i denna sal.",
      },
    ],
  },
  ui: {
    tr: {
      activeHeading: "Açık Akademi Programları",
      curriculumHeading: "Müfredat ve Ders Programı",
      factsHeading: "Eğitim Künyesi ve Kayıt Bilgileri",
      questionsHeading: "Bu Yolculukta Yanıt Aradığımız Sorular",
      enrollCta: "WhatsApp ile Bilgi ve Kayıt",
      callCta: "Telefon ile Ara",
      backToEducation: "← Tüm Eğitimlere Dön",
      openCourse: "Müfredatı İncele →",
      upcomingNotice:
        "Not: Yeni eğitim başlıkları ve ileri seviye atölyeler açıldıkça bu salona eklenecektir. Güncel kayıt durumu ve yeni sınıflar için WhatsApp hattından bilgi alabilirsiniz.",
    },
    en: {
      activeHeading: "Active Academy Programs",
      curriculumHeading: "Curriculum & Lesson Plan",
      factsHeading: "Course Details & Enrollment",
      questionsHeading: "Questions Explored on This Journey",
      enrollCta: "Inquire & Enroll via WhatsApp",
      callCta: "Call by Phone",
      backToEducation: "← Back to All Trainings",
      openCourse: "View Curriculum →",
      upcomingNotice:
        "Note: New training titles and advanced workshops are added to this hall as they open. You may contact our WhatsApp line for current cohort availability.",
    },
    sv: {
      activeHeading: "Aktiva Akademiprogram",
      curriculumHeading: "Läroplan & Lektionsprogram",
      factsHeading: "Kursfakta & Anmälan",
      questionsHeading: "Frågor Vi Utforskar Under Resan",
      enrollCta: "Fråga & Anmäl via WhatsApp",
      callCta: "Ring via Telefon",
      backToEducation: "← Tillbaka till Alla Utbildningar",
      openCourse: "Se Läroplan →",
      upcomingNotice:
        "Not: Nya utbildningar och fördjupningskurser läggs till i denna sal när de öppnar. Kontakta oss gärna via WhatsApp för aktuell platsinformation.",
    },
  },
} as const;

export const educationCourses: readonly EducationCourse[] = [
  {
    slug: "el-yuz-element",
    code: "AKADEMİ I",
    glyph: "◈",
    image: "/egitim/el-yuz-element.jpg",
    phone: "0545 564 21 64",
    whatsappUrl: "https://wa.me/905455642164",
    title: {
      tr: "El, Yüz ve Element Okuma Teknikleri",
      en: "Hand, Face, and Element Reading Techniques",
      sv: "Tekniker för hand-, ansikts- och elementläsning",
    },
    subtitle: {
      tr: "İlm-i Sima, Kiromansi (El Çizgileri ve Gezegen Tepeleri) ile Kum, Su ve Ateş Kehaneti",
      en: "İlm-i Sima, Chiromancy (Palm Lines & Planetary Mounts), and Sand, Water, and Fire Divination",
      sv: "İlm-i Sima, Kiromanti (Handlinjer & Planetberg) samt Sand-, Vatten- och Eldspådom",
    },
    status: {
      tr: "Başladı · Kayıt & Kayıt Arşivi Açık",
      en: "Has Begun · Enrollment & Recordings Open",
      sv: "Har Börjat · Anmälan & Inspelningar Öppna",
    },
    badge: {
      tr: "16 Ders · 4 Modül · Zoom",
      en: "16 Lessons · 4 Modules · Zoom",
      sv: "16 Lektioner · 4 Moduler · Zoom",
    },
    summary: {
      tr: "Şakile felsefesi, dört element eliyle mizaç analizi, gezegen tepeleri, yaşam-akıl-kalp-kader çizgileri ve kum (jeomansi), su (hidromansi), ateş (piromansi) üzerinden kadim okuma sanatı.",
      en: "The philosophy of Şakile, temperament analysis through the four elemental hands, planetary mounts, life-head-heart-fate lines, and ancient divination through sand (geomancy), water (hydromancy), and fire (pyromancy).",
      sv: "Şakiles filosofi, temperamentsanalys genom de fyra elementhänderna, planetberg, livs-, huvud-, hjärt- och ödeslinjer samt uråldrig spådom genom sand (geomanti), vatten (hydromanti) och eld (pyromanti).",
    },
    opening: {
      tr: [
        "Beden, zihin ve ruh bütünlüğünü kapsayan bu akademide, İlm-i Sima'nın bilgeliğinden şamanik trans pratiklerine uzanan derin bir sırra iniyoruz.",
      ],
      en: [
        "In this academy, which holds body, mind, and spirit as one, we descend into a deep secret that runs from the wisdom of İlm-i Sima to shamanic trance practices.",
      ],
      sv: [
        "I denna akademi, som rymmer kropp, sinne och ande som en helhet, stiger vi ned i en djup hemlighet som löper från İlm-i Simas visdom till schamanistiska transpraktiker.",
      ],
    },
    modules: {
      tr: [
        {
          title: "I. Bedenin ve kaderin haritası (İlm-i Sima ve kiromansi)",
          subtitle: "Ders 01 – 12 · Morfoloji, Gezegen Dağları ve Çizgiler",
          lessons: [
            "1–2. Şakile felsefesi ve makro anatomi. Kaderin mutlak bir son değil, işlenecek bir potansiyel olduğunu kavrama. Toprak, hava, ateş ve su elleriyle mizaç analizi.",
            "3–4. Parmakların arketipsel morfolojisi ve Venüs'ün sırrı. Sivri, kare, spatula uçlarla zihin okuması. Başparmaktaki irade, mantık ve nefs dinamikleri.",
            "5–6. Mikro teşhis ve gezegen dağları. Renkler ve tırnaklardaki fiziksel ve ruhsal blokajlar. Avuç içindeki Jüpiter, Satürn ve Ay tepelerinin enerjetik sırları.",
            "7–8. Yaşam nehirleri. Hayat, akıl ve kalp çizgileri üzerinden fiziksel dirilik, düşünce kapasitesi ve duygusal bağlanma modelleri.",
            "9–10. Kader ve ilham çizgileri. Dış koşullar, kariyer kırılmaları, şifacılık ve mistik yetenek kanalları.",
            "11–12. Kaderin mühürleri. Yıldız, haç, kare gibi gizli işaretler, zamanlama hesaplamaları ve holistik danışmanlık etiği.",
          ],
        },
        {
          title: "II. Elementlerin fısıltısı ve kadim kehanet",
          subtitle: "Ders 13 – 16 · Jeomansi, Hidromansi, Piromansi ve Simya",
          lessons: [
            "13. Kumun bilgeliği (jeomansi). Topraklanma, atalarla bağ ve kum yüzeyinde rün okumaları.",
            "14. Suyun hafızası (hidromansi). Alt dünya portalını açma, ses ve galdr titreşimiyle su yüzeyinde durugörü pratiği.",
            "15. Ateşin ruhu (piromansi). Aktif dönüşüm, alevin dansı ve duman üzerinden ruhla diyalog.",
            "16. Kadim simya. Su, ateş ve toprağın ritüel masasında birleşimi. Vizyonları arketiplerle sentezleyip enerjiyi mühürleme.",
          ],
        },
      ],
      en: [
        {
          title: "I. The map of the body and of fate (İlm-i Sima and chiromancy)",
          subtitle: "Lessons 01 – 12 · Morphology, Planetary Mounts & Lines",
          lessons: [
            "1–2. The philosophy of Şakile and macro anatomy. Grasping that fate is not a fixed end, but a potential to be worked. Temperament analysis through the hands of earth, air, fire, and water.",
            "3–4. The archetypal morphology of the fingers and the secret of Venus. Reading the mind through pointed, square, and spatula tips. The dynamics of will, reason, and nafs in the thumb.",
            "5–6. Micro-diagnosis and the planetary mounts. Physical and spiritual blockages in colors and nails. The energetic secrets of the mounts of Jupiter, Saturn, and the Moon in the palm.",
            "7–8. The rivers of life. Physical vitality, capacity of thought, and patterns of emotional attachment, read through the life, head, and heart lines.",
            "9–10. The lines of fate and inspiration. Outer conditions, breaks in a career, healing, and channels of mystical ability.",
            "11–12. The seals of fate. Hidden marks such as the star, the cross, and the square, calculations of timing, and the ethics of holistic consultation.",
          ],
        },
        {
          title: "II. The whisper of the elements and ancient divination",
          subtitle: "Lessons 13 – 16 · Geomancy, Hydromancy, Pyromancy & Alchemy",
          lessons: [
            "13. The wisdom of sand (geomancy). Grounding, the bond with the ancestors, and rune readings on the surface of sand.",
            "14. The memory of water (hydromancy). Opening the lower-world portal, and the practice of clear sight on the surface of water through sound and galdr vibration.",
            "15. The spirit of fire (pyromancy). Active transformation, the dance of the flame, and dialogue with spirit through smoke.",
            "16. Ancient alchemy. Water, fire, and earth joined on the ritual table. Synthesizing visions with archetypes and sealing the energy.",
          ],
        },
      ],
      sv: [
        {
          title: "I. Kroppens och ödets karta (İlm-i Sima och kiromanti)",
          subtitle: "Lektion 01 – 12 · Morfologi, Planetberg & Linjer",
          lessons: [
            "1–2. Şakiles filosofi och makroanatomi. Att fatta att ödet inte är ett absolut slut, utan en potential att bearbeta. Temperamentsanalys genom jord-, luft-, eld- och vattenhänder.",
            "3–4. Fingrarnas arketypiska morfologi och Venus hemlighet. Att läsa sinnet genom spetsiga, fyrkantiga och spatelformade toppar. Vilja, förnuft och nafs i tummen.",
            "5–6. Mikrodiagnos och planetbergen. Fysiska och andliga blockeringar i färger och naglar. De energetiska hemligheterna i Jupiter-, Saturnus- och Månbergen i handflatan.",
            "7–8. Livets floder. Fysisk livskraft, tankeförmåga och mönster av känslomässig bindning genom livslinjen, huvudlinjen och hjärtlinjen.",
            "9–10. Ödets och inspirationens linjer. Yttre villkor, brott i en bana, helande och kanaler för mystisk förmåga.",
            "11–12. Ödets sigill. Dolda tecken som stjärna, kors och fyrkant, beräkningar av tid och etiken i holistisk rådgivning.",
          ],
        },
        {
          title: "II. Elementens viskning och uråldrig spådom",
          subtitle: "Lektion 13 – 16 · Geomanti, Hydromanti, Pyromanti & Alkemi",
          lessons: [
            "13. Sandens visdom (geomanti). Jordning, bandet till förfäderna och runläsning på sandens yta.",
            "14. Vattnets minne (hydromanti). Att öppna portalen till den nedre världen, och klarseende på vattenytan genom ljud och galdr-vibration.",
            "15. Eldens ande (pyromanti). Aktiv förvandling, lågans dans och dialog med anden genom rök.",
            "16. Uråldrig alkemi. Vatten, eld och jord förenas på ritualbordet. Att syntetisera visioner med arketyper och försegla energin.",
          ],
        },
      ],
    },
    closing: {
      tr: [
        "Kadim hafızayı uyandırmak ve kendini okumak isteyenleri bu dönüştürücü serüvene bekliyorum.",
      ],
      en: [
        "I am waiting for those who want to wake ancient memory and read themselves, on this transforming journey.",
      ],
      sv: [
        "Jag väntar dem som vill väcka det uråldriga minnet och läsa sig själva, på denna förvandlande färd.",
      ],
    },
    facts: {
      tr: [
        ["Başlangıç", "6 Ekim Salı"],
        ["Yer", "Zoom"],
        ["Saat", "20:30–22:00"],
        ["Ücret", "her modül 2750 TL, toplam 4 modül"],
        ["Kayıt", "0545 564 21 64"],
      ],
      en: [
        ["Start", "6 October, Tuesday"],
        ["Place", "Zoom"],
        ["Time", "20:30–22:00"],
        ["Fee", "2750 TL per module, four modules in all"],
        ["Enrollment", "0545 564 21 64"],
      ],
      sv: [
        ["Start", "6 oktober, tisdag"],
        ["Plats", "Zoom"],
        ["Tid", "20:30–22:00"],
        ["Avgift", "2750 TL per modul, fyra moduler sammanlagt"],
        ["Anmälan", "0545 564 21 64"],
      ],
    },
  },
  {
    slug: "rune-bilgeligi",
    code: "AKADEMİ II",
    glyph: "ᚠ",
    image: "/egitim/rune-bilgeligi.jpg",
    phone: "0545 564 21 64",
    whatsappUrl: "https://wa.me/905455642164",
    title: {
      tr: "Rune Bilgeliği Eğitimi",
      en: "Rune Wisdom Training",
      sv: "Utbildning i runvisdom",
    },
    subtitle: {
      tr: "24 Elder Futhark Rünü, Ağaç Seçimi ve Takdis, Bindrune Mühürleri ve Kehanet Yöntemleri",
      en: "The 24 Elder Futhark Runes, Wood Selection & Consecration, Bindrune Seals, and Divination Methods",
      sv: "De 24 äldre futhark-runorna, trädval och invigning, bindrunor och spådomsmetoder",
    },
    status: {
      tr: "Başladı · Kayıt & Kayıt Arşivi Açık",
      en: "Has Begun · Enrollment & Recordings Open",
      sv: "Har Börjat · Anmälan & Inspelningar Öppna",
    },
    badge: {
      tr: "20 Ders · Haftada Bir · Zoom",
      en: "20 Lessons · Weekly · Zoom",
      sv: "20 Lektioner · Varje Vecka · Zoom",
    },
    summary: {
      tr: "Kuzey şamanizmi, Kelt ve Cermen geleneğinin 24 rün kapısını; kendi rün taşlarını yapma ve takdis etmeden başlayarak bindrune bağlama, şifa ve kehanet açılımlarına kadar işleyen 20 haftalık kapsamlı yolculuk.",
      en: "A comprehensive 20-week journey through the 24 rune doors of northern shamanism and Germanic tradition—from crafting and consecrating your own rune stones to bindrunes, healing, and divination spreads.",
      sv: "En omfattande 20-veckors resa genom den nordliga schamanismens och germanska traditionens 24 runportar — från att tillverka och inviga egna runstenar till bindrunor, läkning och spådom.",
    },
    opening: {
      tr: [
        "Kuzey şamanizminin, Keltlerin, Germenlerin, Avrupa’da yaşayan kadim toplumların yüzlerce yılda oluşturdukları bu sembol dilini hem kehanet hem bindrune mantığı ile öğrenmek istiyorsanız aramıza hoşgeldiniz. Sıkı giyinin kuzeye yolculuk edeceğiz.",
        "Bir çok şeye çok şaşıracağınıza söz veriyorum.",
      ],
      en: [
        "If you want to learn this symbolic language — shaped over hundreds of years by northern shamanism, the Celts, the Germanic peoples, and the ancient societies living in Europe — both as divination and through the logic of the bindrune, you are welcome among us. Dress warmly. We are traveling north.",
        "I promise you will be surprised by a great many things.",
      ],
      sv: [
        "Om du vill lära dig detta symbolspråk — det som nordlig schamanism, kelterna, germanerna och de gamla samhällena i Europa formade under hundratals år — både som spådom och enligt bindrunans logik, är du välkommen. Klä dig varmt. Vi reser norrut.",
        "Jag lovar att du kommer att förvånas över mycket.",
      ],
    },
    questions: {
      tr: [
        "Fehu, sadece bereket midir?",
        "Hagalaz sadece felaket mi?",
        "Tiwaz neden kolunu kaybetmiştir?",
        "Thurisaz gerçekten yenilmez midir?",
        "Runları sen çizebilir, kendi taşlarını oluşturabilir misin?",
      ],
      en: [
        "Is Fehu only abundance?",
        "Is Hagalaz only disaster?",
        "Why did Tiwaz lose his arm?",
        "Is Thurisaz truly invincible?",
        "Can you draw the runes yourself, and make your own stones?",
      ],
      sv: [
        "Är Fehu bara överflöd?",
        "Är Hagalaz bara en katastrof?",
        "Varför förlorade Tiwaz sin arm?",
        "Är Thurisaz verkligen oövervinnelig?",
        "Kan du själv rita runorna och göra dina egna stenar?",
      ],
    },
    scope: {
      tr: "Eğitim içeriğinde; rune tarihi, temsil ettikleri konular, öz anlamları, mitolojisi, ritüelleri, pratik kullanım alanları, rune çemberi, rune bağlama (bindrune) ve şifa ve kehanet yöntemleri yer almaktadır.",
      en: "The course includes rune history, the subjects they stand for, their essential meanings, their mythology, their rituals, practical uses, the rune circle, rune binding (bindrune), and methods of healing and divination.",
      sv: "I utbildningen ingår runornas historia, det de står för, deras kärnbetydelser, mytologi, ritualer, praktisk användning, runcirkeln, runbindning (bindrune) samt metoder för läkning och spådom.",
    },
    modules: {
      tr: [
        {
          title: "I. Köken, Kutsal Ağaçlar ve Takdis Ritüeli",
          subtitle: "Ders 01 – 03 · Tarih, Frekanslar, Çember Açma ve Rune Yoga",
          lessons: [
            "1. Rune tarihi ve mitolojisi, rune yapımında ağaçların kullanımı",
            "2. Elementler, frekanslar ve ritüel hazırlamanın mantığı",
            "3. Çember açma, rune takdis ritüeli, rune yoga",
          ],
        },
        {
          title: "II. Yirmi Dört Elder Futhark Kapısı (Üç Aett İncelemesi)",
          subtitle: "Ders 04 – 15 · İkili Arketip Çiftleriyle 24 Rünün Derin Okuması",
          lessons: [
            "4. Fehu ve Uruz",
            "5. Thurisaz ve Ansuz",
            "6. Raidho ve Kenaz",
            "7. Gebo ve Wunjo",
            "8. Hagalaz ve Nauthiz",
            "9. Isa ve Jera",
            "10. Eihwaz ve Perthro",
            "11. Algiz ve Sowilo",
            "12. Tiwaz ve Berkano",
            "13. Ehwaz ve Mannaz",
            "14. Laguz ve Ingwaz",
            "15. Othala ve Dagaz",
          ],
        },
        {
          title: "III. Şifa, Meditasyon ve Bindrune (Rün Bağlama) Sanatı",
          subtitle: "Ders 16 – 17 · Enerjetik Denge ve Mühür Tasarımı",
          lessons: [
            "16. Rune ve sağlık, rune meditasyonu",
            "17. Rune bağlama (bindrune) pratikler",
          ],
        },
        {
          title: "IV. Kehanet Yöntemleri ve Element Çemberi Uygulaması",
          subtitle: "Ders 18 – 20 · Açılımlar, Okuma Disiplini ve Element Pratiği",
          lessons: [
            "18. Kehanet yöntemleri ve pratikler",
            "19. Kehanet yöntemi ve pratikler",
            "20. Element çemberi ve pratik",
          ],
        },
      ],
      en: [
        {
          title: "I. Origins, Sacred Trees & The Consecration Ritual",
          subtitle: "Lessons 01 – 03 · History, Frequencies, Circle Opening & Rune Yoga",
          lessons: [
            "1. Rune history and mythology, the use of trees in making runes",
            "2. Elements, frequencies, and the logic of preparing a ritual",
            "3. Opening the circle, the rune consecration ritual, rune yoga",
          ],
        },
        {
          title: "II. The Twenty-Four Elder Futhark Doors (Three Aettir Study)",
          subtitle: "Lessons 04 – 15 · Deep Reading of All 24 Runes in Archetypal Pairs",
          lessons: [
            "4. Fehu and Uruz",
            "5. Thurisaz and Ansuz",
            "6. Raidho and Kenaz",
            "7. Gebo and Wunjo",
            "8. Hagalaz and Nauthiz",
            "9. Isa and Jera",
            "10. Eihwaz and Perthro",
            "11. Algiz and Sowilo",
            "12. Tiwaz and Berkano",
            "13. Ehwaz and Mannaz",
            "14. Laguz and Ingwaz",
            "15. Othala and Dagaz",
          ],
        },
        {
          title: "III. Healing, Meditation & The Art of the Bindrune",
          subtitle: "Lessons 16 – 17 · Energetic Balance & Seal Construction",
          lessons: [
            "16. Runes and health, rune meditation",
            "17. Rune binding (bindrune), practice",
          ],
        },
        {
          title: "IV. Divination Methods & The Element Circle",
          subtitle: "Lessons 18 – 20 · Spreads, Reading Discipline & Elemental Practice",
          lessons: [
            "18. Divination methods and practice",
            "19. A divination method and practice",
            "20. The element circle and practice",
          ],
        },
      ],
      sv: [
        {
          title: "I. Ursprung, Heliga Träd & Invigningsritualen",
          subtitle: "Lektion 01 – 03 · Historia, Frekvenser, Cirkelöppning & Runyoga",
          lessons: [
            "1. Runornas historia och mytologi, användningen av träd när runor görs",
            "2. Element, frekvenser och logiken i att förbereda en ritual",
            "3. Att öppna cirkeln, ritual för att inviga runor, runyoga",
          ],
        },
        {
          title: "II. De Tjugofyra Äldre Futhark-Portarna (De Tre Ätterna)",
          subtitle: "Lektion 04 – 15 · Fördjupning i Alla 24 Runor i Arketypiska Par",
          lessons: [
            "4. Fehu och Uruz",
            "5. Thurisaz och Ansuz",
            "6. Raidho och Kenaz",
            "7. Gebo och Wunjo",
            "8. Hagalaz och Nauthiz",
            "9. Isa och Jera",
            "10. Eihwaz och Perthro",
            "11. Algiz och Sowilo",
            "12. Tiwaz och Berkano",
            "13. Ehwaz och Mannaz",
            "14. Laguz och Ingwaz",
            "15. Othala och Dagaz",
          ],
        },
        {
          title: "III. Läkning, Meditation & Bindrunans Konst",
          subtitle: "Lektion 16 – 17 · Energetisk Balans & Sigillbindning",
          lessons: [
            "16. Runor och hälsa, runmeditation",
            "17. Runbindning (bindrune), övningar",
          ],
        },
        {
          title: "IV. Spådomsmetoder & Elementcirkeln",
          subtitle: "Lektion 18 – 20 · Läggningar, Tolkningsdisciplin & Elementövning",
          lessons: [
            "18. Spådomsmetoder och övningar",
            "19. En spådomsmetod och övningar",
            "20. Elementcirkeln och övning",
          ],
        },
      ],
    },
    closing: {
      tr: [
        "İçerik en temelden orta ve orta-ileri seviyeye uygun olarak hazırlanmıştır. Hem rünlerle çalışan hem de rünleri öğrenmek isteyen herkese kapı açıktır.",
      ],
      en: [
        "The material is prepared from the very beginning through intermediate and upper-intermediate level. The door is open both to those who already work with runes and to those who want to learn them.",
      ],
      sv: [
        "Innehållet är lagt från den allra första grunden till medel och övre medelnivå. Dörren är öppen både för den som redan arbetar med runor och för den som vill lära sig dem.",
      ],
    },
    facts: {
      tr: [
        ["Ücret", "2750 TL / ay"],
        ["Başlangıç", "7 Ekim Çarşamba"],
        ["Sıklık", "Haftada bir"],
        ["Ders", "20 ders"],
        ["Saat", "20:30"],
        ["Yer", "Zoom"],
        ["Kayıt", "Kayıt düşer"],
        ["İletişim", "0545 564 21 64"],
      ],
      en: [
        ["Fee", "2750 TL / month"],
        ["Start", "7 October, Wednesday"],
        ["Rhythm", "Once a week"],
        ["Lessons", "20 lessons"],
        ["Time", "20:30"],
        ["Place", "Zoom"],
        ["Recording", "A recording is kept"],
        ["Contact", "0545 564 21 64"],
      ],
      sv: [
        ["Avgift", "2750 TL / mån"],
        ["Start", "7 oktober, onsdag"],
        ["Takt", "En gång i veckan"],
        ["Lektioner", "20 lektioner"],
        ["Tid", "20:30"],
        ["Plats", "Zoom"],
        ["Inspelning", "Spelas in"],
        ["Kontakt", "0545 564 21 64"],
      ],
    },
  },
  {
    slug: "samanizm",
    code: "AKADEMİ III",
    glyph: "☥",
    image: "/egitim/samanizm-egitimi.jpg",
    phone: "0545 564 21 64",
    whatsappUrl: "https://wa.me/905455642164",
    title: {
      tr: "Şamanizm Eğitimi",
      en: "Shamanism Training",
      sv: "Schamanismutbildning",
    },
    subtitle: {
      tr: "Şamanik Kozmoloji, Düngür ve Trans, Otacılık, Alt ve Üst Dünya Yolculukları ve Şifa Teknikleri",
      en: "Shamanic Cosmology, Düngür & Trance, Herbalism, Lower & Upper World Journeys, and Healing Techniques",
      sv: "Schamanistisk kosmologi, Düngür och trans, örtkunskap, resor till nedre och övre världen samt helandetekniker",
    },
    status: {
      tr: "Başladı · Kayıt & Kayıt Arşivi Açık",
      en: "Has Begun · Enrollment & Recordings Open",
      sv: "Har Börjat · Anmälan & Inspelningar Öppna",
    },
    badge: {
      tr: "24 Ders · Haftada Bir · Zoom",
      en: "24 Lessons · Weekly · Zoom",
      sv: "24 Lektioner · Varje Vecka · Zoom",
    },
    summary: {
      tr: "Şamanik kozmoloji, davul (düngür) ve ruh şarkısı, otacılık, tamgalar, Alt ve Üst Dünya trans yolculukları, ruh parçalarının geri getirilmesi, kurşun dökme, rüya, ağaç iyeleri ve alan tutma disiplinini kapsayan 24 derslik program.",
      en: "A 24-lesson curriculum covering shamanic cosmology, the drum (düngür) and spirit song, herbalism, tamgas, Lower and Upper World trance journeys, soul retrieval, lead pouring, dream work, tree spirits, and holding sacred space.",
      sv: "Ett 24-lektioners program som omfattar schamanistisk kosmologi, trumman (düngür) och andesång, örtkunskap, tamgor, transresor till nedre och övre världen, själsåterhämtning, blygjutning, drömarbete, trädandar och att hålla heligt rum.",
    },
    opening: {
      tr: [
        "Köklerinize dönmeye, doğanın enerjisini hissetmeye ve ruhsal yolculuğunuza başlamak ister misiniz?",
        "24 derslik kapsamlı bir Şamanizm eğitim programı ile sizleri, binlerce yıllık kadim bilgelikte buluşuyoruz.",
      ],
      en: [
        "Do you want to return to your roots, feel the energy of nature, and begin your spiritual journey?",
        "With a comprehensive shamanism training of 24 lessons, we meet you in an ancient wisdom thousands of years old.",
      ],
      sv: [
        "Vill du vända tillbaka till dina rötter, känna naturens energi och börja din andliga resa?",
        "Med en omfattande schamanismutbildning i 24 lektioner möter vi dig i en uråldrig visdom, tusentals år gammal.",
      ],
    },
    note: {
      tr: "Not: Şamanizm, Tengricilik ile aynı değildir. Eğitim içerisinde dünya genelinde şamanik felsefeye uygun müfredat bulunmaktadır.",
      en: "Note: shamanism is not the same as Tengricilik. The training holds a curriculum suited to shamanic philosophy across the world.",
      sv: "Not: schamanism är inte detsamma som Tengricilik. Utbildningen rymmer en läroplan som följer schamanistisk filosofi i världen.",
    },
    modules: {
      tr: [
        {
          title: "I. Köken, Şamanik Kozmoloji ve Düngür (Davul) Ritmi",
          subtitle: "Ders 01 – 05 · Tarihçe, Ruhlar Alemi, Doğa Algısı ve Ruh Şarkısı",
          lessons: [
            "1. Şamanizme giriş: köken ve tarihçe",
            "2. Şaman kimdir? Görevleri ve yetkileri",
            "3. Şamanik kozmoloji ve ruhlar alemi",
            "4. Doğa ve şamanik algı. Doğanın çağrısı. Elementlere bakış",
            "5. Şamanik davul (düngürler), çıngırak ve ritimler. Ruh şarkısı",
          ],
        },
        {
          title: "II. Otacılık, Tamgalar ve Üç Dünya Trans Yolculukları",
          subtitle: "Ders 06 – 12 · Bitkisel Çalışmalar, Tılsımlar, Alt ve Üst Dünya, Erk Hayvanları",
          lessons: [
            "6. Otacılık ve bitkisel çalışmalar",
            "7. Otacılık ve bitkisel çalışmalar 2",
            "8. Şamanik tamga, tılsım ve semboller",
            "9. Şamanik trans teknikleri",
            "10. Alt dünya yolculuğu, ruhsal rehberlik, ata ruhları",
            "11. Üst dünya yolculuğu, şifa ve bilgi almak, yükselmiş üstadlara ulaşmak",
            "12. Ruhsal hayvanlarla çalışmak ve rehberlik almak",
          ],
        },
        {
          title: "III. Ruh Parçaları, Şamanik Şifa ve Arınma Ocakları",
          subtitle: "Ders 13 – 18 · Ruh Geri Getirme, Blokaj Çözümü, Element Ritüelleri ve Kurşun Dökme",
          lessons: [
            "13. Ruh parçaları ve ruh parçalarının geri getirilmesi",
            "14. Şamanik şifa teknikleri, enerji blokajlarını görme ve şifa",
            "15. Şamanik şifa teknikleri, travma ve affetme",
            "16. Doğa elementleriyle çalışma, element ritüelleri",
            "17. Nazar, majikal temizlik ve kurşun dökme yöntemleri",
            "18. Topluluk için şifa yöntemleri. Afet öncesi ve afet sonrası doğa çalışmaları",
          ],
        },
        {
          title: "IV. Rüya, Ağaç İyeleri, Kutsal Alan ve Şaman Yolu",
          subtitle: "Ders 19 – 24 · Üç Rüzgar Kehaneti, Labirent, Rehberlik ve Ölüm Ötesi Anlayışı",
          lessons: [
            "19. Şaman rüyası ve rüya çalışmaları",
            "20. Üç rüzgarın ruhu ve kehanet çalışmaları",
            "21. Ağaç iyeleri ve ağaçların ruhu ile çalışma",
            "22. Kutsal alan oluşturma. Alan tutmak. Labirent çalışması",
            "23. Kendi şaman yolunu bulmak. Rehberlik etmek",
            "24. Ölüm, ölüm ötesi ve ölüm anlayışı",
          ],
        },
      ],
      en: [
        {
          title: "I. Origins, Shamanic Cosmology & The Drum (Düngür)",
          subtitle: "Lessons 01 – 05 · History, Spirit Realm, Nature Perception & Spirit Song",
          lessons: [
            "1. Introduction to shamanism: origin and history",
            "2. Who is the shaman? Duties and authority",
            "3. Shamanic cosmology and the realm of spirits",
            "4. Nature and shamanic perception. The call of nature. A look at the elements",
            "5. The shamanic drum (düngürler), rattle, and rhythms. Spirit song",
          ],
        },
        {
          title: "II. Herbalism, Tamgas & Trance Journeys Across the Worlds",
          subtitle: "Lessons 06 – 12 · Plant Work, Talismans, Lower & Upper Worlds, Spirit Animals",
          lessons: [
            "6. Herbalism and plant work",
            "7. Herbalism and plant work 2",
            "8. Shamanic tamga, talisman, and symbols",
            "9. Shamanic trance techniques",
            "10. Lower-world journey, spiritual guidance, ancestor spirits",
            "11. Upper-world journey, receiving healing and knowledge, reaching ascended masters",
            "12. Working with spirit animals and receiving guidance",
          ],
        },
        {
          title: "III. Soul Retrieval, Shamanic Healing & Cleansing Hearths",
          subtitle: "Lessons 13 – 18 · Returning Soul Parts, Trauma Work, Element Rituals & Lead Pouring",
          lessons: [
            "13. Soul parts, and bringing soul parts back",
            "14. Shamanic healing techniques, seeing energy blockages, and healing",
            "15. Shamanic healing techniques, trauma and forgiveness",
            "16. Working with the elements of nature, element rituals",
            "17. The evil eye, magical cleansing, and methods of lead pouring",
            "18. Healing methods for the community. Nature work before and after a disaster",
          ],
        },
        {
          title: "IV. Dream Work, Tree Spirits, Sacred Space & The Shamanic Path",
          subtitle: "Lessons 19 – 24 · Three Winds Divination, Labyrinth, Guidance & Beyond Death",
          lessons: [
            "19. The shamanic dream and dream work",
            "20. The spirit of the three winds, and divination work",
            "21. Tree iyes, and working with the spirit of trees",
            "22. Making a sacred space. Holding the field. Labyrinth work",
            "23. Finding your own shamanic path. Offering guidance",
            "24. Death, what lies beyond death, and the understanding of death",
          ],
        },
      ],
      sv: [
        {
          title: "I. Ursprung, Schamanistisk Kosmologi & Trumman (Düngür)",
          subtitle: "Lektion 01 – 05 · Historia, Andevärlden, Naturuppfattning & Andesång",
          lessons: [
            "1. Introduktion till schamanism: ursprung och historia",
            "2. Vem är schamanen? Uppgifter och befogenhet",
            "3. Schamanistisk kosmologi och andarnas värld",
            "4. Natur och schamanistisk varseblivning. Naturens kallelse. En blick på elementen",
            "5. Den schamanistiska trumman (düngürler), skallra och rytmer. Andesång",
          ],
        },
        {
          title: "II. Örtkunskap, Tamgor & Transresor Genom Världarna",
          subtitle: "Lektion 06 – 12 · Växtarbete, Talismaner, Nedre & Övre Världen, Kraftdjur",
          lessons: [
            "6. Örtkunskap och arbete med växter",
            "7. Örtkunskap och arbete med växter 2",
            "8. Schamanistisk tamga, talisman och symboler",
            "9. Schamanistiska transtekniker",
            "10. Resa till den nedre världen, andlig vägledning, förfädersandar",
            "11. Resa till den övre världen, ta emot helande och kunskap, nå upphöjda mästare",
            "12. Arbeta med andedjur och ta emot vägledning",
          ],
        },
        {
          title: "III. Själsåterhämtning, Schamanistiskt Helande & Rening",
          subtitle: "Lektion 13 – 18 · Själadelar, Energiblockeringar, Elementritualer & Blygjutning",
          lessons: [
            "13. Själadelar och att föra själadelar tillbaka",
            "14. Schamanistiska helandetekniker, att se energiblockeringar och helande",
            "15. Schamanistiska helandetekniker, trauma och förlåtelse",
            "16. Arbete med naturens element, elementritualer",
            "17. Onda ögat, magisk rening och metoder för blygjutning",
            "18. Helandemetoder för gemenskapen. Naturarbete före och efter en katastrof",
          ],
        },
        {
          title: "IV. Drömarbete, Trädandar, Heligt Rum & Schamanvägen",
          subtitle: "Lektion 19 – 24 · De Tre Vindarna, Labyrint, Vägledning & Bortom Döden",
          lessons: [
            "19. Den schamanistiska drömmen och drömarbete",
            "20. De tre vindarnas ande och spådomsarbete",
            "21. Trädens iye och arbete med trädens ande",
            "22. Att skapa ett heligt rum. Hålla fältet. Labyrintarbete",
            "23. Att finna sin egen schamanväg. Att vägleda",
            "24. Döden, bortom döden och förståelsen av döden",
          ],
        },
      ],
    },
    closing: {
      tr: [
        "Bu eğitim, hem bireysel dönüşüm hem de çevreniz için bir rehber olmayı hedefliyor. Teori ve pratiği birleştirerek içsel yolculuğunuzda adım adım ilerleyeceğiz.",
        "Dersler kayıt edilecek olup kayıtlar sizinle paylaşılacaktır.",
      ],
      en: [
        "This training aims to be a guide both for your own transformation and for the people around you. Joining theory and practice, we will move step by step on your inner journey.",
        "The lessons will be recorded, and the recordings will be shared with you.",
      ],
      sv: [
        "Utbildningen vill vara en vägledning både för din egen förvandling och för dem omkring dig. Vi förenar teori och praktik och går steg för steg på din inre resa.",
        "Lektionerna spelas in, och inspelningarna delas med dig.",
      ],
    },
    facts: {
      tr: [
        ["Başlangıç", "2 Ekim 2026"],
        ["Saat", "20:30–22:00"],
        ["Yer", "Zoom"],
        ["Ücret", "aylık 2750 TL"],
        ["Kayıt", "0545 564 21 64"],
      ],
      en: [
        ["Start", "2 October 2026"],
        ["Time", "20:30–22:00"],
        ["Place", "Zoom"],
        ["Fee", "2750 TL a month"],
        ["Enrollment", "0545 564 21 64"],
      ],
      sv: [
        ["Start", "2 oktober 2026"],
        ["Tid", "20:30–22:00"],
        ["Plats", "Zoom"],
        ["Avgift", "2750 TL i månaden"],
        ["Anmälan", "0545 564 21 64"],
      ],
    },
  },
];

export function findEducationCourse(slug: string): EducationCourse | undefined {
  return educationCourses.find((c) => c.slug === slug);
}
