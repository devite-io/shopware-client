import { GenericRecord } from "#types/api/global/GenericRecord";
import { Media } from "../media/Media";
import { PropertyGroup } from "./PropertyGroup";

export interface PropertyGroupOption {
  apiAlias: "property_group_option";
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
}
