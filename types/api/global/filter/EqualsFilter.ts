export interface EqualsFilter {
  field: string;
  type: "equals";
  value: string | number | boolean | null;
}
