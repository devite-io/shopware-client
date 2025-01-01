import { GenericRecord } from "#types/api/global/GenericRecord";
import { ShopwareDocumentType } from "./ShopwareDocumentType";
import { Order } from "../order/Order";
import { Media } from "../media/Media";

export interface ShopwareDocument {
  id: string;
  documentTypeId: string;
  fileType: string;
  referenceDocumentId?: string;
  orderId: string;
  documentMediaFileId?: string;
  orderVersionId?: string;
  config: { name: string; title: string };
  sent?: boolean;
  static?: boolean;
  deepLinkCode: string;
  documentNumber?: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  documentType?: ShopwareDocumentType;
  order?: Order;
  referencedDocument?: ShopwareDocument;
  dependantDocuments?: Array<ShopwareDocument>;
  documentMediaFile?: Media;
}
