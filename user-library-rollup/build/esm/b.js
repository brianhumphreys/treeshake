// Another module.

// A utility function that semantically belongs to this module,
// but may be used by other modules as well.
function print(message) {
  console.log(message);
}

// Some other function, representing a piece of logic
// that should be tree-shaken, if not used.
function funcB() {
  print('Hello from the module B!');
}

export { funcB, print };
