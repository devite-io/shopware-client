import { GenericRecord } from "../GenericRecord";
import { Media } from "../media";
import { PropertyGroupOption } from "../propertyGroup";

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
