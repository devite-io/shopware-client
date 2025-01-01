export interface EntitySearchResult {
  entity?: string;
  total?: number;
  aggregations?: Array<object>;
  page?: number;
  limit?: number;
}
