import { GenericRecord } from "#types/api/global/GenericRecord";

export interface SalesChannelType {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  name: string;
  description?: string;
  descriptionLong?: string;
  iconName?: string;
  coverUrl?: string;
  screenshotUrls?: Array<string>;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
}
