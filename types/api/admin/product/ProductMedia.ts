import { GenericRecord } from "#types/api/global/GenericRecord";
import { Media } from "../media/Media";

export interface ProductMedia {
  id: string;
  versionId?: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  mediaId: string;
  media?: Media;
  position?: number;
  customFields?: GenericRecord;
}
