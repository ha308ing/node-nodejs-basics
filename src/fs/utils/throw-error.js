const ERROR_MESSAGE = "FS Operation failed";

/**
 * Throws errors
 * @param {string} errorMessage
 * @param {class} errorType
 */
export function throwError(errorMessage = ERROR_MESSAGE, errorType = Error) {
  throw new errorType(errorMessage);
}
