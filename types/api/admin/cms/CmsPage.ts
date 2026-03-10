import { CmsPage as StoreApiCmsPage } from "#types/api/store/cms/CmsPage";
import { CmsSection } from "./CmsSection";
import { Media } from "../media/Media";
import { LandingPage } from "./landingPage/LandingPage";
import { Product } from "../product/Product";
import { SeoUrl } from "../seo/SeoUrl";
import { Tag } from "../Tag";

export type CmsPage = Omit<
  StoreApiCmsPage,
  "previewMedia" | "landingPages" | "sections" | "seoUrls" | "tags"
> & {
  locked?: boolean;
  previewMedia?: Media;
  products?: Array<Product>;
  landingPages?: Array<LandingPage>;
  sections?: Array<CmsSection>;
  seoUrls?: Array<SeoUrl>;
  tags?: Array<Tag>;
};
