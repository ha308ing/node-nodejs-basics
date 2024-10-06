import fs from "node:fs";

export async function checkPath(filePath) {
    try {
        await fs.promises.access(filePath);
        return true;
    } catch (err) {
        return false;
    }
}
