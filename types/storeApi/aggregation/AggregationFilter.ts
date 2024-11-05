import { Filters } from "../filter";

export type AggregationFilter = {
  name: string;
  type: "filter";
  filter: Array<Filters>;
};
