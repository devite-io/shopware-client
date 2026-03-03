export interface ProductCrossSelling {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  active?: boolean;
  type?: string;
  limit?: number;
  name: string;
  position?: number;
  sortBy?: string;
  sortDirection?: string;
  translated?: Record<string, any>;
}
