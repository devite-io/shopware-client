import { ProductListingCriteria } from "#types/api/global/query/product/ProductListingCriteria";
import { CmsPage } from "#types/api/store/cms/CmsPage";
import { LandingPage } from "#types/api/store/cms/LandingPage";
import { Media } from "#types/api/store/media/Media";

export interface CMSPageResolveRequest extends ProductListingCriteria {
  slots?: string;
}
export type CMSPageResolveResponse = CmsPage;

export interface ContactFormSubmitRequest {
  salutationId: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  subject: string;
  comment: string;
  navigationId?: string;
  slotId?: string;
  cmsPageType?: string;
  entityName?: string;
}
export interface ContactFormSubmitResponse {
  success?: boolean;
}

export interface LandingPageResolveRequest extends ProductListingCriteria {
  slots?: string;
}
export type LandingPageResolveResponse = LandingPage;

export interface MediaEntityResolveRequest {
  ids: Array<string>;
}
export type MediaEntityResolveResponse = Array<Media>;
