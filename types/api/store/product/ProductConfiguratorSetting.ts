import { GenericRecord } from "#types/api/global/GenericRecord";
import { Media } from "../media/Media";
import { PropertyGroupOption } from "#types/api/store/propertyGroup/PropertyGroupOption";

export interface ProductConfiguratorSetting {
  apiAlias: "product_configurator_setting";
  id: string;
  versionId?: string;
  productId: string;
  productVersionId?: string;
  mediaId?: string;
  optionId: string;
  position?: number;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  media?: Media;
  option?: PropertyGroupOption;
}
