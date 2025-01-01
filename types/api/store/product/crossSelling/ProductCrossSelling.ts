export interface ProductCrossSelling {
  id: string;
  name: string;
  position?: number;
  sortBy?: string;
  sortDirection?: string;
  type?: string;
  active?: boolean;
  limit?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
}
