import { GenericRecord } from "../GenericRecord";
import { CmsSection } from "#types/storeApi/cms/CmsSection";
import { Media } from "#types/storeApi/media/Media";
import { LandingPage } from "#types/storeApi/cms/LandingPage";

export type CmsPage = {
  apiAlias: "cms_page";
  id: string;
  versionId?: string;
  name?: string;
  type: "landingpage" | "page" | "product_list" | "product_detail";
  entity?: string;
  cssClass?: string;
  config?: { backgroundColor?: string };
  previewMediaId?: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  sections?: Array<CmsSection>;
  previewMedia?: Media;
  landingPages?: Array<LandingPage>;
};
