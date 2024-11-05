import { GenericRecord } from "../GenericRecord";
import { OrderLineItem } from ".";
import { Media } from "../media";

export type OrderLineItemDownload = {
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
};
