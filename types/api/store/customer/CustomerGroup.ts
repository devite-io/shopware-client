import { GenericRecord } from "#types/api/global/GenericRecord";

export interface CustomerGroup {
  id: string;
  name: string;
  displayGross?: boolean;
  customFields?: GenericRecord;
  registrationActive?: boolean;
  registrationTitle?: string;
  registrationIntroduction?: string;
  registrationOnlyCompanyRegistration?: boolean;
  registrationSeoMetaDescription?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated: {
    name?: string;
    registrationIntroduction?: string;
    registrationSeoMetaDescription?: string;
    registrationTitle?: string;
  };
}
