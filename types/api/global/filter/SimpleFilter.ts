export interface SimpleFilter {
  type: "contains" | "equalsAny" | "prefix" | "suffix";
  field: string;
  value: string | string[];
}
