import { Language } from "../locale/Language";

export interface ProductKeywordDictionary {
  id: string;
  languageId: string;
  keyword: string;
  reversed?: string;
  language?: Language;
}
