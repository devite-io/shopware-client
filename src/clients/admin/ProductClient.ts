import Client from "../Client";
import { Product } from "#types/api/admin/product/Product";
import { ProductCrossSelling } from "#types/api/admin/product/crossSelling/ProductCrossSelling";
import { ProductCrossSellingAssignedProduct } from "#types/api/admin/product/crossSelling/ProductCrossSellingAssignedProduct";
import { ProductDownload } from "#types/api/admin/product/ProductDownload";
import { ProductManufacturer } from "#types/api/admin/product/ProductManufacturer";
import { ProductMedia } from "#types/api/admin/product/ProductMedia";
import { ProductPrice } from "#types/api/admin/product/ProductPrice";
import { ProductReview } from "#types/api/admin/product/ProductReview";
import { ProductSearchConfig } from "#types/api/admin/product/search/config/ProductSearchConfig";
import { ProductSearchConfigField } from "#types/api/admin/product/search/config/ProductSearchConfigField";
import { ProductSearchKeyword } from "#types/api/admin/product/search/ProductSearchKeyword";
import { ProductSorting } from "#types/api/admin/product/ProductSorting";
import { ProductStream } from "#types/api/admin/product/stream/ProductStream";
import { ProductStreamFilter } from "#types/api/admin/product/stream/ProductStreamFilter";
import createRestEndpoint from "../../utils/createRestEndpoint";

class ProductClient extends Client {
  public products = createRestEndpoint<Product>(this, "product", "product");
  public crossSellings = createRestEndpoint<ProductCrossSelling>(
    this,
    "product-cross-selling",
    "product cross selling"
  );
  public crossSellingAssignedProducts = createRestEndpoint<ProductCrossSellingAssignedProduct>(
    this,
    "product-cross-selling-assigned-product",
    "product cross selling assigned product"
  );
  public downloads = createRestEndpoint<ProductDownload>(
    this,
    "product-download",
    "product download"
  );
  public manufacturers = createRestEndpoint<ProductManufacturer>(
    this,
    "product-manufacturer",
    "product manufacturer"
  );
  public media = createRestEndpoint<ProductMedia>(this, "product-media", "product media");
  public prices = createRestEndpoint<ProductPrice>(this, "product-price", "product price");
  public reviews = createRestEndpoint<ProductReview>(this, "product-review", "product review");
  public searchConfigs = createRestEndpoint<ProductSearchConfig>(
    this,
    "product-search-config",
    "product search config"
  );
  public searchConfigFields = createRestEndpoint<ProductSearchConfigField>(
    this,
    "product-search-config-field",
    "product search config field"
  );
  public searchKeywords = createRestEndpoint<ProductSearchKeyword>(
    this,
    "product-search-keyword",
    "product search keyword"
  );
  public sortings = createRestEndpoint<ProductSorting>(this, "product-sorting", "product sorting");
  public streams = createRestEndpoint<ProductStream>(this, "product-stream", "product stream");
  public streamFilters = createRestEndpoint<ProductStreamFilter>(
    this,
    "product-stream-filter",
    "product stream filter"
  );
}

export default ProductClient;
