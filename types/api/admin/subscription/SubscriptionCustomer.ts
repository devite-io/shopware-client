import { GenericRecord } from "#types/api/global/GenericRecord";

export interface SubscriptionCustomer {
  id?: string;
  subscriptionId?: string;
  customerId?: string;
  salutationId?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  title?: string;
  customerNumber?: number;
  vatId?: string;
  customFields?: GenericRecord;
  remoteAddress?: string;
}
