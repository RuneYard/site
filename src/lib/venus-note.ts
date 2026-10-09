import type { Lang } from "@/lib/copy";

const note = {
  tr: {
    title: "Venüs Retrosu",
    dates: "3 Ekim – 14 Kasım 2026",
    overview:
      "3 Ekim – 14 Kasım 2026 tarihleri arasında gerçekleşecek olan Venüs retrosu, ilişkiler, finansal kararlar ve özdeğer konularında büyük bir hesaplaşma dönemi başlatıyor. Venüs sıradan bir gezegen değildir; neyi arzuladığımızı ve neye değer verdiğimizi yönetir. Geri hareketine Akrep burcunda başlayıp, sonrasında kendi yönettiği Terazi burcuna kayması, bu sürecin iki farklı aşamada, iki farklı temayla test edileceğini gösteriyor.",
    phases: [
      {
        label: "3 Ekim – 25 Ekim · Akrep",
        text: "3 Ekim – 25 Ekim (Akrep Fazı – Derinlik ve Kriz): Akrep burcundaki retro, yüzeyselliğin bittiği yerdir. Odak noktamız gizli dinamikler, kıskançlıklar, güç savaşları ve mahremiyet olacak. “Bu ilişkinin bana bedeli ne?” ve “Gerçekten güvenebilir miyim?” soruları bu evrenin merkezinde yer alıyor.",
      },
      {
        label: "25 Ekim – 14 Kasım · Terazi",
        text: "25 Ekim – 14 Kasım (Terazi Fazı – Adalet ve Denge): Venüs 25 Ekim’de Terazi’ye gerilediğinde sular biraz durulur ancak masaya hak ve adalet kavramları gelir. Eski partnerlerin geri dönmesi, geçmişteki anlaşmazlıkların çözümü veya miadını doldurmuş ilişkilerin barışçıl bir şekilde sonlandırılması bu dönemin ana konularıdır.",
      },
    ],
    cautions: [
      {
        lead: "İmajınızı değiştirmeyin",
        text: "Radikal saç kesimleri, saç rengi değişimleri veya estetik operasyonlar için 14 Kasım sonrasını bekleyin.",
      },
      {
        lead: "“Ex’ten next olmaz” testine hazırlanın",
        text: "Eski sevgililerin dönüşü retronun klasiğidir. Kimyanın yeniden tuttuğunu hissetseniz bile, büyük taahhütlerde bulunmadan önce retronun bitmesini bekleyin.",
      },
      {
        lead: "Cüzdanı koruyun",
        text: "Dürtüsel lüks harcamalar veya duygusal boşluğu doldurmak için yapılan alışverişler retro bitiminde pişmanlık yaratır.",
      },
      {
        lead: "Büyük kararları erteleyin",
        text: "Mevcut ilişkinizde aniden evlilik veya boşanma kararı almayın; sadece durumu gözlemleyin ve eksikleri not edin.",
      },
    ],
    signs: [
      {
        name: "Koç Yükselen",
        text: "Retronun ilk evresi (Akrep) 8. evinizde gerçekleşiyor. Ortak finansal konular, eşin parası, krediler veya nafakalarla ilgili geçmişten gelen pürüzler yüzeye çıkabilir. İlişkilerde derin krizler veya bastırılmış tutkular alevlenebilir. 25 Ekim’den sonra retro 7. evinize (Terazi) kaydığında odak tamamen ikili ilişkilerinize ve evliliğinize dönüyor. Eski partnerler kapıyı çalabilir veya mevcut ilişkinizde alma-verme dengesini yeniden inşa etmeniz gerekebilir.",
      },
      {
        name: "Boğa Yükselen",
        text: "Yönetici gezegeniniz gerilediği için bu süreçten en yoğun etkilenenlerden birisiniz. İlk yarıda 7. evinizde (Akrep) ilişkileriniz ve ortaklıklarınız büyük bir testten geçiyor; güç dinamiklerini ve güven sorunlarını çözmeniz gerekecek. 25 Ekim sonrası (Terazi) odak 6. evinize kayıyor. İş ortamınızdaki insanlarla ilişkilerinizi gözden geçirebilir, eski çalışma arkadaşlarınızla karşılaşabilir veya ertelediğiniz sağlık kontrollerine geri dönebilirsiniz.",
      },
      {
        name: "İkizler Yükselen",
        text: "Retro, 6. evinizde (Akrep) başlıyor. İş hayatınız, mesai arkadaşlarınızla olan dinamikleriniz ve günlük rutininiz tekrar eden pürüzlerle uğraşmanız gerekebilir. 25 Ekim sonrası (Terazi) Venüs 5. evinize gerileyerek aşk hayatınızı sahneye çıkarıyor. Eski flörtler mesaj atabilir, geçmişte yarım bıraktığınız hobiler veya yaratıcı projeler yeniden ilham kaynağınız olabilir.",
      },
      {
        name: "Yengeç Yükselen",
        text: "Aşk, tutku ve çocuklar eviniz olan 5. evde (Akrep) başlayan retro, romantik hayatınızda derin sorgulamalar yaratıyor. Eski aşkların en yoğun şekilde dönüş yapabileceği burçlardansınız, ancak geçici heveslere kapılmamalısınız. 25 Ekim’den sonra (Terazi) retro 4. evinize geçiyor. Aile içi ilişkilerde geçmiş kırgınlıkları çözmek veya evde yarım kalan bir düzenlemeyi tamamlamak için ideal; ancak dekorasyon için büyük bütçeler harcamayın.",
      },
      {
        name: "Aslan Yükselen",
        text: "Retronun ilk evresi 4. evinizde (Akrep) gerçekleşiyor. Ev, aile, kökler ve ebeveynlerle ilgili gizli kalmış konular veya gayrimenkul meseleleri gündeme gelebilir; ev içinde huzuru sağlamak efor gerektirebilir. 25 Ekim sonrası (Terazi) 3. evinize geçen Venüs; yakın çevreniz, kardeşleriniz ve iletişim dilinize odaklanıyor. Kırgın olduğunuz eski dostlarla barışabilir veya geçmişte yarım bıraktığınız bir eğitime tekrar başlayabilirsiniz.",
      },
      {
        name: "Başak Yükselen",
        text: "İlk aşamada 3. evinizdeki (Akrep) gerileme, iletişim krizlerine zemin hazırlıyor. Söylenen sözlerin altında farklı anlamlar aranabilir, yakın çevreyle güç savaşları yaşanabilir. 25 Ekim’den sonra (Terazi) retro 2. evinize geriliyor. Finansal konular, bütçeniz ve özdeğeriniz test edilecek. Lüks ve gereksiz harcamalardan kesinlikle uzak durmalı, kendi değerinizi başkalarının onayına bağlamaktan vazgeçmelisiniz.",
      },
      {
        name: "Terazi Yükselen",
        text: "Yönetici gezegeninizin retrosu 2. evinizde (Akrep) başlıyor. Maddi konularda köklü bir revizyon dönemindesiniz; gelir kaynaklarınızı ve paylaşımlı paraları gözden geçireceksiniz. 25 Ekim’den sonra retro doğrudan 1. evinize (Terazi), yani burcunuza geçiyor. İmajınız, duruşunuz ve ilişkilerde kendinizi nasıl ifade ettiğiniz tamamen yenileniyor. Fiziksel müdahalelerden kaçınarak, tamamen içsel ve ruhsal bir yenilenmeye odaklanmalısınız.",
      },
      {
        name: "Akrep Yükselen",
        text: "Retro doğrudan 1. evinizde (Akrep) başlıyor. İmajınız, dışarıya yansıttığınız kimlik ve ikili ilişkilerde aldığınız roller derin bir sorgulamadan geçiyor. Partnerinizden ne beklediğinizi netleştireceksiniz. 25 Ekim sonrası (Terazi) 12. evinize çekilen Venüs, bilinçaltı korkularınızla, gizli ilişkilerle veya bitmesi gerektiği halde kopamadığınız bağlarla yüzleşmenizi sağlayacak. Geçmişi affedip bırakmak için harika bir süreç.",
      },
      {
        name: "Yay Yükselen",
        text: "Retronun Akrep fazı 12. evinizde gerçekleşiyor. Gizli düşmanlıklar, arkanızdan çevrilen işler veya geçmişteki gizli ilişkiler gün yüzüne çıkabilir. Kendi değerinizi dışarıdan değil, içeriden inşa etmeniz gereken bir izolasyon dönemi. 25 Ekim’den sonra (Terazi) 11. evinize geçen Venüs, sosyal çevrenizi mercek altına alıyor. Hangi arkadaşlıkların gerçekten adil olduğunu sorgulayacak, size hizmet etmeyen gruplardan uzaklaşıp eski gerçek dostlara yöneleceksiniz.",
      },
      {
        name: "Oğlak Yükselen",
        text: "11. evinizde (Akrep) başlayan retro, geleceğe dair ideallerinizde ve sosyal çevrenizde bazı krizler yaratabilir. Arkanızdan iş çeviren veya güven vermeyen kişileri hayatınızdan çıkarabilirsiniz. 25 Ekim sonrası (Terazi) retro 10. evinize kayıyor. Kariyeriniz, yöneticilerle olan ilişkileriniz ve toplum önündeki imajınız gözden geçiriliyor. Geçmişte çalıştığınız bir yerden yeni teklifler gelebilir veya iş hayatınızda bozulan dengeyi yeniden kurmaya çalışabilirsiniz.",
      },
      {
        name: "Kova Yükselen",
        text: "İlk aşamada (Akrep) 10. eviniz kariyer alanında yoğunlaşıyor. İş hayatında güç mücadeleleri, haksız rekabet veya yöneticilerle yaşanan krizler yorucu olabilir; kariyerde neyin gerçekten önemli olduğunu sorgulayacaksınız. 25 Ekim’den sonra (Terazi) 9. evinize gerileyen Venüs; hayata bakış açınızı, inançlarınızı ve yurtdışı/eğitim konularını gündeme getiriyor. Geçmişte gittiğiniz bir yere tekrar seyahat edebilir veya yarım kalan akademik bir işi tamamlayabilirsiniz.",
      },
      {
        name: "Balık Yükselen",
        text: "Akrep burcundaki ilk evre 9. evinizde gerçekleşiyor. Hayat felsefeniz, inançlarınız ve uzun vadeli planlarınızla ilgili köklü değişimler yaşayabilir; hukuki konular veya uzaklardaki kişilerle pürüzleri çözmeye çalışabilirsiniz. 25 Ekim’den sonra (Terazi) 8. evinize geçen Venüs; miras, kredi, borçlar veya eşin gelirleri gibi ortak finansal konularda denge sağlama ihtiyacı yaratacak. Maddi paylaşımların adil olup olmadığını masaya yatıracaksınız.",
      },
    ],
  },
  en: {
    title: "Venus retrograde",
    dates: "3 October – 14 November 2026",
    overview:
      "The Venus retrograde taking place between 3 October and 14 November 2026 opens a major period of reckoning in relationships, financial decisions, and self-worth. Venus is not an ordinary planet; it governs what we desire and what we value. That it begins its backward motion in Scorpio, and afterward slips into Libra, the sign it rules, shows that this process will be tested in two different phases, with two different themes.",
    phases: [
      {
        label: "3 October – 25 October · Scorpio",
        text: "3 October – 25 October (Scorpio phase – depth and crisis): the retrograde in Scorpio is where superficiality ends. Our focus will be hidden dynamics, jealousies, power struggles, and intimacy. The questions “What is this relationship costing me?” and “Can I really trust?” sit at the center of this phase.",
      },
      {
        label: "25 October – 14 November · Libra",
        text: "25 October – 14 November (Libra phase – justice and balance): when Venus slips back into Libra on 25 October, the waters settle a little, yet the ideas of right and justice come to the table. The return of former partners, the resolution of past disagreements, or the peaceful ending of relationships that have run their course are the main subjects of this period.",
      },
    ],
    cautions: [
      {
        lead: "Do not change your image",
        text: "For radical haircuts, changes of hair color, or cosmetic operations, wait until after 14 November.",
      },
      {
        lead: "Prepare for the “an ex does not become the next” test",
        text: "The return of old lovers is a classic of the retrograde. Even if you feel the chemistry take hold again, wait until the retrograde ends before making large commitments.",
      },
      {
        lead: "Guard the wallet",
        text: "Impulsive luxury spending, or shopping done to fill an emotional emptiness, creates regret when the retrograde ends.",
      },
      {
        lead: "Postpone the large decisions",
        text: "Do not suddenly decide on marriage or divorce in your current relationship; only observe the situation and note what is missing.",
      },
    ],
    signs: [
      {
        name: "Aries rising",
        text: "The first phase of the retrograde (Scorpio) takes place in your 8th house. Rough edges from the past, concerning shared finances, a spouse’s money, loans, or maintenance, may surface. Deep crises in relationships, or suppressed passions, may flare. After 25 October, when the retrograde moves into your 7th house (Libra), the focus turns entirely to your one-to-one relationships and your marriage. Former partners may knock at the door, or you may need to rebuild the balance of give and take in your current relationship.",
      },
      {
        name: "Taurus rising",
        text: "Because your ruling planet is moving backward, you are among those most intensely affected by this process. In the first half, in your 7th house (Scorpio), your relationships and partnerships pass through a major test; you will need to resolve power dynamics and issues of trust. After 25 October (Libra) the focus shifts to your 6th house. You may review your relationships with the people in your workplace, meet former colleagues, or return to the health checks you had postponed.",
      },
      {
        name: "Gemini rising",
        text: "The retrograde begins in your 6th house (Scorpio). You may have to deal with recurring friction in your work life, in the dynamics with your colleagues, and in your daily routine. After 25 October (Libra), Venus slips back into your 5th house and brings your love life onto the stage. Old flirtations may send a message, and hobbies or creative projects you left unfinished may become a source of inspiration again.",
      },
      {
        name: "Cancer rising",
        text: "The retrograde beginning in the 5th house (Scorpio), the house of love, passion, and children, creates deep questioning in your romantic life. You are one of the signs old loves may return to most intensely, yet you should not be caught by passing whims. After 25 October (Libra) the retrograde moves into your 4th house. It is ideal for resolving old hurts within the family, or for finishing an arrangement left half-done at home; but do not spend large budgets on decoration.",
      },
      {
        name: "Leo rising",
        text: "The first phase of the retrograde takes place in your 4th house (Scorpio). Matters that have stayed hidden, concerning home, family, roots, and parents, or questions of property, may come onto the agenda; securing peace inside the home may take effort. Venus, passing into your 3rd house after 25 October (Libra), focuses on your close circle, your siblings, and the language of your communication. You may make peace with old friends you were hurt by, or begin again a course of study you left unfinished.",
      },
      {
        name: "Virgo rising",
        text: "In the first stage, the backward motion in your 3rd house (Scorpio) prepares the ground for crises of communication. Other meanings may be sought beneath the words that are spoken, and power struggles with the close circle may be lived through. After 25 October (Libra) the retrograde slips into your 2nd house. Financial matters, your budget, and your self-worth will be tested. You should keep well clear of luxury and unnecessary spending, and give up tying your own worth to other people’s approval.",
      },
      {
        name: "Libra rising",
        text: "The retrograde of your ruling planet begins in your 2nd house (Scorpio). You are in a period of thorough revision in material matters; you will review your sources of income and shared money. After 25 October the retrograde passes directly into your 1st house (Libra), that is, into your own sign. Your image, your stance, and the way you express yourself in relationships are renewed entirely. Avoiding physical interventions, you should focus on a renewal that is wholly inner and spiritual.",
      },
      {
        name: "Scorpio rising",
        text: "The retrograde begins directly in your 1st house (Scorpio). Your image, the identity you reflect outward, and the roles you take in one-to-one relationships pass through a deep questioning. You will clarify what you expect from your partner. Venus, drawn into your 12th house after 25 October (Libra), will bring you face to face with your subconscious fears, with secret relationships, or with bonds you could not break even though they needed to end. It is an excellent process for forgiving the past and letting it go.",
      },
      {
        name: "Sagittarius rising",
        text: "The Scorpio phase of the retrograde takes place in your 12th house. Hidden enmities, matters turned behind your back, or secret relationships from the past may come to light. It is a period of isolation in which you need to build your own worth from the inside, not from the outside. Venus, passing into your 11th house after 25 October (Libra), puts your social circle under the lens. You will question which friendships are truly fair, step away from groups that do not serve you, and turn toward old, true friends.",
      },
      {
        name: "Capricorn rising",
        text: "The retrograde beginning in your 11th house (Scorpio) may create some crises in your ideals for the future and in your social circle. You may remove from your life people who scheme behind your back or who do not inspire trust. After 25 October (Libra) the retrograde moves into your 10th house. Your career, your relationships with managers, and your image before the public are reviewed. New offers may come from a place where you worked in the past, or you may try to restore a balance that has broken in your work life.",
      },
      {
        name: "Aquarius rising",
        text: "In the first stage (Scorpio) your 10th house intensifies in the field of career. Power struggles in work life, unfair competition, or crises with managers may be wearying; you will question what is truly important in a career. Venus, slipping back into your 9th house after 25 October (Libra), brings onto the agenda your outlook on life, your beliefs, and matters of being abroad and of education. You may travel again to a place you went to in the past, or finish an academic piece of work left half-done.",
      },
      {
        name: "Pisces rising",
        text: "The first phase in Scorpio takes place in your 9th house. You may live through thorough changes concerning your philosophy of life, your beliefs, and your long-term plans; you may try to resolve friction in legal matters or with people at a distance. Venus, passing into your 8th house after 25 October (Libra), will create a need to find balance in shared finances such as inheritance, credit, debts, or a spouse’s income. You will put on the table whether the material sharing is fair.",
      },
    ],
  },
  sv: {
    title: "Venus retrograd",
    dates: "3 oktober – 14 november 2026",
    overview:
      "Venus retrograd, som äger rum mellan den 3 oktober och den 14 november 2026, inleder en stor uppgörelse i relationer, ekonomiska beslut och självvärde. Venus är inte en vanlig planet; den styr vad vi åtrår och vad vi värderar. Att den börjar sin bakåtrörelse i Skorpionen och sedan glider in i Vågen, det tecken den råder över, visar att denna process prövas i två olika faser, med två olika teman.",
    phases: [
      {
        label: "3 oktober – 25 oktober · Skorpionen",
        text: "3 oktober – 25 oktober (Skorpionfasen – djup och kris): retrograden i Skorpionen är där det ytliga tar slut. Vårt fokus blir dolda dynamiker, svartsjuka, maktkamper och intimitet. Frågorna ”Vad kostar den här relationen mig?” och ”Kan jag verkligen lita?” ligger i centrum av denna fas.",
      },
      {
        label: "25 oktober – 14 november · Vågen",
        text: "25 oktober – 14 november (Vågfasen – rättvisa och balans): när Venus glider tillbaka in i Vågen den 25 oktober stillnar vattnet något, men begreppen rätt och rättvisa kommer till bordet. Att tidigare partner återvänder, att gamla oenigheter löses, eller att relationer som har löpt ut avslutas på ett fredligt sätt, är periodens huvudämnen.",
      },
    ],
    cautions: [
      {
        lead: "Ändra inte din image",
        text: "Vänta till efter den 14 november med radikala klippningar, färgbyten av håret eller estetiska operationer.",
      },
      {
        lead: "Förbered dig på provet ”en ex blir inte nästa”",
        text: "Att gamla älskare återvänder är retrogradens klassiker. Även om du känner att kemin tar tag igen, vänta tills retrograden är över innan du ingår stora åtaganden.",
      },
      {
        lead: "Skydda plånboken",
        text: "Impulsiva lyxutgifter, eller inköp som görs för att fylla en känslomässig tomhet, skapar ånger när retrograden tar slut.",
      },
      {
        lead: "Skjut upp de stora besluten",
        text: "Ta inte ett plötsligt beslut om giftermål eller skilsmässa i din nuvarande relation; iaktta bara läget och notera vad som saknas.",
      },
    ],
    signs: [
      {
        name: "Vädur stigande",
        text: "Retrogradens första fas (Skorpionen) äger rum i ditt 8:e hus. Skav från det förflutna kring gemensam ekonomi, partnerns pengar, lån eller underhåll kan komma upp till ytan. Djupa kriser i relationer, eller undertryckta passioner, kan flamma upp. Efter den 25 oktober, när retrograden glider in i ditt 7:e hus (Vågen), vänds fokus helt mot dina parrelationer och ditt äktenskap. Tidigare partner kan knacka på dörren, eller så kan du behöva bygga om balansen mellan att ge och att ta i din nuvarande relation.",
      },
      {
        name: "Oxe stigande",
        text: "Eftersom din härskarplanet rör sig bakåt är du en av dem som påverkas mest intensivt av denna process. I den första halvan, i ditt 7:e hus (Skorpionen), går dina relationer och partnerskap igenom ett stort prov; du behöver lösa maktdynamiker och frågor om tillit. Efter den 25 oktober (Vågen) flyttas fokus till ditt 6:e hus. Du kan se över dina relationer med människorna på arbetet, möta gamla kollegor eller återvända till hälsokontroller du skjutit upp.",
      },
      {
        name: "Tvillingar stigande",
        text: "Retrograden börjar i ditt 6:e hus (Skorpionen). Du kan behöva hantera återkommande skav i arbetslivet, i dynamiken med arbetskamraterna och i din dagliga rutin. Efter den 25 oktober (Vågen) glider Venus tillbaka in i ditt 5:e hus och för upp ditt kärleksliv på scenen. Gamla flörtar kan skicka ett meddelande, och hobbies eller skapande projekt du lämnade halvfärdiga kan åter bli en källa till inspiration.",
      },
      {
        name: "Kräfta stigande",
        text: "Retrograden som börjar i det 5:e huset (Skorpionen), huset för kärlek, passion och barn, skapar djupa frågor i ditt romantiska liv. Du är ett av de tecken dit gamla kärlekar kan återvända som mest intensivt, men du bör inte låta dig fångas av tillfälliga infall. Efter den 25 oktober (Vågen) går retrograden in i ditt 4:e hus. Den passar för att lösa gamla sår inom familjen, eller för att slutföra en ordning som lämnats halvklar hemma; men lägg inte stora budgetar på inredning.",
      },
      {
        name: "Lejon stigande",
        text: "Retrogradens första fas äger rum i ditt 4:e hus (Skorpionen). Saker som har förblivit dolda, kring hem, familj, rötter och föräldrar, eller frågor om fastigheter, kan komma på dagordningen; att skapa ro inne i hemmet kan kräva ansträngning. Venus, som efter den 25 oktober (Vågen) går in i ditt 3:e hus, fokuserar på din nära krets, dina syskon och språket i din kommunikation. Du kan försonas med gamla vänner du blev sårad av, eller börja om en utbildning du lämnade ofullbordad.",
      },
      {
        name: "Jungfru stigande",
        text: "I det första skedet bereder tillbakagången i ditt 3:e hus (Skorpionen) marken för kommunikationskriser. Andra meningar kan sökas under de ord som sägs, och maktkamper med den nära kretsen kan levas igenom. Efter den 25 oktober (Vågen) glider retrograden in i ditt 2:a hus. Ekonomiska frågor, din budget och ditt självvärde prövas. Du bör hålla dig långt från lyx och onödiga utgifter, och sluta knyta ditt eget värde till andras godkännande.",
      },
      {
        name: "Våg stigande",
        text: "Retrograden hos din härskarplanet börjar i ditt 2:a hus (Skorpionen). Du är i en period av genomgripande revision i materiella frågor; du kommer att se över dina inkomstkällor och delade pengar. Efter den 25 oktober går retrograden rakt in i ditt 1:a hus (Vågen), det vill säga in i ditt eget tecken. Din image, din hållning och hur du uttrycker dig i relationer förnyas helt. Undvik fysiska ingrepp och fokusera på en förnyelse som är helt inre och andlig.",
      },
      {
        name: "Skorpion stigande",
        text: "Retrograden börjar direkt i ditt 1:a hus (Skorpionen). Din image, den identitet du speglar utåt och de roller du tar i parrelationer går igenom ett djupt ifrågasättande. Du kommer att klargöra vad du väntar dig av din partner. Venus, som dras in i ditt 12:e hus efter den 25 oktober (Vågen), låter dig möta dina undermedvetna rädslor, hemliga relationer eller band du inte kunde bryta trots att de behövde ta slut. Det är en utmärkt process för att förlåta det förflutna och släppa det.",
      },
      {
        name: "Skytt stigande",
        text: "Retrogradens Skorpionfas äger rum i ditt 12:e hus. Dolda fiendskaper, saker som vänds bakom din rygg eller hemliga relationer från det förflutna kan komma i dagen. Det är en isolationsperiod där du behöver bygga ditt eget värde inifrån, inte utifrån. Venus, som efter den 25 oktober (Vågen) går in i ditt 11:e hus, lägger din sociala krets under lupp. Du kommer att fråga vilka vänskaper som verkligen är rättvisa, gå bort från grupper som inte tjänar dig och vända dig mot gamla, verkliga vänner.",
      },
      {
        name: "Stenbock stigande",
        text: "Retrograden som börjar i ditt 11:e hus (Skorpionen) kan skapa vissa kriser i dina ideal för framtiden och i din sociala krets. Du kan ta bort ur ditt liv personer som intrigerar bakom din rygg eller som inte inger förtroende. Efter den 25 oktober (Vågen) glider retrograden in i ditt 10:e hus. Din karriär, dina relationer med chefer och din image inför offentligheten ses över. Nya erbjudanden kan komma från en plats där du arbetade förr, eller så kan du försöka återställa en balans som har brustit i ditt arbetsliv.",
      },
      {
        name: "Vattuman stigande",
        text: "I det första skedet (Skorpionen) tätnar ditt 10:e hus på karriärens område. Maktkamper i arbetslivet, orättvis konkurrens eller kriser med chefer kan vara tröttande; du kommer att fråga vad som verkligen är viktigt i en karriär. Venus, som glider tillbaka in i ditt 9:e hus efter den 25 oktober (Vågen), för upp din syn på livet, dina övertygelser och frågor om utlandet och utbildning. Du kan resa igen till en plats du besökte förr, eller slutföra ett akademiskt arbete som lämnats halvfärdigt.",
      },
      {
        name: "Fiskar stigande",
        text: "Den första fasen i Skorpionen äger rum i ditt 9:e hus. Du kan genomleva genomgripande förändringar kring din livsfilosofi, dina övertygelser och dina långsiktiga planer; du kan försöka lösa skav i juridiska frågor eller med personer på avstånd. Venus, som efter den 25 oktober (Vågen) går in i ditt 8:e hus, skapar ett behov av balans i gemensam ekonomi såsom arv, kredit, skulder eller en partners inkomst. Du lägger på bordet om de materiella delningarna är rättvisa.",
      },
    ],
  },
} as const;

export function venusNote(lang: Lang) {
  return note[lang];
}
