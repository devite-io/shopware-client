import { GenericRecord } from "#types/api/global/GenericRecord";
import { SalesChannel } from "./SalesChannel";

export interface SalesChannelType {
  id: string;
  coverUrl?: string;
  iconName?: string;
  screenshotUrls?: Array<string>;
  name: string;
  manufacturer?: string;
  description?: string;
  descriptionLong?: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  salesChannels: Array<SalesChannel>;
}
