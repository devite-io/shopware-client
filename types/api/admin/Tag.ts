import { Tag as StoreApiTag } from "#types/api/store/Tag";
import { Product } from "./product/Product";
import { Media } from "./media/Media";
import { Category } from "./category/Category";
import { Customer } from "./customer/Customer";
import { Order } from "./order/Order";
import { NewsletterRecipient } from "./newsletterRecipient/NewsletterRecipient";

export type Tag = StoreApiTag & {
  customers?: Array<Customer>;
  newsletterRecipients?: Array<NewsletterRecipient>;
  categories?: Array<Category>;
  products?: Array<Product>;
  orders?: Array<Order>;
  media?: Array<Media>;
};
