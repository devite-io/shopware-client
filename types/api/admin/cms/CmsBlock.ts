import { CmsSection } from "./CmsSection";
import { Media } from "../media/Media";
import { CmsSlot } from "./CmsSlot";

export interface CmsBlock {
  id: string;
  locked?: boolean;
  section?: CmsSection;
  backgroundMedia?: Media;
  slots?: Array<CmsSlot>;
}
