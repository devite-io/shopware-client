export type MainCategory = {
  id: string;
  productId: string;
  productVersionId?: string;
  categoryId: string;
  categoryVersionId?: string;
  salesChannelId: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
};
