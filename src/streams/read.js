import path from "node:path";
import { createReadStream } from "node:fs";
import { Transform } from "node:stream";

const read = async () => {
    const file = "files/fileToRead.txt";
    const filePath = path.resolve(import.meta.dirname, file);

    const stream = createReadStream(filePath).setEncoding("utf-8");

    stream
        .pipe(
            new Transform({
                transform(chunk, _, callback) {
                    chunk += "\n";
                    callback(null, chunk);
                },
            })
        )
        .pipe(process.stdout);
};

await read();
