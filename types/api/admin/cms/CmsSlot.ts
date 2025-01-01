import { CmsSlot as StoreApiCmsSlot } from "#types/api/store/cms/CmsSlot";
import { CmsBlock } from "./CmsBlock";

export type CmsSlot = StoreApiCmsSlot & {
  block?: CmsBlock;
};
