export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Jana Kováčová',
    text: 'Po troch mesiacoch cvičenia SM systému sa mi výrazne zlepšili bolesti chrbta. Cítim sa omnoho lepšie a mám viac energie.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
  },
  {
    name: 'Peter Novák',
    text: 'Skvelý prístup terapeutov a účinná metóda. Odporúčam každému, kto má problémy s chrbticou.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
  },
  {
    name: 'Mária Horváthová',
    text: 'SM systém mi pomohol zbaviť sa chronických bolestí. Cvičenia sú jednoduché a dajú sa robiť aj doma.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80'
  }
];