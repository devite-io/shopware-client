class NotSavedError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "NotSavedError";
  }
}

export default NotSavedError;
