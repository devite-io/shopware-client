import { GenericRecord } from "#types/api/global/GenericRecord";
import { Media } from "../media/Media";

export interface MediaThumbnail {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly width: number;
  readonly height: number;
  url: string;
  path?: string;
  mediaId: string;
  media?: Media;
  customFields?: GenericRecord;
}
