import { GenericRecord } from "#types/api/global/GenericRecord";
import { Salutation } from "../Salutation";

export interface OrderCustomer {
  id: string;
  versionId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  customerNumber?: string;
  email: string;
  salutationId?: string;
  salutation?: Salutation;
  title?: string;
  firstName: string;
  lastName: string;
  company?: string;
  vatIds?: Array<string>;
  customFields?: GenericRecord;
}
