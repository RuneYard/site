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
        "Fehu, modern insanın sandığı gibi yalnızca para değildir. O, hareket halindeki enerjidir. Eski dilde adı sığır sürüsüdür. O çağda zenginlik sandıktaki altın değil, beslenen, üreyen ve ölen hayvanın sayısıydı. Fehu canlı ve döngüsel bir servettir. Durursa bozulur.",
        "Bu rün bir şeyi başlatmak için gereken yakıttır. Ham, henüz işlenmemiş, yaratıcı güçtür. Yeni başlangıç, kazanç, cömertlik ve doğurganlık aynı akıştan çıkar. Kişi hem kazanır hem kazandığını paylaşır; paylaştıkça gücü artar. Cömertlik kanalı doğruysa sonuç somuttur. Cimrilik ya da korku ateşi ya yakar ya söndürür.",
        "Beden tarafında ısı ve dolaşımdır. Donuk, üşüyen, hareketsiz olanı ısıtarak çözer. Eklemdeki tortu durgunluğun eseridir. Fehu’nun düşmanı durgunluktur. Akan kan, dağılan ısı, el değiştiren iş bu kapının somutudur. Libido da buradadır: yaşamdan keyif alamama, akışın kesilmesidir.",
        "Fehu istif değildir ve kilitli mülk değildir. Açgözlülük, “daha fazlası” arzusu ve kaybetme korkusu kişiyi köleleştirir. Öteki yüzü kıtlık bilincidir: enerji tükenir, işe başlayacak mecal kalmaz. Gelen çabuk gelir. Tutulup dondurulursa giden de çabuk gider. Bu mal dönmek için vardır.",
      ],
      en: [
        "Fehu is not only money, as the modern mind assumes. It is energy in motion. In the old tongue its name is the cattle herd. Wealth in that age was not gold in a chest. It was the count of animals that feed, breed, and die. Fehu is a living, cyclical wealth. If it stands still, it spoils.",
        "This rune is the fuel required to start a thing. It is raw, not yet worked, a creative power. A new beginning, gain, generosity, and fertility leave by the same current. A person both earns and shares what was earned. Power grows by the sharing. If the channel of generosity is right, the result is concrete. Stinginess or fear either burns the fire or puts it out.",
        "In the body it is heat and circulation. It solves what is dull, cold, and motionless by heating it. The residue in a joint is the work of stillness. Fehu’s enemy is stagnation. Blood that flows, heat that spreads, work that changes hands are the concrete things of this door. Libido sits here too. The loss of pleasure in living is a cut in the current.",
        "Fehu is not hoarding and it is not locked property. Greed, the hunger for “more,” and the fear of loss turn a person into a slave. The other face is scarcity-mind: the energy runs out, and there is no strength left to begin a work. What comes, comes quickly. If it is held and frozen, what leaves also leaves quickly. These goods exist in order to turn.",
      ],
      sv: [
        "Fehu är inte bara pengar, som det moderna sinnet antar. Den är energi i rörelse. På det gamla språket är namnet boskapshjorden. Rikedom i den tiden var inte guld i en kista. Det var antalet djur som äter, förökar sig och dör. Fehu är en levande, cyklisk rikedom. Står den stilla fördärvas den.",
        "Denna runa är bränslet som krävs för att sätta igång en sak. Den är rå, ännu inte bearbetad, en skapande kraft. En ny början, vinst, generositet och fruktsamhet går ut genom samma ström. En person både förtjänar och delar det som förtjänats. Kraften växer av delandet. Är generositetens kanal rätt är resultatet konkret. Snålhet eller rädsla antingen bränner elden eller släcker den.",
        "I kroppen är den värme och kretslopp. Den löser det slöa, kalla och orörliga genom att värma det. Resten i en led är stillhetens verk. Fehus fiende är stagnation. Blod som flyter, värme som sprids, arbete som byter hand är denna dörrs konkreta ting. Libido sitter också här. Förlusten av nöje i livet är ett brott i strömmen.",
        "Fehu är inte hamstring och inte låst egendom. Girighet, hungern efter ”mer” och rädslan att förlora gör en person till slav. Det andra ansiktet är bristmedvetande: energin tar slut, och ingen kraft finns kvar att börja ett arbete. Det som kommer, kommer snabbt. Hålls det och fryses, går också det som lämnar snabbt. Detta gods finns för att omsättas.",
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
        "Fehu ateşi yaktı. Ateşin yanması için bir madde gerekir. Uruz o maddedir. Eski dilde adı yaban öküzüdür. Evcil sürü değildir. Ormanda duran, devasa, durdurulması güç bir doğa kuvvetidir. Fehu evcil sürüyse, Uruz vahşi sürüdür.",
        "Uruz şekil veren güçtür. Düşüncenin maddeye inmesi, hastalığın sağlığa dönmesi, zayıflığın kuvvete evrilmesi bu kapının işidir. Yaşamın ham maddesidir. Yalnızca kas değil, psikolojik dayanıklılık ve inattır. Rünlerin en sağlam şifacısı buradadır: bedene kendi kendini onarma emri verir.",
        "Hareketi konforun dışına çıkmaktır. Yeni bir iş, bir taşınma, zor bir konuşma; arkadaki itici güç Uruz’dur. Dağınık bir fikir varsa ve sonuç yoksa eksik olan kalıptır. Risk burada kahramanlık lafı değil, yerini terk etmeyen bedendir.",
        "Uruz para değildir ve kâğıttan kaplan değildir. Kronik yorgunluk, sürekli hastalanma, “hayır” diyememek onun yoksun yüzüdür. Kişi başkası tarafından kolayca ezilir. Güç burada onarmak içindir. Dağıtılırsa yalnızca şekilsiz bir yük kalır.",
      ],
      en: [
        "Fehu lit the fire. Fire needs a matter in order to burn. Uruz is that matter. In the old tongue its name is the aurochs. It is not the tame herd. It is a vast natural force standing in the forest, hard to stop. If Fehu is the domestic herd, Uruz is the wild herd.",
        "Uruz is the power that gives shape. Thought coming down into matter, illness turning back to health, weakness turning into force: that is this door’s work. It is the raw material of life. Not muscle alone. Psychological endurance, and stubbornness. The firmest healer among the runes sits here. It gives the body the order to repair itself.",
        "Its movement is to leave comfort. A new work, a move, a hard conversation: the force behind them is Uruz. If there is a scattered idea and no result, what is missing is the mold. Risk here is not a heroic phrase. It is the body that does not abandon its ground.",
        "Uruz is not money and it is not a paper tiger. Chronic fatigue, constant illness, the inability to say “no” are its face of lack. The person is easily crushed by someone else. The strength here exists in order to repair. Scattered, only a shapeless load remains.",
      ],
      sv: [
        "Fehu tände elden. Elden behöver en materia för att brinna. Uruz är den materian. På det gamla språket är namnet uroxen. Den är inte den tama hjorden. Den är en väldig naturkraft som står i skogen, svår att hejda. Är Fehu den tama hjorden är Uruz den vilda hjorden.",
        "Uruz är kraften som ger form. Tanken som stiger ner i materia, sjukdomen som vänder tillbaka till hälsa, svagheten som blir kraft: det är denna dörrs arbete. Den är livets råmaterial. Inte bara muskel. Psykologisk uthållighet, och envishet. Den fastaste helaren bland runorna sitter här. Den ger kroppen ordern att reparera sig själv.",
        "Rörelsen är att lämna komforten. Ett nytt arbete, en flytt, ett svårt samtal: kraften bakom dem är Uruz. Finns en spridd idé och inget resultat är det som saknas formen. Risk är här ingen hjältefras. Den är kroppen som inte överger sin mark.",
        "Uruz är inte pengar och inte en papperstiger. Kronisk trötthet, ständig sjukdom, oförmågan att säga ”nej” är dess ansikte av brist. Personen krossas lätt av någon annan. Styrkan här finns för att reparera. Spridd blir bara en formlös last kvar.",
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
        "Thurisaz dikendir ve devdir. Gülün sapındaki dikeni düşün. Güzelliği korumak için oradadır ve dokunanın parmağını kanatır. Bu rün pasif bir kalkan değildir. Kalkanın ortasındaki sivri demirdir. Saldırana zarar vererek korur.",
        "Aynı zamanda bir kırılma noktasıdır. Yolu tıkayan duvar, balyozla kırılır. Bu kuvvet tanrılardan önceki ham güçtür: fırtına, yıldırım, deprem. Kötü değildir. İnsan merhameti de taşımaz. Hayatta kalmak için gereken vahşi içgüdüdür.",
        "Dengeli hâli çekicin işidir. “Hayır” diyebilmek, sınırı korumak, tıkanan süreci tek darbeyle açmak. Thurisaz beklemez. Vurur ve geçer. Kararsız eşikte duranı taşımaz. Karar, çekicin ele alınmasıdır.",
        "Thurisaz nezaket duası değildir. Aşırısı zorbadır: öfke patlaması, iğne, kalp kırma, kendini haklı sayan saldırı. Yoksun yüzü kapı paspasıdır. Her şeye evet, sürekli ihlal edilen sınır, içeride biriken zehir. Bastırılan öfke kişiyi içten yer.",
      ],
      en: [
        "Thurisaz is the thorn and the giant. Think of the thorn on the stem of the rose. It is there to protect the beauty, and it bloodies the finger that touches it. This rune is not a passive shield. It is the iron spike in the middle of the shield. It protects by harming what attacks.",
        "It is also a breaking point. The wall that blocks the road is broken with a maul. This force is the raw power from before the gods: storm, lightning, earthquake. It is not evil. It also carries no human mercy. It is the wild instinct required in order to stay alive.",
        "Its balanced state is the work of the hammer. To be able to say “no,” to keep the limit, to open a stuck process with a single blow. Thurisaz does not wait. It strikes and passes. It does not carry the one who stands undecided on the threshold. The decision is taking the hammer in hand.",
        "Thurisaz is not a prayer of courtesy. Its excess is the bully: a burst of rage, the needle, the broken heart, an attack that counts itself right. Its face of lack is the doormat. Yes to everything, a limit constantly breached, a poison gathering inside. Suppressed anger eats the person from within.",
      ],
      sv: [
        "Thurisaz är törnet och jätten. Tänk på törnet på rosens stjälk. Det finns där för att skydda skönheten, och det blöder fingret som rör det. Denna runa är inte en passiv sköld. Den är järnudden i mitten av skölden. Den skyddar genom att skada det som angriper.",
        "Den är också en brytpunkt. Muren som blockerar vägen bryts med en slägga. Denna kraft är den råa makten från före gudarna: storm, blixt, jordbävning. Den är inte ond. Den bär heller ingen mänsklig barmhärtighet. Den är den vilda instinkt som krävs för att förbli vid liv.",
        "Dess balanserade tillstånd är hammarens arbete. Att kunna säga ”nej”, att hålla gränsen, att öppna en fastnad process med ett enda slag. Thurisaz väntar inte. Den slår och går förbi. Den bär inte den som står obeslutsam på tröskeln. Beslutet är att ta hammaren i handen.",
        "Thurisaz är inte en hövlighetens bön. Dess övermått är tyrannen: ett vredesutbrott, nålen, det brutna hjärtat, ett angrepp som räknar sig självt som rätt. Dess ansikte av brist är dörrmattan. Ja till allt, en gräns som ständigt bryts, ett gift som samlas inuti. Undertryckt vrede äter personen inifrån.",
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
        "Ansuz tanrı demektir ve ağız demektir. İletişimdir, ama “nasılsın” değildir. Yaratıcı sözdür. Bir şeyi adlandırdığın an ona hükmedersin. Fehu enerjiyi verdi, Uruz biçimi verdi. Ansuz o biçime bilinç yükler.",
        "İşaretleri, tesadüf sanılan mesajları okuma yeteneği buradadır. Nefes durursa söz biter. Söz biterse insan yeniden kütüğe döner. Hava görünmezdir; fırtınaya dönünce ağacı kökünden söker. Sözün kemiği yoktur, kemiği kırabilir.",
        "Dengeli hâli bülbül gibi şakımak değil, sözün tesir etmesidir. Dinlenir. İlham akar; kelime aranmaz, kelime gelir. Hakikat konuşulur ve hakikat duyulur. Sınavda sıfır bilgiyi mucizeye çevirmez. Sende olanı açığa çıkarır ve düşünceyi netleştirir.",
        "Bayat sözün büyüsü yoktur. Hep aynı zaferi, hep aynı acıyı anlatan dil yalnızca kafa şişirir. Söz taze tutulur. Aşırısı demagogdur: yalan, iftira, laf salatası. Yoksun yüzü dilsizdir. Kendini söyleyememek, sesin titremesi, cevabı bilip çıkaramamak.",
      ],
      en: [
        "Ansuz means god and it means mouth. It is communication, but it is not “how are you.” It is the creative word. The moment you name a thing, you rule it. Fehu gave the energy. Uruz gave the form. Ansuz loads consciousness into that form.",
        "The ability to read signs, and messages mistaken for chance, sits here. If the breath stops, the word ends. If the word ends, the human becomes a log again. Air is invisible. When it turns to storm it tears the tree from the root. The word has no bone, and it can break bone.",
        "Its balanced state is not singing like a nightingale. It is the word taking effect. It is heard. Inspiration flows. The word is not searched for. The word arrives. Truth is spoken and truth is heard. In an examination it does not turn zero knowledge into a miracle. It brings out what is already in you and clarifies the thought.",
        "A stale word has no power. A tongue that tells the same victory and the same pain only stuffs the head. The word is kept fresh. Its excess is the demagogue: lie, slander, a salad of talk. Its face of lack is the mute. Not being able to say oneself, the voice trembling, knowing the answer and not being able to bring it out.",
      ],
      sv: [
        "Ansuz betyder gud och det betyder mun. Det är kommunikation, men det är inte ”hur mår du.” Det är det skapande ordet. I samma stund du namnger en sak råder du över den. Fehu gav energin. Uruz gav formen. Ansuz laddar medvetande i den formen.",
        "Förmågan att läsa tecken, och budskap som misstas för slump, sitter här. Stannar andedräkten tar ordet slut. Tar ordet slut blir människan en stock igen. Luft är osynlig. När den blir storm rycker den trädet från roten. Ordet har inget ben, och det kan bryta ben.",
        "Dess balanserade tillstånd är inte att sjunga som en näktergal. Det är ordet som får verkan. Det hörs. Inspirationen flödar. Ordet söks inte. Ordet anländer. Sanning sägs och sanning hörs. I ett prov gör det inte noll kunskap till ett mirakel. Det för fram det som redan finns i dig och klargör tanken.",
        "Ett unket ord har ingen kraft. En tunga som berättar samma seger och samma smärta bara fyller huvudet. Ordet hålls friskt. Dess övermått är demagogen: lögn, förtal, en sallad av prat. Dess ansikte av brist är den stumme. Att inte kunna säga sig själv, rösten som darrar, att kunna svaret och inte få fram det.",
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
        "Raido araba demektir ve sürüş demektir. Taksiye binip gitmek değildir. Doğru eylemdir. Yol, yalnızca gidilen yer değildir; yolun kendisi bir varlıktır. Ritim kaçarsa araba devrilir. Adalet de bu kapıdadır, çünkü adalet toplumun doğru ritmidir.",
        "At ile sürüş burada ayrılır. At işbirliğidir. Rotayı çizen süvaridir. Panikle sağa sola koşmak kaosdur. Raido hizalanmış eylemdir: vicdanla, yasanın düzeniyle, aynı ölçüde yürümek. Yol seni düzene götürüyorsa Raido’dur.",
        "Dengeli hâli direksiyonda olmaktır. İşler tıkır tıkır gider. Doğru zamanda doğru yer. Yolculuk amaçlıdır. Hukuki süreçte hak yerini bulur. Ön bacak kısadır; rün eşit kollu bir “R” gibi çizilmez. Ölçü, çizgisinde de durur.",
        "Raido kaçış değildir ve durmak değildir. Aşırısı kontrol manyaklığıdır: her şeyi yönetmek, katı kural, “yolun sahibi benim” kibri, hız körlüğü. Yoksun yüzü yönünü kaybetmiş yapraktır. Hedefsizlik, erteleme, başlanan işin bitmemesi, bozulan biyoritim. Direksiyonu tutacak olan sensin.",
      ],
      en: [
        "Raido means wagon and it means the ride. It is not getting into a taxi and leaving. It is right action. The road is not only the place one goes. The road itself is a being. If the rhythm is lost, the wagon overturns. Justice sits at this door too, because justice is the right rhythm of a society.",
        "The horse and the ride divide here. The horse is cooperation. The rider draws the route. Running left and right in panic is chaos. Raido is aligned action: to walk at the same measure as conscience and as the order of law. If the road takes you to order, it is Raido.",
        "Its balanced state is to be at the wheel. The work goes steadily. The right time, the right place. The journey has an aim. In a legal process the right finds its place. The front leg is short. The rune is not drawn like an “R” with equal arms. The measure stands in its line too.",
        "Raido is not flight and it is not a stop. Its excess is the mania of control: managing everything, a rigid rule, the pride of “the road is mine,” the blindness of speed. Its face of lack is the leaf that has lost its direction. Aimlessness, delay, a work begun and not finished, a broken biorhythm. The one who will hold the wheel is you.",
      ],
      sv: [
        "Raido betyder vagn och det betyder ritten. Det är inte att stiga in i en taxi och åka. Det är rätt handling. Vägen är inte bara platsen man far till. Vägen själv är en varelse. Tappas rytmen välter vagnen. Rättvisa sitter också vid denna dörr, därför att rättvisa är ett samhälles rätta rytm.",
        "Hästen och ritten delas här. Hästen är samarbete. Ryttaren drar rutten. Att springa höger och vänster i panik är kaos. Raido är inriktad handling: att gå i samma mått som samvetet och som lagens ordning. För vägen dig till ordning är det Raido.",
        "Dess balanserade tillstånd är att sitta vid ratten. Arbetet går stadigt. Rätt tid, rätt plats. Färden har ett syfte. I en rättsprocess finner rätten sin plats. Frambenet är kort. Runan ritas inte som ett ”R” med lika armar. Måttet står också i dess linje.",
        "Raido är inte flykt och inte ett stopp. Dess övermått är kontrollmani: att styra allt, en stel regel, högmodet ”vägen är min”, hastighetens blindhet. Dess ansikte av brist är bladet som tappat sin riktning. Mållöshet, uppskjutande, ett arbete börjat och inte avslutat, en bruten biorytm. Den som ska hålla ratten är du.",
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
        "Kenaz eski dilde meşaledir. Anglo-Sakson şiirinde yara ve çıbandır. Bu çelişki değil, sırrıdır. Fehu gibi orman yakan vahşi ateş değildir. Ocak ateşidir. Demircinin metali erittiği, kuyumcunun altını işlediği, bilgenin karanlık odayı aydınlattığı teknik ateş.",
        "Ateşle oynamak risklidir. Metali şekillendiren ateş, dikkatsiz ustanın elini yakar. Aydınlanma acısız olmaz. Ham demir ateşe girmeden çelik olmaz. Yanmayı göze almayan ışık saçamaz. Bilgi, kitaptan alınan soğuk veri değildir. Ateşe dokunmayı gerektirir.",
        "Dengeli hâli ampulün yandığı andır. Yetenek sanata döner. Öğrenme hızlanır. Karanlıkta yol bulunur. Soğuk bir durum ısınır. Gizli olan görünür. “İçine doğar” değil: saklanan kendini ele verir.",
        "Kenaz yangın değildir ve körlük değildir. Aşırısı tükenmişliktir: saplantı, öfke, yüksek ateş, iltihap. Yoksun yüzü “içimdeki ışık söndü”dür. Çözüm görünmez, fikir çıkmaz, ilgisizlik çöker. Kontrollü ateş bırakılırsa ya yakar ya kararır.",
      ],
      en: [
        "Kenaz is the torch in the old tongue. In the Anglo-Saxon poem it is the wound and the ulcer. This is not a contradiction. It is the secret. It is not a wild fire that burns the forest, as Fehu is. It is the hearth fire. The technical fire by which the smith melts metal, the jeweler works gold, and the wise one lights the dark room.",
        "To play with fire is a risk. The fire that shapes the metal burns the careless craftsperson’s hand. Illumination is not without pain. Raw iron does not become steel without entering the fire. Whoever will not risk the burn cannot cast light. Knowledge is not cold data taken from a book. It requires touching the fire.",
        "Its balanced state is the moment the bulb lights. Skill turns into art. Learning quickens. The way is found in the dark. A cold situation warms. What was hidden becomes visible. Not “it occurs to me.” What was hidden gives itself away.",
        "Kenaz is not a wildfire and it is not blindness. Its excess is burnout: obsession, rage, high fever, inflammation. Its face of lack is “the light inside me has gone out.” The solution is not seen, no idea comes, indifference settles. If the controlled fire is abandoned, it either burns or goes dark.",
      ],
      sv: [
        "Kenaz är facklan på det gamla språket. I den anglosaxiska dikten är den såret och bölden. Detta är ingen motsägelse. Det är hemligheten. Den är inte en vild eld som bränner skogen, som Fehu är. Den är härdens eld. Den tekniska eld med vilken smeden smälter metall, guldsmeden arbetar guld och den vise lyser upp det mörka rummet.",
        "Att leka med eld är en risk. Elden som formar metallen bränner den oförsiktiga hantverkarens hand. Upplysning är inte utan smärta. Rått järn blir inte stål utan att gå in i elden. Den som inte vågar brännas kan inte kasta ljus. Kunskap är inte kall data tagen ur en bok. Den kräver att elden berörs.",
        "Dess balanserade tillstånd är stunden då lampan tänds. Skicklighet blir konst. Lärandet skyndar. Vägen finns i mörkret. En kall situation värms. Det dolda blir synligt. Inte ”det faller mig in.” Det som var dolt avslöjar sig självt.",
        "Kenaz är inte en vildbrand och inte blindhet. Dess övermått är utbrändhet: besatthet, vrede, hög feber, inflammation. Dess ansikte av brist är ”ljuset i mig har slocknat.” Lösningen syns inte, ingen idé kommer, likgiltighet lägger sig. Överges den kontrollerade elden antingen bränner den eller mörknar den.",
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
        "Gebo hediye demektir. Modern dünyadaki karşılıksız hediye değildir. Viking zihninde karşılıksız hediye yoktur. Alan borçlanır, veren yönetir. İki çizgi bir noktada kesişir. İki insan birleşirse ortaklık, insan ile tanrı birleşirse kurban, eril ile dişil birleşirse aşk olur.",
        "Tersi yoktur. Çevirsen de yine aynı işarettir. Alışveriş yasasından kaçılmaz. Ne ekersen onu biçersin. Bu yasa bir köşede durmaz. Söz, yemin ve bilgi de aynı takasa girer. Almak istiyorsan vermen gerekir. En ağır hediye, egonun ortaya konmasıdır.",
        "Dengeli hâli sözünün eri olmaktır. Ağızdan çıkan senettir. Adil ortaklık, cömertlik, tutulan yemin. Bir şey kazanmak başka bir şeyi bırakmaktır. Aşk isteniyorsa bazen güçten vazgeçilir. Gebo bu hesabı gizlemez.",
        "Gebo bedava değildir ve duygusal şantaj değildir. En aşağı sayılan suç katil olmak değil, verilen sözü tutmamaktır. Söz bozulursa işaret bozulur: boğaz tıkanır, kişi toplumda görünmez olur. Sevgiyi parayla satın almak ve “ben yaptım, sen de yapacaksın” bu kapının aşırısıdır.",
      ],
      en: [
        "Gebo means gift. It is not the gift without return of the modern world. In the Viking mind there is no gift without return. The receiver is indebted. The giver governs. Two lines cut at one point. If two people join, it is partnership. If human and god join, it is offering. If masculine and feminine join, it is love.",
        "It has no reverse. Turn it and it is the same mark. There is no escape from the law of exchange. What you sow, you reap. This law does not stand in a corner. Word, vow, and knowledge enter the same exchange. If you want to receive, you must give. The heaviest gift is the ego put forward.",
        "Its balanced state is to be a person of one’s word. What leaves the mouth is a bond. A fair partnership, generosity, a vow that is kept. To gain one thing is to leave another. If love is wanted, power is sometimes given up. Gebo does not hide this account.",
        "Gebo is not free of charge and it is not emotional blackmail. The crime counted lowest is not to be a killer. It is not to keep the word that was given. If the word breaks, the mark breaks: the throat closes, the person becomes invisible in the company. Buying love with money, and “I did this, so you will do that,” are the excess of this door.",
      ],
      sv: [
        "Gebo betyder gåva. Den är inte den moderna världens gåva utan gengäld. I vikingasinnet finns ingen gåva utan gengäld. Mottagaren står i skuld. Givaren styr. Två linjer skär i en punkt. Förenas två människor är det partnerskap. Förenas människa och gud är det offer. Förenas manligt och kvinnligt är det kärlek.",
        "Den har ingen baksida. Vänd den och det är samma tecken. Det finns ingen flykt från byteslagen. Vad du sår, det skördar du. Denna lag står inte i ett hörn. Ord, ed och kunskap går in i samma byte. Vill du ta emot måste du ge. Den tyngsta gåvan är egot som läggs fram.",
        "Dess balanserade tillstånd är att vara en person av sitt ord. Det som lämnar munnen är en förbindelse. Ett rättvist partnerskap, generositet, en ed som hålls. Att vinna en sak är att lämna en annan. Önskas kärlek ges makten ibland upp. Gebo döljer inte detta konto.",
        "Gebo är inte gratis och inte känslomässig utpressning. Brottet som räknas lägst är inte att vara en dråpare. Det är att inte hålla ordet som gavs. Bryts ordet bryts tecknet: strupen sluter sig, personen blir osynlig i sällskapet. Att köpa kärlek med pengar, och ”jag gjorde detta, så ska du göra det,” är denna dörrs övermått.",
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
        "Wunjo neşe, mükemmellik ve dilek demektir. Şekli kabile sancağına ya da meyve taşıyan dala benzer. Savaş bitmiş, tarla sürülmüş, tohum ekilmiş, hasat kalkmıştır. “Hahaha” diye sığ bir gülüş değildir. Huzur ve tamamlanmışlıktır. Her şeyin yerli yerinde olduğu o nadir an.",
        "İlk aettin son harfidir. Fehu ile başlayan, Uruz ile güçlenen, Thurisaz ile sınanan, Gebo ile bedel ödeyen yolcunun hak ettiği ödüldür. Çilenin sonundaki zafer. Gerçek neşe sahip olunan eşyada değil, hırsın bittiği ve oyunun başladığı zihindedir.",
        "Yalnızlığın bitişidir. En büyük hediye nesne değil, “sen bizdensin” denilmesidir. Ait olunan yer, mutluluk kalesidir. Kadeh dolu olsa da omuz omuza duran yoksa neşenin anlamı kalmaz. Bu neşe kişisel sarhoşluk değil, paylaşılan neşedir.",
        "Wunjo sürgün değildir ve kaçış değildir. Yoksun yüzü “buraya ait değilim”dir: kronik mutsuzluk, boşa giden emek, dost kazığı. Aşırısı uyuşturucu, alkol, sorun yokmuş gibi yapılan Pollyannacılıktır. Histeri ve yersiz coşku ödülü kapatır. Hileye başvurulursa hasat kaçırılır.",
      ],
      en: [
        "Wunjo means joy, perfection, and wish. Its shape is like a tribal banner, or a branch carrying fruit. The war has ended, the field is plowed, the seed is sown, the harvest is lifted. It is not a shallow laugh of “ha ha.” It is peace and completion. That rare moment when everything sits in its place.",
        "It is the last letter of the first aett. It is the reward earned by the traveler who began with Fehu, strengthened with Uruz, was tested with Thurisaz, and paid the price with Gebo. Victory at the end of the ordeal. Real joy is not in the goods one owns. It is in the mind where ambition has ended and play has begun.",
        "It is the end of loneliness. The greatest gift is not an object. It is being told “you are one of us.” The place one belongs to is the fortress of joy. Even if the cup is full, if there is no one standing shoulder to shoulder, the joy has no meaning. This joy is not a private intoxication. It is a shared joy.",
        "Wunjo is not exile and it is not flight. Its face of lack is “I do not belong here”: chronic unhappiness, labor gone to waste, a friend’s knife. Its excess is the drug, the alcohol, the Pollyanna act of pretending there is no problem. Hysteria and untimely excitement close the reward. If deceit is used, the harvest is missed.",
      ],
      sv: [
        "Wunjo betyder glädje, fullkomlighet och önskan. Dess form liknar en stamfana, eller en gren som bär frukt. Kriget har tagit slut, åkern är plöjd, fröet är sått, skörden är lyft. Det är inte ett grunt skratt av ”ha ha.” Det är frid och fullbordan. Det sällsynta ögonblick då allt sitter på sin plats.",
        "Den är första ättens sista bokstav. Den är lönen som förtjänats av resenären som började med Fehu, stärktes med Uruz, prövades med Thurisaz och betalade priset med Gebo. Seger vid prövningens slut. Verklig glädje sitter inte i godset man äger. Den sitter i sinnet där ärelystnaden tagit slut och leken börjat.",
        "Den är ensamhetens slut. Den största gåvan är inte ett föremål. Den är att bli tillsagd ”du är en av oss.” Platsen man hör till är glädjens borg. Även om bägaren är full, om ingen står skuldra vid skuldra, har glädjen ingen mening. Denna glädje är inte ett privat rus. Den är en delad glädje.",
        "Wunjo är inte landsflykt och inte flykt. Dess ansikte av brist är ”jag hör inte hit”: kronisk olycka, arbete som gått till spillo, en väns kniv. Dess övermått är drogen, alkoholen, Pollyanna-akten att låtsas att inget problem finns. Hysteri och otidig yra stänger lönen. Brukas svek missas skörden.",
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
        "Hagalaz dolu demektir. İki ayrı dünyayı çapraz bir kiriş bağlar. Gökten düşen buz tanesi ekinini ve çatını döver. İlk bakışta felakettir. Kuzeyli bilir: dolu donmuş sudur. Eridiğinde toprağa karışır ve gelecek bereketin suyunu taşır.",
        "Kontrol dışı değişimdir. Plan ve önlem işlemez. Geldiğinde durulur ve geçmesi beklenir. Kaderin en sert müdahalesidir. İkinci aett burada açılır. Konfor biter. Güvenlik değil, dayanıklılık konuşulur. Hayat pamukta tutmayı bırakır; örse koyar.",
        "Tersi yoktur. Nasıl tutarsan tut, buz parçasıdır. “Neden ben” anlamsızdır. Fırtına tesadüf değildir. Geçmiş, geleceği şekillendirmek için zorunlu müdahaleyi yapar. Dolu yağarken gökle pazarlık edilmez. Öğrettiği şey mutlak teslimiyettir. Karma niyete değil, eyleme bakar. İyi an hatırına sınır ihlaline göz yummak da borç yazar.",
        "Hagalaz birine tutulan beddua değildir ve sonsuz felaket değildir. Dengeli hâli uyanıştır: zincir kırılır, hapishane sanılan konfor yıkılır, gereksiz olan elenir. Gölgesi iflas, ayrılık, kaza ve kurban psikolojisidir. Kronik yüzü kriz üreterek beslenmektir. Dolu erir. Su, darbenin içinden çıkar.",
      ],
      en: [
        "Hagalaz means hail. A diagonal beam binds two separate worlds. The grain of ice that falls from the sky beats the crop and the roof. At first look it is disaster. The northerner knows: hail is frozen water. When it melts it enters the soil and carries the water of a future fertility.",
        "It is change outside control. Plan and precaution do not work. When it comes, one stands and waits for it to pass. It is fate’s hardest intervention. The second aett opens here. Comfort ends. What is spoken is not safety. It is endurance. Life stops keeping you in cotton. It puts you on the anvil.",
        "It has no reverse. However you hold it, it is a piece of ice. “Why me” is meaningless. The storm is not chance. The past makes the necessary intervention in order to shape the future. While hail falls, one does not bargain with the sky. What it teaches is absolute surrender. Karma looks at the action, not the intention. To ignore a breached limit for the sake of a good moment also writes a debt.",
        "Hagalaz is not a curse aimed at a person and it is not an endless disaster. Its balanced state is waking: the chain breaks, the comfort mistaken for a prison falls, what is unnecessary is sifted out. Its shadow is bankruptcy, separation, accident, and the mind of the victim. Its chronic face is feeding by producing crisis. Hail melts. The water comes out of the blow.",
      ],
      sv: [
        "Hagalaz betyder hagel. En diagonal bjälke binder två skilda världar. Iskornet som faller från himlen piskar skörden och taket. Vid första ögonkastet är det katastrof. Nordbon vet: hagel är fruset vatten. När det smälter går det in i jorden och bär vattnet till en kommande fruktsamhet.",
        "Den är förändring utanför kontroll. Plan och försiktighet fungerar inte. När den kommer står man och väntar på att den ska gå över. Den är ödets hårdaste ingrepp. Den andra ätten öppnas här. Komforten tar slut. Det som talas är inte trygghet. Det är uthållighet. Livet slutar hålla dig i bomull. Det lägger dig på städet.",
        "Den har ingen baksida. Hur du än håller den är den en isbit. ”Varför jag” är meningslöst. Stormen är inte slump. Det förflutna gör det nödvändiga ingreppet för att forma framtiden. Medan hagel faller förhandlar man inte med himlen. Det den lär är absolut överlämnande. Karma ser på handlingen, inte på avsikten. Att bortse från en bruten gräns för en god stunds skull skriver också en skuld.",
        "Hagalaz är inte en förbannelse riktad mot en person och inte en oändlig katastrof. Dess balanserade tillstånd är uppvaknande: kedjan bryts, komforten som misstogs för ett fängelse faller, det onödiga sållas bort. Dess skugga är konkurs, separation, olycka och offrets sinne. Dess kroniska ansikte är att livnära sig genom att framkalla kris. Hagel smälter. Vattnet kommer ut ur slaget.",
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
        "Nauthiz ihtiyaç, yoksunluk ve mecburiyettir. Şekli haç değildir. İki dalın birbirine sürtünmesidir. Olmayanın rünüdür. İstenen elde değilken duyulan yakıcı boşluk. O boşluk öldürmez. Harekete zorlar.",
        "Ateş nasıl çıkar? İki kuru dal birbirini yiyerek ısınır ve alev alır. Konfor alanında ateş yakılmaz. Yanmak istiyorsan sürtünmek zorundasın. Bu rün saldırı değildir ve büyüme de değildir. Hayatta kalma rünüdür. Baskı altında elmasa dönüşmek, yokluktan varlık çıkarmak buradadır.",
        "Hareketi şikâyet değil, dirençtir. “Yoruldum” deme lüksünün olmadığı andır. Bırakırsan sevdiğin şey yanar. Sessiz ve ağır bir dayanmadır. Bağımlılık bu kapıda kırılır: istenen şey iradenin kendisi değildir. İrade, açlığın yerine geçer.",
        "Nauthiz kader diye üstüne çöken bir kimlik değildir. Gölgesi öğrenilmiş çaresizliktir: sürekli şikâyet, harekete geçmemek, “elimden bir şey gelmez.” Aşırısı kendine eziyettir. Hayattan keyfi reddetmek, hep zoru seçmek. Sürtünme varsa ateş vardır. Sürtünme yoksa yalnızca yokluk kalır.",
      ],
      en: [
        "Nauthiz is need, lack, and necessity. Its shape is not a cross. It is two sticks rubbing against each other. It is the rune of what is not. The burning gap felt when what is wanted is not in hand. That gap does not kill. It forces movement.",
        "How does fire come? Two dry sticks eat each other, heat, and take flame. Fire is not lit in the comfort zone. If you want to burn, you must rub. This rune is not attack and it is not growth. It is the rune of staying alive. To turn into diamond under pressure, to bring a thing out of lack, sits here.",
        "Its movement is not complaint. It is resistance. It is the moment when there is no luxury of saying “I am tired.” If you let go, the thing you love burns. It is a silent and heavy endurance. Addiction breaks at this door: the thing wanted is not the will itself. The will takes the place of the hunger.",
        "Nauthiz is not an identity collapsed onto you as fate. Its shadow is learned helplessness: constant complaint, not moving, “nothing can come from my hand.” Its excess is self-torment. Refusing pleasure in life, always choosing the hard. If there is friction, there is fire. If there is no friction, only lack remains.",
      ],
      sv: [
        "Nauthiz är behov, brist och nödvändighet. Dess form är inte ett kors. Den är två pinnar som gnids mot varandra. Den är runan för det som inte finns. Den brännande tomheten när det önskade inte är i handen. Den tomheten dödar inte. Den tvingar rörelse.",
        "Hur kommer eld? Två torra pinnar äter varandra, hettas och tar låga. Eld tänds inte i komfortzonen. Vill du brinna måste du gnida. Denna runa är inte angrepp och inte växt. Den är runan för att förbli vid liv. Att bli diamant under tryck, att få fram en sak ur brist, sitter här.",
        "Rörelsen är inte klagan. Den är motstånd. Den är stunden då det inte finns lyx att säga ”jag är trött.” Släpper du brinner det du älskar. Det är en tyst och tung uthållighet. Beroende bryts vid denna dörr: det önskade är inte viljan själv. Viljan tar hungerns plats.",
        "Nauthiz är inte en identitet som sjunkit över dig som öde. Dess skugga är inlärd hjälplöshet: ständig klagan, att inte röra sig, ”inget kan komma ur min hand.” Dess övermått är självplåga. Att vägra nöje i livet, att alltid välja det svåra. Finns friktion finns eld. Finns ingen friktion blir bara brist kvar.",
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
        "Isa buz demektir. Yukarıdan aşağı tek çizgidir. Alfabedeki en sade ve en tehlikeli biçim. Akan suyun, duygunun ve hayatın donarak katılaşmasıdır. Bu bir ölüm değildir. Duraklama ve korumadır. Buzun altındaki balık ölmez. Yavaşlar.",
        "Aynı çizgi “ben”dir. Ayakta duran insan. Fırtınada eğilmeyen, bükülmeyen, yalnızca duran irade. Tanrılardan yaşlıdır. Ateş yok eder ve dönüştürür. Buz olduğu gibi saklar. Travma, çocukluk, atadan gelen kayıt ölmez. Donar. Sıcaklıkta hayat, soğuklukta bilgelik vardır. Sürekli heyecan yüzeyde bırakır. Derinleşmek için soğumak gerekir.",
        "Tersi yoktur. Sütundur. Dengeli hâli odak, soğukkanlılık, panikte sakin duruştur. İrade tek noktaya toplanır. “Buradayım ve yıkılmıyorum.” Bireysellik bu çizgidedir.",
        "Isa yıl değildir ve sonsuz don değildir. Gölgesi yalnızlık, empatinin kesilmesi, kalbin buz tutması, yalnızca ben demek, ertelemek, hayatın durmasıdır. Aşırısı donakalmadır. Tutulması gereken yerde çözülürse dağılır. Çözülmesi gereken yerde tutulursa hayat durur.",
      ],
      en: [
        "Isa means ice. It is a single line from above downward. The plainest and most dangerous form in the alphabet. It is flowing water, feeling, and life hardening by freezing. This is not a death. It is a pause and a protection. The fish under the ice does not die. It slows.",
        "The same line is “I.” The human standing. A will that does not bend in the storm, does not twist, only stands. It is older than the gods. Fire destroys and transforms. Ice keeps a thing as it is. Trauma, childhood, the record that comes from the ancestor do not die. They freeze. In warmth there is life. In cold there is wisdom. Constant excitement leaves one on the surface. To go deep, one must cool.",
        "It has no reverse. It is a column. Its balanced state is focus, cool-headedness, a calm stance in panic. The will is gathered to one point. “I am here and I am not falling.” Individuality is on this line.",
        "Isa is not the year and it is not an endless freeze. Its shadow is loneliness, the cut of empathy, the heart taking ice, saying only I, delay, life stopping. Its excess is freezing in place. If it thaws where it should be held, things scatter. If it is held where it should thaw, life stops.",
      ],
      sv: [
        "Isa betyder is. Den är en enda linje uppifrån och ner. Den enklaste och farligaste formen i alfabetet. Den är rinnande vatten, känsla och liv som hårdnar genom att frysa. Detta är inte en död. Det är en paus och ett skydd. Fisken under isen dör inte. Den saktar.",
        "Samma linje är ”jag.” Människan som står. En vilja som inte böjs i stormen, inte vrids, bara står. Den är äldre än gudarna. Eld förstör och förvandlar. Is bevarar en sak som den är. Trauma, barndom, den uppteckning som kommer från förfadern dör inte. De fryser. I värme finns liv. I kyla finns visdom. Ständig upphetsning lämnar en på ytan. För att gå djupt måste man svalna.",
        "Den har ingen baksida. Den är en pelare. Dess balanserade tillstånd är fokus, kallblodighet, en lugn hållning i panik. Viljan samlas till en punkt. ”Jag är här och jag faller inte.” Individualiteten ligger på denna linje.",
        "Isa är inte året och inte en oändlig köld. Dess skugga är ensamhet, empatins avbrott, hjärtat som tar is, att bara säga jag, uppskjutande, livet som stannar. Dess övermått är att frysa på stället. Töar den där den borde hållas skingras saker. Hålls den där den borde töa stannar livet.",
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
        "Jera, modern insanın en çok zorlandığı kavramdır: sabır ve süreç. Eski dilde yıl ve iyi hasat demektir. Fehu ham enerjiyse, Jera o enerjinin toprağa ekilmesi, bakılması, olgunlaşması ve biçilmesidir. Şans ya da piyango değildir. Hak edilen ödüldür.",
        "Ne ekersen onu biçersin. Niyet burada ikinci plandadır. Eylem esastır. Tarlaya ne girdiyse, dua etsen de onu biçersin. Hamilelik kendi ayını ister. Tohum, kışın soğuğunu yemeden filiz vermez. Jera sürecin gardiyanıdır. Acele ettirilemez.",
        "Çarkın durmayı da bilmesi gerekir. Dinlenme yoksa, nadas yoksa, değirmen durmadan döner ve bereket felakete döner. Sürekli çalışan toprak ölür. Üretilen şey, üreteni yıkan bir orduya dönüşür. Doğal ritim çalışma ile durmanın dengesidir.",
        "Jera bir günde istenen mucize değildir ve kriz değildir. Dengeli hâli bereketli yıl ve barıştır: emeğin maddeye dönüşmesi. Bozuk hâli dalında çürüyen meyvedir. Ertelenen iş zehir biriktirir. Yoksun yüzü kıtlıktır: ne kadar çalışılsa da toprağın cevap vermemesi. Döngüye saygısızlık bunu tetikler.",
      ],
      en: [
        "Jera is the concept the modern human struggles with most: patience and process. In the old tongue it means year and good harvest. If Fehu is raw energy, Jera is that energy sown in the soil, tended, ripened, and reaped. It is not luck or a lottery. It is the reward that was earned.",
        "What you sow, you reap. Intention is secondary here. Action is the substance. Whatever entered the field, you reap it even if you pray. A pregnancy wants its own months. A seed does not sprout without eating the cold of winter. Jera is the warden of the process. It cannot be hurried.",
        "The wheel must also know how to stop. If there is no rest, if there is no fallow, the mill turns without stopping and fertility turns to disaster. Soil that is worked without cease dies. What is produced becomes an army that destroys the producer. Natural rhythm is the balance of work and of stopping.",
        "Jera is not a miracle wanted in one day and it is not a crisis. Its balanced state is a fertile year and peace: labor turned into matter. Its broken state is fruit rotting on the branch. Postponed work stores poison. Its face of lack is famine: however much one works, the soil does not answer. Disrespect for the cycle triggers this.",
      ],
      sv: [
        "Jera är begreppet den moderna människan kämpar mest med: tålamod och process. På det gamla språket betyder det år och god skörd. Är Fehu rå energi är Jera den energin sådd i jorden, vårdad, mognad och skördad. Den är inte tur eller ett lotteri. Den är lönen som förtjänades.",
        "Vad du sår, det skördar du. Avsikt är sekundär här. Handling är substansen. Vad som än gick in i åkern skördar du det även om du ber. En graviditet vill ha sina egna månader. Ett frö gror inte utan att äta vinterns kyla. Jera är processens väktare. Den kan inte skyndas.",
        "Hjulet måste också veta hur det stannar. Finns ingen vila, finns ingen träda, vänder kvarnen utan att stanna och fruktsamheten blir katastrof. Jord som bearbetas utan uppehåll dör. Det som produceras blir en armé som förstör producenten. Naturlig rytm är balansen mellan arbete och att stanna.",
        "Jera är inte ett mirakel önskat på en dag och inte en kris. Dess balanserade tillstånd är ett fruktbart år och frid: arbete vänt till materia. Dess brutna tillstånd är frukt som ruttnar på grenen. Uppskjutet arbete lagrar gift. Dess ansikte av brist är hungersnöd: hur mycket man än arbetar svarar jorden inte. Missaktning för cykeln utlöser detta.",
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
        "Eihwaz porsuk ağacıdır. Futhark’ın omurgasıdır. Jera yataydır, dönen çarktır. Eihwaz dikeydir, gök ile yeri bağlayan direktir. Kökleri ölülere, dalları tanrılara uzanır. Kışın herkes ölürken yemyeşil kalır. Yaprağı ve tohumu zehirlidir. Ölümün içindeki yaşam, yaşamın içindeki ölümdür.",
        "Dişbudak kışın yaprak döker. Porsuk dökmez. Gövde çürüyünce içinden yeni kök salar, kendini kendinden yeniden doğurur. Bu yüzden dünyanın direği burada porsuktur. Şamanın bineği, boyutlar arasında tırmanılan merdivendir. Aşağı ile yukarı arasındaki tek güvenli geçiş bu dikey omurgadır.",
        "Sabrın değil, direncin ve ölümsüzlüğün rünüdür. Rüzgârda eğilmez. Gerekirse öldürür, kendisi ölmez. Zehir, doğru işlenirse ilaç olur. Seni öldüren şey, yüzleşilirse iyileştiren şeydir. Travma inkâr edilmez. İşlenir.",
        "Eihwaz hızlı bir son değildir ve yumuşak gölgelik değildir. Dengeli hâli sarsılmaz duruştur: krizde panik değil, dik omurga. Gölgesi katılıktır. “Benim dediğim olacak” inadı, ölüm korkusu ya da yaşamdan vazgeçme. Durgun yüzü, zihnin kendi hapishanesinde çürümesidir. Omurga dik durmuyorsa rün süs olarak kalır.",
      ],
      en: [
        "Eihwaz is the yew. It is the spine of the Futhark. Jera is horizontal, the turning wheel. Eihwaz is vertical, the pole that binds sky and earth. Its roots reach the dead. Its branches reach the gods. While everyone dies in winter, it stays green. Its leaf and its seed are poisonous. Life inside death, death inside life.",
        "The ash drops its leaves in winter. The yew does not. When the trunk rots, it sends a new root from inside and is born again from itself. For that reason the pole of the world here is the yew. It is the shaman’s mount, the ladder climbed between worlds. The only safe passage between below and above is this vertical spine.",
        "It is the rune not of patience, but of resistance and of immortality. It does not bend in the wind. If it must, it kills. It does not itself die. Poison, rightly worked, becomes medicine. The thing that kills you, if it is faced, is the thing that heals. Trauma is not denied. It is worked.",
        "Eihwaz is not a quick end and it is not a soft shade. Its balanced state is an unshaken stance: in crisis, not panic, an upright spine. Its shadow is rigidity. The obstinacy of “what I say will be,” fear of death, or giving up on life. Its still face is the mind rotting in a prison of its own making. If the spine does not stand straight, the rune remains an ornament.",
      ],
      sv: [
        "Eihwaz är idegranen. Den är Futharkens ryggrad. Jera är vågrät, det vändande hjulet. Eihwaz är lodrät, stolpen som binder himmel och jord. Dess rötter når de döda. Dess grenar når gudarna. Medan alla dör om vintern förblir den grön. Dess blad och dess frö är giftiga. Liv inuti död, död inuti liv.",
        "Asken fäller sina löv om vintern. Idegranen gör det inte. När stammen ruttnar sänder den en ny rot inifrån och föds igen ur sig själv. Därför är världens stolpe här idegranen. Den är schamanens riddjur, stegen som klättras mellan världar. Den enda trygga passagen mellan nere och uppe är denna lodräta ryggrad.",
        "Den är runan inte för tålamod, utan för motstånd och för odödlighet. Den böjs inte i vinden. Måste den, dödar den. Själv dör den inte. Gift, rätt bearbetat, blir medicin. Det som dödar dig, om det mötas, är det som helar. Trauma förnekas inte. Det bearbetas.",
        "Eihwaz är inte ett snabbt slut och inte en mjuk skugga. Dess balanserade tillstånd är en orubbad hållning: i kris, inte panik, en upprätt ryggrad. Dess skugga är stelhet. Envisheten ”det jag säger ska bli,” rädsla för döden, eller att ge upp livet. Dess stilla ansikte är sinnet som ruttnar i ett fängelse det själv gjort. Står ryggraden inte rak blir runan en prydnad.",
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
        "Perthro zar kupasıdır, oyun taşıdır. Basit kumar değildir. Kozmik kumardır. Eihwaz yapıyı kurdu. Perthro o yapının içindeki olasılığı sarsar. Bir şeyin olmak üzere olduğu, henüz olmadığı andır. Zarın havada durduğu sessizlik.",
        "Aynı zamanda rahimdir. Karanlık, ıslak, gizemli. İçeride neyin büyüdüğü doğuma kadar bilinmez. Saklı olanın rünüdür. Kader burada düz bir çizgi değildir. Olasılıklar denizidir. Kuzeyde kader ip gibi eğrilmez. Ahşaba kazınır. Olan, olmakta olan ve borç diye duran gelecek aynı kuyudadır.",
        "Hayat fazla ciddiye alınmaz, çünkü oyundur. Oyun da kuralına göre oynanır. Kaybedildi sanılan anda zar dönebilir. Bir şeyi var etmek için önce boşluk gerekir. Dolu bardağa su girmez. Karanlık korkulacak yer değil, yıldızın göründüğü yerdir.",
        "Perthro garanti değildir ve başkasının iradesini zorlamak değildir. Dengeli hâli eşzamanlılık, gizli yeteneğin açılması, doğurganlık, lehine çözülen sırdır. Gölgesi kumarbazlıktır: kaderden beklemek, sorumsuzluk. Durgun yüzü rahmin mezara dönmesidir. Proje içeride çürür. Zorlanırsa ip aleyhe dolar.",
      ],
      en: [
        "Perthro is the dice cup, the playing piece. It is not simple gambling. It is the cosmic gamble. Eihwaz built the structure. Perthro shakes the possibility inside that structure. It is the moment a thing is about to be and is not yet. The silence while the die is in the air.",
        "It is also the womb. Dark, wet, mysterious. What is growing inside is not known until the birth. It is the rune of what is hidden. Fate here is not a straight line. It is a sea of possibilities. In the north, fate is not spun like a thread. It is carved into wood. What has been, what is becoming, and the future that stands as a debt are in the same well.",
        "Life is not taken too seriously, because it is a game. The game is also played by its rule. At the moment one thinks it is lost, the die can turn. To bring a thing into being, an emptiness is required first. Water does not enter a full cup. The dark is not a place to fear. It is the place where the star is seen.",
        "Perthro is not a guarantee and it is not forcing another’s will. Its balanced state is synchronicity, a hidden talent opening, fertility, a secret solved in one’s favor. Its shadow is the gambler: waiting on fate, irresponsibility. Its still face is the womb turned into a grave. The project rots inside. If it is forced, the thread winds against you.",
      ],
      sv: [
        "Perthro är tärningsbägaren, spelpjäsen. Den är inte enkelt spel. Den är det kosmiska spelet. Eihwaz byggde strukturen. Perthro skakar möjligheten inuti den strukturen. Den är stunden då en sak är på väg att bli och ännu inte är. Tystnaden medan tärningen är i luften.",
        "Den är också livmodern. Mörk, våt, hemlighetsfull. Vad som växer inuti vet man inte förrän födseln. Den är runan för det dolda. Ödet är här ingen rak linje. Det är ett hav av möjligheter. I norr spinns ödet inte som en tråd. Det skärs i trä. Det som har varit, det som blir, och framtiden som står som en skuld finns i samma brunn.",
        "Livet tas inte för allvarligt, därför att det är ett spel. Spelet spelas också efter sin regel. I stunden man tror det är förlorat kan tärningen vända. För att föra en sak till varande krävs först en tomhet. Vatten går inte in i en full bägare. Mörkret är ingen plats att frukta. Det är platsen där stjärnan syns.",
        "Perthro är inte en garanti och inte att tvinga en annans vilja. Dess balanserade tillstånd är synkronicitet, en dold talang som öppnas, fruktsamhet, en hemlighet löst till ens fördel. Dess skugga är spelaren: att vänta på ödet, ansvarslöshet. Dess stilla ansikte är livmodern vänd till en grav. Projektet ruttnar inuti. Tvingas den vindar tråden emot dig.",
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
        "Algiz modern çağda koruma diye geçiştirilir. Kuzeyde pasif kalkan yoktur. Kalkanın arkasına saklanan er ya da geç düşer. Kökü geyiktir. Şekli dev boynuzdur. Saldırı gelince boynuz eğilir ve çarpanı deşer. Sana çarpıp seken zırh değil, çarpanı kanatan savunmadır.",
        "Aynı işaret yukarı açılmış iki koldur. İlahi erken uyarıdır. Tehlike sokağın başındayken ensedeki tüy, midedeki sebepsiz kramp. Uyanık tutar. Aşağı ile yukarı arasındaki hat kopmaz. Felaketin ortasında uzanan daldır. Göz kapalıysa dal görünmez. Mücadele etmeye niyeti olmayanı görmez.",
        "Dengeli hâli kusursuz önsezidir. Fırsat ve tehlike uzaktan fark edilir. Enerjisini emen yaklaşamaz. İlham ve bağlantı açıktır. Mekânın sınırına elektrikli çit çeker. Yalanı keser. Gerçeği çıplak gösterir.",
        "Algiz görünmezlik değildir ve korkaklık değildir. Taşıyan yalan söyleyemez ve saklanamaz. Gölgesi paranoyadır: sürekli yanlış alarm, herkesten şüphe, panik. Yoksun yüzü körlüktür. Tehlikenin ortasında hiçbir şey hissetmemek, savunmasız uyuşukluk. Savaşmayacaksan boynuz takılmaz.",
      ],
      en: [
        "Algiz is dismissed in the modern age as protection. In the north there is no passive shield. Whoever hides behind the shield falls sooner or later. Its root is the elk. Its shape is the great horn. When attack comes, the horn lowers and gores what strikes. Not armor that a blow hits and glances off. A defense that bloodies what strikes.",
        "The same mark is two arms opened upward. It is divine early warning. While the danger is at the head of the street, the hair on the neck, the cramp in the gut with no cause. It keeps one awake. The line between below and above does not break. It is the branch that reaches out in the middle of disaster. If the eye is closed, the branch is not seen. It does not see the one who has no will to struggle.",
        "Its balanced state is flawless foresight. Opportunity and danger are noticed from far off. What would drink one’s energy cannot approach. Inspiration and the link are open. It draws an electric fence at the limit of a place. It cuts the lie. It shows the truth bare.",
        "Algiz is not invisibility and it is not cowardice. The one who carries it cannot lie and cannot hide. Its shadow is paranoia: constant false alarm, suspicion of everyone, panic. Its face of lack is blindness. Feeling nothing in the middle of danger, a numb defenselessness. If you will not fight, the horn is not put on.",
      ],
      sv: [
        "Algiz avfärdas i den moderna tiden som skydd. I norr finns ingen passiv sköld. Den som gömmer sig bakom skölden faller förr eller senare. Dess rot är älgen. Dess form är det stora hornet. När angreppet kommer sänks hornet och stångar det som slår. Inte en rustning som ett slag träffar och glider av. Ett försvar som blöder det som slår.",
        "Samma tecken är två armar öppnade uppåt. Det är gudomlig tidig varning. Medan faran är vid gatans början, håret i nacken, krampen i magen utan orsak. Den håller en vaken. Linjen mellan nere och uppe bryts inte. Den är grenen som räcks ut mitt i katastrofen. Är ögat slutet syns inte grenen. Den ser inte den som inte har vilja att kämpa.",
        "Dess balanserade tillstånd är felfri föraning. Tillfälle och fara märks på långt håll. Det som skulle dricka ens energi kan inte närma sig. Inspiration och bandet är öppna. Den drar ett elektriskt stängsel vid en plats gräns. Den skär lögnen. Den visar sanningen naken.",
        "Algiz är inte osynlighet och inte feghet. Den som bär den kan inte ljuga och inte gömma sig. Dess skugga är paranoia: ständig falsk larmsignal, misstanke mot alla, panik. Dess ansikte av brist är blindhet. Att känna ingenting mitt i faran, en bedövad värnlöshet. Ska du inte strida sätts hornet inte på.",
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
        "Sowilo, plajda ten ısıtan tatlı güneş değildir. Büyütecin altında karıncayı yakan odaklanmış, acımasız ışıktır. Şekli kırık bir güneş çarkı, gökten inen yıldırımdır. Zafer rünüdür. Diplomasiyle ya da şansla kazanılmaz. Karanlığın üstüne yürüyerek, engeli yakarak kazanılır.",
        "Yalan sevmez. Sis dağılır. Ortama girdiğinde saklanacak gölge kalmaz. Herkesin gerçek yüzü aydınlanır. Mutlak gerçek ve mutlak iradedir. Durağan bir başarı da değildir. Arkada nefes alan bir karanlık vardır. Parlamak için sürülür, durulmaz. Zafer kazandım diye dinlenilmez.",
        "Dengeli hâli karşı konulmaz karizma, dağılmış zihin sisi, hedefe ok gibi gitmek, canlı bedendir. Isa’nın donunu eritir. Tıkanan, sürünen işi harekete geçirir. Yalan varsa eteğindeki taşı döktürür.",
        "Sowilo tembellik üstüne serpilmiş umut değildir. Aşırısı tanrı kompleksidir: kendi gücüne tapmak, etrafı yakmak, tahammülsüzlük. Öteki gölge kül sendromudur. Dinlenmeden yanan ateşin yakıtı biter. Gündüzün ve eylemin rünüdür. Işık, iş yapılmadan zafer ilan etmez.",
      ],
      en: [
        "Sowilo is not the sweet sun that warms the skin on a beach. It is the focused, pitiless light that burns the ant under a lens. Its shape is a broken piece of the sun-wheel, a lightning that comes down from the sky. It is the rune of victory. It is not won by diplomacy or by luck. It is won by walking onto the dark and burning the obstacle.",
        "It does not love the lie. Fog breaks. When it enters a place, no shadow remains to hide in. Everyone’s real face is lit. It is absolute truth and absolute will. It is also not a stationary success. There is a dark breathing behind. In order to shine, one drives and does not stop. One does not rest because “I have won.”",
        "Its balanced state is a charisma that cannot be opposed, a mental fog that has broken, going to the target like an arrow, a living body. It melts Isa’s freeze. It sets a stuck, dragging work into motion. If there is a lie, it makes the stone in the hem fall out.",
        "Sowilo is not hope sprinkled over idleness. Its excess is the god complex: worshipping one’s own power, burning what is around, intolerance. The other shadow is ash syndrome. The fuel of a fire that burns without rest runs out. It is the rune of day and of deed. The light does not announce victory before the work is done.",
      ],
      sv: [
        "Sowilo är inte den ljuva sol som värmer huden på en strand. Den är det fokuserade, obarmhärtiga ljus som bränner myran under en lins. Dess form är en bruten bit av solhjulet, en blixt som kommer ner från himlen. Den är segerns runa. Den vinns inte med diplomati eller med tur. Den vinns genom att gå ut på mörkret och bränna hindret.",
        "Den älskar inte lögnen. Dimman bryts. När den går in i en plats finns ingen skugga kvar att gömma sig i. Allas verkliga ansikte lyses. Den är absolut sanning och absolut vilja. Den är heller inte en stillastående framgång. Det finns ett mörker som andas bakom. För att lysa kör man och stannar inte. Man vilar inte därför att ”jag har segrat.”",
        "Dess balanserade tillstånd är en karisma som inte kan motstås, en mental dimma som brutits, att gå mot målet som en pil, en levande kropp. Den smälter Isas frysning. Den sätter ett fastnat, släpande arbete i rörelse. Finns en lögn får den stenen i fållen att falla ut.",
        "Sowilo är inte hopp strött över lättja. Dess övermått är gudskomplexet: att dyrka sin egen makt, att bränna det runt omkring, intolerans. Den andra skuggan är asksyndromet. Bränslet i en eld som brinner utan vila tar slut. Den är dagens och handlingens runa. Ljuset tillkännager inte seger innan arbetet är gjort.",
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
        "Tiwaz kaba bir savaş rünü değildir. Ruhsal savaşçının ve kozmik adaletin rünüdür. Şekli yukarı bakan oktur, göğü taşıyan direktir. Ne olursa olsun doğru olanı yapma iradesidir. Pusulanın kuzeyi şaşırmayan iğnesidir. Zafer vaat eder. Bedelsiz vaat etmez.",
        "Kör şiddet değildir. Strateji, yasa, onur ve düzen için kılıç çekmektir. İçerideki kaosu dize getiren disiplindir. Karanlıkta kaybolanın baktığı sabit yıldızdır. Duygu, korku ve heves döner. İğne dönmez. Yön yoksa yalnızca fırtınada sürüklenilir.",
        "Köşeye çekilip “nasılsa haklıyım” denirse kınından çıkmaz. Pasifliği ve kurban psikolojisini affetmez. İlk adımı sen atarsın. Dilekçe yazılır, meydanına çıkılır. Tiwaz senin yerine savaşmaz. Haklı kılıcın keskinliğini artırır. Tarafsız gözün de onaylayacağı haklılık ister.",
        "Tiwaz intikam değildir ve karanlıkta kapılan zafer değildir. Dengeli hâli irade, disiplin, korkunun üstüne yürümek, sözünde durmaktır. Zafer, haklılık ölçüsündedir. Aşırısı diktatörlük, “yalnızca benim doğrum,” gereksiz fedakârlık, sürekli kavga arayışıdır. Yoksun yüzü korkaklık, adaletsizliğe boyun eğme, sözünden dönmedir. Yüzleşmeye hazır değilsen kılıç çekilmez.",
      ],
      en: [
        "Tiwaz is not a crude rune of war. It is the rune of the spiritual warrior and of cosmic justice. Its shape is an arrow looking up, a pole that carries the sky. It is the will to do what is right no matter what. It is the needle of the compass that does not lose north. It promises victory. It does not promise it free of price.",
        "It is not blind violence. It is drawing the sword for strategy, law, honor, and order. It is the discipline that brings the chaos inside to its knees. It is the fixed star the one who is lost in the dark looks at. Feeling, fear, and whim turn. The needle does not. If there is no direction, one only drifts in the storm.",
        "If one withdraws to the corner and says “I am right anyway,” it does not leave the scabbard. It does not forgive passivity or the mind of the victim. You take the first step. The petition is written. One goes out to its field. Tiwaz does not fight in your place. It increases the sharpness of the rightful blade. It wants a rightness that a neutral eye would also confirm.",
        "Tiwaz is not revenge and it is not a victory grabbed in the dark. Its balanced state is will, discipline, walking onto fear, standing by one’s word. Victory is to the measure of being right. Its excess is dictatorship, “only my truth,” unnecessary sacrifice, a constant search for a fight. Its face of lack is cowardice, bowing to injustice, turning from one’s word. If you are not ready to face it, the sword is not drawn.",
      ],
      sv: [
        "Tiwaz är inte en rå krigsruna. Den är den andlige krigarens och den kosmiska rättvisans runa. Dess form är en pil som ser upp, en stolpe som bär himlen. Den är viljan att göra det rätta vad som än sker. Den är kompassens nål som inte tappar norr. Den lovar seger. Den lovar den inte utan pris.",
        "Den är inte blint våld. Den är att dra svärdet för strategi, lag, heder och ordning. Den är disciplinen som tvingar kaoset inuti på knä. Den är den fasta stjärnan den som är vilse i mörkret ser på. Känsla, rädsla och infall vänder. Nålen gör det inte. Finns ingen riktning driver man bara i stormen.",
        "Drar man sig till hörnet och säger ”jag har ändå rätt” lämnar den inte skidan. Den förlåter inte passivitet eller offrets sinne. Du tar det första steget. Ansökan skrivs. Man går ut på dess fält. Tiwaz strider inte i ditt ställe. Den ökar skärpan i det rättmätiga bladet. Den vill ha en rätt som ett neutralt öga också skulle bekräfta.",
        "Tiwaz är inte hämnd och inte en seger gripen i mörkret. Dess balanserade tillstånd är vilja, disciplin, att gå ut på rädslan, att stå vid sitt ord. Seger är i måttet av att ha rätt. Dess övermått är diktatur, ”bara min sanning,” onödigt offer, ett ständigt sökande efter strid. Dess ansikte av brist är feghet, att böja sig för orätt, att vända från sitt ord. Är du inte redo att möta det dras svärdet inte.",
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
        "Berkano evrensel annedir. Yalnızca biyolojik annelik değildir. Bir fikri, bir projeyi, bir inancı ya da zarar görmüş bir ruhu büyütmek için gereken kuluçkadır. Eski dilde huş ağacıdır. Buz çekilince donmuş toprağa tutunan ilk ağaç. Hayatta kalma dirayeti, sıfırdan var olma, şefkat.",
        "Dışarıdaki fırtınadan sığınılan mağaradır. Toprağın altında tohumun çatladığı karanlık, sessiz, canlı yerdir. En donuk andan sonraki ilk yeşil filizdir. Berkano yoksa iyileşme ve yeniden başlama umudu da yoktur. Sırlar burada saklanır. Büyüme dışarı bağırılmaz.",
        "Yavaştır. Çok yavaştır. Ertesi gün sonuç vermez. Toprak enerjisidir. Mevsimini bekler. Aceleye gelmez. Sabırsız doğaya uymaz. Niyetin çevresine rahim örer. Kendi hızında olgunlaşır. Ev, bebek odası, yeni filizlenen hassas iş bu kalkanın içindedir.",
        "Berkano hasat değildir ve çoktan dünyaya çıkmış olanın hayatı değildir. Dengeli hâli istikrarlı büyüme, yuva, bedensel ve ruhsal iyileşmedir. Aşırısı boğan korumadır: gelişimin kendi ayağına basmasına izin vermemek. Yoksun yüzü terk edilmişlik, kısırlık, işin ham kalması, güvenli alanın eksikliğidir.",
      ],
      en: [
        "Berkano is the universal mother. It is not biological motherhood alone. It is the incubation required to grow an idea, a project, a belief, or a soul that has been harmed. In the old tongue it is the birch. The first tree that takes hold in frozen soil when the ice withdraws. The resolve to stay alive, coming into being from zero, compassion.",
        "It is the cave one shelters in from the storm outside. The dark, silent, living place under the soil where the seed splits. It is the first green shoot after the dullest moment. If there is no Berkano, there is also no hope of healing and of beginning again. Secrets are kept here. Growth is not shouted outward.",
        "It is slow. Very slow. It does not give a result the next day. It is earth energy. It waits for its season. It does not take hurry. It does not suit an impatient nature. It weaves a womb around the intention. It ripens at its own speed. The house, the child’s room, the sensitive work just sprouting are inside this shield.",
        "Berkano is not the harvest and it is not the life of what has already come out into the world. Its balanced state is steady growth, the nest, bodily and spiritual healing. Its excess is a protection that smothers: not letting a growth stand on its own foot. Its face of lack is abandonment, sterility, the work staying raw, the lack of a safe field.",
      ],
      sv: [
        "Berkano är den universella modern. Den är inte bara biologiskt moderskap. Den är den ruvning som krävs för att växa en idé, ett projekt, en tro eller en själ som skadats. På det gamla språket är den björken. Det första trädet som tar fäste i frusen jord när isen drar sig tillbaka. Beslutet att förbli vid liv, att bli till från noll, medkänsla.",
        "Den är grottan man söker skydd i från stormen utanför. Den mörka, tysta, levande platsen under jorden där fröet spricker. Den är det första gröna skottet efter den slöaste stunden. Finns ingen Berkano finns heller inget hopp om läkning och om att börja om. Hemligheter hålls här. Växt ropas inte utåt.",
        "Den är långsam. Mycket långsam. Den ger inget resultat dagen efter. Den är jordenergi. Den väntar på sin årstid. Den tar inte brådska. Den passar inte ett otåligt sinnelag. Den väver en livmoder kring avsikten. Den mognar i sin egen hastighet. Huset, barnets rum, det känsliga arbetet som just gror finns inuti denna sköld.",
        "Berkano är inte skörden och inte livet hos det som redan kommit ut i världen. Dess balanserade tillstånd är stadig växt, boet, kroppslig och andlig läkning. Dess övermått är ett skydd som kväver: att inte låta en växt stå på egen fot. Dess ansikte av brist är övergivenhet, ofruktsamhet, arbetet som förblir rått, bristen på ett tryggt fält.",
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
        "Ehwaz at demektir. Yalnızca binilen hayvan değildir. Sadakat, uyum ve ilerleyiştir. Berkano sessizce beklemekti. Ehwaz, vakti gelince güvenilir bir yoldaşla yola çıkmaktır. Binici ile at iki varlıktır. Tek beden gibi hareket ederler. Atın gücü yönlendirmeyle, binicinin görüşü atın gücüyle menzile varır.",
        "Ruh ile beden, eş ile eş, ortak ile ortak, sen ile hedefin arasındaki bağdır. Güvenilen araç, yoldaş, menzile atılan istikrarlı adımdır. Tek başına başarma kibri bu kapıda durmaz. Büyük sıçrama doğru müttefikle olur. Müttefik insan, araç ya da kendi bedenin olabilir.",
        "Dışarıdaki ortaktan önce görünmez yoldaştır. Altıncı his, sezgidir. İç ses huysuzlanıyorsa o yola gidilmez. Hayvan içgüdüsü kibirden keskindir. Raido sürüşün kendisidir. Ehwaz, o sürüşe giren bağdır.",
        "Ehwaz yalnız yolculuk değildir ve zorla koşulan hayvan değildir. Dengeli hâli “biz” diyebilmektir: sadakat, uyumlu birlik, mesafenin aşılması. Aşırısı bağımlılıktır. İp tamamen ötekinin eline geçer, irade yiter, yalnız kalmamak için yanlış yoldaşla koşulur. Yoksun yüzü ihanet, attan düşmek, zihnin istediği ile bedenin tükendiği savaştır.",
      ],
      en: [
        "Ehwaz means horse. It is not only the animal one rides. It is loyalty, harmony, and advance. Berkano was waiting in silence. Ehwaz is setting out, when the time has come, with a reliable companion. Rider and horse are two beings. They move as one body. The horse’s power reaches the range by direction. The rider’s sight reaches it by the horse’s power.",
        "It is the bond between spirit and body, spouse and spouse, partner and partner, you and your aim. The vehicle that is trusted, the companion, the steady step thrown toward the range. The pride of succeeding alone does not stand at this door. The great leap happens with the right ally. The ally may be a human, a vehicle, or your own body.",
        "Before the partner outside, it is the unseen companion. Sixth sense, intuition. If the inner voice shies, that road is not taken. Animal instinct is sharper than pride. Raido is the ride itself. Ehwaz is the bond that enters that ride.",
        "Ehwaz is not a solitary journey and it is not an animal driven by force. Its balanced state is being able to say “we”: loyalty, a harmonious union, distance crossed. Its excess is dependence. The rein passes wholly into the other’s hand, the will is lost, one runs with the wrong companion in order not to be alone. Its face of lack is betrayal, falling from the horse, the war between what the mind wants and what the body has spent.",
      ],
      sv: [
        "Ehwaz betyder häst. Den är inte bara djuret man rider. Den är lojalitet, harmoni och framåtskridande. Berkano var att vänta i tystnad. Ehwaz är att ge sig av, när tiden kommit, med en pålitlig följeslagare. Ryttare och häst är två varelser. De rör sig som en kropp. Hästens kraft når räckvidden genom styrning. Ryttarens syn når den genom hästens kraft.",
        "Den är bandet mellan ande och kropp, maka och make, partner och partner, du och ditt mål. Fordonet som litas på, följeslagaren, det stadiga steget kastat mot räckvidden. Högmodet att lyckas ensam står inte vid denna dörr. Det stora språnget sker med rätt bundsförvant. Bundsförvanten kan vara en människa, ett fordon eller din egen kropp.",
        "Före partnern utanför är den den osedda följeslagaren. Sjätte sinne, intuition. Skyggar den inre rösten tas inte den vägen. Djurinstinkt är skarpare än högmod. Raido är ritten själv. Ehwaz är bandet som går in i den ritten.",
        "Ehwaz är inte en ensam färd och inte ett djur drivet med tvång. Dess balanserade tillstånd är att kunna säga ”vi”: lojalitet, en harmonisk förening, avstånd korsat. Dess övermått är beroende. Tygeln går helt över i den andres hand, viljan förloras, man löper med fel följeslagare för att inte vara ensam. Dess ansikte av brist är svek, att falla av hästen, kriget mellan vad sinnet vill och vad kroppen har förbrukat.",
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
        "Mannaz insan demektir. Etten ve kemikten beden değildir. Evreni algılayan bilinçtir. Hayvan içgüdüyle hareket eder. At uyumla koşar. Yalnızca insan kendi varlığının farkındadır. Gökteki ile kökteki arasında duran idraktır.",
        "Hafıza, toplumdaki yer ve insanlar arasındaki görünmez ağ buradadır. Akıl kullanılmazsa, yiyip içen bir kütükten fark kalmaz. İş, ne olursa olsun, liyakatle ve en tam hâliyle yapılır. Ölümlü zanaat, ustalıkla birleşince mertebe değiştirir. Yol torpil ya da şans değil, liyakattir.",
        "Dengeli hâli nesnel zekâ, yüksek empati, kendini bilme, “ben kimim” sorusunun cevabıdır. Söz dinlenir. Karmaşık düğüm çözülür. Sınav ve araştırma bu kapıda odaklanır. Bedeni değil, zihni yorar.",
        "Mannaz tanrı değildir ve sürü değildir. Aşırısı narsisizm, tanrıcılık oynama, pratik hayattan kopmuş zehirli entelektüalizmdir. Yoksun yüzü sürü psikolojisidir: kendi fikrini kaybetmek, onay kölesi olmak, akıl tutulması, aşağılık duygusu. Ölümlü olduğunu unutan bu rünü okuyamaz.",
      ],
      en: [
        "Mannaz means the human. It is not the body of flesh and bone. It is the consciousness that perceives the world. The animal moves by instinct. The horse runs in harmony. Only the human is aware of their own being. It is the understanding that stands between what is in the sky and what is at the root.",
        "Memory, one’s place in the company, and the unseen net between people sit here. If the mind is not used, no difference remains from a log that eats and drinks. The work, whatever it is, is done with merit and in its fullest state. A mortal craft, joined with mastery, changes rank. The way is not favor or luck. It is merit.",
        "Its balanced state is objective intelligence, high empathy, knowing oneself, the answer to “who am I.” The word is heard. A complex knot is untied. Examination and research focus at this door. It tires not the body, but the mind.",
        "Mannaz is not a god and it is not a herd. Its excess is narcissism, playing at being a god, a poisonous intellectualism cut off from practical life. Its face of lack is herd psychology: losing one’s own idea, becoming a slave of approval, a seizure of the mind, a feeling of inferiority. Whoever forgets that they are mortal cannot read this rune.",
      ],
      sv: [
        "Mannaz betyder människan. Den är inte kroppen av kött och ben. Den är medvetandet som uppfattar världen. Djuret rör sig av instinkt. Hästen löper i harmoni. Bara människan är medveten om sitt eget vara. Den är förståndet som står mellan det som är på himlen och det som är vid roten.",
        "Minne, ens plats i sällskapet och det osedda nätet mellan människor sitter här. Brukas inte sinnet finns ingen skillnad kvar från en stock som äter och dricker. Arbetet, vad det än är, görs med förtjänst och i sitt fullaste tillstånd. Ett dödligt hantverk, förenat med mästerskap, byter rang. Vägen är inte gunst eller tur. Den är förtjänst.",
        "Dess balanserade tillstånd är objektiv intelligens, hög empati, att känna sig själv, svaret på ”vem är jag.” Ordet hörs. En komplex knut löses. Prov och forskning fokuserar vid denna dörr. Den tröttar inte kroppen, utan sinnet.",
        "Mannaz är inte en gud och inte en hjord. Dess övermått är narcissism, att leka gud, en giftig intellektualism avskuren från det praktiska livet. Dess ansikte av brist är hjordpsykologi: att tappa sin egen idé, att bli en slav under godkännande, ett anfall i sinnet, en känsla av underlägsenhet. Den som glömmer att den är dödlig kan inte läsa denna runa.",
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
        "Laguz içilen su değildir. Görünmeyenin, bilinçaltının, rüyanın ve evrensel hafızanın anahtarıdır. Fehu görünür olanın yakıtıysa, Laguz sezginin okyanusudur. Şekillendirir, besler, hafızaya kaydeder. Eski dilde göl ve su demektir. Üstünde kuğu yüzen sığ gölet değildir.",
        "Dibi görünmeyen, hem kadim bilgeliği hem karanlık canavarı saklayan engin sudur. Yaşamın beşiği, boğulmanın da merkezidir. Yüzeydeki yansımaya kanılmaz. Dibe dalınır. Su yenilmez, suyla savaşılmaz. Sağlam bir gemi, yani mantık ve irade, kurulursa su seni istediğin ufka taşır. Düşman değil, akışına güvenilen rehberdir.",
        "Suyun tehlikesi kabın şeklini alması ve sıkı tutulanın parmak arasından kaçmasıdır. Esneklik ve gizlenme hayatta kalmak içindir. Sürekli şekil değiştirir, gerçekten kaçarsan, kendi akıntında ördüğün ağa takılırsın.",
        "Laguz buz değildir ve sahip olunan gölet değildir. Dengeli hâli sezgi, empati, rüya farkındalığı, engelin etrafından dolanmaktır. Aşırısı illüzyon, duygusal şantaj, kendi duygusunda boğulma, melankolidir. Yoksun yüzü ruhsal kuraklık, yaratıcı tıkanıklık, duygunun bastırılıp katılaşmasıdır. Derinlik, çıkışı bilenindir.",
      ],
      en: [
        "Laguz is not the water one drinks. It is the key of the unseen, of the unconscious, of the dream, and of universal memory. If Fehu is the fuel of what is visible, Laguz is the ocean of intuition. It shapes, it feeds, it records into memory. In the old tongue it means lake and water. It is not a shallow pond with a swan on it.",
        "It is a vast water whose bottom is not seen, hiding both ancient wisdom and the dark beast. The cradle of life, and also the center of drowning. One is not fooled by the reflection on the surface. One dives. Water is not beaten. One does not war with water. If a sound ship is built, that is reason and will, the water carries you to the horizon you want. Not an enemy. A guide whose current is trusted.",
        "The danger of water is that it takes the shape of the vessel, and that what is held tight escapes between the fingers. Flexibility and hiding are for staying alive. If you constantly change shape and flee the truth, you catch in the net you wove in your own current.",
        "Laguz is not ice and it is not a pond one owns. Its balanced state is intuition, empathy, dream awareness, going around the obstacle. Its excess is illusion, emotional blackmail, drowning in one’s own feeling, melancholy. Its face of lack is spiritual drought, creative blockage, feeling suppressed until it hardens. Depth belongs to the one who knows the way out.",
      ],
      sv: [
        "Laguz är inte vattnet man dricker. Den är nyckeln till det osedda, till det omedvetna, till drömmen och till det universella minnet. Är Fehu bränslet för det synliga är Laguz intuitionens ocean. Den formar, den föder, den tecknar in i minnet. På det gamla språket betyder den sjö och vatten. Den är inte en grund damm med en svan på.",
        "Den är ett vidsträckt vatten vars botten inte syns, som döljer både uråldrig visdom och det mörka odjuret. Livets vagga, och också drunkningens centrum. Man luras inte av speglingen på ytan. Man dyker. Vatten besegras inte. Man krigar inte med vatten. Byggs ett sunt skepp, det vill säga förnuft och vilja, bär vattnet dig till den horisont du vill. Inte en fiende. En vägvisare vars ström litas på.",
        "Vattnets fara är att det tar kärlets form, och att det som hålls hårt flyr mellan fingrarna. Flexibilitet och att gömma sig är för att förbli vid liv. Byter du ständigt form och flyr sanningen fastnar du i nätet du vävde i din egen ström.",
        "Laguz är inte is och inte en damm man äger. Dess balanserade tillstånd är intuition, empati, drömmedvetenhet, att gå runt hindret. Dess övermått är illusion, känslomässig utpressning, att drunkna i sin egen känsla, melankoli. Dess ansikte av brist är andlig torka, skapande blockering, känsla undertryckt tills den hårdnar. Djupet tillhör den som känner vägen ut.",
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
        "Ingwaz kutsal izolasyondur. Potansiyelin içe dönmesi, kuluçka dönemidir. Toprağın metrelerce altına ekilen tohumdur. Karanlıktadır, yalnızdır, dış dünyadan kopuktur. Ölü değildir. Dışarıdan hareket görünmez. Sert kabuğun içinde sancılı bir dönüşüm vardır.",
        "Tırtılın kelebeğe dönmek için kendini hapsettiği kozadır. Biriktirilen enerji, gürültüden ve müdahaleden korunarak doğum anına kadar saklanır. Eylem değildir. Eyleme en güçlü hazırlıktır. Meraklı göz kuluçkayı bozar. Örtünün altına bakan, işi kör eder. Büyüme gizlenerek olur.",
        "Mezar gibi görünen yer burada rahimdir. Bitti sanılan fikir toprağın altına, genetik hafızaya çekilmiş olabilir. Orada gelecekteki hasadı beslemeye devam eder. Durağan ve bekleyen bir enerjidir. Hız ve gösteriş isteyen yere uymaz. Süreç bitince koza bilinçle kapatılır. Yoksa koruma tabuta döner.",
        "Ingwaz eldeki para değildir ve ışığa çıkmış bitki değildir. Dengeli hâli sağlıklı kuluçka, depolanmış enerji, dış kaosun değmemesidir. Aşırısı kozadan hiç çıkmamaktır: “henüz hazır değilim,” tohumun altında çürümesi, izolasyonun hapishaneye dönmesi. Yoksun yüzü sabırsızlıktır. Toprağı eşeleyip tohumu öldürmek, ham üretim, enerjinin bir türlü toplanamaması.",
      ],
      en: [
        "Ingwaz is sacred isolation. Potential turned inward, the period of incubation. It is the seed sown meters under the soil. It is in the dark, alone, cut off from the outer world. It is not dead. No movement is seen from outside. Inside the hard shell there is a painful transformation.",
        "It is the cocoon in which the caterpillar imprisons itself in order to become the butterfly. The energy that was stored is kept, protected from noise and from interference, until the moment of birth. It is not action. It is the strongest preparation for action. A curious eye spoils the incubation. Whoever looks under the cover blinds the work. Growth happens by being hidden.",
        "The place that looks like a grave is a womb here. An idea thought finished may have been drawn under the soil, into genetic memory. There it goes on feeding the future harvest. It is a still and waiting energy. It does not suit a place that wants speed and display. When the process ends, the cocoon is closed with awareness. Otherwise protection turns into a coffin.",
        "Ingwaz is not the coin in the hand and it is not the plant already out in the light. Its balanced state is a healthy incubation, stored energy, the outer chaos not touching it. Its excess is never leaving the cocoon: “I am not ready yet,” the seed rotting underneath, isolation turned into a prison. Its face of lack is impatience. Digging the soil and killing the seed, raw production, energy that cannot be gathered.",
      ],
      sv: [
        "Ingwaz är helig isolering. Potential vänd inåt, ruvningens tid. Den är fröet sått metrar under jorden. Den är i mörkret, ensam, avskuren från den yttre världen. Den är inte död. Ingen rörelse syns utifrån. Inuti det hårda skalet finns en smärtsam förvandling.",
        "Den är kokongen i vilken larven fängslar sig för att bli fjärilen. Energin som lagrades hålls, skyddad från buller och från ingrepp, till födelsens stund. Den är inte handling. Den är den starkaste förberedelsen för handling. Ett nyfiket öga fördärvar ruvningen. Den som ser under täcket förblindar arbetet. Växt sker genom att vara dold.",
        "Platsen som ser ut som en grav är en livmoder här. En idé trodd avslutad kan ha dragits under jorden, in i det genetiska minnet. Där fortsätter den att föda den kommande skörden. Den är en stilla och väntande energi. Den passar inte en plats som vill ha hastighet och uppvisning. När processen tar slut stängs kokongen med medvetenhet. Annars blir skydd en kista.",
        "Ingwaz är inte myntet i handen och inte växten som redan är ute i ljuset. Dess balanserade tillstånd är en sund ruvning, lagrad energi, det yttre kaoset som inte rör den. Dess övermått är att aldrig lämna kokongen: ”jag är inte redo ännu,” fröet som ruttnar under, isolering vänd till ett fängelse. Dess ansikte av brist är otålighet. Att gräva jorden och döda fröet, rå produktion, energi som inte kan samlas.",
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
        "Dagaz gündüz, şafak ve en derin anlamıyla uyanıştır. Gecenin en karanlık anının hemen ardından, güneşin ufku yardığı ilk keskin ışıktır. Arafta kalmak değildir. Gece ile gündüzün, bilinç ile bilinçdışının birleşip daha üstün bir gerçeği doğurmasıdır. Körlüğün bitişi, hakikatin çıplak görünmesidir.",
        "Kademeli süreç değildir. Anlık idrak patlamasıdır. Karanlıkta kaybolana fener vermez. Güneşi doğurur. Işık gelince saklanacak yer kalmaz. Gece korkutucu görünen gölge, ışık vurunca daldır. Bilinmeyenin korkusu, görmenin cesaretiyle düşer.",
        "Uyanıklıktır. İllüzyonun, yalanın ve kendini kandırmanın bittiği noktadır. Kimse yalan söyleyemez. En başta ego. Dengeli hâli “evreka”dır: zihin sisi dağılır, olayın içyüzü bir anda kavranır. Zıt kutuplar uzlaşır, yeni bir sentez çıkar.",
        "Dagaz yılın hasadı değildir ve kriz değildir. Jera olgunlaştırır. Dagaz eşiği yarar. Aşırısı ışık zehirlenmesidir: uykusuzluk, mani, her şeyin arkasında gizli anlam arayıp gerçeklikten kopmak. Yoksun yüzü beyin sisi, cehalet, “çıkış yok” inancıdır. Yüzleşmeye hazır değilsen bu ışık kör eder. Gün, karanlığı inkâr ederek değil, onu bitirerek başlar.",
      ],
      en: [
        "Dagaz is day, dawn, and in its deepest sense awakening. It is the first sharp light, right after the darkest moment of the night, when the sun splits the horizon. It is not remaining in between. It is night and day, consciousness and the unconscious, joining and giving birth to a higher truth. The end of blindness, truth seen bare.",
        "It is not a gradual process. It is an instant burst of understanding. It does not give a lantern to the one lost in the dark. It births the sun. When the light comes, no place remains to hide. The shadow that looked frightening at night is a branch when the light strikes. The fear of the unknown falls by the courage of seeing.",
        "It is wakefulness. The point where illusion, the lie, and self-deception end. No one can lie. The ego first of all. Its balanced state is “eureka”: the mental fog breaks, the inside of the event is grasped all at once. Opposite poles reconcile. A new synthesis comes out.",
        "Dagaz is not the year’s harvest and it is not a crisis. Jera ripens. Dagaz splits the threshold. Its excess is light-poisoning: sleeplessness, mania, searching a hidden meaning behind everything and breaking from reality. Its face of lack is brain fog, ignorance, the belief “there is no way out.” If you are not ready to face it, this light blinds. Day begins not by denying the dark, but by ending it.",
      ],
      sv: [
        "Dagaz är dag, gryning och i sin djupaste mening uppvaknande. Den är det första skarpa ljuset, strax efter nattens mörkaste stund, när solen spräcker horisonten. Den är inte att bli kvar däremellan. Den är natt och dag, medvetande och det omedvetna, som förenas och föder en högre sanning. Blindhetens slut, sanningen sedd naken.",
        "Den är inte en gradvis process. Den är en ögonblicklig bristning av förståelse. Den ger ingen lykta åt den som är vilse i mörkret. Den föder solen. När ljuset kommer finns ingen plats kvar att gömma sig. Skuggan som såg skrämmande ut om natten är en gren när ljuset slår. Rädslan för det okända faller genom seendets mod.",
        "Den är vakenhet. Punkten där illusion, lögn och självbedrägeri tar slut. Ingen kan ljuga. Egot först av allt. Dess balanserade tillstånd är ”heureka”: den mentala dimman bryts, händelsens insida grips på en gång. Motsatta poler försonas. En ny syntes kommer ut.",
        "Dagaz är inte årets skörd och inte en kris. Jera mognar. Dagaz spräcker tröskeln. Dess övermått är ljusförgiftning: sömnlöshet, mani, att söka en dold mening bakom allt och bryta från verkligheten. Dess ansikte av brist är hjärndimma, okunnighet, tron ”det finns ingen väg ut.” Är du inte redo att möta det förblindar detta ljus. Dagen börjar inte genom att förneka mörkret, utan genom att avsluta det.",
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
        "Othala tapu, ev ya da taşınmaz mülk değildir. Kutsal yuva ve mirastır. Fehu hiç durmayan, akan, harcanması gereken enerjidir. Othala o enerjinin durulduğu, biriktiği, kök saldığı havuzdur. Yolculuk kıvılcımla başlar. Sıcak ocakta tamamlanır. Göçebe olan fethetmek için çıkar. Yerleşik olan fethettiği toprağa sınır çizer ve orayı yuva yapar.",
        "Yalnızca maddi ev değil, ruhun yuvasıdır. Atalardan gelen şifre, yetenek, kan hafızası ve ailenin şansı buradadır. İçerisi yasa, düzen ve güvenliğin olduğu yerdir. Dışarısı kaosdur. Sınırı olmayan ev, ev değildir. Aynı zamanda yalnızca içine doğulan biyolojik aile değildir. Aynı yolda yürüyen seçilmiş kabile de bu yuvadır.",
        "En büyük miras başkasından kalan değildir. Kendi özünden sahip çıkılandır. Kök toprağa tutunur. Zihin sınırın içinde hapsolmaz. Dışarıdaki sırrı öğrenip eve taşır. Evde saklanarak ev korunmaz.",
        "Othala satın alınmış mülk değildir ve her ata bilge değildir. Dengeli hâli derin güven, sağlam temel, aidiyet, savrulmamaktır. Aşırısı geçmişe zehirli saplantıdır: eski güne kapanmak, yeniliğe duvar örmek, güvenli alanda boğulmak. Yoksun yüzü sürgündür. “Hiçbir yere ait değilim,” kopmuş bağ, köksüzlük. Burada kal emri, uzaklaşması istenen şeye verilmez.",
      ],
      en: [
        "Othala is not a deed, a house, or immovable property. It is the sacred home and the inheritance. Fehu is the energy that never stops, that flows, that must be spent. Othala is the pool where that energy settles, gathers, and takes root. The journey begins with the spark. It is completed at the warm hearth. The nomad sets out in order to conquer. The settled one draws a limit on the ground that was conquered and makes it a home.",
        "Not only a material house. The home of the spirit. The cipher that comes from the ancestors, the talent, the memory of the blood, and the family’s luck sit here. The inside is the place of law, order, and safety. The outside is chaos. A house without a limit is not a house. It is also not only the biological family one was born into. The chosen tribe that walks the same road is this home too.",
        "The greatest inheritance is not what remains from someone else. It is what is claimed from one’s own essence. The root holds the soil. The mind is not imprisoned inside the limit. It learns the secret outside and carries it home. A house is not protected by hiding in the house.",
        "Othala is not property that was bought, and not every ancestor was wise. Its balanced state is a deep safety, a sound foundation, belonging, not being thrown about. Its excess is a poisonous obsession with the past: closing onto the old day, walling off the new, drowning in the safe field. Its face of lack is exile. “I belong nowhere,” a broken bond, rootlessness. The order to stay here is not given to a thing one wants to leave.",
      ],
      sv: [
        "Othala är inte ett skötebrev, ett hus eller fast egendom. Den är det heliga hemmet och arvet. Fehu är energin som aldrig stannar, som flyter, som måste förbrukas. Othala är dammen där den energin stillnar, samlas och slår rot. Färden börjar med gnistan. Den fullbordas vid den varma härden. Nomaden ger sig av för att erövra. Den bofaste drar en gräns på marken som erövrades och gör den till ett hem.",
        "Inte bara ett materiellt hus. Andens hem. Chiffret som kommer från förfäderna, talangen, blodets minne och familjens tur sitter här. Insidan är platsen för lag, ordning och trygghet. Utsidan är kaos. Ett hus utan gräns är inte ett hus. Det är heller inte bara den biologiska familj man föddes in i. Den valda stammen som går samma väg är också detta hem.",
        "Det största arvet är inte det som blir kvar från någon annan. Det är det som tas i anspråk ur ens egen essens. Roten håller jorden. Sinnet fängslas inte inuti gränsen. Det lär hemligheten utanför och bär den hem. Ett hus skyddas inte genom att gömma sig i huset.",
        "Othala är inte egendom som köpts, och inte varje förfader var vis. Dess balanserade tillstånd är en djup trygghet, en sund grund, tillhörighet, att inte slungas. Dess övermått är en giftig besatthet av det förflutna: att sluta sig kring den gamla dagen, att mura av det nya, att drunkna i det trygga fältet. Dess ansikte av brist är landsflykt. ”Jag hör ingenstans,” ett brutet band, rotlöshet. Ordern att stanna här ges inte åt en sak man vill lämna.",
      ],
    },
  },
];

export function runeBySlug(slug: string): Rune | undefined {
  return runes.find((rune) => rune.slug === slug);
}
