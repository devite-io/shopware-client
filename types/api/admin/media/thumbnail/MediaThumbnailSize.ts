import { GenericRecord } from "#types/api/global/GenericRecord";

export interface MediaThumbnailSize {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  width: number;
  height: number;
  customFields?: GenericRecord;
}
