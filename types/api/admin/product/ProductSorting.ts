export interface ProductSorting {
  id: string;
  locked?: boolean;
  key: string;
  priority: number;
  active?: boolean;
  fields: object;
  label: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
}
