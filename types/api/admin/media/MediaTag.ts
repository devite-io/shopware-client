import { Media } from "./Media";
import { Tag } from "../Tag";

export interface MediaTag {
  id?: string;
  mediaId: string;
  tagId: string;
  media?: Media;
  tag?: Tag;
}
