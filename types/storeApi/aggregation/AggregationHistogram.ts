export type AggregationHistogram = {
  name: string;
  type: "histogram";
  field: string;
  interval?: number;
  format?: string;
  timeZone?: string;
};
