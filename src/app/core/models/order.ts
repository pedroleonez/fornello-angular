import { PaymentMethod } from "./enums/payment-method";
import { Status } from "./enums/status";
import { DeliveryData } from "./delivery-data";
import { OrderItem } from "./order-item";
import { User } from "./user";

export interface Order {
  id: number;
  user: User;
  orderItems: OrderItem[];
  status: Status;
  paymentMethod: PaymentMethod;
  amount: number;
  deliveryData: DeliveryData;
  createdDate: string;
}
