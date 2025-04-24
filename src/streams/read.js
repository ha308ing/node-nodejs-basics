import { createReadStream, createWriteStream } from "node:fs";
import { resolve } from "node:path";
import { pipeline } from "node:stream/promises";
import { eolTransfrom } from "../utils/stream-transform-eol.js";

const file = resolve(import.meta.dirname, "./files/fileToRead.txt");

const fileStream = createReadStream(file);

const read = async () => {
    pipeline(fileStream, eolTransfrom, process.stdout);
};

await read();
