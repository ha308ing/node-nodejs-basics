import path from "node:path";
import fs from "node:fs";
import { checkPath, throwError, doOperation } from "./helpers/index.js";

const read = async () => {
    const file = "files/fileToRead.txt";
    const filePath = path.resolve(import.meta.dirname, file);

    const isFileExist = await checkPath(filePath);

    if (!isFileExist) throwError();

    const fileContent = await doOperation(
        fs.promises.readFile,
        filePath,
        "utf-8"
    );
    console.log(fileContent);
};

await read();
