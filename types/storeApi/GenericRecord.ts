export type GenericRecord =
  | never
  | null
  | string
  | Array<String>
  | number
  | { [key: string]: GenericRecord };
