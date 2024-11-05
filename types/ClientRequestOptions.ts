import { HTTPRequestMethod } from ".";

export type ClientRequestOptions = {
  method: HTTPRequestMethod;
  headers: Record<string, string>;
  body?: string | Record<string, any> | ArrayBuffer;
};
