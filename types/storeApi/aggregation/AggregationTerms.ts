import { Sort } from "../query";

export type AggregationTerms = {
  name: string;
  type: "terms";
  field: string;
  limit?: number;
  sort?: Array<Sort>;
};
