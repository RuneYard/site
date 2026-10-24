"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/language";

type Spoke = {
  id: string;
  glyph: string;
  upcoming?: boolean;
  dates: { tr: string; en: string; sv: string };
  direction: { tr: string; en: string; sv: string };
  title: { tr: string; en: string; sv: string };
  herbs: { tr: string; en: string; sv: string };
  meaning: { tr: string; en: string; sv: string };
  practice: { tr: string; en: string; sv: string };
};

const WHEEL_SPOKES: readonly Spoke[] = [
  {
    id: "samhain",
    glyph: "🕯",
    upcoming: true,
    dates: {
      tr: "31 Ekim – 1 Kasım · Kışın İlk Kapısı (Yaklaşan Eşik)",
      en: "31 Oct – 1 Nov · First Gate of Winter (Approaching Threshold)",
      sv: "31 okt – 1 nov · Vinterns Första Port (Kommande Tröskel)",
    },
    direction: {
      tr: "Kuzey-Batı · Toprak & Su · Atalar Eşiği",
      en: "North-West · Earth & Water · Ancestral Threshold",
      sv: "Nordväst · Jord & Vatten · Förfädernas Tröskel",
    },
    title: {
      tr: "Samhain (Kış Başlangıcı & Perdenin İncelişi)",
      en: "Samhain (Winter’s Eve & Thinning of the Veil)",
      sv: "Samhain (Vinterns Inträde & Slöjans Förtunning)",
    },
    herbs: {
      tr: "Pelin otu (Artemisia), Biberiye, Mür, Sedir, Porsuk ağacı ve Elma",
      en: "Mugwort, Rosemary, Myrrh, Cedar, Yew, and Apple",
      sv: "Gråbo, Rosmarin, Myrra, Ceder, Idegran och Äpple",
    },
    meaning: {
      tr: "Kelt ve Kuzey takviminde yılın gerçek yılbaşı gecesidir. Hasat tamamlanmış, doğa toprağın altına çekilmiştir. Görünen ile görünmeyen dünya arasındaki perde incelir; ataların hafızası onurlandırılır ve ömrünü tamamlamış bağlar toprağa teslim edilir.",
      en: "The true New Year’s Eve of the old pastoral calendar. The harvest is complete and life withdraws into the roots. The veil between worlds thins; ancestors are honored and completed cycles are laid to rest.",
      sv: "Det gamla kretsloppets sanna nyårsnatt. Skörden är bärgad och livet drar sig ner i rötterna. Slöjan mellan världarna tunnas ut; förfäder hedras och avslutade skeden lämnas till jorden.",
    },
    practice: {
      tr: "Akşam pencere önüne tek bir beyaz mum yak, atalarını ve sana emek verenleri ismen an; bu kış geride bırakman gereken tek bir alışkanlığı kağıda yazıp toprağa veya küle teslim et.",
      en: "Light a single white candle by the window at dusk, name those who came before you in gratitude, and release one outgrown habit into ash or soil.",
      sv: "Tänd ett vitt ljus vid fönstret i skymningen, nämn dina föregångare i tacksamhet och lämna en uttjänt vana till jord eller aska.",
    },
  },
  {
    id: "yule",
    glyph: "❄",
    dates: {
      tr: "21 Aralık · Kış Gündönümü (En Uzun Gece)",
      en: "21 Dec · Winter Solstice (Longest Night)",
      sv: "21 dec · Vintersolståndet (Längsta Natten)",
    },
    direction: {
      tr: "Kuzey · Toprak · Sessiz Rahim & Kutup Yıldızı",
      en: "North · Earth · Silent Womb & Pole Star",
      sv: "Norr · Jord · Tyst Livmoder & Polstjärnan",
    },
    title: {
      tr: "Yule · Alban Arthan (Işığın Yeniden Doğuşu)",
      en: "Yule · Alban Arthan (Rebirth of the Sun)",
      sv: "Jól · Alban Arthan (Ljusets Återfödelse)",
    },
    herbs: {
      tr: "Çam, Göknar, Çobanpüskülü, Ökseotu, Günlük (Frankincense), Tarçın",
      en: "Pine, Fir, Holly, Mistletoe, Frankincense, Cinnamon",
      sv: "Tall, Gran, Järnek, Mistel, Olibanum och Kanel",
    },
    meaning: {
      tr: "En derin karanlığın tam kalbinde güneşin yeniden doğduğu sıfır noktasıdır. Dışarıda hiçbir yaprak kıpırdamazken tohum yer altında uyanır; sükûnet, sabır ve içsel ışığı koruma zamanıdır.",
      en: "The still point where the sun is reborn inside the longest night. While the surface sleeps under frost, the seed stirs underground.",
      sv: "Nollpunkten där solen föds på nytt mitt i årets längsta natt. Medan marken vilar under frost vaknar fröet under jorden.",
    },
    practice: {
      tr: "En uzun gecede elektronik ışıkları kapatıp ocak veya mum başında sessizce otur; yeni yılın en temel niyet tohumunu kimseye anlatmadan kalbinde mühürle.",
      en: "Turn off artificial lights on the longest night, sit in stillness by candlelight, and seal your core seed-intention for the turning year.",
      sv: "Släck elektriska ljus under den längsta natten, sitt i stillhet vid levande ljus och försegla årets kärnavsikt.",
    },
  },
  {
    id: "imbolc",
    glyph: "💧",
    dates: {
      tr: "1–2 Şubat · Kış Ortasında İlk Süt & Kıvılcım",
      en: "1–2 Feb · First Milk & Quickening Under Snow",
      sv: "1–2 feb · Första Gnistan Under Snön",
    },
    direction: {
      tr: "Kuzey-Doğu · Topraktan Havaya Geçiş · Arınma",
      en: "North-East · Earth to Air · Purification",
      sv: "Nordost · Jord till Luft · Rening",
    },
    title: {
      tr: "Imbolc (Toprağın Altındaki Uyanış & Brigid Ocağı)",
      en: "Imbolc (Quickening of the Earth & Brigid’s Hearth)",
      sv: "Imbolc (Jordens Uppvaknande & Brigids Härd)",
    },
    herbs: {
      tr: "Kardelen, Üvez ağacı, Biberiye, Defne, Beyaz Adaçayı",
      en: "Snowdrop, Rowan, Rosemary, Bay Laurel, White Sage",
      sv: "Snödroppe, Rönn, Rosmarin, Lagerblad och Salvia",
    },
    meaning: {
      tr: "Kar henüz yerdeyken toprağın ısınmaya başladığı, koyunların süte geldiği ve demirci/şiir tanrıçası Brigid’in ocağının tazelendiği arınma eşiğidir.",
      en: "While snow still lies on the ground, the soil warms and Brigid's hearth of smithcraft, poetry, and healing is swept clean.",
      sv: "Medan snön ännu ligger värms jorden underifrån och Brigids härd för läkedom, smide och poesi sopas ren.",
    },
    practice: {
      tr: "Çalışma masanı ve evin eşiklerini tuzlu su ve defne/biberiye ile temizle; yarım kalmış bir zanaat veya eğitim niyetini yeniden ateşe koy.",
      en: "Cleanse your threshold and study table with salt water and rosemary; re-ignite a craft or study discipline.",
      sv: "Rengör tröskel och arbetsbord med saltvatten och rosmarin; tänd åter en disciplin eller ett hantverk.",
    },
  },
  {
    id: "ostara",
    glyph: "🌱",
    dates: {
      tr: "20–21 Mart · İlkbahar Ekinoksu (Gece-Gündüz Dengesi)",
      en: "20–21 Mar · Vernal Equinox (Equal Night & Day)",
      sv: "20–21 mar · Vårdagjämning (Lika Natt & Dag)",
    },
    direction: {
      tr: "Doğu · Hava · Şafak, Nefes & Yeni Başlangıç",
      en: "East · Air · Dawn, Breath & New Beginning",
      sv: "Öster · Luft · Gryning, Andedräkt & Ny Början",
    },
    title: {
      tr: "Ostara · Alban Eilir (Bahar Ekinoksu & Filizlenme)",
      en: "Ostara · Alban Eilir (Spring Balance & Sprouting)",
      sv: "Ostara · Alban Eilir (Vårbalans & Grodd)",
    },
    herbs: {
      tr: "Menekşe, Karahindiba, Kızılağaç, Söğüt, Yasemin, Limon otu",
      en: "Violet, Dandelion, Alder, Willow, Jasmine, Lemongrass",
      sv: "Viol, Maskros, Al, Sälg, Jasmin och Citrongräs",
    },
    meaning: {
      tr: "Işık ile karanlığın tam teraziye geldiği ve bundan sonra ışığın üstünlüğü ele aldığı şafak kapısıdır; içerde tutulan niyet artık somut eyleme çıkmalıdır.",
      en: "Light and shadow stand in exact balance before daylight overtakes the dark; inward intention must now break through the soil as action.",
      sv: "Ljus och mörker står i exakt jämvikt innan ljuset tar över; inre avsikt måste nu bryta genom jorden som handling.",
    },
    practice: {
      tr: "Sabah doğu ufkuna dönerek derin nefes çalışması yap; toprağa gerçek bir tohum ek ve ertelediğin ilk adımı o gün at.",
      en: "Face the eastern horizon at dawn for breathwork, plant a physical seed in soil, and take the first concrete step of your project.",
      sv: "Vänd dig mot öster i gryningen för andningsarbete, så ett fysiskt frö i jord och ta det första konkreta steget.",
    },
  },
  {
    id: "beltane",
    glyph: "🔥",
    dates: {
      tr: "30 Nisan – 1 Mayıs · Yazın İlk Kapısı & İki Ateş Arası",
      en: "30 Apr – 1 May · First Gate of Summer & Twin Fires",
      sv: "30 apr – 1 maj · Sommarens Port & Tvillingeldarna",
    },
    direction: {
      tr: "Güney-Doğu · Havadan Ateşe Geçiş · Yaşam Gücü",
      en: "South-East · Air to Fire · Vital Current",
      sv: "Sydost · Luft till Eld · Livskraft",
    },
    title: {
      tr: "Beltane (Parlak Ateş, Bereket & Yaratıcı Birleşme)",
      en: "Beltane (Bright Fire, Fertility & Creative Union)",
      sv: "Beltane (Klar Eld, Fruktbarhet & Skapande Förening)",
    },
    herbs: {
      tr: "Alıç çiçeği, Gül, Üvez, Melekotu, Çuhaçiçeği",
      en: "Hawthorn blossom, Rose, Rowan, Angelica, Primrose",
      sv: "Hagtornsblom, Ros, Rönn, Kvanne och Gullviva",
    },
    meaning: {
      tr: "Kış (Samhain) kapısının tam karşısında duran yaşam, tutku, çiçeklenme ve yaratıcı cesaret bayramıdır; eski Keltlerde sürüler koruma ve bereket için iki ateşin arasından geçirilirdi.",
      en: "Standing directly opposite Samhain on the wheel, Beltane celebrates vital heat, blossoming, and creative union between spirit and matter.",
      sv: "Mittemot Samhain på årshjulet firar Beltane livsvärme, blomning och skapande förening mellan ande och materia.",
    },
    practice: {
      tr: "Doğa yürüyüşüne çık, alıç ve bahar ağaçlarını selamla; yaratıcılığını ve yaşama sevincini besleyen bir üretime tüm kalbinle odaklan.",
      en: "Walk in living woods, greet the blossoming hawthorn, and pour your full vitality into a creative work.",
      sv: "Vandra i levande skog, hälsa den blommande hagtornen och lägg din fulla livskraft i ett skapande verk.",
    },
  },
  {
    id: "litha",
    glyph: "☀",
    dates: {
      tr: "21 Haziran · Yaz Gündönümü (En Uzun Gün)",
      en: "21 Jun · Summer Solstice (Longest Day)",
      sv: "21 jun · Sommarsolståndet (Längsta Dagen)",
    },
    direction: {
      tr: "Güney · Ateş · Zirve Güç & Olgunlaşma",
      en: "South · Fire · Zenith Power & Ripening",
      sv: "Söder · Eld · Zenitkraft & Mognad",
    },
    title: {
      tr: "Litha · Alban Hefin (Güneşin Tacı & Meşe Kapısı)",
      en: "Litha · Alban Hefin (Crown of the Sun & Oak Door)",
      sv: "Litha · Alban Hefin (Solens Krona & Ekens Port)",
    },
    herbs: {
      tr: "Sarı Kantaron (St. John’s Wort), Papatya, Lavanta, Meşe yaprağı, Kekik",
      en: "St. John’s Wort, Chamomile, Lavender, Oak leaf, Thyme",
      sv: "Johannesört, Kamomill, Lavendel, Ekblad och Timjan",
    },
    meaning: {
      tr: "Güneşin gökyüzündeki en yüksek tahtına ulaştığı gündür. İrade, görünürlük ve şifalı otların içindeki uçucu yağlar zirvededir; aynı zamanda zirvenin ardından dönüşün başladığını hatırlatan tevazu dersidir.",
      en: "The Sun reaches its highest throne in the sky. Essential oils inside medicinal herbs peak in potency, while teaching humility at the summit.",
      sv: "Solen når sin högsta tron på himlen. Läkeörternas kraft står i zenit, samtidigt som vändpunkten påminner om ödmjukhet.",
    },
    practice: {
      tr: "Güneş tepedeyken şifalı otları (kantaron, kekik, lavanta) kış için kurutmaya as; elindeki gücün ve emeğin şükranını paylaş.",
      en: "Gather and hang solar herbs (St. John's Wort, thyme, lavender) to dry for winter; share the warmth of your abundance.",
      sv: "Samla och häng solörter (johannesört, timjan, lavendel) på tork inför vintern; dela med dig av ditt överflöd.",
    },
  },
  {
    id: "lughnasadh",
    glyph: "🌾",
    dates: {
      tr: "1 Ağustos · İlk Hasat & Ustalık Bayramı",
      en: "1 Aug · First Harvest & Festival of Mastery",
      sv: "1 aug · Första Skörden & Mästerskapets Högtid",
    },
    direction: {
      tr: "Güney-Batı · Ateşten Suya Geçiş · Emek & Hasat",
      en: "South-West · Fire to Water · Craft & First Grain",
      sv: "Sydväst · Eld till Vatten · Hantverk & Första Skörd",
    },
    title: {
      tr: "Lughnasadh (İlk Başak, Zanaat & Beceri Hasadı)",
      en: "Lughnasadh (First Sheaf & Harvest of Skill)",
      sv: "Lughnasadh (Första Kärven & Skicklighetens Skörd)",
    },
    herbs: {
      tr: "Buğday başağı, Fındık ağacı, Böğürtlen, Yaban mersini, Biberiye",
      en: "Wheat sheaf, Hazel, Blackberry, Bilberry, Rosemary",
      sv: "Vetekärve, Hassel, Björnbär, Blåbär och Rosmarin",
    },
    meaning: {
      tr: "Kelt ustalık ve ışık tanrısı Lugh’un, üvey annesi toprak tanrıçası Tailtiu onuruna kurduğu ilk hasat bayramıdır. İlkbaharda ekilen emeğin ilk somut meyvesi biçilir.",
      en: "Instituted by Lugh of the Long Arm in honor of his foster-mother Tailtiu, marking the cutting of the first grain and the harvest of hard-won skill.",
      sv: "Instiftad av Lugh till minne av fostermodern Tailtiu; markerar den första sädesskörden och frukten av tåligt hantverk.",
    },
    practice: {
      tr: "Kendi ellerinle ekmek veya aş pişirip sevdiklerinle bölüş; son altı ayda kazandığın ustalığı ve tamamladığın işleri somut olarak kayda geçir.",
      en: "Bake bread with your own hands to share at the table, and take inventory of the skills and works you have brought to harvest.",
      sv: "Baka bröd med egna händer att dela vid bordet och inventera de färdigheter och verk du bärgat.",
    },
  },
  {
    id: "mabon",
    glyph: "⚖",
    dates: {
      tr: "22–23 Eylül · Sonbahar Ekinoksu (İkinci Hasat & Terazi)",
      en: "22–23 Sep · Autumn Equinox (Second Harvest & Balance)",
      sv: "22–23 sep · Höstdagjämning (Andra Skörden & Vågen)",
    },
    direction: {
      tr: "Batı · Su · Alacakaranlık, Şükran & İçe Dönüş",
      en: "West · Water · Twilight, Gratitude & Inward Turn",
      sv: "Väster · Vatten · Skymning, Tacksamhet & Inåtvändhet",
    },
    title: {
      tr: "Mabon · Alban Elfed (Güz Dengesi & Kış Hazırlığı)",
      en: "Mabon · Alban Elfed (Autumn Balance & Winter Store)",
      sv: "Mabon · Alban Elfed (Höstbalans & Vinterförråd)",
    },
    herbs: {
      tr: "Asma yaprağı, Elma, Adaçayı, Sedir, Mürver meyvesi, Meşe palamudu",
      en: "Grapevine, Apple, Sage, Cedar, Elderberry, Acorn",
      sv: "Vinblad, Äpple, Salvia, Ceder, Fläderbär och Ekollon",
    },
    meaning: {
      tr: "Gece ile gündüzün yıl içinde ikinci kez eşitlendiği ve artık karanlık yarının (kış odasının) başladığı eşiktir. Kışlık erzak ayrılır, fazlalıklar ayıklanır ve denge kurulur.",
      en: "Day and night stand equal a second time as the dark half of the year begins. Winter stores are gathered and excess is pared away.",
      sv: "Dag och natt väger jämnt för andra gången när årets mörka halva tar vid. Vinterförråden säkras och överflöd rensas bort.",
    },
    practice: {
      tr: "Hayatındaki ‘aldığın ve verdiğin’ şeylerin muhasebesini yap; kışa taşımak istemediğin dağınıklığı topla ve içsel kış odanı hazırla.",
      en: "Take honest account of what you give and receive, clear clutter you do not wish to carry into winter, and prepare your inner study.",
      sv: "Gör bokslut över vad du ger och tar emot, rensa bort det du inte vill bära in i vintern och förbered ditt vinterrum.",
    },
  },
];

const UI = {
  tr: {
    badge: "8 Mevsim Eşiği & Şamanik Dört Yön Pusulası",
    title: "Yılın Çarkı & Ocak Ritüel Takvimi",
    lead: "Doğa dinleri, Kelt koruları ve Şamanik dört yön geleneği zamanı düz bir çizgi olarak değil, sekiz eşikli bir çark olarak okur. Özellikle yaklaşan 31 Ekim – 1 Kasım Samhain (Kış Eşiği) dahil sekiz kapıyı incelemek için çarktaki duraklara tıkla.",
    herbsLabel: "Eşiğin Bitki, Ağaç ve Reçineleri",
    practiceLabel: "Ocak & Eşik Uygulaması",
    witchcraftBridge: "Yılın Çarkı ve Eşikler Odası →",
    samanBridge: "Dört Yön ve Ocak Odası →",
  },
  en: {
    badge: "8 Seasonal Thresholds & Shamanic Four Directions",
    title: "Wheel of the Year & Hearth Ritual Compass",
    lead: "Old nature traditions, Celtic groves, and Shamanic four-direction cosmology read time not as a flat line, but as an eight-spoked wheel. Click any spoke below—including the approaching 31 Oct – 1 Nov Samhain threshold—to inspect its plants and practice.",
    herbsLabel: "Herbs, Trees & Resins of the Threshold",
    practiceLabel: "Hearth & Threshold Practice",
    witchcraftBridge: "Wheel of the Year Room →",
    samanBridge: "Four Directions & Hearth Room →",
  },
  sv: {
    badge: "8 Årstidströsklar & Schamanistiska Fyra Väderstreck",
    title: "Årshjulet & Härdens Ritualkompass",
    lead: "Gamla naturtraditioner, keltiska lundar och schamanistisk kosmologi läser tiden som ett åttaekrat hjul. Klicka på en eker nedan — inklusive den kommande tröskeln Samhain (31 okt – 1 nov) — för att se dess växter och praktik.",
    herbsLabel: "Tröskelns Örter, Träd & Hartser",
    practiceLabel: "Härd- & Tröskelpraktik",
    witchcraftBridge: "Årshjulet & Trösklarna →",
    samanBridge: "De Fyra Väderstrecken & Härden →",
  },
} as const;

export function WheelCompass() {
  const { lang } = useLanguage();
  const ui = UI[lang];
  const [activeId, setActiveId] = useState<string>("samhain");

  const active =
    WHEEL_SPOKES.find((s) => s.id === activeId) ?? WHEEL_SPOKES[0];

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

      {/* 8 Spokes Selector */}
      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
        {WHEEL_SPOKES.map((spoke) => {
          const isSelected = spoke.id === activeId;
          return (
            <button
              key={spoke.id}
              type="button"
              onClick={() => setActiveId(spoke.id)}
              className={`flex flex-col items-center justify-center border px-2.5 py-3 text-center transition-colors ${
                isSelected
                  ? "border-chalk/75 bg-chalk/[0.1] text-chalk"
                  : "border-chalk/15 bg-black/35 text-chalk/70 hover:border-chalk/40 hover:text-chalk"
              }`}
            >
              <span className="text-xl leading-none">{spoke.glyph}</span>
              <span className="mt-1.5 font-display text-sm font-medium capitalize">
                {spoke.id}
              </span>
              {spoke.upcoming && (
                <span className="mt-1 border border-chalk/35 px-1.5 py-0.5 text-[8px] tracking-[0.14em] text-chalk uppercase">
                  31 EKİM
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Spoke Details */}
      <article className="card-slate mt-6 border border-chalk/20 bg-black/45 p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] tracking-[0.18em] text-chalk/60 uppercase">
          <span>{active.dates[lang]}</span>
          <span>{active.direction[lang]}</span>
        </div>

        <h3 className="mt-3 font-display text-3xl font-medium text-chalk sm:text-4xl">
          {active.glyph} {active.title[lang]}
        </h3>

        <p className="mt-4 text-sm leading-7 text-chalk/85 sm:text-base">
          {active.meaning[lang]}
        </p>

        <div className="mt-6 grid gap-4 border-t border-chalk/12 pt-4 sm:grid-cols-2">
          <div>
            <p className="text-[10px] tracking-[0.18em] text-chalk/55 uppercase">
              {ui.herbsLabel}
            </p>
            <p className="mt-1.5 font-display text-lg text-chalk/90">
              {active.herbs[lang]}
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.18em] text-chalk/55 uppercase">
              {ui.practiceLabel}
            </p>
            <p className="mt-1.5 text-xs leading-5 text-chalk/80">
              {active.practice[lang]}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-chalk/12 pt-4 text-xs">
          <Link
            href="/witchcraft/cark-ve-esikler"
            className="font-display tracking-[0.14em] text-chalk/80 uppercase hover:text-chalk hover:underline"
          >
            {ui.witchcraftBridge}
          </Link>
          <span className="text-chalk/25">·</span>
          <Link
            href="/saman/dort-yon-ve-ocak"
            className="font-display tracking-[0.14em] text-chalk/80 uppercase hover:text-chalk hover:underline"
          >
            {ui.samanBridge}
          </Link>
        </div>
      </article>
    </section>
  );
}
