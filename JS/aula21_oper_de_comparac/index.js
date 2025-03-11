/* 
Comparison operators:

> (bigger than)
>= (bigger than or equal to)
< (lower than)
<= (lower than or equal to)
== (equality - values) **NÃO É RECOMENDÁVEL UTILIZAR**
=== (strict equality - values and types)
!= (diference - values) **NÃO É RECOMENDÁVEL UTILIZAR**
!== (strict diference - values and types)
*/

const a = 5;
const b = 6;
const c = 9;
const d = 22;
const e = '22';


console.log(`Is ${a} greater than ${b}? -> ${a > b}`);
console.log(`Is ${a} greater than or equal to ${a}? -> ${a >= a}`);
console.log(`Is ${c} lower than ${a}? -> ${c < a}`);
console.log(`Is ${c} lower than or equal to ${d}? -> ${c <= d}`);
console.log(`Is ${c} equal to ${a}? -> ${c == a}`);
console.log(`Is ${d} strict equality to ${e}? -> ${d === e}`);
console.log(`Is ${a} diference to ${d}? -> ${a != d}`);
console.log(`Is ${d} strict diference to ${e}? -> ${d !== e}`);

