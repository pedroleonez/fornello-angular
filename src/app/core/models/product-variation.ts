import { Product } from "./product";

export interface ProductVariation {
  id: number;
  sizeName: string;
  description: string;
  available: boolean;
  price: number;
  product: Product;
}
