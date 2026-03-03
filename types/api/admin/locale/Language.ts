import { Language as StoreApiLanguage } from "#types/api/store/locale/Language";
import { Locale } from "./Locale";

export type Language = Omit<
  StoreApiLanguage,
  "parent" | "children" | "locale" | "translationCode"
> & {
  parent?: Language;
  children?: Array<Language>;
  locale?: Locale;
  translationCode?: Locale;
};
