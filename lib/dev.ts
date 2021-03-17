import { installPlugin } from "./internal.ts";

export {
  MIN_SALT_SIZE,
  ThreadMode,
  Variant,
  Version,
  version,
} from "./common.ts";
export type { HashOptions } from "./common.ts";

export { Argon2Error, Argon2ErrorType } from "./error.ts";

export let { verify, hash } = await installPlugin("file://target/debug", {
  buildPlugin: "dev",
  printLog: true,
  checkCache: false,
});
