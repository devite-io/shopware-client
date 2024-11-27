import { Client } from "#clients";
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
  AccountUpdateResponse
} from "#types";
import { JsonPayload } from "#payloads";

class AccountClient extends Client {
  /**
   * @throws {Error} if the request fails
   */
  public async getNewsletterRecipientList(
    request: AccountNewsletterRecipientListRequest = {}
  ): Promise<AccountNewsletterRecipientListResponse> {
    const response = await this.post(`/account/newsletter-recipient`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountNewsletterRecipientListResponse;

    throw new Error(
      `Failed to fetch newsletter recipient list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request fails
   */
  public async changeProfile(request: AccountUpdateRequest): Promise<AccountUpdateResponse> {
    const response = await this.post(`/account/change-profile`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountUpdateResponse;

    throw new Error(`Failed to change profile: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request fails
   */
  public async changeEmail(
    request: AccountEmailChangeRequest
  ): Promise<AccountEmailChangeResponse> {
    const response = await this.post(`/account/change-email`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountEmailChangeResponse;

    throw new Error(`Failed to change email: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request fails
   */
  public async changeLanguage(
    request: AccountLanguageChangeRequest
  ): Promise<AccountLanguageChangeResponse> {
    const response = await this.post(`/account/change-language`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountLanguageChangeResponse;

    throw new Error(`Failed to change language: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request fails
   */
  public async changePassword(
    request: AccountPasswordChangeRequest
  ): Promise<AccountPasswordChangeResponse> {
    const response = await this.post(`/account/change-password`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountPasswordChangeResponse;

    throw new Error(`Failed to change password: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request fails
   */
  public async changePaymentMethod(
    paymentMethodId: string
  ): Promise<AccountPaymentMethodChangeResponse> {
    const response = await this.post(`/account/change-payment-method/${paymentMethodId}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountPaymentMethodChangeResponse;

    throw new Error(
      `Failed to change payment method: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request fails
   */
  public async isCustomerRecoveryExpired(
    request: AccountRecoveryExpiryCheckRequest
  ): Promise<AccountRecoveryExpiryCheckResponse> {
    const response = await this.post(`/account/customer-recovery-is-expired`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountRecoveryExpiryCheckResponse;

    throw new Error(
      `Failed to check if customer recovery is expired: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request fails
   */
  public async getCustomer(request: AccountGetRequest = {}): Promise<AccountGetResponse> {
    const response = await this.get(`/account/customer`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountGetResponse;

    throw new Error(`Failed to fetch customer: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request fails
   */
  public async deleteCustomer(): Promise<undefined> {
    const response = await this.delete(`/account/customer`);

    if (response.statusCode === 200) return undefined;

    throw new Error(`Failed to delete customer: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request fails
   */
  public async confirmRecoveryPassword(
    request: AccountPasswordRecoveryRequest
  ): Promise<AccountPasswordRecoveryResponse> {
    const response = await this.post(`/account/recovery-password-confirm`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountPasswordRecoveryResponse;

    throw new Error(
      `Failed to confirm recovery password: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request fails
   */
  public async requestPasswordRecoveryMail(
    request: AccountPasswordRecoveryMailRequest
  ): Promise<AccountPasswordRecoveryMailResponse> {
    const response = await this.post(`/account/recovery-password`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccountPasswordRecoveryMailResponse;

    throw new Error(
      `Failed to request password recovery mail: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default AccountClient;
