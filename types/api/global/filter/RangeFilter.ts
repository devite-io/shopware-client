export interface RangeFilter {
  field: string;
  type: "range";
  parameters: {
    gte?: number | string;
    gt?: number | string;
    lte?: number | string;
    lt?: number | string;
  };
}
