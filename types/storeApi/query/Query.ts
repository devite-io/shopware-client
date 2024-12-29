import { MultiNotFilter } from "#types/storeApi/filter/MultiNotFilter";
import { SimpleFilter } from "#types/storeApi/filter/SimpleFilter";
import { EqualsFilter } from "#types/storeApi/filter/EqualsFilter";
import { RangeFilter } from "#types/storeApi/filter/RangeFilter";

export type Query = {
  score: number;
  query: SimpleFilter | EqualsFilter | MultiNotFilter | RangeFilter;
};
