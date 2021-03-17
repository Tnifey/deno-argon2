import { argon2, Command } from "../deps.ts";

import { readStdin } from "../util.ts";

export let verify = new Command()
  .version(argon2.version())
  .description("Hash a new password or verify an already existing one.")
  .option("-H, --hash <arg:string>", "", { required: true })
  .action(async (options: { hash: unknown }) => {
    let password = await readStdin();

    console.log(await argon2.verify(options.hash, password));
  });
