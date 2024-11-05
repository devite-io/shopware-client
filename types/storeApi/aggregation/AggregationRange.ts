export type AggregationRange = {
  name: string;
  type: "range";
  field: string;
  ranges: Array<{ from: number; to: number } | { from: number } | { to: number }>;
};
