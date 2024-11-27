import { AuthenticationEntry } from ".";
import { ClientResponse } from "#types";
import { JsonPayload } from "#payloads";
import { AuthenticationType, ExpiredError, NotSavedError } from "..";

class OAuthEntry implements AuthenticationEntry {
  private accessToken: string | null = null;
  private refreshToken: string | null = null;
  private expiresAt: number | null = null;

  getType(): AuthenticationType {
    return AuthenticationType.OAUTH;
  }

  isSaved(): boolean {
    return this.accessToken !== null && this.refreshToken !== null && this.expiresAt !== null;
  }

  save(response: ClientResponse): void {
    const jsonBody = (response.body as JsonPayload).data;
    this.accessToken = jsonBody?.access_token || null;
    this.refreshToken = jsonBody?.refresh_token || null;
    this.expiresAt = Date.now() + (jsonBody?.expires_in || 0) * 1_000;
  }

  clear(): void {
    this.accessToken = null;
    this.refreshToken = null;
  }

  /** @throws {ExpiredError} if the authentication data has expired */
  load(): any {
    if (!this.isSaved()) {
      throw new NotSavedError("OAuth tokens are not saved");
    }

    if (this.expiresAt && Date.now() >= this.expiresAt) {
      throw new ExpiredError("OAuth tokens are expired");
    }

    return {
      headers: { Authorization: `Bearer ${this.accessToken}` }
    };
  }
}

export default OAuthEntry;
