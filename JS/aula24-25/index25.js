const number = 511;

if (number >= 0 && number <= 5) {
    console.log('The number is bigger than zero and lower than five.');
} else {
    console.log('The number is not between zero and five');
}

console.log()
if (number >= 0 && number <= 5) {
    console.log('The number is bigger than zero and lower than five.');
} else if (number >=6 && number <= 8) {
    console.log('The number is between six and eight .');
} else if (1 === 1) {
    console.log('LITERAL'); //Always true, so will be returned
} else if (number >=6 && number <= 8) {
    console.log('The number is between six and eight .');
} else if (number >= 9 && number <= 12) {
    console.log('The number is between nine and twelve')
} else {
    console.log('The number is not between zero and thirteen')
}