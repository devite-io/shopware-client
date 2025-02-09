import { Sort } from "../query/Sort";
import { Aggregation } from "#types/api/global";

export interface AggregationTerms {
  name: string;
  type: "terms";
  field: string;
  limit?: number;
  sort?: Array<Sort>;
  aggregation?: Aggregation;
}
