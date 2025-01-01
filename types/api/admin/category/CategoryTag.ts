import { Category } from "./Category";
import { Tag } from "../Tag";

export interface CategoryTag {
  id?: string;
  categoryId: string;
  categoryVersionId?: string;
  tagId: string;
  category: Category;
  tag?: Tag;
}
