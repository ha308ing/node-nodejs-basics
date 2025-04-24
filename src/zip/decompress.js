import { createReadStream, createWriteStream } from "node:fs";
import { resolve } from "node:path";
import { pipeline } from "node:stream/promises";
import { createGunzip } from "node:zlib";

const archive = resolve(import.meta.dirname, "./files/archive.gz");

const file = resolve(import.meta.dirname, "./files/fileToCompress.txt");

const readStream = createReadStream(archive);
const decompressTransform = createGunzip();
const writeStream = createWriteStream(file);

const decompress = async () => {
    console.log(`Decompressing ${archive}\nto ${file}`);
    pipeline(readStream, decompressTransform, writeStream);
};

await decompress();
