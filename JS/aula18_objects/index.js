

// const array = [1, 2, 3];
// array.push(4);
// array[0] = 'Ailton';
// // array = 'Another' : ERROR, just with let
// console.log(array);

//object
const person1 = {
    name: 'Ailton',
    lastName: 'Ferreira',
    age: 28
};

const person2 = {
    name: 'Maria',
    lastName: 'Almeida',
    age: 52
};

// console.log(person1.name);
// console.log(person2.name);


//function

function person(name, lastName, age) {
    return {name, lastName, age};
}

const person3 = person('Ailton', 'Ferreira', 25);
const person4 = person('Maria', 'Almeida', 52);
const person5 = person('José', 'Ferreira', 54);
const person6 = person('Sti', 'Ferreira', 35);
const person7 = person('Ellen', 'Ferreira', 33);

////////////


//object
const person8 = {
    name: 'Louis', lastName: 'Miranda', age: 25,
    fala () {
        console.log(`${this.name} ${this.lastName} is talking Hello.`)
        console.log(`My age is ${this.age}`)

    },
    increasingAge() {
        this.age++;
    }
};
person8.fala();
person8.increasingAge();
person8.fala();
person8.increasingAge();
person8.fala();
person8.increasingAge();
person8.fala();
person8.increasingAge();