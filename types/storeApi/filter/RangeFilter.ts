export type RangeFilter = {
  type: "range";
  field: string;
  parameters: Array<{
    gte?: number;
    gt?: number;
    lte?: number;
    lt?: number;
  }>;
};
