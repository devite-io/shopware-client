import { GenericRecord } from "#types/api/global/GenericRecord";
import { CustomerWishlistProduct } from "./CustomerWishlistProduct";
import { Customer } from "../Customer";
import { SalesChannel } from "../../salesChannel/SalesChannel";

export interface CustomerWishlist {
  id: string;
  customerId: string;
  salesChannelId: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  products?: Array<CustomerWishlistProduct>;
  customer?: Customer;
  salesChannel?: SalesChannel;
}
