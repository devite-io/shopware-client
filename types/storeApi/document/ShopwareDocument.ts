import { GenericRecord } from "../GenericRecord";
import { ShopwareDocumentType } from ".";
import { Order } from "../order";
import { Media } from "../media";

export type ShopwareDocument = {
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
};
