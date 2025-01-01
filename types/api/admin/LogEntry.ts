export interface LogEntry {
  id: string;
  message?: string;
  level?: number;
  channel?: string;
  context?: object;
  extra?: object;
  readonly createdAt?: string;
  readonly updatedAt?: string;
}
