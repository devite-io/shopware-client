import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import ShopwareError from "#http/ShopwareError";
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

class SystemClient extends Client {
  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getLanguages(request: LanguageListRequest = {}): Promise<LanguageListResponse> {
    const response = await this.post("/language", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LanguageListResponse;

    throw new ShopwareError("Failed to fetch language list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getSalutations(
    request: SalutationListRequest = {}
  ): Promise<SalutationListResponse> {
    const response = await this.post("/salutation", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalutationListResponse;

    throw new ShopwareError("Failed to fetch salutations list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getCurrencies(request: CurrencyListRequest = {}): Promise<CurrencyListResponse> {
    const response = await this.post("/currency", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CurrencyListResponse;

    throw new ShopwareError("Failed to fetch currency list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
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

    throw new ShopwareError("Failed to fetch country state list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getCountries(request: CountryListRequest = {}): Promise<CountryListResponse> {
    const response = await this.post("/country", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CountryListResponse;

    throw new ShopwareError("Failed to fetch country list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getShippingMethods(
    request: ShippingMethodListRequest = {},
    onlyAvailable: boolean = false
  ): Promise<ShippingMethodListResponse> {
    const response = await this.post(`/shipping-method?onlyAvailable=${onlyAvailable ? 1 : 0}`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ShippingMethodListResponse;

    throw new ShopwareError("Failed to fetch shipping methods", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getPaymentMethods(
    request: PaymentMethodListRequest = {},
    onlyAvailable: boolean = false
  ): Promise<PaymentMethodListResponse> {
    const response = await this.post(`/payment-method?onlyAvailable=${onlyAvailable ? 1 : 0}`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PaymentMethodListResponse;

    throw new ShopwareError("Failed to fetch payment methods", response);
  }
}

export default SystemClient;
