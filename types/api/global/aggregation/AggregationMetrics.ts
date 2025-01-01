export interface AggregationMetrics {
  name: string;
  type: "avg" | "count" | "max" | "min" | "stats" | "sum";
  field: string;
}
