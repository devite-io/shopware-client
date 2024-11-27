import Payload from "./Payload";

class BinaryPayload extends Payload<Blob> {
  public static CONTENT_TYPE: string = "application/octet-stream";
  public data?: Blob;

  constructor(data?: Blob) {
    super();
    this.data = data;
  }

  public contentType(): string {
    return BinaryPayload.CONTENT_TYPE;
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
