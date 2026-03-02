import { Promotion } from "./Promotion";
import { Customer } from "../customer/Customer";

export interface PromotionPersonaCustomer {
  id?: string;
  promotionId: string;
  promotion?: Promotion;
  customerId: string;
  customer?: Customer;
}
