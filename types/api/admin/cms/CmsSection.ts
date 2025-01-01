import { CmsSection as StoreApiCmsSection } from "#types/api/store/cms/CmsSection";
import { CmsPage } from "./CmsPage";
import { Media } from "../media/Media";
import { CmsBlock } from "./CmsBlock";

export type CmsSection = StoreApiCmsSection & {
  id: string;
  versionId: string;
  page?: CmsPage;
  backgroundMedia?: Media;
  blocks?: Array<CmsBlock>;
};
