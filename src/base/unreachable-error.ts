export class UnreachableError extends Error {
  constructor(x: never) {
    super(`Unreachable case: ${JSON.stringify(x)}`);
  }
}
