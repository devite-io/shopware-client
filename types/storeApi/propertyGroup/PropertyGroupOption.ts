import { GenericRecord } from "../GenericRecord";
import { Media } from "../media";
import { PropertyGroup } from ".";

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
