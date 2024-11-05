import { GenericRecord } from "../GenericRecord";

export type CountryState = {
  id: string;
  countryId: string;
  shortCode: string;
  name: string;
  position?: number;
  active?: boolean;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
};
