import { GenericRecord } from "../GenericRecord";

export type MediaThumbnail = {
  id: string;
  mediaId: string;
  readonly width: number;
  readonly height: number;
  url: string;
  path?: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
};
