import { GenericRecord } from "../GenericRecord";
import { Locale } from ".";

export type Language = {
  id: string;
  parentId?: string;
  localeId: string;
  translationCodeId?: string;
  name: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  parent?: Language;
  locale?: Locale;
  translationCode?: Locale;
  children?: Array<Language>;
};
