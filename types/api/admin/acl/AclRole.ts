export interface AclRole {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  readonly deletedAt?: string;
  name: string;
  description?: string;
  privileges?: Array<"read" | "write" | "delete">;
}
