import { GenericRecord } from "#types/api/global/GenericRecord";
import { SalesChannel } from "../salesChannel/SalesChannel";

export interface SeoUrlTemplate {
  id: string;
  salesChannelId?: string;
  entityName: string;
  routeName: string;
  template?: string;
  isValid?: boolean;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  salesChannel?: SalesChannel;
}
