import { GenericRecord } from "#types/api/global/GenericRecord";
import { Language } from "../locale/Language";
import { Currency } from "../currency/Currency";

export interface SalesChannelDomain {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  url: string;
  hreflangUseOnlyLocale?: boolean;
  languageId: string;
  language?: Language;
  currencyId: string;
  currency?: Currency;
  customFields?: GenericRecord;
}
