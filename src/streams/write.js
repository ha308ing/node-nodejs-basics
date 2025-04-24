import { createWriteStream } from "node:fs";
import { resolve } from "node:path";
import { pipeline } from "node:stream/promises";

const file = resolve(import.meta.dirname, "./files/fileToWrite.txt");

const writeStream = createWriteStream(file, { encoding: "utf-8" });

const write = async () => {
    console.log(`Hello from write!\nEnter something to type in ${file}`);
    pipeline(process.stdin, writeStream);
};

await write();
