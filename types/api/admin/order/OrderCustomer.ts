import { OrderCustomer as StoreApiOrderCustomer } from "#types/api/store/order/OrderCustomer";
import { Order } from "./Order";
import { Customer } from "../customer/Customer";
import { Salutation } from "../Salutation";

export type OrderCustomer = StoreApiOrderCustomer & {
  customerId?: string;
  orderId: string;
  orderVersionId?: string;
  remoteAddress?: string;
  order?: Order;
  customer?: Customer;
  salutation: Salutation;
};
