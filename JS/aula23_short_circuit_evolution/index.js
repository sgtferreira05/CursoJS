/* 
&& -> false && true : false  "the really value"
|| -> true || false -> "will return the true value"

FALSY: false*, 0, NaN, '', " ", null, undefined
*/

        // && (and)

// console.log('Ailton F' && 0 && 'Maria F');
// console.log('Ailton F' && 1 && 'Maria F');
// console.log('Ailton F' && 1 && NaN);
// console.log('Ailton F' && 1 && null);
// console.log('Ailton F' && 1 && undefined && null && NaN);
// console.log('Ailton F' && '' && 'Maria F');

// function sayHi () {
//     return 'Hi';
// }

// let goExec;
// let goExec1 = 'Joaozinho';

// console.log(goExec && sayHi())
// console.log(goExec1 && sayHi())


        // || (or)

console.log(0 || false || null || 'Ailton' || NaN || true);

const userColor = 'RED';
const defaultColor = userColor || 'BLACK';
console.log(defaultColor);

const a = 0;
const b = null;
const c = false;
const d = 'false'; // aqui é verdadeiro
const e = NaN;

console.log(a || b || c || d || e);

