//1. We cannot create constants with reserved words;
//2. Constants need to have meaningful names;
//3. A constant name cannot start with a number;
//4. They cannot contain spaces or hyphens;
//5. We use camelCase;
//6. Case-sensitive
//7. You cannot modify the value of  constant;
//8. Don't use var, use const;
//9. We cannot start a constant without a inicialization word.



// const nome;  WRONG (9)
// nome = 'Ailton'; WRONG (7) use let

const name = 'João';
console.log(name);

const stNumber = 5;
const ndNumber = 10;
const result = stNumber * ndNumber;
const doubleResult = result * 2;
let tripleResult = result * 3;
tripleResult = tripleResult + 5;
console.log(result);
console.log(doubleResult);
console.log(tripleResult);

console.log(typeof(stNumber));