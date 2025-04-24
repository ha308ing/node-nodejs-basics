import { unlink } from "node:fs/promises";
import { resolve } from "node:path";
import { doOperation } from "./utils/do-operation.js";

const file = resolve(import.meta.dirname, "./files/fileToRemove.txt");

const remove = async () => {
    console.log(`Removing ${file}`);
    await doOperation(unlink, file);
};

await remove();
