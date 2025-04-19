import { ProductVariation } from "./product-variation";

export interface OrderItem {
  id: number;
  productVariation: ProductVariation;
  quantity: number;
  orderId: number; // ou `order: Order` se precisar do objeto completo
}
