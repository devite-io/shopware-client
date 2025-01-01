import { GenericRecord } from "#types/api/global/GenericRecord";
import { MediaFolder } from "../MediaFolder";
import { MediaFolderConfigurationMediaThumbnailSize } from "./MediaFolderConfigurationMediaThumbnailSize";

export interface MediaFolderConfiguration {
  id: string;
  createThumbnails?: boolean;
  keepAspectRatio?: boolean;
  thumbnailQuality?: number;
  private?: boolean;
  noAssociation?: boolean;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  mediaFolders?: Array<MediaFolder>;
  mediaThumbnailSizes?: Array<MediaFolderConfigurationMediaThumbnailSize>;
}
