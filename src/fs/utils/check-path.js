import { access, constants } from "node:fs/promises";

/**
 * @argument {string} path  Path to check
 * @argument {number} mode  Parameter for access function, constants from fs
 * @returns {Promise<boolean>} true if path exists, else - false
 */
export async function checkPath(path, mode = constants.F_OK) {
  try {
    await access(path, mode);
    return true;
  } catch {
    return false;
  }
}
