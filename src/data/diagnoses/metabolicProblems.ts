import { Diagnosis } from '../../types/common';

export const metabolicProblems: Diagnosis[] = [
  // Metabolické ochorenia
  {
    id: 'diabetes',
    title: 'Diabetes mellitus',
    subtitle: 'Pohybová aktivita pri cukrovke',
    description: `Pravidelná pohybová aktivita je kľúčovou súčasťou manažmentu diabetes mellitus. Správne zvolené cvičenia pomáhajú regulovať hladinu cukru v krvi, zlepšujú citlivosť na inzulín a podporujú celkové zdravie.`,
    symptoms: [
      { id: 'diabetes-1', text: 'Znížená citlivosť končatín' },
      { id: 'diabetes-2', text: 'Svalová slabosť' },
      { id: 'diabetes-3', text: 'Problémy s rovnováhou' },
      { id: 'diabetes-4', text: 'Zhoršené hojenie rán' }
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
  },
  {
    id: 'dyslipoproteinemia',
    title: 'Dyslipoproteinémia',
    subtitle: 'Poruchy metabolizmu tukov',
    description: `Dyslipoproteinémia je porucha metabolizmu tukov, ktorá môže viesť k závažným kardiovaskulárnym ochoreniam. Pravidelná pohybová aktivita je dôležitou súčasťou liečby a prevencie komplikácií.`,
    symptoms: [
      { id: 'dyslip-1', text: 'Zvýšená únava' },
      { id: 'dyslip-2', text: 'Nadváha alebo obezita' },
      { id: 'dyslip-3', text: 'Znížená tolerancia záťaže' },
      { id: 'dyslip-4', text: 'Kardiovaskulárne problémy' }
    ],
    treatments: [
      {
        title: 'Aeróbne cvičenia',
        description: 'Pravidelné kardio aktivity pre zlepšenie metabolizmu tukov.'
      },
      {
        title: 'Silový tréning',
        description: 'Posilňovacie cvičenia pre zvýšenie bazálneho metabolizmu.'
      },
      {
        title: 'Životospráva',
        description: 'Komplexný prístup k pohybu a stravovaniu.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80'
  },

  // Kardiovaskulárne a pľúcne ochorenia
  {
    id: 'ischem-choroba',
    title: 'Ischemická choroba srdca',
    subtitle: 'Bezpečné cvičenie pri srdcových ochoreniach',
    description: `Správne dávkovaná pohybová aktivita je dôležitou súčasťou liečby ischemickej choroby srdca. Cvičenie musí byť prispôsobené individuálnemu stavu pacienta a pravidelne monitorované.`,
    symptoms: [
      { id: 'ichs-1', text: 'Dýchavičnosť pri námahe' },
      { id: 'ichs-2', text: 'Znížená tolerancia záťaže' },
      { id: 'ichs-3', text: 'Únava' },
      { id: 'ichs-4', text: 'Bolesti na hrudi' }
    ],
    treatments: [
      {
        title: 'Kontrolovaný tréning',
        description: 'Postupné zvyšovanie záťaže pod dohľadom.'
      },
      {
        title: 'Dychové cvičenia',
        description: 'Zlepšenie okysličenia a práce s dychom.'
      },
      {
        title: 'Monitoring',
        description: 'Pravidelná kontrola vitálnych funkcií počas cvičenia.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80'
  },
  {
    id: 'hypertenzia',
    title: 'Hypertenzia',
    subtitle: 'Cvičenie pri vysokom krvnom tlaku',
    description: `Hypertenzia vyžaduje špeciálny prístup k cvičeniu. Správne zvolené aktivity pomáhajú znižovať krvný tlak a zlepšovať celkové zdravie kardiovaskulárneho systému.`,
    symptoms: [
      { id: 'hyper-1', text: 'Zvýšený krvný tlak' },
      { id: 'hyper-2', text: 'Bolesti hlavy' },
      { id: 'hyper-3', text: 'Závrate' },
      { id: 'hyper-4', text: 'Únava' }
    ],
    treatments: [
      {
        title: 'Aeróbne aktivity',
        description: 'Mierne intenzívne cvičenia pre reguláciu tlaku.'
      },
      {
        title: 'Relaxačné techniky',
        description: 'Cvičenia na zníženie stresu a napätia.'
      },
      {
        title: 'Lifestyle úpravy',
        description: 'Komplexný prístup k životnému štýlu.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80'
  },

  // Choroby svalov a spojivového tkaniva
  {
    id: 'fibromyalgia',
    title: 'Fibromyalgia',
    subtitle: 'Manažment chronickej bolesti',
    description: `Fibromyalgia je chronické ochorenie charakterizované rozšírenou bolesťou svalov a únavou. Správne zvolené cvičenia môžu pomôcť zmierniť príznaky a zlepšiť kvalitu života.`,
    symptoms: [
      { id: 'fibro-1', text: 'Chronická bolesť svalov' },
      { id: 'fibro-2', text: 'Únava' },
      { id: 'fibro-3', text: 'Poruchy spánku' },
      { id: 'fibro-4', text: 'Stuhnutosť kĺbov' }
    ],
    treatments: [
      {
        title: 'Jemné strečingové cvičenia',
        description: 'Šetrné naťahovacie cviky pre uvoľnenie svalov.'
      },
      {
        title: 'Graduovaný cvičebný program',
        description: 'Postupné zvyšovanie aktivity podľa tolerancie.'
      },
      {
        title: 'Relaxačné techniky',
        description: 'Metódy na zníženie napätia a stresu.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80'
  },

  // Reumatické ochorenia
  {
    id: 'bechterev',
    title: 'Bechterevova choroba',
    subtitle: 'Ankylozujúca spondylitída',
    description: `Bechterevova choroba je chronické zápalové ochorenie chrbtice. Pravidelné cvičenie je kľúčové pre udržanie pohyblivosti a prevenciu stuhnutia chrbtice.`,
    symptoms: [
      { id: 'becht-1', text: 'Ranná stuhnutosť chrbtice' },
      { id: 'becht-2', text: 'Bolesť v dolnej časti chrbta' },
      { id: 'becht-3', text: 'Obmedzená pohyblivosť' },
      { id: 'becht-4', text: 'Únava a vyčerpanosť' }
    ],
    treatments: [
      {
        title: 'Dychové cvičenia',
        description: 'Udržanie pohyblivosti hrudníka a správneho dýchania.'
      },
      {
        title: 'Strečing',
        description: 'Zachovanie pohyblivosti chrbtice a kĺbov.'
      },
      {
        title: 'Posilňovacie cvičenia',
        description: 'Udržanie svalovej sily a podpory chrbtice.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&q=80'
  },
  {
    id: 'polyartritida',
    title: 'Progresívna polyartritída',
    subtitle: 'Reumatoidná artritída',
    description: `Reumatoidná artritída je chronické zápalové ochorenie kĺbov. Správne zvolené cvičenia pomáhajú udržať pohyblivosť kĺbov a zmierňovať príznaky ochorenia.`,
    symptoms: [
      { id: 'poly-1', text: 'Bolesti a opuch kĺbov' },
      { id: 'poly-2', text: 'Ranná stuhnutosť' },
      { id: 'poly-3', text: 'Únava' },
      { id: 'poly-4', text: 'Obmedzená pohyblivosť' }
    ],
    treatments: [
      {
        title: 'Šetrné cvičenia',
        description: 'Jemné pohyby pre udržanie pohyblivosti kĺbov.'
      },
      {
        title: 'Ergoterapia',
        description: 'Nácvik každodenných činností s ohľadom na šetrenie kĺbov.'
      },
      {
        title: 'Hydroterapia',
        description: 'Cvičenie vo vode pre odľahčenie kĺbov.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1578496781985-452d4a934d50?auto=format&fit=crop&q=80'
  }
];