import { Integration } from "./integration/Integration";
import { User } from "./user/User";

export interface Notification {
  id: string;
  status: string;
  message: string;
  adminOnly?: boolean;
  requiredPrivileges?: Array<object>;
  createdByIntegrationId?: string;
  createdByUserId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  createdByIntegration: Integration;
  createdByUser: User;
}
