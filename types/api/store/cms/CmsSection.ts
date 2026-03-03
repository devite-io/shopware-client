import { BackgroundMediaMode } from "./BackgroundMediaMode";
import { Visibility } from "./Visibility";
import { GenericRecord } from "#types/api/global/GenericRecord";
import { CmsPage } from "./CmsPage";
import { Media } from "../media/Media";
import { CmsBlock } from "./CmsBlock";

export interface CmsSection {
  apiAlias: "cms_section";
  id: string;
  versionId: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  position: number;
  type: "sidebar" | "fullwidth";
  name?: string;
  sizingMode?: "boxed" | "full_width";
  mobileBehavior?: string;
  visibility?: Visibility;
  backgroundColor?: string;
  backgroundMediaId?: string;
  backgroundMediaMode?: BackgroundMediaMode;
  backgroundMedia?: Media;
  cssClass?: string;
  pageId: string;
  cmsPageVersionId?: string;
  page?: CmsPage;
  blocks?: Array<CmsBlock>;
  customFields?: GenericRecord;
}
