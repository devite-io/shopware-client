import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import ShopwareError from "#http/ShopwareError";
import {
  CMSPageResolveResponse,
  ContactFormSubmitRequest,
  ContactFormSubmitResponse,
  LandingPageResolveRequest,
  LandingPageResolveResponse,
  MediaEntityResolveRequest,
  MediaEntityResolveResponse
} from "#types/clients/store/ContentClient";

class ContentClient extends Client {
  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async submitContactForm(
    request: ContactFormSubmitRequest
  ): Promise<ContactFormSubmitResponse> {
    const response = await this.post("/contact-form", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ContactFormSubmitResponse;

    throw new ShopwareError("Failed to submit contact form", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async resolveCMSPage(id: string): Promise<CMSPageResolveResponse> {
    const response = await this.get(`/cms/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CMSPageResolveResponse;

    throw new ShopwareError("Failed to resolve CMS page", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async resolveMedia(
    request: MediaEntityResolveRequest
  ): Promise<MediaEntityResolveResponse> {
    const response = await this.post("/media", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaEntityResolveResponse;

    throw new ShopwareError("Failed to resolve media", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async resolveLandingPage(
    landingPageId: string,
    request: LandingPageResolveRequest
  ): Promise<LandingPageResolveResponse> {
    const response = await this.post(`/landing-page/${landingPageId}`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LandingPageResolveResponse;

    throw new ShopwareError("Failed to resolve landing page", response);
  }
}

export default ContentClient;
