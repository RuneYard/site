import type { Lang } from "@/lib/copy";

export type HavamalEntry = {
  stanza: number;
  birthSpan: Record<Lang, string>;
  quote: Record<Lang, string>;
};

export const havamalBySlug: Record<string, HavamalEntry> = {
  fehu: {
    stanza: 76,
    birthSpan: {
      tr: "29 Haziran – 13 Temmuz",
      en: "June 29 – July 13",
      sv: "29 juni – 13 juli",
    },
    quote: {
      tr: "Sığırlar ölür, hısımlar ölür, insan kendisi de ölür; fakat iyi bir ad asla ölmez, onu kazanan kişi için.",
      en: "Cattle die, kinsmen die, all men themselves must die; but the fair fame of a noble name shall never die.",
      sv: "Fä dör, fränder dör, själv dör du likaledes; ett vet jag som aldrig dör: domen över död man.",
    },
  },
  uruz: {
    stanza: 68,
    birthSpan: {
      tr: "14 Temmuz – 28 Temmuz",
      en: "July 14 – July 28",
      sv: "14 juli – 28 juli",
    },
    quote: {
      tr: "Ateş insan için en büyük nimettir ve güneşin ışığı; ve eğer sağlığı yerindeyse insan, lekesiz bir ömür sürebilir.",
      en: "Fire is best for the sons of men, and the sight of the sun; his health also, if a man can keep it, to live with no fault.",
      sv: "Eld är bäst för människors barn och solens åsyn, god hälsa därtill, om man den äger, att leva utan skam.",
    },
  },
  thurisaz: {
    stanza: 1,
    birthSpan: {
      tr: "29 Temmuz – 12 Ağustos",
      en: "July 29 – August 12",
      sv: "29 juli – 12 augusti",
    },
    quote: {
      tr: "Girdiğin her kapıda, etrafına dikkatle bakınmalısın; çünkü köşelerde düşmanların oturmadığından asla emin olamazsın.",
      en: "At every door-post, before you enter, look around and gaze; for you cannot know where enemies sit ahead in the hall.",
      sv: "Vid varje dörrpost skall man skåda sig om och spana noga; ty ovisst är att veta var fiender sitter i stugan.",
    },
  },
  ansuz: {
    stanza: 27,
    birthSpan: {
      tr: "13 Ağustos – 28 Ağustos",
      en: "August 13 – August 28",
      sv: "13 augusti – 28 augusti",
    },
    quote: {
      tr: "Akılsız adam bilge kişilerin arasında en iyisi sussun; ne kadar az konuşursa o kadar az anlaşılır aklının noksanlığı.",
      en: "A foolish man among the wise does best to hold his tongue; none knows that he knows naught, unless he speaks too much.",
      sv: "Den vettlöse mannen gör bäst i att tiga bland folk; ingen vet vad han intet vet, om han ej talar för mycket.",
    },
  },
  raidho: {
    stanza: 47,
    birthSpan: {
      tr: "29 Ağustos – 12 Eylül",
      en: "August 29 – September 12",
      sv: "29 augusti – 12 september",
    },
    quote: {
      tr: "Gençtim, yalnız yollara düşmüştüm; kayboldum sandım. Bir yolcuya rastladığımda kendimi zengin hissettim: İnsan insanla insandır.",
      en: "Young was I once, I walked alone, and bewildered seemed the way; but I found a companion, and rich I felt: man is the joy of man.",
      sv: "Ung var jag fordom, gick ensam omkring, då villades jag på vägen; rik tyckte jag mig då en annan jag fann: man är mans gamman.",
    },
  },
  kenaz: {
    stanza: 57,
    birthSpan: {
      tr: "13 Eylül – 27 Eylül",
      en: "September 13 – September 27",
      sv: "13 september – 27 september",
    },
    quote: {
      tr: "Kütük kütükten alev alır, köz közle tutuşur; insan insanla konuşarak aydınlanır, içine kapanan körelir kalır.",
      en: "Brand kindles from brand until it burns away, flame is lit from flame; man becomes known to man by speech, and dull he is who hides.",
      sv: "Brand brinner av brand tills den brunnit ut, flamma tänds av flamma; känd blir man av man genom tal, men fördummas om han döljer sig.",
    },
  },
  gebo: {
    stanza: 39,
    birthSpan: {
      tr: "28 Eylül – 12 Ekim",
      en: "September 28 – October 12",
      sv: "28 september – 12 oktober",
    },
    quote: {
      tr: "Ne kadar cömert olursa olsun, ikramı kabul etmeyen insan görmedim; ne kadar zengin olursa olsun, karşılık istemeyen kimse bulamadım.",
      en: "I never found a man so generous and free to give, that he would spurn a gift; nor of his wealth so lavish, that a recompense was unwelcome.",
      sv: "Jag fann ingen så givmild att han försmådde gåva, eller så frikostig att han ej gärna tog emot gengäld.",
    },
  },
  wunjo: {
    stanza: 34,
    birthSpan: {
      tr: "13 Ekim – 27 Ekim",
      en: "October 13 – October 27",
      sv: "13 oktober – 27 oktober",
    },
    quote: {
      tr: "Kötü bir dosta giden yol dolambaçlıdır, kapısı yakın olsa bile; sadık dostun evi uzak da olsa, dosdoğrudur giden yol.",
      en: "Crooked is the path to an untrue friend, though his dwelling lie near the way; but straight is the road to a trusted friend, though far away he fare.",
      sv: "Krokig omväg är till ovännen, om han än bor vid allmän väg; men till god vän ligger rak led, om han än långt borta är.",
    },
  },
  hagalaz: {
    stanza: 56,
    birthSpan: {
      tr: "28 Ekim – 12 Kasım",
      en: "October 28 – November 12",
      sv: "28 oktober – 12 november",
    },
    quote: {
      tr: "İnsan aklını ne çok ne de az kullansın, ölçülü olsun bilgisi; kaderini önceden bilmeyen kişi, kederden en uzak yaşayandır.",
      en: "Middling-wise should every man be, never too wise or cunning; those who know not their fate before them have sorrow-free hearts.",
      sv: "Medelvis vare envar, icke förvis; ty sorglösast lever det hjärtat som ej vet sitt öde förut.",
    },
  },
  nauthiz: {
    stanza: 71,
    birthSpan: {
      tr: "13 Kasım – 27 Kasım",
      en: "November 13 – November 27",
      sv: "13 november – 27 november",
    },
    quote: {
      tr: "Topal at biner, elsiz sürü güder, sağır cenk eder ve yararlıdır; kör olmak bile mezarda yatmaktan iyidir: Bir ölü hiçbir şeye yaramaz.",
      en: "The lame can ride a horse, the handless drive herds, the deaf can fight and do well; a blind man is better than one burned on the pyre: the dead can do nothing.",
      sv: "Den halte rider häst, den handlöse vallar hjord, den döve kämpar och duger; blind är bättre än bränd på bål: ingen har gagn av den döde.",
    },
  },
  isa: {
    stanza: 54,
    birthSpan: {
      tr: "28 Kasım – 12 Aralık",
      en: "November 28 – December 12",
      sv: "28 november – 12 december",
    },
    quote: {
      tr: "Kendi aklını bilgece ölç, telaşa kapılma; durgun suyun derinliğini görmeden nehir yatağına aceleyle basma.",
      en: "Keep your mind steady and still; step not onto the ice of the frozen river before you know its depth.",
      sv: "Håll ditt sinne stilla och fast; stig ej ut på flodens is förrän du känner dess djup.",
    },
  },
  jera: {
    stanza: 58,
    birthSpan: {
      tr: "13 Aralık – 27 Aralık",
      en: "December 13 – December 27",
      sv: "13 december – 27 december",
    },
    quote: {
      tr: "Erken kalkan hem zenginliği hem başkasının emeğini devralır; uyuklayan kurt av bulamaz, uyuyan adam da zafere ulaşamaz.",
      en: "Early should he rise who seeks another's life or wealth; the slumbering wolf gets not the meat, nor the sleeping man victory.",
      sv: "Tidigt skall uppstå den som trår efter annans liv och gods; liggande varg får intet lår, ej sovande man seger.",
    },
  },
  eihwaz: {
    stanza: 138,
    birthSpan: {
      tr: "28 Aralık – 12 Ocak",
      en: "December 28 – January 12",
      sv: "28 december – 12 januari",
    },
    quote: {
      tr: "Bilirim ki rüzgarlı ağaçta dokuz uzun gece asılı kaldım; mızrakla yaralanmış ve Odin'e adanmıştım: Kendimden kendime sunulmuş olarak.",
      en: "I know that I hung on that wind-swept tree for nine whole nights; wounded with a spear, dedicated to Odin: myself to my own self.",
      sv: "Jag vet att jag hängde i det vindpinade trädet i nio hela nätter; sårad av spjut, vigd åt Odin: själv åt mig själv.",
    },
  },
  perthro: {
    stanza: 84,
    birthSpan: {
      tr: "13 Ocak – 27 Ocak",
      en: "January 13 – January 27",
      sv: "13 januari – 27 januari",
    },
    quote: {
      tr: "Bir kızın fısıltısına ya da bir kadının sözüne aldanma; çünkü onların kalbi dönen bir çark gibi yapılmıştır, kararsızlık oturur göğüslerinde.",
      en: "In the words of a maiden let no man trust, nor in what a woman says; for on a spinning wheel their hearts were fashioned, and fickle was the breast within.",
      sv: "På en mös ord skall ingen tro, ej heller på vad en kvinna mäter; ty på svängande hjul skapades deras hjärtan, och vankelmod i deras bröst.",
    },
  },
  algiz: {
    stanza: 38,
    birthSpan: {
      tr: "28 Ocak – 12 Şubat",
      en: "January 28 – February 12",
      sv: "28 januari – 12 februari",
    },
    quote: {
      tr: "Kırlarda açık alanda yürürken, mızrağından bir adım bile uzağa ayrılma; çünkü kimse bilmez yol üstünde bir mızrağa ne an ihtiyaç duyulacağını.",
      en: "From his weapons on the open field a man should not move a foot; for uncertainty whispers when on the road a man may need his spear.",
      sv: "Från sina vapen på öppna fältet skall ingen vika ett steg; ty ovisst är att veta när på vägen man behöver sitt spjut.",
    },
  },
  sowilo: {
    stanza: 70,
    birthSpan: {
      tr: "13 Şubat – 26 Şubat",
      en: "February 13 – February 26",
      sv: "13 februari – 26 februari",
    },
    quote: {
      tr: "Canlı olmak daima ölü olmaktan üstündür; yaşayan adam evinde daima bir ateş yakabilir ve güneşin sıcaklığını hisseder.",
      en: "Better is it to live than to be lifeless; the living man always finds a flame in the hall, and the sun shines warmth upon him.",
      sv: "Bättre är leva än att livlös vara; levande man får alltid ko, och ser elden brinna i stugan.",
    },
  },
  tiwaz: {
    stanza: 77,
    birthSpan: {
      tr: "27 Şubat – 13 Mart",
      en: "February 27 – March 13",
      sv: "27 februari – 13 mars",
    },
    quote: {
      tr: "Sığırlar ölür, hısımlar ölür, insan kendisi de ölür; fakat bir şey bilirim ki asla ölmez: Şerefle yaşayanın ardında bıraktığı adil hüküm.",
      en: "Cattle die, kinsmen die, you yourself will die; but one thing I know that never dies: the fair doom of deeds well done.",
      sv: "Fä dör, fränder dör, själv dör du likaledes; ett vet jag som aldrig dör: domen över gärningar gjorda.",
    },
  },
  berkano: {
    stanza: 137,
    birthSpan: {
      tr: "14 Mart – 29 Mart",
      en: "March 14 – March 29",
      sv: "14 mars – 29 mars",
    },
    quote: {
      tr: "Nerede kötülük görürsen onu kötülük diye an, düşmanına huzur verme; fakat taze bir filiz yeşerdiğinde, onu sevgi ve şefkatle kucakla.",
      en: "Where you see evil, call it evil, and give your foes no peace; but where a fresh sprout greens, nurture it with care and warmth.",
      sv: "Där du känner ondska, kalla det ondska, och giv ej fienden fred; men där en ny grodd grönskar, vårda den med värme.",
    },
  },
  ehwaz: {
    stanza: 44,
    birthSpan: {
      tr: "30 Mart – 13 Nisan",
      en: "March 30 – April 13",
      sv: "30 mars – 13 april",
    },
    quote: {
      tr: "Güvendiğin bir dostun varsa ve onun sadakatini istersen; ruhunu onun ruhuyla paylaş, ona hediyeler ver ve onu sık ziyaret et.",
      en: "If you have a friend whom you trust well, and wish to gain his good; share your mind with him, exchange gifts, and visit him often.",
      sv: "Vet du en vän som du väl tror och vill av honom gott få; blanda ditt mod med hans och byt gåvor, far ofta att finna honom.",
    },
  },
  mannaz: {
    stanza: 41,
    birthSpan: {
      tr: "14 Nisan – 28 Nisan",
      en: "April 14 – April 28",
      sv: "14 april – 28 april",
    },
    quote: {
      tr: "Dostlar birbirini cömertlikle sevindirmeli; karşılıklı hediyelerle dostluk taze kalır, eğer kader onları ayırmazsa.",
      en: "With weapons and garments should friends be glad, each knows it well in himself; mutual givers remain the best friends, if luck holds out between them.",
      sv: "Med vapen och kläder skall vänner glädjas, det ser man på dem bäst; ömsesidiga givare är längst vänner, om det vill hålla ihop.",
    },
  },
  laguz: {
    stanza: 159,
    birthSpan: {
      tr: "29 Nisan – 13 Mayıs",
      en: "April 29 – May 13",
      sv: "29 april – 13 maj",
    },
    quote: {
      tr: "Bilgelerin bildiğini benden saklayamaz nehirler ve derin denizler; suyun akışında kaderin sırları gizlidir.",
      en: "The secret wisdom of sages cannot be hidden from me by rivers or deep seas; in the flowing tide lie the whispered secrets of fate.",
      sv: "Visdomens hemlighet döljes ej för mig av floder eller djupa hav; i vattnets flöde vilar ödets fagra viskningar.",
    },
  },
  ingwaz: {
    stanza: 36,
    birthSpan: {
      tr: "14 Mayıs – 28 Mayıs",
      en: "May 14 – May 28",
      sv: "14 maj – 28 maj",
    },
    quote: {
      tr: "Küçük de olsa insanın kendi evi olması gibisi yoktur; sazdan bir çatın ve iki keçin olsa bile, dilenmekten bin kat iyidir.",
      en: "Better a homestead of one's own, however small; no man is but somebody at home; though two goats he own and a thatched roof, 'tis better than begging.",
      sv: "Eget bo är bäst, om än litet; hemma är envar herre; har man två getter och ett torkat tak, är det bättre än tigga.",
    },
  },
  othala: {
    stanza: 72,
    birthSpan: {
      tr: "29 Mayıs – 13 Haziran",
      en: "May 29 – June 13",
      sv: "29 maj – 13 juni",
    },
    quote: {
      tr: "Kişinin ardından doğmuş bir oğlu olması ne güzeldir; çünkü mezar taşları nadiren dikilir babasının mirasını sahiplenen bir evlat yoksa.",
      en: "Praise is a son born to a man after he is gone; seldom do memorial stones stand by the way unless raised by a kin to kin.",
      sv: "Gott är att äga en son, om än sent född efter faders bortgång; sällan står bautastenar vid vägen om ej frände reste dem efter frände.",
    },
  },
  dagaz: {
    stanza: 81,
    birthSpan: {
      tr: "14 Haziran – 28 Haziran",
      en: "June 14 – June 28",
      sv: "14 juni – 28 juni",
    },
    quote: {
      tr: "Akşam olunca günü öv, ateşi yandığında; kılıcı savaştan sonra, buzu geçildiğinde ve birayı içildiğinde öv.",
      en: "At evening praise the day, when it is burned praise the fire; praise the sword when tested, the ice when crossed, and the ale when drunk.",
      sv: "Prisa dagen om aftonen, elden när den brunnit; svärdet när det prövats, isen när man gått över den, och ölet när det druckits.",
    },
  },
};
