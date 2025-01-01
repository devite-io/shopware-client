import { SimpleFilter } from "../filter/SimpleFilter";
import { EqualsFilter } from "../filter/EqualsFilter";
import { MultiNotFilter } from "../filter/MultiNotFilter";
import { RangeFilter } from "../filter/RangeFilter";

export interface Query {
  score: number;
  query: SimpleFilter | EqualsFilter | MultiNotFilter | RangeFilter;
}
