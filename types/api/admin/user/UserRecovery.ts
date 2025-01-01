import { User } from "./User";

export interface UserRecovery {
  id: string;
  hash: string;
  userId: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  user?: User;
}
