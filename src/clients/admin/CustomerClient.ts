import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import ShopwareError from "#http/ShopwareError";
import {
  ImpersonationTokenRequest,
  ImpersonationTokenResponse
} from "#types/clients/admin/CustomerClient";
import { Customer } from "#types/api/admin/customer/Customer";
import { CustomerAddress } from "#types/api/admin/customer/CustomerAddress";
import { CustomerGroup } from "#types/api/admin/customer/group/CustomerGroup";
import { CustomerRecovery } from "#types/api/admin/customer/CustomerRecovery";
import { CustomerWishlist } from "#types/api/admin/customer/wishlist/CustomerWishlist";
import { CustomerWishlistProduct } from "#types/api/admin/customer/wishlist/CustomerWishlistProduct";
import createRestEndpoint from "../../utils/createRestEndpoint";

class CustomerClient extends Client {
  /** Impersonation **/

  /**
   * Requires `api_proxy_imitate-customer` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getCustomerImpersonationToken(
    request: ImpersonationTokenRequest
  ): Promise<ImpersonationTokenResponse> {
    const response = await this.post(`/_proxy/generate-imitate-customer-token`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ImpersonationTokenResponse;

    throw new ShopwareError("Failed to generate impersonation token", response);
  }

  /** Rest Endpoints **/

  public customers = createRestEndpoint<Customer>(this, "/customer", "customer");
  public addresses = createRestEndpoint<CustomerAddress>(this, "/address", "customer address");
  public groups = createRestEndpoint<CustomerGroup>(this, "/customer-group", "customer group");
  public recoveries = createRestEndpoint<CustomerRecovery>(
    this,
    "customer-recovery",
    "customer recovery"
  );
  public wishlists = createRestEndpoint<CustomerWishlist>(
    this,
    "customer-wishlist",
    "customer wishlist"
  );
  public wishlistProducts = createRestEndpoint<CustomerWishlistProduct>(
    this,
    "customer-wishlist-product",
    "customer wishlist product"
  );
}

export default CustomerClient;
