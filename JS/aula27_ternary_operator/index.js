// ? ' To do' : 'Done' : 'Not started'
const userPontuation = 100;



// if (userPontuation >= 1000) {
//     console.log('User is a premium user')
// }
// else {
//     console.log('User is a free user')
// }
// // Ternary operator

// userPontuation >= 1000 ? console.log('User is a premium user') : console.log('User is a free user')
// Shorter version
const userType = userPontuation >= 1000 ? 'Premium' : 'Free';
console.log(`User is a ${userType} user`)

const UserColor = null;
const defaultColor = 'blue';
// const color = UserColor ? UserColor : defaultColor;
const color = UserColor || defaultColor; // Shorter version
console.log(color)