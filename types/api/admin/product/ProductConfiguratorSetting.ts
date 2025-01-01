import { ProductConfiguratorSetting as StoreApiProductConfiguratorSetting } from "#types/api/store/product/ProductConfiguratorSetting";
import { Media } from "../media/Media";
import { PropertyGroupOption } from "../propertyGroup/PropertyGroupOption";

export type ProductConfiguratorSetting = StoreApiProductConfiguratorSetting & {
  price?: object;
  media?: Media;
  option?: PropertyGroupOption;
};
