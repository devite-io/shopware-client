import Client from "../Client";
import { Promotion } from "#types/api/admin/promotion/Promotion";
import { PromotionDiscount } from "#types/api/admin/promotion/discount/PromotionDiscount";
import { PromotionDiscountPrice } from "#types/api/admin/promotion/discount/PromotionDiscountPrice";
import { PromotionIndividualCode } from "#types/api/admin/promotion/PromotionIndividualCode";
import { PromotionSalesChannel } from "#types/api/admin/promotion/PromotionSalesChannel";
import { PromotionSetGroup } from "#types/api/admin/promotion/PromotionSetGroup";
import createRestEndpoint from "../../utils/createRestEndpoint";

class PromotionClient extends Client {
  public promotions = createRestEndpoint<Promotion>(this, "/promotion", "promotion");
  public discounts = createRestEndpoint<PromotionDiscount>(this, "/promotion-discount", "discount");
  public discountPrices = createRestEndpoint<PromotionDiscountPrice>(
    this,
    "promotion-discount-price",
    "discount price"
  );
  public individualCodes = createRestEndpoint<PromotionIndividualCode>(
    this,
    "promotion-individual-code",
    "individual code"
  );
  public promotionSalesChannels = createRestEndpoint<PromotionSalesChannel>(
    this,
    "promotion-sales-channel",
    "promotion sales channel"
  );
  public setGroups = createRestEndpoint<PromotionSetGroup>(
    this,
    "promotion-setgroup",
    "promotion set group"
  );
}

export default PromotionClient;
