import Payload from "./Payload";

class HtmlPayload extends Payload<string> {
  public static CONTENT_TYPE: string = "text/html";
  public data?: string;

  constructor(data?: string) {
    super();
    this.data = data;
  }

  public contentType(): string {
    return HtmlPayload.CONTENT_TYPE;
  }

  /**
   * @throws {SyntaxError} if the data is not a valid JSON string
   */
  public async deserialize(data: Blob): Promise<void> {
    this.data = await data.text();
  }

  public serialize(): string | undefined {
    if (!this.data) return undefined;

    return this.data;
  }
}

export default HtmlPayload;
