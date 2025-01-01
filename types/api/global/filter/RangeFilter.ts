export interface RangeFilter {
  type: "range";
  field: string;
  parameters: Array<{
    gte?: number;
    gt?: number;
    lte?: number;
    lt?: number;
  }>;
}
