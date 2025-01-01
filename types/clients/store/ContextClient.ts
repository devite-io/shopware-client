import { SalesChannelContext } from "#types/api/store/salesChannel/SalesChannelContext";

export interface ContextGetRequest {
  id: string;
}
export type ContextGetResponse = SalesChannelContext;

export interface ContextUpdateRequest {
  currencyId?: string;
  languageId?: string;
  billingAddressId?: string;
  shippingAddressId?: string;
  paymentMethodId?: string;
  shippingMethodId?: string;
  countryId?: string;
  countryStateId?: string;
}
export interface ContextUpdateResponse {
  redirectUrl?: string;
}
