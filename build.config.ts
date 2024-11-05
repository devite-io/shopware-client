import { resolve } from "node:path";
import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["./src/index"],
  alias: {
    "#types": resolve(__dirname, "./types"),
    "#utils": resolve(__dirname, "./src/utils"),
    "#clients": resolve(__dirname, "./src/clients")
  },
  declaration: true,
  rollup: {
    cjsBridge: true,
    emitCJS: true
  },
  failOnWarn: false
});
