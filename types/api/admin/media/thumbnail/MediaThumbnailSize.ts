import { GenericRecord } from "#types/api/global/GenericRecord";
import { MediaFolderConfiguration } from "../folder/configuration/MediaFolderConfiguration";

export interface MediaThumbnailSize {
  id: string;
  width: number;
  height: number;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  mediaFolderConfiguration?: MediaFolderConfiguration;
}
