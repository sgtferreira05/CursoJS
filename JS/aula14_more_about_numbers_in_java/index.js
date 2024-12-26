let num1 = 1.5;
let num2 = 0.5;

num1 += num2; // 2.0
num1 += num2; // 2.5
num1 += num2; // 3.0
num1 += num2; // 3.5
num1 += num2; // 4.0
num1 += num2; // 4.5
num1 += num2; // 5.0
num1 += num2; // 5.5



num1 = parseFloat(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));



// console.log(num1.toLocaleString() + num2); #CONCATENAÇÃO LOCAL
// num1= num1.toLocaleString(); #TRANSFORMA PARA STRING
// console.log(num1.toString(2)); #NÚMERO BINÁRIO
// console.log(num1.toFixed(2)); #NÚMERO DE CASAS DECIMAIS

// console.log(Number.isInteger(num1)); #VERIFICAR SE É INTEIRO OU NÃO

// console.log(Number.isNaN(temp));
// let temp = num1 + '5';
// console.log(temp);
