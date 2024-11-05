import { EntitySearchResult } from "../EntitySearchResult";
import { Product } from ".";

export type ProductListingResult = EntitySearchResult & {
  apiAlias: "product_listing";
  entity?: "product";
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
