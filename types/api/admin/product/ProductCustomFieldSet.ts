import { Product } from "./Product";

export interface ProductCustomFieldSet {
  id?: string;
  productId: string;
  customFieldSetId: string;
  productVersionId?: string;
  product?: Product;
  customFieldSet?: object;
}
