import { OrderCustomer as StoreApiOrderCustomer } from "#types/api/store/order/OrderCustomer";
import { Customer } from "../customer/Customer";
import { Salutation } from "../Salutation";

export type OrderCustomer = Omit<StoreApiOrderCustomer, "salutation"> & {
  remoteAddress?: string;
  salutation: Salutation;
  customerId?: string;
  customer?: Customer;
};
