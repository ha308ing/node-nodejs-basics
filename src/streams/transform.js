import { Transform } from "node:stream";

const transform = async () => {
    process.stdin
        .pipe(
            new Transform({
                transform(chunk, _, callback) {
                    const data = chunk.reverse().toString().trim() + "\n";
                    callback(null, data);
                },
            })
        )
        .pipe(process.stdout);
};

await transform();
