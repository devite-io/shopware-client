import { AuthenticationType } from "..";
import { ClientRequestOptions, ClientResponse } from "#types";

interface AuthenticationEntry {
  getType(): AuthenticationType;

  isSaved(): boolean;

  save(response: ClientResponse): void;

  clear(): void;

  /** @throws {NotSavedError} if no authentication data has been saved */
  load(): ClientRequestOptions;
}

export default AuthenticationEntry;
