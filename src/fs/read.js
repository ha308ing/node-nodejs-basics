import { readFile } from "node:fs/promises";
import { doOperation } from "./utils/do-operation.js";
import { resolve } from "node:path";

const file = resolve(import.meta.dirname, "./files/fileToRead.txt");

const readFileOptions = {
    encoding: "utf-8",
};

const read = async () => {
    const content = await doOperation(readFile, file, readFileOptions);
    console.log(content);
};

await read();
