import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

export default defineConfig({
  test: {
    alias: {
      "#types": resolve(__dirname, "./types"),
      "#utils": resolve(__dirname, "./src/utils"),
      "#clients": resolve(__dirname, "./src/clients"),
      "#payloads": resolve(__dirname, "./src/payloads"),
      "#auth": resolve(__dirname, "./src/auth")
    }
  }
});
