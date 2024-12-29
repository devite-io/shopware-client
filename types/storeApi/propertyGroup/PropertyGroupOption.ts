import { GenericRecord } from "../GenericRecord";
import { PropertyGroup } from "#types/storeApi/propertyGroup/PropertyGroup";
import { Media } from "#types/storeApi/media/Media";

export type PropertyGroupOption = {
  id: string;
  groupId: string;
  name: string;
  position?: number;
  colorHexCode?: string;
  mediaId?: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  media?: Media;
  group: PropertyGroup;
  option: string;
};
