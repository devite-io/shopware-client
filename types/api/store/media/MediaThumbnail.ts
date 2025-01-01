import { GenericRecord } from "#types/api/global/GenericRecord";

export interface MediaThumbnail {
  id: string;
  mediaId: string;
  readonly width: number;
  readonly height: number;
  url: string;
  path?: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
}
