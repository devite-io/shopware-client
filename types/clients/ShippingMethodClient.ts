import { Criteria, EntitySearchResult, ShippingMethod } from "../storeApi";

export type ShippingMethodListRequest = Criteria;
export type ShippingMethodListResponse = EntitySearchResult & { elements?: Array<ShippingMethod> };
