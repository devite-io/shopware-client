import { GenericRecord } from "#types/api/global/GenericRecord";

export interface LineItemPayload {
  categoryIds: Array<string>;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  customFields?: GenericRecord;
  features?: Array<string>;
  isCloseout?: boolean;
  isNew?: boolean;
  manufacturerId?: string;
  markAsTopseller?: boolean;
  optionIds?: Array<string>;
  options?: Array<{ group: string; name: string }>;
  parentId?: string;
  productNumber?: string;
  propertyIds?: Array<string>;
  releaseDate?: string;
  stock?: number;
  streamIds?: Array<string>;
  tagsIds?: Array<string>;
  taxId: string;
  [key: string]: any;
}
