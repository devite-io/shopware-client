import { BackgroundMediaMode, CmsBlock, CmsPage, Visibility } from ".";
import { GenericRecord } from "../GenericRecord";
import { Media } from "../media";

export type CmsSection = {
  apiAlias: "cms_section";
  id?: string;
  position: number;
  type: "sidebar" | "fullwidth";
  name?: string;
  sizingMode?: "boxed" | "full_width";
  mobileBehavior?: string;
  backgroundColor?: string;
  backgroundMediaId?: string;
  backgroundMediaMode?: BackgroundMediaMode;
  cssClass?: string;
  pageId: string;
  visibility?: Visibility;
  customFields?: GenericRecord;
  cmsPageVersionId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  page?: CmsPage;
  backgroundMedia?: Media;
  blocks?: Array<CmsBlock>;
};
