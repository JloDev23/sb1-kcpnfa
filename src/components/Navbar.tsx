import React from 'react';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export const Navbar: React.FC = () => {
  const items = useCartStore(state => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">EcoStore MTY</span>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};