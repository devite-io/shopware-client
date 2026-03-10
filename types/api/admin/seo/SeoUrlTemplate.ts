import { GenericRecord } from "#types/api/global/GenericRecord";
import { SalesChannel } from "../salesChannel/SalesChannel";

export interface SeoUrlTemplate {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  isValid?: boolean;
  entityName: string;
  routeName: string;
  template?: string;
  salesChannelId?: string;
  salesChannel?: SalesChannel;
  customFields?: GenericRecord;
}
