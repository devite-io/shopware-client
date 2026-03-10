import { Category as StoreApiCategory } from "#types/api/store/category/Category";
import { Media } from "../media/Media";
import { CmsPage } from "../cms/CmsPage";
import { SeoUrl } from "../seo/SeoUrl";

export type Category = Omit<StoreApiCategory, "children" | "seoUrls" | "cmsPage" | "media"> & {
  children?: Array<Category>;
  seoUrls?: Array<SeoUrl>;
  cmsPage?: CmsPage;
  media?: Media;
};
