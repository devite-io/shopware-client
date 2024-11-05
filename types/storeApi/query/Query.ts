import { EqualsFilter, MultiNotFilter, RangeFilter, SimpleFilter } from "../filter";

export type Query = {
  score: number;
  query: SimpleFilter | EqualsFilter | MultiNotFilter | RangeFilter;
};
