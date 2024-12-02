import { expect, test } from "vitest";
import { AuthenticationStore, AuthenticationType, ContextTokenEntry } from "#auth";

test("getOrCreateEntry to create new entry", () => {
  const store = new AuthenticationStore();

  const entry = store.getOrCreateEntry(new ContextTokenEntry());

  expect(store.entries.get(AuthenticationType.CONTEXT_TOKEN)).toBe(entry);
});

test("getOrCreateEntry to return existing entry", () => {
  const store = new AuthenticationStore();

  const entry = store.getOrCreateEntry(new ContextTokenEntry());
  const entry2 = store.getOrCreateEntry(new ContextTokenEntry());

  expect(entry).toBe(entry2);
});

test("getEntry to return undefined when entry does not exist", () => {
  const store = new AuthenticationStore();

  expect(store.getEntry(AuthenticationType.CONTEXT_TOKEN)).toBeUndefined();
});

test("getEntry to return existing entry", () => {
  const store = new AuthenticationStore();
  const entry = new ContextTokenEntry();

  store.entries.set(AuthenticationType.CONTEXT_TOKEN, entry);

  expect(store.getEntry(AuthenticationType.CONTEXT_TOKEN)).toBe(entry);
});
