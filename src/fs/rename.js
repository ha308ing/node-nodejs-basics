import { rename as fsRename } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { checkPath } from "./utils/check-path.js";
import { doOperation } from "./utils/do-operation.js";
import { throwError } from "./utils/throw-error.js";

const file = resolve(import.meta.dirname, "./files/wrongFilename.txt");
const newFileName = "properFilename.md";

const directory = dirname(file);
const newFile = resolve(directory, newFileName);

const rename = async () => {
    console.log(`Renaming ${file}\nto ${newFile}`);
    const isNewFileExists = await checkPath(newFile);

    if (isNewFileExists) throwError();

    doOperation(fsRename, file, newFile);
};

await rename();
