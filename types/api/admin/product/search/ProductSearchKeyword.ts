import { Product } from "../Product";
import { Language } from "../../locale/Language";

export interface ProductSearchKeyword {
  id: string;
  versionId?: string;
  languageId: string;
  productId: string;
  productVersionId?: string;
  keyword: string;
  ranking: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  product?: Product;
  language?: Language;
}
