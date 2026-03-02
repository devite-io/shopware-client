export interface Notification {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  status: string;
  message: string;
  adminOnly?: boolean;
  requiredPrivileges?: Array<object>;
}
