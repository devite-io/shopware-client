import { GenericRecord } from "../GenericRecord";
import { Salutation } from "../Salutation";
import { Country } from "#types/storeApi/country/Country";
import { CountryState } from "#types/storeApi/country/CountryState";

export type CustomerAddressBody = {
  countryId: string;
  countryStateId?: string;
  salutationId?: string;
  firstName: string;
  lastName: string;
  zipcode?: string;
  city: string;
  company?: string;
  street: string;
  department?: string;
  title?: string;
  phoneNumber?: string;
  additionalAddressLine1?: string;
  additionalAddressLine2?: string;
  customFields?: GenericRecord;
  country?: Country;
  countryState?: CountryState;
  salutation?: Salutation;
};
