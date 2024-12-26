
const names = ['Louis', 'Marie', 'Jhonn'];

// names[0] = 'Edward'

// names[names.length] = 'Louise';
// names[names.length] = 'Luane';
// names[names.length] = 'Francesca';

names.push('Louise', 'Margarete', 'Elizabeth');

// names.unshift('Loiuse') // Colocar Louise no índice zero
// names.unshift('Margarete') // Colocar Margarete no índice zero

// names.pop(); //Excluded the last element
// const removed = names.pop(); // save the last removed element
// console.log(removed);

// names.shift(); // It removes the first element
// console.log(names);
// const removed = names.shift();
// console.log(removed);

// delete names[1]; // It removes the first element * The first indice will be empty

// console.log(names.slice(0,3)); //fatiar a lista
// console.log(names.slice(0, -1));

console.log(typeof names); //arrays are objects
console.log(names instanceof Array);


console.log(names);
