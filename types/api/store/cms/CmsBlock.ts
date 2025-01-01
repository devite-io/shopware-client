import { BackgroundMediaMode } from "./BackgroundMediaMode";
import { Visibility } from "./Visibility";
import { GenericRecord } from "#types/api/global/GenericRecord";
import { Media } from "../media/Media";
import { CmsSlot } from "./CmsSlot";

export interface CmsBlock {
  apiAlias: "cms_block";
  id?: string;
  position: number;
  type: "image" | "text" | "product-listing" | "image-two-column";
  name?: string;
  sectionPosition?: "main" | "sidebar";
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  backgroundColor?: string;
  backgroundMediaId?: string;
  backgroundMediaMode?: BackgroundMediaMode;
  cssClass?: string;
  visibility?: Visibility;
  sectionId: string;
  customFields?: GenericRecord;
  versionId?: string;
  cmsSectionVersionId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  backgroundMedia?: Media;
  slots?: Array<CmsSlot>;
}
