import { CustomerAddressBody } from "#types/storeApi/customer/CustomerAddressBody";

export type OrderAddress = CustomerAddressBody & {
  id: string;
  versionId?: string;
  vatId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
};
