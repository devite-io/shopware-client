import { GenericRecord } from "#types/api/global/GenericRecord";
import { Media } from "../media/Media";
import { PropertyGroup } from "./PropertyGroup";

export interface PropertyGroupOption {
  apiAlias: "property_group_option";
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  name: string;
  option: string;
  position?: number;
  colorHexCode?: string;
  mediaId?: string;
  media?: Media;
  groupId: string;
  group: PropertyGroup;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
}
