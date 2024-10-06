import path from "node:path";
import fs from "node:fs";
import zlib from "node:zlib";

const __dirname = import.meta.dirname;

const compress = async () => {
    const filePath = "files/fileToCompress.txt";
    const outputPath = "files/archive.gz";
    const file = path.resolve(__dirname, filePath);
    const output = path.resolve(__dirname, outputPath);

    fs.createReadStream(file)
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(output));
};

await compress();
