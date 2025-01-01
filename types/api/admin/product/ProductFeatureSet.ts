import { Product } from "./Product";

export interface ProductFeatureSet {
  id: string;
  name: string;
  description?: string;
  features?: object;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  products?: Array<Product>;
}
