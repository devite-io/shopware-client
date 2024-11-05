import { Filters } from "../filter";
import { Include, Query, Sort } from ".";
import { Aggregations } from "../aggregation";
import { TotalCountMode } from "../TotalCountMode";

export type Criteria = {
  page?: number;
  term?: string;
  limit?: number;
  filter?: Filters;
  ids?: Array<string>;
  query?: Array<Query>;
  associations?: Array<Criteria>;
  "post-filter"?: Filters;
  sort?: Array<Sort>;
  aggregations?: Aggregations;
  fields?: Array<string>;
  grouping?: Array<string>;
  "total-count-mode"?: TotalCountMode;
  includes?: Include;
};
