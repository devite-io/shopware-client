import { Product } from "./Product";
import { Aggregation } from "#types/api/global";

export type ProductListingResult = {
  apiAlias: "product_listing";
  aggregations?: Array<Aggregation>;
  total?: number;
  page?: number;
  limit?: number;
  currentFilters: Array<{
    navigationId: string;
    manufacturer: Array<string>;
    price: { min: number; max: number };
    rating: number | null;
    "shipping-free": boolean;
    properties: Array<string>;
    search: string;
  }>;
  sorting?: string;
  availableSortings: Array<{
    apiAlias: "product_sorting";
    label: string;
    key: string;
    priority: number;
    translated?: Record<string, string>;
  }>;
  elements: Array<Product>;
};
