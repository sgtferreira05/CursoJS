// between zero and eleven : good morning;
// between twelve and seventeen : good afternoon; n
// between eighteen and twenty twenty tree : good night.


// IF can be used alone;
// ELSE and ELSE IF need a before IF in the checklist;
// We can have a lot of ELSE IF the checklist ;
// We only can have one ELSE in my checklist;

const hour = 50;

if (hour >= 0 && hour <= 11) {
    console.log('good morning!');
} else if (hour >= 12 && hour <= 17) {
    console.log('good afternoon!')
} else if (hour >= 18 && hour <= 23) {
    console.log('good night!')
} else {
    console.log('ERROR!! PLEASE, ENTER A CORRECT HOUR')
}