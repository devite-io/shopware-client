import { GenericRecord } from "#types/api/global/GenericRecord";
import { PropertyGroupOption } from "./PropertyGroupOption";

export interface PropertyGroup {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  displayType?: "text" | "image" | "dropdown" | "color";
  position?: number;
  visibleOnProductDetailPage?: boolean;
  name: string;
  description?: string;
  customFields?: GenericRecord;
  options?: Array<PropertyGroupOption>;
  translated?: Record<string, any>;
}
