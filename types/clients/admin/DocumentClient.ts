/** Document Management **/

export interface UploadResponse {
  documentId?: string;
  documentDeepLink?: string;
}

export type DownloadResponse = Blob;
