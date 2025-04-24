import { cpus } from "node:os";
import { Worker } from "node:worker_threads";
import { resolve } from "node:path";

const startingNumber = 10;
const cpuCount = cpus().length;
const workerPath = resolve(import.meta.dirname, "worker.js");

const performCalculations = async () => {
    const results = [];
    let workerCounter = 0;

    for (let i = 0; i < cpuCount; i++) {
        const worker = new Worker(workerPath, {
            workerData: { n: i + startingNumber },
        });

        worker.on("message", (result) => {
            results[i] = { status: "resolved", data: result };
        });

        worker.on("error", (e) => {
            results[i] = { status: "error", data: null };
        });

        worker.on("exit", () => {
            if (++workerCounter === cpuCount) {
                console.log(results);
            }
        });
    }
};

await performCalculations();
