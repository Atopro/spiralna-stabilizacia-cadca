import type { Exercise } from '../types/common';

export const exercises: Exercise[] = [
  {
    title: 'Stabilizačné cvičenie s elastickou gumou',
    description: 'Cvičenie zamerané na posilnenie hlbokého stabilizačného systému pomocou elastickej gumy.',
    imageUrl: 'https://smsystem.b-cdn.net/images/elasticke-lano-image.png',
    benefits: [
      'Posilnenie chrbtového svalstva',
      'Zlepšenie stability chrbtice',
      'Prevencia bolesti chrbta',
      'Korekcia držania tela'
    ]
  },
  {
    title: 'Cvičenia pre skoliózu',
    description: 'Špecializované cvičenia zamerané na korekciu zakrivenia chrbtice a svalových dysbalancií.',
    imageUrl: 'https://smsystem.b-cdn.net/images/skolioza-image.png',
    benefits: [
      'Korekcia zakrivenia chrbtice',
      'Vyrovnanie svalových dysbalancií',
      'Zlepšenie držania tela',
      'Prevencia progresie skoliózy'
    ]
  }
];