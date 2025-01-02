export interface CustomerLoginRequest {
  username: string;
  password: string;
}
export interface CustomerLoginResponse {
  redirectUrl?: string;
}

export interface CustomerLogoutResponse {
  redirectUrl?: string;
}

export interface CustomerLoginImitateRequest {
  token: string;
  customerId: string;
  userId: string;
}
export interface CustomerLoginImitateResponse {
  redirectUrl?: string;
}
