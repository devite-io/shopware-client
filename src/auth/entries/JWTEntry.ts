import { AuthenticationEntry } from ".";
import { ClientRequestOptions, ClientResponse } from "#types";
import { AuthenticationType, NotSavedError } from "..";

class JWTEntry implements AuthenticationEntry {
  private token: string | null = null;

  getType(): AuthenticationType {
    return AuthenticationType.JWT;
  }

  isSaved(): boolean {
    return this.token !== null;
  }

  save(response: ClientResponse): void {
    this.token = response.headers?.get("sw-context-token") || null;
  }

  clear(): void {
    this.token = null;
  }

  load(): ClientRequestOptions {
    if (!this.isSaved()) {
      throw new NotSavedError("JWT token is not saved");
    }

    return {
      headers: { "sw-context-token": this.token || "" }
    };
  }
}

export default JWTEntry;
