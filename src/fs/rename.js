import path from "node:path";
import fs from "node:fs";
import { checkPaths, throwError, doOperation } from "./helpers/index.js";

const rename = async () => {
    const fileName = "files/wrongFilename.txt";
    const targetName = "files/properFilename.md";

    const filePath = path.resolve(import.meta.dirname, fileName);
    const targetPath = path.resolve(import.meta.dirname, targetName);

    const [isFileExist, isTargetExist] = await checkPaths(filePath, targetPath);
    const isError = !isFileExist || isTargetExist;

    if (isError) throwError();

    doOperation(fs.promises.rename, filePath, targetPath);
};

await rename();
