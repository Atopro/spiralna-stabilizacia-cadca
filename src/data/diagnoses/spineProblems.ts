import { Diagnosis } from '../../types/common';

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
    image: 'https://smsystem.b-cdn.net/images/skolioza-image.png'
  },
  // ... other spine problems with updated image paths
];