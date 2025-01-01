import { User } from "./User";

export interface UserConfig {
  id: string;
  userId: string;
  key: string;
  value?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  user?: User;
}
