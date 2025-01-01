import { Product } from "../Product";
import { Category } from "../../category/Category";

export interface ProductCategory {
  id?: string;
  productId: string;
  productVersionId?: string;
  categoryId: string;
  categoryVersionId?: string;
  product?: Product;
  category?: Category;
}
