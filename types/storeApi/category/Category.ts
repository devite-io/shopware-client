import { GenericRecord } from "../GenericRecord";
import { Tag } from "../Tag";
import { CmsPage } from "#types/storeApi/cms/CmsPage";
import { Media } from "#types/storeApi/media/Media";
import { SeoUrlEntity } from "#types/storeApi/seo/SeoUrlEntity";

export type Category = {
  apiAlias: "category";
  id: string;
  versionId?: string;
  parentId?: string;
  parentVersionId?: string;
  afterCategoryId?: string;
  afterCategoryVersionId?: string;
  mediaId?: string;
  displayNestedProducts?: boolean;
  readonly breadcrumb: Array<string>;
  readonly level?: number;
  readonly path?: string;
  readonly childCount: number;
  type: "page" | "folder" | "link";
  productAssignmentType?: "product_stream" | "product";
  visible?: boolean;
  active?: boolean;
  cmsPageIdSwitched?: boolean;
  visibleChildCount?: number;
  name: string;
  customFields?: GenericRecord;
  linkType?: "external" | "category" | "product" | "landing_page";
  internalLink?: string;
  externalLink?: string;
  linkNewTab?: boolean;
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  cmsPageId?: string;
  cmsPageVersionId?: string;
  customEntityTypeId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated: { breadcrumb: Array<String> };
  parent?: Category;
  children: Array<Category>;
  media?: Media;
  tags?: Array<Tag>;
  cmsPage?: CmsPage;
  seoUrls?: Array<SeoUrlEntity>;
};
