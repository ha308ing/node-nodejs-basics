import { checkPath } from "./checkPath.js";

export async function checkPaths(...paths) {
    const checkPromises = paths.map((path) => checkPath(path));

    return (await Promise.allSettled(checkPromises)).map((res) => res.value);
}
