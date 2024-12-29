import { GenericRecord } from "../GenericRecord";
import { CmsBlock } from "./CmsBlock";

export type CmsSlot = {
  id: string;
  versionId?: string;
  type:
    | "image"
    | "text"
    | "form"
    | "product-listing"
    | "category-navigation"
    | "product-box"
    | "buy-box"
    | "sidebar-filter";
  slot: string;
  locked?: boolean;
  config?: object;
  customFields?: GenericRecord;
  readonly data?: object;
  blockId: string;
  fieldConfig?: object;
  cmsBlockVersionId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  block?: CmsBlock;
  VersionId?: string;
};
