import { print } from './b'

// A single module example.
export function funcA(a: number, b: number): number {
  print('Hello from the module A!');
  return a + b;
}
