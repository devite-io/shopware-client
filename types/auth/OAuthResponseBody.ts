export interface OAuthResponseBody {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
}
