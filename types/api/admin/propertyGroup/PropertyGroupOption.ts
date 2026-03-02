import { PropertyGroupOption as StoreApiPropertyGroupOption } from "#types/api/store/propertyGroup/PropertyGroupOption";
import { Media } from "../media/Media";
import { PropertyGroup } from "./PropertyGroup";

export type PropertyGroupOption = StoreApiPropertyGroupOption & {
  media?: Media;
  group?: PropertyGroup;
};
