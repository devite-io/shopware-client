import { Criteria } from "../Criteria";
import { Filters } from "../../filter/Filters";
import { SimpleFilter } from "../../filter/SimpleFilter";
import { Sort } from "../Sort";

export type ProductListingCriteria = Criteria & {
  order?: string;
  p?: number;
  limit?: number;
  "min-price"?: number;
  "max-price"?: number;
  "price-filter"?: boolean;
  "shipping-free"?: boolean;
} & {
  sort?: Array<Sort> | Sort;
  filter?: Filters | SimpleFilter;
  "post-filter"?: Filters | SimpleFilter;
};
