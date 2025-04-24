import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { resolve } from "node:path";
import { eolTransfrom } from "../utils/stream-transform-eol.js";
import { pipeline } from "node:stream/promises";

const file = resolve(import.meta.dirname, "./files/fileToCalculateHashFor.txt");
const readStream = createReadStream(file);

const hashTransform = createHash("sha256").setEncoding("hex");

const calculateHash = async () => {
    console.log(`Getting hash for ${file}`);
    pipeline(readStream, hashTransform, eolTransfrom, process.stdout);
};

await calculateHash();
