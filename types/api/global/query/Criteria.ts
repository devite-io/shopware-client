import { Filters } from "../filter/Filters";
import { Sort } from "./Sort";
import { Aggregation } from "../aggregation/Aggregation";
import { TotalCountMode } from "./TotalCountMode";

export interface Criteria {
  term?: string;
  /** @default "none" */
  "total-count-mode"?: TotalCountMode;
  page?: number;
  limit?: number;
  ids?: Array<string>;
  filter?: Filters;
  "post-filter"?: Filters;
  sort?: Array<Sort>;
  fields?: Array<string>;
  includes?: Record<string, Array<string>>;
  associations?: Record<string, Criteria>;
  aggregations?: Array<Aggregation>;
}
