import Payload from "./Payload";

class BinaryPayload extends Payload<ArrayBuffer> {
  public static CONTENT_TYPE: string = "application/octet-stream";
  public data?: ArrayBuffer;

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
  public async deserialize(data: Blob): Promise<void> {
    this.data = await data.arrayBuffer();
  }

  public serialize(): ArrayBuffer | undefined {
    return this.data;
  }
}

export default BinaryPayload;
