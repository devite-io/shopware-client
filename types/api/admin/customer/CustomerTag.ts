import { Customer } from "./Customer";
import { Tag } from "../Tag";

export interface CustomerTag {
  id?: string;
  customerId: string;
  tagId: string;
  customer?: Customer;
  tag?: Tag;
}
