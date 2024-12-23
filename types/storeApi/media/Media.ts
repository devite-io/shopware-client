import { GenericRecord } from "../GenericRecord";
import { MediaThumbnail } from ".";

export type Media = {
  apiAlias: "media";
  id: string;
  readonly mimeType?: string;
  readonly fileExtension: string;
  readonly uploadedAt?: string;
  readonly fileName: string;
  readonly fileSize?: number;
  readonly metaData?: object;
  config?: object;
  alt?: string;
  title?: string;
  url: string;
  path: string;
  hasFile: boolean;
  private: boolean;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated: object;
  thumbnails?: Array<MediaThumbnail>;
  extensions?: any;
};
