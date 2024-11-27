class ExpiredError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "ExpiredError";
  }
}

export default ExpiredError;
