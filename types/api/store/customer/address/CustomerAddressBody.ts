import { GenericRecord } from "#types/api/global/GenericRecord";
import { Country } from "../../country/Country";
import { CountryState } from "../../country/CountryState";
import { Salutation } from "../../Salutation";

export interface CustomerAddressBody {
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
}
