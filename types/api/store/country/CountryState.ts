import { GenericRecord } from "#types/api/global/GenericRecord";

export interface CountryState {
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
}
