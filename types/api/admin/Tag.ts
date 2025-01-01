import { Tag as StoreApiTag } from "#types/api/store/Tag";
import { Product } from "./product/Product";
import { Media } from "./media/Media";
import { Category } from "./category/Category";
import { Customer } from "./customer/Customer";
import { Order } from "./order/Order";
import { ShippingMethod } from "./shippingMethod/ShippingMethod";
import { NewsletterRecipient } from "./newsletterRecipient/NewsletterRecipient";
import { LandingPage } from "./cms/landingPage/LandingPage";
import { Rule } from "./rule/Rule";

export type Tag = StoreApiTag & {
  products?: Array<Product>;
  media?: Array<Media>;
  categories?: Array<Category>;
  customers?: Array<Customer>;
  orders?: Array<Order>;
  shippingMethods?: Array<ShippingMethod>;
  newsletterRecipients?: Array<NewsletterRecipient>;
  landingPages?: Array<LandingPage>;
  rules?: Array<Rule>;
};
