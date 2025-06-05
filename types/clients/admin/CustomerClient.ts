/** Impersonation **/

export interface ImpersonationTokenRequest {
  customerId: string;
  salesChannelId: string;
}
export interface ImpersonationTokenResponse {
  token?: string;
}
