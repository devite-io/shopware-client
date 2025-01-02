import Client from "#clients/Client";
import {
  CountryListRequest,
  CountryListResponse,
  CountryStateListRequest,
  CountryStateListResponse,
  CurrencyListRequest,
  CurrencyListResponse,
  LanguageListRequest,
  LanguageListResponse,
  PaymentMethodListRequest,
  PaymentMethodListResponse,
  SalutationListRequest,
  SalutationListResponse,
  ShippingMethodListRequest,
  ShippingMethodListResponse
} from "#types/clients/store/SystemClient";
import JsonPayload from "#payloads/JsonPayload";

class SystemClient extends Client {
  /**
   * @throws {Error} if the request failed
   */
  public async getLanguages(request: LanguageListRequest = {}): Promise<LanguageListResponse> {
    const response = await this.post("/language", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LanguageListResponse;

    throw new Error(
      `Failed to fetch language list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSalutations(
    request: SalutationListRequest = {}
  ): Promise<SalutationListResponse> {
    const response = await this.post("/salutation", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalutationListResponse;

    throw new Error(
      `Failed to fetch salutations list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCurrencies(request: CurrencyListRequest = {}): Promise<CurrencyListResponse> {
    const response = await this.post("/currency", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CurrencyListResponse;

    throw new Error(
      `Failed to fetch currency list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCountryStates(
    countryId: string,
    request: CountryStateListRequest = {}
  ): Promise<CountryStateListResponse> {
    const response = await this.post(`/country-state/${countryId}`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CountryStateListResponse;

    throw new Error(
      `Failed to fetch country state list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCountries(request: CountryListRequest = {}): Promise<CountryListResponse> {
    const response = await this.post("/country", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CountryListResponse;

    throw new Error(
      `Failed to fetch country list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getShippingMethods(
    request: ShippingMethodListRequest = {}
  ): Promise<ShippingMethodListResponse> {
    const response = await this.post(`/shipping-method`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ShippingMethodListResponse;

    throw new Error(
      `Failed to fetch shipping methods: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getPaymentMethods(
    request: PaymentMethodListRequest = {}
  ): Promise<PaymentMethodListResponse> {
    const response = await this.post(`/payment-method`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PaymentMethodListResponse;

    throw new Error(
      `Failed to fetch payment methods: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default SystemClient;