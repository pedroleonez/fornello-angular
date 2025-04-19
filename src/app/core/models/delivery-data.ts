import { Order } from "./order";

export interface DeliveryData {
  id: number;
  order: Order;
  receiverName: string;
  address: string;
  number: string;
  complement: string;
  district: string;
  zipCode: string;
  city: string;
  state: string;
  phoneNumber: string;
}
