import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Eco-Friendly All-Purpose Cleaner',
    description: 'Biodegradable cleaning solution made with natural ingredients. Effective and safe for the environment.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=500',
    category: 'Limpieza',
    ecoFeatures: ['Biodegradable', 'Ingredientes Naturales', 'Envase Reciclable'],
    materials: ['Ingredientes Botánicos', 'Envase de PET Reciclado'],
    stock: 50
  },
  {
    id: '2',
    name: 'Set de Contenedores Reutilizables',
    description: 'Contenedores durables hechos de plástico reciclado. Perfectos para almacenamiento de alimentos.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&q=80&w=500',
    category: 'Hogar',
    ecoFeatures: ['Reutilizable', 'Libre de BPA', 'Plástico Reciclado'],
    materials: ['Plástico Reciclado Post-consumo'],
    stock: 30
  }
];