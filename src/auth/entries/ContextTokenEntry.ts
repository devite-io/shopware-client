import { AuthenticationEntry } from ".";
import { ClientRequestOptions, ClientResponse } from "#types";
import { AuthenticationType, NotSavedError } from "..";

class ContextTokenEntry implements AuthenticationEntry {
  public token: string | null = null;

  constructor(token: string | null = null) {
    this.token = token;
  }

  getType(): AuthenticationType {
    return AuthenticationType.CONTEXT_TOKEN;
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
      throw new NotSavedError("Context token is not saved");
    }

    return {
      headers: { "sw-context-token": this.token || "" }
    };
  }
}

export default ContextTokenEntry;
