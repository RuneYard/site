import type { Lang } from "@/lib/copy";

export type TraditionSlug = "saman" | "kelt" | "mezopotamya" | "witchcraft" | "shop";

export type TraditionSubDoor = {
  slug: string;
  glyph: string;
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
  paragraphs: Record<Lang, readonly string[]>;
  items?: Record<Lang, readonly string[]>;
  closing: Record<Lang, string>;
  ctaHref?: string;
  ctaLabel?: Record<Lang, string>;
  whatsapp?: boolean;
};

export type TraditionHall = {
  slug: TraditionSlug;
  title: Record<Lang, string>;
  line: Record<Lang, string>;
  backLabel: Record<Lang, string>;
  doors: readonly TraditionSubDoor[];
};

export const traditions: Record<TraditionSlug, TraditionHall> = {
  saman: {
    slug: "saman",
    title: {
      tr: "Şaman",
      en: "Shaman",
      sv: "Schaman",
    },
    line: {
      tr: "Üç dünya, düngürün sesi, Seidr ve ruh yolculuğu — her biri kendi kapısı.",
      en: "Three worlds, the voice of the drum, Seidr, and soul journeying — each its own door.",
      sv: "Tre världar, trummans röst, Seidr och själsresor — var och en sin egen dörr.",
    },
    backLabel: {
      tr: "Şamana dön",
      en: "Back to Shaman",
      sv: "Tillbaka till Schaman",
    },
    doors: [
      {
        slug: "uc-dunya",
        glyph: "I",
        title: {
          tr: "Üç Dünya ve Dünya Ağacı",
          en: "The Three Worlds and the World Tree",
          sv: "De tre världarna och Världsträdet",
        },
        summary: {
          tr: "Alt, Orta ve Üst Dünya; kök, gövde ve dalın kozmolojisi.",
          en: "Lower, Middle, and Upper Worlds; the cosmology of root, trunk, and branch.",
          sv: "Under-, Mellan- och Övervärlden; rotens, stammens och grenens kosmologi.",
        },
        paragraphs: {
          tr: [
            "Şamanizm bir inanç kalıbı değil, doğanın canlı hafızasıyla kurulan doğrudan temas tekniğidir. Evren birbiriyle konuşan üç katmandan oluşur ve bu üç katmanı Dünya Ağacı birbirine bağlar. Ağacın kökleri karanlık toprağın derinliklerine iner, gövdesi rüzgarın ve insanın yürüdüğü yeryüzünde durur, dalları ise yıldızların düzenine uzanır.",
            "Köklenmeyen ağaç boy veremez. Bu yüzden şamanik çalışmada ilk adım göğe uçmak değil, önce kendi toprağına, bedenine ve köklerine inmektir.",
          ],
          en: [
            "Shamanism is not a fixed creed, but a direct technique of communion with the living memory of nature. The cosmos is woven of three conversing planes joined by the World Tree: its roots sink into the dark soil, its trunk stands where wind and human walk, and its branches reach into the order of the stars.",
            "A tree without roots cannot rise. Therefore the first step in shamanic work is not to fly upward, but to descend into one’s own earth, body, and roots.",
          ],
          sv: [
            "Schamanism är inte en fast trosformel, utan en direkt teknik för kontakt med naturens levande minne. Kosmos består av tre samtalande skikt förenade av Världsträdet: rötterna sjunker i den mörka jorden, stammen står där människan vandrar och grenarna sträcker sig mot stjärnornas ordning.",
            "Ett träd utan rötter kan inte resa sig. Därför är första steget i schamanistiskt arbete att stiga ned i sin egen jord, kropp och rot.",
          ],
        },
        items: {
          tr: [
            "Alt Dünya (Kökler ve Toprağın Hafızası): Geçmişin, ata ruhlarının, içgüdüsel kuvvetin ve koruyucu güç hayvanlarının diyarıdır. Kişi kendi gölgesiyle ve ham gücüyle burada yüzleşir.",
            "Orta Dünya (Gövde ve Dört Yön): İçinde nefes aldığımız dünyadır. Dağın, suyun, ateşin ve ağaçların iyeleriyle (ruhlarıyla) karşılıklı saygı içinde yaşamayı; doğunun rüzgarını, güneyin ateşini, batının suyunu ve kuzeyin toprağını tanımayı öğretir.",
            "Üst Dünya (Dallar ve Göksel Düzen): Bilgelik rehberlerinin, yıldız hafızasının ve geniş bakışın katmanıdır. Buradan alınan görü, Orta Dünya’da somut bir şifaya ve eyleme dönüştürülmek içindir.",
          ],
          en: [
            "The Lower World (Roots and Earth Memory): The realm of ancestors, primal endurance, and guardian power animals, where one meets both shadow and raw strength.",
            "The Middle World (Trunk and the Four Directions): The world in which we breathe. It teaches reciprocity with the spirits of mountain, water, fire, and tree across the four winds.",
            "The Upper World (Branches and Celestial Order): The plane of teachers, star memory, and wide vision, brought back as concrete healing in the Middle World.",
          ],
          sv: [
            "Undervärlden (Rötter och jordens minne): Förfädernas, urkraftens och kraftdjurens rike där människan möter sin skugga och sin råa styrka.",
            "Mellanvärlden (Stam och de fyra väderstrecken): Den värld där vi andas. Den lär ut ömsesidig respekt med bergens, vattnets, eldens och trädens andar.",
            "Övervärlden (Grenar och himmelsk ordning): Lärarnas, stjärnminnets och den vida blickens plan som bärs ned till konkret läkning.",
          ],
        },
        closing: {
          tr: "Kökü sağlam olanın dalı fırtınada kırılmaz; üç dünyayı tanıyan kendi merkezinde yürür.",
          en: "The branch whose root holds fast does not break in the storm; whoever knows the three worlds walks in their own center.",
          sv: "Den gren vars rot står fast bryts inte i stormen; den som känner de tre världarna vandrar i sitt eget centrum.",
        },
        ctaHref: "/egitim/samanizm",
        ctaLabel: {
          tr: "Şamanizm Eğitimi Müfredatını İncele",
          en: "View Shamanism Training Curriculum",
          sv: "Se studieplanen för Schamanismutbildningen",
        },
      },
      {
        slug: "dungur-ve-nefes",
        glyph: "II",
        title: {
          tr: "Düngür, Nefes ve Ruh Şarkısı",
          en: "The Drum, Breath, and Spirit Song",
          sv: "Trumman, andedräkten och själssången",
        },
        summary: {
          tr: "Şaman davulunun ritmi, Önd yaşam nefesi, tamgalar ve sesle trans eşiği.",
          en: "The pulse of the shamanic drum, Önd life-breath, tamgas, and vocal trance.",
          sv: "Schamantrummans puls, Önd livsandedräkt, tamgor och tranströskeln.",
        },
        paragraphs: {
          tr: [
            "Şaman davulu (düngür) yalnızca bir müzik aleti değildir; şamanın diyarlar arasında yol aldığı bineğidir. Davulun derisi doğanın bedenini, kasnağı ise dünya ağacını temsil eder. Tekdüze ve kalp atışına yakın vuruşlar, zihnin günlük gürültüsünü indirerek bilinci trans eşiğine taşır.",
            "Ritim yolu açarken yönü tutan şey nefestir. Doğru nefes olmadan yapılan ritüel yalnızca dışsal bir harekettir; nefes girdiğinde niyet can bulur.",
          ],
          en: [
            "The shamanic drum (düngür) is not merely an instrument; it is the steed upon which awareness rides between realms. Its hide carries the memory of the living creature, its rim the wood of the world tree. Its steady heartbeat pulse quiets everyday noise and carries the mind across the threshold of trance.",
            "While rhythm opens the road, breath holds the direction. Without conscious breath a rite remains outer motion; when breath enters, intention comes alive.",
          ],
          sv: [
            "Schamantrumman (düngür) är inte bara ett instrument; den är fålen som bär medvetandet mellan världarna. Dess jämna puls likt ett hjärtslag stillar vardagens brus och för sinnet över tranströskeln.",
            "Medan rytmen öppnar vägen håller andedräkten riktningen. När medveten andning träder in får avsikten liv.",
          ],
        },
        items: {
          tr: [
            "Düngür ve Çıngırak: Çıngırağın hışırtısı alanı dağıtıp temizlerken, davulun tok sesi merkezi kurar ve yolculuğu başlatır.",
            "Önd (Yaşam Nefesi): Gündoğumu ve geçit nefesleriyle bedendeki durgun enerjiyi uyandırma, zihni tek bir noktada toplama.",
            "Ruh Şarkısı ve Tamgalar: Her kişinin kendi iç titreşimi, kendi ezgisi ve koruyucu tamgası vardır. Gırtlaktan çıkan doğal ses, kilitli kalan enerji blokajlarını görünür kılar ve çözer.",
          ],
          en: [
            "Drum and Rattle: While the rattle scatters and clears stagnant air, the deep voice of the drum establishes the center and begins the journey.",
            "Önd (Life-Breath): Awakening dormant vitality and gathering the mind into a single point through threshold breathing.",
            "Spirit Song and Tamgas: Every person carries an inner resonance, a song, and a protective seal (tamga). Unforced vocal vibration reveals and dissolves hidden blockages.",
          ],
          sv: [
            "Trumma och skallra: Medan skallran rensar rummet bygger trummans djupa röst upp centrum och inleder färden.",
            "Önd (Livsandedräkt): Att väcka vilande kraft och samla sinnet genom tröskelandning.",
            "Själssång och tamgor: Varje människa bär en inre klang och ett skyddstecken (tamga). Röstens vibration löser upp dolda blockeringar.",
          ],
        },
        closing: {
          tr: "Davul sustuğunda bile ritim kanda devam eder; kendi şarkısını hatırlayan sesinden korkmaz.",
          en: "Even when the drum falls silent, the rhythm continues in the blood; whoever remembers their song does not fear their own voice.",
          sv: "Även när trumman tystnar fortsätter rytmen i blodet; den som minns sin sång fruktar inte sin egen röst.",
        },
      },
      {
        slug: "seidr-ve-kuzey",
        glyph: "III",
        title: {
          tr: "Seidr, Völva ve Kuzeyin Kalbi",
          en: "Seidr, Völva, and the Northern Heart",
          sv: "Seidr, Völva och Nordens hjärta",
        },
        summary: {
          tr: "Hugr · Önd · Hamr bilinç katmanları, Wyrd kader ağı ve Galdr ses sanatı.",
          en: "Hugr · Önd · Hamr soul layers, the web of Wyrd, and the vocal art of Galdr.",
          sv: "Hugr · Önd · Hamr medvetandeskikt, Wyrd-väven och Galdr.",
        },
        paragraphs: {
          tr: [
            "Kuzey geleneğinin şamanik kalbi Seidr’dir. Freyja’nın öğrettiği ve Odin’in dokuz gece Yggdrasil’de asılı kalarak bedelini ödediği bu yol, bilinci bükme ve görünmeyen ağları okuma disiplinidir.",
            "Kuzey kozmolojisinde kader önceden taşlara kazınmış değişmez bir hüküm değildir; geçmişin, şimdinin ve niyetin ipleriyle örülmekte olan canlı bir dokudur (Wyrd). Völva (asa taşıyan kâhin), yüksek koltuğunda (Seidhjallr) transa geçerek bu iplerin nereye bağlandığını görür.",
          ],
          en: [
            "The shamanic heart of the Northern tradition is Seidr. Taught by Freyja and won by Odin through nine nights upon Yggdrasil, this path is the discipline of shifting consciousness and reading the unseen threads.",
            "In Northern lore, fate is not a frozen sentence carved in stone; it is a living fabric (Wyrd) woven from past action, present stance, and intention. The Völva (staff-bearing seeress) enters trance to see where those threads bind.",
          ],
          sv: [
            "Det schamanistiska hjärtat i nordisk tradition är Seidr. Lärd av Freyja och vunnen av Oden genom nio nätter i Yggdrasil är denna väg konsten att skifta medvetandet och läsa de osynliga trådarna.",
            "I nordisk visdom är ödet inte en frusen dom, utan en levande väv (Wyrd). Völvan (stavbärerskan) träder i trans för att se hur trådarna löper.",
          ],
        },
        items: {
          tr: [
            "Hugr · Önd · Hamr: İskandinav bilgeliğinde ruh üç katmanlıdır. Hugr aktif düşünce, niyet ve iradedir; Önd yaşam nefesidir; Hamr ise bilincin yolculuk sırasında büründüğü enerjetik kılıftır.",
            "Urd Kuyusu ve Wyrd Örücülüğü: Geçmişten taşınan düğümleri görmek, kilitli kalan akışı çözmek ve yeni niyeti ağa doğru yerden bağlamak.",
            "Galdr ve Canlı Rün Formları: Rünleri yalnızca kağıt üzerinde birer harf olarak değil, sesle (Galdr) ve nefesle çağrılan canlı arketip kapıları olarak deneyimlemek.",
          ],
          en: [
            "Hugr · Önd · Hamr: In Norse wisdom the soul has three layers. Hugr is directed thought and will; Önd is the breath of life; Hamr is the subtle form assumed in journeying.",
            "Well of Urd and Weaving Wyrd: Recognizing knots carried from the past, untying stagnant currents, and binding intention cleanly into the web.",
            "Galdr and Living Rune Forms: Experiencing the runes not as flat letters on paper, but as living archetypal doors awakened through vocal resonance (Galdr).",
          ],
          sv: [
            "Hugr · Önd · Hamr: I nordisk visdom har själen tre skikt. Hugr är riktad tanke och vilja; Önd är livsandan; Hamr är den subtila dräkt som bärs under färden.",
            "Urds brunn och Wyrd-vävning: Att se knutar från det förflutna, lösa upp stagnerade strömmar och fästa avsikten rätt i väven.",
            "Galdr och levande runformer: Att möta runorna som levande portar väckta genom röstens klang (Galdr).",
          ],
        },
        closing: {
          tr: "Kader ağını gören ondan korkmaz; hangi ipi tutacağını ve hangi düğümü çözeceğini bilir.",
          en: "Whoever sees the web of fate does not fear it; they know which thread to hold and which knot to untie.",
          sv: "Den som ser ödets väv fruktar den inte; hon vet vilken tråd som ska hållas och vilken knut som ska lösas.",
        },
      },
      {
        slug: "otacilik-ve-alan",
        glyph: "IV",
        title: {
          tr: "Otacılık, Ruh Parçaları ve Alan Tutma",
          en: "Herbalism, Soul Retrieval, and Sacred Space",
          sv: "Örtlära, själsåterhämtning och heligt rum",
        },
        summary: {
          tr: "Ruh parçalarının geri getirilmesi, yön kapıları, ağaç iyeleri ve şamanik şifa.",
          en: "Soul retrieval, directional gates, tree spirits, and shamanic healing.",
          sv: "Själsåterhämtning, väderstreckens portar, trädandar och schamanistisk läkning.",
        },
        paragraphs: {
          tr: [
            "Şamanik şifa, hastalığı veya tıkanıklığı yalnızca bedende aramaz; önce enerjinin nerede eksildiğine ya da nereye takılı kaldığına bakar. Ağır kayıplar, ani korkular veya uzun süren baskılar insanın yaşama sevincinin bir parçasını (ruh parçasını) o olayın yaşandığı anda geride bırakmasına neden olabilir.",
            "Otacılık ve alan tutma, bu dağınıklığı toplamak için güvenli bir çember kurma sanatıdır. Alan mühürlenmeden yapılan çalışma rüzgarda yakılan mum gibidir.",
          ],
          en: [
            "Shamanic healing does not look for imbalance in the physical body alone; it asks where vitality was lost or left behind. Deep grief, sudden shock, or prolonged strain can cause a fragment of life-force to remain fixed in the past.",
            "Herbalism and space-holding establish a secure circle in which scattered strength can return. Work done without sealing the space is like a candle lit in the wind.",
          ],
          sv: [
            "Schamanistisk läkning söker inte obalans enbart i kroppen; den frågar var livskraften gått förlorad eller fastnat. Djup sorg eller plötslig chock kan lämna en del av livsgnistan kvar i det förflutna.",
            "Örtlära och att hålla heligt rum skapar en trygg cirkel där splittrad kraft kan återvända.",
          ],
        },
        items: {
          tr: [
            "Ruh Parçalarının Geri Getirilmesi: Eksilen yaşam enerjisini şamanik yolculukla bulup nefesle kalp ve göbek merkezine yeniden mühürleme.",
            "Ağaç İyeleriyle Çalışma: Kayın (başlangıç ve dua), meşe (omurga ve dayanıklılık), ardıç (arınma ve eşik) ve porsuk (ata hafızası) ağaçlarının ruhlarıyla temas.",
            "Nazar, Kurşun Dökme ve Enerjetik Temizlik: Dışarıdan yapışan ağır niyetleri su, ateş, tuz ve eriyen metalin formu üzerinden okuma ve çözme.",
            "Kutsal Alan ve Labirent: Çalışma öncesi dört yönü ve merkezi açma, iş bittiğinde kapıları saygıyla kapatma.",
          ],
          en: [
            "Soul Retrieval: Locating lost vitality through journeying and sealing it back into the heart and navel centers through breath.",
            "Working with Tree Spirits: Communion with the spirits of birch (prayer and beginning), oak (spine and endurance), juniper (purification), and yew (ancestral memory).",
            "Energetic Cleansing and Lead Pouring: Reading and dissolving heavy outer imprints through water, fire, salt, and molten form.",
            "Sacred Space and the Labyrinth: Opening the four directions and center before work, and closing the gates with respect when complete.",
          ],
          sv: [
            "Själsåterhämtning: Att finna förlorad livskraft under resan och försegla den åter i hjärt- och navelcentrum.",
            "Arbete med trädandar: Kontakt med björk, ek, en och idegran.",
            "Energetisk rening: Att läsa och lösa upp tunga yttre avtryck genom vatten, eld och salt.",
            "Heligt rum och labyrint: Att öppna de fyra väderstrecken och centrum före arbete och sluta portarna med vördnad.",
          ],
        },
        closing: {
          tr: "Şifa dışarıdan eklenen yabancı bir güç değil, kişinin kendi dağılmış bütünlüğünün eve dönmesidir.",
          en: "Healing is not a foreign power added from outside; it is the return home of one’s own scattered wholeness.",
          sv: "Läkning är inte en främmande kraft utifrån, utan hemkomsten av människans egen splittrade helhet.",
        },
        ctaHref: "/egitim/samanizm",
        ctaLabel: {
          tr: "Şamanizm Eğitimi Müfredatını İncele",
          en: "View Shamanism Training Curriculum",
          sv: "Se studieplanen för Schamanismutbildningen",
        },
      },
    ],
  },

  kelt: {
    slug: "kelt",
    title: {
      tr: "Kelt",
      en: "Celtic",
      sv: "Keltisk",
    },
    line: {
      tr: "Kutsal koru Nemeton, Ogham’ın yirmi ağaç kapısı ve mevsim çarkı.",
      en: "The sacred grove of Nemeton, the twenty tree doors of Ogham, and the wheel of the year.",
      sv: "Den heliga lunden Nemeton, Oghams tjugo träddörrar och årshjulet.",
    },
    backLabel: {
      tr: "Kelte dön",
      en: "Back to Celtic",
      sv: "Tillbaka till Keltisk",
    },
    doors: [
      {
        slug: "nemeton-ve-cark",
        glyph: "✦",
        title: {
          tr: "Nemeton ve Mevsim Çarkı",
          en: "Nemeton and the Wheel of the Year",
          sv: "Nemeton och årshjulet",
        },
        summary: {
          tr: "Taş duvarsız tapınak korusu, Awen ilhamı ve yılın sekiz ateş eşiği.",
          en: "The unwalled temple grove, Awen inspiration, and the eight thresholds of the year.",
          sv: "Den murolösa tempellunden, Awen och årets åtta trösklar.",
        },
        paragraphs: {
          tr: [
            "Kelt geleneğinde tapınak insan eliyle örülmüş taş duvarlar değildir; tapınak Nemeton’dur — meşe, dişbudak, porsuk ve alıç ağaçlarının gökyüzüyle buluştuğu canlı koru. Bilgelik kağıt yapraklarda değil, yaşayan ağacın kabuğunda, su pınarlarının başında ve dikili taşların kenarında saklanır.",
            "Zaman düz bir çizgi halinde akmaz; dört büyük ateş festivali (Samhain, Imbolc, Beltane, Lughnasadh) ile iki gündönümü ve iki ekinoksun ördüğü sekiz kollu bir çark halinde döner.",
          ],
          en: [
            "In Celtic lore the temple is not built of quarried wall; the temple is the Nemeton—the living grove where oak, ash, yew, and hawthorn meet the open sky. Wisdom is kept in the bark of living trees, by wellheads, and along the edges of standing stones.",
            "Time does not run in a flat line; it turns as an eight-spoked wheel braided from the four fire festivals (Samhain, Imbolc, Beltane, Lughnasadh) and the solstices and equinoxes.",
          ],
          sv: [
            "I keltisk tradition byggs templet inte av huggna murar; templet är Nemeton—den levande lunden där ek, ask, idegran och hagtorn möter himlen. Visdomen bevaras i trädens bark, vid källor och längs resta stenar.",
            "Tiden löper inte rakt utan vrider sig som ett åttaekrat hjul av fyra eldfester (Samhain, Imbolc, Beltane, Lughnasadh) samt solstånd och dagjämningar.",
          ],
        },
        items: {
          tr: [
            "Samhain (1 Kasım): Yılın karanlık yarısının başlangıcı. Görünen dünya ile öteki dünya (Annwn / Tír na nÓg) arasındaki perdenin inceldiği, ataların onurlandırıldığı gece.",
            "Imbolc (1 Şubat): Karın altındaki ilk kıpırtı. Brigid’in ocağı, süt, şiir ve demirci ateşinin uyanışı.",
            "Beltane (1 Mayıs): İki ateş arasından geçiş; yaşam gücünün, çiçeğin ve toprağın bereketinin zirveye çıkışı.",
            "Lughnasadh (1 Ağustos): İlk hasat, emeğin meyveye dönüşmesi ve becerinin kutlanması.",
            "Awen (Akıcı İlham): Üç ışık huzmesiyle simgelenen, ozanın ve kâhinin zihnine inen yaratıcı nefes.",
          ],
          en: [
            "Samhain (1 November): Threshold of the dark half of the year, when the veil thins and ancestors are honored.",
            "Imbolc (1 February): The first stirring beneath the snow; the hearth of Brigid, poetry, and smith-fire.",
            "Beltane (1 May): Passage between twin fires; the height of vitality, blossom, and fertility.",
            "Lughnasadh (1 August): First harvest, where patient labor becomes grain and bread.",
            "Awen (Flowing Inspiration): The three rays of creative breath descending into the prepared mind.",
          ],
          sv: [
            "Samhain (1 november): Tröskeln till årets mörka halva då slöjan tunnas ut och förfäderna hedras.",
            "Imbolc (1 februari): Den första rörelsen under snön; Brigids härd, poesi och smideseld.",
            "Beltane (1 maj): Vandringen mellan två eldar; livskraftens och blomningens höjdpunkt.",
            "Lughnasadh (1 augusti): Första skörden då arbetet blir till bröd.",
            "Awen (Flödande ingivelse): De tre ljusstrålarna av skapande andedräkt.",
          ],
        },
        closing: {
          tr: "Koru acele etmez; meşe yüz yılda büyür ama kökünü ilk günden toprağa indirir.",
          en: "The grove does not hurry; the oak grows for a hundred years, yet sinks its root on the very first day.",
          sv: "Lunden hastar inte; eken växer i hundra år men sänker sin rot redan första dagen.",
        },
      },
      {
        slug: "birinci-aicme",
        glyph: "ᚁ",
        title: {
          tr: "Birinci Aicme: Huş, Üvez, Kızılağaç, Söğüt, Dişbudak",
          en: "First Aicme: Birch, Rowan, Alder, Willow, Ash",
          sv: "Första Aicme: Björk, Rönn, Al, Pil, Ask",
        },
        summary: {
          tr: "ᚁ Beith · ᚂ Luis · ᚃ Fearn · ᚄ Sail · ᚅ Nion — başlangıç, korunma ve köprü.",
          en: "ᚁ Beith · ᚂ Luis · ᚃ Fearn · ᚄ Sail · ᚅ Nion — beginning, protection, and bridge.",
          sv: "ᚁ Beith · ᚂ Luis · ᚃ Fearn · ᚄ Sail · ᚅ Nion — början, skydd och bro.",
        },
        paragraphs: {
          tr: [
            "Ogham alfabesi aşağıdan yukarıya doğru okunur; çünkü ağaç topraktan göğe doğru yükselir. Yirmi kutsal ağaç (Feda), beşerli dört aileye (Aicme) ayrılır. Birinci Aicme, Beith (Huş) ile açılır ve kişinin dünyadaki ilk adımını, korunmasını, duygusal sularını ve dünya eksenini kurar.",
          ],
          en: [
            "Ogham is read from the ground upward, just as a tree rises from root to crown. Its twenty sacred trees (Feda) are grouped into four families (Aicme) of five. The First Aicme opens with Beith (Birch), establishing new beginnings, psychic protection, emotional waters, and the world axis.",
          ],
          sv: [
            "Ogham läses nedifrån och upp, liksom ett träd reser sig från rot till krona. De tjugo heliga träden (Feda) delas in i fyra familjer (Aicme). Första Aicme öppnar med Beith (Björk) och grundar ny början, beskydd, vattnets flöde och världsaxeln.",
          ],
        },
        items: {
          tr: [
            "ᚁ Beith (Huş / Birch): Buzlar çözülürken boş toprağa ilk yerleşen öncü ağaçtır. Beyaz kabuğu karanlıkta parlar. Eski yükleri yıkamayı, arınmayı ve tereddütsüz yeni bir sayfa açmayı temsil eder.",
            "ᚂ Luis (Üvez / Rowan): Kırmızı meyvesinin alt ucunda doğal bir beş köşeli yıldız taşır. Kelt geleneğinde yanılsamaya, büyüsel sızıntılara ve kafa karışıklığına karşı en güçlü koruyucu kalkandır.",
            "ᚃ Fearn (Kızılağaç / Alder): Kesildiğinde odunu turuncu-kızıl bir renk alır; suyun içinde çürümez, bilakis taş gibi sertleşir. Bataklıkların üzerine köprü kurmayı ve fırtınada karar gücünü korur.",
            "ᚄ Sail (Söğüt / Willow): Suyun, ayın ve rüyaların ağacıdır. Fırtınada meşe gibi dikleşmez; eğilir ama kırılmaz. Yasın bilgeliğe dönüşmesini, sezgiyi ve dişil akışı öğretir.",
            "ᚅ Nion (Dişbudak / Ash): Kökleri ne kadar derindeyse dalları o kadar geniştir. İçsel dünyamız ile dışsal evreni birbirine bağlayan mızrak gövdesidir.",
          ],
          en: [
            "ᚁ Beith (Birch): The pioneer tree first to root in bare soil after winter, its white bark shining in the dark. Cleansing, shedding old weight, and opening a clear page.",
            "ᚂ Luis (Rowan): Bearing a natural five-pointed star on its berry, Rowan is the shield of discernment against illusion and psychic intrusion.",
            "ᚃ Fearn (Alder): Timber that turns deep red when cut and hardens like stone underwater. Building bridges across marshland and holding firm in emotional storms.",
            "ᚄ Sail (Willow): Tree of water, the Moon, and dreams. It bends in the gale without breaking, turning grief into quiet wisdom.",
            "ᚅ Nion (Ash): As deep in root as it is wide in crown—the spear-shaft linking inner microcosm and outer cosmos.",
          ],
          sv: [
            "ᚁ Beith (Björk): Pionjärträdet som först slår rot efter vintern med vit lysande bark. Rening och en ny början.",
            "ᚂ Luis (Rönn): Med en naturlig femuddig stjärna i sitt bär är rönnen urskillningens sköld mot illusion.",
            "ᚃ Fearn (Al): Virke som hårdnar likt sten under vatten. Att bygga broar över sankmark och stå fast.",
            "ᚄ Sail (Pil): Vattnets, månens och drömmarnas träd. Det böjer sig i stormen utan att brista.",
            "ᚅ Nion (Ask): Lika djup i rot som vid i krona—spjutskaftet som förenar inre och yttre kosmos.",
          ],
        },
        closing: {
          tr: "Huş temizler, üvez korur, kızılağaç köprü kurar, söğüt akışı duyar, dişbudak göğe bağlar.",
          en: "Birch cleanses, rowan shields, alder bridges, willow listens, and ash binds earth to sky.",
          sv: "Björken renar, rönnen skyddar, alen bygger bro, pilen lyssnar och asken förenar jord och himmel.",
        },
      },
      {
        slug: "ikinci-aicme",
        glyph: "ᚇ",
        title: {
          tr: "İkinci Aicme: Alıç, Meşe, Çobanpüskülü, Fındık, Elma",
          en: "Second Aicme: Hawthorn, Oak, Holly, Hazel, Apple",
          sv: "Andra Aicme: Hagtorn, Ek, Järnek, Hassel, Äpple",
        },
        summary: {
          tr: "ᚆ Uath · ᚇ Duir · ᚈ Tinne · ᚉ Coll · ᚊ Quert — eşik, egemenlik ve bilgelik pınarı.",
          en: "ᚆ Uath · ᚇ Duir · ᚈ Tinne · ᚉ Coll · ᚊ Quert — threshold, sovereignty, and the well of wisdom.",
          sv: "ᚆ Uath · ᚇ Duir · ᚈ Tinne · ᚉ Coll · ᚊ Quert — tröskel, styrka och visdomens källa.",
        },
        paragraphs: {
          tr: [
            "İkinci Aicme, Uath (Alıç) ile başlar ve kişiyi dikenli eşiklerden geçirerek Duir’in (Meşe) sarsılmaz omurgasına, Coll’un (Fındık) bilgelik pınarına ve Quert’in (Elma) bütünlüğüne ulaştırır.",
          ],
          en: [
            "The Second Aicme opens with Uath (Hawthorn), leading the seeker across thorny thresholds into the steadfast spine of Duir (Oak), the wisdom-well of Coll (Hazel), and the wholeness of Quert (Apple).",
          ],
          sv: [
            "Andra Aicme öppnar med Uath (Hagtorn) och leder genom törnbeklädda trösklar till Duirs (Ekens) ryggrad, Colls (Hasselns) visdomskälla och Querts (Äpplets) helhet.",
          ],
        },
        items: {
          tr: [
            "ᚆ Uath (Alıç / Hawthorn): Hem keskin dikenleri hem de bahar kokulu beyaz çiçekleri olan çit bekçisidir. Aceleci olanı durdurur, kalbi korur ve görünmeyen dünyaya geçişte saygıyı şart koşar.",
            "ᚇ Duir (Meşe / Oak): Ormanın kralıdır; eski dilde ‘Duir’ hem meşe hem de ‘kapı’ demektir. Yıldırımı üzerine çekip yine de ayakta kalan gücü, adaleti, sadakati ve sarsılmaz iradeyi simgeler.",
            "ᚈ Tinne (Çobanpüskülü / Holly): Kışın bütün yapraklar döküldüğünde koyu yeşil ve dikenli yapraklarıyla ayakta kalan savaşçı ağaçtır. Zor sınavlarda soğukkanlılığı ve adil mücadeleyi tutar.",
            "ᚉ Coll (Fındık / Hazel): Kelt mitolojisinde kutsal pınarın üzerine eğilen dokuz fındık ağacı, meyvelerini suya düşürerek bilgelik somonunu besler. Yoğunlaştırılmış bilgi, sezgi ve ozanlık yeteneğidir.",
            "ᚊ Quert (Elma / Apple): Enine kesildiğinde çekirdek yuvası kusursuz bir beş köşeli yıldız oluşturur. Gençlik, şifa, ruhun dinlendiği ada (Avalon) ve sevgiyle gelen bütünlüktür.",
          ],
          en: [
            "ᚆ Uath (Hawthorn): The hedge-guardian bearing both sharp thorn and fragrant white blossom. It halts haste, guards the heart, and demands reverence at the threshold.",
            "ᚇ Duir (Oak): Sovereign of the woods; ‘Duir’ is the root of both oak and ‘door’. Endurance that survives lightning, justice, and unshakeable spine.",
            "ᚈ Tinne (Holly): The evergreen warrior standing dark and bright in midwinter. Composure under trial and directed strength.",
            "ᚉ Coll (Hazel): The nine hazels over the sacred well whose nuts feed the salmon of wisdom. Concentrated knowledge and poetic sight.",
            "ᚊ Quert (Apple): Sliced across, its core reveals a five-pointed star—fruit of Avalon, healing, beauty, and wholeness.",
          ],
          sv: [
            "ᚆ Uath (Hagtorn): Tröskelväktaren med både skarp tagg och vit vårblomma. Den hejdar brådska och skyddar hjärtat.",
            "ᚇ Duir (Ek): Skogens konung och roten till ordet ’dörr’. Ryggrad som överlever blixten och orubblig vilja.",
            "ᚈ Tinne (Järnek): Midvinterns gröna krigare som ger lugn och riktning under prövning.",
            "ᚉ Coll (Hassel): De nio hasslarna över den heliga källan. Koncentrerad kunskap och poetisk klarsyn.",
            "ᚊ Quert (Äpple): Skuret tvärsöver visar kärnhuset en femuddig stjärna—Avalons frukt, läkning och helhet.",
          ],
        },
        closing: {
          tr: "Alıç sınır çizer, meşe kapıyı açar, فındık bilgeliği damıtır, elma ruhu dinlendirir.",
          en: "Hawthorn sets the boundary, oak opens the door, hazel distills wisdom, and apple restores the soul.",
          sv: "Hagtornet sätter gränsen, eken öppnar dörren, hasseln samlar visdomen och äpplet ger själen ro.",
        },
      },
      {
        slug: "ucuncu-aicme",
        glyph: "ᚋ",
        title: {
          tr: "Üçüncü Aicme: Asma, Sarmaşık, Kamış, Çakaleriği, Mürver",
          en: "Third Aicme: Vine, Ivy, Reed, Blackthorn, Elder",
          sv: "Tredje Aicme: Vinranka, Murgröna, Vass, Slån, Fläder",
        },
        summary: {
          tr: "ᚋ Muin · ᚌ Gort · ᚍ Ngetal · ᚎ Straif · ᚏ Ruis — olgunlaşma, sarmal ve dönüşüm.",
          en: "ᚋ Muin · ᚌ Gort · ᚍ Ngetal · ᚎ Straif · ᚏ Ruis — ripening, spiral, and transformation.",
          sv: "ᚋ Muin · ᚌ Gort · ᚍ Ngetal · ᚎ Straif · ᚏ Ruis — mognad, spiral och förvandling.",
        },
        paragraphs: {
          tr: [
            "Üçüncü Aicme, sonbaharın ve derin dönüşümün ailesidir. Burada ağaçlar yalnızca göğe uzanmaz; sarılır, ezilerek özünü verir, sert dikenlerle sınanır ve bir döngüyü tamamlayıp yenisine yer açar.",
          ],
          en: [
            "The Third Aicme is the family of autumn and deep transformation. Here plants twine, yield their essence under pressing, test the spirit with winter thorn, and complete the cycle.",
          ],
          sv: [
            "Tredje Aicme är höstens och den djupa förvandlingens familj. Här slingrar sig växterna, ger sin essens under pressning och fullbordar kretsloppet.",
          ],
        },
        items: {
          tr: [
            "ᚋ Muin (Asma / Vine): Üzüm ezilmeden şaraba dönüşmez. Deneyimin imbikten geçerek içsel bilgeliğe dönüşmesini ve saklanan hakikatin konuşulmasını simgeler.",
            "ᚌ Gort (Sarmaşık / Ivy): Karanlıkta bile yolunu bulan, taş duvarları sarmal halinde tırmanan bitkidir. Engellerle kavgaya tutuşmadan onların etrafından dolaşarak yükselmeyi öğretir.",
            "ᚍ Ngetal (Kamış / Reed): Suyun kenarında dağınık büyür ama kesildiğinde hem kalem hem de ok gövdesi olur. Dağınık düşünceleri tek bir hedefe odaklama disiplinidir.",
            "ᚎ Straif (Çakaleriği / Blackthorn): Yapraklarından önce, en soğuk kış günlerinde kara dikenleri üzerinde bembeyaz çiçek açar. Kaçınılmaz kader eşiği ve arındırıcı ciddiyettir.",
            "ᚏ Ruis (Mürver / Elder): Kesildiğinde bile kökünden yeniden sürgün veren eşik ağacıdır. Bir dönemin kapanışını ve eski kabuğun bırakılmasını mühürler.",
          ],
          en: [
            "ᚋ Muin (Vine): The grape becomes wine only through pressing—turning raw experience into inner truth.",
            "ᚌ Gort (Ivy): Climbing stone in a patient spiral, finding a way around obstacles rather than breaking against them.",
            "ᚍ Ngetal (Reed): Growing wild by the water yet cut into both pen and arrow-shaft—gathering scattered force toward one aim.",
            "ᚎ Straif (Blackthorn): Blooming white upon black winter thorns before a single leaf appears—unavoidable threshold and purifying rigor.",
            "ᚏ Ruis (Elder): The threshold tree that sprouts anew even when cut back—sealing the close of a cycle.",
          ],
          sv: [
            "ᚋ Muin (Vinranka): Druvan blir vin först genom pressning—att förvandla erfarenhet till inre sanning.",
            "ᚌ Gort (Murgröna): Spiralen som tålmodigt klättrar över sten och finner väg runt hinder.",
            "ᚍ Ngetal (Vass): Skuren till både penna och pilskaft—att samla spridd tanke mot ett enda mål.",
            "ᚎ Straif (Slån): Vit blomma på svart vintertagg före bladen—oundviklig tröskel och rening.",
            "ᚏ Ruis (Fläder): Trädet som skjuter nya skott ur roten och markerar slutet på ett skede.",
          ],
        },
        closing: {
          tr: "Ezilmekten korkmayan üzüm şarap olur; kış dikenini geçen bahara varır.",
          en: "The grape that does not fear the press becomes wine; whoever passes the winter thorn reaches spring.",
          sv: "Druvan som inte fruktar pressen blir vin; den som passerar vintertaggen når våren.",
        },
      },
      {
        slug: "dorduncu-aicme",
        glyph: "ᚔ",
        title: {
          tr: "Dördüncü Aicme: Köknar, Katırtırnağı, Funda, Kavak, Porsuk",
          en: "Fourth Aicme: Fir, Gorse, Heather, Aspen, Yew",
          sv: "Fjärde Aicme: Ädelgran, Ärtsörne, Ljung, Asp, Idegran",
        },
        summary: {
          tr: "ᚐ Ailm · ᚑ Onn · ᚒ Ur · ᚓ Eadad · ᚔ Idad — yüksek görüş, rüzgar ve ölümsüz kök.",
          en: "ᚐ Ailm · ᚑ Onn · ᚒ Ur · ᚓ Eadad · ᚔ Idad — high sight, wind, and immortal root.",
          sv: "ᚐ Ailm · ᚑ Onn · ᚒ Ur · ᚓ Eadad · ᚔ Idad — klar blick, vind och odödlig rot.",
        },
        paragraphs: {
          tr: [
            "Dördüncü Aicme, Ogham’ın sesli harflerini (A, O, U, E, I) taşır. Harfleri birbirine bağlayan sesliler gibi, bu beş ağaç da insanın görüşünü, güneşini, toprağını, nefesini ve sonsuzlukla bağını tamamlar.",
          ],
          en: [
            "The Fourth Aicme carries the five vowels of Ogham (A, O, U, E, I). Like vowels joining consonants into speech, these five trees complete clear sight, solar warmth, earth-healing, listening, and ancestral eternity.",
          ],
          sv: [
            "Fjärde Aicme bär Oghams fem vokaler (A, O, U, E, I). Liksom vokaler binder samman språket fullbordar dessa fem träd överblick, solkraft, jordläkning, lyssnande och evighetsminne.",
          ],
        },
        items: {
          tr: [
            "ᚐ Ailm (Köknar / Silver Fir): Dağların en yüksek yamacında dimdik duran ağaçtır. Günlük karmaşanın biraz dışına çıkıp hayatı yukarıdan, berrak bir gözle görmeyi sağlar.",
            "ᚑ Onn (Katırtırnağı / Gorse): En çorak yamaçlarda bile altın sarısı çiçekler açar. Güneşin sıcaklığını kış ortasında bile koruyan yaşama sevincidir.",
            "ᚒ Ur (Funda / Heather): Bozkırları mor bir örtü gibi saran, arıların şifalı bal yaptığı bitkidir. Toprakla barışmayı ve içsel cömertliği simgeler.",
            "ᚓ Eadad (Titrek Kavak / Aspen): Yaprak sapları yassı olduğu için en hafif esintide bile hep birlikte fısıldaşır. Korkuyu titreşime dönüştürüp görünmeyen alemin sesini dinlemeyi öğretir.",
            "ᚔ Idad (Porsuk / Yew): Ogham’ın son ve en yaşlı kapısıdır. Binlerce yıl yaşar; yaşlanan gövdesinin içine kendi dallarından yeni kökler indirerek içeriden yeniden doğar. Ölümün bir son değil, form değiştiren bir süreklilik olduğunun mührüdür.",
          ],
          en: [
            "ᚐ Ailm (Silver Fir): Standing tall upon the high ridge, granting clear perspective above daily noise.",
            "ᚑ Onn (Gorse): Blossoming gold upon barren hills—solar warmth that never goes out.",
            "ᚒ Ur (Heather): Purple mantle of the moorland from which bees draw healing honey—generosity and earth-peace.",
            "ᚓ Eadad (Aspen): Leaves that whisper in the slightest breeze—overcoming fear and listening across the veil.",
            "ᚔ Idad (Yew): The oldest door of Ogham. Living for millennia, it lowers new roots inside its own hollow trunk to be reborn from within.",
          ],
          sv: [
            "ᚐ Ailm (Ädelgran): Rak på den höga bergskammen—klar överblick ovan vardagens brus.",
            "ᚑ Onn (Ärtsörne): Gyllene blom på karga höjder—solvärme som aldrig slocknar.",
            "ᚒ Ur (Ljung): Hedens lila täcke som ger läkande honung—generositet och jordfrid.",
            "ᚓ Eadad (Asp): Löv som viskar i minsta vind—att övervinna rädsla och lyssna bortom slöjan.",
            "ᚔ Idad (Idegran): Oghams äldsta port. Den lever i årtusenden och sänker nya rötter inuti sin egen ihåliga stam.",
          ],
        },
        closing: {
          tr: "Huş ile başlayan yol porsuk ağacında tamamlanır; kök tekrar tohuma kavuşur.",
          en: "The road that began with birch is completed in the yew; the root returns to the seed.",
          sv: "Den väg som började med björken fullbordas i idegranen; roten återvänder till fröet.",
        },
      },
    ],
  },

  mezopotamya: {
    slug: "mezopotamya",
    title: {
      tr: "Mezopotamya",
      en: "Mesopotamia",
      sv: "Mesopotamien",
    },
    line: {
      tr: "Zigguratların yıldız kayıtları, Abzu’nun suları ve Asalluhi’nin şifa mühürleri.",
      en: "Star records of the ziggurats, the waters of Abzu, and the healing seals of Asalluhi.",
      sv: "Zigguraternas stjärnkrönikor, Abzus vatten och Asalluhis läkande sigill.",
    },
    backLabel: {
      tr: "Mezopotamyaya dön",
      en: "Back to Mesopotamia",
      sv: "Tillbaka till Mesopotamien",
    },
    doors: [
      {
        slug: "ziggurat-ve-yildizlar",
        glyph: "𒀭",
        title: {
          tr: "Ziggurat ve Gökyüzünün İlk Kayıtları",
          en: "The Ziggurat and the First Sky Records",
          sv: "Zigguraten och himlens första krönikor",
        },
        summary: {
          tr: "MUL.APIN, Enuma Anu Enlil, on iki burç kuşağı ve yedi gezegen basamağı.",
          en: "MUL.APIN, Enuma Anu Enlil, the twelve signs, and the seven planetary terraces.",
          sv: "MUL.APIN, Enuma Anu Enlil, de tolv zodiaktecknen och de sju planetavsatserna.",
        },
        paragraphs: {
          tr: [
            "Astrolojinin dili gökten hazır inmedi; Fırat ile Dicle arasındaki ovalarda, gece boyunca zigguratların tepesinde nöbet tutan Babil ve Sümer rahiplerinin sabrıyla kuruldu. Gökyüzünü ‘tanrıların kil üzerine yazdığı canlı bir tablet’ olarak okudular.",
            "Bugün kullandığımız on iki burç kuşağı (Ay’ın ve Güneş’in geçtiği patika), gezegen saatleri ve tutulma hesapları ilk kez MUL.APIN ve Enuma Anu Enlil çivi yazılı serilerinde kayda geçirildi.",
          ],
          en: [
            "The language of astrology was born between the Tigris and the Euphrates through the patience of Sumerian and Babylonian priests keeping night watch atop the ziggurats. They read the firmament as ‘a living tablet inscribed by the gods.’",
            "The twelve signs along the path of the Moon and Sun, the planetary hours, and eclipse cycles were first pressed into clay in the cuneiform series MUL.APIN and Enuma Anu Enlil.",
          ],
          sv: [
            "Astrologins språk föddes mellan Tigris och Eufrat genom sumeriska och babyloniska prästers nattvakor på zigguraterna. De läste himlavalvet som ’en levande tavla skriven av gudarna’.",
            "De tolv zodiaktecknen, planettimmarna och förmörkelsecyklerna nedtecknades först i kilskriftsserierna MUL.APIN och Enuma Anu Enlil.",
          ],
        },
        items: {
          tr: [
            "Yedi Basamak ve Yedi Gök Cismi: Zigguratın her katı görünür yedi gök cisminden birine (Satürn · Ninurta, Jüpiter · Marduk, Mars · Nergal, Güneş · Şamaş, Venüs · İştar, Merkür · Nabu, Ay · Sin) adanmıştı.",
            "Sabah ve Akşam Yıldızı: Venüs’ün doğu ufkunda savaşçı sabah yıldızı, batı ufkunda ise bilge akşam yıldızı olarak doğuşu, dönüşüm ve inisiasyonun temel takvimiydi.",
            "Yukarıdaki ile Aşağıdakinin Uyumu: Gökyüzünde beliren her kavuşum ve hale, yeryüzündeki mevsimin ve insan iradesinin hangi sınavdan geçeceğini bildiren bir işaretti.",
          ],
          en: [
            "Seven Terraces, Seven Luminaries: Each tier of the ziggurat was consecrated to one of the seven visible spheres (Saturn · Ninurta, Jupiter · Marduk, Mars · Nergal, Sun · Shamash, Venus · Ishtar, Mercury · Nabu, Moon · Sin).",
            "Morning and Evening Star: The risings of Venus in the east and west formed the primary calendar of descent, transformation, and return.",
            "Concord of Above and Below: Every conjunction and lunar halo was read as a sign of the season unfolding upon the earth.",
          ],
          sv: [
            "Sju avsatser, sju himlakroppar: Varje nivå i zigguraten var helgad åt en av de sju synliga sfärerna (Saturnus, Jupiter, Mars, Solen, Venus, Merkurius, Månen).",
            "Morgon- och aftonstjärna: Venus uppgång i öster och väster utgjorde förvandlingens urkalender.",
            "Samklang mellan ovan och nedan: Varje konjunktion och mångård lästes som ett tecken för tiden på jorden.",
          ],
        },
        closing: {
          tr: "Yıldızları ilk isimlendirenler, gökyüzüne baktıklarında kehanet değil düzen gördüler.",
          en: "Those who first named the stars looked up and saw not randomness, but order.",
          sv: "De som först gav stjärnorna namn såg upp och fann ordning.",
        },
      },
      {
        slug: "abzu-ve-asalluhi",
        glyph: "𒀀",
        title: {
          tr: "Abzu’nun Suları: Enki ve Şulmu Asalluhi",
          en: "The Waters of Abzu: Enki and Shulmu Asalluhi",
          sv: "Abzus vatten: Enki och Shulmu Asalluhi",
        },
        summary: {
          tr: "Derin tatlı su okyanusu Abzu, bilgelik efendisi Enki ve şifa ustası Asalluhi.",
          en: "The subterranean sweet-water ocean Abzu, Enki, and Asalluhi master of healing.",
          sv: "Urhavet Abzu, visdomens herre Enki och läkemästaren Asalluhi.",
        },
        paragraphs: {
          tr: [
            "Mezopotamya kozmolojisinde yeryüzünün altında Abzu uzanır — henüz hiçbir kirliliğin değmediği, derin ve karanlık tatlı su okyanusu. Bilgelik, zanaat ve kutsal yasaların (Me) efendisi Enki (Ea) makamını bu duru suların kalbinde kurmuştur.",
            "Enki’nin ilk oğlu Asalluhi (Babil’deki adıyla Marduk), babasının derin bilgisini insanlara şifa ve arınma olarak indiren elçidir. Bir insanın enerjisi düğümlendiğinde veya gölgeye düştüğünde Asalluhi suya fısıldanan kelamla o düğümü çözer.",
          ],
          en: [
            "In Mesopotamian cosmology, beneath the earth lies Abzu—the deep, unblemished subterranean ocean of sweet water. Enki (Ea), lord of wisdom, craft, and the cosmic decrees (Me), holds his seat in the heart of those still waters.",
            "Enki’s firstborn son Asalluhi (known in Babylon as Marduk) brings his father’s deep knowledge to humanity as healing and purification, untying spiritual knots through word spoken over clear water.",
          ],
          sv: [
            "I mesopotamisk kosmologi vilar Abzu under jorden—det djupa, obefläckade urhavet av sötvatten där Enki (Ea), visdomens herre, har sitt säte.",
            "Enkis förstfödde son Asalluhi (i Babylon kallad Marduk) bär sin faders visdom till människan som läkning och rening genom ordet som talas över klart vatten.",
          ],
        },
        items: {
          tr: [
            "Şulmu (Esenlik ve Tamlık): Mezopotamya şifa çağrısı olan ‘Şulmu Asalluhi’, parçalanmış, yorulmuş ya da dengesini yitirmiş olanın yeniden bütünlüğe ve huzura dönmesi demektir.",
            "Su Kabı ve Kelam: Asalluhi çalışmalarında katılımcının önünde cam veya kil bir kap içinde temiz su bulunur. İki el su kabının etrafında tutulur; çünkü su, söylenen sözün titreşimini en sadık şekilde kaydeden elementtir.",
            "Dört Yönün Rüzgarı: Doğunun rüzgarı, batının ateşi, güneyin suları ve kuzeyin toprağı çağrılarak alan her türlü ağır tortudan arındırılır.",
          ],
          en: [
            "Shulmu (Wholeness and Peace): The invocation ‘Shulmu Asalluhi’ calls what was fractured or exhausted back into balance and completeness.",
            "The Water Vessel and the Word: In Asalluhi rites, a clay or glass vessel of clear water is held between both hands, as water faithfully records spoken intention.",
            "Winds of the Four Quarters: The wind of the east, fire of the west, waters of the south, and earth of the north are called to clear heavy residue.",
          ],
          sv: [
            "Shulmu (Helhet och frid): Åkallan ’Shulmu Asalluhi’ kallar det som splittrats tillbaka till jämvikt och fullbordan.",
            "Vattenskålen och ordet: En skål av lera eller glas med klart vatten hålls mellan händerna som minnets renaste bärare.",
            "De fyra vindarna: Österns vind, västerns eld, söderns vatten och norrens jord åkallas för att rena rummet.",
          ],
        },
        closing: {
          tr: "Suyun hafızası unutmaz; Abzu’dan gelen duruluk, bulanık olanı sessizce dibe çöktürür.",
          en: "The memory of water does not forget; clarity rising from Abzu quietly settles what was troubled.",
          sv: "Vattnets minne glömmer inte; klarheten från Abzu låter det grumliga stilla sjunka.",
        },
      },
      {
        slug: "marukka-maruttuku",
        glyph: "𒈗",
        title: {
          tr: "Elli İsim: Marukka ve Maruttuku",
          en: "The Fifty Names: Marukka and Maruttuku",
          sv: "De femtio namnen: Marukka och Maruttuku",
        },
        summary: {
          tr: "Enuma Eliş’in elli ses mührü, kaosun düzene dönüşmesi ve iki temel kutup.",
          en: "The fifty sonic seals of Enuma Elish, order out of chaos, and the two poles.",
          sv: "Enuma Elish femtio ljudsigill, ordning ur kaos och de två grundpolerna.",
        },
        paragraphs: {
          tr: [
            "Babil yaratılış destanı Enuma Eliş’in sonunda, ilksel kaos ejderhası Tiamat’ı aşarak göğü ve yeri düzene koyan Marduk’a büyük tanrılar tarafından elli isim verilir. Mezopotamya inisiasyonunda bu elli isim edebî birer övgü değil; her biri kozmostaki ayrı bir yasayı ve insan bilincindeki ayrı bir kapıyı açan elli ses anahtarıdır.",
            "Bu inisiasyonun ilk basamaklarında öğrenci iki temel kutupla karşılaşır: Marukka ve Maruttuku.",
          ],
          en: [
            "At the close of the Babylonian creation epic Enuma Elish, the great gods bestow fifty names upon Marduk after he establishes order out of primordial Tiamat. In Mesopotamian initiation these fifty names are not mere praise-titles, but fifty sonic keys unlocking distinct laws of cosmos and consciousness.",
            "At the threshold of this path stand two foundational poles: Marukka and Maruttuku.",
          ],
          sv: [
            "I slutet av det babyloniska skapelseeposet Enuma Elish ges Marduk femtio heliga namn efter att ha upprättat kosmisk ordning. Dessa femtio namn är ljudnycklar till kosmos och medvetandets lagar.",
            "Vid tröskeln till denna invigning står två grundpoler: Marukka och Maruttuku.",
          ],
        },
        items: {
          tr: [
            "Marukka (Her Şeyi Bilen ve Kuran): Dağınık ve şekilsiz olan potansiyeli bilgelikle bir düzene, bir haritaya ve amaca kavuşturan yaratıcı ilke.",
            "Maruttuku (Koruyan Sığınak): Zorlu sınavlarda, enerjetik saldırılarda veya içsel krizlerde ruhu dağılmaktan koruyan, kalkan olan ve kişiyi sınavdan sağ çıkaran koruyucu mühür.",
            "İsim ve Mühür Geleneği: Kadim Yakındoğu’da bir şeyin gerçek ismini ve ses titreşimini bilmek, onun doğasıyla doğrudan anlaşma yapmak demektir.",
          ],
          en: [
            "Marukka (The All-Knowing Founder): The creative principle that brings scattered, unformed potential into wise structure and purpose.",
            "Maruttuku (The Shielding Refuge): The protective seal that guards the spirit from fragmentation through trial and crisis.",
            "Tradition of Name and Seal: In the ancient Near East, to know the true sonic name of a force is to enter direct covenant with its nature.",
          ],
          sv: [
            "Marukka (Den allvetande grundaren): Den skapande princip som för spridd potential till vis struktur och mening.",
            "Maruttuku (Den skyddande tillflykten): Det sigill som bevarar själen hel genom prövning och kris.",
            "Namnets och sigillets tradition: Att känna en krafts sanna ljudnamn är att träda i direkt förbund med dess natur.",
          ],
        },
        closing: {
          tr: "Kaos yok edilmez; doğru isimle çağrıldığında kendi içindeki düzeni teslim eder.",
          en: "Chaos is not destroyed; when called by its true name, it yields the order hidden within it.",
          sv: "Kaos förintas inte; när det kallas vid sitt rätta namn överlämnar det sin inre ordning.",
        },
      },
    ],
  },

  witchcraft: {
    slug: "witchcraft",
    title: {
      tr: "Witchcraft",
      en: "Witchcraft",
      sv: "Witchcraft",
    },
    line: {
      tr: "Yeşil Ahit’in otuz altı bitkisi, dört element ve ocak başı bilgeliği.",
      en: "The thirty-six herbs of the Green Covenant, the four elements, and hearth wisdom.",
      sv: "Det gröna förbundets trettiosex örter, de fyra elementen och härdvisdom.",
    },
    backLabel: {
      tr: "Witchcrafta dön",
      en: "Back to Witchcraft",
      sv: "Tillbaka till Witchcraft",
    },
    doors: [
      {
        slug: "hane-ve-mutfak",
        glyph: "I",
        title: {
          tr: "Hane ve Mutfak Bekçileri (14 Bitki)",
          en: "Guardians of Hearth and Kitchen (14 Herbs)",
          sv: "Hemmets och kökets väktare (14 örter)",
        },
        summary: {
          tr: "Biberiye, adaçayı, defne, kekik, tarçın, karanfil ve evin ilk kalkanı.",
          en: "Rosemary, sage, bay laurel, thyme, cinnamon, clove, and the home’s first shield.",
          sv: "Rosmarin, salvia, lagerblad, timjan, kanel, nejlika och hemmets första sköld.",
        },
        paragraphs: {
          tr: [
            "Gerçek ocak bilgisi uzak tapınaklarda değil; önce insanın yaşadığı hanede, mutfaktaki kavanozda ve kaynayan tencerede başlar. ‘Yeşil Ahit’in ilk halkası, herkesin tanıdığını sandığı ama yüzeyden değil kökten okunduğunda bambaşka bir güç açan on dört hane bitkisidir.",
          ],
          en: [
            "True hearth-craft begins not in distant temples, but within the home, the kitchen jar, and the simmering pot. The first circle of the ‘Green Covenant’ gathers fourteen familiar plants that reveal deep protective power when read from the root.",
          ],
          sv: [
            "Sann härdkunskap börjar inte i avlägsna tempel, utan i hemmet och kökets burkar. Första kretsen i ’Det gröna förbundet’ samlar fjorton välbekanta växter som öppnar djup kraft när de läses från roten.",
          ],
        },
        items: {
          tr: [
            "Biberiye, Adaçayı ve Defne: Zihinsel berraklık, mekanın enerjetik arınması, kehanet odağı ve güneşsel koruma üçlüsü.",
            "Kekik, Nane ve Fesleğen: Yaşam gücünü canlandırma, bereket akışını tazeleme ve hanenin iç neşesini tutma.",
            "Tarçın Kabuğu, Karanfil (Tane), Zencefil ve Karabiber: Ateş elementinin taşıyıcıları; durgunluğu kıran, niyeti hızlandıran ve soğuk/ağır enerjileri dağıtan sıcak kök ve kabuklar.",
            "Sarımsak, Soğan, Dereotu ve Maydanoz: Topraklama, nazar ve dışsal sızıntılara karşı eşiği koruyan görünmez sınır taşları.",
          ],
          en: [
            "Rosemary, Sage, and Bay Laurel: The triad of mental clarity, space purification, divinatory focus, and solar protection.",
            "Thyme, Mint, and Basil: Awakening vitality, refreshing abundance, and keeping warmth within the home.",
            "Cinnamon Bark, Whole Clove, Ginger, and Black Pepper: Carriers of fire that break stagnation and quicken intention.",
            "Garlic, Onion, Dill, and Parsley: Grounding boundary-keepers that guard the threshold against energetic drain.",
          ],
          sv: [
            "Rosmarin, Salvia och Lagerblad: Mental klarhet, rening av rummet, fokus och solskydd.",
            "Timjan, Mynta och Basilika: Livskraft, flöde och hemmets värme.",
            "Kanelstång, Kryddnejlika, Ingefära och Svartpeppar: Eldelementets bärare som bryter stagnation.",
            "Vitlök, Lök, Dill och Persilja: Jordande gränsväktare mot yttre dränering.",
          ],
        },
        closing: {
          tr: "Kendi mutfağındaki otu tanımayan, ormanda aradığı sırrı göremez.",
          en: "Whoever does not know the herb upon their own shelf will not recognize the secret in the forest.",
          sv: "Den som inte känner örten på sin egen hylla ser inte heller hemligheten i skogen.",
        },
      },
      {
        slug: "kir-ve-aktar",
        glyph: "II",
        title: {
          tr: "Kır ve Aktar Sırları (12 Eşik Otu)",
          en: "Secrets of Meadow and Apothecary (12 Herbs)",
          sv: "Ängens och örtbodens hemligheter (12 örter)",
        },
        summary: {
          tr: "Pelin otu, civanperçemi, sarı kantaron, ısırgan ve sığırkuyruğu.",
          en: "Mugwort, yarrow, St. John’s wort, nettle, and mullein.",
          sv: "Gråbo, rölleka, johannesört, brännässla och kungsljus.",
        },
        paragraphs: {
          tr: [
            "Yeşil Ahit’in ikinci halkası, aktarın raflarında veya kır yollarının kenarında sessizce duran, fakat ‘neden ve hangi saatte’ kullanıldığı unutulmuş on iki eşik otudur. Bu bitkiler uyku ile uyanıklık, savunma ile şifa arasındaki ince sınırda çalışır.",
          ],
          en: [
            "The second circle of the Green Covenant gathers twelve threshold herbs found in meadows and apothecary jars—plants that work along the fine border between waking and dream, defense and restoration.",
          ],
          sv: [
            "Andra kretsen i Det gröna förbundet samlar tolv tröskelörter från äng och örtbod—växter som verkar på gränsen mellan vaka och dröm, försvar och läkning.",
          ],
        },
        items: {
          tr: [
            "Pelin Otu (Mugwort) ve Civanperçemi: Ayın, rüya kapılarının ve durugörünün otları. Pelin otu vizyonu açarken, civanperçemi aurayı ve psişik sınırı sağlamlaştırır.",
            "Sarı Kantaron ve Isırgan Otu: Yaz gündönümünün güneşini içinde toplayan sarı kantaron karanlığı dağıtır; Mars’ın bitkisi ısırgan ise sınır ihlallerine karşı dikenli bir direnç ve canlanma verir.",
            "Sığırkuyruğu (Mullein), Sinir Otu ve Karahindiba: Eskilerin mum fitili ve meşale yaptığı sığırkuyruğu karanlıkta yol gösterir; karahindiba ve sinir otu betonun arasından bile çıkan yaşam inadını taşır.",
            "Ebegümeci, Şerbetçiotu, Rezene, Kimyon ve Kişniş Tohumu: Zihni yatıştırma, uyku eşiğini yumuşatma ve içsel uyumu mühürleme.",
          ],
          en: [
            "Mugwort and Yarrow: Herbs of the Moon and dream-gates. Mugwort opens vision while yarrow seals and strengthens the psychic boundary.",
            "St. John’s Wort and Nettle: Midsummer solar light that scatters heaviness paired with Nettle’s Martian boundary-strength.",
            "Mullein, Plantain, and Dandelion: Mullein serves as the ancient torch in the dark; dandelion and plantain carry tenacious earth endurance.",
            "Mallow, Hops, Fennel, Cumin, and Coriander Seed: Softening the threshold of sleep and sealing inner harmony.",
          ],
          sv: [
            "Gråbo (Mugwort) och Rölleka: Månens och drömportarnas örter. Gråbo öppnar synen medan rölleka stärker gränsen.",
            "Johannesört och Brännässla: Midsommarens solljus förenat med brännässlans skarpa motståndskraft.",
            "Kungsljus (Mullein), Groblad och Maskros: Tröskelfacklan i mörkret och jordens envisa livskraft.",
            "Malva, Humle, Fänkål, Spiskummin och Korianderfrö: Att stilla tanken vid sömnens tröskel.",
          ],
        },
        closing: {
          tr: "Yol kenarında çiğnenen ot, saatini bilenin elinde anahtara dönüşür.",
          en: "The herb stepped over by the roadside becomes a key in the hand of one who knows its hour.",
          sv: "Örten vid vägkanten blir en nyckel i handen på den som känner dess timme.",
        },
      },
      {
        slug: "agaclar-ve-recineler",
        glyph: "III",
        title: {
          tr: "Ağaçlar, Reçineler ve Eşik Bitkileri (10 Mühür)",
          en: "Trees, Resins, and Threshold Plants (10 Seals)",
          sv: "Träd, hartser och tröskelväxter (10 sigill)",
        },
        summary: {
          tr: "Meşe, çam reçinesi, ardıç, söğüt, akgünlük (Frankincense) ve mür.",
          en: "Oak, pine resin, juniper, willow, frankincense, and myrrh.",
          sv: "Ek, tallkåda, en, pil, frankincense och myrra.",
        },
        paragraphs: {
          tr: [
            "Üçüncü halka, çalışmanın ağırlığını, kokusunu ve kalıcılığını taşıyan on kadim ağaç, çiçek ve reçinedir. Otsu bitkiler hızlı hareket eder; ağaçlar ve reçineler ise yapılan çalışmayı zamana sabitler ve mühürler.",
          ],
          en: [
            "The third circle holds ten ancient trees, blossoms, and resins that carry permanence and weight. While herbs move swiftly, trees and resins anchor and seal the work in time.",
          ],
          sv: [
            "Tredje kretsen rymmer tio uråldriga träd, blommor och hartser som bär varaktighet och tyngd. Medan örter verkar snabbt förankrar träd och hartser arbetet i tiden.",
          ],
        },
        items: {
          tr: [
            "Meşe (Palamut ve Kabuk), Çam (İğne, Kozalak ve Reçine), Ardıç (Tohum) ve Söğüt: Dayanıklılık, kış boyu sönmeyen yaşam nefesi, şamanik arınma dumanı ve suyun esnekliği.",
            "Günlük / Akgünlük (Frankincense) ve Mür (Myrrh): Güneş ile Ay’ın iki kutsal reçinesi. Günlük alanı yükseltir ve aydınlatır; mür ise derinleştirir, korur ve mühürler.",
            "Zeytin Yaprağı, Gül, Lavanta ve Papatya: Fırtına sonrası barış, kalp frekansının onarımı ve dinginlik.",
          ],
          en: [
            "Oak (Acorn & Bark), Pine (Needle, Cone & Resin), Juniper (Berry), and Willow: Endurance, evergreen vitality, purifying smoke, and lunar flexibility.",
            "Frankincense and Myrrh: The twin sacred resins of Sun and Moon—frankincense elevates and brightens the space while myrrh deepens, guards, and seals.",
            "Olive Leaf, Rose, Lavender, and Chamomile: Peace after storm, restoration of the heart, and quietness.",
          ],
          sv: [
            "Ek (Ollon & Bark), Tall (Barr, Kotte & Kåda), En (Bär) och Pil: Uthållighet, vintergrön livskraft, renande rök och månens följsamhet.",
            "Frankincense och Myrra: Solens och Månens två heliga hartser som lyfter, skyddar och förseglar rummet.",
            "Olivblad, Ros, Lavendel och Kamomill: Frid efter storm, hjärtats läkning och stillhet.",
          ],
        },
        closing: {
          tr: "Reçine ağacın yarasından sızan altındır; ateşe değdiğinde acıyı kokuya ve duaya dönüştürür.",
          en: "Resin is gold weeping from the wound of the tree; touched by fire, it turns ache into fragrance and prayer.",
          sv: "Harts är guld som sipprar ur trädets sår; vidrört av elden förvandlar det smärta till doft och bön.",
        },
      },
      {
        slug: "dort-element-ve-ay",
        glyph: "IV",
        title: {
          tr: "Dört Element ve Ay Döngüsü",
          en: "The Four Elements and the Lunar Cycle",
          sv: "De fyra elementen och måncykeln",
        },
        summary: {
          tr: "Kumun bilgeliği (jeomansi), suyun hafızası (hidromansi) ve ateşin ruhu (piromansi).",
          en: "Wisdom of sand (geomancy), memory of water (hydromancy), and spirit of fire (pyromancy).",
          sv: "Sandens visdom (geomanti), vattnets minne (hydromanti) och eldens ande (pyromanti).",
        },
        paragraphs: {
          tr: [
            "Bitkiler ve semboller dört elementin ritmiyle birleştiğinde kadim simya tamamlanır. Her element kendi diliyle konuşur: toprak iz bırakır, su yansıtır, ateş dönüştürür, hava taşır.",
          ],
          en: [
            "When plants and symbols meet the rhythm of the four elements, ancient alchemy is made whole. Each element speaks in its own tongue: earth holds the mark, water reflects, fire transforms, and air carries.",
          ],
          sv: [
            "När växter och symboler möter de fyra elementens rytm fullbordas den uråldriga alkemin: jorden bevarar spåret, vattnet speglar, elden förvandlar och luften bär.",
          ],
        },
        items: {
          tr: [
            "Kumun Bilgeliği (Jeomansi / Toprak): Topraklanma, atalarla bağ ve kum/toprak yüzeyinde bırakılan işaretlerin okunması.",
            "Suyun Hafızası (Hidromansi / Su): Koyu bir kap içindeki durgun su yüzeyinde ses ve galdr titreşimiyle durugörü pratiği.",
            "Ateşin Ruhu (Piromansi / Ateş): Mum alevinin yönü, hızı ve dumanın hareketi üzerinden aktif dönüşüm okuması.",
            "Ayın Nefesi: Yeniaydan dolunaya büyüyen ayda çağırma, besleme ve inşa etme; dolunaydan yeniaya küçülen ayda arındırma, kesme ve bırakma.",
          ],
          en: [
            "Wisdom of Sand (Geomancy / Earth): Grounding, ancestral connection, and reading marks upon sand and soil.",
            "Memory of Water (Hydromancy / Water): Scrying upon still water in a dark vessel through sound and vibration.",
            "Spirit of Fire (Pyromancy / Fire): Reading transformation through the movement of flame and smoke.",
            "Breath of the Moon: Building and drawing in during the waxing moon; cleansing and releasing during the waning moon.",
          ],
          sv: [
            "Sandens visdom (Geomanti / Jord): Jordning och läsning av tecken i sand och jord.",
            "Vattnets minne (Hydromanti / Vatten): Skådande i stilla vatten genom ljud och vibration.",
            "Eldens ande (Pyromanti / Eld): Att läsa förvandling i lågans och rökens rörelse.",
            "Månens andedräkt: Att bygga under växande måne; att rena och släppa taget under avtagande måne.",
          ],
        },
        closing: {
          tr: "Su hatırlar, ateş dönüştürür, toprak tutar, hava taşır; bilge olan dördünü aynı masada buluşturur.",
          en: "Water remembers, fire transforms, earth holds, and air carries; the wise bring all four to the same table.",
          sv: "Vattnet minns, elden förvandlar, jorden håller och luften bär; den vise samlar alla fyra vid samma bord.",
        },
        ctaHref: "/egitim/el-yuz-element",
        ctaLabel: {
          tr: "El, Yüz ve Element Okuma Eğitimini İncele",
          en: "View Hand, Face & Element Reading Training",
          sv: "Se utbildningen i hand-, ansikts- och elementläsning",
        },
      },
    ],
  },

  shop: {
    slug: "shop",
    title: {
      tr: "Shop",
      en: "Shop",
      sv: "Shop",
    },
    line: {
      tr: "Elde hazırlanan rün takımları, kişisel bindrune tılsımları ve ritüel nesneleri.",
      en: "Handcrafted rune sets, custom bindrune talismans, and ritual study objects.",
      sv: "Handgjorda runuppsättningar, personliga bindrunetalismaner och rituella föremål.",
    },
    backLabel: {
      tr: "Shopa dön",
      en: "Back to Shop",
      sv: "Tillbaka till Shop",
    },
    doors: [
      {
        slug: "run-takimlari",
        glyph: "ᚠ",
        title: {
          tr: "El Oyması Elder Futhark Rün Takımları",
          en: "Hand-Carved Elder Futhark Rune Sets",
          sv: "Handsnidade Elder Futhark-runuppsättningar",
        },
        summary: {
          tr: "Dişbudak, meşe, zeytin ahşabı ve doğal taş üzerine elde işlenen 24’lü keseler.",
          en: "Twenty-four-piece sets carved by hand upon ash, oak, olive wood, and natural stone.",
          sv: "Tjugofyra runor snidade för hand i ask, ek, olivträ och natursten.",
        },
        paragraphs: {
          tr: [
            "Kış odasından çıkan hiçbir rün takımı fabrika bandından çıkmaz. Her bir taş veya ahşap dilimi tek tek seçilir, yirmi dört Elder Futhark rünü elde kazınır, doğal yağlar ve reçinelerle beslenir.",
            "Takım sahibine gönderilmeden önce uygun ay evresinde dört elementle arındırılır ve keten veya deri kesesiyle teslim edilir.",
          ],
          en: [
            "No rune set leaving the winter hall is factory-made. Each piece of wood or stone is chosen by hand, engraved with the twenty-four runes of the Elder Futhark, and finished with natural oils and resins.",
            "Before delivery, each set is cleansed with the four elements in the proper lunar phase and placed in a linen or leather pouch.",
          ],
          sv: [
            "Ingen runuppsättning från vinterrummet är fabrikstillverkad. Varje bit av trä eller sten väljs ut för hand, graveras med de tjugofyra Elder Futhark-runorna och behandlas med naturliga oljor.",
            "Före leverans renas uppsättningen med de fyra elementen under rätt månfas och läggs i en linne- eller läderpåse.",
          ],
        },
        items: {
          tr: [
            "Ahşap Rün Takımları: Dişbudak, meşe, kayın veya zeytin ağacı dallarından kesilen, elde yakılarak (pirografi) veya kök boyasıyla işlenen çalışma takımları.",
            "Doğal Taş Rün Takımları: Akik, obsidyen, ametist, kuvars veya seçilmiş nehir taşları üzerine elmas uçla elde kazınan ve altın/bronz pigmentle doldurulan takımlar.",
          ],
          en: [
            "Wooden Rune Sets: Cut from ash, oak, birch, or olive branches, burned by hand or stained with natural root pigments.",
            "Natural Stone Rune Sets: Hand-engraved upon agate, obsidian, amethyst, quartz, or river stones and filled with gold or bronze pigment.",
          ],
          sv: [
            "Runor i trä: Skurna ur ask, ek, björk eller olivträ, brända för hand eller infärgade med naturliga pigment.",
            "Runor i natursten: Graverade för hand i agat, obsidian, ametist, kvarts eller flodsten.",
          ],
        },
        closing: {
          tr: "Hangi ağacın veya taşın senin çalışmana uygun olduğunu konuşmak ve sipariş vermek için doğrudan WhatsApp’tan yazabilirsin.",
          en: "To discuss which wood or stone best suits your practice and to place an order, reach out directly via WhatsApp.",
          sv: "För att tala om vilket träslag eller vilken sten som passar ditt arbete och beställa, skriv direkt via WhatsApp.",
        },
        whatsapp: true,
      },
      {
        slug: "bindrune-tilsimlari",
        glyph: "ᛉ",
        title: {
          tr: "Kişisel Bindrune (Bağlama Rün) Tılsımları",
          en: "Custom Bindrune Talismans",
          sv: "Personliga Bindrune-talismaner",
        },
        summary: {
          tr: "Niyete ve doğum haritasına özel hazırlanan ahşap, bronz ve gümüş mühürler.",
          en: "Wooden, bronze, and silver seals crafted for your intention and natal chart.",
          sv: "Sigill i trä, brons och silver skapade efter din avsikt och födelsekarta.",
        },
        paragraphs: {
          tr: [
            "Bindrune, iki veya daha fazla rünün tek bir merkez omurga üzerinde birleştirilmesiyle oluşturulan kadim mühürdür. Rastgele rünleri üst üste çizmekle yapılmaz; rünlerin birbirini besleyen açıları, kişinin doğum rünü ve içinde bulunduğu gökyüzü döngüsü hesaplanarak tasarlanır.",
            "Hazırlanan her tılsım yalnızca o kişi ve o niyet içindir; amacına uygun gezegen saatinde uyandırılarak sahibine ulaştırılır.",
          ],
          en: [
            "A bindrune is an ancient seal formed by uniting two or more runes upon a single central spine. It is not drawn at random; it is composed by studying the harmony of the runes, the bearer’s birth rune, and the current planetary cycle.",
            "Each talisman is crafted solely for its bearer and awakened during the appropriate planetary hour.",
          ],
          sv: [
            "En bindruna är ett uråldrigt sigill där två eller flera runor förenas längs en gemensam ryggrad, utformad efter bärarens födelseruna och aktuella himmelscykel.",
            "Varje talisman skapas enbart för sin bärare och väcks under rätt planettimme.",
          ],
        },
        items: {
          tr: [
            "Korunma ve Sınır Mühürleri: Algiz, Thurisaz ve Eihwaz ekseninde enerji alanını sağlamlaştıran tılsımlar.",
            "Yol Açma, Bereket ve İrade Mühürleri: Fehu, Raidho, Sowilo ve Tiwaz dengesiyle yeni başlangıçları destekleyen çalışmalar.",
            "Materyal Seçenekleri: Doğal ahşap madalyon, el işi bronz plaka veya 925 ayar gümüş kolye/mühür.",
          ],
          en: [
            "Protection & Boundary Seals: Talismans anchored in Algiz, Thurisaz, and Eihwaz to fortify one’s energetic field.",
            "Road-Opening, Abundance & Will Seals: Composed around Fehu, Raidho, Sowilo, and Tiwaz for new undertakings.",
            "Materials: Natural wood medallion, hand-worked bronze plate, or sterling silver pendant/seal.",
          ],
          sv: [
            "Skydds- och gränssigill: Talismaner förankrade i Algiz, Thurisaz och Eihwaz.",
            "Vägöppnings- och viljesigill: Skapade kring Fehu, Raidho, Sowilo och Tiwaz.",
            "Material: Medaljong i naturträ, handarbetad brons eller sterlingsilver.",
          ],
        },
        closing: {
          tr: "Kişisel tılsım talebin için doğum bilgilerin ve niyetinle birlikte WhatsApp hattından ulaşabilirsin.",
          en: "Reach out via WhatsApp with your birth details and intention to request a custom talisman.",
          sv: "Kontakta via WhatsApp med dina födelseuppgifter och din avsikt för en personlig talisman.",
        },
        whatsapp: true,
      },
      {
        slug: "recine-ve-tutsu",
        glyph: "✦",
        title: {
          tr: "Yeşil Ahit Reçine ve Tütsü Karışımları",
          en: "Green Covenant Resin & Incense Blends",
          sv: "Det gröna förbundets harts- och rökelseblandningar",
        },
        summary: {
          tr: "Akgünlük, mür, çam reçinesi, ardıç tohumu ve pelin otu ritüel harmanları.",
          en: "Pure ritual blends of frankincense, myrrh, pine resin, juniper berry, and mugwort.",
          sv: "Rena rituella blandningar av frankincense, myrra, tallkåda, enbär och gråbo.",
        },
        paragraphs: {
          tr: [
            "Sentetik kokular ve kimyasal çubuklar alanı temizlemez; yalnızca havayı bastırır. Yeşil Ahit karışımları, ağaçların saf gözyaşı olan reçinelerin (akgünlük, mür, çam) ve doğru mevsimde toplanmış otların havanda elde dövülmesiyle hazırlanır.",
          ],
          en: [
            "Synthetic fragrances do not cleanse a space; they only mask the air. Green Covenant blends are prepared by hand in a mortar from pure tree resins (frankincense, myrrh, pine) and wild-harvested herbs.",
          ],
          sv: [
            "Syntetiska dofter renar inte ett rum. Det gröna förbundets blandningar bereds för hand i mortel av rena trädhartser (frankincense, myrra, tall) och torkade örter.",
          ],
        },
        items: {
          tr: [
            "Arınma ve Eşik Karışımı: Ardıç tohumu, adaçayı, biberiye ve çam reçinesi — çalışma öncesi mekanı ve zihni sıfırlamak için.",
            "Görü ve Rüya Karışımı: Pelin otu (Mugwort), lavanta, defne ve akgünlük — meditasyon, rün açılımı ve rüya çalışmaları için.",
            "Tapınak Mührü: Saf Umman akgünlüğü (Frankincense) ve mür reçinesi.",
          ],
          en: [
            "Purification & Threshold Blend: Juniper berry, sage, rosemary, and pine resin to clear space and mind before work.",
            "Vision & Dream Blend: Mugwort, lavender, bay laurel, and frankincense for meditation and rune readings.",
            "Temple Seal: Pure Omani frankincense and myrrh resin.",
          ],
          sv: [
            "Renings- och tröskelblandning: Enbär, salvia, rosmarin och tallkåda för att rena rum och sinne.",
            "Syn- och drömblandning: Gråbo, lavendel, lagerblad och frankincense för meditation och runläggning.",
            "Tempelsigill: Ren frankincense och myrra.",
          ],
        },
        closing: {
          tr: "Karışımlar sipariş üzerine taze harmanlanır; bilgi ve talep için WhatsApp üzerinden yazabilirsin.",
          en: "Blends are freshly compounded to order; message via WhatsApp for availability.",
          sv: "Blandningarna bereds färska på beställning; skriv via WhatsApp för förfrågan.",
        },
        whatsapp: true,
      },
      {
        slug: "bireysel-calisma",
        glyph: "◈",
        title: {
          tr: "Bireysel Okuma ve Danışmanlık",
          en: "Personal Readings & Consultation",
          sv: "Personliga läsningar och rådgivning",
        },
        summary: {
          tr: "Elder Futhark rün açılımı, İlm-i Sima analizi ve gökyüzü haritası çalışmaları.",
          en: "Elder Futhark rune spreads, İlm-i Sima analysis, and natal sky chart sessions.",
          sv: "Runläggning med Elder Futhark, İlm-i Sima-analys och födelsekarta.",
        },
        paragraphs: {
          tr: [
            "Bireysel çalışmalarda rünler, gökyüzü haritası ve İlm-i Sima (el ve yüz çizgilerindeki mizaç haritası) bir kehanet gösterisi olarak değil; kişinin içinden geçtiği dönemi, tıkanan akışı ve önündeki gerçek potansiyeli berraklaştırmak için kullanılır.",
          ],
          en: [
            "In one-on-one sessions, the runes, the natal sky chart, and İlm-i Sima (temperament reading of hand and face) are used not as fortune-telling spectacle, but to clarify the season you are walking through, where energy is blocked, and what potential lies ahead.",
          ],
          sv: [
            "Vid enskilda samtal används runorna, födelsekartan och İlm-i Sima inte som spådomsuppvisning, utan för att klargöra vilket skede du befinner dig i och vilken potential som väntar.",
          ],
        },
        items: {
          tr: [
            "Rün Açılımı ve Wyrd Okuması: Mevcut bir konu, karar eşiği veya yıllık döngü üzerine detaylı Elder Futhark açılımı.",
            "Gökyüzü ve Dönem Analizi: Doğum haritası, gezegen döngüleri ve yaklaşan eşiklerin incelenmesi.",
            "Holistik İlm-i Sima ve Kiromansi: El ve yüz morfolojisi üzerinden mizaç, yetenek ve yaşam nehirlerinin okunması.",
          ],
          en: [
            "Rune Reading & Wyrd Consultation: Detailed Elder Futhark spread on a threshold decision or yearly cycle.",
            "Sky & Transit Analysis: Study of the natal chart and upcoming planetary thresholds.",
            "Holistic İlm-i Sima & Chiromancy: Reading temperament and life currents through hand and face morphology.",
          ],
          sv: [
            "Runläggning och Wyrd-analys: Fördjupad Elder Futhark-läggning kring ett vägskäl eller årshjul.",
            "Himmels- och transitanalys: Gennemgång av födelsekarta och kommande trösklar.",
            "Holistisk İlm-i Sima och kiromanti: Läsning av temperament och livsströmmar.",
          ],
        },
        closing: {
          tr: "Randevu ve çalışma detayları için doğrudan WhatsApp üzerinden iletişime geçebilirsin.",
          en: "Reach out directly via WhatsApp to schedule a personal consultation.",
          sv: "Kontakta direkt via WhatsApp för att boka en tid.",
        },
        whatsapp: true,
      },
    ],
  },
};

export function findTraditionDoor(traditionSlug: TraditionSlug, doorSlug: string): TraditionSubDoor | null {
  const hall = traditions[traditionSlug];
  return hall.doors.find((d) => d.slug === doorSlug) ?? null;
}
