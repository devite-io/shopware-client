import { Sort } from "#types/storeApi/query/Sort";

export type AggregationTerms = {
  name: string;
  type: "terms";
  field: string;
  limit?: number;
  sort?: Array<Sort>;
};
