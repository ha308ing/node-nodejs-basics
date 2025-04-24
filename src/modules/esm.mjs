import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/c.js";

const random = Math.random();

const importJson = random > 0.5 ? "./files/a.json" : "./files/b.json";

let unknownObject = (
    await import(importJson, {
        with: { type: "json" },
    })
).default;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.filename}`);
console.log(`Path to current directory is ${import.meta.dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
