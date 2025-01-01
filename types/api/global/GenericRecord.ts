export type GenericRecord =
  | never
  | null
  | string
  | Array<string>
  | number
  | { [key: string]: GenericRecord };
