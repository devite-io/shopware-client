import { GenericRecord } from "#types/api/global/GenericRecord";

export interface ProductReview {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  status?: boolean;
  points?: number;
  title: string;
  content: string;
  comment?: string;
  productId: string;
  productIdVersionId?: string;
  customFields?: GenericRecord;
}
