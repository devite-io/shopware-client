import { GenericRecord } from "#types/api/global/GenericRecord";
import { Locale } from "./Locale";

export interface Language {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  parentId?: string;
  parent?: Language;
  children?: Array<Language>;
  name: string;
  localeId: string;
  locale?: Locale;
  translationCodeId?: string;
  translationCode?: Locale;
  customFields?: GenericRecord;
}
