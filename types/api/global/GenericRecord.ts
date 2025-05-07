export type GenericRecord =
  | Record<string, string | number | null | Array<string>>
  | string
  | number
  | null
  | Array<string>;
