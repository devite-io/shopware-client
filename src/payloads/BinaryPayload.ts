import Payload from "./Payload";

class BinaryPayload extends Payload<ArrayBuffer> {
  public static CONTENT_TYPE: string = "application/octet-stream";
  private data?: ArrayBuffer;

  constructor(data?: ArrayBuffer) {
    super();
    this.data = data;
  }

  public contentType(): string {
    return BinaryPayload.CONTENT_TYPE;
  }

  /**
   * @throws {SyntaxError} if the data is not a valid JSON string
   */
  public deserialize(data: ArrayBuffer): void {
    this.data = data;
  }

  public serialize(): ArrayBuffer | undefined {
    return this.data;
  }
}

export default BinaryPayload;
