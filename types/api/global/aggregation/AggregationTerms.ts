import { Sort } from "../query/Sort";

export interface AggregationTerms {
  name: string;
  type: "terms";
  field: string;
  limit?: number;
  sort?: Array<Sort>;
}
