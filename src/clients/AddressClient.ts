import { Client } from "#clients";
import {
  AddressCreateRequest,
  AddressCreateResponse,
  AddressListRequest,
  AddressListResponse,
  AddressUpdateRequest,
  AddressUpdateResponse
} from "#types";
import { JsonPayload } from "#payloads";

class AddressClient extends Client {
  /**
   * @throws {Error} if the request fails
   */
  public async deleteAddress(addressId: string): Promise<undefined> {
    const response = await this.delete(`/account/address/${addressId}`, this.withContextToken());

    if (response.statusCode === 200) return undefined;

    throw new Error(`Failed to delete address: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request fails
   */
  public async updateAddress(
    addressId: string,
    request: AddressUpdateRequest
  ): Promise<AddressUpdateResponse> {
    const response = await this.put(
      `/account/address/${addressId}`,
      this.withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressUpdateResponse;

    throw new Error(`Failed to update address: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request fails
   */
  public async getAddressList(request: AddressListRequest = {}): Promise<AddressListResponse> {
    const response = await this.post(
      "/account/list-address",
      this.withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressListResponse;

    throw new Error(
      `Failed to fetch address list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request fails
   */
  public async changeDefaultShippingAddress(addressId: string): Promise<undefined> {
    const response = await this.post(
      `/account/address/default-shipping/${addressId}`,
      this.withContextToken()
    );

    if (response.statusCode === 200) return undefined;

    throw new Error(
      `Failed to change default shipping address: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request fails
   */
  public async changeDefaultBillingAddress(addressId: string): Promise<undefined> {
    const response = await this.post(
      `/account/address/default-billing/${addressId}`,
      this.withContextToken()
    );

    if (response.statusCode === 200) return undefined;

    throw new Error(
      `Failed to change default billing address: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request fails
   */
  public async createAddress(request: AddressCreateRequest): Promise<AddressCreateResponse> {
    const response = await this.post(
      "/account/address",
      this.withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressCreateResponse;

    throw new Error(`Failed to add address: ${response.statusCode} ${response.statusMessage}`);
  }
}

export default AddressClient;
