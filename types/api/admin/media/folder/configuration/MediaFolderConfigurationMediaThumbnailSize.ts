import { MediaFolderConfiguration } from "./MediaFolderConfiguration";
import { MediaThumbnailSize } from "../../thumbnail/MediaThumbnailSize";

export interface MediaFolderConfigurationMediaThumbnailSize {
  id?: string;
  mediaFolderConfigurationId: string;
  mediaThumbnailSizeId: string;
  mediaFolderConfiguration: MediaFolderConfiguration;
  mediaThumbnailSize: MediaThumbnailSize;
}
