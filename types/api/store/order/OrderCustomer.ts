import { GenericRecord } from "#types/api/global/GenericRecord";
import { Salutation } from "../Salutation";

export interface OrderCustomer {
  id: string;
  versionId?: string;
  email: string;
  salutationId?: string;
  firstName: string;
  lastName: string;
  company?: string;
  title?: string;
  vatIds?: Array<string>;
  customerNumber?: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  salutation?: Salutation;
}
