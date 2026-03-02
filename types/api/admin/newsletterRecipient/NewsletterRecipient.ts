import { GenericRecord } from "#types/api/global/GenericRecord";
import { Tag } from "../Tag";
import { Salutation } from "../Salutation";

export interface NewsletterRecipient {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly confirmedAt?: string;
  status: string;
  email: string;
  salutationId?: string;
  salutation?: Salutation;
  title?: string;
  firstName?: string;
  lastName?: string;
  street?: string;
  zipCode?: string;
  city?: string;
  tags?: Array<Tag>;
  customFields?: GenericRecord;
}
