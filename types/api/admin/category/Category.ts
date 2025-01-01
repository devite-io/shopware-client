import { Category as StoreApiCategory } from "#types/api/store/category/Category";
import { Media } from "../media/Media";
import { Tag } from "../Tag";
import { CmsPage } from "../cms/CmsPage";
import { SeoUrlEntity } from "#types/api/store";

export type Category = StoreApiCategory & {
  readonly autoIncrement?: number;
  slotConfig?: object;
  productStreamId?: string;
  translated?: object;
  parent?: Category;
  children?: Array<Category>;
  media?: Media;
  tags?: Array<Tag>;
  cmsPage?: CmsPage;
  seoUrls?: Array<SeoUrlEntity>;
};
