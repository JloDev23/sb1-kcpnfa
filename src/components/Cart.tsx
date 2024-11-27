import React from 'react';
import { ShoppingBag, Trash2 } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, total } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <ShoppingBag className="w-12 h-12 mx-auto text-gray-400 mb-4" />
        <p className="text-gray-600">Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Tu Carrito</h2>
      <div className="space-y-4">
        {items.map(({ product, quantity }) => (
          <div key={product.id} className="flex items-center gap-4 py-4 border-b">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => updateQuantity(product.id, quantity - 1)}
                  className="px-2 py-1 bg-gray-100 rounded"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => updateQuantity(product.id, quantity + 1)}
                  className="px-2 py-1 bg-gray-100 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(product.id)}
                  className="ml-auto text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>${total().toFixed(2)}</span>
        </div>
        <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
          Proceder al Pago
        </button>
      </div>
    </div>
  );
};