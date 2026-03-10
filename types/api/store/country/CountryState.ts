import { GenericRecord } from "#types/api/global/GenericRecord";

export interface CountryState {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  name: string;
  shortCode: string;
  position?: number;
  active?: boolean;
  countryId: string;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
}
