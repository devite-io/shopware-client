import { Product } from "../Product";
import { Category } from "../../category/Category";

export interface ProductCategoryTree {
  id?: string;
  productId: string;
  productVersionId?: string;
  categoryId: string;
  categoryVersionId?: string;
  product?: Product;
  category?: Category;
}
