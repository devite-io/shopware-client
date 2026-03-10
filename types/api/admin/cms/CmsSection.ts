import { CmsSection as StoreApiCmsSection } from "#types/api/store/cms/CmsSection";
import { CmsPage } from "./CmsPage";
import { Media } from "../media/Media";
import { CmsBlock } from "./CmsBlock";

export type CmsSection = Omit<StoreApiCmsSection, "backgroundMedia" | "page" | "blocks"> & {
  backgroundMedia?: Media;
  page?: CmsPage;
  blocks?: Array<CmsBlock>;
};
