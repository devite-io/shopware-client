import { GenericRecord } from "../GenericRecord";
import { PropertyGroupOption } from "#types/storeApi/propertyGroup/PropertyGroupOption";

export type PropertyGroup = {
  id: string;
  name: string;
  description?: string;
  displayType?: "text" | "image" | "dropdown" | "color";
  sortingType?: "name" | "position";
  filterable?: boolean;
  visibleOnProductDetailPage?: boolean;
  position?: number;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  options?: Array<PropertyGroupOption>;
};
