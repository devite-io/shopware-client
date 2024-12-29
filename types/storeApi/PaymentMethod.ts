import { GenericRecord } from "./GenericRecord";
import { Media } from "#types/storeApi/media/Media";

export type PaymentMethod = {
  id: string;
  name: string;
  readonly distinguishableName?: string;
  description?: string;
  position?: number;
  active?: boolean;
  afterOrderEnabled?: boolean;
  customFields?: GenericRecord;
  mediaId?: string;
  readonly synchronous?: boolean;
  readonly asynchronous?: boolean;
  readonly prepared?: boolean;
  readonly refundable?: boolean;
  readonly recurring?: boolean;
  shortName?: string;
  technicalName?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  media?: Media;
};
