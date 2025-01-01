import Client from "#clients/Client";
import {
  CMSPageResolveResponse,
  ContactFormSubmitRequest,
  ContactFormSubmitResponse,
  LandingPageResolveRequest,
  LandingPageResolveResponse,
  MediaEntityResolveRequest,
  MediaEntityResolveResponse
} from "#types/clients/store/ContentClient";
import JsonPayload from "#payloads/JsonPayload";

class ContentClient extends Client {
  /**
   * @throws {Error} if the request failed
   */
  public async submitContactForm(
    request: ContactFormSubmitRequest
  ): Promise<ContactFormSubmitResponse> {
    const response = await this.post("/contact-form", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ContactFormSubmitResponse;

    throw new Error(
      `Failed to submit contact form: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async resolveCMSPage(id: string): Promise<CMSPageResolveResponse> {
    const response = await this.get(`/cms/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CMSPageResolveResponse;

    throw new Error(`Failed to resolve CMS page: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async resolveMedia(
    request: MediaEntityResolveRequest
  ): Promise<MediaEntityResolveResponse> {
    const response = await this.post("/media", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaEntityResolveResponse;

    throw new Error(`Failed to resolve media: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(
      `Failed to resolve landing page: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default ContentClient;
