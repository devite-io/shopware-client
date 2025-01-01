import { Promotion } from "./Promotion";
import { Customer } from "../customer/Customer";

export interface PromotionPersonaCustomer {
  id?: string;
  promotionId: string;
  customerId: string;
  promotion?: Promotion;
  customer?: Customer;
}
