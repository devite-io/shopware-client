export interface AppActionButton {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  action: string;
  label: string;
  url: string;
  translated?: Record<string, string>;
}
