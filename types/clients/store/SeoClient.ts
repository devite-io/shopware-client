import { EntitySearchResult } from "#types/api/store/EntitySearchResult";
import { Criteria } from "#types/api/global/query/Criteria";
import { SeoUrlEntity } from "#types/api/store/seo/SeoUrlEntity";
import { Sitemap } from "#types/api/store/seo/Sitemap";

export type SeoRouteListRequest = Criteria;
export type SeoRouteListResponse = EntitySearchResult & { elements?: Array<SeoUrlEntity> };

export type SitemapListResponse = Array<Sitemap>;

export type SitemapDownloadResponse = Blob;
