import { LandingPage as StoreApiLandingPage } from "#types/api/store/cms/LandingPage";
import { CmsPage } from "../CmsPage";

export type LandingPage = StoreApiLandingPage & {
  cmsPage?: CmsPage;
};
