import path from "node:path";
import fs from "node:fs";
import { checkPath, throwError, doOperation } from "./helpers/index.js";

const remove = async () => {
    const file = "files/fileToRemove.txt";
    const filePath = path.resolve(import.meta.dirname, file);

    const isFileExist = await checkPath(filePath);

    if (!isFileExist) throwError();

    doOperation(fs.promises.rm, filePath);
};

await remove();
