import { Order } from "./Order";
import { Tag } from "../Tag";

export interface OrderTag {
  id?: string;
  orderId: string;
  orderVersionId?: string;
  tagId: string;
  order?: Order;
  tag?: Tag;
}
