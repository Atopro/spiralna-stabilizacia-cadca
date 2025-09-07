import { Diagnosis } from '../types/common';

export const spineProblems: Diagnosis[] = [
  {
    id: 'skolioza',
    title: 'Skolióza',
    subtitle: 'Zakrivenie chrbtice, ktoré ovplyvňuje držanie tela',
    description: `Skolióza predstavuje bočné zakrivenie chrbtice, ktoré môže vzniknúť v akomkoľvek veku. Toto ochorenie významne ovplyvňuje držanie tela a môže spôsobovať bolesti či obmedzenie pohybu. Včasná diagnostika a správne zvolená terapia sú kľúčové pre úspešnú liečbu.`,
    symptoms: [
      {
        id: 'skolioza-1',
        text: 'Asymetria ramien alebo lopatiek'
      },
      {
        id: 'skolioza-2',
        text: 'Nerovnomerné držanie tela pri státí alebo chôdzi'
      },
      {
        id: 'skolioza-3',
        text: 'Viditeľné zakrivenie chrbtice do strany'
      },
      {
        id: 'skolioza-4',
        text: 'Bolesti chrbta pri dlhšom státí alebo sedení'
      }
    ],
    treatments: [
      {
        title: 'Špirálna stabilizácia chrbtice (SPS)',
        description: 'Špeciálne cvičenia zamerané na vyrovnanie chrbtice a aktiváciu správnych svalových reťazcov.'
      },
      {
        title: 'Individuálny rehabilitačný plán',
        description: 'Komplexný program cvičení prispôsobený vášmu typu skoliózy a celkovému stavu chrbtice.'
      },
      {
        title: 'Pravidelné sledovanie stavu',
        description: 'Monitoring progresie skoliózy a prispôsobovanie terapie aktuálnym potrebám.'
      },
      {
        title: 'Preventívne opatrenia',
        description: 'Edukácia o správnom držaní tela a vhodných pohybových aktivitách v bežnom živote.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80'
  },
  {
    id: 'hernia',
    title: 'Hernia disku',
    subtitle: 'Poškodenie medzistavcovej platničky s tlakom na nervy',
    description: `Hernia disku vzniká, keď sa medzistavcová platnička vysunie zo svojej prirodzenej pozície a tlačí na okolité nervy. Tento stav môže spôsobovať intenzívne bolesti a obmedzenie pohybu. Správne zvolená rehabilitácia dokáže výrazne zmierniť príznaky a často predísť potrebe operácie.`,
    symptoms: [
      {
        id: 'hernia-1',
        text: 'Ostrá bolesť vystreľujúca do končatín'
      },
      {
        id: 'hernia-2',
        text: 'Znížená citlivosť alebo mravčenie v končatinách'
      },
      {
        id: 'hernia-3',
        text: 'Zhoršenie bolesti pri určitých pohyboch'
      },
      {
        id: 'hernia-4',
        text: 'Stuhnutosť svalov v okolí postihnutej oblasti'
      }
    ],
    treatments: [
      {
        title: 'Cielená rehabilitácia',
        description: 'Špecifické cvičenia na uvoľnenie tlaku z nervov a posilnenie podporných svalov.'
      },
      {
        title: 'Metóda SPS',
        description: 'Využitie špirálnej stabilizácie na vytvorenie priestoru medzi stavcami a zmiernenie tlaku na platničku.'
      },
      {
        title: 'Manuálna terapia',
        description: 'Jemné techniky na uvoľnenie svalového napätia a zlepšenie pohyblivosti chrbtice.'
      },
      {
        title: 'Prevencia zhoršenia',
        description: 'Nácvik správnych pohybových stereotypov a ergonómie pre každodenné činnosti.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80'
  },
  {
    id: 'stenoza',
    title: 'Spinálna stenóza',
    subtitle: 'Zúženie miechového kanála s tlakom na nervy',
    description: `Spinálna stenóza predstavuje zúženie priestoru v chrbtici, kde prechádzajú nervy. Tento stav môže významne ovplyvniť kvalitu života, spôsobovať bolesti a obmedzovať pohyblivosť. Včasná intervencia a správne cvičenia dokážu výrazne zmierniť príznaky a spomaliť progresiu ochorenia.`,
    symptoms: [
      {
        id: 'stenoza-1',
        text: 'Postupne sa zhoršujúca bolesť v nohách pri chôdzi'
      },
      {
        id: 'stenoza-2',
        text: 'Úľava pri predklone alebo sedení'
      },
      {
        id: 'stenoza-3',
        text: 'Znížená citlivosť alebo slabosť v nohách'
      },
      {
        id: 'stenoza-4',
        text: 'Problémy s rovnováhou a koordináciou'
      }
    ],
    treatments: [
      {
        title: 'Špirálna stabilizácia',
        description: 'Špeciálne cvičenia na vytvorenie priestoru v chrbtici a odľahčenie nervov.'
      },
      {
        title: 'Manuálna terapia',
        description: 'Techniky na zlepšenie pohyblivosti chrbtice a uvoľnenie napätia.'
      },
      {
        title: 'Kondičné cvičenia',
        description: 'Posilňovanie svalov podporujúcich chrbticu pre lepšiu stabilitu a držanie tela.'
      },
      {
        title: 'Úprava životného štýlu',
        description: 'Odporúčania pre každodenné aktivity a ergonómiu na minimalizáciu ťažkostí.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80'
  },
  {
    id: 'hyperlordoza',
    title: 'Hyperlordóza / Hyperkyfóza',
    subtitle: 'Nadmerné zakrivenie chrbtice v predozadnom smere',
    description: `Hyperlordóza a hyperkyfóza sú stavy, pri ktorých dochádza k nadmernému zakriveniu chrbtice v predozadnom smere. Hyperlordóza sa prejavuje prehnutím v bedrovej oblasti, zatiaľ čo hyperkyfóza spôsobuje výrazné vyklenutie v hrudnej časti. Oba stavy môžu viesť k bolestiam a obmedzenej pohyblivosti.`,
    symptoms: [
      {
        id: 'lordoza-1',
        text: 'Výrazné prehnutie v dolnej časti chrbta'
      },
      {
        id: 'lordoza-2',
        text: 'Bolesti v krížovej oblasti pri dlhšom státí'
      },
      {
        id: 'lordoza-3',
        text: 'Napätie v chrbtových svaloch'
      },
      {
        id: 'lordoza-4',
        text: 'Ťažkosti s udržaním správneho držania tela'
      }
    ],
    treatments: [
      {
        title: 'Korekčné cvičenia',
        description: 'Cielené cviky na postupné vyrovnávanie nadmerného zakrivenia chrbtice.'
      },
      {
        title: 'Posilňovanie jadra tela',
        description: 'Cvičenia na posilnenie hlbokého stabilizačného systému pre lepšiu podporu chrbtice.'
      },
      {
        title: 'Nácvik správneho držania',
        description: 'Praktický tréning správnych pohybových vzorcov v bežných situáciách.'
      },
      {
        title: 'Komplexný strečing',
        description: 'Program na uvoľnenie skrátených svalov a zlepšenie celkovej flexibility.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80'
  },
  {
    id: 'spondylolisteza',
    title: 'Spondylolistéza',
    subtitle: 'Posun stavca voči susednému stavcu',
    description: `Spondylolistéza je stav, pri ktorom dochádza k posunu jedného stavca voči druhému. Tento posun môže spôsobovať tlak na okolité nervy a viesť k bolestiam či obmedzenej pohyblivosti. Správne zvolená rehabilitácia je kľúčová pre stabilizáciu stavu a zmiernenie príznakov.`,
    symptoms: [
      {
        id: 'spondylo-1',
        text: 'Chronická bolesť v dolnej časti chrbta'
      },
      {
        id: 'spondylo-2',
        text: 'Napätie a stuhnutosť v bedrovej oblasti'
      },
      {
        id: 'spondylo-3',
        text: 'Bolesti vystreľujúce do nôh'
      },
      {
        id: 'spondylo-4',
        text: 'Zhoršenie ťažkostí pri fyzickej námahe'
      }
    ],
    treatments: [
      {
        title: 'Stabilizačné cvičenia',
        description: 'Špecifický program na posilnenie stability chrbtice a prevenciu ďalšieho posunu.'
      },
      {
        title: 'Manuálna terapia',
        description: 'Šetrné techniky na uvoľnenie napätia a zlepšenie pohyblivosti v postihnutej oblasti.'
      },
      {
        title: 'Edukácia pacienta',
        description: 'Dôkladné vysvetlenie správnych pohybových stereotypov a rizikových aktivít.'
      },
      {
        title: 'Preventívny program',
        description: 'Individuálne odporúčania pre bezpečné vykonávanie každodenných činností.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&q=80'
  },
  {
    id: 'scheuermann',
    title: 'Scheuermannova choroba',
    subtitle: 'Juvenilná kyfóza spôsobujúca hrbatenie',
    description: `Scheuermannova choroba je vývojová porucha chrbtice, ktorá sa prejavuje najmä v období rastu. Spôsobuje nadmerné vyklenutie (kyfózu) v hrudnej oblasti chrbtice, čo vedie k typickému hrbateniu. Včasná diagnostika a liečba sú kľúčové pre prevenciu závažnejších deformít.`,
    symptoms: [
      {
        id: 'scheuermann-1',
        text: 'Postupne sa zhoršujúce hrbatenie chrbta'
      },
      {
        id: 'scheuermann-2',
        text: 'Bolesti pri dlhšom sedení alebo státí'
      },
      {
        id: 'scheuermann-3',
        text: 'Obmedzená pohyblivosť chrbtice'
      },
      {
        id: 'scheuermann-4',
        text: 'Zvýšená únava chrbtového svalstva'
      }
    ],
    treatments: [
      {
        title: 'Komplexná rehabilitácia',
        description: 'Ucelený program cvičení na zlepšenie držania tela a posilnenie správnych svalových skupín.'
      },
      {
        title: 'Špirálna stabilizácia',
        description: 'Špeciálne cvičenia podporujúce správny vývoj chrbtice a prevenciu zhoršovania stavu.'
      },
      {
        title: 'Ergonomické poradenstvo',
        description: 'Praktické rady pre správne sedenie, státie a vykonávanie bežných aktivít.'
      },
      {
        title: 'Preventívne opatrenia',
        description: 'Dlhodobý program na udržanie dosiahnutých výsledkov a prevenciu komplikácií.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?auto=format&fit=crop&q=80'
  }
];

export const jointProblems: Diagnosis[] = [
  {
    id: 'bedrove-klby',
    title: 'Bedrové, kolenné a členkové kĺby',
    subtitle: 'Bolesti a obmedzená pohyblivosť kĺbov',
    description: `Problémy s kĺbmi dolných končatín môžu významne ovplyvniť kvalitu života. Či už ide o artrózu, poúrazové stavy alebo preťaženie, správne zvolená rehabilitácia dokáže výrazne zlepšiť funkčnosť kĺbov a zmierniť bolesti. Metóda SPS pomáha obnoviť správne pohybové vzorce a posilniť podporné svalstvo.`,
    symptoms: [
      {
        id: 'joints-1',
        text: 'Bolesť pri chôdzi alebo dlhšom státí'
      },
      {
        id: 'joints-2',
        text: 'Stuhnutosť kĺbov, najmä ráno'
      },
      {
        id: 'joints-3',
        text: 'Obmedzený rozsah pohybu'
      },
      {
        id: 'joints-4',
        text: 'Nestabilita pri chôdzi'
      }
    ],
    treatments: [
      {
        title: 'Špirálna stabilizácia',
        description: 'Špeciálne cvičenia na zlepšenie stability a mobility kĺbov pomocou aktivácie správnych svalových reťazcov.'
      },
      {
        title: 'Mobilizačné techniky',
        description: 'Jemné techniky na zlepšenie pohyblivosti kĺbov a uvoľnenie okolitých štruktúr.'
      },
      {
        title: 'Posilňovacie cvičenia',
        description: 'Cielené posilňovanie svalov podporujúcich správnu funkciu kĺbov.'
      },
      {
        title: 'Nácvik správnej chôdze',
        description: 'Korekcia stereotypu chôdze pre lepšie rozloženie záťaže na kĺby.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1571019613576-2b22c76fd955?auto=format&fit=crop&q=80'
  },
  {
    id: 'ploche-nohy',
    title: 'Ploché nohy a hallux valgus',
    subtitle: 'Deformácie nohy a nesprávne rozloženie záťaže',
    description: `Ploché nohy a vybočený palec (hallux valgus) sú časté problémy, ktoré môžu viesť k bolestiam nielen v oblasti chodidiel, ale aj kolien, bedier a chrbtice. Včasná intervencia a správne cvičenia môžu zabrániť progresii deformít a zmierniť súvisiace ťažkosti.`,
    symptoms: [
      {
        id: 'feet-1',
        text: 'Únava a bolesti nôh pri dlhšej chôdzi'
      },
      {
        id: 'feet-2',
        text: 'Deformácia palca na nohe'
      },
      {
        id: 'feet-3',
        text: 'Otlaky a mozole na chodidlách'
      },
      {
        id: 'feet-4',
        text: 'Bolesti v kolenách a bedrách'
      }
    ],
    treatments: [
      {
        title: 'Cvičenia klenby',
        description: 'Špecifické cviky na posilnenie svalov klenby a zlepšenie postavenia chodidla.'
      },
      {
        title: 'Mobilizácia kĺbov nohy',
        description: 'Techniky na zlepšenie pohyblivosti drobných kĺbov nohy a prstov.'
      },
      {
        title: 'Nácvik správneho zaťaženia',
        description: 'Edukácia o správnom rozložení váhy a postavení chodidla pri chôdzi.'
      },
      {
        title: 'Preventívne opatrenia',
        description: 'Odporúčania pre výber vhodnej obuvi a každodenné aktivity.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1508387027939-27cccde53673?auto=format&fit=crop&q=80'
  },
  {
    id: 'ramenny-klb',
    title: 'Ramenný kĺb',
    subtitle: 'Nestabilita, bolesť a obmedzený rozsah pohybu',
    description: `Problémy s ramenným kĺbom môžu vzniknúť z rôznych príčin - od preťaženia cez úrazy až po degeneratívne zmeny. Rameno je komplexný kĺb a jeho správna funkcia závisí od koordinácie mnohých svalov a štruktúr. Metóda SPS ponúka efektívny prístup k liečbe týchto problémov.`,
    symptoms: [
      {
        id: 'shoulder-1',
        text: 'Bolesť pri zdvíhaní ruky nad hlavu'
      },
      {
        id: 'shoulder-2',
        text: 'Obmedzený rozsah pohybu v ramene'
      },
      {
        id: 'shoulder-3',
        text: 'Nočné bolesti ramena'
      },
      {
        id: 'shoulder-4',
        text: 'Nestabilita a slabosť v ramene'
      }
    ],
    treatments: [
      {
        title: 'Stabilizačné cvičenia',
        description: 'Cviky na zlepšenie stability a koordinácie svalov ramenného pletenca.'
      },
      {
        title: 'Mäkké techniky',
        description: 'Uvoľnenie napätých svalov a fascií v oblasti ramena a lopatky.'
      },
      {
        title: 'Centrácia ramena',
        description: 'Nácvik správneho postavenia ramenného kĺbu pri pohybe.'
      },
      {
        title: 'Komplexná rehabilitácia',
        description: 'Kombinácia rôznych techník pre optimálnu funkciu ramena.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80'
  }
];

export const neurologicalProblems: Diagnosis[] = [
  {
    id: 'bolesti-hlavy',
    title: 'Bolesti hlavy',
    subtitle: 'Napätie svalov krčnej chrbtice spôsobujúce bolesti',
    description: `Bolesti hlavy môžu byť spôsobené napätím svalov v oblasti krčnej chrbtice. Tento stav často súvisí so zlým držaním tela, stresom alebo dlhodobým sedením. Pravidelné cvičenie a rehabilitácia môžu pomôcť zmierniť príznaky a zabrániť ich opakovaniu.`,
    symptoms: [
      {
        id: 'headache-1',
        text: 'Bolesť vyžarujúca z krku do hlavy'
      },
      {
        id: 'headache-2',
        text: 'Stuhnutosť krčných svalov'
      },
      {
        id: 'headache-3',
        text: 'Zhoršenie bolesti pri dlhodobom sedení'
      },
      {
        id: 'headache-4',
        text: 'Závrate a nevoľnosť'
      }
    ],
    treatments: [
      {
        title: 'Uvoľnenie krčnej chrbtice',
        description: 'Špeciálne cvičenia na uvoľnenie napätia v krčnej oblasti.'
      },
      {
        title: 'Nácvik správneho držania hlavy',
        description: 'Korekcia postavenia hlavy a krčnej chrbtice počas bežných aktivít.'
      },
      {
        title: 'Relaxačné techniky',
        description: 'Techniky na zníženie celkového napätia a stresu.'
      },
      {
        title: 'Preventívny program',
        description: 'Súbor cvičení a odporúčaní pre prevenciu bolestí hlavy.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80'
  },
  {
    id: 'zavratnost',
    title: 'Závratnosť',
    subtitle: 'Nestabilita a problémy s rovnováhou',
    description: `Závrate môžu byť spôsobené rôznymi faktormi, vrátane problémov s krčnou chrbticou a vestibulárnym systémom. Správna diagnostika a cielená rehabilitácia môžu výrazne zlepšiť stabilitu a zmierniť príznaky.`,
    symptoms: [
      {
        id: 'dizziness-1',
        text: 'Pocit točenia hlavy'
      },
      {
        id: 'dizziness-2',
        text: 'Nestabilita pri chôdzi'
      },
      {
        id: 'dizziness-3',
        text: 'Nevoľnosť a dezorientácia'
      },
      {
        id: 'dizziness-4',
        text: 'Zhoršené videnie pri pohybe'
      }
    ],
    treatments: [
      {
        title: 'Vestibulárna rehabilitácia',
        description: 'Špecializované cvičenia na zlepšenie rovnováhy a stability.'
      },
      {
        title: 'Stabilizačné cvičenia',
        description: 'Posilnenie hlbokého stabilizačného systému pre lepšiu kontrolu pohybu.'
      },
      {
        title: 'Koordinačný tréning',
        description: 'Cvičenia na zlepšenie koordinácie a priestorovej orientácie.'
      },
      {
        title: 'Adaptačné stratégie',
        description: 'Nácvik techník pre zvládanie závratu v bežnom živote.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1541534401786-2077eed87a74?auto=format&fit=crop&q=80'
  },
  {
    id: 'roztrusena-skleroza',
    title: 'Roztrúsená skleróza',
    subtitle: 'Neurologické ochorenie ovplyvňujúce pohyb',
    description: `Roztrúsená skleróza je chronické ochorenie centrálneho nervového systému. Rehabilitácia zohráva kľúčovú úlohu v manažmente symptómov a udržaní kvality života. Metóda SPS môže pomôcť zlepšiť stabilitu, koordináciu a celkovú pohyblivosť.`,
    symptoms: [
      {
        id: 'ms-1',
        text: 'Únava a slabosť'
      },
      {
        id: 'ms-2',
        text: 'Problémy s rovnováhou'
      },
      {
        id: 'ms-3',
        text: 'Stuhnutosť svalov'
      },
      {
        id: 'ms-4',
        text: 'Poruchy koordinácie'
      }
    ],
    treatments: [
      {
        title: 'Individuálny cvičebný program',
        description: 'Program prispôsobený aktuálnemu stavu a potrebám pacienta.'
      },
      {
        title: 'Cvičenia na rovnováhu',
        description: 'Špecifické cviky na zlepšenie stability a prevenciu pádov.'
      },
      {
        title: 'Manažment únavy',
        description: 'Stratégie na efektívne hospodárenie s energiou.'
      },
      {
        title: 'Nácvik každodenných aktivít',
        description: 'Praktický tréning bežných činností s ohľadom na bezpečnosť.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1578496781985-452d4a934d50?auto=format&fit=crop&q=80'
  }
];

export const metabolicProblems: Diagnosis[] = [
  {
    id: 'diabetes',
    title: 'Diabetes mellitus',
    subtitle: 'Pohybová aktivita pri cukrovke',
    description: `Pravidelná pohybová aktivita je kľúčovou súčasťou manažmentu diabetes mellitus. Správne zvolené cvičenia pomáhajú regulovať hladinu cukru v krvi, zlepšujú citlivosť na inzulín a podporujú celkové zdravie.`,
    symptoms: [
      {
        id: 'diabetes-1',
        text: 'Znížená citlivosť končatín'
      },
      {
        id: 'diabetes-2',
        text: 'Svalová slabosť'
      },
      {
        id: 'diabetes-3',
        text: 'Problémy s rovnováhou'
      },
      {
        id: 'diabetes-4',
        text: 'Zhoršené hojenie rán'
      }
    ],
    treatments: [
      {
        title: 'Bezpečné cvičenie',
        description: 'Program cvičení prispôsobený diabetikom s ohľadom na glykémiu.'
      },
      {
        title: 'Prevencia komplikácií',
        description: 'Špeciálne cvičenia na prevenciu diabetickej neuropatie.'
      },
      {
        title: 'Kardio tréning',
        description: 'Bezpečné kardiovaskulárne cvičenia pre zlepšenie metabolizmu.'
      },
      {
        title: 'Edukácia',
        description: 'Poučenie o správnom cvičení a monitorovaní glykémie.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80'
  }
];