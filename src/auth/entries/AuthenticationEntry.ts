import AuthenticationType from "#auth/AuthenticationType";
import { ClientResponse } from "#types/ClientResponse";
import { ClientRequestOptions } from "#types/ClientRequestOptions";

interface AuthenticationEntry {
  getType(): AuthenticationType;

  isSaved(): boolean;

  save(response: ClientResponse): void;

  clear(): void;

  /** @throws {NotSavedError} if no authentication data has been saved */
  load(): ClientRequestOptions;
}

export default AuthenticationEntry;
