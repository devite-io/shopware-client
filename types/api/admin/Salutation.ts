import { Salutation as StoreApiSalutation } from "#types/api/store/Salutation";
import { Customer } from "./customer/Customer";
import { CustomerAddress } from "./customer/CustomerAddress";
import { OrderAddress } from "./order/OrderAddress";
import { NewsletterRecipient } from "./newsletterRecipient/NewsletterRecipient";

export type Salutation = StoreApiSalutation & {
  customers?: Array<Customer>;
  customerAddresses?: Array<CustomerAddress>;
  orderAddresses?: Array<OrderAddress>;
  newsletterRecipients?: Array<NewsletterRecipient>;
};
