import { GenericRecord } from "#types/api/global/GenericRecord";
import { ShopwareDocumentType } from "./ShopwareDocumentType";
import { Order } from "../order/Order";
import { Media } from "../media/Media";

export interface ShopwareDocument {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  orderId: string;
  orderVersionId?: string;
  order?: Order;
  sent?: boolean;
  deepLinkCode: string;
  fileType: string;
  documentNumber?: string;
  documentTypeId: string;
  documentType?: ShopwareDocumentType;
  referenceDocumentId?: string;
  referencedDocument?: ShopwareDocument;
  dependantDocuments?: Array<ShopwareDocument>;
  documentMediaFileId?: string;
  documentMediaFile?: Media;
  documentA11yMediaFileId?: string;
  documentA11yMediaFile?: Media;
  customFields?: GenericRecord;
}
