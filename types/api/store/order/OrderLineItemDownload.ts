import { GenericRecord } from "#types/api/global/GenericRecord";
import { OrderLineItem } from "./OrderLineItem";
import { Media } from "../media/Media";

export interface OrderLineItemDownload {
  id: string;
  versionId?: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  position: number;
  orderLineItemId: string;
  orderLineItemVersionId?: string;
  orderLineItem?: OrderLineItem;
  mediaId: string;
  media?: Media;
  customFields?: GenericRecord;
}
