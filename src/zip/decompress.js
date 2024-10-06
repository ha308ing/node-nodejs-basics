import path from "node:path";
import fs from "node:fs";
import zlib from "node:zlib";

const __dirname = import.meta.dirname;

const decompress = async () => {
    const inputPath = "files/archive.gz";
    const outputPath = "files/fileToCompress.txt";
    const input = path.resolve(__dirname, inputPath);
    const output = path.resolve(__dirname, outputPath);

    fs.createReadStream(input)
        .pipe(zlib.createUnzip())
        .pipe(fs.createWriteStream(output));
};

await decompress();
