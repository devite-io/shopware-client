import { GenericRecord } from "#types/api/global/GenericRecord";

export interface CustomerGroup {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  name: string;
  displayGross?: boolean;
  registrationActive?: boolean;
  registrationTitle?: string;
  registrationSeoMetaDescription?: string;
  registrationIntroduction?: string;
  registrationOnlyCompanyRegistration?: boolean;
  translated?: Record<string, string>;
  customFields?: GenericRecord;
}
