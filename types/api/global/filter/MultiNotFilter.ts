import { Filters } from "./Filters";

export interface MultiNotFilter {
  type: "multi" | "not";
  operator: "AND" | "and" | "OR" | "or";
  queries: Filters;
}
