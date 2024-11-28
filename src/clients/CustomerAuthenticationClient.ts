import { Client } from "#clients";
import {
  CustomerLoginImitateRequest,
  CustomerLoginImitateResponse,
  CustomerLoginRequest,
  CustomerLoginResponse,
  CustomerLogoutResponse,
  CustomerRegisterGroupConfigResponse,
  CustomerRegisterRequest,
  CustomerRegisterResponse,
  CustomerRegistrationConfirmRequest
} from "#types";
import { JsonPayload } from "#payloads";
import { AuthenticationType, ContextTokenEntry } from "#auth";

class CustomerAuthenticationClient extends Client {
  /**
   * @throws {Error} if the request fails
   */
  public async login(request: CustomerLoginRequest): Promise<CustomerLoginResponse> {
    const response = await this.post("/account/login", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200) {
      this.client.authStore.getOrCreateEntry(new ContextTokenEntry()).save(response);

      return (response.body as JsonPayload).data as CustomerLoginResponse;
    }

    throw new Error(`Failed to login: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request fails
   */
  public async imitateLogin(
    request: CustomerLoginImitateRequest
  ): Promise<CustomerLoginImitateResponse> {
    const response = await this.post("/account/login/imitate-customer", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomerLoginImitateResponse;

    throw new Error(`Failed to imitate login: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request fails
   */
  public async logout(): Promise<CustomerLogoutResponse> {
    const response = await this.post("/account/logout", this.withContextToken());

    if (response.statusCode === 200) {
      this.client.authStore.getEntry(AuthenticationType.CONTEXT_TOKEN)?.clear();

      return (response.body as JsonPayload).data as CustomerLogoutResponse;
    }

    throw new Error(`Failed to logout: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request fails
   */
  public async confirmRegistration(
    request: CustomerRegistrationConfirmRequest
  ): Promise<undefined> {
    const response = await this.post("/account/register-confirm", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200) return undefined;

    throw new Error(
      `Failed to confirm registration: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request fails
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
   * @throws {Error} if the request fails
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

export default CustomerAuthenticationClient;
