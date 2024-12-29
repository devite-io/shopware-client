import { resolve } from "node:path";
import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["./src/index"],
  alias: {
    "#types": resolve(__dirname, "./types"),
    "#clients": resolve(__dirname, "./src/clients"),
    "#payloads": resolve(__dirname, "./src/payloads"),
    "#auth": resolve(__dirname, "./src/auth")
  },
  declaration: true,
  rollup: {
    cjsBridge: true,
    emitCJS: true
  },
  failOnWarn: false
});
