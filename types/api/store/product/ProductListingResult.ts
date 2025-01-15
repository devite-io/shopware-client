import { Product } from "./Product";

export type ProductListingResult = {
  apiAlias: "product_listing";
  entity?: "product";
  total?: number;
  aggregations?: Array<object>;
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
  availableSortings: Array<{
    apiAlias: "product_sorting";
    label: string;
    translated: { label: string };
    key: string;
    priority: number;
  }>;
  sorting?: string;
  elements: Array<Product>;
};
