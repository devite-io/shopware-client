import { BackgroundMediaMode } from "./BackgroundMediaMode";
import { Visibility } from "./Visibility";
import { GenericRecord } from "#types/api/global/GenericRecord";
import { Media } from "../media/Media";
import { CmsSlot } from "./CmsSlot";

export interface CmsBlock {
  apiAlias: "cms_block";
  id?: string;
  versionId?: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  type: "image" | "text" | "product-listing" | "image-two-column";
  position: number;
  name?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginTop?: string;
  backgroundColor?: string;
  backgroundMediaId?: string;
  backgroundMedia?: Media;
  backgroundMediaMode?: BackgroundMediaMode;
  visibility?: Visibility;
  cssClass?: string;
  sectionId: string;
  cmsSectionVersionId?: string;
  sectionPosition?: "main" | "sidebar";
  slots?: Array<CmsSlot>;
  customFields?: GenericRecord;
}
