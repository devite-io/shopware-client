import { EqualsFilter, MultiNotFilter, RangeFilter, SimpleFilter } from ".";

export type Filters = Array<SimpleFilter | EqualsFilter | MultiNotFilter | RangeFilter>;
