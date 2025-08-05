export interface RangeFilter {
  type: "range";
  field: string;
  parameters: {
    gte?: number | string;
    gt?: number | string;
    lte?: number | string;
    lt?: number | string;
  };
}
