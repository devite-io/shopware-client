import { Currency as StoreApiCurrency } from "#types/api/store/Currency";
import { SalesChannel } from "../salesChannel/SalesChannel";
import { Order } from "../order/Order";
import { SalesChannelDomain } from "../salesChannel/SalesChannelDomain";
import { PromotionDiscountPrice } from "../promotion/discount/PromotionDiscountPrice";
import { ProductExport } from "../product/ProductExport";
import { CurrencyCountryRounding } from "./CurrencyCountryRounding";

export type Currency = StoreApiCurrency & {
  salesChannelDefaultAssignments?: Array<SalesChannel>;
  orders?: Array<Order>;
  salesChannels?: Array<SalesChannel>;
  salesChannelDomains?: Array<SalesChannelDomain>;
  promotionDiscountPrices?: Array<PromotionDiscountPrice>;
  productExports?: Array<ProductExport>;
  countryRoundings?: Array<CurrencyCountryRounding>;
};
