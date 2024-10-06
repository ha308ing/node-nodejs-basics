import { fork } from "node:child_process";
import path from "node:path";
import util from "node:util";

const spawnChildProcess = async (args) => {
    const script = path.resolve(import.meta.dirname, "files/script.js");

    const child = fork(script, args, {
        stdio: "pipe",
    });

    process.stdin
        .on("data", writePipe("send from master to child"))
        .pipe(child.stdin);

    child.stdout
        .on("data", writePipe("send from child to master"))
        .pipe(process.stdout);
};

spawnChildProcess(["someArgument1", "someArgument2", "someArgument3"]);

function styleString(string) {
    return util.styleText(["italic"], string);
}

function writePipe(string) {
    return function (data) {
        const stringStyled = styleString(`${string}: ${data.toString()}`);
        process.stdout.write(stringStyled);
    };
}
