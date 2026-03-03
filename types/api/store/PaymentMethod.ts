import { GenericRecord } from "#types/api/global/GenericRecord";
import { Media } from "./media/Media";

export interface PaymentMethod {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  active?: boolean;
  name: string;
  description?: string;
  position?: number;
  afterOrderEnabled?: boolean;
  readonly synchronous?: boolean;
  readonly asynchronous?: boolean;
  readonly refundable?: boolean;
  shortName?: string;
  technicalName?: string;
  mediaId?: string;
  media?: Media;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
}
