import type { Lang } from "@/lib/copy";

export type GlossaryCategory =
  | "runes"
  | "mezopotamya"
  | "kelt"
  | "saman"
  | "astroloji"
  | "witchcraft";

export type GlossaryTerm = {
  id: string;
  term: string;
  pronunciation: string;
  glyph: string;
  category: GlossaryCategory;
  origin: Record<Lang, string>;
  definition: Record<Lang, string>;
  href: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  // MEZOPOTAMYA & SITCHIN KRONİKLERİ
  {
    id: "enki-ea",
    term: "E.A / Enki",
    pronunciation: "E-a · En-ki",
    glyph: "𒀭",
    category: "mezopotamya",
    origin: {
      tr: "Sümerce · E.A (‘Evi Su Olan’) / EN.KI (‘Yeryüzünün Efendisi’)",
      en: "Sumerian · E.A ('He Whose House Is Water') / EN.KI ('Lord of Earth')",
      sv: "Sumeriska · E.A ('Han Vars Hus Är Vatten') / EN.KI ('Jordens Herre')",
    },
    definition: {
      tr: "Sümer tabletlerinde ve Zecharia Sitchin’in Dünya Tarihçesi anlatılarında Anu’nun ilkdoğan oğlu, başbilimci, Abzu ve Eridu’nun efendisi. Sarmal çift yılan sembolünün sahibi, insanlığı (Lulu Amelu) mühürleyen ve Tufan’da Ziusudra’yı uyararak insan soyunu koruyan bilgelik kaynağı.",
      en: "In Sumerian tablets and Sitchin's Earth Chronicles, Anu's firstborn son, chief scientist, and Lord of the Abzu and Eridu. Bearer of the Entwined Serpents emblem who fashioned conscious humanity and saved Ziusudra from the Deluge.",
      sv: "I sumeriska tavlor och Sitchins krönikor Anus förstfödde son, chefsvetenskapsman och Abzus herre i Eridu. Bärare av dubbelormen och mänsklighetens beskyddare.",
    },
    href: "/mezopotamya/sitchin-enki-ve-marduk-kronikleri",
  },
  {
    id: "marduk-ra",
    term: "Marduk (Ra / Amen-Ra)",
    pronunciation: "Mar-duk · Ra",
    glyph: "♈",
    category: "mezopotamya",
    origin: {
      tr: "Sümerce AMAR.UTU (‘Saf Höyüğün/Güneşin Oğlu’) · Mısır: Ra",
      en: "Sumerian AMAR.UTU ('Son of the Pure Mound / Sun') · Egyptian: Ra",
      sv: "Sumeriska AMAR.UTU ('Solens Son') · Egyptiska: Ra",
    },
    definition: {
      tr: "Enki ve Damkina’nın ilkdoğan oğlu. Sitchin anlatılarına göre Mısır’da Ra kimliğiyle hüküm sürmüş, gökyüzü saati Enlil’in Boğa Çağı’ndan kendi burcu olan Koç Çağı’na geçtiğinde Bâb-ilim’i (Babil) kurmuş ve Enûma Eliš’teki 50 İlahi Unvanı devralarak başhükümdar olmuştur.",
      en: "Firstborn son of Enki and Damkina. In Sitchin's chronicles, he reigned in Egypt as Ra and, upon the precessional dawn of the Age of Aries, established Babylon (Bâb-ilim) and received the Fifty Names of supreme sovereignty.",
      sv: "Enkis och Damkinas förstfödde son som enligt Sitchin härskade i Egypten som Ra och vid Vädurens tidsålder grundade Babylon och mottog de Femtio Namnen.",
    },
    href: "/mezopotamya/sitchin-enki-ve-marduk-kronikleri",
  },
  {
    id: "anunnaki",
    term: "Anunnaki",
    pronunciation: "A-nun-na-ki",
    glyph: "𒀭",
    category: "mezopotamya",
    origin: {
      tr: "Sümerce · A.NUN.NA.KI (‘Gökten Yere İnenler’)",
      en: "Sumerian · A.NUN.NA.KI ('Those Who From Heaven to Earth Came')",
      sv: "Sumeriska · A.NUN.NA.KI ('De Som Steg Ned Från Himlen till Jorden')",
    },
    definition: {
      tr: "Sümer ve Akkad kozmolojisinde Anu başkanlığındaki yüksek meclis; Sitchin’in Dünya Tarihçesi serisinde Nibiru gezegeninden Dünya’ya inerek Eridu, Nippur ve Babil gibi merkezleri kuran göksel varlıklar.",
      en: "The high assembly under King Anu in Sumerian cosmology; in Sitchin's Earth Chronicles, the celestial beings from Nibiru who founded Eridu, Nippur, and Babylon.",
      sv: "Det höga rådet under kung Anu i sumerisk kosmologi och Sitchins krönikor.",
    },
    href: "/mezopotamya/sitchin-enki-ve-marduk-kronikleri",
  },
  {
    id: "abzu",
    term: "Abzu (Apsu)",
    pronunciation: "Ab-zu · Ap-su",
    glyph: "♒",
    category: "mezopotamya",
    origin: {
      tr: "Sümerce AB.ZU · Akadca Apsû (‘Derin Bilgelik Suyu / Kaynak’)",
      en: "Sumerian AB.ZU · Akkadian Apsû ('Deep Primeval Waters')",
      sv: "Sumeriska AB.ZU · Akkadiska Apsû ('Djupa Urvatten')",
    },
    definition: {
      tr: "Enki’nin (E.A) hüküm sürdüğü yeraltı tatlı su okyanusu, bilgelik pınarı ve Sitchin anlatısında altın/maden yataklarının bulunduğu güney bölgesi.",
      en: "The subterranean sweet-water ocean and spring of wisdom ruled by Enki (E.A).",
      sv: "Det underjordiska sötvattensdjup och visdomskälla som styrs av Enki (E.A).",
    },
    href: "/mezopotamya/abzu-ve-asalluhi",
  },
  {
    id: "lulu-amelu",
    term: "Lulu Amelu & Şimti Evi",
    pronunciation: "Lu-lu A-me-lu · Şim-ti",
    glyph: "🧬",
    category: "mezopotamya",
    origin: {
      tr: "Sümerce LU.LU (‘Karıştırılmış / Uyumlu’) · Akadca Šimti (‘Nefes / Kader’)",
      en: "Sumerian LU.LU ('Mixed One') · Akkadian Šimti ('Breath / Destiny')",
      sv: "Sumeriska LU.LU ('Den Blandade') · Akkadiska Šimti ('Andedräkt / Öde')",
    },
    definition: {
      tr: "Sitchin’in Enki’nin Kayıp Kitabı anlatısında Enki, Ninhursag ve Ningişzida’nın Şimti Evi’nde dünyadaki varlığa kendi genetik ve ruhsal mühürlerini katarak uyandırdıkları ilk bilinçli insan.",
      en: "In Sitchin's reading of the Sumerian creation tablets, the first conscious human fashioned by Enki, Ninhursag, and Ningishzida in the House of Shimti.",
      sv: "I Sitchins läsning den första medvetna människan som formades av Enki, Ninhursag och Ningishzida i Shimtis Hus.",
    },
    href: "/gunluk/sitchin-enki-kayip-kitabi-ve-abzu",
  },
  {
    id: "me-yasalari",
    term: "Me (Kozmik Öz Yasalar)",
    pronunciation: "Me",
    glyph: "𒀭",
    category: "mezopotamya",
    origin: {
      tr: "Sümerce ME (‘İlahi Kural / Arketipsel Kalıp’)",
      en: "Sumerian ME ('Divine Decree / Cosmic Blueprint')",
      sv: "Sumeriska ME ('Kosmisk Grundlag / Urform')",
    },
    definition: {
      tr: "Enki tarafından Eridu’da korunan ve İnanna’nın Gökyüzü Teknesiyle insanlığa getirdiği; müzikten demirciliğe, hakikatten adil yargıya kadar uygarlığı ayakta tutan yüzlerce kozmik program ve ilke.",
      en: "The cosmic blueprints of civilization guarded by Enki in Eridu and carried by Inanna to Uruk.",
      sv: "Civilisationens kosmiska grundlagar som bevarades av Enki i Eridu och fördes till Uruk av Inanna.",
    },
    href: "/gunluk/sumer-me-yasalari-ve-inanna",
  },
  {
    id: "mul-apin",
    term: "MUL.APIN",
    pronunciation: "Mul-A-pin",
    glyph: "✦",
    category: "mezopotamya",
    origin: {
      tr: "Sümerce/Akadca (‘Saban Yıldızı’ · MÖ 1000 civarı)",
      en: "Sumerian/Akkadian ('The Plough Star' · c. 1000 BCE)",
      sv: "Sumeriska/Akkadiska ('Plogstjärnan' · ca 1000 f.Kr.)",
    },
    definition: {
      tr: "Mezopotamya gökbiliminin temel çivi yazılı yıldız kataloğu; gökyüzünü Enlil, Anu ve Ea (Enki) kuşaklarına ayırır ve Ay’ın 18 takımyıldızlık (Zodyak öncüsü) yolunu tanımlar.",
      en: "The foundational Babylonian cuneiform star catalogue dividing the sky into the paths of Enlil, Anu, and Ea (Enki).",
      sv: "Den grundläggande babyloniska stjärnkatalogen som delar himlen i Enlils, Anus och Eas (Enkis) banor.",
    },
    href: "/mezopotamya/ziggurat-ve-yildizlar",
  },
  {
    id: "akitu",
    term: "Akītu",
    pronunciation: "A-ki-tu",
    glyph: "𒀭",
    category: "mezopotamya",
    origin: {
      tr: "Akadca Akītu · Sümerce Á-ki-ti",
      en: "Akkadian Akītu · Sumerian Á-ki-ti",
      sv: "Akkadiska Akītu · Sumeriska Á-ki-ti",
    },
    definition: {
      tr: "Babil’de bahar ekinoksunda (Koç başlangıcında) 12 gün süren yeni yıl töreni; 5. günde kralın Esagila Tapınağı’nda tacını bırakıp Marduk huzurunda vicdan hesabı verdiği sınav.",
      en: "The twelve-day Babylonian New Year festival at the spring equinox where the king laid down his crown before Marduk.",
      sv: "Den tolv dagar långa babyloniska nyårsfesten vid vårdagjämningen där kungen lade ner sin krona inför Marduk.",
    },
    href: "/gunluk/babil-akitu-ve-marduk-yemini",
  },

  // KUZEY & ELDER FUTHARK RÜN GELENEĞİ
  {
    id: "elder-futhark",
    term: "Elder Futhark",
    pronunciation: "El-der Fu-thark",
    glyph: "ᚠ",
    category: "runes",
    origin: {
      tr: "Erken Cermen / İskandinav (MS 1.–8. yüzyıl · Kylver & Vadstena)",
      en: "Proto-Germanic / Early Norse (1st–8th c. CE)",
      sv: "Urnordiska (100–700-talet e.Kr. · Kylverstenen)",
    },
    definition: {
      tr: "İlk altı rününün ses değerlerinden (F-U-Þ-A-R-K) adını alan, üç Aett (sekizli aile) halinde dizilmiş 24 kadim rün dizisi.",
      en: "The oldest runic alphabet of 24 stones arranged into three Aettir (families of eight), named after its first six sounds (F-U-Þ-A-R-K).",
      sv: "Den äldsta runraden med 24 runor indelade i tre ätter (grupper om åtta).",
    },
    href: "/runler",
  },
  {
    id: "galdr",
    term: "Galdr",
    pronunciation: "Gal-dır",
    glyph: "ᚨ",
    category: "runes",
    origin: {
      tr: "Eski İskandinavca gala (‘şarkı söylemek / sesle titreştirmek’)",
      en: "Old Norse gala ('to chant / intone')",
      sv: "Fornnordiska gala ('att gala / sjunga')",
    },
    definition: {
      tr: "Rünlerin yalnız gözle okunmayıp kendi fonetik kök sesiyle (nefes ve ses rezonansıyla) titreştirilerek uyandırılması sanatı.",
      en: "The northern art of awakening a rune through its spoken phonetic vibration and breath resonance.",
      sv: "Den nordiska konsten att väcka en runas kraft genom dess ljudvibration och andedräkt.",
    },
    href: "/runler/ansuz",
  },
  {
    id: "stodul",
    term: "Stöðul (Rün Duruşu)",
    pronunciation: "Stö-dul",
    glyph: "ᛉ",
    category: "runes",
    origin: {
      tr: "Eski İskandinavca (‘Sabit duruş / İstasyon’)",
      en: "Old Norse ('Steadfast posture / Station')",
      sv: "Fornnordiska ('Fast ställning / Position')",
    },
    definition: {
      tr: "İnsanın kendi omurgasını ve kollarını rünün geometrik çizgilerine hizalayarak o arketipin akışını bedende hissetmesi.",
      en: "Aligning spine and limbs with the geometric stave of a rune to embody its archetypal current.",
      sv: "Att forma kropp och hållning efter runans geometri för att förankra dess kraft.",
    },
    href: "/runler/algiz",
  },
  {
    id: "wyrd-orlog",
    term: "Wyrd & Ørlög",
    pronunciation: "Vird · Ör-lög",
    glyph: "ᛈ",
    category: "runes",
    origin: {
      tr: "Eski İngilizce Wyrd / Eski İskandinavca Urðr & Ørlög (‘İlk Katmanlar’)",
      en: "Old English Wyrd / Old Norse Urðr & Ørlög ('Primal Layers')",
      sv: "Fornnordiska Urðr & Ørlög ('Ursprungliga Lager')",
    },
    definition: {
      tr: "Kuzey kozmolojisinde kader kör bir alın yazısı değildir: Ørlög geçmiş eylemlerin bıraktığı temel katmanlardır; Wyrd ise bugünkü seçimlerle dokunmaya devam eden canlı ağdır.",
      en: "In northern cosmology, Ørlög is the foundational layer laid by past deeds, while Wyrd is the living web continuously woven by present choice.",
      sv: "I nordisk kosmologi är Ørlög de grundlager som lagts av tidigare handlingar, medan Urðr/Wyrd är den levande väv som formas i nuet.",
    },
    href: "/runler/perthro",
  },
  {
    id: "vordr",
    term: "Vörðr (Vård / Vardøger)",
    pronunciation: "Vör-dır · Vord",
    glyph: "ᛗ",
    category: "runes",
    origin: {
      tr: "Eski İskandinavca Vörðr (‘Nöbetçi / Muhafız Ruhu’)",
      en: "Old Norse Vörðr ('Warden / Watchman Spirit')",
      sv: "Fornnordiska Vörðr · Svenska Vård ('Väktarsjäl')",
    },
    definition: {
      tr: "İskandinav ruh anatomisinde insanın niyetini ve ayak sesini fiziksel bedeninden birkaç dakika önce mekana ulaştıran uyanık muhafız katmanı ve önsezi sesi.",
      en: "The vigilant warden-spirit in Norse soul lore whose presence precedes physical arrival and alerts intuition.",
      sv: "Den vakande väktarsjälen i nordisk tradition som går före kroppen och ger föraningar.",
    },
    href: "/gunluk/iskandinav-vordr-muhafiz-ruhu",
  },
  {
    id: "utiseta",
    term: "Útiseta",
    pronunciation: "U-ti-se-ta",
    glyph: "ᛇ",
    category: "runes",
    origin: {
      tr: "Eski İskandinavca sitja úti til fróðleiks (‘Bilgelik için dışarıda oturmak’)",
      en: "Old Norse sitja úti til fróðleiks ('Sitting out for wisdom')",
      sv: "Fornnordiska Útiseta · Svenska Utesittning",
    },
    definition: {
      tr: "Gece vakti açık gökyüzü altında, bir kaya veya yol ayrımında ateş yakmadan ve konuşmadan şafağa dek uyanık oturarak zihnin korkularını aşma ve berrak görü kazanma disiplini.",
      en: "The solitary night vigil kept under the open sky without fire or speech to master fear and awaken clarity.",
      sv: "Den ensamma nattvakan under bar himmel för att övervinna fruktan och nå klarsyn.",
    },
    href: "/gunluk/iskandinav-utiseta-gece-oturusu",
  },
  {
    id: "huld-galdrastafir",
    term: "Huld El Yazması & Galdrastafir",
    pronunciation: "Huld · Gal-dra-sta-fir",
    glyph: "ᛉ",
    category: "runes",
    origin: {
      tr: "İzlandaca (ÍB 383 4to · Geir Vigfússon, Akureyri 1860)",
      en: "Icelandic (ÍB 383 4to · Geir Vigfússon, Akureyri 1860)",
      sv: "Isländska (ÍB 383 4to · Geir Vigfússon, Akureyri 1860)",
    },
    definition: {
      tr: "Demir Çağı 24 Elder Futhark rününden ayrı olarak, 17.–19. yüzyıl İzlanda halk geleneğinde Vegvísir gibi 30 geometrik koruma ve yön mührünü derleyen tarihsel el yazması.",
      en: "The 1860 Icelandic manuscript preserving 30 folk magical staves (Galdrastafir) such as Vegvísir, distinct from Iron Age Elder Futhark runes.",
      sv: "Den isländska handskriften från 1860 som bevarar 30 folkliga stavsigill (Galdrastafir) såsom Vegvísir.",
    },
    href: "/gunluk/izlanda-huld-el-yazmasi",
  },

  // KELT & OGHAM GELENEĞİ
  {
    id: "ogham",
    term: "Ogham (Beith-Luis-Nin)",
    pronunciation: "O-gam · Bey-Luş-Nin",
    glyph: "ᚇ",
    category: "kelt",
    origin: {
      tr: "Erken İrlandaca (MS 4.–6. yy taş yazıtları & Book of Ballymote)",
      en: "Primitive & Old Irish (4th–6th c. stone inscriptions & Book of Ballymote)",
      sv: "Fornirländska (400–500-talets steninskrifter & Book of Ballymote)",
    },
    definition: {
      tr: "Dikey bir gövde çizgisi (Druim) boyunca 4 Aicme (beşli grup) halinde dizilen 20 kutsal ağaç ve bitki kapısından oluşan Kelt bilgelik alfabesi.",
      en: "The Celtic tree alphabet of 20 sacred trees arranged into four Aicme along a central stem-line (Druim).",
      sv: "Det keltiska trädalfabetet med 20 heliga träd indelade i fyra Aicme längs en stamlinje.",
    },
    href: "/kelt",
  },
  {
    id: "awen",
    term: "Awen",
    pronunciation: "A-ven",
    glyph: "ᚇ",
    category: "kelt",
    origin: {
      tr: "Galce / Bretonca awen (‘Akan İlham Nefesi / Öz’)",
      en: "Welsh / Brythonic awen ('Flowing Poetic Inspiration')",
      sv: "Kymriska awen ('Flödande Poetisk Inspiration')",
    },
    definition: {
      tr: "Kelt ozan ve bilgelerinde zihin dinginleştiğinde doğadan ve içsel pınardan akan berrak, yaratıcı ilham nefesi.",
      en: "The flowing breath of poetic and spiritual inspiration in Welsh and Celtic bardic tradition.",
      sv: "Den flödande andedräkten av poetisk och andlig klarsyn i keltisk tradition.",
    },
    href: "/kelt/awen-ve-uc-kazan",
  },
  {
    id: "imbas-forosnai",
    term: "Imbas Forosnai",
    pronunciation: "İm-bas Fo-ros-nay",
    glyph: "ᚄ",
    category: "kelt",
    origin: {
      tr: "Eski İrlandaca · Sanas Cormaic (‘Aydınlatan Bilgi’ · 9. yüzyıl)",
      en: "Old Irish · Sanas Cormaic ('Illuminating Knowledge' · 9th c.)",
      sv: "Fornirländska · Sanas Cormaic ('Upplysande Kunskap' · 800-talet)",
    },
    definition: {
      tr: "Kelt ozan-bilgelerinin (Filid) dış duyuları tamamen susturup ışıksız bir taş odada gözlerini kapatarak tek bir sorunun cevabını içsel görüyle bulma tekniği.",
      en: "The contemplative dark-room technique of early Irish poet-seers (Filid) to awaken inner sight.",
      sv: "De irländska skaldernas (Filid) teknik att i fullständigt mörker väcka den inre synen.",
    },
    href: "/gunluk/kelt-imbas-forosnai-karanlik-inziva",
  },

  // ŞAMANİZM & BOZKIR KOZMOLOJİSİ
  {
    id: "dungur",
    term: "Düngür (Kam Davulu)",
    pronunciation: "Dün-gür",
    glyph: "☥",
    category: "saman",
    origin: {
      tr: "Altay / Tuva / Hakas Türkçesi (‘Düngür / Tüngür’)",
      en: "Altai / Tuvan Turkic ('Düngür / Frame Drum')",
      sv: "Altajska / Tuvinska ('Düngür / Schamantrumma')",
    },
    definition: {
      tr: "Şamanik gelenekte yalnızca bir müzik aleti değil, üzerindeki kozmik haritayla Üst, Orta ve Alt Dünya arasında bilinç köprüsü kuran canlı ses aracı.",
      en: "The sacred frame drum bearing a cosmic map, serving as the acoustic bridge between the Three Worlds.",
      sv: "Den heliga ramtrumman med sin kosmiska karta som förenar de tre världarna.",
    },
    href: "/saman/dungur-ve-nefes",
  },
  {
    id: "od-ana",
    term: "Od Ana (Ot Ene)",
    pronunciation: "Od A-na · Ot E-ne",
    glyph: "🔥",
    category: "saman",
    origin: {
      tr: "Eski Türkçe & Altayca (‘Ateş Anası / Ocak İyesi’)",
      en: "Old Turkic & Altai ('Mother Fire / Guardian of the Hearth')",
      sv: "Fornturkiska & Altajska ('Eldmodern / Härdens Väktare')",
    },
    definition: {
      tr: "Hanenin merkezindeki ocağı, bereketi ve soyun sürekliliğini koruyan ateş iyesi; ‘Ocağın sönmesin’ duasının ve ateşe su dökülmemesi töresinin kaynağı.",
      en: "The guardian spirit of the domestic hearth fire across Altai and Anatolia; origin of the blessing 'May your hearth never go cold'.",
      sv: "Härdeldens skyddsväsen i Altaj och Anatolien; ursprunget till välsignelsen 'Må din härd aldrig slockna'.",
    },
    href: "/gunluk/anadolu-ocak-kultu-ve-kul",
  },
  {
    id: "kumalak",
    term: "41 Kumalak",
    pronunciation: "Kırk Bir Ku-ma-lak",
    glyph: "◈",
    category: "saman",
    origin: {
      tr: "Orta Asya / Kazak-Kırgız-Altay Geleneği (Kırk Bir Taş)",
      en: "Central Asian Steppe Tradition (Forty-One Stones)",
      sv: "Centralasiatisk Stäpptradition (Fyrtioen Stenar)",
    },
    definition: {
      tr: "41 taşın üçer küme ve 3×3’lük dokuz hane (Alın, Kalp, Eşik) üzerinden dörder dörder elenmesiyle niyetin yolunu okuyan kadim bozkır bilgelik sanatı.",
      en: "The ancient Central Asian divination system casting 41 stones across a 3×3 grid of nine houses.",
      sv: "Den centralasiatiska spådomskonsten där 41 stenar läggs ut i ett rutnät om nio hus.",
    },
    href: "/saman/kirk-bir-kumalak",
  },
  {
    id: "yada-tasi",
    term: "Yada (Cada) Taşı",
    pronunciation: "Ya-da Ta-şı",
    glyph: "◈",
    category: "saman",
    origin: {
      tr: "Eski Türkçe Yat / Yada (Kaşgarlı Mahmud · Dîvânu Lugâti’t-Türk)",
      en: "Old Turkic Yat / Yada (Mahmud al-Kashgari · 11th c.)",
      sv: "Fornturkiska Yat / Yada (Mahmud al-Kashgari · 1000-talet)",
    },
    definition: {
      tr: "Bozkır kaynaklarında doğa güçleriyle (rüzgar ve yağmur) rezonans kurduğu anlatılan, ancak kişisel hırs veya kibir karıştığında çatlayıp gücünü yitiren ölçü taşı.",
      en: "The sacred weather-stone of steppe lore, governed by the ethical law that greed or hubris cracks its power.",
      sv: "Den heliga väderstenen i stäpptraditionen som krävde fullständig osjälviskhet och måtta.",
    },
    href: "/gunluk/eski-turk-yada-tasi-ve-doga-uyumu",
  },

  // KLASİK ASTROLOJİ & HERMETİK GELENEK
  {
    id: "cazimi",
    term: "Cazimi (Güneş’in Kalbi)",
    pronunciation: "Ka-zi-mi",
    glyph: "☉",
    category: "astroloji",
    origin: {
      tr: "Arapça Ka’b el-Şems / Latince Cazimi (‘Güneş’in Kalbinde’)",
      en: "Arabic Ka'b al-Shams / Latin Cazimi ('In the Heart of the Sun')",
      sv: "Arabiska Ka'b al-Shams / Latin Cazimi ('I Solens Hjärta')",
    },
    definition: {
      tr: "Bir gezegenin Güneş’in merkezine 17 yay dakikasından (0°17') daha yakın olduğu an; gezegenin yanmaktan (Combust) kurtulup kralın tahtına oturduğu en yüksek berraklık derecesi.",
      en: "When a planet stands within 17 arcminutes (0°17') of the Sun's center, elevated from combustion into supreme clarity.",
      sv: "När en planet befinner sig inom 17 bågminuter från Solens mitt och uppnår högsta klarhet.",
    },
    href: "/astroloji/merkur-retrosu",
  },
  {
    id: "oikodespotes-kurios",
    term: "Oikodespotes & Kurios",
    pronunciation: "Oy-ko-des-po-tes · Ku-ri-os",
    glyph: "☉",
    category: "astroloji",
    origin: {
      tr: "Grekçe · Porphyry & Vettius Valens (MS 2.–3. yüzyıl)",
      en: "Hellenistic Greek · Porphyry & Vettius Valens (2nd–3rd c. CE)",
      sv: "Grekiska · Porfyrios & Vettius Valens (100–200-talet e.Kr.)",
    },
    definition: {
      tr: "Klasik astrolojinin gemi metaforunda Yükselen geminin gövdesidir, Oikodespotes geminin mülk sahibidir (doğal donanım), Kurios ise dümeni fiilen tutan kaptandır (aktif eylem).",
      en: "In Hellenistic chart governance, the Oikodespotes is the owner of the natal vessel while the Kurios is the active captain at the helm.",
      sv: "I hellenistisk astrologi är Oikodespotes skeppets ägare medan Kurios är kaptenen vid rodret.",
    },
    href: "/gunluk/astroloji-oikodespotes-ve-kurios",
  },
  {
    id: "dekan-prosopon",
    term: "36 Dekan (Prosopa / Yüzler)",
    pronunciation: "De-kan · Pro-so-pon",
    glyph: "✦",
    category: "astroloji",
    origin: {
      tr: "Mısır Baktiu (MÖ 2100) · Grekçe Dekanoi / Prosopa (‘Yüzler’)",
      en: "Egyptian Baktiu (2100 BCE) · Greek Dekanoi / Prosopa ('Faces')",
      sv: "Egyptiska Baktiu (2100 f.Kr.) · Grekiska Dekanoi / Prosopa ('Ansikten')",
    },
    definition: {
      tr: "360 derecelik Zodyak çemberinin 10’ar derecelik 36 dilime bölünmesi; her burcun kendi içinde üç ayrı gezegen yüzü (I., II. ve III. Dekan) taşıması.",
      en: "The division of the 360° zodiac into thirty-six 10° watches, giving every sign three distinct planetary Faces.",
      sv: "Indelningen av zodiakens 360 grader i 36 tiogradiga avsnitt som ger varje stjärntecken tre ansikten.",
    },
    href: "/gunluk/misir-ve-keldani-otuz-alti-dekan",
  },

  // YEŞİL AHİT & GELENEKSEL OTACILIK
  {
    id: "samhuinn-dumb-supper",
    term: "Samhuinn & Sessiz Ata Sofrası",
    pronunciation: "Sa-vin · Dumb Supper",
    glyph: "🕯",
    category: "witchcraft",
    origin: {
      tr: "Eski İrlandaca Samhain / İskoç Galcesi Samhuinn (‘Yazın Sonu’)",
      en: "Old Irish Samhain / Scottish Gaelic Samhuinn ('Summer's End')",
      sv: "Fornirländska Samhain / Skotsk gaeliska Samhuinn ('Sommarens Slut')",
    },
    definition: {
      tr: "31 Ekim–1 Kasım kış eşiğinde modern Wicca kurgularından bağımsız olarak uygulanan kadim gelenek: Eşiğin tuz ve soğuk demirle mühürlenmesi, batı penceresinde tek mum ve 15 dakikalık Sessiz Ata Sofrası.",
      en: "The pre-modern winter threshold rite of 31 October: warding the doorway with salt and iron, setting a western candle, and keeping the 15-minute Silent Ancestor Table.",
      sv: "Den uråldriga vintertröskelriten den 31 oktober med salt- och järnskydd samt det 15 minuter långa Tysta Förfädersbordet.",
    },
    href: "/witchcraft/samhain-esik-ve-ata-ocagi",
  },
  {
    id: "soguk-demir",
    term: "Soğuk Demir (Cold Iron)",
    pronunciation: "So-ğuk De-mir",
    glyph: "⛏",
    category: "witchcraft",
    origin: {
      tr: "Avrasya, Altay, Kelt ve İskandinav Eşik Folkloru",
      en: "Eurasian, Altai, Celtic & Norse Threshold Folklore",
      sv: "Eurasisk, Keltisk & Nordisk Tröskeltradition (Stål i dörr)",
    },
    definition: {
      tr: "Ateş ve toprağın birleşimiyle elde dövülmüş demirin manyetik ağırlığıyla dağınık/uçucu enerjileri ve korkuları eşikte toprağa indirmesi yasası.",
      en: "Hand-forged iron revered across ancient traditions for grounding volatile influences at the threshold.",
      sv: "Handsmitt järn som vördats för sin förmåga att jorda oro och skydda hemmets gräns.",
    },
    href: "/gunluk/soguk-demir-ve-esik-muhru",
  },
];
