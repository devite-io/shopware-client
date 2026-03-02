import { Category } from "../../category/Category";

export interface ProductCategory {
  id?: string;
  categoryId: string;
  categoryVersionId?: string;
  category?: Category;
}
