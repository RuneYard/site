import type { Lang } from "@/lib/copy";

export type SkyNotePhase = {
  label: string;
  text: string;
};

export type SkyNotePoint = {
  lead: string;
  text: string;
};

export type SkyNoteSign = {
  name: string;
  text: string;
};

export type SkyNoteEntry = {
  slug: string;
  glyph: string;
  badge: string;
  image: string;
  data: Record<
    Lang,
    {
      title: string;
      subtitle: string;
      dates: string;
      overview: string;
      phases?: readonly SkyNotePhase[];
      ask: string;
      points: readonly SkyNotePoint[];
      signs: readonly SkyNoteSign[];
    }
  >;
};

export const extraSkyNotes: readonly SkyNoteEntry[] = [
  {
    slug: "merkur-retrosu",
    glyph: "☿℞",
    badge: "runeyard.net · Gökyüzü Notu · ☿ ℞",
    image: "/astroloji/merkur-retrosu.jpg",
    data: {
      tr: {
        title: "Merkür Akrep Retrosu",
        subtitle: "20°58' Akrep’ten 5°02' Akrep’e zihinsel arkeoloji ve Çifte Retro sınavı",
        dates: "24 Ekim – 13 Kasım 2026 · 4 Kasım Merkür Cazimi",
        overview:
          "24 Ekim 2026 tarihinde, Türkiye saatiyle 10:13’te iletişim, zihin, ticaret ve sözleşmeler gezegeni Merkür, Akrep burcunun 20°58' derecesinde geri hareketine (retro) başlıyor ve 13 Kasım saat 18:54’te 5°02' Akrep derecesinde düz harekete dönüyor. Bu retroyu sıradan bir Merkür gerilemesinden ayıran en kritik unsur, gökyüzünde aynı anda devam eden Venüs Retrosu (3 Ekim – 14 Kasım) ile tam 20 gün boyunca üst üste binmesidir. Gökyüzünde 24 Ekim – 13 Kasım arasında hem ilişkileri ve parayı yöneten Venüs (Terazi’de) hem de zihni ve anlaşmaları yöneten Merkür (Akrep’te) geri giderken; halının altına süpürülmüş hiçbir sır, konuşulmamış hiçbir şüphe ve kapanmamış hiçbir finansal hesap gizli kalamaz.",
        phases: [
          {
            label: "24 Ekim – 3 Kasım · Derine İniş ve Şüphe Sınavı (20°58' → 12° Akrep)",
            text: "Merkür’ün Akrep’te durağanlaşıp geri dönmesiyle birlikte zihin yüzeyselliği reddeder. İlişkilerde ve ortaklıklarda satır aralarını okuma isteği, dedektiflik dürtüsü ve geçmiş mesajları/belgeleri karıştırma eğilimi artar. Krizli iletişimden ve takıntılı kuruntulardan uzak durulması gereken ilk evredir.",
          },
          {
            label: "4 Kasım 2026 · Merkür Cazimi (11°54' Akrep — Güneş’in Kalbi)",
            text: "Retronun tam ortasında, 4 Kasım’da Merkür 11°54' Akrep derecesinde Güneş’in kalbine (Cazimi) oturur. Klasik astrolojide bu kavuşum, zihinsel karanlığın içinden çakan en berrak şimşektir: Haftalardır çözemediğiniz bir düğümün cevabı, saklanan bir gerçek veya derin bir stratejik sezgi o gün kendiliğinden görünür olur.",
          },
          {
            label: "5 Kasım – 13/14 Kasım · Çifte Düğümün Çözülüşü (5°02' Akrep Düz Hareket)",
            text: "9 Kasım Akrep Yeniayının ardından 13 Kasım’da Merkür (5°02' Akrep), hemen ertesi gün 14 Kasım’da ise Venüs (22°52' Terazi) düz harekete geçer. Ekim başından beri süregelen belirsizlik, ertelenen sözleşmeler ve duygusal/finansal gelgitler bu iki günle birlikte netliğe kavuşur.",
          },
        ],
        ask: "Çifte Retro (Merkür + Venüs) döneminde ne yapmalıyız?",
        points: [
          {
            lead: "Sezgi ile paranoyayı birbirinden ayırın",
            text: "Akrep’teki Merkür zihni çok keskinleştirir ama gölgesinde kuruntu, kıskançlık ve komplo teorileri üretir. Somut kanıtı olmayan şüphelerle hareket etmeyin; dili bir silah olarak değil, şifa ve teşhis aracı olarak kullanın.",
          },
          {
            lead: "Ortak finans, vergi, kredi ve şifrelerinizi yedekleyin",
            text: "Akrep burcu 8. ev konularını (bankacılık, borçlar, sigorta, vergi, miras ve dijital güvenlik/şifreler) yönetir. Bu 20 günlük süreçte banka işlemlerini iki kez kontrol edin, dijital verilerinizi yedekleyin ve yeni borç/kefalet imzalarını 14 Kasım sonrasına bırakın.",
          },
          {
            lead: "4 Kasım Cazimi gününü derin araştırma ve tefekküre ayırın",
            text: "Güneş ve Merkür’ün 11°54' Akrep’te buluştuğu 4 Kasım günü; yarım kalmış bir araştırmayı tamamlamak, psikolojik/okült çalışmalar yapmak ve zihinsel niyet ekmek için yılın en güçlü saatlerini taşır.",
          },
          {
            lead: "Eski defterleri kapatmak için konuşun, yeni sözleşme için bekleyin",
            text: "Eski partnerlerden veya eski iş bağlantılarından gelen mesajlar bu dönemde zirve yapar. Geçmişteki yanlış anlaşılmaları düzeltmek için masaya oturabilirsiniz; ancak sıfırdan ortaklık veya büyük ticari imzalar için 14 Kasım sonrası çok daha sağlamdır.",
          },
        ],
        signs: [
          {
            name: "Koç yükselen",
            text: "Merkür retrosu 8. evinizde (ortak paralar, krediler, vergiler, borçlar ve derin psikoloji) gerçekleşiyor. Eşinizin gelirleri, banka yapılandırmaları, sigorta veya miras dosyalarında geçmişten kalan pürüzleri çözmek için masaya oturacaksınız. Unutulmuş bir borç veya alacak gündeme gelebilir. 7. evinizde gerileyen Venüs ile birlikte ikili ilişkilerde hem maddi hem duygusal güven sınırlarını yeniden yazıyorsunuz.",
          },
          {
            name: "Boğa yükselen",
            text: "Tam karşıt burcunuzda (7. ev: evlilik, ortaklık, sözleşmeler ve açık muhataplar) gerçekleşen Merkür retrosu, ilişkilerdeki iletişim dilinizi mercek altına alıyor. Eski eş veya eski partnerlerle yarım kalmış konuşmalar tekrar açılabilir; mevcut ilişkinizde ise 'Sen o gün şöyle demiştin' tartışmalarına dikkat etmelisiniz. Yeni bir ortaklık sözleşmesi imzalamak yerine mevcut şartları revize edin.",
          },
          {
            name: "İkizler yükselen",
            text: "Yönetici gezegeniniz Merkür 6. evinizde (çalışma ortamı, günlük rutinler, mesai arkadaşları ve sağlık) geriliyor. İş yerinde evrak hataları, iletişim kopuklukları veya ertelenmiş projelerin yeniden önünüze gelmesi olasıdır; tüm yazışmalarınızı yedekleyin. Sağlıkta ise daha önce ihmal ettiğiniz bir kontrolü yaptırmak veya yarım bıraktığınız bir şifa düzenine dönmek için çok verimli bir dönem.",
          },
          {
            name: "Yengeç yükselen",
            text: "5. evinizde (aşk, tutkular, çocuklar ve yaratıcı projeler) gerileyen Merkür, kalbinizle zihniniz arasında derin bir hafıza taraması başlatıyor. Geçmişte iz bırakmış eski bir aşk yeniden haber gönderebilir veya çocuklarınızla ilgili geçmişten gelen bir gündemi konuşarak çözebilirsiniz. Eskiden yarım bıraktığınız sanatsal ya da edebi bir eseri raftan indirip tamamlamak için muazzam bir ilham akışı var.",
          },
          {
            name: "Aslan yükselen",
            text: "4. evinizde (ev, aile, kökler, ebeveynler ve gayrimenkul) gerçekleşen bu retro, hane içindeki gizli kalmış konuları veya aile geçmişine dair sırları gündeme taşıyor. Ev içi tesisat, elektronik eşyalar veya tapu/kira evraklarında geçmiş pürüzleri onarmanız gerekebilir. Aile bireyleriyle kırıcı tartışmalara girmek yerine geçmiş kırgınlıkları şifalandırmaya odaklanın.",
          },
          {
            name: "Başak yükselen",
            text: "Yöneticiniz Merkür, kendi doğal evi olan 3. evinizde (iletişim, yakın çevre, kardeşler, eğitim, ticaret ve trafik) Akrep derinliğinde geriliyor. Kullandığınız her kelimenin ağırlığı iki katına çıkıyor; yanlış anlaşılan mesajlara, telefon/bilgisayar arızalarına ve seyahat planlarındaki değişikliklere karşı tedbirli olun. Yarım kalmış bir eğitimi veya araştırmayı bitirmek için ise eşsiz bir zihinsel odak yakalayacaksınız.",
          },
          {
            name: "Terazi yükselen",
            text: "2. evinizde (maddi kazançlar, bütçe, alacaklar ve özdeğer) gerileyen Merkür, cüzdanınızın röntgenini çekiyor. Geciken bir ödeme, geçmişten kalan bir fatura veya eski bir gelir kapısı yeniden gündeme gelebilir. Yöneticiniz Venüs de burcunuzda (1. ev) gerilediği için hem kendi değerinizi hem de gelir-gider dengenizi yeniden yapılandıracağınız, lüks harcamalardan uzak durmanız gereken bir dönemdesiniz.",
          },
          {
            name: "Akrep yükselen",
            text: "Merkür doğrudan 1. evinizde (burcunuzda) 20 dereceden 5 dereceye kadar geriliyor. Zihniniz, kararlarınız, dış dünyaya kendinizi ifade ediş biçiminiz ve kişisel planlarınız derin bir içe dönüş sürecinde. Söylediğiniz sözler çok keskin ve dönüştürücü olabilir; kendinizi anlatırken savunmaya geçmemeye özen gösterin. 4 Kasım’daki Güneş–Merkür kavuşumu (Cazimi), hayat yönünüzle ilgili size çok büyük bir berraklık verecek.",
          },
          {
            name: "Yay yükselen",
            text: "12. evinizde (bilinçaltı, rüyalar, gizli kalanlar ve inziva) gerçekleşen Merkür retrosu, zihninizin en derin mahzenlerini açıyor. Rüyalarınız son derece haberci ve sembolik hale gelebilir; geçmişte arkanızdan konuşulan konular veya gizlenen gerçekler hiç beklemediğiniz şekilde kulağınıza gelebilir. Zihinsel gürültüden çekilip terapi, meditasyon ve içsel muhasebe yapmak için yılın en güçlü zamanı.",
          },
          {
            name: "Oğlak yükselen",
            text: "11. evinizde (sosyal çevre, dostluklar, ekip çalışmaları ve gelecek vizyonu) gerileyen Merkür, uzun süredir görmediğiniz eski dostları ve yarım kalmış grup projelerini yeniden karşınıza çıkarıyor. Arkadaş çevrenizde yanlış anlaşılmalardan doğabilecek soğukluklara karşı açık iletişim kurun. Gelecek hedeflerinizi ve kariyer stratejinizi (10. evdeki Venüs retrosuyla birlikte) yeniden revize edeceksiniz.",
          },
          {
            name: "Kova yükselen",
            text: "10. evinizde (kariyer, toplum önündeki statü, yöneticiler ve hedefler) gerçekleşen Merkür retrosu, mesleki iletişimde ve resmi yazışmalarda azami dikkat istiyor. Üst yönetimle yapılan görüşmelerde yanlış anlaşılmalara yer bırakmayın; eski bir iş yerinden teklif alabilir veya geçmişte ertelediğiniz bir kariyer projesini yeniden masaya yatırabilirsiniz. Büyük kariyer imzaları için 14 Kasım sonrasını bekleyin.",
          },
          {
            name: "Balık yükselen",
            text: "Dost su burcunuz Akrep’te, 9. evinizde (yüksek eğitim, akademik çalışmalar, hukuk, uzak yolculuklar ve inançlar) gerçekleşen bu retro, zihinsel ufkunuzu derinleştiriyor. Yarım bıraktığınız bir tez, eğitim, kitap veya hukuki başvuru dosyasını tamamlamak için harika bir fırsat. Vize, pasaport, bilet ve resmi başvurularınızda evraklarınızı iki kez kontrol etmeyi ihmal etmeyin.",
          },
        ],
      },
      en: {
        title: "Mercury Retrograde in Scorpio",
        subtitle: "mental archaeology and the Double Retrograde test from 20°58' to 5°02' Scorpio",
        dates: "24 October – 13 November 2026 · 4 November Mercury Cazimi",
        overview:
          "On 24 October 2026, at 07:13 UTC (10:13 Turkey time), Mercury—the planet of intellect, speech, commerce, and contracts—stations retrograde at 20°58' Scorpio, moving backward until it stations direct on 13 November at 15:54 UTC at 5°02' Scorpio. What makes this transit extraordinary is its 20-day overlap with Venus Retrograde (3 October – 14 November). With both Venus (in Libra) and Mercury (in Scorpio) moving backward simultaneously, no unspoken truth, hidden motive, or unsettled financial account can remain buried.",
        phases: [
          {
            label: "24 October – 3 November · Descent into the Unspoken (20°58' → 12° Scorpio)",
            text: "As Mercury stations in Scorpio, the mind refuses superficial answers. The urge to read between the lines, investigate past records, and revisit unfinished conversations intensifies. Guard against suspicion and reactive speech.",
          },
          {
            label: "4 November 2026 · Mercury Cazimi (11°54' Scorpio — In the Heart of the Sun)",
            text: "At the midpoint of the retrograde on 4 November, Mercury enters the heart of the Sun (Inferior Conjunction / Cazimi) at 11°54' Scorpio. In classical astrology, this is the moment of sharpest insight within the retrograde cycle, revealing hidden answers and strategic clarity.",
          },
          {
            label: "5 November – 13/14 November · Unknotting the Double Retrograde (5°02' Scorpio Direct)",
            text: "Following the 9 November Scorpio New Moon, Mercury stations direct on 13 November (5°02' Scorpio), followed immediately by Venus stationing direct on 14 November (22°52' Libra). Delayed agreements and relational questions finally gain forward momentum.",
          },
        ],
        ask: "How should we navigate the Double Retrograde (Mercury + Venus)?",
        points: [
          {
            lead: "Distinguish intuition from paranoia",
            text: "Mercury in Scorpio grants x-ray perception, yet its shadow breeds obsession and unfounded suspicion. Rely on verified facts rather than assumptions, and use speech as an instrument of diagnosis rather than a weapon.",
          },
          {
            lead: "Audit shared finances, taxes, debts, and digital security",
            text: "Scorpio rules 8th-house matters—shared capital, loans, taxes, insurance, and digital passwords. Back up your data, double-check financial transfers, and postpone binding new loan or partnership signatures until after 14 November.",
          },
          {
            lead: "Use the 4 November Cazimi for deep research and intention",
            text: "When the Sun and Mercury unite at 11°54' Scorpio on 4 November, set aside quiet time for research, psychological reflection, and writing down core insights.",
          },
          {
            lead: "Speak to close old files, wait to sign new ones",
            text: "Messages from past partners or former colleagues peak during this window. Use the transit to resolve lingering misunderstandings, while reserving brand-new ventures for mid-November.",
          },
        ],
        signs: [
          {
            name: "Aries rising",
            text: "Mercury retrogrades through your 8th house (shared finances, loans, taxes, inheritance, and deep psychology). Past issues involving partner income, bank restructuring, or insurance files return for resolution. Alongside Venus retrograding in your 7th house, you are rewriting the terms of both financial and emotional trust.",
          },
          {
            name: "Taurus rising",
            text: "Taking place in your opposite sign (the 7th house of marriage, partnerships, and contracts), Mercury retrograde places your relational dialogue under a magnifying glass. Unfinished conversations with former or current partners resurface. Revise existing agreements carefully before signing new commitments.",
          },
          {
            name: "Gemini rising",
            text: "Your ruler Mercury retrogrades in your 6th house (daily work, colleagues, systems, and health). Expect revisions to projects, schedule adjustments, and the need to back up work files. In health, it is an ideal window to follow up on a postponed checkup or return to a proven wellness routine.",
          },
          {
            name: "Cancer rising",
            text: "Retrograding in your 5th house (love, children, passion, and creative expression), Mercury stirs deep emotional memory. A past romance may reach out, or you may revisit an important conversation with children. An unfinished artistic or written project can now be retrieved and completed with depth.",
          },
          {
            name: "Leo rising",
            text: "Falling in your 4th house (home, family, roots, and property), this retrograde brings household matters, family history, or real estate documents back onto the table. Check home plumbing, electronics, and lease paperwork carefully, and choose healing dialogue over old family friction.",
          },
          {
            name: "Virgo rising",
            text: "Your ruler Mercury retrogrades in your 3rd house (communication, siblings, short journeys, and contracts) with Scorpio intensity. Every spoken or written word carries weight; double-check messages, travel itineraries, and devices, while using this piercing focus to complete delayed research or study.",
          },
          {
            name: "Libra rising",
            text: "Retrograding in your 2nd house (income, budget, and self-worth), Mercury audits your finances. A delayed payment, past invoice, or former source of income may reappear. With your ruler Venus also retrograding in your 1st house, reorganize your budget and avoid impulsive luxury purchases.",
          },
          {
            name: "Scorpio rising",
            text: "Mercury retrogrades directly through your 1st house from 20° to 5° Scorpio. Your voice, personal plans, and outlook undergo a profound internal review. Speak with deliberate calm, and watch for the 4 November Sun–Mercury Cazimi in your sign, which delivers a breakthrough in personal clarity.",
          },
          {
            name: "Sagittarius rising",
            text: "Taking place in your 12th house (the subconscious, dreams, secrets, and solitude), Mercury retrograde opens the inner archives of the mind. Dreams become vividly symbolic, and hidden information may quietly come to light. Step back from external noise for therapy, journaling, and contemplation.",
          },
          {
            name: "Capricorn rising",
            text: "Retrograding in your 11th house (friendships, alliances, group projects, and future goals), Mercury reconnects you with old friends and unfinished collective plans. Clear up misunderstandings within teams and refine your long-range strategy alongside Venus retrograding in your 10th house.",
          },
          {
            name: "Aquarius rising",
            text: "Falling in your 10th house (career, public reputation, and authority), Mercury retrograde calls for precision in professional communication. Review presentations and official emails twice; a former employer or delayed career opportunity may resurface for reconsideration.",
          },
          {
            name: "Pisces rising",
            text: "In fellow water sign Scorpio, Mercury retrogrades through your 9th house (higher education, law, publishing, travel, and philosophy). It is an exceptional time to revise a thesis, manuscript, or legal filing, while verifying visa, passport, and travel details carefully.",
          },
        ],
      },
      sv: {
        title: "Merkurius retrograd i Skorpionen",
        subtitle: "mental arkeologi och dubbelretrogradens prövning från 20°58' till 5°02' Skorpionen",
        dates: "24 oktober – 13 november 2026 · 4 november Merkurius Cazimi",
        overview:
          "Den 24 oktober 2026 kl. 07:13 UTC (10:13 turkisk tid) vänder Merkurius — tankens, ordets, handelns och avtalens planet — retrograd på 20°58' Skorpionen och går bakåt tills den vänder direkt den 13 november kl. 15:54 UTC på 5°02' Skorpionen. Det som gör denna period unik är dess 20 dagar långa överlappning med Venus retrograd (3 oktober – 14 november). När både Venus (i Vågen) och Merkurius (i Skorpionen) går bakåt samtidigt kan inga dolda motiv, outtalade sanningar eller oavslutade räkenskaper förbli gömda.",
        phases: [
          {
            label: "24 oktober – 3 november · Nedstigning i det outtalade (20°58' → 12° Skorpionen)",
            text: "När Merkurius vänder i Skorpionen söker sinnet under ytan. Behovet att läsa mellan raderna, granska äldre dokument och återuppta oavslutade samtal ökar. Akta dig för misstänksamhet och förhastade ord.",
          },
          {
            label: "4 november 2026 · Merkurius Cazimi (11°54' Skorpionen — I Solens hjärta)",
            text: "Mitt i retrograden, den 4 november, stiger Merkurius in i Solens hjärta (Cazimi) på 11°54' Skorpionen. I klassisk astrologi är detta ögonblicket av skarpast insikt och klarhet mitt i retrogradcykeln.",
          },
          {
            label: "5 november – 13/14 november · Dubbelknuten löses upp (5°02' Skorpionen direkt)",
            text: "Efter nymånen i Skorpionen den 9 november vänder Merkurius direkt den 13 november (5°02' Skorpionen) och dagen därpå, den 14 november, vänder även Venus direkt (22°52' Vågen). Uppskjutna avtal och beslut får äntligen fart framåt.",
          },
        ],
        ask: "Hur navigerar vi under dubbelretrograden (Merkurius + Venus)?",
        points: [
          {
            lead: "Skilj intuition från paranoia",
            text: "Merkurius i Skorpionen ger röntgensyn, men dess skugga skapar tvivel och misstänksamhet. Håll dig till bekräftade fakta och använd ordet till läkning och analys snarare än konflikt.",
          },
          {
            lead: "Granska delad ekonomi, skatter, lån och digital säkerhet",
            text: "Skorpionen styr det 8:e husets områden — delade tillgångar, lån, försäkringar och lösenord. Säkerhetskopiera dina filer, kontrollera överföringar noga och vänta med nya låne- eller avtalsunderskrifter till efter den 14 november.",
          },
          {
            lead: "Använd Cazimi-dagen den 4 november till forskning och fokus",
            text: "När Solen och Merkurius möts på 11°54' Skorpionen den 4 november öppnas ett kraftfullt fönster för djupstudier, självreflektion och strategisk insikt.",
          },
          {
            lead: "Tala ut för att stänga gamla akter, vänta med nya kontrakt",
            text: "Meddelanden från tidigare partner eller kollegor når sin kulmen. Red ut gamla missförstånd, men spara helt nya åtaganden till mitten av november.",
          },
        ],
        signs: [
          {
            name: "Vädur stigande",
            text: "Merkurius går retrograd i ditt 8:e hus (delad ekonomi, lån, skatter och djuppsykologi). Äldre frågor kring partnerns inkomst, bankavtal eller arv tas upp till ny granskning. Tillsammans med Venus retrograd i 7:e huset omformar du villkoren för tillit.",
          },
          {
            name: "Oxe stigande",
            text: "I ditt motsatta tecken (7:e huset för äktenskap, partnerskap och avtal) sätter Merkurius retrograd dialogen i dina närmaste relationer under lupp. Oavslutade samtal återkommer; revidera befintliga villkor i stället för att hasta in i nya avtal.",
          },
          {
            name: "Tvillingar stigande",
            text: "Din härskare Merkurius går retrograd i ditt 6:e hus (arbetsrutiner, kollegor och hälsa). Räkna med omarbetningar av projekt och säkerhetskopiera viktiga dokument. Det är en utmärkt tid att följa upp en hälsokontroll.",
          },
          {
            name: "Kräfta stigande",
            text: "I ditt 5:e hus (kärlek, barn och skapande) väcker Merkurius retrograd djupa minnen. En tidigare romantisk kontakt kan höra av sig, eller så slutför du ett konstnärligt eller skriftligt arbete som legat vilande.",
          },
          {
            name: "Lejon stigande",
            text: "I ditt 4:e hus (hem, familj, rötter och fastigheter) lyfter retrograden fram familjehistoria, bostadsdokument eller praktiska reparationer i hemmet. Välj lugna samtal som läker gamla spänningar.",
          },
          {
            name: "Jungfru stigande",
            text: "Din härskare Merkurius går retrograd i ditt 3:e hus (kommunikation, syskon, studier och korta resor). Varje ord väger tungt; dubbelkolla meddelanden och resplaner, och använd skärpan till att avsluta påbörjad forskning.",
          },
          {
            name: "Våg stigande",
            text: "I ditt 2:a hus (inkomster, budget och självvärde) granskar Merkurius din ekonomi. En försenad betalning eller tidigare inkomstkälla kan dyka upp på nytt. Undvik impulsiva utgifter medan även Venus går retrograd i ditt 1:a hus.",
          },
          {
            name: "Skorpion stigande",
            text: "Merkurius går retrograd rakt genom ditt 1:a hus från 20° till 5° Skorpionen. Din röst, dina beslut och dina personliga planer genomgår en djup inre omprövning. Cazimi-dagen den 4 november i ditt tecken ger dig avgörande klarhet.",
          },
          {
            name: "Skytt stigande",
            text: "I ditt 12:e hus (det undermedvetna, drömmar och avskildhet) öppnar Merkurius retrograd sinnets inre arkiv. Drömmar bär tydliga budskap och dolda sammanhang klarnar genom stillhet och reflektion.",
          },
          {
            name: "Stenbock stigande",
            text: "I ditt 11:e hus (vänskap, nätverk och framtidsplaner) återknyter Merkurius kontakten med gamla vänner och vilande gruppprojekt. Klargör missförstånd och finslipa din långsiktiga strategi.",
          },
          {
            name: "Vattuman stigande",
            text: "I ditt 10:e hus (karriär, anseende och ledning) kräver Merkurius retrograd noggrannhet i yrkesmässig kommunikation.Ett tidigare karriärerbjudande eller projekt kan återkomma för ny bedömning.",
          },
          {
            name: "Fiskar stigande",
            text: "I vattentecknet Skorpionen går Merkurius retrograd i ditt 9:e hus (högre studier, juridik, publicering och långa resor). En utmärkt tid att färdigställa en uppsats eller juridisk ansökan och dubbelkolla resehandlingar.",
          },
        ],
      },
    },
  },
  {
    slug: "akrep-yeniayi",
    glyph: "♏●",
    badge: "runeyard.net · Gökyüzü Notu · ♏ 🌑",
    image: "/astroloji/akrep-yeniayi.jpg",
    data: {
      tr: {
        title: "9 Kasım Akrep Yeniayı",
        subtitle: "16°53' Akrep’te küllerinden doğuş, kriz temizliği ve derin ruhsal yenilenme",
        dates: "9 Kasım 2026 · Saat 10:02 · 16°53' Akrep",
        overview:
          "9 Kasım 2026 tarihinde, Türkiye saatiyle 10:02’de Akrep burcunun 16°53' derecesinde yılın en derin ve dönüştürücü Yeniaylarından biri gerçekleşiyor. Akrep burcu; ölüm ve yeniden doğuşu, kriz yönetimini, ortak kaynakları, mahremiyeti ve ruhsal simyayı yönetir. Bu Yeniay meydana gelirken hem burçta eşlik eden Merkür (7° Akrep) hem de Terazi’nin sonundaki Venüs (23° Terazi) geri hareketlerinin son günlerini yaşıyor (13 ve 14 Kasım’da düz harekete geçecekler). Dolayısıyla 9 Kasım Akrep Yeniayı, Ekim başından beri süregelen krizlerin kabuğunu çatlatan, çürümüş olanı kesip atan ve küllerin içinden yepyeni bir irade doğuran gerçek bir ‘Simurg (Zümrüdüanka) eşiği’dir.",
        ask: "Gökyüzü bizden ne istiyor?",
        points: [
          {
            lead: "Ömrünü tamamlamış bağları ve korkuları bırakın",
            text: "Akrep Yeniayı yarım yamalak onarımları kabul etmez; kangren olmuş bir alışkanlığı, toksik bir borç/bağımlılık ilişkisini veya kaybetme korkusunu kökünden temizlemenizi ister. Bıraktığınız anda yaşam enerjiniz (libido ve irade) hızla geri döner.",
          },
          {
            lead: "Finansal stratejinizi ve ortak bütçeyi yeniden kurun",
            text: "Borç yapılandırması, kredi kapatma, vergi, miras, sigorta veya ortaklı yatırımlar için yeni ve sağlam bir strateji belirleme zamanıdır. Yeniayda planınızı kurun; resmi imzaları ise Merkür ve Venüs’ün düz harekete geçtiği 14 Kasım sonrasına yerleştirin.",
          },
          {
            lead: "Ruhsal arınma, gölge çalışması ve şifaya adım atın",
            text: "Akrep’in üç oktavı Akrep (savunma), Kartal (yüksek görü) ve Simurg’dur (şifa ve yeniden doğuş). Bastırdığınız bir travmayla yüzleşmek, terapiye veya ezoterik/şamanik şifa çalışmalarına başlamak için yılın en güçlü tohumlama anıdır.",
          },
        ],
        signs: [
          {
            name: "Koç yükselen",
            text: "8. evinizde (ortak paralar, krediler, borçlar, miras ve derin psikolojik dönüşüm) gerçekleşen bu Yeniay, finansal ve duygusal krizleri kökten çözmeniz için güçlü bir kapı açıyor. Eşin geliri, banka borçları, vergi veya nafaka konularında yeni bir yapılandırma planı kurabilirsiniz. Psikolojik olarak ise sizi esir alan bir korkuyu geride bırakıp küllerinizden doğuyorsunuz.",
          },
          {
            name: "Boğa yükselen",
            text: "Tam karşıt burcunuzda (7. ev: evlilik, ortaklık ve ikili anlaşmalar) doğan 16° Akrep Yeniayı, ilişkilerinizde yepyeni bir sayfa açıyor. 26 Ekim’deki burcunuzdaki Dolunayda yaptığınız büyük elemeden sonra, şimdi gerçekten güvenebileceğiniz, derin ve sarsılmaz bağlar kurma zamanı. 14 Kasım’dan itibaren ilişkilerdeki tüm retro sisleri dağılıyor.",
          },
          {
            name: "İkizler yükselen",
            text: "6. evinizde (çalışma düzeni, meslek içi görevler, günlük alışkanlıklar ve sağlık) gerçekleşen Yeniay, gündelik hayatınızı kökten yeniliyor. Size enerji kaybettiren bir iş yöntemini bırakıp çok daha verimli bir düzene geçebilirsiniz. Bedensel detoks, üreme/boşaltım sistemi sağlığı ve bağışıklığınızı güçlendirecek yeni bir şifa programına başlamak için idealdir.",
          },
          {
            name: "Yengeç yükselen",
            text: "Dost su burcunuz Akrep’te, 5. evinizde (aşk, tutku, çocuklar ve yaratıcı eserler) doğan bu Yeniay size muazzam bir yaşam enerjisi ve çekim gücü veriyor. Kalbinizi gerçekten heyecanlandıran derin bir romantik başlangıç yapabilir, çocuklarınızla ilgili sevindirici yeni bir sürece girebilir veya tutkuyla bağlanacağınız yaratıcı bir projeyi hayata geçirebilirsiniz.",
          },
          {
            name: "Aslan yükselen",
            text: "4. evinizde (ev, yuva, aile kökleri ve gayrimenkul) gerçekleşen Akrep Yeniayı, yaşam alanınızda ve aile içi dinamiklerinizde köklü bir yenilenme başlatıyor. Taşınma, ev içi tadilat, mülk alım-satımı veya aile büyükleriyle ilgili bir konuda yeni ve sağlam bir temel atabilirsiniz. Kendi içsel mahremiyetinizi ve ev huzurunuzu her şeyin üstüne koyacaksınız.",
          },
          {
            name: "Başak yükselen",
            text: "3. evinizde (iletişim, yakın çevre, kardeşler, ticari sözleşmeler ve eğitim) doğan Yeniay, zihninize olağanüstü bir derinlik ve stratejik güç katıyor. Araştırma, yazarlık, danışmanlık veya ticari bir projede yeni bir adım atabilirsiniz. Yakın çevrenizde ve kardeş ilişkilerinizde yüzeysel konuşmalar bitiyor; gerçek ve güvene dayalı yeni bir iletişim dönemi başlıyor.",
          },
          {
            name: "Terazi yükselen",
            text: "2. evinizde (maddi kazançlar, gelir kaynakları ve özdeğer) gerçekleşen 16° Akrep Yeniayı, finansal gücünüzü yeniden inşa etmeniz için tohum ekiyor. Ekim başından beri süren maddi belirsizliklerin ardından yeni bir gelir kapısı, maaş düzenlemesi veya kazanç stratejisi geliştirebilirsiniz. 14 Kasım’da burcunuzdaki Venüs de düz harekete geçtiğinde bereket akışınız hızlanacak.",
          },
          {
            name: "Akrep yükselen",
            text: "Sizin Yeniayınız. 1. evinizde 16°53' derecede doğan bu güçlü Yeniay, hayatınızın tüm alanlarında yılda bir kez gelen büyük ‘kabuk değiştirme ve yeniden doğuş’ anıdır. Kimliğiniz, fiziksel duruşunuz, hedefleriniz ve ilişkilerdeki sınırlarınız tamamen yenileniyor. 13 Kasım’da burcunuzdaki Merkür de düz harekete geçtiğinde, ektiğiniz bu tohumlar hızla filizlenecek.",
          },
          {
            name: "Yay yükselen",
            text: "12. evinizde (bilinçaltı, ruhsal arınma, gizli hazırlıklar ve inziva) gerçekleşen Yeniay, doğum gününüz (Yay sezonu) öncesinde derin bir içsel temizlik başlatıyor. Sırtınızda taşıdığınız geçmiş pişmanlıkları, gizli düşmanlıkları ve enerjinizi emen alışkanlıkları tamamen kapatıyorsunuz. Sahne arkasında yürüttüğünüz stratejik bir hazırlık yakında büyük bir güce dönüşecek.",
          },
          {
            name: "Oğlak yükselen",
            text: "11. evinizde (sosyal çevre, güçlü dostluklar, dernekler ve gelecek vizyonu) doğan Akrep Yeniayı, hedeflerinize giden yolda size stratejik müttefikler kazandırıyor. Yüzeysel kalabalıklardan sıyrılıp, vizyonunuzu paylaşan güçlü ve etkili insanlarla yeni bir ekip veya proje başlatabilirsiniz. Gelecek planlarınızda çok daha kararlı bir evreye geçiyorsunuz.",
          },
          {
            name: "Kova yükselen",
            text: "10. evinizde (kariyer, toplum önündeki statü, otorite ve zirve hedefler) gerçekleşen bu Yeniay, meslek hayatınızda güçlü bir dönüşüm ve yükseliş tohumu ekiyor. Yeni bir görev, terfi, iş değişikliği veya kendi işinizi kurma yönünde stratejik bir adım atabilirsiniz. Kriz yönetimindeki ustalığınız toplum ve yöneticiler önünde sizi zirveye taşıyacak.",
          },
          {
            name: "Balık yükselen",
            text: "Dost su burcunuz Akrep’te, 9. evinizde (yüksek eğitim, akademik kariyer, hukuk, yurtdışı ve hayat felsefesi) doğan Yeniay, ufkunuzu derinleştirip genişletiyor. Uluslararası bir iş, akademik bir program, yayıncılık veya hukuki bir süreçte güçlü bir başlangıç yapabilirsiniz. Sezgileriniz ve ruhsal kavrayışınız bu dönemde en yüksek noktasında çalışıyor.",
          },
        ],
      },
      en: {
        title: "9 November Scorpio new moon",
        subtitle: "rebirth from the ashes, crisis clearing, and deep renewal at 16°53' Scorpio",
        dates: "9 November 2026 · 07:02 UTC (10:02 TRT) · 16°53' Scorpio",
        overview:
          "On 9 November 2026, at 07:02 UTC (10:02 Turkey time), a potent New Moon takes place at 16°53' Scorpio. Scorpio governs death and rebirth, shared resources, crisis mastery, intimacy, and spiritual alchemy. This New Moon arrives in the final days of the Double Retrograde—with Mercury at 7° Scorpio and Venus at 23° Libra preparing to station direct on 13 and 14 November. It is the true Phoenix threshold of the autumn: cracking open the shell of October's crises, cutting away what has decayed, and planting a resilient new will.",
        ask: "What does the sky want from us?",
        points: [
          {
            lead: "Release exhausted bonds and survival fears",
            text: "A Scorpio New Moon does not accept half-measures; it asks you to sever draining dependencies and fear of loss at the root. The moment you let go, vitality and clarity return.",
          },
          {
            lead: "Rebuild your financial strategy and shared capital",
            text: "Use this window to design a clear plan for debt restructuring, taxes, inheritance, investments, or shared budgets—setting your blueprint now and executing formal signatures as Mercury and Venus turn direct on 13–14 November.",
          },
          {
            lead: "Commit to shadow work and deep healing",
            text: "Scorpio ascends from the Scorpion (defense) to the Eagle (clear sight) and the Phoenix (rebirth). It is the strongest lunar seed of the year for therapy, trauma release, and esoteric practice.",
          },
        ],
        signs: [
          {
            name: "Aries rising",
            text: "Taking place in your 8th house (shared finances, loans, taxes, inheritance, and psychological rebirth), this New Moon opens a clean slate in financial and emotional entanglements. Formulate a new debt or investment plan and shed a long-held fear.",
          },
          {
            name: "Taurus rising",
            text: "Born in your opposite sign (the 7th house of marriage, partnership, and covenants), the 16° Scorpio New Moon initiates a new chapter in one-to-one relationships. Following the 26 October Full Moon in your sign, you now build bonds rooted in mutual trust.",
          },
          {
            name: "Gemini rising",
            text: "Falling in your 6th house (work routines, craft, service, and bodily health), this New Moon regenerates your daily rhythm. Replace draining work habits with focused structure and begin a restorative health or detoxification regimen.",
          },
          {
            name: "Cancer rising",
            text: "In fellow water sign Scorpio, this New Moon illuminates your 5th house (love, passion, children, and creative mastery), restoring magnetic vitality. A deep romantic chapter, a joyful development with children, or an inspired creative work takes root.",
          },
          {
            name: "Leo rising",
            text: "Taking place in your 4th house (home, family, ancestral roots, and property), the Scorpio New Moon initiates a foundational renewal in your living space and family dynamics, strengthening your sanctuary and inner security.",
          },
          {
            name: "Virgo rising",
            text: "Born in your 3rd house (communication, siblings, study, and commercial agreements), this New Moon gives your mind investigative depth. Launch a research project, writing endeavor, or honest dialogue within your close circle.",
          },
          {
            name: "Libra rising",
            text: "Falling in your 2nd house (personal income, resources, and self-worth), the 16° Scorpio New Moon plants seeds for financial resilience. As your ruler Venus stations direct in your sign on 14 November, new income strategies gain traction.",
          },
          {
            name: "Scorpio rising",
            text: "Your New Moon. Rising at 16°53' in your 1st house, this is your annual threshold of personal shedding and rebirth. Your identity, bodily vitality, and personal aims renew from the core as Mercury prepares to turn direct in your sign on 13 November.",
          },
          {
            name: "Sagittarius rising",
            text: "Taking place in your 12th house (the subconscious, spiritual cleansing, and quiet preparation), this New Moon clears old regrets and hidden drains ahead of your solar season, turning behind-the-scenes preparation into quiet strength.",
          },
          {
            name: "Capricorn rising",
            text: "Born in your 11th house (alliances, friendships, and long-range vision), the Scorpio New Moon draws resolute allies and transformative group projects into your orbit, sharpening your ambitions for the year ahead.",
          },
          {
            name: "Aquarius rising",
            text: "Falling in your 10th house (career, public standing, and leadership), this New Moon plants a powerful seed for professional transformation, authority, and strategic advancement.",
          },
          {
            name: "Pisces rising",
            text: "In fellow water sign Scorpio, this New Moon opens your 9th house (higher learning, law, international horizons, and spiritual philosophy), deepening your wisdom and long-distance endeavors.",
          },
        ],
      },
      sv: {
        title: "9 november, Skorpionens nymåne",
        subtitle: "pånyttfödelse ur askan, krisrening och djup förnyelse på 16°53' Skorpionen",
        dates: "9 november 2026 · Kl. 07:02 UTC (10:02 TRT) · 16°53' Skorpionen",
        overview:
          "Den 9 november 2026 kl. 07:02 UTC (10:02 turkisk tid) äger en djup och förvandlande nymåne rum på 16°53' Skorpionen. Skorpionen styr död och pånyttfödelse, gemensamma resurser, krishantering och andlig alkemi. Denna nymåne infaller under dubbelretrogradens sista dagar — strax innan Merkurius (13 november) och Venus (14 november) vänder direkt. Det är höstens verkliga Fenix-tröskel: där det gamla skalet brister och en ny vilja föds ur askan.",
        ask: "Vad vill himlen av oss?",
        points: [
          {
            lead: "Släpp uttjänta band och rädslor",
            text: "En nymåne i Skorpionen nöjer sig inte med halva lösningar; den ber dig skära bort dränerande beroenden och förlusträdsla vid roten så att livskraften kan återvända.",
          },
          {
            lead: "Bygg om din ekonomiska strategi och delade budget",
            text: "Lägg upp en tydlig plan för skuldsanering, skatter, arv eller gemensamma investeringar nu, och sätt de formella underskrifterna när Merkurius och Venus vänt direkt efter den 14 november.",
          },
          {
            lead: "Öppna för skuggarbete och djup läkning",
            text: "Detta är årets starkaste nymåne för terapi, traumaläkning och esoteriskt inre arbete.",
          },
        ],
        signs: [
          {
            name: "Vädur stigande",
            text: "I ditt 8:e hus (delad ekonomi, lån, arv och djup förvandling) öppnar denna nymåne för en genomgripande sanering av både ekonomiska och känslomässiga band.",
          },
          {
            name: "Oxe stigande",
            text: "I ditt motsatta tecken (7:e huset för äktenskap och partnerskap) inleder nymånen på 16° Skorpionen ett nytt kapitel byggt på djup tillit och ömsesidig respekt.",
          },
          {
            name: "Tvillingar stigande",
            text: "I ditt 6:e hus (arbetsrutiner och hälsa) förnyar nymånen din vardag och ger kraft att lämna dränerande vanor till förmån för läkning och struktur.",
          },
          {
            name: "Kräfta stigande",
            text: "I vattentecknet Skorpionen lyser nymånen upp ditt 5:e hus (kärlek, livslust, barn och skapande) och väcker stark inspiration och romantisk fördjupning.",
          },
          {
            name: "Lejon stigande",
            text: "I ditt 4:e hus (hem, familj och rötter) lägger nymånen i Skorpionen en ny, trygg grund i ditt boende och familjeliv.",
          },
          {
            name: "Jungfru stigande",
            text: "I ditt 3:e hus (kommunikation, syskon, studier och avtal) ger nymånen ditt sinne strategiskt djup för forskning, skrivande och ärliga samtal.",
          },
          {
            name: "Våg stigande",
            text: "I ditt 2:a hus (egna inkomster och självvärde) sår nymånen frön för ekonomisk styrka som tar fart när Venus vänder direkt i ditt tecken den 14 november.",
          },
          {
            name: "Skorpion stigande",
            text: "Din nymåne. På 16°53' i ditt 1:a hus är detta din årliga tröskel för personlig pånyttfödelse, ny livskraft och klara gränser.",
          },
          {
            name: "Skytt stigande",
            text: "I ditt 12:e hus (det undermedvetna och inre rening) rensar nymånen ut gamla bördor inför din egen solperiod och bygger tyst inre styrka.",
          },
          {
            name: "Stenbock stigande",
            text: "I ditt 11:e hus (vänner, allianser och framtidsmål) för nymånen samman dig med pålitliga bundsförvanter och starka framtidsprojekt.",
          },
          {
            name: "Vattuman stigande",
            text: "I ditt 10:e hus (karriär, ställning och ledarskap) sår nymånen ett kraftfullt frö för yrkesmässig förvandling och auktoritet.",
          },
          {
            name: "Fiskar stigande",
            text: "I ditt 9:e hus (högre utbildning, juridik, långa resor och livsåskådning) vidgar och fördjupar nymånen din andliga och intellektuella horisont.",
          },
        ],
      },
    },
  },
  {
    slug: "ikizler-dolunayi",
    glyph: "♊○",
    badge: "runeyard.net · Gökyüzü Notu · ♊ 🌕",
    image: "/astroloji/ikizler-dolunayi.jpg",
    data: {
      tr: {
        title: "24 Kasım İkizler Dolunayı",
        subtitle: "2°20' İkizler–Yay ekseninde retrolar sonrası ilk büyük netlik ve sözün hasadı",
        dates: "24 Kasım 2026 · Saat 17:53 · 2°20' İkizler",
        overview:
          "24 Kasım 2026 tarihinde, Türkiye saatiyle 17:53’te İkizler burcunun 2°20' derecesinde zihinleri, yolları ve sözleşmeleri aydınlatan çok önemli bir Dolunay gerçekleşiyor. Tam karşısında, Yay burcunun 2°20' derecesindeki Güneş duruyor. Bu Dolunayı benzersiz kılan şey, Ekim ve Kasım aylarını domine eden hem Merkür Retrosunun (13 Kasım’da bitti) hem de Venüs Retrosunun (14 Kasım’da bitti) artık tamamen geride kalmış olmasıdır! Dolunayın yöneticisi Merkür, Akrep burcunda düz hareketiyle hızını toplamış; Venüs ise Terazi’de düz harekete geçerek ilişkilerdeki teraziyi doğrultmuş durumda. İki ay boyunca bekleyen kararlar, ertelenen imzalar, düğümlenen konuşmalar ve eğitim/ticaret adımları bu Dolunayla birlikte yüksek sesle ilan ediliyor.",
        ask: "Gökyüzü bizden ne istiyor?",
        points: [
          {
            lead: "Ekim ve Kasım’da olgunlaşan kararları artık imzaya ve söze dökün",
            text: "Çifte Retro boyunca beklediğiniz, araştırdığınız ve tarttığınız sözleşmeler, ticari girişimler, başvurular veya ilişki kararları için gökyüzünün yeşil ışığı yanmış durumda. Düşüncenizi net bir dille ifade edin.",
          },
          {
            lead: "Bilgi kirliliği ile büyük vizyonu (İkizler–Yay ekseni) dengeleyin",
            text: "İkizler yakın çevreyi, veriyi ve tek tek detayları; karşıt burcu Yay ise büyük resmi, ilkeyi ve uzak ufku temsil eder. Dedikodu veya dağınık gündemlerde boğulmak yerine, elinizdeki bilgiyi uzun vadeli bir hedefe bağlayın.",
          },
          {
            lead: "Zihni, nefesi ve sinir sistemini dinlendirin",
            text: "İkizler Dolunayı zihinsel trafiği, telefonları, yazışmaları ve yolculukları hızlandırır. Akciğerler, bronşlar, omuzlar, kollar ve sinir sistemini korumak için nefes çalışmaları yapın ve uykunuzu ihmal etmeyin.",
          },
        ],
        signs: [
          {
            name: "Koç yükselen",
            text: "3. evinizde (iletişim, sözleşmeler, yakın çevre, kardeşler, eğitim ve ticaret) parlayan bu Dolunay, iki aydır bekleyen bir anlaşmayı, projeyi veya resmi başvuruyu hızla sonuçlandırıyor. Kardeşler veya yakın çevrenizle ilgili bir gündem netleşirken; kısa yolculuklar, araç alım-satımı veya dijital/ticari bir girişimde somut imzalar atabilirsiniz.",
          },
          {
            name: "Boğa yükselen",
            text: "2. evinizde (maddi kazançlar, bütçe ve özdeğer) gerçekleşen İkizler Dolunayı, gelir-gider dengenizi ve ticari kazançlarınızı aydınlatıyor. Ekim ve Kasım boyunca yaptığınız finansal revizyonların meyvesini toplama zamanı. Yeni bir gelir anlaşması, zam, alacak tahsili veya yeteneklerinizi paraya dönüştürecek bir sözleşme kesinleşebilir.",
          },
          {
            name: "İkizler yükselen",
            text: "Sizin Dolunayınız. 1. evinizde 2°20' derecede gerçekleşen bu Dolunay, yöneticiniz Merkür’ün de düz harekete geçmesiyle birlikte üzerinizdeki tüm ölü toprağını atıyor. İkili ilişkiler, ortaklıklar (7. ev Yay Güneş’i), dış görünümünüz ve hayat yönünüzle ilgili çok net bir karar alıp ilan edeceksiniz. Sözünüzün ve imzanızın en güçlü olduğu dönemdesiniz.",
          },
          {
            name: "Yengeç yükselen",
            text: "12. evinizde (bilinçaltı, perde arkası konular ve ruhsal dinlenme) gerçekleşen Dolunay, çalışma hayatınız ve günlük düzeninizdeki (6.–12. ev aksı) zihinsel yorgunlukları temizliyor. Gizli kalmış bir bilgi veya belge önünüze düşebilir; size yük olan bir iş angaryasını sonlandırıp zihinsel ve bedensel sağlığınızı ferahlatacak bir düzene geçebilirsiniz.",
          },
          {
            name: "Aslan yükselen",
            text: "11. evinizde (sosyal çevre, dostluklar, ekip çalışmaları ve gelecek hedefleri) parlayan İkizler Dolunayı, sosyal hayatınızı ve projelerinizi canlandırıyor. 5. evdeki Yay Güneş’i ile birlikte hem aşk hayatınızda hem de yaratıcı ekip çalışmalarınızda beklediğiniz haberler geliyor. Üzerinde çalıştığınız bir organizasyon veya topluluk projesi başarıyla görünür oluyor.",
          },
          {
            name: "Başak yükselen",
            text: "10. evinizde (kariyer, toplum önündeki statü ve mesleki hedefler) gerçekleşen bu Dolunay, yöneticiniz Merkür’ün de düz harekette olmasıyla kariyerinizde büyük bir netlik ve hasat getiriyor. İş değişikliği, terfi, resmi bir atama veya aile–kariyer ekseninde (4.–10. ev) bekleyen önemli bir karar herkesin önünde kesinleşiyor.",
          },
          {
            name: "Terazi yükselen",
            text: "Dost hava burcunuz İkizler’de, 9. evinizde (yüksek eğitim, hukuk, uluslararası işler, yayıncılık ve uzak yolculuklar) parlayan Dolunay size nefes aldırıyor. Yöneticiniz Venüs’ün burcunuzda düz harekete geçmesinin ardından; bekleyen bir mahkeme/hukuk dosyası, akademik sınav, vize/seyahat planı veya medya/yayın projesi lehinize sonuçlanıyor.",
          },
          {
            name: "Akrep yükselen",
            text: "8. evinizde (ortak paralar, krediler, borçlar, vergiler, miras ve yatırımlar) gerçekleşen İkizler Dolunayı, burcunuzdaki Merkür retrosunun (24 Ekim – 13 Kasım) açtığı tüm finansal dosyaları resmi bir sonuca bağlıyor. Bir kredi başvurusu, borç kapatma, miras paylaşımı veya eşin/ortağın geliriyle ilgili beklenen imza ve ödeme tamamlanıyor.",
          },
          {
            name: "Yay yükselen",
            text: "Tam karşıt burcunuzda (7. ev: evlilik, ortaklık, danışmanlıklar ve açık sözleşmeler) gerçekleşen bu Dolunay, ikili ilişkilerinizi ve kontratlarınızı aydınlatıyor. Güneş sizin burcunuzda 2 derecede parlarken, karşı tarafla olan bir ilişki veya iş ortaklığı net bir karara (ciddi bir adım, sözleşme imzası veya açık bir mutabakat) ulaşıyor.",
          },
          {
            name: "Oğlak yükselen",
            text: "6. evinizde (çalışma ortamı, iş arkadaşları, günlük görevler ve sağlık) parlayan İkizler Dolunayı, iş hayatındaki belirsizlikleri ortadan kaldırıyor. Üzerinde çalıştığınız bir iş projesi tamamlanabilir, yeni bir çalışma arkadaşı/asistan göreve başlayabilir veya günlük verimliliğinizi artıracak yeni bir sistem kurabilirsiniz. Solunum yolları ve omuz/kol dinlenmesine özen gösterin.",
          },
          {
            name: "Kova yükselen",
            text: "Dost hava burcunuz İkizler’de, 5. evinizde (aşk, flörtler, çocuklar, hobiler ve yaratıcı eserler) gerçekleşen bu Dolunay size neşe, ilham ve netlik getiriyor. Romantik hayatınızda iki aydır süren kafa karışıklığı dağılıyor; kalbinizdeki kişiyle açık bir konuşma yapabilirsiniz. Çocuklarınızla ilgili güzel bir gelişme veya yaratıcı bir projenin lansmanı gündeme gelebilir.",
          },
          {
            name: "Balık yükselen",
            text: "4. evinizde (ev, yuva, aile ve gayrimenkul) gerçekleşen İkizler Dolunayı, 10. evdeki Yay Güneş’i ile birlikte hem ev hem de kariyer düzeninizde önemli bir kararı netleştiriyor. Taşınma, kira/tapu sözleşmesi, ev içi düzenleme veya aile bireyleriyle yapılan bir anlaşma resmiyet kazanıyor.",
          },
        ],
      },
      en: {
        title: "24 November Gemini full moon",
        subtitle: "the first great clarity and harvest of the word after the retrogrades at 2°20' Gemini",
        dates: "24 November 2026 · 14:53 UTC (17:53 TRT) · 2°20' Gemini",
        overview:
          "On 24 November 2026, at 14:53 UTC (17:53 Turkey time), a clarifying Full Moon takes place at 2°20' Gemini opposite the Sun at 2°20' Sagittarius. What makes this lunation a major turning point is that both Mercury Retrograde (ended 13 November) and Venus Retrograde (ended 14 November) now lie behind us. With the Full Moon's ruler Mercury moving direct at full speed in Scorpio and Venus direct in Libra, decisions, contracts, conversations, and educational or commercial plans that were delayed throughout October and November now come to open completion.",
        ask: "What does the sky want from us?",
        points: [
          {
            lead: "Put matured decisions into spoken word and signed agreement",
            text: "The green light has returned for contracts, negotiations, launches, and relational decisions that were researched and tested during the Double Retrograde.",
          },
          {
            lead: "Join precise facts with the larger horizon (Gemini–Sagittarius axis)",
            text: "Gemini gathers immediate data and dialogue; Sagittarius seeks meaning, law, and the far horizon. Connect your daily communication to a clear long-range purpose.",
          },
          {
            lead: "Steady the breath and the nervous system",
            text: "A Gemini Full Moon accelerates messages, travel, and mental activity. Support the lungs, shoulders, arms, and nervous system with conscious breathwork and rest.",
          },
        ],
        signs: [
          {
            name: "Aries rising",
            text: "Illuminating your 3rd house (communication, contracts, siblings, study, and trade), this Full Moon brings a delayed agreement, manuscript, or commercial initiative to swift completion.",
          },
          {
            name: "Taurus rising",
            text: "Taking place in your 2nd house (income, budget, and self-worth), the Gemini Full Moon settles financial questions from the autumn retrogrades, finalizing a salary, payment, or commercial contract.",
          },
          {
            name: "Gemini rising",
            text: "Your Full Moon. Shining at 2°20' in your 1st house with your ruler Mercury now direct, this lunation clears two months of hesitation, bringing a decisive announcement regarding your personal path and partnerships.",
          },
          {
            name: "Cancer rising",
            text: "Falling in your 12th house (the subconscious, behind-the-scenes matters, and rest), this Full Moon reveals a missing piece of information and helps you release mental clutter across your work-and-health axis.",
          },
          {
            name: "Leo rising",
            text: "Shining in your 11th house (friendships, teams, and future goals), the Gemini Full Moon brings culminating news in a group project, community launch, or romantic connection.",
          },
          {
            name: "Virgo rising",
            text: "Taking place in your 10th house (career, public standing, and vocation) with your ruler Mercury direct, this Full Moon delivers professional clarity, recognition, or an official career decision.",
          },
          {
            name: "Libra rising",
            text: "In fellow air sign Gemini, this Full Moon illuminates your 9th house (higher education, law, publishing, and international travel), bringing a legal, academic, or travel matter to a favorable conclusion.",
          },
          {
            name: "Scorpio rising",
            text: "Falling in your 8th house (shared finances, loans, taxes, inheritance, and investments), the Gemini Full Moon finalizes the financial paperwork and settlements reviewed during Mercury's retrograde in your sign.",
          },
          {
            name: "Sagittarius rising",
            text: "Taking place directly opposite your sign in the 7th house (marriage, partnerships, and open contracts), this Full Moon brings a clear agreement or milestone in a key relationship.",
          },
          {
            name: "Capricorn rising",
            text: "Illuminating your 6th house (work environment, daily duties, and health), the Full Moon completes a major work assignment and establishes a clearer daily workflow.",
          },
          {
            name: "Aquarius rising",
            text: "In fellow air sign Gemini, this Full Moon lights up your 5th house (love, joy, children, and creative works), clearing romantic ambiguity and celebrating a creative milestone.",
          },
          {
            name: "Pisces rising",
            text: "Falling in your 4th house (home, family, and real estate) opposite the 10th-house Sun, this Full Moon finalizes a lease, property decision, relocation, or family agreement.",
          },
        ],
      },
      sv: {
        title: "24 november, Tvillingarnas fullmåne",
        subtitle: "den första stora klarheten och ordets skörd efter retrograderna på 2°20' Tvillingarna",
        dates: "24 november 2026 · Kl. 14:53 UTC (17:53 TRT) · 2°20' Tvillingarna",
        overview:
          "Den 24 november 2026 kl. 14:53 UTC (17:53 turkisk tid) äger en klargörande fullmåne rum på 2°20' Tvillingarna mittemot Solen på 2°20' Skytten. Det som gör denna fullmåne till en verklig vändpunkt är att både Merkurius retrograd (avslutad 13 november) och Venus retrograd (avslutad 14 november) nu ligger bakom oss. Med fullmånens härskare Merkurius i direkt rörelse och Venus rättvänd i Vågen kan uppskjutna beslut, avtal, samtal och planer från oktober och november nu fullbordas öppet.",
        ask: "Vad vill himlen av oss?",
        points: [
          {
            lead: "Omsätt mogna beslut i tydliga ord och underskrifter",
            text: "Det gröna ljuset är tillbaka för avtal, förhandlingar och relationsbeslut som prövats under dubbelretrograden.",
          },
          {
            lead: "Förena fakta med den stora horisonten (Tvillingarna–Skytten-axeln)",
            text: "Tvillingarna samlar kunskap och dialog; Skytten söker mening och långsiktig riktning. Knyt dina dagliga val till din större vision.",
          },
          {
            lead: "Stilla andningen och nervsystemet",
            text: "En fullmåne i Tvillingarna ökar tempot i samtal och tankar. Stöd lungor, axlar och nervsystem med medveten andning och vila.",
          },
        ],
        signs: [
          {
            name: "Vädur stigande",
            text: "I ditt 3:e hus (kommunikation, avtal, syskon, studier och handel) för denna fullmåne ett väntande kontrakt eller projekt i mål.",
          },
          {
            name: "Oxe stigande",
            text: "I ditt 2:a hus (inkomster, budget och självvärde) ger fullmånen i Tvillingarna ekonomisk klarhet och avslut på höstens ekonomiska översyn.",
          },
          {
            name: "Tvillingar stigande",
            text: "Din fullmåne. På 2°20' i ditt 1:a hus skingrar den två månaders tvekan och ger ett tydligt besked kring din egen väg och dina relationer.",
          },
          {
            name: "Kräfta stigande",
            text: "I ditt 12:e hus (det undermedvetna och återhämtning) uppenbarar fullmånen viktig information och hjälper dig släppa mental stress.",
          },
          {
            name: "Lejon stigande",
            text: "I ditt 11:e hus (vänskap, grupper och framtidsmål) bär ett gemensamt projekt eller en social satsning synlig frukt.",
          },
          {
            name: "Jungfru stigande",
            text: "I ditt 10:e hus (karriär och offentlig ställning) ger fullmånen med din härskare Merkurius direkt ett viktigt yrkesmässigt avgörande.",
          },
          {
            name: "Våg stigande",
            text: "I lufttecknet Tvillingarna lyser fullmånen upp ditt 9:e hus (högre studier, juridik, publicering och resor) och ger ett gynnsamt avslut.",
          },
          {
            name: "Skorpion stigande",
            text: "I ditt 8:e hus (delad ekonomi, lån, skatter och investeringar) slutför fullmånen de ekonomiska avtal som granskades under Merkurius retrograd i ditt tecken.",
          },
          {
            name: "Skytt stigande",
            text: "Rakt mittemot ditt tecken i 7:e huset (äktenskap, partnerskap och öppna kontrakt) för fullmånen en viktig relation eller överenskommelse till klarhet.",
          },
          {
            name: "Stenbock stigande",
            text: "I ditt 6:e hus (arbete, dagliga rutiner och hälsa) avslutas ett arbetsprojekt och skapar en tydligare struktur i vardagen.",
          },
          {
            name: "Vattuman stigande",
            text: "I ditt 5:e hus (kärlek, glädje, barn och skapande) skingras osäkerhet i kärlekslivet och ett kreativt arbete når sin fullbordan.",
          },
          {
            name: "Fiskar stigande",
            text: "I ditt 4:e hus (hem, familj och fastigheter) fastställs ett beslut kring boende, hyres-/köpeavtal eller familjens gemensamma planer.",
          },
        ],
      },
    },
  },
];

export function findExtraSkyNote(slug: string): SkyNoteEntry | undefined {
  return extraSkyNotes.find((n) => n.slug === slug);
}
