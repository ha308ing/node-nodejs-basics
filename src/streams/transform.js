import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";
import { eolTransfrom } from "../utils/stream-transform-eol.js";

const reverseTransform = new Transform({
    transform(chunk, _encoding, callback) {
        callback(
            null,
            chunk.toString().slice(0, -1).split("").reverse().join("")
        );
    },
});

const transform = async () => {
    console.log(`Hello from reverse transform!\nEnter something to reverse:`);
    pipeline(process.stdin, reverseTransform, eolTransfrom, process.stdout);
};

await transform();
