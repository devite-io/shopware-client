import { Filters } from "./Filters";

export type MultiNotFilter = {
  type: "multi" | "not";
  operator: "AND" | "and" | "OR" | "or";
  queries: Filters;
};
