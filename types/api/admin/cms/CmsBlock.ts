import { CmsSection } from "./CmsSection";
import { Media } from "../media/Media";
import { CmsSlot } from "./CmsSlot";

export interface CmsBlock {
  id: string;
  locked?: boolean;
  backgroundMedia?: Media;
  section?: CmsSection;
  slots?: Array<CmsSlot>;
}
