import { createReadStream, createWriteStream } from "node:fs";
import { resolve } from "node:path";
import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";

const file = resolve(import.meta.dirname, "./files/fileToCompress.txt");
const readStream = createReadStream(file);

const compressTransform = createGzip();

const archive = resolve(import.meta.dirname, "./files/archive.gz");
const writeStream = createWriteStream(archive);

const compress = async () => {
    console.log(`Compressing ${file}\nto ${archive}`);
    pipeline(readStream, compressTransform, writeStream);
};

await compress();
