import { PropertyGroup as StoreApiPropertyGroup } from "#types/api/store/propertyGroup/PropertyGroup";
import { PropertyGroupOption } from "./PropertyGroupOption";

export type PropertyGroup = StoreApiPropertyGroup & {
  options?: Array<PropertyGroupOption>;
};
