
let aString = "A \"text\""; //escapar com aspas duplas
let bString = "A \\text"; //escapar com aspas duplas


//             01234567...
let cString = "A text that shows how it runs "; //strings are indexed


console.log(aString);
console.log(bString);
console.log(cString[4]);
console.log(cString.charAt(9));
console.log(cString.concat('dont\'t worry about it.'));

console.log(cString.indexOf('shows')); //show us where start the wordc
console.log(cString.indexOf('o', 15));// search the word or letter of a certain index, in the example 15.
console.log(cString.lastIndexOf('a')); //start at the last index -1
console.log(cString.match(/[a-z]/g)); //return us all low cases word
console.log(cString.match(/[a-z]/));
console.log(cString.search(/[a-z]/)); //show us the indice
console.log(cString.search(/x/)); //show us the indice/ similar the indexOf
console.log(cString.replace('text', 'briefing')); 
console.log(cString.replace(/ /g, '-')); // this way, replace all space to a -
console.log(cString.length); //show us the string's length
console.log(cString.slice(3, 11)); //slice the string

console.log(cString.slice(-5, -1)); //slice the string
console.log(cString.substring(cString.length - 5)); // same thing to the up slice, the slice mode is better.

console.log(cString.split(' ')); // will separate the string on the spaces;
console.log(cString.split(' ', 2)); // will separate the string on the spaces 2 times;
console.log(cString.split('o')); // will separate the string on the 'o's words;

console.log(cString.toLowerCase());
console.log(cString.toUpperCase());





