import { throwError } from "./throw-error.js";

export async function doOperation(operation, ...args) {
    try {
        const result = await operation(...args);
        if (operation.name) {
            console.log(`Operation ${operation.name} completed successfully`);
        }
        return result;
    } catch {
        throwError();
    }
}
