import { PropertyGroupOption as StoreApiPropertyGroupOption } from "#types/api/store/propertyGroup/PropertyGroupOption";
import { Media } from "../media/Media";
import { PropertyGroup } from "./PropertyGroup";
import { ProductConfiguratorSetting } from "../product/ProductConfiguratorSetting";
import { Product } from "../product/Product";

export type PropertyGroupOption = StoreApiPropertyGroupOption & {
  media?: Media;
  group?: PropertyGroup;
  productConfiguratorSettings?: Array<ProductConfiguratorSetting>;
  productProperties?: Array<Product>;
  productOptions?: Array<Product>;
};
