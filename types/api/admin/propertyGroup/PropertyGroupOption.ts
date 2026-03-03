import { PropertyGroupOption as StoreApiPropertyGroupOption } from "#types/api/store/propertyGroup/PropertyGroupOption";
import { Media } from "../media/Media";
import { PropertyGroup } from "./PropertyGroup";

export type PropertyGroupOption = Omit<StoreApiPropertyGroupOption, "media" | "group"> & {
  media?: Media;
  group?: PropertyGroup;
};
