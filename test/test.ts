import test = require('blue-tape');
import deriv = require('deriv');

const x_prime = deriv((x) => {return x*x}, 3, 0.1);
console.log(`x_prime: { res: ${x_prime.res}, err: ${x_prime.err} }`);
