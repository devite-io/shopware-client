import { GenericRecord } from "#types/api/global/GenericRecord";
import { CountryState } from "./CountryState";

export interface Country {
  id: string;
  name: string;
  iso?: string;
  position?: number;
  active?: boolean;
  shippingAvailable?: boolean;
  iso3?: string;
  displayStateInRegistration?: boolean;
  forceStateInRegistration?: boolean;
  checkVatIdPattern?: boolean;
  vatIdRequired?: boolean;
  vatIdPattern?: string;
  customFields?: GenericRecord;
  customerTax?: {
    enabled: boolean;
    currencyId: string;
    amount: number;
  };
  companyTax?: {
    enabled: boolean;
    currencyId: string;
    amount: number;
  };
  postalCodeRequired?: boolean;
  checkPostalCodePattern?: boolean;
  checkAdvancedPostalCodePattern?: boolean;
  advancedPostalCodePattern?: string;
  addressFormat: string;
  defaultPostalCodePattern?: string;
  isEu?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  states?: Array<CountryState>;
  taxFree?: boolean;
  companyTaxFree?: boolean;
}
