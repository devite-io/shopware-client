import { Category as StoreApiCategory } from "#types/api/store/category/Category";
import { Media } from "../media/Media";
import { CmsPage } from "../cms/CmsPage";
import { SeoUrlEntity } from "#types/api/store";

export type Category = StoreApiCategory & {
  parent?: Category;
  children?: Array<Category>;
  seoUrls?: Array<SeoUrlEntity>;
  cmsPage?: CmsPage;
  media?: Media;
  translated?: Record<string, string>;
};
