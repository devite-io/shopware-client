import Client from "#clients/Client";
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
import JsonPayload from "#payloads/JsonPayload";

class AccountClient extends Client {
  /**
   * @throws {Error} if the request failed
   */
  public async getNewsletterRecipients(
    request: AccountNewsletterRecipientListRequest = {}
  ): Promise<AccountNewsletterRecipientListResponse> {
    const response = await this.post(
      `/account/newsletter-recipient`,
      this.withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountNewsletterRecipientListResponse;

    throw new Error(
      `Failed to fetch newsletter recipient list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async changeProfile(request: AccountUpdateRequest): Promise<AccountUpdateResponse> {
    const response = await this.post(
      `/account/change-profile`,
      this.withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountUpdateResponse;

    throw new Error(`Failed to change profile: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async changeEmail(
    request: AccountEmailChangeRequest
  ): Promise<AccountEmailChangeResponse> {
    const response = await this.post(
      `/account/change-email`,
      this.withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountEmailChangeResponse;

    throw new Error(`Failed to change email: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async changeLanguage(
    request: AccountLanguageChangeRequest
  ): Promise<AccountLanguageChangeResponse> {
    const response = await this.post(
      `/account/change-language`,
      this.withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountLanguageChangeResponse;

    throw new Error(`Failed to change language: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async changePassword(
    request: AccountPasswordChangeRequest
  ): Promise<AccountPasswordChangeResponse> {
    const response = await this.post(
      `/account/change-password`,
      this.withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountPasswordChangeResponse;

    throw new Error(`Failed to change password: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async changePaymentMethod(
    paymentMethodId: string
  ): Promise<AccountPaymentMethodChangeResponse> {
    const response = await this.post(
      `/account/change-payment-method/${paymentMethodId}`,
      this.withContextToken()
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountPaymentMethodChangeResponse;

    throw new Error(
      `Failed to change payment method: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async isCustomerRecoveryExpired(
    request: AccountRecoveryExpiryCheckRequest
  ): Promise<AccountRecoveryExpiryCheckResponse> {
    const response = await this.post(
      `/account/customer-recovery-is-expired`,
      this.withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountRecoveryExpiryCheckResponse;

    throw new Error(
      `Failed to check if customer recovery is expired: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCustomer(request: AccountGetRequest = {}): Promise<AccountGetResponse> {
    const response = await this.get(
      `/account/customer`,
      this.withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountGetResponse;

    throw new Error(`Failed to fetch customer: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCustomer(): Promise<undefined> {
    const response = await this.delete(`/account/customer`, this.withContextToken());

    if (response.statusCode === 200) return undefined;

    throw new Error(`Failed to delete customer: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async confirmRecoveryPassword(
    request: AccountPasswordRecoveryRequest
  ): Promise<AccountPasswordRecoveryResponse> {
    const response = await this.post(
      `/account/recovery-password-confirm`,
      this.withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountPasswordRecoveryResponse;

    throw new Error(
      `Failed to confirm recovery password: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async requestPasswordRecoveryMail(
    request: AccountPasswordRecoveryMailRequest
  ): Promise<AccountPasswordRecoveryMailResponse> {
    const response = await this.post(
      `/account/recovery-password`,
      this.withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountPasswordRecoveryMailResponse;

    throw new Error(
      `Failed to request password recovery mail: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async confirmRegistration(request: CustomerRegistrationConfirmRequest): Promise<void> {
    const response = await this.post("/account/register-confirm", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200) return;

    throw new Error(
      `Failed to confirm registration: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(`Failed to register: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to fetch registration settings for group: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default AccountClient;
