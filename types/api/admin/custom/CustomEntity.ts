export interface CustomEntity {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  readonly deletedAt?: string;
  name: string;
  storeApiAware?: boolean;
  customFieldsAware?: boolean;
  labelProperty?: string;
}
