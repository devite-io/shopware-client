import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import type StoreShopwareClient from "../StoreShopwareClient";
import ShopwareError from "#http/ShopwareError";
import {
  AccountEmailChangeRequest,
  AccountEmailChangeResponse,
  AccountGetRequest,
  AccountGetResponse,
  AccountLanguageChangeRequest,
  AccountLanguageChangeResponse,
  AccountNewsletterRecipientListRequest,
  AccountNewsletterRecipientListResponse,
  AccountPasswordChangeRequest,
  AccountPasswordChangeResponse,
  AccountPasswordRecoveryMailRequest,
  AccountPasswordRecoveryMailResponse,
  AccountPasswordRecoveryRequest,
  AccountPasswordRecoveryResponse,
  AccountPaymentMethodChangeResponse,
  AccountRecoveryExpiryCheckRequest,
  AccountRecoveryExpiryCheckResponse,
  AccountUpdateRequest,
  AccountUpdateResponse,
  CustomerRegisterGroupConfigResponse,
  CustomerRegisterRequest,
  CustomerRegisterResponse,
  CustomerRegistrationConfirmRequest
} from "#types/clients/store/AccountClient";
import ContextTokenEntry from "#auth/entries/ContextTokenEntry";

class AccountClient extends Client {
  /**
   * @throws {Error} if the request failed
   */
  public async getNewsletterRecipients(
    request: AccountNewsletterRecipientListRequest = {}
  ): Promise<AccountNewsletterRecipientListResponse> {
    const response = await this.post(
      `/account/newsletter-recipient`,
      (this.client as StoreShopwareClient).withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountNewsletterRecipientListResponse;

    throw new ShopwareError("Failed to fetch newsletter recipient list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async changeProfile(request: AccountUpdateRequest): Promise<AccountUpdateResponse> {
    const response = await this.post(
      `/account/change-profile`,
      (this.client as StoreShopwareClient).withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountUpdateResponse;

    throw new ShopwareError("Failed to change profile", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async changeEmail(
    request: AccountEmailChangeRequest
  ): Promise<AccountEmailChangeResponse> {
    const response = await this.post(
      `/account/change-email`,
      (this.client as StoreShopwareClient).withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountEmailChangeResponse;

    throw new ShopwareError("Failed to change email", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async changeLanguage(
    request: AccountLanguageChangeRequest
  ): Promise<AccountLanguageChangeResponse> {
    const response = await this.post(
      `/account/change-language`,
      (this.client as StoreShopwareClient).withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountLanguageChangeResponse;

    throw new ShopwareError("Failed to change language", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async changePassword(
    request: AccountPasswordChangeRequest
  ): Promise<AccountPasswordChangeResponse> {
    const response = await this.post(
      `/account/change-password`,
      (this.client as StoreShopwareClient).withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountPasswordChangeResponse;

    throw new ShopwareError("Failed to change password", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async changePaymentMethod(
    paymentMethodId: string
  ): Promise<AccountPaymentMethodChangeResponse> {
    const response = await this.post(
      `/account/change-payment-method/${paymentMethodId}`,
      (this.client as StoreShopwareClient).withContextToken()
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountPaymentMethodChangeResponse;

    throw new ShopwareError("Failed to change payment method", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async isCustomerRecoveryExpired(
    request: AccountRecoveryExpiryCheckRequest
  ): Promise<AccountRecoveryExpiryCheckResponse> {
    const response = await this.post(
      `/account/customer-recovery-is-expired`,
      (this.client as StoreShopwareClient).withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountRecoveryExpiryCheckResponse;

    throw new ShopwareError("Failed to check if customer recovery is expired", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCustomer(request: AccountGetRequest = {}): Promise<AccountGetResponse> {
    const response = await this.get(
      `/account/customer`,
      (this.client as StoreShopwareClient).withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountGetResponse;

    throw new ShopwareError("Failed to fetch customer", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCustomer(): Promise<undefined> {
    const response = await this.delete(
      `/account/customer`,
      (this.client as StoreShopwareClient).withContextToken()
    );

    if (response.statusCode === 200) return undefined;

    throw new ShopwareError("Failed to delete customer", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async confirmRecoveryPassword(
    request: AccountPasswordRecoveryRequest
  ): Promise<AccountPasswordRecoveryResponse> {
    const response = await this.post(
      `/account/recovery-password-confirm`,
      (this.client as StoreShopwareClient).withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountPasswordRecoveryResponse;

    throw new ShopwareError("Failed to confirm recovery password", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async requestPasswordRecoveryMail(
    request: AccountPasswordRecoveryMailRequest
  ): Promise<AccountPasswordRecoveryMailResponse> {
    const response = await this.post(
      `/account/recovery-password`,
      (this.client as StoreShopwareClient).withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountPasswordRecoveryMailResponse;

    throw new ShopwareError("Failed to request password recovery mail", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async confirmRegistration(request: CustomerRegistrationConfirmRequest): Promise<void> {
    const response = await this.post("/account/register-confirm", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200) return;

    throw new ShopwareError("Failed to confirm registration", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async register(request: CustomerRegisterRequest): Promise<CustomerRegisterResponse> {
    const response = await this.post("/account/register", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200) {
      this.client.authStore.getOrCreateEntry(new ContextTokenEntry()).save(response);

      return (response.body as JsonPayload).data as CustomerRegisterResponse;
    }

    throw new ShopwareError("Failed to register", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getRegistrationSettingsForGroup(
    customerGroupId: string
  ): Promise<CustomerRegisterGroupConfigResponse> {
    const response = await this.get(`/customer-group-registration/config/${customerGroupId}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomerRegisterGroupConfigResponse;

    throw new ShopwareError("Failed to fetch registration settings for group", response);
  }
}

export default AccountClient;
