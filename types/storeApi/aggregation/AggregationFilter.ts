import { Filters } from "#types/storeApi/filter/Filters";

export type AggregationFilter = {
  name: string;
  type: "filter";
  filter: Array<Filters>;
};
