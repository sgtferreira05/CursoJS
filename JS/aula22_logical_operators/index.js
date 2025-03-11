/* 

Logical operators:
&& -> and
|| -> or
! -> not

*/

console.log(`true AND true -> ${true && true}`);
console.log(`true AND true AND false-> ${true && true && false}`);
console.log(`true AND false -> ${true && false}`);
console.log(`false AND true -> ${false && true}`);
console.log(`false AND false -> ${false && false}`);
console.log('-------');
console.log(`true OR true -> ${true || true}`);
console.log(`false OR false OR true -> ${false || false || true}`);
console.log(`true OR false -> ${true || false}`);
console.log(`false OR true -> ${false || true}`);
console.log(`false OR false -> ${false || false}`);
console.log('-------');
console.log(`!true -> ${!true}`);
console.log(`!false -> ${!false}`);
console.log(`!!true -> ${!!true}`);
console.log(`!!false -> ${!!false}`);
console.log('-------')

const user = 'Ailton';
const password = '123456';
const green = user === 'Ailton' && password === '123456';
console.log(green);





