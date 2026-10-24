import type { Lang } from "@/lib/copy";

export type ShopCategory = "all" | "ebook" | "oils" | "elixirs" | "salts" | "consultations";

export type ShopProduct = {
  slug: string;
  shopierId: string;
  shopierUrl: string;
  category: Exclude<ShopCategory, "all">;
  glyph: string;
  price: string;
  oldPrice?: string;
  discountBadge?: Record<Lang, string>;
  volume: Record<Lang, string>;
  image: string;
  title: Record<Lang, string>;
  subtitle: Record<Lang, string>;
  summary: Record<Lang, string>;
  paragraphs: Record<Lang, readonly string[]>;
  features: Record<Lang, readonly string[]>;
  usageSteps: Record<Lang, readonly string[]>;
  intention?: Record<Lang, string>;
  safetyNote: Record<Lang, string>;
};

export const shopHall = {
  image: "/traditions/shop.jpg",
  shopierStoreUrl: "https://www.shopier.com/runeyard",
  title: {
    tr: "Shop · Atölye & Danışmanlık",
    en: "Shop · Workshop & Consultations",
    sv: "Shop · Ateljé & Konsultationer",
  },
  subtitle: {
    tr: "Yeşil Ahit e-Kitap, Kişiye Özel Kodlanan Ritüel Yağları, İksirler, Element Tuzları ve Bireysel Danışmanlıklar",
    en: "The Green Covenant e-Book, Personally Encoded Ritual Oils, Elixirs, Elemental Salts, and Individual Consultations",
    sv: "Det Gröna Förbundets e-bok, Personligt Kodade Rituella Oljor, Elixir, Elementsalter och Konsultationer",
  },
  intro: {
    tr: "RuneYard Atölye’de yer alan tüm bitkisel yağlar, iksirler ve tuz karışımları %100 doğal uçucu yağlar, şifalı bitkiler ve geleneksel tariflerle hazırlanır; gönderilmeden önce kişiye özel kodlanır. Tüm sipariş ve ödemeleriniz Shopier güvencesiyle (Kredi / Banka Kartı ve 3D Secure ile) doğrudan tamamlanır.",
    en: "Every botanical oil, elixir, and herbal salt blend in the RuneYard Workshop is crafted from 100% natural essential oils and traditional formulations, personally encoded before dispatch. All orders and payments are processed securely through Shopier.",
    sv: "Alla botaniska oljor, elixir och örtsalter i RuneYard Ateljén tillverkas av 100 % naturliga eteriska oljor och traditionella recept, personligt kodade före leverans. Alla beställningar hanteras säkert via Shopier.",
  },
  categories: {
    tr: {
      all: "Tümü (19)",
      ebook: "E-Kitap (1)",
      oils: "Ritüel Yağları (5)",
      elixirs: "Ritüel İksirleri (3)",
      salts: "Bitkisel Tuzlar (4)",
      consultations: "Danışmanlıklar (6)",
    },
    en: {
      all: "All (19)",
      ebook: "e-Book (1)",
      oils: "Ritual Oils (5)",
      elixirs: "Ritual Elixirs (3)",
      salts: "Herbal Salts (4)",
      consultations: "Consultations (6)",
    },
    sv: {
      all: "Alla (19)",
      ebook: "e-Bok (1)",
      oils: "Rituella Oljor (5)",
      elixirs: "Rituella Elixir (3)",
      salts: "Örtsalter (4)",
      consultations: "Konsultationer (6)",
    },
  } as Record<Lang, Record<ShopCategory, string>>,
  ui: {
    tr: {
      buyShopier: "Shopier ile Satın Al →",
      inspectProduct: "İncele",
      openStore: "Tüm Shopier Mağazasını Aç",
      featuresHeading: "Ürün Özellikleri ve İçerik Yapısı",
      usageHeading: "Adım Adım Kullanım Rehberi",
      intentionHeading: "Ruhsal Niyet ve Mühür Cümlesi",
      safetyHeading: "Kullanım, Saklama ve Yasal / Tıbbi Bilgilendirme",
      backToShop: "← Mağazaya Dön",
      prevProduct: "← Önceki Eser",
      nextProduct: "Sonraki Eser →",
      secureBadge: "Shopier 3D Secure Güvenli Ödeme · Kredi / Banka Kartı",
    },
    en: {
      buyShopier: "Buy via Shopier →",
      inspectProduct: "View Details",
      openStore: "Open Full Shopier Store",
      featuresHeading: "Product Features & Composition",
      usageHeading: "Step-by-Step Usage Guide",
      intentionHeading: "Spiritual Intention & Affirmation",
      safetyHeading: "Usage, Storage & Medical / Legal Notice",
      backToShop: "← Back to Shop",
      prevProduct: "← Previous Item",
      nextProduct: "Next Item →",
      secureBadge: "Shopier 3D Secure Checkout · Credit / Debit Card",
    },
    sv: {
      buyShopier: "Köp via Shopier →",
      inspectProduct: "Visa Detaljer",
      openStore: "Öppna Hela Shopier-Butiken",
      featuresHeading: "Produktegenskaper & Innehåll",
      usageHeading: "Steg-för-Steg Användningsguide",
      intentionHeading: "Andlig Avsikt & Affirmation",
      safetyHeading: "Användning, Förvaring & Medicinsk Varning",
      backToShop: "← Tillbaka till Shop",
      prevProduct: "← Föregående",
      nextProduct: "Nästa →",
      secureBadge: "Shopier 3D Secure Betalning · Kort",
    },
  },
} as const;

const EXTERNAL_OIL_SAFETY = {
  tr: "Harici Kullanım İçindir: Yutulmaz ve dahilen tüketilmez. İlk kullanım öncesinde bileğinizin küçük bir alanında cilt testi yapınız; alerji veya hassasiyet durumunda kullanımı durdurunuz. Şişeyi serin, kuru ve doğrudan güneş ışığı almayan karanlık bir yerde muhafaza ediniz. Bu ürün tıbbi bir ilaç değildir; herhangi bir hastalığın teşhis veya tedavisi amacıyla kullanılmaz.",
  en: "For External Ritual & Aromatic Use Only: Do not ingest. Perform a patch test on a small area of skin before first use; discontinue if sensitivity occurs. Store in a cool, dark place away from direct sunlight. This product is not a medical drug and is not intended to diagnose, treat, or cure any condition.",
  sv: "Endast för utvärtes rituellt bruk: Får ej förtäras. Gör ett hudtest på ett litet område före första användning. Förvara svalt och mörkt. Denna produkt är inte ett läkemedel.",
} as const;

const EXTERNAL_SALT_SAFETY = {
  tr: "Harici Kullanım İçindir: Yemeklerde kullanılmaz ve kesinlikle yutulmaz. Nemden uzak, ağzı kapalı ve kuru bir yerde muhafaza ediniz. Bu karışım yalnızca geleneksel ritüel, meditasyon ve mekan enerjisi çalışmaları içindir; tıbbi teşhis veya tedavi yerine geçmez.",
  en: "For External Ritual Use Only: Not for culinary use; do not ingest. Keep sealed in a dry place away from moisture. Intended strictly for traditional ritual, meditation, and space-clearing practices.",
  sv: "Endast för utvärtes rituellt bruk: Ej för matlagning; får ej förtäras. Förvara torrt och väl förslutet.",
} as const;

const CONSULTATION_SAFETY = {
  tr: "Dijital Danışmanlık Hizmeti: Sipariş oluşturulduktan sonra randevu tarihi belirlenir ve doğum bilgileriniz alınarak analiziniz belirtilen gün ve saatte tarafınıza iletilir. Astroloji ve Tarot danışmanlıkları kişisel farkındalık, sembolik analiz ve rehberlik kapsamındadır; tıbbi, psikolojik, hukuki veya finansal tavsiye yerine geçmez.",
  en: "Digital Consultation Service: After your order is placed on Shopier, your appointment date is scheduled and your birth details are collected. All consultations are provided for symbolic self-knowledge and guidance, and do not replace medical, psychological, or legal advice.",
  sv: "Digital Konsultationstjänst: Efter beställning via Shopier bokas tid och dina födelseuppgifter samlas in. Konsultationer ges för självinsikt och vägledning.",
} as const;

export const shopProducts: readonly ShopProduct[] = [
  {
    slug: "yesil-ahit-ekitap",
    shopierId: "43358059",
    shopierUrl: "https://www.shopier.com/runeyard/43358059",
    category: "ebook",
    glyph: "I",
    price: "485 TL",
    oldPrice: "539 TL",
    discountBadge: {
      tr: "%10 İNDİRİM · DİJİTAL E-KİTAP",
      en: "10% OFF · DIGITAL E-BOOK",
      sv: "10% RABATT · DIGITAL E-BOK",
    },
    volume: {
      tr: "Dijital E-Kitap (E-posta Teslim)",
      en: "Digital e-Book (Email Delivery)",
      sv: "Digital e-bok (Leverans via e-post)",
    },
    image: "/shop/yesil-ahit-ekitap.jpg",
    title: {
      tr: "Yeşil Ahit: Kadim Bitkilerle Çalışma Sanatı (e-Kitap)",
      en: "The Green Covenant: The Art of Working with Ancient Plants (e-Book)",
      sv: "Det Gröna Förbundet: Konsten att Arbeta med Forntida Växter (e-Bok)",
    },
    subtitle: {
      tr: "Bitkilerin Ruhu, Kazan ve Havan Simyası, Pratik Ritüel ve Ocak Rehberi",
      en: "The Spirit of Plants, Cauldron & Mortar Alchemy, and Practical Hearth Guide",
      sv: "Växternas Ande, Kittel- & Mortelalkemi samt Praktisk Härdguide",
    },
    summary: {
      tr: "Onlar sadece birer bitki değil; yaşayan, nefes alan birer eşlikçi. ‘Yeşil Ahit’ ile bitkileri yalnızca etiketleriyle değil, ‘Kazan ve Havan’ simyasıyla tanıyın.",
      en: "They are not merely plants, but living, breathing companions. Discover practical botanical alchemy in 'The Green Covenant'.",
      sv: "De är inte bara växter, utan levande följeslagare. Upptäck praktisk botanisk alkemi i 'Det Gröna Förbundet'.",
    },
    paragraphs: {
      tr: [
        "Onlar sadece birer bitki değil; yaşayan, nefes alan birer eşlikçi. Bugüne kadar onları sadece etiketleriyle tanıdınız; yemeklere tat, çaylara koku veren malzemeler olduklarını düşündünüz. Oysa ‘Yeşil Ahit’in kapağını kaldırdığınızda, sadece bitkileri tanımayacak; onlarla çalışmayı öğreneceksiniz.",
        "Bilmek yetmez, dokunmak gerekir. Kitabın ikinci kapısı olan ‘Kazan ve Havan’ bölümünde teori bitiyor, pratik simya başlıyor. Bu sayfalarda kendi ritüellerinizin, tütsülerinizin, yağlarınızın ve ocak çalışmalarınızın uygulayıcısı olacaksınız.",
        "Not: E-kitap, Shopier siparişiniz sırasında girdiğiniz e-posta adresinize otomatik olarak teslim edilir."
      ],
      en: [
        "They are not merely plants, but living, breathing companions. Until now you may have known them only by their labels—ingredients that flavor food or scent tea. When you open 'The Green Covenant', you learn not merely to name plants, but to work with them.",
        "In the second gate of the book, 'The Cauldron and the Mortar', theory gives way to practical alchemy: crafting your own botanical blends, infusions, incenses, and hearth practices.",
        "Note: Delivered automatically to the email address entered during your Shopier checkout."
      ],
      sv: [
        "De är inte bara växter, utan levande följeslagare. I 'Det Gröna Förbundet' lär du dig att arbeta praktiskt med växternas alkemi genom 'Kitteln och Morteln'.",
        "Levereras automatiskt till den e-postadress du anger vid köpet i Shopier."
      ],
    },
    features: {
      tr: [
        "I. Kapı — Kadim Bitkilerin Ruhu, Gezegensel ve Elementsel İmzaları",
        "II. Kapı — ‘Kazan ve Havan’: Pratik Simya, Tütsü, Yağ, Tuz ve Ocak Tarifleri",
        "Hasat Etiği, Ay Fazlarıyla Çalışma ve Doğal Malzeme Seçimi",
        "Sipariş sırasında girdiğiniz e-posta adresine otomatik dijital teslimat"
      ],
      en: [
        "Gate I — The Spirit of Ancient Plants, Planetary & Elemental Signatures",
        "Gate II — 'The Cauldron & the Mortar': Practical Alchemy, Oils, Salts & Incense",
        "Honorable Harvest Ethics and Lunar Timing",
        "Automatic digital delivery to your email address upon purchase"
      ],
      sv: [
        "Port I — Forntida Växters Ande, Planetära & Elementära Signaturer",
        "Port II — 'Kitteln & Morteln': Praktisk Alkemi, Oljor, Salter & Rökelse",
        "Automatisk digital leverans till din e-postadress"
      ],
    },
    usageSteps: {
      tr: [
        "‘Shopier ile Satın Al’ butonuna tıklayarak sipariş formuna aktif kullandığınız e-posta adresinizi girin.",
        "Ödeme tamamlandığında e-kitap bağlantınız e-posta adresinize otomatik olarak iletilir.",
        "Kitaptaki ‘Kazan ve Havan’ uygulamalarını kendi çalışma defterinizle adım adım deneyimleyin."
      ],
      en: [
        "Click 'Buy via Shopier' and enter your active email address during checkout.",
        "Your e-book is delivered automatically to your inbox upon completion.",
        "Practice the 'Cauldron & Mortar' chapters alongside your own herbal journal."
      ],
      sv: [
        "Klicka på 'Köp via Shopier' och ange din e-postadress.",
        "E-boken levereras automatiskt till din e-post."
      ],
    },
    safetyNote: {
      tr: "Dijital E-Kitap Bilgilendirmesi: E-kitap otomatik olarak sipariş sırasında girdiğiniz mail adresinize teslim edilir; dijital ürün olduğu için satın alındıktan sonra iade işlemi yapılmamaktadır. Kitapta yer alan tüm bitkisel bilgiler tarih, folklor ve geleneksel kültür kapsamındadır; tıbbi teşhis veya tedavi yerine geçmez.",
      en: "Digital e-Book Notice: Delivered automatically to the email address provided at checkout; as a digital product, it is non-refundable once delivered. All botanical lore within is for cultural and historical study and does not constitute medical advice.",
      sv: "Digital e-bok: Levereras automatiskt via e-post och återbetalas ej efter leverans. All växtkunskap presenteras i kulturellt och historiskt syfte.",
    },
  },
  {
    slug: "velvet-love-oil",
    shopierId: "32407088",
    shopierUrl: "https://www.shopier.com/runeyard/32407088",
    category: "oils",
    glyph: "II",
    price: "650 TL",
    volume: { tr: "10 ml · Doğal Ritüel Yağı", en: "10 ml · Ritual Oil", sv: "10 ml · Rituell Olja" },
    image: "/shop/velvet-love-oil.jpg",
    title: {
      tr: "Velvet Love Oil (Kadife Aşk Yağı)",
      en: "Velvet Love Oil",
      sv: "Velvet Love Oil (Sammetslen Kärleksolja)",
    },
    subtitle: {
      tr: "Sevgi Frekansı, Öz-Şefkat, Romantik Uyum ve Cazibe Çalışmaları İçin %100 Doğal Karışım",
      en: "100% Natural Blend for Love Frequency, Self-Compassion, Romantic Harmony & Attraction",
      sv: "100 % Naturlig Blandning för Kärleksfrekvens, Självmedkänsla och Harmoni",
    },
    summary: {
      tr: "Sevgi enerjisini artırmak, romantik bağları güçlendirmek ve kendinize duyduğunuz öz-sevgiyi derinleştirmek için kişiye özel kodlanan 10 ml ritüel yağı.",
      en: "Personally encoded 10 ml ritual oil crafted to deepen self-love, strengthen romantic bonds, and invite harmonious attraction.",
      sv: "Personligt kodad 10 ml rituell olja för att stärka självkärlek, romantiska band och harmoni.",
    },
    paragraphs: {
      tr: [
        "Velvet Love Oil (Kadife Aşk Yağı), sevgi enerjisini artırmak, romantik bağları güçlendirmek ve kendinize duyduğunuz sevgiyi derinleştirmek için %100 doğal uçucu yağlar ve enerji yüklü bitkilerle özenle hazırlanmıştır.",
        "Yaydığı yumuşak, tatlı koku ve yüksek frekans ile hem öz-şefkat çalışmalarında hem de ilişki uyumu ve cazibe ritüellerinde alanı sıcaklıkla sarar. Gönderilmeden önce kişiye özel kodlanır ve ThetaHealing çalışmasıyla yüklenir."
      ],
      en: [
        "Velvet Love Oil is carefully formulated from 100% natural essential oils and botanicals to awaken love energy, nurture romantic harmony, and deepen self-compassion.",
        "Each bottle is personally encoded for its recipient with ThetaHealing before dispatch."
      ],
      sv: [
        "Velvet Love Oil är sammansatt av 100 % naturliga eteriska oljor och örter för att stärka kärlek, harmoni och självmedkänsla, personligt kodad före leverans."
      ],
    },
    features: {
      tr: [
        "Sevgi ve Romantizm: İçeriğindeki doğal bitkisel karışım ile kalp frekansını ve uyumu destekler.",
        "Doğal ve Vegan İçerik: %100 doğal uçucu yağlar ve enerji yüklü bitkilerle hazırlanmıştır.",
        "Kişiye Özel Kodlama: Sipariş sahibine özel kodlanır ve ThetaHealing yüklemesi yapılır.",
        "Miktar: 10 ml damlalıklı amber/koruyucu şişe."
      ],
      en: [
        "Love & Harmony: Supports heart resonance, attraction, and affectionate connection.",
        "100% Natural & Vegan: Pure essential oils and botanical extracts.",
        "Personally Encoded: Prepared and encoded specifically for the buyer.",
        "Volume: 10 ml bottle."
      ],
      sv: [
        "Kärlek & Harmoni: Stödjer hjärtats frekvens och harmoni.",
        "100 % Naturlig & Vegansk: Eteriska oljor och växter.",
        "Volym: 10 ml."
      ],
    },
    usageSteps: {
      tr: [
        "Kendine Sevgi ve Şefkat: Kalp çakranıza (göğsünüze), bileklerinize veya boynunuza bir damla sürerek sevgi enerjisini hissedin.",
        "Romantik Enerji ve Meditasyon: Uyum ritüellerinde, mum çalışmalarında veya aksesuarlarınıza bir damla uygulayarak frekansı yanınızda taşıyın.",
        "Cazibe ve Alan: Yaydığı tatlı ve yumuşak koku ile sosyal ortamlarda ve özel görüşmelerde aurik alanınızı destekleyin."
      ],
      en: [
        "Self-Love & Compassion: Apply a single drop to your heart center, wrists, or neck.",
        "Rituals & Meditation: Anoint candles, talismans, or accessories to carry the frequency of harmony.",
        "Presence & Magnetism: Use before special gatherings to warm your auric field."
      ],
      sv: [
        "Självkärlek: Applicera en droppe vid hjärtchakrat eller handlederna.",
        "Ritual & Meditation: Smörj ljus eller smycken för att bära harmonins frekvens."
      ],
    },
    intention: {
      tr: "“Bu yağ, bana sevgi, uyum ve mutluluk getirsin. Sevginin enerjisiyle çevriliyim.”",
      en: "“May this oil bring love, harmony, and joy into my life. I am surrounded by the energy of love.”",
      sv: "”Må denna olja föra kärlek, harmoni och glädje in i mitt liv.”",
    },
    safetyNote: EXTERNAL_OIL_SAFETY,
  },
  {
    slug: "celestial-elixir-oil",
    shopierId: "32406871",
    shopierUrl: "https://www.shopier.com/runeyard/32406871",
    category: "oils",
    glyph: "III",
    price: "650 TL",
    volume: { tr: "10 ml · Doğal Ritüel Yağı", en: "10 ml · Ritual Oil", sv: "10 ml · Rituell Olja" },
    image: "/shop/celestial-elixir-oil.jpg",
    title: {
      tr: "Celestial Elixir (Durugörü & Kehanet Yağı)",
      en: "Celestial Elixir (Clairvoyance & Divination Oil)",
      sv: "Celestial Elixir (Klärvoajans- & Spådomsolja)",
    },
    subtitle: {
      tr: "Sezgi Gücü, Üçüncü Göz Odağı, Rün ve Tarot Çalışmaları İçin Ritüel Yağı",
      en: "Ritual Oil for Intuition, Third-Eye Focus, Rune & Tarot Divination",
      sv: "Rituell Olja för Intuition, Tredje Ögat, Runor & Tarot",
    },
    summary: {
      tr: "Sezgi gücünü keskinleştirmek, derin meditasyonlara hazırlanmak ve Rün/Tarot gibi kehanet araçlarını uyumlamak için hazırlanan 10 ml yağ.",
      en: "10 ml botanical oil formulated to sharpen intuition, deepen meditation, and consecrate Rune or Tarot divination tools.",
      sv: "10 ml botanisk olja för att skärpa intuitionen, fördjupa meditation och inviga runor eller tarotkort.",
    },
    paragraphs: {
      tr: [
        "Celestial Elixir (Durugörü Kehanet Yağı), sezgi gücünüzü artırmak, ruhsal farkındalık geliştirmek ve derin meditasyonlara hazırlanmak için %100 doğal uçucu yağlar ve bitkisel bileşenlerle hazırlanmıştır.",
        "Üçüncü göz odağını destekleyerek Rün, Tarot, su/ayna gözlemi ve rüya çalışmalarında zihinsel berraklık sağlar. Kişiye özel kodlanır ve ThetaHealing ile yüklenir."
      ],
      en: [
        "Celestial Elixir is crafted from 100% pure essential oils and botanicals to heighten intuitive perception and prepare the mind for deep meditation and divination.",
        "Ideal for anointing Rune sets, Tarot decks, or the brow before contemplative study."
      ],
      sv: [
        "Celestial Elixir är framtagen av 100 % naturliga eteriska oljor för att stärka intuition och fokus vid meditation, runläggning och tarot."
      ],
    },
    features: {
      tr: [
        "Doğal, Vegan ve Saf İçerik: %100 doğal uçucu yağlar ve bitkisel özler.",
        "Kehanet ve Tefekkür Desteği: Rün, Tarot, durugörü ve derin odak çalışmalarında zihni berraklaştırır.",
        "Kişiye Özel Kodlama: Sipariş sahibine özel kodlanır ve ThetaHealing yüklemesi yapılır.",
        "Miktar: 10 ml."
      ],
      en: [
        "Pure Vegan Botanicals: 100% natural essential oils and herbs.",
        "Divination & Focus: Supports Rune casting, Tarot reading, and third-eye meditation.",
        "Personally Encoded: Prepared specifically for the buyer · 10 ml."
      ],
      sv: [
        "100 % Naturlig & Vegansk: Eteriska oljor och örter.",
        "Stöd för Spådom & Meditation: För runor, tarot och inre fokus · 10 ml."
      ],
    },
    usageSteps: {
      tr: [
        "Meditasyon ve Odak: Alnınıza (iki kaş arasına) veya şakaklarınıza bir damla sürerek içsel sessizliği derinleştirin.",
        "Rün ve Kehanet Araçları: Rün kesenize, ahşap rünlerinize veya kehanet masanıza birkaç damla uygulayarak alanı uyumlayın.",
        "Mekan ve Aksesuar: Zihinsel berraklık için çalışma masanıza veya aksesuarlarınıza bir damla damlatın."
      ],
      en: [
        "Meditation: Apply a drop to the temples or brow before silent study.",
        "Divination Tools: Anoint your rune pouch, altar cloth, or workspace.",
        "Clarity: Apply to wrists to maintain intuitive equilibrium throughout the day."
      ],
      sv: [
        "Meditation: Applicera en droppe vid tinningarna före stilla studium.",
        "Spådomsredskap: Smörj din runpåse eller ditt arbetsbord."
      ],
    },
    intention: {
      tr: "“Bu yağı kullandığımda sezgilerim açılır, ruhsal yolculuğum derinleşir ve ilahi rehberliğe kendimi açarım.”",
      en: "“As I use this oil, my intuition awakens, my inner journey deepens, and I open myself to clear guidance.”",
      sv: "”När jag använder denna olja vaknar min intuition och min inre väg klarnar.”",
    },
    safetyNote: EXTERNAL_OIL_SAFETY,
  },
  {
    slug: "astral-harmony-oil",
    shopierId: "32407003",
    shopierUrl: "https://www.shopier.com/runeyard/32407003",
    category: "oils",
    glyph: "IV",
    price: "650 TL",
    volume: { tr: "10 ml · Doğal Ritüel Yağı", en: "10 ml · Ritual Oil", sv: "10 ml · Rituell Olja" },
    image: "/shop/astral-harmony-oil.jpg",
    title: {
      tr: "Astral Harmony (Astral Seyahat ve Rüya Çalışmaları Yağı)",
      en: "Astral Harmony (Dreamwork & Astral Journey Oil)",
      sv: "Astral Harmony (Drömarbete & Astral Reseolja)",
    },
    subtitle: {
      tr: "Bilinçli Rüya (Lucid Dream), Gece Tefekkürü ve Ruhsal Denge Yağı",
      en: "Botanical Oil for Lucid Dreaming, Night Contemplation & Spiritual Balance",
      sv: "Botanisk Olja för Klardrömmande, Nattlig Kontemplation & Balans",
    },
    summary: {
      tr: "Uyku kalitesini desteklemek, rüya çalışmalarını derinleştirmek ve meditasyonlarda dingin bir frekans kurmak için hazırlanan 10 ml yağ.",
      en: "10 ml oil formulated to support restful sleep, dream recall, and serene meditative alignment.",
      sv: "10 ml olja utformad för att stödja drömarbete, god sömn och djup meditation.",
    },
    paragraphs: {
      tr: [
        "Astral Harmony Yağı, ruhsal dengeyi sağlamak, rüya çalışmalarını berraklaştırmak ve derin meditasyonlarda zihni yatıştırmak için %100 doğal uçucu yağlarla özenle formüle edilmiştir.",
        "Gece yatmadan önce yastık kenarına veya şakaklara uygulandığında uyku eşiğindeki geçişi yumuşatır ve rüya hatırlamayı destekler."
      ],
      en: [
        "Astral Harmony Oil is blended from 100% natural oils to harmonize the energy field, support restful sleep, and deepen dreamwork and astral contemplation."
      ],
      sv: [
        "Astral Harmony-oljan är skapad av 100 % naturliga oljor för att harmonisera energifältet och stödja drömarbete."
      ],
    },
    features: {
      tr: [
        "Rüya ve Gece Rehberliği: Rüya günlüğü ve gece tefekkürü çalışmaları için özel botanik formül.",
        "%100 Doğal İçerik: Saf uçucu yağlar ile hazırlanmıştır.",
        "Kişiye Özel Kodlama: Sipariş sahibine özel kodlanır ve ThetaHealing yüklenir · 10 ml."
      ],
      en: [
        "Dreamwork & Night Study: Formulated for dream recall and serene sleep.",
        "100% Natural Oils · Personally encoded · 10 ml."
      ],
      sv: [
        "Drömarbete & Nattstudier: Naturliga eteriska oljor · 10 ml."
      ],
    },
    usageSteps: {
      tr: [
        "Uyku ve Rüya Çalışmaları: Yatmadan önce yastığınızın kenarına veya bileklerinize bir damla damlatarak rüya niyetinizi belirleyin.",
        "Meditasyon: Alnınıza veya şakaklarınıza bir damla sürerek dinginliğe geçin.",
        "Mekan Dengesi: Çalışma veya dinlenme odanızda huzurlu bir atmosfer kurmak için kullanın."
      ],
      en: [
        "Dreamwork: Place a drop on the corner of your pillow or wrists before sleep while setting your dream intention.",
        "Meditation: Apply lightly to temples to enter calm stillness."
      ],
      sv: [
        "Drömarbete: Droppa på kuddkanten eller handlederna före sömn."
      ],
    },
    intention: {
      tr: "“Bu yağ, ruhsal yolculuğumu uyum içinde destekler, bana ilahi rehberlik ve denge getirir.”",
      en: "“This oil supports my spiritual journey in harmony, bringing clear guidance and balance.”",
      sv: "”Denna olja stödjer min inre resa i harmoni och ger vägledning och balans.”",
    },
    safetyNote: EXTERNAL_OIL_SAFETY,
  },
  {
    slug: "golden-divine-oil",
    shopierId: "32407329",
    shopierUrl: "https://www.shopier.com/runeyard/32407329",
    category: "oils",
    glyph: "V",
    price: "650 TL",
    volume: { tr: "10 ml · Doğal Ritüel Yağı", en: "10 ml · Ritual Oil", sv: "10 ml · Rituell Olja" },
    image: "/shop/golden-divine-oil.jpg",
    title: {
      tr: "Golden Divine Oil (Kutsal Bereket Yağı)",
      en: "Golden Divine Oil (Sacred Abundance Oil)",
      sv: "Golden Divine Oil (Helig Överflödsolja)",
    },
    subtitle: {
      tr: "Bolluk, Bereket, Üretkenlik ve Açık Yol Niyetleri İçin Ritüel Yağı",
      en: "Ritual Oil for Abundance, Prosperity, Creative Flow & Open Roads",
      sv: "Rituell Olja för Överflöd, Välgång och Kreativt Flöde",
    },
    summary: {
      tr: "Yaşam ve çalışma alanınıza bolluk, bereket ve üretkenlik frekansını davet etmek için %100 doğal yağlarla hazırlanan 10 ml karışım.",
      en: "10 ml natural botanical blend crafted to invite prosperity, generous flow, and productive energy into your work and home.",
      sv: "10 ml naturlig oljeblandning för att bjuda in överflöd och skapandekraft.",
    },
    paragraphs: {
      tr: [
        "Golden Divine Oil (Kutsal Bereket Yağı), bolluk ve bereket enerjisini çekmek, alma-verme dengesini onarmak ve çalışma alanınızı canlandırmak için %100 doğal uçucu yağlarla hazırlanmış özel bir karışımdır.",
        "İş yeri girişlerinde, çalışma masasında, cüzdan veya bereket tılsımlarında niyet odaklı bir eşlikçi olarak kullanılır."
      ],
      en: [
        "Golden Divine Oil is a specialized blend of 100% natural essential oils designed to support prosperity mindset, clear stagnation around material flow, and energize your workspace."
      ],
      sv: [
        "Golden Divine Oil är en specialblandning av 100 % naturliga oljor som stödjer överflöd, flöde och arbetsglädje."
      ],
    },
    features: {
      tr: [
        "Bolluk ve Akış: Üretim, ticaret ve bereket niyetlerinde odaklayıcı botanik formül.",
        "%100 Doğal ve Vegan İçerik: Saf bitkisel ve uçucu yağlar.",
        "Kişiye Özel Kodlama: Sipariş sahibine özel kodlanır · 10 ml."
      ],
      en: [
        "Abundance & Circulation: Botanical formula for work, enterprise, and prosperity rituals.",
        "100% Natural & Vegan · Personally encoded · 10 ml."
      ],
      sv: [
        "Överflöd & Kretslopp: 100 % naturliga och veganska oljor · 10 ml."
      ],
    },
    usageSteps: {
      tr: [
        "Niyet ve Meditasyon: Gün başlangıcında bileklerinize bir damla sürerek üretkenlik ve bereket niyetinizi kurun.",
        "Çalışma Alanı ve Eşik: İş yerinizin girişine veya çalışma masanızın köşelerine birkaç damla uygulayın.",
        "Cüzdan ve Tılsımlar: Cüzdanınıza veya Fehu/Jera gibi bereket tılsımlarınıza bir damla sürerek akışı mühürleyin."
      ],
      en: [
        "Morning Intention: Apply a drop to your wrists at the start of the workday.",
        "Workspace & Threshold: Anoint desk corners, ledgers, or business thresholds.",
        "Talismans: Apply a tiny drop to your wallet or prosperity talismans."
      ],
      sv: [
        "Morgonavsikt: Applicera en droppe på handlederna vid arbetsdagens början.",
        "Arbetsplats: Smörj skrivbordshörn eller plånbok."
      ],
    },
    intention: {
      tr: "“Bu yağ, bolluk ve bereketi hayatıma çeker. Evrensel enerjilerle uyum içindeyim.”",
      en: "“This oil invites abundance and prosperity into my life. I walk in harmony with generous flow.”",
      sv: "”Denna olja bjuder in överflöd och välgång i mitt liv.”",
    },
    safetyNote: EXTERNAL_OIL_SAFETY,
  },
  {
    slug: "sacred-shield-oil",
    shopierId: "32407179",
    shopierUrl: "https://www.shopier.com/runeyard/32407179",
    category: "oils",
    glyph: "VI",
    price: "650 TL",
    volume: { tr: "10 ml · Doğal Ritüel Yağı", en: "10 ml · Ritual Oil", sv: "10 ml · Rituell Olja" },
    image: "/shop/sacred-shield-oil.jpg",
    title: {
      tr: "Sacred Shield Oil (Saklı Kalkan Yağı)",
      en: "Sacred Shield Oil (Protective Ward Oil)",
      sv: "Sacred Shield Oil (Skyddande Sköldolja)",
    },
    subtitle: {
      tr: "Adaçayı, Biberiye ve Sedir Ağacı Özleriyle Enerji Alanı ve Eşik Koruma Yağı",
      en: "Boundary & Threshold Warding Oil with Sage, Rosemary, and Cedarwood",
      sv: "Gräns- och Tröskelskyddsolja med Salvia, Rosmarin och Cederträ",
    },
    summary: {
      tr: "Adaçayı, Biberiye ve Sedir Ağacı yağlarının güçlü arındırıcı doğasıyla kişisel alanınızı ve kapı eşiklerinizi mühürlemek için 10 ml yağ.",
      en: "10 ml protective oil combining Sage, Rosemary, and Cedarwood to cleanse and ward personal space and thresholds.",
      sv: "10 ml skyddsolja med Salvia, Rosmarin och Cederträ för att rena och skydda rum och gränser.",
    },
    paragraphs: {
      tr: [
        "Sacred Shield Oil (Saklı Kalkan Yağı), enerjinizi koruma altına almak, ağır ve yorucu etkilerden arınmak ve kişisel sınırınızı güçlendirmek için Adaçayı, Biberiye ve Sedir Ağacı başta olmak üzere %100 doğal uçucu yağlarla hazırlanmıştır.",
        "Kalabalık ortamlara girmeden önce bileklerde veya ev/iş yeri kapı eşiklerinde koruyucu kalkan çalışması olarak kullanılır."
      ],
      en: [
        "Sacred Shield Oil blends pure Sage, Rosemary, and Cedarwood essential oils to fortify personal boundaries, clear heavy atmospheres, and ward doorways and ritual circles."
      ],
      sv: [
        "Sacred Shield Oil förenar Salvia, Rosmarin och Cederträ för att stärka personliga gränser och skydda hemmet."
      ],
    },
    features: {
      tr: [
        "Adaçayı, Biberiye ve Sedir Ağacı: Kadim arındırma ve koruma bitkilerinin saf uçucu yağları.",
        "Mekan ve Aura Kalkanı: Kapı eşikleri, pencereler ve kişisel sınır çalışmaları için ideal.",
        "Kişiye Özel Kodlama: Sipariş sahibine özel kodlanır · 10 ml."
      ],
      en: [
        "Sage, Rosemary & Cedarwood: Classical apotropaic and purifying botanicals.",
        "Threshold & Personal Warding · 100% Natural & Vegan · 10 ml."
      ],
      sv: [
        "Salvia, Rosmarin & Cederträ: Klassiska renande och skyddande växter · 10 ml."
      ],
    },
    usageSteps: {
      tr: [
        "Kişisel Kalkan: Kalabalık veya yorucu ortamlara girmeden önce bileklerinize ve ense kökünüze bir damla sürün.",
        "Eşik Mühürleme: Evinizin kapı pervazlarına ve pencere kenarlarına birer damla uygulayarak sınır çizin.",
        "Tılsım ve Aksesuar: Algiz veya Thurisaz gibi koruyucu tılsımlarınızı bu yağ ile yağlayın."
      ],
      en: [
        "Personal Shield: Apply a drop to wrists before entering crowded or draining environments.",
        "Threshold Warding: Touch a drop to doorframes and window sills.",
        "Talisman Anointing: Consecrate protective staves or jewelry."
      ],
      sv: [
        "Personlig Sköld: Applicera en droppe på handlederna före krävande miljöer.",
        "Tröskelskydd: Stryk en droppe på dörrkarmar och fönster."
      ],
    },
    intention: {
      tr: "“Bu yağ, beni negatif enerjilerden korur, enerjimi dengeler ve ruhsal alanımı güçlendirir.”",
      en: "“This oil shields me from discordant energies, balances my center, and fortifies my sovereign space.”",
      sv: "”Denna olja skyddar mig från tunga energier och stärker mitt inre rum.”",
    },
    safetyNote: EXTERNAL_OIL_SAFETY,
  },
  {
    slug: "ras-eternal-light-elixir",
    shopierId: "32412351",
    shopierUrl: "https://www.shopier.com/runeyard/32412351",
    category: "elixirs",
    glyph: "VII",
    price: "590 TL",
    volume: { tr: "100 ml · Ritüel İksiri / Sprey", en: "100 ml · Ritual Elixir Spray", sv: "100 ml · Rituellt Elixir" },
    image: "/shop/ras-eternal-light-elixir.jpg",
    title: {
      tr: "Ra’s Eternal Light (Ra’nın Sonsuz Işığı İksiri)",
      en: "Ra’s Eternal Light (Solar Vitality & Protection Elixir)",
      sv: "Ra’s Eternal Light (Solens Eviga Ljus — Elixir)",
    },
    subtitle: {
      tr: "Güneş Enerjisi, Özgüven, Solar Pleksus Gücü ve Mekan Aydınlatma İksiri (100 ml)",
      en: "100 ml Botanical Elixir for Solar Vitality, Confidence, Solar Plexus Strength & Space Clearing",
      sv: "100 ml Botaniskt Elixir för Sollivskraft, Självförtroende och Rumsrening",
    },
    summary: {
      tr: "Antik güneş arketipi Ra’dan ilhamla hazırlanan; yaşam enerjisini, kararlılığı, özgüveni ve mekanın ışık frekansını yükselten 100 ml iksir.",
      en: "Inspired by the solar archetype of Ra, this 100 ml elixir elevates vitality, confidence, and spatial clarity.",
      sv: "Inspirerat av solarketypen Ra, lyfter detta 100 ml elixir livskraft, mod och rummets energi.",
    },
    paragraphs: {
      tr: [
        "Ra’s Eternal Light (Ra’nın Sonsuz Işığı İksiri), gücü, korumayı, berraklığı ve yaşam enerjisini temsil eden 100 ml’lik özel bir botanik iksirdir.",
        "Sabah güne başlarken, önemli toplantı ve sunumlar öncesinde özgüveni desteklemek, solar pleksus merkezini canlandırmak ve çalışma odasının enerjisini güneş ışığı gibi tazelemek için kullanılır."
      ],
      en: [
        "Ra’s Eternal Light is a 100 ml botanical elixir formulated to embody solar clarity, vitality, and protective warmth across both personal practice and living spaces."
      ],
      sv: [
        "Ra’s Eternal Light är ett 100 ml botaniskt elixir som ger solklarhet, livskraft och skydd."
      ],
    },
    features: {
      tr: [
        "Güneş Frekansı ve Canlılık: Özgüven, irade ve solar pleksus dengesini destekler.",
        "Mekan ve Obje Temizliği: Kapı eşikleri, oda köşeleri ve ritüel araçları için 100 ml sprey/iksir formu.",
        "Doğal ve Vegan İçerik · Kişiye özel kodlanır · Raf ömrü açıldıktan sonra 6 aydır."
      ],
      en: [
        "Solar Vitality & Willpower: Supports confidence and solar plexus balance.",
        "Space & Talisman Clearing · 100 ml bottle · 6-month shelf life after opening."
      ],
      sv: [
        "Sollivskraft & Vilja: För personligt fokus och rumsrening · 100 ml."
      ],
    },
    usageSteps: {
      tr: [
        "Sabah ve Özgüven Çalışması: Güne başlarken veya önemli görüşmeler öncesinde bileklerinize ve avuçlarınıza uygulayıp derin bir nefes alın.",
        "Mekan Temizliği: Ev veya iş yerinizin kapı eşiklerine ve dört köşesine püskürterek alanı tazeleyin.",
        "Obje ve Kristal Güçlendirme: Güneş karakterli taşlarınızı (Sitrin, Kehribar, Kaplan Gözü) ve çalışma araçlarınızı arındırın."
      ],
      en: [
        "Morning Vitality: Mist onto palms and wrists at dawn or before important presentations.",
        "Space Clearing: Spray across doorways and the four corners of your study.",
        "Object Consecration: Refresh solar stones and ritual implements."
      ],
      sv: [
        "Morgonenergi: Spraya i handflatorna vid dagens början.",
        "Rumsrening: Spraya vid trösklar och rummets fyra hörn."
      ],
    },
    intention: {
      tr: "“Ra’nın ışığı bana rehberlik etsin; iradem berrak, alanım aydınlık ve güçlüdür.”",
      en: "“May solar light guide my path; my will is clear, my space is luminous and strong.”",
      sv: "”Må solens ljus leda min väg; min vilja är klar och mitt rum är starkt.”",
    },
    safetyNote: EXTERNAL_OIL_SAFETY,
  },
  {
    slug: "silver-moon-elixir",
    shopierId: "32412871",
    shopierUrl: "https://www.shopier.com/runeyard/32412871",
    category: "elixirs",
    glyph: "VIII",
    price: "590 TL",
    volume: { tr: "100 ml · Gümüş Tozlu Ay İksiri", en: "100 ml · Lunar Elixir Spray", sv: "100 ml · Månelixir" },
    image: "/shop/silver-moon-elixir.jpg",
    title: {
      tr: "Silver Moon (Gümüş Ay İksiri)",
      en: "Silver Moon (Lunar Purification & Intuition Elixir)",
      sv: "Silver Moon (Silvermånens Elixir)",
    },
    subtitle: {
      tr: "Saf Su, Şifalı Bitkiler, Uçucu Yağlar ve Gümüş Tozu İle Dolunay/Yeniay İksiri (100 ml)",
      en: "100 ml Full & New Moon Elixir with Pure Water, Herbs, Essential Oils & Silver Dust",
      sv: "100 ml Full- och Nymåneelixir med Örter, Eteriska Oljor och Silverstoft",
    },
    summary: {
      tr: "Dolunayın arındırıcı ve Yeniayın yenileyici enerjisini saf su, şifalı bitkiler, uçucu yağlar ve gerçek gümüş tozuyla buluşturan 100 ml iksir.",
      en: "Uniting Full Moon purification and New Moon renewal with pure water, botanicals, essential oils, and silver dust (100 ml).",
      sv: "Förenar fullmånens rening och nymånens förnyelse med örter och silverstoft (100 ml).",
    },
    paragraphs: {
      tr: [
        "Silver Moon (Gümüş Ay İksiri), dolunayın arındırıcı ve yeni ayın yenileyici enerjisini bir araya getiren 100 ml’lik özel bir iksirdir. İçeriğinde saf su, şifalı bitkiler, doğal uçucu yağlar ve **gümüş tozu** yer alır.",
        "Yeniay ve Dolunay ritüellerinde, kristal (özellikle Ametist, Aytaşı ve Kuvars) temizliğinde, rüya çalışmalarında ve niyet kavanozlarında ay frekansını mühürlemek için tasarlanmıştır."
      ],
      en: [
        "Silver Moon unites the purifying tide of the Full Moon with the renewing seed of the New Moon in a 100 ml elixir containing pure water, herbs, essential oils, and real silver dust."
      ],
      sv: [
        "Silver Moon förenar fullmånens och nymånens kraft i ett 100 ml elixir med örter, eteriska oljor och silverstoft."
      ],
    },
    features: {
      tr: [
        "Gümüş Tozu ve Bitkisel Özler: Saf su, şifalı bitkiler, uçucu yağlar ve gerçek gümüş tozu içerir.",
        "Ay Ritüelleri ve Kristal Temizliği: Kuvars, Ametist, Aytaşı, Tarot ve Rün setlerini ay enerjisiyle arındırır.",
        "Rüya ve Yatak Başucu Kullanımı · Kişiye özel kodlanır · 100 ml."
      ],
      en: [
        "Silver Dust & Botanicals: Crafted with pure water, herbs, essential oils, and silver dust.",
        "Lunar Rituals & Crystal Cleansing: Ideal for Moonstone, Amethyst, Quartz, and divination tools · 100 ml."
      ],
      sv: [
        "Silverstoft & Växtextrakt: För månritualer, kristallrening och drömarbete · 100 ml."
      ],
    },
    usageSteps: {
      tr: [
        "Yeniay ve Dolunay Çalışmaları: Niyet kağıtlarınıza, niyet kavanozlarınıza veya ritüel alanınıza hafifçe püskürtün.",
        "Kristal ve Obje Arındırma: Aytaşı, Ametist ve Kuvars kristallerinizi veya kehanet araçlarınızı temizlemek için uygulayın.",
        "Rüya ve Uyku Eşiği: Yatmadan önce başucu alanınıza püskürterek dingin bir uyku ve berrak rüya alanı kurun."
      ],
      en: [
        "Lunar Rituals: Mist over intention papers, threshold jars, or altar cloths at New and Full Moon.",
        "Crystal Cleansing: Lightly spray Moonstone, Quartz, or Amethyst.",
        "Bedside Calm: Mist around your sleeping space before rest."
      ],
      sv: [
        "Månritualer: Spraya över intentionspapper eller altare vid nymåne och fullmåne.",
        "Kristallrening: Rena månsten, kvarts och ametist."
      ],
    },
    intention: {
      tr: "“Ay’ın gümüş ışığı enerjimi arındırır; gecem dingin, sezgim berraktır.”",
      en: "“The silver light of the Moon purifies my field; my night is serene, my intuition clear.”",
      sv: "”Månens silverljus renar mitt fält; min natt är stilla och min intuition klar.”",
    },
    safetyNote: EXTERNAL_OIL_SAFETY,
  },
  {
    slug: "relaxation-elixir",
    shopierId: "32412048",
    shopierUrl: "https://www.shopier.com/runeyard/32412048",
    category: "elixirs",
    glyph: "IX",
    price: "590 TL",
    volume: { tr: "100 ml · Rahatlama İksiri", en: "100 ml · Relaxation Elixir", sv: "100 ml · Avslappningselixir" },
    image: "/shop/relaxation-elixir.jpg",
    title: {
      tr: "Relaxation Elixir (Rahatlama ve Dinginlik İksiri)",
      en: "Relaxation Elixir (Serenity & Stress-Relief Elixir)",
      sv: "Relaxation Elixir (Stillhets- & Avslappningselixir)",
    },
    subtitle: {
      tr: "Lavanta, Şifalı Bitkiler ve Doğal Uçucu Yağlarla Zihinsel Sakinlik ve Banyo/Aura İksiri (100 ml)",
      en: "100 ml Lavender & Botanical Elixir for Mental Calm, Bath Rituals & Space Serenity",
      sv: "100 ml Lavendel- och Örtelixir för Sinnesro, Badritualer och Harmoni",
    },
    summary: {
      tr: "Yoğun ve stresli günlerin ağırlığını dağıtmak, çalışma masasında dingin odak kurmak ve uyku/banyo ritüellerinde gevşemek için 100 ml iksir.",
      en: "100 ml soothing botanical elixir with Lavender to dissolve daily tension, calm the study space, and support bath or sleep rituals.",
      sv: "100 ml lugnande örtelixir med lavendel för att lösa upp stress och skapa sinnesro.",
    },
    paragraphs: {
      tr: [
        "Relaxation Elixir (Rahatlama İksiri), lavanta başta olmak üzere sakinleştirici şifalı bitkiler ve doğal uçucu yağlarla stresli günlerin gerilimini yatıştırmak için hazırlanmıştır.",
        "Çalışma masasında zihinsel gerginliği azaltmak, banyo suyuna birkaç damla ekleyerek bedeni dinlendirmek veya uyku öncesi odanın havasını yumuşatmak için çok yönlü kullanılır."
      ],
      en: [
        "Relaxation Elixir combines Lavender and calming botanicals in a 100 ml spray to ease daily tension, restore emotional balance, and prepare the body and mind for rest."
      ],
      sv: [
        "Relaxation Elixir förenar lavendel och lugnande örter i en 100 ml flaska för avkoppling och emotionell balans."
      ],
    },
    features: {
      tr: [
        "Lavanta ve Sakinleştirici Bitkiler: Zihinsel yorgunluğu ve gerginliği yatıştıran doğal formül.",
        "Çok Yönlü Kullanım: Çalışma masası odağı, banyo ritüelleri, uyku hazırlığı ve mekan temizliği.",
        "Miktar: 100 ml koruyucu şişe."
      ],
      en: [
        "Lavender & Soothing Herbs: Natural formula for calm focus and tension relief.",
        "Versatile Use: Study desk mist, bath ritual addition, and bedtime calm · 100 ml."
      ],
      sv: [
        "Lavendel & Lugnande Örter: För arbetsro, badritualer och sömn · 100 ml."
      ],
    },
    usageSteps: {
      tr: [
        "Gün İçi Sakinlik ve Odak: Çalışma masanızın çevresine veya bileklerinize hafifçe uygulayarak derin bir nefes alın.",
        "Banyo Ritüeli: Ilık banyo veya ayak dinlendirme suyuna birkaç püskürtme ekleyerek günün ağırlığını bırakın.",
        "Uykuya Hazırlık: Yatmadan önce yastığınıza ve yatak odanıza hafifçe püskürtün."
      ],
      en: [
        "Daytime Calm: Mist lightly around your desk or onto wrists during tense moments.",
        "Bath Ritual: Add several sprays to warm bathwater or a footbath.",
        "Sleep Preparation: Mist over bedding before sleep."
      ],
      sv: [
        "Dagsfokus: Spraya kring skrivbordet eller på handlederna vid stress.",
        "Badritual & Sömn: Tillsätt i badvatten eller spraya i sovrummet."
      ],
    },
    intention: {
      tr: "“Zihnim sakin, kalbim huzurlu ve enerjim dengede.”",
      en: "“My mind is still, my heart is peaceful, and my energy rests in balance.”",
      sv: "”Mitt sinne är stilla, mitt hjärta är fridfullt och min energi är i balans.”",
    },
    safetyNote: EXTERNAL_OIL_SAFETY,
  },
  {
    slug: "forest-treasure-salt",
    shopierId: "32411059",
    shopierUrl: "https://www.shopier.com/runeyard/32411059",
    category: "salts",
    glyph: "X",
    price: "400 TL",
    volume: { tr: "15 gr · Bitkisel Ritüel Tuzu", en: "15 g · Herbal Ritual Salt", sv: "15 g · Rituellt Örtsalt" },
    image: "/shop/forest-treasure-salt.jpg",
    title: {
      tr: "Forest Treasure (Ormanın Bereket Hazinesi Tuzu)",
      en: "Forest Treasure (Abundance & Hearth Herbal Salt)",
      sv: "Forest Treasure (Skogens Överflödssalt)",
    },
    subtitle: {
      tr: "Şifalı Orman Bitkileri ve Doğal Kaya Tuzu İle Bereket, Mutfak ve İşyeri Tılsım Tuzu",
      en: "Herbal Ritual Salt with Forest Botanicals for Prosperity, Kitchen & Workspace",
      sv: "Rituellt Örtsalt med Skogsväxter för Välgång, Kök och Arbetsplats",
    },
    summary: {
      tr: "Doğanın bolluk ve bereket frekansını evinize, mutfağınıza ve iş yerinize davet etmek için şifalı bitkilerle hazırlanan 15 gr ritüel tuzu.",
      en: "15 g herbal salt blend crafted with forest botanicals to invite grounded prosperity into the home, kitchen altar, or workplace.",
      sv: "15 g örtsalt med skogsväxter för att bjuda in jordad välgång i hem och arbete.",
    },
    paragraphs: {
      tr: [
        "Forest Treasure (Ormanın Bereket Hazinesi), şifalı orman bitkileri ile doğal mineral tuzun uyumlu karışımından oluşan özel bir ritüel tuzudur.",
        "Mutfak ocağında küçük bir kasede bereket tılsımı olarak bulundurmak, iş yeri eşiğine serpmek veya küçük bir keten kesede taşımak için kişiye özel kodlanarak hazırlanır."
      ],
      en: [
        "Forest Treasure blends forest herbs and natural mineral salt to anchor abundance and steady material flow in your home, kitchen, or place of business."
      ],
      sv: [
        "Forest Treasure förenar skogsörter och naturligt salt för att förankra överflöd och stabilitet."
      ],
    },
    features: {
      tr: [
        "Orman Bitkileri ve Doğal Tuz: Topraklama ve bereket frekansını birleştiren bitkisel karışım.",
        "Mutfak ve İşyeri Tılsımı: Ocak köşesinde, iş yeri girişinde veya kese içinde taşımaya uygun.",
        "Kişiye Özel Kodlama · Miktar: 15 gr (Yemeklerde kullanılmaz)."
      ],
      en: [
        "Forest Botanicals & Mineral Salt: Grounding prosperity blend.",
        "Hearth & Business Talisman · Personally encoded · 15 g (Not for culinary use)."
      ],
      sv: [
        "Skogsörter & Mineralsalt · Personligt kodat · 15 g (Ej för matlagning)."
      ],
    },
    usageSteps: {
      tr: [
        "Mutfak ve Ocak Tılsımı: Mutfağınızda küçük bir cam veya toprak kase içinde bulundurarak hanenin bereket merkezini destekleyin.",
        "İşyeri ve Cüzdan: İş yerinizin giriş eşiğine çok az serpin veya minik bir kesede yanınızda taşıyın.",
        "Arınma Banyosu: Banyo suyuna bir tutam ekleyerek topraklanma çalışması yapın."
      ],
      en: [
        "Kitchen Hearth Bowl: Keep a small pinch in an open dish on your kitchen shelf as a prosperity anchor.",
        "Business Threshold & Pouch: Carry in a small charm bag or sprinkle lightly at the workplace entrance."
      ],
      sv: [
        "Kökshärd & Arbetsplats: Förvara i en liten skål eller bär i en tygpåse."
      ],
    },
    intention: {
      tr: "“Bu tuz, doğanın hazinelerini hayatıma çeker, beni bolluk ve bereket enerjisiyle uyumlu hale getirir.”",
      en: "“This salt draws the treasures of nature into my life and aligns me with steady abundance.”",
      sv: "”Detta salt förenar mig med naturens rikedom och överflöd.”",
    },
    safetyNote: EXTERNAL_SALT_SAFETY,
  },
  {
    slug: "aphrodites-charm-salt",
    shopierId: "32410917",
    shopierUrl: "https://www.shopier.com/runeyard/32410917",
    category: "salts",
    glyph: "XI",
    price: "400 TL",
    volume: { tr: "15 gr · Bitkisel Ritüel Tuzu", en: "15 g · Herbal Ritual Salt", sv: "15 g · Rituellt Örtsalt" },
    image: "/shop/aphrodites-charm-salt.jpg",
    title: {
      tr: "Aphrodite’s Charm (Afrodit’in Cazibesi Tuzu)",
      en: "Aphrodite’s Charm (Love, Beauty & Creative Inspiration Salt)",
      sv: "Aphrodite’s Charm (Kärleks- & Inspirationssalt)",
    },
    subtitle: {
      tr: "Sevgi, Romantizm, Öz-Şefkat ve Sanatsal İlham Çalışmaları İçin Bitkisel Tuz",
      en: "Herbal Ritual Salt for Love, Self-Compassion, Romance & Artistic Inspiration",
      sv: "Rituellt Örtsalt för Kärlek, Harmoni och Konstnärlig Inspiration",
    },
    summary: {
      tr: "İlişkilerde uyumu artırmak, öz-sevgiyi güçlendirmek ve sanatsal/yaratıcı çalışmalarda ilhamı davet etmek için hazırlanan 15 gr bitkisel tuz.",
      en: "15 g handcrafted herbal salt representing Venusian harmony, self-love, romance, and artistic inspiration.",
      sv: "15 g handgjort örtsalt för kärlek, harmoni och konstnärlig skapandekraft.",
    },
    paragraphs: {
      tr: [
        "Aphrodite’s Charm (Afrodit’in Cazibesi), Venüs/Afrodit arketipini temsil eden kokulu çiçekler, bitkiler ve doğal tuz ile el yapımı olarak hazırlanmıştır.",
        "Sevgi ve uyum ritüellerinde mum çevresinde çember kurmak, banyo suyuna bir tutam eklemek veya sanat/tasarım masasında yaratıcı ilhamı uyandırmak için kullanılır."
      ],
      en: [
        "Aphrodite’s Charm is handcrafted from natural salt and Venusian botanicals to support love rituals, bath purification, and artistic inspiration."
      ],
      sv: [
        "Aphrodite’s Charm är handgjort av naturligt salt och växter som stödjer kärlek, skönhet och inspiration."
      ],
    },
    features: {
      tr: [
        "Venüs / Afrodit Botanikleri: Sevgi, estetik, uyum ve yaratıcı ilham frekansı.",
        "Banyo, Mum Çemberi ve Kese Kullanımı: Çok yönlü ritüel desteği.",
        "Kişiye Özel Kodlama · Miktar: 15 gr (Yemeklerde kullanılmaz)."
      ],
      en: [
        "Venusian Botanicals: Crafted for love, harmony, and creative work.",
        "Candle Circles, Baths & Charm Bags · 15 g (External use only)."
      ],
      sv: [
        "Venusiska Växter: För kärlek, harmoni och kreativt skapande · 15 g."
      ],
    },
    usageSteps: {
      tr: [
        "Mum Çemberi: Pembe veya beyaz bir balmumu mumun etrafına küçük bir halka halinde serpip uyum niyetinizi kurun.",
        "Banyo ve Öz-Şefkat: Banyo suyuna bir tutam ekleyerek bedeninizi ve aurik alanınızı dinlendirin.",
        "Sanat ve Yaratıcılık Masası: Üretim ve tasarım yaptığınız masada küçük bir kasede bulundurun."
      ],
      en: [
        "Candle Circle: Sprinkle a small ring around a candle during love or harmony meditations.",
        "Ritual Bath: Add a pinch to bathwater for self-care and renewal.",
        "Creative Desk: Keep a pinch near your art or writing space."
      ],
      sv: [
        "Ljuscirkel & Bad: Strö i en ring runt ett ljus eller tillsätt en nypa i badvattnet."
      ],
    },
    intention: {
      tr: "“Bu tuz, sevgi ve aşk enerjisini hayatıma çeker, ilişkilerimi güçlendirir ve içimdeki sevgiyi büyütür.”",
      en: "“This salt invites love and harmony into my life, strengthens my bonds, and nurtures the love within me.”",
      sv: "”Detta salt bjuder in kärlek och harmoni i mitt liv och stärker mina band.”",
    },
    safetyNote: EXTERNAL_SALT_SAFETY,
  },
  {
    slug: "elemental-magic-salt",
    shopierId: "32410744",
    shopierUrl: "https://www.shopier.com/runeyard/32410744",
    category: "salts",
    glyph: "XII",
    price: "450 TL",
    volume: { tr: "15 gr · 4 Element Ritüel Tuzu", en: "15 g · Four Elements Salt", sv: "15 g · Fyra Elementens Salt" },
    image: "/shop/elemental-magic-salt.jpg",
    title: {
      tr: "Elemental Magic (4 Element Dengesi Tuzu)",
      en: "Elemental Magic (Four Elements Balancing Salt)",
      sv: "Elemental Magic (De Fyra Elementens Salt)",
    },
    subtitle: {
      tr: "Hava, Ateş, Su ve Toprak Kuvvetlerini Dengeleyen Özel Bitki ve Baharatlı Ritüel Tuzu",
      en: "Ritual Salt Blended with Herbs & Spices Representing Air, Fire, Water, and Earth",
      sv: "Rituellt Salt med Örter och Kryddor för Luft, Eld, Vatten och Jord",
    },
    summary: {
      tr: "Doğanın dört temel kuvveti olan Hava, Ateş, Su ve Toprak enerjilerini çalışma masanızda ve enerjisel alanınızda dengelemek için 15 gr tuz.",
      en: "15 g botanical salt uniting Air, Fire, Water, and Earth to balance your altar, meditation circle, and personal field.",
      sv: "15 g botaniskt salt som förenar Luft, Eld, Vatten och Jord för balans och skydd.",
    },
    paragraphs: {
      tr: [
        "Elemental Magic (4 Element Tuzu), doğanın dört temel unsuru olan Hava (zihin ve iletişim), Ateş (irade ve dönüşüm), Su (duygusal denge ve sezgi) ve Toprak (köklenme ve dayanıklılık) bitkilerini tek bir potada birleştirir.",
        "Kendinizi enerjisel olarak dağınık veya yorgun hissettiğiniz dönemlerde dört elementi merkezlemek ve çalışma çemberi kurmak için idealdir."
      ],
      en: [
        "Elemental Magic brings together specific herbs and spices corresponding to Air, Fire, Water, and Earth to restore elemental equilibrium during meditation and ritual work."
      ],
      sv: [
        "Elemental Magic förenar örter och kryddor för Luft, Eld, Vatten och Jord för att skapa elementär jämvikt."
      ],
    },
    features: {
      tr: [
        "Dört Elementin Bütünlüğü: Hava, Ateş, Su ve Toprak imzalı bitki ve baharatların dengeli karışımı.",
        "Sunak ve Çember Kurulumu: Meditasyon masasında dört yönü temsil eden merkezleyici unsur.",
        "Kişiye Özel Kodlama · Miktar: 15 gr."
      ],
      en: [
        "Fourfold Elemental Balance: Herbs of Air, Fire, Water, and Earth.",
        "Altar & Circle Centerpiece · Personally encoded · 15 g."
      ],
      sv: [
        "Fyra Elementens Balans: För altare, cirkel och meditation · 15 g."
      ],
    },
    usageSteps: {
      tr: [
        "Dört Yön ve Meditasyon: Çalışma masanızın merkezinde küçük bir kasede bulundurarak dört elementi aynı anda selamlayın.",
        "Element Odaklı Çalışma: Zihin açıklığı için Hava, motivasyon için Ateş, duygusal arınma için Su, köklenme için Toprak niyetiyle tutun.",
        "Eşik ve Kese: Küçük bir kesede taşıyarak gün boyu element dengenizi koruyun."
      ],
      en: [
        "Altar Centerpiece: Place in a small bowl at the center of your workspace to honor all four directions.",
        "Elemental Focus: Hold with intention for Air (clarity), Fire (will), Water (peace), or Earth (grounding)."
      ],
      sv: [
        "Altarets Mitt: Placera i en skål på arbetsbordet för att balansera de fyra riktningarna."
      ],
    },
    intention: {
      tr: "“Bu tuz, doğanın dört gücünü dengeler ve beni ruhsal, duygusal ve fiziksel olarak destekler.”",
      en: "“This salt balances the four powers of nature and supports me in spirit, mind, heart, and body.”",
      sv: "”Detta salt balanserar naturens fyra krafter i mitt liv.”",
    },
    safetyNote: EXTERNAL_SALT_SAFETY,
  },
  {
    slug: "black-salt",
    shopierId: "32410505",
    shopierUrl: "https://www.shopier.com/runeyard/32410505",
    category: "salts",
    glyph: "XIII",
    price: "450 TL",
    discountBadge: {
      tr: "SİPARİŞ ÜZERİNE KİŞİYE ÖZEL TAZE ÜRETİM",
      en: "CRAFTED FRESH TO ORDER FOR EACH RECIPIENT",
      sv: "TILLVERKAS FÄRSKT PÅ BESTÄLLNING",
    },
    volume: { tr: "15 gr · Geleneksel Siyah Tuz", en: "15 g · Traditional Black Salt", sv: "15 g · Traditionellt Svart Salt" },
    image: "/shop/black-salt.jpg",
    title: {
      tr: "Black Salt (Geleneksel Koruyucu Siyah Tuz)",
      en: "Black Salt (Traditional Apotropaic Warding Salt)",
      sv: "Black Salt (Traditionellt Skyddande Svart Salt)",
    },
    subtitle: {
      tr: "Kapı Eşikleri, Pencere Pervazları ve Ağır Enerjilere Karşı Sınır Çizme Tuzu",
      en: "Traditional Warding Salt for Door Thresholds, Window Sills & Energetic Boundaries",
      sv: "Traditionellt Skyddssalt för Dörrtrösklar, Fönster och Energigränser",
    },
    summary: {
      tr: "Sipariş oluşturulduktan sonra kişi adına geleneksel tariflerle taze olarak üretilen; kapı eşiklerinde ve sınır çalışmalarında güçlü bariyer kuran 15 gr Siyah Tuz.",
      en: "Crafted fresh to order using traditional recipes; forms a strong protective boundary across thresholds and window sills (15 g).",
      sv: "Tillverkas färskt på beställning enligt traditionella recept för att skydda trösklar och rum (15 g).",
    },
    paragraphs: {
      tr: [
        "Black Salt (Siyah Tuz), geleneksel ocak ve eşik koruma zanaatının en temel sınır koyucu maddesidir. Negatif etkilerden arınmak, kapı eşiklerinde koruyucu hat çizmek ve yaşam alanınızı mühürlemek için kullanılır.",
        "Önemli Üretim Notu: Bu ürün stokta bekletilmez; **sipariş oluşturulduktan sonra kişi adına geleneksel tariflerle taze olarak üretilir** (Kargo süresi 1–3 iş günüdür). Üretildikten sonra **21 gün içerisinde** kullanılması, kullanılmayan kısmın doğaya/toprağa bırakılması önerilir."
      ],
      en: [
        "Black Salt is the classic boundary-setting substance of traditional hearth craft, used to seal doorways, window sills, and divination tables against intrusive or draining influences.",
        "Production Note: Crafted **fresh to order in the buyer's name** using traditional recipes (ships within 1–3 business days). Best used within **21 days** of preparation."
      ],
      sv: [
        "Svart Salt är det klassiska gränssättande medlet inom traditionellt härdhantverk och tillverkas **färskt på beställning** i mottagarens namn (leverans 1–3 arbetsdagar, används inom 21 dagar)."
      ],
    },
    features: {
      tr: [
        "Sipariş Üzerine Taze Üretim: Her sipariş kişi adına geleneksel yöntemle sıfırdan hazırlanır (1–3 iş günü).",
        "Eşik ve Sınır Bariyeri: Kapı eşikleri, pencere kenarları ve kehanet masası koruması.",
        "21 Günlük Aktif Döngü: Taze üretildiği için 21 gün içinde kullanılması önerilir · 15 gr."
      ],
      en: [
        "Made Fresh to Order: Prepared individually for each order (1–3 business days).",
        "Threshold & Window Warding · 21-day active cycle · 15 g."
      ],
      sv: [
        "Tillverkas Färskt på Beställning · För trösklar och fönster · 15 g."
      ],
    },
    usageSteps: {
      tr: [
        "Eşik ve Pencere Hattı: Evinizin dış kapı eşiğine ve pencere pervazlarına çok ince bir hat şeklinde serpin.",
        "Oda Arındırma: Ağırlaşmış bir odada küçük bir kasede bekletip çalışmanın sonunda ev dışına uzaklaştırın.",
        "Kehanet ve Koruma Kesesi: Rün veya Tarot açılımları sırasında masanızın sol üst köşesinde koruyucu sınır olarak bulundurun."
      ],
      en: [
        "Threshold Line: Lay a fine line across the outer doorway or window sills.",
        "Space Absorption: Place in a small dish to absorb heavy atmosphere, then discard outside the home.",
        "Divination Table: Keep a pinch on your reading table or in a protective pouch."
      ],
      sv: [
        "Tröskellinje: Strö en tunn linje vid ytterdörren eller fönsterbrädan."
      ],
    },
    safetyNote: EXTERNAL_SALT_SAFETY,
  },
  {
    slug: "dogum-haritasi-ve-ongoru-danismanligi",
    shopierId: "26099411",
    shopierUrl: "https://www.shopier.com/runeyard/26099411",
    category: "consultations",
    glyph: "XIV",
    price: "8.000 TL",
    discountBadge: {
      tr: "KAPSAMLI PAKET · ~80 DK VİDEO ANALİZ",
      en: "COMPLETE PACKAGE · ~80 MIN VIDEO ANALYSIS",
      sv: "KOMPLETT PAKET · ~80 MIN VIDEOANALYS",
    },
    volume: { tr: "~80 Dakika Video Kaydı", en: "~80 Min Recorded Video", sv: "~80 Min Videofilm" },
    image: "/shop/dogum-haritasi-ve-ongoru-danismanligi.jpg",
    title: {
      tr: "Doğum Haritası & 1 Yıllık Öngörü Danışmanlığı",
      en: "Natal Chart & 1-Year Predictive Astrology Consultation",
      sv: "Födelsehoroskop & 1-Års Prognoskonsultation",
    },
    subtitle: {
      tr: "Kapsamlı Doğum Haritası Analizi + Önümüzdeki 1 Yılın Kritik Tarihleri ve Öngörü Teknikleri (~80 Dk)",
      en: "In-Depth Natal Chart Reading + 1-Year Ahead Forecasting & Key Dates (~80 Minutes)",
      sv: "Djupgående Natalkarta + 1-Års Framtidsprognos och Viktiga Datum (~80 Minuter)",
    },
    summary: {
      tr: "Hem doğum haritanızın tüm potansiyel ve düğümlerinin detaylı analizi hem de önümüzdeki 1 yıllık sürecin önemli tarihleriyle incelendiği ~80 dakikalık kapsamlı video danışmanlık.",
      en: "Our most comprehensive ~80-minute video consultation combining full natal chart analysis with a 1-year predictive forecast and key dates.",
      sv: "Vår mest omfattande ~80-minuters videokonsultation som förenar hela födelsekartan med en ettårig prognos.",
    },
    paragraphs: {
      tr: [
        "Bu kapsamlı danışmanlık paketinde hem doğum haritanız (karakter omurgası, meslek, finans, ilişkiler, sabit yıldızlar ve karmik düğümler) her detayı ile incelenir hem de çoklu öngörü teknikleri kullanılarak **önümüzdeki 1 yıllık sürecin** değerlendirilmesi yapılır.",
        "Sipariş oluşturulduktan sonra randevu tarihi belirlenir ve sizden doğum bilgileriniz (gün, ay, yıl, doğum saati ve şehir) alınır. Randevu günü ve saatinde size özel hazırlanmış **ortalama 80 dakikalık detaylı video kaydı** iletilir; böylece kaydı dilediğiniz zaman tekrar izleyip yıl boyu rehber olarak kullanabilirsiniz."
      ],
      en: [
        "This complete consultation unites an exhaustive reading of your natal chart with a full one-year predictive forecast highlighting the critical dates, turning points, and opportunities ahead.",
        "Delivered on your scheduled appointment date as a comprehensive **~80-minute custom video recording** that you can keep and revisit throughout the year."
      ],
      sv: [
        "Detta kompletta paket kombinerar en fullständig genomgång av ditt födelsehoroskop med en ettårig prognos i form av en **~80 minuter lång personlig videoinspelning**."
      ],
    },
    features: {
      tr: [
        "Bölüm I — Tam Doğum Haritası Analizi: Yükselen, Güneş, Ay, gezegen asaletleri, evler, meslek ve ilişki potansiyelleri.",
        "Bölüm II — 1 Yıllık Öngörü Haritası: Profeksiyon, Güneş Dönüşü (Solar Return), Tutulmalar ve Transitlerle yılın kritik tarihleri.",
        "Kalıcı Video Arşivi: Ortalama 80 dakikalık yüksek çözünürlüklü video kaydı olarak teslim edilir."
      ],
      en: [
        "Part I — Full Natal Chart Analysis: Temperament, vocation, relationships, houses, and fixed stars.",
        "Part II — 1-Year Predictive Forecast: Profections, Solar Return, Eclipses, and key transit dates.",
        "Permanent Video Archive: Delivered as an ~80-minute recorded video."
      ],
      sv: [
        "Del I — Fullständig Natalkarta · Del II — 1-Års Prognos · ~80 min videoinspelning."
      ],
    },
    usageSteps: {
      tr: [
        "‘Shopier ile Satın Al’ butonundan siparişinizi oluşturun.",
        "Sipariş sonrası sizinle iletişime geçilerek doğum bilgileriniz (Tarih, Saat, Şehir) alınır ve randevu gününüz planlanır.",
        "Randevu günü ve saatinde ~80 dakikalık kişisel harita ve öngörü videonuz tarafınıza iletilir."
      ],
      en: [
        "Complete your order securely via Shopier.",
        "Your birth details (Date, Time, Place) are collected and your delivery date is scheduled.",
        "Receive your ~80-minute custom video analysis on your appointment day."
      ],
      sv: [
        "Beställ via Shopier, lämna dina födelseuppgifter och ta emot din ~80-minuters videoanalys på bokad dag."
      ],
    },
    safetyNote: CONSULTATION_SAFETY,
  },
  {
    slug: "dogum-haritasi-astroloji-danismanligi",
    shopierId: "26098471",
    shopierUrl: "https://www.shopier.com/runeyard/26098471",
    category: "consultations",
    glyph: "XV",
    price: "4.500 TL",
    volume: { tr: "Kişisel Video Analiz Kaydı", en: "Recorded Video Analysis", sv: "Personlig Videoanalys" },
    image: "/shop/dogum-haritasi-astroloji-danismanligi.jpg",
    title: {
      tr: "Doğum Haritası Astroloji Danışmanlığı",
      en: "Natal Chart Astrology Consultation",
      sv: "Födelsehoroskop — Astrologikonsultation",
    },
    subtitle: {
      tr: "Doğduğunuz Andaki Gökyüzü Diziliminin, Potansiyellerinizin ve Yaşam Yolunuzun Analizi",
      en: "Detailed Analysis of Your Birth Sky, Core Potentials, Strengths & Life Path",
      sv: "Detaljerad Analys av Födelsehimlen, Potentialer och Livsväg",
    },
    summary: {
      tr: "Doğduğunuz anda gökyüzünün dizilimini inceleyerek potansiyellerinizi, güçlü/gölge yönlerinizi ve yaşamınızdaki tekrar eden temaların köklerini aydınlatan video danışmanlık.",
      en: "Recorded video consultation examining the exact celestial configuration at your birth to illuminate your strengths, shadow patterns, and vocation.",
      sv: "Videokonsultation som belyser din födelsehimmel, dina styrkor och din livsväg.",
    },
    paragraphs: {
      tr: [
        "Doğum haritası danışmanlığı, doğduğunuz anda gökyüzünün diziliminin incelenip haritanıza ve yaşamınıza olan etkilerinin derinlemesine irdelenmesinden oluşur.",
        "Bu çalışma sayesinde yalnızca doğuştan getirdiğiniz yetenek ve potansiyelleri fark etmekle kalmaz; güçlü ve gölge yönlerinizi dengeler, hayatınızda tekrar eden döngülerin sebeplerini anlayarak yolunuzu daha bilinçli inşa edebilirsiniz. Randevu günü ve saatinde size özel video kaydı olarak iletilir."
      ],
      en: [
        "A natal chart consultation examines the sky at the moment of your birth to reveal your innate gifts, challenges, relational patterns, and vocational direction, delivered as a comprehensive personal video recording."
      ],
      sv: [
        "En genomgång av ditt födelsehoroskop som belyser dina medfödda gåvor, utmaningar och kallelse, levererad som personlig videoinspelning."
      ],
    },
    features: {
      tr: [
        "Kişisel Mizaç, Element Dengesi ve Yükselen/Güneş/Ay Üçlüsü",
        "Kariyer, Finans, İlişkiler ve Aile Köklerinin Ev/Gezegen Analizi",
        "Güçlü Yönler, Gölge Çalışması ve Kişisel Farkındalık Rehberi",
        "Randevu gününde size özel detaylı video kaydı teslimi"
      ],
      en: [
        "Temperament, Elemental Balance & Ascendant/Sun/Moon Triad",
        "Vocation, Finance, Relationships & House Rulers",
        "Delivered on your scheduled date as a permanent video recording"
      ],
      sv: [
        "Temperament, Elementbalans, Hus och Planeter · Levereras som videoinspelning."
      ],
    },
    usageSteps: {
      tr: [
        "Shopier üzerinden siparişinizi oluşturun.",
        "Doğum tarihi, doğum saati ve doğum yeri bilgileriniz alınarak randevu tarihiniz belirlenir.",
        "Randevu günü ve saatinde doğum haritası video kaydınız tarafınıza gönderilir."
      ],
      en: [
        "Order via Shopier and provide your birth date, time, and city.",
        "Receive your recorded video analysis on your scheduled appointment date."
      ],
      sv: [
        "Beställ via Shopier, ange födelseuppgifter och ta emot din videoanalys."
      ],
    },
    safetyNote: CONSULTATION_SAFETY,
  },
  {
    slug: "bir-yillik-ongoru-danismanligi",
    shopierId: "26098627",
    shopierUrl: "https://www.shopier.com/runeyard/26098627",
    category: "consultations",
    glyph: "XVI",
    price: "4.500 TL",
    volume: { tr: "~60 Dakika Video Analiz · 5 Teknik", en: "~60 Min Video · 5 Techniques", sv: "~60 Min Video · 5 Tekniker" },
    image: "/shop/bir-yillik-ongoru-danismanligi.jpg",
    title: {
      tr: "Öngörü Danışmanlığı (1 Yıllık Yol Haritası)",
      en: "1-Year Predictive Astrology Consultation",
      sv: "1-Års Prognoskonsultation",
    },
    subtitle: {
      tr: "5 Farklı Klasik ve Modern Öngörü Tekniği İle Önümüzdeki 12 Ayın Kritik Tarihleri (~60 Dk)",
      en: "Your Next 12 Months Examined Through 5 Predictive Techniques & Key Dates (~60 Min)",
      sv: "Kommande 12 Månader Analyserade med 5 Prognostekniker (~60 Min)",
    },
    summary: {
      tr: "5 farklı öngörü tekniğiyle önümüzdeki 1 yıl içinde yaşayabileceğiniz potansiyelleri, fırsat pencerelerini ve dikkat edilmesi gereken tarihleri anlatan ~60 dakikalık video analiz.",
      en: "~60-minute recorded video consultation synthesizing 5 predictive techniques to map the opportunities and key dates of your coming year.",
      sv: "~60 minuters videokonsultation som med 5 tekniker kartlägger det kommande årets viktigaste datum.",
    },
    paragraphs: {
      tr: [
        "1 Yıllık Öngörü Danışmanlığında doğum bilgileriniz alındıktan sonra haritanız **5 farklı öngörü tekniği** (Yıllık Profeksiyon, Güneş Dönüşü / Solar Return, Tutulmalar, İlerletimler ve Transitler) ile incelenir.",
        "Önümüzdeki 12 aylık dönem içerisinde hangi yaşam alanlarının uyanacağı, önemli kararlar için destekleyici tarihler ve dikkat edilmesi gereken virajlar yaklaşık 1 saatlik video kaydı şeklinde randevu gününüzde size iletilir."
      ],
      en: [
        "Examining your chart through **5 distinct predictive techniques** (Annual Profections, Solar Return, Eclipses, Progressions, and Transits), this ~60-minute video recording maps the key dates and turning points of your next twelve months."
      ],
      sv: [
        "Genom **5 olika prognostekniker** kartlägger denna ~60-minuters videoinspelning de kommande tolv månadernas viktigaste händelser och datum."
      ],
    },
    features: {
      tr: [
        "5 Farklı Öngörü Tekniğinin Sentezi (Solar Return, Profeksiyon, Tutulma, İlerletim, Transit)",
        "Ay Ay Önemli Tarihler, Fırsat ve Dönüm Noktaları Takvimi",
        "Yaklaşık 60 Dakikalık Kişisel Video Kaydı Teslimi"
      ],
      en: [
        "Synthesis of 5 Predictive Techniques",
        "Month-by-Month Key Dates & Turning Points",
        "~60-Minute Recorded Video Delivery"
      ],
      sv: [
        "Syntes av 5 Prognostekniker · Viktiga Datum · ~60 min videoinspelning."
      ],
    },
    usageSteps: {
      tr: [
        "Shopier üzerinden siparişinizi oluşturun.",
        "Doğum bilgileriniz ve mevcut ikamet şehriniz (Solar Return için) alınarak randevu gününüz belirlenir.",
        "Randevu günü ~60 dakikalık 1 yıllık öngörü videonuz tarafınıza iletilir."
      ],
      en: [
        "Place your order on Shopier and share your birth details and current city of residence.",
        "Receive your ~60-minute predictive video analysis on your scheduled appointment date."
      ],
      sv: [
        "Beställ via Shopier och ta emot din ~60-minuters prognosvideo på bokad dag."
      ],
    },
    safetyNote: CONSULTATION_SAFETY,
  },
  {
    slug: "iliski-ve-sinastri-danismanligi",
    shopierId: "26099220",
    shopierUrl: "https://www.shopier.com/runeyard/26099220",
    category: "consultations",
    glyph: "XVII",
    price: "4.500 TL",
    volume: { tr: "İkili Harita Video Analizi", en: "Relationship Video Analysis", sv: "Relationsanalys på Video" },
    image: "/shop/iliski-ve-sinastri-danismanligi.jpg",
    title: {
      tr: "İlişki Danışmanlığı / Sinastri Analizi",
      en: "Relationship & Synastry Consultation",
      sv: "Relations- & Synastrikonsultation",
    },
    subtitle: {
      tr: "İki Kişinin Doğum Haritaları Arasındaki Uyum, Çekim, Sınavlar ve Çözüm Yolları",
      en: "Astrological Harmony, Magnetism, Growth Lessons & Resolution Between Two Charts",
      sv: "Astrologisk Samklang, Attraktion och Utveckling Mellan Två Horoskop",
    },
    summary: {
      tr: "İki kişi arasındaki astrolojik uyumu, ilişkinin potansiyelini, anlaşmazlık noktalarını ve bunların nasıl çözülebileceğini inceleyen kapsamlı Sinastri video analizi.",
      en: "In-depth video consultation analyzing the synastry between two charts—revealing harmony, friction points, and how to navigate them.",
      sv: "Fördjupad videokonsultation som analyserar samspelet och potentialen mellan två personers horoskop.",
    },
    paragraphs: {
      tr: [
        "Sinastri (İlişki Danışmanlığı) çalışmasında iki kişi arasındaki her türlü duygusal, evlilik veya ortaklık bağı astrolojik olarak özenle incelenir.",
        "İlişkinin doğal potansiyellerini görmek, birbirinizde hangi alanları tetiklediğinizi anlamak, olası sorunların hangi konular üzerinden çıktığını ve birbirinizin dilini anlayarak bunları nasıl çözebileceğinizi öğrenmek için hazırlanır. Randevu günü video kaydı olarak teslim edilir."
      ],
      en: [
        "Synastry examines the interplay between two birth charts—illuminating mutual strengths, emotional needs, communication bridges, and how to resolve recurring friction points. Delivered as a custom video recording."
      ],
      sv: [
        "Synastri undersöker samspelet mellan två födelsekartor för att visa styrkor, kommunikation och hur utmaningar kan lösas."
      ],
    },
    features: {
      tr: [
        "İki Doğum Haritasının Karşılaştırmalı Sinastri ve Ortak Harita Analizi",
        "Duygusal Uyum, İletişim Dili, Güven ve Uzun Vadeli Bağ Göstergeleri",
        "Çatışma Noktalarını Dönüştürme Rehberi · Video Kaydı Teslimi"
      ],
      en: [
        "Comparative Synastry & Relationship Chart Analysis",
        "Emotional Concord, Communication & Long-Term Commitment Indicators",
        "Delivered as a Custom Video Recording"
      ],
      sv: [
        "Jämförande Synastri & Relationskarta · Levereras som videoinspelning."
      ],
    },
    usageSteps: {
      tr: [
        "Shopier üzerinden siparişinizi oluşturun.",
        "Kendi doğum bilgileriniz ile partnerinizin/ortağınızın doğum bilgilerini iletin ve randevu gününüzü belirleyin.",
        "Randevu günü ve saatinde Sinastri video analiziniz tarafınıza gönderilir."
      ],
      en: [
        "Order via Shopier and submit the birth details of both partners.",
        "Receive your recorded Synastry video analysis on the scheduled appointment day."
      ],
      sv: [
        "Beställ via Shopier, skicka bådas födelseuppgifter och ta emot videoanalysen."
      ],
    },
    safetyNote: CONSULTATION_SAFETY,
  },
  {
    slug: "dogum-saati-bulma-rektifikasyon",
    shopierId: "26099074",
    shopierUrl: "https://www.shopier.com/runeyard/26099074",
    category: "consultations",
    glyph: "XVIII",
    price: "4.500 TL",
    volume: { tr: "Geriye Dönük Teknik Hesaplama", en: "Technical Birth-Time Rectification", sv: "Rektifikation av Födelsetid" },
    image: "/shop/dogum-saati-bulma-rektifikasyon.jpg",
    title: {
      tr: "Doğum Saati Bulma / Rektifikasyon Çalışması",
      en: "Birth Time Rectification Study",
      sv: "Rektifikation — Fastställande av Födelsetid",
    },
    subtitle: {
      tr: "Geçmiş Yaşam Olayları ve Klasik Zamanlama Teknikleriyle Doğum Saatinin Hassas Tespiti",
      en: "Pinpointing Your True Birth Time Through Past Life Events and Classical Timing Techniques",
      sv: "Beräkning av Exakt Födelsetid Genom Viktiga Livshändelser",
    },
    summary: {
      tr: "Doğum saatini tam bilmeyen ancak yaklaşık aralığını (ör. ‘16:00 ile 19:00 arası’) bilenler için geçmiş yaşam dönüm noktalarıyla yapılan hassas saat tespiti.",
      en: "Technical rectification using your past life milestones to determine your exact birth time within a known window.",
      sv: "Teknisk rektifikation med hjälp av viktiga livshändelser för att fastställa din födelsetid.",
    },
    paragraphs: {
      tr: [
        "Doğum saatini bulmak (*Rektifikasyon*), astrolojinin en titiz ve yoğun hesaplama gerektiren teknik yöntemidir. Sipariş oluşturulduktan sonra kişinin geçmiş hayatındaki somut dönüm noktalarının (evlilik, taşınma, mezuniyet, kaza/ameliyat, kayıp, iş başlangıcı vb.) tarihleri alınır ve geriye yönelik birçok klasik/modern teknikle (Güneş Yayı, İlerletimler, Profeksiyon, Transitler) hesaplama yapılır.",
        "Önemli Not: Sağlıklı bir rektifikasyon yapılabilmesi için doğum gününün belli olması ve kişinin yaklaşık bir saat aralığını (örneğin: ‘Öğleden sonra 16:00 ile 19:00 arasında doğmuşum’) bilmesi gerekir."
      ],
      en: [
        "Rectification is a rigorous technical calculation that works backward from major dated events in your life (marriages, relocations, career shifts, surgeries) across multiple timing techniques to pinpoint your true Ascendant degree and birth minute.",
        "Note: Requires a known birth date and an approximate time window (e.g., 'born between 4:00 PM and 7:00 PM')."
      ],
      sv: [
        "Rektifikation beräknar din exakta födelsetid baklänges utifrån viktiga daterade händelser i ditt liv (kräver ett ungefärligt tidsintervall)."
      ],
    },
    features: {
      tr: [
        "Geçmiş Yaşam Olayları Üzerinden Çoklu Teknikle Geriye Dönük Hesaplama",
        "Doğru Yükselen (ASC) ve Tepe Noktası (MC) Derecesinin Tespiti",
        "Hesaplanan Doğum Saatinin Kişiye İletilmesi (Yaklaşık saat aralığı bilinmelidir)"
      ],
      en: [
        "Retrospective Calculation from Dated Life Milestones",
        "Determination of True Ascendant & Midheaven Degrees",
        "Requires an approximate birth time window"
      ],
      sv: [
        "Teknisk beräkning utifrån livshändelser för att fastställa exakt Ascendent och födelsetid."
      ],
    },
    usageSteps: {
      tr: [
        "Shopier üzerinden siparişinizi oluşturun.",
        "Tahmini doğum saati aralığınızı ve hayatınızdaki önemli olayların tarih listesini paylaşın.",
        "Yapılan teknik hesaplama sonucunda tespit edilen doğum saatiniz tarafınıza iletilir."
      ],
      en: [
        "Order via Shopier and submit your estimated birth window along with a list of dated life events.",
        "Receive your rectified birth time upon completion of the technical study."
      ],
      sv: [
        "Beställ via Shopier och skicka ditt ungefärliga tidsintervall samt viktiga datum i livet."
      ],
    },
    safetyNote: CONSULTATION_SAFETY,
  },
  {
    slug: "tarot-danismanligi",
    shopierId: "26099584",
    shopierUrl: "https://www.shopier.com/runeyard/26099584",
    category: "consultations",
    glyph: "XIX",
    price: "1.500 TL",
    volume: { tr: "15 Dakika Ses Kaydı Analiz", en: "15 Min Audio Recording", sv: "15 Min Ljudinspelning" },
    image: "/shop/tarot-danismanligi.jpg",
    title: {
      tr: "Tarot Danışmanlığı (Kişisel Soru & Açılım Analizi)",
      en: "Tarot Consultation (Personal Question & Spread Reading)",
      sv: "Tarotkonsultation (Personlig Frågeläsning)",
    },
    subtitle: {
      tr: "Merak Ettiğiniz Sorular ve Güncel Gündeminiz İçin 15 Dakikalık Ses Kaydı Analizi",
      en: "15-Minute Recorded Audio Tarot Analysis Focused on Your Specific Questions",
      sv: "15 Minuters Ljudinspelad Tarotanalys Fokuserad på Dina Frågor",
    },
    summary: {
      tr: "Öğrenmek istediğiniz somut sorular ve güncel süreciniz için doğum bilgilerinizle birlikte hazırlanan 15 dakikalık detaylı ses kaydı Tarot danışmanlığı.",
      en: "Focused 15-minute audio Tarot reading addressing your specific questions and current crossroads.",
      sv: "Fokuserad 15-minuters tarotläsning via ljudinspelning kring dina specifika frågor.",
    },
    paragraphs: {
      tr: [
        "Tarot Danışmanlığında sipariş oluşturulduktan sonra randevu zamanınız belirlenir; sizden Tarot açılımında öğrenmek istediğiniz sorularınız ve doğum bilgileriniz alınır.",
        "Randevu günü ve saatinde sorularınızın her birini sembolik derinliğiyle yanıtlayan **15 dakikalık ses kaydı** şeklinde kişisel analiziniz tarafınıza iletilir."
      ],
      en: [
        "Once your order is placed on Shopier, your appointment time is scheduled and your specific questions and birth details are collected. On your appointment day, you receive a focused **15-minute audio recording** analyzing your spread."
      ],
      sv: [
        "Efter beställning via Shopier samlas dina frågor in och du får en **15 minuters ljudinspelning** med din personliga tarotanalys."
      ],
    },
    features: {
      tr: [
        "Sizin Belirlediğiniz Somut Sorulara Odaklı Kişisel Tarot Açılımı",
        "Doğum Bilgileriniz ve Arketipsel Sembollerle Bütüncül Yorum",
        "Randevu Gününde 15 Dakikalık Ses Kaydı Teslimi"
      ],
      en: [
        "Custom Tarot Spread Focused on Your Specific Questions",
        "Holistic Archetypal Interpretation",
        "15-Minute Audio Recording Delivered on Your Scheduled Date"
      ],
      sv: [
        "Personlig Tarotläggning för Dina Frågor · 15 min ljudinspelning."
      ],
    },
    usageSteps: {
      tr: [
        "Shopier üzerinden siparişinizi oluşturun.",
        "Sorularınızı ve doğum bilgilerinizi ileterek randevu saatinizi planlayın.",
        "Randevu saatinde 15 dakikalık ses kaydı analiziniz tarafınıza iletilir."
      ],
      en: [
        "Place your order via Shopier and submit your questions.",
        "Receive your 15-minute recorded audio reading at your scheduled appointment time."
      ],
      sv: [
        "Beställ via Shopier, skicka dina frågor och ta emot din 15-minuters ljudanalys."
      ],
    },
    safetyNote: CONSULTATION_SAFETY,
  },
];

export function findShopProduct(slug: string): ShopProduct | null {
  return shopProducts.find((p) => p.slug === slug) ?? null;
}

export const getShopProduct = findShopProduct;

