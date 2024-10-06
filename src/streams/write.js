import { createWriteStream } from "node:fs";
import path from "node:path";

const write = async () => {
    const file = "files/fileToWrite.txt";
    const filePath = path.resolve(import.meta.dirname, file);
    const streamWrite = createWriteStream(filePath);

    process.stdin.on("data", (data) => {
        streamWrite.write(data);
    });
};

await write();
