import React from 'react';
import Button from '../ui/Button';
import type { ShopItem as ShopItemType } from '../../data/shop';
import { formatCurrency } from '../../utils/currency';

interface ShopItemProps extends ShopItemType {}

const ShopItem: React.FC<ShopItemProps> = ({ title, description, price, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
      <div className="aspect-w-1 aspect-h-1 bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-4"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">{formatCurrency(price)}</span>
          <Button variant="secondary" size="sm">Detail</Button>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;