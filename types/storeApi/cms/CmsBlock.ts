import { BackgroundMediaMode, CmsSlot, Visibility } from ".";
import { GenericRecord } from "../GenericRecord";
import { Media } from "../media";

export type CmsBlock = {
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
};
