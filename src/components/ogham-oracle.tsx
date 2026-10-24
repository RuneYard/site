"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/language";

type OghamFew = {
  index: number;
  glyph: string;
  oldIrish: string;
  phoneme: string;
  aicmeSlug: string;
  aicmeLabel: string;
  seasonSpan: { tr: string; en: string; sv: string };
  tree: { tr: string; en: string; sv: string };
  kenning: { tr: string; en: string; sv: string };
  teaching: { tr: string; en: string; sv: string };
};

const OGHAM_FEWS: readonly OghamFew[] = [
  {
    index: 1,
    glyph: "ᚁ",
    oldIrish: "Beith",
    phoneme: "B",
    aicmeSlug: "birinci-aicme",
    aicmeLabel: "I. Aicme (Beithe)",
    seasonSpan: {
      tr: "24 Aralık – 20 Ocak · Kış Gündönümü Sonrası İlk Filiz",
      en: "24 Dec – 20 Jan · First Shoot After Winter Solstice",
      sv: "24 dec – 20 jan · Första Skottet Efter Vintersolståndet",
    },
    tree: { tr: "Huş Ağacı (Betula)", en: "Birch (Betula)", sv: "Björk (Betula)" },
    kenning: {
      tr: "“Yanakların solgunluğu / Saflığın beyaz gövdesi” (Auraicept na n-Éces)",
      en: "“Withered foot with fine hair / White trunk of purity” (Auraicept na n-Éces)",
      sv: "”Kindens blekhet / Renhetens vita stam” (Auraicept na n-Éces)",
    },
    teaching: {
      tr: "Buzulların çekildiği çıplak toprağa ilk yerleşen öncü ağaçtır. Eski yükleri süpürmeyi, arınmayı ve sıfır noktasından temiz bir sayfa açmayı öğretir.",
      en: "The pioneer tree first to colonize bare ground after ice recedes. It teaches sweeping away old burdens, purification, and opening a clean threshold.",
      sv: "Pionjärträdet som först slår rot när isen drar sig tillbaka. Det lär ut rening, att sopa bort gamla bördor och börja på ny kula.",
    },
  },
  {
    index: 2,
    glyph: "ᚂ",
    oldIrish: "Luis",
    phoneme: "L",
    aicmeSlug: "birinci-aicme",
    aicmeLabel: "I. Aicme (Beithe)",
    seasonSpan: {
      tr: "21 Ocak – 17 Şubat · Imbolc & Kış Ortasında Koruyucu Ateş",
      en: "21 Jan – 17 Feb · Imbolc & Protective Ember",
      sv: "21 jan – 17 feb · Imbolc & Skyddande Glöd",
    },
    tree: { tr: "Üvez Ağacı (Sorbus)", en: "Rowan / Mountain Ash", sv: "Rönn (Sorbus)" },
    kenning: {
      tr: "“Gözün sevinci / Sürülerin koruyucusu”",
      en: "“Delight of the eye / Tending of cattle”",
      sv: "”Ögats fröjd / Hjordens beskyddare”",
    },
    teaching: {
      tr: "Kırmızı meyvelerinin tabanındaki beş köşeli yıldız mührüyle Kelt geleneğinde yanılsamayı, nazarı ve psişik bulanıklığı kesen ayırt etme ağacıdır.",
      en: "Marked by a five-pointed star at the base of its red berries, Rowan is the guardian of discernment that cuts through illusion and psychic fog.",
      sv: "Med en femuddig stjärna i sina röda bär är rönnen urskillningens väktare som skär genom illusion och dimma.",
    },
  },
  {
    index: 3,
    glyph: "ᚃ",
    oldIrish: "Fearn",
    phoneme: "F",
    aicmeSlug: "birinci-aicme",
    aicmeLabel: "I. Aicme (Beithe)",
    seasonSpan: {
      tr: "18 Şubat – 17 Mart · Suların Yükselişi & Kalkan",
      en: "18 Feb – 17 Mar · Rising Waters & Shield",
      sv: "18 feb – 17 mar · Stigande Vatten & Sköld",
    },
    tree: { tr: "Kızılağaç (Alnus)", en: "Alder (Alnus)", sv: "Al (Alnus)" },
    kenning: {
      tr: "“Savaşçıların öncüsü / Süt kaplarının muhafızı”",
      en: "“Vanguard of warriors / Milk-container”",
      sv: "”Krigarnas förtrupp / Vattnets sköld”",
    },
    teaching: {
      tr: "Suyun içinde çürümeden taşlaşan odunuyla bataklıkların üzerine köprü kuran ağaçtır; duygusal fırtınalarda sarsılmaz dayanıklılık ve sınır korumasını temsil eder.",
      en: "Its wood hardens like stone under water instead of rotting; Alder builds bridges over marshes and grants steadfast resilience in emotional storms.",
      sv: "Dess virke hårdnar som sten under vatten; alen bygger broar över träsk och ger orubblig uthållighet i känslostormar.",
    },
  },
  {
    index: 4,
    glyph: "ᚄ",
    oldIrish: "Sail",
    phoneme: "S",
    aicmeSlug: "birinci-aicme",
    aicmeLabel: "I. Aicme (Beithe)",
    seasonSpan: {
      tr: "18 Mart – 14 Nisan · Bahar Ekinoksu & Ay Suları",
      en: "18 Mar – 14 Apr · Vernal Equinox & Lunar Waters",
      sv: "18 mar – 14 apr · Vårdagjämning & Månvatten",
    },
    tree: { tr: "Söğüt Ağacı (Salix)", en: "Willow (Salix)", sv: "Pil / Sälg (Salix)" },
    kenning: {
      tr: "“Arıların ziyafeti / Esnekliğin ve yasın şifası”",
      en: "“Sustenance of bees / Supple stream-dancer”",
      sv: "”Binas gästabud / Böjlighetens läkedom”",
    },
    teaching: {
      tr: "Fırtınada kırılmamak için eğilmeyi bilen su ağacıdır. Rüya hafızasını, sezgisel akışı ve acıyı katılaştırmadan şifaya dönüştürmeyi öğretir.",
      en: "The water-loving tree that bends in the gale so it never snaps. It governs dream memory, lunar intuition, and healing grief through suppleness.",
      sv: "Vattenträdet som böjer sig i stormen för att inte brista. Det styr drömminne, intuition och förmågan att läka sorg.",
    },
  },
  {
    index: 5,
    glyph: "ᚅ",
    oldIrish: "Nion",
    phoneme: "N",
    aicmeSlug: "birinci-aicme",
    aicmeLabel: "I. Aicme (Beithe)",
    seasonSpan: {
      tr: "15 Nisan – 12 Mayıs · Dünya Ekseninin Kökleri",
      en: "15 Apr – 12 May · Roots of the World Axis",
      sv: "15 apr – 12 maj · Världsaxelns Rötter",
    },
    tree: { tr: "Dişbudak (Fraxinus)", en: "Ash (Fraxinus)", sv: "Ask (Fraxinus)" },
    kenning: {
      tr: "“Barışın sınanması / Mızrak şaftının omurgası”",
      en: "“Checking of peace / Spear-shaft of sovereignty”",
      sv: "”Fredens prövning / Spjutskaftets ryggrad”",
    },
    teaching: {
      tr: "Kökleri nehir yataklarına inen, dalları göğe uzanan kozmik bağlantı ağacıdır; kişinin kendi içsel eylemiyle dış dünyadaki sonuçlar arasındaki ağı görmesini sağlar.",
      en: "With roots reaching deep water tables and crown reaching skyward, Ash reveals how inner action weaves directly into outer consequence.",
      sv: "Med rötter i djupa vattendrag och krona mot himlen visar asken hur inre handling vävs samman med yttre verkan.",
    },
  },
  {
    index: 6,
    glyph: "ᚆ",
    oldIrish: "Huath",
    phoneme: "H",
    aicmeSlug: "ikinci-aicme",
    aicmeLabel: "II. Aicme (hÚatha)",
    seasonSpan: {
      tr: "13 Mayıs – 9 Haziran · Beltane Çiçekleri & Eşik Dikenleri",
      en: "13 May – 9 Jun · Beltane Blossom & Threshold Thorns",
      sv: "13 maj – 9 jun · Beltanes Blomning & Tröskelns Törnen",
    },
    tree: { tr: "Alıç Ağacı (Crataegus)", en: "Hawthorn (Crataegus)", sv: "Hagtorn (Crataegus)" },
    kenning: {
      tr: "“Gece kalabalığı / Kalbin dikenli muhafızı”",
      en: "“Pack of hounds by night / Thorny guardian of the heart”",
      sv: "”Hjärtats törneväktare / Gränsens buske”",
    },
    teaching: {
      tr: "Hem kalbi güçlendiren şifalı çiçeği hem de keskin dikeni taşır; aceleci hırsı durdurur, kutsal sınırlara saygı duymayı ve sabırla beklemeyi öğretir.",
      en: "Bearing both heart-healing blossoms and sharp thorns, Hawthorn halts reckless haste and demands respect for sacred boundaries and timing.",
      sv: "Med både hjärtläkande blommor och vassa törnen hejdar hagtornen förhastat begär och lär ut respekt för gränser.",
    },
  },
  {
    index: 7,
    glyph: "ᚇ",
    oldIrish: "Duir",
    phoneme: "D",
    aicmeSlug: "ikinci-aicme",
    aicmeLabel: "II. Aicme (hÚatha)",
    seasonSpan: {
      tr: "10 Haziran – 7 Temmuz · Yaz Gündönümü (Litha) Kapısı",
      en: "10 Jun – 7 Jul · Summer Solstice (Litha) Door",
      sv: "10 jun – 7 jul · Sommarsolståndets (Litha) Port",
    },
    tree: { tr: "Meşe Ağacı (Quercus)", en: "Oak (Quercus)", sv: "Ek (Quercus)" },
    kenning: {
      tr: "“En yüksek ağaç / Marangozluğun el işi ve kapısı”",
      en: "“Preeminent tree / Doorway of endurance”",
      sv: "”Det främsta trädet / Uthållighetens port”",
    },
    teaching: {
      tr: "‘Druid’ (Meşe Bilgesi) kelimesinin kökü olan Duir; yıldırımı göğüsleyen omurgayı, cömert liderliği, sözünde durmayı ve sarsılmaz egemenliği simgeler.",
      en: "Root of the word 'Druid' (Oak-Knower), Duir embodies the spine that withstands lightning, generous leadership, and unwavering sovereignty.",
      sv: "Roten till ordet ’Druid’ (Ek-vis), Duir förkroppsligar ryggraden som tål blixten, generöst ledarskap och suveränitet.",
    },
  },
  {
    index: 8,
    glyph: "ᚈ",
    oldIrish: "Tinne",
    phoneme: "T",
    aicmeSlug: "ikinci-aicme",
    aicmeLabel: "II. Aicme (hÚatha)",
    seasonSpan: {
      tr: "8 Temmuz – 4 Ağustos · Demirci Ocağı & Adalet Sınavı",
      en: "8 Jul – 4 Aug · Smith’s Ingot & Trial of Justice",
      sv: "8 jul – 4 aug · Smedjans Tacka & Rättvisans Prövning",
    },
    tree: { tr: "Çobanpüskülü (Ilex)", en: "Holly (Ilex)", sv: "Järnek (Ilex)" },
    kenning: {
      tr: "“Tekerleğin üçte biri / Kömür ateşinde dövülen külçe”",
      en: "“One of three parts of a wheel / Ingot forged in charcoal”",
      sv: "”En tredjedel av hjulet / Järntacka i kolglöd”",
    },
    teaching: {
      tr: "Kışın bile yaprak dökmeyen direnci ve demircinin örsündeki metal külçeyi temsil eder; zorluk ateşinde dövülerek karakterin çelikleşmesini anlatır.",
      en: "Evergreen through winter and named for the smith's iron ingot, Tinne teaches tempering character under the hammer of disciplined effort.",
      sv: "Städsegrön genom vintern och uppkallad efter smedens järntacka; Tinne lär hur karaktären härdas under disciplinens hammare.",
    },
  },
  {
    index: 9,
    glyph: "ᚉ",
    oldIrish: "Coll",
    phoneme: "C",
    aicmeSlug: "ikinci-aicme",
    aicmeLabel: "II. Aicme (hÚatha)",
    seasonSpan: {
      tr: "5 Ağustos – 1 Eylül · Lughnasadh & Bilgelik Pınarı",
      en: "5 Aug – 1 Sep · Lughnasadh & Well of Wisdom",
      sv: "5 aug – 1 sep · Lughnasadh & Visdomens Källa",
    },
    tree: { tr: "Fındık Ağacı (Corylus)", en: "Hazel (Corylus)", sv: "Hassel (Corylus)" },
    kenning: {
      tr: "“En tatlı ağaç / Dokuz kutsal fındığın özü”",
      en: "“Fairest tree / Kernel of the Nine Hazels of Poetic Wisdom”",
      sv: "”Det ljuvaste trädet / De nio visdomsnötternas kärna”",
    },
    teaching: {
      tr: "Connla Pınarı’na düşüp Bilgelik Somonunu besleyen dokuz fındık ağacıdır; damıtılmış ilhamı (Awen), sezgisel ustalığı ve hakemliği temsil eder.",
      en: "The Nine Hazels over Connla's Well whose nuts feed the Salmon of Wisdom; Coll governs distilled inspiration (Awen), poetic craft, and fair mediation.",
      sv: "De nio hasslarna vid Connlas källa vars nötter när Visdomens lax; Coll styr destillerad inspiration (Awen) och rättvis medling.",
    },
  },
  {
    index: 10,
    glyph: "ᚊ",
    oldIrish: "Ceirt",
    phoneme: "Q",
    aicmeSlug: "ikinci-aicme",
    aicmeLabel: "II. Aicme (hÚatha)",
    seasonSpan: {
      tr: "Kutsal Elma Bahçesi (Avalon) · Yenilenme",
      en: "Sacred Apple Orchard (Avalon) · Renewal",
      sv: "Den Heliga Äppellunden (Avalon) · Förnyelse",
    },
    tree: { tr: "Yaban Elması (Malus)", en: "Wild Apple (Malus)", sv: "Vildapel (Malus)" },
    kenning: {
      tr: "“Delilerin sığınağı / Ölümsüzlük bahçesinin meyvesi”",
      en: "“Shelter of a lunatic / Fruit of the Otherworld orchard”",
      sv: "”Fridlyst lund / Andra världens frukt”",
    },
    teaching: {
      tr: "Enine kesildiğinde çekirdeklerinde beş köşeli yıldız taşıyan elma; bedensel şifayı, ruhsal bütünlüğü ve kalbin samimi seçimini simgeler.",
      en: "Revealing a five-pointed star when sliced crosswise, Apple governs bodily restoration, wholeness, and sincere choice of the heart.",
      sv: "Med en femuddig stjärna i sitt kärnhus styr vildapeln kroppslig läkedom, helhet och hjärtats uppriktiga val.",
    },
  },
  {
    index: 11,
    glyph: "ᚋ",
    oldIrish: "Muin",
    phoneme: "M",
    aicmeSlug: "ucuncu-aicme",
    aicmeLabel: "III. Aicme (Muine)",
    seasonSpan: {
      tr: "2 Eylül – 29 Eylül · Sonbahar Ekinoksu (Mabon) & Hasat",
      en: "2 Sep – 29 Sep · Autumn Equinox (Mabon) & Vintage",
      sv: "2 sep – 29 sep · Höstdagjämning (Mabon) & Skörd",
    },
    tree: { tr: "Asma & Böğürtlen", en: "Vine & Bramble", sv: "Vinranka & Björnbär" },
    kenning: {
      tr: "“Sırtın en güçlüsü / Ezilerek şaraba dönüşen öz”",
      en: "“Strongest of backs / Essence pressed into wine”",
      sv: "”Starkaste ryggen / Druvan som pressas till vin”",
    },
    teaching: {
      tr: "Üzümün şaraba dönüşmesi için ezilmesi gerektiği gibi, yaşanmış deneyimlerin içsel olgunluğa ve hakikat sözüne dönüşmesini öğretir.",
      en: "Just as grapes must be pressed to become wine, Muin teaches how lived trials ferment into inner maturity and unvarnished truth.",
      sv: "Liksom druvan måste pressas för att bli vin lär Muin hur livets prövningar mognar till inre visdom och sanning.",
    },
  },
  {
    index: 12,
    glyph: "ᚌ",
    oldIrish: "Gort",
    phoneme: "G",
    aicmeSlug: "ucuncu-aicme",
    aicmeLabel: "III. Aicme (Muine)",
    seasonSpan: {
      tr: "30 Eylül – 27 Ekim · Geç Sonbahar & Sarmal Direnç",
      en: "30 Sep – 27 Oct · Late Autumn & Spiral Tenacity",
      sv: "30 sep – 27 okt · Senhöst & Spiralens Uthållighet",
    },
    tree: { tr: "Duvar Sarmaşığı (Hedera)", en: "Ivy (Hedera)", sv: "Murgröna (Hedera)" },
    kenning: {
      tr: "“En tatlı otlak / Taş duvarları saran ölümsüz sarmal”",
      en: "“Sweetest grass / Evergreen spiral binding the stone”",
      sv: "”Det grönaste fältet / Spiralen som klättrar över sten”",
    },
    teaching: {
      tr: "Diğer ağaçlar yaprak dökerken taşlara tutunarak yükselmeye devam eden sarmaşık; karanlık dönemde bile ışığa ulaşan azmi ve sadık bağları gösterir.",
      en: "Climbing stone walls while other trees shed their leaves, Ivy embodies persistent ascent toward light and enduring bonds through the dark season.",
      sv: "Som klättrar uppför stenmurar när andra träd fäller sina blad; murgrönan står för uthållig strävan mot ljuset.",
    },
  },
  {
    index: 13,
    glyph: "ᚍ",
    oldIrish: "Ngetal",
    phoneme: "NG",
    aicmeSlug: "ucuncu-aicme",
    aicmeLabel: "III. Aicme (Muine)",
    seasonSpan: {
      tr: "28 Ekim – 24 Kasım · Samhain Eşiği & Hekimin Nefesi",
      en: "28 Oct – 24 Nov · Samhain Threshold & Physician’s Reed",
      sv: "28 okt – 24 nov · Samhains Tröskel & Läkarens Vassrör",
    },
    tree: { tr: "Kamış & Süpürge Otu", en: "Reed & Broom", sv: "Vass & Ginst" },
    kenning: {
      tr: "“Hekimin geçimi / Suyun kıyısındaki sesli kamış”",
      en: "“Sustenance of a leech (physician) / Singing reed at the bank”",
      sv: "”Läkarens uppehälle / Det sjungande vassröret”",
    },
    teaching: {
      tr: "İçi boş olduğu için rüzgârı müziğe dönüştüren kamış; şifacının egosunu boşaltarak bütüne kanal olmasını ve doğrudan eylemi öğretir.",
      en: "Hollow inside so the wind turns it into a flute, Reed teaches clearing the ego to become a vessel of healing and direct order.",
      sv: "Ihåligt så att vinden kan bli till musik; vassröret lär hur man tömmer sinnet för att bli en ren kanal för läkedom.",
    },
  },
  {
    index: 14,
    glyph: "ᚎ",
    oldIrish: "Straif",
    phoneme: "Z / ST",
    aicmeSlug: "ucuncu-aicme",
    aicmeLabel: "III. Aicme (Muine)",
    seasonSpan: {
      tr: "Kış Fırtınası & Kaçınılmaz Arınma",
      en: "Winter Squall & Unavoidable Alchemy",
      sv: "Vinterstorm & Oundviklig Rening",
    },
    tree: { tr: "Çakaleriği (Prunus spinosa)", en: "Blackthorn (Prunus spinosa)", sv: "Slån (Prunus spinosa)" },
    kenning: {
      tr: "“Sırların en güçlü kızartıcısı / Kış dikeninde açan beyaz çiçek”",
      en: "“Strongest reddening of secrets / White blossom on winter thorn”",
      sv: "”Hemligheters prövning / Vit blomma på svart törne”",
    },
    teaching: {
      tr: "Yapraklarından önce çıplak siyah dikenleri üzerinde bembeyaz çiçek açar; kaçınılmaz kader sınavının içinden doğan arınmış gücü temsil eder.",
      en: "Flowering pure white on bare black thorns before its leaves appear, Blackthorn signifies purified strength born directly out of unavoidable trial.",
      sv: "Blommar kritvitt på nakna svarta törnen innan bladen slår ut; slånbusken står för renad kraft född ur prövning.",
    },
  },
  {
    index: 15,
    glyph: "ᚏ",
    oldIrish: "Ruis",
    phoneme: "R",
    aicmeSlug: "ucuncu-aicme",
    aicmeLabel: "III. Aicme (Muine)",
    seasonSpan: {
      tr: "25 Kasım – 23 Aralık · Yılın Son Ayı & Dönüşüm Eşiği",
      en: "25 Nov – 23 Dec · Thirteenth Moon & Threshold of Renewal",
      sv: "25 nov – 23 dec · Årets Sista Måne & Förvandling",
    },
    tree: { tr: "Mürver Ağacı (Sambucus)", en: "Elder (Sambucus)", sv: "Fläder (Sambucus)" },
    kenning: {
      tr: "“En yoğun kızıllık / Sonun içindeki yeni başlangıç”",
      en: "“Most intense blushing / Renewal hidden within the end”",
      sv: "”Djupaste rodnad / Ny början gömd i slutet”",
    },
    teaching: {
      tr: "Dalları kesildikçe daha gür sürgün veren mürver, eski döngünün kapanışını, şükranla bırakmayı ve kış karanlığından doğacak yeni yılı mühürler.",
      en: "Sprouting more vigorously whenever pruned, Elder seals the completion of the old cycle, grateful release, and rebirth out of midwinter.",
      sv: "Som skjuter nya skott ju mer den beskärs; flädern förseglar det gamla kretsloppets avslut och pånyttfödelse.",
    },
  },
  {
    index: 16,
    glyph: "ᚐ",
    oldIrish: "Ailm",
    phoneme: "A",
    aicmeSlug: "dorduncu-aicme",
    aicmeLabel: "IV. Aicme (Ailme)",
    seasonSpan: {
      tr: "Kış Gündönümü (Alban Arthan) · Yüksek Ufuk",
      en: "Winter Solstice (Alban Arthan) · High Horizon",
      sv: "Vintersolståndet (Alban Arthan) · Hög Horisont",
    },
    tree: { tr: "Göknar & Çam (Abies)", en: "Silver Fir & Pine", sv: "Ädelgran & Tall" },
    kenning: {
      tr: "“En yüksek inilti / İlk nefes ve zirve bakışı”",
      en: "“Loudest groan / First breath and summit view”",
      sv: "”Första andetaget / Utsikt från bergstoppen”",
    },
    teaching: {
      tr: "Kar altında bile dimdik ve yeşil kalan dağ göknarı; günlük karmaşanın üzerine çıkıp hayatına kuşbakışı, berrak bir perspektifle bakmayı öğretir.",
      en: "Standing tall and evergreen above the snowline, Silver Fir grants the clear, elevated perspective needed to see the whole forest.",
      sv: "Grön och rak ovan snögränsen ger ädelgranen det klara ovanifrånperspektiv som krävs för att se helheten.",
    },
  },
  {
    index: 17,
    glyph: "ᚑ",
    oldIrish: "Onn",
    phoneme: "O",
    aicmeSlug: "dorduncu-aicme",
    aicmeLabel: "IV. Aicme (Ailme)",
    seasonSpan: {
      tr: "Bahar Ekinoksu (Alban Eilir) · Altın Güneş",
      en: "Spring Equinox (Alban Eilir) · Golden Sun",
      sv: "Vårdagjämning (Alban Eilir) · Gyllene Sol",
    },
    tree: { tr: "Katırtırnağı / Karaçalı (Ulex)", en: "Gorse / Furze (Ulex)", sv: "Ärtsörne (Ulex)" },
    kenning: {
      tr: "“Atların kamçısı / Kıraç toprakta açan altın bal”",
      en: "“Wounder of horses / Golden honey on barren heath”",
      sv: "”Gyllene honungsblomma på karg hed”",
    },
    teaching: {
      tr: "En sert ve rüzgârlı tepelerde bile yıl boyu altın sarısı çiçek açar; umutsuz görünen koşullarda bile kaynak bulma ve sevinç üretme gücünü simgeler.",
      en: "Blooming bright gold across wind-scoured heaths all year round, Gorse embodies resourcefulness and solar vitality in harsh terrain.",
      sv: "Blommar gyllengult året om på vindpinade hedar; ärtsörnen står för livskraft och uppfinningsrikedom i karga lägen.",
    },
  },
  {
    index: 18,
    glyph: "ᚒ",
    oldIrish: "Ur",
    phoneme: "U",
    aicmeSlug: "dorduncu-aicme",
    aicmeLabel: "IV. Aicme (Ailme)",
    seasonSpan: {
      tr: "Yaz Ortası & Bozkırın Şifalı Balı",
      en: "Midsummer & Healing Moorland",
      sv: "Högsommar & Ljunghedens Honung",
    },
    tree: { tr: "Funda / Süpürge Çalısı (Calluna)", en: "Heather (Calluna)", sv: "Ljung (Calluna)" },
    kenning: {
      tr: "“Soğuk toprakta şifa / İçsel tutkunun cömertliği”",
      en: "“In cold residence / Generosity of the moor”",
      sv: "”Läkedom i kall jord / Ljunghedens generositet”",
    },
    teaching: {
      tr: "Yüksek yaylaları mor bir halıyla örten ve en şifalı balı veren funda; kalbin derinliklerindeki tutkuyu şefkat ve şifayla birleştirmeyi öğretir.",
      en: "Blanketing high moors in purple and yielding medicinal honey, Heather unites deep inner passion with grounded healing.",
      sv: "Som täcker hedarna i purpur och ger läkande honung; ljungen förenar inre glöd med jordad läkedom.",
    },
  },
  {
    index: 19,
    glyph: "ᚓ",
    oldIrish: "Eadad",
    phoneme: "E",
    aicmeSlug: "dorduncu-aicme",
    aicmeLabel: "IV. Aicme (Ailme)",
    seasonSpan: {
      tr: "Sonbahar Ekinoksu (Alban Elfed) · Titreyen Yaprak",
      en: "Autumn Equinox (Alban Elfed) · Trembling Leaf",
      sv: "Höstdagjämning (Alban Elfed) · Darrande Blad",
    },
    tree: { tr: "Titrek Kavak (Populus tremula)", en: "Aspen (Populus tremula)", sv: "Asp (Populus tremula)" },
    kenning: {
      tr: "“Seçkin ağaç / Rüzgârla konuşan kalkan”",
      en: "“Discerning tree / Shield that whispers with the wind”",
      sv: "”Det lyhörda trädet / Bladet som viskar med vinden”",
    },
    teaching: {
      tr: "En hafif esintide bile yaprakları fısıldayan ama kök sistemini yer altında tek bir dev organizma gibi birleştiren kavak; korkuyu aşmayı ve kolektif dayanışmayı anlatır.",
      en: "While its leaves tremble at the slightest breeze, Aspen shares a single vast root system underground—teaching courage beyond fear.",
      sv: "Medan bladen darrar vid minsta vindpust delar aspen ett enda väldigt rotsystem under jorden — mod bortom rädsla.",
    },
  },
  {
    index: 20,
    glyph: "ᚔ",
    oldIrish: "Idad",
    phoneme: "I",
    aicmeSlug: "dorduncu-aicme",
    aicmeLabel: "IV. Aicme (Ailme)",
    seasonSpan: {
      tr: "Samhain & Ebediyetin Kökü",
      en: "Samhain & Root of Eternity",
      sv: "Samhain & Evighetens Rot",
    },
    tree: { tr: "Porsuk Ağacı (Taxus baccata)", en: "Yew (Taxus baccata)", sv: "Idegran (Taxus baccata)" },
    kenning: {
      tr: "“Ağaçların en yaşlısı / Ataların ölümsüz hafızası”",
      en: "“Oldest of trees / Ancestral memory beyond time”",
      sv: "”Det äldsta av träd / Förfädernas tidlösa minne”",
    },
    teaching: {
      tr: "Binlerce yıl yaşayan, kendi gövdesinin içinden yeni kökler indirerek kendini yenileyen porsuk ağacı; ruhun sürekliliğini, ata mirasını ve derin dönüşümü mühürler.",
      en: "Living for millennia and sending new roots down through its own hollow trunk, Yew seals ancestral continuity and deep regeneration.",
      sv: "Lever i årtusenden och sänder nya rötter genom sin egen ihåliga stam; idegranen förseglar förfädernas arv och djup förnyelse.",
    },
  },
];

const UI = {
  tr: {
    badge: "Beith-Luis-Nin · 20 Kutsal Ağaç & Coelbreni",
    title: "Ogham Ağaç Takvimi & Dal Çekimi",
    lead: "Doğum dönemine karşılık gelen Kelt Ogham ağacını listeden seçebilir veya koru kesesinden rastgele bir Ogham dalı (Coelbreni) çekerek bugünkü ağaç öğretisini ve Aicme odasını açabilirsin.",
    selectLabel: "Ağaç Burcu veya Ogham Harfi Seç:",
    drawBtn: "Korudan Ogham Dalı Çek",
    kenningLabel: "Eski İrlanda Briatharogham (Şiirsel Mühür)",
    openAicme: "Bu Ağacın Aicme Odasına İn →",
  },
  en: {
    badge: "Beith-Luis-Nin · 20 Sacred Trees & Coelbreni",
    title: "Ogham Tree Calendar & Stave Casting",
    lead: "Select the Celtic Ogham tree corresponding to your birth season or draw a random Ogham stave (Coelbreni) from the grove pouch to open its Briatharogham kenning and Aicme room.",
    selectLabel: "Select Tree Sign or Ogham Few:",
    drawBtn: "Draw Ogham Stave from Grove",
    kenningLabel: "Old Irish Briatharogham (Poetic Kenning)",
    openAicme: "Enter This Tree’s Aicme Room →",
  },
  sv: {
    badge: "Beith-Luis-Nin · 20 Heliga Träd & Coelbreni",
    title: "Oghams Trädkalender & Stavdragning",
    lead: "Välj det keltiska Ogham-träd som motsvarar din födelsetid eller dra en slumpmässig Ogham-stav (Coelbreni) ur lundpåsen för att öppna dess Briatharogham och Aicme-rum.",
    selectLabel: "Välj Trädtecken eller Ogham-tecken:",
    drawBtn: "Dra Ogham-stav ur Lunden",
    kenningLabel: "Fornirländskt Briatharogham (Poetisk Kenning)",
    openAicme: "Stig in i Trädets Aicme-rum →",
  },
} as const;

export function OghamOracle() {
  const { lang } = useLanguage();
  const ui = UI[lang];
  const [selectedIndex, setSelectedIndex] = useState<number>(7); // Default Duir (Oak)

  const current =
    OGHAM_FEWS.find((f) => f.index === selectedIndex) ?? OGHAM_FEWS[0];

  function handleRandomDraw() {
    const pick = OGHAM_FEWS[Math.floor(Math.random() * OGHAM_FEWS.length)];
    setSelectedIndex(pick.index);
  }

  return (
    <section className="mt-10 border border-chalk/20 bg-chalk/[0.025] p-6 sm:p-8">
      <p className="text-[10px] tracking-[0.22em] text-chalk/55 uppercase">
        {ui.badge}
      </p>
      <h2 className="mt-3 font-display text-2xl font-medium tracking-[-0.015em] text-chalk sm:text-3xl">
        {ui.title}
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-chalk/75">
        {ui.lead}
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end">
        <label className="flex-1">
          <span className="block text-[10px] tracking-[0.16em] text-chalk/55 uppercase">
            {ui.selectLabel}
          </span>
          <select
            value={selectedIndex}
            onChange={(e) => setSelectedIndex(Number(e.target.value))}
            className="mt-2 w-full border border-chalk/25 bg-ink px-3.5 py-2.5 font-display text-lg text-chalk focus:border-chalk/60 focus:outline-none"
          >
            {OGHAM_FEWS.map((f) => (
              <option key={f.index} value={f.index} className="bg-ink text-chalk">
                {String(f.index).padStart(2, "0")} · {f.glyph} {f.oldIrish} — {f.tree[lang]} ({f.seasonSpan[lang].split("·")[0].trim()})
              </option>
            ))}
          </select>
        </label>

        <button
          type="button"
          onClick={handleRandomDraw}
          className="border border-chalk/50 bg-chalk/[0.08] px-6 py-2.5 font-display text-xs tracking-[0.16em] text-chalk uppercase transition-colors hover:border-chalk hover:bg-chalk/[0.14]"
        >
          {ui.drawBtn}
        </button>
      </div>

      {/* Active Few Card */}
      <article className="card-slate mt-6 border border-chalk/20 bg-black/45 p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] tracking-[0.18em] text-chalk/55 uppercase">
          <span>
            FEW {String(current.index).padStart(2, "0")} / XX · {current.aicmeLabel}
          </span>
          <span>{current.seasonSpan[lang]}</span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-5">
          <span
            aria-hidden
            className="border border-chalk/20 bg-black/60 px-4 py-2 font-display text-5xl leading-none text-chalk"
          >
            {current.glyph}
          </span>
          <div>
            <h3 className="font-display text-3xl font-medium text-chalk sm:text-4xl">
              {current.oldIrish} [{current.phoneme}] · {current.tree[lang]}
            </h3>
            <p className="mt-1 font-display text-base text-chalk/75 italic">
              {current.kenning[lang]}
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-chalk/85 sm:text-base">
          {current.teaching[lang]}
        </p>

        <div className="mt-5 border-t border-chalk/12 pt-4">
          <Link
            href={`/kelt/${current.aicmeSlug}`}
            className="font-display text-xs tracking-[0.16em] text-chalk uppercase hover:underline"
          >
            {ui.openAicme}
          </Link>
        </div>
      </article>
    </section>
  );
}
