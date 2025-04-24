import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { doOperation } from "./utils/do-operation.js";

const file = resolve(import.meta.dirname, "./files/fresh.txt");

const fileContent = "I am fresh and young";

const writeOptions = {
    flag: "ax+",
};

const create = async () => {
    await doOperation(writeFile, file, fileContent, writeOptions);
    console.log(file);
};

await create();
