import type { Lang } from "@/lib/copy";

const note = {
  tr: {
    title: "10 Ekim Terazi Yeniayı",
    subtitle: "17 derecede karmik denge arayışı",
    overview:
      "10 Ekim 2026 tarihinde, Türkiye saatiyle 18:50'de Terazi burcunun 17. derecesinde güçlü bir Yeni Ay gerçekleşiyor. Terazi teması; ilişkiler, ortaklıklar, hukuk ve hakkaniyet demektir. Ancak gökyüzünde yöneticimiz Venüs Akrep burcunda retro hareketini sürdürüyor ve Mars ile sert bir kare açı (90°) oluşturuyor. Bu demektir ki; önümüzdeki süreçte \"yeni bir sayfa açmak\" ancak geçmişten gelen krizleri çözdüğümüzde, gizli kalmış toksik dinamiklerle yüzleştiğimizde ve alma-verme dengesini hakkıyla kurduğumuzda mümkün olacak.",
    ask: "Gökyüzü bizden ne istiyor?",
    points: [
      {
        lead: "Alma-verme dengesini kurun",
        text: "Kendi istekleriniz ile karşınızdakinin beklentileri arasında kesin ve net sınırlar çizin. Bu dönemde yapılan \"kendinden ödün verme\" hali sonradan büyük krizlere dönüşebilir.",
      },
      {
        lead: "Stratejik ve gözlemci kalın",
        text: "Venüs-Mars karesi ilişkilerde sabırsızlık, kıskançlık ve ego savaşları yaratabilir. Fevri kararlar almak, ani kopuşlar yaşamak yerine olayları dışarıdan gözlemlemek en doğrusudur.",
      },
      {
        lead: "Geçmişle hesaplaşın",
        text: "Venüs retrosu gölgesindeki bu yeniay; yarım kalmış aşkları, ertelenmiş yüzleşmeleri ve \"Acaba hakkım yendi mi?\" dedirten konuları tekrar masaya getirecek. Eski dosyaları kapatmadan yeni bir başlangıca imza atmayın.",
      },
    ],
    signs: [
      {
        name: "Koç yükselen",
        text: "Tam karşıt burcunuzda (7. ev) gerçekleşen bu yeniay, evlilik, ortaklık ve açık düşmanlıklar alanını doğrudan aydınlatıyor. Alma-verme dengenizi en sert sorguladığınız dönemdesiniz. Yeni bir ortaklık veya ciddiyet kararı gündeme gelebilir ancak Venüs retrosu geçmişteki toksik partnerleri de kapınıza getirebilir; sınırlarınızı koruyun.",
      },
      {
        name: "Boğa yükselen",
        text: "6. evinizde (rutinler, çalışma ortamı ve sağlık) gerçekleşen yeniay, iş hayatınızdaki düzeni ve ast-üst ilişkilerinizi yeniden yapılandırmanızı istiyor. Mars karesi nedeniyle iş yerinde çıkabilecek manipülatif gerginliklere dikkat. Sağlığınızda ise bel, böbrek ve üreme organları hassasiyetlerine karşı tedbirli olun.",
      },
      {
        name: "İkizler yükselen",
        text: "5. eviniz (aşk, çocuklar, yaratıcılık) canlanıyor. Yeni bir romantik etkileşim veya sanatsal bir projeye başlama arzunuz oldukça yüksek. Ancak Venüs retrosu, eski aşkları ve yarım kalmış karmik tutkuları tekrar sahneye taşıyarak kafanızı karıştırabilir. Bu dönemde flörtlerde illüzyonlara kapılmamaya özen gösterin.",
      },
      {
        name: "Yengeç yükselen",
        text: "4. ev (ev, yuva ve kökler) temaları devrede. Aile içi meselelerde, miras veya gayrimenkul konularında ciddi bir hak arayışında olabilirsiniz. Taşınma, ev alma veya evde dekorasyon gibi konularda yeni başlangıçlar yapmak isteseniz de, retro bitimine (Kasım ortası) kadar majör imzaları atmaktan kaçınmalısınız.",
      },
      {
        name: "Aslan yükselen",
        text: "3. evinizdeki bu yeniay; yakın çevre, kardeşler, ticaret ve anlaşmalar alanında bir yenilenme vaat ediyor. Yeni sözleşmeler gündeme gelebilir veya ticari bir atılım yapmak isteyebilirsiniz. Ancak iletişimde kullanacağınız kelimeler kriz yaratabilir; diplomatik ve stratejik bir dil kullanmak sizi ipten alacaktır.",
      },
      {
        name: "Başak yükselen",
        text: "2. ev (finans ve özdeğer) alanınızda gerçekleşen Terazi yeniayı, para kazanma şekliniz ve maddi kaynaklarınızla ilgili yeni tohumlar ekiyor. İşin içinde Venüs retrosu olduğu için \"Ben bu kazancı/değeri hak ediyor muyum?\" sorgulamasına girebilirsiniz. Lüks ve dürtüsel harcamalardan kesinlikle uzak durmanız gereken bir evredesiniz.",
      },
      {
        name: "Terazi yükselen",
        text: "Sizin yeniayınız. 1. evinizde 17 derecede gerçekleşen bu etki, bedensel görünümünüz, ilişkilerdeki duruşunuz ve hayat mottonuzla ilgili büyük bir reset atma zamanı olduğunu gösteriyor. Yönetici gezegeniniz Venüs geri harekette olduğu için radikal estetik operasyonlardan kaçınmalı, ilişkilerdeki kendi payınızı derinlemesine analiz etmelisiniz.",
      },
      {
        name: "Akrep yükselen",
        text: "12. evinizde (bilinçaltı ve inziva) gerçekleşen bu yeniay, tam anlamıyla içsel bir kuluçka ve ruhsal arınma dönemi. Venüs sizin burcunuzda gerilerken, arkanızdan dönen gizli gündemleri, saklanan sırları ve kendi kendinize yaptığınız sabotajları fark edeceksiniz. Terapiye başlamak ve bilinçaltı çalışmaları için yılın en verimli zamanı.",
      },
      {
        name: "Yay yükselen",
        text: "11. evinizdeki yeniay sosyal çevre, dernekler ve geleceğe dair vizyonlarınızda karmik bir tazelenme getiriyor. Sizi aşağı çeken toksik arkadaş gruplarından uzaklaşıp, daha vizyoner insanlarla tanışabilirsiniz. Ancak geçmişte aranızın bozulduğu dostlukların veya yarım kalmış ekip projelerinin tekrar gündeme gelmesi olasıdır.",
      },
      {
        name: "Oğlak yükselen",
        text: "Kariyer ve statü alanınız (10. ev) bu yeniayla şekilleniyor. İş hayatınızda adaletsiz bulduğunuz konuları üst yönetimle diplomasi çerçevesinde çözme fırsatınız var. Toplum önündeki statünüzü (evlilik kararı, istifa veya terfi) yenilemek için ciddi adımlar atabilirsiniz ancak güç savaşlarına girmekten kaçınmalısınız.",
      },
      {
        name: "Kova yükselen",
        text: "9. ev (yurtdışı, inançlar, yüksek eğitim) temaları aktif. Hayata bakış açınızı dengeleyen yepyeni bir akademik kariyere, hukuki bir sürece veya yurtdışı bağlantılı bir projeye adım atabilirsiniz. Seyahat planları, vize veya pasaport gibi konularda geçmişten gelen hukuki ve resmi pürüzleri çözüme kavuşturmak için ideal bir zaman.",
      },
      {
        name: "Balık yükselen",
        text: "8. ev (ortak paralar, borçlar, krizler ve ezoterizm) alanında gerçekleşen bu yeniay, dönüşümün ayak sesleri. Miras, nafaka, kredi yapılandırması veya eşin finansal durumu gibi konularda adaletin sağlandığını görebilirsiniz. Psikolojik boyutta derin korkularınızla yüzleşip küllerinizden yeniden doğacağınız çok güçlü bir etki altındasınız.",
      },
    ],
  },
  en: {
    title: "10 October Libra new moon",
    subtitle: "the search for karmic balance at 17 degrees",
    overview:
      "On 10 October 2026, at 18:50 Turkey time, a strong new moon takes place at the 17th degree of Libra. The Libra theme means relationships, partnerships, law, and fairness. Yet in the sky our ruler, Venus, is continuing its retrograde motion in Scorpio and forms a hard square (90°) with Mars. This means that, in the period ahead, “opening a new page” will be possible only when we have resolved the crises that come from the past, when we have faced the toxic dynamics that stayed hidden, and when we have set the balance of give and take as it ought to be.",
    ask: "What does the sky want from us?",
    points: [
      {
        lead: "Set the balance of give and take",
        text: "Draw definite and clear boundaries between your own wishes and the expectations of the person opposite you. The state of “giving yourself up,” practiced in this period, can later turn into large crises.",
      },
      {
        lead: "Stay strategic and observant",
        text: "The Venus–Mars square can create impatience, jealousy, and battles of ego in relationships. Rather than taking rash decisions and living through sudden breaks, the soundest course is to observe events from the outside.",
      },
      {
        lead: "Settle with the past",
        text: "This new moon, in the shadow of the Venus retrograde, will bring back to the table loves left unfinished, confrontations that were postponed, and matters that make you ask, “I wonder whether my right was taken?” Do not sign a new beginning before you have closed the old files.",
      },
    ],
    signs: [
      {
        name: "Aries rising",
        text: "This new moon, taking place in the sign directly opposite yours (the 7th house), lights directly the field of marriage, partnership, and open enmities. You are in the period when you question your balance of give and take most sharply. A new partnership, or a decision toward seriousness, may come onto the agenda, yet the Venus retrograde may also bring toxic partners from the past to your door; keep your boundaries.",
      },
      {
        name: "Taurus rising",
        text: "The new moon taking place in your 6th house (routines, the work environment, and health) asks you to restructure the order of your work life and your relations of subordinate and superior. Because of the Mars square, watch for manipulative tensions that may arise at work. In your health, be cautious about sensitivities of the lower back, the kidneys, and the reproductive organs.",
      },
      {
        name: "Gemini rising",
        text: "Your 5th house (love, children, creativity) comes alive. Your wish to begin a new romantic interaction, or an artistic project, is quite high. Yet the Venus retrograde may confuse you by carrying old loves and unfinished karmic passions back onto the stage. In this period, take care not to be caught by illusions in flirtations.",
      },
      {
        name: "Cancer rising",
        text: "Themes of the 4th house (home, the nest, and roots) are in play. In family matters, in inheritance or property, you may be in a serious search for what is rightfully yours. Even if you want to make new beginnings in matters such as moving, buying a home, or decorating the house, you should avoid setting major signatures until the retrograde ends (mid-November).",
      },
      {
        name: "Leo rising",
        text: "This new moon in your 3rd house promises a renewal in the field of the close circle, siblings, trade, and agreements. New contracts may come onto the agenda, or you may want to make a commercial move. Yet the words you use in communication may create a crisis; using a diplomatic and strategic language will pull you back from the edge.",
      },
      {
        name: "Virgo rising",
        text: "The Libra new moon taking place in the field of your 2nd house (finance and self-worth) sows new seeds concerning the way you earn money and your material resources. Because the Venus retrograde is part of the picture, you may enter the questioning, “Do I deserve this gain, this worth?” You are in a phase when you must stay absolutely clear of luxury and impulsive spending.",
      },
      {
        name: "Libra rising",
        text: "Your new moon. This effect, taking place at 17 degrees in your 1st house, shows that it is time to strike a great reset concerning your bodily appearance, your stance in relationships, and the motto of your life. Because your ruling planet Venus is in backward motion, you should avoid radical cosmetic operations and analyze in depth your own share in relationships.",
      },
      {
        name: "Scorpio rising",
        text: "This new moon, taking place in your 12th house (the subconscious and retreat), is in the full sense a period of inner incubation and spiritual cleansing. While Venus moves backward in your sign, you will notice hidden agendas turning behind you, secrets being kept, and the sabotages you inflict on yourself. It is the most fruitful time of the year to begin therapy and for work with the subconscious.",
      },
      {
        name: "Sagittarius rising",
        text: "The new moon in your 11th house brings a karmic refreshment in your social circle, in associations, and in your visions of the future. You may step away from toxic groups of friends that pull you down and meet people who are more visionary. Yet it is likely that friendships which broke in the past, or team projects left unfinished, will come onto the agenda again.",
      },
      {
        name: "Capricorn rising",
        text: "Your field of career and status (the 10th house) is shaped by this new moon. In your work life you have the chance to resolve, within the frame of diplomacy and with upper management, the matters you find unjust. You may take serious steps to renew your status before the public (a decision to marry, a resignation, or a promotion), yet you should avoid entering power struggles.",
      },
      {
        name: "Aquarius rising",
        text: "Themes of the 9th house (abroad, beliefs, higher education) are active. You may step into an entirely new academic path that balances your outlook on life, into a legal process, or into a project tied to being abroad. It is an ideal time to bring to resolution the legal and official frictions, coming from the past, in matters such as travel plans, a visa, or a passport.",
      },
      {
        name: "Pisces rising",
        text: "This new moon, taking place in the field of the 8th house (shared money, debts, crises, and the esoteric), is the footstep of transformation. In matters such as inheritance, maintenance, the restructuring of a loan, or a spouse’s financial situation, you may see that justice is established. On the psychological plane you are under a very strong effect, in which you face your deep fears and are born again from your ashes.",
      },
    ],
  },
  sv: {
    title: "10 oktober, Vågens nymåne",
    subtitle: "sökandet efter karmisk balans på 17 grader",
    overview:
      "Den 10 oktober 2026, klockan 18:50 turkisk tid, äger en stark nymåne rum på Vågens 17:e grad. Vågens tema betyder relationer, partnerskap, juridik och rättvisa. Men på himlen fortsätter vår härskare Venus sin retrograda rörelse i Skorpionen och bildar en hård kvadratur (90°) med Mars. Det betyder att det i tiden framför oss blir möjligt att ”öppna en ny sida” först när vi har löst de kriser som kommer från det förflutna, när vi har mött de dolda toxiska dynamikerna och när vi har upprättat balansen mellan att ge och att ta så som den bör vara.",
    ask: "Vad vill himlen av oss?",
    points: [
      {
        lead: "Upprätta balansen mellan att ge och att ta",
        text: "Dra bestämda och tydliga gränser mellan dina egna önskningar och förväntningarna hos den som står mitt emot dig. Tillståndet att ”ge avkall på sig själv”, så som det görs under denna period, kan senare förvandlas till stora kriser.",
      },
      {
        lead: "Förbli strategisk och iakttagande",
        text: "Venus–Mars-kvadraturen kan skapa otålighet, svartsjuka och egokamper i relationer. I stället för att fatta förhastade beslut och leva igenom plötsliga brott är det riktigaste att iaktta händelserna utifrån.",
      },
      {
        lead: "Gör upp med det förflutna",
        text: "Denna nymåne, i skuggan av Venus retrograd, för tillbaka till bordet kärlekar som lämnats halvfärdiga, uppskjutna uppgörelser och ämnen som får dig att fråga: ”Togs min rätt ifrån mig?” Skriv inte under en ny början innan du har stängt de gamla akterna.",
      },
    ],
    signs: [
      {
        name: "Vädur stigande",
        text: "Denna nymåne, som äger rum i tecknet rakt mitt emot ditt (7:e huset), lyser direkt upp fältet för äktenskap, partnerskap och öppna fiendskaper. Du är i den period då du som skarpast ifrågasätter din balans mellan att ge och att ta. Ett nytt partnerskap eller ett beslut om allvar kan komma på dagordningen, men Venus retrograd kan också föra toxiska partner från det förflutna till din dörr; skydda dina gränser.",
      },
      {
        name: "Oxe stigande",
        text: "Nymånen i ditt 6:e hus (rutiner, arbetsmiljö och hälsa) ber dig att bygga om ordningen i ditt arbetsliv och dina relationer mellan underordnad och överordnad. Var uppmärksam på manipulativa spänningar som kan uppstå på arbetet på grund av Mars-kvadraturen. I din hälsa, var försiktig med känslighet i ländrygg, njurar och fortplantningsorgan.",
      },
      {
        name: "Tvillingar stigande",
        text: "Ditt 5:e hus (kärlek, barn, skapande) vaknar. Din längtan att börja en ny romantisk kontakt eller ett konstnärligt projekt är mycket hög. Men Venus retrograd kan förvirra dig genom att föra tillbaka gamla kärlekar och halvfärdiga karmiska passioner till scenen. Under denna period, akta dig för att låta dig fångas av illusioner i flörtar.",
      },
      {
        name: "Kräfta stigande",
        text: "Teman i det 4:e huset (hem, bo och rötter) är i spel. I familjefrågor, arv eller fastigheter kan du befinna dig i ett allvarligt sökande efter din rätt. Även om du vill göra en ny början i frågor som flytt, köp av bostad eller inredning av hemmet, bör du undvika att sätta stora underskrifter tills retrograden tar slut (mitten av november).",
      },
      {
        name: "Lejon stigande",
        text: "Denna nymåne i ditt 3:e hus lovar en förnyelse på området för den nära kretsen, syskon, handel och avtal. Nya kontrakt kan komma på dagordningen, eller så kan du vilja göra ett kommersiellt steg. Men orden du använder i kommunikationen kan skapa en kris; ett diplomatiskt och strategiskt språk tar dig från kanten.",
      },
      {
        name: "Jungfru stigande",
        text: "Vågens nymåne i fältet för ditt 2:a hus (ekonomi och självvärde) sår nya frön kring sättet du tjänar pengar och dina materiella källor. Eftersom Venus retrograd är med i bilden kan du gå in i frågan: ”Förtjänar jag denna vinst, detta värde?” Du är i en fas där du absolut måste hålla dig borta från lyx och impulsiva utgifter.",
      },
      {
        name: "Våg stigande",
        text: "Din nymåne. Denna verkan, som äger rum på 17 grader i ditt 1:a hus, visar att det är tid att slå en stor återställning kring ditt kroppsliga utseende, din hållning i relationer och ditt motto för livet. Eftersom din härskarplanet Venus är i bakåtrörelse bör du undvika radikala estetiska operationer och på djupet analysera din egen andel i relationerna.",
      },
      {
        name: "Skorpion stigande",
        text: "Denna nymåne i ditt 12:e hus (det undermedvetna och reträtten) är i full mening en period av inre ruvande och andlig rening. Medan Venus går bakåt i ditt tecken kommer du att märka dolda agendor som vänds bakom dig, hemligheter som döljs och de sabotage du utsätter dig själv för. Det är årets mest givande tid att börja i terapi och för arbete med det undermedvetna.",
      },
      {
        name: "Skytt stigande",
        text: "Nymånen i ditt 11:e hus för med sig en karmisk förnyelse i din sociala krets, i föreningar och i dina visioner för framtiden. Du kan gå bort från toxiska vängrupper som drar dig nedåt och möta mer visionära människor. Men det är troligt att vänskaper som bröts i det förflutna, eller teamprojekt som lämnats halvfärdiga, kommer på dagordningen igen.",
      },
      {
        name: "Stenbock stigande",
        text: "Ditt fält för karriär och status (10:e huset) formas av denna nymåne. I ditt arbetsliv har du chansen att, inom diplomatins ram och med den högre ledningen, lösa frågor du finner orättvisa. Du kan ta allvarliga steg för att förnya din status inför offentligheten (ett beslut om giftermål, en uppsägning eller en befordran), men du bör undvika att gå in i maktkamper.",
      },
      {
        name: "Vattuman stigande",
        text: "Teman i det 9:e huset (utlandet, övertygelser, högre utbildning) är aktiva. Du kan ta ett steg in i en helt ny akademisk bana som balanserar din syn på livet, in i en juridisk process eller in i ett projekt kopplat till utlandet. Det är en idealisk tid för att lösa juridiska och officiella skav från det förflutna i frågor som resplaner, visum eller pass.",
      },
      {
        name: "Fiskar stigande",
        text: "Denna nymåne i det 8:e husets fält (gemensamma pengar, skulder, kriser och det esoteriska) är förvandlingens fotsteg. I frågor som arv, underhåll, omstrukturering av ett lån eller en partners ekonomiska läge kan du se att rättvisa upprättas. På det psykologiska planet står du under en mycket stark verkan, där du möter dina djupa rädslor och föds på nytt ur din aska.",
      },
    ],
  },
} as const;

export function libraNote(lang: Lang) {
  return note[lang];
}
