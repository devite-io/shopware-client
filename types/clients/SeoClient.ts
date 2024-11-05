import { Criteria, EntitySearchResult, SeoUrlEntity, Sitemap } from "../storeApi";

export type SeoRouteListRequest = Criteria;
export type SeoRouteListResponse = EntitySearchResult & { elements?: Array<SeoUrlEntity> };

export type SitemapDownloadResponse = Blob;

export type SitemapListResponse = Array<Sitemap>;
