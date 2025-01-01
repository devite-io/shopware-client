import { CustomerGroup as StoreApiCustomerGroup } from "#types/api/store/customer/CustomerGroup";
import { Customer } from "../Customer";
import { SalesChannel } from "../../salesChannel/SalesChannel";

export type CustomerGroup = StoreApiCustomerGroup & {
  customers?: Array<Customer>;
  salesChannels?: Array<SalesChannel>;
  registrationSalesChannels?: Array<SalesChannel>;
};
