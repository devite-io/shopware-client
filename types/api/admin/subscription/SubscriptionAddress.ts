import { CustomerAddressBody } from "#types/api/store/customer/address/CustomerAddressBody";

export type SubscriptionAddress = CustomerAddressBody & {
  id?: string;
  subscriptionId?: string;
  vatId?: string;
};
