import { SalesChannel } from "../salesChannel/SalesChannel";
import { Media } from "../media/Media";

export interface Theme {
  id: string;
  technicalName?: string;
  name: string;
  author: string;
  description?: string;
  labels?: object;
  helpTexts?: object;
  customFields?: object;
  previewMediaId?: string;
  parentThemeId?: string;
  themeJson?: object;
  baseConfig?: object;
  configValues?: object;
  active: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  salesChannels?: Array<SalesChannel>;
  media?: Array<Media>;
  previewMedia?: Media;
  dependentThemes?: Array<Theme>;
}
