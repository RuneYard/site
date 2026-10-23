import type { Lang } from "@/lib/copy";

export type TraditionSlug = "saman" | "kelt" | "mezopotamya" | "witchcraft" | "shop";

export type TraditionChapter = {
  heading: string;
  body: string;
};

export type TraditionPractice = {
  title: string;
  steps: readonly string[];
};

export type TraditionSubDoor = {
  slug: string;
  glyph: string;
  image?: string;
  itemImages?: readonly string[];
  title: Record<Lang, string>;
  subtitle: Record<Lang, string>;
  summary: Record<Lang, string>;
  paragraphs: Record<Lang, readonly string[]>;
  chapters: Record<Lang, readonly TraditionChapter[]>;
  items?: Record<Lang, readonly string[]>;
  practice: Record<Lang, TraditionPractice>;
  closing: Record<Lang, string>;
  ctaHref?: string;
  ctaLabel?: Record<Lang, string>;
  whatsapp?: boolean;
};

export type TraditionHall = {
  slug: TraditionSlug;
  image?: string;
  closed?: boolean;
  title: Record<Lang, string>;
  line: Record<Lang, string>;
  backLabel: Record<Lang, string>;
  doors: readonly TraditionSubDoor[];
};

export const traditions: Record<TraditionSlug, TraditionHall> = {
  "saman": {
    "slug": "saman",
    "image": "/traditions/saman.jpg",
    "title": {
      "tr": "Şaman",
      "en": "Shaman",
      "sv": "Schaman"
    },
    "line": {
      "tr": "Altay’dan Kuzey’e üç dünya kozmolojisi, düngürün sesi, Seidr, erk hayvanları ve alan tutma disiplini — altı müstakil çalışma odası.",
      "en": "From the Altai to the North: three-world cosmology, the voice of the drum, Seidr, power animals, and holding space — six study rooms.",
      "sv": "Från Altaj till Norden: trevärldskosmologi, trummans röst, Seidr, kraftdjur och konsten att hålla rum — sex studierum."
    },
    "backLabel": {
      "tr": "Şamana dön",
      "en": "Back to Shaman",
      "sv": "Tillbaka till Schaman"
    },
    "doors": [
      {
        "slug": "uc-dunya",
        "glyph": "I",
        "title": {
          "tr": "Üç Dünya ve Dünya Ağacı",
          "en": "The Three Worlds and the World Tree",
          "sv": "De tre världarna och Världsträdet"
        },
        "subtitle": {
          "tr": "Kökün hafızası, gövdenin nefesi ve dalların gökyüzü düzeni.",
          "en": "The memory of the root, the breath of the trunk, and the celestial order of the branches.",
          "sv": "Rotens minne, stammens andedräkt och grenarnas himmelska ordning."
        },
        "summary": {
          "tr": "Alt, Orta ve Üst Dünya; Demir Kazık, Dünya Ağacı ve katmanlar arası geçiş.",
          "en": "Lower, Middle, and Upper Worlds; the Iron Pillar, the World Tree, and passage between realms.",
          "sv": "Under-, Mellan- och Övervärlden; Järnpelaren, Världsträdet och övergången mellan skikten."
        },
        "paragraphs": {
          "tr": [
            "Şamanik kozmolojide evren tek düzlemli bir boşluk değil; birbiriyle nefes alıp veren üç canlı katmandan oluşan dikey bir bütündür. Bu üç katmanı birbirine bağlayan eksene Altay ve Sibirya geleneğinde Demir Kazık (Temir Kazık), İskandinav geleneğinde ise Yggdrasil — Dünya Ağacı — adı verilir. Eksenin en tepesinde kıpırdamadan duran Kutup Yıldızı, gökyüzü çadırının merkez çivisidir.",
            "Bu ağacın kökleri yerin ve suyun karanlık rahmine (Alt Dünya) iner; gövdesi insanın, hayvanın, rüzgarın ve mevsimlerin yürüdüğü yeryüzünde (Orta Dünya) durur; dalları ise yıldızların, göksel ata meclislerinin ve yüksek yasaların katmanlarına (Üst Dünya) uzanır. Şaman, bu eksen boyunca bilincini hareket ettirebilen ve katmanlar arasındaki dengeyi okuyan kişidir.",
            "Alt Dünya korkulacak bir ceza yeri değil, tohumun filizlenmeden önce beklediği bereketli karanlıktır. Toprağın altındaki kökler, içgüdüsel bilgeliği, soyun unutulmuş hafızasını ve koruyucu hayvan ruhlarını barındırır. Üst Dünya ise soyut ilkelerin, geniş perspektifin ve kadersel desenlerin okunduğu berrak gök kubbedir.",
            "Orta Dünya, diğer iki katmanın kesiştiği eylem alanıdır. Bir insan kökleriyle bağını koparırsa yeryüzünde savrulur; dallarıyla bağını koparırsa yönünü ve anlamını yitirir. Şamanik çalışmanın ilk şartı, önce kendi bedeninde bu üç katmanın ağırlığını ve dengesini kurmaktır."
          ],
          "en": [
            "In shamanic cosmology, the universe is not a flat void, but a vertical whole composed of three living layers breathing into one another. The axis connecting these three layers is called the Iron Pillar (Temir Kazık) in Siberian and Altai tradition, and Yggdrasil—the World Tree—in the North. At the summit of this axis stands the unmoving Pole Star, the central nail of the sky tent.",
            "The roots of this tree descend into the dark womb of earth and water (the Lower World); its trunk stands in the physical realm walked by humans, animals, winds, and seasons (the Middle World); its branches reach into the layers of stars, ancestral councils, and celestial laws (the Upper World). The shaman is one who moves consciousness along this axis and reads the balance between realms.",
            "The Lower World is not a realm of punishment, but the fertile darkness where the seed waits before sprouting. The roots beneath the soil hold instinctive wisdom, ancestral memory, and protective animal spirits. The Upper World is the clear celestial dome where overarching patterns, fate, and higher counsel are perceived.",
            "The Middle World is the field of action where the other two layers meet. Cut off from the roots, a person is swept away; cut off from the branches, direction and meaning are lost. The first requirement of shamanic practice is establishing the weight and balance of all three worlds within one's own body."
          ],
          "sv": [
            "I schamanistisk kosmologi är universum inte ett platt tomrum, utan en vertikal helhet av tre levande skikt som andas i varandra. Axeln som förenar dessa tre skikt kallas Järnpelaren i sibirisk och altaisk tradition, och Yggdrasil — Världsträdet — i Norden. Högst upp på denna axel står den orörliga Polstjärnan, himlatältets mittspik.",
            "Trädets rötter sjunker ned i jordens och vattnets mörka sköte (Undervärlden); dess stam står i den fysiska värld där människor, djur och årstider vandrar (Mellanvärlden); dess grenar sträcker sig mot stjärnorna och de himmelska råden (Övervärlden). Schamanen är den som kan förflytta sitt medvetande längs denna axel.",
            "Undervärlden är inte en plats för straff, utan det fruktbara mörker där fröet vilar innan det gror. Rötterna under jorden bär instinktiv visdom, förfädernas minne och beskyddande kraftdjur. Övervärlden är den klara himlakupolen där överblick och högre lagar framträder.",
            "Mellanvärlden är handlingens fält där de andra två skikten möts. Den som förlorar kontakten med rötterna rycks med av vinden; den som förlorar kontakten med grenarna tappar sin riktning. Det första steget i schamanistiskt arbete är att förankra alla tre världar i den egna kroppen."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Merkez Ekseni ve Kutup Yıldızı",
              "body": "Geleneksel çadırın (yurt) ortasındaki ocak dumanı gökyüzüne yükselirken görünmez bir sütun çizer. Bu sütun insanın omurgasıyla birebir eşleşir. Kuyruk sokumu toprağın köküne, kalp ve diyafram yeryüzü ufkuna, başın tepe noktası ise Kutup Yıldızı’na bakar. Yolculuk dışarıda bir yere gitmekten önce, kendi omurgandaki bu dikey hattı uyandırmaktır."
            },
            {
              "heading": "Eşik Kapıları: Mağara, Pınar ve Ağaç Kovuğu",
              "body": "Alt Dünya’ya iniş rastgele yapılmaz; doğada bildiğin gerçek bir ağaç kovuğu, bir mağara ağzı, derin bir göl veya pınar zihinde eşik kapısı olarak kullanılır. Üst Dünya’ya çıkışta ise bir dağ zirvesi, ağacın en üst dalları, duman sütunu veya gökkuşağı köprüsü eşik görevi görür."
            },
            {
              "heading": "Dönüş ve Topraklanma Yasası",
              "body": "Şamanik yolculuğun en önemli kuralı, girdiğin kapıdan eksiksiz geri dönmektir. Yolculuk bittiğinde avuç içleri toprağa veya yere değdirilir, beden ağırlığı hissedilir ve Orta Dünya’nın somut gerçekliğine tam olarak yerleşilir."
            }
          ],
          "en": [
            {
              "heading": "The Central Axis and the Pole Star",
              "body": "Smoke rising from the central hearth of the traditional dwelling traces an invisible pillar toward the sky. This pillar corresponds directly to the human spine: the base of the spine faces the roots of the earth, the heart and diaphragm meet the horizon of the Middle World, and the crown faces the Pole Star."
            },
            {
              "heading": "Thresholds: Cave, Spring, and Tree Hollow",
              "body": "Descent into the Lower World never happens at random; a real place known in nature—a tree hollow, cave mouth, deep lake, or spring—serves as the threshold gate. Ascent to the Upper World uses a mountain peak, the highest branches of a tree, a column of smoke, or a bridge of light."
            },
            {
              "heading": "The Law of Return and Grounding",
              "body": "The cardinal rule of any journey is returning through the exact threshold you entered. When the journey concludes, palms touch the floor or earth, bodily weight is reclaimed, and awareness settles fully back into the Middle World."
            }
          ],
          "sv": [
            {
              "heading": "Mittaxeln och Polstjärnan",
              "body": "Röken som stiger från härden i tältets mitt tecknar en osynlig pelare mot himlen. Denna pelare motsvarar människans ryggrad: basen vilar mot jordens rötter, hjärtat möter horisonten och hjässan vilar under Polstjärnan."
            },
            {
              "heading": "Tröskelportar: Grotta, Källa och Trädhåla",
              "body": "Nedstigningen till Undervärlden sker alltid genom en verklig plats du känner i naturen — en trädhåla, en grottmynning eller en källa. Uppstigningen till Övervärlden går via en bergstopp, trädets högsta krona eller en rökpelare."
            },
            {
              "heading": "Återkomstens och Jordningens Lag",
              "body": "Den främsta regeln för varje resa är att återvända genom samma port som du gick in genom. När resan avslutas läggs handflatorna mot golvet eller marken för att helt återta kroppens tyngd i Mellanvärlden."
            }
          ]
        },
        "items": {
          "tr": [
            "Alt Dünya (Kökler): Toprağın, mağaraların ve derin suların katmanı; içgüdü, soy hafızası ve erk hayvanlarının yurdu.",
            "Orta Dünya (Gövde): İnsanın, mevsimlerin, dört yönün ve doğa ruhlarının (İye / Landvættir) birlikte yaşadığı fiziksel evren.",
            "Üst Dünya (Dallar): Yıldızların, göksel rehberlerin, kozmik yasaların ve yüksek kavrayışın bulunduğu ışık katmanı.",
            "Demir Kazık (Axis Mundi): Üç dünyayı birbirine bağlayan, Kutup Yıldızı’nda sabitlenen sarsılmaz merkez direği.",
            "Kayın ve Dünya Ağacı: Şamanik gelenekte gökle yeri birleştiren, dallarında ruhların dinlendiği kutsal yaşam ağacı.",
            "Eşik Bekçisi: Katmanlar arası geçişte niyetin saflığını ve hazırlığı sınayan ilk sınır."
          ],
          "en": [
            "Lower World (Roots): The layer of soil, caves, and deep waters; home of instinct, ancestral memory, and power animals.",
            "Middle World (Trunk): The physical universe shared by humans, seasons, the four directions, and land spirits (İye / Landvættir).",
            "Upper World (Branches): The luminous layer of stars, celestial teachers, cosmic laws, and overarching perspective.",
            "Iron Pillar (Axis Mundi): The unshakeable central axis connecting the three worlds, anchored at the Pole Star.",
            "Sacred Birch & World Tree: The living tree uniting sky and earth, in whose branches souls and spirits rest.",
            "Threshold Guardian: The boundary presence that tests clarity of intention before passage between realms."
          ],
          "sv": [
            "Undervärlden (Rötter): Skiktet av jord, grottor och djupa vatten; hem för instinkt, förfäders minne och kraftdjur.",
            "Mellanvärlden (Stam): Den fysiska världen som delas av människor, årstider, väderstreck och naturväsen (İye / Landvættir).",
            "Övervärlden (Grenar): Det klara skiktet av stjärnor, himmelska lärare och kosmiska lagar.",
            "Järnpelaren (Axis Mundi): Den orubbliga mittaxeln som förenar de tre världarna, fäst vid Polstjärnan.",
            "Helig Björk & Världsträd: Det levande träd som förenar himmel och jord.",
            "Tröskelväktare: Den gräns som prövar avsiktens klarhet vid övergången mellan världarna."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Ağaç Eksenini Kurmak",
            "steps": [
              "Omurgan dik olacak şekilde sessizce otur; ayak tabanlarının altından toprağın derinliklerine inen ağır kökleri imgele.",
              "Her nefes alışta göğüs kafesinin Orta Dünya’nın dört rüzgarıyla genişlediğini, her nefes verişte köklerinin sağlamlaştığını hisset.",
              "Başının tam tepesinden Kutup Yıldızı’na uzanan ince, gümüşi bir ışık hattı kur; üç katmanı tek bir nefeste birleştir."
            ]
          },
          "en": {
            "title": "Study Note · Establishing the Tree Axis",
            "steps": [
              "Sit quietly with an upright spine; visualize heavy roots descending from the soles of your feet deep into the earth.",
              "With each inhalation feel your chest expand with the four winds of the Middle World; with each exhalation feel your roots anchor deeper.",
              "Extend a fine silver line from the crown of your head to the Pole Star, uniting all three layers within a single breath."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Att Upprätta Trädaxeln",
            "steps": [
              "Sitt stilla med rak ryggrad; föreställ dig tunga rötter som sjunker från dina fotsulor djupt ned i jorden.",
              "Med varje inandning känn bröstkorgen vidgas med Mellanvärldens fyra vindar; med varje utandning förankras rötterna djupare.",
              "Låt en fin silverlinje sträcka sig från hjässan till Polstjärnan och förena alla tre skikt i ett enda andetag."
            ]
          }
        },
        "closing": {
          "tr": "Kökü olmayanın dalı göğe değmez; önce toprağa bas, sonra gökyüzünü oku.",
          "en": "Without roots, no branch touches the sky; stand firm upon the earth before reading the heavens.",
          "sv": "Utan rötter når ingen gren himlen; stå stadigt på jorden innan du läser himlavalvet."
        },
        "image": "/saman/uc-dunya-agac.jpg"
      },
      {
        "slug": "dungur-ve-nefes",
        "glyph": "II",
        "title": {
          "tr": "Düngür, Ritim ve Nefes",
          "en": "Drum, Rhythm, and Breath",
          "sv": "Trumma, Rytm och Andedräkt"
        },
        "subtitle": {
          "tr": "Şamanın binek hayvanı, kalp atışı ve vecd eşiği.",
          "en": "The shaman's steed, the heartbeat of the earth, and the threshold of trance.",
          "sv": "Schamanens springare, jordens hjärtslag och transens tröskel."
        },
        "summary": {
          "tr": "Davulun anatomisi, saniyede 4–7 vuruşluk teta ritmi ve nefesle bilinç kaydırma.",
          "en": "Anatomy of the frame drum, the 4–7 Hz theta pulse, and shifting awareness through breath.",
          "sv": "Trummans anatomi, tetarytmen på 4–7 slag per sekund och medvetandeskifte genom andning."
        },
        "paragraphs": {
          "tr": [
            "Altay ve Tuva geleneğinde şaman davuluna ‘Düngür’ denir ve davul yalnızca bir müzik aleti olarak görülmez; o, şamanın katmanlar arasında sırtına bindiği canlı binek hayvanıdır (algyşlarda geyik, maral veya at olarak çağrılır). Davulun kasnağı ormanın ağacından, derisi doğanın canından, sesi ise yerin kalp atışından gelir.",
            "Tokmak (Orba) deriye her değdiğinde tekdüze görünen ama kendi içinde derin harmonikler barındıran bir ses dalgası yayılır. Saniyede yaklaşık dört ila yedi vuruşluk sabit tempo, insan beyninin gündelik telaş dalgalarını (Beta) yavaşlatarak uyanık rüya ve derin içgörü eşiği olan Teta (4–7 Hz) frekansına indirir.",
            "Ritim tek başına yeterli değildir; ritmin taşıyıcısı nefestir. Şamanik nefes çalışmasında diyafram, davulun derisi gibi esner. Nefes daraldığında zihin savunmaya geçer; nefes derinleşip karın boşluğuna indiğinde ise içsel görüler berraklaşır.",
            "Bir davulun kasnağının iç yüzeyi, insanın kendi iç evrenidir. Kasnağın ortasındaki tutamak Dünya Ağacı’nı, enine uzanan kiriş ise yeryüzü ufkunu simgeler. Davulu eline alan kişi, aslında küçük bir evreni göğsünün önünde tutmaktadır."
          ],
          "en": [
            "In Altai and Tuvan tradition, the shaman's drum is called 'Düngür' and is never treated as a mere musical instrument; it is the living steed (invoked in chants as stag, elk, or horse) upon which the practitioner rides between worlds. Its rim comes from the forest tree, its membrane from living hide, and its voice from the heartbeat of the earth.",
            "Each strike of the beater (Orba) releases a resonant wave rich in low overtones. A steady pulse of roughly four to seven beats per second slows the waking analytical mind (Beta waves) into the Theta threshold (4–7 Hz)—the state of waking dream and clear inward vision.",
            "Rhythm alone is incomplete without its carrier: the breath. In shamanic breathwork, the diaphragm moves like the drumhead itself. When breath is shallow, the mind guards itself; when breath settles deep into the belly, inner sight clears.",
            "The inner face of the drum frame mirrors the cosmos. The vertical handle represents the World Tree, while the crossbar marks the horizon of the Middle World. To hold the drum before the chest is to hold a microcosm of the universe."
          ],
          "sv": [
            "I altaisk och tuvinsk tradition kallas schamantrumman 'Düngür' och betraktas aldrig som ett vanligt musikinstrument; den är det levande riddjur (kallad hjort, älg eller häst) som bär utövaren mellan världarna. Dess ram kommer från skogens träd och dess röst från jordens hjärtslag.",
            "Varje slag med trumpinnen (Orba) frigör en djup ljudvåg rik på övertoner. En stadig puls på cirka fyra till sju slag per sekund saktar ned det analyserande vardagssinnet till tetafrekvensen (4–7 Hz) — gränslandet för vaket drömmande och inre syn.",
            "Rytmen bärs av andedräkten. I schamanistiskt andningsarbete rör sig diafragman likt trumskinnet. När andningen sjunker djupt ned i buken klarnar den inre blicken.",
            "Trummans insida speglar kosmos: det vertikala handtaget utgör Världsträdet och tvärslån markerar horisonten. Att hålla trumman framför bröstet är att hålla ett litet universum i sina händer."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Davulun Canlandırılması ve Kamlama Öncesi Isıtma",
              "body": "Deri canlı bir dokudur; soğuk ve nemli havada sesi ağırlaşır, ateşin yanına yaklaştırıldığında ise gerilerek berraklaşır. Çalışma başlamadan önce davulun ateşe tutulup ısıtılması, hem derinin akort edilmesi hem de davulun ruhunun uyandırılmasıdır."
            },
            {
              "heading": "Orba (Tokmak) ve Çağrı Vuruşları",
              "body": "Yolculuk üç aşamalı ritimle ilerler: İlk aşama mekanı ve bedeni toplayan ağır ‘Kalp Vuruşu’dur. İkinci aşama eşiği geçiren hızlı ve kesintisiz ‘Yolculuk Koşusu’dur. Son aşama ise ruhu geri çağıran ‘Dönüş Vuruşu’dur (genellikle dokuz belirgin vuruşla mühürlenir)."
            },
            {
              "heading": "Algyş ve Boğazdan Gelen Ses",
              "body": "Davulun ritmine eşlik eden doğal insan sesi, kelimelerden önce titreşimle çalışır. Göğüs ve gırtlaktan çıkan uzun, rezonanslı tonlar bedendeki düğümleri çözer ve niyeti mekana sabitler."
            }
          ],
          "en": [
            {
              "heading": "Warming the Hide Before Practice",
              "body": "Natural hide responds to air and moisture; in cold dampness its voice deepens and slackens, while near the hearth fire it tightens and rings clear. Warming the drum by the fire before work both tunes the membrane and awakens the spirit of the instrument."
            },
            {
              "heading": "The Orba (Beater) and the Three Rhythms",
              "body": "A journey unfolds through three rhythmic phases: first, the slow 'Heartbeat' that gathers body and space; second, the rapid, steady 'Gallop' that carries awareness across the threshold; and finally, the 'Return Call' (traditionally sealed with nine distinct strikes)."
            },
            {
              "heading": "Algysh and Overtone Voice",
              "body": "The human voice accompanying the drum works through vibration before words. Long, chest-resonant tones release physical tension and anchor intention into the room."
            }
          ],
          "sv": [
            {
              "heading": "Att Värma Trumskinnet Vid Härden",
              "body": "Naturligt skinn reagerar på luft och fukt; i kyla blir tonen dov, men nära elden spänns skinnet och klingar klart. Att värma trumman före arbetet är både att stämma den och att väcka dess ande."
            },
            {
              "heading": "Orba (Trumpinnen) och de Tre Rytmerna",
              "body": "En resa följer tre rytmiska faser: först det långsamma 'Hjärtslaget' som samlar kropp och rum; sedan den snabba, jämna 'Galoppen' över tröskeln; och slutligen 'Återkomstsignalen' (ofta förseglad med nio tydliga slag)."
            },
            {
              "heading": "Algysh och Bröstklang",
              "body": "Människorösten som följer trumman verkar genom vibration före ord. Långa, djupa toner från bröst och strupe löser spänningar och förankrar avsikten."
            }
          ]
        },
        "items": {
          "tr": [
            "Kasnak (Kayın ve Sedir Ağacı): Yabanıl ormanda yıldırım görmüş veya el değmemiş ağaçtan izin alınarak bükülen, dünyanın çemberini simgeleyen gövde.",
            "Deri (Maral ve Dağ Geyiği): Üzerine kızıl aşıboyası ile Güneş, Ay, Kutup Yıldızı, Dünya Ağacı ve göksel geyiklerin çizildiği rezonans zarı.",
            "Sap · İye-Kiji (Davulun Sahibi): Davulun iç kısmında dikey duran, çift başlı ata figürü oymalı merkez direk (Axis Mundi).",
            "Demir Kiriş ve Çıngıraklar (Kıngırak): Yatay demir tel üzerine dizilen konik metal sarkaçlar; yıldırım sesini ve koruyucu zırhı taşır.",
            "Orba (Kam Tokmağı): Kayın dalı veya geyik boynuzundan yapılan, tavşan/samur kürküyle kaplı tokmak; hem ritim vurur hem de falda (Tölge) kullanılır.",
            "Canlandırma (Ak-Çajıl) ve Ritim: Yeni yapılan davulun ateşte ısıtılıp kımız/süt serpilerek uyandırılması ve 4–7 Hz teta ritmiyle nefesin kilitlenmesi."
          ],
          "en": [
            "Rim (Birch and Cedar Wood): The circular frame bent from a consecrated forest tree, embodying the ring of the cosmos.",
            "Membrane (Maral and Mountain Deer Hide): The drum skin painted in red ochre with the Sun, Moon, Pole Star, World Tree, and celestial deer.",
            "Handle · İye-Kiji (Master of the Drum): The vertical anthropomorphic wooden grip inside the drum representing the ancestral World Axis.",
            "Iron Crossbeam and Chimes: The horizontal iron rod hung with conical metal pendants that ring like thunder and act as acoustic armor.",
            "Orba (Fur-Covered Beater): Crafted from birch or reindeer antler wrapped in fur, used both to strike the rhythm and for divination (Tölge).",
            "Animation (Ak-Chajyl) and Rhythm: The rite of warming and awakening the new drum by the fire, locking breath into the 4–7 Hz theta pulse."
          ],
          "sv": [
            "Ram (Björk och Cederträ): Den runda stommen böjd av ett utvalt skogsträd som symboliserar världsalltets krets.",
            "Trumskinn (Maral- och Hjorthud): Skinnet målat med röd ockra med Solen, Månen, Polstjärnan, Världsträdet och himmelshjortar.",
            "Handtag · İye-Kiji (Trummans Rådare): Det vertikala snidade träfästet inuti trumman som utgör världsaxeln.",
            "Järntvärslå och Hänklockor: Den horisontella järnten med koniska metallhängen som klingar likt åska och ger skydd.",
            "Orba (Pälsklädd Trumpinne): Tillverkad av björk eller renhorn klädd i päls; används både för rytm och tydor (Tölge).",
            "Levendegöring (Ak-Tjajyl) och Rytm: Invigningen där trumman värms vid elden och väcks till liv i 4–7 Hz thetarytm."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · 4–4–8 Eşik Nefesi",
            "steps": [
              "Gözlerini kapat ve sağ elini göbek deliğinin iki parmak altına, sol elini göğsünün ortasına koy.",
              "Burnundan 4 saniyede karnını şişirerek nefes al, 4 saniye içeride sessizce tut, 8 saniyede ince bir ip gibi yavaşça ver.",
              "Bu döngüyü 9 kez tamamladığında kalp atışının yavaşladığını ve içsel sesin duyulur hale geldiğini gözlemle."
            ]
          },
          "en": {
            "title": "Study Note · The 4–4–8 Threshold Breath",
            "steps": [
              "Close your eyes; place your right hand two fingers below the navel and your left hand over the center of your chest.",
              "Inhale through the nose for 4 seconds into the belly, hold quietly for 4 seconds, and exhale slowly for 8 seconds.",
              "Complete 9 cycles and observe how the heartbeat slows and the inner field becomes still."
            ]
          },
          "sv": {
            "title": "Studieanteckning · 4–4–8 Tröskelandning",
            "steps": [
              "Slut ögonen; lägg höger hand två fingrar under naveln och vänster hand mitt på bröstet.",
              "Andas in genom näsan i 4 sekunder ned i buken, håll i 4 sekunder och andas ut långsamt under 8 sekunder.",
              "Fullfölj 9 cykler och observera hur pulsen saktar ned och det inre rummet blir stilla."
            ]
          }
        },
        "closing": {
          "tr": "Davul çalınmaz, dinlenir; ilk vuruşu sen yaparsın, ikinci vuruşu davul sana söyler.",
          "en": "The drum is not merely played, it is listened to; you strike the first beat, and the drum teaches the second.",
          "sv": "Trumman spelas inte bara, man lyssnar till den; du slår det första slaget och trumman visar det andra."
        },
        "image": "/saman/dungur-kozmos.jpg",
        "itemImages": [
          "/saman/drum-1-kasnak.jpg",
          "/saman/drum-2-deri.jpg",
          "/saman/drum-3-sap.jpg",
          "/saman/drum-4-kiris.jpg",
          "/saman/drum-5-orba.jpg",
          "/saman/drum-6-taziye.jpg"
        ]
      },
      {
        "slug": "seidr-ve-kuzey",
        "glyph": "III",
        "title": {
          "tr": "Seidr, Völva ve Kuzey Şamanizmi",
          "en": "Seidr, the Völva, and Northern Shamanism",
          "sv": "Seidr, Völvan och Nordisk Schamanism"
        },
        "subtitle": {
          "tr": "Asa, yüksek koltuk ve kaderin örülen iplikleri.",
          "en": "The distaff, the high seat, and the woven threads of fate.",
          "sv": "Staven, högsätet och ödesvävens trådar."
        },
        "summary": {
          "tr": "Freyja ve Odin’in Seidr yolu, Völva’nın asası, Galdr ses tekniği ve Wyrd ağları.",
          "en": "The Seidr path of Freyja and Odin, the Völva's staff, Galdr chant, and the web of Wyrd.",
          "sv": "Freyjas och Odens Seidr-väg, Völvans stav, Galdr-sång och Wyrdens nät."
        },
        "paragraphs": {
          "tr": [
            "İskandinav ve Cermen dünyasının şamanik kalbi ‘Seidr’ (Seiðr) geleneğidir. Vanir tanrıçası Freyja tarafından Asgard’a getirilen ve Odin’in en derin sırlarına ulaştığı bu disiplin, rünlerle kuzey şamanizminin doğrudan kesişim noktasıdır. Seidr kelimesi hem ‘kaynamak/köpürmek’ hem de ‘ip eğirmek/bağlamak’ kökleriyle ilişkilidir.",
            "Antik sagalarda (özellikle Kızıl Erik Sagası’nda) ‘Völva’ adı verilen bilge kadınlar, elinde demir veya ahşap asasıyla (Seiðstafr) toplulukları ziyaret eder, yüksek bir platforma (Seiðhjallr) oturur ve etrafında söylenen koruyucu şarkılarla (Varðlokur) vecd haline geçerek görünmeyen ağları okurdu.",
            "Kuzey kozmolojisinde kader önceden yazılmış değiştirilemez bir ferman değil; geçmiş eylemlerin ve şimdiki seçimlerin birbirine geçtiği canlı bir dokumadır (Wyrd / Örlög). Seidr uygulayıcısı, Urd Kuyusu’nun başındaki Nornların ördüğü bu ipliklerin nereye uzandığını görür ve düğümlenen yerleri çözer.",
            "Bu gelenekte ayrıca ‘Galdr’ (rünsel ses ve titreşim büyüsü) ve ‘Útiseta’ (gece boyunca doğada, bir tepede veya taş üzerinde tek başına sessizce oturarak bilgelik arama) pratikleri yer alır. Rünler bu yolculukta yalnızca yazı değil, evrenin yirmi dört temel kuvvet akışıdır."
          ],
          "en": [
            "The shamanic heart of the Norse and Germanic world is the tradition of 'Seidr' (Seiðr). Brought to Asgard by the Vanir goddess Freyja and practiced by Odin in his pursuit of deepest wisdom, this discipline stands at the direct crossroads of rune lore and northern shamanism. The root of Seidr evokes both 'seething/boiling' and 'spinning/binding a thread'.",
            "In the ancient sagas—most famously the Saga of Erik the Red—the seeress known as the 'Völva' traveled with her iron- or wood-bound staff (Seiðstafr), ascended the high platform (Seiðhjallr), and entered trance through spirit-calling songs (Varðlokur) to read the unseen threads of the community.",
            "In Northern cosmology, fate is not a static decree, but a living tapestry woven from past layers and present choices (Wyrd and Örlög). The practitioner of Seidr perceives how these threads stretch from the Well of Urd and where knots may be untangled.",
            "Beside Seidr stand two sister disciplines: 'Galdr' (the vocal intoning of runes and staves) and 'Útiseta' ('sitting out' alone upon a mound or stone through the night in silent vigil). Here the runes are experienced not merely as letters, but as twenty-four primordial currents."
          ],
          "sv": [
            "Det schamanistiska hjärtat i den nordiska världen är 'Seidr' (Seiðr). Förd till Asgård av vanagudinnan Freyja och utövad av Oden i hans sökande efter djupaste visdom, utgör denna tradition skärningspunkten mellan runlära och nordisk schamanism.",
            "I de isländska sagorna — särskilt Eirik Rödes saga — beskrivs sierskan, 'Völvan', som bär sin stav (Seiðstafr), stiger upp på högsätet (Seiðhjallr) och genom kallelsesånger (Varðlokur) försätts i trans för att läsa de osynliga trådarna.",
            "I nordisk kosmologi är ödet inte ett fast dekret, utan en levande väv (Wyrd och Örlög) av tidigare handlingar och nuvarande val. Seidr-utövaren ser hur trådarna löper från Urds brunn och var knutar kan lösas.",
            "Bredvid Seidr står två besläktade discipliner: 'Galdr' (den rituella sången av runornas ljud) och 'Útiseta' ('att sitta ute' ensam i naturen under natten i tyst vaka)."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Völva’nın Asası (Seiðstafr) ve İp Eğirme Sembolizmi",
              "body": "Völva kelimesi ‘asa taşıyan kadın’ anlamına gelir. Bu asa aynı zamanda yün eğirmeye yarayan örekeyi (distaff) temsil eder. Düşünce, niyet ve söz tıpkı ham yünün ipliğe dönüştürülmesi gibi eğrilir ve gerçeklik dokumasına katılır."
            },
            {
              "heading": "Hugr ve Hamr: Zihin ve Biçim Değiştirme",
              "body": "İskandinav ruh anlayışında insan tek bir parçadan oluşmaz: ‘Hugr’ aktif düşünce ve iradeyi, ‘Hamr’ ruhun bürünebildiği dış kabuğu ve biçimi, ‘Fylgja’ kişiye eşlik eden koruyucu ruhu, ‘Hamingja’ ise soy boyunca aktarılan talih ve bereket gücünü ifade eder. Odin’in iki kuzgunu Huginn (Düşünce) ve Muninn (Hafıza), şamanın dünyalar arasında uçan bilincinin sembolüdür."
            },
            {
              "heading": "Útiseta: Dışarıda Oturma Disiplini",
              "body": "Davulun olmadığı anlarda kuzey uygulayıcısı pelerinini başına çeker, doğada bir kaya veya tepe üzerine oturur ve gecenin sessizliğini dinler. Doğanın sesleri — rüzgarın yönü, kuzgunun ötüşü, suyun akışı — sorulan sorunun cevabını taşır."
            }
          ],
          "en": [
            {
              "heading": "The Völva's Staff (Seiðstafr) and the Spinning of Thread",
              "body": "The word Völva means 'staff-bearer'. Her staff mirrors the distaff used in spinning wool: thought, breath, and intention are spun like raw fleece into a taut thread and woven into the fabric of events."
            },
            {
              "heading": "Hugr, Hamr, Fylgja, and Hamingja",
              "body": "Norse lore recognizes multiple facets of the soul: 'Hugr' is active mind and will; 'Hamr' is the shifting form or astral skin; 'Fylgja' is the accompanying guardian spirit; and 'Hamingja' is the inherited luck and vitality of a lineage. Odin's ravens Huginn (Thought) and Muninn (Memory) embody consciousness flying between worlds."
            },
            {
              "heading": "Útiseta: The Discipline of Sitting Out",
              "body": "When no drum is struck, the northern practitioner draws a cloak over the head, sits motionless upon a stone or hillock at dusk, and listens. The direction of the wind, the call of a bird, and the stillness of the land answer the question held within."
            }
          ],
          "sv": [
            {
              "heading": "Völvans Stav (Seiðstafr) och Spinnandet av Tråden",
              "body": "Ordet Völva betyder 'stavbärerska'. Hennes stav speglar sländan som används vid spinning: tanke, andedräkt och avsikt spinns likt ull till en tråd i verklighetens väv."
            },
            {
              "heading": "Hugr, Hamr, Fylgja och Hamingja",
              "body": "Nordisk tradition urskiljer flera delar av själen: 'Hugr' är tanke och vilja; 'Hamr' är den skiftande hamnen; 'Fylgja' är följeslagaranden; och 'Hamingja' är ättens samlade kraft och lycka. Odens korpar Hugin (Tanke) och Munin (Minne) symboliserar medvetandets flykt."
            },
            {
              "heading": "Útiseta: Konsten att Sitta Ute",
              "body": "Utan trumma drar utövaren manteln över huvudet, sitter orörlig på en sten eller kulle i skymningen och lyssnar till vindens riktning, fåglarnas läten och landskapets tystnad."
            }
          ]
        },
        "items": {
          "tr": [
            "Seiðr: Freyja ve Odin’in temsil ettiği, kader ipliklerini okuma ve eğirme disiplini.",
            "Seiðhjallr (Yüksek Koltuk): Bilgenin gündelik düzlemin üzerine çıkarak üç dünyayı seyrettiği eşik kürsüsü.",
            "Varðlokur: Ruhları ve koruyucu güçleri çembere davet eden, vecd kapısını açan geleneksel çağrı ezgisi.",
            "Galdr: Rünlerin isimlerini ve ses köklerini yüksek titreşimle zikrederek alanı şekillendirme sanatı.",
            "Útiseta: Gece doğada tek başına sessizce oturarak toprağın ve gökyüzünün işaretlerini dinleme pratiği.",
            "Huginn ve Muninn: Şamanik yolculukta bilincin iki kanadı olan ‘Düşünce’ ve ‘Hafıza’."
          ],
          "en": [
            "Seiðr: The northern art of reading and spinning the threads of Wyrd, associated with Freyja and Odin.",
            "Seiðhjallr (High Seat): The raised platform from which the seeress surveys the realms above ordinary sight.",
            "Varðlokur: The guardian-calling chant that opens the circle and steadies the trance state.",
            "Galdr: Vocal intoning of rune names and phonetic roots to shape resonance within self and space.",
            "Útiseta: Silent night vigil in nature to receive counsel from land and sky.",
            "Huginn & Muninn: 'Thought' and 'Memory'—the twin wings of awareness in northern journeying."
          ],
          "sv": [
            "Seiðr: Den nordiska konsten att läsa och spinna ödestrådarna, förknippad med Freyja och Oden.",
            "Seiðhjallr (Högsätet): Den upphöjda plats varifrån sierskan blickar ut över världarna.",
            "Varðlokur: Den traditionella kallelsesång som öppnar cirkeln och bär transen.",
            "Galdr: Rituell sång av runornas ljud och namn för att forma resonans i kropp och rum.",
            "Útiseta: Tyst nattvaka i naturen för att lyssna till landets och himlens tecken.",
            "Hugin & Munin: 'Tanke' och 'Minne' — medvetandets två vingar under själsresan."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Galdr ve Útiseta Sessizliği",
            "steps": [
              "Açık havada veya pencerenin önünde tek bir soru belirle ve başını hafifçe örterek dış uyaranları kapat.",
              "Seçtiğin bir rünün (örneğin Ansuz veya Eihwaz) ses kökünü derin bir nefesle 3 kez göğsünde titreştirerek fısılda.",
              "Ardından tam 10 dakika boyunca hiçbir şey söylemeden ilk duyduğun doğa sesini, rüzgarın yönünü ve zihninde beliren ilk imgeyi not et."
            ]
          },
          "en": {
            "title": "Study Note · Galdr and Útiseta Stillness",
            "steps": [
              "Outdoors or by an open window, hold a single clear question and lightly hood your head to quiet external distraction.",
              "Intone the vocal root of a chosen rune (such as Ansuz or Eihwaz) three times on a deep exhalation, feeling the chest vibrate.",
              "Remain in complete silence for 10 minutes; note the first natural sound, the movement of air, and the first image that arises."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Galdr och Útiseta-stillhet",
            "steps": [
              "Utomhus eller vid ett öppet fönster, håll en enda klar fråga i sinnet och täck huvudet lätt för att dämpa yttre intryck.",
              "Ljud en vald runas vokalljud (exempelvis Ansuz eller Eihwaz) tre gånger på en djup utandning.",
              "Sitt sedan i fullständig tystnad i 10 minuter; notera det första naturljudet, vindens rörelse och den första inre bilden."
            ]
          }
        },
        "closing": {
          "tr": "Kader taşta donmuş bir yazı değil, şu an elinde eğirdiğin ipliktir.",
          "en": "Fate is not frozen in stone; it is the thread spinning between your fingers right now.",
          "sv": "Ödet är inte hugget i sten; det är tråden som spinns mellan dina fingrar just nu."
        },
        "ctaHref": "/runler",
        "ctaLabel": {
          "tr": "24 Rün Kapısına Geç",
          "en": "Open the 24 Runes",
          "sv": "Öppna de 24 Runorna"
        },
        "image": "/saman/seidr-hjallr.jpg"
      },
      {
        "slug": "erk-hayvanlari-ve-rehberler",
        "glyph": "IV",
        "title": {
          "tr": "Erk Hayvanları ve Ruh Rehberleri",
          "en": "Power Animals and Spirit Guides",
          "sv": "Kraftdjur och Andliga Vägledare"
        },
        "subtitle": {
          "tr": "Alt Dünya’da yaşayan saf içgüdü, koruyucu arketip ve yoldaşlık.",
          "en": "Pure instinct dwelling in the Lower World, protective archetypes, and companionship.",
          "sv": "Den rena instinkten i Undervärlden, beskyddande arketyper och följeslagare."
        },
        "summary": {
          "tr": "Erk hayvanının doğası, Alt Dünya’da karşılaşma, hayvan arketiplerinin dili ve yaşam enerjisi.",
          "en": "The nature of the power animal, meeting in the Lower World, animal archetypes, and vital force.",
          "sv": "Kraftdjurets natur, mötet i Undervärlden, djurarketypernas språk och livskraft."
        },
        "paragraphs": {
          "tr": [
            "Şamanik gelenekte ‘Erk Hayvanı’ (Power Animal / Fylgja), kişiye yalnızca sembolik bir nitelik kazandıran psikolojik bir metafor değildir; insanın doğayla olan kopmamış göbek bağı ve bağışıklık kalkanıdır. Bir hayvan tek bir bireyi değil, ait olduğu bütün türün milyonlarca yıllık hayatta kalma bilgeliğini (Arketip Ruhu) temsil eder.",
            "Modern insan aşırı düşünmekten içgüdülerini körelttiği için tehlikeyi, yorgunluğu veya kendi sınırlarını geç fark eder. Oysa kurt sürünün ve yalnızlığın dengesini, ayı kış uykusunu ve şifayı, kartal yüksek görüşü, geyik ise ormanda iz bırakmadan zarafetle yürümeyi bilir.",
            "Erk hayvanı zihinle ‘seçilmez’; Alt Dünya yolculuğunda kişinin karşısına kendiliğinden çıkar. Kimi zaman bir insanın doğuştan gelen temel bir koruyucu hayvanı vardır, kimi zaman da zorlu bir yaşam dönemini aşması için geçici bir rehber hayvan ona eşlik eder.",
            "Hayvan ruhuyla kurulan bağ tek taraflı bir kullanım değildir; onurlandırma ve hatırlama üzerine kuruludur. Kişi kendi erk hayvanının hareketini, nefesini ve doğasını tanıdıkça kendi bedenindeki uyuyan yaşam enerjisini (Uruz / Kut) uyandırır."
          ],
          "en": [
            "In shamanic tradition, a 'Power Animal' (or Fylgja) is far more than a psychological metaphor; it is a person's unbroken umbilical bond with nature and a vital energetic shield. A spirit animal represents not a single creature, but the ancestral archetype and millions of years of survival wisdom belonging to its entire species.",
            "Modern life dulls raw instinct through constant abstraction, causing us to notice exhaustion, danger, or crossed boundaries too late. Yet the wolf knows the balance of pack and solitude, the bear knows hibernation and medicine, the eagle holds high vision, and the stag moves through dense forest without breaking a branch.",
            "A power animal is never chosen by ego or preference; it reveals itself during the descent into the Lower World. Often a person walks with one lifelong guardian spirit while another animal ally steps forward for a specific season or threshold of life.",
            "This bond rests on reciprocity and remembrance. By honoring the movement, breath, and nature of one's guardian animal, dormant vitality (Kut / Uruz) awakens within the body."
          ],
          "sv": [
            "I schamanistisk tradition är ett 'Kraftdjur' (eller Fylgja) långt mer än en psykologisk symbol; det är människans obrutna band till naturen och en levande sköld av livskraft. Ett kraftdjur representerar inte en enskild individ, utan hela artens uråldriga visdom.",
            "Den moderna människan dämpar ofta sin instinkt genom ständig analys. Men vargen känner balansen mellan flock och ensamhet, björnen kan vintersömnens och läkandets konst, örnen bär den höga blicken och hjorten rör sig genom skogen i stilla värdighet.",
            "Ett kraftdjur väljs aldrig av egot; det visar sig självmant under resan till Undervärlden. Ofta har en människa ett livslångt skyddsdjur, medan ett annat kraftdjur kan träda fram under en särskild livsfas.",
            "Relationen vilar på ömsesidig respekt. Genom att minnas och hedra sitt kraftdjurs rörelse och natur väcks den slumrande livskraften i den egna kroppen."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Karşılaşma Kuralı: Dört Kez Belirme",
              "body": "Alt Dünya’ya indiğinde karşına çıkan her görüntü rehber olmayabilir. Geleneksel ölçüt, bir hayvanın yolculuk sırasında sana dört farklı açıdan görünmesi ya da gözlerinin içine doğrudan ve sakin bir güçle bakmasıdır. Yırtıcı olmayan, saldırmayan ama varlığıyla alanı dolduran hayvan gerçek yoldaştır."
            },
            {
              "heading": "Erk Dansı ve Bedensel Hafıza",
              "body": "Şamanizmde rehber hayvanla bütünleşmenin en eski yolu onun duruşunu, omuz hareketini ve nefesini bedende taklit etmektir (Erk Dansı). Beden o hayvanın ağırlığını hatırladığında zihin tereddüdü bırakır."
            },
            {
              "heading": "Üst Dünya Rehberleri ve Ata Meclisi",
              "body": "Alt Dünya’da hayvan ve bitki ruhları rehberlik ederken, Üst Dünya’da bilge atalar, ışık varlıkları ve öğretici arketipler bulunur. İçgüdü ve bedensel güç için Alt Dünya’ya, strateji ve yüksek kavrayış için Üst Dünya’ya danışılır."
            }
          ],
          "en": [
            {
              "heading": "The Rule of Recognition: Four Appearances",
              "body": "Not every fleeting image in the Lower World is a guide. A classic measure in journeying is that the animal reveals itself four times or meets your gaze with calm, unmistakable presence."
            },
            {
              "heading": "Power Dance and Embodied Memory",
              "body": "The oldest way to integrate a guardian animal's medicine is through posture, shoulder movement, and breath. When the physical body recalls the weight and stance of the animal, hesitation falls away."
            },
            {
              "heading": "Upper World Teachers and Ancestral Counsel",
              "body": "While animal and plant allies dwell primarily in the Lower World, wise ancestors and celestial teachers reside in the Upper World. One descends for vitality and instinct, and ascends for counsel and perspective."
            }
          ],
          "sv": [
            {
              "heading": "Igenkänningens Regel: Fyra Framträdanden",
              "body": "Inte varje flyktig bild i Undervärlden är en vägledare. Ett klassiskt kännetecken är att djuret visar sig fyra gånger under resan eller möter din blick med lugn, självklar kraft."
            },
            {
              "heading": "Kraftdans och Kroppsligt Minne",
              "body": "Det äldsta sättet att förena sig med sitt kraftdjur är att låta hållning, axlar och andedräkt spegla djurets rörelse. När kroppen minns djurets tyngd släpper tvivlet."
            },
            {
              "heading": "Övervärldens Lärare och Förfäders Råd",
              "body": "Medan kraftdjur och växtandar hör hemma i Undervärlden, möter man visa förfäder och himmelska lärare i Övervärlden. Man stiger ned för livskraft och instinkt, och upp för överblick och råd."
            }
          ]
        },
        "items": {
          "tr": [
            "Kurt (Börü): Sınır koruma, sadakat, keskin sezgi ve kendi yolunu bulma erki.",
            "Ayı: Toprağın şifacısı, kış uykusunda içe çekilme, köklenme ve sarsılmaz anaç güç.",
            "Kuzgun ve Karga: Dünyalar arası haberci, gölgeyle yüzleşme, hafıza ve dönüşüm.",
            "Geyik (Maral): Ormanın zarafeti, kalp açıklığı, şaman davulunun göksel binek ruhu.",
            "Kartal ve Şahin: Yüksek görüş, detayların içinde kaybolmadan büyük deseni okuma.",
            "Yılan: Deri değiştirme, yaşam enerjisinin (kundalini/toprak ateşi) uyanışı ve yenilenme."
          ],
          "en": [
            "Wolf: Boundary keeping, loyalty, sharp intuition, and pathfinding.",
            "Bear: Healer of the earth, restorative retreat in winter, grounding, and protective strength.",
            "Raven & Crow: Messenger between realms, shadow integration, memory, and transformation.",
            "Stag (Maral): Grace within the forest, open heart, and the celestial steed of the drum.",
            "Eagle & Hawk: High vision, reading the vast pattern without losing oneself in fragments.",
            "Serpent: Shedding old skin, awakening earth vitality, and transmutation."
          ],
          "sv": [
            "Varg: Gränsskydd, lojalitet, skarp intuition och förmågan att finna sin egen väg.",
            "Björn: Jordens läkare, återhämtning i vintervila, jordning och beskyddande styrka.",
            "Korp & Kråka: Budbärare mellan världarna, minne, skuggarbete och förvandling.",
            "Hjort (Maral): Skogens värdighet, öppet hjärta och trummans himmelska springare.",
            "Örn & Hök: Hög blick, förmågan att se det stora mönstret ovanifrån.",
            "Orm: Att ömsa skinn, jordkraftens uppvaknande och förnyelse."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Eşik Kapısında İlk Karşılaşma",
            "steps": [
              "Doğada bildiğin bir ağaç kökünü veya mağara ağzını zihninde canlandır; niyetini ‘Benimle yürüyen koruyucu erki tanımaya geliyorum’ olarak belirle.",
              "Toprağın altındaki tünelden geçip aydınlık bir orman açıklığına çıktığını gör; zorlamadan ilk yaklaşan canlıyı izle.",
              "Ona yalnızca ‘Bana bugün hangi niteliği hatırlatıyorsun?’ diye sor ve cevabı kelimelerle değil, bedendeki hisle al."
            ]
          },
          "en": {
            "title": "Study Note · First Meeting at the Threshold",
            "steps": [
              "Visualize a tree root or cave entrance you know in nature; set the clear intention: 'I come to meet the guardian strength walking with me.'",
              "Pass through the earthen tunnel into a sunlit clearing below; observe without forcing whichever creature steps forward.",
              "Ask simply: 'What quality do you remind me to embody today?' and receive the answer through bodily sensation rather than chatter."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Första Mötet vid Tröskeln",
            "steps": [
              "Föreställ dig en trädrot eller grottmynning du känner i naturen; håll avsikten: 'Jag kommer för att möta den beskyddande kraft som vandrar med mig.'",
              "Följ tunneln under jorden ut i en glänta; observera utan att tvinga fram vilket djur som närmar sig.",
              "Fråga enkelt: 'Vilken egenskap påminner du mig om idag?' och ta emot svaret som en känsla i kroppen."
            ]
          }
        },
        "closing": {
          "tr": "İçindeki vahşi rehberi susturursan, ormanda yönünü şaşırırsın.",
          "en": "Silence the wild guide within, and you lose your way in the forest.",
          "sv": "Tystar du den vilda vägledaren inom dig går du vilse i skogen."
        }
      },
      {
        "slug": "ruh-geri-cagirma",
        "glyph": "V",
        "title": {
          "tr": "Ruh Bütünlüğü, Kut ve Eşik Geçişleri",
          "en": "Soul Integrity, Kut, and Threshold Passages",
          "sv": "Själshelhet, Kut och Tröskelövergångar"
        },
        "subtitle": {
          "tr": "Dağılan yaşam enerjisini toplamak ve geçmiş eşikleri kapatmak.",
          "en": "Gathering scattered vital force and closing unfinished thresholds.",
          "sv": "Att samla splittrad livskraft och sluta oavslutade trösklar."
        },
        "summary": {
          "tr": "Kut (yaşam enerjisi), ruh parçası kaybı, yas ve travma eşikleri, enerjiyi geri çağırma.",
          "en": "Kut (vital force), soul loss during shock or grief, and calling energy back home.",
          "sv": "Kut (livskraft), själsförlust vid chock eller sorg och att kalla hem sin kraft."
        },
        "paragraphs": {
          "tr": [
            "Geleneksel Türk ve Moğol şamanizminde insanın yaşama sevincini, bereketini ve ruhsal bütünlüğünü ayakta tutan öz kuvvete ‘Kut’ (veya Süne / Tin) adı verilir. Kut yerinde olduğunda kişinin gözleri parlar, sesi kendi merkezinden çıkar ve hayattaki kararlarını ertelemeden alır.",
            "Ancak ağır bir kayıp, ani bir korku, uzun süren bir keder ya da insanın kendi doğasına aykırı bir ortamda yıllarca sıkışıp kalması durumunda, ruhun bir parçası acıyı hafifletmek için o olayın yaşandığı anda veya kişide asılı kalabilir. Şamanik dilde buna ‘ruh parçası kaybı’ (Soul Loss) ya da ‘kut çekilmesi’ denir.",
            "Böyle bir durumda kişi sık sık ‘O günden beri kendimde değilim’ veya ‘Bir yanım orada kaldı’ cümlelerini kurar. Kronik yorgunluk, nedensiz boşluk hissi ve aynı döngüleri tekrar tekrar yaşama hali, genellikle kapanmamış bir eşiğin işaretidir.",
            "Ruh geri çağırma (Soul Retrieval) çalışması, geçmişteki travmayı deşmek değil; orada donup kalmış saf yaşam enerjisini temizleyip bugünkü bedene, kalbe ve nefese geri davet etmektir. Geçmişteki kapı onurlandırılarak kapatıldığında enerji bugüne akar."
          ],
          "en": [
            "In traditional Turkic and Siberian shamanism, the vital essence that sustains joy, fortune, and spiritual wholeness is called 'Kut' (alongside Tin, the breath-soul, and Süne, consciousness). When Kut is whole, the eyes are bright, the voice speaks from the center, and life moves with natural momentum.",
            "Yet during sudden shock, deep grief, prolonged betrayal, or years spent living against one's true nature, a fragment of vital energy may step back or remain tethered to that past moment as a protective reflex. In shamanic language, this is known as 'soul loss' or the withdrawal of Kut.",
            "People experiencing this often say aloud without realizing its literal truth: 'A part of me stayed back there,' or 'I haven't felt completely here since that day.' Persistent emptiness and repeating cycles usually point to an unclosed threshold.",
            "Soul retrieval does not mean reliving past pain; it means locating the pure, unharmed vital essence that stepped away, cleansing it, and welcoming it back into the present body and breath. Once the old door is honored and closed, strength returns to the present."
          ],
          "sv": [
            "I traditionell turkisk och sibirisk schamanism kallas den livskraft som bär glädje, lycka och själslig helhet för 'Kut' (tillsammans med Tin, andedräktssjälen). När Kut är hel är blicken klar, rösten förankrad och livet i naturlig rörelse.",
            "Men vid plötslig chock, djup sorg eller långvarig anpassning mot den egna naturen kan en del av livskraften dra sig undan eller bli kvar vid det förflutna ögonblicket som ett skydd. I schamanistisk tradition kallas detta 'själsförlust'.",
            "Människor beskriver ofta detta ordagrant i vardagen: 'En del av mig blev kvar där' eller 'Jag har inte känt mig helt närvarande sedan den dagen.'",
            "Att kalla hem själen (Soul Retrieval) handlar inte om att återuppleva smärtan, utan om att bjuda tillbaka den rena livskraften till nuets kropp och andedräkt."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Tin, Kut ve Süne: Üçlü Ruh Anlayışı",
              "body": "Kadim anlayışta ‘Tin’ bedendeki nefes ve canlılıktır; ‘Kut’ gökten ve topraktan akan bereket ve yaşam enerjisidir; ‘Süne’ ise kişinin bilinci ve hafızasıdır. Bu üçünün kendi merkezinde birleşmesi tam sağlığı ve iç huzuru oluşturur."
            },
            {
              "heading": "Enerji Bağlarını Kesmek ve Geri Almak",
              "body": "Biten ilişkiler, kapanmış ortaklıklar veya terk edilmiş mekanlar arasında görünmez enerji iplikleri kalabilir. Şamanik çalışmada kişi kendisine ait olmayan ağırlığı sahibine sevgiyle iade eder, kendi öz enerjisini ise güneş sinir ağına (solar pleksus) ve kalbine geri toplar."
            },
            {
              "heading": "Karşılama ve Entegrasyon",
              "body": "Geri çağrılan yaşam enerjisi tepe çakradan ve kalpten içeri üflendiğinde, kişi kendisine ‘Hoş geldin’ der. Takip eden üç gün boyunca temiz su içmek, toprağa basmak ve ağır tartışmalardan uzak durmak enerjinin bedene yerleşmesini sağlar."
            }
          ],
          "en": [
            {
              "heading": "Tin, Kut, and Süne: The Threefold Soul",
              "body": "Ancient lore distinguishes three facets: 'Tin' is the vital breath animating the body; 'Kut' is the sacred life-force and blessing flowing between sky and earth; and 'Süne' is conscious memory. Their alignment creates wholeness."
            },
            {
              "heading": "Releasing Cords and Reclaiming Energy",
              "body": "Invisible cords often remain attached to ended relationships, old homes, or past roles. In practice, one returns what belongs to others with neutrality and calls one's own life-force back into the heart and solar plexus."
            },
            {
              "heading": "Welcoming Home and Integration",
              "body": "When returning vitality is breathed back into the crown and heart, it is greeted inwardly with the words 'Welcome home.' Over the following three days, clean water, quiet walks on earth, and rest allow the energy to root."
            }
          ],
          "sv": [
            {
              "heading": "Tin, Kut och Süne: Den Trefaldiga Själen",
              "body": "Den äldre traditionen skiljer mellan 'Tin' (livsandan), 'Kut' (den heliga livskraften och välsignelsen) och 'Süne' (det medvetna minnet). När dessa tre vilar i samma centrum uppstår helhet."
            },
            {
              "heading": "Att Lösa Band och Återta Kraft",
              "body": "Osynliga trådar kan bli kvar till avslutade relationer eller platser. I arbetet lämnar man neutralt tillbaka det som tillhör andra och kallar hem sin egen kraft till hjärta och solar plexus."
            },
            {
              "heading": "Välkomnande och Integrering",
              "body": "När den återvändande kraften andas in i hjässa och hjärta hälsas den inombords med orden 'Välkommen hem.' Under de följande tre dagarna får kraften rota sig genom stillhet och kontakt med naturen."
            }
          ]
        },
        "items": {
          "tr": [
            "Kut: İnsanın yaşam sevincini, talihini ve bedensel-ruhsal direncini oluşturan kutsal öz.",
            "Tin: Nefesle bedene giren ve yaşam boyu dolaşımda kalan canlılık ilkesi.",
            "Kapanmamış Eşik: Geçmişte yarım kalmış bir vedanın veya şokun bugünkü enerjiyi sızdırması.",
            "Bağ Çözme: Kişinin artık hizmet etmeyen eski rollerden ve mekanlardan enerjisini geri çekmesi.",
            "Hoş Geldin Mühürü: Geri dönen öz parçayı yargılamadan kalbe kabul etme disiplini.",
            "Üç Günlük Dinlenme: Çalışma sonrasında yeni bütünlüğün sinir sistemine yerleşmesi için korunan sessizlik."
          ],
          "en": [
            "Kut: The sacred essence of vitality, fortune, and resilience.",
            "Tin: The breath-force that animates the physical vessel throughout life.",
            "Unclosed Threshold: An unfinished farewell or shock from the past that continues to drain present attention.",
            "Cord Release: Withdrawing one's vital energy from outgrown roles, places, and entanglements.",
            "Seal of Welcome: Receiving returning vitality into the heart without self-judgment.",
            "Three-Day Stillness: The quiet integration period following deep energetic reclamation."
          ],
          "sv": [
            "Kut: Den heliga essensen av livskraft, lycka och motståndskraft.",
            "Tin: Andedräktskraften som besjälar kroppen genom livet.",
            "Oavslutad Tröskel: Ett oavslutat avsked eller en chock som fortfarande dränerar nuets uppmärksamhet.",
            "Att Lösa Band: Att dra tillbaka sin livskraft från gamla roller och platser.",
            "Välkomstsigill: Att ta emot sin återvändande kraft i hjärtat utan dömande.",
            "Tre Dagars Stillhet: Den lugna integreringstiden efter ett djupare arbete."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Öz Enerjiyi Geri Çağırma",
            "steps": [
              "İki elini kalbinin üzerine koy; zihninin sık sık geri gittiği eski bir anıyı, mekanı veya kişiyi karşına al.",
              "Derin bir nefes alarak içinden şu cümleyi kur: ‘Sana ait olanı sana bırakıyorum; bana ait olan tüm yaşam enerjimi ve ışığımı şu an, buraya geri çağırıyorum.’",
              "Altın rengi temiz bir ışık akışının kalbine dolduğunu gör ve eski görüntünün arkasındaki kapıyı sessizce kapat."
            ]
          },
          "en": {
            "title": "Study Note · Calling Back Vital Energy",
            "steps": [
              "Place both hands over your heart; call to mind a past place, memory, or situation where your attention frequently returns.",
              "Inhale deeply and speak inwardly: 'What belongs to you, I leave with you; all vitality and light that is mine, I call back here and now.'",
              "Visualize a clean stream of golden light returning into your chest, and quietly close the door upon the old scene."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Att Kalla Hem Sin Livskraft",
            "steps": [
              "Lägg båda händerna över hjärtat; tänk på en tidigare plats eller händelse dit dina tankar ofta återvänder.",
              "Andas in djupt och säg inombords: 'Det som tillhör dig lämnar jag hos dig; all livskraft och allt ljus som är mitt kallar jag tillbaka hit och nu.'",
              "Föreställ dig hur ett rent gyllene ljus strömmar in i bröstet och stäng stilla dörren till den gamla scenen."
            ]
          }
        },
        "closing": {
          "tr": "Geçmişte bıraktığın hiçbir parça orada kalmak zorunda değildir; nefesin buradaysa gücün de buraya döner.",
          "en": "No part left in the past is bound to stay there; where your breath is, your strength can return.",
          "sv": "Ingen del som lämnats i det förflutna måste stanna där; där din andedräkt är kan din kraft återvända."
        }
      },
      {
        "slug": "otacilik-ve-alan",
        "glyph": "VI",
        "title": {
          "tr": "Otacılık, Dört Yön ve Alan Tutma",
          "en": "Herbal Lore, the Four Directions, and Holding Space",
          "sv": "Örtkunskap, de Fyra Väderstrecken och Att Hålla Rum"
        },
        "subtitle": {
          "tr": "Dört yönün çağrısı, ardıç dumanı ve çember disiplini.",
          "en": "Calling the four directions, juniper smoke, and the discipline of the circle.",
          "sv": "De fyra väderstreckens kallelse, enrök och cirkelns disciplin."
        },
        "summary": {
          "tr": "Dört yön sunağı, ardıç ve üzerlik arındırması, mekan mühürleme ve Şamanizm Eğitimi.",
          "en": "Altar of the four directions, juniper and rue cleansing, sealing space, and Shamanism Training.",
          "sv": "De fyra väderstreckens altare, rening med en och harmelruta samt Schamanismutbildningen."
        },
        "paragraphs": {
          "tr": [
            "Şaman aynı zamanda bir ‘Otacı’ (Kam-Otacı) ve mekanın dengesini koruyan kişidir. Bir çalışmaya başlamadan önce mekanın dört yönü (Doğu, Güney, Batı, Kuzey) ile Merkez (Gökyüzü, Yeryüzü ve Kalp) selamlanır. Çünkü sınırları belirlenmemiş bir alanda odak dağılır; çember kurulduğunda ise zaman ve mekan kutsal bir çalışma odasına dönüşür.",
            "Anadolu ve Orta Asya otacılığında ardıç (artuç), üzerlik, adaçayı, çam reçinesi ve pelin otu yalnızca hoş koku vermek için yakılmaz. Her bitkinin dumanı, mekandaki durgun ve ağırlaşmış tortuyu çözen farklı bir frekans taşır. Ardıç dumanı eşiği temizlerken, üzerlik tohumu kem gözü ve dağınık dikkati kırar.",
            "Alan tutmak (Holding Space), bir başkasının veya kendi ruhunun dönüşüm sürecinde paniğe kapılmadan, yargılamadan ve müdahale etmeden merkezde kaya gibi durabilme sanatıdır. İyi bir uygulayıcı kendi duygusal dalgalanmasını alana karıştırmaz.",
            "RuneYard bünyesinde yürütülen Şamanizm Eğitimi, bu kadim mirası internetten derlenmiş yüzeysel kalıplarla değil; kozmolojisi, ritim ve nefes disiplini, etik sınırları ve güvenli pratikleriyle adım adım aktaran canlı bir ders halkasıdır."
          ],
          "en": [
            "The shaman is also an herbalist ('Otacı') and a keeper of spatial balance. Before any serious work begins, the Four Directions (East, South, West, North) along with the Center (Sky Above, Earth Below, and the Heart Within) are acknowledged. In an unbounded room attention scatters; once the circle is set, ordinary space becomes a sanctuary.",
            "In Anatolian and Central Asian herbalism, juniper ('ardıç'), wild rue ('üzerlik'), sage, pine resin, and mugwort are never burned merely for scent. Each smoke carries a distinct character that clears stagnant weight: juniper purifies the threshold, while wild rue breaks heavy projection and scattered focus.",
            "Holding space is the art of standing like bedrock at the center without panic, judgment, or intrusion while transformation unfolds. A seasoned practitioner never pours personal emotional turbulence into the circle.",
            "The Shamanism Training held at RuneYard transmits this heritage not through superficial clichés, but as a structured, living study circle grounded in cosmology, breath and rhythm discipline, ethical boundaries, and safe practice."
          ],
          "sv": [
            "Schamanen är också en örtkännare ('Otacı') och väktare av rummets balans. Innan ett arbete inleds hälsas de fyra väderstrecken (Öster, Söder, Väster, Norr) samt Centrum (Himmel, Jord och Hjärta). När cirkeln är sluten förvandlas rummet till en skyddad helgedom.",
            "I anatolisk och centralasiatisk tradition bränns enris ('ardıç'), harmelruta ('üzerlik'), salvia, tallkåda och gråbo aldrig enbart för doftens skull. Varje rök bär en egen karaktär som löser upp stagnerad tyngd i rummet.",
            "Att hålla rum (Holding Space) är konsten att stå stadigt som en klippa i mitten utan panik eller dömande. En mogen utövare blandar aldrig in sin egen oro i cirkeln.",
            "Schamanismutbildningen vid RuneYard förmedlar detta arv som en levande studiecirkel rotad i kosmologi, andningsdisciplin, etiska gränser och trygg praktik."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Yedi Yönün Selamlanması",
              "body": "Çember açılırken yüz önce güneşin doğduğu Doğu’ya (yeni başlangıç, nefes ve kartal), sonra Güney’e (ateş, büyüme ve canlılık), ardından Batı’ya (su, içe dönüş ve sonbahar), sonra Kuzey’e (toprak, atalar, bilgelik ve kış) dönülür. Son olarak Gökyüzü (Üst Dünya), Yeryüzü (Alt Dünya) ve Merkez (Kalp) mühürlenir."
            },
            {
              "heading": "Tütsüleme (Alazlama) ve Su Serpme",
              "body": "Geleneksel arındırmada ateş ve duman (Alazlama) ile kaynak suyu ve tuz birlikte kullanılır. Duman saat yönünün tersine gezdirildiğinde eskiyi çözer ve boşaltır; saat yönünde gezdirildiğinde ise yeni niyeti ve korumayı mekana sabitler."
            },
            {
              "heading": "Çemberi Kapatmak ve Şükran",
              "body": "Açılan her kapı ve çağrılan her yön, çalışma bittiğinde teşekkür edilerek uğurlanır. Açık bırakılan çember, kapısı açık bırakılmış ev gibidir; çalışmayı mühürlemek uygulayıcının hem kendine hem mekana saygısıdır."
            }
          ],
          "en": [
            {
              "heading": "Saluting the Seven Directions",
              "body": "When opening a circle, one faces first East (dawn, air, new breath), then South (fire, growth, vitality), West (water, introspection, twilight), and North (earth, ancestors, winter wisdom). Finally, Sky Above, Earth Below, and the Heart at the Center are sealed."
            },
            {
              "heading": "Fumigation (Alazlama) and Spring Water",
              "body": "Traditional purification pairs fire and smoke with spring water and salt. Moving smoke counterclockwise unbinds and clears old residue; moving it clockwise anchors protection and fresh intention."
            },
            {
              "heading": "Closing the Circle and Gratitude",
              "body": "Every direction invited at the beginning is thanked and released at the close. Leaving a circle unclosed is like leaving a house door wide open; sealing the work honors both practitioner and space."
            }
          ],
          "sv": [
            {
              "heading": "Att Hälsa de Sju Riktningarna",
              "body": "När cirkeln öppnas vänder man sig först mot Öster (gryning, luft), sedan Söder (eld, växtkraft), Väster (vatten, skymning) och Norr (jord, förfäder, vintervisdom). Slutligen förseglas Himlen ovan, Jorden nedan och Hjärtat i mitten."
            },
            {
              "heading": "Rökelse (Alazlama) och Källvatten",
              "body": "Traditionell rening förenar eld och rök med källvatten och salt. Rök som förs motsols löser upp gammal tyngd; rök som förs medsols förankrar skydd och ny avsikt."
            },
            {
              "heading": "Att Sluta Cirkeln i Tacksamhet",
              "body": "Varje riktning som bjudits in vid starten tackas när arbetet är över. Att försegla cirkeln är att visa respekt för både sig själv och rummet."
            }
          ]
        },
        "items": {
          "tr": [
            "Doğu Kapısı: Şafak, hava elementi, zihinsel berraklık ve yüksekten bakan kartal erki.",
            "Güney Kapısı: Öğle güneşi, ateş elementi, yaşam tutkusu ve dönüşüm sıcaklığı.",
            "Batı Kapısı: Gün batımı, su elementi, duygusal derinlik, gölge ve içe dönüş.",
            "Kuzey Kapısı: Gece yarısı, toprak elementi, kadim atalar, dayanıklılık ve kış bilgeliği.",
            "Ardıç ve Üzerlik: Anadolu ve Altay geleneğinin en güçlü iki eşik ve mekan arındırıcı bitkisi.",
            "Şamanizm Eğitimi: Sekiz haftalık canlı ders halkası; kozmoloji, ritim, yolculuk ve etik uygulama."
          ],
          "en": [
            "East Gate: Dawn, the element of Air, mental clarity, and the high vision of the eagle.",
            "South Gate: Midday sun, the element of Fire, vitality, and transformative warmth.",
            "West Gate: Dusk, the element of Water, emotional depth, shadow, and introspection.",
            "North Gate: Midnight, the element of Earth, ancestors, endurance, and winter wisdom.",
            "Juniper & Wild Rue: The two cornerstone cleansing plants of Anatolian and Altai tradition.",
            "Shamanism Training: Eight-week live study circle covering cosmology, rhythm, journeying, and ethics."
          ],
          "sv": [
            "Östra Porten: Gryning, luftelementet, klarhet och örnens höga blick.",
            "Södra Porten: Middagssol, eldelementet, livskraft och förvandlande värme.",
            "Västra Porten: Skymning, vattenelementet, djup och inåtvändhet.",
            "Norra Porten: Midnatt, jordelementet, förfäder, uthållighet och vintervisdom.",
            "Enris & Harmelruta: De två främsta reningsväxterna i anatolisk och altaisk tradition.",
            "Schamanismutbildning: Åtta veckors levande studiecirkel i kosmologi, rytm och praktik."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Dört Yönle Odayı Mühürlemek",
            "steps": [
              "Odanın ortasında dur; sırasıyla Doğu, Güney, Batı ve Kuzey’e dönerek her yöne hafifçe başını eğip selam ver.",
              "Eline bir dal kurutulmuş ardıç veya adaçayı al (yoksa yalnızca nefesinle); önce saat yönünün tersine bir tur dönerek ‘Ağırlaşmış olan dağılsın’ de.",
              "Ardından saat yönünde bir tur dönerek ‘Bu alan berraklık ve dengeyle mühürlensin’ diyerek çalışmanı başlat."
            ]
          },
          "en": {
            "title": "Study Note · Sealing the Room with the Four Directions",
            "steps": [
              "Stand at the center of your room; turn successively to East, South, West, and North, bowing slightly to acknowledge each quarter.",
              "With a sprig of dried juniper or sage (or simply your breath), turn once counterclockwise saying: 'May all stagnant weight disperse.'",
              "Then turn once clockwise saying: 'May this space be sealed in clarity and balance,' before beginning your work."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Att Försegla Rummet med de Fyra Väderstrecken",
            "steps": [
              "Stå i rummets mitt; vänd dig i tur och ordning mot Öster, Söder, Väster och Norr med en stilla bugning.",
              "Med en kvist torkat enris eller salvia (eller din egen andedräkt), vänd dig ett varv motsols med orden: 'Må all stagnerad tyngd skingras.'",
              "Vänd dig sedan ett varv medsols med orden: 'Må detta rum förseglas i klarhet och balans.'"
            ]
          }
        },
        "closing": {
          "tr": "Bilgi kulaktan kulağa değil, halden hale ve nefesten nefese geçer.",
          "en": "True knowledge passes not merely from ear to ear, but from state to state and breath to breath.",
          "sv": "Sann kunskap går inte bara från öra till öra, utan från tillstånd till tillstånd och andetag till andetag."
        },
        "ctaHref": "/egitim/samanizm",
        "ctaLabel": {
          "tr": "Şamanizm Eğitimini İncele",
          "en": "Explore Shamanism Training",
          "sv": "Utforska Schamanismutbildningen"
        },
        "whatsapp": true
      },
      {
        "slug": "demir-ocak-ve-merkut",
        "glyph": "🦅",
        "image": "/saman/demir-ocak-merkut.jpg",
        "title": {
          "tr": "Demirci Ocağı, Kuş Donu ve Merküt (Kartal)",
          "en": "The Blacksmith's Forge, Bird Cloak, and Merküt (Eagle)",
          "sv": "Smedjans Härd, Fågelhamnen och Merküt (Örnen)"
        },
        "subtitle": {
          "tr": "‘Demirciler ve Kamlar aynı yuvadan çıkmadır’: Su verilmiş demir ve gök kartalı",
          "en": "'Blacksmiths and Shamans come from the same nest': Tempered iron and the sky eagle",
          "sv": "'Smeder och schamaner kommer ur samma rede': Härdat järn och himmelsörnen"
        },
        "summary": {
          "tr": "Saha (Yakut) ve Altay geleneğinde demirci ocağının kutsallığı, kam cübbesi (Manyak) ve gök kartalı Merküt.",
          "en": "The sanctity of the blacksmith's forge in Sakha (Yakut) and Altai tradition, the shamanic coat (Manyak), and the cosmic eagle Merküt.",
          "sv": "Smedjans helighet i jakutisk och altaisk tradition, schamandräkten (Manyak) och den kosmiska örnen Merküt."
        },
        "paragraphs": {
          "tr": [
            "Sibirya, Saha (Yakut), Buryat ve Altay etnografyasında en köklü atasözlerinden biri şöyledir: ‘Demirciler ve Kamlar aynı yuvadan çıkmadır’ (veya ‘Demirci kamın ağabeyidir’). Mircea Eliade ve A. V. Anokhin’in kayıt altına aldığı bu gelenekte demirci (Darhan / Temirci), sıradan bir zanaatkâr değil; toprağın ham cevherini ateş ve çekiçle terbiye edip biçim veren ateş efendisidir.",
            "Geleneksel anlatılarda Dünya Ağacı’nın (Bay Kayın) en üst dallarında çift başlı veya dev kanatlı gök kartalı Merküt (Bürgüt) yuva yapar. Bir kam adayının ruhu inisiyasyon (geçiş) uykusu sırasında bu ağacın dallarında olgunlaşır; demirci ustası ise adayın dağınık parçalarını örs üzerinde döverek yeniden birleştirir ve ona ‘su verilmiş çelik’ gibi dayanıklı bir irade kazandırır.",
            "Kamın törende giydiği cübbe (Altayca Manyak) sıradan bir kıyafet değil, tam anlamıyla bir ‘Kuş Donu’ veya ‘Geyik Donu’dur. Cübbenin omuzlarına dikilen puhu kuşu ve kartal tüyleri kanatları, sırtına ve göğsüne asılan dövme demir levhalar ise hem kuşun kemik iskeletini hem de kamı alt dünya yolculuğunda koruyan zırhı temsil eder.",
            "Bir kam cübbesinin üzerindeki dövme demir parçaların ağırlığı bazen 15–20 kilogramı bulur; bu demir parçalar yalnızca eğitimli bir demirci ocağında, özel dualar ve ateş sunularıyla dövülür. Demir paslanmaz iradeyi, kuş tüyü ise ağırlıksız uçuşu simgeler: Kam, toprağın en ağır madeni ile göğün en hafif tüyünü tek bedende birleştiren kişidir."
          ],
          "en": [
            "One of the most foundational proverbs recorded in Siberian, Sakha (Yakut), Buryat, and Altai ethnography states: 'Blacksmiths and Shamans come from the same nest' (or 'The Blacksmith is the elder brother of the Shaman'). Documented by Mircea Eliade and A. V. Anokhin, the blacksmith (Darkhan / Temirchi) is no ordinary artisan, but the master of fire who tempers raw ore on the anvil into enduring form.",
            "In traditional cosmology, the giant cosmic eagle Merküt (Bürgüt) nests in the highest branches of the World Tree (Bay Kayın). During the initiatory illness and vision-sleep of a future shaman, the candidate's spirit is hatched in those branches and symbolically forged anew on the blacksmith's anvil, receiving the resilience of tempered iron.",
            "The ritual coat worn by the shaman (Altai Manyak) is not mere clothing, but an anatomical 'Bird Cloak' or 'Deer Cloak'. Eagle and owl feathers sewn onto the shoulders form the wings, while hand-forged iron pendants suspended across the chest and spine form both the skeletal bones of the bird and protective armor during journeys to the lower world.",
            "The forged iron ornaments on a traditional coat can weigh 15 to 20 kilograms; every piece must be hammered at a consecrated forge. Iron embodies unyielding groundedness, while feather embodies weightless flight: the shaman is the one who unites the heaviest metal of earth with the lightest pinion of the sky."
          ],
          "sv": [
            "Ett av de mest grundläggande talesätten i sibirisk, jakutisk (Sacha), burjatisk och altaisk etnografi lyder: 'Smeder och schamaner kommer ur samma rede' (eller 'Smeden är schamanens äldre bror'). Smeden (Darchan / Temirtji) är inte en vanlig hantverkare, utan eldens mästare som tämjer rå malm på städet.",
            "I den traditionella kosmologin bygger den kosmiska örnen Merküt (Bürgüt) sitt bo i Världsträdets (Bay Kayıns) högsta grenar. Under schamanens invigningssömn smids kandidatens ande symboliskt på nytt på smedens städ och får det härdade järnets motståndskraft.",
            "Den rituella dräkten (altaiska Manyak) är en anatomisk 'fågelhamn' eller 'hjorthamn'. Örn- och ugglefjädrar vid axlarna bildar vingarna, medan handsmidda järnhängen över bröst och ryggrad utgör både fågelns skelett och en skyddande rustning under färder genom underjorden.",
            "Järnornamenten på en traditionell dräkt kan väga 15 till 20 kilo. Järnet förkroppsligar orubblig förankring medan fjädern bär tyngdlös flykt: schamanen förenar jordens tyngsta metall med himlens lättaste vinge."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Demirci Ocağı (Darhan) ve İnisiyatik Yeniden Dövülme",
              "body": "Yakut ve Buryat anlatılarında kam adayı görevi kabul etmeden önce sembolik bir ‘parçalanma ve yeniden dövülme’ (Anokhin’in kaydettiği ‘etin ve kemiklerin sayılıp demirci ateşinde su verilmesi’) deneyiminden geçer. Bunun psikolojik ve ruhsal karşılığı, eski kibirli benliğin ateşte eriyip yerine sorumluluk taşıyabilen sağlam bir omurganın kurulmasıdır."
            },
            {
              "heading": "Merküt (Bürgüt): Dünya Ağacının Tepesindeki İlk Öğretmen",
              "body": "Altay ve Tuva mitolojisinde göklerden ilk kam bilgisini indiren varlık Güneş kuşu Merküt’tür (Kara Kartal / Kaya Kartalı). Kartal en yüksek irtifada uçabilen ve Güneş’e doğrudan bakabilen yırtıcıdır; bu yüzden kamın ‘üstten bakış’ (bütünü görme) yetisini temsil eder."
            },
            {
              "heading": "Manyak (Kam Cübbesi): İskelet, Zırh ve Ses",
              "body": "Manyak üzerine dikilen her demir parça (kaburga demirleri, güneş ve ay diskleri, küçük demir yaylar ve çıngıraklar) kam hareket ettikçe ritmik bir metal uğultusu çıkarır. Bu ses hem transı derinleştirir hem de ağır enerjileri (aza / kara nefes) uzakta tutan akustik bir kalkan işlevi görür."
            }
          ],
          "en": [
            {
              "heading": "The Blacksmith's Forge (Darkhan) and Initiatory Tempering",
              "body": "In Sakha and Buryat accounts, before stepping into the vocation, a shamanic candidate undergoes an inner ordeal of 'dismemberment and re-forging'—counting the bones and tempering them in the smith's fire. Psychologically and spiritually, the fragile ego melts away so a resilient spine capable of carrying communal responsibility can be forged."
            },
            {
              "heading": "Merküt (Bürgüt): The First Teacher Atop the World Tree",
              "body": "In Altai and Tuvan mythology, the being who first brought shamanic sight down from the heavens is Merküt, the Golden Eagle. Flying at the highest altitude and gazing toward the sun, the eagle represents synoptic vision—seeing the whole landscape from above."
            },
            {
              "heading": "Manyak (The Shamanic Coat): Skeleton, Armor, and Acoustic Shield",
              "body": "Every forged iron piece sewn onto the Manyak—iron ribs, solar and lunar disks, miniature bows, and tubular bells—produces a resonant metallic hum whenever the shaman moves, serving both as rhythmic accompaniment and an acoustic shield."
            }
          ],
          "sv": [
            {
              "heading": "Smedjans Härd (Darchan) och Invigningens Härdning",
              "body": "I jakutiska och burjatiska berättelser genomgår kandidaten en inre prövning av 'sönderdelning och omsmide' vid smedens eld. Det bräckliga egot smälts ned för att smida en ryggrad stark nog att bära ansvar."
            },
            {
              "heading": "Merküt (Bürgüt): Den Förste Läraren i Världsträdets Krona",
              "body": "I altaisk och tuvinsk mytologi är kungsörnen Merküt den som först bar ned den schamanska blicken. Örnen representerar överblick och förmågan att se helheten från hög höjd."
            },
            {
              "heading": "Manyak (Schamandräkten): Skelett, Rustning och Ljudsköld",
              "body": "Varje smidd järndel på Manyak-dräkten — järnrevben, sol- och månskivor samt klockor — skapar ett rytmiskt metalliskt brus som både fördjupar transen och fungerar som en akustisk sköld."
            }
          ]
        },
        "items": {
          "tr": [
            "Darhan / Temirci (Demirci): Ateşi, körüğü ve örsü yöneten; kamın zırhını döven ocak ustası.",
            "Merküt / Bürgüt (Kaya Kartalı): Dünya Ağacı’nın tepesinde yuva yapan, yüksek görüşün ve güneşin elçisi.",
            "Manyak (Kuş Donu Cübbe): Geyik derisi, kartal tüyleri ve dövme demir iskelet parçalarından oluşan tören giysisi.",
            "Körük ve Örs: Nefesin (hava) ateşi harlaması ve çekiç darbesinin (ritim) ham maddeye biçim vermesi.",
            "Demir Kaburgalar: Cübbenin göğüs ve sırt kısmına dikilen, iç organları ve ruhu koruyan demir şeritler.",
            "Su Verme (Temperleme): Kızgın demirin soğuk suya daldırılarak kırılmaz çelik haline gelmesi; sınavla olgunlaşma."
          ],
          "en": [
            "Darkhan / Temirchi (Blacksmith): Master of bellows, fire, and anvil who forges the shaman's iron ornaments.",
            "Merküt / Bürgüt (Golden Eagle): Messenger of high vision nesting in the crown of the World Tree.",
            "Manyak (Bird-Cloak Coat): Ceremonial garment of deer hide, eagle feathers, and forged skeletal iron.",
            "Bellows and Anvil: Breath fanning the flame and rhythm shaping raw matter into form.",
            "Iron Ribs: Forged iron strips sewn across chest and back to guard the vital core.",
            "Quenching (Tempering): Plunging red-hot iron into cold water to create unbreakable steel; maturity through trial."
          ],
          "sv": [
            "Darchan / Temirtji (Smed): Mästaren över bälg, eld och städ som smider dräktens järndelar.",
            "Merküt / Bürgüt (Kungsörn): Den höga blickens budbärare i Världsträdets krona.",
            "Manyak (Fågelhamnsdräkt): Ceremoniell dräkt av hjortskinn, örnfjädrar och smidda järnben.",
            "Bälg och Städ: Andedräkten som väcker elden och rytmen som ger råämnet form.",
            "Järnrevben: Smidda järnremsor över bröst och rygg som skyddar livskärnan.",
            "Härdning: När glödande järn sänks i kallt vatten och blir obrytbart stål; mognad genom prövning."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Demir ve Tüy Dengesi",
            "steps": [
              "Ayak tabanlarını yere tam basarak omurganı dikleştir: Bacaklarını ve omurganı toprağa kök salmış ‘dövme demir’ gibi ağır ve sarsılmaz hisset.",
              "Omuzlarını ve kürek kemiklerini gevşeterek nefes al: Başının tepe noktasını ve bakışını gökyüzündeki bir kartal (Merküt) tüyü kadar hafif ve geniş tut.",
              "Gün içinde bir krizle karşılaştığında bu iki niteliği aynı anda hatırla: Ayakların demir gibi yerde dursun, zihnin kartal gibi yukarıdan bütünü görsün."
            ]
          },
          "en": {
            "title": "Study Note · Balancing Iron and Feather",
            "steps": [
              "Stand with both feet planted firmly on the floor and lengthen your spine: feel your legs and lower body as heavy, unshakeable forged iron.",
              "Soften your shoulders and shoulder blades as you inhale: keep the crown of your head and your gaze as light and wide as an eagle's feather.",
              "When meeting a challenge during the day, hold both qualities at once: feet anchored like iron on the earth, mind viewing the whole from above like Merküt."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Balansen mellan Järn och Fjäder",
            "steps": [
              "Stå med båda fotsulorna stadigt i golvet och sträck på ryggraden: känn benen och basen som tungt, orubbligt smidesjärn.",
              "Slappna av i axlar och skulderblad när du andas in: håll hjässan och blicken så lätt och vid som en örnfjäder.",
              "När du möter en utmaning, förena båda kvaliteterna: fötterna förankrade som järn i jorden, sinnet överblickande som Merküt."
            ]
          }
        },
        "closing": {
          "tr": "Demir ateşte dövülmeden çelik olmaz; kanat rüzgâra açılmadan göğü bilmez.",
          "en": "Iron does not become steel without the anvil's fire; the wing does not know the sky until it opens to the wind.",
          "sv": "Järn blir inte stål utan städets eld; vingen känner inte himlen förrän den öppnas mot vinden."
        }
      },
      {
        "slug": "on-iki-hayvanli-takvim",
        "glyph": "❂",
        "image": "/saman/on-iki-hayvan-takvim.jpg",
        "title": {
          "tr": "On İki Hayvanlı Gök Takvimi, Cemreler ve Gündönümü",
          "en": "The Twelve-Animal Sky Calendar, Thaws, and Solstices",
          "sv": "Tolvårsdjurkalendern, Islossning och Solstånd"
        },
        "subtitle": {
          "tr": "Orhun yazıtlarından Kaşgarlı Mahmud’a: 12 yıllık Jüpiter çarkı, Nardugan ve Yengigün",
          "en": "From the Orkhon inscriptions to Mahmud al-Kashgari: The 12-year Jupiter wheel, Nardugan, and New Day",
          "sv": "Från Orchonskrifterna till Mahmud al-Kashgari: Det 12-åriga Jupiterhjulet, Nardugan och Ny Dag"
        },
        "summary": {
          "tr": "Eski Türk ve İç Asya geleneğinde 12 Hayvanlı Takvim (Sıçgan’dan Tonguz’a), 21 Aralık Nardugan, 21 Mart Yengigün ve üç cemre.",
          "en": "The Old Turkic 12-Animal Calendar (Rat to Boar), December 21 Nardugan, March 21 Yengigün, and the three vernal thaws (Cemre).",
          "sv": "Den fornturkiska 12-djurkalendern, vintersolståndet Nardugan, vårdagjämningen Yengigün och vårens tre uppvärmningar (Cemre)."
        },
        "paragraphs": {
          "tr": [
            "Orhun Abideleri’nde (Kül Tigin ve Bilge Kağan yazıtlarında: ‘Koyn yılka...’) ve Kaşgarlı Mahmud’un 1072 tarihli Dîvânu Lugâti’t-Türk eserinde ayrıntılarıyla kaydedilen On İki Hayvanlı Türk Takvimi, göçebe bozkır ve orman halklarının gökyüzü gözlemine dayanan en eski astronomik zaman dizgesidir. Bu takvim, Jüpiter gezegeninin (Eski Türkçe: Erentüz / Kara-kuş) Güneş etrafındaki 11.86 yıllık (yaklaşık 12 yıllık) yörünge dönüşünü temel alır.",
            "On iki yıllık çarkın her yılı bir hayvanın karakteriyle ve doğa sınavıyla anılır: Sıçgan (Sıçan/Fare), Ud (Sığır/Öküz), Bars (Pars/Kaplan), Tavışgan (Tavşan), Luu (Ejder/Timsa), Yılan, Yunt (At), Koy (Koyun), Biçin (Maymun), Takagu (Tavuk/Horoz), İt (Köpek) ve Tonguz (Domuz). Tarihsel kayıtlarda örneğin Ud (Sığır) ve Tavışgan yıllarının sert kışlarla, Luu (Su Ejderi) yılının ise bol yağış ve bereketle geçtiği gözlemlenmiştir.",
            "Yılın kendi içindeki güneş döngüsü ise iki büyük eşikle mühürlenir: 21 Aralık Kış Gündönümü’nde en uzun gecenin ardından Güneş’in yeniden doğuşu (Nardugan / Nar-Tugan — ‘Doğan Güneş’) kutlanır ve Akçam / Kayın ağacına dilek bağları asılır. 21 Mart İlkbahar Ekinoksu’nda ise gece ile gündüz eşitlendiğinde Yengigün (Ergenekon / Nevruz — Yeni Yıl Günü) başlar.",
            "Kıştan bahara geçiş ise Anadolu ve Orta Asya halk meteorolojisinde ‘Cemre’ (kor ateş) düşüşüyle adım adım izlenir: İlk cemre 19–20 Şubat’ta Havaya, ikinci cemre 26–27 Şubat’ta Suya (buzların çözülmesi), üçüncü cemre ise 5–6 Mart’ta Toprağa düşer. Gökyüzü (Hava), nehir (Su) ve çayır (Toprak) sırasıyla uyanmadan bahar başlamaz."
          ],
          "en": [
            "Recorded on the 8th-century Orkhon Inscriptions (Kül Tigin and Bilge Khagan monuments) and detailed in Mahmud al-Kashgari's 1072 Dīwān Lughāt al-Turk, the Twelve-Animal Turkic Calendar is the oldest astronomical timekeeping system of the Inner Asian steppe and forest peoples. Its twelve-year wheel tracks the 11.86-year sidereal orbit of Jupiter across the ecliptic.",
            "Each year of the twelve-year cycle carries the character of an animal: Sıçgan (Rat), Ud (Ox), Bars (Leopard/Tiger), Tavışgan (Hare), Luu (Dragon), Yılan (Serpent), Yunt (Horse), Koy (Sheep), Biçin (Monkey), Takagu (Rooster), İt (Dog), and Tonguz (Boar). Historical chronicles noted empirical climatic patterns across the cycle, such as abundant rains in the Year of the Dragon (Luu).",
            "Within each solar year, two cardinal gates anchor the calendar: at the December 21 Winter Solstice, after the longest night, the rebirth of the Sun is celebrated as Nardugan ('Rising Sun'), while at the March 21 Vernal Equinox, when day and night stand equal, the New Year dawns as Yengigün ('New Day' / Nowruz).",
            "The awakening of late winter into spring is tracked across Anatolia and Central Asia through the three 'Cemre' (descending embers of warmth): the first warms the Air (February 19–20), the second warms the Water and melts the ice (February 26–27), and the third enters the Earth (March 5–6) just before the equinox."
          ],
          "sv": [
            "Nedtecknad på 700-talets Orchonskrifter (Kül Tigin- och Bilge Khagan-monumenten) och utförligt beskriven i Mahmud al-Kashgaris Dīwān Lughāt al-Turk (1072) är den fornturkiska tolvårsdjurkalendern det äldsta astronomiska tidssystemet i Inre Asien. Dess tolvåriga hjul följer Jupiters 11,86-åriga omloppstid runt ekliptikan.",
            "Varje år i tolvårscykeln bär ett djurs prägel: Sıçgan (Råtta), Ud (Oxe), Bars (Leopard/Tiger), Tavışgan (Hare), Luu (Drake), Yılan (Orm), Yunt (Häst), Koy (Får), Biçin (Apa), Takagu (Tupp), İt (Hund) och Tonguz (Vildsvin).",
            "Under solåret markeras två stora trösklar: vid vintersolståndet den 21 december firas solens återfödelse efter årets längsta natt som Nardugan ('Den stigande solen'), och vid vårdagjämningen den 21 mars, när natt och dag väger lika, gryr det nya året som Yengigün ('Ny dag' / Nouruz).",
            "Övergången från vinter till vår följs genom de tre 'Cemre' (glödande värmedroppar): den första värmer Luften (19–20 februari), den andra värmer Vattnet och bryter isen (26–27 februari) och den tredje värmer Jorden (5–6 mars)."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "On İki Hayvan Çarkı ve Jüpiter (Erentüz) Döngüsü",
              "body": "Jüpiter her yıl zodyakın yaklaşık 30 derecelik bir dilimini (bir burcu) geçer ve 12 yılda başladığı noktaya döner. İnsan ömründeki 12, 24, 36, 48, 60 (bir ‘Müşel’ / tam altmışlık döngü) ve 72 yaşları, kişinin kendi doğduğu hayvan yılına geri döndüğü olgunluk eşikleridir."
            },
            {
              "heading": "Nardugan (21 Aralık) ve Yengigün (21 Mart)",
              "body": "Kuzey yarımkürede yaşayan doğa halkları için yıl iki kez doğar: İlki 21 Aralık’ta ışığın karanlığı yenip günlerin uzamaya başladığı astronomik dönüm (Nardugan), ikincisi ise 21 Mart’ta toprağın uyanıp göçebe sürülerin yaylaya çıktığı yaşamsal bahar başlangıcıdır (Yengigün)."
            },
            {
              "heading": "Üç Cemre: Hava, Su ve Toprağın Uyanış Sırası",
              "body": "Halk takvimindeki üç cemre gözlemi atmosfer fiziğiyle birebir örtüşür: Güneş ışınlarının geliş açısı dikleştikçe önce atmosferin alt katmanları (Hava) kırılır, ardından karların erimesiyle akarsular (Su) çözülür, en sonunda ise özgül ısısı yüksek olan Toprak ısınarak tohumu çatlatır."
            }
          ],
          "en": [
            {
              "heading": "The Twelve-Animal Wheel and the Orbit of Jupiter",
              "body": "Jupiter traverses roughly 30 degrees of the ecliptic each year, completing its circuit in 12 years. Ages 12, 24, 36, 48, 60 (one complete 60-year cycle), and 72 mark a person's return to their birth year animal—thresholds of life review and maturity."
            },
            {
              "heading": "Nardugan (December 21) and Yengigün (March 21)",
              "body": "For northern peoples, the year has two births: first at the Winter Solstice (Nardugan), when light triumphs over the longest night and days begin to lengthen; second at the Vernal Equinox (Yengigün), when day equals night and the pastures awaken."
            },
            {
              "heading": "The Three Cemre: Sequential Awakening of Air, Water, and Earth",
              "body": "The folk observation of the three Cemre mirrors natural thermodynamics: as solar declination rises in late February, the air warms first, followed a week later by the thawing of ice and streams, and finally the warming of the soil in early March."
            }
          ],
          "sv": [
            {
              "heading": "Tolvårshjulet och Jupiters Omloppsbana",
              "body": "Jupiter rör sig ungefär 30 grader längs ekliptikan varje år och fullbordar sitt kretslopp på 12 år. Åldrarna 12, 24, 36, 48, 60 och 72 markerar återkomsten till ens eget födelseårsdjur."
            },
            {
              "heading": "Nardugan (21 december) och Yengigün (21 mars)",
              "body": "För nordliga folk föds året två gånger: vid vintersolståndet (Nardugan) när ljuset vänder åter efter den längsta natten, och vid vårdagjämningen (Yengigün) när dag och natt är lika långa."
            },
            {
              "heading": "De Tre Cemre: Luftens, Vattnets och Jordens Uppvaknande",
              "body": "Folkkalenderns tre Cemre speglar naturens termodynamik i slutet av februari och början av mars: först värms luften, en vecka senare bryts isen i vattendragen, och slutligen värms jorden."
            }
          ]
        },
        "items": {
          "tr": [
            "Sıçgan & Ud (Fare ve Sığır · 1–2. Yıllar): Kış hazırlığı, ambar bereketi, sabır ve ağır emek yılları.",
            "Bars & Tavışgan (Pars ve Tavşan · 3–4. Yıllar): Atılganlık ve çeviklik; doğanın sert sınavları ile hızlı uyum.",
            "Luu & Yılan (Ejder ve Yılan · 5–6. Yıllar): Yağmur, yer-su bereketi, deri değiştirme ve derin bilgelik.",
            "Yunt & Koy (At ve Koyun · 7–8. Yıllar): Bozkır yolculuğu, hız, sürü bereketi ve topluluk huzuru.",
            "Biçin & Takagu (Maymun ve Horoz · 9–10. Yıllar): Zanaat, uyanıklık, şafak vakti ve zamanın ilanı.",
            "İt & Tonguz (Köpek ve Domuz · 11–12. Yıllar): Sadakat, eşik bekçiliği, döngünün kapanışı ve yeni tohuma hazırlık."
          ],
          "en": [
            "Sıçgan & Ud (Rat and Ox · Years 1–2): Winter storage, patience, endurance, and steady labor.",
            "Bars & Tavışgan (Leopard and Hare · Years 3–4): Boldness and agility; swift adaptation to nature's tests.",
            "Luu & Yılan (Dragon and Serpent · Years 5–6): Rain, water abundance, shedding old skin, and deep wisdom.",
            "Yunt & Koy (Horse and Sheep · Years 7–8): Steppe journeying, speed, flock abundance, and communal peace.",
            "Biçin & Takagu (Monkey and Rooster · Years 9–10): Craft, vigilance, dawn awakening, and heralding the hour.",
            "İt & Tonguz (Dog and Boar · Years 11–12): Loyalty, threshold guardianship, completion of the 12-year wheel."
          ],
          "sv": [
            "Sıçgan & Ud (Råtta och Oxe · År 1–2): Vinterförråd, tålamod, uthållighet och stadigt arbete.",
            "Bars & Tavışgan (Leopard och Hare · År 3–4): Mod och smidighet; snabb anpassning till naturens prövningar.",
            "Luu & Yılan (Drake och Orm · År 5–6): Regn, vattnets välsignelse, skinnömsning och djup visdom.",
            "Yunt & Koy (Häst och Får · År 7–8): Vandring över stäppen, snabbhet, hjordens välgång och frid.",
            "Biçin & Takagu (Apa och Tupp · År 9–10): Hantverk, vaksamhet, gryningsrop och tidens mått.",
            "İt & Tonguz (Hund och Vildsvin · År 11–12): Trofasthet, tröskelvakt och fullbordan av tolvårscykeln."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Doğum Yılını ve Mevsim Eşiğini Bulmak",
            "steps": [
              "Doğum yılını 12’ye bölerek (veya 12’şer yıllık Jüpiter dönüşlerini: 12, 24, 36, 48, 60 yaşlarını sayarak) hayatındaki 12 yıllık ana dönemlerin nasıl kapandığını ve açıldığını incele.",
              "Şubat sonu ve Mart başında üç cemrenin (Hava, Su, Toprak) düşüş günlerini takviminde işaretle ve o günlerde doğadaki değişimi bizzat dışarı çıkarak gözlemle.",
              "21 Aralık (Nardugan) ve 21 Mart (Yengigün) günlerinde evini havalandır, yarım kalan bir hesabı kapat ve yeni mevsim için tek bir somut niyet belirle."
            ]
          },
          "en": {
            "title": "Study Note · Tracking Your 12-Year Cycle and Seasonal Gates",
            "steps": [
              "Reflect on the 12-year Jupiter milestones of your life (ages 12, 24, 36, 48, 60) to see how major chapters have opened and closed.",
              "Mark the three Cemre dates in late February and early March (Air, Water, Earth) and step outdoors on each to observe the physical shift in wind, water, and soil.",
              "On December 21 (Nardugan) and March 21 (Yengigün), air out your home, settle an unfinished matter, and set one clear intention for the new quarter."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Att Följa Din 12-Årscykel och Årstidsportarna",
            "steps": [
              "Betrakta 12-årsgränserna i ditt liv (12, 24, 36, 48, 60 år) för att se hur stora livskapitel har öppnats och slutits.",
              "Markera de tre Cemre-dagarna i slutet av februari och början av mars (Luft, Vatten, Jord) och gå ut i naturen för att iaktta skiftet.",
              "Den 21 december (Nardugan) och 21 mars (Yengigün), vädra ditt hem, avsluta en ouppklarad sak och sätt en tydlig avsikt för den nya årstiden."
            ]
          }
        },
        "closing": {
          "tr": "Göğün çarkı on iki yılda döner; cemre önce havaya, sonra suya, en son toprağa düşer.",
          "en": "The wheel of heaven turns in twelve years; the ember warms first the air, then the water, and last the earth.",
          "sv": "Himlens hjul vänder på tolv år; glöden värmer först luften, sedan vattnet och sist jorden."
        }
      }
    ]
  },
  "kelt": {
    "slug": "kelt",
    "image": "/traditions/kelt.jpg",
    "title": {
      "tr": "Kelt",
      "en": "Celtic",
      "sv": "Keltisk"
    },
    "line": {
      "tr": "Galatya’nın Drunemeton koruluğundan İrlanda’nın Ogham taşlarına: Yılın sekiz eşiği, Üç Şiir Kazanı ve yirmi kutsal ağaç.",
      "en": "From Galatia's Drunemeton grove to Ireland's Ogham stones: the eight thresholds of the year, the Three Cauldrons, and twenty sacred trees.",
      "sv": "Från Galatiens Drunemeton-lund till Irlands Ogham-stenar: årets åtta trösklar, de Tre Kittlarna och tjugo heliga träd."
    },
    "backLabel": {
      "tr": "Kelte dön",
      "en": "Back to Celtic",
      "sv": "Tillbaka till Keltisk"
    },
    "doors": [
      {
        "slug": "nemeton-ve-cark",
        "glyph": "ᚁ",
        "title": {
          "tr": "Nemeton ve Yılın Sekiz Eşiği",
          "en": "The Nemeton and the Eight Thresholds of the Year",
          "sv": "Nemeton och Årets Åtta Trösklar"
        },
        "subtitle": {
          "tr": "Galatya’dan İrlanda’ya kutsal koruluklar ve mevsim döngüsü.",
          "en": "Sacred groves from Galatia to Ireland and the turning of the seasons.",
          "sv": "Heliga lundar från Galatien till Irland och årstidernas kretslopp."
        },
        "summary": {
          "tr": "Nemeton (kutsal meşe koruluğu), Anadolu Galatya’sındaki Drunemeton ve dört ateş festivali.",
          "en": "The Nemeton (sacred oak grove), Drunemeton in Anatolian Galatia, and the four Gaelic fire festivals.",
          "sv": "Nemeton (den heliga eklunden), Drunemeton i Anatolien och de fyra keltiska eldfesterna."
        },
        "paragraphs": {
          "tr": [
            "Antik Kelt dünyasında tapınak taş duvarlarla örülmezdi; tapınak, gökyüzüyle toprağın ağaç dalları arasında buluştuğu kutsal koruluktu ve buna ‘Nemeton’ denirdi. Bu kelime Kelt dillerinde ‘kutsal ayrıcalıklı alan’ (nemeto-) kökünden gelir. Üstelik bu gelenek yalnızca İrlanda veya Galya’ya ait değildir: Antik coğrafyacı Strabon (Geographika 12.5.1), MÖ 3. yüzyılda Orta Anadolu’ya (Ankara ve Yozgat çevresine) yerleşen Kelt boylarının (Galatların) en yüksek meclislerini ‘Drunemeton’ (Kutsal Meşe Koruluğu) adlı merkezde topladıklarını kaydeder.",
            "Druid kelimesinin etimolojik kökü de doğrudan meşe ağacıyla (*deru-*) ve derin bilgiyle (*-wid*, ‘görmek/bilmek’) bağlıdır; yani Druid ‘Meşeyi Bilen’ veya ‘Ağacın Bilgeliğini Okuyan’ kişidir. Nemeton’a girildiğinde silah taşınmaz, ağaçlara izinsiz demir vurulmaz ve doğanın döngüsü dinlenirdi.",
            "Ortaçağ İrlanda elyazmalarında (özellikle Sanas Cormaic ve Tochmarc Emire metinlerinde) yıl iki ana yarıya bölünür: 1 Kasım’da (Samhain) başlayan karanlık kış yarısı ve 1 Mayıs’ta (Beltane) başlayan aydınlık yaz yarısı. Bu iki ana kapının arasına 1 Şubat (Imbolc) ve 1 Ağustos (Lughnasadh) yerleştirilerek dört büyük ateş eşiği kurulur.",
            "Bu dört ateş gününe iki gündönümü (Kış/Alban Arthan ve Yaz/Alban Hefin) ile iki ekinoks (İlkbahar/Alban Eiler ve Sonbahar/Alban Elfed) eklendiğinde sekiz kollu yıl çarkı tamamlanır. Kelt takviminde her yeni gün ve her yeni mevsim gündüzle değil, bir önceki akşamın karanlığıyla — tohumun toprağın altındaki sessizliğiyle — başlar."
          ],
          "en": [
            "In the ancient Celtic world, temples were not built of mortared stone walls; the sanctuary was the living forest clearing where sky and earth met through the canopy, called a 'Nemeton' (from Proto-Celtic *nemeto-*, 'sacred space'). This heritage reaches directly into Anatolia: the geographer Strabo (Geographica 12.5.1) records that the Celtic tribes of Galatia in central Anatolia (around modern Ankara) convened their supreme council at 'Drunemeton'—the 'Sacred Oak Grove'.",
            "The word 'Druid' itself derives from the Indo-European roots *deru-* (oak/steadfast) and *weid-* (to see/to know)—literally 'One with Knowledge of the Oak'. Within a Nemeton, weapons were laid down and the seasonal order of land and sky was observed.",
            "In early medieval Irish manuscripts (such as *Sanas Cormaic* and *Tochmarc Emire*), the year is divided into two halves: the dark winter half beginning at *Samhain* (1 November) and the bright summer half beginning at *Beltane* (1 May). Between them stand *Imbolc* (1 February) and *Lughnasadh* (1 August), forming the four great Gaelic fire festivals.",
            "Joined with the two solstices and two equinoxes, these thresholds form the eightfold turning of the year. Just as the Celtic day began at dusk rather than dawn, the Celtic year begins at Samhain—honoring the quiet darkness where every seed is conceived before emerging into light."
          ],
          "sv": [
            "I den antika keltiska världen byggdes tempel inte av stenmurar; helgedomen var den levande skogsgläntan där himmel och jord möttes genom trädkronorna, kallad 'Nemeton' (av keltiska *nemeto-*, 'helig plats'). Detta arv sträcker sig ända till Anatolien: geografen Strabon (Geographica 12.5.1) berättar att de keltiska galaterna i centrala Anatolien (kring dagens Ankara) samlade sitt högsta råd vid 'Drunemeton' — 'Den Heliga Eklunden'.",
            "Ordet 'Druid' härstammar från rötterna *deru-* (ek) och *weid-* (att se/veta) — 'Den som känner ekens visdom'. I en Nemeton lades vapen ned och naturens ordning respekterades.",
            "I tidigmedeltida iriska handskrifter (*Sanas Cormaic* och *Tochmarc Emire*) delas året i två halvor: den mörka vinterhalvan som inleds vid *Samhain* (1 november) och den ljusa sommarhalvan som börjar vid *Beltane* (1 maj). Mellan dem står *Imbolc* (1 februari) och *Lughnasadh* (1 augusti).",
            "Tillsammans med de två solstånden och de två dagjämningarna bildar dessa trösklar årshjulets åtta ekrar. Precis som det keltiska dygnet började i skymningen börjar året vid Samhain — i det stilla mörker där fröet vilar innan det når ljuset."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Anadolu’daki Kelt İzi: Drunemeton",
              "body": "MÖ 278 yılında Anadolu’ya geçen التكتوساج (Tektosag), Tolkistobog ve Trokmi adlı üç Kelt boyu, bugünkü Ankara (Ancyra) ve Yozgat (Tavium) bölgesinde Galatya’yı kurdu. On iki tetrarkın ve üç yüz yargıcın toplandığı kutsal meşe koruluğu Drunemeton, Kelt ağaç bilgeliğinin Anadolu toprağındaki tarihsel mührüdür."
            },
            {
              "heading": "Dört Ateş Festivali (Samhain · Imbolc · Beltane · Lughnasadh)",
              "body": "Samhain (1 Kasım) hasadın sonu, yılın karanlık yarısının başlangıcı ve atalarla temas eşiğidir. Imbolc (1 Şubat) toprağın altında ilk süt ve filizin uyanışıdır. Beltane (1 Mayıs) yaşam ateşinin yakıldığı ve sürülerin meraya çıkarıldığı yaz kapısıdır. Lughnasadh (1 Ağustos) ise ilk başakların biçildiği ve emeğin onurlandırıldığı hasat meclisidir."
            },
            {
              "heading": "Gündönümleri ve Ekinokslar (Alban Eşikleri)",
              "body": "Güneşin dört dönüm noktası ateş festivallerinin arasına yerleşir: Kış Gündönümü en uzun gecenin ardından ışığın yeniden doğuşunu; İlkbahar Ekinoksu gece ile gündüzün ilk dengesini; Yaz Gündönümü güneşin zirvesini; Sonbahar Ekinoksu ise içe çekilme öncesi ikinci terazi noktasını işaretler."
            }
          ],
          "en": [
            {
              "heading": "The Celtic Footprint in Anatolia: Drunemeton",
              "body": "In 278 BCE, three Celtic tribes—the Tectosages, Tolistobogii, and Trocmi—settled in central Anatolia around Ancyra (Ankara) and Tavium. Their sacred council grove, Drunemeton, recorded by Strabo, stands as a historical bridge between Celtic oak lore and the Anatolian plateau."
            },
            {
              "heading": "The Four Fire Festivals (Samhain · Imbolc · Beltane · Lughnasadh)",
              "body": "Samhain (1 November) marks the end of harvest, the opening of winter, and ancestral remembrance. Imbolc (1 February) stirs the first quickening beneath the frost. Beltane (1 May) kindles the twin bonfires of summer vitality. Lughnasadh (1 August) honors the first grain harvest and skill."
            },
            {
              "heading": "Solstices and Equinoxes",
              "body": "Between the four cross-quarter fire festivals stand the solar hinges: Winter Solstice (rebirth of light after the longest night), Spring Equinox (first balance), Summer Solstice (zenith of light), and Autumn Equinox (second balance before descent)."
            }
          ],
          "sv": [
            {
              "heading": "Det Keltiska Spåret i Anatolien: Drunemeton",
              "body": "År 278 f.Kr. bosatte sig tre keltiska stammar i centrala Anatolien kring Ancyra (Ankara). Deras heliga eklund Drunemeton, omtalad av Strabon, utgör en historisk bro mellan keltisk trädvisdom och Anatoliens högland."
            },
            {
              "heading": "De Fyra Eldfesterna (Samhain · Imbolc · Beltane · Lughnasadh)",
              "body": "Samhain (1 november) inleder vinterhalvåret och hedrar förfäderna. Imbolc (1 februari) markerar det första livstecknet under frosten. Beltane (1 maj) tänder sommarens livseldar. Lughnasadh (1 augusti) firar den första skörden."
            },
            {
              "heading": "Solstånd och Dagjämningar",
              "body": "Mellan de fyra eldfesterna står solens fyra vändpunkter: Vintersolståndet, Vårdagjämningen, Sommarsolståndet och Höstdagjämningen."
            }
          ]
        },
        "items": {
          "tr": [
            "Samhain (1 Kasım): Yılın karanlık yarısının başlangıcı; eski döngünün kapanışı ve ataların anılması.",
            "Imbolc (1 Şubat): Kışın ortasında toprağın uyanışı, Brigid’in ocağı ve arınma eşiği.",
            "Beltane (1 Mayıs): Yaz yarısının başlangıcı; iki ateş arasından geçiş, canlılık ve bereket.",
            "Lughnasadh (1 Ağustos): İlk hasat, ustalık, sabırla olgunlaşan emeğin toplanması.",
            "Drunemeton: Antik Galatya’da (Orta Anadolu) Kelt boylarının toplandığı tarihsel kutsal meşe koruluğu.",
            "Bile (Kutsal Merkez Ağacı): İrlanda geleneğinde her kabilenin merkezinde duran, altında ant içilen kadim ağaç."
          ],
          "en": [
            "Samhain (1 November): Opening of the dark half of the year; closing the old cycle and honoring ancestors.",
            "Imbolc (1 February): First stirring of spring beneath winter soil; hearth purification and Brigid's threshold.",
            "Beltane (1 May): Opening of the bright half of the year; vitality, blossom, and the twin fires.",
            "Lughnasadh (1 August): First harvest festival; honoring craftsmanship and ripened effort.",
            "Drunemeton: The historical sacred oak grove of the Galatian Celts in central Anatolia.",
            "Bile (Sacred Center Tree): The venerated ancestral tree standing at the heart of an Irish túath (territory)."
          ],
          "sv": [
            "Samhain (1 november): Början på årets mörka halva; avslut på den gamla cykeln och vördande av förfäder.",
            "Imbolc (1 februari): Vårens första rörelse under vinterns jord; härdens rening.",
            "Beltane (1 maj): Början på årets ljusa halva; livskraft och de dubbla eldarna.",
            "Lughnasadh (1 augusti): Den första skördefesten; hantverk och mognad frukt.",
            "Drunemeton: Galaternas historiska heliga eklund i centrala Anatolien.",
            "Bile (Heligt Mitt-träd): Det vördade vårdträd som stod i centrum av varje irisk stam."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Mevsim Eşiğini Okumak",
            "steps": [
              "İçinde bulunduğun ayın yıl çarkındaki yerini belirle: Toprağın altında tohum biriktirme (Kasım–Ocak), filizlenme (Şubat–Nisan), çiçek ve büyüme (Mayıs–Temmuz) mi, yoksa hasat ve sadeleşme (Ağustos–Ekim) döneminde misin?",
              "Kendi hayatındaki bir projeyi veya niyeti bu mevsimin doğasına göre değerlendir; kış ortasında hasat, yaz ortasında kış uykusu bekleme.",
              "Doğada tek bir ağacı seç ve dört mevsim boyunca aynı ağacın kabuğunu, yaprağını ve sessizliğini gözlemle."
            ]
          },
          "en": {
            "title": "Study Note · Reading the Seasonal Threshold",
            "steps": [
              "Locate the current month upon the Wheel of the Year: are you in seed-rest (Nov–Jan), quickening (Feb–Apr), full growth (May–Jul), or harvest and pruning (Aug–Oct)?",
              "Examine your current personal work against the season's nature; do not demand harvest in midwinter or dormancy at midsummer.",
              "Choose one living tree near your home and observe its bark, canopy, and silence across all four seasons."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Att Läsa Årstidens Tröskel",
            "steps": [
              "Fastställ var i årshjulet du befinner dig just nu: i frövila (nov–jan), spira (feb–apr), full växt (maj–jul) eller skörd och beskärning (aug–okt).",
              "Pröva ditt nuvarande arbete mot årstidens natur; kräv inte skörd mitt i vintern.",
              "Välj ett levande träd nära dig och följ dess bark, löv och tystnad genom alla fyra årstider."
            ]
          }
        },
        "closing": {
          "tr": "Mevsimiyle kavga eden dal kırılır; kökünü bilen ağaç ise kıştan korkmaz.",
          "en": "The branch that fights its season breaks; the tree that knows its root does not fear winter.",
          "sv": "Den gren som strider mot sin årstid bryts; det träd som känner sin rot fruktar inte vintern."
        },
        "image": "/ogham/nemeton-cark.jpg"
      },
      {
        "slug": "awen-ve-uc-kazan",
        "glyph": "ᚂ",
        "title": {
          "tr": "Awen, Üç Kazan ve Ozan Geleneği",
          "en": "Awen, the Three Cauldrons, and the Bardic Tradition",
          "sv": "Awen, de Tre Kitteln och Bardtraditionen"
        },
        "subtitle": {
          "tr": "Coire Brecáin’in üç içsel kazanı, akan ilham ve sözün ağırlığı.",
          "en": "The three inner cauldrons of Coire Brecáin, flowing inspiration, and the weight of speech.",
          "sv": "De tre inre kittlarna i Coire Brecáin, flödande inspiration och ordets tyngd."
        },
        "summary": {
          "tr": "8. yüzyıl İrlanda metnindeki Üç Şiir Kazanı (Isınma, Hareket, Bilgelik), Awen ve üçlü disiplin.",
          "en": "The Three Cauldrons of Poesy from the 8th-century Irish text (Warming, Motion, Wisdom), Awen, and the three grades.",
          "sv": "De Tre Poesikittlarna från 700-talets iriska handskrift (Uppvärmning, Rörelse, Visdom), Awen och de tre graderna."
        },
        "paragraphs": {
          "tr": [
            "Kelt bilgeliğinde ilham dışarıdan zorla alınan bir güç değil, içsel kaplar temizlendiğinde kendiliğinden akan bir nehirdir. Galce ve Bretonca metinlerde bu akışkan ilhama ‘Awen’ (akmak/üflemek kökünden gelen ‘şiirsel ve kehanetsel esin’), eski İrlanda metinlerinde ise ‘Imbas’ adı verilir.",
            "MS 8. yüzyıldan kalan Eski İrlandaca ‘Coire Brecáin’ (Şiir Kazanları) elyazması, her insanın bedeninde görünmez üç kazan bulunduğunu anlatır: Göbek bölgesindeki ‘Coire Goriath’ (Isınma/Beslenme Kazanı), göğüs kafesindeki ‘Coire Érmai’ (Hareket/Meslek Kazanı) ve baş bölgesindeki ‘Coire Sofis’ (Bilgelik Kazanı).",
            "Metne göre bu kazanlar doğuştan farklı duruşlardadır: Kimi kazan ağzı yukarı doğru açık ve doludur; kimi kazan yan yatmıştır (yarı uyanıktır); kimi kazan ise ağzı aşağıya dönük, yani kapalıdır. Keder ve cehalet kazanları ters çevirirken, disiplinli çalışma ve hakiki sevinç ters duran kazanları yukarı çevirir.",
            "Antik yazarlar (Strabon, Diodorus Siculus ve Ammianus Marcellinus) Kelt bilgelik okulunun üç kolunu açıkça kaydeder: Hafızayı ve destanları koruyan ‘Bard’lar (Ozanlar), doğanın işaretlerini ve kehaneti okuyan ‘Vates / Ovate’ler (Kahin ve Otacılar) ve kozmik yasaları, felsefeyi ve adaleti öğreten ‘Druid’ler."
          ],
          "en": [
            "In Celtic lore, inspiration is not seized by force; it flows naturally once the inner vessels are upright and clear. In Welsh tradition this flowing breath of poetic and prophetic insight is called 'Awen', while in Old Irish sources it is known as 'Imbas'.",
            "An authentic 8th-century Old Irish treatise, *The Cauldrons of Poesy* (*Coire Brecáin*), teaches that every person carries three unseen cauldrons within the body: *Coire Goriath* (the Cauldron of Warming/Maintenance in the belly), *Coire Érmai* (the Cauldron of Motion/Vocation in the chest), and *Coire Sofis* (the Cauldron of Wisdom in the head).",
            "According to the manuscript, these cauldrons may stand upright (open to receive and pour forth), lie on their side (holding only partial awareness), or sit inverted (closed). Grief caused by ignorance inverts them; disciplined study, truth, and genuine joy turn them upright.",
            "Classical historians—Strabo, Diodorus Siculus, and Ammianus Marcellinus—consistently record the three branches of Celtic learning: the *Bards* (keepers of memory, genealogy, and song), the *Vates / Ovates* (readers of natural omens, healing, and divination), and the *Druids* (stewards of natural philosophy, law, and sacred rite)."
          ],
          "sv": [
            "I keltisk tradition är inspiration inget man tvingar fram; den flödar naturligt när de inre kärlen är upprätta och rena. I walesisk tradition kallas denna poetiska och profetiska andedräkt 'Awen', och i forniriska källor 'Imbas'.",
            "En autentisk fornirisk skrift från 700-talet, *Poesins Kittlar* (*Coire Brecáin*), lär att varje människa bär tre osynliga kittlar i sin kropp: *Coire Goriath* (Uppvärmningens kittel i buken), *Coire Érmai* (Rörelsens kittel i bröstet) och *Coire Sofis* (Visdomens kittel i huvudet).",
            "Enligt handskriften kan dessa kittlar stå upprätta (öppna), ligga på sidan eller vara vända upp och ned (stängda). Disciplinerat studium, sanning och äkta glädje vänder dem rätt.",
            "Antika historiker som Strabon och Diodorus Siculus beskriver de tre grenarna av keltisk lärdom: *Barder* (bevarare av minne och sång), *Vates / Ovater* (läsare av naturens tecken och läkekonst) samt *Druider* (förvaltare av filosofi, lag och helig rit)."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Birinci Kazan: Coire Goriath (Isınma ve Kök)",
              "body": "Göbek altında yer alan ilk kazan fiziksel sağlığı, yaşama gücünü ve temel eğitimi taşır. Bu kazan doğuştan dik durur; çünkü insan dünyaya önce nefes alıp beslenerek başlar. Bedeni ve temel disiplini ihmal edilen bir öğrencinin üst kazanları dengede kalamaz."
            },
            {
              "heading": "İkinci ve Üçüncü Kazan: Coire Érmai ve Coire Sofis",
              "body": "Göğüsteki Hareket Kazanı başlangıçta yan yatmıştır; kişi sanatında, dilinde ve ruhsal pratiğinde emek verdikçe dikleşir. Baştaki Bilgelik Kazanı ise başlangıçta ters durur; yalnızca nefsini terbiye eden ve hakikate sadık kalan kişilerde ağzı gökyüzüne döner."
            },
            {
              "heading": "Fírinne: Doğanın Hakikatine Sadakat",
              "body": "Eski İrlanda bilgelik metinlerinde (Audacht Morainn) bir yöneticinin ve bilgenin en büyük sorumluluğu ‘Fír flathemon’ (Hakikat ve Adalet Dengesi) olarak tanımlanır. Söz doğru söylendiğinde toprak bereketlenir, ağaçlar meyve verir; yalan söylendiğinde ise düzen bozulur."
            }
          ],
          "en": [
            {
              "heading": "The First Cauldron: Coire Goriath (Warming & Foundation)",
              "body": "Seated in the lower belly, the first cauldron governs vitality, physical grounding, and foundational learning. It begins upright at birth; without tending bodily health and basic discipline, higher study cannot hold steady."
            },
            {
              "heading": "The Second and Third Cauldrons: Coire Érmai & Coire Sofis",
              "body": "The Cauldron of Motion in the chest begins on its side and is turned upright through devoted practice and craft. The Cauldron of Wisdom in the head begins inverted and turns upward only when illuminated by lived truth and inspiration."
            },
            {
              "heading": "Fírinne: Alignment with Truth",
              "body": "In early Irish wisdom texts (*Audacht Morainn*), the cornerstone of cosmic order is *Fírinne* (Truth/Rightfulness). When speech and judgment are true, land and community flourish; when speech is false, balance withers."
            }
          ],
          "sv": [
            {
              "heading": "Den Första Kitteln: Coire Goriath (Uppvärmning & Grund)",
              "body": "Placerad i nedre buken styr den första kitteln livskraft, fysisk jordning och grundläggande lärande. Den står upprätt från födseln och utgör fundamentet för allt vidare arbete."
            },
            {
              "heading": "Den Andra och Tredje Kitteln: Coire Érmai & Coire Sofis",
              "body": "Rörelsens kittel i bröstet ligger från början på sidan och rätas upp genom hängiven övning. Visdomens kittel i huvudet vänds rätt först när den genomlyses av levd sanning."
            },
            {
              "heading": "Fírinne: Trohet mot Sanningen",
              "body": "I forniriska visdomstexter (*Audacht Morainn*) är världsordningens grundpelare *Fírinne* (Sanning och Rättfärdighet). När ordet är sant blomstrar landet."
            }
          ]
        },
        "items": {
          "tr": [
            "Coire Goriath (Isınma Kazanı): Karın merkezi; fiziksel canlılık, günlük disiplin ve köklenme.",
            "Coire Érmai (Hareket Kazanı): Kalp ve göğüs merkezi; ustalık, duygusal olgunluk ve ritmik akış.",
            "Coire Sofis (Bilgelik Kazanı): Baş merkezi; yüksek sezgi, kehanet ve berrak kavrayış.",
            "Awen / Imbas: Üç kazan aynı hizaya geldiğinde yukarıdan aşağıya akan berrak ilham.",
            "Bard · Ovate · Druid: Hafıza/Şiir, Doğa/Kehanet ve Felsefe/Yasa’dan oluşan üçlü bilgelik basamağı.",
            "Connla Kuyusu ve Dokuz Fındık Ağacı: Suya düşen fındıklarla bilgelik somonunu besleyen efsanevi kaynak."
          ],
          "en": [
            "Coire Goriath (Cauldron of Warming): Lower belly; physical vitality, daily discipline, and grounding.",
            "Coire Érmai (Cauldron of Motion): Chest and heart; mastery of craft, emotional depth, and rhythm.",
            "Coire Sofis (Cauldron of Wisdom): Crown and head; higher intuition, prophecy, and clear sight.",
            "Awen / Imbas: The luminous stream of inspiration descending when all three cauldrons align.",
            "Bard · Ovate · Druid: The historical triad of Memory/Song, Nature/Divination, and Philosophy/Law.",
            "Well of Segais (Connla's Well): The mythic spring ringed by nine hazel trees of poetic wisdom."
          ],
          "sv": [
            "Coire Goriath (Uppvärmningens Kittel): Nedre buken; fysisk livskraft, daglig disciplin och jordning.",
            "Coire Érmai (Rörelsens Kittel): Bröst och hjärta; hantverksskicklighet och emotionell mognad.",
            "Coire Sofis (Visdomens Kittel): Huvud och hjässa; högre intuition och klar syn.",
            "Awen / Imbas: Det klara flödet av inspiration när alla tre kittlar står i linje.",
            "Bard · Ovate · Druid: Den historiska triaden av Minne/Sång, Natur/Spådom och Filosofi/Lag.",
            "Segais Brunn (Connlas Källa): Den mytiska källan omgiven av nio hasselträd av visdom."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Üç Kazanı Hizalamak",
            "steps": [
              "Oturduğun yerde önce karın boşluğunda sıcak, ağır bir bronz kazan imgele; nefesinle bu kazanın dik ve sağlam durduğunu hisset.",
              "Sonra göğüs kafesinde ikinci kazanı gör; eğer yana eğikse derin bir nefesle onu düzelt ve kalbinin ortasına oturt.",
              "Son olarak başının içinde üçüncü kazanı ağzı gökyüzüne bakacak şekilde aç ve ‘Awen’ (A-O-U-E-N) sesini üç uzun nefeste titreştir."
            ]
          },
          "en": {
            "title": "Study Note · Aligning the Three Cauldrons",
            "steps": [
              "Seated quietly, visualize a warm bronze cauldron resting upright in your lower belly, steady and full.",
              "Bring awareness to the second cauldron in your chest; with a deep inhalation, right it so its rim faces evenly upward.",
              "Finally, open the third cauldron within your head toward the sky and intone the three-syllable breath 'A-O-WEN' three times."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Att Rikta de Tre Kittlarna",
            "steps": [
              "Sitt stilla och föreställ dig en varm bronskittel som står stadigt upprätt i din nedre buk.",
              "För uppmärksamheten till den andra kitteln i bröstet; räta upp den med ett djupt andetag så att dess öppning vilar vågrätt.",
              "Öppna slutligen den tredje kitteln i huvudet uppåt mot himlen och ljud 'A-O-WEN' på tre långa utandningar."
            ]
          }
        },
        "closing": {
          "tr": "Kap eğikse su durmaz; önce içindeki kazanı doğrult, bilgelik kendi yolunu bulur.",
          "en": "Water cannot rest in a tilted vessel; right the cauldron within, and wisdom finds its own way.",
          "sv": "Vatten stannar inte i ett lutande kärl; räta upp kitteln inom dig, så finner visdomen sin egen väg."
        },
        "image": "/ogham/awen-kazan.jpg"
      },
      {
        "slug": "birinci-aicme",
        "glyph": "ᚁᚂᚃᚄᚅ",
        "title": {
          "tr": "Birinci Aicme · Beithe (B · L · F · S · N)",
          "en": "First Aicme · Beithe (B · L · F · S · N)",
          "sv": "Första Aicme · Beithe (B · L · F · S · N)"
        },
        "subtitle": {
          "tr": "Sağ tarafa uzanan beş çentik: Başlangıç, koruma, kalkan, akış ve bağlantı.",
          "en": "Five strokes to the right of the stemline: inception, protection, shield, flow, and connection.",
          "sv": "Fem streck till höger om stamlinjen: början, skydd, sköld, flöde och förbindelse."
        },
        "summary": {
          "tr": "Beithe (Huş), Luis (Üvez), Fearn (Kızılağaç), Sail (Söğüt) ve Nion (Dişbudak) — Briatharogam dizeleriyle.",
          "en": "Beithe (Birch), Luis (Rowan), Fearn (Alder), Sail (Willow), and Nion (Ash) with medieval Briatharogam kennings.",
          "sv": "Beithe (Björk), Luis (Rönn), Fearn (Al), Sail (Pil) och Nion (Ask) med medeltida Briatharogam-kenningar."
        },
        "paragraphs": {
          "tr": [
            "Ogham (Ogam), MS 4. yüzyıldan itibaren İrlanda ve Britanya’daki dikili taşlarda, daha sonra ise ‘Auraicept na n-Éces’ (Bilginlerin El Kitabı) ve ‘In Lebor Ogaim’ (Ballymote Kitabı’ndaki Ogham Risalesi) gibi ortaçağ elyazmalarında korunan yirmi harflik kadim alfabedir. Ogham’da her harfe ‘fid’ (çoğulu ‘feda’ — ağaç), beş harflik her ailesine ise ‘Aicme’ denir.",
            "Yazı, dikey bir gövde çizgisi (druim — ağacın gövdesi) boyunca aşağıdan yukarıya doğru tırmanarak okunur. Tıpkı bir ağacın kökten tepeye büyümesi gibi Ogham da toprağın hizasından başlayıp gökyüzüne yükselir.",
            "Birinci Aicme, ilk harfi olan Beithe’nin (Huş ağacı) adıyla ‘Aicme Beithe’ olarak anılır ve gövde çizgisinin sağ tarafına (veya yatay yazıda altına) atılan 1’den 5’e kadar yatay çentikten oluşur. Bu beş ağaç, ormanda ve insan yaşamında ilk adımı, uyanık gözü, savunma kalkanını, esnekliği ve kozmik bağlantıyı temsil eder.",
            "Eski İrlanda geleneğinde Ogham harfleri ezberlenirken her harf için üç ayrı bilgeye (Morann mac Maín, Mac ind Óc ve Cú Chulainn) atfedilen iki kelimelik şiirsel şifreler — ‘Briatharogam’ (Söz-Ogham’ı) — kullanılırdı. Aşağıdaki beş ağaçta bu orijinal tarihsel dizeler korunmuştur."
          ],
          "en": [
            "Ogham (Old Irish *Ogam*) is the twenty-character script carved upon monumental stones across Ireland and western Britain from the 4th century CE, and preserved in medieval manuscripts such as *Auraicept na n-Éces* ('The Scholars' Primer') and *In Lebor Ogaim* ('The Book of Ogam' in the Book of Ballymote). In Ogham, every letter is called a *fid* (plural *feda*, 'tree'), and each group of five letters is an *Aicme* ('family').",
            "The script is carved and read vertically from the bottom upward along a central stemline (*druim*, the ridge or trunk), mirroring the living growth of a tree rising from root to canopy.",
            "The First Aicme—*Aicme Beithe*, named after its opening letter Beithe (Birch)—consists of one to five strokes extending to the right of the stemline. Together, these five trees govern new beginnings, discerning sight, steadfast defense, lunar intuition, and cosmic structure.",
            "In Old Irish bardic training, each letter was taught through two-word poetic kennings known as the *Briatharogam* ('Word-Ogham'), preserved in three ancient triad lists attributed to Morann mac Maín, Mac ind Óc, and Cú Chulainn."
          ],
          "sv": [
            "Ogham (forniriska *Ogam*) är det tjugoteckniga alfabet som ristades på resta stenar i Irland och västra Britannien från 300-talet e.Kr., och som bevarats i medeltida handskrifter som *Auraicept na n-Éces* och *In Lebor Ogaim* (i Book of Ballymote). Varje bokstav kallas en *fid* ('träd') och varje grupp om fem bokstäver utgör en *Aicme* ('familj/ätt').",
            "Skriften ristas och läses nerifrån och upp längs en vertikal stamlinje (*druim*), precis som ett levande träd växer från rot till krona.",
            "Den första familjen — *Aicme Beithe*, uppkallad efter sin första bokstav Beithe (Björk) — består av ett till fem streck till höger om stamlinjen. Dessa fem träd styr nystart, vaksam blick, skydd, intuition och kosmisk förbindelse.",
            "I den forniriska bardutbildningen lärdes varje tecken ut genom tvårdsformler kallade *Briatharogam* ('Ord-Ogham')."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Öncü ve Koruyucu: Beithe (Huş) ve Luis (Üvez)",
              "body": "Buzullar çekildiğinde veya bir orman yangınından sonra toprağa ilk dönen ağaç Huş’tur (Beithe). Beyaz kabuğu karanlıkta parlar ve eskiyi süpürüp yeni sayfayı açar. Hemen ardından gelen Üvez (Luis), kırmızı meyvelerinin altındaki beş köşeli yıldız iziyle Kelt geleneğinde zihinsel bulanıklığa ve yanılsamaya karşı en güçlü koruyucu ağaçtır."
            },
            {
              "heading": "Su Kıyısının Kalkanı ve Hafızası: Fearn (Kızılağaç) ve Sail (Söğüt)",
              "body": "Kızılağaç (Fearn) kesildiğinde özsuyu turuncu-kırmızıya döner ve suyun içinde çürümeden taş gibi sertleşir; bu yüzden bataklık köprüleri ve savaşçı kalkanları (Briatharogam’da ‘kalbin koruyucusu’) kızılağaçtan yapılırdı. Söğüt (Sail) ise suyun ve Ay’ın ağacıdır; fırtınada kırılmamak için eğilir, kederi ve sezgisel rüyaları taşır."
            },
            {
              "heading": "Bitiş ve Bağlantı: Nion (Dişbudak)",
              "body": "Birinci Aicme’yi mühürleyen Dişbudak (Nion), hem dokuma tezgahının kirişi hem de mızrak sapıdır. Briatharogam’da ‘barışın tesisi’ (costud síde) olarak anılır; iç dünyadaki niyet ile dış dünyadaki eylemi birbirine bağlar."
            }
          ],
          "en": [
            {
              "heading": "Pioneer and Guardian: Beithe (Birch) & Luis (Rowan)",
              "body": "After glacial retreat or wildfire, Birch (Beithe) is the first tree to reclaim bare soil; its white bark marks purification and fresh beginnings. Immediately following is Rowan (Luis), whose red berries bear a natural five-pointed star—revered across Gaelic tradition as the foremost guardian against illusion and sensory deception."
            },
            {
              "heading": "Shield and Stream: Fearn (Alder) & Sail (Willow)",
              "body": "When Alder (Fearn) is felled, its pale timber turns fiery orange-red and resists rot underwater; hence it built both bog-bridges and shields (called *dín cride*, 'protection of the heart', in the Briatharogam). Willow (Sail) belongs to water and the Moon, bending before the gale without breaking."
            },
            {
              "heading": "The Weaver's Beam: Nion (Ash)",
              "body": "Sealing the First Aicme, Ash (Nion) forms both the weaver's beam and the spear-shaft. Called *costud síde* ('establishing of peace') in the Briatharogam, its wide roots and crown bind inner purpose to outer structure."
            }
          ],
          "sv": [
            {
              "heading": "Pionjär och Väktare: Beithe (Björk) & Luis (Rönn)",
              "body": "Björken (Beithe) är det första trädet som återvänder till bar mark efter eld eller is; dess vita bark markerar rening och nystart. Därefter följer Rönnen (Luis), vars röda bär bär en femuddig stjärna — i keltisk och nordisk folktradition det främsta skyddet mot bländverk."
            },
            {
              "heading": "Sköld och Ström: Fearn (Al) & Sail (Pil)",
              "body": "När Alen (Fearn) huggs färgas dess sav röd och virket hårdnar under vatten; därför byggdes både broar och sköldar (*dín cride*, 'hjärtats skydd') av al. Pilen (Sail) tillhör vattnet och månen och böjer sig i stormen utan att brytas."
            },
            {
              "heading": "Vävstommen: Nion (Ask)",
              "body": "Asken (Nion) avslutar den första familjen och kallas *costud síde* ('upprättande av fred') i Briatharogam. Den förenar inre avsikt med yttre struktur."
            }
          ]
        },
        "items": {
          "tr": [
            "ᚁ B · Beithe (Huş Ağacı): Briatharogam: ‘Glaisem cnis’ (Derilerin en parlak grisi). Anlamı: Arınma, ilk adım, eski yükü geride bırakıp sıfırdan başlama.",
            "ᚂ L · Luis (Üvez Ağacı): Briatharogam: ‘Lí súla’ (Gözün parıltısı). Anlamı: Ayırt etme gücü, yanılsamadan korunma ve uyanık sezgi.",
            "ᚃ F · Fearn (Kızılağaç): Briatharogam: ‘Dín cride’ (Kalbin koruyucusu / kalkan). Anlamı: Dayanıklılık, sınır koruma, su ile ateş arasında köprü kurma.",
            "ᚄ S · Sail (Söğüt Ağacı): Briatharogam: ‘Lúth bech’ (Arıların besini). Anlamı: Ay döngüsü, esneklik, kederi sağaltma ve rüya akışı.",
            "ᚅ N · Nion (Dişbudak): Briatharogam: ‘Costud síde’ (Barışın tesisi). Anlamı: Mikrokosmos ile makrokosmosu bağlama, dokuma ve içsel düzen."
          ],
          "en": [
            "ᚁ B · Beithe (Birch): Briatharogam: 'Glaisem cnis' (Grayest of skin). Meaning: Purification, first threshold, clearing old residue to begin anew.",
            "ᚂ L · Luis (Rowan): Briatharogam: 'Lí súla' (Luster of the eye). Meaning: Discernment, protection from glamour/deception, waking insight.",
            "ᚃ F · Fearn (Alder): Briatharogam: 'Dín cride' (Protection of the heart / shield). Meaning: Endurance, emotional shielding, bridging water and fire.",
            "ᚄ S · Sail (Willow): Briatharogam: 'Lúth bech' (Sustenance of bees). Meaning: Lunar rhythm, flexibility under pressure, healing grief, dream lore.",
            "ᚅ N · Nion (Ash): Briatharogam: 'Costud síde' (Establishing of peace). Meaning: Connecting microcosm and macrocosm, weaving order."
          ],
          "sv": [
            "ᚁ B · Beithe (Björk): Briatharogam: 'Glaisem cnis' (Ljusast av hud/bark). Betydelse: Rening, första steget, nystart.",
            "ᚂ L · Luis (Rönn): Briatharogam: 'Lí súla' (Ögats glans). Betydelse: Urskiljning, skydd mot bländverk, vaksam intuition.",
            "ᚃ F · Fearn (Al): Briatharogam: 'Dín cride' (Hjärtats skydd / sköld). Betydelse: Uthållighet, gränsskydd, bro mellan vatten och eld.",
            "ᚄ S · Sail (Pil): Briatharogam: 'Lúth bech' (Binas näring). Betydelse: Månrytm, följsamhet i storm, läkande av sorg.",
            "ᚅ N · Nion (Ask): Briatharogam: 'Costud síde' (Upprättande av fred). Betydelse: Förbindelse mellan inre och yttre värld."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Birinci Aicme Çizimi",
            "steps": [
              "Kağıdın ortasına aşağıdan yukarıya dikey bir gövde çizgisi (druim) çek.",
              "Aşağıdan başlayarak gövdenin sağ tarafına sırasıyla 1 (Beithe), 2 (Luis), 3 (Fearn), 4 (Sail) ve 5 (Nion) yatay çizgi yerleştir.",
              "Yeni başladığın bir işte hangi aşamada olduğunu sor: İlk temizlikte mi (Beithe), ayırt etmede mi (Luis), kalkan kurmada mı (Fearn), esnemede mi (Sail), yoksa yapıyı birleştirmede mi (Nion)?"
            ]
          },
          "en": {
            "title": "Study Note · Drawing the First Aicme",
            "steps": [
              "Draw a vertical stemline (*druim*) from bottom to top down the center of a page.",
              "Starting from the bottom, mark to the right of the line 1 stroke (Beithe), 2 (Luis), 3 (Fearn), 4 (Sail), and 5 (Nion).",
              "Reflect on a current endeavor: does it call for initial clearing (Beithe), clear discernment (Luis), shielding (Fearn), yielding flexibility (Sail), or structural weaving (Nion)?"
            ]
          },
          "sv": {
            "title": "Studieanteckning · Att Teckna Första Aicme",
            "steps": [
              "Dra en vertikal stamlinje (*druim*) nerifrån och upp mitt på ett papper.",
              "Med början nedifrån, markera till höger om linjen 1 streck (Beithe), 2 (Luis), 3 (Fearn), 4 (Sail) och 5 (Nion).",
              "Reflektera över var i en process du befinner dig: i rening (Beithe), urskiljning (Luis), skydd (Fearn), följsamhet (Sail) eller sammanfogning (Nion)?"
            ]
          }
        },
        "closing": {
          "tr": "Huş ile temizlenmeyen toprağa dişbudak dikilmez.",
          "en": "Ash cannot be planted in ground that Birch has not first cleared.",
          "sv": "Asken kan inte planteras i mark som björken inte först har röjt."
        },
        "image": "/ogham/aicme-1.jpg",
        "itemImages": [
          "/ogham/tree-b-beithe.jpg",
          "/ogham/tree-l-luis.jpg",
          "/ogham/tree-f-fearn.jpg",
          "/ogham/tree-s-sail.jpg",
          "/ogham/tree-n-nion.jpg"
        ]
      },
      {
        "slug": "ikinci-aicme",
        "glyph": "ᚆᚇᚈᚉᚊ",
        "title": {
          "tr": "İkinci Aicme · hÚath (H · D · T · C · Q)",
          "en": "Second Aicme · hÚath (H · D · T · C · Q)",
          "sv": "Andra Aicme · hÚath (H · D · T · C · Q)"
        },
        "subtitle": {
          "tr": "Sol tarafa uzanan beş çentik: Eşik dikeni, egemenlik, demir ateşi, bilgelik ve öte-dünya.",
          "en": "Five strokes to the left of the stemline: threshold thorn, sovereignty, forge-fire, wisdom, and Otherworld.",
          "sv": "Fem streck till vänster om stamlinjen: tröskeltörne, suveränitet, smideseld, visdom och Annanvärld."
        },
        "summary": {
          "tr": "hÚath (Alıç), Dair (Meşe), Tinne (Çobanpüskülü/Demir), Coll (Fındık) ve Cert (Elma) ağaçları.",
          "en": "hÚath (Hawthorn), Dair (Oak), Tinne (Holly/Iron), Coll (Hazel), and Cert (Apple) with their Briatharogam kennings.",
          "sv": "hÚath (Hagtorn), Dair (Ek), Tinne (Järnek/Järn), Coll (Hassel) och Cert (Äpple) med Briatharogam-kenningar."
        },
        "paragraphs": {
          "tr": [
            "İkinci Aicme, dikey gövde çizgisinin sol tarafına (veya yatay yazıda üst kısmına) atılan 1’den 5’e kadar çentikten oluşur ve ilk harfi olan ‘hÚath’ (Alıç ağacı) ile adlandırılır. Birinci Aicme dış dünyadaki ilk teması kurarken, sol tarafa geçen İkinci Aicme içsel sınavları, gücü, ustalığı ve görünmeyen dünyayla (Síde / Öte-Dünya) kurulan sınırı yönetir.",
            "Bu ailenin girişinde dikenli Alıç (hÚath) bekler; İrlanda folklorunda tek başına duran bir alıç ağacı (Lone Bush) öte-dünya varlıklarının sınır taşıdır ve asla kesilmez. Hemen ardından ormanın kralı olan Meşe (Dair) gelir; ‘Doras’ (kapı) kelimesiyle aynı Hint-Avrupa kökünü paylaşan meşe, sarsılmaz adaletin ve dayanıklılığın kapısıdır.",
            "Üçüncü harf Tinne (Çobanpüskülü ve demir külçesi), kış ortasında bile yaprağını dökmeyen direnci ve demircinin örsündeki ateşi temsil eder. Dördüncü harf Coll (Fındık), Kelt geleneğinde şiirsel ve kehanetsel bilgeliğin doğrudan sembolüdür.",
            "Beşinci harf Cert (Yabani Elma / Çalı) ise ölümsüzlük ve şifa adası Avalon’un (Emain Ablach — ‘Elmalar Diyarı’) anahtarıdır. Elmayı enine kestiğinde içinden çıkan beş köşeli yıldız, maddenin içindeki gizli düzeni gösterir."
          ],
          "en": [
            "The Second Aicme—*Aicme hÚatha*—consists of one to five strokes carved to the left of the vertical stemline. Where the First Aicme governs initial growth and outer form, the left-hand side governs thresholds, sovereignty, the forge of trial, concentrated wisdom, and contact with the Otherworld (*Síde*).",
            "At the gate of this family stands Hawthorn (*hÚath*, literally 'fear/awe' or 'whitethorn'). In Irish tradition a lone hawthorn upon a mound marks a fairy threshold never to be felled lightly. Beside it rises the Oak (*Dair*), sharing its Indo-European root with *doras* ('door')—the axis of endurance and rightful kingship.",
            "Third is *Tinne* (Holly and the iron ingot of the forge), evergreen in midwinter and tempered under the hammer. Fourth is *Coll* (Hazel), the quintessential Celtic emblem of concentrated poetic and prophetic knowledge.",
            "Fifth is *Cert* (Wild Apple), key to *Emain Ablach* (Avalon, the Isle of Apples), where youth, memory, and wholeness are renewed."
          ],
          "sv": [
            "Den andra familjen — *Aicme hÚatha* — består av ett till fem streck till vänster om stamlinjen. Medan den första familjen styr yttre grundläggning, styr den vänstra sidan tröskelprövningar, suveränitet, smideseld, koncentrerad visdom och kontakten med Annanvärlden (*Síde*).",
            "Vid porten står Hagtornet (*hÚath*). I irisk folktradition är ett ensamt hagtornsträd en helig gränspunkt som aldrig får fällas. Därefter reser sig Eken (*Dair*), vars rot är besläktad med *doras* ('dörr') — uthållighetens och det rättmätiga ledarskapets träd.",
            "Det tredje tecknet är *Tinne* (Järnek och smidesjärn), städsegrön i midvintern. Det fjärde är *Coll* (Hassel), den keltiska symbolen för koncentrerad visdom.",
            "Det femte är *Cert* (Vildapel), nyckeln till *Emain Ablach* (Avalon, Äpplenas Ö)."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Diken ve Kapı: hÚath (Alıç) ve Dair (Meşe)",
              "body": "Alıç ağacı hem kalbi güçlendiren şifalı çiçeği hem de keskin dikeni bir arada taşır; hazırlıksız yaklaşanı durdurur, saygıyla yaklaşana ise eşiği açar. Meşe ise ormanda yıldırımın en çok düştüğü ağaçtır; gökyüzünün ateşini toprağa indirir ve fırtınada eğilmeden ayakta kalır."
            },
            {
              "heading": "Demir Ocağı ve Bilgelik Fındığı: Tinne ve Coll",
              "body": "Tinne’nin Briatharogam tanımı ‘kömürün iliği’ (smiur gúaile) ve ‘tekerleğin üçte biri’dir; ham cevherin ateşte dövülerek iradeye dönüşmesini anlatır. Coll (Fındık) ise küçük bir kabuğun içinde bütün bir ağacın özünü saklar; İrlanda mahkemelerinde hakimler doğru hüküm vermek için ellerinde beyaz fındık dalı tutardı."
            },
            {
              "heading": "Avalon’un Gümüş Dalı: Cert (Elma)",
              "body": "Kelt destanlarında (Bran’ın Yolculuğu ve Cormac mac Airt) öte-dünyadan gelen elçiler, üzerinde gümüş çiçekler ve altın elmalar bulunan müzikli bir elma dalı taşır. Bu dal, kederi dindiren ve ruhun ölümsüz doğasını hatırlatan şifa mührüdür."
            }
          ],
          "en": [
            {
              "heading": "Thorn and Doorway: hÚath (Hawthorn) & Dair (Oak)",
              "body": "Hawthorn bears both heart-strengthening blossom and sharp thorn, halting haste at the threshold. Oak draws lightning from the sky more than any other tree in the forest, grounding celestial fire into enduring wood."
            },
            {
              "heading": "The Forge and the Nut of Wisdom: Tinne & Coll",
              "body": "Tinne is defined in the Briatharogam as *smiur gúaile* ('marrow of charcoal') and *trian roith* ('a third of a wheel')—raw ore tempered by fire into disciplined will. Coll (Hazel) encloses concentrated wisdom within a small shell; early Irish judges carried peeled hazel wands as emblems of clear judgment."
            },
            {
              "heading": "The Silver Branch of Emain Ablach: Cert (Apple)",
              "body": "In the *Immram Brain* (Voyage of Bran) and the tales of Cormac mac Airt, messengers from the Otherworld bear a silver apple-branch whose chime brings peace and restorative sleep."
            }
          ],
          "sv": [
            {
              "heading": "Törne och Port: hÚath (Hagtorn) & Dair (Ek)",
              "body": "Hagtornet bär både hjärtstärkande blommor och skarpa törnen som hejdar den obetänksamme vid tröskeln. Eken drar till sig himlens blixt och förankrar dess kraft i jorden."
            },
            {
              "heading": "Ässjan och Visdomens Nöt: Tinne & Coll",
              "body": "Tinne beskrivs i Briatharogam som *smiur gúaile* ('träkolets märg') — råmalm som härdas i elden till disciplinerad vilja. Coll (Hassel) rymmer koncentrerad visdom i ett litet skal."
            },
            {
              "heading": "Silvergrenen från Emain Ablach: Cert (Äpple)",
              "body": "I keltiska sagor (*Brans resa*) bär budbärare från Annanvärlden en blommande äppelgren vars klang skänker frid och läkedom."
            }
          ]
        },
        "items": {
          "tr": [
            "ᚆ H · hÚath (Alıç Ağacı): Briatharogam: ‘Bánad gnúise’ (Yüzlerin sararması / huşu). Anlamı: Kutsal sınır, sabır, hazırlıksız geçilmemesi gereken eşik.",
            "ᚇ D · Dair (Meşe Ağacı): Briatharogam: ‘Ardam dosae’ (Ağaçların en yücesi). Anlamı: Egemenlik, içsel güç, koruyucu çatı ve sarsılmaz adalet.",
            "ᚈ T · Tinne (Çobanpüskülü / Demir): Briatharogam: ‘Smiur gúaile’ (Kömürün iliği). Anlamı: İrade sınavı, ateşte dövülerek saflaşma ve kararlılık.",
            "ᚉ C · Coll (Fındık Ağacı): Briatharogam: ‘Caíniu fedaib’ (Ağaçların en güzeli / özlüsü). Anlamı: Yoğunlaştırılmış bilgelik, sezgi, ilham ve adil hüküm.",
            "ᚊ Q · Cert (Yabani Elma): Briatharogam: ‘Clithar baiscill’ (Yabanın/ozanın sığınağı). Anlamı: Yenilenme, şifa, güzellik ve öte-dünya huzuru."
          ],
          "en": [
            "ᚆ H · hÚath (Hawthorn): Briatharogam: 'Bánad gnúise' (Blanching of faces / awe). Meaning: Sacred boundary, patience, the guarded threshold.",
            "ᚇ D · Dair (Oak): Briatharogam: 'Ardam dosae' (Highest of trees). Meaning: Sovereignty, endurance, protective shelter, and justice.",
            "ᚈ T · Tinne (Holly / Iron Ingot): Briatharogam: 'Smiur gúaile' (Marrow of charcoal). Meaning: Tempered will, trial by forge, steadfastness.",
            "ᚉ C · Coll (Hazel): Briatharogam: 'Caíniu fedaib' (Fairest of trees). Meaning: Concentrated wisdom, poetic insight, and clear judgment.",
            "ᚊ Q · Cert (Apple): Briatharogam: 'Clithar baiscill' (Shelter of the wild seer). Meaning: Wholeness, regeneration, and Otherworld peace."
          ],
          "sv": [
            "ᚆ H · hÚath (Hagtorn): Briatharogam: 'Bánad gnúise' (Vördnad vid tröskeln). Betydelse: Helig gräns, tålamod och vaksamhet.",
            "ᚇ D · Dair (Ek): Briatharogam: 'Ardam dosae' (Högst av träd). Betydelse: Suveränitet, styrka, beskydd och rättvisa.",
            "ᚈ T · Tinne (Järnek / Smidesjärn): Briatharogam: 'Smiur gúaile' (Träkolets märg). Betydelse: Härdad vilja, prövning och fasthet.",
            "ᚉ C · Coll (Hassel): Briatharogam: 'Caíniu fedaib' (Skönast av träd). Betydelse: Koncentrerad visdom, intuition och klart omdöme.",
            "ᚊ Q · Cert (Vildapel): Briatharogam: 'Clithar baiscill' (Den vilde siarens skydd). Betydelse: Läkedom, förnyelse och frid."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Meşe Kapısı ve Fındık Özü",
            "steps": [
              "Hayatında şu an zorlandığın bir sınırı düşün: Orada acele etmemen gereken bir Alıç (hÚath) eşiği mi var, yoksa eğilmeden durman gereken bir Meşe (Dair) sınavı mı?",
              "Karmaşık görünen bir sorunu tek bir cümleye (tıpkı bir fındık kabuğunun içine sığan öz gibi — Coll) indirgeyerek kağıda yaz.",
              "Dikey gövde çizgisinin sol tarafına 1’den 5’e kadar İkinci Aicme çentiklerini çizerek bu beş kuvveti zihninde sırala."
            ]
          },
          "en": {
            "title": "Study Note · The Oak Door and the Hazel Nut",
            "steps": [
              "Consider a current challenge: does it ask you to pause respectfully before a boundary (hÚath) or stand immovable like the Oak (Dair)?",
              "Distill a complex dilemma into a single clear sentence—compressing the kernel of truth into the hazelnut shell (Coll).",
              "Draw the five left-hand strokes of the Second Aicme along a vertical stemline from bottom to top."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Ekporten och Hasselnöten",
            "steps": [
              "Betrakta en aktuell utmaning: kräver den att du stannar upp vid gränsen (hÚath) eller att du står orubblig som eken (Dair)?",
              "Sammanfatta ett komplext problem i en enda klar mening — som kärnan i en hasselnöt (Coll).",
              "Teckna de fem vänsterstrecken i Andra Aicme nerifrån och upp längs en stamlinje."
            ]
          }
        },
        "closing": {
          "tr": "Bilgelik koca bir ormanda değil, tek bir fındığın içindeki sessiz özde saklıdır.",
          "en": "Wisdom hides not in noise, but in the quiet kernel within a single hazelnut.",
          "sv": "Visdomen gömmer sig inte i bruset, utan i den stilla kärnan inuti en enda hasselnöt."
        },
        "image": "/ogham/aicme-2.jpg",
        "itemImages": [
          "/ogham/tree-h-huath.jpg",
          "/ogham/tree-d-dair.jpg",
          "/ogham/tree-t-tinne.jpg",
          "/ogham/tree-c-coll.jpg",
          "/ogham/tree-q-cert.jpg"
        ]
      },
      {
        "slug": "ucuncu-aicme",
        "glyph": "ᚋᚌᚍᚎᚏ",
        "title": {
          "tr": "Üçüncü Aicme · Muin (M · G · NG · Z · R)",
          "en": "Third Aicme · Muin (M · G · NG · Z · R)",
          "sv": "Tredje Aicme · Muin (M · G · NG · Z · R)"
        },
        "subtitle": {
          "tr": "Gövdeyi çapraz kesen beş çizgi: Hasat, sarmaşık, şifa, kaçınılmaz kader ve dönüşüm.",
          "en": "Five diagonal strokes crossing the stemline: harvest, ivy, healing, inevitable fate, and transformation.",
          "sv": "Fem diagonala streck tvärs över stamlinjen: skörd, murgröna, läkedom, öde och förvandling."
        },
        "summary": {
          "tr": "Muin (Böğürtlen/Asma), Gort (Sarmaşık), Gétal (Kamış/Hekimlik), Straif (Karaçalı) ve Ruis (Mürver).",
          "en": "Muin (Bramble/Vine), Gort (Ivy), Gétal (Broom/Physician's Reed), Straif (Blackthorn), and Ruis (Elder).",
          "sv": "Muin (Björnbär/Vinranka), Gort (Murgröna), Gétal (Ginst/Läkarens Rör), Straif (Slån) och Ruis (Fläder)."
        },
        "paragraphs": {
          "tr": [
            "Üçüncü Aicme — ‘Aicme Muine’ — dikey gövde çizgisini boydan boya çapraz (diyagonal) kesen 1’den 5’e kadar çizgiden oluşur. Çizgilerin gövdeyi doğrudan kesip geçmesi tesadüf değildir: Bu beş harf insanın dış dünyayla ve kendi gölgesiyle doğrudan çarpıştığı, olgunlaştığı, yaralandığı, şifa bulduğu ve dönüştüğü süreçleri anlatır.",
            "İlk harf Muin (Böğürtlen ve Asma), hem dikeni hem de tatlı sonbahar meyvesini bir arada taşır. Briatharogam’da ‘çabanın en güçlüsü’ (tressam fedmae) olarak tanımlanır; çünkü gerçek hasat zahmetsiz toplanmaz.",
            "İkinci harf Gort (Sarmaşık ve ekili tarla), taş duvarlara bile tutunarak yükselen azmi ve karanlıkta yeşeren sadakati simgeler. Üçüncü harf Gétal (NG sesi — Kamış / Katırtırnağı), Briatharogam’da ‘hekimin gücü’ (lúth lega) olarak geçer; kırılanı saran ve kanamayı durduran şifa disiplinidir.",
            "Dördüncü harf Straif (Karaçalı) ve beşinci harf Ruis (Mürver), Ogham’ın en derin iki eşiğidir: Karaçalı kaçınılmaz kış sınavını ve sırların derinleşmesini (mórthad rún), Mürver ise eski döngünün tamamen sona erip toprağa karışmasını temsil eder."
          ],
          "en": [
            "The Third Aicme—*Aicme Muine*—is formed by one to five diagonal strokes cutting directly across the central stemline. Just as these strokes traverse the trunk from side to side, these five letters govern the crossings of life: effort and harvest, tenacious growth, the physician's art, unavoidable fate, and the completion of a cycle.",
            "First is *Muin* (Bramble and Vine), bearing both sharp hook and sweet autumn fruit; the Briatharogam calls it *tressam fedmae* ('strongest of effort').",
            "Second is *Gort* (Ivy and the cultivated field), climbing stone walls through winter shade. Third is *Gétal* (the velar nasal *ng*, associated with Reed or Broom), defined in the Briatharogam as *lúth lega* ('sustenance/strength of a physician').",
            "Fourth is *Straif* (Blackthorn) and fifth is *Ruis* (Elder): Blackthorn carries the austere truth of winter and *mórthad rún* ('increase of secrets'), while Elder marks the crimson blush of completion and regeneration at the end of the year."
          ],
          "sv": [
            "Den tredje familjen — *Aicme Muine* — utgörs av ett till fem diagonala streck som skär rakt över stamlinjen. Dessa fem tecken styr livets korsvägar: skörd efter möda, uthållig växt, läkekonst, oundvikligt öde och fullbordan.",
            "Först står *Muin* (Björnbär och Vinranka), som bär både taggar och söt höstfrukt; i Briatharogam kallas den *tressam fedmae* ('starkast i ansträngning').",
            "Det andra tecknet är *Gort* (Murgröna), som klättrar uppför kalla stenmurar. Det tredje är *Gétal* (*ng*-ljudet, förknippat med Rör och Ginst), som i Briatharogam kallas *lúth lega* ('läkarens kraft').",
            "Det fjärde är *Straif* (Slån) och det femte är *Ruis* (Fläder): Slånen bär vinterns skärpa och *mórthad rún* ('hemligheternas fördjupning'), medan Flädern markerar cykelns slut och pånyttfödelse."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Emek ve Tutunma: Muin (Böğürtlen) ve Gort (Sarmaşık)",
              "body": "Böğürtlen dalı toprağa değdiği yerde yeniden kök salar; insanı yavaşlatır ama sabredene meyvesini verir. Sarmaşık ise güneş çekildiğinde bile yaprağını dökmez; zor zamanlarda ruhu bir arada tutan sadakatin ve sürekliliğin işaretidir."
            },
            {
              "heading": "Hekimin Eli: Gétal (NG)",
              "body": "Briatharogam Morainn’de Gétal için ‘lúth lega’ (hekimin kuvveti) denir. Şamanik ve Kelt otacılığında yara ile şifa birbirinden ayrı düşünülmez; yarayı tanıyan el, merhemi de aynı doğadan çıkarır."
            },
            {
              "heading": "Kışın Keskinliği ve Döngü Sonu: Straif (Karaçalı) ve Ruis (Mürver)",
              "body": "Karaçalı (Straif), yapraklarından önce bembeyaz çiçeklerini soğuk rüzgarda açar; kaçınılmaz gerçekle yüzleşmeyi öğretir (Kuzey’deki Hagalaz ve Nauthiz rünlerinin Kelt karşılığıdır). Mürver (Ruis) ise yılın on üçüncü ayının ağacıdır; eski kabuğun çürüyüp yeni filize yer açtığı eşiktir."
            }
          ],
          "en": [
            {
              "heading": "Effort and Tenacity: Muin (Bramble) & Gort (Ivy)",
              "body": "Where a bramble shoot touches earth, it roots anew—catching the hurried traveler yet offering dark fruit in autumn. Ivy stays green when the canopy falls bare, teaching persistence through dark seasons."
            },
            {
              "heading": "The Physician's Hand: Gétal (NG)",
              "body": "In the *Briatharogam Morainn*, Gétal is named *lúth lega* ('strength of a physician'). In ancient healing lore, understanding the wound and preparing the remedy belong to the same disciplined hand."
            },
            {
              "heading": "Winter Edge and Cycle's Close: Straif (Blackthorn) & Ruis (Elder)",
              "body": "Blackthorn (*Straif*) blossoms white upon bare dark thorns before a single leaf appears—resonating with the northern runes Hagalaz and Nauthiz. Elder (*Ruis*) closes the Third Aicme, governing the composting of the old so the new may rise."
            }
          ],
          "sv": [
            {
              "heading": "Möda och Uthållighet: Muin (Björnbär) & Gort (Murgröna)",
              "body": "Där björnbärsrankan rör vid jorden slår den ny rot. Murgrönan förblir grön när skogen fäller sina löv och lär ut uthållighet genom mörka tider."
            },
            {
              "heading": "Läkarens Hand: Gétal (NG)",
              "body": "I *Briatharogam Morainn* kallas Gétal *lúth lega* ('läkarens kraft'). Att förstå såret och att bereda läkemedlet hör samman."
            },
            {
              "heading": "Vinterskärpa och Cykelns Slut: Straif (Slån) & Ruis (Fläder)",
              "body": "Slånen (*Straif*) blommar med vita blommor på svarta törnen innan bladen slår ut. Flädern (*Ruis*) avslutar den tredje familjen och markerar slutet på det gamla så att det nya kan spira."
            }
          ]
        },
        "items": {
          "tr": [
            "ᚋ M · Muin (Böğürtlen / Asma): Briatharogam: ‘Tressam fedmae’ (Çabanın en güçlüsü). Anlamı: Emeğin olgunlaşması, sabırla toplanan hasat ve içsel hakikat.",
            "ᚌ G · Gort (Sarmaşık / Tarla): Briatharogam: ‘Milsiu féraib’ (Otların en tatlısı). Anlamı: Azim, sadakat, sarmalayarak büyüme ve ruhsal gelişim.",
            "ᚍ NG · Gétal (Kamış / Hekimlik): Briatharogam: ‘Lúth lega’ (Hekimin gücü). Anlamı: Şifa, onarım, bedensel ve ruhsal bütünlüğü koruma.",
            "ᚎ Z · Straif (Karaçalı): Briatharogam: ‘Mórthad rún’ (Sırların çoğalması). Anlamı: Kaçınılmaz kader, kış sınavı, fazlalıkları budayan keskin netlik.",
            "ᚏ R · Ruis (Mürver Ağacı): Briatharogam: ‘Tindem rucci’ (Kızarmanın en yoğunu). Anlamı: Tamamlanma, eski döngünün ölümü ve eşik dönüşümü."
          ],
          "en": [
            "ᚋ M · Muin (Bramble / Vine): Briatharogam: 'Tressam fedmae' (Strongest of effort). Meaning: Ripened labor, autumn harvest, inner truth.",
            "ᚌ G · Gort (Ivy / Field): Briatharogam: 'Milsiu féraib' (Sweetest of grasses). Meaning: Tenacity, fidelity, steady spiraling growth.",
            "ᚍ NG · Gétal (Reed / Broom): Briatharogam: 'Lúth lega' (Strength of a physician). Meaning: Healing, restoration, tending the wound.",
            "ᚎ Z · Straif (Blackthorn): Briatharogam: 'Mórthad rún' (Increase of secrets). Meaning: Inevitable fate, winter testing, radical clarity.",
            "ᚏ R · Ruis (Elder): Briatharogam: 'Tindem rucci' (Most intense of blushing). Meaning: Completion, shedding the outgrown, threshold renewal."
          ],
          "sv": [
            "ᚋ M · Muin (Björnbär / Vinranka): Briatharogam: 'Tressam fedmae' (Starkast i möda). Betydelse: Mogen skörd och inre sanning.",
            "ᚌ G · Gort (Murgröna): Briatharogam: 'Milsiu féraib' (Sötast av gräs). Betydelse: Uthållighet, trofasthet och spiralformad växt.",
            "ᚍ NG · Gétal (Rör / Ginst): Briatharogam: 'Lúth lega' (Läkarens kraft). Betydelse: Läkedom, återställande och vård.",
            "ᚎ Z · Straif (Slån): Briatharogam: 'Mórthad rún' (Hemligheternas ökning). Betydelse: Oundvikligt öde, vinterprövning och skarp klarhet.",
            "ᚏ R · Ruis (Fläder): Briatharogam: 'Tindem rucci' (Starkast av rodnad). Betydelse: Fullbordan, avslut och pånyttfödelse."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Karaçalı ve Mürver Muhasebesi",
            "steps": [
              "Son bir yılda ‘zorluk’ olarak gördüğün bir olayın sende hangi fazlalığı budadığını (Straif) dürüstçe yaz.",
              "Bu olayın içinden hangi yeni beceriyi veya şifayı (Gétal) çıkardığını belirle.",
              "Artık tamamen miadını doldurmuş bir alışkanlığı veya beklentiyi Mürver’in (Ruis) toprağına bırakarak vedalaş."
            ]
          },
          "en": {
            "title": "Study Note · Reckoning of Blackthorn and Elder",
            "steps": [
              "Write down honestly what excess or illusion a difficult event of the past year pruned away from your life (Straif).",
              "Identify the specific resilience or healing skill (Gétal) that emerged from that crossing.",
              "Consciously lay down one outgrown habit or expectation into the soil of Elder (Ruis) to complete the cycle."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Slånens och Fläderns Rannsakan",
            "steps": [
              "Skriv ärligt ned vilket överflöd eller vilken illusion en prövning under det gångna året har beskurit bort (Straif).",
              "Identifiera vilken läkande insikt eller styrka (Gétal) som vuxit fram ur denna korsväg.",
              "Lägg medvetet ned en uttjänt vana eller förväntan i Fläderns (Ruis) jord för att avsluta cykeln."
            ]
          }
        },
        "closing": {
          "tr": "Karaçalının dikeninden geçmeyen, kışın ortasında açan beyaz çiçeği göremez.",
          "en": "Whoever shuns the thorn of Blackthorn never sees the white blossom that opens in midwinter.",
          "sv": "Den som väjer för slånens törne får aldrig se den vita blomman mitt i vintern."
        },
        "image": "/ogham/aicme-3.jpg",
        "itemImages": [
          "/ogham/tree-m-muin.jpg",
          "/ogham/tree-g-gort.jpg",
          "/ogham/tree-ng-getal.jpg",
          "/ogham/tree-z-straif.jpg",
          "/ogham/tree-r-ruis.jpg"
        ]
      },
      {
        "slug": "dorduncu-aicme",
        "glyph": "ᚐᚑᚒᚓᚔ",
        "title": {
          "tr": "Dördüncü Aicme · Ailm (A · O · U · E · I)",
          "en": "Fourth Aicme · Ailm (A · O · U · E · I)",
          "sv": "Fjärde Aicme · Ailm (A · O · U · E · I)"
        },
        "subtitle": {
          "tr": "Gövdenin tam kalbindeki beş sesli harf: Nefes, güneş, toprak, rüzgar ve sonsuzluk.",
          "en": "Five vowels notched at the heart of the stemline: breath, sun, earth, wind, and eternity.",
          "sv": "Fem vokaler i stamlinjens hjärta: andedräkt, sol, jord, vind och evighet."
        },
        "summary": {
          "tr": "Ailm (Köknar/Çam), Onn (Katırtırnağı), Úr (Funda/Toprak), Edad (Titrek Kavak) ve Idad (Porsuk).",
          "en": "Ailm (Pine/Fir), Onn (Gorse), Úr (Heather/Earth), Edad (Aspen), and Idad (Yew) with Briatharogam kennings.",
          "sv": "Ailm (Ädelgran/Tall), Onn (Ärtsörne), Úr (Ljung/Jord), Edad (Asp) och Idad (Idegran) med Briatharogam-kenningar."
        },
        "paragraphs": {
          "tr": [
            "Dördüncü Aicme — ‘Aicme Ailme’ — Ogham alfabesinin beş sesli harfini (A, O, U, E, I) barındırır. Taş yazıtlarda bu harfler gövde çizgisinin sağa veya sola taşmayan, doğrudan merkez çizginin (omurganın) üzerine oyulmuş çentiklerle (noktalarla veya dik açılı kısa kesiklerle) gösterilir. Çünkü sesli harfler sessiz harflere can veren nefestir.",
            "İlk harf Ailm (Köknar / Çam), dağların en yüksek noktasında yetişen ve ufku en yukarıdan gören ağaçtır. Briatharogam’da ‘cevabın başlangıcı’ (tosach frecrai) olarak geçer; çünkü her ilk nefes ve her ilk ses ‘A’ ile başlar.",
            "İkinci harf Onn (Katırtırnağı / Karaçalı çalısı), yıl boyunca altın sarısı çiçeklerini hiç kaybetmeyen güneş enerjisini taşır. Üçüncü harf Úr (Funda ve Toprak), Briatharogam’da hem ‘soğuk meskenler’ (toprağın altı) hem de ‘bitkilerin çoğalması’ (sílad clann) olarak tanımlanır; toprağın her şeyi geri alıp yeniden doğuran rahmidir.",
            "Dördüncü harf Edad (Titrek Kavak), en ufak esintide bile yaprakları konuşan, öte-dünyanın fısıltılarını dinleyen ağaçtır. Beşinci ve yirminci son harf olan Idad (Porsuk Ağacı) ise binlerce yıl yaşayan, kendi gövdesinin içinden yeniden kök salan ‘ağaçların en yaşlısı’dır (sinem feda)."
          ],
          "en": [
            "The Fourth Aicme—*Aicme Ailme*—holds the five vowels of the Ogham alphabet (A, O, U, E, I). On ancient stone monuments these are carved as notches directly upon the central ridge itself, while in manuscript tradition they cross the line cleanly at right angles. Just as vowels give breath and voice to consonants, these five trees sit at the center of the axis.",
            "First is *Ailm* (Silver Fir / Pine), growing on the high mountain ridge with clear perspective; the Briatharogam names it *tosach frecrai* ('beginning of an answer'), for 'A' is the first cry of breath.",
            "Second is *Onn* (Gorse / Furze), whose golden blossoms burn bright across the hills throughout the year. Third is *Úr* (Heather and the bare Earth itself), described in the Briatharogam both as *úaraib adbaib* ('in cold dwellings') and *sílad clann* ('propagation of plants')—the soil that receives all things and gives birth anew.",
            "Fourth is *Edad* (Aspen), whose leaves tremble and whisper at the slightest stir of wind. Fifth and twentieth of the whole Ogham is *Idad* (Yew), named *sinem feda* ('oldest of trees')—living for millennia and rooting new trunks inside its ancient hollow shell."
          ],
          "sv": [
            "Den fjärde familjen — *Aicme Ailme* — rymmer Ogham-alfabetets fem vokaler (A, O, U, E, I). På de äldsta stenarna höggs dessa som punkter eller korta skåror mitt på själva stamlinjen, ty vokalerna är den andedräkt som ger röst åt konsonanterna.",
            "Först står *Ailm* (Ädelgran / Tall), som växer högt uppe på bergskammen med vid överblick; i Briatharogam kallas den *tosach frecrai* ('början på ett svar').",
            "Det andra tecknet är *Onn* (Ärtsörne / Ginst), vars gyllene blommor lyser som solsken. Det tredje är *Úr* (Ljung och själva Jorden), som i Briatharogam kallas både *úaraib adbaib* ('i kalla boningar') och *sílad clann* ('växternas förökning').",
            "Det fjärde är *Edad* (Asp), vars blad darrar och viskar i minsta vindpust. Det femte och tjugonde tecknet i hela Ogham är *Idad* (Idegran), kallad *sinem feda* ('äldst av träd') — ett träd som lever i årtusenden."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Yüksek Görüş ve Güneş Ateşi: Ailm ve Onn",
              "body": "Ailm (Köknar), insanı günlük kargaşanın dışına çıkarıp olaylara dağın zirvesinden bakmaya çağırır. Onn (Katırtırnağı) ise İrlanda atasözünde ‘Katırtırnağı çiçek açmayı bıraktığında öpüşmek de biter’ sözüyle anılır; çünkü yılın her mevsiminde üzerinde mutlaka sarı bir çiçek bulunur ve tükenmeyen yaşam neşesini simgeler."
            },
            {
              "heading": "Toprağın Rahmi ve Rüzgarın Dili: Úr ve Edad",
              "body": "Úr, yalın toprağın kendisidir; cömertliği, tevazuyu ve her canlıyı sonunda kucaklayan sükuneti öğretir. Edad (Titrek Kavak) ise korkuyla titreyen değil, görünmeyen rüzgarın frekansını görünür kılan hassas bir antendir; Briatharogam’da ‘dostların alışverişi’ (commaín carat) olarak anılır."
            },
            {
              "heading": "Zamanın Ötesindeki Mühür: Idad (Porsuk Ağacı)",
              "body": "Porsuk ağacı (Idad) Kelt kutsal alanlarının ve mezarlıklarının bekçisidir. İçi boşalsa bile üst dallarından aşağıya doğru kendi gövdesinin içinden yeni bir kök indirir ve kendisini içeriden yenileyerek iki-üç bin yıl yaşar. Yirmi Ogham kapısını kapatan bu son ağaç, ruhun ölümsüzlüğünün ve soy hafızasının mührüdür."
            }
          ],
          "en": [
            {
              "heading": "High Perspective and Solar Gold: Ailm & Onn",
              "body": "Ailm (Pine/Fir) lifts sight above tangled undergrowth to the mountain crest. Onn (Gorse) blooms in every month of the year, embodying solar warmth and unextinguished vitality."
            },
            {
              "heading": "The Womb of Earth and the Whispering Leaf: Úr & Edad",
              "body": "Úr is both heather-moor and sacred soil—teaching humility and the quiet fertility of the ground. Edad (Aspen) trembles not from fear, but from sensitivity to unseen currents of air; the Briatharogam names it *commaín carat* ('exchange of friends')."
            },
            {
              "heading": "The Eternal Seal: Idad (Yew)",
              "body": "Yew (*Idad*) guards ancient sacred precincts across Ireland and Britain. Even when its heartwood hollows after centuries, it lowers aerial roots inside its own trunk to rebirth itself from within—sealing the twenty Ogham doors with timeless continuity."
            }
          ],
          "sv": [
            {
              "heading": "Hög Blick och Solguld: Ailm & Onn",
              "body": "Ailm (Ädelgran/Tall) lyfter blicken över snåren upp till bergskammen. Onn (Ärtsörne) bär gyllene blommor året runt och förkroppsligar solens outsläckliga livskraft."
            },
            {
              "heading": "Jordens Sköte och det Viskande Bladet: Úr & Edad",
              "body": "Úr är både ljungheden och den heliga jorden som tar emot och föder allt på nytt. Edad (Asp) skälver inte av fruktan, utan av lyhördhet för vindens osynliga strömmar."
            },
            {
              "heading": "Det Eviga Sigillet: Idad (Idegran)",
              "body": "Idegranen (*Idad*) vaktar uråldriga helgedomar. Även när dess stam blir ihålig efter århundraden sänker den nya rötter inuti sitt eget skal och föds på nytt inifrån — det tjugonde och sista inseglet i Ogham."
            }
          ]
        },
        "items": {
          "tr": [
            "ᚐ A · Ailm (Köknar / Çam): Briatharogam: ‘Tosach frecrai’ (Cevabın başlangıcı). Anlamı: Yüksek perspektif, berrak nefes ve ufkun açılması.",
            "ᚑ O · Onn (Katırtırnağı): Briatharogam: ‘Féthem soíre’ (Ustalığın en pürüzsüzü). Anlamı: Güneş canlılığı, umut, bereket ve derleme gücü.",
            "ᚒ U · Úr (Funda / Toprak): Briatharogam: ‘Sílad clann’ (Bitkilerin çoğalması). Anlamı: Toprağın şifası, tevazu, öze dönüş ve cömertlik.",
            "ᚓ E · Edad (Titrek Kavak): Briatharogam: ‘Érgnaid fid’ (Ayırt eden bilge ağaç). Anlamı: İnce sezgi, rüzgarı dinleme, korkuyu aşma ve iletişim.",
            "ᚔ I · Idad (Porsuk Ağacı): Briatharogam: ‘Sinem feda’ (Ağaçların en yaşlısı). Anlamı: Sonsuzluk, ataların hafızası, içeriden yenilenme ve derin kök."
          ],
          "en": [
            "ᚐ A · Ailm (Pine / Silver Fir): Briatharogam: 'Tosach frecrai' (Beginning of an answer). Meaning: High perspective, clear breath, wide horizon.",
            "ᚑ O · Onn (Gorse / Furze): Briatharogam: 'Féthem soíre' (Smoothest of craftsmanship). Meaning: Solar vitality, gathering strength, golden resilience.",
            "ᚒ U · Úr (Heather / Earth): Briatharogam: 'Sílad clann' (Propagation of plants). Meaning: Grounding in soil, humility, quiet regeneration.",
            "ᚓ E · Edad (Aspen): Briatharogam: 'Érgnaid fid' (Discerning tree). Meaning: Subtle perception, listening to the wind, overcoming fear.",
            "ᚔ I · Idad (Yew): Briatharogam: 'Sinem feda' (Oldest of trees). Meaning: Timeless continuity, ancestral memory, renewal from within."
          ],
          "sv": [
            "ᚐ A · Ailm (Ädelgran / Tall): Briatharogam: 'Tosach frecrai' (Början på ett svar). Betydelse: Hög överblick, klar andedräkt och vid horisont.",
            "ᚑ O · Onn (Ärtsörne): Briatharogam: 'Féthem soíre' (Finast av hantverk). Betydelse: Solkraft, samling och gyllene uthållighet.",
            "ᚒ U · Úr (Ljung / Jord): Briatharogam: 'Sílad clann' (Växternas förökning). Betydelse: Jordning, ödmjukhet och stilla växtkraft.",
            "ᚓ E · Edad (Asp): Briatharogam: 'Érgnaid fid' (Ursikiljande träd). Betydelse: Fin lyhördhet, att lyssna till vinden och övervinna rädsla.",
            "ᚔ I · Idad (Idegran): Briatharogam: 'Sinem feda' (Äldst av träd). Betydelse: Evighet, förfäders minne och förnyelse inifrån."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Beş Sesli Harfin Nefesi",
            "steps": [
              "Omurganı Ogham’ın dikey gövde çizgisi olarak hisset; beş sesli harfi aşağıdan yukarıya doğru bedeninde yerleştir: Kökünde A, karnında O, kalbinde U, boğazında E ve tepe noktasında I.",
              "Derin bir nefes al ve nefes verirken bu beş sesi (A — O — U — E — İ) kesintisiz tek bir akış halinde yavaşça seslendir.",
              "Köknar’ın yüksek görüşünden (Ailm) başlayıp Porsuk ağacının asırlık sükunetinde (Idad) dur."
            ]
          },
          "en": {
            "title": "Study Note · Breath of the Five Vowels",
            "steps": [
              "Feel your spine as the vertical stemline of Ogham; place the five vowels from bottom to top: A at the root, O at the belly, U at the heart, E at the throat, and I at the crown.",
              "Inhale deeply, and on a single slow exhalation intone the five vowels in continuous flow: A — O — U — E — I.",
              "Rest in the stillness between the high mountain sight of Ailm and the ancient roots of Idad."
            ]
          },
          "sv": {
            "title": "Studieanteckning · De Fem Vokalernas Andedräkt",
            "steps": [
              "Känn din ryggrad som Oghams vertikala stamlinje; placera de fem vokalerna nerifrån och upp: A vid roten, O i buken, U i hjärtat, E i strupen och I vid hjässan.",
              "Andas in djupt och ljud på en enda långsam utandning de fem vokalerna i följd: A — O — U — E — I.",
              "Vila i stillheten mellan Ailms höga bergsblick och Idads uråldriga rötter."
            ]
          }
        },
        "closing": {
          "tr": "Porsuk ağacı bin yıl konuşmadan durur; ama köküne oturan herkes onun ne dediğini duyar.",
          "en": "The Yew stands a thousand years without speaking a word, yet whoever sits by its root hears its counsel.",
          "sv": "Idegranen står i tusen år utan att yttra ett ord, men var och en som sitter vid dess rot hör dess råd."
        },
        "image": "/ogham/aicme-4.jpg",
        "itemImages": [
          "/ogham/tree-a-ailm.jpg",
          "/ogham/tree-o-onn.jpg",
          "/ogham/tree-u-ur.jpg",
          "/ogham/tree-e-edad.jpg",
          "/ogham/tree-i-idad.jpg"
        ]
      }
    ]
  },
  "mezopotamya": {
    "slug": "mezopotamya",
    "image": "/traditions/mezopotamya.jpg",
    "title": {
      "tr": "Mezopotamya",
      "en": "Mesopotamia",
      "sv": "Mesopotamien"
    },
    "line": {
      "tr": "Sümer, Babil ve Anadolu Harran mirası: MUL.APIN yıldız katalogları, Abzu’nun suları, İnanna’nın yedi kapısı ve Elli İsim.",
      "en": "The heritage of Sumer, Babylon, and Anatolian Harran: MUL.APIN star catalogues, the waters of Abzu, Inanna's Seven Gates, and the Fifty Names.",
      "sv": "Arvet från Sumer, Babylon och anatoliska Harran: MUL.APIN-stjärnkataloger, Abzus vatten, Inannas sju portar och de Femtio Namnen."
    },
    "backLabel": {
      "tr": "Mezopotamyaya dön",
      "en": "Back to Mesopotamia",
      "sv": "Tillbaka till Mesopotamien"
    },
    "doors": [
      {
        "slug": "ziggurat-ve-yildizlar",
        "glyph": "𒀭",
        "title": {
          "tr": "Ziggurat, MUL.APIN ve Gökyüzü Meclisi",
          "en": "The Ziggurat, MUL.APIN, and the Celestial Assembly",
          "sv": "Zigguraten, MUL.APIN och Himmelsrådet"
        },
        "subtitle": {
          "tr": "Etemenanki kulesi, çivi yazılı yıldız katalogları ve Zodyak’ın doğuşu.",
          "en": "The tower of Etemenanki, cuneiform star catalogues, and the birth of the Zodiac.",
          "sv": "Tornet Etemenanki, kilskriftens stjärnkataloger och Zodiakens födelse."
        },
        "summary": {
          "tr": "Babil gözlem kuleleri, MUL.APIN ve Enuma Anu Enlil tabletleri, gökyüzünün üç yolu ve 18 takımyıldız.",
          "en": "Babylonian observation towers, the MUL.APIN and Enuma Anu Enlil tablets, the Three Paths of the Sky, and the lunar zodiac.",
          "sv": "Babyloniska observatorietorn, MUL.APIN- och Enuma Anu Enlil-tavlorna, himlens tre vägar och månzodiaken."
        },
        "paragraphs": {
          "tr": [
            "Bugün kullandığımız on iki burçlu Zodyak kuşağının, gezegen saatlerinin ve 360 derecelik daire ölçüsünün (60 tabanlı sayı sisteminin) gerçek tarihsel anavatanı Mezopotamya’dır. Sümer ve Babil’de gökyüzü, tanrıların kil bir tablet üzerine yıldızlarla yazdığı ‘Göksel Yazı’ (Şitir Şamê / Šiṭir Šamê) olarak kabul edilirdi.",
            "Babil’deki ‘Etemenanki’ (Sümerce: ‘Gök ve Yerin Temel Evi’) gibi yedi katlı zigguratlar yalnızca dini yapılar değil, ufku hiçbir engelle kesilmeyen ovalarda gökyüzünün doğuş ve batış açılarını ölçen devasa rasathanelerdi. ‘Ţupšar Enuma Anu Enlil’ adı verilen gökyüzü katipleri, yüzyıllar boyunca her gece gezegenlerin konumlarını, tutulmaları ve bulut şekillerini kil tabletlere kaydetti.",
            "MÖ 1000 civarında derlenen iki tabletlik ‘MUL.APIN’ (‘Sababan Yıldızı’ kataloğu) ve 70 tabletten oluşan ‘Enuma Anu Enlil’ serisi, insanlık tarihinin en eski sistematik astronomi ve astroloji külliyatıdır. Bu tabletlerde gökyüzü kuzeyden güneye üç kuşağa ayrılır: Kuzeyde ‘Enlil’in Yolu’, ekvator kuşağında ‘Anu’nun Yolu’ ve güney ufkunda ‘Ea’nın (Enki) Yolu’.",
            "MUL.APIN’in birinci tabletinin sonunda ‘Ay’ın Yolunda Duran Tanrılar’ başlığı altında 18 takımyıldız sıralanır: Ülker (MUL.MUL), Gökyüzü Boğası (GU₄.AN.NA), Gerçek Çoban Orion (SIPA.ZI.AN.NA), Aslan (UR.GU.LA), Terazi (ZIB.ME), Akrep (GÍR.TAB) ve Oğlak-Balık (SUḪUR.MÁŠ) doğrudan bu listeden doğarak bugünkü astrolojiye miras kalmıştır."
          ],
          "en": [
            "The historical birthplace of the twelve-sign Zodiac, planetary hours, and the 360-degree circle (grounded in the sexagesimal base-60 number system) is ancient Mesopotamia. In Sumerian and Babylonian thought, the night sky was called *Šiṭir Šamê*—'the Heavenly Writing' inscribed across the vault of night.",
            "Seven-tiered ziggurats such as Babylon's *Etemenanki* (Sumerian: 'House of the Foundation of Heaven and Earth') stood above the flat alluvial plain as monumental observatories. Astronomer-scribes known as *Ṭupšar Enuma Anu Enlil* kept unbroken nightly diaries across centuries, recording heliacal risings, eclipses, and planetary stations upon clay tablets.",
            "Compiled around 1000 BCE from older observations, the two-tablet compendium *MUL.APIN* ('The Plough Star') and the 70-tablet omen series *Enuma Anu Enlil* form the foundational corpus of celestial science. In *MUL.APIN*, the sky is divided into three great bands: the northern *Path of Enlil*, the equatorial *Path of Anu*, and the southern *Path of Ea*.",
            "At the close of Tablet I of *MUL.APIN*, the text lists eighteen constellations standing 'in the Path of the Moon'—including *MUL.MUL* (the Pleiades), *GU₄.AN.NA* (the Bull of Heaven / Taurus), *UR.GU.LA* (the Lion / Leo), *ZIB.ME* (the Scales / Libra), *GÍR.TAB* (the Scorpion), and *SUḪUR.MÁŠ* (the Goat-Fish / Capricorn)—the direct historical ancestors of the western zodiac."
          ],
          "sv": [
            "Det historiska ursprunget till den tolvdelade zodiaken, planettimmarna och cirkelns 360 grader (baserat på det sexagesimala talsystemet med basen 60) är det forntida Mesopotamien. I babylonisk tankevärld kallades natthimlen *Šiṭir Šamê* — 'den himmelska skriften'.",
            "Sjuvingade ziggurater som Babylons *Etemenanki* ('Himmelens och Jordens Grundhus') fungerade som monumentala observatorier över det platta slättlandet. Skrivare kallade *Ṭupšar Enuma Anu Enlil* förde oavbrutna nattliga dagböcker på lertavlor under århundraden.",
            "Sammanställd omkring 1000 f.Kr. utgör tvåtavelsverket *MUL.APIN* ('Plogstjärnan') och den 70 tavlor långa serien *Enuma Anu Enlil* grunden för all senare astronomi och astrologi. Här delas himlen in i tre bälten: *Enlils väg* i norr, *Anus väg* längs ekvatorn och *Eas väg* i söder.",
            "I slutet av första tavlan i *MUL.APIN* räknas arton stjärnbilder upp längs 'Månens väg' — däribland *MUL.MUL* (Plejaderna), *GU₄.AN.NA* (Himmelstjuren), *UR.GU.LA* (Lejonet), *ZIB.ME* (Vågen), *GÍR.TAB* (Skorpionen) och *SUḪUR.MÁŠ* (Getfisken/Stenbocken)."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Gökyüzünün Üç Yolu: Enlil, Anu ve Ea",
              "body": "Babil gökbiliminde yıldızlar rastgele dağılmaz; kuzey gökküresindeki sabit ve yüksek yıldızlar Enlil’in (yasa ve otorite), doğudan batıya yükselen ekvator yıldızları Anu’nun (gök kubbe), güney ufkuna yakın yıldızlar ise Ea’nın (derin su ve bilgelik) yönetimindedir. Bir yıldızın hangi yoldan doğduğu, mesajın hangi katmanı ilgilendirdiğini gösterir."
            },
            {
              "heading": "Yedi Gezegen ve Yedi Katman",
              "body": "Çıplak gözle görülen yedi gök cismi Babil’de yedi büyük ilkenin elçisiydi: Ay (Sîn), Güneş (Šamaš), Jüpiter (Marduk / Nēberu), Venüs (İnanna / Ištar / Dilbat), Satürn (Ninurta / Kayamānu — ‘Sabit Olan’), Merkür (Nabû / Šiḫṭu — ‘Sıçrayan’) ve Mars (Nergal / Salbatanu). Haftanın yedi günü doğrudan bu yedi gök cisminden türemiştir."
            },
            {
              "heading": "İşaret Zorlama Değil, Uyarıdır (Namburbû)",
              "body": "Mezopotamya astrolojisinde gökyüzündeki bir işaret mutlak bir felaket hükmü olarak görülmezdi; göksel mahkemenin insana önceden gönderdiği bir mektup sayılırdı. Olumsuz bir işaret görüldüğünde ‘Namburbû’ (çözme ve arınma ritüelleri) uygulanarak denge yeniden kurulurdu."
            }
          ],
          "en": [
            {
              "heading": "The Three Celestial Paths: Enlil, Anu, and Ea",
              "body": "Babylonian astronomy mapped the heavens into three horizon-to-horizon bands: northern stars belonged to the Path of Enlil, equatorial stars to the Path of Anu, and southern stars to the Path of Ea (Enki). Knowing which path a star rose in revealed its sphere of influence."
            },
            {
              "heading": "The Seven Classical Planets",
              "body": "The seven wandering luminaries visible to the naked eye were read as living cosmic powers: Sîn (Moon), Šamaš (Sun), Marduk/Nēberu (Jupiter), Ištar/Dilbat (Venus), Ninurta/Kayamānu ('The Steady One' — Saturn), Nabû/Šiḫṭu ('The Leaping One' — Mercury), and Nergal/Salbatanu (Mars)—the direct origin of the seven-day planetary week."
            },
            {
              "heading": "Omen as Counsel, Not Fatalism (Namburbû)",
              "body": "In Mesopotamian sky lore, an omen was never blind fatalism; it was a warning message from the cosmic assembly. When a difficult sign appeared, *Namburbû* ('undoing' rites of purification and prayer) were performed to restore harmony."
            }
          ],
          "sv": [
            {
              "heading": "Himlens Tre Vägar: Enlil, Anu och Ea",
              "body": "Babylonisk astronomi delade himlavalvet i tre bälten: de nordliga stjärnorna tillhörde Enlils väg, ekvatorstjärnorna Anus väg och de sydliga stjärnorna Eas (Enkis) väg."
            },
            {
              "heading": "De Sju Klassiska Planeterna",
              "body": "De sju himlakroppar som syns för blotta ögat lästes som kosmiska krafter: Sîn (Månen), Šamaš (Solen), Marduk/Nēberu (Jupiter), Ištar/Dilbat (Venus), Ninurta/Kayamānu ('Den Stadige' — Saturnus), Nabû/Šiḫṭu (Merkurius) och Nergal (Mars) — ursprunget till vår sjudagarsvecka."
            },
            {
              "heading": "Tecken som Vägledning, Inte Blind Ödestro (Namburbû)",
              "body": "I Mesopotamien betraktades ett järtecken aldrig som ett oåterkalleligt straff, utan som ett varsel. Genom *Namburbû*-riter (upplösande och renande riter) kunde jämvikten återställas."
            }
          ]
        },
        "items": {
          "tr": [
            "𒀭 MUL.APIN: MÖ 1000 civarında derlenen, 66 yıldız ve takımyıldızı sınıflandıran iki tabletlik Babil astronomi kataloğu.",
            "Enuma Anu Enlil: Gökyüzü, Ay ve Güneş tutulmaları ile gezegen hareketlerini inceleyen 70 tabletlik temel külliyat.",
            "Etemenanki: Babil’de gökle yeri birleştiren yedi katlı merkez ziggurat ve gözlem kulesi.",
            "Kayamānu (Satürn / Ninurta): Akadca ‘Sabit ve Yavaş Yürüyen’ anlamıyla düzenin ve sınırın gezegeni.",
            "Nēberu (Jüpiter / Marduk): Gökyüzünün merkez geçiş noktasını tutan, ölçü ve adalet yıldızı.",
            "ZIB.ME (Terazi) ve GU₄.AN.NA (Boğa): Bugünkü burçlar kuşağının Sümer-Babil tabletlerindeki orijinal adları."
          ],
          "en": [
            "𒀭 MUL.APIN: Two-tablet Babylonian compendium (~1000 BCE) cataloguing 66 stars and constellations across three sky-paths.",
            "Enuma Anu Enlil: The foundational 70-tablet series of lunar, solar, and planetary celestial observations.",
            "Etemenanki: 'House of the Foundation of Heaven and Earth'—Babylon's seven-tiered ziggurat and observatory.",
            "Kayamānu (Saturn / Ninurta): Literally 'The Steady/Constant One' in Akkadian, keeper of cosmic measure.",
            "Nēberu (Jupiter / Marduk): 'The Crossing/Pivot', marking order at the meridian of the sky.",
            "ZIB.ME (Libra) & GU₄.AN.NA (Taurus): The original Sumerian cuneiform names of the zodiacal constellations."
          ],
          "sv": [
            "𒀭 MUL.APIN: Tvåtavelskompendium (~1000 f.Kr.) som katalogiserar 66 stjärnor och stjärnbilder.",
            "Enuma Anu Enlil: Det grundläggande verket om 70 lertavlor med observationer av måne, sol och planeter.",
            "Etemenanki: 'Himmelens och Jordens Grundhus' — Babylons sjuvingade ziggurat och observatorium.",
            "Kayamānu (Saturnus / Ninurta): Akkadiska för 'Den Stadige', väktare av ordning och gräns.",
            "Nēberu (Jupiter / Marduk): 'Övergångspunkten', stjärnan för mått och kosmisk lag.",
            "ZIB.ME (Vågen) & GU₄.AN.NA (Tjuren): De ursprungliga sumeriska namnen på zodiakens stjärnbilder."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Gece Göğünü Katipler Gibi İzlemek",
            "steps": [
              "Açık bir gecede telefon veya uygulama açmadan önce doğu ufkundan batı ufkuna uzanan Ay’ın ve gezegenlerin geçtiği hattı (Ekliptik / Anu’nun Yolu) çıplak gözle bul.",
              "Gökyüzünde göz kırpmadan sabit bir ışıkla parlayan gezegeni (Venüs, Jüpiter veya Satürn) titreşen sabit yıldızlardan ayırt et.",
              "Gördüğün gökyüzü manzarasını tek bir cümleyle tarih atarak defterine kaydet; Babil katiplerinin ilk disiplini düzenli gözlemdir."
            ]
          },
          "en": {
            "title": "Study Note · Observing the Night Sky Like a Scribe",
            "steps": [
              "On a clear night, before consulting any screen, trace with the naked eye the arc from east to west traveled by the Moon and planets.",
              "Distinguish the steady, unblinking light of a planet (Venus, Jupiter, or Saturn) from the twinkling of the fixed stars.",
              "Record the date and a single sentence describing the sky in a notebook—continuing the oldest discipline of the Babylonian watchers."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Att Betrakta Natthimlen som en Skrivare",
            "steps": [
              "En klar natt, innan du ser på någon skärm, följ med blotta ögat bågen från öster till väster där månen och planeterna vandrar.",
              "Skilj det fasta, blinkfria ljuset från en planet (Venus, Jupiter eller Saturnus) från fixstjärnornas tindrande.",
              "Anteckna datum och en enda mening om himlens utseende i en anteckningsbok — den babyloniska observationskonstens första steg."
            ]
          }
        },
        "closing": {
          "tr": "Gökyüzü acele etmez; bin yıl önce Babil kulesinden bakana ne söylediyse, bugün başını kaldırana da aynı düzeni gösterir.",
          "en": "The sky never hurries; it shows the same order to whoever lifts their head tonight as it showed to the watchers of Babylon.",
          "sv": "Himlen hastar aldrig; den visar samma ordning för den som lyfter blicken i natt som för väktarna i Babylon."
        },
        "ctaHref": "/astroloji",
        "ctaLabel": {
          "tr": "Astroloji Notlarına Geç",
          "en": "Open Astrology Notes",
          "sv": "Öppna Astrologianteckningar"
        },
        "image": "/mezopotamya/ziggurat-yildizlar.jpg"
      },
      {
        "slug": "abzu-ve-asalluhi",
        "glyph": "𒀊",
        "title": {
          "tr": "Abzu’nun Suları, Enki ve Asalluhi",
          "en": "The Waters of Abzu, Enki, and Asalluhi",
          "sv": "Abzus Vatten, Enki och Asalluhi"
        },
        "subtitle": {
          "tr": "Eridu’nun derin tatlı su okyanusu ve baba-oğul bilgelik diyaloğu.",
          "en": "The subterranean sweet-water ocean of Eridu and the father-son dialogue of wisdom.",
          "sv": "Eridus underjordiska sötvattenshav och samtalet mellan far och son."
        },
        "summary": {
          "tr": "Abzu (Apsû), Enki/Ea ve Asalluhi’nin tarihsel tablet diyaloğu, kutsal su kabı Egubbû ve sözle arınma.",
          "en": "The Abzu (Apsû), the historical Enki–Asalluhi dialogue formula from cuneiform tablets, and purification by water and word.",
          "sv": "Abzu (Apsû), den historiska dialogformeln mellan Enki och Asalluhi i kilskriftstavlorna samt rening genom vatten och ord."
        },
        "paragraphs": {
          "tr": [
            "Sümer’in en eski kenti kabul edilen Eridu’nun altında, yeryüzündeki tüm pınarların ve nehirlerin kaynağı olan uçsuz bucaksız bir tatlı su okyanusu yatar: ‘Abzu’ (Akadca: Apsû). Tuzlu ve fırtınalı deniz (Tiamat) kaosu temsil ederken, yerin altındaki dingin ve tatlı Abzu suları bilgeliğin, zanaatın, şifanın ve kozmik yasaların (Me’lerin) korunduğu rahimdir.",
            "Abzu’nun efendisi bilgelik tanrısı Enki’dir (Akadca: Ea). Onun oğlu Asalluhi (daha sonra Babil’de Marduk ile birleşmiştir) ise insanların arasında dolaşan, bozulan dengeyi gören ve şifa arayan aktif bilgeliktir.",
            "Sümer ve Akad çivi yazılı şifa tabletlerinde (özellikle ‘Udug-ḫul’ ve ‘Šurpu’ serilerinde) binlerce yıl değişmeden korunan muazzam bir diyalog kalıbı (Literatürde ‘Marduk-Ea / Asalluhi-Enki Diyaloğu’ olarak bilinir) yer alır: Asalluhi yeryüzündeki bir rahatsızlığı veya düğümü görür, babası Enki’nin huzuruna iner ve ‘Babam, ne yapacağımı bilmiyorum’ der.",
            "Enki’nin oğluna verdiği cevap, Mezopotamya inisiyasyonunun özüdür: ‘Oğlum Asalluhi, senin bilmediğin ne var? Ben sana daha ne ekleyebilirim ki? Benim bildiğim ne varsa, sen de onu bilirsin. Git oğlum Asalluhi...’ Ardından Enki, temiz kaynak suyu, tuz, ılgın ağacı (bīnu) ve hurma filiziyle yapılacak somut arınma işlemini tarif eder."
          ],
          "en": [
            "Beneath Eridu, revered by the Sumerians as the oldest city on earth, lies the vast subterranean ocean of sweet water that feeds every spring and river: the *Abzu* (Akkadian *Apsû*). Where the turbulent salt sea (*Tiamat*) embodies raw chaos, the still, sweet waters of the Abzu hold craft, healing, and the cosmic decrees (*Me*).",
            "Lord of the Abzu is *Enki* (Akkadian *Ea*), god of deep wisdom. His son *Asalluhi* (later syncretized with Marduk in Babylon) walks among humankind, observing where order has fractured and bringing restoration.",
            "Across hundreds of Sumerian and Akkadian healing tablets—most notably the *Udug-ḫul* and *Šurpu* series—appears the famous 'Marduk-Ea (Asalluhi-Enki) Dialogue Formula'. Asalluhi observes a human affliction, descends to his father Enki in the Abzu, repeats the problem word for word, and says: 'My father, I do not know what to do.'",
            "Enki's reply is the cornerstone of Mesopotamian initiatory thought: *'My son Asalluhi, what do you not know? What more could I add to you? Whatever I know, you know also. Go, my son Asalluhi...'* Enki then prescribes the exact ritual action using spring water, rock salt, tamarisk wood (*bīnu*), and date-palm heart."
          ],
          "sv": [
            "Under Eridu, som sumererna betraktade som jordens äldsta stad, vilar det väldiga underjordiska sötvattenshav som ger näring åt varje källa och flod: *Abzu* (akkadiska *Apsû*). Medan det salta havet (*Tiamat*) representerar kaos, rymmer Abzus stilla sötvatten visdom, läkekonst och de kosmiska lagarna (*Me*).",
            "Abzus herre är visdomsguden *Enki* (akkadiska *Ea*). Hans son *Asalluhi* (senare förenad med Marduk i Babylon) vandrar bland människorna, ser var ordningen har rubbats och förmedlar läkedom.",
            "I hundratals sumeriska och akkadiska läketavlor — särskilt i serierna *Udug-ḫul* och *Šurpu* — återkommer den berömda dialogformeln mellan Asalluhi och Enki. Asalluhi ser en människas lidande, stiger ned till sin far i Abzu och säger: 'Min far, jag vet inte vad jag ska göra.'",
            "Enkis svar sammanfattar den mesopotamiska visdomssynen: *'Min son Asalluhi, vad är det du inte vet? Vad mer skulle jag kunna ge dig? Allt som jag vet, det vet också du. Gå, min son Asalluhi...'* Därefter anger Enki den konkreta reningen med källvatten, bergsalt och tamariskträ (*bīnu*)."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "A-gúb-ba (Egubbû): Kutsal Su Kabı",
              "body": "Babil ve Sümer tapınaklarında her çalışmadan önce içine kaynak suyu, kaya tuzu, sedir talaşı ve ılgın dalı konulan ‘A-gúb-ba’ (Akadca: Egubbû) adlı kutsal su kabı hazırlanırdı. Su hafızayı en saf tutan elementtir; Abzu’nun temizliği bu kap aracılığıyla çalışma odasına taşınırdı."
            },
            {
              "heading": "Ilgın Ağacı (Bīnu) ve Hurma (Gišimmaru)",
              "body": "Mezopotamya arınma metinlerinde iki bitki sürekli yan yana anılır: Gökyüzünün kemiği sayılan ‘Ilgın ağacı’ (Bīnu / Tamarisk) ve bolluğun direği sayılan ‘Hurma ağacı’ (Gišimmaru). Ilgın dalı suyu serpmek ve gölgeyi süpürmek için kullanılır."
            },
            {
              "heading": "‘Benim Bildiğimi Sen de Bilirsin’ İlkesi",
              "body": "Enki’nin Asalluhi’ye söylediği bu cümle, bilginin dışarıdan ödünç alınan yabancı bir güç olmadığını; uygulayıcının kendi derin kaynağına (Abzu’ya) indiğinde zaten o bilgiye sahip olduğunu hatırlatır."
            }
          ],
          "en": [
            {
              "heading": "A-gúb-ba (Egubbû): The Vessel of Pure Water",
              "body": "Before any rite in Sumer and Babylon, the *A-gúb-ba* (Akkadian *Egubbû*)—a consecrated basin filled with spring water, rock salt, cedar shavings, and tamarisk—was prepared to bring the purity of the subterranean Abzu into the room."
            },
            {
              "heading": "Tamarisk (Bīnu) and Date Palm (Gišimmaru)",
              "body": "Mesopotamian purification tablets repeatedly pair two sacred trees: Tamarisk (*bīnu*, called 'the bone of heaven') and the Date Palm (*gišimmaru*), used to sprinkle water and sweep away stagnant shadow."
            },
            {
              "heading": "'Whatever I Know, You Know Also'",
              "body": "Enki's reassurance to Asalluhi teaches that true mastery is not borrowed from outside; when the practitioner descends into stillness (the inner Abzu), the pattern of resolution is already known."
            }
          ],
          "sv": [
            {
              "heading": "A-gúb-ba (Egubbû): Det Heliga Vattenkärlet",
              "body": "Före varje rit i Sumer och Babylon bereddes *A-gúb-ba* (akkadiska *Egubbû*) — en skål med rent källvatten, bergsalt, cederspån och tamarisk — för att föra Abzus klarhet in i rummet."
            },
            {
              "heading": "Tamarisk (Bīnu) och Dadelpalm (Gišimmaru)",
              "body": "De mesopotamiska reningstexterna förenar ständigt två heliga träd: Tamarisken (*bīnu*, kallad 'himlens ben') och Dadelpalmen (*gišimmaru*)."
            },
            {
              "heading": "'Allt som Jag Vet, Det Vet Också Du'",
              "body": "Enkis ord till Asalluhi påminner om att visdomen inte är främmande; när utövaren stiger ned i sitt eget inre djup (Abzu) finns svaret redan där."
            }
          ]
        },
        "items": {
          "tr": [
            "𒀊 Abzu (Apsû): Eridu’nun altındaki ilksel tatlı su okyanusu; dinginliğin, şifanın ve bilgeliğin kaynağı.",
            "Enki / Ea: Abzu’nun efendisi; zanaatı, suyun akışını, yazıyı ve kozmik ölçüleri koruyan bilge ilke.",
            "Asalluhi: Sorunu teşhis eden, Abzu’ya danışan ve sözle şifayı yeryüzünde uygulayan aktif irade.",
            "A-gúb-ba (Egubbû): Kaynak suyu, tuz ve sedirle hazırlanan geleneksel Sümer-Babil arınma kasesi.",
            "Bīnu (Ilgın Ağacı): Akad tabletlerinde ‘gökyüzünün kemiği’ olarak anılan, arındırma ve sınır koruma ağacı.",
            "Me (Kozmik Yasalar): Enki’nin Eridu’da koruduğu, uygarlığı ve doğa düzenini ayakta tutan temel ilkeler."
          ],
          "en": [
            "𒀊 Abzu (Apsû): The primordial subterranean ocean of sweet water beneath Eridu; source of stillness and wisdom.",
            "Enki / Ea: Lord of the Abzu; keeper of craft, flowing water, writing, and cosmic measure.",
            "Asalluhi: The active healer who diagnoses disharmony, consults the deep, and restores order on earth.",
            "A-gúb-ba (Egubbû): The consecrated Sumerian-Babylonian bowl of spring water, salt, and cedar.",
            "Bīnu (Tamarisk): Revered in Akkadian tablets as 'the bone of heaven', used for cleansing and boundary-setting.",
            "Me (Cosmic Decrees): The foundational ordinances of nature and civilization guarded in the Abzu."
          ],
          "sv": [
            "𒀊 Abzu (Apsû): Det uråldriga underjordiska sötvattenshavet under Eridu; källan till stillhet och visdom.",
            "Enki / Ea: Abzus herre; väktare av hantverk, vatten, skrift och kosmiska mått.",
            "Asalluhi: Den verksamma läkaren som ser obalansen, rådfrågar djupet och återställer ordningen.",
            "A-gúb-ba (Egubbû): Den invigda sumerisk-babyloniska skålen med källvatten, salt och ceder.",
            "Bīnu (Tamarisk): I akkadiska tavlor kallad 'himlens ben', använd för rening och skydd.",
            "Me (Kosmiska Lagar): De grundläggande principerna för natur och civilisation som bevaras i Abzu."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Egubbû Su Kasesi ve Asalluhi Sorusu",
            "steps": [
              "Cam veya toprak bir kaseye temiz içme suyu koy; içine üç tutam doğal kaya tuzu bırak.",
              "Çözemediğin bir meseleyi tıpkı Asalluhi’nin Enki’ye anlattığı gibi abartmadan, yalın ve dürüst cümlelerle suya bakarak tanımla.",
              "Sonra kendine Enki’nin cevabını hatırlat: ‘Benim bildiğimi sen de bilirsin.’ Ellerini bu suyla yıkayıp zihnindeki ilk sakin çözümü kağıda yaz."
            ]
          },
          "en": {
            "title": "Study Note · The Egubbû Water Bowl and Asalluhi's Question",
            "steps": [
              "Pour clean spring water into a glass or clay bowl and add three pinches of natural rock salt.",
              "State a current problem plainly and without exaggeration while gazing at the still surface, just as Asalluhi reports to Enki.",
              "Recall Enki's answer—'Whatever I know, you know also'—rinse your hands lightly, and write down the first calm solution that surfaces."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Egubbû-skålen och Asalluhis Fråga",
            "steps": [
              "Häll rent vatten i en skål av glas eller lera och tillsätt tre nypor naturligt bergsalt.",
              "Formulera ett aktuellt problem enkelt och utan överdrift medan du ser ned i den stilla vattenytan, likt Asalluhi inför Enki.",
              "Minns Enkis svar — 'Allt som jag vet, det vet också du' — skölj händerna lätt och skriv ned den första lugna lösning som framträder."
            ]
          }
        },
        "closing": {
          "tr": "Fırtına denizin yüzeyindedir; Abzu’nun derin suyuna inen kişi bulanıklığın altında hep berrak kalır.",
          "en": "Storms belong to the surface; whoever descends to the deep water of the Abzu remains clear beneath turbulence.",
          "sv": "Stormen hör till ytan; den som stiger ned till Abzus djupa vatten förblir klar under virvlarna."
        },
        "image": "/mezopotamya/abzu-asalluhi.jpg"
      },
      {
        "slug": "inanna-ve-yedi-kapi",
        "glyph": "𒈹",
        "title": {
          "tr": "İnanna’nın İnişi ve Yedi Eşik Kapısı",
          "en": "Inanna's Descent and the Seven Threshold Gates",
          "sv": "Inannas Nedstigning och de Sju Tröskelportarna"
        },
        "subtitle": {
          "tr": "Sabah ve Akşam Yıldızı Venüs’ün yeraltı yolculuğu ve yeniden doğuşu.",
          "en": "The underworld journey and rebirth of Venus, Morning and Evening Star.",
          "sv": "Underjordsresan och pånyttfödelsen för Venus, Morgon- och Aftonstjärnan."
        },
        "summary": {
          "tr": "Sümer’in ‘İnanna’nın Kur’a İnişi’ destanı, Venüs’ün 8 yıllık beş köşeli yıldız döngüsü ve yedi kapıda bırakılan yükler.",
          "en": "The Sumerian myth of Inanna's Descent to Kur, the 8-year pentagram of Venus, and shedding false garments at the Seven Gates.",
          "sv": "Den sumeriska myten om Inannas nedstigning till Kur, Venus åttaåriga pentagramcykel och de sju portarna."
        },
        "paragraphs": {
          "tr": [
            "İnsanlık tarihinin yazılı en eski içsel dönüşüm ve yeraltına iniş (katabasis) metni, MÖ 1900–1600 yıllarına tarihlenen Sümerce ‘İnanna’nın Öte-Dünyaya (Kur’a) İnişi’ destanıdır: ‘Büyük Yukarı’dan aklını Büyük Aşağı’ya çevirdi...’ Gökyüzünün kraliçesi İnanna (Akadca: Ištar), yeraltı dünyasında hüküm süren ablası Ereshkigal’in yanına inmeye karar verir.",
            "Bu mit yalnızca edebi bir hikaye değil, doğrudan astronomik bir gözlemdir: İnanna gökyüzündeki Venüs gezegenidir (Babil tabletlerinde MUL.DIL.BAT). Venüs akşam yıldızı olarak batı ufkunda battıktan sonra güneşin ışığında kaybolur (‘yeraltına iner’), bir süre görünmez kalır ve ardından doğu ufkunda şafak yıldızı olarak yeniden doğar. Kral Ammisaduqa’nın Venüs Tableti (Enuma Anu Enlil, 63. Tablet) bu kavuşumları gün gün kaydetmiştir.",
            "İnanna yeraltının kapı bekçisi Neti tarafından Yedi Kapıdan geçirilir. Her kapıdan geçerken üzerindeki kraliyet nişanlarından birini çıkarması istenir; İnanna nedenini sorduğunda aldığı cevap değişmez: ‘Sessiz ol İnanna, yeraltı dünyasının yasaları (Me’leri) kusursuzdur; bu yasalar sorgulanmaz.’",
            "Yedinci kapıdan geçtiğinde üzerinde hiçbir unvan, zırh veya süs kalmamıştır; ablası Ereshkigal’in (kendi gölgesinin) karşısına tamamen çıplak ve yalın çıkar. Enki’nin tırnağının altındaki kilden yarattığı iki empatik varlık (Kurgarra ve Galatur) Ereshkigal’in acısını dinleyip paylaştığında İnanna’ya yaşam suyu ve yaşam otu verilir; İnanna yedi kapıdan güçlerini geri alarak yeryüzüne yükselir."
          ],
          "en": [
            "The oldest recorded narrative of descent and renewal (*katabasis*) in human literature is the Sumerian poem *Inanna's Descent to the Netherworld* (*Kur*), inscribed on clay tablets around 1900–1600 BCE: *'From the Great Above she opened her ear to the Great Below...'* Inanna (Akkadian *Ištar*), Queen of Heaven, resolves to descend into the underworld ruled by her older sister *Ereshkigal*.",
            "This myth is simultaneously a precise astronomical record: Inanna is the planet Venus (*MUL.DIL.BAT*). After setting in the west as the Evening Star, Venus vanishes into the Sun's glare at inferior conjunction ('descending into the underworld'), remains invisible for days, and rises again in the east before dawn as the Morning Star—a cycle meticulously tracked in the *Venus Tablet of Ammisaduqa* (Tablet 63 of *Enuma Anu Enlil*).",
            "At the entrance to the underworld, the gatekeeper *Neti* leads Inanna through Seven Gates. At each threshold an emblem of her worldly rank is removed; when she protests, she is told: *'Be silent, Inanna, the ways of the underworld are perfect; they may not be questioned.'*",
            "Passing the seventh gate stripped of crown, jewels, measuring rod, and royal robe, she stands bare before Ereshkigal—her own shadow. Only when two empathetic beings fashioned by Enki (*Kurgarra* and *Galatur*) sit with Ereshkigal and witness her grief without judgment is the Water of Life sprinkled upon Inanna, allowing her to ascend through the Seven Gates renewed."
          ],
          "sv": [
            "Den äldsta nedtecknade berättelsen om nedstigning och förnyelse (*katabasis*) i världslitteraturen är det sumeriska kvädet *Inannas nedstigning till underjorden* (*Kur*), ristat på lertavlor omkring 1900–1600 f.Kr.: *'Från det Stora Ovan vände hon sitt öra mot det Stora Nedan...'* Himlens drottning Inanna (akkadiska *Ištar*) beslutar att stiga ned till underjorden där hennes äldre syster *Ereshkigal* härskar.",
            "Denna myt är samtidigt en exakt astronomisk observation: Inanna är planeten Venus (*MUL.DIL.BAT*). Efter att ha gått ned i väster som Aftonstjärna försvinner Venus i solens sken ('stiger ned i underjorden'), förblir osynlig under några dygn och stiger sedan åter upp i öster före gryningen som Morgonstjärna — en cykel som noggrant bokfördes i *Ammisaduqas Venustavla*.",
            "Vid underjordens portar leder väktaren *Neti* Inanna genom Sju Portar. Vid varje tröskel tas ett av hennes värdighetstecken ifrån henne med orden: *'Var stilla, Inanna, underjordens lagar är fullkomliga.'*",
            "När hon passerar den sjunde porten står hon helt avklädd alla roller inför Ereshkigal — sin egen skugga. Först när två väsen skapade av Enki (*Kurgarra* och *Galatur*) delar Ereshkigals smärta i medkänsla bestänks Inanna med Livets Vatten och stiger åter upp genom de sju portarna."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Venüs’ün Sekiz Yıllık Pentagramı ve Retro Eşikleri",
              "body": "Venüs her 584 günde bir Güneş ile iç kavuşum (retro ortası) yapar ve 8 yıllık bir süre içinde gökyüzünde kusursuz bir beş köşeli yıldız (Venüs Pentagramı) çizer. Sekiz köşeli İnanna yıldızı ve beş yapraklı Venüs gülü, Mezopotamya gökbiliminden doğan bu matematiksel düzenin mührüdür."
            },
            {
              "heading": "Yedi Kapıda Bırakılan Yedi Kabuk",
              "body": "İnanna sırasıyla 1. kapıda başındaki tacı (Šugurra), 2. kapıda boynundaki küçük lacivert taşları, 3. kapıda göğsündeki çift taşı, 4. kapıda göğüs zırhını, 5. kapıda bileğindeki altın halkayı, 6. kapıda elindeki lacivert ölçü çubuğu ve ipini, 7. kapıda ise bedenini örten kraliyet kaftanını bırakır. Gerçek dönüşüm dış unvanlarla değil, öze inerek gerçekleşir."
            },
            {
              "heading": "Ereshkigal ve Empatinin Şifası",
              "body": "Enki’nin gönderdiği elçiler Ereshkigal ile savaşmaz; Ereshkigal ‘Ah içim!’ dediğinde onlar da ‘Acı çeken efendimiz, senin için!’ diyerek onun acısını olduğu gibi onaylarlar. Gölgeyle savaşmak onu büyütür; gölgeyi duyup anlamak ise kilidi çözer."
            }
          ],
          "en": [
            {
              "heading": "The Eight-Year Pentagram of Venus and Retrograde",
              "body": "Every 584 days Venus completes a synodic cycle with the Sun, tracing five conjunction points over eight years that form an exact five-pointed rose across the zodiac. Both the eight-pointed Star of Inanna and the five-petaled Rose of Venus encode this celestial geometry."
            },
            {
              "heading": "The Seven Garments Surrendered at the Seven Gates",
              "body": "Inanna removes in turn: (1) her steppe-crown (*Šugurra*), (2) the small lapis beads at her throat, (3) the twin stones at her breast, (4) her pectoral shield, (5) the gold ring on her wrist, (6) the lapis measuring rod and line, and (7) the royal robe of her body—teaching that deep threshold passage requires setting down external titles."
            },
            {
              "heading": "Ereshkigal and the Medicine of Witnessing",
              "body": "Enki's emissaries do not battle Ereshkigal; when she groans 'Oh, my inside!' they reply with compassion, 'O grieving queen, your inside!' Fighting the shadow hardens it; witnessing it without pretense unlocks the gate of return."
            }
          ],
          "sv": [
            {
              "heading": "Venus Åttaåriga Pentagram och Retrograden",
              "body": "Var 584:e dag fullbordar Venus en synodisk cykel med solen och tecknar under åtta år en exakt fembladig ros över zodiaken. Både Inannas åttauddiga stjärna och Venus femuddiga pentagram bär denna himmelska geometri."
            },
            {
              "heading": "De Sju Klädnaderna vid de Sju Portarna",
              "body": "Vid portarna lägger Inanna i tur och ordning av sig: (1) sin krona (*Šugurra*), (2) lapis lazuli-pärlorna vid strupen, (3) bröststenarna, (4) bröstskölden, (5) guldringen om handleden, (6) mätstaven av lapis lazuli och (7) sin kungliga mantel — en påminnelse om att djup förvandling kräver att yttre roller läggs åt sidan."
            },
            {
              "heading": "Ereshkigal och Medkänslans Läkedom",
              "body": "Enkis sändebud strider inte mot Ereshkigal; när hon klagar över sin smärta stannar de och bekräftar hennes sorg. Att strida mot skuggan förhårdnar den; att möta den i sanning öppnar återkomstens port."
            }
          ]
        },
        "items": {
          "tr": [
            "𒈹 İnanna / Ištar (MUL.DIL.BAT): Gökyüzünün Sabah ve Akşam Yıldızı (Venüs); sevgi, sınır ve dönüşüm ilkesi.",
            "Ereshkigal: ‘Büyük Yerin Hanımı’; bastırılmış gerçeği ve yüzleşilmesi gereken içsel gölgeyi temsil eden kız kardeş.",
            "Yedi Kapı ve Neti: Eşik bekçisi Neti’nin koruduğu, egonun yedi katmanının soyulduğu geçiş basamakları.",
            "Lacivert Ölçü Çubuğu ve İpi: İnanna’nın altıncı kapıda bıraktığı, her şeyi kontrol etme ve ölçme alışkanlığı.",
            "Kurgarra ve Galatur: Enki’nin kilden yarattığı, yargılamadan dinleyerek yeraltı kilidini çözen şifa elçileri.",
            "Ammisaduqa Venüs Tableti: Venüs’ün sabah ve akşam yıldızı kavuşumlarını kaydeden MÖ 17. yüzyıl Babil tableti."
          ],
          "en": [
            "𒈹 Inanna / Ištar (MUL.DIL.BAT): Morning and Evening Star (Venus); sovereign of love, boundary, and renewal.",
            "Ereshkigal: 'Queen of the Great Earth'; the subterranean sister embodying unvarnished truth and shadow.",
            "The Seven Gates & Neti: The seven thresholds guarded by Neti where outer personas are laid down.",
            "Lapis Measuring Rod & Line: Surrendered at the sixth gate—the habit of controlling and measuring outcome.",
            "Kurgarra & Galatur: Empathetic emissaries created from the clay of Enki who unlock grief through witnessing.",
            "Venus Tablet of Ammisaduqa: 17th-century BCE cuneiform record of Venus's appearances and disappearances."
          ],
          "sv": [
            "𒈹 Inanna / Ištar (MUL.DIL.BAT): Morgon- och Aftonstjärnan (Venus); kärlekens, gränsens och förnyelsens princip.",
            "Ereshkigal: 'Den Stora Jordens Härskarinna'; systern i djupet som förkroppsligar den osminkade skuggan.",
            "De Sju Portarna & Neti: De sju trösklar där yttre titlar och försvar läggs ned.",
            "Mätstav av Lapis Lazuli: Lämnad vid sjätte porten — vanan att vilja mäta och kontrollera allt.",
            "Kurgarra & Galatur: Medkännande sändebud skapade av Enkis lera som löser sorgen genom lyssnande.",
            "Ammisaduqas Venustavla: Kilskriftstavla från 1600-talet f.Kr. som bokför Venus konjunktioner."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Yedinci Kapıda Bırakılan Yük",
            "steps": [
              "Şu an seni en çok yoran bir konuda ‘kontrol etmeye çalıştığın ölçü çubuğunu’ (6. Kapı) ve ‘dışarıya güçlü görünme zırhını’ (4. Kapı) tespit et.",
              "Kendi kendine dürüstçe sor: ‘Unvanımı, haklılığımı ve savunmamı bir kenara bıraksam, içerideki yalın gerçek (Ereshkigal) bana ne söylüyor?’",
              "İçindeki o yorgun veya kırgın sesi düzeltmeye çalışmadan 5 dakika boyunca yalnızca Kurgarra ve Galatur gibi şefkatle dinle."
            ]
          },
          "en": {
            "title": "Study Note · Laying Down the Burden at the Seventh Gate",
            "steps": [
              "In a matter currently exhausting you, identify the 'measuring rod of control' (6th Gate) and the 'breastplate of outer armor' (4th Gate) you are clutching.",
              "Ask honestly: 'If I set aside my title, my need to be right, and my defenses, what is the bare truth speaking beneath?'",
              "For five minutes, do not try to fix or argue with that inner voice; simply witness it with the quiet steadiness of Enki's emissaries."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Att Lägga Ned Bördan vid Sjunde Porten",
            "steps": [
              "I en fråga som tröttar ut dig just nu, se var du håller fast vid 'kontrollens mätstav' (6:e porten) och 'försvarsskölden' (4:e porten).",
              "Fråga ärligt: 'Om jag lägger åt sidan min roll och mitt försvar, vad säger den nakna sanningen där under?'",
              "Lyssna till den inre rösten under fem minuter utan att försöka rätta till den — med samma stilla närvaro som Enkis sändebud."
            ]
          }
        },
        "closing": {
          "tr": "Akşam yıldızı olarak batmaktan korkan, şafak yıldızı olarak doğamaz.",
          "en": "Whoever fears to set as the Evening Star cannot rise anew as the Star of Dawn.",
          "sv": "Den som fruktar att gå ned som Aftonstjärna kan inte stiga upp på nytt som Gryningsstjärna."
        },
        "ctaHref": "/astroloji/venus-retrosu",
        "ctaLabel": {
          "tr": "Venüs Retrosu Notunu Oku",
          "en": "Read Venus Retrograde Note",
          "sv": "Läs Anteckningen om Venus Retrograd"
        },
        "image": "/mezopotamya/inanna-yedi-kapi.jpg"
      },
      {
        "slug": "ay-tanrisi-sin",
        "glyph": "𒀭𒌍",
        "title": {
          "tr": "Nanna / Sîn: Harran’dan Ur’a Ay’ın Otuz Günü",
          "en": "Nanna / Sîn: The Thirty Lunar Days from Ur to Harran",
          "sv": "Nanna / Sîn: Månens Trettio Dagar från Ur till Harran"
        },
        "subtitle": {
          "tr": "Hilal kayığı, kutsal 30 sayısı, Harran tapınağı ve Karanlık Ay (Bubbulu) eşiği.",
          "en": "The crescent barge, the sacred number 30, the sanctuary of Harran, and the Dark Moon (Bubbulu).",
          "sv": "Månskärans båt, det heliga talet 30, helgedomen i Harran och Mörkmånens (Bubbulu) tröskel."
        },
        "summary": {
          "tr": "Ur ve Anadolu Harran’daki Ay kültü (Nanna/Sîn), çivi yazısında 30 sayısı (𒀭𒌍), Šapattu (Dolunay) ve Bubbulu (Karanlık Ay).",
          "en": "The Moon cult of Ur and Anatolian Harran (Nanna/Sîn), cuneiform '30' (𒀭𒌍), Šapattu (Full Moon), and Bubbulu (Dark Moon).",
          "sv": "Månkulten i Ur och anatoliska Harran (Nanna/Sîn), kilskriftens '30' (𒀭𒌍), Šapattu (Fullmåne) och Bubbulu (Mörkmåne)."
        },
        "paragraphs": {
          "tr": [
            "Mezopotamya’da zamanın babası Güneş değil, Ay’dır. Sümerce ‘Nanna’ (veya Suen), Akadca ‘Sîn’ olarak adlandırılan Ay Tanrısı’nın çivi yazılı ideogramı ‘𒀭𒌍’ (DINGIR.30) şeklindedir; yani ‘Tanrı Otuz’. Çünkü bir kameri ayın otuz günü ve otuz gecesi doğrudan onun gökyüzü nehrinde yüzen gümüş hilal kayığıyla (Má-gur₈) ölçülür.",
            "Ay kültünün antik dünyada iki büyük başkenti vardı: Biri Güney Mezopotamya’daki Ur kenti (Ekišnugal Zigguratı), diğeri ise bugün Türkiye sınırları içinde, Şanlıurfa’da yer alan kadim **Harran** kentiydi (Eḫulḫul — ‘Sevinç Evi’ Tapınağı). Babil’in son kralı Nabonidus’un annesi Adad-guppi, Harran’daki Sîn tapınağının başrahibesiydi ve Harran binlerce yıl boyunca Anadolu’da yıldız ve Ay bilgeliğinin merkezi olarak kaldı.",
            "Babil takviminde her ayın dört kutsal durağı vardı: 1. gün ilk ince hilalin görünmesiyle ay başlardı; 7. gün ilk dördün eşiğiydi; 15. gün (‘Šapattu’ — ‘kalbin dinlendiği gün’) Ay ile Güneş’in ufukta karşılıklı durduğu Dolunay günüydü.",
            "Ayın 28. veya 29. günü ise Ay gökyüzünden tamamen çekilip üç gece karanlığa bürünürdü. Bu karanlık ay gününe Akadca ‘Bubbulu’ (Kayboluş Günü) denirdi. Bubbulu günlerinde büyük ticari işlere başlanmaz, içsel muhasebe yapılır, atalar anılır ve yeni hilal doğana kadar sessizlik korunurdu."
          ],
          "en": [
            "In Mesopotamian cosmology, the father of time is the Moon rather than the Sun. Known in Sumerian as *Nanna* (or *Suen*) and in Akkadian as *Sîn*, the Moon God was written in cuneiform as `𒀭𒌍` (*DINGIR.30*)—literally 'God Thirty', for the thirty nights of the lunar cycle measured by his luminous crescent barge (*Má-gur₈*).",
            "Two great cities anchored his veneration across antiquity: *Ur* in southern Sumer (the ziggurat *Ekišnugal*) and **Harran** in southeastern Anatolia (modern Şanlıurfa, home of the temple *Eḫulḫul*, 'House of Rejoicing'). Adad-guppi, mother of Babylon's last king Nabonidus, served as high priestess of Sîn at Harran, which remained an unbroken center of astral philosophy for millennia.",
            "The Babylonian lunar month pivoted upon four key stations: the 1st day (first sighting of the thin crescent at sunset), the 7th day (first quarter), and the 15th day (*Šapattu*, 'the day the heart rests'—when full Moon and setting Sun stand face to face on opposite horizons).",
            "On the 28th or 29th day, the Moon vanished completely into darkness for up to three nights. This dark-moon threshold was called *Bubbulu* ('Day of Disappearance'). During *Bubbulu*, external enterprise paused in favor of inward reckoning, ancestral offerings, and quiet preparation before the new crescent returned."
          ],
          "sv": [
            "I mesopotamisk kosmologi är Månens gud tidens fader. Känd på sumeriska som *Nanna* och på akkadiska som *Sîn*, skrevs hans namn i kilskrift som `𒀭𒌍` (*DINGIR.30*) — bokstavligen 'Gud Trettio', efter månvarvets trettio nätter i hans lysande månskäre-båt (*Má-gur₈*).",
            "Två stora städer utgjorde hans huvudhelgedomar under antiken: *Ur* i södra Mesopotamien och **Harran** i sydöstra Anatolien (dagens Şanlıurfa, hem för templet *Eḫulḫul*, 'Glädjens Hus'). Harran förblev i årtusenden ett levande centrum för stjärn- och månvisdom i Anatolien.",
            "Den babyloniska månmånaden vilade på fyra hållpunkter: den 1:a dagen (den första tunna nymånen i skymningen), den 7:e dagen (första kvarteret) och den 15:e dagen (*Šapattu*, 'dagen då hjärtat vilar' — fullmånen då sol och måne står mitt emot varandra).",
            "På den 28:e eller 29:e dagen försvann månen helt i mörker under upp till tre nätter. Denna mörkmånedag kallades *Bubbulu* ('Försvinnandets dag') — en tid för inre rannsakan och stillhet inför den nya skärans återkomst."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Harran ve Eḫulḫul (‘Sevinç Evi’) Mirası",
              "body": "Yukarı Mezopotamya ve Anadolu’nun kesişim noktası olan Harran, Asur ve Babil metinlerinde Sîn’in yeryüzündeki en kadim tahtı olarak geçer. Harran geleneğinde Ay, gökyüzünden gelen kozmik akışı insan zihnine ve yeryüzü sularına aktaran ilk aynadır."
            },
            {
              "heading": "Šapattu (15. Gün) ve Güneş-Ay Dengesi",
              "body": "Kameri ayın ortasında (14./15. gece) Güneş batıdan batarken Dolunay doğudan yükselir; bu an Babil tabletlerinde ‘Sîn ve Šamaš’ın birbirini gördüğü gün’ olarak kaydedilir. Zihin (Ay) ile iradenin (Güneş) tam dengede olduğu bu gece berrak karar gecesidir."
            },
            {
              "heading": "Bubbulu: Karanlık Ayın Üç Gecesi",
              "body": "Ay gökyüzünde görünmediğinde Nanna/Sîn’in yeraltı dünyasına inip ölülerin ve yaşayanların hükümlerini tarttığına inanılırdı. Bu üç gece dışarıya enerji harcama değil, içerdeki tortuyu temizleme ve dinlenme zamanıdır."
            }
          ],
          "en": [
            {
              "heading": "The Heritage of Harran and Eḫulḫul ('House of Rejoicing')",
              "body": "Standing at the crossroads of Anatolia and Upper Mesopotamia, Harran was revered in Assyrian and Babylonian inscriptions as Sîn's ancient seat. In the Harranian tradition, the Moon acts as the primary mirror translating celestial order into earthly waters and human perception."
            },
            {
              "heading": "Šapattu (The 15th Day) and Solar-Lunar Equilibrium",
              "body": "At mid-month, as the Sun sets in the west while the Full Moon rises in the east, Babylonian observers recorded that 'Sîn and Šamaš behold one another'. This opposition marks equilibrium between conscious will (Sun) and reflective soul (Moon)."
            },
            {
              "heading": "Bubbulu: The Three Nights of the Dark Moon",
              "body": "When the Moon vanished from the sky at month's end, Sîn was said to descend to weigh judgments in stillness. These dark nights call for pulling energy inward, clearing unfinished business, and resting before the new cycle."
            }
          ],
          "sv": [
            {
              "heading": "Arvet från Harran och Eḫulḫul ('Glädjens Hus')",
              "body": "Beläget i skärningspunkten mellan Anatolien och övre Mesopotamien vördades Harran som Sîns uråldriga säte. Här betraktades månen som den spegel som förmedlar himlens ordning till jordens vatten."
            },
            {
              "heading": "Šapattu (15:e Dagen) och Balansen mellan Sol och Måne",
              "body": "Vid mitten av månaden, när solen går ned i väster samtidigt som fullmånen stiger i öster, antecknade babyloniska skrivare att 'Sîn och Šamaš ser varandra'. Detta är jämviktens natt."
            },
            {
              "heading": "Bubbulu: Mörkmånens Tre Nätter",
              "body": "När månen är osynlig vid månadens slut ansågs Sîn stiga ned i stillhet. Dessa tre nätter är vigda åt vila, rensning och tystnad före den nya skäran."
            }
          ]
        },
        "items": {
          "tr": [
            "𒀭𒌍 Nanna / Sîn (DINGIR.30): Otuz günlük kameri döngünün, bilgeliğin ve zaman ölçüsünün efendisi.",
            "Harran (Eḫulḫul): Anadolu’da (Şanlıurfa) binlerce yıl yaşayan, Ay Tanrısı Sîn’in ‘Sevinç Evi’ tapınağı.",
            "Má-gur₈ (Hilal Kayığı): Ay’ın gece göğünde yıldızlar arasında süzülen boynuzlu gümüş teknesi.",
            "Šapattu (15. Gün): Güneş ile Dolunay’ın ufukta birbirine baktığı denge ve sükunet günü.",
            "Bubbulu (28.–29. Gün): Ay’ın gökyüzünden çekildiği karanlık ay eşiği; içe dönüş ve muhasebe zamanı.",
            "Šamaš (Utu / Güneş): Sîn’in oğlu; gündüz her şeyi aydınlatan hakikat, adalet ve netlik ilkesi."
          ],
          "en": [
            "𒀭𒌍 Nanna / Sîn (DINGIR.30): Lord of the thirty-day lunar cycle, wisdom, and the measure of time.",
            "Harran (Eḫulḫul): The ancient Anatolian sanctuary of Sîn ('House of Rejoicing') in modern Şanlıurfa.",
            "Má-gur₈ (Crescent Barge): The horned silver boat in which the Moon sails across the night sky.",
            "Šapattu (15th Day): Full-moon equilibrium when Sun and Moon behold one another across the horizon.",
            "Bubbulu (28th–29th Day): The Dark Moon threshold of disappearance; time for stillness and inward reckoning.",
            "Šamaš (Utu / Sun): Son of Sîn; the all-seeing solar principle of truth, clarity, and justice."
          ],
          "sv": [
            "𒀭𒌍 Nanna / Sîn (DINGIR.30): Herre över den trettiodagar långa måncykeln och tidens mått.",
            "Harran (Eḫulḫul): Sîns uråldriga anatoliska helgedom ('Glädjens Hus') i dagens Şanlıurfa.",
            "Má-gur₈ (Månskärans Båt): Den behornade silverbåt i vilken månen färdas över natthimlen.",
            "Šapattu (15:e Dagen): Fullmånens jämviktsdag då sol och måne ser varandra över horisonten.",
            "Bubbulu (28:e–29:e Dagen): Mörkmånens tröskel; tid för stillhet och inre rannsakan.",
            "Šamaš (Utu / Solen): Sîns son; solprincipen för sanning, klarhet och rättvisa."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Bubbulu ve Yeni Hilal Gözlemi",
            "steps": [
              "Her kameri ayın son iki gecesinde (Karanlık Ay / Bubbulu) yeni bir karar almaktan veya tartışmaya girmekten kaçın; masanı ve odanı sadeleştir.",
              "Yeniaydan sonraki ilk akşam gün batımından hemen sonra batı ufkuna bakarak ince gümüş hilali (Má-gur₈) kendi gözünle yakala.",
              "O otuz günlük döngü için yalnızca tek bir ana niyet belirle ve 15. gece (Šapattu / Dolunay) geldiğinde bu niyetin ne kadar olgunlaştığını tart."
            ]
          },
          "en": {
            "title": "Study Note · Observing Bubbulu and the First Crescent",
            "steps": [
              "During the final two dark nights of the lunar cycle (*Bubbulu*), refrain from forcing new ventures; clear your desk and quiet your room.",
              "On the evening after the astronomical new moon, look toward the western horizon just after sunset to spot the first thin silver crescent (*Má-gur₈*).",
              "Set a single clear intention for the thirty-day cycle, and weigh its progress on the 15th night (*Šapattu* / Full Moon)."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Att Följa Bubbulu och Första Månskäran",
            "steps": [
              "Under månvarvets två sista mörka nätter (*Bubbulu*), avstå från att tvinga fram nya beslut; rensa ditt bord och håll rummet stilla.",
              "Kvällen efter nymåne, se mot västra horisonten strax efter solnedgången för att fånga den första tunna månskäran (*Má-gur₈*).",
              "Sätt en enda klar avsikt för de kommande trettio dagarna och pröva dess mognad vid fullmånen (*Šapattu*)."
            ]
          }
        },
        "closing": {
          "tr": "Ay küçülürken korkmaz, çünkü karanlıkta kayboluşunun üçüncü gecesinde yeniden hilal olacağını bilir.",
          "en": "The waning Moon does not fear its darkening, knowing that on the third night of stillness it rises again as a crescent.",
          "sv": "Den avtagande månen fruktar inte mörkret, ty den vet att den på tredje natten stiger upp på nytt som skära."
        },
        "image": "/mezopotamya/ay-tanrisi-sin.jpg"
      },
      {
        "slug": "marukka-maruttuku",
        "glyph": "𒀀",
        "title": {
          "tr": "Marukka, Maruttuku ve Elli İsim (Enuma Eliş)",
          "en": "Marukka, Maruttuku, and the Fifty Names (Enuma Eliš)",
          "sv": "Marukka, Maruttuku och de Femtio Namnen (Enuma Eliš)"
        },
        "subtitle": {
          "tr": "İsimsiz olan var olmamıştır: Sözün, mührün ve adlandırmanın kozmik ağırlığı.",
          "en": "What is unnamed has not yet come into being: the cosmic weight of name, seal, and utterance.",
          "sv": "Det namnlösa har ännu inte trätt i tillvaro: namnets, sigillets och ordets kosmiska tyngd."
        },
        "summary": {
          "tr": "Enuma Eliş’in 6. ve 7. tabletlerindeki Elli İsim, Marukka ve Maruttuku unvanları ve Šumu (İsim = Varlık) yasası.",
          "en": "The Fifty Names in Tablets VI–VII of Enuma Eliš, the epithets Marukka and Maruttuku, and the law of Šumu (Name = Existence).",
          "sv": "De Femtio Namnen i tavla VI–VII av Enuma Eliš, epiteten Marukka och Maruttuku samt lagen om Šumu (Namn = Existens)."
        },
        "paragraphs": {
          "tr": [
            "Babil yaratılış destanı ‘Enuma Eliş’ (Adını ilk iki kelimesinden alır: ‘Vaktiyle yukarıda...’) çok çarpıcı bir felsefi cümleyle başlar: ‘Vaktiyle yukarıda gökyüzü henüz adlandırılmamışken, aşağıda yeryüzünün bir ismi henüz söylenmemişken...’ Mezopotamya düşüncesinde bir şeyin gerçekten var olması ve düzene girmesi için onun gerçek isminin (Akadca: Šumu) bilinmesi ve telaffuz edilmesi gerekir.",
            "Destanın 6. ve 7. tabletlerinde, kaosu (Tiamat’ı) düzene kavuşturup yıldız duraklarını kuran Marduk’a göksel meclis tarafından ‘Elli İsim’ (Ḫamšā Šumī) verilir. Bu elli isim rastgele övgü sıfatları değildir; her biri evrendeki ayrı bir kozmik işlevi, yaratım ve koruma yasasını tanımlayan elli mühürdür.",
            "Altıncı tabletin 133–137. satırlarında bu isimlerden ikisi yan yana parlar: **Marukka** (‘Gerçekten her şeyi yaratan, Anunnaki’nin kalbini ferahlatan ve ruhları yatıştıran’) ve **Maruttuku** (‘Ülkenin, kentin ve halkın sarsılmaz dayanağı, koruyucu kalesi ve sığınağı’). Birincisi kaostan düzen kuran yaratıcı nefesi, ikincisi ise kurulan düzeni dış fırtınalara karşı koruyan kalkanı temsil eder.",
            "Yedinci tabletin sonunda katipler şu notu düşer: ‘Bu elli isim hafızada tutulmalı, bilge kişi (Mūdû) bunları birlikte düşünmeli, baba oğluna öğretmeli ve çobanın, yöneticinin kulağı bu isimlere açık olmalıdır.’ Çünkü bir kuvvetin adını doğru bilmek, o kuvvetin doğasıyla uyum içinde yürümektir."
          ],
          "en": [
            "The Babylonian creation epic *Enuma Eliš* (named from its opening words, 'When on high...') begins with a foundational philosophical premise: *'When on high the heavens had not yet been named, and below the firm ground had not been called by name...'* In Mesopotamian thought, for anything to take ordered form, its true name (Akkadian *Šumu*) must be spoken and established.",
            "In Tablets VI and VII of the epic, after cosmic order and the stations of the stars are established out of primordial chaos (*Tiamat*), the assembly of the gods proclaims the 'Fifty Names' (*Ḫamšā Šumī*) of Marduk. These fifty names are not mere honorifics; each is a functional seal defining a specific law of creation, governance, and protection.",
            "In Tablet VI (lines 133–137), two of these sacred epithets stand side by side: **Marukka** ('Verily the god who created all things, who gladdened the heart of the Anunnaki and appeased their spirits') and **Maruttuku** ('Support of the land, the city, and its people—the fortress and refuge of protection'). The first embodies creative ordering; the second embodies unshakeable defense.",
            "At the close of Tablet VII, the scribes record a solemn instruction: *'Let the Fifty Names be held in memory; let the wise (*mūdû*) ponder them together, let the father repeat them and teach them to his son.'* To know the true name of a force is to stand in conscious covenant with its nature."
          ],
          "sv": [
            "Det babyloniska skapelseeposet *Enuma Eliš* ('När i höjden...') inleds med en grundläggande filosofisk sats: *'När i höjden himlen ännu inte hade nämnts vid namn, och nedanför den fasta jorden ännu inte kallats vid namn...'* I mesopotamiskt tänkande måste varje ting ha sitt sanna namn (akkadiska *Šumu*) för att äga ordnad existens.",
            "I eposets sjätte och sjunde tavlor, efter att kosmisk ordning och stjärnornas stationer har upprättats ur urkaos (*Tiamat*), förkunnar gudarnas råd Marduks 'Femtio Namn' (*Ḫamšā Šumī*). Dessa femtio namn är funktionella insegel som beskriver skapelsens och beskyddets lagar.",
            "I sjätte tavlan (rad 133–137) lyser två av dessa namn sida vid sida: **Marukka** ('Sannerligen den som skapade allting och gladde Anunnakis hjärtan') och **Maruttuku** ('Landets, stadens och folkets stöd — beskyddets fästning och tillflykt'). Det första representerar skapande ordning, det andra orubbligt skydd.",
            "I slutet av sjunde tavlan skriver de lärda: *'Må dessa femtio namn bevaras i minnet; må de visa (*mūdû*) begrunda dem tillsammans, och må fadern lära dem till sin son.'*"
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Šumu: İsim ve Varlık Özdeşliği",
              "body": "Babil’de bir tapınak, bir şehir kapısı veya bir çalışma nesnesi bile sıradan bırakılmaz; ona kozmik işlevini bildiren törensel bir isim verilirdi (örneğin Babil’in İştar Kapısı’nın gerçek adı: ‘Ištar-sākipat-tēbîša’ — ‘İştar Saldıranı Geri Püskürtür’). Bir durumu doğru adlandırmak, onun üzerindeki belirsizliği kaldırır."
            },
            {
              "heading": "Marukka ve Maruttuku Dengesi",
              "body": "İnsan hayatında da bu iki ilke birlikte çalışır: Marukka ilkesi dağınık düşüncelerden yeni bir eser, düzen ve huzur kurma gücüdür; Maruttuku ilkesi ise kurduğun bu içsel kaleyi dış müdahalelere karşı koruyan sınırdır."
            },
            {
              "heading": "Tutu ve Šazu: Yenileyen ve Kalbi Bilen",
              "body": "Elli İsim arasında yer alan ‘Tutu’ kırılanı onaran ve yorgun olanı yenileyen büyülü sözü; ‘Šazu’ ise ‘tanrıların ve insanların kalbini bilen, yalan söyleyeni gören’ vicdan ve hakikat gözünü temsil eder."
            }
          ],
          "en": [
            {
              "heading": "Šumu: The Identity of Name and Essence",
              "body": "In Babylon, every temple, city wall, and threshold gate bore a ceremonial name declaring its cosmic function (for example, the formal name of the Ishtar Gate was *Ištar-sākipat-tēbîša*—'Ishtar Overthrows Campaigners Against Her'). To name a thing accurately is to strip away confusion."
            },
            {
              "heading": "The Balance of Marukka and Maruttuku",
              "body": "These twin principles operate within human work as well: *Marukka* is the creative capacity to bring lucid order and peace out of scattered fragments; *Maruttuku* is the fortress boundary that shields what has been built."
            },
            {
              "heading": "Tutu and Šazu: Renewal and Witness of the Heart",
              "body": "Among the Fifty Names, *Tutu* governs the restorative utterance that renews what is weary, while *Šazu* ('Who Knows the Heart') embodies the discerning eye from which no falsehood can hide."
            }
          ],
          "sv": [
            {
              "heading": "Šumu: Enheten mellan Namn och Väsen",
              "body": "I Babylon bar varje tempel, mur och stadsport ett ceremoniellt namn som angav dess kosmiska uppgift. Att benämna något exakt är att skingra oklarhet."
            },
            {
              "heading": "Balansen mellan Marukka och Maruttuku",
              "body": "Dessa två principer verkar även i människans liv: *Marukka* är den skapande kraften som bygger ordning och frid ur kaos; *Maruttuku* är den fasta gräns som skyddar det uppbyggda."
            },
            {
              "heading": "Tutu och Šazu: Förnyelse och Hjärtats Vittne",
              "body": "Bland de Femtio Namnen styr *Tutu* det läkande ord som förnyar det slitna, medan *Šazu* ('Den som känner hjärtat') representerar sanningens klara blick."
            }
          ]
        },
        "items": {
          "tr": [
            "𒀀 Enuma Eliş (I:1–2): ‘Yukarıda gökyüzü henüz adlandırılmamışken...’ — sözün ve adlandırmanın ilk yasası.",
            "Marukka (VI:133): ‘Her şeyi yaratan ve kalpleri ferahlatan’; kaostan düzen ve dinginlik çıkaran ilke.",
            "Maruttuku (VI:135): ‘Ülkenin sığınağı ve koruyucu kalesi’; kurulan alanı koruyan sarsılmaz kalkan.",
            "Asalluhi (VII:15): Göksel ışığın ve arındırıcı bilgelik sözünün insan dünyasındaki rehberi.",
            "Tutu (VII:9): Dağılanı yeniden kuran, yorgun düşen ruhu onaran yenilenme nefesi.",
            "Šazu (VII:35): ‘Kalbi Bilen’; niyetin saflığını tartan ve içsel doğruluğu koruyan ilke."
          ],
          "en": [
            "𒀀 Enuma Eliš (I:1–2): 'When on high the heavens had not been named...'—the primal law of naming.",
            "Marukka (VI:133): 'Creator of all things who gladdens the heart'; bringing calm order out of chaos.",
            "Maruttuku (VI:135): 'Refuge and fortress of the land'; the unshakeable shield guarding the threshold.",
            "Asalluhi (VII:15): Guide of purifying wisdom and luminous counsel within the human realm.",
            "Tutu (VII:9): Restorer of the weary and rebuilder of what has been scattered.",
            "Šazu (VII:35): 'Knower of the Heart'; weighing the purity of intention and inward truth."
          ],
          "sv": [
            "𒀀 Enuma Eliš (I:1–2): 'När i höjden himlen ännu inte nämnts vid namn...' — benämnandets urprincip.",
            "Marukka (VI:133): 'Skapare av allting som gläder hjärtat'; den kraft som skapar frid och ordning ur kaos.",
            "Maruttuku (VI:135): 'Landets tillflykt och fästning'; den fasta sköld som vaktar gränsen.",
            "Asalluhi (VII:15): Den renande visdomens och det klara rådets vägledare.",
            "Tutu (VII:9): Den som återuppbygger det splittrade och förnyar den trötte.",
            "Šazu (VII:35): 'Den som känner hjärtat'; väktare av avsiktens renhet och inre sanning."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Adlandırma ve Sınır Mühürü",
            "steps": [
              "Zihnini bulandıran belirsiz bir kaygıyı tek bir gerçekçi cümleyle adlandır (Šumu): Adı konulan şey kaos olmaktan çıkar.",
              "Bu konuda neyi sıfırdan kurman gerektiğini ‘Marukka’ (Kurucu Düzen) başlığı altına yaz.",
              "Kurduğun bu alanı hangi dış etkilerden koruman gerektiğini ise ‘Maruttuku’ (Koruyucu Sınır) başlığı altına yazarak kararını mühürle."
            ]
          },
          "en": {
            "title": "Study Note · Naming and the Seal of Boundary",
            "steps": [
              "Give an exact, honest name (*Šumu*) in one sentence to a vague anxiety clouding your mind; what is clearly named ceases to be formless chaos.",
              "Under the heading *Marukka* (Creative Order), write down what you are choosing to build in this matter.",
              "Under the heading *Maruttuku* (Protective Fortress), write down the exact boundary that will guard what you build."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Benämnande och Gränsens Sigill",
            "steps": [
              "Ge ett exakt, ärligt namn (*Šumu*) i en enda mening åt en oklar oro; det som benämns klart upphör att vara formlöst kaos.",
              "Under rubriken *Marukka* (Skapande Ordning), skriv ned vad du väljer att bygga upp.",
              "Under rubriken *Maruttuku* (Skyddande Fästning), skriv ned den tydliga gräns som ska skydda ditt arbete."
            ]
          }
        },
        "closing": {
          "tr": "İsmi konulmamış korku büyür; adını doğru koyduğun her güç ise seninle konuşur.",
          "en": "Unnamed fear grows in the dark; every force called by its true name enters into dialogue.",
          "sv": "Namnlös fruktan växer i mörkret; varje kraft som nämns vid sitt sanna namn träder i samtal."
        },
        "image": "/mezopotamya/marukka-elli-isim.jpg"
      },
      {
        "slug": "apkallu-ve-muhur",
        "glyph": "𒉣",
        "title": {
          "tr": "Yedi Bilge Apkallu, Silindir Mühür ve Šurpu",
          "en": "The Seven Sages (Apkallu), Cylinder Seals, and Šurpu",
          "sv": "De Sju Visa (Apkallu), Cylindersigill och Šurpu"
        },
        "subtitle": {
          "tr": "Adapa’nın bilgeliği, taş mühür (Kunukku) ve düğümleri çözen arınma.",
          "en": "The wisdom of Adapa, the stone seal (Kunukku), and the unbinding of knots.",
          "sv": "Adapas visdom, stensigillet (Kunukku) och upplösandet av knutar."
        },
        "summary": {
          "tr": "Eridu’nun Yedi Bilgesi (Apkallu), kişisel silindir mühür (Kunukku) ve Šurpu tabletlerindeki soğan/yün çözme pratiği.",
          "en": "The Seven Antediluvian Sages of Eridu (Apkallu), personal cylinder seals (Kunukku), and the onion/wool unbinding rite of Šurpu.",
          "sv": "Eridus sju urtida visa (Apkallu), personliga cylindersigill (Kunukku) och Šurpu-tavlornas rit för att lösa knutar."
        },
        "paragraphs": {
          "tr": [
            "Mezopotamya geleneğinde tufandan önce insanlığa yazıyı, gökbilimi, mimariyi, hekimliği ve ölçü sanatını öğreten yedi ilksel bilgeye ‘Apkallu’ (Sümerce: Abgal) adı verilir. Enki tarafından Eridu’nun derin sularından (Abzu’dan) gönderilen bu yedi bilgenin ilki **Adapa**’dır (Yunan kaynaklarında Oannes olarak geçer). Asur kabartmalarında elinde kozalak (arındırıcı serpme aracı) ve su kovası (banduddû) taşıyan kanatlı veya balık pelerinli bilgeler doğrudan Apkallu’lardır.",
            "Antik Babil ve Asur’da her özgür insanın boynunda veya elbisesinin iğnesinde taşıdığı taş bir **Silindir Mühür (Kunukku)** vardı. Lacivert taşı (lapis lazuli), akik, hematit veya kaya kristalinden oyulan bu mühür yalnızca hukuki bir imza değil, kişinin ruhsal kimliği ve koruyucu tılsımıydı. Bir rüyada mührünü kaybetmek kimliğini kaybetmek, mührünü sağlam tutmak ise iradesine sahip çıkmak sayılırdı.",
            "Mezopotamya’nın en etkileyici arınma metinlerinden biri de dokuz tabletlik **Šurpu** (‘Yakma / Çözme’) serisidir. Kişi bilerek veya bilmeyerek verdiği bir sözün, tutulan bir kinin ya da ağır bir yemin düğümünün (Māmītu) altında ezildiğinde Šurpu ritüeli uygulanırdı.",
            "Šurpu’nun 5. ve 6. tabletlerinde uygulayıcı eline katmanlı bir soğan, bir hurma salkımı veya eğrilmiş bir yün yumağı alır ve katmanları tek tek soyarak şu sözleri söyler: ‘Tıpkı bu soğanın kabuklarının soyulup bir daha birleşmeyeceği gibi, tıpkı bu bükülmüş yünün çözülüp ham haline döndüğü gibi; içimdeki düğüm, yorgunluk ve bağ da çözülsün.’"
          ],
          "en": [
            "In Mesopotamian tradition, the arts of writing, astronomy, architecture, medicine, and measure were transmitted before the Flood by seven primordial sages known as the *Apkallu* (Sumerian *Abgal*). Sent by Enki from the deep waters of Eridu, the foremost of these seven sages was **Adapa** (recorded by Berossus in Greek as *Oannes*). On Assyrian palace reliefs, the figures holding a purifier cone (*mullilu*) and water bucket (*banduddû*) represent the protective Apkallu.",
            "Every person of standing in Babylon and Assyria wore a carved stone **Cylinder Seal (*Kunukku*)** suspended on a cord at the neck or pinned to the garment. Engraved in lapis lazuli, carnelian, hematite, or rock crystal, the *kunukku* was far more than a legal signature; it was an extension of personal identity and a protective talisman rolled into wet clay to seal one's word.",
            "Among the most practical ritual corpora of Mesopotamia is the nine-tablet series **Šurpu** ('Burning / Unbinding'). When a person felt weighed down by an unspoken resentment, a broken oath (*māmītu*), or an energetic knot, the *Šurpu* rite was performed.",
            "In Tablets V–VI of *Šurpu*, the practitioner holds a layered onion, a cluster of dates, or a strand of spun wool, peeling or untwisting it piece by piece while reciting: *'Just as this onion is peeled and its skins shall never return to the bulb, just as this spun wool is untwisted... so may the knot, the oath, and the constriction be unbound.'*"
          ],
          "sv": [
            "I mesopotamisk tradition förmedlades skrivkonst, astronomi, arkitektur, läkekonst och mått före floden av sju urtida visa kallade *Apkallu* (sumeriska *Abgal*). Sända av Enki från Eridus djupa vatten var den främste av dessa sju **Adapa** (hos Berossos kallad *Oannes*). På assyriska reliefer syns Apkallu bära reningskotte (*mullilu*) och vattenhink (*banduddû*).",
            "Varje fri människa i Babylon och Assyrien bar ett ristat **Cylindersigill (*Kunukku*)** av lapis lazuli, karneol eller hematit kring halsen eller fäst vid dräkten. Sigillet var inte bara en juridisk namnteckning i våt lera, utan en förlängning av personens identitet och ett beskyddande amulet.",
            "En av Mesopotamiens mest konkreta reningstexter är serien **Šurpu** ('Förbränning / Upplösning') om nio tavlor. När en människa tyngdes av ett obrutet agg, en ed (*māmītu*) eller en inre knut utfördes *Šurpu*-riten.",
            "I tavla V–VI av *Šurpu* tar utövaren en lök eller en tvinnad ulltråd, skalar eller löser upp den lager för lager och uttalar: *'Liksom denna lök skalas och dess skal aldrig mer återvänder till roten, liksom denna tvinnade ull löses upp... så må knuten och tyngden lösas.'*"
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Kozalak (Mullilu) ve Su Kovası (Banduddû)",
              "body": "Apkallu kabartmalarında sağ elde tutulan çam/hurma kozalağı (mullilu) odaklanmış yaşam tohumunu ve arındırmayı, sol elde tutulan kova (banduddû) ise Abzu’nun bilgelik suyunu simgeler. Sağ el eylemi, sol el kaynağı taşır."
            },
            {
              "heading": "Kunukku: Kişisel Taş Mühür ve Lapis Lazuli",
              "body": "Mezopotamya’da en değerli mühür taşı, içindeki altın pirit zerrecikleriyle yıldızlı gece göğünü andıran Lapis Lazuli (Lacivert Taşı / Akadca: Uqnû) idi. Kişi kil tablete mührünü bastığında kendi adını ve sorumluluğunu toprağa kazımış olurdu."
            },
            {
              "heading": "Šurpu: Katmanları Soyarak Düğüm Çözmek",
              "body": "Zihinsel bir düğümü yalnızca düşünerek çözmek zordur; Babil bilgeleri bu yüzden zihinsel çözülüşü somut bir el hareketiyle (soğan kabuğu soymak veya bükülmüş ipi çözmekle) eşleştirmiştir. Eller düğümü çözerken bilinçaltı da yükü bırakır."
            }
          ],
          "en": [
            {
              "heading": "The Purifier Cone (Mullilu) and Bucket (Banduddû)",
              "body": "In Apkallu reliefs, the cone held in the right hand (*mullilu*) directs purifying focus and seed-vitality, while the bucket in the left hand (*banduddû*) holds the deep water of the Abzu—uniting source and action."
            },
            {
              "heading": "Kunukku: The Personal Seal and Lapis Lazuli (Uqnû)",
              "body": "The most prized stone for a cylinder seal was Lapis Lazuli (Akkadian *Uqnû*), whose deep blue matrix flecked with golden pyrite mirrored the starry night sky. Rolling one's seal across damp clay anchored personal word into physical matter."
            },
            {
              "heading": "Šurpu: Unbinding Through Physical Action",
              "body": "Because mental knots resist purely abstract thought, Babylonian healers paired spoken intention with a tactile act—peeling an onion skin by skin or untwisting a cord—allowing the nervous system to witness the release physically."
            }
          ],
          "sv": [
            {
              "heading": "Reningskotten (Mullilu) och Vattenhinken (Banduddû)",
              "body": "På Apkallu-relieferna bär höger hand kotten (*mullilu*) som riktar fokus och livskraft, medan vänster hand bär hinken (*banduddû*) med Abzus djupa vatten — källa och handling i samspel."
            },
            {
              "heading": "Kunukku: Det Personliga Sigillet och Lapis Lazuli (Uqnû)",
              "body": "Den mest skattade stenen för ett sigill var Lapis Lazuli (akkadiska *Uqnû*), vars djupblå yta med guldgnistor av pyrit liknade stjärnhimlen. Att rulla sitt sigill över våt lera gav tyngd åt det givna ordet."
            },
            {
              "heading": "Šurpu: Att Lösa Knutar Genom Konkret Handling",
              "body": "Eftersom mentala låsningar sällan släpper av enbart tankekraft förenade babyloniska läkare ordet med en konkret handling — att skala en lök lager för lager eller tvinna upp en tråd."
            }
          ]
        },
        "items": {
          "tr": [
            "𒉣 Apkallu (Abgal): Eridu’dan çıkan, insanlığa uygarlığı ve gökbilimi öğreten yedi tufan-öncesi bilge.",
            "Adapa (Uanna): Yedi bilgenin ilki; bilgelikle donatılmış ilk insan arketipi.",
            "Kunukku (Silindir Mühür): Kişinin kimliğini, sözünü ve koruyucu sembollerini taşıyan taş mühür.",
            "Uqnû (Lapis Lazuli / Lacivert Taşı): Gece göğünü ve yıldızları simgeleyen, Mezopotamya’nın en kutsal mühür taşı.",
            "Šurpu Tabletleri: Yeminleri, kırgınlıkları ve enerji düğümlerini katman katman çözmeye adanmış 9 tabletlik seri.",
            "Lamassu (Šēdu): Saray ve tapınak eşiklerini koruyan, insan başlı, kartal kanatlı ve boğa gövdeli eşik bekçisi."
          ],
          "en": [
            "𒉣 Apkallu (Abgal): The seven antediluvian sages of Eridu who transmitted astronomy, writing, and healing.",
            "Adapa (Uanna): Foremost of the seven sages; archetype of the initiated human knower.",
            "Kunukku (Cylinder Seal): Personal stone seal encoding identity, word, and protective symbols.",
            "Uqnû (Lapis Lazuli): Deep blue stone flecked with pyrite, prized across Mesopotamia as the stone of the night sky.",
            "Šurpu Tablets: Nine-tablet ritual series for unbinding oaths (*māmītu*), resentment, and energetic knots.",
            "Lamassu (Šēdu): Human-headed, eagle-winged bull or lion guardian standing watch at threshold gates."
          ],
          "sv": [
            "𒉣 Apkallu (Abgal): De sju urtida visa från Eridu som förmedlade stjärnkunskap, skrift och läkekonst.",
            "Adapa (Uanna): Den främste av de sju visa; urtypen för den invigde utövaren.",
            "Kunukku (Cylindersigill): Personligt stensigill som bär identitet, löfte och skyddssymboler.",
            "Uqnû (Lapis Lazuli): Djupblå sten med pyritstänk, vördad i Mesopotamien som natthimlens sten.",
            "Šurpu-tavlorna: Nio tavlor för att lösa upp eder (*māmītu*), agg och inre knutar.",
            "Lamassu (Šēdu): Tröskelväktare med människohuvud, örnvingar och tjurkropp."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Šurpu Düğüm Çözme Pratiği",
            "steps": [
              "Eline kısa bir yün veya pamuk ip al; seni sıkıştıran bir sorunu veya eski bir kırgınlığı düşünerek ipe yavaşça üç düğüm at.",
              "Şimdi Šurpu tabletlerindeki ilkeyi uygula: İlk düğümü çözerken ‘Zihnimdeki yükü çözüyorum’, ikinci düğümü çözerken ‘Sözdeki bağı çözüyorum’, üçüncü düğümü çözerken ‘Bu eşiği serbest bırakıyorum’ de.",
              "Düzleşen ipi bir kenara koy ve ellerini soğuk suyla yıkayarak çalışmayı kapat."
            ]
          },
          "en": {
            "title": "Study Note · The Šurpu Cord-Unbinding Practice",
            "steps": [
              "Take a short length of wool or cotton cord; holding in mind a constriction or old resentment, tie three deliberate knots.",
              "Now apply the principle of *Šurpu*: untie the first knot saying 'I unbind the weight in thought,' the second saying 'I unbind the spoken cord,' and the third saying 'I release this threshold.'",
              "Lay the smoothed cord aside and rinse your hands in cool water to seal the release."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Šurpu-övning för att Lösa Knutar",
            "steps": [
              "Ta en kort tråd av ull eller bomull; håll en inre låsning eller ett gammalt agg i tanken och knyt långsamt tre knutar.",
              "Tillämpa nu *Šurpu*-principen: lös den första knuten med orden 'Jag löser tyngden i tanken', den andra med 'Jag löser bandet i ordet' och den tredje med 'Jag frigör denna tröskel.'",
              "Lägg den uträtade tråden åt sidan och skölj händerna i svalt vatten för att avsluta."
            ]
          }
        },
        "closing": {
          "tr": "İnsan kendi elinin attığı düğümü yine kendi eli ve doğru sözle çözer.",
          "en": "The knot tied by the hand is unbound by the hand and the true word.",
          "sv": "Den knut som handen har knutit löses av handen och det sanna ordet."
        },
        "image": "/mezopotamya/apkallu-muhur.jpg"
      },
      {
        "slug": "gilgamis-ve-derinlik",
        "glyph": "𒄑",
        "image": "/mezopotamya/gilgamis-derinlik.jpg",
        "title": {
          "tr": "Gılgamış, Utnapiştim ve ‘Derinliği Gören’",
          "en": "Gilgamesh, Utnapishtim, and 'He Who Saw the Deep'",
          "sv": "Gilgamesh, Utnapishtim och 'Den som Såg Djupet'"
        },
        "subtitle": {
          "tr": "Ša naqba īmuru: On iki tabletlik ölümsüzlük arayışı ve Abzu’daki gençlik otu.",
          "en": "Ša naqba īmuru: The twelve-tablet quest for immortality and the thorny plant of the Abzu.",
          "sv": "Ša naqba īmuru: Den tolv tavlor långa vandringen och den törnbeströdda örten i Abzu."
        },
        "summary": {
          "tr": "Sîn-lēqi-unninni’nin derlediği 12 tabletlik Gılgamış Destanı, Māšu İkiz Dağları, Utnapiştim ve kalp ritmi bitkisi.",
          "en": "The 12-tablet Standard Babylonian Epic compiled by Sîn-lēqi-unninni, Mount Māšu, Utnapishtim, and the Plant of Heartbeat.",
          "sv": "Det babyloniska Gilgamesheposet sammanställt av Sîn-lēqi-unninni, tvillingbergen Māšu, Utnapishtim och Hjärtats Ört."
        },
        "paragraphs": {
          "tr": [
            "Babil’de Gılgamış Destanı’nın resmi adı, birinci tabletin ilk dizesi olan **‘Ša naqba īmuru’** (‘Derinliği / Kaynağı Gören Kişi’) idi. MÖ 1200 civarında rahip ve şifacı katip **Sîn-lēqi-unninni** tarafından on iki kil tablet halinde son şekli verilen bu eser, yalnızca bir kahramanlık masalı değil, insanın ölüm korkusuyla yüzleşip bilgelikle olgunlaşmasının inisiyatik haritasıdır.",
            "Uruk kralı Gılgamış, yabani doğadan gelen ikiz ruhu ve dostu **Enkidu**’yu kaybettikten sonra ölüm gerçeğiyle sarsılır. Ölümsüzlüğün sırrını öğrenmek için tufandan sağ kurtulan tek bilge olan **Utnapiştim**’i (‘Uzakta Duran’) bulmaya yola çıkar. Yolculuğu sırasında Güneş’in her sabah doğup her akşam battığı **Māšu İkiz Dağları**’na ve kapısını Akrep-İnsanların beklediği 12 fersahlık zifiri karanlık tünele ulaşır.",
            "Karanlık tüneli geçip Ölüm Sularını kayıkçı Urşanabi ile aşan Gılgamış’a Utnapiştim önce ‘Yedi gün, yedi gece uyumadan uyanık kal’ sınavını verir; çünkü uykuyu yenemeyen ölümü hiç yenemez. Gılgamış uykuya yenik düşer; ancak Utnapiştim’in eşi merhamet göstererek ona son bir sır verir: Abzu’nun derin sularının dibinde gül gibi dikenli bir bitki (**Şībū issaḫir amēlu** — ‘Yaşlı İnsanı Gençleştiren / Kalp Atışı Bitkisi’) vardır.",
            "Gılgamış ayaklarına ağır taşlar bağlayarak Abzu’nun dibine dalar, elini kanatan bu dikenli otu koparıp yüzeye çıkarır. Ancak dönüş yolunda serin bir pınarda yıkanırken bir yılan otun kokusunu alır, otu yer ve anında eski derisini değiştirir. Gılgamış o an hakikati kavrar: Bedensel ölümsüzlük insana verilmemiştir; insanın ölümsüzlüğü kurduğu eserde (Uruk’un sağlam surlarında), adil yönetiminde ve geride bıraktığı bilgelik taşındadır."
          ],
          "en": [
            "In Babylon, the formal title of the Epic of Gilgamesh was its opening incipit: **'Ša naqba īmuru'** ('He Who Saw the Deep / the Source').Given its canonical twelve-tablet form around 1200 BCE by the scholar-exorcist **Sîn-lēqi-unninni**, the epic is not merely a heroic tale, but an initiatory map of confronting mortality and awakening to wisdom.",
            "After the death of his wild counterpart and companion **Enkidu**, King Gilgamesh of Uruk is shaken by the reality of death. Determined to learn the secret of eternal life, he journeys to the ends of the earth to seek **Utnapishtim** ('He Who Found Life'), the sage who survived the Great Flood. Along the way he reaches the twin peaks of **Mount Māšu**, guarded by Scorpion-Beings, and walks twelve double-hours through pitch darkness along the path of the Sun.",
            "Crossing the Waters of Death with the ferryman Urshanabi, Gilgamesh is tested by Utnapishtim to remain awake for six days and seven nights—for how can one conquer death who cannot even master sleep? Though Gilgamesh fails the vigil, Utnapishtim reveals a final secret at his wife's urging: at the bottom of the subterranean Abzu grows a thorny plant like boxthorn (**Šībū issaḫir amēlu**—'The Old Man Grows Young / Plant of Heartbeat').",
            "Tying heavy stones to his feet, Gilgamesh plunges into the Abzu and plucks the prickly plant. Yet on his return, while bathing in a cool spring, a serpent scents the herb, consumes it, and immediately sheds its skin. Weeping beside the water, Gilgamesh finally understands: physical immortality belongs not to mortals; human permanence lives in what one builds with integrity—the enduring walls of Uruk and the stone tablet of wisdom left behind."
          ],
          "sv": [
            "I Babylon var det officiella namnet på Gilgamesheposet dess inledningsrad: **'Ša naqba īmuru'** ('Den som såg djupet / källan'). Sammanställt på tolv lertavlor omkring 1200 f.Kr. av den lärde skrivaren **Sîn-lēqi-unninni** är verket en invigningskarta över människans möte med dödligheten och mognaden till visdom.",
            "Efter förlusten av sin vän och själsfrände **Enkidu** skakas kung Gilgamesh av Uruk i sina grundvalar. Han beger sig mot världens ände för att söka **Utnapishtim**, den vise som överlevde floden. På vägen når han tvillingbergen **Māšu**, vaktade av skorpionväsen, och vandrar tolv dubbelmil genom fullständigt mörker längs solens underjordiska bana.",
            "Efter att ha korsat Dödens Vatten prövas Gilgamesh av Utnapishtim att hålla sig vaken i sex dagar och sju nätter. När han besegras av sömnen avslöjar Utnapishtim en sista hemlighet: på botten av det djupa Abzu växer en törnbevuxen ört (**Šībū issaḫir amēlu** — 'Den gamle blir ung på nytt').",
            "Gilgamesh binder tunga stenar vid sina fötter, dyker ned i Abzu och hämtar örten. Men på hemvägen, medan han tvättar sig i en sval källa, äter en orm upp örten och ömsar genast skinn. Vid källan inser Gilgamesh sanningen: människans odödlighet ligger inte i evig fysisk ungdom, utan i det bestående verk och den visdom hon lämnar efter sig."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Enkidu ve Sedir Ormanı: Yabani Doğa ile Uygarlığın Dengesi",
              "body": "Enkidu bozkırda ceylanlarla su içen saf doğa insanıdır; Gılgamış ise şehir surlarının içindeki kibirli uygarlıktır. İkisi güreşip yenişemediğinde kardeş olurlar. Çünkü insan yalnızca şehirli akılla ya da yalnızca vahşi içgüdüyle tam olamaz; bilgelik bu iki yarının dostluğundan doğar."
            },
            {
              "heading": "Māšu Dağı’ndaki Akrep-İnsanlar ve 12 Saatlik Karanlık",
              "body": "Dokuzuncu tablette Gılgamış’ın karşılaştığı Akrep-İnsanlar onu öldürmez; niyetinin ciddiyetini tarttıktan sonra dağın kapısını açarlar. Güneş’in geçtiği 12 saatlik zifiri karanlık tünel, insanın dış ışığı kaybettiğinde kendi iç kararlılığıyla yürümesini simgeler."
            },
            {
              "heading": "Sîn-lēqi-unninni’nin Çerçevesi: Başlangıçtaki Sura Dönüş",
              "body": "Destan 1. tablette okuyucuyu Uruk’un pişmiş tuğladan surlarına ve temelindeki lacivert taşı (lapis lazuli) kutuya bakmaya davet ederek başlar; 11. tabletin sonunda Gılgamış yine aynı surlara bakarak teselli bulur. Arayış insanı dünyadan koparmaz; dünyadaki görevine bambaşka bir gözle geri döndürür."
            }
          ],
          "en": [
            {
              "heading": "Enkidu and the Cedar Forest: Nature and City in Balance",
              "body": "Enkidu embodies untamed wilderness drinking beside gazelles, while Gilgamesh embodies the walled city. When they wrestle at the threshold and become brothers, the epic teaches that neither raw instinct nor urban intellect is whole without the other."
            },
            {
              "heading": "The Scorpion-Guardians of Mount Māšu and the Twelve Leagues of Night",
              "body": "In Tablet IX, the Scorpion-Beings at Mount Māšu do not destroy Gilgamesh; after weighing his resolve, they open the mountain gate. Walking twelve double-hours through total darkness mirrors the threshold passage where only inner resolve guides the step."
            },
            {
              "heading": "Sîn-lēqi-unninni's Ring Composition: Returning to the Walls of Uruk",
              "body": "Tablet I invites the reader to climb the baked-brick walls of Uruk and open the copper tablet-box of lapis lazuli; at the end of Tablet XI, Gilgamesh stands before those very same walls in quiet acceptance. The quest returns the seeker to earthly duty with transformed sight."
            }
          ],
          "sv": [
            {
              "heading": "Enkidu och Cederskogen: Balansen mellan Vildmark och Stad",
              "body": "Enkidu förkroppsligar den otämjda naturen medan Gilgamesh representerar stadens murar. När de blir bröder visar eposet att människan behöver både sin ursprungliga natur och sitt ordnande förnuft."
            },
            {
              "heading": "Skorpionväktarna vid Berget Māšu och Tolv Dubbelmil av Mörker",
              "body": "I nionde tavlan prövar skorpionväktarna vid Māšu Gilgameshs avsikt innan de öppnar porten. Vandringen genom tolv timmars kompakt mörker speglar den prövning där endast inre fasthet leder steget."
            },
            {
              "heading": "Återkomsten till Uruks Murar",
              "body": "Första tavlan bjuder läsaren att betrakta Uruks murar och skrinets tavla av lapis lazuli; i slutet av elfte tavlan står Gilgamesh åter framför samma murar med förvandlad blick."
            }
          ]
        },
        "items": {
          "tr": [
            "𒄑 Ša naqba īmuru: ‘Derinliği Gören’; Gılgamış Destanı’nın Babil kütüphanelerindeki orijinal adı.",
            "Sîn-lēqi-unninni: MÖ 1200 civarında destanı 12 tabletlik standart formuna kavuşturan Babil rahip-katibi.",
            "Enkidu: Bozkırda yaratılan, Gılgamış’ın kibrini dengeleyen ve ona kalbin merhametini öğreten yoldaş.",
            "Māšu İkiz Dağları: Güneş’in doğuş ve batış kapısını tutan, Akrep-İnsanların beklediği kozmik sınır.",
            "Utnapiştim: Tufandan önce Enki’nin uyarısıyla gemiyi inşa eden ve nehirlerin ağzında yaşayan bilge.",
            "Kalp Atışı Bitkisi: Abzu’nun dibindeki dikenli ot; bedenin değil, bilincin ve eserin yenilenmesi."
          ],
          "en": [
            "𒄑 Ša naqba īmuru: 'He Who Saw the Deep'—the original Babylonian title of the Epic of Gilgamesh.",
            "Sîn-lēqi-unninni: The Babylonian scholar-exorcist (~1200 BCE) who compiled the twelve-tablet epic.",
            "Enkidu: Companion formed from steppe clay who balances Gilgamesh's pride with wilderness wisdom.",
            "Twin Peaks of Māšu: The horizon mountain guarded by Scorpion-Beings where the Sun enters and exits.",
            "Utnapishtim: The antediluvian sage warned by Enki who dwells at the Mouth of the Rivers.",
            "Plant of Heartbeat: The thorny herb from the bottom of the Abzu symbolizing renewal of spirit."
          ],
          "sv": [
            "𒄑 Ša naqba īmuru: 'Den som såg djupet' — det ursprungliga babyloniska namnet på Gilgamesheposet.",
            "Sîn-lēqi-unninni: Den babyloniske lärde (~1200 f.Kr.) som sammanställde eposets tolv tavlor.",
            "Enkidu: Följeslagaren av stäpplera som balanserar Gilgameshs stolthet med vildmarkens visdom.",
            "Tvillingbergen Māšu: Horisontberget vaktat av skorpionväsen vid solens port.",
            "Utnapishtim: Den vise som räddades undan floden genom Enkis råd.",
            "Hjärtats Ört: Den törniga växten på Abzus botten som symboliserar inre förnyelse."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Uruk’un Surları ve Kalıcı Eser",
            "steps": [
              "Geçici övgü veya kontrol arayışını bir kenara bırakıp kendine şu soruyu sor: ‘Benden geriye kalacak olan gerçek Uruk suru (somut ve dürüst eserim) nedir?’",
              "Hayatında ayaklarına ağırlık bağlayıp derine (Abzu’ya) inmekten çekindiğin, dikenli olduğu için ertelediğin tek bir hakikati belirle.",
              "Bugün o konuda küçük ama kalıcı bir tuğla koy; çünkü Gılgamış’ı ölümsüz kılan koparılan ot değil, pişmiş tuğladan ördüğü sur ve yazdırdığı tablettir."
            ]
          },
          "en": {
            "title": "Study Note · The Walls of Uruk and Enduring Work",
            "steps": [
              "Set aside fleeting praise and ask yourself plainly: 'What is the enduring Wall of Uruk—the honest, tangible work—I am building?'",
              "Identify one prickly truth in your life that requires diving beneath the surface (into the Abzu) rather than skimming the waves.",
              "Lay one solid brick toward that work today; what immortalized Gilgamesh was not the stolen herb, but the baked-brick wall and the inscribed tablet."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Uruks Murar och det Bestående Verket",
            "steps": [
              "Lägg tillfälligt beröm åt sidan och fråga dig själv: 'Vilken är min varaktiga mur i Uruk — det ärliga verk jag bygger?'",
              "Identifiera en törnströdd sanning i ditt liv som kräver att du dyker under ytan (ned i Abzu).",
              "Lägg en fast tegelsten till det arbetet idag; det som gjorde Gilgamesh odödlig var muren och den ristade tavlan."
            ]
          }
        },
        "closing": {
          "tr": "Yılan derisini değiştirir, insan ise geride bıraktığı sözü ve eseriyle yaşar.",
          "en": "The serpent renews its skin, but a human being endures through the integrity of word and work.",
          "sv": "Ormen ömsar sitt skinn, men människan lever vidare genom ordets och verkets redbarhet."
        }
      },
      {
        "slug": "keldani-duzeni-ve-zodyak",
        "glyph": "𒀭Mul",
        "image": "/mezopotamya/keldani-duzeni.jpg",
        "title": {
          "tr": "Babil Gökbilimi, Keldani Düzeni ve Zodyak’ın Doğuşu",
          "en": "Babylonian Astronomy, the Chaldean Order, and the Birth of the Zodiac",
          "sv": "Babylonisk Astronomi, den Kaldeiska Ordningen och Zodiakens Födelse"
        },
        "subtitle": {
          "tr": "MÖ 410 tarihli en eski doğum haritası tableti, 19 yıllık Meton döngüsü ve yedi gezegen.",
          "en": "The oldest natal horoscope tablet (410 BCE), the 19-year lunar-solar cycle, and the seven luminaries.",
          "sv": "Den äldsta horoskoptavlan (410 f.Kr.), den 19-åriga månsolcykeln och de sju himlakropparna."
        },
        "summary": {
          "tr": "30 derecelik 12 burç kuşağının Babil’de icadı, MÖ 410 tarihli ilk doğum haritası tableti ve Keldani gezegen sırası.",
          "en": "The Babylonian invention of the 12×30° uniform zodiac, the earliest natal chart tablet of 410 BCE, and the Chaldean planetary order.",
          "sv": "Den babyloniska uppfinningen av zodiakens 12×30°, den äldsta födelsehoroskoptavlan från 410 f.Kr. och den kaldeiska planetordningen."
        },
        "paragraphs": {
          "tr": [
            "Astroloji tarihindeki en büyük bilimsel sıçrama MÖ 5. yüzyılda Babil’de gerçekleşti: Babil gökbilimcileri, gökyüzünde farklı genişliklerde duran takımyıldızları (örneğin geniş Başak ile dar Koç takımyıldızını) hesaplama hassasiyeti için **her biri tam 30 derecelik 12 eşit burç dilimine (toplam 360 dereceye)** böldüler. Böylece takımyıldız gözleminden matematiksel **Zodyak Kuşağına** geçildi.",
            "Dünya tarihinde bilinen **en eski kişisel doğum haritası (horoskop) kil tableti** (Oxford Bodleian Kütüphanesi, AB 251), Babil’de **29 Nisan MÖ 410** tarihinde doğan bir çocuk için çivi yazısıyla yazılmıştır. Tablette Güneş, Ay, Jüpiter, Venüs, Merkür ve Satürn’ün hangi burçlarda olduğu kaydedilir ve şu cümleyle biter: ‘Her şey senin önünde açık olacak.’",
            "Babil katipleri ayrıca Güneş yılı ile Ay aylarını kusursuz eşitleyen **19 yıllık döngüyü** (19 Güneş yılının tam 235 kameri aya eşit olduğunu) Atinalı Meton’dan çok önce keşfetti ve takvimlerini bu matematiksel yasaya göre yürüttü.",
            "Antik dünyada ‘Keldani (Chaldean / Kaldu) Sırası’ olarak bilinen ve gezegenleri en yavaştan en hızlıya doğru dizilen hiyerarşi (**Satürn · Jüpiter · Mars · Güneş · Venüs · Merkür · Ay**) Babil ve İskenderiye üzerinden bütün dünyaya yayıldı; bugün kullandığımız 24 gezegen saati ve haftanın 7 gününün sırası doğrudan bu dizilimden doğmuştur."
          ],
          "en": [
            "The single greatest mathematical leap in the history of astrology took place in 5th-century BCE Babylon: Babylonian astronomer-scribes standardized the irregular constellations along the ecliptic into **twelve equal signs of exactly 30 degrees each (360 degrees in total)**, giving birth to the mathematical **Zodiac** still used today.",
            "The **oldest surviving personal natal horoscope in human history** is a Babylonian cuneiform clay tablet (preserved in the Bodleian Library, Oxford, AB 251) cast for a child born on **29 April 410 BCE**. It records the positions of the Moon, Sun, Jupiter, Venus, Mercury, and Saturn in the signs and concludes: *'Everything before you will be favorable.'*",
            "Long before Meton of Athens, Babylonian astronomers also discovered the exact **19-year lunisolar cycle** (showing that 19 solar years equal exactly 235 synodic lunar months) and developed predictive mathematical tables (System A and System B ephemerides) capable of calculating planetary stations years in advance.",
            "From this tradition emerged the **Chaldean Order** of the seven classical planets, arranged from slowest to fastest orbital motion (**Saturn · Jupiter · Mars · Sun · Venus · Mercury · Moon**)—the direct mathematical engine behind the 24 planetary hours and the order of the seven days of the week."
          ],
          "sv": [
            "Det största matematiska språnget i astrologins historia ägde rum i Babylon under 400-talet f.Kr.: babyloniska astronomer delade in ekliptikan i **tolv exakt lika stora tecken om 30 grader vardera (totalt 360 grader)** och skapade därmed den matematiska **Zodiak** som används än idag.",
            "Världshistoriens **äldsta bevarade personliga födelsehoroskop** är en babylonisk kilskriftstavla av lera (bevarad i Bodleian Library i Oxford, AB 251), upprättad för ett barn fött den **29 april 410 f.Kr.** Tavlan anger positionerna för Månen, Solen, Jupiter, Venus, Merkurius och Saturnus.",
            "Långt före Meton i Aten upptäckte babyloniska astronomer dessutom den exakta **19-åriga månsolcykeln** (där 19 solår motsvarar exakt 235 månmånader) och utvecklade matematiska efemerider (System A och System B).",
            "Härifrån stammar den **Kaldeiska Ordningen** av de sju klassiska planeterna från långsammast till snabbast (**Saturnus · Jupiter · Mars · Solen · Venus · Merkurius · Månen**) — den direkta nyckeln till dygnets 24 planettimmar och veckans sju dagar."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Yedi Gezegenin Babil İsimleri ve Karakterleri",
              "body": "Babil tabletlerinde yedi gezegenin her biri kozmik bir görevi temsil eder: Sîn (Ay — zaman ve hafıza), Šiḫṭu / Nabû (Merkür — yazı, hesap ve bilgelik), Dilbat / Ištar (Venüs — uyum, çekim ve dönüşüm), Šamaš (Güneş — adalet ve her şeyi gören ışık), Salbatanu / Nergal (Mars — keskin irade ve ateş), Nēberu / Marduk (Jüpiter — merkez, ölçü ve bereket) ve Kayamānu / Ninurta (Satürn — ‘Sabit Olan’, sınır ve tarım disiplini)."
            },
            {
              "heading": "Yücelim Derecelerinin (Bīt Niṣirti) Kökeni",
              "body": "Astrolojide gezegenlerin en güçlü olduğu burçları ifade eden ‘Yücelim’ (Exaltation — örneğin Güneş’in Koç’ta, Ay’ın Boğa’da, Satürn’ün Terazi’de yücelmesi) kavramı, Babil çivi yazılı tabletlerindeki ‘Bīt Niṣirti’ (‘Sır Evi / Hazine Yeri’) öğretisinden doğrudan Yunan ve İslam astrolojisine geçmiştir."
            },
            {
              "heading": "Babil’den İznikli Hipparkhos’a Bilim Köprüsü",
              "body": "Babil katiplerinin yüzyıllar boyunca tuttuğu tutulma kayıtları, MÖ 2. yüzyılda Anadolu’da, İznik’te (Nikaia) doğan büyük gökbilimci **Hipparkhos**’a ulaştı; Hipparkhos bu Babil tabletlerini kendi gözlemleriyle karşılaştırarak ‘Ekinoksların Presesyonu’nu (Gündönümü-Ekinoks noktalarının gerilemesini) keşfetti."
            }
          ],
          "en": [
            {
              "heading": "The Babylonian Names and Natures of the Seven Luminaries",
              "body": "In cuneiform tablets each planet embodies a cosmic office: *Sîn* (Moon — time and memory), *Šiḫṭu / Nabû* (Mercury — writing and calculation), *Dilbat / Ištar* (Venus — harmony and renewal), *Šamaš* (Sun — justice and all-seeing light), *Salbatanu / Nergal* (Mars — decisive heat and edge), *Nēberu / Marduk* (Jupiter — pivot, measure, and abundance), and *Kayamānu / Ninurta* (Saturn — 'The Steady One', boundary and agriculture)."
            },
            {
              "heading": "Bīt Niṣirti: The Babylonian Origin of Planetary Exaltations",
              "body": "The classical astrological doctrine of Planetary Exaltations (such as the Sun exalted in Aries, the Moon in Taurus, and Saturn in Libra) derives directly from the Babylonian cuneiform concept of *Bīt Niṣirti* ('House of the Secret / Treasure')."
            },
            {
              "heading": "The Bridge from Babylon to Hipparchus of Nicaea (İznik)",
              "body": "Centuries of Babylonian eclipse diaries were transmitted to **Hipparchus**, born in Nicaea (modern İznik in Anatolia) in the 2nd century BCE; by comparing Babylonian tablets with his own observations, Hipparchus discovered the Precession of the Equinoxes."
            }
          ],
          "sv": [
            {
              "heading": "De Sju Planeternas Babyloniska Namn och Väsen",
              "body": "I kilskriftstavlorna bär varje planet ett kosmiskt ämbete: *Sîn* (Månen — tid och minne), *Šiḫṭu / Nabû* (Merkurius — skrift och räkning), *Dilbat / Ištar* (Venus — harmoni och förvandling), *Šamaš* (Solen — rättvisa och klarhet), *Salbatanu / Nergal* (Mars — skärpa och kraft), *Nēberu / Marduk* (Jupiter — mått och välgång) samt *Kayamānu / Ninurta* (Saturnus — 'Den Stadige', gräns och uthållighet)."
            },
            {
              "heading": "Bīt Niṣirti: Ursprunget till Planeternas Upphöjelse (Exaltation)",
              "body": "Den klassiska läran om planeternas upphöjelser (såsom Solen i Väduren, Månen i Oxen och Saturnus i Vågen) härstammar direkt från det babyloniska begreppet *Bīt Niṣirti* ('Hemlighetens Hus')."
            },
            {
              "heading": "Bron från Babylon till Hipparkhos från Nikaia (İznik)",
              "body": "De babyloniska förmörkelsedagböckerna nådde under 100-talet f.Kr. astronomen **Hipparkhos**, född i Nikaia (dagens İznik i Anatolien), som genom dem upptäckte dagjämningarnas precession."
            }
          ]
        },
        "itemImages": [
          "/mezopotamya/deity-1-sin.jpg",
          "/mezopotamya/deity-2-samas.jpg",
          "/mezopotamya/deity-3-istar.jpg",
          "/mezopotamya/deity-4-nergal.jpg",
          "/mezopotamya/deity-5-marduk.jpg",
          "/mezopotamya/deity-6-ninurta-nabu.jpg"
        ],
        "items": {
          "tr": [
            "☽ Nanna / Sîn (Kutsal Sayı: 30 · Ay): Ur tapınağı E-kišnugal’in efendisi; yukarı bakan hilal kayığı (Má-gur₈) ile 30 günlük takvimi ve zamanı ölçer.",
            "☉ Utu / Šamaš (Kutsal Sayı: 20 · Güneş): Sippar ve Larsa’daki E-babbar (‘Ak Ev’) tapınağının hakimi; sekiz ışınlı güneş diskiyle adaleti ve hakikati aydınlatır.",
            "♀ İnanna / Ištar (Kutsal Sayı: 15 · Venüs / Dilbat): Uruk’un E-anna tapınağının ecesi; sekiz köşeli Venüs yıldızıyla sabah ve akşam ufkunun dönüşümünü yönetir.",
            "♂ Nergal / Şalbatānu (Kutsal Sayı: 14 · Mars): Kutha’daki E-meslam tapınağının efendisi; kızıl ateş yıldızı, keskin irade ve yeraltı kapılarının muhafızı.",
            "♃ Marduk / Šulpae (Kutsal Sayı: 10 · Jüpiter / Nēberu): Babil Esagila tapınağının baş tanrısı; üçgen kürek (marrû) mührüyle kozmik ölçüyü ve bereketi kurar.",
            "♄☿ Ninurta (Kayamānu / Satürn) & Nabû (Šiḫṭu / Merkür): 29.5 yıllık ‘Sabit Yıldız’ Kayamānu sınır ve sabrı; çift kamış kalemli Nabû ise kader tabletlerini ve gök hesabını tutar."
          ],
          "en": [
            "☽ Nanna / Sîn (Sacred Number: 30 · Moon): Lord of E-kišnugal at Ur; measures the 30-day lunar month in his upward-curved crescent boat (Má-gur₈).",
            "☉ Utu / Šamaš (Sacred Number: 20 · Sun): Judge of E-babbar ('Shining House') at Sippar and Larsa; his eight-rayed solar disk illuminates justice and oaths.",
            "♀ Inanna / Ištar (Sacred Number: 15 · Venus / Dilbat): Queen of E-anna at Uruk; her eight-pointed star governs the morning and evening thresholds of Venus.",
            "♂ Nergal / Şalbatānu (Sacred Number: 14 · Mars): Lord of E-meslam at Kutha; the fiery red star governing decisive edge and the gates of the underworld.",
            "♃ Marduk / Šulpae (Sacred Number: 10 · Jupiter / Nēberu): Sovereign of Esagila in Babylon; his triangular spade (marrû) establishes cosmic measure and order.",
            "♄☿ Ninurta (Kayamānu / Saturn) & Nabû (Šiḫṭu / Mercury): Kayamānu ('The Steady One') guards the 29.5-year boundary, while double-stylus Nabû inscribes the tablets of destiny."
          ],
          "sv": [
            "☽ Nanna / Sîn (Heligt tal: 30 · Månen): E-kišnugals herre i Ur; mäter den 30 dagar långa månmånaden i sin uppåtböjda månbåt (Má-gur₈).",
            "☉ Utu / Šamaš (Heligt tal: 20 · Solen): Domare i E-babbar ('Det lysande huset') i Sippar och Larsa; hans åttastråliga solskiva lyser upp rättvisa och eder.",
            "♀ Inanna / Ištar (Heligt tal: 15 · Venus / Dilbat): E-annas drottning i Uruk; hennes åttauddiga stjärna styr morgon- och aftonhorisontens Venus.",
            "♂ Nergal / Şalbatānu (Heligt tal: 14 · Mars): E-meslams herre i Kutha; den röda eldstjärnan som styr skärpa och underjordens portar.",
            "♃ Marduk / Šulpae (Heligt tal: 10 · Jupiter / Nēberu): Esagilas härskare i Babylon; hans trekantiga spade (marrû) upprättar kosmiskt mått och ordning.",
            "♄☿ Ninurta (Kayamānu / Saturnus) & Nabû (Šiḫṭu / Merkurius): Kayamānu ('Den Stadige') vaktar 29,5-årsgränsen, medan Nabû med dubbelt griffelpar skriver ödestavlorna."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Keldani Sırasıyla Günün Gezegenini Bulmak",
            "steps": [
              "Keldani sırasını (Satürn → Jüpiter → Mars → Güneş → Venüs → Merkür → Ay) ezberine al: En ağır ve dış yörüngeden en hızlı ve iç yörüngeye doğru iner.",
              "Bugün haftanın hangi günüyse o günün şafak saatini yöneten gezegeni hatırla (Cumartesi: Satürn, Pazar: Güneş, Pazartesi: Ay, Salı: Mars, Çarşamba: Merkür, Perşembe: Jüpiter, Cuma: Venüs).",
              "Günlük işini o gezegenin doğasına uygun seç: Satürn gününde yarım kalanları tamamla ve sadeleş, Merkür gününde yaz ve hesapla, Venüs gününde uyum ve dinlenme kur."
            ]
          },
          "en": {
            "title": "Study Note · Using the Chaldean Order in Daily Rhythm",
            "steps": [
              "Commit the Chaldean Order to memory from slowest outer orbit to fastest inner orbit: Saturn → Jupiter → Mars → Sun → Venus → Mercury → Moon.",
              "Note the planetary ruler of the dawn hour of today's weekday (Saturday: Saturn, Sunday: Sun, Monday: Moon, Tuesday: Mars, Wednesday: Mercury, Thursday: Jupiter, Friday: Venus).",
              "Align your primary task with the character of the day: structure and pruning on Saturn's day, study and writing on Mercury's day, harmony and art on Venus's day."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Den Kaldeiska Ordningen i Vardagens Rytm",
            "steps": [
              "Minns den kaldeiska ordningen från långsammast ytterbana till snabbast innerbana: Saturnus → Jupiter → Mars → Solen → Venus → Merkurius → Månen.",
              "Uppmärksamma vilken planet som styr dagens gryningstimme (lördag: Saturnus, söndag: Solen, måndag: Månen, tisdag: Mars, onsdag: Merkurius, torsdag: Jupiter, fredag: Venus).",
              "Anpassa dagens huvuduppgift efter dess karaktär: struktur på Saturnus dag, skrivande och studier på Merkurius dag, harmoni på Venus dag."
            ]
          }
        },
        "closing": {
          "tr": "Gökyüzü saatinin yelkovanı Ay, akrebi Satürn’dür; ikisini birlikte okuyan zamanı şaşırmaz.",
          "en": "The Moon is the minute-hand of the celestial clock and Saturn its hour-hand; whoever reads both never loses the time.",
          "sv": "Månen är det himmelska urets minutvisare och Saturnus dess timvisare; den som läser båda går aldrig vilse i tiden."
        },
        "ctaHref": "/astroloji",
        "ctaLabel": {
          "tr": "Astroloji Odasına Geç",
          "en": "Enter Astrology Hall",
          "sv": "Gå till Astrologirummet"
        }
      }
    ]
  },
  "witchcraft": {
    "slug": "witchcraft",
    "image": "/traditions/witchcraft.jpg",
    "title": {
      "tr": "Witchcraft",
      "en": "Witchcraft",
      "sv": "Witchcraft"
    },
    "line": {
      "tr": "Yeşil Ahit ve Ocak Bilgisi: Dioscorides’ten bugüne aktar ilmi, Anadolu reçineleri, dört element, su gözlemi ve doğa etiği.",
      "en": "The Green Covenant and Hearth Lore: authentic herbalism from Dioscorides to field craft, Anatolian resins, the four elements, and natural ethics.",
      "sv": "Det Gröna Förbundet och Härdkunskap: autentisk örtlära från Dioskorides till fältpraktik, anatoliska hartser, de fyra elementen och naturetik."
    },
    "backLabel": {
      "tr": "Witchcrafta dön",
      "en": "Back to Witchcraft",
      "sv": "Tillbaka till Witchcraft"
    },
    "doors": [
      {
        "slug": "hane-ve-mutfak",
        "glyph": "I",
        "title": {
          "tr": "Hane, Eşik ve Ocak Geleneği",
          "en": "Hearth, Threshold, and Household Craft",
          "sv": "Härd, Tröskel och Hemmets Hantverk"
        },
        "subtitle": {
          "tr": "Kapı eşiği, ocak ateşi ve dört temel bitkisel hazırlama tekniği.",
          "en": "The threshold stone, the hearth fire, and the four classical methods of herbal preparation.",
          "sv": "Tröskelstenen, härdens eld och örtkonstens fyra klassiska beredningsmetoder."
        },
        "summary": {
          "tr": "Eşik (limen) koruma geleneği, kaya tuzu ve demir, İnfüzyon, Dekoksiyon, Maserasyon ve Tentür teknikleri.",
          "en": "Guarding the threshold (limen), rock salt and iron, and the classical techniques of Infusion, Decoction, Maceration, and Tincture.",
          "sv": "Tröskelskydd (limen), bergsalt och järn samt de klassiska teknikerna Infusion, Dekokt, Maceration och Tinktur."
        },
        "paragraphs": {
          "tr": [
            "Geleneksel doğa ve ocak zanaatında (Hearthcraft / Folk Herbalism) çalışma uzak bir tapınakta değil, insanın yaşadığı evin eşiğinde (Latince: limen) ve ocağın başında başlar. Tarih boyunca hem Avrupa’da hem Anadolu’da ev, dış dünyanın rüzgarlarına karşı korunan canlı bir kabuk olarak görülmüştür. Evin iki hassas noktası vardır: Dışarıdan içeriye geçilen **Kapı Eşiği** ve içerideki yaşam ateşinin yandığı **Ocak**.",
            "Antik çağdan beri kapı eşiğinin kaya tuzu, sirke ve biberiye/ardıç suyuyla silinmesi yalnızca fiziksel temizlik değil, dışarıdaki gürültünün ve dağınık enerjinin eşikte bırakılmasıdır. Eşik üstüne asılan dövme demir (at nalı veya demir çivi), toprağın manyetik ağırlığını kapıda tutan en eski geleneksel sınır işaretidir.",
            "Ocak başında bitkilerle çalışırken rastgele karıştırma yapılmaz; antik hekimlik ve aktar geleneğinde (Anadolu’da Anazarbus’lu Dioscorides’in MS 1. yüzyılda yazdığı *De Materia Medica*’dan beri) bitkinin hangi parçasının kullanıldığına göre dört temel hazırlama yöntemi uygulanır: Yaprak ve çiçekler için **İnfüzyon** (demleme), kök ve kabuklar için **Dekoksiyon** (kaynatma), yağda bekletme için **Maserasyon** ve öz çıkarma için **Tentür**.",
            "Bir çayın veya merhemin hazırlanışı sırasında ocağın başındaki kişinin zihinsel durumu, en az kullanılan bitkinin kalitesi kadar önemlidir. Aceleyle ve öfkeyle kaynatılan su ile sessizlik ve odaklanmayla demlenen bitki aynı etkiyi taşımaz."
          ],
          "en": [
            "In traditional hearthcraft and folk herbalism, practice begins not in a distant temple, but at the threshold (*limen*) and hearth of one's own dwelling. Across both European and Anatolian history, the home was understood as a living shell guarding the household from outer turbulence. Two points hold primary importance: the **Doorstep Threshold** and the **Central Hearth**.",
            "Since antiquity, washing the threshold stone with rock salt, vinegar, and rosemary or juniper water has served both physical cleanliness and energetic boundary-keeping—setting down outside noise before crossing indoors. Wrought iron fixed above the lintel (horseshoe or forged nail) is among the oldest folk markers of grounded protection.",
            "Working with plants at the hearth follows exact botanical method rather than guesswork. Since Pedanius Dioscorides of Anazarbus (in Cilicia, southern Anatolia) compiled *De Materia Medica* in the 1st century CE, herbalists have distinguished four foundational preparations according to plant structure: **Infusion** (*infusum*) for delicate leaves and blossoms, **Decoction** (*decoctum*) for tough roots and barks, **Maceration** (*maceratio*) in oil, and **Tincture** (*tinctura*).",
            "Equally vital is the steadiness of the hand tending the vessel: water steeped in quiet attention carries a wholly different quality than a pot boiled in haste."
          ],
          "sv": [
            "I traditionell härdkonst och folklig örtlära börjar arbetet inte i ett avlägset tempel, utan vid det egna hemmets tröskel (*limen*) och härd. Genom både europeisk och anatolisk historia har hemmet betraktats som ett levande skal som skyddar mot yttre oro. Två punkter är centrala: **Tröskeln** och **Härden**.",
            "Sedan antiken har tvättandet av tröskelstenen med bergsalt, vinäger och rosmarin- eller envatten tjänat både fysisk renhet och gränssättning. Smidesjärn ovanför dörrposten är ett av folktraditionens äldsta tecken för jordat skydd.",
            "Arbetet med växter vid härden följer noggrann botanisk metod. Sedan Dioskorides från Anazarbus (i anatoliska Kilikien) skrev *De Materia Medica* under första århundradet e.Kr. skiljer örtkännare mellan fyra grundberedningar: **Infusion** (*infusum*) för blad och blommor, **Dekokt** (*decoctum*) för rötter och bark, **Maceration** (*maceratio*) i olja samt **Tinktur** (*tinctura*).",
            "Lika avgörande är lugnet hos den som vaktar kärlet: en brygd som får dra i stilla uppmärksamhet bär en annan kvalitet än det som kokas i brådska."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "İnfüzyon (Demleme) ve Dekoksiyon (Kaynatma) Farkı",
              "body": "Uçucu yağları yüksek olan narin çiçek ve yapraklar (papatya, melisa, lavanta, adaçayı, nane) asla fokurdayan suda kaynatılmaz; kaynar su ateşten alındıktan sonra bitkinin üzerine dökülür ve kapak kapalı olarak 7–10 dakika demlenir (İnfüzyon). Kapak açık kalırsa şifalı uçucu yağlar buharla uçup gider. Buna karşılık sert kökler, ağaç kabukları ve tohumlar (zencefil, meyan kökü, tarçın kabuğu, kuşburnu) soğuk suya konup kısık ateşte 15–20 dakika kaynatılarak özünü verir (Dekoksiyon)."
            },
            {
              "heading": "Güneş Maserasyonu: Kantaron ve Aynısefa Yağı",
              "body": "Sarı kantaron (Hypericum perforatum) veya aynısefa (Calendula officinalis) çiçekleri toplanıp cam kavanozda saf zeytinyağı içinde güneşte 4 ila 6 hafta bekletildiğinde, bitkinin yağda çözünen etken maddeleri (hiperisin gibi) yağa geçer ve yağ yakut kırmızısına döner. Bu yöntem güneşin ısısıyla yapılan doğal simyadır."
            },
            {
              "heading": "Eşik Yıkama ve Tuz Sınırı",
              "body": "Kaya tuzu kristal yapısı gereği nemi ve statik yükü emer. Haftada bir kez veya yeniay/dolunay eşiklerinde kapı önünün tuzlu ve biberiyeli suyla silinmesi, hanenin sınırını tazeleyen sade ve etkili bir gelenektir."
            }
          ],
          "en": [
            {
              "heading": "Infusion vs. Decoction: Preserving Volatile Oils",
              "body": "Delicate leaves and blossoms rich in volatile essential oils (chamomile, lemon balm, lavender, sage, mint) are never boiled; freshly boiled water is poured over the herb off the heat and steeped covered for 7–10 minutes (*Infusion*) so the aromatic oils do not escape in steam. Conversely, dense roots, barks, and tough seeds (ginger, licorice root, cinnamon bark, rosehip) are placed in cold water and gently simmered for 15–20 minutes (*Decoction*)."
            },
            {
              "heading": "Solar Maceration: St. John's Wort and Calendula Oils",
              "body": "When fresh blossoms of St. John's Wort (*Hypericum perforatum*) or Calendula (*Calendula officinalis*) are steeped in pure olive oil in glass jars under sunlight for four to six weeks, fat-soluble compounds (such as hypericin) infuse the oil, turning it deep ruby-red."
            },
            {
              "heading": "Threshold Washing and the Salt Boundary",
              "body": "Crystalline rock salt naturally absorbs moisture and static residue. Wiping the doorstep with salted rosemary water at the turn of the moon refreshes the boundary of the home."
            }
          ],
          "sv": [
            {
              "heading": "Infusion och Dekokt: Att Bevara Eteriska Oljor",
              "body": "Späda blad och blommor rika på eteriska oljor (kamomill, citronmeliss, lavendel, salvia, mynta) ska aldrig stormkokas; hett vatten hälls över örten och får dra under lock i 7–10 minuter (*Infusion*) så att de flyktiga oljorna stannar i koppen. Hårda rötter, bark och frön sjuds däremot långsamt under lock i 15–20 minuter (*Dekokt*)."
            },
            {
              "heading": "Solmaceration: Johannesört- och Ringblomsolja",
              "body": "När färska blommor av johannesört (*Hypericum perforatum*) eller ringblomma (*Calendula officinalis*) får dra i ren olivolja i solen under fyra till sex veckor övergår de fettlösliga ämnena i oljan och färgar den djupröd."
            },
            {
              "heading": "Tröskeltvätt och Saltets Gräns",
              "body": "Naturligt bergsalt binder fukt och tyngd. Att torka av tröskeln med saltat rosmarinvatten vid månens vändpunkter förnyar hemmets gräns."
            }
          ]
        },
        "items": {
          "tr": [
            "İnfüzyon (Demleme): Yaprak ve çiçeklerin uçucu yağlarını kaybetmeden kapaklı kapta sıcak suyla 7–10 dakika demlenmesi.",
            "Dekoksiyon (Kaynatma): Kök, kabuk ve sert tohumların kısık ateşte kaynatılarak derin özünün çıkarılması.",
            "Maserasyon (Yağda Bekletme): Bitkilerin zeytinyağı içinde güneş veya gölgede haftalarca bekletilerek merhem bazına dönüştürülmesi.",
            "Kaya Tuzu ve Sirke: Eşik ve yüzey temizliğinde durgunluğu çözen iki temel doğal arındırıcı.",
            "Biberiye ve Defne: Ocak başında ve kapı girişinde zihinsel berraklığı ve hane huzurunu koruyan iki Akdeniz bitkisi.",
            "Dövme Demir: Geleneksel folklor ve ocak kültüründe toprağın ağırlığını ve sınır korumasını temsil eden element."
          ],
          "en": [
            "Infusion (Steeping): Pouring hot water over leaves and flowers in a covered vessel for 7–10 minutes to retain volatile oils.",
            "Decoction (Simmering): Gently simmering roots, barks, and tough seeds for 15–20 minutes to extract dense constituents.",
            "Maceration (Oil Extraction): Steeping botanicals in olive oil over weeks to create salve and balm bases.",
            "Rock Salt & Vinegar: The two classic household purifiers for threshold and surface clearing.",
            "Rosemary & Bay Laurel: Mediterranean hearth plants guarding mental clarity and domestic peace.",
            "Wrought Iron: Traditional folk emblem of grounded weight and protective boundary at the lintel."
          ],
          "sv": [
            "Infusion (Örtte under lock): Hett vatten över blad och blommor i täckt kärl under 7–10 minuter för att bevara eteriska oljor.",
            "Dekokt (Sjudning): Långsam sjudning av rötter, bark och hårda frön under 15–20 minuter.",
            "Maceration (Oljeutdrag): Växter som får dra i olivolja under flera veckor som bas för salvor.",
            "Bergsalt & Vinäger: De två klassiska reningsmedlen för tröskel och hem.",
            "Rosmarin & Lagerblad: Medelhavstraditionens härdväxter för klarhet och husfrid.",
            "Smidesjärn: Traditionellt folkligt tecken för jordad tyngd och gränsskydd vid dörrposten."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Kapaklı Demleme ve Eşik Temizliği",
            "steps": [
              "Bir bardak sıcak suya bir dal biberiye ve bir yaprak defne koy; bardağın üzerini küçük bir tabakla kapatarak 8 dakika bekle.",
              "Kapağı kaldırdığında tabağın altında biriken su damlacıklarını (uçucu yağ özünü) tekrar bardağın içine akıt.",
              "Evden çıkmadan veya yeni bir çalışmaya başlamadan önce kapı eşiğini bir tutam kaya tuzu eklenmiş suyla silerek sınırını yenile."
            ]
          },
          "en": {
            "title": "Study Note · Covered Infusion and Threshold Clearing",
            "steps": [
              "Place a sprig of rosemary and one bay leaf into a cup of hot water; cover the cup with a small saucer and steep for 8 minutes.",
              "When lifting the saucer, tip the condensed droplets gathered on its underside (rich in volatile oils) back into the cup.",
              "Before beginning a new cycle of work, wipe your front threshold with water and a pinch of rock salt to refresh the boundary."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Täckt Infusion och Tröskelrening",
            "steps": [
              "Lägg en kvist rosmarin och ett lagerblad i en kopp hett vatten; täck koppen med ett litet fat och låt dra i 8 minuter.",
              "När du lyfter fatet, låt kondensdropparna på undersidan (rika på eterisk olja) rinna tillbaka ned i koppen.",
              "Innan du påbörjar en ny arbetsfas, torka av din tröskel med vatten och en nypa bergsalt."
            ]
          }
        },
        "closing": {
          "tr": "Eşiği temiz tutulan evin ocağı duman yapmaz.",
          "en": "Where the threshold is kept clean, the hearth burns without smoke.",
          "sv": "Där tröskeln hålls ren brinner härden klart."
        },
        "image": "/witchcraft/hane-ocak-esik.jpg"
      },
      {
        "slug": "kir-ve-aktar",
        "glyph": "II",
        "title": {
          "tr": "Kır ve Aktar İlmi: Yabani Bitkiler",
          "en": "Field and Apothecary Lore: Wild Herbs",
          "sv": "Markens och Apotekets Kunskap: Vilda Örter"
        },
        "subtitle": {
          "tr": "Anazarbus’lu Dioscorides’ten bugüne gerçek bitki bilgisi ve toplama etiği.",
          "en": "Authentic botanical lore from Dioscorides of Anazarbus to traditional field craft.",
          "sv": "Autentisk örtkunskap från Dioskorides i Anazarbus till traditionell fältpraktik."
        },
        "summary": {
          "tr": "Pelin Otu, Civanperçemi, Sarı Kantaron, Mine Çiçeği, Biberiye ve Tıbbi Adaçayı — botanik özellikleri ve tarihsel kullanımlarıyla.",
          "en": "Mugwort, Yarrow, St. John's Wort, Vervain, Rosemary, and Sage—their botanical properties and historical uses.",
          "sv": "Gråbo, Röllika, Johannesört, Järnört, Rosmarin och Salvia — deras botaniska egenskaper och historiska bruk."
        },
        "paragraphs": {
          "tr": [
            "Gerçek bitki ilmi (Herbalism / Aktarlık), bitkilere uydurma isimler takmak değil; onların botanik ailesini, yetiştiği toprağı, içindeki etken maddeleri ve binlerce yıllık tarihsel kullanımını tanımaktır. Dünya tıp ve eczacılık tarihinin en temel eseri olan beş ciltlik **De Materia Medica**, MS 1. yüzyılda bugünkü Adana-Osmaniye sınırındaki antik **Anazarbus** kentinde doğan hekim Pedanius Dioscorides tarafından Anadolu, Akdeniz ve Mezopotamya bitkileri incelenerek yazılmıştır.",
            "Kırda yetişen yabani bir bitki, serada yetiştirilen bitkiden çok daha yoğun aromatik bileşikler üretir; çünkü rüzgara, güneşe ve kuraklığa karşı kendini korumak için ürettiği sekonder metabolitler (uçucu yağlar, tanenler, flavonoidler) aynı zamanda insanın şifa kaynağıdır.",
            "Geleneksel bitki toplamada (Wildcrafting) sarsılmaz bir etik kural vardır: Bir bölgedeki bitkilerin **üçte birinden fazlası asla toplanmaz**; bitkinin kökü sökülmeyecekse gövdesi temiz bir bıçakla kesilir, geri kalan üçte ikisi doğanın döngüsüne, arılara ve gelecek yılın tohumuna bırakılır.",
            "Bitkiler sabah çiyi kuruduktan hemen sonra, güneş tepeye çıkıp uçucu yağları buharlaştırmadan önce toplanır ve doğrudan güneş altında değil, gölge ve havadar bir yerde demetler halinde kurutulur."
          ],
          "en": [
            "Authentic herbalism rests not on fanciful invention, but on knowing a plant's botanical family, habitat, active constituents, and documented history. The foundational five-volume pharmacopoeia of antiquity, **De Materia Medica**, was written in the 1st century CE by Pedanius Dioscorides of **Anazarbus** (in Cilicia, southern Anatolia), synthesizing Anatolian, Mediterranean, and Mesopotamian plant lore.",
            "Wild plants growing in open wind and stony soil produce far denser aromatic compounds than greenhouse plants; the secondary metabolites (essential oils, tannins, bitters, flavonoids) a plant synthesizes for its own resilience become medicine and aromatics in human hands.",
            "Traditional wildcrafting observes a strict ethical law: **never harvest more than one-third of a stand**—leaving the remaining two-thirds undisturbed for pollinators, wildlife, and next year's seed.",
            "Aerial parts (leaves and flowers) are gathered in the morning after the dew has dried but before the midday sun volatilizes the essential oils, then dried in airy shade rather than direct sun so their color and potency remain intact."
          ],
          "sv": [
            "Äkta örtkunskap vilar inte på fria fantasier, utan på kännedom om växtens botaniska familj, växtplats, verksamma ämnen och dokumenterade historia. Antikens mest inflytelserika farmakopé i fem band, **De Materia Medica**, skrevs under första århundradet e.Kr. av läkaren Pedanius Dioskorides från **Anazarbus** i Kilikien (södra Anatolien).",
            "Vilda växter som växer i vind och stenig jord bildar betydligt rikare aromatiska ämnen än odlade växter; de eteriska oljor, garvämnen och flavonoider som växten skapar för sin egen motståndskraft utgör dess läkande kraft.",
            "Traditionell insamling följer en orubblig etisk regel: **skörda aldrig mer än en tredjedel av ett bestånd** — lämna resten åt bin, djur och nästa års frösättning.",
            "Blad och blommor samlas på förmiddagen när daggen har torkat men innan middagssolen driver bort de eteriska oljorna, och torkas sedan i luftig skugga."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Eşik ve Rüya Otları: Pelin Otu ve Civanperçemi",
              "body": "Pelin Otu (Artemisia vulgaris), adını tanrıça Artemis’ten alır; yapraklarının üstü koyu yeşil, altı ise gümüşi tüylüdür (ay ışığı rengi). Tarih boyunca hem sindirim acısı (bitter) olarak hem de yastık altında berrak rüya görmeyi destekleyen tütsü otu olarak kullanılmıştır. Civanperçemi (Achillea millefolium) ise adını Troya Savaşı’nda yaraları bu otla durduran Akhilleus’tan alır; hem kanamayı durduran yara otu hem de sınır koruyucudur."
            },
            {
              "heading": "Güneş ve Sunak Otları: Sarı Kantaron ve Mine Çiçeği",
              "body": "Sarı Kantaron (Hypericum perforatum) yaprağını güneşe tuttuğunda üzerinde iğne deliği gibi şeffaf yağ bezecikleri görünür (bu yüzden ‘perforatum’ denir). Yaz gündönümünde toplanan bu altın çiçek, kış melankolisini dağıtan güneş otudur. Mine Çiçeği (Verbena officinalis) ise antik Roma ve Kelt dünyasında ‘Herba Sacra’ (Kutsal Ot) olarak adlandırılmış ve sunak taşlarını süpürmekte kullanılmıştır."
            },
            {
              "heading": "Hafıza ve Kurtuluş: Biberiye ve Tıbbi Adaçayı",
              "body": "Biberiye (Salvia rosmarinus — ‘Denizin Çiyi’) antik Yunan’da öğrencilerin hafızayı güçlendirmek için saçlarına taktığı bitkidir; içerdiği rosmarinik asit ve sineol zihni berraklaştırır. Adaçayı (Salvia officinalis) ise adını Latince ‘salvare’ (kurtarmak/iyileştirmek) fiilinden alır; Ortaçağ Salerno Tıp Okulu onun için ‘Bahçesinde adaçayı büyüyen insan neden ölsün ki?’ dizesini yazmıştır."
            }
          ],
          "en": [
            {
              "heading": "Herbs of Threshold and Dream: Mugwort & Yarrow",
              "body": "Mugwort (*Artemisia vulgaris*), named for Artemis, has dark green upper leaves and silvery-downy undersides that flash like moonlight in the wind; across Europe and Asia it has served both as a digestive bitter and as a smudge and dream-pillow herb. Yarrow (*Achillea millefolium*), named for Achilles who staunched battle wounds with its feathery leaves, is a premier astringent and boundary herb."
            },
            {
              "heading": "Herbs of Sun and Altar: St. John's Wort & Vervain",
              "body": "Hold a leaf of St. John's Wort (*Hypericum perforatum*) against the sun and tiny translucent oil glands appear like pinpricks (hence *perforatum*). Harvested around midsummer, it carries solar warmth into winter darkness. Vervain (*Verbena officinalis*) was revered in classical antiquity as *Herba Sacra* ('the Sacred Herb'), used to sweep and consecrate altar stones."
            },
            {
              "heading": "Memory and Preservation: Rosemary & Garden Sage",
              "body": "Rosemary (*Salvia rosmarinus*, 'Dew of the Sea') was worn by Greek scholars to sharpen memory; its cineole and rosmarinic acid invigorate focus. Garden Sage (*Salvia officinalis*) takes its name from Latin *salvare* ('to save/heal'), celebrated by the medieval Medical School of Salerno."
            }
          ],
          "sv": [
            {
              "heading": "Tröskelns och Drömmens Örter: Gråbo & Röllika",
              "body": "Gråbo (*Artemisia vulgaris*), uppkallad efter Artemis, har mörkgrön ovansida och silvervit undersida som glimmar i vinden; sedan gammalt använd både som bitterört och som dröm- och rökelseväxt. Röllika (*Achillea millefolium*), förknippad med Akilles sårläkning vid Troja, är en klassisk läke- och gränsört."
            },
            {
              "heading": "Solens och Altarets Örter: Johannesört & Järnört",
              "body": "Håller man ett blad av Johannesört (*Hypericum perforatum*) mot solen syns små genomskinliga oljekörtlar som nålstick (därav *perforatum*). Skördad kring midsommar bär den solens kraft in i vintern. Järnört (*Verbena officinalis*) kallades under antiken *Herba Sacra* ('den heliga örten')."
            },
            {
              "heading": "Minne och Bevarande: Rosmarin & Läkesalvia",
              "body": "Rosmarin (*Salvia rosmarinus*, 'havets dagg') bars under antiken för att stärka minnet och skärpa tanken. Läkesalvia (*Salvia officinalis*) har sitt namn av latinets *salvare* ('att rädda/läka')."
            }
          ]
        },
        "items": {
          "tr": [
            "Yavşan / Pelin (Artemisia vulgaris · Mugwort): Sineol ve tujon içeren kadim yolcu ve eşik otu; yorgun ayak banyolarında, tütsüde ve rüya yastıklarında kullanılır.",
            "Üzerlik (Peganum harmala · Syrian Rue): Anadolu, İran ve Mezopotamya’nın en köklü koruma tohumu; ateşte çıtırdayan kapsülleriyle hane havasını ve nazar yükünü temizler.",
            "Sarı Kantaron (Hypericum perforatum · St. John’s Wort): Yaz gündönümünde (21 Haziran) toplanan güneş otu; zeytinyağında 40 gün bekletilerek kızıl yara ve sinir balsamı yapılır.",
            "Biberiye (Rosmarinus officinalis · Rosemary): Rozmarinik asit zengini ‘deniz şebnemi’; zihni berraklaştırır, hafızayı güçlendirir ve kapı eşiğinde koruyucu kalkan kurar.",
            "Civanperçemi (Achillea millefolium · Yarrow): Adını Akhilleus’tan alan ‘bin yapraklı’ yara otu; kan durdurucu, terletici ve kişisel sınırları sağlamlaştırıcı kır bitkisi.",
            "Kara Mürver (Sambucus nigra · Elder): Avrupa ve İskandinav folklorunda ‘Mürver Ana’ (Hyldemoer) olarak saygı gören, çiçeği ve meyvesi kış şifası olan eşik ağacı."
          ],
          "en": [
            "Mugwort (Artemisia vulgaris): The ancient traveler's and threshold herb rich in cineole; used in foot baths, smoke bundles, and dream pillows.",
            "Syrian Rue / Üzerlik (Peganum harmala): The foundational protective seed of Anatolia and Mesopotamia, burned on coals to clear stagnant air and the evil eye.",
            "St. John's Wort (Hypericum perforatum): The midsummer solar herb harvested around June 21; infused in olive oil for 40 days to yield a ruby-red balm for wounds and nerves.",
            "Rosemary (Rosmarinus officinalis): 'Dew of the Sea' rich in rosmarinic acid; sharpens memory, clarifies study spaces, and guards the household threshold.",
            "Yarrow (Achillea millefolium): Named for Achilles, the 'thousand-leaved' woundwort used since antiquity to staunch bleeding and fortify personal boundaries.",
            "Black Elder (Sambucus nigra): Revered in Nordic and European folklore as the 'Elder Mother' (Hyldemoer); a guardian threshold tree whose blossoms and berries heal in winter."
          ],
          "sv": [
            "Gråbo (Artemisia vulgaris · Mugwort): Den uråldriga vandrar- och tröskelörten; använd i fotbad, rökelseknippen och drömkuddar.",
            "Harmelbuske / Üzerlik (Peganum harmala): Anatoliens och Mesopotamiens klassiska skyddsfrö som bränns på glöd för att rena hemmet från avund.",
            "Äkta Johannesört (Hypericum perforatum): Sommarsolståndets solört som får dra i olivolja i 40 dagar till ett djuprött balsam för sår och nerver.",
            "Rosmarin (Rosmarinus officinalis): 'Havets dagg' rik på rosmarinsyra; skärper minnet, renar luften och vaktar hemmets tröskel.",
            "Röllika (Achillea millefolium): 'Tusenbladig' sårläkares ört som sedan antiken använts för att stilla blod och stärka gränser.",
            "Fläder (Sambucus nigra): Vördad i nordisk folktro som 'Hyldemoer' (Flädermor); ett beskyddande gårdsträd vars blommor och bär ger läkedom under vintern."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Tek Bitki Gözlem Defteri (Herbaryum)",
            "steps": [
              "Aynı anda on bitki ezberlemeye çalışma; bu hafta yalnızca tek bir bitki seç (örneğin Biberiye veya Sarı Kantaron).",
              "Bitkiyi önce kuru ve taze haliyle kokla, yaprağının dokusunu incele (Kantaron yaprağını ışığa tutup yağ gözeneklerini gör), sonra çayını demleyip tadını kaydet.",
              "Bitkinin bilimsel adını, toplandığı mevsimi ve sende uyandırdığı hissi çalışma defterine tek sayfalık bir herbaryum kaydı olarak yaz."
            ]
          },
          "en": {
            "title": "Study Note · Single-Herb Monograph & Herbarium",
            "steps": [
              "Do not attempt to memorize twenty herbs at once; choose a single plant this week (such as Rosemary or St. John's Wort).",
              "Examine its leaf structure (hold St. John's Wort to the light to see its translucent oil glands), smell it dry and fresh, and steep a simple infusion.",
              "Record its Latin binomial, season, and physical sensation on a dedicated page in your study ledger."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Enkel Växtmonografi och Herbarium",
            "steps": [
              "Försök inte lära dig tjugo örter på en gång; välj en enda växt denna vecka (exempelvis Rosmarin eller Johannesört).",
              "Undersök bladets struktur (håll johannesörtsbladet mot ljuset för att se oljekörtlarna), dofta på det och brygg en enkel infusion.",
              "Anteckna dess latinska namn, årstid och verkan på en egen sida i din studiebok."
            ]
          }
        },
        "closing": {
          "tr": "Adını ve toprağını tanıdığın her ot, yabani bir çalı olmaktan çıkıp sessiz bir dosta dönüşür.",
          "en": "Every plant whose name and soil you learn ceases to be a nameless weed and becomes a quiet ally.",
          "sv": "Varje växt vars namn och jord du lär känna upphör att vara ett namnlöst ogräs och blir en stilla bundsförvant."
        },
        "image": "/witchcraft/kir-aktar-botanik.jpg",
        "itemImages": [
          "/witchcraft/herb-1-pelin.jpg",
          "/witchcraft/herb-2-uzerlik.jpg",
          "/witchcraft/herb-3-kantaron.jpg",
          "/witchcraft/herb-4-biberiye.jpg",
          "/witchcraft/herb-5-civanpercem.jpg",
          "/witchcraft/herb-6-murver.jpg"
        ]
      },
      {
        "slug": "agaclar-ve-recineler",
        "glyph": "III",
        "title": {
          "tr": "Ağaçlar, Reçineler ve Tütsü Sanatı",
          "en": "Trees, Resins, and the Art of Fumigation",
          "sv": "Träd, Hartser och Rökelsens Konst"
        },
        "subtitle": {
          "tr": "Ağacın gözyaşı olan reçineler, Anadolu sığlası ve dumanın kimyası.",
          "en": "Resins as the healing tears of trees, Anatolian storax, and the chemistry of smoke.",
          "sv": "Hartser som trädens läkande tårar, anatolisk storax och rökens kemi."
        },
        "summary": {
          "tr": "Ak Günlük (Boswellia), Mür, Anadolu Sığlası (Liquidambar orientalis), Çam Reçinesi, Ardıç ve Defne.",
          "en": "Frankincense (Boswellia), Myrrh, Anatolian Storax (Liquidambar orientalis), Pine Resin, Juniper, and Bay Laurel.",
          "sv": "Olibanum (Boswellia), Myrra, Anatolisk Storax (Liquidambar orientalis), Tallkåda, En och Lager."
        },
        "paragraphs": {
          "tr": [
            "Bir ağacın kabuğu yaralandığında, ağaç o yarayı dış enfeksiyonlardan korumak ve kapatmak için yoğun, kokulu bir özsu salgılar. Hava ve güneşle temas edip kristalleşen bu özsuya **Reçine (Sakız)** denir. Yani yakılan her doğal reçine — Ak Günlük, Mür, Sığla veya Çam sakızı — gerçek anlamda ağacın kendini iyileştirmek için ürettiği koruyucu gözyaşıdır.",
            "Sentetik kokulu çubukların aksine, kömür veya sıcak plaka üzerinde eritilen saf reçineler ve odunlar binlerce yıldır hem Mezopotamya ve Mısır tapınaklarında hem de Anadolu’da mekanın havasını temizlemek ve zihni derin odaklanmaya hazırlamak için kullanılmıştır.",
            "Anadolu bu konuda dünyada eşsiz bir hazineye sahiptir: Yalnızca Güneybatı Anadolu’da (Muğla / Köyceğiz / Fethiye çevresinde) yetişen endemik **Anadolu Sığla Ağacı (Liquidambar orientalis)**, antik çağdan beri ‘Günlük / Buhur’ olarak bilinen en kıymetli reçinelerden birini verir.",
            "Tütsü (Latince *fumigatio* — dumanlama; Türkçe *alazlama / tütsüleme*) yapılırken temel kural pencerenin hafifçe aralık bırakılmasıdır: Çünkü amaç odayı dumana boğmak değil, dumanın mekandaki ağır havayı bağlayıp açık pencereden dışarı taşımasını sağlamaktır."
          ],
          "en": [
            "When the bark of a resinous tree is wounded, the tree secretes a dense aromatic sap to seal the breach and protect the living wood. Hardened by air and sun into translucent tears, this substance is **Resin**. Every natural resin burned upon the brazier—Frankincense, Myrrh, Storax, or Pine pitch—is literally the tree's own protective and restorative medicine.",
            "Unlike synthetic dipped sticks, pure botanical resins and woods warmed over charcoal or a brass plate have been used for millennia across Mesopotamia, Egypt, Greece, and Anatolia to purify indoor air and quiet the nervous system.",
            "Anatolia holds a unique botanical treasure in this tradition: the endemic **Oriental Sweetgum (*Liquidambar orientalis*, Anadolu Sığla Ağacı)** growing in southwestern Anatolia (around Muğla and Köyceğiz), which yields authentic Storax balsam (*Günlük*), prized since antiquity for both healing salves and sacred incense.",
            "A cardinal rule of traditional fumigation (*fumigatio*) is keeping a window slightly cracked open: the purpose is never to choke a room with smoke, but to allow the rising smoke to bind stagnant air and carry it out across the threshold."
          ],
          "sv": [
            "När barken på ett kådigt träd skadas utsöndrar trädet en tät, aromatisk sav för att sluta såret och skydda veden. När denna sav stelnar i luft och sol bildas **Harts**. Varje naturligt harts som läggs på glöden — Olibanum, Myrra, Storax eller Tallkåda — är bokstavligen trädets eget läkande skyddsämne.",
            "Till skillnad från syntetiska rökelsestickor har rena växthartser och träslag under årtusenden använts i Mesopotamien, Medelhavsområdet och Anatolien för att rena luften och stilla sinnet.",
            "Anatolien bär här en unik botanisk skatt: det endemiska **Orientaliska Амbraträdet (*Liquidambar orientalis*, Anadolu Sığla Ağacı)** i sydvästra Anatolien (kring Muğla), som ger äkta storaxbalsam (*Günlük*).",
            "En grundregel vid rökelsearbete (*fumigatio*) är att alltid ha ett fönster lätt på glänt: syftet är inte att fylla rummet med tung rök, utan att låta röken binda det stagnerade och föra ut det genom fönstret."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Güneş ve Toprak Reçineleri: Ak Günlük (Olibanum) ve Mür",
              "body": "Ak Günlük (Boswellia sacra) altın-beyaz damlalarıyla zihni yukarı kaldırır, nefesi derinleştirir ve içerdiği boswellik asit ile incensol sayesinde kaygıyı yatıştırır (Güneş ve Hava karakterlidir). Mür (Commiphora myrrha) ise koyu kızıl-kahverengi rengiyle toprağa bağlar, kederi yatıştırır ve derin yaraları onarır (Toprak ve Su karakterlidir). İkisi birlikte yakıldığında gök ile yer dengelenir."
            },
            {
              "heading": "Anadolu’nun Kutsal Reçinesi: Sığla (Liquidambar orientalis)",
              "body": "Muğla ve Köyceğiz’deki asırlık sığla ormanlarından elde edilen sığla yağı ve kabuğu (buhur), hem mide ve cilt yaralarını iyileştiren güçlü bir antiseptik hem de sıcak, balzamik kokusuyla kalbi yumuşatan eşsiz bir yerli reçinedir."
            },
            {
              "heading": "Odun ve Yapraklar: Sedir, Ardıç ve Defne",
              "body": "Toroslar’ın Lübnan Sediri (Cedrus libani) Sümer tabletlerinden beri tapınak kapılarının ve arınma ateşlerinin ağacıdır. Ardıç uçları (Juniperus) keskin ve temizleyici dumanıyla eşik bekçisidir. Defne yaprağı (Laurus nobilis — Antakya/Harbiye’nin antik Daphne koruluğu) ise kehanet ve berrak görü yaprağıdır."
            }
          ],
          "en": [
            {
              "heading": "Solar and Earth Resins: Frankincense & Myrrh",
              "body": "Frankincense (*Boswellia sacra*), with its pale golden tears containing boswellic acids and incensole acetate, lifts awareness and deepens respiration (Solar/Air quality). Myrrh (*Commiphora myrrha*), dark reddish-brown and rich in sesquiterpenes, grounds the body, soothes grief, and seals wounds (Earth/Water quality). Burned together, they balance height and depth."
            },
            {
              "heading": "Anatolia's Sacred Balsam: Sığla (Liquidambar orientalis)",
              "body": "Harvested from ancient sweetgum groves in Muğla and Köyceğiz, Anatolian Storax (*Sığla*) and its pressed bark (*Buhur*) offer both a potent skin-healing balsam and a warm, resinous smoke that steadies the heart."
            },
            {
              "heading": "Sacred Woods and Leaves: Cedar, Juniper, and Bay Laurel",
              "body": "Taurus Mountain Cedar (*Cedrus libani*) has perfumed sanctuaries since the Sumerian epics of Gilgamesh. Juniper needles (*Juniperus*) clear heavy thresholds, while Bay Laurel (*Laurus nobilis*, native to ancient Daphne in Hatay/Antioch) sharpens clarity and focus."
            }
          ],
          "sv": [
            {
              "heading": "Solens och Jordens Hartser: Olibanum & Myrra",
              "body": "Olibanum (*Boswellia sacra*), med sina gyllene droppar rika på incensol, lyfter blicken och fördjupar andningen. Myrra (*Commiphora myrrha*), mörkt rödbrun och jordande, stillar sorg och sluter sår. Tillsammans förenar de höjd och djup."
            },
            {
              "heading": "Anatoliens Heliga Balsam: Sığla (Liquidambar orientalis)",
              "body": "Från de uråldriga skogarna i Muğla och Köyceğiz utvinns anatolisk storax (*Sığla*) och dess bark (*Buhur*) — både ett läkande balsam och en varm, samlande rökelse."
            },
            {
              "heading": "Heliga Träslag och Blad: Ceder, En och Lager",
              "body": "Taurusbergens ceder (*Cedrus libani*) har vördats sedan Gilgamesheposets dagar. Enris (*Juniperus*) renar tröskeln, medan Lagerblad (*Laurus nobilis*, från antika Daphne i Hatay) skärper fokus."
            }
          ]
        },
        "items": {
          "tr": [
            "Ak Günlük (Boswellia sacra): Altın damla reçine; zihinsel berraklık, derin nefes ve yüksek odak.",
            "Mür (Commiphora myrrha): Kızıl toprak reçinesi; köklenme, yas sağaltımı ve sınır mühürleme.",
            "Anadolu Sığlası (Liquidambar orientalis): Muğla’nın endemik günlük ağacı; kalp ferahlığı ve onarım.",
            "Çam Sakızı (Colophonium): Orman reçinesi; canlılık, dayanıklılık ve kış arındırması.",
            "Toros Sediri (Cedrus libani): Sümer’den Anadolu’ya uzanan sarsılmaz merkez ve koruma ağacı.",
            "Defne (Laurus nobilis): Antakya/Daphne’nin kadim ağacı; berrak görü, odak ve zafer çelengi."
          ],
          "en": [
            "Frankincense (Boswellia sacra): Golden tear resin; mental clarity, deepened breath, and elevated focus.",
            "Myrrh (Commiphora myrrha): Dark earth resin; grounding, grief integration, and sealing boundaries.",
            "Anatolian Storax (Liquidambar orientalis): Endemic sweetgum of Muğla; warmth, balm, and heart steadiness.",
            "Pine Pitch (Colophonium): Forest resin; vitality, resilience, and winter purification.",
            "Taurus Cedar (Cedrus libani): Enduring sanctuary wood celebrated from Sumerian tablets to Anatolia.",
            "Bay Laurel (Laurus nobilis): Sacred tree of ancient Daphne (Antioch); clear sight and focused will."
          ],
          "sv": [
            "Olibanum (Boswellia sacra): Gyllene tårar av harts; klarhet, djup andedräkt och höjt fokus.",
            "Myrra (Commiphora myrrha): Mörkt jordharts; jordning, läkande av sorg och gränsförsegling.",
            "Anatolisk Storax (Liquidambar orientalis): Muğlas endemiska ambraträd; värme och hjärtats ro.",
            "Tallkåda (Colophonium): Skogsharts; livskraft, uthållighet och vinterrening.",
            "Taurusceder (Cedrus libani): Heligt träslag omtalat från sumeriska tavlor till Anatolien.",
            "Lager (Laurus nobilis): Det heliga trädet från antika Daphne (Antiochia); klar syn och fokus."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Üçlü Tütsü Harmanı ve Havalandırma",
            "steps": [
              "Önce odanın penceresini iki parmak arala; içerideki eski havanın çıkacağı bir eşik bırak.",
              "Küçük bir ısı kaynağında 1 damla Ak Günlük (zihin berraklığı), 1 tutam Ardıç (eşik temizliği) ve 1 yaprak ufalanmış Defne’yi (odak) birleştir.",
              "İlk duman yükseldiğinde gözlerini kapatıp üç derin nefes boyunca odayı dolduran orman ve reçine kokusuyla omurganı dikleştir."
            ]
          },
          "en": {
            "title": "Study Note · Threefold Resin Blend and Ventilation",
            "steps": [
              "First crack a window open by two fingers' width so stagnant air has a clear path outward.",
              "Warm together one tear of Frankincense (clarity), a pinch of dried Juniper needles (threshold clearing), and one crushed Bay leaf (focus).",
              "As the first wisp rises, sit upright for three slow breaths, allowing the resinous aroma to anchor your attention."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Trefaldig Rökelseblandning och Vädring",
            "steps": [
              "Öppna först ett fönster på glänt så att gammal luft har en fri väg ut.",
              "Värm tillsammans en droppe Olibanum (klarhet), en nypa torkat Enris (tröskelrening) och ett smulat Lagerblad (fokus).",
              "När den första röken stiger, sitt rak i ryggen under tre djupa andetag och låt doften samla din uppmärksamhet."
            ]
          }
        },
        "closing": {
          "tr": "Reçine ağacın yaradan çıkardığı cevherdir; insan da en derin kokusunu onardığı yaradan verir.",
          "en": "Resin is the treasure a tree draws from its wound; so too does human character deepen where it has healed.",
          "sv": "Harts är den skatt trädet skapar ur sitt sår; så fördjupas också människan där hon har läkt."
        },
        "image": "/witchcraft/agac-recine-tutsu.jpg"
      },
      {
        "slug": "dort-element-ve-ay",
        "glyph": "IV",
        "title": {
          "tr": "Dört Element, Ay Evreleri ve Toprak Takvimi",
          "en": "The Four Elements, Lunar Phases, and the Earth Calendar",
          "sv": "De Fyra Elementen, Månfaserna och Jordkalendern"
        },
        "subtitle": {
          "tr": "Empedokles’in dört kökü, özsuyun Ay ile hareketi ve çalışma masası.",
          "en": "The four roots of Empedocles, the lunar tide of plant sap, and the working table.",
          "sv": "Empedokles fyra rötter, savens månrytm och arbetsbordet."
        },
        "summary": {
          "tr": "Toprak, Su, Hava ve Ateş dengesi; bitki özsuyunun Ay evrelerine göre yükseliş-inişi ve dört yön masası.",
          "en": "Balance of Earth, Water, Air, and Fire; the rise and descent of plant sap across lunar phases, and the four-directional table.",
          "sv": "Balansen mellan Jord, Vatten, Luft och Eld; växtsavens rörelse genom månfaserna och arbetsbordet."
        },
        "paragraphs": {
          "tr": [
            "Antik doğa felsefesinde (özellikle MÖ 5. yüzyılda Empedokles’in tanımladığı ‘Rhizōmata’ — Dört Kök öğretisinde ve İslam/Anadolu tababetindeki ‘Anasır-ı Erbaa’ geleneğinde) maddi evren dört temel nitelik ve halin dengesinden oluşur: **Toprak** (soğuk ve kuru — katılık, yapı, sabır), **Su** (soğuk ve nemli — akışkanlık, hafıza, duygu), **Hava** (sıcak ve nemli — nefes, düşünce, bağlantı) ve **Ateş** (sıcak ve kuru — irade, dönüşüm, hareket).",
            "Bu dört element dışarıdaki doğada olduğu kadar insanın kendi mizacında da çalışır (El, Yüz ve Element Okuma / İlm-i Sima eğitiminde detaylı incelendiği üzere): Kimi insanda Toprak ağır basar ve sağlam ama yavaş hareket eder; kimi insanda Ateş ve Hava baskındır, hızlı kavrar ama çabuk dağılır. Çalışma masasına dört elementin sembolünü koymak, önce kendi mizacındaki eksik elementi dengelemek içindir.",
            "Geleneksel tarım ve aktar takviminde Ay’ın dört evresi yalnızca sembolik değil, doğrudan biyolojik bir yasadır: Ay büyürken (Yeniaydan Dolunaya doğru) tıpkı denizlerdeki med-cezir gibi bitkilerin özsuyu da köklerden yukarıya — gövdeye, yapraklara ve çiçeklere — doğru yükselir.",
            "Ay küçülürken (Dolunaydan Karanlık Aya doğru) ise özsu tekrar toprağın altına, köklere çekilir. Bu yüzden yaprak ve çiçekler büyüyen ayda ve dolunaya yakın toplanırken; şifalı kökler, budama işleri ve arındırma çalışmaları küçülen ayda yapılır."
          ],
          "en": [
            "In classical natural philosophy—from Empedocles' fifth-century BCE doctrine of the Four Roots (*Rhizōmata*) to the Anatolian and Islamic medical tradition of *Anasır-ı Erbaa*—the material world is woven from four elemental states and qualities: **Earth** (cold and dry—structure, weight, endurance), **Water** (cold and moist—flow, memory, feeling), **Air** (warm and moist—breath, thought, relation), and **Fire** (warm and dry—will, transformation, motion).",
            "These four elements operate within human temperament as clearly as in nature (a subject explored in depth in the Hand, Face, and Element Reading course): where Earth predominates there is steadiness that may resist change; where Fire and Air predominate there is swift insight that needs grounding. Placing the four elements upon a working table serves first to balance one's own temperament.",
            "In traditional agricultural and herbal calendars, the four phases of the Moon reflect an observable biological rhythm: during the Waxing Moon (from New Moon to Full), moisture and sap draw upward into stems, leaves, and blossoms.",
            "During the Waning Moon (from Full to Dark Moon), sap draws back down into the root system. Consequently, aerial parts (leaves and flowers) have traditionally been harvested near the waxing/full phase, while roots are dug, trees pruned, and spaces cleared during the waning phase."
          ],
          "sv": [
            "I klassisk naturfilosofi — från Empedokles lära om de Fyra Rötterna (*Rhizōmata*) under 400-talet f.Kr. till den anatoliska läkekonstens *Anasır-ı Erbaa* — utgörs den materiella världen av fyra grundtillstånd: **Jord** (kallt och torrt — struktur, tyngd, tålamod), **Vatten** (kallt och fuktigt — flöde, minne, känsla), **Luft** (varmt och fuktigt — andedräkt, tanke, förbindelse) och **Eld** (varmt och torrt — vilja, förvandling, rörelse).",
            "Dessa fyra element verkar lika tydligt i människans temperament som i naturen (vilket studeras närmare i kursen Hand-, Ansikts- och Elementläsning). Att ställa de fyra elementen på sitt arbetsbord handlar först och främst om att balansera det egna temperamentet.",
            "I traditionell jordbruks- och örtkalender speglar månens fyra faser en biologisk rytm: under Tilltagande måne (från nymåne till fullmåne) stiger saven uppåt i stjälkar, blad och blommor.",
            "Under Avtagande måne drar sig saven åter ned mot rötterna. Därför skördas blad och blommor traditionellt under tilltagande måne, medan rötter grävs upp, träd beskärs och rening utförs under avtagande måne."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Çalışma Masasında (Sunakta) Dört Yön ve Dört Element",
              "body": "Sade bir çalışma masasında Kuzey yönüne bir taş veya bir kase kaya tuzu (Toprak), Doğu yönüne tütsü veya bir tüy (Hava), Güney yönüne balmumu bir mum (Ateş), Batı yönüne ise temiz bir kase kaynak suyu (Su) yerleştirilir. Ortada ise uygulayıcının kendi nefesi ve bilinci (Beşinci Element / Aether) durur."
            },
            {
              "heading": "Büyüyen Ay ve Dolunay: Tohum ve Yaprak Zamanı",
              "body": "Yeniay (Hilal) niyetin toprağa atıldığı sessiz başlangıçtır. İlk Dördün ve Büyüyen Ay aşamasında projeler büyütülür, toprak üstü bitkiler toplanır ve gücü artıran çalışmalar yapılır. Dolunay ise ışığın ve özsuyun zirveye çıktığı hasat ve tamamlanma gecesidir."
            },
            {
              "heading": "Küçülen Ay ve Karanlık Ay: Kök ve Budama Zamanı",
              "body": "Dolunay geçtikten sonra enerji içe çekilmeye başlar. Bu evrede fazlalıklar budanır, alışkanlıklar bırakılır, ev ve eşik temizliği yapılır, toprağın altındaki kökler (karahindiba kökü, ayrık otu kökü, meyan kökü gibi) çıkarılır."
            }
          ],
          "en": [
            {
              "heading": "The Four Elements Upon the Working Table",
              "body": "On a simple study table, North holds a stone or bowl of rock salt (Earth); East holds incense or a feather (Air); South holds a beeswax candle (Fire); and West holds a bowl of clean spring water (Water). At the center stands the practitioner's own awareness."
            },
            {
              "heading": "New, Waxing, and Full Moon: Seed and Canopy",
              "body": "The New Crescent plants the seed of intention. During the Waxing phase, projects are built up and above-ground herbs are gathered. The Full Moon marks peak illumination and maturation."
            },
            {
              "heading": "Waning and Dark Moon: Root and Pruning",
              "body": "After the Full Moon, energy draws inward and downward. This is the classic season for pruning excess, releasing habits, deep house-clearing, and harvesting medicinal roots."
            }
          ],
          "sv": [
            {
              "heading": "De Fyra Elementen på Arbetsbordet",
              "body": "På ett enkelt arbetsbord placeras en sten eller skål med bergsalt i Norr (Jord), rökelse eller fjäder i Öster (Luft), ett bivaxljus i Söder (Eld) och en skål källvatten i Väster (Vatten). I mitten vilar utövarens egen närvaro."
            },
            {
              "heading": "Nymåne, Tilltagande och Fullmåne: Frö och Krona",
              "body": "Den första nymånskäran sår avsiktens frö. Under tilltagande måne byggs arbetet upp och ovanjordiska örter samlas. Fullmånen markerar mognad och full belysning."
            },
            {
              "heading": "Avtagande och Mörkmåne: Rot och Beskärning",
              "body": "Efter fullmånen drar sig kraften inåt och nedåt. Detta är den klassiska tiden för beskärning, rensning, tröskeltvätt och skörd av läkande rötter."
            }
          ]
        },
        "items": {
          "tr": [
            "Toprak (Kuzey · Soğuk ve Kuru): Kaya tuzu, taş ve kökler; bedensel sağlamlık, sabır ve maddi sınır.",
            "Hava (Doğu · Sıcak ve Nemli): Tütsü dumanı ve yapraklar; zihin berraklığı, nefes, söz ve başlangıç.",
            "Ateş (Güney · Sıcak ve Kuru): Balmumu alevi ve reçineler; irade, cesaret, dönüşüm ve canlılık.",
            "Su (Batı · Soğuk ve Nemli): Kaynak suyu ve çiçekler; sezgi, duygusal akış, hafıza ve şifa.",
            "Büyüyen Ay (Hilal → Dolunay): Özsuyun yapraklara yükseldiği, kurma ve büyütme evresi.",
            "Küçülen Ay (Dolunay → Karanlık Ay): Özsuyun köklere indiği, budama, sadeleşme ve arınma evresi."
          ],
          "en": [
            "Earth (North · Cold & Dry): Rock salt, stone, and roots; physical stability, patience, and form.",
            "Air (East · Warm & Moist): Incense smoke and leaves; mental clarity, breath, speech, and dawn.",
            "Fire (South · Warm & Dry): Beeswax flame and resins; will, courage, vitality, and transmutation.",
            "Water (West · Cold & Moist): Spring water and blossoms; intuition, memory, emotional flow, and healing.",
            "Waxing Moon (Crescent → Full): Rising sap; the phase for building, planting, and gathering aerial herbs.",
            "Waning Moon (Full → Dark): Descending sap; the phase for pruning, root harvest, and clearing."
          ],
          "sv": [
            "Jord (Norr · Kallt & Torrt): Bergsalt, sten och rötter; fysisk stadga, tålamod och form.",
            "Luft (Öster · Varmt & Fuktigt): Rökelserök och blad; klar tanke, andedräkt, ord och gryning.",
            "Eld (Söder · Varmt & Torrt): Bivaxlåga och hartser; vilja, mod, livskraft och förvandling.",
            "Vatten (Väster · Kallt & Fuktigt): Källvatten och blommor; intuition, minne, flöde och läkedom.",
            "Tilltagande Måne (Skära → Full): Stigande sav; tid för uppbyggnad och skörd av blad och blommor.",
            "Avtagande Måne (Full → Mörk): Sjunkande sav; tid för beskärning, rotskörd och rening."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Mizacındaki Eksik Elementi Dengelemek",
            "steps": [
              "Bugünkü halini tart: Zihnin çok hızlı dönüyor ve uyuyamıyorsan Hava/Ateş fazladır, Toprak ve Su eksiktir; tam tersine yerinden kalkacak gücün yoksa Toprak ağırlaşmıştır, Ateş ve Hava eksiktir.",
              "Eğer Hava fazlaysa ekranı kapat, ayaklarını yere bas ve kök çayı (zencefil veya meyan) iç; eğer Toprak ağırlaşmışsa pencereyi aç, biberiye kokla ve bir mum yak.",
              "Masanın üzerinde dört elementin sembolünü (taş, su, mum, yaprak) eşit mesafede tutarak çalışmana başla."
            ]
          },
          "en": {
            "title": "Study Note · Balancing the Missing Element in Temperament",
            "steps": [
              "Weigh your state today: if thoughts race and sleep is restless, Air and Fire are in excess while Earth and Water are lacking; if heaviness and inertia dominate, Earth has stagnated and needs Fire and Air.",
              "When Air is excessive, step away from screens, touch bare floor or soil, and drink a root decoction; when Earth is heavy, open the window, inhale rosemary, and light a candle.",
              "Arrange the four elemental markers (stone, water, flame, leaf) in balance upon your desk before working."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Att Balansera det Saknade Elementet",
            "steps": [
              "Pröva ditt tillstånd idag: om tankarna rusar i övermått dominerar Luft och Eld medan Jord och Vatten saknas; om tyngd och tröghet råder har Jorden stagnerat och behöver Eld och Luft.",
              "Vid överskott av Luft, lägg undan skärmar och drick en rotdekokt; vid tung Jord, öppna fönstret, dofta på rosmarin och tänd ett ljus.",
              "Ställ de fyra elementens tecken (sten, vatten, låga, blad) i jämvikt på ditt bord innan du arbetar."
            ]
          }
        },
        "closing": {
          "tr": "Ustalık tek bir elementi büyütmek değil, dört elementi aynı masada barış içinde tutmaktır.",
          "en": "Mastery lies not in inflating a single element, but in holding all four at peace upon the same table.",
          "sv": "Mästerskap ligger inte i att förstora ett enda element, utan i att hålla alla fyra i fred vid samma bord."
        },
        "ctaHref": "/egitim/el-yuz-element",
        "ctaLabel": {
          "tr": "El, Yüz ve Element Eğitimini İncele",
          "en": "Explore Element Reading Training",
          "sv": "Utforska Elementläsningskursen"
        }
      },
      {
        "slug": "su-ayna-ve-gozlem",
        "glyph": "V",
        "title": {
          "tr": "Su, Ateş ve Sessiz Gözlem (Scrying)",
          "en": "Water, Flame, and Silent Observation (Scrying)",
          "sv": "Vatten, Låga och Stilla Betraktande (Scrying)"
        },
        "subtitle": {
          "tr": "Koyu su kasesi, balmumu alevi ve rüya kayıt disiplini.",
          "en": "The dark water bowl, the beeswax flame, and the discipline of the dream ledger.",
          "sv": "Den mörka vattenskålen, bivaxlågan och drömdagbokens disciplin."
        },
        "summary": {
          "tr": "Antik Lecanomancy (su kasesi gözlemi), Lychnomancy (mum alevi okuma) ve Oneiromancy (rüya defteri).",
          "en": "Classical Lecanomancy (water-bowl gazing), Lychnomancy (flame observation), and Oneiromancy (the dream ledger).",
          "sv": "Klassisk Lekanomanti (vattenskålsbetraktande), Lyknomanti (lågobservation) och Oneiromanti (drömboken)."
        },
        "paragraphs": {
          "tr": [
            "Antik Babil’deki yağ ve su kaselerinden (Bārûtu geleneğinden), Yunan ve Anadolu kehanet pınarlarına (Didyma, Klaros ve Patara’daki su aynalarına) kadar insanlık binlerce yıldır zihnin gürültüsünü susturmak için durgun bir yüzeye bakma tekniğini kullanmıştır. Tarihsel literatürde su dolu kaseyle yapılan bu dingin gözleme **Lekanomanti (Lecanomancy)**, mum veya kandil aleviyle yapılan gözleme ise **Liknomanti (Lychnomancy)** denir.",
            "Bu çalışmada suyun veya alevin içinde sinema filmi gibi dışsal görüntüler aranmaz. Koyu renkli (siyah sırlı toprak, bazalt veya koyu cam) bir kasenin içindeki durgun suya odaklanıldığında, gözün sürekli hareket eden odaklanma refleksi (sakkadik hareket) yavaşlar; analitik sol beyin susar ve derin sezgisel hafıza yüzeye çıkar.",
            "Aynı disiplin gece uykuda da devam eder. Antik dünyada rüya (Oneiromancy), gündelik bilincin savunma duvarları indiğinde ruhun kendi sembol diliyle konuşması olarak görülürdü. Ancak rüyalar sabah uyandığında ilk beş dakika içinde uçup gider.",
            "Bu yüzden ciddi bir uygulayıcının başucunda mutlaka tarihli bir **Rüya ve Gözlem Defteri** bulunur. Yorum yapmadan önce rüyadaki renk, yön, hayvan, sayı ve baskın duygu olduğu gibi kaydedilir; zaman içinde kişinin kendi sembol sözlüğü ortaya çıkar."
          ],
          "en": [
            "From the oil-and-water divination bowls of Babylonian *Bārûtu* priests to the oracular springs of Anatolia (at Didyma, Claros, and Patara), practitioners across antiquity have used a still reflective surface to quiet mental noise. In classical terminology, gazing into a basin of water is called **Lecanomancy** (or Hydromancy), while observing a steady lamp or candle flame is called **Lychnomancy**.",
            "In authentic practice, one does not strain to project theatrical illusions onto the water. When the eyes rest softly upon still water held in a dark vessel (black-glazed clay, basalt, or dark glass), rapid saccadic eye movements slow down, analytical chatter subsides, and peripheral intuitive perception surfaces.",
            "This same receptivity continues in sleep. Across antiquity, dreams (*Oneiromancy*) were studied as the language in which deeper awareness speaks once waking defenses lower—yet dream memory dissolves within minutes of waking unless anchored.",
            "For this reason, a practitioner keeps a dated **Dream and Observation Ledger** beside the bed. Before interpreting, one records the raw elements—direction, color, animal, number, and prevailing sensation—gradually building an honest personal lexicon of symbols."
          ],
          "sv": [
            "Från de babyloniska *Bārûtu*-prästernas vatten- och oljeskålar till de anatoliska orakelkällorna i Didyma, Klaros och Patara har människan under årtusenden använt en stilla spelande yta för att tysta tankebruset. I klassisk terminologi kallas betraktandet av en vattenskål **Lekanomanti** (eller Hydromanti), medan observation av en ljus- eller oljelåga kallas **Lyknomanti**.",
            "I autentisk praktik försöker man inte tvinga fram yttre synvillor i vattnet. När blicken vilar mjukt på stilla vatten i en mörk skål saktar ögats snabba rörelser ned, det analyserande sinnet tystnar och den intuitiva varseblivningen träder fram.",
            "Samma lyhördhet fortsätter under sömnen. Under antiken betraktades drömmen (*Oneiromanti*) som det bildspråk genom vilket det inre talar när vardagens försvar har lagts ned.",
            "Därför håller en seriös utövare alltid en daterad **Dröm- och Observationsbok** vid sängen. Innan man tolkar antecknar man de enkla grunddragen — riktning, färg, djur, tal och grundkänsla — så att det egna symbolspråket klarnar över tid."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Yumuşak Bakış (Soft Gaze) Tekniği",
              "body": "Suya veya mum alevine bakarken kaşlar çatılmaz ve tek bir noktaya sertçe dikilip kalınmaz. Göz kapakları yarı gevşek bırakılır; suyun yüzeyine değil, sanki suyun birkaç santim derinliğindeki boşluğa bakılıyormuş gibi ‘yumuşak odak’ (periferik bakış) kullanılır."
            },
            {
              "heading": "Balmumu Alevi ve Nefes Kontrolü",
              "body": "Doğal balmumu mumunun alevi, odadaki hava akımına ve karşısında oturan kişinin nefes ritmine anında tepki verir. Alevin karşısında nefesini o kadar sakinleştir ki, 30 santim önündeki alev hiç titremesin; bu, zihnin ve nefesin tam dinginliğe ulaştığının somut ölçüsüdür."
            },
            {
              "heading": "Kişisel Sembol Sözlüğü Oluşturmak",
              "body": "Hazır rüya tabiri kitapları herkes için aynı kalıbı dayatır; oysa bir ormancının rüyasındaki ağaç ile bir denizcinin rüyasındaki ağaç aynı anlama gelmez. Üç ay boyunca kendi rüyalarını ve o gün yaşanan olayları yan yana yazdığında, kendi ruhunun sana hangi sembolle neyi haber verdiğini kesin olarak öğrenirsin."
            }
          ],
          "en": [
            {
              "heading": "The Technique of Soft Gaze",
              "body": "When observing water or flame, the brow remains relaxed rather than furrowed. Instead of staring rigidly at the surface, let the focus soften as though looking slightly through the water into quiet depth, engaging peripheral awareness."
            },
            {
              "heading": "Beeswax Flame and Breath Steadiness",
              "body": "A natural beeswax candle flame responds instantly to air currents and the practitioner's breathing. Sit thirty centimeters from the flame and steady your breath until the flame stands completely motionless—a classic measure of nervous-system stillness."
            },
            {
              "heading": "Building a Personal Lexicon of Symbols",
              "body": "Generic dream dictionaries impose rigid formulas, yet a symbol's meaning depends on the life of the dreamer. By recording your own dreams alongside the events of the following days over three months, your inner vocabulary becomes unmistakable."
            }
          ],
          "sv": [
            {
              "heading": "Den Mjuka Blickens Teknik",
              "body": "Vid betraktande av vatten eller låga hålls pannan avslappnad. Istället för att stirra hårt på ytan låter man blicken mjukna, som om man såg ett stycke ned i vattnets djup med vidgad perifer uppmärksamhet."
            },
            {
              "heading": "Bivaxlågan och Andedräktens Stillhet",
              "body": "Lågan från ett naturligt bivaxljus reagerar omedelbart på luftströmmar och andning. Sitt trettio centimeter från ljuset och gör din andning så lugn att lågan står helt orörlig — ett klassiskt mått på inre stillhet."
            },
            {
              "heading": "Att Bygga sin Egen Symbolordbok",
              "body": "Färdiga drömböcker ger sällan hela sanningen, ty en symbols betydelse växer ur utövarens eget liv. Genom att föra drömdagbok under tre månader framträder ditt eget inre alfabet."
            }
          ]
        },
        "items": {
          "tr": [
            "Lekanomanti (Su Gözlemi): Koyu renkli bir kasedeki durgun kaynak suyuna bakarak zihni berraklaştırma tekniği.",
            "Liknomanti (Alev Gözlemi): Doğal balmumu mumunun sabit alevinde odaklanma ve nefes terbiyesi.",
            "Yumuşak Odak (Periferik Bakış): Gözü yormadan yüzeyin arkasına bakarak analitik zihni dinlendirme.",
            "Oneiromanti (Rüya Kaydı): Uyandığın ilk üç dakika içinde rüyadaki temel sembolleri yorumsuz yazma disiplini.",
            "Ayevî Saat (Alacakaranlık): Güneş battıktan hemen sonraki veya şafaktan hemen önceki en dingin gözlem vakti.",
            "Suyu Toprağa Dökmek: Gözlem bittikten sonra kasedeki suyu lavaboya değil, bir saksıya veya ağacın dibine dökme geleneği."
          ],
          "en": [
            "Lecanomancy (Water Gazing): Quieting the mind by gazing softly into spring water held in a dark bowl.",
            "Lychnomancy (Flame Observation): Training focus and breath stillness before a steady beeswax candle flame.",
            "Soft Focus (Peripheral Gaze): Relaxing rigid focal tension to allow intuitive perception to surface.",
            "Oneiromancy (Dream Ledger): Recording core dream symbols within the first three minutes of waking without premature analysis.",
            "Twilight Threshold: The quietest hours just after sunset or before dawn favored for still observation.",
            "Returning Water to Earth: Pouring the observation water at the base of a living plant or tree when finished."
          ],
          "sv": [
            "Lekanomanti (Vattenbetraktande): Att stilla sinnet genom att se mjukt ned i källvatten i en mörk skål.",
            "Lyknomanti (Lågobservation): Att öva fokus och andningsro framför ett stadigt bivaxljus.",
            "Mjuk Blick (Perifert Seende): Att släppa spänd fokusering så att det inre seendet kan träda fram.",
            "Oneiromanti (Drömdagbok): Att anteckna drömmens grundsymboler under de första minuterna efter uppvaknandet.",
            "Skymningströskeln: De stilla timmarna strax efter solnedgång eller före gryning.",
            "Att Återge Vattnet till Jorden: Att hälla ut vattnet vid roten av ett träd eller en krukväxt efter avslutat arbete."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · 7 Dakikalık Koyu Kase Gözlemi",
            "steps": [
              "Akşam loş ışıkta koyu renkli bir kaseyi temiz suyla doldur; yanına tek bir mum yak ama alevin ışığı doğrudan gözünü almasın.",
              "Suya bakarken gözlerini kısma; nefesini yavaşlat ve zihninden geçen ilk 3 dakikalık günlük düşüncelerin suyun üzerindeki yapraklar gibi akıp gitmesine izin ver.",
              "Son 4 dakikada zihin durulduğunda beliren tek bir kelimeyi veya imgeyi defterine not et ve suyu bir çiçeğin toprağına dök."
            ]
          },
          "en": {
            "title": "Study Note · Seven-Minute Dark Bowl Observation",
            "steps": [
              "At dusk, fill a dark bowl with clean water; set a single candle nearby so its light does not glare directly into your eyes.",
              "Rest a soft gaze upon the water; for the first 3 minutes, allow ordinary thoughts of the day to drift past like leaves on a stream.",
              "In the remaining 4 minutes of stillness, note the single clearest image or word that arises, then pour the water onto the soil of a plant."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Sju Minuters Betraktande vid Mörk Skål",
            "steps": [
              "I skymningen, fyll en mörk skål med rent vatten; ställ ett ljus bredvid så att lågan inte bländar ögonen.",
              "Låt en mjuk blick vila i vattnet; låt under de första 3 minuterna dagens vanliga tankar glida förbi som löv på en bäck.",
              "Under de sista 4 minuterna av stillhet, notera den klaraste bild eller det ord som stiger upp, och häll sedan vattnet vid en växt."
            ]
          }
        },
        "closing": {
          "tr": "Bulanık suya elini sokarsan daha çok bulanır; dokunmadan beklersen tortu dibe çöker ve su kendi kendine ayna olur.",
          "en": "Stir muddy water and it darkens further; leave it untouched, and the sediment settles until the surface becomes a mirror.",
          "sv": "Rör du i grumligt vatten blir det mörkare; låter du det stå stilla sjunker slammet till botten och ytan blir en spegel."
        }
      },
      {
        "slug": "dugum-kese-ve-muhur",
        "glyph": "VI",
        "title": {
          "tr": "Düğüm, Kese ve Koruma Geleneği",
          "en": "Cord, Sachet, and the Tradition of Protection",
          "sv": "Knut, Örtpåse och Beskyddets Tradition"
        },
        "subtitle": {
          "tr": "Somut niyet çapaları, bitkisel keseler ve doğaya geri verme etiği.",
          "en": "Tangible anchors of intention, herbal sachets, and the ethic of returning to the earth.",
          "sv": "Konkreta ankare för avsikten, örtpåsar och etiken i att återbörda till jorden."
        },
        "summary": {
          "tr": "Tarihsel düğüm geleneği (nodus), bitkisel koruma keseleri (amuletum), balmumu mühür ve doğa etiği.",
          "en": "Historical cord-binding (nodus), herbal protection sachets (amuletum), beeswax sealing, and natural ethics.",
          "sv": "Historisk knuttradition (nodus), beskyddande örtpåsar (amuletum), bivaxsigill och naturetik."
        },
        "paragraphs": {
          "tr": [
            "Geleneksel zanaatta soyut bir niyet, somut bir el emeğiyle birleştiğinde kalıcı hale gelir. İnsan zihni uçucudur; dün verdiği kararı yarın unutabilir. Ancak elin dokuduğu bir düğüm (Latince: *nodus*), keten bir kesenin içine özenle konulan üç bitki (Latince: *amuletum*) veya eritilmiş balmumuyla kapatılan bir kağıt, niyetin fiziksel dünyadaki somut çapasıdır.",
            "İp ve düğüm geleneği Mezopotamya’dan (Šurpu tabletlerinden) İskandinav denizcilerine ve Anadolu’daki halı-kilim dokumacılarına kadar her kültürde yaşar: İpi bükmek ve düğümlemek dağınık dikkatini tek bir noktada toplamaktır; düğümü çözmek ise sıkışmış bir süreci serbest bırakmaktır.",
            "Bitkisel keseler (Sachet / Charm Bag) hazırlanırken plastik veya sentetik kumaş kullanılmaz; nefes alan doğal keten, pamuk veya yün kumaş tercih edilir. İçine konulan kurutulmuş bitkiler (örneğin koruma için ardıç, defne ve kaya tuzu; dingin uyku için lavanta, papatya ve pelin otu) her koklandığında sinir sistemine o çalışmanın amacını hatırlatır.",
            "Bu geleneğin en temel yasası **Doğa ve İrade Etiği**dir: Hiçbir çalışma bir başkasının özgür iradesine müdahale etmek, zarar vermek veya zorlamak için yapılmaz; kişi yalnızca kendi alanını, kendi berraklığını ve kendi hanesinin huzurunu korur. Görevini tamamlayan her organik malzeme (otlar, tuz veya ip) çöpe atılmaz; teşekkür edilerek toprağa gömülür veya suya bırakılır."
          ],
          "en": [
            "In traditional craft, an abstract intention becomes durable when joined to deliberate work of the hands. The waking mind is fleeting and easily distracted; yet a knot tied with focused breath (Latin *nodus*), three dried herbs sewn into a linen pouch (*amuletum*), or a letter sealed with pure beeswax serves as a tangible physical anchor for resolve.",
            "Cord and knot lore runs unbroken from Mesopotamian *Šurpu* tablets and Norse mariners' wind-knots to Anatolian loom weavers: spinning and knotting gathers scattered attention into a single point, while untying releases what has been bound.",
            "Herbal sachets are crafted exclusively from breathable natural fibers—linen, cotton, or wool—never synthetic plastic. Filled with dried botanicals (for example: juniper berry, bay leaf, and rock salt for boundary-keeping; or lavender, chamomile, and mugwort beside the pillow for quiet sleep), their scent recalls the nervous system immediately to its set intention.",
            "Underlying the entire craft is a strict **Ethic of Will and Earth**: no work is ever performed to coerce, harm, or override another person's free will; practice is directed toward steadying one's own mind, craft, and household. When an organicachet has completed its season, its herbs are never tossed into trash, but returned respectfully to soil."
          ],
          "sv": [
            "I traditionellt hantverk blir en abstrakt avsikt varaktig när den förenas med händernas konkreta arbete. Tanken är flyktig, men en knut slagen i samlad andning (latin *nodus*), tre torkade örter i en linnepåse (*amuletum*) eller ett sigill i rent bivax fungerar som ett fysiskt ankare för viljan.",
            "Tråd- och knuttraditionen löper i en obruten linje från Mesopotamiens *Šurpu*-tavlor och nordiska sjöfarares vindknutar till Anatoliens vävstolar: att knyta samlar splittrad uppmärksamhet i en punkt; att lösa upp frigör det bundna.",
            "Örtpåsar tillverkas alltid av levande naturmaterial — linne, bomull eller ull. Fyllda med torkade växter (exempelvis enbär, lagerblad och bergsalt för gränsskydd, eller lavendel, kamomill och gråbo för rofylld sömn) påminner deras doft omedelbart sinnet om arbetets syfte.",
            "Grunden för allt arbete är en strikt **Viljans och Jordens Etik**: inget arbete utförs någonsin för att tvinga, skada eller styra en annan människas fria vilja. När en örtpåse har fullgjort sin tid kastas innehållet inte i soporna, utan återbördas i tacksamhet till jorden."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Üç ve Dokuz Düğüm Ölçüsü",
              "body": "Geleneksel ip çalışmalarında düğümler uçtan uca sırayla değil, önce iki uç ve orta sabitlenerek dengeli bir simetriyle atılır. Üç düğüm (Başlangıç · Süreç · Tamamlanma) veya dokuz düğüm (üç kere üçlük tam döngü) en sık kullanılan tarihsel ölçüdür."
            },
            {
              "heading": "Keten Kese (Amuletum) İçerikleri",
              "body": "Bir kesenin içine çok fazla malzeme doldurulmaz; genellikle 3 temel unsur seçilir: 1. Topraklayıcı bir mineral (küçük bir parça kaya tuzu veya kuvars/akik taşı), 2. Koruyucu bir ağaç yaprağı veya meyvesi (defne yaprağı, ardıç tohumu veya meşe palamudu), 3. Yönlendirici bir aromatik bitki (biberiye, adaçayı veya lavanta)."
            },
            {
              "heading": "Döngüyü Kapatmak: Toprağa İade",
              "body": "Hazırlanan bir kese genellikle bir mevsim (üç ay) veya bir yıl boyunca taşınır. Süresi dolduğunda keten kese açılır, içindeki kurutulmuş bitkiler ve taş doğada bir ağacın köküne bırakılır; böylece alınan enerji doğaya geri verilmiş olur."
            }
          ],
          "en": [
            {
              "heading": "The Measure of Three and Nine Knots",
              "body": "In traditional cord work, knots are spaced with deliberate symmetry—anchoring the two ends and the center before filling the intervals. Three knots (Beginning · Middle · Completion) or nine knots (the threefold triad) form the classic measure."
            },
            {
              "heading": "Composing the Linen Sachet (Amuletum)",
              "body": "A well-made sachet is never cluttered; it typically unites three elements: (1) a grounding mineral (a grain of rock salt, quartz, or agate), (2) a steadfast tree token (bay leaf, juniper berry, or acorn), and (3) an aromatic herb (rosemary, sage, or lavender)."
            },
            {
              "heading": "Closing the Cycle: Return to the Soil",
              "body": "A seasonal sachet is kept for one quarter of the year (three months) or a full turn of the wheel. When its work is done, the pouch is untied and its botanicals are buried at the roots of a tree, returning the loan to the earth."
            }
          ],
          "sv": [
            {
              "heading": "Tre och Nio Knutars Mått",
              "body": "I traditionellt trådarbete placeras knutarna i medveten symmetri — först i ändarna och i mitten. Tre knutar (Början · Mitt · Fullbordan) eller nio knutar (tre gånger tre) utgör det klassiska måttet."
            },
            {
              "heading": "Att Sätta Samman Linnepåsen (Amuletum)",
              "body": "En välbalanserad örtpåse hålls enkel och förenar oftast tre beståndsdelar: (1) ett jordande mineral (bergsalt, kvarts eller agat), (2) ett trädtecken (lagerblad, enbär eller ekollon) och (3) en aromatisk ört (rosmarin, salvia eller lavendel)."
            },
            {
              "heading": "Att Sluta Kretsloppet: Åter till Jorden",
              "body": "En örtpåse bärs ofta under en årstid (tre månader) eller ett helt år. När dess tid är ute knyts påsen upp och växterna läggs ned vid rötterna av ett träd."
            }
          ]
        },
        "items": {
          "tr": [
            "Nodus (Üçlü Düğüm): Doğal yün veya keten ip üzerinde nefesi ve kararı sabitleyen üç aşamalı düğüm.",
            "Amuletum (Keten Kese): İçinde bir taş, bir ağaç yaprağı ve bir ot bulunan geleneksel koruma kesesi.",
            "Balmumu Mühür: Yazılan bir kararı veya çalışma notunu kapatıp sabitleyen doğal arı mumu.",
            "Ardıç · Defne · Kaya Tuzu: Hane ve yolculuk korumasında kullanılan en eski üçlü karışım.",
            "İrade Etiği: Başkasının iradesine dokunmama, yalnızca kendi merkezini ve sınırını koruma yasası.",
            "Toprağa İade: Görevini tamamlayan tüm doğal malzemeleri çöpe atmayıp toprağa geri verme disiplini."
          ],
          "en": [
            "Nodus (Threefold Knot): Anchoring breath and resolve along a natural wool or linen cord.",
            "Amuletum (Linen Sachet): Traditional pouch uniting one mineral, one tree leaf, and one herb.",
            "Beeswax Seal: Pure beeswax pressed over a written resolve to mark completion.",
            "Juniper · Bay · Rock Salt: The classic triad for threshold and travel protection.",
            "Ethic of Free Will: The law of never encroaching upon another's will, tending only one's own center.",
            "Return to the Soil: Burying spent herbs and natural materials cleanly at the roots of a tree."
          ],
          "sv": [
            "Nodus (Trefaldig Knut): Att förankra andedräkt och beslut längs ett snöre av ull eller lin.",
            "Amuletum (Linnepåse): Traditionell örtpåse som förenar en sten, ett trädblad och en ört.",
            "Bivaxsigill: Rent bivax som förseglar ett nedskrivet beslut.",
            "En · Lager · Bergsalt: Den klassiska triaden för tröskel- och färdskydd.",
            "Den Fria Viljans Etik: Lagen att aldrig ingripa i en annans vilja, utan vårda sitt eget centrum.",
            "Återbördande till Jorden: Att lägga använda örter och naturmaterial tillbaka vid trädets rötter."
          ]
        },
        "practice": {
          "tr": {
            "title": "Çalışma Notu · Mevsimlik Keten Kese Hazırlığı",
            "steps": [
              "Küçük bir parça doğal keten veya pamuk kumaşın ortasına 1 yaprak kurutulmuş Defne (odak), 3 adet Ardıç tohumu (sınır) ve 1 iri tane Kaya Tuzu (topraklanma) koy.",
              "Kumaşı bohça gibi toplayıp doğal bir iple bağlarken üç düğüm at: İlk düğümde ‘Bedenim sağlam’, ikinci düğümde ‘Zihnim berrak’, üçüncü düğümde ‘Alanım dengede’ de.",
              "Bu keseyi çalışma masanın köşesinde veya çantanda bir mevsim boyunca tut; mevsim değiştiğinde içindekileri toprağa geri ver."
            ]
          },
          "en": {
            "title": "Study Note · Preparing a Seasonal Linen Sachet",
            "steps": [
              "In the center of a small square of natural linen or cotton, place 1 dried Bay leaf (focus), 3 Juniper berries (boundary), and 1 grain of Rock Salt (grounding).",
              "Gather the cloth and tie it with natural cord using three knots: on the first say 'Steadfast in body,' on the second 'Clear in mind,' and on the third 'Balanced in space.'",
              "Keep the sachet on your study table or in your bag for one season; at the next solstice or equinox, return its contents to the earth."
            ]
          },
          "sv": {
            "title": "Studieanteckning · Att Bereda en Årstidspåse i Linne",
            "steps": [
              "Lägg mitt på en liten kvadrat av naturligt linne eller bomull 1 torkat Lagerblad (fokus), 3 Enbär (gräns) och 1 korn Bergsalt (jordning).",
              "Samla tyget och knyt med naturtråd i tre knutar: vid den första säg 'Stadig i kroppen', vid den andra 'Klar i sinnet' och vid den tredje 'Balanserad i rummet.'",
              "Ha påsen på ditt arbetsbord under en årstid; vid nästa solstånd eller dagjämning, lämna tillbaka innehållet till jorden."
            ]
          }
        },
        "closing": {
          "tr": "Topraktan aldığını toprağa saygıyla geri veren elin bereketi hiç eksilmez.",
          "en": "The hand that returns to the earth with gratitude what it borrowed from the earth never lacks.",
          "sv": "Den hand som i tacksamhet återger till jorden vad den lånat ur jorden saknar aldrig kraft."
        }
      },
      {
        "slug": "cadi-sisesi-ve-muska",
        "glyph": "🏺",
        "image": "/witchcraft/cadi-sisesi-arkeoloji.jpg",
        "title": {
          "tr": "Arkeolojik Koruma Nesneleri: Cadı Şişesi, Nazar ve Tılsım",
          "en": "Archaeological Wards: Witch Bottles, Evil Eye, and Talismans",
          "sv": "Arkeologiska Skyddsföremål: Häxflaskor, Onda Ögat och Talismaner"
        },
        "subtitle": {
          "tr": "Ocak taşı altına gömülen 17. yüzyıl Bellarmine şişeleri, bükülmüş demir ve eşik mühürleri",
          "en": "17th-century Bellarmine bottles buried beneath hearthstones, bent iron, and threshold seals",
          "sv": "1600-talets Bellarmine-flaskor under härdstenen, böjt järn och tröskelsigill"
        },
        "summary": {
          "tr": "Arkeolojik kazılarda bulunan gerçek ‘Cadı Şişeleri’ (Witch Bottles), bükülmüş demir çiviler, Anadolu/Akdeniz nazarlığı ve koruyucu tılsımlar.",
          "en": "Authentic 'Witch Bottles' uncovered in archaeological digs, bent iron nails, Mediterranean/Anatolian evil-eye wards, and protective talismans.",
          "sv": "Arkeologiska fynd av äkta 'häxflaskor' (Witch Bottles), böjda järnspikar, onda ögat-skydd och skyddande talismaner."
        },
        "paragraphs": {
          "tr": [
            "Avrupa ve Britanya arkeolojisinde (özellikle Londra Müzesi ve Doğu Anglia kazılarında) 16. ve 17. yüzyıllardan kalma eski taş evlerin ocak taşlarının (hearthstone) veya kapı eşiklerinin altında yüzlerce gerçek ‘Cadı Şişesi’ (Witch Bottle) bulunmuştur. Genellikle üzerinde sakallı bir yüz kabartması bulunan taş-seramik Bellarmine (Bartmann) testilerinden yapılan bu şişeler, ‘kötülük yapmak’ için değil, tam tersine haneyi kem gözden, hasetten ve yıkıcı niyetlerden korumak (apotropaik savunma) için gömülmüştür.",
            "Arkeologların X-ışını ve laboratuvar analizleriyle incelediği bu şişelerin içinde her zaman belirli bir sembolik reçete yer alır: Kasıtlı olarak U şeklinde bükülmüş demir çiviler ve toplu iğneler (gelen kem niyeti yakalayıp etkisizleştirmek için), biberiye dalları, dikenler, bazen kalp şeklinde kesilmiş bir keçe parçası ve hane sahibinin kendi izini taşıyan sıvı veya saç teli.",
            "Bu uygulamanın altında yatan halk fiziği son derece nettir: Ocak bacası ve kapı eşiği, evin dış dünyaya açılan en hassas iki boğazıdır. Ocak taşının altına gömülen şişe, haneye yönelen görünmez düşmanlığı veya hasedi kendi içine çeken bir ‘paratoner’ (yıldırımsavar) ya da tuzak işlevi görür; ocak yandıkça şişenin içindeki demir ve biberiye aktif kalır.",
            "Aynı koruyucu mantık Akdeniz, Mezopotamya ve Anadolu coğrafyasında mavi cam Göz Taşı (Nazar boncuğu), üzerine koruyucu dualar veya geometrik mühürler kazınmış bakır/gümüş levhalar ve kurşun dökme geleneğinde görülür. Mavi cam ve göz sembolü, karşıdan gelen keskin ve kıskanç bakışı (‘kem göz’) daha eşikten içeri girmeden aynalayıp kırar."
          ],
          "en": [
            "In British and European archaeology (notably collections in the Museum of London and East Anglia), over two hundred authentic 16th- and 17th-century 'Witch Bottles' have been excavated from beneath the hearthstones and thresholds of historic houses. Typically made from salt-glazed Bellarmine (Bartmann) stoneware jugs bearing a bearded mask on the neck, these bottles were buried not to harm, but as counter-magical apotropaic wards to defend the household against malice and envy.",
            "X-ray and laboratory analyses of sealed archaeological bottles reveal a remarkably consistent formula inside: iron nails and brass pins deliberately bent into L or U shapes (to snag and neutralize incoming ill-will), sprigs of rosemary, thorns, and personal links belonging to the homeowner.",
            "The folk physics behind the practice is unmistakable: the chimney hearth and the front threshold are the two most vulnerable openings of a house. Buried beneath the hearthstone, the bottle acts as a spiritual lightning-rod or decoy trap, drawing hostile intent into the iron and thorns while the hearth fire above keeps the ward warm and active.",
            "Across the Mediterranean, Mesopotamia, and Anatolia, the exact same apotropaic principle appears in blue glass Eye Beads (Nazar), inscribed copper or silver amulet cases (Hamayıl), and lead-pouring rites. The blue glass eye mirrors and shatters envious glare ('the evil eye') at the threshold before it can touch the household."
          ],
          "sv": [
            "Inom europeisk och brittisk arkeologi (särskilt vid Museum of London och utgrävningar i East Anglia) har över tvåhundra äkta 'häxflaskor' (Witch Bottles) från 1500- och 1600-talen grävts fram under härdstenar och trösklar i gamla hus. Dessa krus av stengods (ofta Bellarmine-krus med ett skäggigt ansikte på halsen) grävdes inte ned för att skada, utan som apotropeiska skydd för att värna gården mot avund och illvilja.",
            "Röntgen- och laboratorieanalyser av förseglade arkeologiska flaskor visar ett tydligt innehåll: järnspikar och mässingsnålar som avsiktligt böjts (för att fånga upp och oskadliggöra fientlig avsikt), kvistar av rosmarin, törnen och personliga spår från husets ägare.",
            "Den folkliga logiken bakom bruket är glasklar: eldstaden och dörrtröskeln är husets två känsligaste öppningar mot yttervärlden. Nedgrävd under härdstenen fungerar flaskan som en åskledare som drar in illvilja i järnet och törnena.",
            "Runt Medelhavet och i Anatolien syns samma skyddsprincip i det blå glasögat (Nazar), graverade amuletter av koppar eller silver samt blystöpning. Det blå ögat speglar och bryter den avundsjuka blicken redan vid tröskeln."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "Bellarmine (Bartmann) Şişeleri ve Bükülmüş Demir Çiviler",
              "body": "Arkeolojik şişelerdeki çivilerin ve iğnelerin neden düz değil de ‘bükülmüş’ olduğu uzun süre araştırılmıştır: Halk zanaatında bir demir çiviyi bükmek, onun maddi dünyadaki sıradan işlevini bitirip onu ‘öteki alanda’ (görünmez sınırda) çalışan bir kancaya dönüştürmektir. Bükülmüş demir, dağınık ve sivri niyeti yakalayıp toprağa mühürler."
            },
            {
              "heading": "Ocak Taşı ve Bacanın Korunması",
              "body": "Eski evlerde kapılar ve pencereler kilitlenebilirdi ama baca her zaman gökyüzüne açıktı. Bu yüzden ocak taşı (hearthstone) altına koruyucu şişe gömmek veya şömine kirişine kurutulmuş ot, demir nal ve delikli taş asmak, evin açık kalan tek dikey kapısını mühürlemek demekti."
            },
            {
              "heading": "Nazar (Kem Göz) ve Aynalama İlkesi",
              "body": "Antik Yunan’da ‘Baskania’, Roma’da ‘Fascinum’, Anadolu’da ise ‘Nazar / Göz Değmesi’ olarak bilinen olgu, aşırı odaklanmış kıskançlık veya hayranlık bakışının karşı tarafta yarattığı ağırlıktır. Mavi cam, tuz, üzerlik tohumu ve demir gibi nesneler bu bakışın odağını kendi üzerine çekerek (paratoner etkisi) ev sahibini korur."
            }
          ],
          "en": [
            {
              "heading": "Bellarmine Stoneware and Why the Iron Nails Were Bent",
              "body": "Archaeologists noted that the nails and pins inside witch bottles were almost always bent before insertion. In folk craft, bending a nail retires it from ordinary physical carpentry and dedicates it as a hook on the unseen threshold—catching sharp, hostile intent and grounding it safely in earth."
            },
            {
              "heading": "Guarding the Hearthstone and Chimney Flue",
              "body": "In early modern homes, doors and shutters could be bolted at night, but the chimney flue remained permanently open to the sky. Burying a ward beneath the hearthstone or hanging iron and herbs on the chimney beam sealed the home's vertical opening."
            },
            {
              "heading": "The Evil Eye (Baskania / Nazar) and the Principle of Deflection",
              "body": "Known as Baskania in ancient Greece, Fascinum in Rome, and Nazar in Anatolia, the 'evil eye' is the disruptive weight of envious or overly fixated gaze. Blue glass, salt, Syrian rue (Peganum harmala), and iron act as visual and energetic decoys, absorbing or reflecting the gaze first."
            }
          ],
          "sv": [
            {
              "heading": "Bellarmine-stengods och Varför Järnspikarna Böjdes",
              "body": "Arkeologer har noterat att spikarna och nålarna i häxflaskorna nästan alltid böjdes innan de lades ned. I folkligt hantverk innebär det att böja en spik att man tar den ur vanligt bruk och gör den till en krok vid den osynliga tröskeln."
            },
            {
              "heading": "Att Vakta Härdstenen och Skorstenen",
              "body": "I äldre hus kunde dörrar och fönsterbommar låsas om natten, men skorstenen stod alltid öppen mot himlen. Att gräva ned ett skydd under härdstenen eller hänga järn vid spiselkransen förseglade husets vertikala port."
            },
            {
              "heading": "Onda Ögat (Baskania / Nazar) och Avledningsprincipen",
              "body": "Känt som Baskania i Grekland, Fascinum i Rom och Nazar i Anatolien beskriver 'onda ögat' den tyngd som en avundsjuk blick skapar. Blått glas, salt och järn fungerar som blickfång som bryter udden av blicken."
            }
          ]
        },
        "items": {
          "tr": [
            "🏺 Bellarmine Cadı Şişesi: 17. yüzyılda ocak taşı altına gömülen, içinde demir çivi ve biberiye bulunan seramik koruma kabı.",
            "Bükülmüş Demir Çiviler: Sivri ve haset dolu niyeti yakalayıp toprağa bağlayan apotropaik demir kancalar.",
            "Biberiye ve Gül Dikeni: Şişelerin içine konulan, arındırıcı ve sınır çizici bitkisel koruyucular.",
            "Nazar / Göz Taşı: Kem gözü ve kıskanç bakışı daha eşikteyken kırıp yansıtan mavi cam mühür.",
            "Kurşun ve Balmumu Dökümü: Suda ani soğuyan erimiş madenin şekli üzerinden ağırlığı çözme ve arındırma geleneği.",
            "Eşik Tuz Kavanozu: Modern bir evde kapı girişine konulan kaya tuzu, biberiye ve demir anahtar kavanozu."
          ],
          "en": [
            "🏺 Bellarmine Witch Bottle: 17th-century stoneware jug buried beneath the hearth with iron nails and rosemary as a household ward.",
            "Bent Iron Nails: Apotropaic iron hooks designed to snag and ground sharp, envious intent.",
            "Rosemary and Hawthorn Thorns: Botanical guardians placed inside protection vessels to cleanse and hold boundaries.",
            "Nazar / Blue Eye Bead: Blue glass seal that reflects and shatters envious glare at the doorway.",
            "Molybdomancy (Lead/Wax Pouring): Dropping molten metal or wax into cold water to release shock and stagnant weight.",
            "Threshold Salt Jar: A contemporary hearth jar of rock salt, rosemary, and an old iron key placed near the entrance."
          ],
          "sv": [
            "🏺 Bellarmine-häxflaska: 1600-talskrus av stengods nedgrävt under härden med järnspikar och rosmarin som gårdsskydd.",
            "Böjda Järnspikar: Apotropeiska järnkrokar som fångar upp och jordar skarp illvilja.",
            "Rosmarin och HagtornsTaggar: Växtväktare som läggs i skyddskärl för att rena och hålla gränsen.",
            "Nazar / Blå Ögonpärla: Blått glassigill som speglar och bryter avundsjuka blickar vid dörren.",
            "Bly- och Vaxstöpning: Att gjuta smält metall eller bivax i kallt vatten för att lösa upp tyngd och oro.",
            "Tröskelns Saltburk: En enkel glasburk med bergsalt, rosmarin och en gammal järnnyckel vid hemmets ingång."
          ]
        },
        "practice": {
          "tr": {
            "title": "Uygulama · Hane Eşiği İçin Modern Koruma Kavanozu",
            "steps": [
              "Küçük, kapaklı cam bir kavanozun tabanına üç parmak kalınlığında doğal kaya tuzu doldur.",
              "Tuzun üzerine üç dal kurutulmuş biberiye, üç adet karanfil tanesi ve artık kullanmadığın eski bir demir anahtar (veya temiz bir demir çivi) yerleştir.",
              "Kavanozun kapağını kapatıp evin dış kapısına yakın bir rafa veya vestiyer köşesine koy; her mevsim dönümünde (3 ayda bir) içindeki tuzu toprağa veya suya dökerek yenile."
            ]
          },
          "en": {
            "title": "Practice · A Modern Threshold Protection Jar",
            "steps": [
              "Fill the bottom third of a small lidded glass jar with coarse natural rock salt.",
              "Place three sprigs of dried rosemary, three whole cloves, and an old iron key (or clean iron nail) atop the salt.",
              "Seal the jar and set it on a shelf near your front entrance; at each seasonal turn (every three months), empty the salt into running water or earth and refresh it."
            ]
          },
          "sv": {
            "title": "Praktik · En Nutida Skyddsburk för Tröskeln",
            "steps": [
              "Fyll botten av en liten glasburk med lock med grovt naturligt bergsalt.",
              "Lägg tre kvistar torkad rosmarin, tre hela kryddnejlikor och en gammal järnnyckel (eller järnspik) ovanpå saltet.",
              "Förslut burken och ställ den nära ytterdörren; vid varje årstidsskifte (var tredje månad) tömmer du saltet och förnyar det."
            ]
          }
        },
        "closing": {
          "tr": "Ocak taşı sıcaksa, eşikteki demir uyanıktır; kem göz kendi aynasında kırılır.",
          "en": "When the hearthstone is warm, the iron at the threshold stays awake; the envious eye breaks upon its own mirror.",
          "sv": "När härdstenen är varm är järnet vid tröskeln vaket; den avundsjuka blicken bryts mot sin egen spegel."
        }
      },
      {
        "slug": "bilge-kadinlar-ve-sifacilar",
        "glyph": "📜",
        "image": "/witchcraft/bilge-sifacilar-defter.jpg",
        "title": {
          "tr": "Tarihte Kır Şifacıları: Cunning Folk, Läkebok ve Ocaklı Kadınlar",
          "en": "Historical Folk Healers: Cunning Folk, Läkebok, and Hearth Healers",
          "sv": "Historiska Läkekunniga: Kloka Gummor, Läkebok och Härdens Botare"
        },
        "subtitle": {
          "tr": "Köy ebeleri, İskandinav ‘Kloka Gummor’, İtalyan Benandanti ve Anadolu Ocaklı geleneği",
          "en": "Village midwives, Scandinavian 'Kloka Gummor', Italian Benandanti, and Anatolian Ocaklı healers",
          "sv": "Byarnas jordemödrar, skandinaviska 'Kloka gummor', italienska Benandanti och anatoliska Ocaklı-botare"
        },
        "summary": {
          "tr": "Tarihçi Owen Davies ve Carlo Ginzburg’un belgeleriyle gerçek halk şifacıları, el yazması Läkebok defterleri ve Anadolu Ocaklıları.",
          "en": "Real historical folk healers documented by Owen Davies and Carlo Ginzburg, handwritten Läkebok herbals, and Anatolian Ocaklı lineages.",
          "sv": "Verkliga historiska läkekunniga dokumenterade av Owen Davies och Carlo Ginzburg, handskrivna Läkeböcker och anatoliska Ocaklı-linjer."
        },
        "paragraphs": {
          "tr": [
            "Popüler kültürün uydurduğu karikatürlerin ötesinde, Avrupa, İskandinavya ve Anadolu kırsal tarihinde köylerin gerçek yükünü taşıyan yerel bilge kadınlar ve erkekler vardı: İngiltere’de ‘Cunning Folk’ (Bilge/Hünerli Kişiler), İskandinavya’da ‘Kloka gummor / Kloka gubbar’ (Bilge Kadınlar ve Erkekler), İtalya Friuli’de ‘Benandanti’ ve Anadolu’da ‘Ocaklı Kadınlar / Otacılar’.",
            "Tarihçi Owen Davies’in mahkeme ve kilise arşivlerinden belgelediği üzere Cunning Folk ve Kloka Gummor; modern tıbbın henüz köylere ulaşmadığı yüzyıllarda doğum yaptıran ebeler, kırık-çıkık saran sargıcılar, merhem ve tentür hazırlayan aktarlar, kayıp eşyaları ve su kaynaklarını radyesteziyle bulan ve ‘nazar / büyü’ korkusu yaşayan köylüyü sakinleştirip koruma muskası yazan kişilerdi.",
            "İsveç, Norveç ve Danimarka’da bu şifacılar kuşaktan kuşağa geçen ve adına ‘Svartkonstbok’ veya ‘Läkebok’ (Şifa Kitabı) denilen el yazması küçük defterler tutarlardı. Bu defterlerde Latince ve İskandinavca bitki reçeteleri, kan durdurma duaları, keten ipiyle ölçüm (Stöpa / Mätning) yöntemleri ve hangi otun hangi ay evresinde toplanacağı titizlikle yazılıydı.",
            "Tarihçi Carlo Ginzburg’un 16. yüzyıl Engizisyon arşivlerinde keşfettiği Kuzey İtalya’daki ‘Benandanti’ (‘İyi Yürüyenler’) ise doğuştan amniyon zarıyla (‘duvaklı’ / caul ile) doğan ve yılda dört mevsim dönümünde rüyalarında köylerinin ekinlerini ve bağlarını karanlık güçlere karşı rezene (fennel) dallarıyla savunduklarına inanan gerçek bir tarımsal şaman-şifacı geleneğiydi."
          ],
          "en": [
            "Beyond modern pop-culture caricatures, the rural history of Europe, Scandinavia, and Anatolia was sustained by real local practitioners: the 'Cunning Folk' of Britain, the 'Kloka gummor and Kloka gubbar' ('Wise Women and Wise Men') of Sweden and Norway, the 'Benandanti' of Friuli in Italy, and the 'Ocaklı' hearth-healers and herbalists of Anatolia.",
            "As historian Owen Davies documented from historical archives, Cunning Folk and Kloka Gummor served as the indispensable backbone of village life for centuries: acting as midwives, bone-setters, herbalists preparing salves and tinctures, dowsers locating water and lost livestock, and specialists in unbewitching and household protection.",
            "Across Sweden, Norway, and Denmark, these practitioners kept small handwritten receipt books passed down within families, known as a 'Läkebok' (Book of Healing) or 'Svartkonstbok'. Inside were practical herbal poultices, prayers to staunch bleeding, linen-thread measuring rites (Mätning), and lunar calendars for harvesting roots.",
            "In northern Italy, historian Carlo Ginzburg uncovered the 16th-century 'Benandanti' ('Good Walkers')—men and women born with the amniotic caul who believed their spirits went forth during the four seasonal Ember Days armed with stalks of fennel to protect their village harvests and vineyards."
          ],
          "sv": [
            "Bortom populärkulturens karikatyrer bars landsbygdens historia i Skandinavien, Europa och Anatolien upp av verkliga lokala utövare: Nordens 'Kloka gummor och Kloka gubbar', Storbritanniens 'Cunning Folk', Italiens 'Benandanti' och Anatoliens 'Ocaklı' (härdbotare och örtkunniga).",
            "Som historikern Owen Davies och nordiska folklivsforskare har dokumenterat var Kloka gummor och Cunning Folk under århundraden byarnas oumbärliga stöd: de verkade som jordemödrar, benbrytare, örtkunniga som kokade salvor och dekokter, slagrutemän som fann källor och botare som läste bort oro och avund.",
            "I Sverige, Norge och Danmark förde dessa läkekunniga små handskrivna böcker som gick i arv, kallade 'Läkebok' eller 'Svartkonstbok'. Där samlades praktiska örtrecept, blodstämningsord, mätning med lintråd och regler för vid vilken månfas rötter skulle grävas.",
            "I norra Italien upptäckte historikern Carlo Ginzburg 1500-talets 'Benandanti' ('De goda vandrarna') — människor födda med segerhuva (fosterhinna) som vid årets fyra kvartalsdagar ansågs försvara byns skördar och vingårdar med fänkålsstjälkar."
          ]
        },
        "chapters": {
          "tr": [
            {
              "heading": "İskandinav ‘Kloka Gummor’ ve El Yazması Läkebok Defterleri",
              "body": "İsveç’te 19. yüzyıla kadar her bölgenin tanınan bir ‘Klok Gumma’sı (örneğin Göta kanal bölgesindeki ünlü şifacı kadınlar) vardı. Onların gücü korkudan değil, doğayı tanımaktan, keten sargıdan, ardıç katranından ve hastayı dinleyen sakin otoriteden gelirdi."
            },
            {
              "heading": "Carlo Ginzburg ve ‘Benandanti’ (İyi Yürüyenler)",
              "body": "Ginzburg’un ‘Gece Savaşları’ (I Benandanti) kitabında yayımladığı 1575–1650 arşiv tutanakları, Avrupa halk büyücülüğünün altında aslında çok eski, şamanik bir ‘ekin ve bereket koruma’ inancının yattığını kanıtlamıştır."
            },
            {
              "heading": "Anadolu’da ‘Ocaklı’ Geleneği ve El Verme",
              "body": "Anadolu’da her ‘Ocak’ (örneğin sarılık ocağı, siğil ocağı, yılancık ocağı, kurşun ocağı) belirli bir şifa zanaatında uzmanlaşmış aile soyudur. Ocaklı kişi bilgisini rastgele dağıtmaz; sabrını, ahlakını ve elinin temizliğini sınadığı çırağına ‘El Verme’ töresiyle devreder."
            }
          ],
          "en": [
            {
              "heading": "Scandinavian 'Kloka Gummor' and Handwritten Läkeböcker",
              "body": "Well into the 19th century, every rural parish in Sweden and Norway knew its local 'Klok Gumma'. Their authority rested not on fear, but on deep botanical literacy, juniper tar, linen bindings, and calm bedside presence."
            },
            {
              "heading": "Carlo Ginzburg and the 'Benandanti' (Good Walkers)",
              "body": "Published in Ginzburg's classic study 'The Night Battles', archival trial records from 1575–1650 demonstrated that beneath European folk magic lay an ancient agrarian shamanic stratum dedicated to protecting the community's crops."
            },
            {
              "heading": "The Anatolian 'Ocaklı' (Hearth) Lineage and 'Hand Transmission'",
              "body": "In Anatolia, an 'Ocak' (literally 'Hearth') is a family lineage specializing in a specific healing craft or herbal remedy. An Ocaklı elder passes the craft only to a tested apprentice of clean character through the rite of 'El Verme' ('Giving the Hand')."
            }
          ],
          "sv": [
            {
              "heading": "Skandinaviens 'Kloka Gummor' och Handskrivna Läkeböcker",
              "body": "Ända in på 1800-talet hade varje bygd i Sverige och Norge sin 'Kloka Gumma'. Deras auktoritet vilade inte på fruktan, utan på djup växtkännedom, enbärstjära, linneförband och lugn närvaro."
            },
            {
              "heading": "Carlo Ginzburg och 'Benandanti' (De Goda Vandrarna)",
              "body": "I Ginzburgs klassiska verk om Benandanti (1575–1650) visade arkiven att det under den europeiska folktron låg ett uråldrigt agrart schamanskt skikt inriktat på att skydda byns grödor."
            },
            {
              "heading": "Den Anatoliska 'Ocaklı'-Traditionen (Härdlinjen)",
              "body": "I Anatolien är en 'Ocak' ('Härd') en familjelinje specialiserad på en specifik läkekonst. Kunskapen förs vidare till en prövad lärling genom seden 'El Verme' ('Att ge handen')."
            }
          ]
        },
        "items": {
          "tr": [
            "📜 Läkebok / Şifa Defteri: Kuşaktan kuşağa aktarılan bitki reçeteleri, merhem ölçüleri ve mevsim kayıtları.",
            "Kloka Gummor (İskandinavya): Kuzey köylerinin bitki, doğum, sargı ve eşik koruması bilen bilge kadınları.",
            "Cunning Folk (Britanya): Radyestezi, şifalı otlar ve koruyucu tılsımlarla halka hizmet eden kırsal uzmanlar.",
            "Benandanti (Kuzey İtalya): Mevsim dönümlerinde rezene dalıyla köyün bereketini koruyan ‘İyi Yürüyenler’.",
            "Ocaklı ve El Verme (Anadolu): Şifa ve aktar bilgisinin usta-çırak ahlakıyla ocaktan ocağa aktarılması.",
            "Herbaryum (Kurutulmuş Bitki Atlası): Bitkileri toplandığı yer, tarih ve etkiyle deftere yapıştırarak tanıma disiplini."
          ],
          "en": [
            "📜 Läkebok / Receipt Book: Handwritten family notebook of herbal remedies, salve ratios, and seasonal notes.",
            "Kloka Gummor (Scandinavia): The 'Wise Women' of Nordic parishes skilled in herbs, midwifery, and household wards.",
            "Cunning Folk (Britain): Rural practitioners serving villages through herbalism, dowsing, and protective charms.",
            "Benandanti (Northern Italy): The 'Good Walkers' born with the caul who guarded the harvest at the seasonal turns.",
            "Ocaklı & El Verme (Anatolia): Hearth-lineages transmitting herbal and healing craft from master to apprentice.",
            "Herbarium (Pressed Plant Atlas): The discipline of pressing, labeling, and studying local flora by date and habitat."
          ],
          "sv": [
            "📜 Läkebok / Receptbok: Handskriven familjebok med örtrecept, salvproportioner och årstidsanteckningar.",
            "Kloka Gummor (Skandinavien): Nordiska bygders läkekunniga kvinnor inom örter, förlossning och gårdsskydd.",
            "Cunning Folk (Storbritannien): Landsbygdens utövare inom örtlära, slagruta och skyddande amuletter.",
            "Benandanti (Norra Italien): 'De goda vandrarna' som värnade skörden vid årstidernas vändpunkter.",
            "Ocaklı & El Verme (Anatolien): Härdlinjer där läkekonst och örtkunskap förs vidare från mästare till lärling.",
            "Herbarium (Växtatlas): Disciplinen att pressa, namnge och studera lokala växter efter växtplats och tid."
          ]
        },
        "practice": {
          "tr": {
            "title": "Uygulama · Kendi ‘Läkebok’ (Bitki ve Gözlem Defteri) Kaydını Başlatmak",
            "steps": [
              "Çizgisiz, sağlam ciltli bir defter edin ve ilk sayfasına yaşadığın coğrafyada doğal olarak yetişen 5 şifalı bitkinin (örneğin ıhlamur, kekik, biberiye, adaçayı, sarı kantaron) adını yaz.",
              "Bu bitkilerden birinin küçük bir yaprağını veya çiçeğini kitap arasında kurutup defter sayfasına yapıştır; yanına toplandığı tarihi, ay evresini, kokusunu ve geleneksel kullanımını not et.",
              "Duyduğun her halk bilgisini körü körüne yazmak yerine, modern botanik kaynaklarından (etken maddesini ve güvenli dozunu) doğrulayarak gerçek bir ‘Ocaklı / Bilge’ titizliğiyle kaydet."
            ]
          },
          "en": {
            "title": "Practice · Starting Your Own 'Läkebok' (Herbal & Observation Notebook)",
            "steps": [
              "Dedicate a sturdy unlined notebook and list on its opening pages five medicinal plants that grow naturally in your region (such as linden, thyme, rosemary, sage, or St. John's wort).",
              "Press a small leaf or flower from one plant between heavy pages, mount it in your notebook, and record the date, lunar phase, scent, and traditional preparation.",
              "Cross-check every folk usage against modern botanical pharmacology (active compounds and safe dosage), recording only verified knowledge with the rigor of a true healer."
            ]
          },
          "sv": {
            "title": "Praktik · Att Börja Din Egen 'Läkebok' (Ört- och Observationsbok)",
            "steps": [
              "Skaffa en stadig olinjerad anteckningsbok och skriv på första sidan upp fem läkeväxter som växer i din närhet (till exempel lind, timjan, rosmarin, salvia eller johannesört).",
              "Pressa ett litet blad eller en blomma, fäst det i boken och anteckna datum, månfas, doft och traditionell beredning.",
              "Kontrollera varje folkligt bruk mot modern botanisk kunskap (aktiva ämnen och säker dosering) och för in verifierad kunskap med en läkekunnigs noggrannhet."
            ]
          }
        },
        "closing": {
          "tr": "Gerçek bilgelik gösterişte değil; otu tanıyan gözde, ölçüyü bilen elde ve temiz tutulan defterdedir.",
          "en": "True wisdom lies not in spectacle, but in the eye that knows the herb, the hand that keeps the measure, and the well-kept book.",
          "sv": "Sann visdom ligger inte i skådespel, utan i ögat som känner örten, handen som håller måttet och den välförda boken."
        }
      }
    ]
  },
  "shop": {
    "slug": "shop",
    "closed": true,
    "title": {
      "tr": "Shop",
      "en": "Shop",
      "sv": "Shop"
    },
    "line": {
      "tr": "Atölye ve çalışma nesneleri bölümü şu an kapalıdır. Hazırlıklar tamamlandığında açılacaktır.",
      "en": "The workshop and study objects room is currently closed. It will open when preparations are complete.",
      "sv": "Rummet för hantverk och studieföremål är för närvarande stängt. Det öppnar när förberedelserna är klara."
    },
    "backLabel": {
      "tr": "Hole dön",
      "en": "Back to the hall",
      "sv": "Tillbaka till hallen"
    },
    "doors": []
  }
};

export function findTraditionDoor(traditionSlug: TraditionSlug, doorSlug: string): TraditionSubDoor | null {
  const hall = traditions[traditionSlug];
  return hall.doors.find((d) => d.slug === doorSlug) ?? null;
}
