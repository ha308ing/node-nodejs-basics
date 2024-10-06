import { Worker } from "node:worker_threads";
import path from "node:path";

const performCalculations = async () => {
    const workerPath = path.resolve(import.meta.dirname, "worker.js");
    const resultsCount = 3;
    const numberStart = 10;

    let resultsCounter = 0;
    const results = [];
    for (let i = 0; i < resultsCount; i++) {
        const worker = new Worker(workerPath, {
            workerData: { n: i + numberStart },
        });

        worker.on("message", (result) => {
            results[i] = { status: "resolved", data: result };
        });

        worker.on("error", (e) => {
            results[i] = { status: "error", data: null };
        });

        worker.on("exit", () => {
            resultsCounter++;
            if (resultsCounter === resultsCount) {
                console.log(results);
            }
        });
    }
};

await performCalculations();
