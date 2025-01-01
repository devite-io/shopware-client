import { OrderAddress as StoreApiOrderAddress } from "#types/api/store/order/OrderAddress";
import { Country } from "../country/Country";
import { CountryState } from "../country/CountryState";
import { Order } from "./Order";
import { OrderDelivery } from "./delivery/OrderDelivery";
import { Salutation } from "../Salutation";

export type OrderAddress = StoreApiOrderAddress & {
  orderId?: string;
  orderVersionId?: string;
  country?: Country;
  countryState?: CountryState;
  order?: Order;
  orderDeliveries?: Array<OrderDelivery>;
  salutation: Salutation;
};
