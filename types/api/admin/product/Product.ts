import { Category } from "../category/Category";
import { CmsPage } from "../cms/CmsPage";
import { DeliveryTime } from "../DeliveryTime";
import { MainCategory } from "../category/MainCategory";
import { Price } from "#types/api/global";
import { Product as StoreApiProduct } from "#types/api/store/product/Product";
import { ProductCrossSelling } from "./crossSelling/ProductCrossSelling";
import { ProductDownload } from "./ProductDownload";
import { ProductManufacturer } from "./ProductManufacturer";
import { ProductMedia } from "./ProductMedia";
import { ProductReview } from "./ProductReview";
import { ProductSearchKeyword } from "./search/ProductSearchKeyword";
import { ProductStream } from "./stream/ProductStream";
import { PropertyGroupOption } from "../propertyGroup/PropertyGroupOption";
import { SeoUrl } from "../seo/SeoUrl";
import { Tag } from "../Tag";

export type Product = Omit<
  StoreApiProduct,
  | "children"
  | "deliveryTime"
  | "cover"
  | "media"
  | "tags"
  | "properties"
  | "options"
  | "streams"
  | "productReviews"
  | "crossSellings"
  | "categories"
  | "mainCategories"
  | "seoUrls"
  | "seoCategory"
  | "downloads"
  | "cmsPage"
> & {
  readonly autoIncrement?: number;
  children?: Array<Product>;
  manufacturerId?: string;
  productManufacturerVersionId?: string;
  manufacturer?: ProductManufacturer;
  manufacturerNumber?: string;
  deliveryTime?: DeliveryTime;
  cover?: ProductMedia;
  media?: Array<ProductMedia>;
  tags?: Array<Tag>;
  searchKeywords?: Array<ProductSearchKeyword>;
  customSearchKeywords?: Array<string>;
  properties?: Array<PropertyGroupOption>;
  options?: Array<PropertyGroupOption>;
  streams?: Array<ProductStream>;
  productReviews?: Array<ProductReview>;
  crossSellings?: Array<ProductCrossSelling>;
  categories?: Array<Category>;
  categoriesRo?: Array<Category>;
  mainCategories?: Array<MainCategory>;
  seoUrls?: Array<SeoUrl>;
  seoCategory: Category;
  price?: Array<Price>;
  purchasePrices?: Array<Price>;
  downloads?: Array<ProductDownload>;
  cmsPage?: CmsPage;
};
