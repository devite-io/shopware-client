import { GenericRecord } from "#types/api/global/GenericRecord";
import { Tag } from "../Tag";
import { Salutation } from "../Salutation";
import { Language } from "../locale/Language";
import { SalesChannel } from "../salesChannel/SalesChannel";

export interface NewsletterRecipient {
  id: string;
  email: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  zipCode?: string;
  city?: string;
  street?: string;
  status: string;
  hash: string;
  customFields?: GenericRecord;
  confirmedAt?: string;
  salutationId?: string;
  languageId: string;
  salesChannelId: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  tags?: Array<Tag>;
  salutation?: Salutation;
  language?: Language;
  salesChannel?: SalesChannel;
}
