import { readdir } from "node:fs/promises";
import { resolve } from "node:path";
import { doOperation } from "./utils/do-operation.js";

const directory = resolve(import.meta.dirname, "./files");

const readdirOptions = {
    recursive: true,
    withFileTypes: false,
};

const list = async () => {
    const files = await doOperation(readdir, directory, readdirOptions);
    console.log(files);
};

await list();
