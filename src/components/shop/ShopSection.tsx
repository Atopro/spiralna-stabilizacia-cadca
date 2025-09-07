import React from 'react';
import Section from '../ui/Section';
import ShopItem from './ShopItem';
import { shopItems } from '../../data/shop';
import { ArrowRight } from 'lucide-react';

const ShopSection = () => {
  return (
    <Section
      id="shop"
      title="E-shop"
      subtitle="Pomôcky pre cvičenie SM systému"
    >
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {shopItems.map((item) => (
          <ShopItem key={item.id} {...item} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <a
          href="#"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group"
        >
          Zobraziť všetky produkty
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </Section>
  );
};

export default ShopSection;