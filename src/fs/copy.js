import { cp } from "node:fs/promises";
import { resolve } from "node:path";
import { throwError } from "./utils/throw-error.js";
import { checkPath } from "./utils/check-path.js";
import { doOperation } from "./utils/do-operation.js";

const source = resolve(import.meta.dirname, "./files/");
const destination = resolve(import.meta.dirname, "./files_copy/");

const copyOptions = {
    errorOnExist: true,
    force: false,
    recursive: true,
    preserveTimestamps: true,
};

const copy = async () => {
    const isDestinationExists = await checkPath(destination);

    if (isDestinationExists) {
        throwError();
    }

    doOperation(cp, source, destination, copyOptions);
};

await copy();
