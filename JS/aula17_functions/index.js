
//function like python
function saudacao(nome) {
    return `Morning, ${nome} !`;
}

//function like python
function soma(x=1, y=1) {
    return x + y;
}


// função a partir de constante
const raiz = function (n) {
    return n ** 0.5
};

//arrow function (recent)
const potencia = (w, z) =>  w ** z;



const variavel = saudacao('Ailton');
console.log(variavel);

const resultado = soma(5);
console.log(resultado);

console.log(raiz(9));
console.log(raiz(17));

console.log(potencia(2, 5));
console.log(potencia(3, 5));
console.log(potencia(4, 5));
console.log(potencia(5, 5));
console.log(potencia(6, 5));
console.log(potencia(7, 5));







