export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  ecoFeatures: string[];
  materials: string[];
  stock: number;
}