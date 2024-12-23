import { GenericRecord } from "../GenericRecord";
import { CalculatedPrice } from "../price";
import {
  ProductConfiguratorSetting,
  ProductCrossSelling,
  ProductDownload,
  ProductManufacturer,
  ProductReview,
  ProductStream
} from ".";
import { DeliveryTime } from "../DeliveryTime";
import { Tax } from "../Tax";
import { Unit } from "../Unit";
import { Media, ProductMedia } from "../media";
import { CmsPage } from "../cms";
import { Category, MainCategory } from "../category";
import { SeoUrlEntity } from "../seo";
import { PropertyGroupOption } from "../propertyGroup";
import { Tag } from "../Tag";

export type Product = {
  apiAlias: "product";
  id: string;
  versionId?: string;
  parentId?: string;
  parentVersionId?: string;
  manufacturerId?: string;
  productManufacturerVersionId?: string;
  unitId?: string;
  taxId: string;
  coverId?: string;
  productMediaVersionId?: string;
  deliveryTimeId?: string;
  canonicalProductId?: string;
  canonicalProductVersionId?: string;
  cmsPageId?: string;
  cmsPageVersionId?: string;
  productNumber: string;
  restockTime: number;
  active?: boolean;
  readonly available?: boolean;
  isCloseout?: boolean;
  readonly availableStock?: number;
  stock: number;
  readonly displayGroup?: string;
  manufacturerNumber?: string;
  ean?: string;
  purchaseSteps?: number;
  maxPurchase?: number;
  minPurchase?: number;
  purchaseUnit?: number;
  referenceUnit?: number;
  shippingFree?: boolean;
  markAsTopseller?: boolean;
  weight?: number;
  width?: number;
  height?: number;
  length?: number;
  releaseDate?: string;
  readonly ratingAverage?: number;
  readonly categoryTree?: Array<string>;
  readonly propertyIds?: Array<string>;
  readonly optionIds?: Array<string>;
  readonly streamIds?: Array<string>;
  readonly tagIds?: Array<string>;
  readonly categoryIds?: Array<string>;
  readonly childCount?: number;
  readonly sales?: number;
  readonly states?: Array<string>;
  metaDescription?: string;
  name: string;
  keywords?: string;
  description?: string;
  metaTitle?: string;
  packUnit?: string;
  packUnitPlural?: string;
  customFields?: GenericRecord;
  calculatedPrice: CalculatedPrice;
  calculatedPrices: Array<CalculatedPrice>;
  calculatedMaxPurchase?: number;
  calculatedCheapestPrice?: CalculatedPrice;
  isNew?: boolean;
  sortedProperties: object;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  downloads?: Array<ProductDownload>;
  parent?: Product;
  children?: Array<Product>;
  deliveryTime?: DeliveryTime;
  tax?: Tax;
  manufacturer?: ProductManufacturer;
  unit?: Unit;
  cover?: ProductMedia;
  cmsPage?: CmsPage;
  canonicalProduct?: Product;
  media?: Array<Media>;
  crossSellings?: Array<ProductCrossSelling>;
  configuratorSettings?: Array<ProductConfiguratorSetting>;
  productReviews?: Array<ProductReview>;
  mainCategories?: Array<MainCategory>;
  seoUrls?: Array<SeoUrlEntity>;
  options?: Array<PropertyGroupOption>;
  properties?: Array<PropertyGroupOption>;
  categories?: Array<MainCategory>;
  streams?: Array<ProductStream>;
  categoriesRo?: Array<Category>;
  tags?: Array<Tag>;
  seoCategory: Category;
  variantListingConfig?: { displayParent?: boolean } | null;
  mainVariantId?: any;
  externalReference?: any;
};
