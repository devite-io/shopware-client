import { Category } from "../../category/Category";

export interface ProductCategoryTree {
  id?: string;
  categoryId: string;
  categoryVersionId?: string;
  category?: Category;
}
