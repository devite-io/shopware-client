import { PropertyGroupOption } from "../propertyGroup/PropertyGroupOption";

export interface ProductProperty {
  id?: string;
  optionId: string;
  option?: PropertyGroupOption;
}
