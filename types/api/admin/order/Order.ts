import { Order as StoreApiOrder } from "#types/api/store/order/Order";
import { Rounding } from "#types/api/global/Rounding";
import { StateMachineState } from "../stateMachine/StateMachineState";
import { OrderCustomer } from "./OrderCustomer";
import { Currency } from "../currency/Currency";
import { Language } from "../locale/Language";
import { OrderAddress } from "./OrderAddress";
import { OrderDelivery } from "./delivery/OrderDelivery";
import { OrderLineItem } from "./lineItem/OrderLineItem";
import { OrderTransaction } from "./transaction/OrderTransaction";
import { ShopwareDocument } from "../document/ShopwareDocument";
import { Tag } from "../Tag";
import { User } from "../user/User";

export type Order = Omit<
  StoreApiOrder,
  | "currency"
  | "lineItems"
  | "stateMachineState"
  | "addresses"
  | "billingAddress"
  | "orderCustomer"
  | "deliveries"
  | "transactions"
  | "documents"
  | "language"
  | "tags"
> & {
  readonly createdAt: string;
  createdBy?: User;
  readonly updatedAt?: string;
  updatedBy?: User;
  internalComment?: string;
  itemRounding: Rounding;
  totalRounding: Rounding;
  currency?: Currency;
  lineItems?: Array<OrderLineItem>;
  stateMachineState?: StateMachineState;
  addresses?: Array<OrderAddress>;
  billingAddress?: OrderAddress;
  orderCustomer?: OrderCustomer;
  deliveries?: Array<OrderDelivery>;
  transactions?: Array<OrderTransaction>;
  documents?: Array<ShopwareDocument>;
  language?: Language;
  tags?: Array<Tag>;
};
