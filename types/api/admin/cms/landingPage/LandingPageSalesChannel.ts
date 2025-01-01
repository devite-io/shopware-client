import { LandingPage } from "./LandingPage";
import { SalesChannel } from "../../salesChannel/SalesChannel";

export interface LandingPageSalesChannel {
  id?: string;
  landingPageId: string;
  landingPageVersionId?: string;
  salesChannelId: string;
  landingPage?: LandingPage;
  salesChannel?: SalesChannel;
}
