import { SimpleFilter } from "./SimpleFilter";
import { EqualsFilter } from "./EqualsFilter";
import { MultiNotFilter } from "./MultiNotFilter";
import { RangeFilter } from "./RangeFilter";

export type Filters = Array<SimpleFilter | EqualsFilter | MultiNotFilter | RangeFilter>;
