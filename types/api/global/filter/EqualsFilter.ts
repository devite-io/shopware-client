export interface EqualsFilter {
  type: "equals";
  field: string;
  value: string | number | boolean | null;
}
