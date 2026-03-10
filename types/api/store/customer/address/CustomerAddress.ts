import { CustomerAddressBody } from "./CustomerAddressBody";

export type CustomerAddress = CustomerAddressBody & {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  customerId: string;
};
