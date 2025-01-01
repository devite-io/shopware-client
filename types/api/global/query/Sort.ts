export interface Sort {
  field: string;
  order: "ASC" | "DESC";
  naturalSorting?: boolean;
  type?: string;
}
