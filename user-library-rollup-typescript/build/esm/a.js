import { print } from './b.js';

// A single module example.
function funcA(a, b) {
    print('Hello from the module A!');
    return a + b;
}

export { funcA };
