import { ProductReview as StoreApiProductReview } from "#types/api/store/product/review/ProductReview";
import { Product } from "../Product";
import { Customer } from "../../customer/Customer";
import { SalesChannel } from "../../salesChannel/SalesChannel";
import { Language } from "../../locale/Language";

export type ProductReview = StoreApiProductReview & {
  externalUser?: string;
  externalEmail?: string;
  product?: Product;
  customerId?: string;
  customer?: Customer;
  salesChannel?: SalesChannel;
  language?: Language;
};
