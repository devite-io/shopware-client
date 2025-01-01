import { Language as StoreApiLanguage } from "#types/api/store/locale/Language";
import { Locale } from "./Locale";
import { SalesChannel } from "../salesChannel/SalesChannel";
import { SalesChannelDomain } from "../salesChannel/SalesChannelDomain";
import { Customer } from "../customer/Customer";
import { NewsletterRecipient } from "../newsletterRecipient/NewsletterRecipient";
import { Order } from "../order/Order";
import { ProductSearchKeyword } from "../product/search/ProductSearchKeyword";
import { ProductKeywordDictionary } from "../product/ProductKeywordDictionary";
import { ProductReview } from "../product/review/ProductReview";
import { ProductSearchConfig } from "../product/search/config/ProductSearchConfig";

export type Language = StoreApiLanguage & {
  parent?: Language;
  locale?: Locale;
  children?: Array<Language>;
  salesChannels?: Array<SalesChannel>;
  salesChannelDefaultAssignments?: Array<SalesChannel>;
  salesChannelDomains?: Array<SalesChannelDomain>;
  customers?: Array<Customer>;
  newsletterRecipients?: Array<NewsletterRecipient>;
  orders?: Array<Order>;
  productSearchKeywords?: Array<ProductSearchKeyword>;
  productKeywordDictionaries?: Array<ProductKeywordDictionary>;
  productReviews?: Array<ProductReview>;
  productSearchConfig?: ProductSearchConfig;
};
