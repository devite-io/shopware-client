import { LandingPage as StoreApiLandingPage } from "#types/api/store/cms/LandingPage";
import { LandingPageTag } from "./LandingPageTag";
import { CmsPage } from "../CmsPage";
import { SalesChannel } from "../../salesChannel/SalesChannel";

export type LandingPage = StoreApiLandingPage & {
  tags?: Array<LandingPageTag>;
  cmsPage?: CmsPage;
  salesChannels?: Array<SalesChannel>;
};
