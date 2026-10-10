import type { Lang } from "@/lib/copy";

export type Rune = {
  slug: string;
  glyph: string;
  name: string;
  deities: readonly string[];
  text: Record<Lang, readonly string[]>;
};

export const runes: readonly Rune[] = [
  {
    slug: "fehu",
    glyph: "ᚠ",
    name: "Fehu",
    deities: ["Freyja", "Frey", "Njord"],
    text: {
      tr: [
        "Fehu, Futhark’ın ilk rünüdür. Adı sığırdır: elde tutulan, sürülen, satılan ve yeniden gelen servet. Altın da bu satırdadır, ama sandıkta kilitli külçe değildir. Fehu dolaşan maldır. Durursa bozulur.",
        "Hareketi ileri ve dışarıdır. Yeni başlangıç burada bir niyet cümlesi değil, el değiştiren bir şeydir: ücret, ürün, verilen hediye, alınan karşılık. Cömertlik şarttır. İyi şey verilir, iyi şey alınır, hayattaki zevk korunur. Yol ile gelen şans oturanın değil, hareket edenin payına düşer.",
        "Beden tarafında dolaşımdır. Kan gezer, ısı dağılır, iş elden ele geçer. Toprak malı tutar, ateş onu yürütür. Harcanabilir bolluk, itibar ve maddi zenginlik aynı kapıdan çıkar. Sosyal başarı da buradadır, ama vitrin için değil: mal dönüyorsa ad da döner.",
        "Fehu istif değildir. Kıskançlık ve hırstan doğan kavga onun ters yüzüdür. Miras kalan yurt da değildir; o başka kapının işidir. Bu mal kilitlenmek için değil, dönmek için vardır. Tutulursa servet yoksulluğa, cömertlik açgözlülüğe döner.",
      ],
      en: [
        "Fehu is the first rune of the Futhark. Its name is cattle: wealth that is held, driven, sold, and comes again. Gold belongs on this line, but not as a bar locked in a chest. Fehu is wealth that moves. If it stands still, it spoils.",
        "Its movement is forward and outward. A new beginning here is not a sentence of intention. It is something that changes hands: a wage, a yield, a gift given, a return received. Generosity is the condition. The good thing is given, the good thing is received, and the pleasure of a life is kept. Luck that comes with the road falls to the one who moves, not to the one who sits.",
        "In the body it is circulation. Blood travels, heat is distributed, a piece of work passes from hand to hand. Earth holds the goods, fire drives them. Spendable abundance, reputation, and material wealth leave by the same door. Social success sits here too, but not as a display: if the goods turn, the name turns with them.",
        "Fehu is not hoarding. The quarrel born of envy and ambition is its reverse face. It is not the inherited homestead either; that is another door’s work. These goods exist in order to turn, not in order to be locked. Locked, wealth becomes poverty and generosity becomes greed.",
      ],
      sv: [
        "Fehu är Futharkens första runa. Namnet är boskap: rikedom som hålls, drivs, säljs och kommer igen. Guld hör hit, men inte som en tacka låst i en kista. Fehu är rikedom som rör sig. Står den stilla fördärvas den.",
        "Rörelsen går framåt och utåt. En ny början är här ingen avsiktssats. Det är något som byter hand: lön, avkastning, en gåva som ges, en gengäld som tas emot. Generositet är villkoret. Det goda ges, det goda tas emot, och livets nöje bevaras. Tur som kommer med vägen faller på den som rör sig, inte på den som sitter.",
        "I kroppen är det kretslopp. Blodet går, värmen fördelas, ett arbete går från hand till hand. Jorden håller godset, elden driver det. Förbrukbart överflöd, anseende och materiell rikedom går ut genom samma dörr. Social framgång sitter också här, men inte som ett skyltfönster: om godset vänder, vänder namnet med det.",
        "Fehu är inte att hamstra. Grälet som föds ur avund och ärelystnad är dess baksida. Det är inte heller det ärvda hemmanet; det är en annan dörrs arbete. Detta gods finns för att omsättas, inte för att låsas. Låst blir rikedom fattigdom och generositet girighet.",
      ],
    },
  },
  {
    slug: "uruz",
    glyph: "ᚢ",
    name: "Uruz",
    deities: ["Thor", "Urd"],
    text: {
      tr: [
        "Uruz yaban öküzüdür. Eski şiir onu boynuzlu, mağrur, bataklıkta duran bir güç olarak bırakır: evcil sürü değil, henüz koşulmamış kuvvet. Fehu maldır; Uruz o malı taşıyacak bedendir.",
        "Anlamı güç, dayanıklılık ve şifadır. Yaşam gücü burada nazik bir dilek değil, kasın, nefesin ve kararın bir arada durmasıdır. Organik yapı kurulur, bir şey biçim alır, beden toparlanır. Cesaret bu ründe gürültü değil, yerini terk etmemektir.",
        "Hareketi içten dışa, hamdan işlenmişe doğrudur. Önce sağlık, sonra sebat. Özgürlük ve bölge de buradadır: hayvan sürüsünü ve sınırını bilir. Toprak ile su birlikte işler; derindeki akıntı ile ayakta duran gövde aynı kuvvettir.",
        "Uruz hüner değildir ve para değildir. Cilalı bir başarı, öğrenilmiş bir laf da değildir. Ters döndüğünde sakatlık, kırılma ve bir daha kapanmayan küslük olur. Güç burada iyileşmek için vardır. Dağıtılırsa yalnızca yıkar.",
      ],
      en: [
        "Uruz is the aurochs. The old poem leaves it horned, proud, standing in the fen: not the tame herd, but force that has not yet been yoked. Fehu is goods. Uruz is the body that can carry them.",
        "Its meaning is strength, endurance, and healing. Life-force here is not a gentle wish. It is muscle, breath, and decision standing together. An organic form is built, a thing takes shape, the body recovers. Courage in this rune is not noise. It is refusing to leave one’s ground.",
        "Its movement runs from the inside outward, from the raw toward the worked. Health first, then perseverance. Freedom and territory sit here too: the beast knows its herd and its boundary. Earth and water work together. The deep current and the standing body are the same force.",
        "Uruz is not skill and it is not money. It is not a polished success or a learned phrase. Turned the wrong way it becomes injury, breakage, and a breach that does not close again. The strength here exists in order to heal. Scattered, it only breaks.",
      ],
      sv: [
        "Uruz är uroxen. Den gamla dikten lämnar den med horn, stolt, stående i kärret: inte den tama hjorden utan kraft som ännu inte är spänd. Fehu är gods. Uruz är kroppen som kan bära det.",
        "Betydelsen är styrka, uthållighet och läkning. Livskraft är här ingen mild önskan. Det är muskel, andedräkt och beslut som står tillsammans. En organisk form byggs, en sak tar gestalt, kroppen återhämtar sig. Mod i denna runa är inte buller. Det är att vägra lämna sin mark.",
        "Rörelsen går inifrån och ut, från det råa mot det bearbetade. Hälsa först, sedan ihärdighet. Frihet och revir sitter också här: djuret känner sin hjord och sin gräns. Jord och vatten arbetar tillsammans. Den djupa strömmen och den stående kroppen är samma kraft.",
        "Uruz är inte skicklighet och inte pengar. Det är inte en polerad framgång eller en inlärd fras. Vänt åt fel håll blir den skada, brott och en spricka som inte sluter sig igen. Styrkan här finns för att läka. Spridd bryter den bara.",
      ],
    },
  },
  {
    slug: "thurisaz",
    glyph: "ᚦ",
    name: "Thurisaz",
    deities: ["Thor", "Loki"],
    text: {
      tr: [
        "Thurisaz dikendir ve devdir. Eski ad hem bataklık devini hem de ele batan dikeni tutar. Dokunması kötü, üzerine oturulması sert bir şeydir. Bu rün nezaket değil, karşıya çıkan kuvvettir.",
        "Anlamı güç, saldırı ve atılımdır. Bilinçdışının bastırılmış yükü burada bir kavrama dönüşür: şimşek, çatışma, engeli hırpalayan darbe. Verimsiz sayılan taşlık toprak işlenebilir hale gelir. Uyanış bu kapıdan nazik geçmez.",
        "Hareketi tepkidir. Önce direnç, sonra yönlendirilmiş kuvvet. Savunma da saldırı da aynı uçtan çıkar. Doğru zihin öfke biriktirmek değil coşkudur; öfke rünün kendi malıdır, onu bir de içeriden beslemek işi bozar. Alet burada yapılır. Ustaca kullanım sonraki kapının işidir.",
        "Thurisaz koruma duası değildir. Kaba şiddet, ihanet ve zorlama onun gölgesidir. Birine yöneltilmiş kin de değildir. Engel varsa kırar; engel yokken kullanılırsın diye bir bahane de değildir. Uyarıdır: bu kuvvet bilinçsiz kalırsa sahibini de keser.",
      ],
      en: [
        "Thurisaz is the thorn and the giant. The old name holds both the marsh-giant and the point that enters the hand. It is evil to touch and hard to sit upon. This rune is not courtesy. It is the force that stands in the way.",
        "Its meaning is power, attack, and breakthrough. The pressed load of the unconscious becomes a grip here: lightning, conflict, the blow that batters an obstacle. Ground called barren can be made workable. Waking does not pass gently through this door.",
        "Its movement is reaction. Resistance first, then directed force. Defense and attack leave from the same point. The right mind is not stored anger but vigor. The anger already belongs to the rune; feeding it again from inside spoils the work. The tool is made here. Skilled use is the next door’s work.",
        "Thurisaz is not a prayer for protection. Crude violence, betrayal, and coercion are its shadow. It is not spite aimed at a person. If there is an obstacle, it breaks it. It is not an excuse to be used when there is none. It is a warning: if this force stays unconscious, it cuts its owner too.",
      ],
      sv: [
        "Thurisaz är törnet och jätten. Det gamla namnet håller både kärrets jätte och udden som går in i handen. Den är illa att röra och hård att sitta på. Denna runa är inte hövlighet. Den är kraften som står i vägen.",
        "Betydelsen är kraft, angrepp och genombrott. Det omedvetnas pressade last blir här ett grepp: blixt, konflikt, slaget som bankar på ett hinder. Mark som kallats ofruktsam kan göras brukbar. Uppvaknandet går inte milt genom denna dörr.",
        "Rörelsen är reaktion. Motstånd först, sedan riktad kraft. Försvar och angrepp går ut från samma udd. Rätt sinnelag är inte lagrad vrede utan drift. Vreden tillhör redan runan; att mata den en gång till inifrån fördärvar arbetet. Redskapet görs här. Skickligt bruk är nästa dörrs arbete.",
        "Thurisaz är inte en bön om skydd. Rått våld, svek och tvång är dess skugga. Den är inte agg riktat mot en person. Finns ett hinder bryter den det. Den är inte en ursäkt att brukas när inget hinder finns. Den är en varning: stannar kraften omedveten skär den också sin ägare.",
      ],
    },
  },
  {
    slug: "ansuz",
    glyph: "ᚨ",
    name: "Ansuz",
    deities: ["Odin", "Bragi", "Idunn"],
    text: {
      tr: [
        "Ansuz atatanrıdır, ağızdır, nehir ağzıdır. Eski şiir bu rünü dilin kaynağı ve bilginin direği sayar. Adı nefestir: tanrıların atasına, onlara can verene bağlanan soluk. Her laf değil, düzen kuran söz.",
        "Anlamı ilham, iletişim ve bilinçli zihindir. Şiir, ilahi, etimoloji, bir öğretinin aktarımı burada durur. Evrenin sesi bir süs değildir; büyülü söz bir yemindir, hafif bir dilek değil. Nefes atadan geçer, cevap bu kapıdan gelir.",
        "Hareketi içeriden dışarı, sesten anlama doğrudur. Önce dinlenir, sonra söylenir. Rüzgâr, akan su, yankı bu rünün çalışma zeminidir. Öğreten ile öğrenen aynı nefeste buluşur. Zekâ burada depolanmaz, devredilir.",
        "Ansuz gevezelik değildir ve suskunluk da değildir. Her istenenin kendiliğinden olacağı bir makine de değildir. Bağırarak kurulan düzen sahte çıkar. Sözün karşılığı yoksa bu rün boş bir ağızdır.",
      ],
      en: [
        "Ansuz is the ancestor-god, the mouth, the river mouth. The old poem takes this rune as the source of language and the pillar of wisdom. Its name is breath: the breath bound to the ancestor of the gods, the one who gives them life. Not every utterance. The word that sets an order.",
        "Its meaning is inspiration, communication, and the conscious mind. Poetry, hymn, etymology, the passing on of a teaching stand here. The voice of the world is not an ornament. A word of power is a vow, not a light wish. Breath passes from the ancestor, and the answer comes through this door.",
        "Its movement runs from the inside outward, from sound toward meaning. First it is heard, then it is spoken. Wind, running water, and echo are its working ground. The one who teaches and the one who learns meet in the same breath. Intelligence is not stored here. It is handed on.",
        "Ansuz is not chatter and it is not silence. It is not a machine by which whatever is wanted happens of itself. An order built by shouting comes out false. If the word has no answer, this rune is an empty mouth.",
      ],
      sv: [
        "Ansuz är förfadersguden, munnen, flodmynningen. Den gamla dikten tar denna runa som språkets källa och visdomens pelare. Namnet är andedräkt: andningen bunden till gudarnas förfader, den som ger dem liv. Inte varje yttrande. Ordet som ställer en ordning.",
        "Betydelsen är inspiration, kommunikation och det medvetna sinnet. Dikt, hymn, etymologi, ett lärandes överlämnande står här. Världens röst är inte en prydnad. Ett maktord är en ed, inte en lätt önskan. Andedräkten går från förfadern, och svaret kommer genom denna dörr.",
        "Rörelsen går inifrån och ut, från ljud mot betydelse. Först hörs den, sedan sägs den. Vind, rinnande vatten och eko är dess arbetsgrund. Den som lär och den som lär sig möts i samma andetag. Förstånd lagras inte här. Det lämnas vidare.",
        "Ansuz är inte prat och inte tystnad. Den är inte en maskin genom vilken det man vill sker av sig själv. En ordning byggd med rop blir falsk. Har ordet inget svar är denna runa en tom mun.",
      ],
    },
  },
  {
    slug: "raido",
    glyph: "ᚱ",
    name: "Raido",
    deities: ["Hermod", "Ing", "Thor"],
    text: {
      tr: [
        "Raido arabadır ve zaten olmuş olandır. Eski şiir binişi ikiye ayırır: içeride, salonda yumuşak; güçlü bir atın üzerinde, millerce yolda sert. Rün ikisini birden bilir. Yolculuk bir heves değil, günün gidişidir.",
        "Güneşin arabası göğü emreder. Olması bir seçim değildir; olması gerekendir. Daire kapanır, tekerlek ilerler. Anlamı ritimdir: kalbin vuruşu, davulun ölçüsü, kendi arabasını sürenin kontrolü. Enerji de bu yoldan gider; yolculuk yalnızca harita üzerinde değildir.",
        "Hareketi ileri ve tekrarlıdır. Bir desen çizilir, o desen bırakılmaz. Doğru binek, doğru tempo, doğru gün. Zaten o yoldasınızdır. Raido yeni bir yön icat etmez; üzerinde olunan yolu okunur kılar.",
        "Raido kaçış değildir ve durmak değildir. Plansız savrulma, başkasının arabasına binip kendi ritmini unutmak da değildir. Yol bitmiş görünüyorsa rün orada kapanmaz. Kapanış, ölçünün bozulduğu yerdir.",
      ],
      en: [
        "Raido is the wagon, and what has already come to pass. The old poem splits the ride in two: soft inside the hall, hard for miles on a strong horse. The rune knows both. A journey is not a mood. It is the course of the day.",
        "The sun’s wagon orders the sky. That it goes is not a choice. It is what must be. The circle closes, the wheel advances. Its meaning is rhythm: the beat of the heart, the measure of the drum, the control of the one who drives their own wagon. Force travels this road too. The journey is not only on a map.",
        "Its movement is forward and repeated. A pattern is drawn and not abandoned. The right mount, the right tempo, the right day. You are already on that road. Raido does not invent a new direction. It makes the road already under you readable.",
        "Raido is not flight and it is not a stop. It is not a planless lurch, nor riding in someone else’s wagon and forgetting your own measure. If the road looks finished, the rune does not close there. It closes where the measure breaks.",
      ],
      sv: [
        "Raido är vagnen, och det som redan har skett. Den gamla dikten delar ritten i två: mjuk inne i hallen, hård i mil på en stark häst. Runan känner båda. En färd är inte ett humör. Den är dagens lopp.",
        "Solens vagn befaller himlen. Att den går är inget val. Det är det som måste ske. Cirkeln sluts, hjulet går fram. Betydelsen är rytm: hjärtats slag, trummans mått, kontrollen hos den som kör sin egen vagn. Kraft färdas också denna väg. Färden ligger inte bara på en karta.",
        "Rörelsen är framåt och upprepad. Ett mönster ritas och överges inte. Rätt riddjur, rätt tempo, rätt dag. Du är redan på den vägen. Raido uppfinner ingen ny riktning. Den gör vägen som redan ligger under dig läsbar.",
        "Raido är inte flykt och inte ett stopp. Den är inte ett planlöst kast, inte heller att sitta i någon annans vagn och glömma sitt eget mått. Ser vägen färdig ut sluter runan sig inte där. Den sluter sig där måttet brister.",
      ],
    },
  },
  {
    slug: "kenaz",
    glyph: "ᚲ",
    name: "Kenaz",
    deities: ["Bragi", "Freyja", "Heimdall", "Weland"],
    text: {
      tr: [
        "Kenaz meşaledir ve yaradır. Şiirler burada ayrılır: bir dal aydınlık alevi, prenslerin oturduğu yeri yakar; bir dal ülseri, açılan bereyi tutar. İkisi de doğrudur. Işık bir açıklıktan gelir. Açıklık bazen bir kesiktir.",
        "Anlamı beceri, yaratıcılık ve öğrenmedir. Bilgiye meşale tutulur, gizlenen görünür, zanaat ele iner. Öğretmek ile öğrenmek aynı ateştir. Sezgi, oyun ve kurnazlık da buradadır; içteki gözlemci, laf değil, bakan ışıktır.",
        "Hareketi kontrollü ateştir. Isı dönüştürür, ışık ayırır. Alet önceki kapıda yapılır; Kenaz o aletin ustaca kullanılmasıdır. Doğanın yaptığı gibi yapmak: ham maddeyi bırakmadan, yakmadan, biçim vermek. Yara temizlenirse yol gösterir. İhmal edilirse yer.",
        "Kenaz yangın değildir ve teşhirdir. Her parlayan şey bilgi sayılmaz. Işık tutulmayan sır, ustalık iddiasıyla dolaşan boş el de bu rün değildir. Gerçek bilgi bulunmadan yakılan ateş yalnızca isi bırakır.",
      ],
      en: [
        "Kenaz is the torch and the wound. The poems divide here. One branch is a bright flame that burns where princes sit. One branch is the ulcer, the sore that opens. Both are true. Light comes through an opening. Sometimes the opening is a cut.",
        "Its meaning is skill, creativity, and learning. A torch is held to knowledge, what was hidden becomes visible, craft comes into the hand. Teaching and learning are the same fire. Intuition, play, and cunning sit here too. The inner observer is not talk. It is the light that looks.",
        "Its movement is controlled fire. Heat transforms, light separates. The tool is made at the previous door. Kenaz is the skilled use of that tool. To make as nature makes: to give form without abandoning the raw material and without burning it. If the wound is cleaned, it shows the way. If it is neglected, it consumes.",
        "Kenaz is not a wildfire and it is not a display. Not everything that shines counts as knowledge. A secret with no light on it, and an empty hand walking about with a claim of mastery, are not this rune. A fire lit before the real knowledge is found leaves only soot.",
      ],
      sv: [
        "Kenaz är facklan och såret. Dikterna delar sig här. En gren är en klar låga som brinner där furstar sitter. En gren är såret, det onda som öppnar sig. Båda är sanna. Ljus kommer genom en öppning. Ibland är öppningen ett snitt.",
        "Betydelsen är skicklighet, skapande och lärande. En fackla hålls mot kunskap, det dolda blir synligt, hantverket kommer i handen. Att lära ut och att lära är samma eld. Intuition, lek och list sitter också här. Den inre iakttagaren är inte prat. Den är ljuset som ser.",
        "Rörelsen är kontrollerad eld. Värme förvandlar, ljus skiljer. Redskapet görs vid den förra dörren. Kenaz är det skickliga bruket av det redskapet. Att göra som naturen gör: ge form utan att överge råmaterialet och utan att bränna det. Rensas såret visar det vägen. Försummas det förtär det.",
        "Kenaz är inte en vildbrand och inte ett skyltfönster. Inte allt som lyser räknas som kunskap. En hemlighet utan ljus på sig, och en tom hand som går omkring med anspråk på mästerskap, är inte denna runa. En eld tänd innan den verkliga kunskapen är funnen lämnar bara sot.",
      ],
    },
  },
  {
    slug: "gebo",
    glyph: "ᚷ",
    name: "Gebo",
    deities: ["Gefjon", "Vali", "Sjofn", "Odin"],
    text: {
      tr: [
        "Gebo hediyedir. Çizgisi iki yönü birden tutar; bu yüzden tek taraflı okunmaz. Eski düzen armağanı bilir: veren bağlanır, alan bağlanır. Hediye boş bir incelik değildir. Değişimin kendisidir.",
        "Anlamı adil değişim, kurban ve evliliktir. Verme ile alma aynı tartıda durur. Ticaret, konukseverlik, onur, sözleşmeye yazılan söz buradadır. “Verdiğimi alıyorum” bu rünün ölçüsüdür. Söz hafif verilmez.",
        "Hareketi gidiş-geliştir. Bir kapı açılırsa karşı kapı da açılır. Eşitlerin ve karşıtların ağırlığı bozulursa rün bozulur. Paylaşılan yatak, ortak iş, yemin ve borç aynı kanuna girer: alınan, verilenle aynı cinsten olmalıdır.",
        "Gebo bedava değildir ve romantik bir hal değildir. Sevgiyi sömüren alışveriş, tek tarafın şiştiği ortaklık, karşılıksız bağış gibi görünüp borç çıkaran jest onun tersidir. Her hediyenin bir yükümlülüğü vardır. Yükümlülük reddedilirse hediye lanete döner.",
      ],
      en: [
        "Gebo is the gift. Its mark holds both directions, so it is not read from one side. The old order knows the gift: the giver is bound, the receiver is bound. A gift is not an empty courtesy. It is the exchange itself.",
        "Its meaning is fair exchange, sacrifice, and marriage. Giving and receiving stand on the same scale. Trade, hospitality, honor, and the word written into a contract sit here. “What I give, I receive” is this rune’s measure. A word is not given lightly.",
        "Its movement is a going and a return. If one door opens, the opposite door opens too. If the weight of equals and opposites breaks, the rune breaks. The shared bed, the common work, the vow, and the debt enter the same law: what is received must be of the same kind as what was given.",
        "Gebo is not free of charge and it is not a romantic mood. An exchange that exploits affection, a partnership swollen on one side, a gesture that looks like a gift and turns out a debt, are its reverse. Every gift carries an obligation. If the obligation is refused, the gift becomes a curse.",
      ],
      sv: [
        "Gebo är gåvan. Dess tecken håller båda riktningarna, så den läses inte från ett håll. Den gamla ordningen känner gåvan: givaren binds, mottagaren binds. En gåva är inte en tom hövlighet. Den är själva bytet.",
        "Betydelsen är rättvist byte, offer och äktenskap. Att ge och att ta emot står på samma våg. Handel, gästfrihet, heder och ordet som skrivs in i ett avtal sitter här. ”Det jag ger, det tar jag emot” är denna runas mått. Ett ord ges inte lätt.",
        "Rörelsen är en gång och en återkomst. Öppnas en dörr öppnas också den motsatta. Bryts vikten mellan likar och motsatser bryts runan. Den delade sängen, det gemensamma arbetet, eden och skulden går in under samma lag: det som tas emot måste vara av samma slag som det som gavs.",
        "Gebo är inte gratis och inte ett romantiskt humör. Ett byte som utnyttjar tillgivenhet, ett partnerskap svullet på en sida, en gest som ser ut som en gåva och visar sig vara en skuld, är dess motsats. Varje gåva bär en förpliktelse. Avvisas förpliktelsen blir gåvan en förbannelse.",
      ],
    },
  },
  {
    slug: "wunjo",
    glyph: "ᚹ",
    name: "Wunjo",
    deities: ["Hnoss", "Gersemi", "Freyr", "Odin"],
    text: {
      tr: [
        "Wunjo sevinçtir. Eski şiir onu, derdini az bilen, evi yeterli, nasibi yerinde olan kişinin payı sayar. Kişinin içindeki parıltı değil, bir arada durulabilen haldir. Uyum burada bir üslup değil, ortak işin tutmasıdır.",
        "Anlamı umut, mükemmellik ve paylaşılan amaçtır. Doğru dilek, iradenin doğru kullanılması, esenlik, akraba, dostluk ve aynı kimliği taşıyan topluluk bu kapıdadır. Üzüntü çekilince evrenin armağanı içeri girebilir. Sevinç duyulmak içindir.",
        "Hareketi dağılmadan yayılmaktır. Bir kişi düzelir, sonra bağ düzelir, sonra ev ve topluluk aynı ölçüde durur. “Etkiliyorum, paylaşıyorum” bu rünün işidir. Mükemmellik kusursuz vitrin değil, iradenin kendi gerçeğine oturmasıdır.",
        "Wunjo özel bir sarhoşluk değildir ve tek başına biriktirilen zevk değildir. Zorla gülümsetilen oda, fikri ortak olup emeği ortak olmayan grup da bu rün değildir. Sevinç paylaşılamıyorsa Wunjo kapanır. Kapanınca umut süs olarak kalır.",
      ],
      en: [
        "Wunjo is joy. The old poem counts it as the share of the one who knows little woe, whose house is sufficient, whose lot sits in its place. Not a glitter inside a single person. A condition in which people can stand together. Harmony here is not a style. It is the common work holding.",
        "Its meaning is hope, perfection, and a shared aim. The right wish, the right use of the will, well-being, kin, friendship, and a company that carries the same identity are at this door. When sorrow is drawn off, the world’s gift can come in. Joy exists in order to be heard.",
        "Its movement is to spread without scattering. One person comes right, then the bond comes right, then the house and the company stand at the same measure. “I have an effect, I share” is this rune’s work. Perfection is not a flawless display. It is the will sitting in its own truth.",
        "Wunjo is not a private intoxication and not a pleasure stored alone. A room forced to smile, and a group that shares an idea but not the labor, are not this rune. If the joy cannot be shared, Wunjo closes. When it closes, hope remains as decoration.",
      ],
      sv: [
        "Wunjo är glädje. Den gamla dikten räknar den som andelen för den som känner liten sorg, vars hus är tillräckligt, vars lott sitter på sin plats. Inte ett glitter inuti en enda person. Ett tillstånd där människor kan stå tillsammans. Harmoni är här ingen stil. Den är det gemensamma arbetet som håller.",
        "Betydelsen är hopp, fullkomlighet och ett delat syfte. Den rätta önskan, viljans rätta bruk, välbefinnande, fränder, vänskap och ett sällskap som bär samma identitet står vid denna dörr. När sorgen dras undan kan världens gåva komma in. Glädje finns för att höras.",
        "Rörelsen är att breda ut sig utan att skingras. En person kommer rätt, sedan bandet, sedan står huset och sällskapet i samma mått. ”Jag verkar, jag delar” är denna runas arbete. Fullkomlighet är inte ett felfritt skyltfönster. Den är viljan sittande i sin egen sanning.",
        "Wunjo är inte ett privat rus och inte ett nöje lagrat ensamt. Ett rum som tvingas le, och en grupp som delar en idé men inte arbetet, är inte denna runa. Kan glädjen inte delas sluter sig Wunjo. När den sluter sig blir hoppet en prydnad.",
      ],
    },
  },
  {
    slug: "hagalaz",
    glyph: "ᚺ",
    name: "Hagalaz",
    deities: ["Hel", "Heimdall"],
    text: {
      tr: [
        "Hagalaz doludur. Şiir onu gökten savrulan en tane sayar: bakınca buz, düşünce su. Tahıl ile bozulma aynı ründedir. Tarlayı döven şey, tarlanın suyuna da döner.",
        "Anlamı kriz, radikal değişim ve kaçınılamayan sondur. Hava sertleşir, düzen dağılır, değiştirilemeyen kabul edilir. Jung’un gölgesi bu kapıda bir kavram olarak durur: görülmeyen pay, olayın içine düşer. Her yıkım bir var oluştur. Öldürmeyen, biçimi değiştirir.",
        "Hareketi yukarıdan aşağı, sonra eriyerek yayılmaktır. Pazarlık etmez. Koruma da buradadır, ama kalkan olarak değil: uymayan kalıp düşer, kalan kalıp işini bitirir. Gizli yönetici başkası değildir. Krizi dışarıya ihale eden, rünü okumamış olur.",
        "Hagalaz birine tutulan beddua değildir ve sonsuz felaket değildir. Dolu erir. Tahıl, darbenin içinden çıkar. Bu rünü kin için kullanmak, yağmuru bir düşmana ait sanmaktır. Değişim kaçınılamaz; intikam ise bu kapının adı değildir.",
      ],
      en: [
        "Hagalaz is hail. The poem counts it as a grain whirled from the sky: ice when it strikes, water when it thaws. Grain and disruption are the same rune. What beats the field also turns into the field’s water.",
        "Its meaning is crisis, radical change, and an end that cannot be avoided. The weather hardens, an order breaks, what cannot be changed is accepted. The shadow stands at this door as a fact: the unseen share falls into the event. Every destruction is a coming-into-being. What does not kill changes the form.",
        "Its movement is from above downward, then a melting that spreads. It does not bargain. Protection sits here too, but not as a shield: the pattern that does not fit falls away, and the pattern that remains finishes its work. The hidden ruler is not someone else. Whoever contracts the crisis out to the world has not read the rune.",
        "Hagalaz is not a curse aimed at a person and it is not an endless disaster. Hail melts. The grain comes out of the blow. To use this rune for spite is to think the weather belongs to an enemy. The change cannot be avoided. Revenge is not this door’s name.",
      ],
      sv: [
        "Hagalaz är hagel. Dikten räknar det som ett korn slungat från himlen: is när det slår, vatten när det töar. Säd och sönderfall är samma runa. Det som piskar åkern blir också åkerns vatten.",
        "Betydelsen är kris, radikal förändring och ett slut som inte kan undvikas. Vädret hårdnar, en ordning bryts, det som inte kan ändras accepteras. Skuggan står vid denna dörr som ett faktum: den osedda andelen faller in i händelsen. Varje förstörelse är ett blivande. Det som inte dödar ändrar formen.",
        "Rörelsen är uppifrån och ner, sedan en smältning som breder ut sig. Den förhandlar inte. Skydd sitter också här, men inte som en sköld: mönstret som inte passar faller bort, och mönstret som blir kvar avslutar sitt arbete. Den dolda styraren är ingen annan. Den som lejer ut krisen till världen har inte läst runan.",
        "Hagalaz är inte en förbannelse riktad mot en person och inte en oändlig katastrof. Hagel smälter. Säden kommer ut ur slaget. Att bruka denna runa för agg är att tro att vädret tillhör en fiende. Förändringen kan inte undvikas. Hämnd är inte denna dörrs namn.",
      ],
    },
  },
  {
    slug: "nauthiz",
    glyph: "ᚾ",
    name: "Nauthiz",
    deities: ["Skuld", "Nott"],
    text: {
      tr: [
        "Nauthiz ihtiyaçtır: olmayan şey. Şiir onu göğüste daralan bir hal sayar; zamanında ele alınırsa yardıma döner. Sıkıntı burada süs değil, eksik olanın adıdır.",
        "Anlamı kısıt, çaba ve ihtiyaç-ateşidir. Direnç, zorunluluk, aciliyet, sürtünme, geçmiş eylemin sonucu bu kapıdadır. “İstediğim bu değil” cümlesi rünün kendi cümlesidir. Zamanı gelince. Bitiş, son değildir.",
        "İkili yürür. Bir yüzü soğuk, verimsiz toprak, karanlık gün, açlık. Öbür yüzü o karanlıkta ateşi yakan eldir. Bazen ateş için gerekenlerin listesidir, bazen ateşin kendisinin temel ihtiyaç olduğudur. Hareketi beklemek değil, sürterek tutuşturmaktır.",
        "Nauthiz tembellik bahanesi değildir ve kaderin üzerine çökmüş bir kimlik değildir. Eksik varsa çalışılır. Çalışma yoksa rün yalnızca yokluk olarak kalır. İstenen gecikmiş olabilir; gereken gecikmez. İkisini karıştırmak bu kapıyı kapatır.",
      ],
      en: [
        "Nauthiz is need: the thing that is not there. The poem counts it as a tightness on the chest; taken in hand in time, it can turn into a help. Hardship here is not an ornament. It is the name of what is missing.",
        "Its meaning is constraint, effort, and the need-fire. Resistance, necessity, urgency, friction, and the result of a past action are at this door. “This is not what I wanted” is the rune’s own sentence. When its time comes. The ending is not the end.",
        "It walks as two. One face is cold, barren ground, a dark day, hunger. The other face is the hand that lights a fire in that dark. Sometimes it is the list of what a fire requires. Sometimes it is that fire itself is the basic need. Its movement is not waiting. It is kindling by friction.",
        "Nauthiz is not an excuse for idleness and not an identity collapsed under fate. If something is missing, the work is done. If there is no work, the rune remains only as lack. What is wanted may be delayed. What is required is not. Mixing the two closes this door.",
      ],
      sv: [
        "Nauthiz är nöd: det som inte finns. Dikten räknar den som en åtstramning över bröstet; tas den i hand i tid kan den bli en hjälp. Nöd är här ingen prydnad. Den är namnet på det som saknas.",
        "Betydelsen är begränsning, ansträngning och nödeld. Motstånd, nödvändighet, brådska, friktion och resultatet av en tidigare handling står vid denna dörr. ”Detta är inte vad jag ville” är runans egen mening. När dess tid kommer. Slutet är inte slutet.",
        "Den går som två. Ett ansikte är kyla, ofruktsam jord, en mörk dag, hunger. Det andra är handen som tänder en eld i det mörkret. Ibland är den listan över vad en eld kräver. Ibland är den att elden själv är det grundläggande behovet. Rörelsen är inte att vänta. Den är att tända genom friktion.",
        "Nauthiz är inte en ursäkt för lättja och inte en identitet som sjunkit under ödet. Saknas något görs arbetet. Finns inget arbete blir runan bara brist. Det önskade kan dröja. Det nödvändiga dröjer inte. Att blanda dem stänger denna dörr.",
      ],
    },
  },
  {
    slug: "isa",
    glyph: "ᛁ",
    name: "Isa",
    deities: ["Skadi", "Rind", "Verthandi"],
    text: {
      tr: [
        "Isa buzdur. Şiir onu cam gibi, bakması güzel, basması kaygan sayar. Tek çizgidir; öbür rünler bu çizginin üstüne kesilir. Biçim veren öz budur. Ateş enerji verir, buz biçimi tutar.",
        "Anlamı kontrol, kimlik ve odaktır. İrade tek bir fikre toplanır. İstenmeyen kuvvet burada durdurulur; bu bir kaçış değil, savunmadır. Beklemek, sessizliğin bilgeliği, ego ile ruhun aynı ölçüde durması bu kapıdadır. Benlik güçlenir. Güç, sınırını bilirse kimlik olur.",
        "Hareketi neredeyse hareketsizliktir. Köprü kurulur, üstünde yürünür, acele eden düşer. Duyguların taşması kesilir. Başkasını kontrol etmek de bu rünün gölgeli becerisidir; ölçü kaçarsa buz, altındaki suyu da dondurur.",
        "Isa ölüm değildir ve yılın kendisi değildir. Sonsuz bir don, ruhun yerine geçen bir vitrin de değildir. Ego izlenmezse kendini yüceltmeye, sahte parıltıya kayar. Buz çözülmesi gereken yerde tutulursa hayat durur. Tutulması gereken yerde çözülürse dağılır.",
      ],
      en: [
        "Isa is ice. The poem counts it as like glass, fair to look at, slippery to step on. It is a single stroke. The other runes are cut upon that stroke. This is the essence that gives form. Fire gives energy. Ice holds the shape.",
        "Its meaning is control, identity, and focus. The will is gathered into one idea. An unwanted force is stopped here. That is not flight. It is defense. Waiting, the wisdom of silence, and the ego standing at the same measure as the spirit are at this door. The self strengthens. Strength becomes identity if it knows its limit.",
        "Its movement is almost stillness. A bridge is built, it is walked, and the one who hurries falls. The overflow of feeling is cut. Controlling another is also this rune’s shadowed skill. If the measure is lost, the ice freezes the water under it as well.",
        "Isa is not death and it is not the year itself. It is not an endless freeze, nor a display standing in place of the spirit. If the ego is not watched, it slides into self-display and a false shine. If the ice is held where it should thaw, life stops. If it thaws where it should be held, things scatter.",
      ],
      sv: [
        "Isa är is. Dikten räknar den som glas, vacker att se, hal att stiga på. Den är ett enda streck. De andra runorna skärs på det strecket. Detta är den essens som ger form. Eld ger energi. Is håller gestalten.",
        "Betydelsen är kontroll, identitet och fokus. Viljan samlas till en enda idé. En oönskad kraft hejdas här. Det är inte flykt. Det är försvar. Att vänta, tystnadens visdom och egot stående i samma mått som anden står vid denna dörr. Jaget stärks. Styrka blir identitet om den känner sin gräns.",
        "Rörelsen är nästan stillhet. En bro byggs, den gås, och den som hastar faller. Känslornas översvämning skärs av. Att kontrollera en annan är också denna runas skuggade färdighet. Tappas måttet fryser isen också vattnet under sig.",
        "Isa är inte död och inte året självt. Den är inte en oändlig köld och inte ett skyltfönster i andens ställe. Vaktas egot inte glider det över i självupphöjelse och en falsk glans. Hålls isen där den borde töa stannar livet. Töar den där den borde hållas skingras saker.",
      ],
    },
  },
  {
    slug: "jera",
    glyph: "ᛃ",
    name: "Jera",
    deities: ["Sif", "Gefjon", "Freyr", "Verdandi", "Baldur", "Hodur"],
    text: {
      tr: [
        "Jera yıldır ve hasattır. Şiir onu, yerin meyvesini verdiği mevsimin umudu sayar. Adı tam olarak yıl demektir. İki yarıdan oluşur; yılın iki yarısı bir eksenin çevresinde döner. Bu rün acele eden bir işaret değildir.",
        "Anlamı doğru eylemin karşılığıdır. Ekilense biçilir. Barış toprakta ve kalpte birlikte durur. Bereket, yaratıcılık, döngünün gücü ve kademeli değişim buradadır. Yeniden başlama bir sıfırlanma değil, turun tamamlanmasıdır.",
        "Hareketi yatay ve mevsimliktir. Gün değil, yıl. Yumuşak değişim: zorlayan değil, olgunlaştıran. Çoklu evrenin döngüsü burada bir laf değil, ekim ile biçim arasındaki süredir. Erken çekilen başak tane vermez.",
        "Jera mucizevi hız değildir ve kriz değildir. Bir günde istenen sonuç bu kapıdan çıkmaz. Emek yoksa hasat da yoktur. Döngüyü kırıp meyveyi koparmak Jera’yı kapatır. Doğru iş, doğru zamanda, kendi ölçüsünde döner.",
      ],
      en: [
        "Jera is the year and the harvest. The poem counts it as the hope of the season when the earth gives her fruit. The name means year, exactly. It is made of two halves. The two halves of the year turn around one axis. This rune is not a sign that hurries.",
        "Its meaning is the return of a right action. What was sown is reaped. Peace stands in the land and in the heart together. Fertility, creativity, the power of the cycle, and gradual change sit here. A new beginning is not a reset. It is the completion of the turn.",
        "Its movement is horizontal and seasonal. Not the day, the year. A soft change: not the one that forces, the one that ripens. The cycle is not a phrase here. It is the time between sowing and reaping. An ear pulled early gives no grain.",
        "Jera is not miraculous speed and it is not a crisis. A result wanted in a single day does not leave by this door. If there is no labor, there is no harvest. To break the cycle and snatch the fruit closes Jera. Right work, in its right time, turns at its own measure.",
      ],
      sv: [
        "Jera är året och skörden. Dikten räknar den som hoppet i den tid då jorden ger sin frukt. Namnet betyder år, precis. Den är gjord av två hälfter. Årets två hälfter vänder kring en axel. Denna runa är inte ett tecken som skyndar.",
        "Betydelsen är rätt handlings gensvar. Det som såddes skördas. Frid står i jorden och i hjärtat tillsammans. Fruktsamhet, skapande, cykelns kraft och gradvis förändring sitter här. En ny början är inte en nollställning. Den är varvets fullbordan.",
        "Rörelsen är vågrät och årstidlig. Inte dagen, året. En mjuk förändring: inte den som tvingar, den som mognar. Cykeln är här ingen fras. Den är tiden mellan sådd och skörd. Ett ax som dras för tidigt ger ingen säd.",
        "Jera är inte mirakulös hastighet och inte en kris. Ett resultat som önskas på en enda dag går inte ut genom denna dörr. Finns inget arbete finns ingen skörd. Att bryta cykeln och rycka frukten stänger Jera. Rätt arbete, i rätt tid, vänder i sitt eget mått.",
      ],
    },
  },
  {
    slug: "eihwaz",
    glyph: "ᛇ",
    name: "Eihwaz",
    deities: ["Skadi", "Ullr", "Odin"],
    text: {
      tr: [
        "Eihwaz porsuk ağacıdır. Şiir onu toprakta sert duran, kabuğu kaba, ateşi tutan bir ağaç sayar. Yay bu odundan yapılır; zehir de bu ağacın kendisindedir. Uzun yaşam ile ölüm aynı gövdededir.",
        "Anlamı ölümsüzlük, omurga ve ölümün ötesidir. Dünyanın ağacı burada bir hikâye değil, dikey eksendir. Jera yılı yatay tutar; Eihwaz gövdeyi yukarı ve aşağı tutar. Bedenin omurgası da odur: enerji kökten tepeye bu hattan gider. Kehanet, bu hattın okunmasıdır.",
        "Hareketi yavaş ve diktir. Kutlama ağacıdır, çünkü devrilmeden durur. Ölüm bir kaçış kapısı değil, gövdenin öbür ucudur. Uzun iş, uzun ömür, bir ömrü aşan duruş bu rünün ölçüsüdür.",
        "Eihwaz hızlı bir son değildir ve rahat bir gölgelik değildir. Porsuğun altına temelsiz oturulmaz. Zehir ile yay aynı ağaçtadır; biri olmadan öbürü anlatılmaz. Omurga dik durmuyorsa bu rün süs olarak kalır.",
      ],
      en: [
        "Eihwaz is the yew. The poem counts it as a tree standing hard in the earth, rough in its bark, holding fire. The bow is made of this wood. The poison is in the tree itself. Long life and death are the same trunk.",
        "Its meaning is immortality, the spine, and what lies beyond death. The world-tree here is not a story. It is the vertical axis. Jera holds the year on the level. Eihwaz holds the trunk up and down. The spine of the body is that too: energy goes from root to crown along this line. Divination is the reading of that line.",
        "Its movement is slow and upright. It is a tree of celebration because it stands without falling. Death is not an exit. It is the other end of the trunk. Long work, a long life, a stance that outlasts one life, are this rune’s measure.",
        "Eihwaz is not a quick end and not a comfortable shade. One does not sit under the yew without a foundation. Poison and bow are the same tree. One is not told without the other. If the spine does not stand straight, this rune remains an ornament.",
      ],
      sv: [
        "Eihwaz är idegranen. Dikten räknar den som ett träd stående hårt i jorden, grovt i barken, hållande eld. Bågen görs av detta trä. Giftet finns i trädet självt. Långt liv och död är samma stam.",
        "Betydelsen är odödlighet, ryggraden och det som ligger bortom döden. Världsträdet är här ingen berättelse. Det är den lodräta axeln. Jera håller året vågrätt. Eihwaz håller stammen upp och ner. Kroppens ryggrad är också den: energin går från rot till krona längs denna linje. Spådom är läsningen av den linjen.",
        "Rörelsen är långsam och upprätt. Det är ett träd för högtid därför att det står utan att falla. Döden är ingen utgång. Den är stammens andra ände. Långt arbete, ett långt liv, en hållning som överlever ett liv, är denna runas mått.",
        "Eihwaz är inte ett snabbt slut och inte en bekväm skugga. Man sitter inte under idegranen utan grund. Gift och båge är samma träd. Det ena berättas inte utan det andra. Står ryggraden inte rak blir denna runa en prydnad.",
      ],
    },
  },
  {
    slug: "perthro",
    glyph: "ᛈ",
    name: "Perthro",
    deities: ["Frigg", "Nerthus", "Mimir", "Nornir"],
    text: {
      tr: [
        "Perthro zar atışıdır. Adın eski karşılığı tartışmalıdır; çalışma anlamı lot kabıdır. Savaştan önce kaderini öğrenmek isteyen, işaretleri bu kaba koyup atardı. Rün, atılmış sonucu değil, kabın içindeki ihtimali tutar.",
        "Anlamı şans, neden-sonuç ve kehanettir. Orlog, etkinin değişmez kanunudur. Wyrd, aynı kanunun kişi ölçeğinde işlenmesidir ve o kadar kilitli değildir. Bilinç geliştikçe ağın içinde hareket edilebilir. Uygun koşul kurulur; olasılık kaydırılır. Kuantum alan burada bir süs kelime değil, henüz düşmemiş lotun yeridir.",
        "Hareketi sallamaktır, açmamaktır. Kupa kulağın yanında durur. Tahmin, kumar ve doğum aynı gizlilikte durur: sonuç vardır, henüz görünmez. Kehanet bu ründe haber uydurmak değil, lotun hangi kanuna düşeceğini okumaktır.",
        "Perthro garanti değildir ve boş bir muamma edebiyatı değildir. Kap açılmadan sonucu ilan eden, rünü bırakmış olur. Şans burada tembellik değildir. Koşul kurulmamışsa atış yalnızca gürültüdür.",
      ],
      en: [
        "Perthro is the cast of the lot. The old sense of the name is disputed. The working sense is the lot-cup. The one who wanted to know their lot before a battle put the marks in that cup and cast them. The rune holds not the result already fallen, but the possibility inside the cup.",
        "Its meaning is chance, cause and effect, and divination. Orlog is the unchanging law of effect. Wyrd is the same law worked at the scale of a person, and it is not locked to the same degree. As awareness grows, one can move inside the web. The right condition is set. Probability is shifted. The field here is not a decorative word. It is the place of the lot that has not yet fallen.",
        "Its movement is to shake, not to open. The cup stays by the ear. Forecast, gambling, and birth stand in the same secrecy: the result exists and is not yet visible. Divination in this rune is not inventing news. It is reading which law the lot will fall under.",
        "Perthro is not a guarantee and not an empty literature of mystery. Whoever announces the result before the cup is opened has left the rune. Luck here is not idleness. If the condition has not been set, the cast is only noise.",
      ],
      sv: [
        "Perthro är lottkastet. Namnets gamla betydelse är omtvistad. Arbetsbetydelsen är lottbägaren. Den som ville veta sin lott före ett slag lade tecknen i den bägaren och kastade dem. Runan håller inte resultatet som redan fallit, utan möjligheten inuti bägaren.",
        "Betydelsen är tur, orsak och verkan, och spådom. Orlog är verkan oföränderliga lag. Wyrd är samma lag arbetad i en persons skala, och den är inte låst i samma grad. När medvetenheten växer kan man röra sig inuti väven. Rätt villkor ställs. Sannolikheten förskjuts. Fältet är här inget dekorativt ord. Det är platsen för lotten som ännu inte fallit.",
        "Rörelsen är att skaka, inte att öppna. Bägaren stannar vid örat. Förutsägelse, spel och födsel står i samma hemlighet: resultatet finns och är ännu inte synligt. Spådom i denna runa är inte att hitta på nyheter. Den är att läsa under vilken lag lotten kommer att falla.",
        "Perthro är inte en garanti och inte en tom mysterielitteratur. Den som tillkännager resultatet innan bägaren öppnats har lämnat runan. Tur är här inte lättja. Är villkoret inte ställt är kastet bara buller.",
      ],
    },
  },
  {
    slug: "algiz",
    glyph: "ᛉ",
    name: "Algiz",
    deities: ["Heimdall", "Valkyrie"],
    text: {
      tr: [
        "Algiz geyiktir. Eski şiir aynı işareti bataklık sazına da verir: tutan eli kesen, kan çıkaran bir bitki. Koruma burada yumuşak bir örtü değildir. Yaklaşanı durduran bir biçimdir.",
        "Anlamı tanrılara bağ ve yolculuğun güvenli yönüdür. Dünya ağacında yukarı ve aşağı, kök ve dal, bu rünle şaşırılmadan geçilebilir. Köprüyü gözeten dikkat buradadır. Hamingja, kişinin kendi ağırlığı ve şansı, cesur eylemle pekişir. Bağ kurulur; hazır olmayan için aynı bağ uyarıdır.",
        "Hareketi açılmak ve sınır koymaktır. El yukarı kalkar, alan belirlenir, yabancı kuvvet içeri alınmaz. Rehberlik bir vaaz değil, yolun sapmadan okunmasıdır. Geyik kaçar gibi görünür; asıl işi alanı bilmektir.",
        "Algiz görünmezlik değildir ve korkaklık değildir. Tehlikeyi yok sayan bir kalkan da değildir. Saz, tutanı keser. Bağ, hazırlıksız kurulursa sahibi yorulur. Koruma, sınır duruyorsa korunmadır.",
      ],
      en: [
        "Algiz is the elk. The old poem also gives the same mark to the sedge of the marsh: a plant that cuts the hand that grasps it and draws blood. Protection here is not a soft cover. It is a form that stops what approaches.",
        "Its meaning is a bond to the gods and the safe direction of a journey. Up and down the world-tree, root and branch, can be passed with this rune without losing the way. The attention that watches the bridge sits here. Hamingja, a person’s own weight and luck, is strengthened by a brave act. The bond is made. For the one who is not ready, the same bond is a warning.",
        "Its movement is to open and to set a limit. The hand rises, the field is marked, a foreign force is not let in. Guidance is not a sermon. It is reading the road without leaving it. The elk looks as if it flees. Its real work is to know the ground.",
        "Algiz is not invisibility and it is not cowardice. It is not a shield that ignores the danger. The sedge cuts the one who grasps it. If the bond is made unprepared, its owner tires. Protection is protection while the limit stands.",
      ],
      sv: [
        "Algiz är älgen. Den gamla dikten ger samma tecken också åt kärrets starr: en växt som skär handen som griper den och drar blod. Skydd är här inte ett mjukt täcke. Det är en form som hejdar det som närmar sig.",
        "Betydelsen är ett band till gudarna och resans trygga riktning. Upp och ner i världsträdet, rot och gren, kan passeras med denna runa utan att vägen tappas. Uppmärksamheten som vakar över bron sitter här. Hamingja, en persons egen tyngd och tur, stärks av en modig handling. Bandet knyts. För den som inte är redo är samma band en varning.",
        "Rörelsen är att öppna sig och att sätta en gräns. Handen höjs, fältet märks ut, en främmande kraft släpps inte in. Vägledning är ingen predikan. Den är att läsa vägen utan att lämna den. Älgen ser ut att fly. Dess verkliga arbete är att känna marken.",
        "Algiz är inte osynlighet och inte feghet. Den är inte en sköld som bortser från faran. Starren skär den som griper den. Knyts bandet oförberett tröttnar dess ägare. Skydd är skydd så länge gränsen står.",
      ],
    },
  },
  {
    slug: "sowilo",
    glyph: "ᛊ",
    name: "Sowilo",
    deities: ["Baldur", "Sunna"],
    text: {
      tr: [
        "Sowilo güneştir. Şiir onu denizcinin umudu sayar: balıkların hamamı aşılırken, gemi karayı bulana kadar gökte duran ışık. Bu rün hava durumu değil, iradenin yönüdür.",
        "Anlamı canlanma, ısrar ve açığa çıkarmadır. Fiziksel ve zihinsel ateş buradadır. Özveri, iyimserlik ve kalbin amacına kilitlenme, başkasının zararlı görüşüne karşı bir korunaktır. Psişik merkezler bu ışıkla derlenir. Rehber, gösteren, yapan aynı kapıdır.",
        "Hareketi düşünceden eyleme dönüştür. “Düşünüyorum ama yapamıyorum” diyorsa Sowilo orada durur ve döndürür. Cümle “yapıyorum” olur. Zafer burada bağırarak kazanılmaz. Tek bir iradenin, kendi değerinin en yükseğine oturmasıdır.",
        "Sowilo tembellik üzerine serpilen umut değildir ve şimşek değildir. Işık, iş yapılmadan zafer ilan etmez. Başkasının gözünde parlamak da bu rün değildir. Güneş yolu gösterir; yolu yürümek kişide kalır. Yürünmezse ışık yalnızca manzaradır.",
      ],
      en: [
        "Sowilo is the sun. The poem counts it as the seafarer’s hope: the light that stays in the sky while the fishes’ bath is crossed, until the ship finds land. This rune is not the weather. It is the direction of the will.",
        "Its meaning is revival, persistence, and revealing. Physical and mental fire sit here. Devotion, optimism, and locking onto the heart’s aim are a protection against someone else’s harmful view. The psychic centers are gathered by this light. The guide, the one who shows, and the one who does are the same door.",
        "Its movement turns thought into deed. If the sentence is “I think, but I cannot do,” Sowilo stands there and turns it. The sentence becomes “I am doing.” Victory here is not won by shouting. It is a single will sitting at the height of its own value.",
        "Sowilo is not hope sprinkled over idleness and it is not lightning. The light does not announce victory before the work is done. Shining in someone else’s eye is not this rune either. The sun shows the road. Walking the road remains with the person. If it is not walked, the light is only a view.",
      ],
      sv: [
        "Sowilo är solen. Dikten räknar den som sjöfararens hopp: ljuset som stannar på himlen medan fiskarnas bad korsas, tills skeppet finner land. Denna runa är inte vädret. Den är viljans riktning.",
        "Betydelsen är upplivning, uthållighet och att avslöja. Fysisk och mental eld sitter här. Hängivenhet, optimism och att låsa sig vid hjärtats syfte är ett skydd mot någon annans skadliga syn. De psykiska centren samlas av detta ljus. Vägvisaren, den som visar och den som gör är samma dörr.",
        "Rörelsen vänder tanke till handling. Är meningen ”jag tänker, men jag kan inte göra” står Sowilo där och vänder den. Meningen blir ”jag gör”. Seger vinns här inte genom rop. Den är en enda vilja sittande på höjden av sitt eget värde.",
        "Sowilo är inte hopp strött över lättja och inte blixt. Ljuset tillkännager inte seger innan arbetet är gjort. Att lysa i någon annans öga är inte heller denna runa. Solen visar vägen. Att gå vägen stannar hos personen. Gås den inte är ljuset bara en utsikt.",
      ],
    },
  },
  {
    slug: "tiwaz",
    glyph: "ᛏ",
    name: "Tiwaz",
    deities: ["Tyr"],
    text: {
      tr: [
        "Tiwaz, Tyr’dır. Adı tanrı demektir; burada bir lakap değil, rünün kendisidir. Şiir onu gece bulutunun üstünde rotasını şaşırmayan yıldız sayar. Ok yukarı bakar. Yol, havayı yararak gider.",
        "Anlamı adalet ve dengedir. Denge, sonucu bilerek yapılan hareketten gelir. Bütünün iyiliği için bireyin verdiği şey bu kapıdadır. Fedakârlık sonradan fark edilen bir kayıp değil, adım atılmadan görülen sonuçtur. Yapılır, sonuç alınır.",
        "Hareketi hedeftir. Hukuk, düzen, pusula. Hoşgörüyle oyalanmaz; adaleti savaşın ve kesinliğin tarafından getirir. Yön işareti de budur: enerji nereye akacaksa oraya bakar. Bilek ve el bu rünün bedenidir; tutulan söz elde durur.",
        "Tiwaz intikam değildir ve karanlıkta kapılan bir zafer değildir. Bedel görünmüyorsa bu kapı açılmaz. Kendini gizleyerek haklı çıkan, rünün adını almış olmaz. Sonuç baştan kabul edilmiyorsa yapılan şey adalet değil, hamledir.",
      ],
      en: [
        "Tiwaz is Tyr. The name means god. Here it is not a title. It is the rune itself. The poem counts it as the star that does not lose its course above the night’s cloud. The arrow looks up. The road goes by cutting the air.",
        "Its meaning is justice and balance. Balance comes from a move made while the outcome is already known. What the person gives for the good of the whole sits at this door. Sacrifice is not a loss noticed afterward. It is the result seen before the step. It is done, and the result is received.",
        "Its movement is the target. Law, order, compass. It does not linger in indulgence. It brings justice from the side of battle and of certainty. It is also a direction mark: it looks where the energy is to flow. Wrist and hand are this rune’s body. The word that was given stays in the hand.",
        "Tiwaz is not revenge and not a victory grabbed in the dark. If the price is not visible, this door does not open. Whoever comes out right by hiding has not taken the rune’s name. If the outcome is not accepted from the start, what is done is not justice. It is a lunge.",
      ],
      sv: [
        "Tiwaz är Tyr. Namnet betyder gud. Här är det ingen titel. Det är runan själv. Dikten räknar den som stjärnan som inte tappar sin kurs ovanför nattens moln. Pilen ser upp. Vägen går genom att skära luften.",
        "Betydelsen är rättvisa och balans. Balans kommer av ett drag som görs när utgången redan är känd. Det personen ger för helhetens bästa sitter vid denna dörr. Offer är inte en förlust som märks efteråt. Det är resultatet sett före steget. Det görs, och resultatet tas emot.",
        "Rörelsen är målet. Lag, ordning, kompass. Den dröjer inte i överseende. Den hämtar rättvisan från stridens och visshetens sida. Den är också ett rikttecken: den ser dit energin ska flyta. Handled och hand är denna runas kropp. Ordet som gavs stannar i handen.",
        "Tiwaz är inte hämnd och inte en seger gripen i mörkret. Syns priset inte öppnas inte denna dörr. Den som kommer ut med rätten genom att gömma sig har inte tagit runans namn. Accepteras utgången inte från början är det som görs inte rättvisa. Det är ett utfall.",
      ],
    },
  },
  {
    slug: "berkano",
    glyph: "ᛒ",
    name: "Berkano",
    deities: ["Urd", "Holda", "Perchta"],
    text: {
      tr: [
        "Berkano ağaç tanrıçasıdır. Şiir huşu, meyvesiz görünüp sürgün veren, tacı yüksek ağaç sayar. Doğum bu ründedir: henüz dışarı çıkmamış olanın korunduğu yer. Mağara ile beşik aynı biçimdir.",
        "Anlamı büyüme, anne ve yenilenmedir. Dişil doğurganlık, bitki, bahçıvanlık, rahim, ev, bahar buradadır. Kadim yasa yaşamı başlatır ve kutsal ölümün mağarasını da tutar. Uyanış bir duyuru değil, içeride başlayan bir büyümedir. Ayı da bu kapıdadır: yavrusunu kollayan, kışın güç toplayan, hem çok hareketli hem çok durağan olan.",
        "Hareketi gizleyerek büyütmektir. Olmakta olan, hazır olana kadar örtülür. Doğum anı, anne karnı, ilk nefes bu rünün hafızasıdır. Sürekli yeniden doğuş, her şeyde süren büyüme. Olmanın rünüdür; olmuş olmanın değil.",
        "Berkano hasat değildir ve çoktan dünyaya çıkmış çocuğun hayatı değildir. Gösteriş için açılan, erken gösterilen şey bu kapıdan beslenmez. Dişil kuvvet burada bir süs adı değildir. Koruyan, büyüten, zamanı gelmeden dışarı bırakmayandır.",
      ],
      en: [
        "Berkano is the tree goddess. The poem counts the birch as looking without fruit and yet bearing shoots, high in its crown. Birth is in this rune: the place where what has not yet come out is protected. Cave and cradle are the same form.",
        "Its meaning is growth, the mother, and renewal. Female fertility, the plant, gardening, the womb, the house, and spring sit here. An old law starts life and also holds the cave of a sacred death. Waking is not an announcement. It is a growth that begins inside. The bear is at this door too: guarding the young, gathering power in winter, both very active and very still.",
        "Its movement is to grow by hiding. What is becoming stays covered until it is ready. The moment of birth, the womb, the first breath are this rune’s memory. Continuous rebirth, growth that goes on in everything. It is the rune of becoming, not of already having become.",
        "Berkano is not the harvest and not the life of a child already out in the world. What is opened for display, what is shown too early, is not fed by this door. Female force here is not a decorative name. It is what protects, what grows, what does not let a thing out before its time.",
      ],
      sv: [
        "Berkano är trädgudinnan. Dikten räknar björken som utan frukt att se på och ändå skjutande skott, hög i sin krona. Födseln finns i denna runa: platsen där det som ännu inte kommit ut skyddas. Grotta och vagga är samma form.",
        "Betydelsen är växt, modern och förnyelse. Kvinnlig fruktsamhet, växten, trädgårdsarbetet, livmodern, huset och våren sitter här. En gammal lag sätter igång livet och håller också den heliga dödens grotta. Uppvaknande är inget tillkännagivande. Det är en växt som börjar inuti. Björnen står också vid denna dörr: vaktande ungen, samlande kraft om vintern, både mycket aktiv och mycket stilla.",
        "Rörelsen är att växa genom att dölja. Det som blir till förblir täckt tills det är redo. Födelsestunden, livmodern, den första andningen är denna runas minne. Ständig pånyttfödelse, växt som pågår i allt. Den är runan för att bli, inte för att redan ha blivit.",
        "Berkano är inte skörden och inte livet hos ett barn som redan är ute i världen. Det som öppnas för att visas, det som visas för tidigt, föds inte av denna dörr. Kvinnlig kraft är här inget dekorativt namn. Den är det som skyddar, det som växer, det som inte släpper ut en sak före dess tid.",
      ],
    },
  },
  {
    slug: "ehwaz",
    glyph: "ᛖ",
    name: "Ehwaz",
    deities: ["Frey", "Freyja", "Loki", "Gersemi", "Hnoss"],
    text: {
      tr: [
        "Ehwaz attır. Şiir onu prensin sevinci, toynağı gururlu, varlıklının dilinde dolaşan binek sayar. Huysuz olana tesellidir, çünkü hareket iki taraflıdır: binik ile binen aynı yola girer.",
        "Anlamı ortaklık, güven ve birlikte harekettir. Ayna, öteki, ikili burada bir süs değil, işin biçimidir. Ortak amaç için çalışan çift: zihin ile beden, iç ile dış, sözü geçen iki kişi. Sadakat gün gün kurulur. Zamanla, uğruna durulan bağ olur.",
        "Hareketi aynı tempodur. Biri çekmez, biri sürüklenmez. Evlilik, kardeşlik, yasal birlik ve çalışkan dostluk bu ölçünün içindedir. At, yolculuğun aracıdır; asıl taşınan, iki iradenin birbirine uymasıdır. Güven yoksa binek vardır, ortaklık yoktur.",
        "Ehwaz yalnız yolculuk değildir ve zorla koşulan hayvan değildir. Tek kişinin ritmine boyun eğdirilen eş, bu rünü taşımaz. Bağımlılık güven değildir. İki taraf da kendi ayağı üzerinde duruyorsa Ehwaz yürür.",
      ],
      en: [
        "Ehwaz is the horse. The poem counts it as the joy of princes, proud in the hoof, a mount spoken of by the wealthy. It is a comfort to the restless, because the movement has two sides: the mount and the rider enter the same road.",
        "Its meaning is partnership, trust, and moving together. Mirror, other, and pair are not an ornament here. They are the form of the work. A pair working for a common aim: mind and body, inner and outer, two people whose word holds. Loyalty is built day by day. In time it becomes a bond one will stand for.",
        "Its movement is the same tempo. One does not drag, the other is not dragged. Marriage, kinship, a lawful union, and a hard-working friendship sit inside this measure. The horse is the means of the journey. What is actually carried is two wills fitting each other. If there is no trust, there is a mount and there is no partnership.",
        "Ehwaz is not a solitary journey and not an animal driven by force. A partner bent to one person’s rhythm does not carry this rune. Dependence is not trust. Ehwaz walks when both sides stand on their own feet.",
      ],
      sv: [
        "Ehwaz är hästen. Dikten räknar den som furstars glädje, stolt i hoven, ett riddjur som de förmögna talar om. Den är en tröst för den rastlöse, därför att rörelsen har två sidor: riddjuret och ryttaren går in på samma väg.",
        "Betydelsen är partnerskap, tillit och att röra sig tillsammans. Spegel, den andre och paret är här ingen prydnad. De är arbetets form. Ett par som arbetar för ett gemensamt syfte: sinne och kropp, inre och yttre, två personer vars ord håller. Lojalitet byggs dag för dag. Med tiden blir den ett band man står för.",
        "Rörelsen är samma tempo. Den ene släpar inte, den andre släpas inte. Äktenskap, frändskap, en laglig förening och en arbetsam vänskap sitter inuti detta mått. Hästen är färdens medel. Det som faktiskt bärs är två viljor som passar varandra. Finns ingen tillit finns ett riddjur och inget partnerskap.",
        "Ehwaz är inte en ensam färd och inte ett djur drivet med tvång. En partner böjd efter en persons rytm bär inte denna runa. Beroende är inte tillit. Ehwaz går när båda sidor står på egna fötter.",
      ],
    },
  },
  {
    slug: "mannaz",
    glyph: "ᛗ",
    name: "Mannaz",
    deities: ["Odin", "Frigg", "Heimdall", "Mannus"],
    text: {
      tr: [
        "Mannaz insandır. Şiir onu, neşesinde akrabasına sevilen, yine de her birinin öbürünü sonunda bırakacağı varlık sayar. İnsanlık bir övgü değil, bu ölçüdür: akıl vardır, ölüm de vardır.",
        "Anlamı zihin ve kendini gerçekleştirmedir. Kuzey yolu, kişinin zamanla ve işle tam bir insan olabileceğini tutar. Bağ bir sözleşmeyle sonradan kurulmaz; soydan gelir, çalışmayla açılır. Akademik emek, sınav, bireysel zihinde kök salan mesele bu rünün alanıdır. Düşünce ve hafıza iki kanattır.",
        "Hareketi kişiden topluluğa, topluluktan tekrar kişiye döner. Bir uygarlığı ilgilendiren sorun, tek bir kafanın içindeki düğümden okunabilir. Ayaklar bu rünün bedenidir: insan yere basarak düşünür. Taht bir süs değil, ölçünün oturduğu yerdir.",
        "Mannaz tanrı değildir ve sürü değildir. Kendini olduğundan büyük sayan zihin, bu kapıyı kapatır. Akıl bir silah gibi sallandığında insanlık değil, gösteriş kalır. Kişi ölümlüdür. Bunu unutan Mannaz’ı okuyamaz.",
      ],
      en: [
        "Mannaz is the human. The poem counts the person as dear to their kin in mirth, and still as the being each of whom must at last leave the other. Humankind is not a compliment. It is this measure: there is a mind, and there is death.",
        "Its meaning is mind and self-realization. The northern way holds that a person can, in time and by work, become a whole human being. The bond is not set up afterward by a contract. It comes through the line and is opened by work. Academic labor, the test, and the matter rooted in an individual mind are this rune’s field. Thought and memory are the two wings.",
        "Its movement turns from the person to the company, and from the company back to the person. A problem that concerns a civilization can be read from the knot inside a single head. The feet are this rune’s body: a human thinks while standing on the ground. The seat is not an ornament. It is where the measure sits.",
        "Mannaz is not a god and not a herd. A mind that counts itself larger than it is closes this door. When intellect is swung like a weapon, what remains is display, not humankind. A person is mortal. Whoever forgets that cannot read Mannaz.",
      ],
      sv: [
        "Mannaz är människan. Dikten räknar personen som kär för sina fränder i glädje, och ändå som den varelse där var och en till sist måste lämna den andre. Mänskligheten är ingen komplimang. Den är detta mått: det finns ett förstånd, och det finns död.",
        "Betydelsen är förstånd och självförverkligande. Den nordliga vägen håller att en person med tiden och genom arbete kan bli en hel människa. Bandet sätts inte upp efteråt genom ett avtal. Det kommer genom ätten och öppnas av arbete. Akademiskt arbete, provet och saken rotad i ett enskilt sinne är denna runas fält. Tanke och minne är de två vingarna.",
        "Rörelsen vänder från personen till sällskapet, och från sällskapet tillbaka till personen. Ett problem som rör en civilisation kan läsas ur knuten inuti ett enda huvud. Fötterna är denna runas kropp: en människa tänker stående på marken. Sätet är ingen prydnad. Det är där måttet sitter.",
        "Mannaz är inte en gud och inte en hjord. Ett sinne som räknar sig större än det är stänger denna dörr. När förståndet svingas som ett vapen blir det som blir kvar ett skyltfönster, inte mänsklighet. En person är dödlig. Den som glömmer det kan inte läsa Mannaz.",
      ],
    },
  },
  {
    slug: "laguz",
    glyph: "ᛚ",
    name: "Laguz",
    deities: ["Njord", "Nerthus", "Aegir", "Ran", "Frigg"],
    text: {
      tr: [
        "Laguz su ve denizdir. Şiir onu, gemidekine sonsuz görünen, dizgin dinlemeyen dalga sayar. İnsan hayatı suda kurulur. Eski kuzey için derin su, ölülerin kapısıdır. Bu rün bir bardak değildir.",
        "Anlamı akış, derinlik ve bilinçaltıdır. Büyü, rüya, hafıza ve yaratılışın suyu aynı yataktan gider. Wyrd’ın ipliği bu akıntının üstünde durur. Laguz yalnızca sürüklenmek değildir; kendi kaderini biçimlendirmek de bu sudadır. Yağmur temizler, sel alır, gözyaşı boşaltır, dere ışıldar. Hepsi aynı ründür.",
        "Hareketi aşağı ve içeri, sonra yeniden yüzeye doğrudur. Derinliğe inen, boş elle dönmez; ama acele eden çıkamaz. Giz, efsanenin serbest gezdiği yerdir. Bilinç burada emir kipi değildir. Dinlenen su konuşur.",
        "Laguz buz değildir ve sahip olunan bir gölet değildir. Üstünde durulacağı sanılan deniz, bineni yanıltır. Akış reddedilirse rün bataklık olur. Her su kutsaldır diye ölçüsüz dalmak da bu kapı değildir. Derinlik, çıkışı bilenindir.",
      ],
      en: [
        "Laguz is water and the sea. The poem counts it as the wave that seems endless to the one in the ship and that does not heed the bridle. Human life is founded in water. For the old north the deep water is a gate of the dead. This rune is not a cup.",
        "Its meaning is flow, depth, and the unconscious. Magic, dream, memory, and the water of creation go in the same bed. The thread of wyrd stands over this current. Laguz is not only being carried. Shaping one’s own wyrd is in this water too. Rain cleans, the flood takes, a tear empties, the stream glitters. All of them are the same rune.",
        "Its movement is downward and inward, then back toward the surface. The one who goes into the depth does not return empty-handed. The one who hurries cannot get out. The mystery is the place where the old tale moves freely. Consciousness here is not a command. Water that is listened to speaks.",
        "Laguz is not ice and not a pond one owns. The sea one thinks can be stood upon deceives the one who boards it. If the flow is refused, the rune becomes a marsh. To dive without measure because every water is holy is not this door either. Depth belongs to the one who knows the way out.",
      ],
      sv: [
        "Laguz är vatten och havet. Dikten räknar det som vågen som ter sig oändlig för den i skeppet och som inte lyder tygeln. Människoliv grundas i vatten. För det gamla norr är djupvattnet en port för de döda. Denna runa är inte en bägare.",
        "Betydelsen är flöde, djup och det omedvetna. Magi, dröm, minne och skapelsens vatten går i samma bädd. Wyrds tråd står över denna ström. Laguz är inte bara att bli buren. Att forma sin egen wyrd finns också i detta vatten. Regn renar, floden tar, en tår tömmer, bäcken glittrar. Alla är samma runa.",
        "Rörelsen är nedåt och inåt, sedan tillbaka mot ytan. Den som går ner i djupet återvänder inte tomhänt. Den som hastar kan inte komma ut. Hemligheten är platsen där den gamla berättelsen rör sig fritt. Medvetande är här ingen befallning. Vatten som lyssnas på talar.",
        "Laguz är inte is och inte en damm man äger. Havet man tror sig kunna stå på bedrar den som går ombord. Avvisas flödet blir runan ett kärr. Att dyka utan mått därför att allt vatten är heligt är inte heller denna dörr. Djupet tillhör den som känner vägen ut.",
      ],
    },
  },
  {
    slug: "ingwaz",
    glyph: "ᛜ",
    name: "Ingwaz",
    deities: ["Ing", "Frey", "Freyja", "Nerthus"],
    text: {
      tr: [
        "Ingwaz tohumdur. Şiir Ing’i doğu Danimarkalıları arasında görünüp sonra dalganın üzerinden doğuya giden, ardında arabası duran bir ad olarak bırakır. Rün o gidişin içindeki tanedir: harcanır, toprağa düşer, baharda yeniden gelir.",
        "Anlamı potansiyel, gebelik ve yeniden doğan hasattır. Polen gezginidir; yerinde duruyormuş gibi görünür, asıl işi taşınmaktır. Doğurganlık, toprak işi ve servetin üretimi bu kapıdadır. Enerji kabı henüz açılmamıştır. İlahi adalet burada bir mahkeme değil, tohumun kendi zamanıdır.",
        "Hareketi içeride toplanmak, sonra birden bırakılmaktır. Gebelik görünmez. Göründüğünde iş bitmek üzeredir. Yutulan tane ile kutsal tane aynı ründür: biri bedende, biri tarlada. İkisi de karanlıkta durur.",
        "Ingwaz eldeki para değildir ve ışığa çıkmış bitki değildir. Aceleyle yarılan tohum bu kapıyı boşa çıkarır. Potansiyel bir vaat gibi anlatılıp bekletilirse de bozulur. Tohumun işi saklanmak değil, zamanı gelince tam açılmaktır.",
      ],
      en: [
        "Ingwaz is the seed. The poem leaves Ing as a name seen first among the East-Danes, then going east over the wave with his wagon behind him. The rune is the grain inside that going: it is spent, it falls to the earth, it comes again in spring.",
        "Its meaning is potential, gestation, and the harvest born again. It is the traveler of pollen. It looks as if it stays in place. Its real work is to be carried. Fertility, the work of the soil, and the production of wealth are at this door. The vessel of energy is not yet open. Divine justice here is not a court. It is the seed’s own time.",
        "Its movement is to gather inside, then to be released all at once. Gestation is invisible. When it becomes visible, the work is nearly finished. The swallowed grain and the sacred grain are the same rune: one in the body, one in the field. Both stand in the dark.",
        "Ingwaz is not the coin in the hand and not the plant already out in the light. A seed split in haste wastes this door. Potential told as a promise and then kept waiting also spoils. The seed’s work is not to stay hidden. It is to open fully when its time comes.",
      ],
      sv: [
        "Ingwaz är fröet. Dikten lämnar Ing som ett namn sett först bland östdanerna, sedan gående österut över vågen med sin vagn bakom sig. Runan är kornet inuti den färden: det förbrukas, det faller till jorden, det kommer igen om våren.",
        "Betydelsen är potential, havandeskap och skörden som föds på nytt. Den är pollenets resenär. Den ser ut att stanna på sin plats. Dess verkliga arbete är att bäras. Fruktsamhet, jordens arbete och rikedomens frambringande står vid denna dörr. Energins kärl är ännu inte öppet. Gudomlig rättvisa är här ingen domstol. Den är fröets egen tid.",
        "Rörelsen är att samlas inuti, sedan att släppas på en gång. Havandeskapet är osynligt. När det blir synligt är arbetet nästan färdigt. Det svalda kornet och det heliga kornet är samma runa: ett i kroppen, ett på åkern. Båda står i mörkret.",
        "Ingwaz är inte myntet i handen och inte växten som redan är ute i ljuset. Ett frö kluvet i hast slösar denna dörr. Potential berättad som ett löfte och sedan hållen väntande fördärvas också. Fröets arbete är inte att förbli dolt. Det är att öppna sig helt när dess tid kommer.",
      ],
    },
  },
  {
    slug: "dagaz",
    glyph: "ᛞ",
    name: "Dagaz",
    deities: ["Dagr", "Nott", "Heimdall", "Ymir"],
    text: {
      tr: [
        "Dagaz gündür. Şiir onu, varsıla da yoksula da sevinç ve umut olan, ölçenin ışığı sayar. Gece ile gündüz aynı göğü sürer. Gün, sükûnetin, huzurun ve neşenin getiricisidir. Bu bir hava raporu değil, dönüşün adıdır.",
        "Anlamı cesur değişim ve aydınlanmadır. Jera yılın yumuşak turudur; Dagaz günün sert eşiğidir. İkisi de zaman rünüdür, aynı işi görmez. Şafak pazarlık etmez. Karanlık biter, biçim bir anda okunur olur. Uyanış burada yavaş bir eğitim değil, ışığın içeri düşmesidir.",
        "Hareketi gece-gündüz eksenindedir. Bir yüz kapanır, öbür yüz açılır. Denge, ikisinin birbirini silmesi değil, sırayla durmasıdır. Parlayan gün, köprüyü gözeten dikkatle aynı soydadır: ileriyi görmek, bugünü kurtarmaktır.",
        "Dagaz yılın hasadı değildir ve kriz değildir. Bir günde olgunlaşmayan şeyi zorla gündüz ilan etmek bu kapıyı bozar. Işık geldiyse iş görülür. Gelmediyse rün süs olarak taşınmaz. Gün, karanlığı inkâr ederek değil, onu bitirerek başlar.",
      ],
      en: [
        "Dagaz is day. The poem counts it as joy and hope to the wealthy and the poor alike, the light of the one who measures. Night and day drive the same sky. Day is the bringer of calm, peace, and gladness. This is not a weather report. It is the name of a turning.",
        "Its meaning is a bold change and illumination. Jera is the year’s soft turn. Dagaz is the day’s hard threshold. Both are runes of time. They do not do the same work. Dawn does not bargain. The dark ends, and the form becomes readable all at once. Waking here is not a slow schooling. It is the light falling in.",
        "Its movement is on the axis of night and day. One face closes, the other opens. Balance is not the two erasing each other. It is their standing in turn. The bright day is of the same line as the attention that watches the bridge: to see ahead is to save the day.",
        "Dagaz is not the year’s harvest and it is not a crisis. To declare as day, by force, a thing that does not ripen in a day spoils this door. If the light has come, the work is seen. If it has not, the rune is not carried as an ornament. Day begins not by denying the dark, but by ending it.",
      ],
      sv: [
        "Dagaz är dagen. Dikten räknar den som glädje och hopp för den förmögne och den fattige lika, mätarens ljus. Natt och dag kör samma himmel. Dagen är bringaren av stillhet, frid och glädje. Detta är ingen väderrapport. Det är namnet på en vändning.",
        "Betydelsen är en djärv förändring och upplysning. Jera är årets mjuka varv. Dagaz är dagens hårda tröskel. Båda är tidens runor. De gör inte samma arbete. Gryningen förhandlar inte. Mörkret tar slut, och formen blir läsbar på en gång. Uppvaknande är här ingen långsam skola. Det är ljuset som faller in.",
        "Rörelsen ligger på nattens och dagens axel. Ett ansikte sluter sig, det andra öppnas. Balans är inte att de två utplånar varandra. Den är att de står i tur. Den ljusa dagen är av samma linje som uppmärksamheten som vakar över bron: att se framåt är att rädda dagen.",
        "Dagaz är inte årets skörd och inte en kris. Att med tvång förklara som dag en sak som inte mognar på en dag fördärvar denna dörr. Har ljuset kommit ses arbetet. Har det inte kommit bärs runan inte som en prydnad. Dagen börjar inte genom att förneka mörkret, utan genom att avsluta det.",
      ],
    },
  },
  {
    slug: "othala",
    glyph: "ᛟ",
    name: "Othala",
    deities: ["Odin"],
    text: {
      tr: [
        "Othala yurttur. Şiir onu, kişi kendi evinde âdetin hakkını sürüyorsa herkese kıymetli sayar. Bu, kazanılan ücret değil, ait olunan yerdir. Çiftlik, dil, kan, kültür ve mezardaki soru aynı mirastadır.",
        "Anlamı ata, miras ve ait olunan topraktır. Her kişinin ayrı doğası vardır; yine de iz sürüldüğünde ortak bir başlangıca varılır. Mezar höyüğü burada bir korku dekoru değil, kendinden öncekine danışılan yerdir. İki kişi ortak amaç için söz verirse aralarında koruyan bir bağ kurulur. Aile, iş, görev bu sözden türer.",
        "Hareketi dışarı almak değil, içeri oturmaktır. Fehu malı dolaştırır. Othala malı yerinde tutar ve sahibini o yere bağlar. DNA’daki iz, evin eşiği, adın içindeki eski hece bu rünün somutudur. Barışmak, mirası övmek değildir. Neyin geldiğini görmektir.",
        "Othala satın alınmış bir mülk değildir ve her ata bilge değildir. İstenmeyen miras da bu kapıdadır: hastalık, küslük, eski bir yanlış. Onu yok saymak rünü kapatır. Onu kader diye sırtına yapıştırmak da kapatır. Yurt, bilinen ve taşınabilen şeydir. Kilitli sandık değildir.",
      ],
      en: [
        "Othala is the homestead. The poem counts it as dear to everyone if a person keeps what is right by custom in their own house. This is not a wage that was earned. It is the place one belongs to. The farm, the language, the blood, the culture, and the question at the grave are the same inheritance.",
        "Its meaning is ancestor, inheritance, and the ground one belongs to. Each person has a separate nature. Still, if the track is followed, it arrives at a common beginning. The grave-mound here is not a decoration of fear. It is the place where the one who came before is asked. If two people give their word for a common aim, a protecting bond is set between them. Family, work, and duty come from that word.",
        "Its movement is not to take outward. It is to sit inward. Fehu circulates the goods. Othala keeps the goods in place and binds their owner to that place. The trace in the blood, the threshold of the house, the old syllable inside the name are this rune’s concrete things. To make peace is not to praise the inheritance. It is to see what came.",
        "Othala is not a property that was bought, and not every ancestor was wise. Unwanted inheritance is at this door too: an illness, a breach, an old wrong. To ignore it closes the rune. To glue it to one’s back as fate also closes it. The homestead is what is known and what can be carried. It is not a locked chest.",
      ],
      sv: [
        "Othala är hemmanet. Dikten räknar det som kärt för var och en om en person håller det som är rätt enligt sed i sitt eget hus. Detta är inte en lön som förtjänats. Det är platsen man hör till. Gården, språket, blodet, kulturen och frågan vid graven är samma arv.",
        "Betydelsen är förfader, arv och marken man hör till. Varje person har en egen natur. Ändå, följs spåret, kommer det till en gemensam början. Gravhögen är här ingen skräckprydnad. Den är platsen där den som kom före tillfrågas. Ger två personer sitt ord för ett gemensamt syfte sätts ett skyddande band mellan dem. Familj, arbete och plikt kommer ur det ordet.",
        "Rörelsen är inte att ta utåt. Den är att sitta inåt. Fehu omsätter godset. Othala håller godset på sin plats och binder dess ägare till den platsen. Spåret i blodet, husets tröskel, den gamla stavelsen inuti namnet är denna runas konkreta ting. Att sluta fred är inte att prisa arvet. Det är att se vad som kom.",
        "Othala är inte en egendom som köpts, och inte varje förfader var vis. Oönskat arv står också vid denna dörr: en sjukdom, en spricka, en gammal orätt. Att bortse från det stänger runan. Att klistra det på ryggen som öde stänger den också. Hemmanet är det som är känt och det som kan bäras. Det är inte en låst kista.",
      ],
    },
  },
];

export function runeBySlug(slug: string): Rune | undefined {
  return runes.find((rune) => rune.slug === slug);
}
