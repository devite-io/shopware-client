import { Theme } from "./Theme";
import { SalesChannel } from "../salesChannel/SalesChannel";

export interface ThemeSalesChannel {
  id?: string;
  salesChannelId: string;
  themeId: string;
  theme?: Theme;
  salesChannel?: SalesChannel;
}
