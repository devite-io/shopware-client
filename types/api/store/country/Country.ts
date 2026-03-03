import { GenericRecord } from "#types/api/global/GenericRecord";
import { CountryState } from "./CountryState";

export interface Country {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  name: string;
  active?: boolean;
  iso?: string;
  iso3?: string;
  position?: number;
  displayStateInRegistration?: boolean;
  forceStateInRegistration?: boolean;
  checkVatIdPattern?: boolean;
  vatIdRequired?: boolean;
  vatIdPattern?: string;
  customerTax?: { enabled: boolean; currencyId: string; amount: number };
  companyTax?: { enabled: boolean; currencyId: string; amount: number };
  postalCodeRequired?: boolean;
  checkPostalCodePattern?: boolean;
  defaultPostalCodePattern?: string;
  checkAdvancedPostalCodePattern?: boolean;
  advancedPostalCodePattern?: string;
  addressFormat: string;
  isEu?: boolean;
  taxFree?: boolean;
  companyTaxFree?: boolean;
  shippingAvailable?: boolean;
  customFields?: GenericRecord;
  states?: Array<CountryState>;
  translated?: Record<string, any>;
}
