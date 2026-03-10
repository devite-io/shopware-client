import { Language } from "../../../locale/Language";
import { ProductSearchConfigField } from "./ProductSearchConfigField";

export interface ProductSearchConfig {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  andLogic?: boolean;
  minSearchLength?: number;
  excludedTerms?: Array<string>;
  configFields?: Array<ProductSearchConfigField>;
  languageId: string;
  language?: Language;
}
