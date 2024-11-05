import { GenericRecord } from "../GenericRecord";

export type ProductReview = {
  id: string;
  productId: string;
  productIdVersionId?: string;
  salesChannelId: string;
  languageId: string;
  title: string;
  content: string;
  points: number;
  status?: boolean;
  comment?: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
};
