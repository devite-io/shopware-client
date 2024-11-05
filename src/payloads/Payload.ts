abstract class Payload<T> {
  public abstract contentType(): string;
  public abstract deserialize(data: ArrayBuffer): void;
  public abstract serialize(): T | undefined;
}

export default Payload;
