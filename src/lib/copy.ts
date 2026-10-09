export const languages = ["tr", "en", "sv"] as const;

export type Lang = (typeof languages)[number];

export const languageLabel: Record<Lang, string> = {
  tr: "Türkçe",
  en: "English",
  sv: "Svenska",
};

const copy = {
  tr: {
    skip: "İçeriğe geç",
    nav: [
      { href: "/runler", label: "Rünler" },
      { href: "/egitim", label: "Eğitim" },
      { href: "/astroloji", label: "Astroloji" },
      { href: "/#ocak", label: "Ocak" },
    ],
    lines: [
      "Okunmayı bekleyen bir düzen var.",
      "İşaret ve gökyüzü, yaklaşana açılır.",
    ],
    sky: {
      phase: "Evre",
      sign: "Burç",
      hour: "Saat",
    },
    portrait: "Portre yeri",
    hall: "Hol",
    open: "Açık",
    closed: "Kapalı",
    back: "Hole dön",
    doors: [
      { href: "/runler", title: "Rünler", line: "Kısa karşılıklar burada birikecek." },
      { href: "/egitim", title: "Eğitim", line: "Gün belli olunca bu satır dolacak." },
      { href: "/astroloji", title: "Astroloji", line: "Yazı bitince burada duracak." },
    ],
    runes: {
      title: "Rünler",
      line: "Notlar sonra gelecek.",
    },
    draft: "Taslak",
    education: {
      title: "Eğitim",
      heading: "Ekim Çemberi başladı",
      status: "başladı",
      soon: "Yeni eğitim duyuruları yakında.",
      items: [
        { name: "Şamanizm Eğitimi", href: "/egitim/samanizm" },
        { name: "Rune Bilgeliği Eğitimi", href: "/egitim/rune-bilgeligi" },
        { name: "El, Yüz ve Element Okuma Teknikleri", href: "/egitim/el-yuz-element" },
      ],
    },
    astrology: {
      title: "Astroloji",
      note: "Ekinoks: gündüz ile gece eşitlenir. Notun devamı sonra yazılacak.",
    },
    hearth: {
      label: "Ocağa sor",
      placeholder: "Bir rün, bir burç, bir gün",
      ask: "Sor",
      sparks: [
        "Uruz ne der?",
        "Fehu",
        "Terazi",
        "15 Nisan",
        "Ekinoks nedir?",
        "Haritaya nereden bakılır?",
      ],
      error: "Ocak şu an cevap vermedi. Bir kez daha sor.",
      note: "Odanın notu",
      voice: "Ocak",
    },
  },
  en: {
    skip: "Skip to content",
    nav: [
      { href: "/runler", label: "Runes" },
      { href: "/egitim", label: "Education" },
      { href: "/astroloji", label: "Astrology" },
      { href: "/#ocak", label: "Hearth" },
    ],
    lines: [
      "There is an order waiting to be read.",
      "Sign and sky open to whoever draws near.",
    ],
    sky: {
      phase: "Phase",
      sign: "Sign",
      hour: "Hour",
    },
    portrait: "Place for a portrait",
    hall: "Hall",
    open: "Open",
    closed: "Closed",
    back: "Back to the hall",
    doors: [
      { href: "/runler", title: "Runes", line: "Short readings will gather here." },
      { href: "/egitim", title: "Education", line: "This line will fill when the day is set." },
      { href: "/astroloji", title: "Astrology", line: "The writing will stand here when it is finished." },
    ],
    runes: {
      title: "Runes",
      line: "The notes will come later.",
    },
    draft: "Draft",
    education: {
      title: "Education",
      heading: "The October Circle has begun",
      status: "has begun",
      soon: "New course announcements soon.",
      items: [
        { name: "Shamanism Training", href: "/egitim/samanizm" },
        { name: "Rune Wisdom Training", href: "/egitim/rune-bilgeligi" },
        { name: "Hand, Face, and Element Reading Techniques", href: "/egitim/el-yuz-element" },
      ],
    },
    astrology: {
      title: "Astrology",
      note: "Equinox: day and night stand equal. The rest of the note will be written later.",
    },
    hearth: {
      label: "Ask the hearth",
      placeholder: "A rune, a sign, a day",
      ask: "Ask",
      sparks: [
        "What does Uruz say?",
        "Fehu",
        "Libra",
        "15 April",
        "What is the equinox?",
        "Where do you start with a chart?",
      ],
      error: "The hearth did not answer. Ask once more.",
      note: "Note from the hall",
      voice: "Hearth",
    },
  },
  sv: {
    skip: "Hoppa till innehållet",
    nav: [
      { href: "/runler", label: "Runor" },
      { href: "/egitim", label: "Utbildning" },
      { href: "/astroloji", label: "Astrologi" },
      { href: "/#ocak", label: "Härd" },
    ],
    lines: [
      "En ordning väntar på att bli läst.",
      "Tecken och himmel öppnar sig för den som närmar sig.",
    ],
    sky: {
      phase: "Fas",
      sign: "Tecken",
      hour: "Timme",
    },
    portrait: "Plats för porträtt",
    hall: "Hall",
    open: "Öppen",
    closed: "Stängd",
    back: "Tillbaka till hallen",
    doors: [
      { href: "/runler", title: "Runor", line: "Korta tydningar samlas här." },
      { href: "/egitim", title: "Utbildning", line: "Raden fylls när dagen är satt." },
      { href: "/astroloji", title: "Astrologi", line: "Texten får stå här när den är färdig." },
    ],
    runes: {
      title: "Runor",
      line: "Anteckningarna kommer senare.",
    },
    draft: "Utkast",
    education: {
      title: "Utbildning",
      heading: "Oktobercirkeln har börjat",
      status: "har börjat",
      soon: "Nya utbildningsbesked kommer snart.",
      items: [
        { name: "Schamanismutbildning", href: "/egitim/samanizm" },
        { name: "Utbildning i runvisdom", href: "/egitim/rune-bilgeligi" },
        { name: "Tekniker för hand-, ansikts- och elementläsning", href: "/egitim/el-yuz-element" },
      ],
    },
    astrology: {
      title: "Astrologi",
      note: "Dagjämning: dag och natt väger jämnt. Resten av noten skrivs senare.",
    },
    hearth: {
      label: "Fråga härden",
      placeholder: "En runa, ett tecken, en dag",
      ask: "Fråga",
      sparks: [
        "Vad säger Uruz?",
        "Fehu",
        "Vågen",
        "15 april",
        "Vad är dagjämningen?",
        "Var börjar man med en karta?",
      ],
      error: "Härden svarade inte. Fråga en gång till.",
      note: "Hallens not",
      voice: "Härd",
    },
  },
} as const;

export type Copy = (typeof copy)[Lang];

export function text(lang: Lang): Copy {
  return copy[lang];
}
