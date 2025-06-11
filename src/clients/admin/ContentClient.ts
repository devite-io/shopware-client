import Client from "../Client";
import { CmsBlock } from "#types/api/admin/cms/CmsBlock";
import { CmsPage } from "#types/api/admin/cms/CmsPage";
import { CmsSection } from "#types/api/admin/cms/CmsSection";
import { CmsSlot } from "#types/api/admin/cms/CmsSlot";
import { LandingPage } from "#types/api/admin/cms/LandingPage";
import { Theme } from "#types/api/admin/theme/Theme";
import createRestEndpoint from "../../utils/createRestEndpoint";

class ContentClient extends Client {
  public cmsBlocks = createRestEndpoint<CmsBlock>(this, "cms-block", "cms block");
  public cmsPages = createRestEndpoint<CmsPage>(this, "cms-page", "cms page");
  public cmsSections = createRestEndpoint<CmsSection>(this, "cms-section", "cms section");
  public cmsSlots = createRestEndpoint<CmsSlot>(this, "cms-slot", "cms slot");
  public landingPages = createRestEndpoint<LandingPage>(this, "landing-page", "landing page");
  public themes = createRestEndpoint<Theme>(this, "theme", "theme");
}
export default ContentClient;
