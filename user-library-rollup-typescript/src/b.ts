// Another module.

// A utility function that semantically belongs to this module,
// but may be used by other modules as well.
export function print(message: string): void {
  console.log(message)
}

// Some other function, representing a piece of logic
// that should be tree-shaken, if not used.
export function funcB(a: number, b: number): number {
  print('Hello from the module B!')
  return a * b;
}
