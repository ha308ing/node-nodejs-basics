import path from "node:path";
import fs from "node:fs";
import { checkPaths, throwError, doOperation } from "./helpers/index.js";

const copy = async () => {
    const source = path.resolve(import.meta.dirname, "files");
    const target = path.resolve(import.meta.dirname, "files_copy");

    const [isSourceExist, isTargetExist] = await checkPaths(source, target);
    const isError = !isSourceExist || isTargetExist;

    if (isError) throwError();

    doOperation(fs.promises.cp, source, target, { recursive: true });
};

await copy();
