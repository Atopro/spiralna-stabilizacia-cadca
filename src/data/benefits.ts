import { Spline as Spine, Stethoscope, Disc, Dumbbell, ShieldCheck, Users } from 'lucide-react';
import type { Benefit } from '../types/common';

export const benefits: Benefit[] = [
  {
    icon: Spine,
    title: 'Zlepšuje držanie tela',
    description: 'Pomáha vyrovnať chrbticu a stabilizovať telo.',
  },
  {
    icon: Stethoscope,
    title: 'Odstraňuje bolesti chrbtice',
    description: 'Zmierňuje bolesti chrbta a kĺbov prirodzenou cestou.',
  },
  {
    icon: Disc,
    title: 'Regenerácia platničiek',
    description: 'Podporuje obnovu medzistavcových platničiek a zdravé pohybové vzory.',
  },
  {
    icon: Dumbbell,
    title: 'Uvoľňuje svalové napätie',
    description: 'Pomáha odstrániť svalové nerovnováhy a blokády.',
  },
  {
    icon: ShieldCheck,
    title: 'Prevencia aj rehabilitácia',
    description: 'Využíva sa na liečbu aj prevenciu chrbticových problémov.',
  },
  {
    icon: Users,
    title: 'Vhodné pre každého',
    description: 'Vhodné pre deti, dospelých, seniorov aj športovcov.',
  }
];