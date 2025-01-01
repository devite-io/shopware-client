import { GenericRecord } from "#types/api/global/GenericRecord";
import { OrderLineItem } from "./OrderLineItem";
import { Media } from "../media/Media";

export interface OrderLineItemDownload {
  id: string;
  versionId?: string;
  orderLineItemId: string;
  orderLineItemVersionId?: string;
  mediaId: string;
  position: number;
  accessGranted: boolean;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  orderLineItem?: OrderLineItem;
  media?: Media;
}
