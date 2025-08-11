import { ShopwareDocumentBaseConfig } from "#types/api/admin/document/baseConfig/ShopwareDocumentBaseConfig";
import { StateMachineTransition } from "#types/api/admin/stateMachine/StateMachineTransition";

/** Document Management **/

export interface DownloadMergedRequest {
  documentIds?: Array<string>;
}
export type DownloadMergedResponse = Blob;

export type DocumentListCreateRequest = Array<{
  orderId: string;
  fileType?: string;
  documentNumber?: string;
  documentDate?: string;
  referencedDocumentId?: string;
  config?: ShopwareDocumentBaseConfig;
  custom?: Record<string, any>;
}>;

export type DocumentListCreateResponse = {
  data: Array<{ documentId: string; a11yDocumentId?: string }>;
  errors: Array<{ code?: string; detail?: string }>;
};

/** Order Management **/

export interface StateTransitionRequest {
  sendMail?: boolean;
  documentIds?: Array<string>;
  mediaIds?: Array<string>;
  /** @default "stateId" */
  stateFieldName?: string;
}
export type StateTransitionResponse = StateMachineTransition;
