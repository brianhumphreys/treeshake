'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var b = require('./b.js');

// A single module example.
function funcA() {
  b.print('Hello from the module A!');
}

exports.funcA = funcA;
