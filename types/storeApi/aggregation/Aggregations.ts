import {
  AggregationEntity,
  AggregationFilter,
  AggregationHistogram,
  AggregationMetrics,
  AggregationRange,
  AggregationTerms
} from ".";

export type Aggregations = Array<
  | AggregationEntity
  | AggregationFilter
  | AggregationHistogram
  | AggregationMetrics
  | AggregationRange
  | AggregationTerms
>;
