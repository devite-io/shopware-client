import { CmsPage as StoreApiCmsPage } from "#types/api/store/cms/CmsPage";
import { CmsSection } from "./CmsSection";
import { Media } from "../media/Media";
import { LandingPage } from "./landingPage/LandingPage";
import { SalesChannel } from "../salesChannel/SalesChannel";
import { Product } from "../product/Product";

export type CmsPage = StoreApiCmsPage & {
  locked?: boolean;
  sections?: Array<CmsSection>;
  previewMedia?: Media;
  landingPages?: Array<LandingPage>;
  homeSalesChannels?: Array<SalesChannel>;
  products?: Array<Product>;
};
