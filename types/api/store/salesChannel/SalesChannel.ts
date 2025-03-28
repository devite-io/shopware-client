export interface SalesChannel {
  id: string;
  typeId: string;
  languageId: string;
  currencyId: string;
  paymentMethodId: string;
  shippingMethodId: string;
  countryId: string;
  navigationCategoryId: string;
  navigationCategoryDepth?: number;
  footerCategoryId?: string;
  serviceCategoryId?: string;
  name: string;
  shortName?: string;
  accessKey: string;
  active?: boolean;
  maintenance?: boolean;
  maintenanceIpWhitelist?: string;
  mailHeaderFooterId?: string;
  customerGroupId: string;
  hreflangActive?: boolean;
  hreflangDefaultDomainId?: string;
  analyticsId?: string;
}
