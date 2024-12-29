import { GenericRecord } from "../GenericRecord";
import { PropertyGroupOption } from "#types/storeApi/propertyGroup/PropertyGroupOption";
import { Media } from "#types/storeApi/media/Media";

export type ProductConfiguratorSetting = {
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
};
