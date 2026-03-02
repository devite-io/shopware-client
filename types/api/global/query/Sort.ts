export interface Sort {
  type?: string;
  field: string;
  order: "ASC" | "DESC";
  naturalSorting?: boolean;
}
