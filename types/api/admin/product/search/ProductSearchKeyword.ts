import { Product } from "../Product";
import { Language } from "../../locale/Language";

export interface ProductSearchKeyword {
  id: string;
  versionId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  keyword: string;
  ranking: number;
  productId: string;
  productVersionId?: string;
  product?: Product;
  languageId: string;
  language?: Language;
}
