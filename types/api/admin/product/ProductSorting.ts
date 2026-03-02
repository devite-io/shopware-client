export interface ProductSorting {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  active?: boolean;
  label: string;
  locked?: boolean;
  key: string;
  priority: number;
  fields: object;
  translated?: Record<string, string>;
}
