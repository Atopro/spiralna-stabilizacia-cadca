import { Diagnosis } from '../../types/common';

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
  },
  {
    id: 'tep-klbov',
    title: 'Stavy po TEP bedrového alebo kolenného kĺbu',
    subtitle: 'Rehabilitácia po operáciách kĺbov',
    description: `Rehabilitácia po totálnej endoprotéze (TEP) bedrového alebo kolenného kĺbu je kľúčová pre obnovenie mobility a návrat k bežným aktivitám. Správne vedená rehabilitácia pomáha predchádzať komplikáciám a urýchľuje proces zotavenia.`,
    symptoms: [
      {
        id: 'tep-1',
        text: 'Obmedzená pohyblivosť operovaného kĺbu'
      },
      {
        id: 'tep-2',
        text: 'Svalová slabosť v okolí kĺbu'
      },
      {
        id: 'tep-3',
        text: 'Neistota pri chôdzi'
      },
      {
        id: 'tep-4',
        text: 'Strach z plného zaťaženia končatiny'
      }
    ],
    treatments: [
      {
        title: 'Včasná rehabilitácia',
        description: 'Postupné cvičenia začínajúce už v nemocnici po operácii.'
      },
      {
        title: 'Nácvik chôdze',
        description: 'Postupný nácvik správneho stereotypu chôdze s pomôckami aj bez nich.'
      },
      {
        title: 'Posilňovanie',
        description: 'Cielené posilňovanie svalov v okolí operovaného kĺbu.'
      },
      {
        title: 'Edukácia',
        description: 'Poučenie o správnych pohybových stereotypoch a režimových opatreniach.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&q=80'
  },
  {
    id: 'poruchy-chodze',
    title: 'Poruchy chôdze u vertebrogénnych pacientov',
    subtitle: 'Problémy so stabilitou a koordináciou',
    description: `Vertebrogénne ochorenia často vedú k poruchám stability a koordinácie pri chôdzi. Tieto problémy môžu významne ovplyvniť kvalitu života a zvyšujú riziko pádov. Špirálna stabilizácia pomáha obnoviť správne pohybové vzorce a zlepšiť celkovú stabilitu.`,
    symptoms: [
      {
        id: 'gait-1',
        text: 'Nestabilita pri chôdzi'
      },
      {
        id: 'gait-2',
        text: 'Poruchy rovnováhy'
      },
      {
        id: 'gait-3',
        text: 'Nerovnomerná dĺžka kroku'
      },
      {
        id: 'gait-4',
        text: 'Strach z pádu'
      }
    ],
    treatments: [
      {
        title: 'Stabilizačné cvičenia',
        description: 'Špecifické cviky na zlepšenie stability a koordinácie pohybu.'
      },
      {
        title: 'Senzomotorický tréning',
        description: 'Cvičenia na zlepšenie vnímania polohy tela a rovnováhy.'
      },
      {
        title: 'Nácvik správnej chôdze',
        description: 'Korekcia chybných pohybových stereotypov pri chôdzi.'
      },
      {
        title: 'Komplexná rehabilitácia',
        description: 'Kombinácia rôznych techník pre optimálne výsledky.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80'
  }
];