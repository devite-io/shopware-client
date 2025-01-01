import { Product } from "./Product";
import { Tag } from "../Tag";

export interface ProductTag {
  id?: string;
  productId: string;
  productVersionId?: string;
  tagId: string;
  product?: Product;
  tag?: Tag;
  parentVersionId?: any;
}
