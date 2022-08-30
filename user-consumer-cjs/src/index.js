const hello = require('user-library-rollup-lit/common');
console.log(hello);

const testElement = document.createElement('span');
testElement.innerHTML = 'shit';
document.body.appendChild(testElement);