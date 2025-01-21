export interface RangeFilter {
  type: "range";
  field: string;
  parameters: {
    gte?: number;
    gt?: number;
    lte?: number;
    lt?: number;
  };
}
