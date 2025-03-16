import { CustomerAddressBody } from "./CustomerAddressBody";

export type CustomerAddress = CustomerAddressBody & {
  id?: string;
  customerId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
};
