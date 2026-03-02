import { CustomerAddressBody } from "../customer/address/CustomerAddressBody";

export type OrderAddress = CustomerAddressBody & {
  id: string;
  versionId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  vatId?: string;
};
