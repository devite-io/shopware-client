import { GenericRecord } from "../GenericRecord";
import { CmsSection, LandingPage } from "./";
import { Media } from "../media";

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
