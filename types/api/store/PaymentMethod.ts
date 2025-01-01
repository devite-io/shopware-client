import { GenericRecord } from "#types/api/global/GenericRecord";
import { Media } from "./media/Media";

export interface PaymentMethod {
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
}
