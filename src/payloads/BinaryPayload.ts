import Payload from "./Payload";

class BinaryPayload extends Payload<Blob> {
  public static CONTENT_TYPES: string[] = ["application/octet-stream", "application/pdf"];
  public data?: Blob;

  constructor(data?: Blob) {
    super();
    this.data = data;
  }

  public contentTypes(): string[] {
    return BinaryPayload.CONTENT_TYPES;
  }

  /**
   * @throws {SyntaxError} if the data is not a valid JSON string
   */
  public async deserialize(data: Blob): Promise<void> {
    this.data = data;
  }

  public serialize(): Blob | undefined {
    return this.data;
  }
}

export default BinaryPayload;
