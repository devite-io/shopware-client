import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import type StoreShopwareClient from "../StoreShopwareClient";
import ShopwareError from "#http/ShopwareError";
import {
  AddressCreateRequest,
  AddressCreateResponse,
  AddressListRequest,
  AddressListResponse,
  AddressUpdateRequest,
  AddressUpdateResponse
} from "#types/clients/store/AddressClient";

class AddressClient extends Client {
  /**
   * @throws {Error} if the request failed
   */
  public async createAddress(request: AddressCreateRequest): Promise<AddressCreateResponse> {
    const response = await this.post(
      "/account/address",
      (this.client as StoreShopwareClient).withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressCreateResponse;

    throw new ShopwareError("Failed to add address", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteAddress(addressId: string): Promise<void> {
    const response = await this.delete(
      `/account/address/${addressId}`,
      (this.client as StoreShopwareClient).withContextToken()
    );

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete address", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateAddress(
    addressId: string,
    request: AddressUpdateRequest
  ): Promise<AddressUpdateResponse> {
    const response = await this.patch(
      `/account/address/${addressId}`,
      (this.client as StoreShopwareClient).withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressUpdateResponse;

    throw new ShopwareError("Failed to update address", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getAddresses(request: AddressListRequest = {}): Promise<AddressListResponse> {
    const response = await this.post(
      "/account/list-address",
      (this.client as StoreShopwareClient).withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressListResponse;

    throw new ShopwareError("Failed to fetch address list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async changeDefaultShippingAddress(addressId: string): Promise<void> {
    const response = await this.patch(
      `/account/address/default-shipping/${addressId}`,
      (this.client as StoreShopwareClient).withContextToken()
    );

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to change default shipping address", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async changeDefaultBillingAddress(addressId: string): Promise<void> {
    const response = await this.patch(
      `/account/address/default-billing/${addressId}`,
      (this.client as StoreShopwareClient).withContextToken()
    );

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to change default billing address", response);
  }
}

export default AddressClient;
