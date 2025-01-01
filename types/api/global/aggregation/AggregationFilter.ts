import { Filters } from "../filter/Filters";

export interface AggregationFilter {
  name: string;
  type: "filter";
  filter: Array<Filters>;
}
