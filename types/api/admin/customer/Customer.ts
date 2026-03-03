import { Customer as StoreApiCustomer } from "#types/api/store/customer/Customer";
import { CustomerGroup } from "./CustomerGroup";
import { SalesChannel } from "../salesChannel/SalesChannel";
import { Language } from "../locale/Language";
import { PaymentMethod } from "../paymentMethod/PaymentMethod";
import { CustomerAddress } from "./CustomerAddress";
import { Salutation } from "../Salutation";
import { Tag } from "../Tag";
import { ProductReview } from "../product/ProductReview";
import { User } from "../user/User";

export type Customer = Omit<
  StoreApiCustomer,
  | "group"
  | "lastPaymentMethod"
  | "salutation"
  | "addresses"
  | "defaultBillingAddress"
  | "activeBillingAddress"
  | "defaultShippingAddress"
  | "activeShippingAddress"
  | "productReviews"
> & {
  readonly autoIncrement?: number;
  createdById?: string;
  createdBy?: User;
  updatedById?: string;
  updatedBy?: User;
  firstLogin?: string;
  lastLogin?: string;
  remoteAddress?: string;
  group?: CustomerGroup;
  salesChannel?: SalesChannel;
  language?: Language;
  lastPaymentMethod?: PaymentMethod;
  tags?: Array<Tag>;
  salutation?: Salutation;
  addresses?: Array<CustomerAddress>;
  defaultBillingAddress?: CustomerAddress;
  activeBillingAddress?: CustomerAddress;
  defaultShippingAddress?: CustomerAddress;
  activeShippingAddress?: CustomerAddress;
  productReviews?: Array<ProductReview>;
};
