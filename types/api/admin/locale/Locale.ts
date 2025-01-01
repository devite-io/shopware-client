import { Locale as StoreApiLocale } from "#types/api/store/locale/Locale";
import { Language } from "./Language";
import { User } from "../user/User";

export type Locale = StoreApiLocale & {
  languages?: Array<Language>;
  users?: Array<User>;
};
