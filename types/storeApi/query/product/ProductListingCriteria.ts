import { Criteria } from "../Criteria";
import { Filters, SimpleFilter } from "../../filter";
import { Sort } from "../Sort";

export type ProductListingCriteria = Criteria & {
  order?: string;
  limit?: number;
  p?: number;
  manufacturer?: string;
  "min-price"?: number;
  "max-price"?: number;
  rating?: number;
  "shipping-free"?: boolean;
  properties?: string;
  "manufacturer-filter"?: boolean;
  "price-filter"?: boolean;
  "rating-filter"?: boolean;
  "shipping-free-filter"?: boolean;
  "property-filter"?: boolean;
  "property-whitelist"?: string;
  "reduce-aggregations"?: string | null;
} & {
  filter?: Filters | SimpleFilter;
  sort?: Array<Sort> | Sort;
  "post-filter"?: Filters | SimpleFilter;
};
