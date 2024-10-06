import path from "node:path";
import fs from "node:fs";
import { checkPath, throwError, doOperation } from "./helpers/index.js";

const create = async () => {
    const file = "files/fresh.txt";
    const fileContent = "I am fresh and young";

    const filePath = path.resolve(import.meta.dirname, file);
    const isFileExist = await checkPath(filePath);

    if (isFileExist) throwError();

    doOperation(fs.promises.writeFile, filePath, fileContent, "utf-8");
};

await create();
