import { GenericRecord } from "#types/api/global/GenericRecord";
import { CmsBlock } from "./CmsBlock";

export interface CmsSlot {
  id: string;
  versionId?: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
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
  readonly data?: object;
  config?: object;
  fieldConfig?: object;
  blockId: string;
  cmsBlockVersionId?: string;
  block?: CmsBlock;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
}
