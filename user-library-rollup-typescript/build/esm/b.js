// Another module.
// A utility function that semantically belongs to this module,
// but may be used by other modules as well.
function print(message) {
    console.log(message);
}
// Some other function, representing a piece of logic
// that should be tree-shaken, if not used.
function funcB(a, b) {
    print('Hello from the module B!');
    return a * b;
}

export { funcB, print };
