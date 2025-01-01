import { Product } from "./Product";
import { PropertyGroupOption } from "../propertyGroup/PropertyGroupOption";

export interface ProductOption {
  id?: string;
  productId: string;
  productVersionId?: string;
  optionId: string;
  product?: Product;
  option?: PropertyGroupOption;
}
