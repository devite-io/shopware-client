import { Locale as StoreApiLocale } from "#types/api/store/locale/Locale";
import { Language } from "./Language";

export type Locale = StoreApiLocale & {
  languages?: Array<Language>;
};
