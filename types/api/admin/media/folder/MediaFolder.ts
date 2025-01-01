import { GenericRecord } from "#types/api/global/GenericRecord";
import { Media } from "../Media";
import { MediaDefaultFolder } from "./MediaDefaultFolder";
import { MediaFolderConfiguration } from "./configuration/MediaFolderConfiguration";

export interface MediaFolder {
  id: string;
  userParentConfiguration?: boolean;
  configurationId: string;
  defaultFolderId?: string;
  parentId?: string;
  readonly childCount: number;
  readonly path?: string;
  name: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  parent?: MediaFolder;
  children?: Array<MediaFolder>;
  media?: Array<Media>;
  defaultFolder?: MediaDefaultFolder;
  configuration?: MediaFolderConfiguration;
}
