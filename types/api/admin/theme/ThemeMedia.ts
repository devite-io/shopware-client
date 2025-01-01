import { Theme } from "./Theme";
import { Media } from "../media/Media";

export interface ThemeMedia {
  id?: string;
  themeId: string;
  mediaId: string;
  theme?: Theme;
  media?: Media;
}
