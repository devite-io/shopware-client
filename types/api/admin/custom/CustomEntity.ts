import { CustomField } from "./field/CustomField";

export interface CustomEntity {
  id: string;
  name: string;
  fields: Array<CustomField>;
  flags?: object;
  appId?: string;
  pluginId?: string;
  cmsAware?: boolean;
  storeApiAware?: boolean;
  customFieldsAware?: boolean;
  labelProperty?: string;
  deletedAt?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
}
