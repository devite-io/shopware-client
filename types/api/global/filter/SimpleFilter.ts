export interface SimpleFilter {
  field: string;
  type: "contains" | "equalsAny" | "prefix" | "suffix";
  value: string | string[];
}
