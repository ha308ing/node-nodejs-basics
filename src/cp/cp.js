import { fork } from "node:child_process";
import { resolve } from "node:path";

const script = resolve(import.meta.dirname, "./files/script.js");

const spawnChildProcess = async (args) => {
    fork(script, args);
};

spawnChildProcess(["someArgument1", "someArgument2", "someArgument3"]);
