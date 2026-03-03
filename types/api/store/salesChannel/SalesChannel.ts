import { Rounding } from "#types/api/global/Rounding";
import { PaymentMethod } from "../PaymentMethod";
import { ShippingMethod } from "../shippingMethod/ShippingMethod";
import { GenericRecord } from "#types/api/global/GenericRecord";
import { Country } from "../country/Country";
import { Currency } from "../Currency";
import { Language } from "../locale/Language";

export interface SalesChannel {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  active?: boolean;
  name: string;
  hreflangActive?: boolean;
  itemRounding?: Rounding;
  totalRounding?: Rounding;
  languageId: string;
  language?: Language;
  languages?: Array<Language>;
  countries?: Array<Country>;
  currencyId: string;
  currencyIds?: Array<string>;
  currencies?: Array<Currency>;
  paymentMethodId: string;
  paymentMethod?: PaymentMethod;
  paymentMethodIds?: Array<string>;
  paymentMethods?: Array<PaymentMethod>;
  shippingMethodId: string;
  shippingMethod?: ShippingMethod;
  shippingMethodIds?: Array<string>;
  shippingMethods?: Array<ShippingMethod>;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
}
