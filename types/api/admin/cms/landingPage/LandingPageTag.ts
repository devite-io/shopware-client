import { LandingPage } from "./LandingPage";
import { Tag } from "../../Tag";

export interface LandingPageTag {
  id?: string;
  landingPageId: string;
  landingPageVersionId?: string;
  tagId: string;
  landingPage?: LandingPage;
  tag?: Tag;
}
