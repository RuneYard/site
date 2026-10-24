import type { Lang } from "@/lib/copy";

export type RuneChapter = {
  heading: string;
  body: string;
};

export type RunePractice = {
  title: string;
  steps: readonly string[];
};

export type RunePoem = {
  source: string;
  quote: string;
};

export type Rune = {
  index: number;
  aett: 1 | 2 | 3;
  slug: string;
  glyph: string;
  name: string;
  protoGermanic: string;
  phoneme: string;
  image: string;
  practiceImage?: string;
  deities: readonly string[];
  subtitle: Record<Lang, string>;
  element: Record<Lang, string>;
  poem: Record<Lang, RunePoem>;
  text: Record<Lang, readonly string[]>;
  chapters: Record<Lang, readonly RuneChapter[]>;
  practice: Record<Lang, RunePractice>;
  closing: Record<Lang, string>;
};

export const runeHallIntro = {
  "subtitle": {
    "tr": "Elder Futhark’ın 24 taş kapısı, Kylver dizilimi ve Üç Aett (Sekizlik Aile) mimarisi",
    "en": "The 24 stone doors of the Elder Futhark, the Kylver sequence, and the architecture of the Three Aettir",
    "sv": "Den äldre futharkens 24 stenportar, Kylversekvensen och de tre ätternas arkitektur"
  },
  "paragraphs": {
    "tr": [
      "Elder Futhark (Eski Futhark), MÖ 1. yüzyıl ile MS 8. yüzyıl arasında İskandinavya ve Cermen coğrafyasında taş anıtlara, mızrak uçlarına, dişbudak/porsuk çıralarına ve altın brakteatlara (Gotland Kylver Taşı, Vadstena ve Grumpan buluntuları) kazınmış 24 harflik en eski rün dizgesidir. ‘Futhark’ adı, tıpkı ‘Alfabe’ kelimesi gibi ilk altı rünün ses değerlerinden (F–U–Þ–A–R–K) oluşur.",
      "Eski İskandinav dilinde ‘Rún’ kelimesi ‘fısıltı, sır, gizli meclis bilgisi ve oyulmuş işaret’ anlamına gelir (Hávamál 138–145). Rünler yalnızca sesleri yazmak için kullanılan ölü harfler değil; doğadaki ve insan bilincindeki 24 temel kuvvet yasasını (arketipi) gösteren kozmolojik bir haritadır. Her rün üç bileşenle çalışır: Stöðul (çizgisel taş formu), Galdr (ses titreşimi) ve Rún (gizli yasası).",
      "Yirmi dört rün rastgele dizilmez; her biri sekiz ründen oluşan üç büyük aileye — Eski İskandinavca ‘Ættir’ (Aettler / Sekizlikler) — ayrılır: I. Aett (Freyr ve Freyja’nın Aett’i: 1–8) maddi varoluşu, yaşam gücünü, dili ve toplumsal uyumu kurar; II. Aett (Hagal ve Heimdall’ın Aett’i: 9–16) doğanın kırılmaz yasalarını, kış sınavını, kaderi ve içsel dönüşümü öğretir; III. Aett (Tyr’ın Aett’i: 17–24) ise adaleti, bilinci, sezgiyi, uyanışı ve kutsal mirası tamamlar."
    ],
    "en": [
      "The Elder Futhark is the oldest runic system of 24 staves, carved between the 1st and 8th centuries CE across Scandinavia and the Germanic world onto standing stones, spear shafts, yew wands, and gold bracteates (such as the Kylver Stone of Gotland and the Vadstena and Grumpan finds). The name 'Futhark' derives directly from the phonetic values of its opening six runes: F–U–Þ–A–R–K.",
      "In Old Norse, the word 'Rún' signifies 'whisper, mystery, secret counsel, and incised mark' (Hávamál 138–145). Runes are not merely phonetic letters, but a cosmological map of 24 primal laws operating in nature and human consciousness. Every rune functions through three unified dimensions: Stöðul (its carved stave form), Galdr (its vocal resonance), and Rún (its inner law).",
      "The twenty-four runes are structured into three families of eight—called 'Ættir' (Eighths / Families): the First Aett (Freyr and Freyja's Aett: 1–8) establishes material vitality, speech, craft, and social harmony; the Second Aett (Hagal and Heimdall's Aett: 9–16) confronts inexorable natural law, winter testing, fate, and inner transformation; the Third Aett (Tyr's Aett: 17–24) fulfills justice, human consciousness, deep intuition, awakening, and ancestral inheritance."
    ],
    "sv": [
      "Den äldre futharken är det äldsta runsystemet med 24 stavar, ristat mellan 1:a och 8:e århundradet e.Kr. över Skandinavien och det germanska området på resta stenar, spjutskaft, idegransstavar och guldbrakteater (såsom Kylverstenen på Gotland samt Vadstena- och Grumpanfynden). Namnet 'Futhark' kommer av ljudvärdena i dess sex första runor: F–U–Þ–A–R–K.",
      "På fornnordiska betyder ordet 'Rún' 'viskning, hemlighet, rådslut och ristat tecken' (Hávamál 138–145). Runorna är inte blott bokstäver, utan en kosmologisk karta över 24 grundläggande krafter i naturen och det mänskliga medvetandet. Varje runa verkar genom tre dimensioner: Stöðul (stavens ristade form), Galdr (ljudets vibration) och Rún (dess inre lag).",
      "De tjugofyra runorna delas in i tre släkter om åtta — kallade 'Ätter' (Ættir): Första ätten (Frejs och Frejas ätt: 1–8) bygger livskraft, ord, hantverk och samklang; Andra ätten (Hagals och Heimdalls ätt: 9–16) möter naturens obevekliga lagar, vinterprövning, öde och inre förvandling; Tredje ätten (Tyrs ätt: 17–24) fullbordar rättvisa, medvetande, djup intuition, uppvaknande och arv."
    ]
  },
  "image": "/runes/futhark-hall.jpg"
} as const;

export const runeAetts = [
  {
    "aett": 1,
    "image": "/runes/aett-1-freyr.jpg",
    "title": {
      "tr": "I. Aett · Freyr ve Freyja’nın Sekizlisi (Rün 01 – 08)",
      "en": "First Aett · The Eight of Freyr and Freyja (Runes 01 – 08)",
      "sv": "Första Ätten · Frejs och Frejas Åtta (Runa 01 – 08)"
    },
    "summary": {
      "tr": "Varoluşun ilk sekiz eşiği: Hareketli ateş (Fehu), ham yaşam gücü (Uruz), sınır savunması (Thurisaz), yaratıcı nefes ve söz (Ansuz), doğru yol ve ritim (Raido), ocak ve zanaat ışığı (Kenaz), kutsal takas (Gebo) ve tamamlanmış uyum (Wunjo).",
      "en": "The first eight thresholds of existence: mobile fire (Fehu), raw vitality (Uruz), boundary defense (Thurisaz), creative breath and speech (Ansuz), right rhythm and road (Raido), forge torch and craft (Kenaz), sacred exchange (Gebo), and fulfilled harmony (Wunjo).",
      "sv": "Tillvarons första åtta trösklar: rörlig eld (Fehu), rå livskraft (Uruz), gränsförsvar (Thurisaz), skapande andedräkt och ord (Ansuz), rätt rytm och väg (Raido), härdens fackla och hantverk (Kenaz), heligt utbyte (Gebo) och fullbordad samklang (Wunjo)."
    }
  },
  {
    "aett": 2,
    "image": "/runes/aett-2-hagal.jpg",
    "title": {
      "tr": "II. Aett · Hagal ve Heimdall’ın Sekizlisi (Rün 09 – 16)",
      "en": "Second Aett · The Eight of Hagal and Heimdall (Runes 09 – 16)",
      "sv": "Andra Ätten · Hagals och Heimdalls Åtta (Runa 09 – 16)"
    },
    "summary": {
      "tr": "Sınav, doğa yasası ve içsel dönüşümün sekiz eşiği: Gökten inen dolu (Hagalaz), sürtünme ve zorunluluk ateşi (Nauthiz), buz sütunu ve duruş (Isa), sabırlı mevsim çarkı (Jera), ölüm-yaşam omurgası porsuk ağacı (Eihwaz), kader kupası (Perthro), uyanık koruma (Algiz) ve güneş zaferi (Sowilo).",
      "en": "The eight thresholds of testing, natural law, and inner transformation: hail from the sky (Hagalaz), friction fire of necessity (Nauthiz), pillar of ice and stillness (Isa), patient harvest wheel (Jera), yew axis of life and death (Eihwaz), cup of wyrd (Perthro), vigilant protection (Algiz), and solar victory (Sowilo).",
      "sv": "Prövningens, naturlagens och den inre förvandlingens åtta trösklar: hagel från skyn (Hagalaz), nödvändighetens friktionseld (Nauthiz), ispelare och stillhet (Isa), tålmodigt årshjul (Jera), idegranens livs- och dödsaxel (Eihwaz), ödets bägare (Perthro), vaksamt skydd (Algiz) och solseger (Sowilo)."
    }
  },
  {
    "aett": 3,
    "image": "/runes/aett-3-tyr.jpg",
    "title": {
      "tr": "III. Aett · Tyr ve Mirasın Sekizlisi (Rün 17 – 24)",
      "en": "Third Aett · The Eight of Tyr and Inheritance (Runes 17 – 24)",
      "sv": "Tredje Ätten · Tyrs och Arvets Åtta (Runa 17 – 24)"
    },
    "summary": {
      "tr": "Yasa, bilinç ve egemenliğin sekiz eşiği: Adalet mızrağı ve Kutup Yıldızı (Tiwaz), huş ağacı ve şefkatli rahim (Berkano), sadık ortaklık (Ehwaz), insan idraki ve liyakat (Mannaz), derin su ve sezgi (Laguz), toprak altı tohumu (Ingwaz), şafak uyanışı (Dagaz) ve kutsal ata yuvası (Othala).",
      "en": "The eight thresholds of law, consciousness, and sovereignty: spear of justice and Pole Star (Tiwaz), birch womb and nurture (Berkano), loyal partnership (Ehwaz), human intellect and merit (Mannaz), deep water and intuition (Laguz), subterranean seed (Ingwaz), dawn awakening (Dagaz), and ancestral homestead (Othala).",
      "sv": "Lagens, medvetandets och suveränitetens åtta trösklar: rättvisans spjut och Polstjärnan (Tiwaz), björkens livmoder och växt (Berkano), trofast partnerskap (Ehwaz), mänskligt förstånd och förtjänst (Mannaz), djupt vatten och intuition (Laguz), fröet under jorden (Ingwaz), gryningsuppvaknande (Dagaz) och fädernegård (Othala)."
    }
  }
] as const;

export const runes: readonly Rune[] = [
  {
    "index": 1,
    "aett": 1,
    "slug": "fehu",
    "glyph": "ᚠ",
    "name": "Fehu",
    "protoGermanic": "*Fehu",
    "phoneme": "f",
    "image": "/runes/rune-01-fehu.jpg",
    "deities": [
      "Freyja",
      "Frey",
      "Njord"
    ],
    "subtitle": {
      "tr": "Hareket Halindeki Servet, Sığır Sürüsü ve İlk Kıvılcım",
      "en": "Mobile Wealth, the Cattle Herd, and the Primal Spark",
      "sv": "Rörlig Rikedom, Boskapshjorden och den Första Gnistan"
    },
    "element": {
      "tr": "Ateş ve Toprak (Yayılan Isı)",
      "en": "Fire & Earth (Radiant Heat)",
      "sv": "Eld & Jord (Strålande Värme)"
    },
    "poem": {
      "tr": {
        "source": "Eski Norveç Rün Şiiri (I)",
        "quote": "“Servet (Fé) akrabalar arasında anlaşmazlık doğurur; ama kurt ormanda büyür.”"
      },
      "en": {
        "source": "Old Norwegian Rune Poem (I)",
        "quote": "“Wealth (Fé) breeds discord among kinsmen; the wolf grows up in the woods.”"
      },
      "sv": {
        "source": "Fornnorska rundikten (I)",
        "quote": "”Fä (Fé) vållar fränders träta; ulven föds upp i skogen.”"
      }
    },
    "text": {
      "tr": [
        "Fehu, modern insanın sandığı gibi yalnızca para değildir. O, hareket halindeki enerjidir. Eski dilde adı sığır sürüsüdür. O çağda zenginlik sandıktaki altın değil, beslenen, üreyen ve ölen hayvanın sayısıydı. Fehu canlı ve döngüsel bir servettir. Durursa bozulur.",
        "Bu rün bir şeyi başlatmak için gereken yakıttır. Ham, henüz işlenmemiş, yaratıcı güçtür. Yeni başlangıç, kazanç, cömertlik ve doğurganlık aynı akıştan çıkar. Kişi hem kazanır hem kazandığını paylaşır; paylaştıkça gücü artar. Cömertlik kanalı doğruysa sonuç somuttur. Cimrilik ya da korku ateşi ya yakar ya söndürür.",
        "Beden tarafında ısı ve dolaşımdır. Donuk, üşüyen, hareketsiz olanı ısıtarak çözer. Eklemdeki tortu durgunluğun eseridir. Fehu’nun düşmanı durgunluktur. Akan kan, dağılan ısı, el değiştiren iş bu kapının somutudur. Libido da buradadır: yaşamdan keyif alamama, akışın kesilmesidir.",
        "Fehu istif değildir ve kilitli mülk değildir. Açgözlülük, “daha fazlası” arzusu ve kaybetme korkusu kişiyi köleleştirir. Öteki yüzü kıtlık bilincidir: enerji tükenir, işe başlayacak mecal kalmaz. Gelen çabuk gelir. Tutulup dondurulursa giden de çabuk gider. Bu mal dönmek için vardır."
      ],
      "en": [
        "Fehu is not only money, as the modern mind assumes. It is energy in motion. In the old tongue its name is the cattle herd. Wealth in that age was not gold in a chest. It was the count of animals that feed, breed, and die. Fehu is a living, cyclical wealth. If it stands still, it spoils.",
        "This rune is the fuel required to start a thing. It is raw, not yet worked, a creative power. A new beginning, gain, generosity, and fertility leave by the same current. A person both earns and shares what was earned. Power grows by the sharing. If the channel of generosity is right, the result is concrete. Stinginess or fear either burns the fire or puts it out.",
        "In the body it is heat and circulation. It solves what is dull, cold, and motionless by heating it. The residue in a joint is the work of stillness. Fehu’s enemy is stagnation. Blood that flows, heat that spreads, work that changes hands are the concrete things of this door. Libido sits here too. The loss of pleasure in living is a cut in the current.",
        "Fehu is not hoarding and it is not locked property. Greed, the hunger for “more,” and the fear of loss turn a person into a slave. The other face is scarcity-mind: the energy runs out, and there is no strength left to begin a work. What comes, comes quickly. If it is held and frozen, what leaves also leaves quickly. These goods exist in order to turn."
      ],
      "sv": [
        "Fehu är inte bara pengar, som det moderna sinnet antar. Den är energi i rörelse. På det gamla språket är namnet boskapshjorden. Rikedom i den tiden var inte guld i en kista. Det var antalet djur som äter, förökar sig och dör. Fehu är en levande, cyklisk rikedom. Står den stilla fördärvas den.",
        "Denna runa är bränslet som krävs för att sätta igång en sak. Den är rå, ännu inte bearbetad, en skapande kraft. En ny början, vinst, generositet och fruktsamhet går ut genom samma ström. En person både förtjänar och delar det som förtjänats. Kraften växer av delandet. Är generositetens kanal rätt är resultatet konkret. Snålhet eller rädsla antingen bränner elden eller släcker den.",
        "I kroppen är den värme och kretslopp. Den löser det slöa, kalla och orörliga genom att värma det. Resten i en led är stillhetens verk. Fehus fiende är stagnation. Blod som flyter, värme som sprids, arbete som byter hand är denna dörrs konkreta ting. Libido sitter också här. Förlusten av nöje i livet är ett brott i strömmen.",
        "Fehu är inte hamstring och inte låst egendom. Girighet, hungern efter ”mer” och rädslan att förlora gör en person till slav. Det andra ansiktet är bristmedvetande: energin tar slut, och ingen kraft finns kvar att börja ett arbete. Det som kommer, kommer snabbt. Hålls det och fryses, går också det som lämnar snabbt. Detta gods finns för att omsättas."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Fehu) ve Tarihsel Rün Şiiri",
          "body": "Fehu rünü Proto-Cermence ‘*Fehu’ kökünden gelir ve Elder Futhark dizgesinde ‘f’ ses değerini taşır. Eski Norveç Rün Şiiri (I) kaynağında bu kapı şöyle mühürlenmiştir: “Servet (Fé) akrabalar arasında anlaşmazlık doğurur; ama kurt ormanda büyür.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Yeni bir işin ateşlenmesi, emeğin somut kazanca dönüşmesi, cömert paylaşım, bedende kan dolaşımı ve yaşama sevinci. — Gölge / Tıkanmış Akış: İstifçilik, kaybetme korkusu, açgözlülük veya tam tersi kronik tükenmişlik, kıtlık bilinci ve başladığı işi besleyememe."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Fehu) and Historical Rune Poem",
          "body": "The rune Fehu derives from Proto-Germanic '*Fehu' and carries the phonetic value 'f' in the Elder Futhark. In the Old Norwegian Rune Poem (I), this door is recorded thus: “Wealth (Fé) breeds discord among kinsmen; the wolf grows up in the woods.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: Igniting a new venture, turning labor into tangible gain, generous circulation, bodily warmth, and vital appetite for life. — Shadow / Blocked Current: Hoarding, fear of loss, greed—or conversely chronic depletion, scarcity mindset, and inability to fuel what was begun."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Fehu) och Historisk Rundikt",
          "body": "Runan Fehu härstammar från urgermanskans '*Fehu' och bär ljudvärdet 'f' i den äldre futharken. I Fornnorska rundikten (I) beskrivs denna port sålunda: ”Fä (Fé) vållar fränders träta; ulven föds upp i skogen.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Att tända ett nytt verk, vända arbete till konkret vinst, generöst kretslopp, kroppsvärme och livslust. — Skuggström / Blockering: Hamstring, rädsla för förlust och girighet — eller kronisk utmattning, bristtänkande och avstannat flöde."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Fehu",
        "steps": [
          "Sabah dik durup kollarını yukarı-ileri doğru 45 derece açarak Fehu’nun iki boynuz dalını bedeninde (Stöðul) kur.",
          "Derin bir nefes alıp ‘Feeee-huuuu’ sesini (Galdr) göğsünde ve avuç içlerinde sıcaklık hissedene kadar 3 kez titreştir.",
          "Bugün elinde tuttuğun ama akması gereken bir kaynağı (bilgi, emek, teşekkür veya maddi destek) bilinçli olarak dolaşıma sok."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Fehu",
        "steps": [
          "Stand tall in the morning and extend both arms forward and upward at 45 degrees to embody the two ascending branches of Fehu (Stöðul).",
          "Inhale deeply and intone 'Feeee-huuuu' (Galdr) three times until warmth gathers in your chest and palms.",
          "Consciously put one stagnant resource (knowledge, labor, gratitude, or material support) back into circulation today."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Fehu",
        "steps": [
          "Stå rak på morgonen och sträck båda armarna snett uppåt i 45 grader för att kroppsliggöra Fehus två grenar (Stöðul).",
          "Andas in djupt och ljuda 'Feeee-huuuu' (Galdr) tre gånger tills du känner värme i bröstkorg och handflator.",
          "Sätt medvetet en stillastående resurs (kunskap, arbete, tacksamhet eller materiellt stöd) i omlopp idag."
        ]
      }
    },
    "closing": {
      "tr": "Akan su yosun tutmaz; paylaşılan ateş sönmez.",
      "en": "Flowing water gathers no moss; shared fire never dies.",
      "sv": "Rinnande vatten samlar ingen mossa; delad eld slocknar aldrig."
    },
    "practiceImage": "/runes/practice-fehu.jpg"
  },
  {
    "index": 2,
    "aett": 1,
    "slug": "uruz",
    "glyph": "ᚢ",
    "name": "Uruz",
    "protoGermanic": "*Ūruz",
    "phoneme": "u",
    "image": "/runes/rune-02-uruz.jpg",
    "deities": [
      "Thor",
      "Urd"
    ],
    "subtitle": {
      "tr": "Yaban Öküzü (Aurochs), Ham Yaşam Gücü ve Kalıp",
      "en": "The Wild Aurochs, Raw Vitality, and the Shaping Mold",
      "sv": "Uroxen, den Råa Livskraften och den Formande Gjutformen"
    },
    "element": {
      "tr": "Toprak ve Buzul Suyu (Çiy / Yağmur)",
      "en": "Earth & Glacial Water (Drizzle)",
      "sv": "Jord & Glaciärvatten (Duggregn)"
    },
    "poem": {
      "tr": {
        "source": "Anglosakson Rün Şiiri (II)",
        "quote": "“Yaban öküzü (Ūr) korkusuzdur ve devasa boynuzludur; bozkırın cesur hayvanı boynuzlarıyla dövüşür.”"
      },
      "en": {
        "source": "Old English Rune Poem (II)",
        "quote": "“The aurochs (Ūr) is fearless and great-horned; a fierce beast, it fights with its horns and walks the moor.”"
      },
      "sv": {
        "source": "Fornengelska rundikten (II)",
        "quote": "”Uroxen (Ūr) är orädd och storhornad; ett stolt djur som strider med hornen och vandrar över heden.”"
      }
    },
    "text": {
      "tr": [
        "Fehu ateşi yaktı. Ateşin yanması için bir madde gerekir. Uruz o maddedir. Eski dilde adı yaban öküzüdür. Evcil sürü değildir. Ormanda duran, devasa, durdurulması güç bir doğa kuvvetidir. Fehu evcil sürüyse, Uruz vahşi sürüdür.",
        "Uruz şekil veren güçtür. Düşüncenin maddeye inmesi, hastalığın sağlığa dönmesi, zayıflığın kuvvete evrilmesi bu kapının işidir. Yaşamın ham maddesidir. Yalnızca kas değil, psikolojik dayanıklılık ve inattır. Rünlerin en sağlam şifacısı buradadır: bedene kendi kendini onarma emri verir.",
        "Hareketi konforun dışına çıkmaktır. Yeni bir iş, bir taşınma, zor bir konuşma; arkadaki itici güç Uruz’dur. Dağınık bir fikir varsa ve sonuç yoksa eksik olan kalıptır. Risk burada kahramanlık lafı değil, yerini terk etmeyen bedendir.",
        "Uruz para değildir ve kâğıttan kaplan değildir. Kronik yorgunluk, sürekli hastalanma, “hayır” diyememek onun yoksun yüzüdür. Kişi başkası tarafından kolayca ezilir. Güç burada onarmak içindir. Dağıtılırsa yalnızca şekilsiz bir yük kalır."
      ],
      "en": [
        "Fehu lit the fire. Fire needs a matter in order to burn. Uruz is that matter. In the old tongue its name is the aurochs. It is not the tame herd. It is a vast natural force standing in the forest, hard to stop. If Fehu is the domestic herd, Uruz is the wild herd.",
        "Uruz is the power that gives shape. Thought coming down into matter, illness turning back to health, weakness turning into force: that is this door’s work. It is the raw material of life. Not muscle alone. Psychological endurance, and stubbornness. The firmest healer among the runes sits here. It gives the body the order to repair itself.",
        "Its movement is to leave comfort. A new work, a move, a hard conversation: the force behind them is Uruz. If there is a scattered idea and no result, what is missing is the mold. Risk here is not a heroic phrase. It is the body that does not abandon its ground.",
        "Uruz is not money and it is not a paper tiger. Chronic fatigue, constant illness, the inability to say “no” are its face of lack. The person is easily crushed by someone else. The strength here exists in order to repair. Scattered, only a shapeless load remains."
      ],
      "sv": [
        "Fehu tände elden. Elden behöver en materia för att brinna. Uruz är den materian. På det gamla språket är namnet uroxen. Den är inte den tama hjorden. Den är en väldig naturkraft som står i skogen, svår att hejda. Är Fehu den tama hjorden är Uruz den vilda hjorden.",
        "Uruz är kraften som ger form. Tanken som stiger ner i materia, sjukdomen som vänder tillbaka till hälsa, svagheten som blir kraft: det är denna dörrs arbete. Den är livets råmaterial. Inte bara muskel. Psykologisk uthållighet, och envishet. Den fastaste helaren bland runorna sitter här. Den ger kroppen ordern att reparera sig själv.",
        "Rörelsen är att lämna komforten. Ett nytt arbete, en flytt, ett svårt samtal: kraften bakom dem är Uruz. Finns en spridd idé och inget resultat är det som saknas formen. Risk är här ingen hjältefras. Den är kroppen som inte överger sin mark.",
        "Uruz är inte pengar och inte en papperstiger. Kronisk trötthet, ständig sjukdom, oförmågan att säga ”nej” är dess ansikte av brist. Personen krossas lätt av någon annan. Styrkan här finns för att reparera. Spridd blir bara en formlös last kvar."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Ūruz) ve Tarihsel Rün Şiiri",
          "body": "Uruz rünü Proto-Cermence ‘*Ūruz’ kökünden gelir ve Elder Futhark dizgesinde ‘u’ ses değerini taşır. Anglosakson Rün Şiiri (II) kaynağında bu kapı şöyle mühürlenmiştir: “Yaban öküzü (Ūr) korkusuzdur ve devasa boynuzludur; bozkırın cesur hayvanı boynuzlarıyla dövüşür.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Bedensel şifa ve bağışıklık gücü, dayanıklılık, konfor alanından çıkma cesareti, dağınık enerjiye sağlam bir kalıp verme. — Gölge / Tıkanmış Akış: İrade zayıflığı, kronik yorgunluk, ‘hayır’ diyememe, başkalarının yükü altında ezilme veya kontrolsüz kaba kuvvet."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Ūruz) and Historical Rune Poem",
          "body": "The rune Uruz derives from Proto-Germanic '*Ūruz' and carries the phonetic value 'u' in the Elder Futhark. In the Old English Rune Poem (II), this door is recorded thus: “The aurochs (Ūr) is fearless and great-horned; a fierce beast, it fights with its horns and walks the moor.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: Bodily healing and immune strength, stamina, courage to step outside comfort, and casting raw energy into enduring form. — Shadow / Blocked Current: Weakness of will, chronic exhaustion, inability to say 'no', being crushed under others' burdens, or unguided brute force."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Ūruz) och Historisk Rundikt",
          "body": "Runan Uruz härstammar från urgermanskans '*Ūruz' och bär ljudvärdet 'u' i den äldre futharken. I Fornengelska rundikten (II) beskrivs denna port sålunda: ”Uroxen (Ūr) är orädd och storhornad; ett stolt djur som strider med hornen och vandrar över heden.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Kroppslig läkning och motståndskraft, uthållighet, mod att lämna bekvämligheten och ge rå energi fast form. — Skuggström / Blockering: Viljesvaghet, kronisk trötthet, oförmåga att säga 'nej', att krossas under andras bördor eller rått, ostyrt våld."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Uruz",
        "steps": [
          "Ayaklarını omuz genişliğinde açıp dizlerini hafifçe kır; gövdeni toprağa kök salmış bir dağ gibi ağırlaştır.",
          "Diyaframdan derin ve tok bir ‘Uuuuu-ruuuuz’ sesi çıkararak titreşimi omurganda ve bacak kaslarında hisset.",
          "Ertelediğin ve fiziksel emek/dayanıklılık gerektiren tek bir somut işi bugün hiç bahane üretmeden tamamla."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Uruz",
        "steps": [
          "Plant your feet shoulder-width apart with knees slightly bent; sink your weight into the ground like an unshakeable mountain.",
          "Intone a deep, resonant 'Uuuuu-ruuuuz' from the diaphragm, feeling the vibration in your spine and legs.",
          "Complete one concrete physical or demanding task today that you have been postponing without excuse."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Uruz",
        "steps": [
          "Stå med fötterna axelbrett isär och lätt böjda knän; låt din tyngd sjunka ned i marken som ett orubbligt berg.",
          "Ljuda ett djupt, malmfullt 'Uuuuu-ruuuuz' från mellangärdet och känn vibrationen i ryggrad och ben.",
          "Slutför idag en konkret och krävande uppgift som du skjutit upp, utan undanflykter."
        ]
      }
    },
    "closing": {
      "tr": "Kalıp sağlam değilse erimiş demir toprağa dağılır; beden iradenin örsüdür.",
      "en": "If the mold is not sound, molten iron scatters on the ground; the body is the anvil of the will.",
      "sv": "Är gjutformen inte fast rinner det smälta järnet ut på marken; kroppen är viljans städ."
    },
    "practiceImage": "/runes/practice-uruz.jpg"
  },
  {
    "index": 3,
    "aett": 1,
    "slug": "thurisaz",
    "glyph": "ᚦ",
    "name": "Thurisaz",
    "protoGermanic": "*Þurisaz",
    "phoneme": "þ (th)",
    "image": "/runes/rune-03-thurisaz.jpg",
    "deities": [
      "Thor",
      "Loki"
    ],
    "subtitle": {
      "tr": "Diken, Dev Kuvveti ve Eşikteki Çekiç Darbesi",
      "en": "The Thorn, Giant-Force, and the Hammer Blow at the Threshold",
      "sv": "Törnet, Jättekraften och Hammarslaget vid Tröskeln"
    },
    "element": {
      "tr": "Fırtına ve Yıldırım Ateşi",
      "en": "Storm & Lightning Fire",
      "sv": "Storm & Blixteld"
    },
    "poem": {
      "tr": {
        "source": "Anglosakson Rün Şiiri (III)",
        "quote": "“Diken (Þorn) çok keskindir; ona dokunan herkes için sert ve acımasızdır, içinde uyuyana aman vermez.”"
      },
      "en": {
        "source": "Old English Rune Poem (III)",
        "quote": "“The thorn (Þorn) is exceedingly sharp; painful for any warrior to grasp, fierce to all who rest among them.”"
      },
      "sv": {
        "source": "Fornengelska rundikten (III)",
        "quote": "”Törnet (Þorn) är ytterst skarpt; smärtsamt för varje kämpe att gripa, oblitt mot den som vilar däri.”"
      }
    },
    "text": {
      "tr": [
        "Thurisaz dikendir ve devdir. Gülün sapındaki dikeni düşün. Güzelliği korumak için oradadır ve dokunanın parmağını kanatır. Bu rün pasif bir kalkan değildir. Kalkanın ortasındaki sivri demirdir. Saldırana zarar vererek korur.",
        "Aynı zamanda bir kırılma noktasıdır. Yolu tıkayan duvar, balyozla kırılır. Bu kuvvet tanrılardan önceki ham güçtür: fırtına, yıldırım, deprem. Kötü değildir. İnsan merhameti de taşımaz. Hayatta kalmak için gereken vahşi içgüdüdür.",
        "Dengeli hâli çekicin işidir. “Hayır” diyebilmek, sınırı korumak, tıkanan süreci tek darbeyle açmak. Thurisaz beklemez. Vurur ve geçer. Kararsız eşikte duranı taşımaz. Karar, çekicin ele alınmasıdır.",
        "Thurisaz nezaket duası değildir. Aşırısı zorbadır: öfke patlaması, iğne, kalp kırma, kendini haklı sayan saldırı. Yoksun yüzü kapı paspasıdır. Her şeye evet, sürekli ihlal edilen sınır, içeride biriken zehir. Bastırılan öfke kişiyi içten yer."
      ],
      "en": [
        "Thurisaz is the thorn and the giant. Think of the thorn on the stem of the rose. It is there to protect the beauty, and it bloodies the finger that touches it. This rune is not a passive shield. It is the iron spike in the middle of the shield. It protects by harming what attacks.",
        "It is also a breaking point. The wall that blocks the road is broken with a maul. This force is the raw power from before the gods: storm, lightning, earthquake. It is not evil. It also carries no human mercy. It is the wild instinct required in order to stay alive.",
        "Its balanced state is the work of the hammer. To be able to say “no,” to keep the limit, to open a stuck process with a single blow. Thurisaz does not wait. It strikes and passes. It does not carry the one who stands undecided on the threshold. The decision is taking the hammer in hand.",
        "Thurisaz is not a prayer of courtesy. Its excess is the bully: a burst of rage, the needle, the broken heart, an attack that counts itself right. Its face of lack is the doormat. Yes to everything, a limit constantly breached, a poison gathering inside. Suppressed anger eats the person from within."
      ],
      "sv": [
        "Thurisaz är törnet och jätten. Tänk på törnet på rosens stjälk. Det finns där för att skydda skönheten, och det blöder fingret som rör det. Denna runa är inte en passiv sköld. Den är järnudden i mitten av skölden. Den skyddar genom att skada det som angriper.",
        "Den är också en brytpunkt. Muren som blockerar vägen bryts med en slägga. Denna kraft är den råa makten från före gudarna: storm, blixt, jordbävning. Den är inte ond. Den bär heller ingen mänsklig barmhärtighet. Den är den vilda instinkt som krävs för att förbli vid liv.",
        "Dess balanserade tillstånd är hammarens arbete. Att kunna säga ”nej”, att hålla gränsen, att öppna en fastnad process med ett enda slag. Thurisaz väntar inte. Den slår och går förbi. Den bär inte den som står obeslutsam på tröskeln. Beslutet är att ta hammaren i handen.",
        "Thurisaz är inte en hövlighetens bön. Dess övermått är tyrannen: ett vredesutbrott, nålen, det brutna hjärtat, ett angrepp som räknar sig självt som rätt. Dess ansikte av brist är dörrmattan. Ja till allt, en gräns som ständigt bryts, ett gift som samlas inuti. Undertryckt vrede äter personen inifrån."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Þurisaz) ve Tarihsel Rün Şiiri",
          "body": "Thurisaz rünü Proto-Cermence ‘*Þurisaz’ kökünden gelir ve Elder Futhark dizgesinde ‘þ (th)’ ses değerini taşır. Anglosakson Rün Şiiri (III) kaynağında bu kapı şöyle mühürlenmiştir: “Diken (Þorn) çok keskindir; ona dokunan herkes için sert ve acımasızdır, içinde uyuyana aman vermez.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Aktif savunma, net sınır koyma, tıkanmış bir düğümü tek darbeyle kırma, eşik bekçiliği ve uyanık refleks. — Gölge / Tıkanmış Akış: Kontrolsüz öfke patlaması, zorbalık ve yıkıcılık; ya da tam tersi sınırlarını koruyamayıp öfkeyi içine akıtarak kendini zehirleme."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Þurisaz) and Historical Rune Poem",
          "body": "The rune Thurisaz derives from Proto-Germanic '*Þurisaz' and carries the phonetic value 'þ (th)' in the Elder Futhark. In the Old English Rune Poem (III), this door is recorded thus: “The thorn (Þorn) is exceedingly sharp; painful for any warrior to grasp, fierce to all who rest among them.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: Active defense, decisive boundary-setting, breaking a deadlocked knot with a single blow, threshold guardianship, and alert reflex. — Shadow / Blocked Current: Explosive rage, bullying, and recklessness—or conversely failing to defend one's borders and poisoning oneself with swallowed anger."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Þurisaz) och Historisk Rundikt",
          "body": "Runan Thurisaz härstammar från urgermanskans '*Þurisaz' och bär ljudvärdet 'þ (th)' i den äldre futharken. I Fornengelska rundikten (III) beskrivs denna port sålunda: ”Törnet (Þorn) är ytterst skarpt; smärtsamt för varje kämpe att gripa, oblitt mot den som vilar däri.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Aktivt försvar, tydlig gränssättning, att klyva en låst knut med ett enda slag, tröskelvakt och vaksam reflex. — Skuggström / Blockering: Okontrollerat vredesutbrott och tyranni — eller att inte försvara sin gräns och förgifta sig själv med svald ilska."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Thurisaz",
        "steps": [
          "Sol elini beline veya göğsüne koyarak dik dur (diken açısı); nefesini dilini üst dişlerine değdirerek ‘Thhhh-uuu-ri-saz’ sesiyle ver.",
          "Hayatında iyi niyetin suistimal edildiği, diken koyman gereken tek bir sınır ihlalini tespit et.",
          "Öfkelenmeden ve uzun açıklama yapmadan, o sınırı tek ve net bir ‘Hayır’ cümlesiyle kapat."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Thurisaz",
        "steps": [
          "Stand upright with one hand angled at your hip like the thorn stave; exhale with a sharp dental 'Thhhh-uuu-ri-saz'.",
          "Identify one place in your life where goodwill is being exploited and a sharp boundary is overdue.",
          "Without anger or lengthy justification, close that breach today with a single, unmistakable 'No'."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Thurisaz",
        "steps": [
          "Stå upprätt med ena armen vinklad i sidan likt törnestaven; andas ut med ett skarpt 'Thhhh-uuu-ri-saz'.",
          "Identifiera en punkt i ditt liv där din välvilja utnyttjas och en skarp gräns behövs.",
          "Utan vrede eller långa förklaringar, stäng den gränsen idag med ett enda tydligt 'Nej'."
        ]
      }
    },
    "closing": {
      "tr": "Gülü koruyan diken nezaket bilmez; sınırını korumayan bahçe çiğnenir.",
      "en": "The thorn that guards the rose knows no flattery; a garden without a hedge is trampled.",
      "sv": "Törnet som vaktar rosen känner ingen inställsamhet; en örtagård utan häck blir nedtrampad."
    },
    "practiceImage": "/runes/practice-thurisaz.jpg"
  },
  {
    "index": 4,
    "aett": 1,
    "slug": "ansuz",
    "glyph": "ᚨ",
    "name": "Ansuz",
    "protoGermanic": "*Ansuz",
    "phoneme": "a",
    "image": "/runes/rune-04-ansuz.jpg",
    "deities": [
      "Odin",
      "Bragi",
      "Idunn"
    ],
    "subtitle": {
      "tr": "Odin’in Nefesi (Önd), Yaratıcı Söz ve İşaret Okuma",
      "en": "Odin's Breath (Önd), the Creative Word, and Reading Signs",
      "sv": "Odens Andedräkt (Önd), det Skapande Ordet och att Läsa Tecken"
    },
    "element": {
      "tr": "Hava (Rüzgâr, Soluk ve Ses)",
      "en": "Air (Wind, Breath, and Voice)",
      "sv": "Luft (Vind, Andedräkt och Röst)"
    },
    "poem": {
      "tr": {
        "source": "Anglosakson Rün Şiiri (IV)",
        "quote": "“Ağız / Söz (Ōs) her dilin kaynağıdır, bilgeliğin direği ve bilge kişilerin tesellisidir.”"
      },
      "en": {
        "source": "Old English Rune Poem (IV)",
        "quote": "“The mouth / word (Ōs) is the source of all speech, the pillar of wisdom and comfort to the wise.”"
      },
      "sv": {
        "source": "Fornengelska rundikten (IV)",
        "quote": "”Munnen / Ordet (Ōs) är allt tals källa, visdomens pelare och de visas tröst.”"
      }
    },
    "text": {
      "tr": [
        "Ansuz tanrı demektir ve ağız demektir. İletişimdir, ama “nasılsın” değildir. Yaratıcı sözdür. Bir şeyi adlandırdığın an ona hükmedersin. Fehu enerjiyi verdi, Uruz biçimi verdi. Ansuz o biçime bilinç yükler.",
        "İşaretleri, tesadüf sanılan mesajları okuma yeteneği buradadır. Nefes durursa söz biter. Söz biterse insan yeniden kütüğe döner. Hava görünmezdir; fırtınaya dönünce ağacı kökünden söker. Sözün kemiği yoktur, kemiği kırabilir.",
        "Dengeli hâli bülbül gibi şakımak değil, sözün tesir etmesidir. Dinlenir. İlham akar; kelime aranmaz, kelime gelir. Hakikat konuşulur ve hakikat duyulur. Sınavda sıfır bilgiyi mucizeye çevirmez. Sende olanı açığa çıkarır ve düşünceyi netleştirir.",
        "Bayat sözün büyüsü yoktur. Hep aynı zaferi, hep aynı acıyı anlatan dil yalnızca kafa şişirir. Söz taze tutulur. Aşırısı demagogdur: yalan, iftira, laf salatası. Yoksun yüzü dilsizdir. Kendini söyleyememek, sesin titremesi, cevabı bilip çıkaramamak."
      ],
      "en": [
        "Ansuz means god and it means mouth. It is communication, but it is not “how are you.” It is the creative word. The moment you name a thing, you rule it. Fehu gave the energy. Uruz gave the form. Ansuz loads consciousness into that form.",
        "The ability to read signs, and messages mistaken for chance, sits here. If the breath stops, the word ends. If the word ends, the human becomes a log again. Air is invisible. When it turns to storm it tears the tree from the root. The word has no bone, and it can break bone.",
        "Its balanced state is not singing like a nightingale. It is the word taking effect. It is heard. Inspiration flows. The word is not searched for. The word arrives. Truth is spoken and truth is heard. In an examination it does not turn zero knowledge into a miracle. It brings out what is already in you and clarifies the thought.",
        "A stale word has no power. A tongue that tells the same victory and the same pain only stuffs the head. The word is kept fresh. Its excess is the demagogue: lie, slander, a salad of talk. Its face of lack is the mute. Not being able to say oneself, the voice trembling, knowing the answer and not being able to bring it out."
      ],
      "sv": [
        "Ansuz betyder gud och det betyder mun. Det är kommunikation, men det är inte ”hur mår du.” Det är det skapande ordet. I samma stund du namnger en sak råder du över den. Fehu gav energin. Uruz gav formen. Ansuz laddar medvetande i den formen.",
        "Förmågan att läsa tecken, och budskap som misstas för slump, sitter här. Stannar andedräkten tar ordet slut. Tar ordet slut blir människan en stock igen. Luft är osynlig. När den blir storm rycker den trädet från roten. Ordet har inget ben, och det kan bryta ben.",
        "Dess balanserade tillstånd är inte att sjunga som en näktergal. Det är ordet som får verkan. Det hörs. Inspirationen flödar. Ordet söks inte. Ordet anländer. Sanning sägs och sanning hörs. I ett prov gör det inte noll kunskap till ett mirakel. Det för fram det som redan finns i dig och klargör tanken.",
        "Ett unket ord har ingen kraft. En tunga som berättar samma seger och samma smärta bara fyller huvudet. Ordet hålls friskt. Dess övermått är demagogen: lögn, förtal, en sallad av prat. Dess ansikte av brist är den stumme. Att inte kunna säga sig själv, rösten som darrar, att kunna svaret och inte få fram det."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Ansuz) ve Tarihsel Rün Şiiri",
          "body": "Ansuz rünü Proto-Cermence ‘*Ansuz’ kökünden gelir ve Elder Futhark dizgesinde ‘a’ ses değerini taşır. Anglosakson Rün Şiiri (IV) kaynağında bu kapı şöyle mühürlenmiştir: “Ağız / Söz (Ōs) her dilin kaynağıdır, bilgeliğin direği ve bilge kişilerin tesellisidir.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Etkili ve hakikatli konuşma, ilham akışı, sınav ve mülakat başarısı, rüyaları ve eşzamanlı işaretleri doğru okuma. — Gölge / Tıkanmış Akış: Laf kalabalığı, manipülasyon, demagoji ve yalan; ya da sesin düğümlenmesi, bildiğini ifade edememe ve zihinsel gürültü."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Ansuz) and Historical Rune Poem",
          "body": "The rune Ansuz derives from Proto-Germanic '*Ansuz' and carries the phonetic value 'a' in the Elder Futhark. In the Old English Rune Poem (IV), this door is recorded thus: “The mouth / word (Ōs) is the source of all speech, the pillar of wisdom and comfort to the wise.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: Truthful and resonant speech, poetic inspiration, success in study and counsel, and accurate reading of signs and synchronicities. — Shadow / Blocked Current: Empty chatter, manipulation, demagogy, and deceit—or a knotted throat, inability to voice what one knows, and mental static."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Ansuz) och Historisk Rundikt",
          "body": "Runan Ansuz härstammar från urgermanskans '*Ansuz' och bär ljudvärdet 'a' i den äldre futharken. I Fornengelska rundikten (IV) beskrivs denna port sålunda: ”Munnen / Ordet (Ōs) är allt tals källa, visdomens pelare och de visas tröst.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Sanningstal som får verkan, inspiration, framgång i prövning och samtal samt förmåga att tyda tecken. — Skuggström / Blockering: Tomt ordflöde, manipulation och svek — eller knuten strupe, oförmåga att uttrycka det man vet och mentalt brus."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Ansuz",
        "steps": [
          "Pencereyi açıp temiz havaya dön; ciğerlerini tam doldurup ‘Aaaaa-nnn-suuuuz’ sesiyle boğazını ve göğüs kafesini titreştir.",
          "Bugün kurduğun cümlelerden gereksiz mazeretleri ve boş şikâyetleri çıkar; az ama ağırlığı olan söz söyle.",
          "Gün içinde karşına üç kez tekrar ederek çıkan bir kelimeye, sembole veya soruya dikkat kesil ve not al."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Ansuz",
        "steps": [
          "Face fresh air, fill your lungs completely, and intone 'Aaaaa-nnn-suuuuz', vibrating your throat and upper chest.",
          "Strip unnecessary excuses and idle complaints from your speech today; speak fewer words with greater weight.",
          "Pay close attention to any word, symbol, or question that crosses your path repeatedly today and write it down."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Ansuz",
        "steps": [
          "Vänd dig mot frisk luft, fyll lungorna helt och ljuda 'Aaaaa-nnn-suuuuz' så att strupe och bröstkorg vibrerar.",
          "Rensa bort onödiga ursäkter och tomt klagande ur ditt tal idag; tala färre ord med större tyngd.",
          "Ge akt på ett ord, ett tecken eller en fråga som återkommer under dagen och anteckna det."
        ]
      }
    },
    "closing": {
      "tr": "Nefes durursa söz biter; adını doğru koyduğun şey seninle konuşur.",
      "en": "When breath ceases, the word ends; whatever you name truly enters into dialogue with you.",
      "sv": "När andedräkten stannar tar ordet slut; det du nämner vid dess sanna namn talar till dig."
    },
    "practiceImage": "/runes/practice-ansuz.jpg"
  },
  {
    "index": 5,
    "aett": 1,
    "slug": "raido",
    "glyph": "ᚱ",
    "name": "Raido",
    "protoGermanic": "*Raidō",
    "phoneme": "r",
    "image": "/runes/rune-05-raido.jpg",
    "deities": [
      "Hermod",
      "Ing",
      "Thor"
    ],
    "subtitle": {
      "tr": "Tekerlek, Doğru Ritim, Kozmik Yasa ve Hizalanmış Yolculuk",
      "en": "The Wheel, Right Rhythm, Cosmic Order, and Aligned Journey",
      "sv": "Hjulet, Rätt Rytm, Kosmisk Ordning och Inriktad Färd"
    },
    "element": {
      "tr": "Hava ve Ateş (Kinetik Ritim)",
      "en": "Air & Fire (Kinetic Rhythm)",
      "sv": "Luft & Eld (Rörelsens Rytm)"
    },
    "poem": {
      "tr": {
        "source": "Eski İzlanda Rün Şiiri (V)",
        "quote": "“Sürüş (Reið) oturan için kutsanmış bir keyiftir ve hızlı bir yolculuktur, ama at için sıkı bir emektir.”"
      },
      "en": {
        "source": "Old Icelandic Rune Poem (V)",
        "quote": "“Riding (Reið) is a joy to the sitting rider and a swift journey, yet hard toil for the horse.”"
      },
      "sv": {
        "source": "Fornisländska rundikten (V)",
        "quote": "”Ritt (Reið) är glädje för den som sitter och rask färd, men hårt arbete för hästen.”"
      }
    },
    "text": {
      "tr": [
        "Raido araba demektir ve sürüş demektir. Taksiye binip gitmek değildir. Doğru eylemdir. Yol, yalnızca gidilen yer değildir; yolun kendisi bir varlıktır. Ritim kaçarsa araba devrilir. Adalet de bu kapıdadır, çünkü adalet toplumun doğru ritmidir.",
        "At ile sürüş burada ayrılır. At işbirliğidir. Rotayı çizen süvaridir. Panikle sağa sola koşmak kaosdur. Raido hizalanmış eylemdir: vicdanla, yasanın düzeniyle, aynı ölçüde yürümek. Yol seni düzene götürüyorsa Raido’dur.",
        "Dengeli hâli direksiyonda olmaktır. İşler tıkır tıkır gider. Doğru zamanda doğru yer. Yolculuk amaçlıdır. Hukuki süreçte hak yerini bulur. Ön bacak kısadır; rün eşit kollu bir “R” gibi çizilmez. Ölçü, çizgisinde de durur.",
        "Raido kaçış değildir ve durmak değildir. Aşırısı kontrol manyaklığıdır: her şeyi yönetmek, katı kural, “yolun sahibi benim” kibri, hız körlüğü. Yoksun yüzü yönünü kaybetmiş yapraktır. Hedefsizlik, erteleme, başlanan işin bitmemesi, bozulan biyoritim. Direksiyonu tutacak olan sensin."
      ],
      "en": [
        "Raido means wagon and it means the ride. It is not getting into a taxi and leaving. It is right action. The road is not only the place one goes. The road itself is a being. If the rhythm is lost, the wagon overturns. Justice sits at this door too, because justice is the right rhythm of a society.",
        "The horse and the ride divide here. The horse is cooperation. The rider draws the route. Running left and right in panic is chaos. Raido is aligned action: to walk at the same measure as conscience and as the order of law. If the road takes you to order, it is Raido.",
        "Its balanced state is to be at the wheel. The work goes steadily. The right time, the right place. The journey has an aim. In a legal process the right finds its place. The front leg is short. The rune is not drawn like an “R” with equal arms. The measure stands in its line too.",
        "Raido is not flight and it is not a stop. Its excess is the mania of control: managing everything, a rigid rule, the pride of “the road is mine,” the blindness of speed. Its face of lack is the leaf that has lost its direction. Aimlessness, delay, a work begun and not finished, a broken biorhythm. The one who will hold the wheel is you."
      ],
      "sv": [
        "Raido betyder vagn och det betyder ritten. Det är inte att stiga in i en taxi och åka. Det är rätt handling. Vägen är inte bara platsen man far till. Vägen själv är en varelse. Tappas rytmen välter vagnen. Rättvisa sitter också vid denna dörr, därför att rättvisa är ett samhälles rätta rytm.",
        "Hästen och ritten delas här. Hästen är samarbete. Ryttaren drar rutten. Att springa höger och vänster i panik är kaos. Raido är inriktad handling: att gå i samma mått som samvetet och som lagens ordning. För vägen dig till ordning är det Raido.",
        "Dess balanserade tillstånd är att sitta vid ratten. Arbetet går stadigt. Rätt tid, rätt plats. Färden har ett syfte. I en rättsprocess finner rätten sin plats. Frambenet är kort. Runan ritas inte som ett ”R” med lika armar. Måttet står också i dess linje.",
        "Raido är inte flykt och inte ett stopp. Dess övermått är kontrollmani: att styra allt, en stel regel, högmodet ”vägen är min”, hastighetens blindhet. Dess ansikte av brist är bladet som tappat sin riktning. Mållöshet, uppskjutande, ett arbete börjat och inte avslutat, en bruten biorytm. Den som ska hålla ratten är du."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Raidō) ve Tarihsel Rün Şiiri",
          "body": "Raido rünü Proto-Cermence ‘*Raidō’ kökünden gelir ve Elder Futhark dizgesinde ‘r’ ses değerini taşır. Eski İzlanda Rün Şiiri (V) kaynağında bu kapı şöyle mühürlenmiştir: “Sürüş (Reið) oturan için kutsanmış bir keyiftir ve hızlı bir yolculuktur, ama at için sıkı bir emektir.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Doğru zamanda doğru yerde olma, direksiyonu ele alma, hukuki ve ahlaki adaletin yerini bulması, güvenli yolculuk ve ritim. — Gölge / Tıkanmış Akış: Aşırı kontrol hırsı, ‘yolun sahibi benim’ kibri, hız körlüğü; ya da yön kaybı, bozulan uyku/yaşam ritmi ve erteleme."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Raidō) and Historical Rune Poem",
          "body": "The rune Raido derives from Proto-Germanic '*Raidō' and carries the phonetic value 'r' in the Elder Futhark. In the Old Icelandic Rune Poem (V), this door is recorded thus: “Riding (Reið) is a joy to the sitting rider and a swift journey, yet hard toil for the horse.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: Being in the right place at the right hour, taking the wheel, legal and moral justice finding its course, and rhythmic progress. — Shadow / Blocked Current: Rigid control mania, the hubris of 'owning the road', speed-blindness—or aimlessness, broken daily rhythm, and endless delay."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Raidō) och Historisk Rundikt",
          "body": "Runan Raido härstammar från urgermanskans '*Raidō' och bär ljudvärdet 'r' i den äldre futharken. I Fornisländska rundikten (V) beskrivs denna port sålunda: ”Ritt (Reið) är glädje för den som sitter och rask färd, men hårt arbete för hästen.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Att vara på rätt plats i rätt stund, att hålla ratten, rättvisans gång och rytmisk framåtrörelse. — Skuggström / Blockering: Stel kontrollmani och fartblindhet — eller riktningslöshet, bruten dygnsrytm och ständigt uppskjutande."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Raido",
        "steps": [
          "Dil ucunu damağında titreterek güçlü bir ‘Rrrrr-aiii-dooo’ sesi çıkar; ritmin omurgandan ayaklarına indiğini hisset.",
          "Bozulan günlük ritmini (uyku saati, yemek saati, çalışma saati) bugün tek bir sabit çapa etrafında yeniden hizala.",
          "Kararsız kaldığın bir konuda ‘Hangi seçenek kaçış, hangi seçenek doğru ve adil ritim?’ diye sor ve direksiyonu kır."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Raido",
        "steps": [
          "Roll the tip of your tongue against the palate in a strong 'Rrrrr-aiii-dooo', feeling the pulse travel down your spine to your feet.",
          "Realign a disrupted daily rhythm (sleep hour, meal hour, study hour) around one fixed anchor today.",
          "In a pending decision, ask 'Which path is flight, and which path is right order?' and turn the wheel accordingly."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Raido",
        "steps": [
          "Rulla tungspetsen i ett kraftfullt 'Rrrrr-aiii-dooo' och känn rytmen vandra genom ryggraden ned i fötterna.",
          "Återställ en bruten vardagsrytm (sömn, måltid, arbete) kring en fast hållpunkt idag.",
          "Inför ett beslut, fråga dig: 'Vilken väg är flykt och vilken väg är rätt ordning?' och vrid ratten dit."
        ]
      }
    },
    "closing": {
      "tr": "Tekerlek merkezine sadıksa yol sarsmaz; adalet toplumun doğru ritmidir.",
      "en": "When the wheel stays true to its hub, the road does not shake it; justice is the right rhythm of life.",
      "sv": "När hjulet är troget sitt nav skakar inte vägen det; rättvisa är livets rätta rytm."
    },
    "practiceImage": "/runes/practice-raido.jpg"
  },
  {
    "index": 6,
    "aett": 1,
    "slug": "kenaz",
    "glyph": "ᚲ",
    "name": "Kenaz",
    "protoGermanic": "*Kaunan",
    "phoneme": "k",
    "image": "/runes/rune-06-kenaz.jpg",
    "deities": [
      "Bragi",
      "Freyja",
      "Heimdall",
      "Weland"
    ],
    "subtitle": {
      "tr": "Ocak Meşalesi, Demirci Ateşi, Zanaat ve Berrak İdrak",
      "en": "The Hearth Torch, Smith's Fire, Craft, and Lucid Insight",
      "sv": "Härdens Fackla, Smedens Eld, Hantverk och Klar Insikt"
    },
    "element": {
      "tr": "Kontrollü Ocak Ateşi",
      "en": "Controlled Hearth & Forge Fire",
      "sv": "Kontrollerad Härd- och Smedjeeld"
    },
    "poem": {
      "tr": {
        "source": "Anglosakson Rün Şiiri (VI)",
        "quote": "“Meşale (Cēn) yaşayan her insana solgun ve parlak aleviyle tanıdıktır; en çok kralların içeride dinlendiği yerde yanar.”"
      },
      "en": {
        "source": "Old English Rune Poem (VI)",
        "quote": "“The torch (Cēn) is known to every living person by its pale, bright flame; it always burns where princes sit within.”"
      },
      "sv": {
        "source": "Fornengelska rundikten (VI)",
        "quote": "”Facklan (Cēn) är känd för varje levande människa genom sin klara låga; den brinner där furstar vilar därinne.”"
      }
    },
    "text": {
      "tr": [
        "Kenaz eski dilde meşaledir. Anglo-Sakson şiirinde yara ve çıbandır. Bu çelişki değil, sırrıdır. Fehu gibi orman yakan vahşi ateş değildir. Ocak ateşidir. Demircinin metali erittiği, kuyumcunun altını işlediği, bilgenin karanlık odayı aydınlattığı teknik ateş.",
        "Ateşle oynamak risklidir. Metali şekillendiren ateş, dikkatsiz ustanın elini yakar. Aydınlanma acısız olmaz. Ham demir ateşe girmeden çelik olmaz. Yanmayı göze almayan ışık saçamaz. Bilgi, kitaptan alınan soğuk veri değildir. Ateşe dokunmayı gerektirir.",
        "Dengeli hâli ampulün yandığı andır. Yetenek sanata döner. Öğrenme hızlanır. Karanlıkta yol bulunur. Soğuk bir durum ısınır. Gizli olan görünür. “İçine doğar” değil: saklanan kendini ele verir.",
        "Kenaz yangın değildir ve körlük değildir. Aşırısı tükenmişliktir: saplantı, öfke, yüksek ateş, iltihap. Yoksun yüzü “içimdeki ışık söndü”dür. Çözüm görünmez, fikir çıkmaz, ilgisizlik çöker. Kontrollü ateş bırakılırsa ya yakar ya kararır."
      ],
      "en": [
        "Kenaz is the torch in the old tongue. In the Anglo-Saxon poem it is the wound and the ulcer. This is not a contradiction. It is the secret. It is not a wild fire that burns the forest, as Fehu is. It is the hearth fire. The technical fire by which the smith melts metal, the jeweler works gold, and the wise one lights the dark room.",
        "To play with fire is a risk. The fire that shapes the metal burns the careless craftsperson’s hand. Illumination is not without pain. Raw iron does not become steel without entering the fire. Whoever will not risk the burn cannot cast light. Knowledge is not cold data taken from a book. It requires touching the fire.",
        "Its balanced state is the moment the bulb lights. Skill turns into art. Learning quickens. The way is found in the dark. A cold situation warms. What was hidden becomes visible. Not “it occurs to me.” What was hidden gives itself away.",
        "Kenaz is not a wildfire and it is not blindness. Its excess is burnout: obsession, rage, high fever, inflammation. Its face of lack is “the light inside me has gone out.” The solution is not seen, no idea comes, indifference settles. If the controlled fire is abandoned, it either burns or goes dark."
      ],
      "sv": [
        "Kenaz är facklan på det gamla språket. I den anglosaxiska dikten är den såret och bölden. Detta är ingen motsägelse. Det är hemligheten. Den är inte en vild eld som bränner skogen, som Fehu är. Den är härdens eld. Den tekniska eld med vilken smeden smälter metall, guldsmeden arbetar guld och den vise lyser upp det mörka rummet.",
        "Att leka med eld är en risk. Elden som formar metallen bränner den oförsiktiga hantverkarens hand. Upplysning är inte utan smärta. Rått järn blir inte stål utan att gå in i elden. Den som inte vågar brännas kan inte kasta ljus. Kunskap är inte kall data tagen ur en bok. Den kräver att elden berörs.",
        "Dess balanserade tillstånd är stunden då lampan tänds. Skicklighet blir konst. Lärandet skyndar. Vägen finns i mörkret. En kall situation värms. Det dolda blir synligt. Inte ”det faller mig in.” Det som var dolt avslöjar sig självt.",
        "Kenaz är inte en vildbrand och inte blindhet. Dess övermått är utbrändhet: besatthet, vrede, hög feber, inflammation. Dess ansikte av brist är ”ljuset i mig har slocknat.” Lösningen syns inte, ingen idé kommer, likgiltighet lägger sig. Överges den kontrollerade elden antingen bränner den eller mörknar den."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Kaunan) ve Tarihsel Rün Şiiri",
          "body": "Kenaz rünü Proto-Cermence ‘*Kaunan’ kökünden gelir ve Elder Futhark dizgesinde ‘k’ ses değerini taşır. Anglosakson Rün Şiiri (VI) kaynağında bu kapı şöyle mühürlenmiştir: “Meşale (Cēn) yaşayan her insana solgun ve parlak aleviyle tanıdıktır; en çok kralların içeride dinlendiği yerde yanar.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Karanlıkta kalan bir gerçeğin aydınlanması, teknik ustalık ve sanatsal üretim, hızlı öğrenme, tutkunun esere dönüşmesi. — Gölge / Tıkanmış Akış: Ateşle kendini yakma, saplantı, iltihap ve tükenmişlik (burnout); ya da içsel meşalenin sönmesi, soğukluk ve yaratıcı körlük."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Kaunan) and Historical Rune Poem",
          "body": "The rune Kenaz derives from Proto-Germanic '*Kaunan' and carries the phonetic value 'k' in the Elder Futhark. In the Old English Rune Poem (VI), this door is recorded thus: “The torch (Cēn) is known to every living person by its pale, bright flame; it always burns where princes sit within.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: Illumination of what was hidden, technical mastery and artistic craft, rapid learning, and passion forged into tangible work. — Shadow / Blocked Current: Burning oneself with obsession, fever, and burnout—or an extinguished inner torch, apathy, and creative blindness."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Kaunan) och Historisk Rundikt",
          "body": "Runan Kenaz härstammar från urgermanskans '*Kaunan' och bär ljudvärdet 'k' i den äldre futharken. I Fornengelska rundikten (VI) beskrivs denna port sålunda: ”Facklan (Cēn) är känd för varje levande människa genom sin klara låga; den brinner där furstar vilar därinne.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Belysning av det dolda, tekniskt mästerskap och skapande hantverk, snabbt lärande och lidelse som blir verk. — Skuggström / Blockering: Att bränna ut sig i besatthet och feber — eller en slocknad inre fackla, likgiltighet och skapande blindhet."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Kenaz",
        "steps": [
          "Bir mum veya ocak alevi yak (ya da zihninde canlandır); bakışını alevin mavi-sarı merkezine odaklayarak ‘Kaaaaiii-naaaaz’ sesini ver.",
          "Uzun süredir görmezden geldiğin bir sorunu ‘üzerine meşale tutulmuş’ gibi tüm çıplaklığıyla kâğıda yaz.",
          "Sahip olduğun ham bir yeteneği bugün yarım saatlik disiplinli bir zanaat pratiğiyle (yazı, çizim, üretim) işle."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Kenaz",
        "steps": [
          "Light a candle or hearth flame; focus gently on the core of the flame and intone 'Kaaaaiii-naaaaz'.",
          "Write down one avoided problem on paper as if holding a bright torch directly over it, without self-deception.",
          "Refine one raw skill today through thirty minutes of focused, disciplined craft."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Kenaz",
        "steps": [
          "Tänd ett ljus eller en härdlåga; fäst blicken vid lågans kärna och ljuda 'Kaaaaiii-naaaaz'.",
          "Skriv ned ett undviket problem på papper som om du höll en klar fackla rakt över det.",
          "Förädla en rå färdighet idag genom trettio minuters fokuserat hantverk."
        ]
      }
    },
    "closing": {
      "tr": "Orman yangını yıkar, demirci ocağı ise çeliğe biçim verir.",
      "en": "Wildfire destroys the forest, but the smith's forge shapes the steel.",
      "sv": "Skogsbranden ödelägger, men smedens härd ger stålet form."
    },
    "practiceImage": "/runes/practice-kenaz.jpg"
  },
  {
    "index": 7,
    "aett": 1,
    "slug": "gebo",
    "glyph": "ᚷ",
    "name": "Gebo",
    "protoGermanic": "*Gebō",
    "phoneme": "g",
    "image": "/runes/rune-07-gebo.jpg",
    "deities": [
      "Gefjon",
      "Vali",
      "Sjofn",
      "Odin"
    ],
    "subtitle": {
      "tr": "Kutsal Takas, Armağan, Söz Senetliği ve Kesişim",
      "en": "Sacred Exchange, the Gift, the Binding Vow, and Intersection",
      "sv": "Heligt Utbyte, Gåvan, den Bindande Eden och Skärningspunkten"
    },
    "element": {
      "tr": "Hava (Nefes ve Sözleşmenin Dengesi)",
      "en": "Air (Balance of Breath and Covenant)",
      "sv": "Luft (Andedräktens och Förbundets Jämvikt)"
    },
    "poem": {
      "tr": {
        "source": "Hávamál 42 & Anglosakson Rün Şiiri (VII)",
        "quote": "“Armağan her zaman karşılığını arar (Gjöf אey til gjafar); cömertlik onur ve itibar getirir, yoksul olana ise dayanak olur.”"
      },
      "en": {
        "source": "Hávamál 42 & Old English Rune Poem (VII)",
        "quote": "“A gift always looks for a return (Gjöf sér æ til gjafar); generosity brings honor and worth, and support to the needy.”"
      },
      "sv": {
        "source": "Hávamál 42 & Fornengelska rundikten (VII)",
        "quote": "”Gåva ser alltid mot gengåva (Gjöf sér æ til gjafar); frikostighet ger heder och stöd åt den behövande.”"
      }
    },
    "text": {
      "tr": [
        "Gebo hediye demektir. Modern dünyadaki karşılıksız hediye değildir. Viking zihninde karşılıksız hediye yoktur. Alan borçlanır, veren yönetir. İki çizgi bir noktada kesişir. İki insan birleşirse ortaklık, insan ile tanrı birleşirse kurban, eril ile dişil birleşirse aşk olur.",
        "Tersi yoktur. Çevirsen de yine aynı işarettir. Alışveriş yasasından kaçılmaz. Ne ekersen onu biçersin. Bu yasa bir köşede durmaz. Söz, yemin ve bilgi de aynı takasa girer. Almak istiyorsan vermen gerekir. En ağır hediye, egonun ortaya konmasıdır.",
        "Dengeli hâli sözünün eri olmaktır. Ağızdan çıkan senettir. Adil ortaklık, cömertlik, tutulan yemin. Bir şey kazanmak başka bir şeyi bırakmaktır. Aşk isteniyorsa bazen güçten vazgeçilir. Gebo bu hesabı gizlemez.",
        "Gebo bedava değildir ve duygusal şantaj değildir. En aşağı sayılan suç katil olmak değil, verilen sözü tutmamaktır. Söz bozulursa işaret bozulur: boğaz tıkanır, kişi toplumda görünmez olur. Sevgiyi parayla satın almak ve “ben yaptım, sen de yapacaksın” bu kapının aşırısıdır."
      ],
      "en": [
        "Gebo means gift. It is not the gift without return of the modern world. In the Viking mind there is no gift without return. The receiver is indebted. The giver governs. Two lines cut at one point. If two people join, it is partnership. If human and god join, it is offering. If masculine and feminine join, it is love.",
        "It has no reverse. Turn it and it is the same mark. There is no escape from the law of exchange. What you sow, you reap. This law does not stand in a corner. Word, vow, and knowledge enter the same exchange. If you want to receive, you must give. The heaviest gift is the ego put forward.",
        "Its balanced state is to be a person of one’s word. What leaves the mouth is a bond. A fair partnership, generosity, a vow that is kept. To gain one thing is to leave another. If love is wanted, power is sometimes given up. Gebo does not hide this account.",
        "Gebo is not free of charge and it is not emotional blackmail. The crime counted lowest is not to be a killer. It is not to keep the word that was given. If the word breaks, the mark breaks: the throat closes, the person becomes invisible in the company. Buying love with money, and “I did this, so you will do that,” are the excess of this door."
      ],
      "sv": [
        "Gebo betyder gåva. Den är inte den moderna världens gåva utan gengäld. I vikingasinnet finns ingen gåva utan gengäld. Mottagaren står i skuld. Givaren styr. Två linjer skär i en punkt. Förenas två människor är det partnerskap. Förenas människa och gud är det offer. Förenas manligt och kvinnligt är det kärlek.",
        "Den har ingen baksida. Vänd den och det är samma tecken. Det finns ingen flykt från byteslagen. Vad du sår, det skördar du. Denna lag står inte i ett hörn. Ord, ed och kunskap går in i samma byte. Vill du ta emot måste du ge. Den tyngsta gåvan är egot som läggs fram.",
        "Dess balanserade tillstånd är att vara en person av sitt ord. Det som lämnar munnen är en förbindelse. Ett rättvist partnerskap, generositet, en ed som hålls. Att vinna en sak är att lämna en annan. Önskas kärlek ges makten ibland upp. Gebo döljer inte detta konto.",
        "Gebo är inte gratis och inte känslomässig utpressning. Brottet som räknas lägst är inte att vara en dråpare. Det är att inte hålla ordet som gavs. Bryts ordet bryts tecknet: strupen sluter sig, personen blir osynlig i sällskapet. Att köpa kärlek med pengar, och ”jag gjorde detta, så ska du göra det,” är denna dörrs övermått."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Gebō) ve Tarihsel Rün Şiiri",
          "body": "Gebo rünü Proto-Cermence ‘*Gebō’ kökünden gelir ve Elder Futhark dizgesinde ‘g’ ses değerini taşır. Hávamál 42 & Anglosakson Rün Şiiri (VII) kaynağında bu kapı şöyle mühürlenmiştir: “Armağan her zaman karşılığını arar (Gjöf אey til gjafar); cömertlik onur ve itibar getirir, yoksul olana ise dayanak olur.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Adil ortaklık, iki özgür bireyin birbirini yutmadan X gibi kesişmesi, verilen sözün tutulması, alma-verme dengesi. — Gölge / Tıkanmış Akış: Borçlandırarak yönetme, duygusal şantaj (‘ben senin için saçımı süpürge ettim’), verilen sözü bozma veya tek taraflı sömürü."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Gebō) and Historical Rune Poem",
          "body": "The rune Gebo derives from Proto-Germanic '*Gebō' and carries the phonetic value 'g' in the Elder Futhark. In the Hávamál 42 & Old English Rune Poem (VII), this door is recorded thus: “A gift always looks for a return (Gjöf sér æ til gjafar); generosity brings honor and worth, and support to the needy.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: Fair partnership, two free individuals intersecting like the X-stave without consuming each other, kept vows, and balanced reciprocity. — Shadow / Blocked Current: Controlling through debt, emotional blackmail ('after all I did for you'), broken oaths, or one-sided exploitation."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Gebō) och Historisk Rundikt",
          "body": "Runan Gebo härstammar från urgermanskans '*Gebō' och bär ljudvärdet 'g' i den äldre futharken. I Hávamál 42 & Fornengelska rundikten (VII) beskrivs denna port sålunda: ”Gåva ser alltid mot gengåva (Gjöf sér æ til gjafar); frikostighet ger heder och stöd åt den behövande.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Rättvist partnerskap, två fria individer som möts likt X-staven utan att utplåna varandra, hållna löften och jämvikt. — Skuggström / Blockering: Att styra genom skuld, känslomässig utpressning, brutna eder eller ensidigt utnyttjande."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Gebo",
        "steps": [
          "Ayaklarını ve kollarını X harfi gibi çapraz açarak (Stöðul) merkez noktanı göğüs kafesinin tam ortasında hisset ve ‘Geeee-boooo’ sesini ver.",
          "Hayatındaki en önemli iki ilişkide alma-verme terazisini tart: Çok alıp az mı veriyorsun, yoksa kimse istemeden verip gizlice borçlu mu çıkarıyorsun?",
          "Daha önce verdiğin ama henüz yerine getirmediğin küçük bir sözü bugün eksiksiz tamamla."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Gebo",
        "steps": [
          "Stand with feet and arms open in the X-posture (Stöðul), feeling the intersection at the center of your chest as you intone 'Geeee-boooo'.",
          "Weigh the scale of reciprocity in your closest relationships: are you taking without return, or giving unasked to create unspoken debt?",
          "Fulfill one small promise or obligation today that you previously gave your word on."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Gebo",
        "steps": [
          "Stå med ben och armar öppna i X-ställning (Stöðul), känn skärningspunkten i bröstets mitt och ljuda 'Geeee-boooo'.",
          "Väg givandets och tagandets vågskålar i dina närmaste relationer: är utbytet fritt och rättvist?",
          "Infria idag ett litet löfte som du tidigare har gett ditt ord på."
        ]
      }
    },
    "closing": {
      "tr": "Gebo’nun tersi yoktur; verilen söz nefesin mührüdür.",
      "en": "Gebo has no reverse; the spoken word is the seal of breath.",
      "sv": "Gebo har ingen baksida; det givna ordet är andedräktens sigill."
    },
    "practiceImage": "/runes/practice-gebo.jpg"
  },
  {
    "index": 8,
    "aett": 1,
    "slug": "wunjo",
    "glyph": "ᚹ",
    "name": "Wunjo",
    "protoGermanic": "*Wunjō",
    "phoneme": "w",
    "image": "/runes/rune-08-wunjo.jpg",
    "deities": [
      "Hnoss",
      "Gersemi",
      "Freyr",
      "Odin"
    ],
    "subtitle": {
      "tr": "Kabile Sancağı, Paylaşılan Huzur, Uyum ve Aidiyet",
      "en": "The Clan Banner, Shared Peace, Harmony, and Belonging",
      "sv": "Stamfanan, Delad Frid, Samklang och Tillhörighet"
    },
    "element": {
      "tr": "Hava ve Toprak (Hasat Sonu Esintisi)",
      "en": "Air & Earth (Post-Harvest Breeze)",
      "sv": "Luft & Jord (Skördens Frid)"
    },
    "poem": {
      "tr": {
        "source": "Anglosakson Rün Şiiri (VIII)",
        "quote": "“Neşe ve huzur (Wyn), acıyı az tanıyan, refah ve kutsal bir topluluk içinde yaşayan kişinin payıdır.”"
      },
      "en": {
        "source": "Old English Rune Poem (VIII)",
        "quote": "“Joy (Wyn) belongs to one who knows little of woe, who has sufficiency and the shelter of a thriving community.”"
      },
      "sv": {
        "source": "Fornengelska rundikten (VIII)",
        "quote": "”Glädje (Wyn) njuter den som känner litet av ve, som har bärgning och en trygg gemenskaps hägn.”"
      }
    },
    "text": {
      "tr": [
        "Wunjo neşe, mükemmellik ve dilek demektir. Şekli kabile sancağına ya da meyve taşıyan dala benzer. Savaş bitmiş, tarla sürülmüş, tohum ekilmiş, hasat kalkmıştır. “Hahaha” diye sığ bir gülüş değildir. Huzur ve tamamlanmışlıktır. Her şeyin yerli yerinde olduğu o nadir an.",
        "İlk aettin son harfidir. Fehu ile başlayan, Uruz ile güçlenen, Thurisaz ile sınanan, Gebo ile bedel ödeyen yolcunun hak ettiği ödüldür. Çilenin sonundaki zafer. Gerçek neşe sahip olunan eşyada değil, hırsın bittiği ve oyunun başladığı zihindedir.",
        "Yalnızlığın bitişidir. En büyük hediye nesne değil, “sen bizdensin” denilmesidir. Ait olunan yer, mutluluk kalesidir. Kadeh dolu olsa da omuz omuza duran yoksa neşenin anlamı kalmaz. Bu neşe kişisel sarhoşluk değil, paylaşılan neşedir.",
        "Wunjo sürgün değildir ve kaçış değildir. Yoksun yüzü “buraya ait değilim”dir: kronik mutsuzluk, boşa giden emek, dost kazığı. Aşırısı uyuşturucu, alkol, sorun yokmuş gibi yapılan Pollyannacılıktır. Histeri ve yersiz coşku ödülü kapatır. Hileye başvurulursa hasat kaçırılır."
      ],
      "en": [
        "Wunjo means joy, perfection, and wish. Its shape is like a tribal banner, or a branch carrying fruit. The war has ended, the field is plowed, the seed is sown, the harvest is lifted. It is not a shallow laugh of “ha ha.” It is peace and completion. That rare moment when everything sits in its place.",
        "It is the last letter of the first aett. It is the reward earned by the traveler who began with Fehu, strengthened with Uruz, was tested with Thurisaz, and paid the price with Gebo. Victory at the end of the ordeal. Real joy is not in the goods one owns. It is in the mind where ambition has ended and play has begun.",
        "It is the end of loneliness. The greatest gift is not an object. It is being told “you are one of us.” The place one belongs to is the fortress of joy. Even if the cup is full, if there is no one standing shoulder to shoulder, the joy has no meaning. This joy is not a private intoxication. It is a shared joy.",
        "Wunjo is not exile and it is not flight. Its face of lack is “I do not belong here”: chronic unhappiness, labor gone to waste, a friend’s knife. Its excess is the drug, the alcohol, the Pollyanna act of pretending there is no problem. Hysteria and untimely excitement close the reward. If deceit is used, the harvest is missed."
      ],
      "sv": [
        "Wunjo betyder glädje, fullkomlighet och önskan. Dess form liknar en stamfana, eller en gren som bär frukt. Kriget har tagit slut, åkern är plöjd, fröet är sått, skörden är lyft. Det är inte ett grunt skratt av ”ha ha.” Det är frid och fullbordan. Det sällsynta ögonblick då allt sitter på sin plats.",
        "Den är första ättens sista bokstav. Den är lönen som förtjänats av resenären som började med Fehu, stärktes med Uruz, prövades med Thurisaz och betalade priset med Gebo. Seger vid prövningens slut. Verklig glädje sitter inte i godset man äger. Den sitter i sinnet där ärelystnaden tagit slut och leken börjat.",
        "Den är ensamhetens slut. Den största gåvan är inte ett föremål. Den är att bli tillsagd ”du är en av oss.” Platsen man hör till är glädjens borg. Även om bägaren är full, om ingen står skuldra vid skuldra, har glädjen ingen mening. Denna glädje är inte ett privat rus. Den är en delad glädje.",
        "Wunjo är inte landsflykt och inte flykt. Dess ansikte av brist är ”jag hör inte hit”: kronisk olycka, arbete som gått till spillo, en väns kniv. Dess övermått är drogen, alkoholen, Pollyanna-akten att låtsas att inget problem finns. Hysteri och otidig yra stänger lönen. Brukas svek missas skörden."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Wunjō) ve Tarihsel Rün Şiiri",
          "body": "Wunjo rünü Proto-Cermence ‘*Wunjō’ kökünden gelir ve Elder Futhark dizgesinde ‘w’ ses değerini taşır. Anglosakson Rün Şiiri (VIII) kaynağında bu kapı şöyle mühürlenmiştir: “Neşe ve huzur (Wyn), acıyı az tanıyan, refah ve kutsal bir topluluk içinde yaşayan kişinin payıdır.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Emek sonunda hak edilen iç huzuru, aynı frekanstaki insanlarla (‘kabileyle’) omuz omuza durma, yabancılaşmanın bitişi. — Gölge / Tıkanmış Akış: Gerçek sorunların üstünü örten sahte neşe (Pollyannacılık), kaçış bağımlılıkları; ya da ‘ben buraya ait değilim’ sürgün duygusu."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Wunjō) and Historical Rune Poem",
          "body": "The rune Wunjo derives from Proto-Germanic '*Wunjō' and carries the phonetic value 'w' in the Elder Futhark. In the Old English Rune Poem (VIII), this door is recorded thus: “Joy (Wyn) belongs to one who knows little of woe, who has sufficiency and the shelter of a thriving community.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: Earned inner peace after labor, standing shoulder to shoulder with kindred spirits, harmony of craft, and the end of alienation. — Shadow / Blocked Current: Forced superficial cheerfulness masking real fractures, escapist intoxication—or the exile feeling of 'I belong nowhere'."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Wunjō) och Historisk Rundikt",
          "body": "Runan Wunjo härstammar från urgermanskans '*Wunjō' och bär ljudvärdet 'w' i den äldre futharken. I Fornengelska rundikten (VIII) beskrivs denna port sålunda: ”Glädje (Wyn) njuter den som känner litet av ve, som har bärgning och en trygg gemenskaps hägn.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Förtjänt inre frid efter möda, att stå skuldra vid skuldra med likasinnade, samklang och slutet på främlingskap. — Skuggström / Blockering: Konstgjord glättighet som döljer verkliga sprickor, verklighetsflykt — eller känslan av hemlöshet och utanförskap."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Wunjo",
        "steps": [
          "Sağ elini başının yanından göğsüne doğru üçgen sancak gibi kapatarak (Wunjo formu) ‘Vuuuun-yoooo’ sesini yumuşakça titreştir.",
          "Sürekli bir sonraki hedefe koşma hırsını 10 dakikalığına durdur ve şu ana kadar tamamladığın somut işlerin hakkını ver.",
          "Seninle aynı değerleri paylaşan bir dostuna veya çalışma arkadaşına bugün içten bir takdir cümlesi kur."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Wunjo",
        "steps": [
          "Form the pennant shape of Wunjo with your right arm and gently intone 'Wuuuun-joooo', letting your shoulders drop.",
          "Pause the relentless chase for the next target for ten minutes and honor what your hands have already completed.",
          "Speak a genuine word of fellowship and appreciation today to someone who stands beside you in life or work."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Wunjo",
        "steps": [
          "Forma Wunjos vimpel med höger arm och ljuda mjukt 'Vuuuun-joooo' medan du slappnar av i axlarna.",
          "Stanna upp jakten på nästa mål i tio minuter och erkänn värdet av det du redan har fullbordat.",
          "Rikta idag ett ärligt ord av uppskattning och samhörighet till någon som står vid din sida."
        ]
      }
    },
    "closing": {
      "tr": "Gerçek neşe gürültüde değil, her şeyin yerli yerine oturduğu sessiz uyumda durur.",
      "en": "True joy dwells not in noise, but in the quiet harmony where all things sit in their rightful place.",
      "sv": "Sann glädje bor inte i larmet, utan i den stilla samklang där allt vilar på sin rätta plats."
    },
    "practiceImage": "/runes/practice-wunjo.jpg"
  },
  {
    "index": 9,
    "aett": 2,
    "slug": "hagalaz",
    "glyph": "ᚺ",
    "name": "Hagalaz",
    "protoGermanic": "*Hagalaz",
    "phoneme": "h",
    "image": "/runes/rune-09-hagalaz.jpg",
    "deities": [
      "Hel",
      "Heimdall"
    ],
    "subtitle": {
      "tr": "Gökten İnen Dolu Tanesi, Kırılma ve Kristal Tohum",
      "en": "The Hailstone from the Sky, Rupture, and the Crystalline Seed",
      "sv": "Hagelkorn från Skyn, Genombrott och det Kristalliska Fröet"
    },
    "element": {
      "tr": "Buz ve Fırtına (Altıgen Su Kristali)",
      "en": "Ice & Storm (Hexagonal Water Crystal)",
      "sv": "Is & Storm (Sexuddig Iskristall)"
    },
    "poem": {
      "tr": {
        "source": "Eski Norveç & Anglosakson Rün Şiiri (IX)",
        "quote": "“Dolu (Hagall) tahılların en soğuğudur; gökyüzü rüzgârla savurur onu, sonra eriyip suya dönüşür.”"
      },
      "en": {
        "source": "Old Norwegian & Old English Rune Poems (IX)",
        "quote": "“Hail (Hagall) is the coldest of grains; the wind whirls it from heaven, and then it melts into water.”"
      },
      "sv": {
        "source": "Fornnorska & fornengelska rundikterna (IX)",
        "quote": "”Hagel (Hagall) är det kallaste av korn; vinden vräker det från skyn, och sedan smälter det till vatten.”"
      }
    },
    "text": {
      "tr": [
        "Hagalaz dolu demektir. İki ayrı dünyayı çapraz bir kiriş bağlar. Gökten düşen buz tanesi ekinini ve çatını döver. İlk bakışta felakettir. Kuzeyli bilir: dolu donmuş sudur. Eridiğinde toprağa karışır ve gelecek bereketin suyunu taşır.",
        "Kontrol dışı değişimdir. Plan ve önlem işlemez. Geldiğinde durulur ve geçmesi beklenir. Kaderin en sert müdahalesidir. İkinci aett burada açılır. Konfor biter. Güvenlik değil, dayanıklılık konuşulur. Hayat pamukta tutmayı bırakır; örse koyar.",
        "Tersi yoktur. Nasıl tutarsan tut, buz parçasıdır. “Neden ben” anlamsızdır. Fırtına tesadüf değildir. Geçmiş, geleceği şekillendirmek için zorunlu müdahaleyi yapar. Dolu yağarken gökle pazarlık edilmez. Öğrettiği şey mutlak teslimiyettir. Karma niyete değil, eyleme bakar. İyi an hatırına sınır ihlaline göz yummak da borç yazar.",
        "Hagalaz birine tutulan beddua değildir ve sonsuz felaket değildir. Dengeli hâli uyanıştır: zincir kırılır, hapishane sanılan konfor yıkılır, gereksiz olan elenir. Gölgesi iflas, ayrılık, kaza ve kurban psikolojisidir. Kronik yüzü kriz üreterek beslenmektir. Dolu erir. Su, darbenin içinden çıkar."
      ],
      "en": [
        "Hagalaz means hail. A diagonal beam binds two separate worlds. The grain of ice that falls from the sky beats the crop and the roof. At first look it is disaster. The northerner knows: hail is frozen water. When it melts it enters the soil and carries the water of a future fertility.",
        "It is change outside control. Plan and precaution do not work. When it comes, one stands and waits for it to pass. It is fate’s hardest intervention. The second aett opens here. Comfort ends. What is spoken is not safety. It is endurance. Life stops keeping you in cotton. It puts you on the anvil.",
        "It has no reverse. However you hold it, it is a piece of ice. “Why me” is meaningless. The storm is not chance. The past makes the necessary intervention in order to shape the future. While hail falls, one does not bargain with the sky. What it teaches is absolute surrender. Karma looks at the action, not the intention. To ignore a breached limit for the sake of a good moment also writes a debt.",
        "Hagalaz is not a curse aimed at a person and it is not an endless disaster. Its balanced state is waking: the chain breaks, the comfort mistaken for a prison falls, what is unnecessary is sifted out. Its shadow is bankruptcy, separation, accident, and the mind of the victim. Its chronic face is feeding by producing crisis. Hail melts. The water comes out of the blow."
      ],
      "sv": [
        "Hagalaz betyder hagel. En diagonal bjälke binder två skilda världar. Iskornet som faller från himlen piskar skörden och taket. Vid första ögonkastet är det katastrof. Nordbon vet: hagel är fruset vatten. När det smälter går det in i jorden och bär vattnet till en kommande fruktsamhet.",
        "Den är förändring utanför kontroll. Plan och försiktighet fungerar inte. När den kommer står man och väntar på att den ska gå över. Den är ödets hårdaste ingrepp. Den andra ätten öppnas här. Komforten tar slut. Det som talas är inte trygghet. Det är uthållighet. Livet slutar hålla dig i bomull. Det lägger dig på städet.",
        "Den har ingen baksida. Hur du än håller den är den en isbit. ”Varför jag” är meningslöst. Stormen är inte slump. Det förflutna gör det nödvändiga ingreppet för att forma framtiden. Medan hagel faller förhandlar man inte med himlen. Det den lär är absolut överlämnande. Karma ser på handlingen, inte på avsikten. Att bortse från en bruten gräns för en god stunds skull skriver också en skuld.",
        "Hagalaz är inte en förbannelse riktad mot en person och inte en oändlig katastrof. Dess balanserade tillstånd är uppvaknande: kedjan bryts, komforten som misstogs för ett fängelse faller, det onödiga sållas bort. Dess skugga är konkurs, separation, olycka och offrets sinne. Dess kroniska ansikte är att livnära sig genom att framkalla kris. Hagel smälter. Vattnet kommer ut ur slaget."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Hagalaz) ve Tarihsel Rün Şiiri",
          "body": "Hagalaz rünü Proto-Cermence ‘*Hagalaz’ kökünden gelir ve Elder Futhark dizgesinde ‘h’ ses değerini taşır. Eski Norveç & Anglosakson Rün Şiiri (IX) kaynağında bu kapı şöyle mühürlenmiştir: “Dolu (Hagall) tahılların en soğuğudur; gökyüzü rüzgârla savurur onu, sonra eriyip suya dönüşür.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Sahte konfor alanını yıkan ani uyanış, çürümüş yapıların temizlenmesi, krizin içinden doğan özgürleşme ve gelecek bereketin suyu. — Gölge / Tıkanmış Akış: Şok karşısında kurban psikolojisine gömülme (‘neden hep benim başıma geliyor?’), yıkıma direnirken kırılma veya sürekli kaos üretme."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Hagalaz) and Historical Rune Poem",
          "body": "The rune Hagalaz derives from Proto-Germanic '*Hagalaz' and carries the phonetic value 'h' in the Elder Futhark. In the Old Norwegian & Old English Rune Poems (IX), this door is recorded thus: “Hail (Hagall) is the coldest of grains; the wind whirls it from heaven, and then it melts into water.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: Sudden awakening that shatters false comfort, clearing of decayed structures, liberation through crisis, and water for future growth. — Shadow / Blocked Current: Sinking into victimhood ('why does this happen to me?'), snapping by resisting inevitable change, or addictedly manufacturing drama."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Hagalaz) och Historisk Rundikt",
          "body": "Runan Hagalaz härstammar från urgermanskans '*Hagalaz' och bär ljudvärdet 'h' i den äldre futharken. I Fornnorska & fornengelska rundikterna (IX) beskrivs denna port sålunda: ”Hagel (Hagall) är det kallaste av korn; vinden vräker det från skyn, och sedan smälter det till vatten.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Plötsligt uppvaknande som krossar falsk trygghet, rensning av murkna strukturer och smältvatten för ny växt. — Skuggström / Blockering: Att fastna i offerroll ('varför drabbar detta mig?'), att brytas genom att streta emot det oundvikliga eller att skapa ständig kris."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Hagalaz",
        "steps": [
          "Soğuk suyla yüzünü ve bileklerini yıka; nefes verirken ‘Haaa-gaaa-laaaz’ sesini rüzgâr uğultusu gibi çıkar.",
          "Hayatında kontrol edemediğin bir kaybı veya krizi ‘dolu fırtınası’ olarak kabul et: Gökle kavga etmeyi bırak.",
          "Kendine şu soruyu sor: ‘Bu fırtına eriyip suya dönüştüğünde, toprağımda hangi yeni tohumu besleyecek?’"
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Hagalaz",
        "steps": [
          "Wash your face and wrists with cold water; exhale with a breathy 'Haaa-gaaa-laaaz' like wind through pines.",
          "Acknowledge one disruption beyond your control as hail from the sky: cease arguing with the storm.",
          "Ask yourself plainly: 'When this ice melts into water, what new seed in my ground will it nourish?'"
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Hagalaz",
        "steps": [
          "Skölj ansikte och handleder i kallt vatten; andas ut med ett vindlikt 'Haaa-gaaa-laaaz'.",
          "Erkänn en omvälvning bortom din kontroll som hagel från skyn: sluta gräla med stormen.",
          "Fråga dig själv: 'När denna is smälter till vatten, vilket nytt frö i min jord ska den ge näring åt?'"
        ]
      }
    },
    "closing": {
      "tr": "Dolu yağarken gökle pazarlık edilmez; fırtına geçer, eriyen buz toprağı sular.",
      "en": "One does not bargain with the sky while hail falls; the storm passes, and melted ice waters the earth.",
      "sv": "Man köpslår inte med himlen medan haglet faller; stormen drar förbi och smält is vattnar jorden."
    },
    "practiceImage": "/runes/practice-hagalaz.jpg"
  },
  {
    "index": 10,
    "aett": 2,
    "slug": "nauthiz",
    "glyph": "ᚾ",
    "name": "Nauthiz",
    "protoGermanic": "*Naudiz",
    "phoneme": "n",
    "image": "/runes/rune-10-nauthiz.jpg",
    "deities": [
      "Skuld",
      "Nott"
    ],
    "subtitle": {
      "tr": "Sürtünme Ateşi, Zorunluluk, Sabırlı Direnç ve İrade",
      "en": "The Friction Fire, Necessity, Patient Endurance, and Will",
      "sv": "Friktionselden, Nödvändighet, Tålmodigt Motstånd och Vilja"
    },
    "element": {
      "tr": "Ateş (İki Kuru Dalın Sürtünme Kıvılcımı)",
      "en": "Fire (Spark of Two Dry Sticks Rubbing)",
      "sv": "Eld (Gnistan ur Två Torra Grenar)"
    },
    "poem": {
      "tr": {
        "source": "Anglosakson Rün Şiiri (X)",
        "quote": "“Zorunluluk (Nȳd) göğsü daraltır; yine de insan zamanında kulak verirse çoğu kez yardıma ve kurtuluşa dönüşür.”"
      },
      "en": {
        "source": "Old English Rune Poem (X)",
        "quote": "“Need (Nȳd) constricts the chest; yet to the children of men it often becomes a help and salvation if heeded in time.”"
      },
      "sv": {
        "source": "Fornengelska rundikten (X)",
        "quote": "”Nöd (Nȳd) trycker över bröstet; dock blir den ofta till hjälp och räddning för den som ger akt i tid.”"
      }
    },
    "text": {
      "tr": [
        "Nauthiz ihtiyaç, yoksunluk ve mecburiyettir. Şekli haç değildir. İki dalın birbirine sürtünmesidir. Olmayanın rünüdür. İstenen elde değilken duyulan yakıcı boşluk. O boşluk öldürmez. Harekete zorlar.",
        "Ateş nasıl çıkar? İki kuru dal birbirini yiyerek ısınır ve alev alır. Konfor alanında ateş yakılmaz. Yanmak istiyorsan sürtünmek zorundasın. Bu rün saldırı değildir ve büyüme de değildir. Hayatta kalma rünüdür. Baskı altında elmasa dönüşmek, yokluktan varlık çıkarmak buradadır.",
        "Hareketi şikâyet değil, dirençtir. “Yoruldum” deme lüksünün olmadığı andır. Bırakırsan sevdiğin şey yanar. Sessiz ve ağır bir dayanmadır. Bağımlılık bu kapıda kırılır: istenen şey iradenin kendisi değildir. İrade, açlığın yerine geçer.",
        "Nauthiz kader diye üstüne çöken bir kimlik değildir. Gölgesi öğrenilmiş çaresizliktir: sürekli şikâyet, harekete geçmemek, “elimden bir şey gelmez.” Aşırısı kendine eziyettir. Hayattan keyfi reddetmek, hep zoru seçmek. Sürtünme varsa ateş vardır. Sürtünme yoksa yalnızca yokluk kalır."
      ],
      "en": [
        "Nauthiz is need, lack, and necessity. Its shape is not a cross. It is two sticks rubbing against each other. It is the rune of what is not. The burning gap felt when what is wanted is not in hand. That gap does not kill. It forces movement.",
        "How does fire come? Two dry sticks eat each other, heat, and take flame. Fire is not lit in the comfort zone. If you want to burn, you must rub. This rune is not attack and it is not growth. It is the rune of staying alive. To turn into diamond under pressure, to bring a thing out of lack, sits here.",
        "Its movement is not complaint. It is resistance. It is the moment when there is no luxury of saying “I am tired.” If you let go, the thing you love burns. It is a silent and heavy endurance. Addiction breaks at this door: the thing wanted is not the will itself. The will takes the place of the hunger.",
        "Nauthiz is not an identity collapsed onto you as fate. Its shadow is learned helplessness: constant complaint, not moving, “nothing can come from my hand.” Its excess is self-torment. Refusing pleasure in life, always choosing the hard. If there is friction, there is fire. If there is no friction, only lack remains."
      ],
      "sv": [
        "Nauthiz är behov, brist och nödvändighet. Dess form är inte ett kors. Den är två pinnar som gnids mot varandra. Den är runan för det som inte finns. Den brännande tomheten när det önskade inte är i handen. Den tomheten dödar inte. Den tvingar rörelse.",
        "Hur kommer eld? Två torra pinnar äter varandra, hettas och tar låga. Eld tänds inte i komfortzonen. Vill du brinna måste du gnida. Denna runa är inte angrepp och inte växt. Den är runan för att förbli vid liv. Att bli diamant under tryck, att få fram en sak ur brist, sitter här.",
        "Rörelsen är inte klagan. Den är motstånd. Den är stunden då det inte finns lyx att säga ”jag är trött.” Släpper du brinner det du älskar. Det är en tyst och tung uthållighet. Beroende bryts vid denna dörr: det önskade är inte viljan själv. Viljan tar hungerns plats.",
        "Nauthiz är inte en identitet som sjunkit över dig som öde. Dess skugga är inlärd hjälplöshet: ständig klagan, att inte röra sig, ”inget kan komma ur min hand.” Dess övermått är självplåga. Att vägra nöje i livet, att alltid välja det svåra. Finns friktion finns eld. Finns ingen friktion blir bara brist kvar."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Naudiz) ve Tarihsel Rün Şiiri",
          "body": "Nauthiz rünü Proto-Cermence ‘*Naudiz’ kökünden gelir ve Elder Futhark dizgesinde ‘n’ ses değerini taşır. Anglosakson Rün Şiiri (X) kaynağında bu kapı şöyle mühürlenmiştir: “Zorunluluk (Nȳd) göğsü daraltır; yine de insan zamanında kulak verirse çoğu kez yardıma ve kurtuluşa dönüşür.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Yokluktan ve darlıktan yaratıcı çözüm çıkarma, bağımlılıkları kırma, şikâyeti bırakıp öz disipline geçme, baskı altında elmaslaşma. — Gölge / Tıkanmış Akış: Öğrenilmiş çaresizlik, sürekli sızlanma, kendini acındırma; ya da kendine gereksiz çile çektirme ve aşırı sertlik."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Naudiz) and Historical Rune Poem",
          "body": "The rune Nauthiz derives from Proto-Germanic '*Naudiz' and carries the phonetic value 'n' in the Elder Futhark. In the Old English Rune Poem (X), this door is recorded thus: “Need (Nȳd) constricts the chest; yet to the children of men it often becomes a help and salvation if heeded in time.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: Forging creative solutions out of scarcity, breaking addictions, replacing complaint with self-discipline, and turning pressure into diamond. — Shadow / Blocked Current: Learned helplessness, chronic complaining, self-pity—or harsh self-mortification that refuses all rest."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Naudiz) och Historisk Rundikt",
          "body": "Runan Nauthiz härstammar från urgermanskans '*Naudiz' och bär ljudvärdet 'n' i den äldre futharken. I Fornengelska rundikten (X) beskrivs denna port sålunda: ”Nöd (Nȳd) trycker över bröstet; dock blir den ofta till hjälp och räddning för den som ger akt i tid.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Att smida lösningar ur brist, bryta beroenden, byta klagan mot självdisciplin och bli diamant under tryck. — Skuggström / Blockering: Inlärd hjälplöshet, ständig klagan och självömkan — eller onödig självplåga som vägrar vila."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Nauthiz",
        "steps": [
          "İki avuç içini birbirine hızla sürterek ısıt (Nauthiz’in sürtünme ateşi); burnundan ‘Nnnnn-auuuu-thiiiz’ sesini titreştir.",
          "Bugün şikâyet ettiğin bir kısıtlamayı (‘vaktim yok, imkânım yok’) yaz ve ‘Bu darlık bana hangi kası geliştirmemi emrediyor?’ diye sor.",
          "Seni zayıflatan küçük bir alışkanlığa/dürtüye bugün 24 saat boyunca bilinçli olarak ‘Hayır’ diyerek irade ateşini yak."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Nauthiz",
        "steps": [
          "Rub both palms briskly together until hot (the friction fire of Nauthiz) and hum 'Nnnnn-auuuu-thiiiz' through your nasal cavity.",
          "Write down one constraint you complain about and ask: 'What muscle is this limitation commanding me to strengthen?'",
          "Deny one weakening habit or impulse for 24 hours today to kindle the fire of sovereign will."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Nauthiz",
        "steps": [
          "Gnid handflatorna kraftigt mot varandra tills de blir heta (Nauthiz friktionseld) och ljuda 'Nnnnn-auuuu-thiiiz'.",
          "Skriv ned en begränsning du klagar över och fråga: 'Vilken styrka tvingar denna brist mig att utveckla?'",
          "Avstå medvetet från en försvagande vana under 24 timmar idag för att tända viljans eld."
        ]
      }
    },
    "closing": {
      "tr": "Konfor alanında kıvılcım çıkmaz; iki kuru dal birbirine sürtünerek alev alır.",
      "en": "No spark is struck in comfort; two dry sticks take flame by rubbing against one another.",
      "sv": "Ingen gnista slås i bekvämlighet; två torra grenar tar eld genom friktion."
    },
    "practiceImage": "/runes/practice-nauthiz.jpg"
  },
  {
    "index": 11,
    "aett": 2,
    "slug": "isa",
    "glyph": "ᛁ",
    "name": "Isa",
    "protoGermanic": "*Īsaz",
    "phoneme": "i",
    "image": "/runes/rune-11-isa.jpg",
    "deities": [
      "Skadi",
      "Rind",
      "Verthandi"
    ],
    "subtitle": {
      "tr": "Buz Sütunu, Mutlak Duruş, Odak ve Soğukkanlı Bilgelik",
      "en": "The Pillar of Ice, Absolute Stance, Focus, and Cool Wisdom",
      "sv": "Ispelaren, Orubblig Hållning, Fokus och Sval Visdom"
    },
    "element": {
      "tr": "Buz (Yoğunlaşmış ve Sabitlenmiş Su)",
      "en": "Ice (Condensed and Still Water)",
      "sv": "Is (Förtätat och Stilla Vatten)"
    },
    "poem": {
      "tr": {
        "source": "Eski Norveç & Anglosakson Rün Şiiri (XI)",
        "quote": "“Buz (Íss) geniş köprü diye anılır; cam gibi parlar, soğuktur ve kaygandır, ama kör olana yol arkadaşı चाहır.”"
      },
      "en": {
        "source": "Old Norwegian & Old English Rune Poems (XI)",
        "quote": "“Ice (Íss) we call the broad bridge; it glistens clear as glass, cold and exceedingly slippery.”"
      },
      "sv": {
        "source": "Fornnorska & fornengelska rundikterna (XI)",
        "quote": "”Is (Íss) kallas den breda bron; den glänser klar som glas, kall och ytterst hal.”"
      }
    },
    "text": {
      "tr": [
        "Isa buz demektir. Yukarıdan aşağı tek çizgidir. Alfabedeki en sade ve en tehlikeli biçim. Akan suyun, duygunun ve hayatın donarak katılaşmasıdır. Bu bir ölüm değildir. Duraklama ve korumadır. Buzun altındaki balık ölmez. Yavaşlar.",
        "Aynı çizgi “ben”dir. Ayakta duran insan. Fırtınada eğilmeyen, bükülmeyen, yalnızca duran irade. Tanrılardan yaşlıdır. Ateş yok eder ve dönüştürür. Buz olduğu gibi saklar. Travma, çocukluk, atadan gelen kayıt ölmez. Donar. Sıcaklıkta hayat, soğuklukta bilgelik vardır. Sürekli heyecan yüzeyde bırakır. Derinleşmek için soğumak gerekir.",
        "Tersi yoktur. Sütundur. Dengeli hâli odak, soğukkanlılık, panikte sakin duruştur. İrade tek noktaya toplanır. “Buradayım ve yıkılmıyorum.” Bireysellik bu çizgidedir.",
        "Isa yıl değildir ve sonsuz don değildir. Gölgesi yalnızlık, empatinin kesilmesi, kalbin buz tutması, yalnızca ben demek, ertelemek, hayatın durmasıdır. Aşırısı donakalmadır. Tutulması gereken yerde çözülürse dağılır. Çözülmesi gereken yerde tutulursa hayat durur."
      ],
      "en": [
        "Isa means ice. It is a single line from above downward. The plainest and most dangerous form in the alphabet. It is flowing water, feeling, and life hardening by freezing. This is not a death. It is a pause and a protection. The fish under the ice does not die. It slows.",
        "The same line is “I.” The human standing. A will that does not bend in the storm, does not twist, only stands. It is older than the gods. Fire destroys and transforms. Ice keeps a thing as it is. Trauma, childhood, the record that comes from the ancestor do not die. They freeze. In warmth there is life. In cold there is wisdom. Constant excitement leaves one on the surface. To go deep, one must cool.",
        "It has no reverse. It is a column. Its balanced state is focus, cool-headedness, a calm stance in panic. The will is gathered to one point. “I am here and I am not falling.” Individuality is on this line.",
        "Isa is not the year and it is not an endless freeze. Its shadow is loneliness, the cut of empathy, the heart taking ice, saying only I, delay, life stopping. Its excess is freezing in place. If it thaws where it should be held, things scatter. If it is held where it should thaw, life stops."
      ],
      "sv": [
        "Isa betyder is. Den är en enda linje uppifrån och ner. Den enklaste och farligaste formen i alfabetet. Den är rinnande vatten, känsla och liv som hårdnar genom att frysa. Detta är inte en död. Det är en paus och ett skydd. Fisken under isen dör inte. Den saktar.",
        "Samma linje är ”jag.” Människan som står. En vilja som inte böjs i stormen, inte vrids, bara står. Den är äldre än gudarna. Eld förstör och förvandlar. Is bevarar en sak som den är. Trauma, barndom, den uppteckning som kommer från förfadern dör inte. De fryser. I värme finns liv. I kyla finns visdom. Ständig upphetsning lämnar en på ytan. För att gå djupt måste man svalna.",
        "Den har ingen baksida. Den är en pelare. Dess balanserade tillstånd är fokus, kallblodighet, en lugn hållning i panik. Viljan samlas till en punkt. ”Jag är här och jag faller inte.” Individualiteten ligger på denna linje.",
        "Isa är inte året och inte en oändlig köld. Dess skugga är ensamhet, empatins avbrott, hjärtat som tar is, att bara säga jag, uppskjutande, livet som stannar. Dess övermått är att frysa på stället. Töar den där den borde hållas skingras saker. Hålls den där den borde töa stannar livet."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Īsaz) ve Tarihsel Rün Şiiri",
          "body": "Isa rünü Proto-Cermence ‘*Īsaz’ kökünden gelir ve Elder Futhark dizgesinde ‘i’ ses değerini taşır. Eski Norveç & Anglosakson Rün Şiiri (XI) kaynağında bu kapı şöyle mühürlenmiştir: “Buz (Íss) geniş köprü diye anılır; cam gibi parlar, soğuktur ve kaygandır, ama kör olana yol arkadaşı चाहır.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Kriz ortasında sarsılmaz soğukkanlılık, duygusal fırtınayı dondurup net görme, sağlıklı bekleme, dağılan dikkati tek çizgide toplama. — Gölge / Tıkanmış Akış: Duygusal donukluk, empati kaybı, yalnızlaşma, inatçı ego katılığı veya harekete geçilmesi gereken anda korkudan donakalma."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Īsaz) and Historical Rune Poem",
          "body": "The rune Isa derives from Proto-Germanic '*Īsaz' and carries the phonetic value 'i' in the Elder Futhark. In the Old Norwegian & Old English Rune Poems (XI), this door is recorded thus: “Ice (Íss) we call the broad bridge; it glistens clear as glass, cold and exceedingly slippery.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: Unshakeable composure in the eye of a storm, cooling emotional heat to see clearly, strategic pause, and single-pointed focus. — Shadow / Blocked Current: Emotional numbness, loss of empathy, isolation, rigid ego-stubbornness, or freezing in paralysis when action is required."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Īsaz) och Historisk Rundikt",
          "body": "Runan Isa härstammar från urgermanskans '*Īsaz' och bär ljudvärdet 'i' i den äldre futharken. I Fornnorska & fornengelska rundikterna (XI) beskrivs denna port sålunda: ”Is (Íss) kallas den breda bron; den glänser klar som glas, kall och ytterst hal.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Orubblig kallblodighet mitt i stormen, att kyla ned känslohetta för att se klart, strategisk vila och samlat fokus. — Skuggström / Blockering: Känslomässig kyla, brist på empati, isolering, stel envishet eller handlingsförlamning."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Isa",
        "steps": [
          "Ayaklarını birleştirip kollarını yanlarına yapıştırarak tam bir dikey buz sütunu (ᛁ) gibi 2 dakika kıpırdamadan dur.",
          "Başının tepesinden omurgan boyunca inen berrak bir ‘İiiii-saaaa’ sesi titreştir.",
          "Seni kışkırtan veya acele karar vermeye zorlayan bir durumda bugün hemen tepki verme; 24 saat soğumaya bırak."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Isa",
        "steps": [
          "Stand with feet together and arms at your sides like the vertical ice-pillar (ᛁ) in complete stillness for two minutes.",
          "Intone a clear, piercing 'Iiiii-saaaa' running down the vertical line from crown to heels.",
          "When provoked or pressured into a rushed reaction today, refuse the bait and let the matter cool for 24 hours."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Isa",
        "steps": [
          "Stå med samlade fötter och armarna längs sidorna likt den lodräta ispelaren (ᛁ) i fullständig stillhet under två minuter.",
          "Ljuda ett klart 'Iiiii-saaaa' längs den vertikala linjen från hjässa till hälar.",
          "När du provoceras eller pressas till ett förhastat svar idag, avstå från omedelbar reaktion och låt saken svalna ett dygn."
        ]
      }
    },
    "closing": {
      "tr": "Sıcaklıkta hareket, soğuklukta berraklık vardır; buzun altındaki su baharı bekler.",
      "en": "In warmth there is motion, in cold there is clarity; the water beneath the ice awaits the spring.",
      "sv": "I värme finns rörelse, i kyla finns klarhet; vattnet under isen väntar på våren."
    },
    "practiceImage": "/runes/practice-isa.jpg"
  },
  {
    "index": 12,
    "aett": 2,
    "slug": "jera",
    "glyph": "ᛃ",
    "name": "Jera",
    "protoGermanic": "*Jēran",
    "phoneme": "j (y)",
    "image": "/runes/rune-12-jera.jpg",
    "deities": [
      "Sif",
      "Gefjon",
      "Freyr",
      "Verdandi",
      "Baldur",
      "Hodur"
    ],
    "subtitle": {
      "tr": "Mevsim Çarkı, Sabırlı Hasat ve Ektiğini Biçme Yasası",
      "en": "The Seasonal Wheel, Patient Harvest, and the Law of Reaping",
      "sv": "Årshjulet, Tålmodig Skörd och Såddens Lag"
    },
    "element": {
      "tr": "Toprak (Dört Mevsim Döngüsü)",
      "en": "Earth (Four-Season Agricultural Cycle)",
      "sv": "Jord (De Fyra Årstidernas Kretslopp)"
    },
    "poem": {
      "tr": {
        "source": "Eski Norveç Rün Şiiri (XII)",
        "quote": "“Bereketli yıl (Ár) insanların kazancıdır; iyi bir yaz mevsimi toprağı cömert kılar.”"
      },
      "en": {
        "source": "Old Norwegian Rune Poem (XII)",
        "quote": "“A fruitful year (Ár) is a boon to men; a good summer makes the harvest generous.”"
      },
      "sv": {
        "source": "Fornnorska rundikten (XII)",
        "quote": "”Ett gott år (Ár) är människors gagn; en god sommar ger riklig äring.”"
      }
    },
    "text": {
      "tr": [
        "Jera, modern insanın en çok zorlandığı kavramdır: sabır ve süreç. Eski dilde yıl ve iyi hasat demektir. Fehu ham enerjiyse, Jera o enerjinin toprağa ekilmesi, bakılması, olgunlaşması ve biçilmesidir. Şans ya da piyango değildir. Hak edilen ödüldür.",
        "Ne ekersen onu biçersin. Niyet burada ikinci plandadır. Eylem esastır. Tarlaya ne girdiyse, dua etsen de onu biçersin. Hamilelik kendi ayını ister. Tohum, kışın soğuğunu yemeden filiz vermez. Jera sürecin gardiyanıdır. Acele ettirilemez.",
        "Çarkın durmayı da bilmesi gerekir. Dinlenme yoksa, nadas yoksa, değirmen durmadan döner ve bereket felakete döner. Sürekli çalışan toprak ölür. Üretilen şey, üreteni yıkan bir orduya dönüşür. Doğal ritim çalışma ile durmanın dengesidir.",
        "Jera bir günde istenen mucize değildir ve kriz değildir. Dengeli hâli bereketli yıl ve barıştır: emeğin maddeye dönüşmesi. Bozuk hâli dalında çürüyen meyvedir. Ertelenen iş zehir biriktirir. Yoksun yüzü kıtlıktır: ne kadar çalışılsa da toprağın cevap vermemesi. Döngüye saygısızlık bunu tetikler."
      ],
      "en": [
        "Jera is the concept the modern human struggles with most: patience and process. In the old tongue it means year and good harvest. If Fehu is raw energy, Jera is that energy sown in the soil, tended, ripened, and reaped. It is not luck or a lottery. It is the reward that was earned.",
        "What you sow, you reap. Intention is secondary here. Action is the substance. Whatever entered the field, you reap it even if you pray. A pregnancy wants its own months. A seed does not sprout without eating the cold of winter. Jera is the warden of the process. It cannot be hurried.",
        "The wheel must also know how to stop. If there is no rest, if there is no fallow, the mill turns without stopping and fertility turns to disaster. Soil that is worked without cease dies. What is produced becomes an army that destroys the producer. Natural rhythm is the balance of work and of stopping.",
        "Jera is not a miracle wanted in one day and it is not a crisis. Its balanced state is a fertile year and peace: labor turned into matter. Its broken state is fruit rotting on the branch. Postponed work stores poison. Its face of lack is famine: however much one works, the soil does not answer. Disrespect for the cycle triggers this."
      ],
      "sv": [
        "Jera är begreppet den moderna människan kämpar mest med: tålamod och process. På det gamla språket betyder det år och god skörd. Är Fehu rå energi är Jera den energin sådd i jorden, vårdad, mognad och skördad. Den är inte tur eller ett lotteri. Den är lönen som förtjänades.",
        "Vad du sår, det skördar du. Avsikt är sekundär här. Handling är substansen. Vad som än gick in i åkern skördar du det även om du ber. En graviditet vill ha sina egna månader. Ett frö gror inte utan att äta vinterns kyla. Jera är processens väktare. Den kan inte skyndas.",
        "Hjulet måste också veta hur det stannar. Finns ingen vila, finns ingen träda, vänder kvarnen utan att stanna och fruktsamheten blir katastrof. Jord som bearbetas utan uppehåll dör. Det som produceras blir en armé som förstör producenten. Naturlig rytm är balansen mellan arbete och att stanna.",
        "Jera är inte ett mirakel önskat på en dag och inte en kris. Dess balanserade tillstånd är ett fruktbart år och frid: arbete vänt till materia. Dess brutna tillstånd är frukt som ruttnar på grenen. Uppskjutet arbete lagrar gift. Dess ansikte av brist är hungersnöd: hur mycket man än arbetar svarar jorden inte. Missaktning för cykeln utlöser detta."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Jēran) ve Tarihsel Rün Şiiri",
          "body": "Jera rünü Proto-Cermence ‘*Jēran’ kökünden gelir ve Elder Futhark dizgesinde ‘j (y)’ ses değerini taşır. Eski Norveç Rün Şiiri (XII) kaynağında bu kapı şöyle mühürlenmiştir: “Bereketli yıl (Ár) insanların kazancıdır; iyi bir yaz mevsimi toprağı cömert kılar.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Uzun süreli emeğin meyve vermesi, doğal zamanlamaya (Kairos) uyum, adil ödül, tarım ve çalışma-dinlenme dengesi. — Gölge / Tıkanmış Akış: Tohumu ektikten ertesi gün toprağı eşeleyen sabırsızlık, mevsimsiz zorlama; ya da nadası unutup toprağı ve bedeni tüketme."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Jēran) and Historical Rune Poem",
          "body": "The rune Jera derives from Proto-Germanic '*Jēran' and carries the phonetic value 'j (y)' in the Elder Futhark. In the Old Norwegian Rune Poem (XII), this door is recorded thus: “A fruitful year (Ár) is a boon to men; a good summer makes the harvest generous.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: Long-term labor bearing fruit, alignment with natural timing, earned reward, and the healthy rhythm of work and fallow rest. — Shadow / Blocked Current: Impatience that digs up the seed the day after planting, forcing out of season—or refusing fallow rest until soil and body are exhausted."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Jēran) och Historisk Rundikt",
          "body": "Runan Jera härstammar från urgermanskans '*Jēran' och bär ljudvärdet 'j (y)' i den äldre futharken. I Fornnorska rundikten (XII) beskrivs denna port sålunda: ”Ett gott år (Ár) är människors gagn; en god sommar ger riklig äring.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Långsiktigt arbete som bär frukt, samklang med naturens tid, välförtjänt lön och balansen mellan arbete och träda. — Skuggström / Blockering: Otålighet som gräver upp fröet dagen efter sådd, att tvinga fram i otid — eller att glömma trädan tills jorden är utarmad."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Jera",
        "steps": [
          "İki elini göğüs hizasında birbirinin etrafında dönen iki yarım ay (ᛃ) gibi tut ve ‘Yeeee-raaaa’ sesini dairesel bir nefesle ver.",
          "En az 6 ay veya 1 yıl sürecek bir hedefin için bugün ‘mucize’ beklemeyi bırakıp her gün tekrarlanabilir küçük bir rutin kur.",
          "Haftanın bir gününü veya akşamın bir saatini ‘nadas zamanı’ ilan et; o saatte hiçbir üretim zorlaması yapma."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Jera",
        "steps": [
          "Curve both hands before your chest like the two interlocking arcs of Jera (ᛃ) and intone 'Yeeee-raaaa' on a smooth breath.",
          "For a goal requiring six months or a year, set aside impatience today and establish one small, repeatable daily habit.",
          "Designate one evening hour or weekly block as 'fallow ground' where no productivity is forced."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Jera",
        "steps": [
          "Forma båda händerna framför bröstet likt Jeras två sammanlänkade bågar (ᛃ) och ljuda 'Jeeee-raaaa'.",
          "För ett mål som kräver ett halvår eller år, släpp otåligheten och skapa en liten daglig vana som vattnar fröet.",
          "Avsätt en stund som 'träda' där ingen prestation tvingas fram."
        ]
      }
    },
    "closing": {
      "tr": "Tohum kışın soğuğunu yemeden baharda başak vermez; Jera aceleyi tanımaz.",
      "en": "The seed does not ear in spring without eating the cold of winter; Jera knows no haste.",
      "sv": "Fröet går inte i ax om våren utan att ha ätit vinterns kyla; Jera känner ingen brådska."
    },
    "practiceImage": "/runes/practice-jera.jpg"
  },
  {
    "index": 13,
    "aett": 2,
    "slug": "eihwaz",
    "glyph": "ᛇ",
    "name": "Eihwaz",
    "protoGermanic": "*Īhwaz",
    "phoneme": "ï / æ",
    "image": "/runes/rune-13-eihwaz.jpg",
    "deities": [
      "Skadi",
      "Ullr",
      "Odin"
    ],
    "subtitle": {
      "tr": "Porsuk Ağacı (Taxus baccata), Dünya Omurgası ve Dayanıklılık",
      "en": "The Yew Tree (Taxus baccata), World Spine, and Endurance",
      "sv": "Idegranen (Taxus baccata), Världsryggraden och Uthållighet"
    },
    "element": {
      "tr": "Toprak, Hava ve Yeraltı (Üç Dünya Ekseni)",
      "en": "Earth, Air & Underworld (Axis Mundi)",
      "sv": "Jord, Luft & Underjord (Världsaxeln)"
    },
    "poem": {
      "tr": {
        "source": "Anglosakson & İzlanda Rün Şiiri (XIII)",
        "quote": "“Porsuk ağacı (Ēoh) dışı sert bir ağaçtır, toprağa sıkı tutunur, ateşin bekçisidir ve en gerili yaydır.”"
      },
      "en": {
        "source": "Old English & Icelandic Rune Poems (XIII)",
        "quote": "“The yew (Ēoh) is a rough-barked tree, fast in the earth, guardian of flame and the stiffest of bows.”"
      },
      "sv": {
        "source": "Fornengelska & isländska rundikterna (XIII)",
        "quote": "”Idegranen (Ēoh / Ýr) är ett strävbarkat träd, fast i jorden, eldens väktare och den spänstigaste bågen.”"
      }
    },
    "text": {
      "tr": [
        "Eihwaz porsuk ağacıdır. Futhark’ın omurgasıdır. Jera yataydır, dönen çarktır. Eihwaz dikeydir, gök ile yeri bağlayan direktir. Kökleri ölülere, dalları tanrılara uzanır. Kışın herkes ölürken yemyeşil kalır. Yaprağı ve tohumu zehirlidir. Ölümün içindeki yaşam, yaşamın içindeki ölümdür.",
        "Dişbudak kışın yaprak döker. Porsuk dökmez. Gövde çürüyünce içinden yeni kök salar, kendini kendinden yeniden doğurur. Bu yüzden dünyanın direği burada porsuktur. Şamanın bineği, boyutlar arasında tırmanılan merdivendir. Aşağı ile yukarı arasındaki tek güvenli geçiş bu dikey omurgadır.",
        "Sabrın değil, direncin ve ölümsüzlüğün rünüdür. Rüzgârda eğilmez. Gerekirse öldürür, kendisi ölmez. Zehir, doğru işlenirse ilaç olur. Seni öldüren şey, yüzleşilirse iyileştiren şeydir. Travma inkâr edilmez. İşlenir.",
        "Eihwaz hızlı bir son değildir ve yumuşak gölgelik değildir. Dengeli hâli sarsılmaz duruştur: krizde panik değil, dik omurga. Gölgesi katılıktır. “Benim dediğim olacak” inadı, ölüm korkusu ya da yaşamdan vazgeçme. Durgun yüzü, zihnin kendi hapishanesinde çürümesidir. Omurga dik durmuyorsa rün süs olarak kalır."
      ],
      "en": [
        "Eihwaz is the yew. It is the spine of the Futhark. Jera is horizontal, the turning wheel. Eihwaz is vertical, the pole that binds sky and earth. Its roots reach the dead. Its branches reach the gods. While everyone dies in winter, it stays green. Its leaf and its seed are poisonous. Life inside death, death inside life.",
        "The ash drops its leaves in winter. The yew does not. When the trunk rots, it sends a new root from inside and is born again from itself. For that reason the pole of the world here is the yew. It is the shaman’s mount, the ladder climbed between worlds. The only safe passage between below and above is this vertical spine.",
        "It is the rune not of patience, but of resistance and of immortality. It does not bend in the wind. If it must, it kills. It does not itself die. Poison, rightly worked, becomes medicine. The thing that kills you, if it is faced, is the thing that heals. Trauma is not denied. It is worked.",
        "Eihwaz is not a quick end and it is not a soft shade. Its balanced state is an unshaken stance: in crisis, not panic, an upright spine. Its shadow is rigidity. The obstinacy of “what I say will be,” fear of death, or giving up on life. Its still face is the mind rotting in a prison of its own making. If the spine does not stand straight, the rune remains an ornament."
      ],
      "sv": [
        "Eihwaz är idegranen. Den är Futharkens ryggrad. Jera är vågrät, det vändande hjulet. Eihwaz är lodrät, stolpen som binder himmel och jord. Dess rötter når de döda. Dess grenar når gudarna. Medan alla dör om vintern förblir den grön. Dess blad och dess frö är giftiga. Liv inuti död, död inuti liv.",
        "Asken fäller sina löv om vintern. Idegranen gör det inte. När stammen ruttnar sänder den en ny rot inifrån och föds igen ur sig själv. Därför är världens stolpe här idegranen. Den är schamanens riddjur, stegen som klättras mellan världar. Den enda trygga passagen mellan nere och uppe är denna lodräta ryggrad.",
        "Den är runan inte för tålamod, utan för motstånd och för odödlighet. Den böjs inte i vinden. Måste den, dödar den. Själv dör den inte. Gift, rätt bearbetat, blir medicin. Det som dödar dig, om det mötas, är det som helar. Trauma förnekas inte. Det bearbetas.",
        "Eihwaz är inte ett snabbt slut och inte en mjuk skugga. Dess balanserade tillstånd är en orubbad hållning: i kris, inte panik, en upprätt ryggrad. Dess skugga är stelhet. Envisheten ”det jag säger ska bli,” rädsla för döden, eller att ge upp livet. Dess stilla ansikte är sinnet som ruttnar i ett fängelse det själv gjort. Står ryggraden inte rak blir runan en prydnad."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Īhwaz) ve Tarihsel Rün Şiiri",
          "body": "Eihwaz rünü Proto-Cermence ‘*Īhwaz’ kökünden gelir ve Elder Futhark dizgesinde ‘ï / æ’ ses değerini taşır. Anglosakson & İzlanda Rün Şiiri (XIII) kaynağında bu kapı şöyle mühürlenmiştir: “Porsuk ağacı (Ēoh) dışı sert bir ağaçtır, toprağa sıkı tutunur, ateşin bekçisidir ve en gerili yaydır.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Kışın ortasında yeşil kalan sarsılmaz omurga, ölüm ve kayıp korkusunu aşma, zehri ilaca dönüştürme, derin koruma ve uzun ömür. — Gölge / Tıkanmış Akış: Aşırı katılık, bükülmez inat, geçmiş bir travmaya veya korkuya saplanıp zihinsel hapishanede yaşama."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Īhwaz) and Historical Rune Poem",
          "body": "The rune Eihwaz derives from Proto-Germanic '*Īhwaz' and carries the phonetic value 'ï / æ' in the Elder Futhark. In the Old English & Icelandic Rune Poems (XIII), this door is recorded thus: “The yew (Ēoh) is a rough-barked tree, fast in the earth, guardian of flame and the stiffest of bows.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: The evergreen spine that endures midwinter, overcoming fear of loss and mortality, transmuting poison into medicine, and deep resilience. — Shadow / Blocked Current: Brittle rigidity, unyielding obstinacy, or remaining trapped inside an old trauma or fear of endings."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Īhwaz) och Historisk Rundikt",
          "body": "Runan Eihwaz härstammar från urgermanskans '*Īhwaz' och bär ljudvärdet 'ï / æ' i den äldre futharken. I Fornengelska & isländska rundikterna (XIII) beskrivs denna port sålunda: ”Idegranen (Ēoh / Ýr) är ett strävbarkat träd, fast i jorden, eldens väktare och den spänstigaste bågen.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Den vintergröna ryggraden som uthärdar kölden, att övervinna rädslan för förlust, vända gift till läkedom och djup uthållighet. — Skuggström / Blockering: Skör stelhet, oböjlig envishet eller att bli kvar i ett gammalt trauma."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Eihwaz",
        "steps": [
          "Omurganı tam dikleştir; bir elini başının üstüne (gök dalları), diğer elini kuyruk sokumuna (yeraltı kökleri) yönelterek ‘Eeeei-hvaaaaz’ sesini ver.",
          "Geçmişte seni yaralayan ama aynı zamanda seni bugün olduğun güçlü insana dönüştüren tek bir zorlu deneyimi hatırla.",
          "O deneyimin ‘zehrini’ (kırgınlığını) bırakıp ‘ilacını’ (kazandırdığı omurgayı ve tecrübeyi) sahiplen."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Eihwaz",
        "steps": [
          "Lengthen your spine; angle one arm upward (crown branches) and the other downward (roots) in the Eihwaz posture as you intone 'Eeeei-hwaaaaz'.",
          "Recall one past ordeal that wounded you yet forged the resilience you carry today.",
          "Consciously release the 'poison' (resentment) of that memory while keeping its 'medicine' (your strengthened spine)."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Eihwaz",
        "steps": [
          "Sträck på ryggraden; vinkla ena armen uppåt (kronan) och den andra nedåt (rötterna) i Eihwaz form och ljuda 'Eeeei-hvaaaaz'.",
          "Minns en tidigare prövning som sårade dig men samtidigt smidde den styrka du bär idag.",
          "Släpp 'giftet' (bitterheten) ur minnet och behåll 'läkedomen' (den raka ryggraden)."
        ]
      }
    },
    "closing": {
      "tr": "Dişbudak yaprak döker, porsuk ağacı kışın da yeşil kalır; omurga dikse fırtına geçer.",
      "en": "The ash drops its leaves, the yew stays green in winter; when the spine stands upright, the storm passes.",
      "sv": "Asken fäller sina löv, idegranen står grön i vintern; när ryggraden är rak drar stormen förbi."
    },
    "practiceImage": "/runes/practice-eihwaz.jpg"
  },
  {
    "index": 14,
    "aett": 2,
    "slug": "perthro",
    "glyph": "ᛈ",
    "name": "Perthro",
    "protoGermanic": "*Perþō",
    "phoneme": "p",
    "image": "/runes/rune-14-perthro.jpg",
    "deities": [
      "Frigg",
      "Nerthus",
      "Mimir",
      "Nornir"
    ],
    "subtitle": {
      "tr": "Kader Kupası, Ørlög Kuyusu ve Doğmamış Olasılık",
      "en": "The Dice Cup, the Well of Ørlög, and Unborn Possibility",
      "sv": "Tärningsbägaren, Ørlögs Brunn och Ofödd Möjlighet"
    },
    "element": {
      "tr": "Su ve Toprak (Urd Kuyusunun Derinliği)",
      "en": "Water & Earth (Depth of Urd's Well)",
      "sv": "Vatten & Jord (Urds Brunns Djup)"
    },
    "poem": {
      "tr": {
        "source": "Anglosakson Rün Şiiri (XIV)",
        "quote": "“Oyun taşı ve kupa (Peorð) savaşçıların salonda neşeyle bir araya geldiği yerde her zaman oyun ve kahkaha kaynağıdır.”"
      },
      "en": {
        "source": "Old English Rune Poem (XIV)",
        "quote": "“The gaming piece and cup (Peorð) are ever a source of play and laughter where warriors sit blithely together in the hall.”"
      },
      "sv": {
        "source": "Fornengelska rundikten (XIV)",
        "quote": "”Spelpjäs och bägare (Peorð) är alltid källa till lek och glädje där kämpar sitter tillsammans i hallen.”"
      }
    },
    "text": {
      "tr": [
        "Perthro zar kupasıdır, oyun taşıdır. Basit kumar değildir. Kozmik kumardır. Eihwaz yapıyı kurdu. Perthro o yapının içindeki olasılığı sarsar. Bir şeyin olmak üzere olduğu, henüz olmadığı andır. Zarın havada durduğu sessizlik.",
        "Aynı zamanda rahimdir. Karanlık, ıslak, gizemli. İçeride neyin büyüdüğü doğuma kadar bilinmez. Saklı olanın rünüdür. Kader burada düz bir çizgi değildir. Olasılıklar denizidir. Kuzeyde kader ip gibi eğrilmez. Ahşaba kazınır. Olan, olmakta olan ve borç diye duran gelecek aynı kuyudadır.",
        "Hayat fazla ciddiye alınmaz, çünkü oyundur. Oyun da kuralına göre oynanır. Kaybedildi sanılan anda zar dönebilir. Bir şeyi var etmek için önce boşluk gerekir. Dolu bardağa su girmez. Karanlık korkulacak yer değil, yıldızın göründüğü yerdir.",
        "Perthro garanti değildir ve başkasının iradesini zorlamak değildir. Dengeli hâli eşzamanlılık, gizli yeteneğin açılması, doğurganlık, lehine çözülen sırdır. Gölgesi kumarbazlıktır: kaderden beklemek, sorumsuzluk. Durgun yüzü rahmin mezara dönmesidir. Proje içeride çürür. Zorlanırsa ip aleyhe dolar."
      ],
      "en": [
        "Perthro is the dice cup, the playing piece. It is not simple gambling. It is the cosmic gamble. Eihwaz built the structure. Perthro shakes the possibility inside that structure. It is the moment a thing is about to be and is not yet. The silence while the die is in the air.",
        "It is also the womb. Dark, wet, mysterious. What is growing inside is not known until the birth. It is the rune of what is hidden. Fate here is not a straight line. It is a sea of possibilities. In the north, fate is not spun like a thread. It is carved into wood. What has been, what is becoming, and the future that stands as a debt are in the same well.",
        "Life is not taken too seriously, because it is a game. The game is also played by its rule. At the moment one thinks it is lost, the die can turn. To bring a thing into being, an emptiness is required first. Water does not enter a full cup. The dark is not a place to fear. It is the place where the star is seen.",
        "Perthro is not a guarantee and it is not forcing another’s will. Its balanced state is synchronicity, a hidden talent opening, fertility, a secret solved in one’s favor. Its shadow is the gambler: waiting on fate, irresponsibility. Its still face is the womb turned into a grave. The project rots inside. If it is forced, the thread winds against you."
      ],
      "sv": [
        "Perthro är tärningsbägaren, spelpjäsen. Den är inte enkelt spel. Den är det kosmiska spelet. Eihwaz byggde strukturen. Perthro skakar möjligheten inuti den strukturen. Den är stunden då en sak är på väg att bli och ännu inte är. Tystnaden medan tärningen är i luften.",
        "Den är också livmodern. Mörk, våt, hemlighetsfull. Vad som växer inuti vet man inte förrän födseln. Den är runan för det dolda. Ödet är här ingen rak linje. Det är ett hav av möjligheter. I norr spinns ödet inte som en tråd. Det skärs i trä. Det som har varit, det som blir, och framtiden som står som en skuld finns i samma brunn.",
        "Livet tas inte för allvarligt, därför att det är ett spel. Spelet spelas också efter sin regel. I stunden man tror det är förlorat kan tärningen vända. För att föra en sak till varande krävs först en tomhet. Vatten går inte in i en full bägare. Mörkret är ingen plats att frukta. Det är platsen där stjärnan syns.",
        "Perthro är inte en garanti och inte att tvinga en annans vilja. Dess balanserade tillstånd är synkronicitet, en dold talang som öppnas, fruktsamhet, en hemlighet löst till ens fördel. Dess skugga är spelaren: att vänta på ödet, ansvarslöshet. Dess stilla ansikte är livmodern vänd till en grav. Projektet ruttnar inuti. Tvingas den vindar tråden emot dig."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Perþō) ve Tarihsel Rün Şiiri",
          "body": "Perthro rünü Proto-Cermence ‘*Perþō’ kökünden gelir ve Elder Futhark dizgesinde ‘p’ ses değerini taşır. Anglosakson Rün Şiiri (XIV) kaynağında bu kapı şöyle mühürlenmiştir: “Oyun taşı ve kupa (Peorð) savaşçıların salonda neşeyle bir araya geldiği yerde her zaman oyun ve kahkaha kaynağıdır.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Gizli kalmış bir bilginin veya yeteneğin açığa çıkması, eşzamanlılık, zarın havada döndüğü anda soğukkanlılıkla hamle yapma. — Gölge / Tıkanmış Akış: Sorumluluğu şansa/kadere atıp kumarbaz gibi bekleme, karanlık sırlarla oynama veya içteki potansiyelin hiç doğmadan çürümesi."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Perþō) and Historical Rune Poem",
          "body": "The rune Perthro derives from Proto-Germanic '*Perþō' and carries the phonetic value 'p' in the Elder Futhark. In the Old English Rune Poem (XIV), this door is recorded thus: “The gaming piece and cup (Peorð) are ever a source of play and laughter where warriors sit blithely together in the hall.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: Uncovering a hidden truth or talent, meaningful synchronicity, and playing the hand dealt by fate with skill and composure. — Shadow / Blocked Current: Gambling with life while shirking responsibility, obsession with fatalism, or allowing inner potential to rot unborn."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Perþō) och Historisk Rundikt",
          "body": "Runan Perthro härstammar från urgermanskans '*Perþō' och bär ljudvärdet 'p' i den äldre futharken. I Fornengelska rundikten (XIV) beskrivs denna port sålunda: ”Spelpjäs och bägare (Peorð) är alltid källa till lek och glädje där kämpar sitter tillsammans i hallen.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Att avtäcka en dold sanning eller gåva, meningsfull synkronicitet och att spela ödets hand med lugn skicklighet. — Skuggström / Blockering: Att spela hasard med livet utan eget ansvar, ödestro som förlamar eller att låta inre potential förbli ofödd."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Perthro",
        "steps": [
          "İki elini önünde bir kâse/kupa (ᛈ) gibi aç; dudaklarından patlayan net bir ‘Peeeer-throooo’ sesiyle nefes ver.",
          "Hayatında kontrol edebildiğin kısım (senin hamlen) ile kontrol edemediğin kısmı (zarın gelişi / Ørlög) iki ayrı sütuna yaz.",
          "Kontrol edemediğin kısmı kurcalamayı bırakıp tüm gücünü elindeki taşları en ustaca oynamaya ver."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Perthro",
        "steps": [
          "Cup both hands before you like a vessel (ᛈ) and intone a crisp, resonant 'Peeeer-throooo'.",
          "Divide a current situation into two columns: what lies outside your control (the roll of the die / Ørlög) and what lies in your hand (your move).",
          "Release fixation on the uncontrollable column and direct all your craft into playing the stones in your hand."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Perthro",
        "steps": [
          "Forma båda händerna framför dig som en skål (ᛈ) och ljuda ett tydligt 'Peeeer-throooo'.",
          "Dela upp en aktuell fråga i två spalter: det som ligger utanför din kontroll (tärningskastet) och det som ligger i din hand (ditt drag).",
          "Släpp greppet om det okontrollerbara och lägg all din kraft på att spela dina pjäser väl."
        ]
      }
    },
    "closing": {
      "tr": "Dolu kadehe yeni su girmez; zarın nasıl düşeceğini bilmesen de hamle senindir.",
      "en": "Water cannot enter a full cup; though you do not command the fall of the die, the move is yours.",
      "sv": "Vatten går inte in i en full bägare; även om du inte styr tärningens fall är draget ditt."
    },
    "practiceImage": "/runes/practice-perthro.jpg"
  },
  {
    "index": 15,
    "aett": 2,
    "slug": "algiz",
    "glyph": "ᛉ",
    "name": "Algiz",
    "protoGermanic": "*Algiz",
    "phoneme": "z / -R",
    "image": "/runes/rune-15-algiz.jpg",
    "deities": [
      "Heimdall",
      "Valkyrie"
    ],
    "subtitle": {
      "tr": "Geyik Boynuzu, Kargı Otu ve İlahi Erken Uyarı Kalkanı",
      "en": "The Elk Antler, Sedge-Grass, and the Shield of Early Warning",
      "sv": "Älghornet,Starrgräset och den Tidiga Varningens Sköld"
    },
    "element": {
      "tr": "Hava ve Ateş (Uyanık Sinir Ağı ve Sezgi)",
      "en": "Air & Fire (Alert Nervous System & Intuition)",
      "sv": "Luft & Eld (Vaksam Intuition)"
    },
    "poem": {
      "tr": {
        "source": "Anglosakson Rün Şiiri (XV)",
        "quote": "“Kargı otu (Eolh-secg) bataklıkta yetişir, suda büyür; ona dokunmaya kalkışan herkesi ağır yaralar ve kanatır.”"
      },
      "en": {
        "source": "Old English Rune Poem (XV)",
        "quote": "“Elk-sedge (Eolh-secg) dwells mostly in the fen, waxing in the water; it wounds severely, staining with blood any who try to seize it.”"
      },
      "sv": {
        "source": "Fornengelska rundikten (XV)",
        "quote": "”Älgstarr (Eolh-secg) växer i kärret och frodas i vattnet; det sårar skarpt och färgar med blod var och en som griper efter det.”"
      }
    },
    "text": {
      "tr": [
        "Algiz modern çağda koruma diye geçiştirilir. Kuzeyde pasif kalkan yoktur. Kalkanın arkasına saklanan er ya da geç düşer. Kökü geyiktir. Şekli dev boynuzdur. Saldırı gelince boynuz eğilir ve çarpanı deşer. Sana çarpıp seken zırh değil, çarpanı kanatan savunmadır.",
        "Aynı işaret yukarı açılmış iki koldur. İlahi erken uyarıdır. Tehlike sokağın başındayken ensedeki tüy, midedeki sebepsiz kramp. Uyanık tutar. Aşağı ile yukarı arasındaki hat kopmaz. Felaketin ortasında uzanan daldır. Göz kapalıysa dal görünmez. Mücadele etmeye niyeti olmayanı görmez.",
        "Dengeli hâli kusursuz önsezidir. Fırsat ve tehlike uzaktan fark edilir. Enerjisini emen yaklaşamaz. İlham ve bağlantı açıktır. Mekânın sınırına elektrikli çit çeker. Yalanı keser. Gerçeği çıplak gösterir.",
        "Algiz görünmezlik değildir ve korkaklık değildir. Taşıyan yalan söyleyemez ve saklanamaz. Gölgesi paranoyadır: sürekli yanlış alarm, herkesten şüphe, panik. Yoksun yüzü körlüktür. Tehlikenin ortasında hiçbir şey hissetmemek, savunmasız uyuşukluk. Savaşmayacaksan boynuz takılmaz."
      ],
      "en": [
        "Algiz is dismissed in the modern age as protection. In the north there is no passive shield. Whoever hides behind the shield falls sooner or later. Its root is the elk. Its shape is the great horn. When attack comes, the horn lowers and gores what strikes. Not armor that a blow hits and glances off. A defense that bloodies what strikes.",
        "The same mark is two arms opened upward. It is divine early warning. While the danger is at the head of the street, the hair on the neck, the cramp in the gut with no cause. It keeps one awake. The line between below and above does not break. It is the branch that reaches out in the middle of disaster. If the eye is closed, the branch is not seen. It does not see the one who has no will to struggle.",
        "Its balanced state is flawless foresight. Opportunity and danger are noticed from far off. What would drink one’s energy cannot approach. Inspiration and the link are open. It draws an electric fence at the limit of a place. It cuts the lie. It shows the truth bare.",
        "Algiz is not invisibility and it is not cowardice. The one who carries it cannot lie and cannot hide. Its shadow is paranoia: constant false alarm, suspicion of everyone, panic. Its face of lack is blindness. Feeling nothing in the middle of danger, a numb defenselessness. If you will not fight, the horn is not put on."
      ],
      "sv": [
        "Algiz avfärdas i den moderna tiden som skydd. I norr finns ingen passiv sköld. Den som gömmer sig bakom skölden faller förr eller senare. Dess rot är älgen. Dess form är det stora hornet. När angreppet kommer sänks hornet och stångar det som slår. Inte en rustning som ett slag träffar och glider av. Ett försvar som blöder det som slår.",
        "Samma tecken är två armar öppnade uppåt. Det är gudomlig tidig varning. Medan faran är vid gatans början, håret i nacken, krampen i magen utan orsak. Den håller en vaken. Linjen mellan nere och uppe bryts inte. Den är grenen som räcks ut mitt i katastrofen. Är ögat slutet syns inte grenen. Den ser inte den som inte har vilja att kämpa.",
        "Dess balanserade tillstånd är felfri föraning. Tillfälle och fara märks på långt håll. Det som skulle dricka ens energi kan inte närma sig. Inspiration och bandet är öppna. Den drar ett elektriskt stängsel vid en plats gräns. Den skär lögnen. Den visar sanningen naken.",
        "Algiz är inte osynlighet och inte feghet. Den som bär den kan inte ljuga och inte gömma sig. Dess skugga är paranoia: ständig falsk larmsignal, misstanke mot alla, panik. Dess ansikte av brist är blindhet. Att känna ingenting mitt i faran, en bedövad värnlöshet. Ska du inte strida sätts hornet inte på."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Algiz) ve Tarihsel Rün Şiiri",
          "body": "Algiz rünü Proto-Cermence ‘*Algiz’ kökünden gelir ve Elder Futhark dizgesinde ‘z / -R’ ses değerini taşır. Anglosakson Rün Şiiri (XV) kaynağında bu kapı şöyle mühürlenmiştir: “Kargı otu (Eolh-secg) bataklıkta yetişir, suda büyür; ona dokunmaya kalkışan herkesi ağır yaralar ve kanatır.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Kusursuz önsezi, tehlikeyi ve fırsatı daha sokağın başındayken sezme, enerji vampirlerine karşı aktif sınır, yüksek ilahi bağlantı. — Gölge / Tıkanmış Akış: Sürekli yanlış alarm veren paranoya ve güvensizlik; ya da içgüdüsel uyarı sinyallerini bastırıp savunmasız kalma."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Algiz) and Historical Rune Poem",
          "body": "The rune Algiz derives from Proto-Germanic '*Algiz' and carries the phonetic value 'z / -R' in the Elder Futhark. In the Old English Rune Poem (XV), this door is recorded thus: “Elk-sedge (Eolh-secg) dwells mostly in the fen, waxing in the water; it wounds severely, staining with blood any who try to seize it.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: Flawless instinctual foresight, sensing danger and opportunity from afar, active boundary against draining forces, and clear vertical connection. — Shadow / Blocked Current: Paranoia and exhausting hyper-vigilance—or muting your gut instincts out of politeness and walking into harm undefended."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Algiz) och Historisk Rundikt",
          "body": "Runan Algiz härstammar från urgermanskans '*Algiz' och bär ljudvärdet 'z / -R' i den äldre futharken. I Fornengelska rundikten (XV) beskrivs denna port sålunda: ”Älgstarr (Eolh-secg) växer i kärret och frodas i vattnet; det sårar skarpt och färgar med blod var och en som griper efter det.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Felfri föraning, att märka fara och tillfälle på långt håll, aktiv gräns mot dränerande krafter och klar vertikal kontakt. — Skuggström / Blockering: Utmattande misstänksamhet och falsklarm — eller att tysta sin magkänsla av artighet och stå oskyddad."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Algiz",
        "steps": [
          "Ayakta dik durup iki kolunu V şeklinde gökyüzüne açarak klasik Algiz duruşunu (ᛉ) al ve ‘Aaaal-giiiizzz’ sesini arı uğultusu gibi titreştir.",
          "Bugün bir insanla veya teklifle karşılaştığında zihninin bahanelerini değil, midedeki/ensendeki ilk 3 saniyelik bedensel sinyali dinle.",
          "Çalışma masanı veya odanı havalandırıp sınırını zihninde bu üç çatallı geyik boynuzuyla mühürle."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Algiz",
        "steps": [
          "Stand tall and raise both arms upward in a V-shape to form the classic Algiz stance (ᛉ), vibrating 'Aaaal-giiiizzz' like a resonant hum.",
          "When meeting a person or proposal today, listen to your body's first three-second visceral signal before your mind rationalizes.",
          "Air out your workspace and seal its threshold in your awareness with the three-pronged stave of Algiz."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Algiz",
        "steps": [
          "Stå rak och lyft båda armarna snett uppåt i Algiz klassiska ställning (ᛉ) medan du ljudar 'Aaaal-giiiizzz'.",
          "När du möter en människa eller ett förslag idag, lyssna till kroppens första tre sekunders magkänsla innan tanken bortförklarar den.",
          "Vädra ditt arbetsrum och försegla dess gräns i ditt medvetande med Algiz treuddiga stav."
        ]
      }
    },
    "closing": {
      "tr": "Uyanık olanın kalkanı paslanmaz; iç sesini susturan boynuzunu kırar.",
      "en": "The shield of the vigilant never rusts; whoever silences instinct breaks their own horn.",
      "sv": "Den vaksammes sköld rostar aldrig; den som tystar sin instinkt bryter sitt eget horn."
    },
    "practiceImage": "/runes/practice-algiz.jpg"
  },
  {
    "index": 16,
    "aett": 2,
    "slug": "sowilo",
    "glyph": "ᛊ",
    "name": "Sowilo",
    "protoGermanic": "*Sōwilō",
    "phoneme": "s",
    "image": "/runes/rune-16-sowilo.jpg",
    "deities": [
      "Baldur",
      "Sunna"
    ],
    "subtitle": {
      "tr": "Güneş Çarkı, Odaklanmış Hakikat Işığı ve Bütünlük",
      "en": "The Sun-Wheel, Focused Light of Truth, and Wholeness",
      "sv": "Solhjulet, Sanningens Fokuserade Ljus och Helhet"
    },
    "element": {
      "tr": "Güneş ve Gök Ateşi",
      "en": "Solar & Celestial Fire",
      "sv": "Sol- och Himmelseld"
    },
    "poem": {
      "tr": {
        "source": "Eski İzlanda & Anglosakson Rün Şiiri (XVI)",
        "quote": "“Güneş (Sól) bulutların kalkanı, parlayan haleli ışık ve buzun yok edicisidir; denizciler için her zaman umuttur.”"
      },
      "en": {
        "source": "Old Icelandic & Old English Rune Poems (XVI)",
        "quote": "“The Sun (Sól) is the shield of the clouds, shining ray, and destroyer of ice; ever a hope to seafarers.”"
      },
      "sv": {
        "source": "Fornisländska & fornengelska rundikterna (XVI)",
        "quote": "”Solen (Sól) är molnens sköld, strålande glans och isens förgörare; alltid ett hopp för sjöfarare.”"
      }
    },
    "text": {
      "tr": [
        "Sowilo, plajda ten ısıtan tatlı güneş değildir. Büyütecin altında karıncayı yakan odaklanmış, acımasız ışıktır. Şekli kırık bir güneş çarkı, gökten inen yıldırımdır. Zafer rünüdür. Diplomasiyle ya da şansla kazanılmaz. Karanlığın üstüne yürüyerek, engeli yakarak kazanılır.",
        "Yalan sevmez. Sis dağılır. Ortama girdiğinde saklanacak gölge kalmaz. Herkesin gerçek yüzü aydınlanır. Mutlak gerçek ve mutlak iradedir. Durağan bir başarı da değildir. Arkada nefes alan bir karanlık vardır. Parlamak için sürülür, durulmaz. Zafer kazandım diye dinlenilmez.",
        "Dengeli hâli karşı konulmaz karizma, dağılmış zihin sisi, hedefe ok gibi gitmek, canlı bedendir. Isa’nın donunu eritir. Tıkanan, sürünen işi harekete geçirir. Yalan varsa eteğindeki taşı döktürür.",
        "Sowilo tembellik üstüne serpilmiş umut değildir. Aşırısı tanrı kompleksidir: kendi gücüne tapmak, etrafı yakmak, tahammülsüzlük. Öteki gölge kül sendromudur. Dinlenmeden yanan ateşin yakıtı biter. Gündüzün ve eylemin rünüdür. Işık, iş yapılmadan zafer ilan etmez."
      ],
      "en": [
        "Sowilo is not the sweet sun that warms the skin on a beach. It is the focused, pitiless light that burns the ant under a lens. Its shape is a broken piece of the sun-wheel, a lightning that comes down from the sky. It is the rune of victory. It is not won by diplomacy or by luck. It is won by walking onto the dark and burning the obstacle.",
        "It does not love the lie. Fog breaks. When it enters a place, no shadow remains to hide in. Everyone’s real face is lit. It is absolute truth and absolute will. It is also not a stationary success. There is a dark breathing behind. In order to shine, one drives and does not stop. One does not rest because “I have won.”",
        "Its balanced state is a charisma that cannot be opposed, a mental fog that has broken, going to the target like an arrow, a living body. It melts Isa’s freeze. It sets a stuck, dragging work into motion. If there is a lie, it makes the stone in the hem fall out.",
        "Sowilo is not hope sprinkled over idleness. Its excess is the god complex: worshipping one’s own power, burning what is around, intolerance. The other shadow is ash syndrome. The fuel of a fire that burns without rest runs out. It is the rune of day and of deed. The light does not announce victory before the work is done."
      ],
      "sv": [
        "Sowilo är inte den ljuva sol som värmer huden på en strand. Den är det fokuserade, obarmhärtiga ljus som bränner myran under en lins. Dess form är en bruten bit av solhjulet, en blixt som kommer ner från himlen. Den är segerns runa. Den vinns inte med diplomati eller med tur. Den vinns genom att gå ut på mörkret och bränna hindret.",
        "Den älskar inte lögnen. Dimman bryts. När den går in i en plats finns ingen skugga kvar att gömma sig i. Allas verkliga ansikte lyses. Den är absolut sanning och absolut vilja. Den är heller inte en stillastående framgång. Det finns ett mörker som andas bakom. För att lysa kör man och stannar inte. Man vilar inte därför att ”jag har segrat.”",
        "Dess balanserade tillstånd är en karisma som inte kan motstås, en mental dimma som brutits, att gå mot målet som en pil, en levande kropp. Den smälter Isas frysning. Den sätter ett fastnat, släpande arbete i rörelse. Finns en lögn får den stenen i fållen att falla ut.",
        "Sowilo är inte hopp strött över lättja. Dess övermått är gudskomplexet: att dyrka sin egen makt, att bränna det runt omkring, intolerans. Den andra skuggan är asksyndromet. Bränslet i en eld som brinner utan vila tar slut. Den är dagens och handlingens runa. Ljuset tillkännager inte seger innan arbetet är gjort."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Sōwilō) ve Tarihsel Rün Şiiri",
          "body": "Sowilo rünü Proto-Cermence ‘*Sōwilō’ kökünden gelir ve Elder Futhark dizgesinde ‘s’ ses değerini taşır. Eski İzlanda & Anglosakson Rün Şiiri (XVI) kaynağında bu kapı şöyle mühürlenmiştir: “Güneş (Sól) bulutların kalkanı, parlayan haleli ışık ve buzun yok edicisidir; denizciler için her zaman umuttur.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Zihin sisinin dağılması, hedefe ok gibi odaklanma, gölgelerin ve yalanların ortadan kalkması, yaşamsal enerji ve onurlu başarı. — Gölge / Tıkanmış Akış: Kibir, ‘her şeyi ben bilirim’ tanrı kompleksi, etrafındakileri yakıp kavurma veya hiç dinlenmeden yanıp kül olma (tükenmişlik)."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Sōwilō) and Historical Rune Poem",
          "body": "The rune Sowilo derives from Proto-Germanic '*Sōwilō' and carries the phonetic value 's' in the Elder Futhark. In the Old Icelandic & Old English Rune Poems (XVI), this door is recorded thus: “The Sun (Sól) is the shield of the clouds, shining ray, and destroyer of ice; ever a hope to seafarers.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: Dispelling mental fog, laser-focused direction toward the goal, scattering shadows and falsehood, vital energy, and honorable victory. — Shadow / Blocked Current: Hubris, god-complex, scorching those around you with intolerance, or burning without rest into ash syndrome."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Sōwilō) och Historisk Rundikt",
          "body": "Runan Sowilo härstammar från urgermanskans '*Sōwilō' och bär ljudvärdet 's' i den äldre futharken. I Fornisländska & fornengelska rundikterna (XVI) beskrivs denna port sålunda: ”Solen (Sól) är molnens sköld, strålande glans och isens förgörare; alltid ett hopp för sjöfarare.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Att skingra mental dimma, pilskarp riktning mot målet, sanning som lyser upp skuggor, livskraft och hederlig seger. — Skuggström / Blockering: Hybris, gudskomplex, att bränna sin omgivning med intolerans eller att brinna utan vila tills bara aska återstår."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Sowilo",
        "steps": [
          "Yüzünü sabah güneşine (veya aydınlığa) dön; dişlerinin arasından keskin bir ‘Sssss-oooo-viiii-looo’ sesiyle nefes ver.",
          "Bugün enerjini 10 farklı küçük işe dağıtmak yerine, tıpkı bir büyütecin güneş ışığını tek noktaya odaklaması gibi en önemli tek hedefe kilitle.",
          "Kendine söylediğin bir mazereti veya pembe yalanı bugün güneş ışığına çıkarıp dürüstçe bitir."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Sowilo",
        "steps": [
          "Face the morning sun or open light and intone a bright, sibilant 'Sssss-oooo-wiiii-looo'.",
          "Instead of scattering your energy across ten minor tasks today, focus your light like a magnifying lens onto one primary objective.",
          "Bring one self-deception or excuse out into the daylight today and end it cleanly."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Sowilo",
        "steps": [
          "Vänd ansiktet mot morgonsolen eller ljuset och ljuda ett klart 'Sssss-oooo-viiii-looo'.",
          "Istället för att sprida din kraft på tio småsaker idag, samla ditt ljus likt ett brännglas på en enda huvuduppgift.",
          "För fram en undanflykt eller självbländning i dagsljuset idag och avsluta den."
        ]
      }
    },
    "closing": {
      "tr": "Güneş doğduğunda sis pazarlık etmez; ışık eylemle parlar.",
      "en": "When the sun rises, the fog does not bargain; light shines through deed.",
      "sv": "När solen stiger förhandlar inte dimman; ljuset lyser genom handling."
    },
    "practiceImage": "/runes/practice-sowilo.jpg"
  },
  {
    "index": 17,
    "aett": 3,
    "slug": "tiwaz",
    "glyph": "ᛏ",
    "name": "Tiwaz",
    "protoGermanic": "*Tīwaz",
    "phoneme": "t",
    "image": "/runes/rune-17-tiwaz.jpg",
    "deities": [
      "Tyr"
    ],
    "subtitle": {
      "tr": "Kutup Yıldızı, Adalet Mızrağı, Yemin ve Özveri",
      "en": "The Pole Star, Spear of Justice, the Oath, and Sacrifice",
      "sv": "Polstjärnan, Rättvisans Spjut, Eden och Offerviljan"
    },
    "element": {
      "tr": "Hava ve Çelik (Sabit Kuzey Ekseni)",
      "en": "Air & Steel (Fixed Northern Axis)",
      "sv": "Luft & Stål (Den Fasta Nordaxeln)"
    },
    "poem": {
      "tr": {
        "source": "Anglosakson & Norveç Rün Şiiri (XVII)",
        "quote": "“Tīr (Kutup Yıldızı / Tyr) sadakatini hiç bozmaz; gece karanlığında ve sisin üstünde daima doğru yönü gösterir, tek elli tanrıdır.”"
      },
      "en": {
        "source": "Old English & Norwegian Rune Poems (XVII)",
        "quote": "“Tīr (the Pole Star / Tyr) is a guiding token; it keeps faith well with princes, ever holding its course above the mists of night.”"
      },
      "sv": {
        "source": "Fornengelska & norska rundikterna (XVII)",
        "quote": "”Tīr (Polstjärnan / Tyr) är ett ledfyrstecken; den håller trohet väl och viker aldrig ur sin bana över nattens dimmor.”"
      }
    },
    "text": {
      "tr": [
        "Tiwaz kaba bir savaş rünü değildir. Ruhsal savaşçının ve kozmik adaletin rünüdür. Şekli yukarı bakan oktur, göğü taşıyan direktir. Ne olursa olsun doğru olanı yapma iradesidir. Pusulanın kuzeyi şaşırmayan iğnesidir. Zafer vaat eder. Bedelsiz vaat etmez.",
        "Kör şiddet değildir. Strateji, yasa, onur ve düzen için kılıç çekmektir. İçerideki kaosu dize getiren disiplindir. Karanlıkta kaybolanın baktığı sabit yıldızdır. Duygu, korku ve heves döner. İğne dönmez. Yön yoksa yalnızca fırtınada sürüklenilir.",
        "Köşeye çekilip “nasılsa haklıyım” denirse kınından çıkmaz. Pasifliği ve kurban psikolojisini affetmez. İlk adımı sen atarsın. Dilekçe yazılır, meydanına çıkılır. Tiwaz senin yerine savaşmaz. Haklı kılıcın keskinliğini artırır. Tarafsız gözün de onaylayacağı haklılık ister.",
        "Tiwaz intikam değildir ve karanlıkta kapılan zafer değildir. Dengeli hâli irade, disiplin, korkunun üstüne yürümek, sözünde durmaktır. Zafer, haklılık ölçüsündedir. Aşırısı diktatörlük, “yalnızca benim doğrum,” gereksiz fedakârlık, sürekli kavga arayışıdır. Yoksun yüzü korkaklık, adaletsizliğe boyun eğme, sözünden dönmedir. Yüzleşmeye hazır değilsen kılıç çekilmez."
      ],
      "en": [
        "Tiwaz is not a crude rune of war. It is the rune of the spiritual warrior and of cosmic justice. Its shape is an arrow looking up, a pole that carries the sky. It is the will to do what is right no matter what. It is the needle of the compass that does not lose north. It promises victory. It does not promise it free of price.",
        "It is not blind violence. It is drawing the sword for strategy, law, honor, and order. It is the discipline that brings the chaos inside to its knees. It is the fixed star the one who is lost in the dark looks at. Feeling, fear, and whim turn. The needle does not. If there is no direction, one only drifts in the storm.",
        "If one withdraws to the corner and says “I am right anyway,” it does not leave the scabbard. It does not forgive passivity or the mind of the victim. You take the first step. The petition is written. One goes out to its field. Tiwaz does not fight in your place. It increases the sharpness of the rightful blade. It wants a rightness that a neutral eye would also confirm.",
        "Tiwaz is not revenge and it is not a victory grabbed in the dark. Its balanced state is will, discipline, walking onto fear, standing by one’s word. Victory is to the measure of being right. Its excess is dictatorship, “only my truth,” unnecessary sacrifice, a constant search for a fight. Its face of lack is cowardice, bowing to injustice, turning from one’s word. If you are not ready to face it, the sword is not drawn."
      ],
      "sv": [
        "Tiwaz är inte en rå krigsruna. Den är den andlige krigarens och den kosmiska rättvisans runa. Dess form är en pil som ser upp, en stolpe som bär himlen. Den är viljan att göra det rätta vad som än sker. Den är kompassens nål som inte tappar norr. Den lovar seger. Den lovar den inte utan pris.",
        "Den är inte blint våld. Den är att dra svärdet för strategi, lag, heder och ordning. Den är disciplinen som tvingar kaoset inuti på knä. Den är den fasta stjärnan den som är vilse i mörkret ser på. Känsla, rädsla och infall vänder. Nålen gör det inte. Finns ingen riktning driver man bara i stormen.",
        "Drar man sig till hörnet och säger ”jag har ändå rätt” lämnar den inte skidan. Den förlåter inte passivitet eller offrets sinne. Du tar det första steget. Ansökan skrivs. Man går ut på dess fält. Tiwaz strider inte i ditt ställe. Den ökar skärpan i det rättmätiga bladet. Den vill ha en rätt som ett neutralt öga också skulle bekräfta.",
        "Tiwaz är inte hämnd och inte en seger gripen i mörkret. Dess balanserade tillstånd är vilja, disciplin, att gå ut på rädslan, att stå vid sitt ord. Seger är i måttet av att ha rätt. Dess övermått är diktatur, ”bara min sanning,” onödigt offer, ett ständigt sökande efter strid. Dess ansikte av brist är feghet, att böja sig för orätt, att vända från sitt ord. Är du inte redo att möta det dras svärdet inte."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Tīwaz) ve Tarihsel Rün Şiiri",
          "body": "Tiwaz rünü Proto-Cermence ‘*Tīwaz’ kökünden gelir ve Elder Futhark dizgesinde ‘t’ ses değerini taşır. Anglosakson & Norveç Rün Şiiri (XVII) kaynağında bu kapı şöyle mühürlenmiştir: “Tīr (Kutup Yıldızı / Tyr) sadakatini hiç bozmaz; gece karanlığında ve sisin üstünde daima doğru yönü gösterir, tek elli tanrıdır.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Kozmik düzenin ve hukukun korunması, ilkeli duruş, sözünün arkasında durmak için bedel ödeme cesareti (Tyr’ın sağ elini Fenrir’in ağzına koyması). — Gölge / Tıkanmış Akış: Kendi doğrusunu dayatan fanatizm, gereksiz kavga arayışı; ya da haksızlık karşısında susma, korkaklık ve sözünden dönme."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Tīwaz) and Historical Rune Poem",
          "body": "The rune Tiwaz derives from Proto-Germanic '*Tīwaz' and carries the phonetic value 't' in the Elder Futhark. In the Old English & Norwegian Rune Poems (XVII), this door is recorded thus: “Tīr (the Pole Star / Tyr) is a guiding token; it keeps faith well with princes, ever holding its course above the mists of night.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: Upholding cosmic order and law, principled resolve, and the courage to pay the price for one's word (as Tyr placed his right hand in Fenrir's jaws). — Shadow / Blocked Current: Self-righteous fanaticism andpicking needless fights—or cowardice in the face of injustice and breaking sworn faith."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Tīwaz) och Historisk Rundikt",
          "body": "Runan Tiwaz härstammar från urgermanskans '*Tīwaz' och bär ljudvärdet 't' i den äldre futharken. I Fornengelska & norska rundikterna (XVII) beskrivs denna port sålunda: ”Tīr (Polstjärnan / Tyr) är ett ledfyrstecken; den håller trohet väl och viker aldrig ur sin bana över nattens dimmor.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Att upprätthålla lag och ordning, principfast mod och beredskap att betala priset för sitt ord (likt Tyr som lade sin hand i Fenrisulvens gap). — Skuggström / Blockering: Självrättfärdig fanatism och onödig strid — eller feghet inför orätt och svikna löften."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Tiwaz",
        "steps": [
          "Ayakta dik durup kollarını omuz hizasından aşağı 45 derece açarak bir ok ucu (ᛏ) formu oluştur ve net bir ‘Tiiii-vaaaaz’ sesi ver.",
          "Hayatında yönünü şaşırdığında baktığın ‘Kutup Yıldızı’ ilkeni (asla taviz vermeyeceğin tek etik kuralı) bir cümleyle yaz.",
          "Haklı olduğun bir konuda köşede şikâyet etmeyi bırakıp resmi, dürüst ve somut adımı bugün at."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Tiwaz",
        "steps": [
          "Stand tall and angle both arms downward at 45 degrees like the spearhead of Tiwaz (ᛏ), intoning a crisp 'Tiiii-waaaaz'.",
          "Write down in one sentence your 'Pole Star' principle—the ethical standard you refuse to betray even under pressure.",
          "In a matter where right is on your side, cease waiting in the corner and take the direct, lawful step today."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Tiwaz",
        "steps": [
          "Stå rak och vinkla båda armarna snett nedåt i 45 grader likt spjutspetsen Tiwaz (ᛏ) medan du ljudar 'Tiiii-vaaaaz'.",
          "Skriv i en mening ned din 'Polstjärna' — den etiska princip du aldrig kompromissar med.",
          "I en sak där du har rätten på din sida, sluta vänta i hörnet och ta det raka, rättmätiga steget idag."
        ]
      }
    },
    "closing": {
      "tr": "Duygu ve rüzgâr döner, Kutup Yıldızı dönmez; haklı kılıç karanlıkta çekilmez.",
      "en": "Wind and feeling turn, the Pole Star does not; the rightful blade is never drawn in secret.",
      "sv": "Vind och känsla vänder, Polstjärnan vänder aldrig; det rättmätiga svärdet dras i ljuset."
    },
    "practiceImage": "/runes/practice-tiwaz.jpg"
  },
  {
    "index": 18,
    "aett": 3,
    "slug": "berkano",
    "glyph": "ᛒ",
    "name": "Berkano",
    "protoGermanic": "*Berkanan",
    "phoneme": "b",
    "image": "/runes/rune-18-berkano.jpg",
    "deities": [
      "Urd",
      "Holda",
      "Perchta"
    ],
    "subtitle": {
      "tr": "Huş Ağacı (Betula), Koruyucu Rahim ve Sessiz Filizlenme",
      "en": "The Birch Tree (Betula), Protective Womb, and Quiet Sprouting",
      "sv": "Björken (Betula), den Skyddande Livmodern och Stilla Groning"
    },
    "element": {
      "tr": "Toprak ve Bahar Suyu",
      "en": "Earth & Vernal Sap",
      "sv": "Jord & Björksav"
    },
    "poem": {
      "tr": {
        "source": "Eski Norveç Rün Şiiri (XVIII)",
        "quote": "“Huş dalı (Bjarkan) yaprakları en yeşil olan daldır; Loki hile getirse de baharda ilk o uyanır.”"
      },
      "en": {
        "source": "Old Norwegian Rune Poem (XVIII)",
        "quote": "“The birch bough (Bjarkan) is the greenest-leaved of branches; first to awaken after winter's frost.”"
      },
      "sv": {
        "source": "Fornnorska rundikten (XVIII)",
        "quote": "”Björklövet (Bjarkan) är den grönaste av kvistar; först att vakna ur vinterns tjäle.”"
      }
    },
    "text": {
      "tr": [
        "Berkano evrensel annedir. Yalnızca biyolojik annelik değildir. Bir fikri, bir projeyi, bir inancı ya da zarar görmüş bir ruhu büyütmek için gereken kuluçkadır. Eski dilde huş ağacıdır. Buz çekilince donmuş toprağa tutunan ilk ağaç. Hayatta kalma dirayeti, sıfırdan var olma, şefkat.",
        "Dışarıdaki fırtınadan sığınılan mağaradır. Toprağın altında tohumun çatladığı karanlık, sessiz, canlı yerdir. En donuk andan sonraki ilk yeşil filizdir. Berkano yoksa iyileşme ve yeniden başlama umudu da yoktur. Sırlar burada saklanır. Büyüme dışarı bağırılmaz.",
        "Yavaştır. Çok yavaştır. Ertesi gün sonuç vermez. Toprak enerjisidir. Mevsimini bekler. Aceleye gelmez. Sabırsız doğaya uymaz. Niyetin çevresine rahim örer. Kendi hızında olgunlaşır. Ev, bebek odası, yeni filizlenen hassas iş bu kalkanın içindedir.",
        "Berkano hasat değildir ve çoktan dünyaya çıkmış olanın hayatı değildir. Dengeli hâli istikrarlı büyüme, yuva, bedensel ve ruhsal iyileşmedir. Aşırısı boğan korumadır: gelişimin kendi ayağına basmasına izin vermemek. Yoksun yüzü terk edilmişlik, kısırlık, işin ham kalması, güvenli alanın eksikliğidir."
      ],
      "en": [
        "Berkano is the universal mother. It is not biological motherhood alone. It is the incubation required to grow an idea, a project, a belief, or a soul that has been harmed. In the old tongue it is the birch. The first tree that takes hold in frozen soil when the ice withdraws. The resolve to stay alive, coming into being from zero, compassion.",
        "It is the cave one shelters in from the storm outside. The dark, silent, living place under the soil where the seed splits. It is the first green shoot after the dullest moment. If there is no Berkano, there is also no hope of healing and of beginning again. Secrets are kept here. Growth is not shouted outward.",
        "It is slow. Very slow. It does not give a result the next day. It is earth energy. It waits for its season. It does not take hurry. It does not suit an impatient nature. It weaves a womb around the intention. It ripens at its own speed. The house, the child’s room, the sensitive work just sprouting are inside this shield.",
        "Berkano is not the harvest and it is not the life of what has already come out into the world. Its balanced state is steady growth, the nest, bodily and spiritual healing. Its excess is a protection that smothers: not letting a growth stand on its own foot. Its face of lack is abandonment, sterility, the work staying raw, the lack of a safe field."
      ],
      "sv": [
        "Berkano är den universella modern. Den är inte bara biologiskt moderskap. Den är den ruvning som krävs för att växa en idé, ett projekt, en tro eller en själ som skadats. På det gamla språket är den björken. Det första trädet som tar fäste i frusen jord när isen drar sig tillbaka. Beslutet att förbli vid liv, att bli till från noll, medkänsla.",
        "Den är grottan man söker skydd i från stormen utanför. Den mörka, tysta, levande platsen under jorden där fröet spricker. Den är det första gröna skottet efter den slöaste stunden. Finns ingen Berkano finns heller inget hopp om läkning och om att börja om. Hemligheter hålls här. Växt ropas inte utåt.",
        "Den är långsam. Mycket långsam. Den ger inget resultat dagen efter. Den är jordenergi. Den väntar på sin årstid. Den tar inte brådska. Den passar inte ett otåligt sinnelag. Den väver en livmoder kring avsikten. Den mognar i sin egen hastighet. Huset, barnets rum, det känsliga arbetet som just gror finns inuti denna sköld.",
        "Berkano är inte skörden och inte livet hos det som redan kommit ut i världen. Dess balanserade tillstånd är stadig växt, boet, kroppslig och andlig läkning. Dess övermått är ett skydd som kväver: att inte låta en växt stå på egen fot. Dess ansikte av brist är övergivenhet, ofruktsamhet, arbetet som förblir rått, bristen på ett tryggt fält."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Berkanan) ve Tarihsel Rün Şiiri",
          "body": "Berkano rünü Proto-Cermence ‘*Berkanan’ kökünden gelir ve Elder Futhark dizgesinde ‘b’ ses değerini taşır. Eski Norveç Rün Şiiri (XVIII) kaynağında bu kapı şöyle mühürlenmiştir: “Huş dalı (Bjarkan) yaprakları en yeşil olan daldır; Loki hile getirse de baharda ilk o uyanır.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Yeni bir fikrin veya canın güvenli bir rahimde büyümesi, şefkatli onarım, aceleye getirilmeyen istikrarlı gelişim, hane sıcaklığı. — Gölge / Tıkanmış Akış: Büyüyen şeyi bırakmayan boğucu korumacılık; ya da yeni filizlenen bir projeyi daha kök tutmadan herkese anlatıp kurutma."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Berkanan) and Historical Rune Poem",
          "body": "The rune Berkano derives from Proto-Germanic '*Berkanan' and carries the phonetic value 'b' in the Elder Futhark. In the Old Norwegian Rune Poem (XVIII), this door is recorded thus: “The birch bough (Bjarkan) is the greenest-leaved of branches; first to awaken after winter's frost.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: Nurturing a new life or project within a sheltered womb, compassionate healing, unhurried organic growth, and domestic sanctuary. — Shadow / Blocked Current: Smothering overprotection that refuses to let growth stand on its own—or exposing a fragile new sprout to harsh eyes before it takes root."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Berkanan) och Historisk Rundikt",
          "body": "Runan Berkano härstammar från urgermanskans '*Berkanan' och bär ljudvärdet 'b' i den äldre futharken. I Fornnorska rundikten (XVIII) beskrivs denna port sålunda: ”Björklövet (Bjarkan) är den grönaste av kvistar; först att vakna ur vinterns tjäle.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Att vårda nytt liv eller ett nytt verk i ett skyddat rum, läkande omsorg, långsam organisk växt och hemmets trygghet. — Skuggström / Blockering: Kvävande överbeskydd — eller att blotta ett späda skott för hårt granskande blickar innan det slagit rot."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Berkano",
        "steps": [
          "Kollarını göğsünün önünde bir bebeği veya tohumu korur gibi yuvarlak kavuştur ve yumuşak bir ‘Beeeer-kaaaa-nooo’ sesi ver.",
          "Yeni başladığın hassas bir projeyi veya niyeti olgunlaşana kadar sosyal medyada veya kalabalıkta anlatmama kararı al (kuluçka sınırı).",
          "Bedenine ve evine bugün sert eleştiri yerine besleyici, onarıcı bir bakım uygula."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Berkano",
        "steps": [
          "Curve your arms gently before your chest as if sheltering a seedling and intone a warm 'Beeeer-kaaaa-nooo'.",
          "Protect one fragile new project or intention in silent incubation—do not broadcast it to the crowd before its roots are firm.",
          "Offer your body and living space one act of quiet, restorative care today rather than harsh judgment."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Berkano",
        "steps": [
          "Forma armarna mjukt framför bröstet som ett skyddande hölje och ljuda ett varmt 'Beeeer-kaaaa-nooo'.",
          "Bevara ett nytt, känsligt projekt i tyst ruvning — ropa inte ut det innan rötterna vuxit sig starka.",
          "Ge din kropp och ditt hem en stund av läkande omsorg idag istället för hård självkritik."
        ]
      }
    },
    "closing": {
      "tr": "Tohum toprağın altında sessizce çatlar; büyüme dışarı bağırılmaz.",
      "en": "The seed splits silently beneath the soil; true growth is never shouted outward.",
      "sv": "Fröet spricker i tystnad under jorden; sann växt ropas inte utåt."
    },
    "practiceImage": "/runes/practice-berkano.jpg"
  },
  {
    "index": 19,
    "aett": 3,
    "slug": "ehwaz",
    "glyph": "ᛖ",
    "name": "Ehwaz",
    "protoGermanic": "*Ehwaz",
    "phoneme": "e",
    "image": "/runes/rune-19-ehwaz.jpg",
    "deities": [
      "Frey",
      "Freyja",
      "Loki",
      "Gersemi",
      "Hnoss"
    ],
    "subtitle": {
      "tr": "İkiz Atlar, Sadık Yoldaşlık, Güven ve Ortak İlerleyiş",
      "en": "The Twin Horses, Loyal Companionship, Trust, and Joint Advance",
      "sv": "Tvillinghästarna, Trofast Följeslagarskap, Tillit och Gemensam Färd"
    },
    "element": {
      "tr": "Toprak ve Hava (Uyumlu Hareket)",
      "en": "Earth & Air (Harmonious Motion)",
      "sv": "Jord & Luft (Samstämd Rörelse)"
    },
    "poem": {
      "tr": {
        "source": "Anglosakson Rün Şiiri (XIX)",
        "quote": "“At (Eh) soyluların önünde neşedir, toynakları üzerinde gururla durur ve huzursuz olanlara her zaman teselli verir.”"
      },
      "en": {
        "source": "Old English Rune Poem (XIX)",
        "quote": "“The horse (Eh) is a joy before princes, a steed proud on its hooves, and ever a comfort to the restless.”"
      },
      "sv": {
        "source": "Fornengelska rundikten (XIX)",
        "quote": "”Hästen (Eh) är en glädje inför furstar, stolt på sina hovar och alltid en tröst för de rastlösa.”"
      }
    },
    "text": {
      "tr": [
        "Ehwaz at demektir. Yalnızca binilen hayvan değildir. Sadakat, uyum ve ilerleyiştir. Berkano sessizce beklemekti. Ehwaz, vakti gelince güvenilir bir yoldaşla yola çıkmaktır. Binici ile at iki varlıktır. Tek beden gibi hareket ederler. Atın gücü yönlendirmeyle, binicinin görüşü atın gücüyle menzile varır.",
        "Ruh ile beden, eş ile eş, ortak ile ortak, sen ile hedefin arasındaki bağdır. Güvenilen araç, yoldaş, menzile atılan istikrarlı adımdır. Tek başına başarma kibri bu kapıda durmaz. Büyük sıçrama doğru müttefikle olur. Müttefik insan, araç ya da kendi bedenin olabilir.",
        "Dışarıdaki ortaktan önce görünmez yoldaştır. Altıncı his, sezgidir. İç ses huysuzlanıyorsa o yola gidilmez. Hayvan içgüdüsü kibirden keskindir. Raido sürüşün kendisidir. Ehwaz, o sürüşe giren bağdır.",
        "Ehwaz yalnız yolculuk değildir ve zorla koşulan hayvan değildir. Dengeli hâli “biz” diyebilmektir: sadakat, uyumlu birlik, mesafenin aşılması. Aşırısı bağımlılıktır. İp tamamen ötekinin eline geçer, irade yiter, yalnız kalmamak için yanlış yoldaşla koşulur. Yoksun yüzü ihanet, attan düşmek, zihnin istediği ile bedenin tükendiği savaştır."
      ],
      "en": [
        "Ehwaz means horse. It is not only the animal one rides. It is loyalty, harmony, and advance. Berkano was waiting in silence. Ehwaz is setting out, when the time has come, with a reliable companion. Rider and horse are two beings. They move as one body. The horse’s power reaches the range by direction. The rider’s sight reaches it by the horse’s power.",
        "It is the bond between spirit and body, spouse and spouse, partner and partner, you and your aim. The vehicle that is trusted, the companion, the steady step thrown toward the range. The pride of succeeding alone does not stand at this door. The great leap happens with the right ally. The ally may be a human, a vehicle, or your own body.",
        "Before the partner outside, it is the unseen companion. Sixth sense, intuition. If the inner voice shies, that road is not taken. Animal instinct is sharper than pride. Raido is the ride itself. Ehwaz is the bond that enters that ride.",
        "Ehwaz is not a solitary journey and it is not an animal driven by force. Its balanced state is being able to say “we”: loyalty, a harmonious union, distance crossed. Its excess is dependence. The rein passes wholly into the other’s hand, the will is lost, one runs with the wrong companion in order not to be alone. Its face of lack is betrayal, falling from the horse, the war between what the mind wants and what the body has spent."
      ],
      "sv": [
        "Ehwaz betyder häst. Den är inte bara djuret man rider. Den är lojalitet, harmoni och framåtskridande. Berkano var att vänta i tystnad. Ehwaz är att ge sig av, när tiden kommit, med en pålitlig följeslagare. Ryttare och häst är två varelser. De rör sig som en kropp. Hästens kraft når räckvidden genom styrning. Ryttarens syn når den genom hästens kraft.",
        "Den är bandet mellan ande och kropp, maka och make, partner och partner, du och ditt mål. Fordonet som litas på, följeslagaren, det stadiga steget kastat mot räckvidden. Högmodet att lyckas ensam står inte vid denna dörr. Det stora språnget sker med rätt bundsförvant. Bundsförvanten kan vara en människa, ett fordon eller din egen kropp.",
        "Före partnern utanför är den den osedda följeslagaren. Sjätte sinne, intuition. Skyggar den inre rösten tas inte den vägen. Djurinstinkt är skarpare än högmod. Raido är ritten själv. Ehwaz är bandet som går in i den ritten.",
        "Ehwaz är inte en ensam färd och inte ett djur drivet med tvång. Dess balanserade tillstånd är att kunna säga ”vi”: lojalitet, en harmonisk förening, avstånd korsat. Dess övermått är beroende. Tygeln går helt över i den andres hand, viljan förloras, man löper med fel följeslagare för att inte vara ensam. Dess ansikte av brist är svek, att falla av hästen, kriget mellan vad sinnet vill och vad kroppen har förbrukat."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Ehwaz) ve Tarihsel Rün Şiiri",
          "body": "Ehwaz rünü Proto-Cermence ‘*Ehwaz’ kökünden gelir ve Elder Futhark dizgesinde ‘e’ ses değerini taşır. Anglosakson Rün Şiiri (XIX) kaynağında bu kapı şöyle mühürlenmiştir: “At (Eh) soyluların önünde neşedir, toynakları üzerinde gururla durur ve huzursuz olanlara her zaman teselli verir.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Zihin (binici) ile bedenin (at) kusursuz uyumu, güvenilir iş veya eş ortaklığı, sadakat, yer değişikliği ve akıcı geçiş. — Gölge / Tıkanmış Akış: Zihnin kırbaçladığı ama bedenin tükendiği kopukluk, yanlış ortağa dizginleri teslim etme veya güven ihaneti."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Ehwaz) and Historical Rune Poem",
          "body": "The rune Ehwaz derives from Proto-Germanic '*Ehwaz' and carries the phonetic value 'e' in the Elder Futhark. In the Old English Rune Poem (XIX), this door is recorded thus: “The horse (Eh) is a joy before princes, a steed proud on its hooves, and ever a comfort to the restless.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: Seamless harmony between mind (rider) and body (horse), trustworthy partnership in work or marriage, loyalty, and fluid transition. — Shadow / Blocked Current: A mind whipping an exhausted body, handing the reins over in blind dependency, or broken trust between partners."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Ehwaz) och Historisk Rundikt",
          "body": "Runan Ehwaz härstammar från urgermanskans '*Ehwaz' och bär ljudvärdet 'e' i den äldre futharken. I Fornengelska rundikten (XIX) beskrivs denna port sålunda: ”Hästen (Eh) är en glädje inför furstar, stolt på sina hovar och alltid en tröst för de rastlösa.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Fulländad samklang mellan sinne (ryttare) och kropp (häst), pålitligt partnerskap, trofasthet och smidig övergång. — Skuggström / Blockering: Ett sinne som piskar en utmattad kropp, blind underkastelse eller sviket förtroende mellan följeslagare."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Ehwaz",
        "steps": [
          "Göğsünü açıp kürek kemiklerini yaklaştırarak ‘Eeeee-hvaaaaz’ sesini ver; zihnin ile bedeninin aynı hızda nefes aldığını hisset.",
          "Kendi bedenine (atına) bugün nasıl davrandığını kontrol et: Onu sadece kırbaçlıyor musun, yoksa suyunu ve dinlenmesini veriyor musun?",
          "Birlikte yol yürüdüğün ortağınla veya eşinle bugün uyumu güçlendiren açık bir görev paylaşımı yap."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Ehwaz",
        "steps": [
          "Stand balanced on both feet and intone 'Eeeee-hwaaaaz', synchronizing the pace of your thoughts with the pace of your breath.",
          "Check how you are treating your own body (your steed) today: are you only applying the whip, or tending its rest and nourishment?",
          "Strengthen alignment with a trusted partner today through clear, mutual communication."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Ehwaz",
        "steps": [
          "Stå i jämvikt på båda fötterna och ljuda 'Eeeee-hvaaaaz' medan du synkroniserar tankens takt med andedräkten.",
          "Se hur du behandlar din egen kropp (din häst) idag: använder du bara piskan, eller ger du den vila och näring?",
          "Stärk samspelet med en betrodd partner idag genom öppen och ömsesidig tillit."
        ]
      }
    },
    "closing": {
      "tr": "Binici yolu görür, at yolu taşır; ikisi kavga ederse menzile varılmaz.",
      "en": "The rider sees the road, the horse carries the stride; if the two war with each other, the destination is never reached.",
      "sv": "Ryttaren ser vägen, hästen bär steget; strider de två med varandra nås aldrig målet."
    },
    "practiceImage": "/runes/practice-ehwaz.jpg"
  },
  {
    "index": 20,
    "aett": 3,
    "slug": "mannaz",
    "glyph": "ᛗ",
    "name": "Mannaz",
    "protoGermanic": "*Mannaz",
    "phoneme": "m",
    "image": "/runes/rune-20-mannaz.jpg",
    "deities": [
      "Odin",
      "Frigg",
      "Heimdall",
      "Mannus"
    ],
    "subtitle": {
      "tr": "İnsan Bilinci, Hafıza (Minni), Liyakat ve Karşılıklı Ayna",
      "en": "Human Consciousness, Memory (Minni), Merit, and Mutual Mirror",
      "sv": "Mänskligt Medvetande, Minne (Minni), Förtjänst och Ömsesidig Spegel"
    },
    "element": {
      "tr": "Hava ve Toprak (Bilinç ve Kültür Ağı)",
      "en": "Air & Earth (Consciousness & Social Web)",
      "sv": "Luft & Jord (Medvetande och Samhällsväv)"
    },
    "poem": {
      "tr": {
        "source": "Eski Norveç & İzlanda Rün Şiiri (XX)",
        "quote": "“İnsan (Maðr) toprağın artışıdır ve insanın neşesidir; şahinin pençesi büyüktür, ama herkes birbirini sözüyle ve eseriyle süsler.”"
      },
      "en": {
        "source": "Old Norwegian & Icelandic Rune Poems (XX)",
        "quote": "“Man (Maðr) is the delight of man and the augmentation of the earth; each adorns the other through word and work.”"
      },
      "sv": {
        "source": "Fornnorska & isländska rundikterna (XX)",
        "quote": "”Människan (Maðr) är människans glädje och jordens förökning; den ene pryder den andre genom ord och verk.”"
      }
    },
    "text": {
      "tr": [
        "Mannaz insan demektir. Etten ve kemikten beden değildir. Evreni algılayan bilinçtir. Hayvan içgüdüyle hareket eder. At uyumla koşar. Yalnızca insan kendi varlığının farkındadır. Gökteki ile kökteki arasında duran idraktır.",
        "Hafıza, toplumdaki yer ve insanlar arasındaki görünmez ağ buradadır. Akıl kullanılmazsa, yiyip içen bir kütükten fark kalmaz. İş, ne olursa olsun, liyakatle ve en tam hâliyle yapılır. Ölümlü zanaat, ustalıkla birleşince mertebe değiştirir. Yol torpil ya da şans değil, liyakattir.",
        "Dengeli hâli nesnel zekâ, yüksek empati, kendini bilme, “ben kimim” sorusunun cevabıdır. Söz dinlenir. Karmaşık düğüm çözülür. Sınav ve araştırma bu kapıda odaklanır. Bedeni değil, zihni yorar.",
        "Mannaz tanrı değildir ve sürü değildir. Aşırısı narsisizm, tanrıcılık oynama, pratik hayattan kopmuş zehirli entelektüalizmdir. Yoksun yüzü sürü psikolojisidir: kendi fikrini kaybetmek, onay kölesi olmak, akıl tutulması, aşağılık duygusu. Ölümlü olduğunu unutan bu rünü okuyamaz."
      ],
      "en": [
        "Mannaz means the human. It is not the body of flesh and bone. It is the consciousness that perceives the world. The animal moves by instinct. The horse runs in harmony. Only the human is aware of their own being. It is the understanding that stands between what is in the sky and what is at the root.",
        "Memory, one’s place in the company, and the unseen net between people sit here. If the mind is not used, no difference remains from a log that eats and drinks. The work, whatever it is, is done with merit and in its fullest state. A mortal craft, joined with mastery, changes rank. The way is not favor or luck. It is merit.",
        "Its balanced state is objective intelligence, high empathy, knowing oneself, the answer to “who am I.” The word is heard. A complex knot is untied. Examination and research focus at this door. It tires not the body, but the mind.",
        "Mannaz is not a god and it is not a herd. Its excess is narcissism, playing at being a god, a poisonous intellectualism cut off from practical life. Its face of lack is herd psychology: losing one’s own idea, becoming a slave of approval, a seizure of the mind, a feeling of inferiority. Whoever forgets that they are mortal cannot read this rune."
      ],
      "sv": [
        "Mannaz betyder människan. Den är inte kroppen av kött och ben. Den är medvetandet som uppfattar världen. Djuret rör sig av instinkt. Hästen löper i harmoni. Bara människan är medveten om sitt eget vara. Den är förståndet som står mellan det som är på himlen och det som är vid roten.",
        "Minne, ens plats i sällskapet och det osedda nätet mellan människor sitter här. Brukas inte sinnet finns ingen skillnad kvar från en stock som äter och dricker. Arbetet, vad det än är, görs med förtjänst och i sitt fullaste tillstånd. Ett dödligt hantverk, förenat med mästerskap, byter rang. Vägen är inte gunst eller tur. Den är förtjänst.",
        "Dess balanserade tillstånd är objektiv intelligens, hög empati, att känna sig själv, svaret på ”vem är jag.” Ordet hörs. En komplex knut löses. Prov och forskning fokuserar vid denna dörr. Den tröttar inte kroppen, utan sinnet.",
        "Mannaz är inte en gud och inte en hjord. Dess övermått är narcissism, att leka gud, en giftig intellektualism avskuren från det praktiska livet. Dess ansikte av brist är hjordpsykologi: att tappa sin egen idé, att bli en slav under godkännande, ett anfall i sinnet, en känsla av underlägsenhet. Den som glömmer att den är dödlig kan inte läsa denna runa."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Mannaz) ve Tarihsel Rün Şiiri",
          "body": "Mannaz rünü Proto-Cermence ‘*Mannaz’ kökünden gelir ve Elder Futhark dizgesinde ‘m’ ses değerini taşır. Eski Norveç & İzlanda Rün Şiiri (XX) kaynağında bu kapı şöyle mühürlenmiştir: “İnsan (Maðr) toprağın artışıdır ve insanın neşesidir; şahinin pençesi büyüktür, ama herkes birbirini sözüyle ve eseriyle süsler.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Nesnel öz-farkındalık, yüksek zekâ ve hafıza, torpil değil liyakatle kazanılan saygınlık, insanları birbirine bağlayan görünmez ağ. — Gölge / Tıkanmış Akış: Kibirli entelektüalizm ve narsisizm; ya da sürü psikolojisine kapılıp kendi aklını ve vicdanını kalabalığa teslim etme."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Mannaz) and Historical Rune Poem",
          "body": "The rune Mannaz derives from Proto-Germanic '*Mannaz' and carries the phonetic value 'm' in the Elder Futhark. In the Old Norwegian & Icelandic Rune Poems (XX), this door is recorded thus: “Man (Maðr) is the delight of man and the augmentation of the earth; each adorns the other through word and work.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: Objective self-awareness, clear memory and intellect, standing earned through merit rather than favor, and healthy human fellowship. — Shadow / Blocked Current: Arrogant intellectualism and narcissism—or surrendering one's own mind and conscience to herd mentality and approval-seeking."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Mannaz) och Historisk Rundikt",
          "body": "Runan Mannaz härstammar från urgermanskans '*Mannaz' och bär ljudvärdet 'm' i den äldre futharken. I Fornnorska & isländska rundikterna (XX) beskrivs denna port sålunda: ”Människan (Maðr) är människans glädje och jordens förökning; den ene pryder den andre genom ord och verk.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Objektiv självkännedom, klart minne och förstånd, anseende vunnet genom förtjänst samt sund mänsklig gemenskap. — Skuggström / Blockering: Högmodig intellektualism och självupptagenhet — eller att ge upp sitt eget omdöme till flockmentalitet."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Mannaz",
        "steps": [
          "Kollarını göğsünün üzerinde çapraz kavuşturarak (Mannaz’ın iç kesişimi ᛗ) dudaklarını birleştirip uzun bir ‘Mmmmm-aaaa-naaaaz’ sesi çıkar.",
          "Bugün başka insanlarda seni en çok rahatsız eden bir özelliği dürüstçe kendi aynanda ara: ‘Bunun bendeki karşılığı nerede?’",
          "Yaptığın işi kimse görmese bile yalnızca kendi insanlık onurun ve ustalığın (liyakatin) için en temiz hâliyle tamamla."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Mannaz",
        "steps": [
          "Cross both forearms over your chest (forming the inner cross of Mannaz ᛗ) and hum a resonant 'Mmmmm-aaaa-naaaaz'.",
          "Examine one trait that irritates you in others today and look honestly in the mirror: 'Where does a shadow of this live in me?'",
          "Perform your main craft today to the highest standard of merit, even if no external audience is watching."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Mannaz",
        "steps": [
          "Korsa underarmarna över bröstet (Mannaz inre kors ᛗ) och ljuda ett vibrerande 'Mmmmm-aaaa-naaaaz'.",
          "Se på ett drag som irriterar dig hos andra idag och fråga ärligt i spegeln: 'Var finns skuggan av detta i mig själv?'",
          "Utför dagens arbete med högsta omsorg och förtjänst, även när ingen annan ser på."
        ]
      }
    },
    "closing": {
      "tr": "İnsan insanın aynasıdır; liyakatle yapılan ölümlü iş mertebe değiştirir.",
      "en": "Human is mirror to human; mortal craft performed with integrity transcends its rank.",
      "sv": "Människa är människas spegel; dödligt hantverk utfört med heder lyfter sin rang."
    },
    "practiceImage": "/runes/practice-mannaz.jpg"
  },
  {
    "index": 21,
    "aett": 3,
    "slug": "laguz",
    "glyph": "ᛚ",
    "name": "Laguz",
    "protoGermanic": "*Laguz",
    "phoneme": "l",
    "image": "/runes/rune-21-laguz.jpg",
    "deities": [
      "Njord",
      "Nerthus",
      "Aegir",
      "Ran",
      "Frigg"
    ],
    "subtitle": {
      "tr": "Derin Okyanus, Sezgi Akıntısı, Rüya ve Su Hafızası",
      "en": "The Deep Ocean, Current of Intuition, Dream, and Water Memory",
      "sv": "Den Djupa Oceanen, Intuitionens Ström, Dröm och Vattenminne"
    },
    "element": {
      "tr": "Su (Gelgit, Kaynak ve Bilinçdışı Deniz)",
      "en": "Water (Tide, Spring, and Unconscious Sea)",
      "sv": "Vatten (Tidvatten, Källa och Omedvetet Hav)"
    },
    "poem": {
      "tr": {
        "source": "Eski Norveç Rün Şiiri (XXI)",
        "quote": "“Su (Lögr) dağdan dökülen çağlayandır; ama denizde yelken açarken dalgalar gemiyi sarsar.”"
      },
      "en": {
        "source": "Old Norwegian Rune Poem (XXI)",
        "quote": "“Water (Lögr) is a river falling from the mountain-side; yet deep and wide is the sea where the wave-steed pitches.”"
      },
      "sv": {
        "source": "Fornnorska rundikten (XXI)",
        "quote": "”Vatten (Lögr) är forsen som faller från fjället; men djupt är havet där vågorna prövar skeppet.”"
      }
    },
    "text": {
      "tr": [
        "Laguz içilen su değildir. Görünmeyenin, bilinçaltının, rüyanın ve evrensel hafızanın anahtarıdır. Fehu görünür olanın yakıtıysa, Laguz sezginin okyanusudur. Şekillendirir, besler, hafızaya kaydeder. Eski dilde göl ve su demektir. Üstünde kuğu yüzen sığ gölet değildir.",
        "Dibi görünmeyen, hem kadim bilgeliği hem karanlık canavarı saklayan engin sudur. Yaşamın beşiği, boğulmanın da merkezidir. Yüzeydeki yansımaya kanılmaz. Dibe dalınır. Su yenilmez, suyla savaşılmaz. Sağlam bir gemi, yani mantık ve irade, kurulursa su seni istediğin ufka taşır. Düşman değil, akışına güvenilen rehberdir.",
        "Suyun tehlikesi kabın şeklini alması ve sıkı tutulanın parmak arasından kaçmasıdır. Esneklik ve gizlenme hayatta kalmak içindir. Sürekli şekil değiştirir, gerçekten kaçarsan, kendi akıntında ördüğün ağa takılırsın.",
        "Laguz buz değildir ve sahip olunan gölet değildir. Dengeli hâli sezgi, empati, rüya farkındalığı, engelin etrafından dolanmaktır. Aşırısı illüzyon, duygusal şantaj, kendi duygusunda boğulma, melankolidir. Yoksun yüzü ruhsal kuraklık, yaratıcı tıkanıklık, duygunun bastırılıp katılaşmasıdır. Derinlik, çıkışı bilenindir."
      ],
      "en": [
        "Laguz is not the water one drinks. It is the key of the unseen, of the unconscious, of the dream, and of universal memory. If Fehu is the fuel of what is visible, Laguz is the ocean of intuition. It shapes, it feeds, it records into memory. In the old tongue it means lake and water. It is not a shallow pond with a swan on it.",
        "It is a vast water whose bottom is not seen, hiding both ancient wisdom and the dark beast. The cradle of life, and also the center of drowning. One is not fooled by the reflection on the surface. One dives. Water is not beaten. One does not war with water. If a sound ship is built, that is reason and will, the water carries you to the horizon you want. Not an enemy. A guide whose current is trusted.",
        "The danger of water is that it takes the shape of the vessel, and that what is held tight escapes between the fingers. Flexibility and hiding are for staying alive. If you constantly change shape and flee the truth, you catch in the net you wove in your own current.",
        "Laguz is not ice and it is not a pond one owns. Its balanced state is intuition, empathy, dream awareness, going around the obstacle. Its excess is illusion, emotional blackmail, drowning in one’s own feeling, melancholy. Its face of lack is spiritual drought, creative blockage, feeling suppressed until it hardens. Depth belongs to the one who knows the way out."
      ],
      "sv": [
        "Laguz är inte vattnet man dricker. Den är nyckeln till det osedda, till det omedvetna, till drömmen och till det universella minnet. Är Fehu bränslet för det synliga är Laguz intuitionens ocean. Den formar, den föder, den tecknar in i minnet. På det gamla språket betyder den sjö och vatten. Den är inte en grund damm med en svan på.",
        "Den är ett vidsträckt vatten vars botten inte syns, som döljer både uråldrig visdom och det mörka odjuret. Livets vagga, och också drunkningens centrum. Man luras inte av speglingen på ytan. Man dyker. Vatten besegras inte. Man krigar inte med vatten. Byggs ett sunt skepp, det vill säga förnuft och vilja, bär vattnet dig till den horisont du vill. Inte en fiende. En vägvisare vars ström litas på.",
        "Vattnets fara är att det tar kärlets form, och att det som hålls hårt flyr mellan fingrarna. Flexibilitet och att gömma sig är för att förbli vid liv. Byter du ständigt form och flyr sanningen fastnar du i nätet du vävde i din egen ström.",
        "Laguz är inte is och inte en damm man äger. Dess balanserade tillstånd är intuition, empati, drömmedvetenhet, att gå runt hindret. Dess övermått är illusion, känslomässig utpressning, att drunkna i sin egen känsla, melankoli. Dess ansikte av brist är andlig torka, skapande blockering, känsla undertryckt tills den hårdnar. Djupet tillhör den som känner vägen ut."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Laguz) ve Tarihsel Rün Şiiri",
          "body": "Laguz rünü Proto-Cermence ‘*Laguz’ kökünden gelir ve Elder Futhark dizgesinde ‘l’ ses değerini taşır. Eski Norveç Rün Şiiri (XXI) kaynağında bu kapı şöyle mühürlenmiştir: “Su (Lögr) dağdan dökülen çağlayandır; ama denizde yelken açarken dalgalar gemiyi sarsar.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Derin sezgi, rüya rehberliği, engelin üstüne kafa atmak yerine su gibi etrafından dolanarak aşma, duygusal arınma ve akış. — Gölge / Tıkanmış Akış: Kendi duygularında ve melankolide boğulma, sınır koyamayıp her kabın şeklini alma, gerçeklerden kaçış veya duygusal kuraklık."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Laguz) and Historical Rune Poem",
          "body": "The rune Laguz derives from Proto-Germanic '*Laguz' and carries the phonetic value 'l' in the Elder Futhark. In the Old Norwegian Rune Poem (XXI), this door is recorded thus: “Water (Lögr) is a river falling from the mountain-side; yet deep and wide is the sea where the wave-steed pitches.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: Deep intuition, dream guidance, flowing around obstacles like water rather than shattering against them, and emotional cleansing. — Shadow / Blocked Current: Drowning in melancholy and emotional overwhelm, losing all boundaries to fit any vessel, escapism, or inner drought."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Laguz) och Historisk Rundikt",
          "body": "Runan Laguz härstammar från urgermanskans '*Laguz' och bär ljudvärdet 'l' i den äldre futharken. I Fornnorska rundikten (XXI) beskrivs denna port sålunda: ”Vatten (Lögr) är forsen som faller från fjället; men djupt är havet där vågorna prövar skeppet.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Djup intuition, drömvägledning, att likt vattnet flöda runt ett hinder istället för att krossas mot det samt känslomässig rening. — Skuggström / Blockering: Att drunkna i svårmod och känslosvall, att förlora sin form efter varje kärl eller inre uttorkning."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Laguz",
        "steps": [
          "Bir bardak temiz suya bakarak ‘Laaaa-guuuuz’ sesini akıcı bir dalga gibi çıkar ve suyu bilinçle yudumla.",
          "Zorlayarak açamadığın bir kapıda bugün inatlaşmayı bırak: ‘Su olsaydım bu kayanın etrafından nasıl akardım?’ diye düşün.",
          "Bu gece başucuna bir defter koy ve sabah gözünü açtığın ilk 60 saniye içinde gördüğün rüya imgesini kaydet."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Laguz",
        "steps": [
          "Hold a glass of pure water, intone a flowing 'Laaaa-guuuuz', and drink it slowly with full presence.",
          "Where you have been forcing a locked door, step back today and ask: 'If I were water, how would I flow around this rock?'",
          "Place a notebook beside your bed tonight and record the first dream image within sixty seconds of waking."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Laguz",
        "steps": [
          "Håll ett glas rent vatten, ljuda ett böljande 'Laaaa-guuuuz' och drick det långsamt i närvaro.",
          "Där du har stångat dig trött mot ett hinder, fråga dig idag: 'Om jag vore vatten, hur skulle jag rinna runt denna klippa?'",
          "Lägg en anteckningsbok vid sängen ikväll och skriv ned nattens första drömbild direkt när du vaknar."
        ]
      }
    },
    "closing": {
      "tr": "Suyla savaşılmaz; sağlam bir omurga (gemi) kurarsan okyanus seni ufka taşır.",
      "en": "One does not war with water; build a sound hull of reason, and the ocean will carry you to the horizon.",
      "sv": "Man krigar inte med vattnet; bygg ett fast skrov av vilja, så bär oceanen dig mot horisonten."
    },
    "practiceImage": "/runes/practice-laguz.jpg"
  },
  {
    "index": 22,
    "aett": 3,
    "slug": "ingwaz",
    "glyph": "ᛜ",
    "name": "Ingwaz",
    "protoGermanic": "*Ingwaz",
    "phoneme": "ŋ (ng)",
    "image": "/runes/rune-22-ingwaz.jpg",
    "deities": [
      "Ing",
      "Frey",
      "Freyja",
      "Nerthus"
    ],
    "subtitle": {
      "tr": "Toprak Altındaki Tohum, Kutsal Koza ve İçsel Birikim",
      "en": "The Seed Beneath the Earth, Sacred Cocoon, and Inner Gestation",
      "sv": "Fröet Under Jorden, den Heliga Kokongen och Inre Samling"
    },
    "element": {
      "tr": "Toprak ve İçsel Ateş (Tohum Çekirdeği)",
      "en": "Earth & Latent Fire (Seed Core)",
      "sv": "Jord & Inre Eld (Frökärnan)"
    },
    "poem": {
      "tr": {
        "source": "Anglosakson Rün Şiiri (XXII)",
        "quote": "“Ing (Yngvi-Freyr) ilk kez Doğu Danları arasında görüldü; sonra arabasıyla dalgaların üzerinden geçti ve geride adını bıraktı.”"
      },
      "en": {
        "source": "Old English Rune Poem (XXII)",
        "quote": "“Ing (Yngvi-Freyr) was first seen among the East-Danes, until he departed eastward over the wave, his wagon following.”"
      },
      "sv": {
        "source": "Fornengelska rundikten (XXII)",
        "quote": "”Ing (Yngvi-Frej) sågs först bland östdanerna, innan han drog österut över vågen med sin vagn efter sig.”"
      }
    },
    "text": {
      "tr": [
        "Ingwaz kutsal izolasyondur. Potansiyelin içe dönmesi, kuluçka dönemidir. Toprağın metrelerce altına ekilen tohumdur. Karanlıktadır, yalnızdır, dış dünyadan kopuktur. Ölü değildir. Dışarıdan hareket görünmez. Sert kabuğun içinde sancılı bir dönüşüm vardır.",
        "Tırtılın kelebeğe dönmek için kendini hapsettiği kozadır. Biriktirilen enerji, gürültüden ve müdahaleden korunarak doğum anına kadar saklanır. Eylem değildir. Eyleme en güçlü hazırlıktır. Meraklı göz kuluçkayı bozar. Örtünün altına bakan, işi kör eder. Büyüme gizlenerek olur.",
        "Mezar gibi görünen yer burada rahimdir. Bitti sanılan fikir toprağın altına, genetik hafızaya çekilmiş olabilir. Orada gelecekteki hasadı beslemeye devam eder. Durağan ve bekleyen bir enerjidir. Hız ve gösteriş isteyen yere uymaz. Süreç bitince koza bilinçle kapatılır. Yoksa koruma tabuta döner.",
        "Ingwaz eldeki para değildir ve ışığa çıkmış bitki değildir. Dengeli hâli sağlıklı kuluçka, depolanmış enerji, dış kaosun değmemesidir. Aşırısı kozadan hiç çıkmamaktır: “henüz hazır değilim,” tohumun altında çürümesi, izolasyonun hapishaneye dönmesi. Yoksun yüzü sabırsızlıktır. Toprağı eşeleyip tohumu öldürmek, ham üretim, enerjinin bir türlü toplanamaması."
      ],
      "en": [
        "Ingwaz is sacred isolation. Potential turned inward, the period of incubation. It is the seed sown meters under the soil. It is in the dark, alone, cut off from the outer world. It is not dead. No movement is seen from outside. Inside the hard shell there is a painful transformation.",
        "It is the cocoon in which the caterpillar imprisons itself in order to become the butterfly. The energy that was stored is kept, protected from noise and from interference, until the moment of birth. It is not action. It is the strongest preparation for action. A curious eye spoils the incubation. Whoever looks under the cover blinds the work. Growth happens by being hidden.",
        "The place that looks like a grave is a womb here. An idea thought finished may have been drawn under the soil, into genetic memory. There it goes on feeding the future harvest. It is a still and waiting energy. It does not suit a place that wants speed and display. When the process ends, the cocoon is closed with awareness. Otherwise protection turns into a coffin.",
        "Ingwaz is not the coin in the hand and it is not the plant already out in the light. Its balanced state is a healthy incubation, stored energy, the outer chaos not touching it. Its excess is never leaving the cocoon: “I am not ready yet,” the seed rotting underneath, isolation turned into a prison. Its face of lack is impatience. Digging the soil and killing the seed, raw production, energy that cannot be gathered."
      ],
      "sv": [
        "Ingwaz är helig isolering. Potential vänd inåt, ruvningens tid. Den är fröet sått metrar under jorden. Den är i mörkret, ensam, avskuren från den yttre världen. Den är inte död. Ingen rörelse syns utifrån. Inuti det hårda skalet finns en smärtsam förvandling.",
        "Den är kokongen i vilken larven fängslar sig för att bli fjärilen. Energin som lagrades hålls, skyddad från buller och från ingrepp, till födelsens stund. Den är inte handling. Den är den starkaste förberedelsen för handling. Ett nyfiket öga fördärvar ruvningen. Den som ser under täcket förblindar arbetet. Växt sker genom att vara dold.",
        "Platsen som ser ut som en grav är en livmoder här. En idé trodd avslutad kan ha dragits under jorden, in i det genetiska minnet. Där fortsätter den att föda den kommande skörden. Den är en stilla och väntande energi. Den passar inte en plats som vill ha hastighet och uppvisning. När processen tar slut stängs kokongen med medvetenhet. Annars blir skydd en kista.",
        "Ingwaz är inte myntet i handen och inte växten som redan är ute i ljuset. Dess balanserade tillstånd är en sund ruvning, lagrad energi, det yttre kaoset som inte rör den. Dess övermått är att aldrig lämna kokongen: ”jag är inte redo ännu,” fröet som ruttnar under, isolering vänd till ett fängelse. Dess ansikte av brist är otålighet. Att gräva jorden och döda fröet, rå produktion, energi som inte kan samlas."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Ingwaz) ve Tarihsel Rün Şiiri",
          "body": "Ingwaz rünü Proto-Cermence ‘*Ingwaz’ kökünden gelir ve Elder Futhark dizgesinde ‘ŋ (ng)’ ses değerini taşır. Anglosakson Rün Şiiri (XXII) kaynağında bu kapı şöyle mühürlenmiştir: “Ing (Yngvi-Freyr) ilk kez Doğu Danları arasında görüldü; sonra arabasıyla dalgaların üzerinden geçti ve geride adını bıraktı.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Enerjiyi dış gürültüden çekip içerde toplama, verimli yalnızlık (halvet/kuluçka), bir dönemin tam kapanıp yeni tohumun mühürlenmesi. — Gölge / Tıkanmış Akış: Kozadan çıkmaya korkup yalnızlığı hapishaneye çevirme (‘henüz hazır değilim’); ya da enerjisini hiç toplayamayıp dışarıya saçma."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Ingwaz) and Historical Rune Poem",
          "body": "The rune Ingwaz derives from Proto-Germanic '*Ingwaz' and carries the phonetic value 'ŋ (ng)' in the Elder Futhark. In the Old English Rune Poem (XXII), this door is recorded thus: “Ing (Yngvi-Freyr) was first seen among the East-Danes, until he departed eastward over the wave, his wagon following.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: Gathering scattered energy inward away from noise, fertile solitude and gestation, and cleanly sealing one chapter so the new seed can form. — Shadow / Blocked Current: Fearing to leave the cocoon so isolation becomes a tomb ('I am never ready')—or leaking energy outward before gestation is complete."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Ingwaz) och Historisk Rundikt",
          "body": "Runan Ingwaz härstammar från urgermanskans '*Ingwaz' och bär ljudvärdet 'ŋ (ng)' i den äldre futharken. I Fornengelska rundikten (XXII) beskrivs denna port sålunda: ”Ing (Yngvi-Frej) sågs först bland östdanerna, innan han drog österut över vågen med sin vagn efter sig.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Att samla spridd kraft inåt bortom bruset, fruktbar stillhet och att sluta ett kapitel helt så att det nya fröet kan mogna. — Skuggström / Blockering: Att aldrig våga lämna kokongen så att isoleringen blir ett fängelse — eller att läcka ut kraften i förtid."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Ingwaz",
        "steps": [
          "Parmak uçlarını karın bölgenin önünde eşkenar dörtgen (ᛜ) şeklinde birleştir ve genizden derin bir ‘İiiiing-vaaaaz’ sesi titreştir.",
          "Bugün dış dünyaya (telefonlara, mesajlara ve gürültüye) 1 saatliğine kapıyı kapatarak kendi iç kozana çekil.",
          "Zihninde açık kalmış ve enerjini sızdıran eski bir defteri bugün ‘Bu döngü tamamlandı’ diyerek bilinçle kapat."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Ingwaz",
        "steps": [
          "Join your fingertips before your solar plexus in the diamond shape of Ingwaz (ᛜ) and intone a deep nasal 'Iiiiing-waaaaz'.",
          "Close the door to external noise, messages, and demands for one uninterrupted hour today to rest inside your own cocoon.",
          "Consciously close one lingering old chapter that has been leaking your attention, sealing your energy for what comes next."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Ingwaz",
        "steps": [
          "Förena fingertopparna framför magen i Ingwaz rombform (ᛜ) och ljuda ett djupt 'Iiiiing-vaaaaz'.",
          "Stäng dörren mot yttre brus och meddelanden under en ostörd timme idag för att samla kraft i din egen kokong.",
          "Avsluta medvetet ett gammalt öppet ärende som läcker din energi."
        ]
      }
    },
    "closing": {
      "tr": "Tohum karanlıkta çatlar; örtünün altına erken bakan filizi kör eder.",
      "en": "The seed splits in the dark; whoever lifts the cover too soon blinds the shoot.",
      "sv": "Fröet spricker i mörkret; den som lyfter täcket för tidigt förblindar grodden."
    },
    "practiceImage": "/runes/practice-ingwaz.jpg"
  },
  {
    "index": 23,
    "aett": 3,
    "slug": "dagaz",
    "glyph": "ᛞ",
    "name": "Dagaz",
    "protoGermanic": "*Dagaz",
    "phoneme": "d",
    "image": "/runes/rune-23-dagaz.jpg",
    "deities": [
      "Dagr",
      "Nott",
      "Heimdall",
      "Ymir"
    ],
    "subtitle": {
      "tr": "Şafak Eşiği, Anlık Aydınlanma ve Kutupların Sentezi",
      "en": "The Dawn Threshold, Sudden Illumination, and Synthesis of Poles",
      "sv": "Gryningströskeln, Plötslig Upplysning och Polernas Syntes"
    },
    "element": {
      "tr": "Işık ve Eter (Gece ile Gündüzün Birleştiği Eşik)",
      "en": "Light & Aether (Threshold of Night and Day)",
      "sv": "Ljus & Eter (Gränsen mellan Natt och Dag)"
    },
    "poem": {
      "tr": {
        "source": "Anglosakson Rün Şiiri (XXIII)",
        "quote": "“Gün (Dæg) Yaradan’ın gönderdiği kutsal ışıktır; insanlara sevinç ve umut, yoksula ve zengine aynı ölçüde nimettir.”"
      },
      "en": {
        "source": "Old English Rune Poem (XXIII)",
        "quote": "“Day (Dæg) is the glorious light of the Creator, dear to men, a source of hope and blessing to rich and poor alike.”"
      },
      "sv": {
        "source": "Fornengelska rundikten (XXIII)",
        "quote": "”Dagen (Dæg) är det klara ljuset, kärt för människor, en källa till hopp och välsignelse för både hög och låg.”"
      }
    },
    "text": {
      "tr": [
        "Dagaz gündüz, şafak ve en derin anlamıyla uyanıştır. Gecenin en karanlık anının hemen ardından, güneşin ufku yardığı ilk keskin ışıktır. Arafta kalmak değildir. Gece ile gündüzün, bilinç ile bilinçdışının birleşip daha üstün bir gerçeği doğurmasıdır. Körlüğün bitişi, hakikatin çıplak görünmesidir.",
        "Kademeli süreç değildir. Anlık idrak patlamasıdır. Karanlıkta kaybolana fener vermez. Güneşi doğurur. Işık gelince saklanacak yer kalmaz. Gece korkutucu görünen gölge, ışık vurunca daldır. Bilinmeyenin korkusu, görmenin cesaretiyle düşer.",
        "Uyanıklıktır. İllüzyonun, yalanın ve kendini kandırmanın bittiği noktadır. Kimse yalan söyleyemez. En başta ego. Dengeli hâli “evreka”dır: zihin sisi dağılır, olayın içyüzü bir anda kavranır. Zıt kutuplar uzlaşır, yeni bir sentez çıkar.",
        "Dagaz yılın hasadı değildir ve kriz değildir. Jera olgunlaştırır. Dagaz eşiği yarar. Aşırısı ışık zehirlenmesidir: uykusuzluk, mani, her şeyin arkasında gizli anlam arayıp gerçeklikten kopmak. Yoksun yüzü beyin sisi, cehalet, “çıkış yok” inancıdır. Yüzleşmeye hazır değilsen bu ışık kör eder. Gün, karanlığı inkâr ederek değil, onu bitirerek başlar."
      ],
      "en": [
        "Dagaz is day, dawn, and in its deepest sense awakening. It is the first sharp light, right after the darkest moment of the night, when the sun splits the horizon. It is not remaining in between. It is night and day, consciousness and the unconscious, joining and giving birth to a higher truth. The end of blindness, truth seen bare.",
        "It is not a gradual process. It is an instant burst of understanding. It does not give a lantern to the one lost in the dark. It births the sun. When the light comes, no place remains to hide. The shadow that looked frightening at night is a branch when the light strikes. The fear of the unknown falls by the courage of seeing.",
        "It is wakefulness. The point where illusion, the lie, and self-deception end. No one can lie. The ego first of all. Its balanced state is “eureka”: the mental fog breaks, the inside of the event is grasped all at once. Opposite poles reconcile. A new synthesis comes out.",
        "Dagaz is not the year’s harvest and it is not a crisis. Jera ripens. Dagaz splits the threshold. Its excess is light-poisoning: sleeplessness, mania, searching a hidden meaning behind everything and breaking from reality. Its face of lack is brain fog, ignorance, the belief “there is no way out.” If you are not ready to face it, this light blinds. Day begins not by denying the dark, but by ending it."
      ],
      "sv": [
        "Dagaz är dag, gryning och i sin djupaste mening uppvaknande. Den är det första skarpa ljuset, strax efter nattens mörkaste stund, när solen spräcker horisonten. Den är inte att bli kvar däremellan. Den är natt och dag, medvetande och det omedvetna, som förenas och föder en högre sanning. Blindhetens slut, sanningen sedd naken.",
        "Den är inte en gradvis process. Den är en ögonblicklig bristning av förståelse. Den ger ingen lykta åt den som är vilse i mörkret. Den föder solen. När ljuset kommer finns ingen plats kvar att gömma sig. Skuggan som såg skrämmande ut om natten är en gren när ljuset slår. Rädslan för det okända faller genom seendets mod.",
        "Den är vakenhet. Punkten där illusion, lögn och självbedrägeri tar slut. Ingen kan ljuga. Egot först av allt. Dess balanserade tillstånd är ”heureka”: den mentala dimman bryts, händelsens insida grips på en gång. Motsatta poler försonas. En ny syntes kommer ut.",
        "Dagaz är inte årets skörd och inte en kris. Jera mognar. Dagaz spräcker tröskeln. Dess övermått är ljusförgiftning: sömnlöshet, mani, att söka en dold mening bakom allt och bryta från verkligheten. Dess ansikte av brist är hjärndimma, okunnighet, tron ”det finns ingen väg ut.” Är du inte redo att möta det förblindar detta ljus. Dagen börjar inte genom att förneka mörkret, utan genom att avsluta det."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Dagaz) ve Tarihsel Rün Şiiri",
          "body": "Dagaz rünü Proto-Cermence ‘*Dagaz’ kökünden gelir ve Elder Futhark dizgesinde ‘d’ ses değerini taşır. Anglosakson Rün Şiiri (XXIII) kaynağında bu kapı şöyle mühürlenmiştir: “Gün (Dæg) Yaradan’ın gönderdiği kutsal ışıktır; insanlara sevinç ve umut, yoksula ve zengine aynı ölçüde nimettir.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Gecenin en koyu anından sonra gelen ani şafak, ‘Evreka’ idraki, zıt kutupların (bilinç ve bilinçdışı) sonsuzluk (ᛞ) dengesinde birleşmesi. — Gölge / Tıkanmış Akış: Aşırı zihinsel uyarılma, uykusuzluk ve gerçeklikten kopma; ya da şafağın doğduğunu reddedip karanlık alışkanlıkta ısrar etme."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Dagaz) and Historical Rune Poem",
          "body": "The rune Dagaz derives from Proto-Germanic '*Dagaz' and carries the phonetic value 'd' in the Elder Futhark. In the Old English Rune Poem (XXIII), this door is recorded thus: “Day (Dæg) is the glorious light of the Creator, dear to men, a source of hope and blessing to rich and poor alike.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: The sudden break of dawn after the darkest hour, a 'Eureka' shift in perception, and the union of opposite poles in the lemniscate of Dagaz (ᛞ). — Shadow / Blocked Current: Manic over-stimulation, sleeplessness, and losing touch with the ground—or refusing to open the shutters when dawn has already broken."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Dagaz) och Historisk Rundikt",
          "body": "Runan Dagaz härstammar från urgermanskans '*Dagaz' och bär ljudvärdet 'd' i den äldre futharken. I Fornengelska rundikten (XXIII) beskrivs denna port sålunda: ”Dagen (Dæg) är det klara ljuset, kärt för människor, en källa till hopp och välsignelse för både hög och låg.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Det plötsliga gryningsljuset efter nattens mörkaste timme, en 'Heureka'-insikt och föreningen av motsatta poler i Dagaz form (ᛞ). — Skuggström / Blockering: Överstimulering och sömnlöshet — eller att hålla fönsterluckorna stängda när gryningen redan har brutit in."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Dagaz",
        "steps": [
          "Alacakaranlıkta (şafak veya günbatımı eşiğinde) kollarını göğsünde sonsuzluk/kelebek (ᛞ) formunda çaprazla ve ‘Daaaa-gaaaaz’ sesini ver.",
          "Hayatında ‘ya siyah ya beyaz’ diye iki uçta sıkıştığın bir konuda, iki kutbu da aşan üçüncü bir sentez yolu bul.",
          "Karanlıkta gözünde büyüttüğün bir korkunun üzerine bugün doğrudan bak: Işık vurduğunda gölgenin sadece bir dal olduğunu gör."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Dagaz",
        "steps": [
          "At twilight (dawn or dusk), cross your arms before your chest in the hourglass/butterfly form of Dagaz (ᛞ) and intone 'Daaaa-gaaaaz'.",
          "In a dilemma where you feel trapped between two extremes ('either/or'), look for the third synthesis that unites both poles.",
          "Look directly at one fear magnified by the dark today; see how the shadow shrinks when met with clear light."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Dagaz",
        "steps": [
          "I gryningen eller skymningen, korsa armarna framför bröstet i Dagaz timglasform (ᛞ) och ljuda 'Daaaa-gaaaaz'.",
          "I en fråga där du känner dig låst mellan två ytterligheter ('antingen/eller'), sök den tredje syntesen som förenar polerna.",
          "Se rakt på en rädsla som vuxit i mörkret idag; märk hur skuggan krymper när ljuset faller på den."
        ]
      }
    },
    "closing": {
      "tr": "Şafak karanlığı inkâr ederek değil, geceyi tamamlayarak doğar.",
      "en": "Dawn breaks not by denying the dark, but by completing the night.",
      "sv": "Gryningen gryr inte genom att förneka mörkret, utan genom att fullborda natten."
    },
    "practiceImage": "/runes/practice-dagaz.jpg"
  },
  {
    "index": 24,
    "aett": 3,
    "slug": "othala",
    "glyph": "ᛟ",
    "name": "Othala",
    "protoGermanic": "*Ōþalan",
    "phoneme": "o",
    "image": "/runes/rune-24-othala.jpg",
    "deities": [
      "Odin"
    ],
    "subtitle": {
      "tr": "Ata Mülkü, Kutsal Ocak, Sınır ve Köklü Miras",
      "en": "Ancestral Homestead, Sacred Hearth, Boundary, and Rooted Heritage",
      "sv": "Fädernegård, Helig Härd, Gräns och Rotat Arv"
    },
    "element": {
      "tr": "Toprak (Çevrelenmiş ve Kutsanmış Vatan / Ocak)",
      "en": "Earth (Enclosed and Consecrated Homestead)",
      "sv": "Jord (Inhägnad och Helgad Hemgård)"
    },
    "poem": {
      "tr": {
        "source": "Anglosakson Rün Şiiri (XXIV)",
        "quote": "“Ata yurdu (Ēðel) her insan için çok azizdir; eğer orada, kendi evinde hakkaniyetle ve huzur içinde yaşayabiliyorsa.”"
      },
      "en": {
        "source": "Old English Rune Poem (XXIV)",
        "quote": "“An ancestral estate (Ēðel) is very dear to every man, if he can enjoy there in his house what is right and fitting in constant peace.”"
      },
      "sv": {
        "source": "Fornengelska rundikten (XXIV)",
        "quote": "”Fädernegården (Ēðel) är mycket kär för varje människa, om hon där i sitt hus får njuta rätt och ständig frid.”"
      }
    },
    "text": {
      "tr": [
        "Othala tapu, ev ya da taşınmaz mülk değildir. Kutsal yuva ve mirastır. Fehu hiç durmayan, akan, harcanması gereken enerjidir. Othala o enerjinin durulduğu, biriktiği, kök saldığı havuzdur. Yolculuk kıvılcımla başlar. Sıcak ocakta tamamlanır. Göçebe olan fethetmek için çıkar. Yerleşik olan fethettiği toprağa sınır çizer ve orayı yuva yapar.",
        "Yalnızca maddi ev değil, ruhun yuvasıdır. Atalardan gelen şifre, yetenek, kan hafızası ve ailenin şansı buradadır. İçerisi yasa, düzen ve güvenliğin olduğu yerdir. Dışarısı kaosdur. Sınırı olmayan ev, ev değildir. Aynı zamanda yalnızca içine doğulan biyolojik aile değildir. Aynı yolda yürüyen seçilmiş kabile de bu yuvadır.",
        "En büyük miras başkasından kalan değildir. Kendi özünden sahip çıkılandır. Kök toprağa tutunur. Zihin sınırın içinde hapsolmaz. Dışarıdaki sırrı öğrenip eve taşır. Evde saklanarak ev korunmaz.",
        "Othala satın alınmış mülk değildir ve her ata bilge değildir. Dengeli hâli derin güven, sağlam temel, aidiyet, savrulmamaktır. Aşırısı geçmişe zehirli saplantıdır: eski güne kapanmak, yeniliğe duvar örmek, güvenli alanda boğulmak. Yoksun yüzü sürgündür. “Hiçbir yere ait değilim,” kopmuş bağ, köksüzlük. Burada kal emri, uzaklaşması istenen şeye verilmez."
      ],
      "en": [
        "Othala is not a deed, a house, or immovable property. It is the sacred home and the inheritance. Fehu is the energy that never stops, that flows, that must be spent. Othala is the pool where that energy settles, gathers, and takes root. The journey begins with the spark. It is completed at the warm hearth. The nomad sets out in order to conquer. The settled one draws a limit on the ground that was conquered and makes it a home.",
        "Not only a material house. The home of the spirit. The cipher that comes from the ancestors, the talent, the memory of the blood, and the family’s luck sit here. The inside is the place of law, order, and safety. The outside is chaos. A house without a limit is not a house. It is also not only the biological family one was born into. The chosen tribe that walks the same road is this home too.",
        "The greatest inheritance is not what remains from someone else. It is what is claimed from one’s own essence. The root holds the soil. The mind is not imprisoned inside the limit. It learns the secret outside and carries it home. A house is not protected by hiding in the house.",
        "Othala is not property that was bought, and not every ancestor was wise. Its balanced state is a deep safety, a sound foundation, belonging, not being thrown about. Its excess is a poisonous obsession with the past: closing onto the old day, walling off the new, drowning in the safe field. Its face of lack is exile. “I belong nowhere,” a broken bond, rootlessness. The order to stay here is not given to a thing one wants to leave."
      ],
      "sv": [
        "Othala är inte ett skötebrev, ett hus eller fast egendom. Den är det heliga hemmet och arvet. Fehu är energin som aldrig stannar, som flyter, som måste förbrukas. Othala är dammen där den energin stillnar, samlas och slår rot. Färden börjar med gnistan. Den fullbordas vid den varma härden. Nomaden ger sig av för att erövra. Den bofaste drar en gräns på marken som erövrades och gör den till ett hem.",
        "Inte bara ett materiellt hus. Andens hem. Chiffret som kommer från förfäderna, talangen, blodets minne och familjens tur sitter här. Insidan är platsen för lag, ordning och trygghet. Utsidan är kaos. Ett hus utan gräns är inte ett hus. Det är heller inte bara den biologiska familj man föddes in i. Den valda stammen som går samma väg är också detta hem.",
        "Det största arvet är inte det som blir kvar från någon annan. Det är det som tas i anspråk ur ens egen essens. Roten håller jorden. Sinnet fängslas inte inuti gränsen. Det lär hemligheten utanför och bär den hem. Ett hus skyddas inte genom att gömma sig i huset.",
        "Othala är inte egendom som köpts, och inte varje förfader var vis. Dess balanserade tillstånd är en djup trygghet, en sund grund, tillhörighet, att inte slungas. Dess övermått är en giftig besatthet av det förflutna: att sluta sig kring den gamla dagen, att mura av det nya, att drunkna i det trygga fältet. Dess ansikte av brist är landsflykt. ”Jag hör ingenstans,” ett brutet band, rotlöshet. Ordern att stanna här ges inte åt en sak man vill lämna."
      ]
    },
    "chapters": {
      "tr": [
        {
          "heading": "Filolojik Köken (*Ōþalan) ve Tarihsel Rün Şiiri",
          "body": "Othala rünü Proto-Cermence ‘*Ōþalan’ kökünden gelir ve Elder Futhark dizgesinde ‘o’ ses değerini taşır. Anglosakson Rün Şiiri (XXIV) kaynağında bu kapı şöyle mühürlenmiştir: “Ata yurdu (Ēðel) her insan için çok azizdir; eğer orada, kendi evinde hakkaniyetle ve huzur içinde yaşayabiliyorsa.”"
        },
        {
          "heading": "Okumada Düz (Heill) ve Gölge (Merkstave) Akış",
          "body": "Dengeli / Düz Akış: Fehu ile başlayan enerjinin kalıcı bir yuvaya, esere ve mirasa dönüşmesi; soy hafızasından gelen yetenekler, sağlam sınır ve aidiyet. — Gölge / Tıkanmış Akış: Geçmişe ve eski kalıplara körü körüne saplanma, dış dünyaya duvar örme; ya da köksüzlük, yersizlik ve mirası çarçur etme."
        }
      ],
      "en": [
        {
          "heading": "Philological Root (*Ōþalan) and Historical Rune Poem",
          "body": "The rune Othala derives from Proto-Germanic '*Ōþalan' and carries the phonetic value 'o' in the Elder Futhark. In the Old English Rune Poem (XXIV), this door is recorded thus: “An ancestral estate (Ēðel) is very dear to every man, if he can enjoy there in his house what is right and fitting in constant peace.”"
        },
        {
          "heading": "Upright (Heill) and Shadow (Merkstave) Current in Readings",
          "body": "Aligned / Upright Current: The culmination of Fehu's mobile energy into an enduring home, work, and legacy; ancestral gifts, firm boundaries, and deep belonging. — Shadow / Blocked Current: Blindly clinging to outdated ancestral dogma and walling off the world—or rootlessness, exile, and squandering one's heritage."
        }
      ],
      "sv": [
        {
          "heading": "Filologisk Rot (*Ōþalan) och Historisk Rundikt",
          "body": "Runan Othala härstammar från urgermanskans '*Ōþalan' och bär ljudvärdet 'o' i den äldre futharken. I Fornengelska rundikten (XXIV) beskrivs denna port sålunda: ”Fädernegården (Ēðel) är mycket kär för varje människa, om hon där i sitt hus får njuta rätt och ständig frid.”"
        },
        {
          "heading": "Rättvänd (Heill) och Skuggvänd (Merkstave) Ström i Läsning",
          "body": "Balanserad ström: Fullbordan av Fehus rörliga kraft i ett bestående hem, verk och arv; förfädernas gåvor, fasta gränser och djup förankring. — Skuggström / Blockering: Att blint klamra sig fast vid föråldrade mönster — eller rotlöshet och att förskingra sitt inre arv."
        }
      ]
    },
    "practice": {
      "tr": {
        "title": "Galdr, Duruş (Stöðul) ve Günlük Çalışma · Othala",
        "steps": [
          "Ayaklarını sağlam basıp başının üstünde ellerini çatı (ᛟ) gibi birleştir; göğsünden derin bir ‘Ooooo-thaaaa-laaa’ sesi titreştir.",
          "Ailenden ve atalarından sana geçen mirası ikiye ayır: ‘Bana güç veren yetenek ve erdemler’ (koru) ile ‘Bende bitmesi gereken eski korkular’ (bırak).",
          "Yaşadığın evi veya çalışma alanını bugün fiziksel olarak düzenle; çünkü dış mekanın sınırı, iç dünyandaki kalenin aynasıdır."
        ]
      },
      "en": {
        "title": "Galdr, Posture (Stöðul) & Daily Practice · Othala",
        "steps": [
          "Plant your feet firmly and join your hands above your head like a pitched roof (ᛟ), intoning a deep 'Ooooo-thaaaa-laaa'.",
          "Sort your ancestral inheritance into two parts: the virtues and talents that strengthen you (keep), and the outdated fears that end with you (release).",
          "Put your physical home or study in order today, knowing the boundary of your room mirrors the fortress of your spirit."
        ]
      },
      "sv": {
        "title": "Galdr, Hållning (Stöðul) & Daglig Praktik · Othala",
        "steps": [
          "Stå stadigt med fötterna i marken och förena händerna ovanför huvudet som ett tak (ᛟ) medan du ljudar ett djupt 'Ooooo-thaaaa-laaa'.",
          "Skilj ditt arv i två delar: de gåvor och dygder som stärker dig (bevara) och de gamla rädslor som slutar med dig (släpp).",
          "Ordna ditt fysiska hem eller arbetsrum idag; rummets gräns speglar andens borg."
        ]
      }
    },
    "closing": {
      "tr": "Yolculuk Fehu’nun kıvılcımıyla başlar, Othala’nın sıcak ocağında tamamlanır.",
      "en": "The journey begins with the spark of Fehu and is completed at the warm hearth of Othala.",
      "sv": "Vandringen börjar med Fehus gnista och fullbordas vid Othalas varma härd."
    },
    "practiceImage": "/runes/practice-othala.jpg"
  }
];

export function runeBySlug(slug: string): Rune | undefined {
  return runes.find((r) => r.slug === slug);
}
