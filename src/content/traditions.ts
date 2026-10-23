import type { Lang } from "@/lib/copy";

export type TraditionSlug = "saman" | "kelt" | "mezopotamya" | "witchcraft" | "shop";

export type TraditionSection = {
  heading: string;
  body?: string;
  items?: readonly string[];
};

export type TraditionLocale = {
  title: string;
  subtitle: string;
  opening: readonly string[];
  sections: readonly TraditionSection[];
  closing: string;
  ctaLabel?: string;
  ctaHref?: string;
  whatsappLabel?: string;
};

export const traditions: Record<TraditionSlug, Record<Lang, TraditionLocale>> = {
  saman: {
    tr: {
      title: "Şaman",
      subtitle: "Üç Dünya, Düngür ve Kuzeyin Seidr Yolu",
      opening: [
        "Şamanizm bir inanç sistemi değil, doğanın canlı hafızasıyla kurulan doğrudan temas tekniğidir. Şaman; görünen dünya ile görünmeyen diyarlar arasındaki eşikte duran, topluluğun ve kişinin dağılan ruh parçalarını yeniden bütünlüğe çağıran aracıdır.",
        "Bu odada Orta Asya’nın gök-yer-su kozmolojisi, düngürün (şaman davulunun) ritmi ve Kuzey geleneğinin Seidr ile Galdr pratikleri aynı ocakta buluşur. Amaç dünyadan kopmak değil; kökleri toprağa indirip dalları göğe açarak kendi merkezinde yürümektir.",
      ],
      sections: [
        {
          heading: "I. Üç Dünya ve Dünya Ağacı (Kök · Gövde · Dal)",
          items: [
            "Alt Dünya (Kökler ve Toprağın Hafızası): Geçmişin, ata ruhlarının, içgüdüsel kuvvetin ve koruyucu güç hayvanlarının diyarıdır. Köklenmeyen ağaç boy veremez; şaman yolculuğuna önce toprağın altındaki köklerle ve kendi gölgesiyle barışarak başlar.",
            "Orta Dünya (Gövde ve Dört Yön): İçinde nefes aldığımız bu dünyadır. Dağın, suyun, ateşin ve ağaçların iyeleriyle (ruhlarıyla) karşılıklı saygı içinde yaşamayı; doğunun rüzgarını, güneyin ateşini, batının suyunu ve kuzeyin toprağını tanımayı öğretir.",
            "Üst Dünya (Dallar ve Göksel Düzen): Bilgelik rehberlerinin, yıldız hafızasının ve geniş bakışın katmanıdır. Buradan alınan görü, Orta Dünya’da somut bir şifaya ve eyleme dönüştürülmek içindir.",
          ],
        },
        {
          heading: "II. Düngür (Davul), Nefes ve Ruh Şarkısı",
          items: [
            "Düngürün Sesi: Şaman davulu yalnızca bir müzik aleti değil, diyarlar arasında yol alan binektir. Tekdüze ve kalp atışına yakın vuruşlar, zihnin günlük gürültüsünü indirerek bilinci trans eşiğine taşır.",
            "Önd (Yaşam Nefesi): Her ritüel doğru nefesle açılır. Nefes, niyeti bedenden dışarıya ve ruhlar alemine taşıyan ilk köprüdür.",
            "Ruh Şarkısı ve Tamgalar: Her kişinin kendi iç titreşimi, kendi ezgisi ve koruyucu tamgası vardır. Ses, kilitli kalan enerji blokajlarını görünür kılar ve çözer.",
          ],
        },
        {
          heading: "III. Kuzeyin Şamanik Kalbi: Seidr, Völva ve Üç Bilinç Katmanı",
          items: [
            "Hugr · Önd · Hamr: Kuzey geleneğinde insan ruhu tek parça değildir. Hugr yönlendirilen düşünce ve iradedir; Önd ilahi yaşam nefesidir; Hamr ise ruhun astral yolculukta büründüğü enerjetik biçimdir.",
            "Seidr ve Wyrd Ağı: Freyja ve Odin’in yolu olan Seidr, kaderi sabit bir yazı olarak değil, örülmekte olan canlı bir ağ (Wyrd) olarak okur. Völva (kâhin kadın), asasıyla bu ağın düğümlerine dokunur ve geçmişten gelen yükleri çözer.",
            "Galdr: Rünlerin yalnızca çizilerek değil, gırtlaktan ve göğüsten çıkan kadim ses titreşimleriyle uyandırılması sanatıdır.",
          ],
        },
        {
          heading: "IV. Otacılık, Ruh Parçaları ve Alan Tutma",
          items: [
            "Ruh Parçalarının Geri Getirilmesi: Ağır travmalar, kayıplar veya korkular insanın yaşama sevincini (ruh parçasını) geride bırakmasına yol açabilir. Şamanik şifa, o eksik parçayı bulup kişiye yeniden mühürleme çalışmasıdır.",
            "Kutsal Alan ve Ağaç İyeleri: Çalışmaya başlamadan önce yön kapıları açılır, alan arındırılır ve ağaçların ruhuyla (özellikle kayın, meşe, ardıç ve porsuk) bağ kurulur.",
          ],
        },
      ],
      closing:
        "Şaman yolu, başkasının izini taklit etmek değil; kendi davulunun sesini ve kendi ağacının kökünü hatırlamaktır.",
      ctaLabel: "Şamanizm Eğitimi Müfredatını İncele",
      ctaHref: "/egitim/samanizm",
    },
    en: {
      title: "Shaman",
      subtitle: "Three Worlds, the Drum, and the Northern Path of Seidr",
      opening: [
        "Shamanism is not a dogma, but a direct technique of communion with the living memory of nature. The shaman stands upon the threshold between the visible world and unseen realms, calling scattered fragments of the soul back into wholeness.",
        "In this room, the sky-earth-water cosmology of Central Asia, the pulse of the shamanic drum (düngür), and the Northern practices of Seidr and Galdr meet at the same hearth. The aim is not to flee the world, but to sink roots into the earth and open branches to the sky.",
      ],
      sections: [
        {
          heading: "I. The Three Worlds and the World Tree (Root · Trunk · Branch)",
          items: [
            "The Lower World (Roots and Earth Memory): The realm of ancestors, primal endurance, and guardian power animals. A tree without roots cannot rise; the journey begins by making peace with the roots beneath the soil.",
            "The Middle World (Trunk and the Four Directions): The world in which we breathe. It teaches reciprocity with the spirits of mountain, water, fire, and tree, honoring the east wind, southern fire, western water, and northern earth.",
            "The Upper World (Branches and Celestial Order): The plane of teachers, star memory, and wide vision. Insight received here is meant to be brought back into concrete action and healing in the Middle World.",
          ],
        },
        {
          heading: "II. The Drum (Düngür), Breath, and Spirit Song",
          items: [
            "Voice of the Drum: The shamanic drum is the steed that travels between realms. Its steady heartbeat rhythm quiets the everyday mind and carries awareness across the threshold of trance.",
            "Önd (Life-Breath): Every rite opens with conscious breath—the first bridge carrying intention from the body into the unseen.",
            "Spirit Song and Tamgas: Each person carries an inner resonance, a song, and a protective mark (tamga). Sound reveals and unties stagnant energetic knots.",
          ],
        },
        {
          heading: "III. The Northern Heart: Seidr, Völva, and the Three Layers of Soul",
          items: [
            "Hugr · Önd · Hamr: In Northern lore the soul is manifold. Hugr is directed thought and will; Önd is the breath of life; Hamr is the subtle shape assumed in spirit travel.",
            "Seidr and the Web of Wyrd: Walked by Freyja and Odin, Seidr reads fate not as a locked sentence, but as a living web (Wyrd) being woven. The Völva touches its knots to release inherited burdens.",
            "Galdr: The art of awakening the runes not only by carving, but through vocal resonance from chest and throat.",
          ],
        },
        {
          heading: "IV. Herbalism, Soul Retrieval, and Holding Sacred Space",
          items: [
            "Soul Retrieval: Deep trauma, grief, or fear can leave a portion of vitality behind. Shamanic healing seeks out that missing piece and seals it back into the body.",
            "Sacred Space and Tree Spirits: Before any work, the directional gates are opened, the space is cleansed, and kinship is established with the spirits of birch, oak, juniper, and yew.",
          ],
        },
      ],
      closing:
        "The shamanic path is not imitating another’s footprint; it is remembering the sound of your own drum and the root of your own tree.",
      ctaLabel: "View the Shamanism Training Curriculum",
      ctaHref: "/egitim/samanizm",
    },
    sv: {
      title: "Schaman",
      subtitle: "Tre världar, trumman och Nordens Seidr-väg",
      opening: [
        "Schamanism är inte en dogm, utan en direkt teknik för kontakt med naturens levande minne. Schamanen står på tröskeln mellan den synliga världen och de osynliga rikena och kallar hem splittrade själsdelar till helhet.",
        "I detta rum möts Centralasiens kosmologi, schamantrummans (düngür) puls och de nordiska bruken av Seidr och Galdr vid samma härd. Målet är inte att fly världen, utan att sänka rötterna i jorden och sträcka grenarna mot himlen.",
      ],
      sections: [
        {
          heading: "I. De tre världarna och Världsträdet (Rot · Stam · Gren)",
          items: [
            "Undervärlden (Rötter och jordens minne): Förfädernas, urkraftens och kraftdjurens rike. Ett träd utan rötter kan inte växa; resan börjar i försoning med rötterna under marken.",
            "Mellanvärlden (Stam och de fyra väderstrecken): Den värld där vi andas. Den lär ut ömsesidig respekt med bergens, vattnets, eldens och trädens andar.",
            "Övervärlden (Grenar och himmelsk ordning): Lärarnas, stjärnminnets och den vida blickens plan. Den syn som tas emot här ska bäras ned till konkret läkning i Mellanvärlden.",
          ],
        },
        {
          heading: "II. Trumman (Düngür), andedräkten och själssången",
          items: [
            "Trummans röst: Schamantrumman är fålen som färdas mellan världarna. Dess jämna hjärtslag stillar vardagstanken och bär medvetandet över tranströskeln.",
            "Önd (Livsandedräkt): Varje rit öppnas med medveten andning—den första bron mellan kropp och andevärld.",
            "Själssång och tamgor: Varje människa bär en inre klang och ett skyddstecken (tamga). Ljudet löser upp stagnerade knutar.",
          ],
        },
        {
          heading: "III. Nordens schamanistiska hjärta: Seidr, Völva och själens tre skikt",
          items: [
            "Hugr · Önd · Hamr: I nordisk tradition är själen mångfaldig. Hugr är riktad tanke och vilja; Önd är livsandan; Hamr är den subtila gestalt som antas under själsresor.",
            "Seidr och Wyrd-väven: Freyjas och Odens väg läser ödet som en levande väv (Wyrd) i ständig tillblivelse.",
            "Galdr: Konsten att väcka runorna genom röstens och bröstets uråldriga vibrationer.",
          ],
        },
        {
          heading: "IV. Örtlära, själsåterhämtning och heligt rum",
          items: [
            "Själsåterhämtning: Djupa sår eller rädslor kan lämna livskraft kvar i det förflutna. Schamanistisk läkning återför den förlorade delen till nuet.",
            "Heligt rum och trädandar: Innan arbetet börjar öppnas väderstreckens portar och band knyts med björk, ek, en och idegran.",
          ],
        },
      ],
      closing:
        "Schamanens väg är inte att härma någon annans steg, utan att minnas klangen i sin egen trumma och roten under sitt eget träd.",
      ctaLabel: "Se studieplanen för Schamanismutbildningen",
      ctaHref: "/egitim/samanizm",
    },
  },
  kelt: {
    tr: {
      title: "Kelt",
      subtitle: "Nemeton, Ogham Ağaç Alfabesi ve Mevsim Çarkı",
      opening: [
        "Kelt geleneğinde tapınak taş duvarlarla örülmez; tapınak Nemeton’dur — meşe, dişbudak, porsuk ve alıç ağaçlarının gökyüzüyle buluştuğu kutsal koru. Bilgi kağıda değil, yaşayan ağacın gövdesine ve dikili taşların kenarına çentiklerle kazınır.",
        "Ogham, yirmi kutsal ağacın (Feda) dört aile (Aicme) halinde dizildiği kadim ağaç alfabesidir. Her işaret aşağıdan yukarıya doğru, tıpkı topraktan göğe yükselen bir gövde gibi okunur.",
      ],
      sections: [
        {
          heading: "I. Birinci Aicme — Başlangıç, Korunma ve Köprü (ᚁ ᚂ ᚃ ᚄ ᚅ)",
          items: [
            "ᚁ Beith (Huş / Birch): Kışın ardından toprağı ilk uyandıran öncü ağaç. Arınma, eski yükleri yıkama ve temiz bir sayfa açma.",
            "ᚂ Luis (Üvez / Rowan): Kırmızı meyvelerinde beş köşeli yıldız taşıyan koruyucu ağaç. Yanılsamadan ayırt etme, sezgi ve psişik kalkan.",
            "ᚃ Fearn (Kızılağaç / Alder): Suda çürümeyen, bataklıkların üzerine köprü kuran ağaç. Duygusal fırtınalarda dayanıklılık ve karar gücü.",
            "ᚄ Sail (Söğüt / Willow): Suyun ve ayın ağacı. Kırılmadan eğilme, rüya hafızası, yasın bilgeliğe dönüşmesi ve dişil akış.",
            "ᚅ Nion (Dişbudak / Ash): Kökleri derin, dalları geniş dünya ağacı. İçsel mikrokozmos ile dışsal makrokozmosu birbirine bağlayan mızrak.",
          ],
        },
        {
          heading: "II. İkinci Aicme — Eşik, Güç ve Bilgelik (ᚆ ᚇ ᚈ ᚉ ᚊ)",
          items: [
            "ᚆ Uath (Alıç / Hawthorn): Dikenli eşik bekçisi. Kalbin korunması, sabır ve öteki dünyaya açılan çit kapısı.",
            "ᚇ Duir (Meşe / Oak): Ormanın kralı; ‘kapı’ kelimesinin kökü. Yıldırıma direnen omurga, egemenlik, sadakat ve sarsılmaz irade.",
            "ᚈ Tinne (Çobanpüskülü / Holly): Kışın ortasında yeşil kalan savaşçı ağaç. Adil mücadele, sınavda soğukkanlılık ve yön tayini.",
            "ᚉ Coll (Fındık / Hazel): Kutsal pınarın üzerine eğilen dokuz fındık ağacı. Yoğunlaştırılmış bilgelik, şiirsel ilham (Awen) ve sezgi.",
            "ᚊ Quert (Elma / Apple): İçinde beş köşeli yıldız saklayan Avalon meyvesi. Ölümsüzlük, şifa, güzellik ve ruhun dinlenme bahçesi.",
          ],
        },
        {
          heading: "III. Üçüncü Aicme — Hasat, Sarmal ve Dönüşüm (ᚋ ᚌ ᚍ ᚎ ᚏ)",
          items: [
            "ᚋ Muin (Asma / Vine): Ezilmeden şaraba dönüşmeyen üzüm. İçsel olgunlaşma, dizginlerin çözülmesi ve hakikatin konuşulması.",
            "ᚌ Gort (Sarmaşık / Ivy): Duvarları ve taşları saran sarmal. Engellerin etrafından dolaşarak yükselme, azim ve ruhun bağlılığı.",
            "ᚍ Ngetal (Kamış / Reed): Suyun kıyısında rüzgarla ses veren ok gövdesi. Dağınık enerjiyi tek bir hedefe toplama ve düzen kurma.",
            "ᚎ Straif (Çakaleriği / Blackthorn): Karanlık kış dalında açan beyaz çiçek. Kaçınılmaz kader eşiği, arındırıcı sertlik ve gölgeyle yüzleşme.",
            "ᚏ Ruis (Mürver / Elder): Ağaç takviminin son halkası. Bir döngünün tamamlanması, olgunluk ve küllerden doğacak yeni başlangıç.",
          ],
        },
        {
          heading: "IV. Dördüncü Aicme ve Mevsim Çarkı (ᚐ ᚑ ᚒ ᚓ ᚔ)",
          items: [
            "ᚐ Ailm (Köknar / Silver Fir): Dağ başından bakan berrak ve yüksek görüş.",
            "ᚑ Onn (Katırtırnağı / Gorse): Her mevsim çiçek açan güneş gücü ve yaşama sevinci.",
            "ᚒ Ur (Funda / Heather): Bozkırların şifalı örtüsü, tutku ve içsel cömertlik.",
            "ᚓ Eadad (Titrek Kavak / Aspen): En hafif rüzgarda bile fısıldayan yapraklar; korkuyu aşma ve öteyi dinleme.",
            "ᚔ Idad (Porsuk / Yew): Binlerce yıl yaşayan, içeriden yeniden kök salan ölüm ve yeniden doğuş ağacı; ataların yaşayan belleği.",
            "Yılın Sekiz Eşiği: Samhain (1 Kasım — perdenin incelmesi), Imbolc (1 Şubat — tohumun uyanışı), Beltane (1 Mayıs — yaşam ateşi) ve Lughnasadh (1 Ağustos — ilk hasat) ile ekinoks ve gündönümlerinin kurduğu kutsal çark.",
          ],
        },
      ],
      closing:
        "Bir ağacı tanımak, onun hangi rüzgarda eğildiğini ve hangi toprakta kök tuttuğunu bilmektir. Ogham, ormanı bir kitap gibi okuma disiplinidir.",
    },
    en: {
      title: "Celtic",
      subtitle: "Nemeton, the Ogham Tree Alphabet, and the Wheel of the Year",
      opening: [
        "In the Celtic tradition, the temple is not built of quarried wall; the temple is the Nemeton—the sacred grove where oak, ash, yew, and hawthorn meet the open sky. Wisdom is carved along the edge of standing stones and read in the living bark of trees.",
        "Ogham is the ancient alphabet of twenty sacred trees (Feda) arranged into four families (Aicme). Every mark is read from the ground upward, rising like a trunk from root to crown.",
      ],
      sections: [
        {
          heading: "I. The First Aicme — Beginning, Shelter, and Bridge (ᚁ ᚂ ᚃ ᚄ ᚅ)",
          items: [
            "ᚁ Beith (Birch): The pioneer tree that wakes the soil after winter. Cleansing, shedding old weight, and a clear beginning.",
            "ᚂ Luis (Rowan): The guardian tree bearing a five-pointed star in its berry. Discernment from illusion, intuition, and psychic shielding.",
            "ᚃ Fearn (Alder): Timber that does not rot in water, building bridges over marshland. Endurance through emotional storms.",
            "ᚄ Sail (Willow): Tree of water and the Moon. Bending without breaking, dream memory, and transforming grief into wisdom.",
            "ᚅ Nion (Ash): The world tree with deep roots and wide boughs, linking the inner microcosm with the outer cosmos.",
          ],
        },
        {
          heading: "II. The Second Aicme — Threshold, Strength, and Wisdom (ᚆ ᚇ ᚈ ᚉ ᚊ)",
          items: [
            "ᚆ Uath (Hawthorn): The thorny hedge-guardian. Protection of the heart, patience, and the gate to the Otherworld.",
            "ᚇ Duir (Oak): Sovereign of the forest and root of the word ‘door’. Spine that withstands lightning, steadfastness, and enduring will.",
            "ᚈ Tinne (Holly): Evergreen warrior of midwinter. Just action, composure under trial, and clear direction.",
            "ᚉ Coll (Hazel): The nine hazels leaning over the well of wisdom. Concentrated knowledge, poetic inspiration (Awen), and intuition.",
            "ᚊ Quert (Apple): Fruit of Avalon holding a hidden star within. Wholeness, healing, and the orchard of the soul’s rest.",
          ],
        },
        {
          heading: "III. The Third Aicme — Harvest, Spiral, and Transformation (ᚋ ᚌ ᚍ ᚎ ᚏ)",
          items: [
            "ᚋ Muin (Vine): The grape that becomes wine only through pressing. Inner ripening and speaking unvarnished truth.",
            "ᚌ Gort (Ivy): The spiral climbing stone and wall. Persistence, finding a path around obstacles, and enduring bond.",
            "ᚍ Ngetal (Reed): The arrow-shaft singing by the water’s edge. Gathering scattered force toward a single aim.",
            "ᚎ Straif (Blackthorn): White blossom on a dark winter thorn. Unavoidable fate, purifying rigor, and facing the shadow.",
            "ᚏ Ruis (Elder): Final link of the tree cycle. Completion of an age, maturity, and renewal rising from the old.",
          ],
        },
        {
          heading: "IV. The Fourth Aicme and the Wheel of the Year (ᚐ ᚑ ᚒ ᚓ ᚔ)",
          items: [
            "ᚐ Ailm (Silver Fir): Clear, elevated sight from the mountain ridge.",
            "ᚑ Onn (Gorse): Solar vitality blooming through every season.",
            "ᚒ Ur (Heather): Healing mantle of the moorland and open-hearted generosity.",
            "ᚓ Eadad (Aspen): Leaves that whisper in the slightest breeze; overcoming fear and listening across the veil.",
            "ᚔ Idad (Yew): The millennial tree of death and rebirth that roots anew from within; living memory of the ancestors.",
            "The Eight Thresholds: Samhain, Imbolc, Beltane, and Lughnasadh braided with the solstices and equinoxes.",
          ],
        },
      ],
      closing:
        "To know a tree is to know which wind bends it and which soil holds its root. Ogham is the discipline of reading the forest as a book.",
    },
    sv: {
      title: "Keltisk",
      subtitle: "Nemeton, Oghams trädalfabet och årshjulet",
      opening: [
        "I keltisk tradition byggs templet inte av huggna murar; templet är Nemeton—den heliga lunden där ek, ask, idegran och hagtorn möter himlen. Visdomen ristas längs kanten av resta stenar och läses i trädens levande bark.",
        "Ogham är det forntida alfabetet av tjugo heliga träd (Feda) ordnade i fyra familjer (Aicme). Varje tecken läses nedifrån och upp, likt en stam som reser sig från rot till krona.",
      ],
      sections: [
        {
          heading: "I. Första Aicme — Början, skydd och bro (ᚁ ᚂ ᚃ ᚄ ᚅ)",
          items: [
            "ᚁ Beith (Björk): Pionjärträdet som väcker marken efter vintern. Rening och en ny början.",
            "ᚂ Luis (Rönn): Skyddsträdet med en femuddig stjärna i sitt bär. Ursprunglig urskillning och intuition.",
            "ᚃ Fearn (Al): Virket som inte ruttnar i vatten och bygger broar över sankmark. Uthållighet i känslostormar.",
            "ᚄ Sail (Pil): Vattnets och månens träd. Att böjas utan att brytas, drömminne och visdom.",
            "ᚅ Nion (Ask): Världsträdet med djupa rötter och vida grenar som förenar inre och yttre värld.",
          ],
        },
        {
          heading: "II. Andra Aicme — Tröskel, kraft och visdom (ᚆ ᚇ ᚈ ᚉ ᚊ)",
          items: [
            "ᚆ Uath (Hagtorn): Den törnbeklädda tröskelväktaren. Hjärtats skydd, tålamod och gränsporten.",
            "ᚇ Duir (Ek): Skogens konung och roten till ordet ’dörr’. Ryggrad som står emot blixten och orubblig vilja.",
            "ᚈ Tinne (Järnek): Midvinterns ständigt gröna krigare. Rättvist handlande och lugn i prövning.",
            "ᚉ Coll (Hassel): De nio hasslarna över visdomens källa. Koncentrerad kunskap och poetisk ingivelse (Awen).",
            "ᚊ Quert (Äpple): Avalons frukt med en dold stjärna i sitt inre. Helhet, läkning och själens vila.",
          ],
        },
        {
          heading: "III. Tredje Aicme — Skörd, spiral och förvandling (ᚋ ᚌ ᚍ ᚎ ᚏ)",
          items: [
            "ᚋ Muin (Vinranka): Druvan som blir vin först genom pressning. Inre mognad och sanning.",
            "ᚌ Gort (Murgröna): Spiralen som klättrar över sten och mur. Uthållighet och trofasthet.",
            "ᚍ Ngetal (Vass): Pilskaftet som sjunger vid vattenbrynet. Att samla spridd kraft mot ett enda mål.",
            "ᚎ Straif (Slån): Vit blomma på mörk vintertagg. Oundviklig tröskel, rening och möte med skuggan.",
            "ᚏ Ruis (Fläder): Trädcykelns sista länk. Fullbordan av ett skede och förnyelse.",
          ],
        },
        {
          heading: "IV. Fjärde Aicme och årshjulet (ᚐ ᚑ ᚒ ᚓ ᚔ)",
          items: [
            "ᚐ Ailm (Ädelgran): Klar överblick från bergskammen.",
            "ᚑ Onn (Ärtsörne): Solkraft som blommar genom årstiderna.",
            "ᚒ Ur (Ljung): Hedens läkande täcke och inre generositet.",
            "ᚓ Eadad (Asp): Löv som viskar i minsta vind; att lyssna bortom slöjan.",
            "ᚔ Idad (Idegran): Det tusenåriga trädet för död och återfödelse; förfädernas levande minne.",
            "Årets åtta trösklar: Samhain, Imbolc, Beltane och Lughnasadh sammanflätade med solstånd och dagjämningar.",
          ],
        },
      ],
      closing:
        "Att känna ett träd är att veta vilken vind som böjer det och vilken jord som håller dess rot. Ogham är konsten att läsa skogen som en bok.",
    },
  },
  mezopotamya: {
    tr: {
      title: "Mezopotamya",
      subtitle: "Babil Yıldız Bilimi, Abzu’nun Suları ve Kadim Kil Tabletler",
      opening: [
        "Gökyüzüne bakıp yıldızların hareketini ilk kez kil tabletlere kazıyanlar, Fırat ile Dicle arasındaki zigguratların rahipleriydi. Bugün kullandığımız on iki burç kuşağı, gezegen saatleri ve tutulma döngüleri, Sümer ve Babil’in binlerce yıllık gece nöbetlerinden doğdu.",
        "Mezopotamya inisiasyonunda evren üç katmandır: Anu’nun gök kubbesi, Enlil’in rüzgarlı yeryüzü ve Enki’nin (Ea) derin tatlı su okyanusu Abzu. Şifa ve büyü, Abzu’nun duru sularından ve kelamın mühürleyici gücünden yükselir.",
      ],
      sections: [
        {
          heading: "I. Ziggurat ve Gökyüzünün İlk Kayıtları (MUL.APIN · Enuma Anu Enlil)",
          items: [
            "Yukarıdaki ile Aşağıdakinin Bağı: Babil gökbilimcileri için gökyüzü, tanrıların kil üzerine yazdığı canlı bir tabletti. Ayın halesi, Venüs’ün (İnanna / İştar) doğu ve batı ufuklarında sabah ve akşam yıldızı olarak doğuşu, krallıkların ve mevsimlerin kaderini bildirirdi.",
            "Yedi Gezegen ve Yedi Basamak: Zigguratın her katı bir gök cismine (Satürn, Jüpiter, Mars, Güneş, Venüs, Merkür, Ay) ve onun metaline, rengine, gününe adanmıştı.",
          ],
        },
        {
          heading: "II. Abzu’nun Suları: Enki ve Şulmu Asalluhi",
          items: [
            "Enki (Ea) ve Derin Su: Toprağın altındaki ilk ve bozulmamış tatlı su okyanusu Abzu, tüm bilgeliğin, sanatların ve kozmik yasaların (Me) kaynağıdır.",
            "Asalluhi — Şifanın ve Kelamın Ustası: Enki’nin ilk oğlu Asalluhi (Marduk), babasından aldığı bilgiyle insanın üzerindeki düğümleri, karanlığı ve hastalığı çözen şifacıdır. Ritüelde temiz bir su kabı, beyaz veya altın bir mum ve sedir/günlük tütsüsüyle onun alanı açılır.",
            "Şulmu (Esenlik ve Tamlık): Mezopotamya selamı ve şifa mührü olan ‘Şulmu’, parçalanmış olanın yeniden dengeye, huzura ve bütünlüğe kavuşması demektir.",
          ],
        },
        {
          heading: "III. Elli İsim ve Marukka — Maruttuku İnisiasyonu",
          items: [
            "Enuma Eliş ve Elli Mühür: Babil yaratılış destanında kaos ejderhası Tiamat’ı aşarak kozmik düzeni kuran Marduk’a elli kutsal isim verilir. Bu isimler yalnızca övgü sıfatı değil, her biri ayrı bir frekansı ve kozmik yetkiyi açan ses anahtarlarıdır.",
            "Marukka ve Maruttuku: Her şeyi yaratan, bilgelikle kuran (Marukka) ve koruyup sığınak olan, ruhu karanlık sınavlardan sağ çıkaran (Maruttuku) iki temel kutuptur.",
          ],
        },
        {
          heading: "IV. Dört Rüzgar ve Arınma Düzeni",
          items: [
            "Doğunun rüzgarı, batının ateşi, güneyin suları ve kuzeyin toprağı çağrılarak çember arındırılır.",
            "Kil veya cam kap içindeki suya niyet ve nefes okunur; su, Mezopotamya geleneğinde bilginin en sadık taşıyıcısı ve hafızasıdır.",
          ],
        },
      ],
      closing:
        "Kil kurur, taş aşınır; fakat suya ve yıldızlara mühürlenen kadim söz, onu hatırlayan zihinde yeniden uyanır.",
    },
    en: {
      title: "Mesopotamia",
      subtitle: "Babylonian Star Lore, the Waters of Abzu, and Ancient Clay Tablets",
      opening: [
        "Those who first watched the heavens and pressed the motions of the stars into wet clay were the priests upon the ziggurats between the Tigris and the Euphrates. The twelve signs of the zodiac, the planetary hours, and eclipse cycles were born from thousands of years of Sumerian and Babylonian night watches.",
        "In Mesopotamian initiation the cosmos is threefold: the vault of Anu above, the windswept earth of Enlil, and Abzu—the deep subterranean ocean of sweet water ruled by Enki (Ea). Healing and sacred craft rise from the pure waters of Abzu and the sealing power of the spoken word.",
      ],
      sections: [
        {
          heading: "I. The Ziggurat and the First Sky Records (MUL.APIN · Enuma Anu Enlil)",
          items: [
            "The Mirror of Sky and Earth: For Babylonian sky-watchers, the heavens were a living tablet inscribed by the gods. The halo of the Moon and the risings of Venus (Inanna / Ishtar) as morning and evening star announced the turning of seasons and fates.",
            "Seven Spheres, Seven Terraces: Each tier of the ziggurat was consecrated to one of the seven luminaries (Saturn, Jupiter, Mars, Sun, Venus, Mercury, Moon), its metal, and its hour.",
          ],
        },
        {
          heading: "II. The Waters of Abzu: Enki and Shulmu Asalluhi",
          items: [
            "Enki (Ea) and the Deep Water: Abzu, the primordial sweet-water ocean beneath the earth, is the wellspring of wisdom, craft, and the cosmic decrees (Me).",
            "Asalluhi — Master of Healing and Word: Firstborn of Enki, Asalluhi (Marduk) unties spiritual knots, shadow, and affliction through the wisdom of his father. His space is opened with a vessel of clear water, a white or golden candle, and cedar or frankincense.",
            "Shulmu (Wholeness and Peace): The ancient Mesopotamian blessing ‘Shulmu’ signifies the restoration of what was fractured back into balance, health, and completeness.",
          ],
        },
        {
          heading: "III. The Fifty Names and the Marukka — Maruttuku Initiation",
          items: [
            "Enuma Elish and the Fifty Seals: In the Babylonian epic of creation, Marduk receives fifty sacred names after establishing cosmic order over Tiamat. These names are not mere titles, butsonic keys unlocking distinct cosmic functions.",
            "Marukka and Maruttuku: The two foundational poles—the one who establishes all things in wisdom (Marukka) and the one who shields and carries the soul safely through trial (Maruttuku).",
          ],
        },
        {
          heading: "IV. The Four Winds and the Rite of Purification",
          items: [
            "The wind of the east, the fire of the west, the waters of the south, and the earth of the north are invoked to cleanse the circle.",
            "Breath and intention are spoken over water held in clay or glass; in Mesopotamian lore, water is the most faithful keeper of memory.",
          ],
        },
      ],
      closing:
        "Clay dries and stone wears down, yet the ancient word sealed in water and star wakes anew in the mind that remembers.",
    },
    sv: {
      title: "Mesopotamien",
      subtitle: "Babylonisk stjärnlära, Abzus vatten och forntida lertavlor",
      opening: [
        "De som först betraktade himlavalvet och präglade stjärnornas banor i våt lera var prästerna på zigguraterna mellan Tigris och Eufrat. De tolv zodiaktecknen, planettimmarna och förmörkelsecyklerna föddes ur tusentals år av sumeriska och babyloniska nattvakor.",
        "I mesopotamisk invigning är kosmos trefaldigt: Anus himlavalv ovan, Enlils vindpinade jord och Abzu—det djupa underjordiska sötvattenshavet som styrs av Enki (Ea). Läkning och helig konst stiger ur Abzus klara vatten och det uttalade ordets kraft.",
      ],
      sections: [
        {
          heading: "I. Zigguraten och himlens första krönikor (MUL.APIN · Enuma Anu Enlil)",
          items: [
            "Spegeln mellan himmel och jord: För Babylons stjärntydare var himlen en levande tavla skriven av gudarna. Månens gård och Venus (Inanna / Ishtar) uppgång som morgon- och aftonstjärna varslade om tidernas skiften.",
            "Sju sfärer, sju avsatser: Varje nivå i zigguraten var helgad åt en av de sju himlakropparna (Saturnus, Jupiter, Mars, Solen, Venus, Merkurius, Månen).",
          ],
        },
        {
          heading: "II. Abzus vatten: Enki och Shulmu Asalluhi",
          items: [
            "Enki (Ea) och djupvattnet: Abzu, urhavet av sötvatten under jorden, är källan till visdom, hantverk och de kosmiska ordningarna (Me).",
            "Asalluhi — Läkningens och ordets mästare: Enkis förstfödde son Asalluhi (Marduk) löser upp knutar och ohälsa genom sin faders visdom. Hans rum öppnas med en skål klart vatten, ett vitt eller gyllene ljus samt rökelse av ceder eller rökelsekåda.",
            "Shulmu (Helhet och frid): Den mesopotamiska välsignelsen ’Shulmu’ betyder att det som spruckit återförs till jämvikt och fullbordan.",
          ],
        },
        {
          heading: "III. De femtio namnen och Marukka — Maruttuku",
          items: [
            "Enuma Elish och de femtio sigillen: I det babyloniska skapelseeposet får Marduk femtio heliga namn efter att ha upprättat kosmisk ordning. Varje namn är en ljudnyckel till en särskild kosmisk kraft.",
            "Marukka och Maruttuku: De två grundpolerna—den som grundar allt i visdom (Marukka) och den som beskyddar och bär själen genom prövning (Maruttuku).",
          ],
        },
        {
          heading: "IV. De fyra vindarna och reningens ordning",
          items: [
            "Österns vind, västerns eld, söderns vatten och norrens jord åkallas för att rena cirkeln.",
            "Andedräkt och avsikt talas över vatten i lera eller glas; i Mesopotamien är vattnet minnets trognaste bärare.",
          ],
        },
      ],
      closing:
        "Lera torkar och sten nöts ned, men det uråldriga ord som förseglats i vatten och stjärnor vaknar på nytt i det sinne som minns.",
    },
  },
  witchcraft: {
    tr: {
      title: "Witchcraft",
      subtitle: "Yeşil Ahit: 36 Bitki, Dört Element ve Ocak Bilgisi",
      opening: [
        "Gerçek ocak bilgisi uzak saraylarda değil; toprağın kokusunda, mutfaktaki kavanozda, aktarın arka rafında ve ağaçların reçinesinde saklıdır. Bitkiler yalnızca bedensel çay veya baharat değildir; her biri toprağın, güneşin ve gezegenlerin belirli bir frekansını taşıyan canlı birer müttefiktir.",
        "‘Yeşil Ahit’ disiplini, otuz altı temel bitkiyi üç halkada ele alır ve onları suyun hafızası, ateşin dönüşümü, toprağın sabrı ve havanın nefesiyle birleştirir.",
      ],
      sections: [
        {
          heading: "I. Hane ve Mutfak Bekçileri (14 Tanıdık Kök)",
          body: "Her gün elimizin altında duran, fakat yüzeyden değil kökten okunduğunda evin ilk kalkanını kuran bitkiler:",
          items: [
            "Biberiye, Adaçayı ve Defne: Zihinsel berraklık, mekanın enerjetik arınması, kehanet odağı ve güneşsel koruma.",
            "Kekik, Nane ve Fesleğen: Yaşam gücünü canlandırma, bereket akışı ve hanenin neşesini tutma.",
            "Tarçın Kabuğu, Karanfil, Zencefil ve Karabiber: Ateş elementinin taşıyıcıları; durgunluğu kıran, niyeti hızlandıran ve soğuk enerjileri dağıtan sıcak baharatlar.",
            "Sarımsak, Soğan, Dereotu ve Maydanoz: Topraklama, nazar ve dışsal sızıntılara karşı hanenin görünmez sınır taşları.",
          ],
        },
        {
          heading: "II. Kır ve Aktar Sırları (12 Eşik Otu)",
          body: "Aktarda duran ama ‘neden ve hangi saatte’ kullanıldığı unutulmuş kadim otlar:",
          items: [
            "Pelin Otu (Mugwort) ve Civanperçemi: Ayın ve rüya kapılarının otları. Durugörü, astral berraklık ve psişik sınır çizme.",
            "Sarı Kantaron ve Isırgan Otu: Güneşin karanlığı dağıtma gücü ile Mars’ın dikenli savunma ve kanı canlandırma kudreti.",
            "Sığırkuyruğu (Mullein), Sinir Otu ve Karahindiba: Eşik meşalesi, yol açma ve toprağın derininden gelen direnç.",
            "Ebegümeci, Şerbetçiotu, Rezene, Kimyon ve Kişniş Tohumu: Yatıştırma, uyku eşiği ve içsel uyumu mühürleme.",
          ],
        },
        {
          heading: "III. Ağaçlar, Reçineler ve Eşik Bitkileri (10 Mühür)",
          body: "Çalışmanın ağırlığını, kokusunu ve kalıcılığını taşıyan kadim grup:",
          items: [
            "Meşe (Palamut ve Kabuk), Çam (İğne, Kozalak ve Reçine), Ardıç (Tohum) ve Söğüt: Ormanın dört direği; dayanıklılık, kış boyu sönmeyen yaşam, arındırıcı duman ve suyun esnekliği.",
            "Günlük / Akgünlük (Frankincense) ve Mür (Myrrh): Güneş ile Ay’ın iki kutsal reçinesi; tapınak alanını yükselten ve mühürleyen duman.",
            "Zeytin Yaprağı, Gül, Lavanta ve Papatya: Barış, kalp frekansı, dinginlik ve yumuşak şifa.",
          ],
        },
        {
          heading: "IV. Dört Element ve Ay Döngüsüyle Çalışma",
          items: [
            "Kumun Bilgeliği (Jeomansi / Toprak): Köklenme ve toprak/kum yüzeyinde işaret okuma.",
            "Suyun Hafızası (Hidromansi / Su): Ses ve titreşimle durgun su yüzeyinde içgörü çalışması.",
            "Ateşin Ruhu (Piromansi / Ateş): Mum alevi ve reçine dumanı üzerinden dönüşüm ve niyet mühürleme.",
            "Ayın Ritmi: Büyüyen ayda çağırma, besleme ve kurma; küçülen ayda arındırma, çözme ve bırakma.",
          ],
        },
      ],
      closing:
        "Her yaprak bir harf, her reçine bir mühürdür. Ocak başında yapılan çalışma, doğanın kendi ritmiyle uyumlandığında sessizce yerini bulur.",
      ctaLabel: "El, Yüz ve Element Okuma Eğitimini İncele",
      ctaHref: "/egitim/el-yuz-element",
    },
    en: {
      title: "Witchcraft",
      subtitle: "The Green Covenant: 36 Herbs, the Four Elements, and Hearth Lore",
      opening: [
        "True hearth-craft does not reside in distant palaces; it lives in the scent of soil, the jar on the kitchen shelf, the apothecary’s corner, and the resin of trees. Plants are not merely culinary spices or teas—each is a living ally carrying a distinct frequency of earth, sun, and planet.",
        "The discipline of the ‘Green Covenant’ studies thirty-six foundational plants across three circles, uniting them with the memory of water, the transformation of fire, the patience of earth, and the breath of air.",
      ],
      sections: [
        {
          heading: "I. Guardians of Hearth and Kitchen (14 Familiar Roots)",
          body: "Plants kept within arm’s reach every day, yet forming the first shield of the home when understood from the root:",
          items: [
            "Rosemary, Sage, and Bay Laurel: Mental clarity, energetic cleansing of space, divinatory focus, and solar protection.",
            "Thyme, Mint, and Basil: Awakening vitality, inviting abundance, and keeping warmth within the household.",
            "Cinnamon Bark, Clove, Ginger, and Black Pepper: Carriers of the fire element; warming spices that break stagnation and quicken intention.",
            "Garlic, Onion, Dill, and Parsley: Grounding boundary-stones against intrusion and energetic drain.",
          ],
        },
        {
          heading: "II. Secrets of Meadow and Apothecary (12 Threshold Herbs)",
          body: "Ancient herbs whose Deeper timing and purpose are remembered at the hearth:",
          items: [
            "Mugwort and Yarrow: Herbs of the Moon and dream-gates. Second sight, astral clarity, and firm psychic boundaries.",
            "St. John’s Wort and Nettle: Solar light that scatters heaviness paired with Martian defense and resilience.",
            "Mullein, Plantain, and Dandelion: The threshold torch, road-opening, and deep-rooted endurance.",
            "Mallow, Hops, Fennel, Cumin, and Coriander Seed: Quieting the threshold of sleep and sealing inner harmony.",
          ],
        },
        {
          heading: "III. Trees, Resins, and Threshold Plants (10 Seals)",
          body: "The enduring group that carries the weight, fragrance, and permanence of the work:",
          items: [
            "Oak (Acorn & Bark), Pine (Needle, Cone & Resin), Juniper (Berry), and Willow: The four pillars of the woods—endurance, evergreen life, purifying smoke, and lunar grace.",
            "Frankincense and Myrrh: The twin sacred resins of Sun and Moon that elevate and seal ritual space.",
            "Olive Leaf, Rose, Lavender, and Chamomile: Peace, heart resonance, stillness, and gentle restoration.",
          ],
        },
        {
          heading: "IV. The Four Elements and the Lunar Breath",
          items: [
            "Wisdom of Sand (Geomancy / Earth): Grounding and reading signs upon earth and sand.",
            "Memory of Water (Hydromancy / Water): Scrying and stillness upon the dark surface of water.",
            "Spirit of Fire (Pyromancy / Fire): Transformation and sealing intention through candle flame and resin smoke.",
            "Rhythm of the Moon: Drawing in and building during the waxing moon; cleansing, untying, and releasing during the waning moon.",
          ],
        },
      ],
      closing:
        "Every leaf is a letter; every resin is a seal. Work done quietly at the hearth finds its place when aligned with the rhythm of nature.",
      ctaLabel: "View the Hand, Face & Element Reading Training",
      ctaHref: "/egitim/el-yuz-element",
    },
    sv: {
      title: "Witchcraft",
      subtitle: "Det gröna förbundet: 36 örter, de fyra elementen och härdkunskap",
      opening: [
        "Sann härdkunskap bor inte i avlägsna palats; den lever i doften av jord, i kökets burkar, på örtbodens hylla och i trädens kåda. Växter är inte bara kryddor eller te—var och en är en levande bundsförvant som bär en särskild frekvens av jord, sol och planet.",
        "’Det gröna förbundet’ studerar trettiosex grundväxter i tre kretsar och förenar dem med vattnets minne, eldens förvandling, jordens tålamod och luftens andedräkt.",
      ],
      sections: [
        {
          heading: "I. Hemmets och kökets väktare (14 välbekanta rötter)",
          body: "Växter som finns nära till hands varje dag, men som bildar hemmets första sköld när de läses från roten:",
          items: [
            "Rosmarin, Salvia och Lagerblad: Mental klarhet, rening av rummet, fokus och solskydd.",
            "Timjan, Mynta och Basilika: Att väcka livskraft, flöde och hemmets glädje.",
            "Kanelstång, Kryddnejlika, Ingefära och Svartpeppar: Eldelementets bärare som bryter stagnation.",
            "Vitlök, Lök, Dill och Persilja: Jordande gränsstenar mot yttre dränering.",
          ],
        },
        {
          heading: "II. Ängens och örtbodens hemligheter (12 tröskelörter)",
          body: "Uråldriga örter vars rätta tid och syfte bevaras vid härden:",
          items: [
            "Gråbo (Mugwort) och Rölleka: Månens och drömportarnas örter. Klarsyn och tydliga gränser.",
            "Johannesört och Brännässla: Solljus som skingrar tyngd förenat med skarp motståndskraft.",
            "Kungsljus (Mullein), Groblad och Maskros: Tröskelfacklan, vägöppning och djup uthållighet.",
            "Malva, Humle, Fänkål, Spiskummin och Korianderfrö: Stillhet vid sömnens tröskel och inre balans.",
          ],
        },
        {
          heading: "III. Träd, hartser och tröskelväxter (10 sigill)",
          body: "Den beständiga grupp som bär arbetets tyngd, doft och varaktighet:",
          items: [
            "Ek (Ollon & Bark), Tall (Barr, Kotte & Kåda), En (Bär) och Pil: Skogens fyra pelare—uthållighet, liv, renande rök och månens följsamhet.",
            "Frankincense och Myrra: Solens och Månens två heliga hartser som lyfter och förseglar rummet.",
            "Olivblad, Ros, Lavendel och Kamomill: Frid, hjärtklang, ro och varsam läkning.",
          ],
        },
        {
          heading: "IV. De fyra elementen och månens rytm",
          items: [
            "Sandens visdom (Geomanti / Jord): Jordning och teckenläsning i jord och sand.",
            "Vattnets minne (Hydromanti / Vatten): Skådande och stillhet i vattnets yta.",
            "Eldens ande (Pyromanti / Eld): Förvandling genom ljuslåga och rökelse.",
            "Månens rytm: Att bygga och bjuda in under växande måne; att rena och släppa taget under avtagande måne.",
          ],
        },
      ],
      closing:
        "Varje blad är en bokstav, varje harts ett sigill. Det arbete som utförs stilla vid härden finner sin plats i takt med naturens rytm.",
      ctaLabel: "Se utbildningen i hand-, ansikts- och elementläsning",
      ctaHref: "/egitim/el-yuz-element",
    },
  },
  shop: {
    tr: {
      title: "Shop",
      subtitle: "El Yapımı Rün Takımları, Tılsımlar ve Çalışma Nesneleri",
      opening: [
        "Kış odasından çıkan hiçbir çalışma nesnesi seri üretim değildir. Her rün takımı, bağlama mührü (bindrune) ve tütsü karışımı; ağacın ve taşın doğasına, ayın evresine ve gezegen saatine dikkat edilerek tek tek elde hazırlanır.",
        "Bu yüzden burada sepete ekle düğmesi bulunmaz. Bir nesneye veya kişisel tılsıma niyet ettiğinde doğrudan iletişime geçilir; ihtiyaca ve zamana göre hazırlanıp sahibine ulaştırılır.",
      ],
      sections: [
        {
          heading: "I. El Oyması Elder Futhark Rün Takımları",
          items: [
            "Ahşap Rün Takımları: Dişbudak, meşe, kayın veya zeytin ağacı dallarından kesilen, elde yakılarak veya doğal kök boyasıyla işlenen 24’lü Elder Futhark keseleri.",
            "Doğal Taş Rün Takımları: Akik, obsidyen, ametist veya nehir taşları üzerine elde kazınan ve ritüelle arındırılan çalışma takımları.",
          ],
        },
        {
          heading: "II. Kişisel Bindrune (Bağlama Rün) Tılsımları",
          items: [
            "Niyete ve Doğum Haritasına Özel Mühür: Kişinin doğum rünü, yürüdüğü dönem ve niyeti incelenerek iki veya daha fazla rünün tek bir omurgada birleştirilmesiyle tasarlanan ahşap, bronz veya gümüş tılsımlar.",
            "Takdis ve Zamanlama: Her mühür, amacına uygun gezegen saatinde ve ay evresinde uyandırılarak teslim edilir.",
          ],
        },
        {
          heading: "III. Yeşil Ahit Reçine ve Tütsü Karışımları",
          items: [
            "Alan Arındırma ve Ocak Karışımları: Akgünlük (Frankincense), mür, çam reçinesi, ardıç tohumu, adaçayı ve pelin otunun geleneksel oranlarla harmanlandığı saf ritüel tütsüleri.",
          ],
        },
        {
          heading: "IV. Bireysel Danışmanlık ve Okuma Talepleri",
          items: [
            "Rün Açılımı, İlm-i Sima Analizi ve Gökyüzü Haritası: Özel çalışma veya el yapımı nesne talepleri için aşağıdaki WhatsApp veya Instagram hattından doğrudan yazabilirsin.",
          ],
        },
      ],
      closing:
        "Doğru nesne aceleyle alınmaz; vakti geldiğinde hazırlanan el işi, sahibinin elinde konuşmaya başlar.",
      whatsappLabel: "WhatsApp ile Sipariş / Bilgi Al",
    },
    en: {
      title: "Shop",
      subtitle: "Handcrafted Rune Sets, Talismans, and Study Objects",
      opening: [
        "No study object leaving the winter hall is mass-produced. Every rune set, bindrune talisman, and incense blend is prepared individually by hand with attention to the nature of the wood or stone, the lunar phase, and the planetary hour.",
        "For this reason there is no instant checkout button here. When you seek a study set or a personal talisman, you write directly; each piece is crafted for its bearer according to purpose and timing.",
      ],
      sections: [
        {
          heading: "I. Hand-Carved Elder Futhark Rune Sets",
          items: [
            "Wooden Rune Sets: Twenty-four Elder Futhark staves cut from ash, oak, birch, or olive wood, burned by hand or stained with natural pigments and housed in a linen or leather pouch.",
            "Natural Stone Rune Sets: Working sets engraved by hand upon agate, obsidian, amethyst, or river stone and consecrated at the hearth.",
          ],
        },
        {
          heading: "II. Custom Bindrune Talismans",
          items: [
            "Seals Crafted for Intention and Natal Chart: Wooden, bronze, or silver talismans uniting two or more runes upon a single spine, designed after studying the bearer’s birth rune and season.",
            "Consecration and Timing: Each seal is awakened during the appropriate planetary hour and lunar phase before delivery.",
          ],
        },
        {
          heading: "III. Green Covenant Resin & Incense Blends",
          items: [
            "Space Cleansing & Hearth Blends: Pure ritual incense blended in traditional proportions from frankincense, myrrh, pine resin, juniper berry, sage, and mugwort.",
          ],
        },
        {
          heading: "IV. Personal Readings & Inquiries",
          items: [
            "Rune Readings, İlm-i Sima Analysis, and Sky Charts: To inquire about a custom object or a personal session, reach out directly via WhatsApp or Instagram below.",
          ],
        },
      ],
      closing:
        "A true working object is not bought in haste; crafted in its proper hour, it begins to speak in the hand of its keeper.",
      whatsappLabel: "Inquire via WhatsApp",
    },
    sv: {
      title: "Shop",
      subtitle: "Handgjorda runuppsättningar, talismaner och studieföremål",
      opening: [
        "Inget föremål som lämnar vinterrummet är massproducerat. Varje runuppsättning, bindrunetalisman och rökelseblandning tillverkas för hand med omsorg om träets eller stenens natur, månens fas och den planetariska timmen.",
        "Därför finns här ingen snabbkassa. När du söker en runuppsättning eller en personlig talisman skriver du direkt; varje föremål skapas efter syfte och rätt tidpunkt.",
      ],
      sections: [
        {
          heading: "I. Handsnidade Elder Futhark-runuppsättningar",
          items: [
            "Runor i trä: Tjugofyra Elder Futhark-runor skurna ur ask, ek, björk eller olivträ, brända för hand och förvarade i linne- eller läderpåse.",
            "Runor i natursten: Arbetsuppsättningar graverade för hand i agat, obsidian, ametist eller flodsten.",
          ],
        },
        {
          heading: "II. Personliga Bindrune-talismaner",
          items: [
            "Sigill efter avsikt och födelsekarta: Talismaner i trä, brons eller silver där två eller flera runor förenas längs en gemensam ryggrad.",
            "Invigning och tidpunkt: Varje sigill väcks under rätt planettimme och månfas innan det överlämnas.",
          ],
        },
        {
          heading: "III. Det gröna förbundets harts- och rökelseblandningar",
          items: [
            "Rening och härdblandningar: Ren rituell rökelse av frankincense, myrra, tallkåda, enbär, salvia och gråbo.",
          ],
        },
        {
          heading: "IV. Personliga läsningar och förfrågningar",
          items: [
            "Runläggning, İlm-i Sima och himmelskartor: För beställning av handgjorda föremål eller enskild rådgivning, kontakta direkt via WhatsApp eller Instagram nedan.",
          ],
        },
      ],
      closing:
        "Ett äkta arbetsföremål köps inte i brådska; skapat i rätt timme börjar det tala i sin bärares hand.",
      whatsappLabel: "Fråga via WhatsApp",
    },
  },
};
