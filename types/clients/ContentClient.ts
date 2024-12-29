import { ProductListingCriteria } from "../storeApi/query/product/ProductListingCriteria";
import { CmsPage } from "../storeApi/cms/CmsPage";
import { LandingPage } from "../storeApi/cms/LandingPage";
import { Media } from "../storeApi/media/Media";

export type CMSPageResolveRequest = { slots?: string } & ProductListingCriteria;
export type CMSPageResolveResponse = CmsPage;

export type ContactFormSubmitRequest = {
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
};
export type ContactFormSubmitResponse = { success?: boolean };

export type LandingPageResolveRequest = { slots?: string } & ProductListingCriteria;
export type LandingPageResolveResponse = LandingPage;

export type MediaEntityResolveRequest = { ids: Array<string> };
export type MediaEntityResolveResponse = Array<Media>;
