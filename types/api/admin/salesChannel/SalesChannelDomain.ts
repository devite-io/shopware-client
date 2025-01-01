import { GenericRecord } from "#types/api/global/GenericRecord";
import { SalesChannel } from "./SalesChannel";
import { Language } from "../locale/Language";
import { Currency } from "../currency/Currency";
import { SnippetSet } from "../snippet/SnippetSet";
import { ProductExport } from "../product/ProductExport";

export interface SalesChannelDomain {
  id: string;
  url: string;
  salesChannelId: string;
  languageId: string;
  currencyId: string;
  snippetSetId: string;
  hreflangUseOnlyLocale?: boolean;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  salesChannel?: SalesChannel;
  language?: Language;
  currency?: Currency;
  snippetSet?: SnippetSet;
  salesChannelDefaultHreflang?: SalesChannel;
  productExports: Array<ProductExport>;
}
