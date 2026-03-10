import { GenericRecord } from "#types/api/global/GenericRecord";
import { MediaThumbnail } from "./MediaThumbnail";
import { Tag } from "../Tag";

export interface Media {
  apiAlias: "media";
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  readonly uploadedAt?: string;
  url: string;
  path: string;
  readonly fileName: string;
  readonly fileExtension: string;
  alt?: string;
  title?: string;
  readonly mimeType?: string;
  readonly metaData?: { width: number; height: number };
  readonly fileSize?: number;
  thumbnails?: Array<MediaThumbnail>;
  tags?: Array<Tag>;
  customFields?: GenericRecord;
  translated?: Record<string, string>;
}
