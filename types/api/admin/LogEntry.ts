export interface LogEntry {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  level?: number;
  message?: string;
  channel?: string;
  context?: object;
}
