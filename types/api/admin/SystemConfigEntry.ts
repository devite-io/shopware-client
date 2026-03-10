export interface SystemConfigEntry {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  configurationKey: string;
  configurationValue: { _value?: string };
}
