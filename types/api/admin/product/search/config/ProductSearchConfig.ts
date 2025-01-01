import { Language } from "../../../locale/Language";
import { ProductSearchConfigField } from "./ProductSearchConfigField";

export interface ProductSearchConfig {
  id: string;
  languageId: string;
  andLogic?: boolean;
  minSearchLength?: number;
  excludedTerms?: Array<string>;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  language?: Language;
  configFields?: Array<ProductSearchConfigField>;
}
