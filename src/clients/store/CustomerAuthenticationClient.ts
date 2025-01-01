import Client from "#clients/Client";
import {
  CustomerLoginImitateRequest,
  CustomerLoginImitateResponse,
  CustomerLoginRequest,
  CustomerLoginResponse,
  CustomerLogoutResponse
} from "#types/clients/store/CustomerAuthenticationClient";
import JsonPayload from "#payloads/JsonPayload";
import ContextTokenEntry from "#auth/entries/ContextTokenEntry";
import AuthenticationType from "#auth/AuthenticationType";

class CustomerAuthenticationClient extends Client {
  /**
   * @throws {Error} if the request failed
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
   * @throws {Error} if the request failed
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
   * @throws {Error} if the request failed
   */
  public async logout(): Promise<CustomerLogoutResponse> {
    const response = await this.post("/account/logout", this.withContextToken());

    if (response.statusCode === 200) {
      this.client.authStore.getEntry(AuthenticationType.CONTEXT_TOKEN)?.clear();

      return (response.body as JsonPayload).data as CustomerLogoutResponse;
    }

    throw new Error(`Failed to logout: ${response.statusCode} ${response.statusMessage}`);
  }
}

export default CustomerAuthenticationClient;
