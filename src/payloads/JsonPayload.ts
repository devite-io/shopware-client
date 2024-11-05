import Payload from "./Payload";

class JsonPayload extends Payload<string> {
  public static CONTENT_TYPE: string = "application/json";
  private data?: object;

  constructor(data?: object) {
    super();
    this.data = data;
  }

  public contentType(): string {
    return JsonPayload.CONTENT_TYPE;
  }

  /**
   * @throws {SyntaxError} if the data is not a valid JSON string
   */
  public deserialize(data: ArrayBuffer): void {
    this.data = JSON.parse(data.toString());
  }

  public serialize(): string | undefined {
    if (!this.data) return undefined;

    return JSON.stringify(this.data);
  }
}

export default JsonPayload;
