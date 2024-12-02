import { AuthenticationEntry } from "./entries";
import AuthenticationType from "./AuthenticationType";

class AuthenticationStore {
  public entries: Map<AuthenticationType, AuthenticationEntry> = new Map<
    AuthenticationType,
    AuthenticationEntry
  >();

  public getOrCreateEntry(entry: AuthenticationEntry): AuthenticationEntry {
    const existingEntry = this.getEntry(entry.getType());

    if (existingEntry) {
      return existingEntry;
    }

    this.entries.set(entry.getType(), entry);

    return entry;
  }

  public getEntry(type: AuthenticationType): AuthenticationEntry | undefined {
    return this.entries.get(type);
  }
}

export default AuthenticationStore;
