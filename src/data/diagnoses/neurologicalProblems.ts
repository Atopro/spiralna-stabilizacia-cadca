import { Diagnosis } from '../../types/common';

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