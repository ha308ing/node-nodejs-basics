import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import path from "node:path";

const calculateHash = async () => {
    const algorithm = "sha256";
    const encoding = "hex";
    const file = "files/fileToCalculateHashFor.txt";
    const filePath = path.resolve(import.meta.dirname, file);

    const hash = createHash(algorithm).setEncoding(encoding);

    createReadStream(filePath)
        .pipe(hash)
        .on("data", (data) => {
            process.stdout.write(data + "\n");
        });
};

await calculateHash();
