import { Category } from "./enums/category";
import { ProductVariation } from "./product-variation";

export interface Product {
  id: number;
  name: string;
  description: string;
  category: Category;
  productVariations: ProductVariation[];
  available: boolean;
}
