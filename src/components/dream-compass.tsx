"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/language";

type DreamMotif = {
  id: string;
  glyph: string;
  runeSlug: string;
  runeLabel: string;
  title: { tr: string; en: string; sv: string };
  traditionSource: { tr: string; en: string; sv: string };
  reading: { tr: string; en: string; sv: string };
  question: { tr: string; en: string; sv: string };
};

const DREAM_MOTIFS: readonly DreamMotif[] = [
  {
    id: "water",
    glyph: "🌊",
    runeSlug: "laguz",
    runeLabel: "ᛚ Laguz (Derin Su & Sezgi)",
    title: {
      tr: "Derin Su, Deniz veya Taşkın Nehir",
      en: "Deep Water, Ocean, or Flooding River",
      sv: "Djupt Vatten, Hav eller Översvämmad Flod",
    },
    traditionSource: {
      tr: "İskandinav Draumr & Babil Abzu Geleneği",
      en: "Old Norse Draumr & Babylonian Abzu Tradition",
      sv: "Fornnordisk Draumr & Babylonisk Abzu-tradition",
    },
    reading: {
      tr: "Kadim rüya geleneğinde su, bilinçdışının ve duygusal hafızanın doğrudan aynasıdır. Berrak ve sakin su ruhsal arınmayı ve doğru sezgiyi; bulanık veya taşkın su ise uyanık hayatta bastırılmış bir duygunun artık barajı aştığını gösterir.",
      en: "In ancient dream lore, water mirrors the unconscious and emotional memory directly. Clear, calm water signals alignment and intuitive clarity; murky or rising floodwater warns that suppressed emotion has breached its dam.",
      sv: "I gammal drömlära speglar vattnet det omedvetna och känslominnet. Klart, stilla vatten visar på intuitiv klarhet; grumligt eller stigande vatten varnar för att undertryckta känslor svämmar över.",
    },
    question: {
      tr: "Sabah Sorusu: “Uyanık hayatımda akmasına izin vermediğim, baraj kurduğum duygu hangisi?”",
      en: "Morning Inquiry: “Which emotion am I damming up instead of allowing to flow in waking life?”",
      sv: "Morgonfråga: ”Vilken känsla dämmer jag upp istället för att låta flöda i mitt vakna liv?”",
    },
  },
  {
    id: "serpent",
    glyph: "🐍",
    runeSlug: "jera",
    runeLabel: "ᛃ Jera & ᛇ Eihwaz (Döngü & Deri Değişimi)",
    title: {
      tr: "Yılan, Kurt veya Konuşan Hayvan (Fylgja)",
      en: "Serpent, Wolf, or Speaking Animal (Fylgja)",
      sv: "Orm, Varg eller Talande Djur (Fylgja)",
    },
    traditionSource: {
      tr: "Kuzey Fylgja (Eşlikçi Ruh) & Şamanik Alt Dünya",
      en: "Norse Fylgja (Fetch-Spirit) & Shamanic Lower World",
      sv: "Nordisk Fylgja (Följeslagare) & Schamanistisk Undervärld",
    },
    reading: {
      tr: "Kuzey sagalarında rüyada beliren hayvan (Fylgja), kişinin kendi içgüdüsel yaşam gücünü veya yaklaşan bir kader eşiğini haber verir. Yılan özellikle eski deriyi soyunup bırakma (şifa ve yenilenme) ya da görmezden gelinen bir içgüdüsel uyarıdır.",
      en: "In the sagas, an animal appearing in dreams (Fylgja) embodies your instinctive vital force or heralds an approaching threshold. The serpent specifically marks shedding an outgrown skin or an instinctive warning.",
      sv: "I sagorna förkroppsligar drömmens djur (Fylgja) din instinktiva livskraft. Ormen markerar särskilt att ömsa ett gammalt skinn eller en instinktiv varning.",
    },
    question: {
      tr: "Sabah Sorusu: “Hangi eski kimliğimi veya alışkanlığımı artık bir yılan derisi gibi geride bırakmalıyım?”",
      en: "Morning Inquiry: “Which old skin or role has grown too tight and must now be shed?”",
      sv: "Morgonfråga: ”Vilket gammalt skinn eller vilken roll har blivit för trång och måste ömsas?”",
    },
  },
  {
    id: "house",
    glyph: "🚪",
    runeSlug: "othala",
    runeLabel: "ᛟ Othala & ᛈ Perthro (Hane & Gizli Oda)",
    title: {
      tr: "Eski Ev, Kilitli Kapı veya Yeni Keşfedilen Oda",
      en: "Ancestral House, Locked Door, or Hidden Room",
      sv: "Gammalt Hus, Låst Dörr eller Nyupptäckt Rum",
    },
    traditionSource: {
      tr: "Hermetik Hafıza Sarayı & Ata Mirası (Othala)",
      en: "Hermetic Memory Palace & Ancestral Homestead",
      sv: "Hermetiskt Minnespalats & Fädernegård (Othala)",
    },
    reading: {
      tr: "Rüyadaki ev, rüya görenin kendi ruhsal ve bedensel mimarisidir. Kendi evinde daha önce hiç görmediğin yeni bir oda bulmak, içinde uyanmayı bekleyen gizli bir yeteneği veya unutulmuş bir ruh parçasını işaret eder.",
      en: "The house in a dream is the architecture of the dreamer's own psyche and body. Discovering an unknown room inside a familiar house reveals an unawakened capacity or forgotten chamber of the self.",
      sv: "Huset i drömmen är drömmarens egen själsliga arkitektur. Att hitta ett okänt rum i ett välbekant hus visar på en slumrande gåva eller glömd del av självet.",
    },
    question: {
      tr: "Sabah Sorusu: “Kendi iç dünyamda uzun süredir kapısını açmadığım, ihmal ettiğim oda neresi?”",
      en: "Morning Inquiry: “Which inner chamber of my life have I kept locked or neglected?”",
      sv: "Morgonfråga: ”Vilket inre rum i mitt liv har jag hållit låst eller försummat?”",
    },
  },
  {
    id: "flight",
    glyph: "🦅",
    runeSlug: "algiz",
    runeLabel: "ᛉ Algiz & ᚱ Raidho (Üst Dünya & Yön)",
    title: {
      tr: "Uçmak, Kanatlanmak veya Boşluğa Düşmek",
      en: "Flying, Soaring, or Falling Through Space",
      sv: "Att Flyga, Sväva eller Falla Genom Rymden",
    },
    traditionSource: {
      tr: "Şamanik Üst Dünya Uçuşu & Hugr (Zihin Ruhu)",
      en: "Shamanic Upper-World Flight & Norse Hugr",
      sv: "Schamanistisk Övervärldsflykt & Nordisk Hugr",
    },
    reading: {
      tr: "Bilinçli uçuş rüyaları, ruhun dar gündelik kaygıların üzerine çıkıp büyük resmi (Üst Dünya perspektifini) görme ihtiyacını anlatır. Düşmek ise aşırı zihinsel kontrolün çöküşünü ve toprağa (bedene) yeniden köklenme çağrısını taşır.",
      en: "Lucid flight reflects the spirit rising above narrow daily anxieties to gain an elevated overview. Falling signals the collapse of rigid mental control and a call to re-ground in the body.",
      sv: "Medveten flykt speglar hur anden höjer sig över vardagens oro för att se helheten. Att falla signalerar att stel kontroll släpper och kallar dig tillbaka till jorden.",
    },
    question: {
      tr: "Sabah Sorusu: “Nerede kontrolü aşırı sıkıyorum ve nerede olaylara daha yüksekten bakmam gerekiyor?”",
      en: "Morning Inquiry: “Where am I gripping control too tightly, and where do I need a higher view?”",
      sv: "Morgonfråga: ”Var håller jag kontrollen för hårt, och var behöver jag ett högre perspektiv?”",
    },
  },
  {
    id: "teeth",
    glyph: "🦴",
    runeSlug: "hagalaz",
    runeLabel: "ᚺ Hagalaz & THURISAZ ᚦ (Eşik Kırılması)",
    title: {
      tr: "Diş Dökülmesi, Sesin Çıkmaması veya Kayıp",
      en: "Losing Teeth, Voicelessness, or Sudden Loss",
      sv: "Tappade Tänder, Röstlöshet eller Förlust",
    },
    traditionSource: {
      tr: "Mezopotamya Ziqīqu Tabletleri & Geçiş Ritüelleri",
      en: "Mesopotamian Ziqīqu Dream Tablets & Rites of Passage",
      sv: "Mesopotamiska Ziqīqu-drömtavlor & Övergångsriter",
    },
    reading: {
      tr: "Asur ve klasik rüya kayıtlarından beri en sık görülen geçiş rüyasıdır. Dişler ‘ısırma, sindirme ve söz söyleme’ gücünü temsil eder; diş dökülmesi ya bir güç/kontrol kaybı korkusunu ya da çocukluktan olgunluğa geçiş gibi köklü bir statü değişimini haber verir.",
      en: "Recorded since the Assyrian dream tablets, teeth represent the power to bite into life, digest experience, and speak with authority. Losing teeth signals either fear of powerlessness or a major rite of passage.",
      sv: "Dokumenterad sedan assyriska drömtavlor representerar tänder kraften att bita tag i livet och tala med tyngd. Att tappa tänder markerar en djup övergångsfas.",
    },
    question: {
      tr: "Sabah Sorusu: “Hayatımda gücümü veya sesimi kaybetmekten korktuğum, yutmakta zorlandığım mesele ne?”",
      en: "Morning Inquiry: “Where do I feel my voice or authority is being tested right now?”",
      sv: "Morgonfråga: ”Var känner jag att min röst eller handlingskraft prövas just nu?”",
    },
  },
  {
    id: "tree",
    glyph: "🌲",
    runeSlug: "eihwaz",
    runeLabel: "ᛇ Eihwaz & ᛒ Berkano (Dünya Ağacı & Kök)",
    title: {
      tr: "Ulu Ağaç, Karanlık Orman veya Kökler",
      en: "Ancient Tree, Deep Forest, or Living Roots",
      sv: "Uråldrigt Träd, Djup Skog eller Levande Rötter",
    },
    traditionSource: {
      tr: "Yggdrasil · Turuğ (Şamanik Hayat Ağacı) & Kelt Nemeton",
      en: "Yggdrasil · Shamanic World Tree (Turuğ) & Celtic Nemeton",
      sv: "Yggdrasil · Schamanistiskt Världsträd & Keltisk Nemeton",
    },
    reading: {
      tr: "Rüyadaki ağaç doğrudan yaşam eksenini (Axis Mundi) ve sinir sistemini temsil eder. Ağacın köklerinin sağlamlığı atalarla ve bedenle olan bağını, yaprakları ve meyveleri ise şu anki emeğinin geleceğe nasıl uzandığını gösterir.",
      en: "The tree in a dream is the World Axis (Axis Mundi) and the nervous system itself. Its roots reveal your grounding in body and ancestry; its branches show how your current labor reaches into the future.",
      sv: "Trädet i drömmen är själva Världsaxeln (Axis Mundi). Dess rötter visar din förankring i kropp och arv; dess grenar visar hur ditt verk sträcker sig framåt.",
    },
    question: {
      tr: "Sabah Sorusu: “Dallarım göğe uzanırken köklerimi (uykumu, bedenimi, sükûnetimi) yeterince besliyor muyum?”",
      en: "Morning Inquiry: “As my branches reach outward, am I nourishing my roots and stillness?”",
      sv: "Morgonfråga: ”Medan mina grenar sträcker sig utåt, ger jag tillräcklig näring åt mina rötter?”",
    },
  },
  {
    id: "fire",
    glyph: "🔥",
    runeSlug: "kenaz",
    runeLabel: "ᚲ Kenaz & ᛞ Dagaz (Meşale & Uyanış)",
    title: {
      tr: "Ocak Ateşi, Meşale veya Çakan Yıldırım",
      en: "Hearth Fire, Torchlight, or Lightning Strike",
      sv: "Härdeld, Fackelsken eller Blixtnedslag",
    },
    traditionSource: {
      tr: "Ocak Ruhu (Od Ana) & Kenaz Aydınlanması",
      en: "Hearth Spirit & Kenaz Illumination",
      sv: "Härdens Ande & Kenaz Upplysning",
    },
    reading: {
      tr: "Kontrollü bir ocak ateşi veya karanlıkta yanan meşale; kafa karışıklığının bitişini, ani bir ilhamı ve yaratıcı şifayı müjdeler. Her yeri yakan kontrolsüz yangın ise bastırılmış öfkenin veya aşırı hırsın yaşam enerjisini tükettiğine dair uyarıdır.",
      en: "A steady hearth fire or torch in the dark heralds sudden insight, creative healing, and the end of confusion. Uncontrolled wildfire warns of suppressed anger or burnout.",
      sv: "En stadig härdeld eller fackla i mörkret bådar plötslig insikt och läkedom. Okontrollerad brand varnar för undertryckt vrede eller utmattning.",
    },
    question: {
      tr: "Sabah Sorusu: “Bu ateş beni ısıtıp aydınlatan bir ocak mı, yoksa beni tüketen bir telaş mı?”",
      en: "Morning Inquiry: “Is the fire in my life warming my hearth or consuming my peace?”",
      sv: "Morgonfråga: ”Är elden i mitt liv en värmande härd eller en förtärande oro?”",
    },
  },
  {
    id: "ancestors",
    glyph: "🕯",
    runeSlug: "mannaz",
    runeLabel: "ᛗ Mannaz & ᚨ Ansuz (Hafıza & Emanet Söz)",
    title: {
      tr: "Göçmüş Atalar, Yaşlı Bilge veya Emanet Eşya",
      en: "Departed Ancestors, Elder Guide, or Entrusted Gift",
      sv: "Bortgångna Förfäder, Äldre Vägvisare eller Gåva",
    },
    traditionSource: {
      tr: "Şamanik Ata Çağrısı & İskandinav Dísir Geleneği",
      en: "Shamanic Ancestral Call & Norse Dísir Tradition",
      sv: "Schamanistiskt Förfäderskall & Nordisk Dísir-tradition",
    },
    reading: {
      tr: "Geleneksel toplumlarda rüyada göçmüş bir büyüğün sessizce görünmesi veya bir eşya vermesi ‘haber rüyası’ (Sahih Rüya) sayılır; soy hattından gelen bir korumanın, unutulmuş bir vasiyetin veya onurlandırılması gereken bir kökün işaretidir.",
      en: "In traditional lore, when a departed elder appears calmly or hands you an object, it is counted a true threshold dream—marking ancestral protection, a lineage gift, or a root asking to be honored.",
      sv: "I traditionell lära räknas det som en sann tröskeldröm när en bortgången äldre visar sig stilla eller räcker över ett föremål — ett tecken på beskydd och arv.",
    },
    question: {
      tr: "Sabah Sorusu: “Benden önce yürüyenlerin hangi yarım kalmış gücünü veya dersini bugün onurlandırabilirim?”",
      en: "Morning Inquiry: “What strength or lesson from those who walked before me am I called to honor today?”",
      sv: "Morgonfråga: ”Vilken styrka eller lärdom från dem som gått före mig kallas jag att hedra idag?”",
    },
  },
];

const UI = {
  tr: {
    badge: "Oneirokritika · Svefn & Şamanik Gece Yolculuğu",
    title: "Kadim Rüya Sembol & Gece Pusulası",
    lead: "Mezopotamya rüya tabletlerinden İskandinav sagalarına ve Şamanik gece yolculuğuna kadar rüyalar, ruhun sembol diliyle konuşmasıdır. Rüyanda beliren baskın motifi seçerek arketipsel okumasını, sabah tefekkür sorusunu ve rün karşılığını aç.",
    runeBridgeLabel: "Eşleşen Rün Kapısı:",
    samanBridge: "Rüya ve Gece Yolculuğu Odası →",
    appBridge: "Dream Yard Uygulamasını İncele →",
  },
  en: {
    badge: "Oneirocritica · Svefn & Shamanic Night Journey",
    title: "Ancient Dream Symbol & Night Compass",
    lead: "From Mesopotamian dream tablets to the Norse sagas and Shamanic night flight, dreams speak in the native tongue of symbol. Select the dominant motif from your dream to open its archetypal reading, morning inquiry, and runic door.",
    runeBridgeLabel: "Corresponding Rune Door:",
    samanBridge: "Dream & Night Journey Room →",
    appBridge: "Explore Dream Yard App →",
  },
  sv: {
    badge: "Oneirokritika · Svefn & Schamanistisk Nattresa",
    title: "Uråldrig Drömsymbol- & Nattkompass",
    lead: "Från mesopotamiska drömtavlor till nordiska sagor och schamanistisk nattflykt talar drömmen på symbolens språk. Välj det dominerande motivet ur din dröm för att öppna dess läsning, morgonfråga och runport.",
    runeBridgeLabel: "Motsvarande Runport:",
    samanBridge: "Dröm & Nattresa Rum →",
    appBridge: "Utforska Dream Yard-appen →",
  },
} as const;

export function DreamCompass() {
  const { lang } = useLanguage();
  const ui = UI[lang];
  const [selectedId, setSelectedId] = useState<string>("water");

  const active =
    DREAM_MOTIFS.find((m) => m.id === selectedId) ?? DREAM_MOTIFS[0];

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

      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {DREAM_MOTIFS.map((motif) => {
          const isSelected = motif.id === selectedId;
          return (
            <button
              key={motif.id}
              type="button"
              onClick={() => setSelectedId(motif.id)}
              className={`flex items-center gap-2.5 border px-3 py-3 text-left transition-colors ${
                isSelected
                  ? "border-chalk/75 bg-chalk/[0.1] text-chalk"
                  : "border-chalk/15 bg-black/35 text-chalk/70 hover:border-chalk/40 hover:text-chalk"
              }`}
            >
              <span className="text-xl leading-none">{motif.glyph}</span>
              <span className="font-display text-sm font-medium leading-tight">
                {motif.title[lang].split(",")[0]}
              </span>
            </button>
          );
        })}
      </div>

      <article className="card-slate mt-6 border border-chalk/20 bg-black/45 p-6">
        <p className="text-[10px] tracking-[0.18em] text-chalk/55 uppercase">
          {active.traditionSource[lang]}
        </p>
        <h3 className="mt-2 font-display text-3xl font-medium text-chalk">
          {active.glyph} {active.title[lang]}
        </h3>

        <p className="mt-4 text-sm leading-7 text-chalk/85 sm:text-base">
          {active.reading[lang]}
        </p>

        <p className="mt-4 border-l-2 border-chalk/35 pl-4 font-display text-lg text-chalk/90 italic">
          {active.question[lang]}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-chalk/12 pt-4 text-xs">
          <Link
            href={`/runler/${active.runeSlug}`}
            className="font-display tracking-[0.14em] text-chalk uppercase hover:underline"
          >
            {ui.runeBridgeLabel} {active.runeLabel} →
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/saman/ruya-ve-gece"
              className="font-display tracking-[0.14em] text-chalk/75 uppercase hover:text-chalk hover:underline"
            >
              {ui.samanBridge}
            </Link>
            <span className="text-chalk/25">·</span>
            <Link
              href="/uygulamalar/dream-yard"
              className="font-display tracking-[0.14em] text-chalk/85 uppercase hover:text-chalk hover:underline"
            >
              {ui.appBridge}
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
