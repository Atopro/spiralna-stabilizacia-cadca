import { CZK_TO_EUR_RATE } from '../utils/currency';

export interface ShopItem {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export const shopItems: ShopItem[] = [
  {
    id: 1,
    title: 'Elastické lano',
    description: 'Elastická guma je základným nástrojom pre cvičenie Spirálnej Stabilizácie. Budete ju používať takmer pri všetkých cvičeniach. Je vhodná pre začiatočníkov aj pokročilých.',
    price: 28.70, // 700 CZK
    image: 'https://smsystem.b-cdn.net/images/elasticke-lano-image.png'
  },
  {
    id: 2,
    title: 'Športové elastické lano',
    description: 'Športová elastická guma je vhodná len pre ľudí bez bolestí a pre športovcov, ktorí už cvičia s bežnou elastickou gumou.',
    price: 28.70, // 700 CZK
    image: 'https://smsystem.b-cdn.net/images/lano-sport-image.png'
  },
  {
    id: 3,
    title: 'Balančná podložka PROFI',
    description: 'Balančná podložka bola navrhnutá špeciálne Dr. Smíškom pre cvičenie metódy Spirálnej Stabilizácie. Je vyrobená zo špeciálnej odolnej peny so špecifickými vlastnosťami.',
    price: 36.90, // 900 CZK
    image: 'https://smsystem.b-cdn.net/images/podlozka-image.png'
  },
  {
    id: 4,
    title: 'Oporná tyč',
    description: 'Slúži na správne vedenie pohybu a udržiavanie rovnováhy počas cvičenia.',
    price: 4.10, // 100 CZK
    image: 'https://smsystem.b-cdn.net/images/tyce-image.png'
  },
  {
    id: 5,
    title: 'Permanentka',
    description: 'Permanentka na 6 vstupov + 1 zadarmo, ideálna pre pravidelný tréning SM Systému.',
    price: 102.50, // 2500 CZK
    image: 'https://smsystem.b-cdn.net/images/pernamentka-image.png'
  },
  {
    id: 6,
    title: 'Darčekový Poukaz',
    description: 'Darčekový poukaz na cvičenia SM Systému a manuálnych techník – praktický darček pre zdravie blízkych.',
    price: 41.00, // 1000 CZK
    image: 'https://smsystem.b-cdn.net/images/poukaz-image.png?v=' + Date.now()
  }
];