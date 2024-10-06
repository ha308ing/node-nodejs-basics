import { throwError } from "./throwError.js";

export async function doOperation(operation, ...args) {
    try {
        return await operation(...args);
    } catch (err) {
        throwError();
    }
}
