import { Filters } from "../filter/Filters";
import { Query } from "./Query";
import { Sort } from "./Sort";
import { Aggregation } from "../aggregation/Aggregation";
import { TotalCountMode } from "./TotalCountMode";
import { Includes } from "./Includes";

export interface Criteria {
  page?: number;
  term?: string;
  limit?: number;
  filter?: Filters;
  ids?: Array<string>;
  query?: Array<Query>;
  associations?: Array<Criteria>;
  "post-filter"?: Filters;
  sort?: Array<Sort>;
  aggregations?: Aggregation;
  fields?: Array<string>;
  grouping?: Array<string>;
  /** @default "none" */
  "total-count-mode"?: TotalCountMode;
  includes?: Includes;
}
