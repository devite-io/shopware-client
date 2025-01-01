import { User } from "../user/User";
import { App } from "../app/App";
import { Integration } from "../integration/Integration";

export interface AclRole {
  id: string;
  name: string;
  description?: string;
  privileges?: Array<"read" | "write" | "delete">;
  deletedAt?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  users?: Array<User>;
  app?: App;
  integrations?: Array<Integration>;
}
