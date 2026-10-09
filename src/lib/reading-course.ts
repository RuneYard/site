import type { Lang } from "@/lib/copy";

const sections = {
  tr: [
    {
      title: "I. Bedenin ve kaderin haritası (İlm-i Sima ve kiromansi)",
      items: [
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
      items: [
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
      items: [
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
      items: [
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
      items: [
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
      items: [
        "13. Sandens visdom (geomanti). Jordning, bandet till förfäderna och runläsning på sandens yta.",
        "14. Vattnets minne (hydromanti). Att öppna portalen till den nedre världen, och klarseende på vattenytan genom ljud och galdr-vibration.",
        "15. Eldens ande (pyromanti). Aktiv förvandling, lågans dans och dialog med anden genom rök.",
        "16. Uråldrig alkemi. Vatten, eld och jord förenas på ritualbordet. Att syntetisera visioner med arketyper och försegla energin.",
      ],
    },
  ],
} as const;

export function readingCourse(lang: Lang) {
  const sheet = {
    tr: {
      title: "El, Yüz ve Element Okuma Teknikleri",
      status: "başladı",
      opening:
        "Beden, zihin ve ruh bütünlüğünü kapsayan bu akademide, İlm-i Sima'nın bilgeliğinden şamanik trans pratiklerine uzanan derin bir sırra iniyoruz.",
      closing:
        "Kadim hafızayı uyandırmak ve kendini okumak isteyenleri bu dönüştürücü serüvene bekliyorum.",
      facts: [
        ["Başlangıç", "6 Ekim Salı"],
        ["Yer", "Zoom"],
        ["Saat", "20:30–22:00"],
        ["Ücret", "her modül 2750 TL, toplam 4 modül"],
        ["Kayıt", "0545 564 21 64"],
      ],
    },
    en: {
      title: "Hand, Face, and Element Reading Techniques",
      status: "has begun",
      opening:
        "In this academy, which holds body, mind, and spirit as one, we descend into a deep secret that runs from the wisdom of İlm-i Sima to shamanic trance practices.",
      closing:
        "I am waiting for those who want to wake ancient memory and read themselves, on this transforming journey.",
      facts: [
        ["Start", "6 October, Tuesday"],
        ["Place", "Zoom"],
        ["Time", "20:30–22:00"],
        ["Fee", "2750 TL per module, four modules in all"],
        ["Enrollment", "0545 564 21 64"],
      ],
    },
    sv: {
      title: "Tekniker för hand-, ansikts- och elementläsning",
      status: "har börjat",
      opening:
        "I denna akademi, som rymmer kropp, sinne och ande som en helhet, stiger vi ned i en djup hemlighet som löper från İlm-i Simas visdom till schamanistiska transpraktiker.",
      closing:
        "Jag väntar dem som vill väcka det uråldriga minnet och läsa sig själva, på denna förvandlande färd.",
      facts: [
        ["Start", "6 oktober, tisdag"],
        ["Plats", "Zoom"],
        ["Tid", "20:30–22:00"],
        ["Avgift", "2750 TL per modul, fyra moduler sammanlagt"],
        ["Anmälan", "0545 564 21 64"],
      ],
    },
  } as const;

  return { ...sheet[lang], sections: sections[lang] };
}
