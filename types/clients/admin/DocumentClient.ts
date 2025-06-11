/** Document Management **/

export interface NumberReservationResponse {
  number?: string;
}

export interface UploadResponse {
  documentId?: string;
  documentDeepLink?: string;
}

export type DownloadResponse = Blob;
