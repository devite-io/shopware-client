import { AggregationEntity } from "./AggregationEntity";
import { AggregationFilter } from "./AggregationFilter";
import { AggregationHistogram } from "./AggregationHistogram";
import { AggregationMetrics } from "./AggregationMetrics";
import { AggregationRange } from "./AggregationRange";
import { AggregationTerms } from "./AggregationTerms";

export type Aggregation = Array<
  | AggregationEntity
  | AggregationFilter
  | AggregationHistogram
  | AggregationMetrics
  | AggregationRange
  | AggregationTerms
>;
