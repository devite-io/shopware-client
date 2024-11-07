abstract class Payload<T> {
  public abstract contentType(): string;
  public abstract deserialize(data: Blob): Promise<void>;
  public abstract serialize(): T | undefined;
}

export default Payload;
