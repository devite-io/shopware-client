import { EntitySearchResult } from "#types/storeApi/EntitySearchResult";
import { Criteria } from "#types/storeApi/query/Criteria";
import { SeoUrlEntity } from "#types/storeApi/seo/SeoUrlEntity";
import { Sitemap } from "#types/storeApi/seo/Sitemap";

export type SeoRouteListRequest = Criteria;
export type SeoRouteListResponse = EntitySearchResult & { elements?: Array<SeoUrlEntity> };

export type SitemapDownloadResponse = Blob;

export type SitemapListResponse = Array<Sitemap>;
