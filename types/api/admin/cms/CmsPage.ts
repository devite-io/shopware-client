import { CmsPage as StoreApiCmsPage } from "#types/api/store/cms/CmsPage";
import { CmsSection } from "./CmsSection";
import { Media } from "../media/Media";
import { LandingPage } from "./landingPage/LandingPage";
import { Product } from "../product/Product";

export type CmsPage = StoreApiCmsPage & {
  locked?: boolean;
  previewMedia?: Media;
  products?: Array<Product>;
  landingPages?: Array<LandingPage>;
  sections?: Array<CmsSection>;
};
