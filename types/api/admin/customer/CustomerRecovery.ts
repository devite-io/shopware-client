import { Customer } from "./Customer";

export interface CustomerRecovery {
  id: string;
  hash: string;
  customerId: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  customer?: Customer;
}
