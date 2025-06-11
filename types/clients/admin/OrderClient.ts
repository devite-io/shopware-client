import { ShopwareDocumentBaseConfig } from "#types/api/admin/document/baseConfig/ShopwareDocumentBaseConfig";
import { StateMachineTransition } from "#types/api/admin/stateMachine/StateMachineTransition";

/** Document Management **/

export interface DownloadMergedRequest {
  documentIds?: Array<string>;
}
export type DownloadMergedResponse = Blob;

export type DocumentListCreateRequest = Array<{
  orderId: string;
  type: string;
  fileType?: string;
  static: boolean;
  referencedDocumentId?: string;
  config?: ShopwareDocumentBaseConfig;
}>;

/** Order Management **/

export interface StateTransitionRequest {
  sendMail?: boolean;
  documentIds?: Array<string>;
  mediaIds?: Array<string>;
  /** @default "stateId" */
  stateFieldName?: string;
}
export type StateTransitionResponse = StateMachineTransition;
