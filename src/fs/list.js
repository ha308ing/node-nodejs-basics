import path from "node:path";
import fs from "node:fs";
import { checkPath, throwError, doOperation } from "./helpers/index.js";

const list = async () => {
    const dir = "files";
    const dirPath = path.resolve(import.meta.dirname, dir);

    const isDirExist = await checkPath(dirPath);

    if (!isDirExist) throwError();

    const files = await doOperation(fs.promises.readdir, dirPath);
    console.log(files);
};

await list();
