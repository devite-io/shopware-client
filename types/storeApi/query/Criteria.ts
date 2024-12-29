import { TotalCountMode } from "../TotalCountMode";
import { Filters } from "#types/storeApi/filter/Filters";
import { Query } from "#types/storeApi/query/Query";
import { Sort } from "#types/storeApi/query/Sort";
import { Aggregations } from "#types/storeApi/aggregation/Aggregations";
import { Include } from "#types/storeApi/query/Include";

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
