import { GenericRecord } from "#types/api/global/GenericRecord";
import { Country } from "../../country/Country";
import { CountryState } from "../../country/CountryState";
import { Salutation } from "../../Salutation";

export interface CustomerAddressBody {
  salutationId?: string;
  salutation?: Salutation;
  title?: string;
  firstName: string;
  lastName: string;
  company?: string;
  department?: string;
  zipcode: string;
  city: string;
  street: string;
  additionalAddressLine1?: string;
  additionalAddressLine2?: string;
  countryId: string;
  country?: Country;
  countryStateId?: string;
  countryState?: CountryState;
  phoneNumber?: string;
  customFields?: GenericRecord;
}
