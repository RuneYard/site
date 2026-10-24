import type { Lang } from "@/lib/copy";

export type DailyLoreEntry = {
  slug: string;
  glyph: string;
  traditionTag: Record<Lang, string>;
  keywords: string[];
  title: Record<Lang, string>;
  subtitle: Record<Lang, string>;
  summary: Record<Lang, string>;
  paragraphs: Record<Lang, readonly string[]>;
  keyPoints: Record<Lang, readonly string[]>;
  practice: Record<Lang, { title: string; steps: readonly string[] }>;
  closing: Record<Lang, string>;
};

export const dailyLoreHall = {
  title: {
    tr: "Günlük Ocak Yaprakları · Kadim Bilgelik Kütüğü",
    en: "Daily Hearth Leaves · Chronicle of Ancient Lore",
    sv: "Dagliga Härdblad · Krönika över Forntida Visdom",
  },
  subtitle: {
    tr: "Her gün ocağın ateşinde açılan, daha önce işlenmemiş kadim bir gelenek, tablet, el yazması veya doğa yasası",
    en: "A new, previously untold leaf of ancient tradition, tablet lore, manuscript study, or natural law kindled each day at the hearth",
    sv: "Ett nytt, tidigare oberättat blad ur forntida tradition, lertavlor, handskrifter eller naturlag som tänds varje dag vid härden",
  },
  ui: {
    tr: {
      todayBadge: "BUGÜN OCAKTA AÇILAN YENİ KONU",
      archiveHeading: "Önceki Günlerin Ocak Yaprakları (Arşiv)",
      readMore: "Günlük Yaprağı Oku →",
      askInHearth: "🔥 Bu Konuyu Ocağa Sor",
      backToDaily: "← Günlük Ocak Kütüğüne Dön",
      keyPointsHeading: "Temel İlkeler ve Birincil Kaynak Notları",
    },
    en: {
      todayBadge: "TODAY'S NEW HEARTH DISPATCH",
      archiveHeading: "Chronicle of Previous Hearth Leaves",
      readMore: "Read Today's Leaf →",
      askInHearth: "🔥 Ask the Hearth About This",
      backToDaily: "← Back to Daily Hearth Chronicle",
      keyPointsHeading: "Core Principles & Primary Source Notes",
    },
    sv: {
      todayBadge: "DAGENS NYA HÄRDBLAD",
      archiveHeading: "Tidigare Härdblad (Arkiv)",
      readMore: "Läs Dagens Blad →",
      askInHearth: "🔥 Fråga Härden Om Detta",
      backToDaily: "← Tillbaka till Dagliga Härdblad",
      keyPointsHeading: "Grundprinciper & Primärkällor",
    },
  },
};

export const dailyLoreEntries: DailyLoreEntry[] = [
  {
    slug: "anadolu-ocak-kultu-ve-kul",
    glyph: "🔥",
    traditionTag: {
      tr: "OCAK KÜLTÜ · ALTAY & ANADOLU",
      en: "HEARTH CULT · ALTAI & ANATOLIA",
      sv: "HÄRDKULT · ALTAJ & ANATOLIEN",
    },
    keywords: [
      "ocak kultu",
      "ates iyesi",
      "od ana",
      "kul",
      "ocagin sonmesin",
      "hearth cult",
    ],
    title: {
      tr: "Ocak Kültü ve Od Ana: ‘Ocağın Sönmesin’ Yemininin Kadim Kökeni",
      en: "The Cult of the Hearth and Od Ana: Ancient Roots of 'May Your Hearth Never Go Cold'",
      sv: "Härdkulten och Od Ana: Ursprunget till 'Må Din Härd Aldrig Slockna'",
    },
    subtitle: {
      tr: "Ateşe Su Dökülmemesi, Kül Mührü ve Hanenin Yaşayan Hafızası Olarak Ocak",
      en: "Why Water Was Never Thrown on Embers, the Ash Seal, and the Hearth as Living Memory",
      sv: "Varför Vatten Aldrig Kastas på Glöden, Askförseglingen och Härden som Levande Minne",
    },
    summary: {
      tr: "Altay’dan Anadolu’ya ve Kuzey Avrupa’ya uzanan kadim ocak kültünde ateş yalnızca ısınma aracı değil, soyun sürekliliğini tutan canlı bir iyedir (Od Ana / Ot Ene). ‘Ocağın sönmesin’ duası bu yüzden en büyük hayır sözüdür.",
      en: "Across Altai, Anatolia, and Northern Europe, the hearth fire was never mere fuel—it was revered as a living guardian spirit (Od Ana / Ot Ene) holding the continuity of the household.",
      sv: "Från Altaj och Anatolien till Nordeuropa var härdens eld aldrig bara bränsle—den vördades som ett levande skyddsväsen (Od Ana) som bar hemmets kontinuitet.",
    },
    paragraphs: {
      tr: [
        "Eski Türk ve Altay kozmolojisinde evin tam merkezindeki ocak, yer ile gök arasındaki dikey eksenin (Dünya Ağacı’nın) hane içindeki karşılığıdır. Ocak ateşinin koruyucu ruhuna **Od Ana (Ot Ene)** adı verilir; o, temizleyen, doyuran ve haneyi karanlıktan koruyan bilge bekçidir.",
        "Bu yüzden geleneksel ocak töresinde **ateşe asla su dökülerek söndürülmez**, ateşe tükürülmez, kesici demirle korlar hırpalanmaz. Gece yatarken korların üzeri ince bir kül tabakasıyla örtülerek (**Kül Mührü**) ateş uyutulur; sabah aynı kordan yeni günün ateşi uyandırılır.",
        "Bir aileden yeni bir ev kurulduğunda baba ocağından bir avuç temiz kül veya kor alınıp yeni evin ocağına bırakılması, bilgeliğin ve bereketin kesintisiz aktarımıdır. Bugün dilimizde yaşayan **‘Ocağın şen olsun / Ocağın sönmesin’** sözü doğrudan bu binlerce yıllık töreden gelir.",
      ],
      en: [
        "In ancient Turkic and Altai cosmology, the hearth at the center of the dwelling stands as the domestic axis connecting earth and sky. Its guardian spirit, **Od Ana (Mother Fire)**, purifies, nourishes, and shields the household.",
        "Traditional hearth law therefore forbade extinguishing live embers with water or striking the fire disrespectfully with iron. Instead, at night the embers were gently banked beneath warm ash so the same living spark could awaken the next morning.",
        "When a new home was founded, carrying a handful of clean ash or live coal from the ancestral hearth to the new threshold symbolized unbroken continuity of wisdom and shelter.",
      ],
      sv: [
        "I fornturkisk och altajsk kosmologi utgör härden i hemmets mitt den inre världsaxeln mellan jord och himmel. Dess väktare **Od Ana (Eldmodern)** renar, mättar och skyddar gården.",
        "Enligt gammal härdsed fick elden aldrig släckas bryskt med vatten. På kvällen täcktes glöden varsamt med aska så att samma gnista kunde väckas i gryningen.",
        "Uttrycket 'Må din härd aldrig slockna' bär än i dag minnet av denna obrutna kedja av värme och visdom.",
      ],
    },
    keyPoints: {
      tr: [
        "Od Ana (Ot Ene): Ocak ateşini ve hanenin bereketini koruyan kadim ateş iyesi.",
        "Kül Mührü: Gece ateşi suyla öldürmek yerine külle örtüp sabah aynı özden uyandırma disiplini.",
        "Ocak Külü Aktarımı: Yeni kurulan bir haneye eski ocaktan temiz kül veya tuz götürme geleneği.",
        "Sofra ve Ocak Saygısı: Ateşin başında kavga edilmemesi ve ilk lokmanın şükranla ayrılması.",
      ],
      en: [
        "Od Ana (Mother Fire): The guardian spirit of the domestic hearth and household continuity.",
        "Banking the Embers: Covering live coals with ash overnight rather than drowning them with water.",
        "Hearth Ash Transfer: Carrying ancestral ash or salt to bless a newly established home.",
        "Peace by the Fire: The ancient rule forbidding anger or harsh speech beside the open hearth.",
      ],
      sv: [
        "Od Ana (Eldmodern): Härdens och husfridens uråldriga skyddsväsen.",
        "Täckandet av Glöden: Att bevara eldens gnista under askan över natten.",
        "Askans Överföring: Att föra med sig ren aska eller salt till ett nytt hem.",
        "Frid vid Härden: Den gamla regeln att aldrig föra oväsen eller gräl vid elden.",
      ],
    },
    practice: {
      tr: {
        title: "Günlük Uygulama · Hanede ‘Ocak ve Mum Saygısı’ Dakikası",
        steps: [
          "Akşam çalışma masanda veya mutfağında tek bir mum yaktığında onu sadece bir dekor olarak değil, evinin ‘ocak merkezi’ olarak selamla.",
          "Mumu söndüreceğin zaman üzerine sertçe üflemek yerine bir mum söndürücü (veya metal bir kaşık sırtı) ile alevi incitmeden kapat.",
          "Kapatırken içinden şu kadim cümleyi geçir: ‘Işığın dinlensin, sıcaklığın hanemde kalsın.’",
        ],
      },
      en: {
        title: "Daily Practice · Honoring the Domestic Flame",
        steps: [
          "When lighting a single candle at your desk or table this evening, greet it consciously as the center of your home's quiet hearth.",
          "When extinguishing the flame, use a snuffer or the back of a spoon rather than blowing it out abruptly.",
          "Whisper inwardly: 'May the flame rest, and may its warmth remain within this house.'",
        ],
      },
      sv: {
        title: "Daglig Praktik · Att Hedra Hemmets Låga",
        steps: [
          "När du tänder ett ljus i kväll, hälsa det medvetet som ditt hems stilla härd.",
          "Släck lågan varsamt med en ljussläckare eller baksidan av en sked i stället för att blåsa ut den hårt.",
          "Säg tyst: 'Må lågan vila och dess värme stanna i detta hus.'",
        ],
      },
    },
    closing: {
      tr: "Ateşi saygıyla uyutanın sabahı soğuk olmaz; ocağını temiz tutanın sözü yerde kalmaz.",
      en: "Whoever banks the fire with respect wakes to a warm morning; whoever keeps a clean hearth speaks with steady weight.",
      sv: "Den som täcker glöden med vördnad vaknar till en varm morgon; den som vårdar sin härd bär ett stadigt ord.",
    },
  },
  {
    slug: "izlanda-huld-el-yazmasi",
    glyph: "ᛉ",
    traditionTag: {
      tr: "KUZEY EL YAZMALARI · İZLANDA 1860",
      en: "NORTHERN MANUSCRIPTS · ICELAND 1860",
      sv: "NORDISKA HANDSKRIFTER · ISLAND 1860",
    },
    keywords: [
      "huld",
      "huld el yazmasi",
      "galdrabok",
      "galdrastafir",
      "izlanda",
      "vegvisir",
      "el yazmasi",
    ],
    title: {
      tr: "Huld El Yazması (1860) ve İzlanda ‘Galdrastafir’ Geleneği",
      en: "The Huld Manuscript (1860) and the Icelandic 'Galdrastafir' Tradition",
      sv: "Huld-handskriften (1860) och den Isländska 'Galdrastafir'-traditionen",
    },
    subtitle: {
      tr: "Geir Vigfússon’un Akureyri Derlemesi, Sisli Denizlerde Yol Bulma ve Kuzey’in Çıra Defterleri",
      en: "Geir Vigfússon's Akureyri Compendium, Wayfinding in Northern Mist, and Icelandic Stave Books",
      sv: "Geir Vigfússons Samling i Akureyri, Vägledning i Dimma och Islands Stavböcker",
    },
    summary: {
      tr: "Kuzey geleneğinde rünler Demir Çağı taş yazıtlarıyla (Elder Futhark) başlar; ancak 17. ve 19. yüzyıl İzlanda’sında balıkçıların ve bilge kayıtçıların (*Galdrabók* ve *Huld El Yazması*) tuttuğu 30 özel geometrik mühürle (*Galdrastafir*) ikinci bir halk katmanı kazanmıştır.",
      en: "While the Elder Futhark belongs to Iron Age stone inscriptions, 17th–19th century Iceland preserved a second folk layer in manuscripts such as the *Galdrabók* and Geir Vigfússon's 1860 *Huld Manuscript*.",
      sv: "Medan den äldre futharken tillhör järnålderns runstenar bevarade 1600–1800-talets Island ett yngre folkligt skikt i handskrifter som *Galdrabók* och Geir Vigfússons *Huld-handskrift* (1860).",
    },
    paragraphs: {
      tr: [
        "Tarihsel rün bilgisinde dönemleri birbirine karıştırmamak temel ustalık kuralıdır: **Elder Futhark (24 Rün)** MS 1.–8. yüzyıl arasındaki erken Cermen/İskandinav taş dönemine aittir. Buna karşılık **Vegvísir (Yol Gösteren)** gibi sekiz kollu pusula mühürleri Viking Çağı’ndan değil, 1860 yılında İzlanda’nın Akureyri kasabasında bilge koleksiyoncu **Geir Vigfússon** tarafından derlenen **Huld El Yazması (ÍB 383 4to)** içindeki 30 geleneksel mühürden (*Galdrastafir*) gelir.",
        "İzlanda halkı yüzyıllar boyunca dondurucu Kuzey Atlantik sisinde balık avına çıkarken, dağ geçitlerinde kar fırtınasına yakalanırken veya hanesini soğuktan korurken bu çizgisel mühürleri deri parçalarına, balina kemiğine veya meşe/huş çıralarına işlemiştir.",
        "Huld El Yazması’nın 60. sayfasında Vegvísir için düşülen tek cümlelik tarihsel kayıt son derece yalındır: *‘Bu işareti üzerinde taşıyan kişi, yolu bilmese bile fırtınada ve kötü havada yönünü kaybetmez.’* Bu, kaderi değiştiren bir büyü değil; fırtınanın ortasında içsel pusulayı kaybetmeme iradesidir.",
      ],
      en: [
        "In authentic northern studies, historical layers are kept distinct: the **24 Elder Futhark runes** belong to the 1st–8th centuries CE, whereas eight-armed stave seals such as **Vegvísir** come from later Icelandic folk compendia—specifically the **Huld Manuscript (ÍB 383 4to)** compiled in 1860 by **Geir Vigfússon** of Akureyri.",
        "For centuries, Icelandic fishers and mountain travelers facing blinding Atlantic fog and winter gales inscribed these 30 *Galdrastafir* ('magical staves') as emblems of steadiness and orientation.",
        "Page 60 of the Huld Manuscript records a single clear line beside the Vegvísir: *'Carry this sign with you and you shall not lose your way in storms or foul weather, even when the path is unknown.'*",
      ],
      sv: [
        "I seriös nordisk forskning skiljer man noga på de historiska skikten: **den äldre futharkens 24 runor** hör hemma i järnåldern (100–700-talet e.Kr.), medan åttaarmade stavsigill som **Vegvísir** stammar från yngre isländska folkhandskrifter—främst **Huld-handskriften (ÍB 383 4to)** sammanställd år 1860 av **Geir Vigfússon** i Akureyri.",
        "Under århundraden bar isländska fiskare och fjällvandrare dessa 30 *Galdrastafir* som tecken på sinnesnärvaro och orientering i storm och dimma.",
        "På sidan 60 i Huld-handskriften står den enkla raden: *'Bär detta tecken med dig så går du inte vilse i storm eller oväder, även om vägen är okänd.'*",
      ],
    },
    keyPoints: {
      tr: [
        "Huld El Yazması (ÍB 383 4to · 1860): Geir Vigfússon tarafından derlenen ve 30 İzlanda Galdrastafir mührünü içeren el yazması.",
        "Tarihsel Ayrım Bilinci: Demir Çağı 24 Elder Futhark rünü ile Geç Dönem İzlanda halk mühürlerini birbirine karıştırmadan okuma disiplini.",
        "Galdrabók (1600 civarı): 47 koruyucu formül içeren en eski İzlanda cep el yazması.",
        "İçsel Pusula İlkesi: Fırtınayı durdurmak yerine fırtınanın içinde yönünü kaybetmeyen zihin terbiyesi.",
      ],
      en: [
        "Huld Manuscript (ÍB 383 4to · 1860): Geir Vigfússon's compendium preserving 30 Icelandic Galdrastafir.",
        "Historical Precision: Distinguishing Iron Age Elder Futhark runes from early modern Icelandic folk staves.",
        "Galdrabók (c. 1600): The earliest surviving Icelandic grimoire of 47 protective formulas.",
        "The Inner Compass: Maintaining orientation within the storm rather than wishing the storm away.",
      ],
      sv: [
        "Huld-handskriften (ÍB 383 4to · 1860): Geir Vigfússons samling med 30 isländska Galdrastafir.",
        "Historisk Skärpa: Att skilja järnålderns runor från 1600–1800-talets isländska stavsigill.",
        "Galdrabók (ca 1600): Den äldsta bevarade isländska handboken med 47 skyddsformler.",
        "Den Inre Kompassen: Att bevara riktningen mitt i stormen.",
      ],
    },
    practice: {
      tr: {
        title: "Günlük Uygulama · ‘Siste Yön Bulma’ (Dört Yön Çapası)",
        steps: [
          "Kararsız kaldığın veya zihninin sisli olduğu bir anda oturduğun yerde önce gerçekten **Kuzey yönünün** ne taraf olduğunu bulup yüzünü oraya dön.",
          "Derin bir nefes alıp omurganı dikleştir (Isa / Merkez Direği) ve sorunu tek bir cümleye indir.",
          "Bugün atacağın **en küçük ama en somut ilk adımı** defterine yaz; pusula bütün yolu bir anda göstermez, yalnızca ilk doğru yönü gösterir.",
        ],
      },
      en: {
        title: "Daily Practice · 'Wayfinding in the Mist' (Four-Direction Anchor)",
        steps: [
          "Whenever your mind feels clouded by indecision today, pause and orient your body toward true **North**.",
          "Straighten your spine, take one slow breath, and reduce your dilemma to a single honest sentence.",
          "Write down the **smallest concrete next step** you can take within the hour—a compass shows direction, and walking clears the fog.",
        ],
      },
      sv: {
        title: "Daglig Praktik · 'Att Hitta Riktningen i Dimman'",
        steps: [
          "När tankarna känns dimmiga i dag, stanna upp och vänd dig fysiskt mot **Norr**.",
          "Räta på ryggen, ta ett djupt andetag och sammanfatta din fråga i en enda ärlig mening.",
          "Skriv ner det **minsta konkreta steg** du kan ta redan i dag.",
        ],
      },
    },
    closing: {
      tr: "Pusula fırtınayı dindirmez; fırtınanın içinde kimin kıyıya varacağını belirler.",
      en: "A compass does not calm the sea; it determines who reaches the shore through the gale.",
      sv: "En kompass stillar inte stormen; den avgör vem som når kusten genom ovädret.",
    },
  },
  {
    slug: "babil-akitu-ve-marduk-yemini",
    glyph: "𒀭",
    traditionTag: {
      tr: "MEZOPOTAMYA TABLETLERİ · BABİL",
      en: "MESOPOTAMIAN TABLETS · BABYLON",
      sv: "MESOPOTAMISKA TAVLOR · BABYLON",
    },
    keywords: [
      "akitu",
      "marduk yemini",
      "babil yeni yil",
      "basrahip",
      "esagila",
      "alcakgonulluluk",
    ],
    title: {
      tr: "Babil’de ‘Akītu’ Töreni: Kralın Tacını Bırakıp Hesap Vermesi",
      en: "The Babylonian 'Akītu' Festival: When the King Laid Down His Crown in Humility",
      sv: "Babylons 'Akītu'-högtid: När Kungen Lade Ner Sin Krona i Ödmjukhet",
    },
    subtitle: {
      tr: "Esagila Tapınağı’nda 5. Gün Ritüeli, Kibrin Kırılması ve Kozmik Düzenin Yenilenmesi",
      en: "The Fifth Day Rite at Esagila Temple, Breaking Hubris, and Renewing Cosmic Order",
      sv: "Femte Dagens Rit i Esagila-templet, Att Bryta Högmod och Förnya Världsordningen",
    },
    summary: {
      tr: "Antik Babil’de bahar ekinoksunda kutlanan 12 günlük Akītu festivalinin 5. gününde, imparatorluğun en güçlü kralı bile Esagila Tapınağı’na girerken asasını, yüzüğünü ve tacını bırakıp diz çökmek ve şehre zarar vermediğine dair hesap vermek zorundaydı.",
      en: "On the fifth day of Babylon's twelve-day Akītu festival, even the mightiest monarch was stripped of scepter, ring, and crown at the Esagila temple, kneeling to give account of his stewardship.",
      sv: "På den femte dagen av Babylons tolv dagar långa Akītu-fest måste även den mäktigaste kungen lägga ifrån sig spira, ring och krona i Esagila-templet och stå till svars på knä.",
    },
    paragraphs: {
      tr: [
        "Çivi yazılı Babil ritüel tabletlerinde (*RAcc.* 127–154) anlatılan **Akītu** töreni, yalnızca bir bahar bayramı değil, kibrin kozmik düzeni (*kittu u mīšaru* — hakikat ve adalet) bozmasını engelleyen muazzam bir psikolojik ve etik sınavdı.",
        "Törenin 5. gününde Babil Kralı, Marduk’un tapınağı **Esagila**’ya getirilir; Başrahip (*Šešgallu*) kralın elinden krallık asasını, çemberini, silahını ve tacını alıp Marduk’un huzuruna koyardı. Ardından Başrahip kralın yanağına bir tokat atar ve kulaklarını çekerek onu tanrının önünde diz çöktürürdü.",
        "Kral diz çökmüş halde şu tarihi yemini ederdi: *‘Günah işlemedim, Babil’i ihmal etmedim, Esagila’yı yıkmadım, halkımın yüzüne tokat vurmadım, onları aşağılamadım.’* Eğer bu sırada kralın gözünden yaş gelirse Marduk’un onun samimiyetini kabul ettiği anlaşılır ve tacı kendisine geri verilirdi. Güç, ancak tevazu ve hesap verebilirlikle meşru sayılırdı.",
      ],
      en: [
        "Preserved on cuneiform ritual tablets (*RAcc.* 127–154), the Babylonian **Akītu** festival was far more than a seasonal celebration—it was an annual constitutional and spiritual check against royal hubris.",
        "On the fifth day of Nisanu, the King of Babylon entered the **Esagila** sanctuary. The High Priest (*Šešgallu*) removed the king's scepter, ring, weapon, and crown, placing them before the statue of Marduk, and struck the king's cheek as he knelt on the temple stones.",
        "Kneeling stripped of rank, the monarch recited his negative confession: *'I have not sinned, I have not been negligent toward Babylon, I have not humiliated the citizens under my care.'* Only after humility was proven were his insignia restored.",
      ],
      sv: [
        "Bevarad på kilskriftstavlor (*RAcc.* 127–154) var den babyloniska **Akītu**-högtiden en årlig prövning mot maktmissbruk och högmod.",
        "På den femte dagen trädde Babylons kung in i **Esagila**-templet där översteprästen (*Šešgallu*) tog ifrån honom spira, ring och krona och lät honom falla på knä inför Marduk.",
        "På knä avlade kungen sin räkenskap: *'Jag har inte försummat staden, jag har inte förödmjukat dess invånare.'* Först när ödmjukheten bekräftats återfick han sin krona.",
      ],
    },
    keyPoints: {
      tr: [
        "Akītu 5. Gün Sınavı: En yüksek gücün bile yılda bir kez tüm unvanlarını bırakıp vicdan hesabı vermesi.",
        "Šešgallu (Başrahip): Kralın kibrini kırmak için onu unvansız ve diz çökmüş halde hakikatle yüzleştiren görevli.",
        "Kittu u Mīšaru (Hakikat ve Adalet): Mezopotamya’da gökyüzüyle yeryüzünü bir arada tutan ahlaki denge.",
        "Tacın Geri Verilişi: Gerçek otoritenin zorbalıktan değil, sorumluluk ve şefkatten doğması.",
      ],
      en: [
        "The Fifth Day of Akītu: Setting aside all titles once a year to render honest account.",
        "Šešgallu (High Priest): The voice of conscience that strips away hubris before the sacred.",
        "Kittu u Mīšaru (Truth & Justice): The moral equilibrium sustaining cosmic and civic order.",
        "Restoring the Crown: Sovereignty earned through stewardship rather than pride.",
      ],
      sv: [
        "Akītu-festens Femte Dag: Att en gång om året lägga ner alla titlar och rannsaka sitt samvete.",
        "Šešgallu (Översteprästen): Samvetets röst som bryter högmodet.",
        "Kittu u Mīšaru (Sanning & Rättvisa): Den etiska balans som bär samhället.",
        "Kronans Återlämnande: Auktoritet grundad på ansvar och omsorg.",
      ],
    },
    practice: {
      tr: {
        title: "Günlük Uygulama · ‘Unvanları Kapıda Bırakma’ Muhasebesi",
        steps: [
          "Bu akşam 5 dakikalığına işini, statünü ve haklı çıkma arzunu bir kenara bırakıp kendi vicdanının karşısına otur.",
          "Kendine Babil kralının sorusunu sor: ‘Bugün gücümün yettiği birine karşı kibirli davrandım mı veya emanet edilen bir işi ihmal ettim mi?’",
          "Eğer kırdığın veya ihmal ettiğin bir nokta varsa yarın sabah ilk iş olarak onu onarma sözü ver.",
        ],
      },
      en: {
        title: "Daily Practice · The 'Crown Laid Down' Self-Accounting",
        steps: [
          "For five quiet minutes tonight, set aside your titles, defenses, and need to be right.",
          "Ask yourself the Akītu question: 'Did I neglect what was entrusted to me today, or speak arrogantly to anyone in my care?'",
          "Where you find a breach, resolve to repair it cleanly tomorrow morning.",
        ],
      },
      sv: {
        title: "Daglig Praktik · 'Att Lägga Ner Kronan' inför Kvällen",
        steps: [
          "Sätt dig fem minuter i stillhet i kväll och lägg alla titlar och försvar åt sidan.",
          "Ställ dig Akītu-frågan: 'Har jag i dag försummat det som anförtrotts mig eller talat överlägset till någon?'",
          "Om något brustit, besluta att ställa det till rätta i morgon bitti.",
        ],
      },
    },
    closing: {
      tr: "Tacını kendi eliyle indirip vicdanına hesap verebilen insanı hiçbir fırtına tahtından edemez.",
      en: "No storm can dethrone the one who willingly lays down the crown before conscience.",
      sv: "Ingen storm kan störta den som frivilligt lägger ner sin krona inför sitt eget samvete.",
    },
  },
  {
    slug: "kelt-imbas-forosnai-karanlik-inziva",
    glyph: "ᚇ",
    traditionTag: {
      tr: "KELT OZAN GELENEĞİ · İRLANDA",
      en: "CELTIC BARDIC LORE · IRELAND",
      sv: "KELTISK BARDTRADITION · IRLAND",
    },
    keywords: [
      "imbas forosnai",
      "karanlik oda",
      "fili",
      "ozan",
      "aydinlatan bilgi",
      "kelt inziva",
    ],
    title: {
      tr: "Kelt Bilgesinde ‘Imbas Forosnai’: Karanlık Odada Üç Günlük İlham İnzivası",
      en: "'Imbas Forosnai' in Celtic Lore: The Darkened Room of Poetic Illumination",
      sv: "'Imbas Forosnai' i Keltisk Tradition: Det Mörka Rummets Poetiska Upplysning",
    },
    subtitle: {
      tr: "Dış Gözü Kapatıp İç Gözü Açmak: Cormac Sözlüğü’nde Fili Ozanlarının Sessizlik Tekniği",
      en: "Closing the Outer Eye to Awaken Inner Sight: The Silent Technique of the Irish Filid",
      sv: "Att Sluta det Yttre Ögat för att Väcka Inre Syn: De Irländska Filidernas Tystnadsteknik",
    },
    summary: {
      tr: "9. yüzyıl İrlanda metni *Sanas Cormaic*’te anlatılan ‘Imbas Forosnai’ (Aydınlatan Bilgi), Kelt ozan-bilgelerinin (*Filid*) çözümsüz bir sorunu veya şiiri bulmak için tamamen karanlık ve sessiz bir taş odada gözlerini avuçlarıyla kapatarak yaptıkları derin odaklanma tekniğidir.",
      en: "Recorded in the 9th-century Irish glossary *Sanas Cormaic*, 'Imbas Forosnai' ('Illuminating Knowledge') was the contemplative technique by which Celtic poet-seers (*Filid*) entered a pitch-dark stone chamber to awaken inner clarity.",
      sv: "I det irländska 800-talsverket *Sanas Cormaic* beskrivs 'Imbas Forosnai' ('Upplysande Kunskap')—den teknik där keltiska skalder och siare (*Filid*) drog sig tillbaka i ett mörkt stenrum för att nå inre klarhet.",
    },
    paragraphs: {
      tr: [
        "Modern insan bir cevaba ulaşmak istediğinde dışarıdan daha fazla ekran, daha fazla ses ve daha fazla bilgi yüklenir. Oysa erken İrlanda ve İskoçya’nın baş ozanları (*Ollamh* ve *Filid*), gerçek cevabın gürültü ekleyerek değil, **dış duyuları tamamen susturarak** bulunduğunu biliyordu.",
        "Piskopos Cormac mac Cuilennáin’in MS 900 civarında derlediği *Sanas Cormaic*’e ve İskoç Adaları’ndaki *Taighean Tugha* (Karanlık Ozan Evleri) kayıtlarına göre; ozan çözümsüz bir meseleyle karşılaştığında penceresiz, ışıksız bir taş odaya çekilir, sırtüstü uzanır, gözlerinin üzerine taş veya avuçlarını örter ve zihnini tek bir soruya kilitlerdi.",
        "Dış göz (gündelik dağınıklık) kapandığında, içteki **Awen** (ilham akışı) uyanır ve aranan şiir ya da adil hüküm (*Brehon* kararı) berrak bir imge olarak zihinde doğardı.",
      ],
      en: [
        "Where modern habit seeks answers by piling on more screens and external noise, the master poets (*Ollamh* and *Filid*) of early Ireland and Gaeldom practiced the opposite discipline: **sensory stillness in complete darkness**.",
        "Described in Cormac's 9th-century *Sanas Cormaic* and preserved in Scottish Hebridean accounts of the bardic 'Dark Houses' (*Taighean Tugha*), the poet-seer retired into a windowless chamber, lay still with palms over the eyes, and held a single question in unwavering focus.",
        "When the outer eye ceased chasing distractions, the inner spring of **Awen** rose to the surface, yielding the verse or legal judgment in lucid completeness.",
      ],
      sv: [
        "Där den moderna människan söker svar genom mer brus och fler skärmar tillämpade det tidiga Irlands och Skottlands mästerskalder (*Ollamh* och *Filid*) motsatsen: **fullständig mörkervila och sinnesstillhet**.",
        "Enligt 800-talsskriften *Sanas Cormaic* och skotska källor om skaldernas mörka hus drog sig siaren tillbaka i ett fönsterlöst rum, lade händerna över ögonen och höll en enda fråga i stilla fokus.",
        "När det yttre ögat vilade vaknade den inre källan (**Awen**) med klar insikt.",
      ],
    },
    keyPoints: {
      tr: [
        "Imbas Forosnai (‘Aydınlatan Bilgi’): Dış ışığı kapatarak içsel sezgi ve hafıza ışığını yakma sanatı.",
        "Fili / Ollamh: Erken Kelt toplumunda hem ozan, hem tarihçi hem de doğa/hukuk gözlemcisi olan bilge.",
        "Duyusal Perhiz: Zihnin derin kuyu suyuna ulaşması için dış uyaranları geçici olarak durdurmak.",
        "Tek Soru Kilidi: Karanlık inzivaya girerken zihni on konuya değil, yalnız tek bir öze odaklamak.",
      ],
      en: [
        "Imbas Forosnai ('Illuminating Knowledge'): Awakening inner perception by withdrawing from outer glare.",
        "Fili / Ollamh: The trained poet-scholar and keeper of oral memory in early Gaelic society.",
        "Sensory Fasting: Quieting external stimuli so deep memory and synthesis can surface.",
        "Single-Question Focus: Entering stillness with one clear question rather than scattered worries.",
      ],
      sv: [
        "Imbas Forosnai ('Upplysande Kunskap'): Att väcka inre klarsyn genom att stänga ute yttre bländverk.",
        "Fili / Ollamh: Den utbildade skalden och minnesbevararen i det keltiska samhället.",
        "Sinnesvila: Att ge tanken rum att sjunka till djupet utan skärmar och brus.",
        "En Enda Fråga: Att gå in i tystnaden med en klart formulerad fråga.",
      ],
    },
    practice: {
      tr: {
        title: "Günlük Uygulama · 10 Dakikalık ‘Imbas Forosnai’ Karanlık Dinlenişi",
        steps: [
          "Bugün zihnini yoran bir karar varsa odanın ışığını kapat, telefonunu başka bir odaya bırak ve koltuğa/yatağa sırtüstü uzan.",
          "Avuç içlerini göz kapaklarına bastırmadan hafifçe gözlerinin üzerine kapat (tam karanlık oluştur).",
          "10 dakika boyunca sorunun cevabını zorla aramadan sadece soruyu kalbinde tut ve karanlıkta beliren ilk dingin cümleyi kalkınca defterine yaz.",
        ],
      },
      en: {
        title: "Daily Practice · The 10-Minute 'Imbas Forosnai' Dark Stillness",
        steps: [
          "Turn off the lights in your room, leave your phone in another room, and lie flat on your back for ten minutes.",
          "Cup your palms gently over your closed eyes without pressing on the eyelids, creating total darkness.",
          "Hold your single question quietly without forcing an answer, and write down the first calm insight that arises.",
        ],
      },
      sv: {
        title: "Daglig Praktik · 10 Minuters 'Imbas Forosnai' Mörkervila",
        steps: [
          "Släck ljuset i rummet, lämna telefonen utanför och lägg dig på rygg i tio minuter.",
          "Kupa handflatorna mjukt över dina slutna ögon så att fullständigt mörker uppstår.",
          "Håll din fråga stilla i sinnet utan att tvinga fram ett svar, och skriv ner den första klara tanke som klarnar.",
        ],
      },
    },
    closing: {
      tr: "Güneş varken yıldızlar kaybolmaz, sadece kamaşan göz onları göremez; karanlık, derindeki yıldızı görünür kılar.",
      en: "The stars do not vanish at noon—only the dazzled eye fails to see them; darkness restores the deep sky.",
      sv: "Stjärnorna försvinner inte mitt på dagen—det är bara det bländade ögat som inte ser dem; mörkret gör djupet synligt.",
    },
  },
  {
    slug: "iskandinav-vordr-muhafiz-ruhu",
    glyph: "ᛗ",
    traditionTag: {
      tr: "KUZEY RUH ANATOMİSİ · İSKANDİNAVYA",
      en: "NORSE SOUL ANATOMY · SCANDINAVIA",
      sv: "NORDISK SJÄLSANATOMI · SKANDINAVIEN",
    },
    keywords: [
      "vordr",
      "vard",
      "vardoger",
      "muhafiz ruh",
      "onsezi",
      "fylgja",
      "hamr",
    ],
    title: {
      tr: "İskandinav Geleneğinde ‘Vörðr’: İnsanın Önünden Yürüyen Muhafız Ruhu",
      en: "'Vörðr' in Norse Lore: The Warden Spirit That Walks Ahead of a Person",
      sv: "'Vörðr' (Vård) i Nordisk Tradition: Väktarsjälen som Går Före Människan",
    },
    subtitle: {
      tr: "Eve Varmadan Önce Duyulan Ayak Sesi (Vardøger), Önsezinin Doğası ve Ağacın Bekçisi",
      en: "Footsteps Heard Before Arrival (Vardøger), the Nature of Premonition, and the Guardian Tree",
      sv: "Stegen som Hörs Före Ankomsten (Vardøger), Föraningens Natur och Gårdens Vårdträd",
    },
    summary: {
      tr: "Eski İskandinav ruh anatomisinde insan tek parça değildir; *Hugr* (düşünce), *Hamr* (biçim), *Fylgja* (yoldaş) yanında bir de **Vörðr** (İsveççe *Vård*, Norveççe *Vardøger*) vardır: İnsanın niyetini ve varlığını kendisinden birkaç dakika önce mekana ulaştıran uyanık muhafız ruhu.",
      en: "Alongside *Hugr* (thought), *Hamr* (shape), and *Fylgja* (fetch), Old Norse tradition recognized the **Vörðr** (Norwegian *Vardøger*, Swedish *Vård*)—the vigilant warden spirit whose presence arrives shortly before the physical body.",
      sv: "Vid sidan av *Hugr* (håg), *Hamr* (hamn) och *Fylgja* (följe) kände den nordiska traditionen **Vörðr** (svenska *Vård*, norska *Vardøger*)—den vakande väktarsjäl som anländer strax före kroppen.",
    },
    paragraphs: {
      tr: [
        "İskandinavya’da yüzyıllardır çok yaygın bir deneyim anlatılır: Evdeki insanlar kapının açıldığını, sevdiği kişinin merdivenden çıktığını veya anahtarını çevirdiğini açıkça duyar; kapıya baktıklarında kimse yoktur ama **tam beş dakika sonra** o kişi gerçekten kapıdan içeri girer. Norveç’te buna **Vardøger**, İsveç’te **Vård**, Eski İskandinavcada ise **Vörðr** (‘Nöbetçi / Muhafız’) denir.",
        "Kuzey kozmolojisine göre bir insan bütün kalbiyle evine veya bir yere yöneldiğinde, onun uyanık muhafız ruhu (*Vörðr*) fiziksel bedenden biraz önde yürüyerek yolu kontrol eder ve mekanı hazırlar.",
        "Aynı kelimeden türeyen **Vårdträd (Muhafız Ağaç)** ise her İskandinav çiftliğinin avlusunda dikili duran, dalları asla kesilmeyen ve ailenin *Vörðr* ruhuyla kök bağı olduğuna inanılan ulu dişbudak, ıhlamur veya karaağaçtır. İnsanın önsezisine güvenmesi, kendi *Vörðr* nöbetçisinin fısıltısını duymasıdır.",
      ],
      en: [
        "Across Scandinavia, a well-documented folk phenomenon known in Norway as **Vardøger** and in Sweden as **Vård** (from Old Norse **Vörðr**, 'warden / watchman') describes hearing a loved one's footsteps, sled, or key in the lock several minutes before they physically arrive.",
        "In Norse soul lore, when a person's intention is strongly directed toward home or a destination, their vigilant warden-spirit (*Vörðr*) walks slightly ahead of the body to test the road and announce their coming.",
        "From the same root comes the **Vårdträd ('Warden Tree')**—the great ash, linden, or elm standing at the center of a Scandinavian farmstead, never felled, guarding the luck and continuity of the house.",
      ],
      sv: [
        "I hela Skandinavien är upplevelsen av **Vård** (norska **Vardøger**, av fornnordiska **Vörðr**, 'väktare') välkänd: man hör tydligt en familjemedlems steg, grind eller nyckel i låset några minuter innan personen faktiskt kliver in.",
        "Enligt gammal nordisk själslära går människans vakande *Vörðr* ett stycke före kroppen när hennes längtan och avsikt är starkt riktad mot hemmet.",
        "Ur samma ord stammar **Vårdträdet**—den mäktiga ask, lind eller alm som stod mitt på gårdsplanen och aldrig fick huggas ner eftersom gårdens lycka och skydd bodde i dess rötter.",
      ],
    },
    keyPoints: {
      tr: [
        "Vörðr / Vardøger: Bedenden önce yola çıkan, tehlikeyi sezen ve varışı haber veren uyanık muhafız katmanı.",
        "Vårdträd (Muhafız Ağaç): Hanenin avlusunda kesilmeden korunan ve ailenin koruyucu ruhunu taşıyan ulu ağaç.",
        "İlk Sezgi Kuralı: Bir mekana girerken veya bir işe başlarken bedenin ilk 3 saniyede hissettiği uyarıyı ciddiye almak.",
        "Niyetin Önden Gitmesi: Sen bir yere varmadan önce niyetinin ve tavrının o mekana ulaşması.",
      ],
      en: [
        "Vörðr / Vardøger: The forerunner spirit that precedes physical arrival and senses the threshold ahead.",
        "Vårdträd (Warden Tree): The sacred guardian tree of a homestead, tended across generations.",
        "The First Three Seconds: Trusting the quiet bodily warning or peace felt upon entering a new space.",
        "Intention Precedes Footstep: Remembering that your inner state arrives in a room before your words do.",
      ],
      sv: [
        "Vörðr / Vård / Vardøger: Den föregående väktarsjälen som anländer före kroppen och känner av vägen.",
        "Vårdträd: Gårdens heliga skyddsträd (ask, lind eller alm) som vårdades från släktled till släktled.",
        "De Första Sekunderna: Att lyssna till kroppens första förnimmelse vid en tröskel.",
        "Avsikten Går Före: Insikten att din inre hållning når rummet före dina ord.",
      ],
    },
    practice: {
      tr: {
        title: "Günlük Uygulama · Bir Mekana Girmeden Önce ‘Niyetini Önden Göndermek’",
        steps: [
          "Bugün önemli bir görüşmeye veya kendi evinin kapısına varmadan 2 dakika önce adımlarını yavaşlat.",
          "Zihninde o kapıdan içeri **sakin, berrak ve dengeli** girdiğini canlandırarak kendi *Vörðr* (muhafız) enerjini önden gönder.",
          "Bir yere adım attığında içindeki nöbetçi ses ‘burada durma’ diyorsa o ilk sessiz uyarıyı asla geçiştirme.",
        ],
      },
      en: {
        title: "Daily Practice · Sending Your 'Vörðr' Ahead in Peace",
        steps: [
          "Two minutes before arriving at an important meeting or your own front door today, slow your pace.",
          "Consciously send a calm, lucid intention ahead of you to clear the threshold before you knock.",
          "When entering any unfamiliar room, honor the quiet first impression of your inner watchman.",
        ],
      },
      sv: {
        title: "Daglig Praktik · Att Sända Sin 'Vård' Före Sig i Frid",
        steps: [
          "Två minuter innan du kliver in genom dörren till ett möte eller ditt eget hem i dag, sakta ner stegen.",
          "Sänd medvetet en lugn och klar avsikt framför dig till rummet.",
          "Lita alltid på den första tysta vink som din inre väktare ger dig vid en ny tröskel.",
        ],
      },
    },
    closing: {
      tr: "İnsanın ayak izi toprağa düşmeden önce, niyeti o toprağa çoktan varmıştır.",
      en: "Before a person's footprint touches the threshold, their intention has already crossed the door.",
      sv: "Innan människans fotsteg når tröskeln har hennes avsikt redan stigit in i rummet.",
    },
  },
  {
    slug: "astroloji-oikodespotes-ve-kurios",
    glyph: "☉",
    traditionTag: {
      tr: "KLASİK ASTROLOJİ · PORPHYRY & VALENS",
      en: "CLASSICAL ASTROLOGY · PORPHYRY & VALENS",
      sv: "KLASSISK ASTROLOGI · PORFYRIOS & VALENS",
    },
    keywords: [
      "oikodespotes",
      "kurios",
      "harita yoneticisi",
      "almuten",
      "geminin kaptani",
      "porphyry",
    ],
    title: {
      tr: "Klasik Astrolojide ‘Oikodespotes’ ve ‘Kurios’: Ev Sahibi ile Geminin Kaptanı",
      en: "'Oikodespotes' and 'Kurios' in Classical Astrology: Master of the House vs. Captain of the Soul",
      sv: "'Oikodespotes' och 'Kurios' i Klassisk Astrologi: Husets Herre och Skeppets Kapten",
    },
    subtitle: {
      tr: "Yükselen Yöneticisi Tek Başına Yetmez: Antik Denizcilik Metaforuyla Doğum Haritasının Gerçek İdaresi",
      en: "Why the Ascendant Ruler Alone Is Not Enough: The Ancient Nautical Metaphor of Chart Governance",
      sv: "Varför Ascendentstyraren Inte Räcker Ensam: Den Antika Sjöfartsbilden av Horoskopets Styrning",
    },
    summary: {
      tr: "Hellenistik astrolog Porphyry ve Vettius Valens, doğum haritasını açık denizde yol alan bir gemiye benzetir: Yükselen burç geminin gövdesidir, **Oikodespotes** geminin yasal sahibidir, **Kurios** ise dümeni tutan gerçek kaptandır.",
      en: "Hellenistic astrologers Porphyry and Vettius Valens likened the natal chart to a ship at sea: the Ascendant is the hull, the **Oikodespotes** is the owner of the vessel, and the **Kurios** is the active captain at the helm.",
      sv: "De hellenistiska astrologerna Porfyrios och Vettius Valens liknade födelsekartan vid ett skepp till havs: Ascendenten är skrovet, **Oikodespotes** är skeppets ägare och **Kurios** är kaptenen vid rodret.",
    },
    paragraphs: {
      tr: [
        "Modern astrolojide çoğu zaman sadece ‘Yükselen yöneticisi hangi burçta?’ diye bakılır ve geçilir. Oysa MS 3. yüzyılda Suriyeli filozof **Porphyry** (*Batlamyus’un Tetrabiblos’una Giriş*, Bölüm 30) doğum haritasının yönetimini muazzam bir **antik gemi metaforuyla** iki ayrı makama ayırmıştır.",
        "Birincisi **Oikodespotes** (‘Ev Sahibi / Mülkün Efendisi’): Doğum haritasındaki temel ışıkların ve sınırların yöneticisi olarak, insanın doğuştan sahip olduğu maddi/bedensel donanımı, geminin sağlamlığını ve potansiyelini belirler.",
        "İkincisi ise **Kurios** (‘Kaptan / İcra Makamı’): Haritanın köşe evlerinde (1., 10., 7. veya 4. ev) en güçlü asalete sahip olan ve rüzgarı arkasına alıp **rotayı fiilen çizen** gezegendir. Kimi insanın haritasında gemi sahibi ile kaptan aynı gezegendir (hayatı tek bir odakta akar); kimi insanda ise farklıdır ve bu iki gezegenin birbirini görüp görmemesi (açısı) insanın iç huzurunu belirler.",
      ],
      en: [
        "While modern astrology often stops at naming the Ascendant ruler, the 3rd-century philosopher **Porphyry** (*Introduction to the Tetrabiblos*, Ch. 30) distinguished two distinct offices of chart rulership through a vivid **nautical metaphor**.",
        "First is the **Oikodespotes** ('Master of the House / Shipowner'): the planet holding overarching domicile and bound authority over the natal lights, representing the vessel's constitution and innate resources.",
        "Second is the **Kurios** ('Lord / Captain of the Ship'): the angular, dignified planet that actually stands at the helm and steers the life's vocation and action. When the Shipowner and the Captain are in harmonious aspect, natural talent and life direction sail as one.",
      ],
      sv: [
        "Medan modern astrologi ofta nöjer sig med ascendentstyraren skilde 200-talsfilosofen **Porfyrios** (*Introduktion till Tetrabiblos*, kap. 30) mellan två olika styrande ämbeten genom en klassisk **sjöfartsliknelse**.",
        "Det första är **Oikodespotes** ('Husets Herre / Skeppsredaren'): den planet som bär det övergripande herraväldet över horoskopets grundresurser och skrov.",
        "Det andra är **Kurios** ('Skeppets Kapten'): den starkt placerade planet i hörnhusen som faktiskt står vid rodret och styr livets handling och kall.",
      ],
    },
    keyPoints: {
      tr: [
        "Horoskopos (Yükselen · Gemi Gövdesi): Ruhun bu dünyadaki fiziksel aracı ve suya değdiği ilk omurga.",
        "Oikodespotes (Mülk Sahibi): Haritanın doğal kaynaklarını ve mizaç temelini elinde tutan gezegen.",
        "Kurios / Almuten Figuris (Gemi Kaptanı): Köşe evlerdeki gücüyle hayatın eylem ve meslek dümenini tutan gezegen.",
        "Kaptan ile Ev Sahibinin Uyumu: Yetenek (Oikodespotes) ile eylemin (Kurios) birbirini görmesi.",
      ],
      en: [
        "Horoskopos (Ascendant · The Hull): The physical vessel through which the soul navigates the world.",
        "Oikodespotes (The Shipowner): The planet governing innate temperament and foundational resources.",
        "Kurios / Almuten (The Captain): The angular planet steering vocation, will, and active destiny.",
        "Harmony at Sea: Evaluating whether the Shipowner and Captain behold each other by Ptolemaic aspect.",
      ],
      sv: [
        "Horoskopos (Ascendenten · Skrovet): Den fysiska farkost genom vilken själen möter världen.",
        "Oikodespotes (Skeppsredaren): Planeten som råder över de medfödda resurserna.",
        "Kurios / Almuten (Kaptenen): Den planet som står vid rodret och styr livets aktiva riktning.",
        "Samspel till Havs: Huruvida Redaren och Kaptenen ser varandra genom klassisk aspekt.",
      ],
    },
    practice: {
      tr: {
        title: "Günlük Uygulama · Kendi Hayat Geminde ‘Sahip ve Kaptan’ı Ayırt Etmek",
        steps: [
          "Bugün kendine şu soruyu sor: ‘Doğuştan en doğal yeteneğim (gemimin gövdesi) ne, ama şu an dümeni hangi arzum veya korkum (kaptanım) tutuyor?’",
          "Eğer yeteneğin başka yöne, günlük mesain bambaşka bir yöne çekiyorsa bu iki gücü ortak bir rotada buluşturacak tek bir değişiklik belirle.",
          "Haritanın tam klasik analizi için Astroloji Salonundaki ‘Harita Nasıl Okunur’ odasını incele.",
        ],
      },
      en: {
        title: "Daily Practice · Aligning Your 'Ship' and Your 'Captain'",
        steps: [
          "Ask yourself today: 'What is my most natural innate gift (my vessel), and what habit or ambition is currently holding the helm (my captain)?'",
          "If your natural gift and your daily schedule are pulling in opposite directions, identify one concrete adjustment to bring them onto the same course.",
          "Visit the 'How to Read a Chart' room in the Astrology Hall to study classical dignity.",
        ],
      },
      sv: {
        title: "Daglig Praktik · Att Förena 'Skepp' och 'Kapten'",
        steps: [
          "Fråga dig själv i dag: 'Vilken är min mest naturliga begåvning (mitt skepp), och vad håller just nu i rodret (min kapten)?'",
          "Om din gåva och din vardag drar åt olika håll, finn en konkret justering som för dem samman på samma kurs.",
          "Besök rummet 'Hur Man Läser En Karta' i Astrologisalen för att fördjupa dig.",
        ],
      },
    },
    closing: {
      tr: "En sağlam gemi bile kaptansız kayalara çarpar; en usta kaptan ise gemisinin omurgasını tanıyandır.",
      en: "Even the stoutest hull drifts onto the rocks without a captain; the wisest captain knows the timber of the ship.",
      sv: "Även det starkaste skrov driver mot klipporna utan kapten; den visaste kaptenen känner sitt skepps virke.",
    },
  },
  {
    slug: "sumer-me-yasalari-ve-inanna",
    glyph: "𒀭",
    traditionTag: {
      tr: "SÜMER KOZMOLOJİSİ · ERİDU & URUK",
      en: "SUMERIAN COSMOLOGY · ERIDU & URUK",
      sv: "SUMERISK KOSMOLOGI · ERIDU & URUK",
    },
    keywords: [
      "sumer me",
      "me yasalari",
      "eridu",
      "uruk",
      "enki ve inanna",
      "uygarlik muhurleri",
    ],
    title: {
      tr: "Sümer’de ‘Me’ Yasaları: İnanna’nın Gökyüzü Teknesiyle Taşıdığı Kozmik İlkeler",
      en: "The Sumerian 'Me': The Cosmic Decrees Inanna Carried in the Boat of Heaven",
      sv: "Sumerernas 'Me': De Kosmiska Lagar Inanna Bar i Himmelens Båt",
    },
    subtitle: {
      tr: "Hakikatten Marangozluğa, Müzikten Yas Tutmaya: Uygarlığı Ayakta Tutan Öz Kalıplar",
      en: "From Truth and Music to Carpentry and Mourning: The Archetypal Blueprints of Civilization",
      sv: "Från Sanning och Musik till Snickeri och Sorg: Civilisationens Urformer",
    },
    summary: {
      tr: "Sümer çivi yazılı şiiri *İnanna ve Enki*’de anlatılan **Me**’ler, bilgelik tanrısı Enki’nin derin Abzu sularında koruduğu ve İnanna’nın ‘Gökyüzü Teknesi’ (*Má-anna*) ile Uruk şehrine getirdiği yüzlerce kozmik, ahlaki ve zanaatsal yasadır.",
      en: "In the Sumerian myth *Inanna and Enki*, the **Me** are the foundational cosmic, ethical, and artisanal blueprints kept by Enki in the deep Abzu and brought to Uruk by Inanna aboard the Boat of Heaven.",
      sv: "I det sumeriska kvädet *Inanna och Enki* är **Me** de kosmiska, etiska och hantverksmässiga grundlagar som Enki bevarade i Abzu och som Inanna förde till Uruk i Himmelens Båt.",
    },
    paragraphs: {
      tr: [
        "Sümer düşüncesinde hiçbir sanat, hiçbir duygu ve hiçbir toplumsal kurum tesadüfen oluşmamıştır; her birinin görünmez dünyada bir **‘Me’**si (öz kalıbı / ilahi yasası) vardır. Eridu’nun derin tatlı su okyanusunda (Abzu) bilgelik tanrısı **Enki** tarafından korunan bu *Me*’ler, evrenin işletim sistemi gibidir.",
        "*İnanna ve Enki* tabletinde (ETCSL 1.3.1), Uruk’un koruyucusu **İnanna**, Eridu’ya giderek Enki’nin sofrasında bu yüzlerce *Me*’yi teslim alır ve **Gökyüzü Teknesi**’ne (*Má-anna*) yükleyerek insanlığa getirir.",
        "Tabletlerde sayılan *Me* listesi büyüleyicidir: ‘Çobanlık, hakikat, yeraltına iniş ve yeraltından çıkış, demircilik, deri işçiliği, taş ustalığı, müzik aletleri, bilgelik, dikkatli kulak, adil karar, yorgun yüreği teselli etme ve ateşi yakma.’ Sümer bilgelerine göre bir usta çekicini vurduğunda veya bir müzisyen teline dokunduğunda, aslında o kadim *Me* yasasını yeryüzünde görünür kılmaktadır.",
      ],
      en: [
        "In Sumerian philosophy, no craft, emotion, or civic institution exists by accident; each is governed by an archetypal decree or blueprint called a **Me**, guarded by the wisdom god **Enki** in the deep waters of Eridu's Abzu.",
        "In the cuneiform composition *Inanna and Enki* (ETCSL 1.3.1), **Inanna** journeys to Eridu, receives over a hundred *Me* from Enki, and loads them onto the **Boat of Heaven** (*Má-anna*) to endow her city of Uruk.",
        "The catalog of the *Me* encompasses the whole of human life: 'Truth, descent into the underworld and ascent from the underworld, the craft of wood, copper, and reed, musical instruments, the attentive ear, righteous judgment, and the comforting of the weary heart.'",
      ],
      sv: [
        "I sumerisk filosofi finns inget hantverk, ingen känsla och ingen samhällsordning av en slump; varje företeelse bärs av en kosmisk grundform kallad **Me**, bevarad av visdomsguden **Enki** i Abzus djupa vatten.",
        "I kilskriftsdikten *Inanna och Enki* (ETCSL 1.3.1) färdas **Inanna** till Eridu, tar emot över hundra *Me* och för dem i **Himmelens Båt** (*Má-anna*) till människorna i Uruk.",
        "Listan över *Me* rymmer hela det mänskliga livet: 'Sanning, nedstigning i underjorden och återkomst därifrån, smideskonst, musikinstrument, det lyssnande örat, rättvis dom och konsten att trösta ett trött hjärta.'",
      ],
    },
    keyPoints: {
      tr: [
        "Me (İlahi Öz Yasalar): Her zanaatın, erdemin ve doğa düzeninin arkasındaki arketipsel kalıp.",
        "Má-anna (Gökyüzü Teknesi): İnanna’nın bilgeliği derin sulardan (Abzu) insan şehrine taşıdığı kutsal gemi.",
        "İniş ve Çıkış Yasası: ‘Yeraltına iniş’ kadar ‘yeraltından çıkış’ın da kutsal bir Me yasası olması.",
        "Zanaatın Kutsallığı: Marangozluğun, demirciliğin ve teselli vermenin tapınak duası kadar kutsal sayılması.",
      ],
      en: [
        "Me (Cosmic Blueprints): The archetypal laws underlying every art, virtue, and social order.",
        "Má-anna (Boat of Heaven): The vessel by which Inanna carried wisdom from the deep Abzu into human life.",
        "The Law of Descent and Return: Recognizing that both descending into crisis and rising from it are sacred decrees.",
        "Sacred Craftsmanship: Honoring carpentry, metalwork, music, and consolation as divine gifts.",
      ],
      sv: [
        "Me (Kosmiska Grundlagar): De urformer som bär varje hantverk, dygd och ordning.",
        "Má-anna (Himmelens Båt): Farkosten med vilken Inanna förde visdomen från Abzu till människornas stad.",
        "Nedstigningens och Återkomstens Lag: Att både prövningen och återkomsten vilar i världsordningen.",
        "Hantverkets Helgd: Att snickeri, musik och tröst räknas bland de gudomliga gåvorna.",
      ],
    },
    practice: {
      tr: {
        title: "Günlük Uygulama · Yaptığın İşi Bir ‘Me’ (Kutsal Zanaat) Olarak Görmek",
        steps: [
          "Bugün elinle veya zihninle yaptığın gündelik işi (yazı yazmak, yemek pişirmek, onarmak, birini dinlemek) sıradan bir angarya olarak görmeyi bırak.",
          "Sümer tabletlerindeki gibi ‘Dikkatli Kulak’ ve ‘Yorgun Yüreği Teselli Etme’nin bile kutsal birer evren yasası (*Me*) olduğunu hatırla.",
          "Bugün tek bir işi acele etmeden, sanki bir tapınak ustası gibi tam dikkatinle tamamla.",
        ],
      },
      en: {
        title: "Daily Practice · Practicing Your Daily Craft as a Sacred 'Me'",
        steps: [
          "Choose one ordinary task today—writing, cooking, repairing, or listening to a friend—and strip away the feeling of drudgery.",
          "Remember that in the Sumerian tablets, 'the attentive ear' and 'skillful craft' are counted among the cosmic *Me*.",
          "Complete that single task today with the undivided presence of a master artisan.",
        ],
      },
      sv: {
        title: "Daglig Praktik · Att Utföra Dagens Arbete som ett Heligt 'Me'",
        steps: [
          "Välj en vardaglig syssla i dag—att skriva, laga mat, reparera eller lyssna—och se den som mer än slentrian.",
          "Minns att det sumeriska kvädet räknar både 'det lyssnande örat' och 'skickligt hantverk' bland världens heliga *Me*.",
          "Utför denna enda uppgift i dag med odelad närvaro.",
        ],
      },
    },
    closing: {
      tr: "Bir çiviyi dürüstçe çakan usta ile yıldızları okuyan bilge aynı kozmik yasaya hizmet eder.",
      en: "The artisan who drives a nail with integrity and the astronomer who reads the stars serve the same cosmic law.",
      sv: "Hantverkaren som slår i en spik med omsorg och astronomen som läser stjärnorna tjänar samma kosmiska lag.",
    },
  },
  {
    slug: "soguk-demir-ve-esik-muhru",
    glyph: "⛏",
    traditionTag: {
      tr: "DEMİR KÜLTÜ · ALTAY, KELT & KUZEY",
      en: "IRON LORE · ALTAI, CELTIC & NORSE",
      sv: "JÄRNKULT · ALTAJ, KELTISKT & NORDISKT",
    },
    keywords: [
      "soguk demir",
      "cold iron",
      "demir kultu",
      "demirci",
      "temurci",
      "at nali",
      "esik demiri",
    ],
    title: {
      tr: "Kadim Geleneklerde ‘Soğuk Demir’ (Cold Iron): Neden Demir Eşiği ve Zihni Mühürler?",
      en: "'Cold Iron' in Ancient Lore: Why Forged Iron Wards the Threshold and Grounds the Mind",
      sv: "'Kallt Järn' i Forntida Tradition: Varför Smitt Järn Skyddar Tröskeln och Jordar Sinnet",
    },
    subtitle: {
      tr: "Altay’da ‘Kam ile Demirci Kardeştir’ Sözünden İskoç ve İskandinav Eşik Çivilerine",
      en: "From the Altai Proverb 'The Shaman and the Smith Are Twin' to Scottish and Norse Threshold Nails",
      sv: "Från det Altajska Ordspråket 'Schamanen och Smeden Är Bröder' till Nordiska Tröskelspikar",
    },
    summary: {
      tr: "Yakut ve Altay geleneğinden Kelt ve İskandinav folkloruna kadar dövülmüş demir (*Soğuk Demir*), ateş ve toprağın evliliğinden doğduğu için dağılmış enerjiyi toprağa indiren en güçlü sınır koruyucusu kabul edilmiştir.",
      en: "From Yakut and Altai smithcraft to Celtic and Norse folklore, hand-forged iron ('Cold Iron') was revered as the marriage of earth-ore and furnace-fire, capable of grounding chaotic forces at any threshold.",
      sv: "Från jakutiskt och altajskt smide till keltisk och nordisk folktro vördades handsmitt järn ('Kallt Järn') som föreningen av jordmalm och ässjans eld.",
    },
    paragraphs: {
      tr: [
        "Sibirya ve Yakut (Saha) Türklerinde binlerce yıllık bir atasözü vardır: **‘Kam (Şaman) ile Demirci aynı yuvadan çıkmıştır.’** Çünkü ilk demir cevheri gökten düşen meteor taşlarından (*Gök Demiri*) dövülmüş; toprağın ağırlığı ile ateşin dönüştürücü iradesini tek bir metalde birleştirmiştir.",
        "İrlanda, İskoçya ve İskandinavya’da ise kapı eşiğine çakılan dövme demir çivi veya at nalı, şans getiren batıl bir süs değil; **‘Soğuk Demir’ (Cold Iron)** yasasıdır. Geleneksel kozmolojide bedensiz ve dağınık güçler (kabuslar, kış gölgeleri, nazar ve vesvese) uçucu ve şekilsizdir; oysa dövülmüş demir yoğun, manyetik ve tavizsizdir.",
        "Eski insanlar gece karabasan veya yoğun korku yaşadığında yastığın altına ya da kapı eşiğine küçük bir dövme demir (bıçak sırtı veya anahtar) bırakırdı. Sembolik anlamı çok nettir: *‘Hayalin ve korkunun sisi, somut iradenin demirine çarptığında dağılır.’*",
      ],
      en: [
        "Among the Sakha (Yakut) and Altai peoples runs an ancient proverb: **'The Smith and the Shaman are born of the same nest.'** Early iron—first worked from fallen meteoric ore—united the weight of the earth with the discipline of the forge.",
        "Across Ireland, Scotland, and Scandinavia, a hand-forged nail or horseshoe fixed at the lintel was not a frivolous lucky charm, but an application of the law of **Cold Iron**. Volatile, ungrounded influences cannot cross where dense, forged iron marks the boundary.",
        "In traditional households, placing an iron key or forged blade beside the threshold reminded the sleeper that nebulous fear dissolves when met by grounded, forged will.",
      ],
      sv: [
        "Bland jakuter och altajfolk lyder ett uråldrigt ordspråk: **'Smeden och schamanen är födda ur samma rede.'** Det tidiga järnet förenade jordens tyngd med ässjans tuktade eld.",
        "I Skandinavien, Skottland och Irland var en smidd spik eller hästsko vid tröskeln inte bara en lyckosymbol utan lagen om **Kallt Järn** (*Stål i dörr*): det flyktiga och kaotiska måste vika inför det fasta och smidda.",
        "En gammal järnnyckel vid tröskeln påminde om att dimmiga farhågor skingras när de möter en fast och jordad vilja.",
      ],
    },
    keyPoints: {
      tr: [
        "Kam ve Demirci Kardeşliği: Ateşle ruhu terbiye eden bilge ile ateşle cevheri döven ustanın ortak kökü.",
        "Soğuk Demir (Cold Iron): Dövülerek şekil verilmiş, toprağın manyetik ağırlığını taşıyan sınır metali.",
        "Eşik Anahtarı: Eski hanelerde kapı girişinde tutulan demir anahtarın hem mekanı hem zihni kilitlemesi.",
        "Somut İrade: Dağınık vesveseyi (Hava/Sis) somut eylemle (Demir/Toprak) kesme sanatı.",
      ],
      en: [
        "The Twin Craft of Smith and Seer: Shaping raw ore and shaping the raw spirit through fire.",
        "Cold Iron: Hand-forged iron revered across Eurasia as an unyielding boundary marker.",
        "The Iron Key: A traditional household emblem of threshold sovereignty and grounded sleep.",
        "Forged Will: Cutting through nebulous anxiety with concrete, physical action.",
      ],
      sv: [
        "Smedens och Siarens Syskonband: Att forma rå malm och rå tanke genom eldens tukt.",
        "Kallt Järn (Stål): Handsmitt järn som gränsvakt mot oro och kaos.",
        "Järnnyckeln vid Tröskeln: En gammal nordisk sed för trygg sömn och husfrid.",
        "Smidd Vilja: Att skära genom dimmig oro med konkret handling.",
      ],
    },
    practice: {
      tr: {
        title: "Günlük Uygulama · ‘Demir Anahtar’ İle Zihinsel Sınır Çizmek",
        steps: [
          "Akşam eve girdiğinde anahtarını eline al, metalin soğukluğunu ve ağırlığını parmak uçlarında 5 saniye boyunca hisset.",
          "Kapıyı kilitlerken sadece dış kapıyı değil, gün boyu dışarıda yaşadığın tartışmaları ve iş stresini de kapının dışında bıraktığını imgele.",
          "Anahtarı yerine bırakırken ‘Dışarının gürültüsü dışarıda kaldı; bu eşikten içeri yalnızca dinginlik girer’ de.",
        ],
      },
      en: {
        title: "Daily Practice · The 'Iron Key' Threshold Grounding",
        steps: [
          "When you return home this evening, hold your metal house key in your palm for five slow seconds, feeling its cool weight.",
          "As you turn the lock, consciously lock the day's noise, arguments, and unfinished haste outside the door.",
          "Set the key down with the quiet word: 'What belongs to the street stays in the street; within this threshold is peace.'",
        ],
      },
      sv: {
        title: "Daglig Praktik · 'Järnnyckelns' Gränssättning vid Hemkomsten",
        steps: [
          "När du kommer hem i kväll, håll din metallnyckel i handen i fem sekunder och känn dess svala tyngd.",
          "När du vrider om låset, stäng medvetet ute dagens brus och oro på andra sidan tröskeln.",
          "Lägg ner nyckeln med tanken: 'Det som hör vägen till stannar där ute; här inne råder frid.'",
        ],
      },
    },
    closing: {
      tr: "Ateşte dövülmüş demir nasıl eğilmezse, sınavdan geçmiş irade de rüzgarda savrulmaz.",
      en: "As iron tempered in the forge does not bend, a will tempered by trial does not scatter in the wind.",
      sv: "Liksom järn härdat i ässjan inte viker, skingras inte en prövad vilja av vinden.",
    },
  },
  {
    slug: "iskandinav-utiseta-gece-oturusu",
    glyph: "ᛇ",
    traditionTag: {
      tr: "KUZEY İNZİVA SANATI · İZLANDA & NORVEÇ",
      en: "NORSE VIGIL PRACTICE · ICELAND & NORWAY",
      sv: "NORDISK VAKA · ISLAND & NORGE",
    },
    keywords: [
      "utiseta",
      "utiseti",
      "disarida oturma",
      "kavsak",
      "gece nobeti",
      "volva",
      "bilgelik nobeti",
    ],
    title: {
      tr: "Kuzey Geleneğinde ‘Útiseta’: Bilgelik İçin Gece Dışarıda Tek Başına Oturma Sanatı",
      en: "'Útiseta' in Norse Tradition: The Art of Sitting Out Alone Under the Night Sky for Wisdom",
      sv: "'Útiseta' (Utesittning) i Nordisk Tradition: Konsten att Sitta Ute i Natten för Visdom",
    },
    subtitle: {
      tr: "Sitja Úti til Fróðleiks: Korkuyu Yenmek, Doğanın Sesini Dinlemek ve Eşikte Uyanık Kalmak",
      en: "Sitja Úti til Fróðleiks: Overcoming Fear, Listening to the Land, and Keeping Awake at the Threshold",
      sv: "Sitja Úti til Fróðleiks: Att Övervinna Fruktan och Lyssna till Landets Röst",
    },
    summary: {
      tr: "Eski İskandinav metinlerinde *sitja úti til fróðleiks* (‘bilgelik aramak için dışarıda oturmak’) olarak geçen **Útiseta**, insanın gece vakti bir tepe, kaya veya yol ayrımında ateş yakmadan ve konuşmadan sabaha dek uyanık oturarak kendi korkularını aşma pratiğidir.",
      en: "Known in Old Norse sources as *sitja úti til fróðleiks* ('sitting out to seek knowledge'), **Útiseta** was the solitary night vigil kept on a hill, stone, or crossroads without fire or speech.",
      sv: "Känd i fornnordiska källor som *sitja úti til fróðleiks* ('att sitta ute för att söka kunskap') var **Útiseta** (utesittning) en ensam nattvaka på en höjd, vid en sten eller ett vägskäl.",
    },
    paragraphs: {
      tr: [
        "Eski İzlanda ve Norveç kaynaklarında (*Gull-Þóris saga* ve erken dönem kuzey yasalarında), bilgelik arayan kişilerin ve *Völva*’ların uyguladığı en derin pratiklerden biri **Útiseta** (‘Dışarıda Oturma’) olarak kaydedilmiştir. Kişi pelerinine sarınır, insan sesinin ulaşmadığı bir kayanın veya yol ayrımının üzerine oturur ve gece boyunca yerinden kıpırdamadan doğayı dinlerdi.",
        "Útiseta’nın ilk sınavı doğaüstü bir sır değil, **insanın kendi zihninin ürettiği korkudur**. Karanlıkta rüzgarın sesi, dalların çıtırtısı ve yalnızlık hissi zihindeki tüm bastırılmış kaygıları yüzeye çıkarır.",
        "Kim ki panikleyip kaçmadan, uyuyakalmadan ve etrafındaki seslerle savaşmadan şafağa kadar merkezinde (*Isa*) kalabilirse; sabah güneşi doğduğunda zihnindeki sahte korkuların dağıldığını ve aradığı cevabın berraklaştığını görürdü.",
      ],
      en: [
        "In Old Norse sagas and early Icelandic records, one of the most demanding contemplative practices was **Útiseta** ('Sitting Out')—specifically *sitja úti til fróðleiks*, sitting out under the open night sky to gain wisdom.",
        "Wrapped in a cloak upon a solitary rock or crossroads, the practitioner sat without fire or conversation through the dark hours. The first test of *Útiseta* was never external monsters, but the projections of one's own restless mind.",
        "Whoever remained awake and unshaken until daybreak discovered that false fears burned away with the morning mist, leaving clear judgment behind.",
      ],
      sv: [
        "I de isländska sagorna och fornnordiska källorna omtalas **Útiseta** (*utesittning* — *sitja úti til fróðleiks*, att sitta ute för att vinna visdom) som en av nordens djupaste prövningar.",
        "Svept i sin kappa satt utövaren ensam på en klippa eller vid ett vägskäl genom nattens timmar utan eld eller samtal. Den första prövningen var alltid sinnets egen oro i mörkret.",
        "Den som varken flydde eller somnade utan satt stilla till gryningen fann att rädslan skingrades och ersattes av klarsyn.",
      ],
    },
    keyPoints: {
      tr: [
        "Útiseta (Dışarıda Oturma): İnsan gürültüsünden uzakta, açık gökyüzü altında yapılan sessiz uyanıklık nöbeti.",
        "Sitja Úti til Fróðleiks: Gösteriş için değil, yalnızca ‘hakiki kavrayış ve bilgelik’ için oturmak.",
        "Korku Eşiği: Karanlıkta beliren ilk huzursuzluğun dışarıdan değil, zihnin kendi gölgesinden geldiğini görmek.",
        "Şafak Berraklığı: Kaçmadan bekleyen zihnin sabah ilk ışıkla birlikte kendi cevabını bulması.",
      ],
      en: [
        "Útiseta ('Sitting Out'): A solitary, silent vigil under the open sky away from human chatter.",
        "Sitja Úti til Fróðleiks: Sitting out specifically to cultivate discernment and inner steadiness.",
        "The Threshold of Fear: Recognizing how the mind projects its own anxieties onto the dark.",
        "Dawn Clarity: The calm certainty that arrives when one neither flees nor fights the stillness.",
      ],
      sv: [
        "Útiseta (Utesittning): En ensam, tyst vaka under bar himmel borta från människors brus.",
        "Sitja Úti til Fróðleiks: Att sitta ute i syfte att nå insikt och sinnesro.",
        "Fruktans Tröskel: Att genomskåda hur sinnet projicerar sin egen oro i mörkret.",
        "Gryningens Klarhet: Den fasta visshet som infinner sig när man stannar kvar i stillheten.",
      ],
    },
    practice: {
      tr: {
        title: "Günlük Uygulama · 15 Dakikalık Modern ‘Útiseta’ (Gece Gökyüzü Nöbeti)",
        steps: [
          "Bu akşam hava karardığında balkona, bahçeye veya açık bir pencerenin önüne telefonunu almadan çık.",
          "Üzerine sıcak bir şal/hırka al ve 15 dakika boyunca hiçbir şeyle meşgul olmadan sadece gece gökyüzünü, rüzgarı ve uzaktaki sesleri dinle.",
          "İçinden ‘sıkıldım, içeri gireyim, ekrana bakayım’ dürtüsü geldiğinde hemen kalkma; o dürtünün geçip yerini derin bir sükunete bırakmasını izle.",
        ],
      },
      en: {
        title: "Daily Practice · A 15-Minute Modern 'Útiseta' Under the Night Sky",
        steps: [
          "After nightfall tonight, step onto your balcony, garden, or by an open window without your phone.",
          "Wrap yourself warmly and sit for 15 minutes doing nothing at all—simply watching the night sky and listening to the wind.",
          "When the impulse of restlessness ('check a screen, go inside') arises, stay seated and watch the restlessness dissolve into calm.",
        ],
      },
      sv: {
        title: "Daglig Praktik · 15 Minuters Modern 'Utesittning' under Kvällshimlen",
        steps: [
          "När mörkret fallit i kväll, gå ut på balkongen, i trädgården eller sätt dig vid ett öppet fönster utan telefon.",
          "Svep något varmt om dig och sitt stilla i 15 minuter medan du lyssnar till vinden och betraktar natthimlen.",
          "När rastlösheten väcks, sitt kvar och se hur den sakta övergår i djup ro.",
        ],
      },
    },
    closing: {
      tr: "Karanlıkta kendisiyle baş başa oturabilen insanı gündüzün hiçbir gürültüsü korkutamaz.",
      en: "Nothing in the noise of day can intimidate the one who has sat calmly with themselves in the dark.",
      sv: "Ingenting i dagens larm kan skrämma den som suttit lugnt med sig själv i nattens stillhet.",
    },
  },
  {
    slug: "platon-er-miti-ve-daimon",
    glyph: "⚖",
    traditionTag: {
      tr: "ANTİK FELSEFE & ASTROLOJİ · PLATON",
      en: "ANCIENT PHILOSOPHY & ASTROLOGY · PLATO",
      sv: "ANTIK FILOSOFI & ASTROLOGI · PLATON",
    },
    keywords: [
      "daimon",
      "er miti",
      "platon",
      "ananke",
      "lachesis",
      "kader secimi",
      "paradeigma",
    ],
    title: {
      tr: "Platon’un ‘Er Miti’nde Daimon: Ruhun Doğmadan Önce Seçtiği Hayat Modeli",
      en: "The 'Daimon' in Plato's Myth of Er: The Life Pattern Chosen Before Birth",
      sv: "'Daimon' i Platons Myt om Er: Livsmönstret som Själen Väljer Före Födelsen",
    },
    subtitle: {
      tr: "Zorunluluk İği (Ananke), Üç Kader Kızkardeşi (Moiralar) ve ‘Seçen Sorumludur’ Yasası",
      en: "The Spindle of Necessity (Ananke), the Three Fates (Moirai), and the Law That 'The Chooser Is Responsible'",
      sv: "Nödvändighetens Slända (Ananke), Ödesgudinnorna (Moirerna) och Lagen om den Väljandes Ansvar",
    },
    summary: {
      tr: "Platon’un *Devlet* diyaloğunun son bölümünde anlatılan Pamfilyalı Er’in ölümden dönüş anlatısına göre; kader insana körü körüne dayatılmaz. Her ruh kendi hayat modelini (*Paradeigma*) seçer ve o seçimi koruması için kendisine bir **Daimon** (içsel rehber) verilir.",
      en: "In the Myth of Er concluding Plato's *Republic*, destiny is not blindly imposed: each soul selects its own life pattern (*Paradeigma*) before the Spindle of Necessity and receives a personal **Daimon** to guard that calling.",
      sv: "I Myten om Er som avslutar Platons *Staten* påtvingas ödet inte i blindo: varje själ väljer sitt livsmönster (*Paradeigma*) inför Nödvändighetens slända och får en **Daimon** som väktare.",
    },
    paragraphs: {
      tr: [
        "Klasik astrolojinin ve kadim psikolojinin en derin metinlerinden biri, Platon’un *Devlet* (X. Kitap, 614b–621d) eserinin sonunda yer alan **Pamfilyalı Er Miti**’dir. Savaş meydanında öldüğü sanılan ancak 12. günde dirilen Er, ruhların yeniden dünyaya gelmeden önce **Ananke**’nin (Kozmik Zorunluluk) ışık sütunu ve sekiz gök küresinden oluşan iği önünde toplandığını anlatır.",
        "Kader tanrıçası **Lachesis**’in sözcüsü ruhlara kuraları dağıtır ve şu sarsıcı cümleyi ilan eder: *‘Sizi bir Daimon (rehber ruh) seçmeyecek, siz kendi Daimon’unuzu ve hayat modelinizi seçeceksiniz. Seçen sorumludur; Tanrı suçsuzdur (Aitía heloménou, Theòs anaítios).’*",
        "Ruhlar önlerine serilen hayat modellerinden (*Paradeigma*) birini seçtikten sonra Lachesis her ruha seçtiği yolu hatırlatacak bir **Daimon** (iç ses / vicdan ve istidat rehberi) atar; **Klotho** bu seçimi kader ipine dokur, **Atropos** ise bükülmüş ipi geri dönülmez kılar. Ardından ruhlar **Unutuş Irmağı**’ndan (*Lethe*) su içerek dünyaya doğar; bilge insan ise bu suyu ölçülü içip kendi *Daimon*’unu unutmayandır.",
      ],
      en: [
        "At the close of Plato's *Republic* (Book X, 614b–621d) stands the **Myth of Er**, a cornerstone of both Hellenistic astrology and depth psychology. Er of Pamphylia beholds the cosmic Spindle of **Ananke** (Necessity), around which the eight planetary spheres revolve.",
        "Before the souls enter earthly life, the herald of the Fate **Lachesis** proclaims the foundational law of agency: *'A Daimon shall not select you, but you shall choose your own Daimon and pattern of life. The responsibility lies with the chooser; the Divine is blameless.'*",
        "Once a soul chooses its life pattern (*Paradeigma*), Lachesis assigns the **Daimon** as guardian of that choice, **Clotho** spins it onto the thread, and **Atropos** makes the weave irreversible before the souls cross the River of Forgetfulness (*Lethe*).",
      ],
      sv: [
        "I slutet av Platons *Staten* (Bok X, 614b–621d) står **Myten om Er**, en hörnsten för både klassisk astrologi och djuppsykologi. Där skådar Er **Anankes** (Nödvändighetens) kosmiska slända och de åtta himlasfärerna.",
        "Inför själarnas inträde i livet förkunnar ödesgudinnan **Lachesis** härold: *'En Daimon skall inte utvälja er, utan ni skall själva välja er Daimon och ert livsmönster. Ansvaret vilar hos den som väljer.'*",
        "När själen valt sitt mönster (*Paradeigma*) ger Lachesis henne en **Daimon** som väktare av detta kall, innan själarna passerar Glömskans flod (*Lethe*).",
      ],
    },
    keyPoints: {
      tr: [
        "Daimon: İnsanın dışarıdan şöhret için değil, içeriden kendi öz doğasını gerçekleştirmesi için ona eşlik eden rehber.",
        "Paradeigma (Hayat Modeli): Ruhun dünyaya gelirken deneyimlemeyi seçtiği ana sınav ve yetenek çekirdeği.",
        "Üç Moira (Klotho · Lachesis · Atropos): Kuzeydeki Üç Norns (Urd · Verdandi · Skuld) ile aynı arketipi taşıyan kader dokuyucuları.",
        "Lethe (Unutuş Irmağı): Gündelik telaş içinde insanın dünyaya neden geldiğini unutması; felsefenin ise ‘hatırlama’ (Anamnesis) olması.",
      ],
      en: [
        "Daimon: The inner guardian and vocational compass accompanying a person through life.",
        "Paradeigma (Life Pattern): The core configuration of trials and gifts reflected in the natal chart.",
        "The Three Moirai (Clotho · Lachesis · Atropos): Sister-archetypes to the Northern Norns (Urd · Verdandi · Skuld).",
        "Lethe & Anamnesis: Overcoming the river of daily forgetfulness to remember one's genuine calling.",
      ],
      sv: [
        "Daimon: Den inre vägledare och kallelsekompass som följer människan genom livet.",
        "Paradeigma (Livsmönster): Den grundform av prövningar och gåvor som speglas i födelsekartan.",
        "De Tre Moirerna (Klotho · Lachesis · Atropos): Motsvarigheten till nordens tre Nornor (Urd · Verdandi · Skuld).",
        "Lethe & Anamnesis: Att vakna ur vardagens glömska och minnas sin egen väg.",
      ],
    },
    practice: {
      tr: {
        title: "Günlük Uygulama · ‘Unutuş Irmağı’ndan Uyanıp Öz Çağrıyı Hatırlamak",
        steps: [
          "Bugün dış dünyanın alkışı veya baskısı olmasaydı dahi yapmaktan vazgeçmeyeceğin o tek uğraşı veya erdemi düşün.",
          "Çocukluğundan beri sende hiç değişmeyen o doğal merak tohumunu (Daimon’unun sesini) bir cümleyle yaz.",
          "Bugün en az 20 dakikanı başkalarının senden beklediği role değil, o öz çağrına ayır.",
        ],
      },
      en: {
        title: "Daily Practice · Remembering Your 'Daimon' Beyond Daily Noise",
        steps: [
          "Ask yourself today: 'What work, study, or virtue would I still care about deeply even if no one applauded it?'",
          "Write down in one sentence the enduring thread of curiosity that has followed you since childhood.",
          "Dedicate at least twenty focused minutes today to that authentic calling rather than external expectations.",
        ],
      },
      sv: {
        title: "Daglig Praktik · Att Minnas Sin 'Daimon' Bortom Vardagens Brus",
        steps: [
          "Fråga dig själv i dag: 'Vilket arbete eller vilken dygd skulle jag hålla fast vid även om ingen gav mig beröm för det?'",
          "Skriv i en mening ner den röda tråd av nyfikenhet som följt dig sedan barndomen.",
          "Ägna minst tjugo ostörda minuter i dag åt denna inre kallelse.",
        ],
      },
    },
    closing: {
      tr: "Başkasının tacına özenen kendi yolunu şaşırır; kendi Daimon’unu dinleyen ise çorak taşta bile su bulur.",
      en: "Whoever envies another's crown loses the road; whoever listens to their own Daimon finds water even in stone.",
      sv: "Den som avundas en annans krona går vilse; den som lyssnar till sin egen Daimon finner vatten även ur klippan.",
    },
  },
  {
    slug: "anadolu-el-alma-ve-ocakli-toresi",
    glyph: "🤲",
    traditionTag: {
      tr: "ANADOLU OCAKLI GELENEĞİ · SÖZLÜ AKTARIM",
      en: "ANATOLIAN HEARTH LINEAGE · ORAL TRANSMISSION",
      sv: "ANATOLISK HÄRDTRADITION · MUNTLIGT ARV",
    },
    keywords: [
      "ocakli",
      "el alma",
      "el verme",
      "destur",
      "benim elim degil",
      "usta cirak",
      "sifa ocagi",
    ],
    title: {
      tr: "Anadolu’da ‘Ocaklı’ Geleneği ve ‘El Alma’ Töresi: Bilginin Edep İle Aktarımı",
      en: "The Anatolian 'Ocaklı' Lineage and 'Receiving the Hand': Ethics of Traditional Healing",
      sv: "Den Anatoliska 'Ocaklı'-traditionen och 'Att Ta Emot Handen': Läkekonstens Etik",
    },
    subtitle: {
      tr: "‘Benim Elim Değil, Ustalarımın Eli’: Şifada Kibrin Reddi ve Zincirin Korunması",
      en: "'Not My Hand, But the Hand of the Ancestors': Rejecting Ego in Traditional Craft",
      sv: "'Inte Min Hand, Utan Föregångarnas Hand': Att Avvisa Högmod i Hantverket",
    },
    summary: {
      tr: "Anadolu ve Orta Asya halk hekimliğinde bir bitkiyi, duayı veya zanaatı bilmek tek başına yetmez; o bilginin sabırla sınanmış bir çırağa **‘El Verme / El Alma’** töresiyle ve **‘Benim elim değil’** tevazusuyla aktarılması gerekir.",
      en: "In Anatolian and Central Asian folk medicine, mere technical knowledge of herbs was never enough; wisdom passed through tested apprenticeship ('El Verme / Receiving the Hand') and strict humility.",
      sv: "I anatolisk och centralasiatisk läkekonst räckte aldrig enbart teknisk kunskap om örter; visdomen fördes vidare genom prövat lärlingskap ('Att ge handen') och sträng ödmjukhet.",
    },
    paragraphs: {
      tr: [
        "Geleneksel Anadolu kültüründe belirli bir şifa, otacılık veya zanaat bilgisini kuşaklar boyu koruyan ailelere ve ustalara **‘Ocaklı’** adı verilir. Ocaklı olmanın birinci şartı yetenek değil, **ahlak ve nefis terbiyesidir**; usta, yıllarca yanında sabreden, sır saklamayı bilen ve bilgisini zulüm ya da kibir için kullanmayacağından emin olduğu kişiye **‘El Verir’**.",
        "Bu aktarım sırasında usta çırağın elini tutar, bazen ağzından sembolik bir nefes/su izni verir ve ona ocağın temel kuralını öğretir: Ocaklı bir şifacı bir yaraya merhem sürerken veya tütsü yakarken asla *‘Ben iyileştirdim’* demez; daima **‘Benim elim değil; Fatma Ana’nın, Lokman Hekim’in ve ustalarımın eli’** der.",
        "Bu cümle muazzam bir bilgelik koruyucusudur: İnsanı ‘kurtarıcı kompleksinden’ ve ruhsal kibirden korur; şifacının sadece doğanın ve kadim zincirin temiz bir kanalı olduğunu hatırlatır.",
      ],
      en: [
        "Across Anatolia, families and masters who preserved specialized herbal or healing knowledge across generations were known as **'Ocaklı'** ('Keepers of the Hearth'). Before passing down the craft, a master observed a student's patience, discretion, and character for years before granting initiation (**'El Verme'** — Giving the Hand).",
        "The central ethical seal of an *Ocaklı* practitioner was spoken aloud whenever applying a salve or herb: **'This is not my hand, but the hand of Lokman the Sage and the masters before me.'**",
        "By refusing personal credit, the practitioner remained shielded from spiritual inflation and ego, serving simply as a clear conduit of nature and ancestral craft.",
      ],
      sv: [
        "I Anatolien kallades de släkter och mästare som bevarade läkekonst och örtkunskap genom generationer för **'Ocaklı'** ('Av Härden'). Innan kunskapen fördes vidare prövades lärlingens tålamod, tystlåtenhet och karaktär i åratal innan mästaren 'gav handen' (**'El Verme'**).",
        "Den främsta etiska regeln uttrycktes i orden som uttalades vid varje behandling: **'Detta är inte min hand, utan de gamla mästarnas hand.'**",
        "Genom att aldrig ta åt sig äran personligen skyddades utövaren från andligt högmod.",
      ],
    },
    keyPoints: {
      tr: [
        "Ocaklı Olmak: Bilgiyi kitaptan ezberlemek değil, yaşayan bir sorumluluk zinciri içinde taşımak.",
        "El Alma / El Verme: Sabır ve dürüstlük sınavından geçen çırağa ustanın icazet (izin) vermesi.",
        "‘Benim Elim Değil’ İlkesi: İyileştirme veya üretme gücünü kendi egosuna mal etmeme disiplini.",
        "Ocağı Kirletmemek: Bilgelik ve şifa bilgisini insanları korkutmak ya da aldatmak için asla kullanmamak.",
      ],
      en: [
        "Being 'Ocaklı': Carrying knowledge not as a commodity, but as a living trust across generations.",
        "Receiving the Hand (El Alma): Earned transmission after years of ethical observation and service.",
        "'Not My Hand': The verbal seal preventing spiritual pride and savior complex.",
        "Keeping the Hearth Clean: Never using traditional lore to frighten, manipulate, or deceive.",
      ],
      sv: [
        "Att Vara 'Ocaklı': Att bära kunskap som ett levande förtroende snarare än en handelsvara.",
        "Att Ta Emot Handen (El Alma): Överföring av ansvar efter prövad karaktär och ödmjukhet.",
        "'Inte Min Hand': Den etiska formel som motverkar högmod.",
        "Att Hålla Härden Ren: Att aldrig missbruka kunskap för att skrämma eller vilseleda.",
      ],
    },
    practice: {
      tr: {
        title: "Günlük Uygulama · ‘Ustalara Selam ve Egosuz Emek’ Pratiği",
        steps: [
          "Bugün bildiğin bir konuda birine yardım ettiğinde veya iyi bir iş çıkardığında içindeki ‘bunu ben başardım’ kibrini fark et.",
          "Bugünkü bilgine ulaşmanı sağlayan geçmişteki öğretmenlerini, okuduğun kitapların yazarlarını ve atalarını zihninde ismen selamla.",
          "Yardımını karşı tarafı kendine borçlu hissettirmeden, bir ‘Ocaklı’ sükunetiyle sun.",
        ],
      },
      en: {
        title: "Daily Practice · Practicing 'Egoless Craft' and Gratitude to Lineage",
        steps: [
          "When you offer good counsel or complete skillful work today, notice any subtle urge to boast.",
          "Silently recall the teachers, authors, and elders whose labor made your present skill possible.",
          "Offer your help cleanly, without making the other person feel indebted to you.",
        ],
      },
      sv: {
        title: "Daglig Praktik · Tacksamhet mot Lärare och Föregångare",
        steps: [
          "När du i dag utför ett gott arbete eller ger ett klokt råd, lägg märke till varje impuls att framhäva dig själv.",
          "Minns i tysthet de lärare, författare och äldre vars möda gjort din kunskap möjlig.",
          "Ge din hjälp rent och enkelt utan att kräva tacksamhetsskuld.",
        ],
      },
    },
    closing: {
      tr: "Suyun akması için borunun içi boş olmalıdır; kibirle dolan borudan bilgelik suyu geçmez.",
      en: "For water to flow, the reed must be hollow; a vessel choked with pride cannot carry the spring.",
      sv: "För att vattnet ska flöda måste röret vara ihåligt; genom ett sinne fyllt av högmod rinner ingen klar källa.",
    },
  },
  {
    slug: "eski-turk-yada-tasi-ve-doga-uyumu",
    glyph: "◈",
    traditionTag: {
      tr: "BOZKIR KOZMOLOJİSİ · ORTA ASYA",
      en: "STEPPE COSMOLOGY · CENTRAL ASIA",
      sv: "STÄPPKOSMOLOGI · CENTRALASIEN",
    },
    keywords: [
      "yada tasi",
      "cada tasi",
      "yadaci",
      "kasgarli mahmud",
      "yagmur tasi",
      "bozkir",
      "iklim",
    ],
    title: {
      tr: "Eski Türk Kaynaklarında ‘Yada Taşı’: Doğa İyeleriyle Uyum ve Ölçü Yasası",
      en: "The 'Yada Stone' in Early Turkic Lore: Harmony and Measure with the Forces of Nature",
      sv: "'Yada-stenen' i Fornturkisk Tradition: Samklang och Måtta med Naturens Krafter",
    },
    subtitle: {
      tr: "Kaşgarlı Mahmud ve İbn Fadlan Kayıtlarında Yada Geleneği: Doğaya Hükmetmek Değil, Dengesini Okumak",
      en: "Recorded by Mahmud al-Kashgari and Ibn Fadlan: Reading Natural Balance Rather Than Forcing the Sky",
      sv: "Omtalad av Mahmud al-Kashgari och Ibn Fadlan: Att Läsa Naturens Jämvikt",
    },
    summary: {
      tr: "Kaşgarlı Mahmud’un *Dîvânu Lugâti’t-Türk* eserinde bizzat tanık olduğunu yazdığı **Yada (Cada) Taşı** geleneği, bozkır bilgesinin (*Yadacı*) rüzgar, yağmur ve mevsim döngüleriyle kurduğu derin rezonansı ve doğadan asla ihtiyaçtan fazlasını istememe töresini anlatır.",
      en: "Documented by the 11th-century lexicographer Mahmud al-Kashgari in *Dīwān Lughāt al-Turk*, the tradition of the **Yada Stone** reflects the steppe sage's attunement to wind and rain—and the strict law never to ask nature for more than what is needed.",
      sv: "Dokumenterad på 1000-talet av Mahmud al-Kashgari i *Dīwān Lughāt al-Turk* speglar traditionen kring **Yada-stenen** stäppens vördnad för vind och regn samt regeln att aldrig begära mer av naturen än vad nöden kräver.",
    },
    paragraphs: {
      tr: [
        "Orta Asya bozkır geleneğinde su ve rüzgar kutsaldır. 11. yüzyıl bilgesi **Kaşgarlı Mahmud**, *Dîvânu Lugâti’t-Türk*’te **‘Yat / Yada’** maddesini açıklarken Yağma ülkesinde çıkan büyük bir yangını söndürmek için yaz ortasında Yada taşıyla kar yağdırıldığına bizzat şahit olduğunu kaydeder.",
        "Ancak eski bozkır anlatılarında (*Yadacı* / *Yatçı* töresinde) çok önemli bir ahlaki sınır vardır: Yada taşı keyif için, hırs için veya komşu boya zarar vermek için kullanıldığında **taşın gücü söner (çatlar)** ve uygulayıcı kendi dengesini kaybeder.",
        "Bu kadim sembolizm bize şunu öğretir: Doğa güçleriyle çalışan insan doğanın efendisi değil, onun küçük bir parçasıdır. Yalnızca gerçek ihtiyaç (*Zaruret*) ve berrak niyet doğada karşılık bulur; açgözlülük ise kaynağı kurutur.",
      ],
      en: [
        "Across the Central Asian steppe, wind and water were honored as living forces. In his 11th-century compendium *Dīwān Lughāt al-Turk*, the scholar **Mahmud al-Kashgari** recorded witnessing the **Yada** rite in the territory of the Yaghma, where summer snow was called down to extinguish a devastating fire.",
        "Yet steppe lore placed a strict ethical boundary around the *Yadacı* (keeper of the stone): if the stone was ever invoked out of greed, vanity, or malice rather than genuine communal need, the stone would crack and lose its virtue.",
        "The lesson of the Yada Stone is the law of measure: one approaches nature not as a tyrant demanding miracles, but as a respectful guest asking only for what restores balance.",
      ],
      sv: [
        "På den centralasiatiska stäppen vördades vind och vatten som levande makter. I sitt 1000-talsverk *Dīwān Lughāt al-Turk* nedtecknade lärde **Mahmud al-Kashgari** hur han själv bevittnat **Yada**-bruket för att släcka en våldsam brand.",
        "Men stäppens tradition satte en skarp etisk gräns för en *Yadacı*: om stenen någonsin brukades av girighet eller fåfänga i stället för verklig nöd, sprack stenen och förlorade sin kraft.",
        "Yada-stenens lärdom är måttans lag: människan närmar sig naturen som en vördnadsfull gäst, aldrig som en tyrann.",
      ],
    },
    keyPoints: {
      tr: [
        "Yada (Cada) Taşı: Eski Türk yazılı kaynaklarında doğa olaylarıyla rezonans kuran kutsal mineral/taş.",
        "Yadacı Töresi: Taşı kullanan kişinin nefsini arındırmış olması ve kişisel çıkar gözetmemesi kuralı.",
        "Taşın Çatlaması: Hırs ve kibir karıştığında manevi odaklanma gücünün dağılması.",
        "Ölçü ve Denge: Doğadan ve hayattan yalnızca dengeyi koruyacak kadarını isteme bilgeliği.",
      ],
      en: [
        "The Yada Stone: The sacred weather-stone attested across medieval Turkic and Inner Asian chronicles.",
        "Code of the Yadacı: The requirement of selflessness and ethical restraint in working with natural forces.",
        "The Cracking of the Stone: How greed or arrogance shatters spiritual concentration.",
        "The Law of Measure: Asking only for what restores equilibrium rather than excess.",
      ],
      sv: [
        "Yada-stenen: Den heliga vädersten som omtalas i medeltida turkiska krönikor.",
        "Yadacı-regeln: Kravet på osjälviskhet och återhållsamhet i umgänget med naturen.",
        "Stenens Spricka: Hur girighet och högmod spräcker den inre kraften.",
        "Måttans Lag: Att endast be om det som återställer balansen.",
      ],
    },
    practice: {
      tr: {
        title: "Günlük Uygulama · ‘İhtiyaç ile Hırsı Ayırma’ (Yada Tartısı)",
        steps: [
          "Bugün çok istediğin bir hedefi veya dileğini kağıda yaz ve kendine dürüstçe sor: ‘Bu benim gerçek ihtiyacım ve dengem mi, yoksa sadece hırsım mı?’",
          "Masanın üzerinde doğal bir taş (çakıl taşı, kuvars veya bazalt) bulundur; her dokunduğunda doğanın acele etmeyen dengesini hatırla.",
          "Bugün su kullanırken veya yemek yerken israftan bilinçli olarak kaçınarak su iyesine saygı göster.",
        ],
      },
      en: {
        title: "Daily Practice · Weighing 'Need vs. Greed' (The Yada Measure)",
        steps: [
          "Write down a pressing desire you hold today and ask honestly: 'Does this serve genuine balance, or only restless ambition?'",
          "Keep a simple natural stone on your desk as a tactile reminder of patience and earthly measure.",
          "Honor the element of water today by wasting not a single drop in your kitchen or glass.",
        ],
      },
      sv: {
        title: "Daglig Praktik · Att Skilja 'Behov från Girighet' (Yada-måttet)",
        steps: [
          "Skriv ner en stark önskan du bär på i dag och fråga ärligt: 'Tjänar detta verklig balans eller bara rastlös äregirighet?'",
          "Ha en enkel natursten på ditt skrivbord som en påminnelse om jordens tålamod.",
          "Hedra vattnets element i dag genom att inte slösa en enda droppe.",
        ],
      },
    },
    closing: {
      tr: "Yağmuru yangını söndürmek için isteyenin duası buluta ulaşır; kibir için isteyenin taşı elinde çatlar.",
      en: "The prayer that asks rain to quench a fire reaches the cloud; the demand born of pride cracks the stone in the hand.",
      sv: "Bönen som ber om regn för att släcka en brand når molnet; kravet fött ur högmod spräcker stenen i handen.",
    },
  },
  {
    slug: "hermetik-sessizlik-ve-nous",
    glyph: "☿",
    traditionTag: {
      tr: "HERMETİK FELSEFE · İSKENDERİYE",
      en: "HERMETIC PHILOSOPHY · ALEXANDRIA",
      sv: "HERMETISK FILOSOFI · ALEXANDRIA",
    },
    keywords: [
      "corpus hermeticum",
      "nous",
      "hermes trismegistus",
      "hermetik",
      "sessizlik",
      "poimandres",
      "zihin",
    ],
    title: {
      tr: "Hermetik Gelenekte ‘Nous’ ve Sessizlik Mührü (Corpus Hermeticum)",
      en: "'Nous' and the Seal of Silence in the Hermetic Tradition (Corpus Hermeticum)",
      sv: "'Nous' och Tystnadens Sigill i den Hermetiska Traditionen (Corpus Hermeticum)",
    },
    subtitle: {
      tr: "Geveze Akıldan (Logos) Berrak İdrake (Nous) Geçiş: İskenderiye Hermetik Metinlerinde İçsel Doğuş",
      en: "From Discursive Chatter to Direct Perception (Nous): Inner Rebirth in the Alexandrian Texts",
      sv: "Från Tankens Brus till Direkt Insikt (Nous): Inre Förnyelse i de Alexandrinska Skrifterna",
    },
    summary: {
      tr: "MS 2.–3. yüzyıl İskenderiye’sinde derlenen *Corpus Hermeticum* (I. ve XIII. Risaleler), insan zihninin iki katmanı olduğunu söyler: Sürekli tartışan ve bölen gündelik zihin ile yalnızca derin sessizlikte açılan saf idrak gözü (**Nous**).",
      en: "Compiled in 2nd–3rd century Alexandria, the *Corpus Hermeticum* (Tractates I and XIII) distinguishes between two levels of mind: the restless, argumentative intellect and **Nous**—the direct, silent eye of the heart.",
      sv: "Sammanställd i 100–200-talets Alexandria skiljer *Corpus Hermeticum* (Traktat I och XIII) mellan två nivåer av medvetande: det rastlöst argumenterande förnuftet och **Nous**—hjärtats tysta klarsyn.",
    },
    paragraphs: {
      tr: [
        "Geç Antik Çağ İskenderiye’sinde Yunan felsefesi ile Mısır tapınak bilgeliğinin birleşiminden doğan **Corpus Hermeticum**, bilgeliği dışsal törenlerde değil, zihnin kendi iç dönüşümünde arar. Metinlerde öğretmen Hermes, öğrencisi Tat’a neden hakikati kelimelerle anlatamadığını şöyle açıklar: *‘Söz (kelime) hakikatin kendisi değildir, yalnızca onun uzaktaki yankısıdır.’*",
        "*Corpus Hermeticum* XIII. Risale’de (*Gizli Dağ Söylevi*) öğrencinin zihni dış dünyadaki on iki bozucu tutkudan (öfke, açgözlülük, kibir, kıskançlık, acelecilik) arındığında, içeride **Nous** (Saf İdrak / Kalp Gözü) uyanır.",
        "Hermetik geleneğin en ünlü terimi olan **‘Hermetik Mühür’** (hava sızdırmaz kap) aslında simya şişesinden önce **insanın kendi dikkatidir**: Zihin enerjisini boş tartışmalarla dışarı sızdırmayı bıraktığında, içerideki ham kurşun (dağınık bilinç) kendi sıcaklığıyla altına (berrak bilgeliğe) dönüşür.",
      ],
      en: [
        "Born from the meeting of Greek philosophy and Egyptian temple tradition in late antique Alexandria, the **Corpus Hermeticum** locates transformation within the architecture of consciousness. As Hermes tells his pupil Tat in Tractate XIII: *'Words alone cannot teach regeneration; it arrives only when the bodily senses fall silent.'*",
        "Hermetic philosophy distinguishes the discursive mind—which endlessly compares, argues, and fragments—from **Nous**, the luminous faculty of direct perception that awakens when restless passions subside.",
        "Hence the true meaning of a **'Hermetic Seal'**: before it ever referred to an alchemical flask, it meant sealing one's attention so inner vitality does not leak away through idle gossip and reactivity.",
      ],
      sv: [
        "Född ur mötet mellan grekisk filosofi och egyptisk tempelvisdom i senantikens Alexandria söker **Corpus Hermeticum** förvandlingen i medvetandets inre. Som Hermes säger till sin lärjunge Tat i Traktat XIII: *'Ord ensamma kan inte skänka pånyttfödelse; den inträder först när sinnenas brus tystnar.'*",
        "Den hermetiska läran skiljer det ständigt diskuterande förnuftet från **Nous**—den klara, omedelbara insikt som vaknar i stillheten.",
        "Därav den ursprungliga betydelsen av ett **'Hermetiskt Sigill'**: att försegla sin uppmärksamhet så att livskraften inte läcker ut i tomt prat och reaktivitet.",
      ],
    },
    keyPoints: {
      tr: [
        "Nous (Saf İdrak): Tartışarak değil, berrak bir ayna gibi doğrudan görerek anlayan üst bilinç.",
        "Hermetik Mühür: İçsel enerjiyi ve niyeti boş konuşmalarla dışarı sızdırmadan koruma disiplini.",
        "On İki Tortu: Zihnin berraklığını bulandıran öfke, acelecilik, haset ve kibir gibi tepkisel alışkanlıklar.",
        "İçsel Simya: Kurşunu altına çevirmenin asıl karşılığının, ağır ve tepkisel zihni hafif ve bilge kılmak olması.",
      ],
      en: [
        "Nous (Direct Perception): The silent, mirror-like intelligence beyond argumentative thought.",
        "The Hermetic Seal: Guarding one's intention and energy from leaking away in idle talk.",
        "Clearing the Vessel: Releasing the reactive habits of anger, haste, envy, and pride.",
        "Inner Alchemy: Transmuting the heavy lead of reactivity into the gold of lucid presence.",
      ],
      sv: [
        "Nous (Direkt Insikt): Det spegelklara medvetandet bortom det argumenterande tänkandet.",
        "Det Hermetiska Sigillet: Att bevara sin energi och avsikt utan att spilla den i tomt prat.",
        "Kärlets Rening: Att släppa taget om vrede, brådska, avund och högmod.",
        "Inre Alkemi: Att förvandla reaktivitetens tunga bly till närvarons guld.",
      ],
    },
    practice: {
      tr: {
        title: "Günlük Uygulama · ‘Hermetik Mühür’ (Niyetini Erken Anlatmama Disiplini)",
        steps: [
          "Bugün yeni başladığın bir projeyi, bir niyetini veya içsel bir kararını hemen başkalarına anlatıp onay arama dürtüsünü durdur.",
          "Tohum toprağın altında karanlıkta ve kapalı kaldığı sürece kök salar; her gün tohumu çıkarıp başkalarına gösterirsen kurur.",
          "En az 7 gün boyunca yeni kararını ‘Hermetik Mühür’ altında sadece eyleminle büyüt.",
        ],
      },
      en: {
        title: "Daily Practice · The 'Hermetic Seal' on New Intentions",
        steps: [
          "Choose one new project, study, or personal resolution today and refrain from announcing it for quick validation.",
          "Remember that a seed only strikes root while hidden beneath the dark soil; digging it up to show others dries the root.",
          "Keep your resolution under a quiet 'Hermetic Seal' for seven days, feeding it with action rather than talk.",
        ],
      },
      sv: {
        title: "Daglig Praktik · 'Det Hermetiska Sigillet' kring Nya Avsikter",
        steps: [
          "Välj ett nytt mål eller beslut i dag och avstå från att genast berätta om det för att få snabb bekräftelse.",
          "Minns att ett frö bara slår rot medan det vilar dolt i jorden.",
          "Bevara ditt beslut under ett tyst 'Hermetiskt Sigill' i sju dagar och låt handlingen tala.",
        ],
      },
    },
    closing: {
      tr: "Açık bırakılan şişenin kokusu uçar; mühürlenen niyet ise zamanı geldiğinde odayı doldurur.",
      en: "An unstoppered flask loses its essence to the air; a sealed intention matures until its fragrance fills the hall.",
      sv: "En öppen flaska mister sin doft i vinden; en förseglad avsikt mognar tills den fyller hela rummet.",
    },
  },
  {
    slug: "misir-ve-keldani-otuz-alti-dekan",
    glyph: "✦",
    traditionTag: {
      tr: "KELDANİ & MISIR GÖKBİLİMİ · 36 DEKAN",
      en: "CHALDEAN & EGYPTIAN STAR LORE · 36 DECANS",
      sv: "KALDEISK & EGYPTISK STJÄRNLÄRA · 36 DEKANER",
    },
    keywords: [
      "dekan",
      "dekanlar",
      "otuz alti dekan",
      "yuzler",
      "faces",
      "dendera",
      "on derece",
    ],
    title: {
      tr: "Mısır ve Keldani Gökyüzünde ‘36 Dekan’: Zodyak Çemberinin Onar Derecelik Yıldız Gözcüleri",
      en: "The '36 Decans' of Egypt and Chaldea: Ten-Degree Star Watchers of the Zodiac",
      sv: "Egyptens och Kaldeens '36 Dekaner': Zodiakens Tiodgradiga Stjärnväktare",
    },
    subtitle: {
      tr: "Aynı Burçta Doğan İki İnsan Neden Farklıdır? Burçların Üçer Yüzü (Faces / Decans) ve Zamanın İnce Ayarı",
      en: "Why Two People of the Same Sign Differ: The Three Ten-Degree Faces of Every Zodiac Sign",
      sv: "Varför Två Människor i Samma Tecken Är Olika: Varje Stjärnteckens Tre Ansikten (Dekaner)",
    },
    summary: {
      tr: "MÖ 2100 Orta Krallık Mısır tabut kapaklarından (*Diagonal Star Clocks*) Hellenistik ve Keldani astrolojisine uzanan **36 Dekan** sistemi, 360 derecelik gökyüzünü 12 burca değil, her burcu da 10’ar derecelik **3 farklı ‘Yüz’e (Dekan)** bölerek okur.",
      en: "Originating on Middle Kingdom Egyptian star clocks (c. 2100 BCE) and integrated into Chaldean and Hellenistic astrology, the **36 Decans** divide the 360° zodiac into thirty-six 10° segments—giving every zodiac sign three distinct 'Faces'.",
      sv: "Med rötter i det Mellersta rikets egyptiska stjärnklockor (ca 2100 f.Kr.) och kaldeisk astrologi delar de **36 Dekanerna** in zodiakens 360 grader i trettiosex avsnitt om 10 grader—vilket ger varje tecken tre 'Ansikten'.",
    },
    paragraphs: {
      tr: [
        "Astrolojiye yüzeysel bakanların en sık sorduğu soru şudur: *‘Dünyadaki bütün Akrepler veya bütün Koçlar aynı mıdır?’* Kadim Mısır ve Babil gökbilimcileri bu sorunun cevabını dört bin yıl önce **36 Dekan** (*Baktiu* — ‘Çalışan Yıldızlar’ / Yunanca *Dekanoi* ve *Prosopa* — ‘Yüzler’) sistemiyle vermiştir.",
        "30 derecelik her burç; **0°–10° (Birinci Dekan)**, **10°–20° (İkinci Dekan)** ve **20°–30° (Üçüncü Dekan)** olmak üzere üç ayrı 10 derecelik dilime ayrılır. Keldani gezegen sırasına göre her 10 derecelik dilime farklı bir gezegen ‘kendi yüzünü’ (*Prosopon*) verir.",
        "Örneğin Koç burcunun ilk 10 derecesinde (21–30 Mart) doğan birinin dekanı **Mars**’tır (saf cesaret ve atılım); ikinci 10 derecesinde (31 Mart–9 Nisan) doğanın dekanı **Güneş**’tir (asalet ve merkez kurma); son 10 derecesinde (10–19 Nisan) doğanın dekanı ise **Venüs**’tür (estetik ve ilişki duyarlılığı). Böylece her burç kendi içinde üç ayrı mevsim tonu taşır.",
      ],
      en: [
        "A common question asked of astrology is why two people born under the same Sun sign can express such different temperaments. Over four thousand years ago, Egyptian astronomers (*Baktiu*, the 'Working Stars' on coffin-lid star clocks) and Chaldean astrologers answered this through the **36 Decans** (Greek *Dekanoi* or *Prosopa*, 'Faces').",
        "Every 30° sign of the zodiac is subdivided into three 10° segments: **0°–10° (First Decan)**, **10°–20° (Second Decan)**, and **20°–30° (Third Decan)**, each assigned a planetary ruler in Chaldean order.",
        "Thus Aries in its first 10° is ruled by **Mars** (raw pioneering drive), in its middle 10° by the **Sun** (sovereign radiance), and in its final 10° by **Venus** (artistic grace and relational warmth). The sky never repeats itself coarsely.",
      ],
      sv: [
        "En vanlig fråga är varför två människor födda i samma soltecken kan ha så olika lynne. För mer än fyratusen år sedan gav egyptiska och kaldeiska stjärntydare svaret genom systemet med de **36 Dekanerna** (grekiska *Dekanoi* eller *Prosopa*, 'Ansikten').",
        "Varje 30-gradigt zodiaktecken delas in i tre avsnitt om 10 grader: **0°–10° (Första dekanen)**, **10°–20° (Andra dekanen)** och **20°–30° (Tredje dekanen)**, som var och en färgas av en planet i den kaldeiska ordningen.",
        "Därmed bär Vädurens första tio grader **Mars** ansikte (ren pionjärkraft), de mellersta tio graderna **Solens** ansikte (värdighet och centrum) och de sista tio graderna **Venus** ansikte (estetik och förbindelse).",
      ],
    },
    keyPoints: {
      tr: [
        "36 Dekan (36 x 10° = 360°): Gökyüzünün onar günlük ve onar derecelik otuz altı ince dilimi.",
        "Prosopon (‘Gezegenin Yüzü’): Bir burcun 10 derecelik dilimine kendi rengini ve mizacını veren alt yönetici.",
        "Mısır Yıldız Saatleri: Her 10 günde bir şafakta doğan takımyıldızlarla zamanı ölçen en eski astronomi geleneği.",
        "İnce Gözlem: İnsanları tek bir kalıba sokmak yerine doğdukları günün derecesini ve tonunu okuma sanatı.",
      ],
      en: [
        "The 36 Decans (36 × 10° = 360°): Thirty-six ten-degree watches dividing the ecliptic circle.",
        "Prosopon ('Face'): The minor planetary dignity coloring each ten-degree band of a sign.",
        "Egyptian Diagonal Star Clocks: The 2100 BCE astronomical tables tracking rising decanal stars every ten days.",
        "Nuanced Judgment: Reading the specific degree and tone rather than reducing people to stereotypes.",
      ],
      sv: [
        "De 36 Dekanerna (36 × 10° = 360°): Trettiosex tiogradiga vakter längs ekliptikan.",
        "Prosopon ('Ansikte'): Den mindre planetvärdighet som färgar varje tiogradigt avsnitt.",
        "Egyptiska Stjärnklockor: De 4000 år gamla tabeller som följde dekanstjärnornas uppgång var tionde dag.",
        "Nyanserad Blick: Att se människans specifika grad och ton i stället för grova schabloner.",
      ],
    },
    practice: {
      tr: {
        title: "Günlük Uygulama · Kendi Doğum Gününün ‘Dekanını’ (1., 2. veya 3. On Gün) Bulmak",
        steps: [
          "Doğum gününe bak: Burcunun ilk 10 gününde mi (21–30 arası), ortadaki 10 gününde mi (1–10 arası), yoksa son 10 gününde mi (11–20 arası) doğdun?",
          "İlk 10 gün tohumun **saf ve doğrudan başlangıç** halini, orta 10 gün **merkezlenme ve olgunlaşma** halini, son 10 gün ise **bir sonraki burca geçiş ve ustalık** halini taşır.",
          "Detaylı burç ve asalet tablosu için Astroloji Salonundaki ‘On İki Burç ve Nitelikler’ odasını ziyaret et.",
        ],
      },
      en: {
        title: "Daily Practice · Finding Your Birth Decan (First, Middle, or Final Ten Days)",
        steps: [
          "Check where your birthday falls within your sign's thirty-day span: the first ten days, the middle ten days, or the final ten days.",
          "Notice how the first decan initiates raw energy, the middle decan consolidates the center, and the third decan prepares the transition to the next sign.",
          "Explore the 'Twelve Signs & Dignities' room in the Astrology Hall to compare classical rulerships.",
        ],
      },
      sv: {
        title: "Daglig Praktik · Att Finna Sin Födelsedekan (Första, Mellersta eller Sista Tio Dagarna)",
        steps: [
          "Se efter var din födelsedag ligger inom ditt teckens trettio dagar: de första tio, de mellersta tio eller de sista tio dagarna.",
          "Lägg märke till hur den första dekanen tänder gnistan, den mellersta befäster kärnan och den tredje förbereder övergången.",
          "Besök rummet 'Tolv Tecken & Värdigheter' i Astrologisalen för att fördjupa dig.",
        ],
      },
    },
    closing: {
      tr: "Gökyüzü kaba fırçayla boyanmamıştır; her derecenin kendine has bir yıldız nöbetçisi vardır.",
      en: "The sky is not painted with a coarse brush; every degree keeps its own appointed star-watch.",
      sv: "Himlen är inte målad med grov pensel; varje grad har sin egen utsedda stjärnvakt.",
    },
  },
];

export function getTodayDailyLore(now: Date = new Date()): DailyLoreEntry {
  const dayNumber = Math.floor(now.getTime() / 86_400_000);
  const idx = Math.abs(dayNumber) % dailyLoreEntries.length;
  return dailyLoreEntries[idx];
}

export function findDailyLore(slug: string): DailyLoreEntry | null {
  return dailyLoreEntries.find((item) => item.slug === slug) ?? null;
}
