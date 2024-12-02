import { afterAll, beforeAll, expect, test, vi } from "vitest";
import { ExpiredError, NotSavedError, OAuthEntry } from "#auth";
import { JsonPayload } from "#payloads";

function getTestEntry() {
  return new OAuthEntry("token", "refresh", Date.now() + 3600 * 1000);
}

beforeAll(() => {
  vi.useFakeTimers();
});

afterAll(() => {
  vi.useRealTimers();
});

test("save sets token from response", () => {
  const entry = new OAuthEntry();

  entry.save({
    statusCode: 200,
    statusMessage: "OK",
    body: new JsonPayload({
      access_token: "token",
      refresh_token: "refresh",
      expires_in: 3600
    })
  });

  expect(entry.accessToken).toBe("token");
  expect(entry.refreshToken).toBe("refresh");
  expect(entry.expiresAt).toBe(Date.now() + 3600 * 1000);
});

test("isSaved returns false by default", () => {
  const entry = new OAuthEntry();

  expect(entry.isSaved()).toBe(false);
});

test("isSaved returns true if token is not null", () => {
  const entry = getTestEntry();

  expect(entry.isSaved()).toBe(true);
});

test("clear removes token", () => {
  const entry = getTestEntry();

  entry.clear();

  expect(entry.accessToken).toBe(null);
  expect(entry.refreshToken).toBe(null);
  expect(entry.expiresAt).toBe(null);
});

test("load returns request object with Authorization header", () => {
  const entry = getTestEntry();

  expect(entry.load()).toEqual({
    headers: { Authorization: "Bearer token" }
  });
});

test("load throws NotSavedError if token is null", () => {
  const entry = new OAuthEntry();

  expect(() => entry.load()).toThrow(NotSavedError);
});

test("load throws ExpiredError if token is expired", () => {
  const entry = getTestEntry();

  vi.advanceTimersByTime(3600 * 1000 + 1);

  expect(() => entry.load()).toThrow(ExpiredError);
});
