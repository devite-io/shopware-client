import { expect, test } from "vitest";
import ContextTokenEntry from "#auth/entries/ContextTokenEntry";
import NotSavedError from "#auth/errors/NotSavedError";

function saveTestToken(entry: ContextTokenEntry) {
  entry.save({
    statusCode: 200,
    statusMessage: "OK",
    headers: new Headers({ "sw-context-token": "token" })
  });
}

test("save sets token from response", () => {
  const entry = new ContextTokenEntry();

  saveTestToken(entry);

  expect(entry.token).toBe("token");
});

test("isSaved returns false by default", () => {
  const entry = new ContextTokenEntry();

  expect(entry.isSaved()).toBe(false);
});

test("isSaved returns true if token is not null", () => {
  const entry = new ContextTokenEntry();

  saveTestToken(entry);

  expect(entry.isSaved()).toBe(true);
});

test("clear removes token", () => {
  const entry = new ContextTokenEntry();

  saveTestToken(entry);

  entry.clear();

  expect(entry.token).toBe(null);
});

test("load returns request object with token", () => {
  const entry = new ContextTokenEntry();

  saveTestToken(entry);

  expect(entry.load()).toEqual({
    headers: { "sw-context-token": "token" }
  });
});

test("load throws NotSavedError if token is null", () => {
  const entry = new ContextTokenEntry();

  expect(() => entry.load()).toThrow(NotSavedError);
});
