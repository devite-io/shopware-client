import Payload from "./Payload";

class HtmlPayload extends Payload<string> {
  public static CONTENT_TYPES: string[] = ["text/html"];
  public data?: string;

  constructor(data?: string) {
    super();
    this.data = data;
  }

  public contentTypes(): string[] {
    return HtmlPayload.CONTENT_TYPES;
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
