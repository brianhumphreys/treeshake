'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var b = require('./b.js');

// A single module example.
function funcA(a, b$1) {
    b.print('Hello from the module A!');
    return a + b$1;
}

exports.funcA = funcA;
