import { Filters } from ".";

export type MultiNotFilter = {
  type: "multi" | "not";
  operator: "AND" | "and" | "OR" | "or";
  queries: Filters;
};
