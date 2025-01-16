/*
Primitivos (IMUTÁVEIS) - string, number, boolean, undefined, null, bigint, undefined - valores copiados

Referência (MUTÁVEIS) - array, object, function - Passados por referencia
*/

//primitivos
// let name = 'Ailton';
// name = 'Ferreira'; // como se eu tivesse tirado a etiqueta da caixa toda
// name[0] = 'P' // Não podemos mudar um valor, pois a string é imutável
// console.log(name);



//primitivos
// let a = 'A';
// let b = a; // CÓPIA ****
// console.log(a, b); 
// a = 'Another thing'; // Somente a é alterado, o valor de b NÃO é alterado.
// console.log(a, b); 


//reference
let a = [1, 2, 3];
let b = a; //As duas variáveis apontam para o mesmo lugar na memória, APONTA
let c = b // c também vai apontar para o local que a e b apontam.
console.log(a, b);

a.push(4) // O b também vai ser alterado, pois faz referencia ao valor de a
console.log(a, b);

b.pop(); // O a também vai ser alterado, pois faz referencia ao valor de b
console.log(a, b);
console.log(c);

// Caso queiramos copiar os valores para outra variável de referencia, precisaremos usar os três pontos como no exemplo a seguir:

let d = ['a', 'b', 'c'];
let e = [...d];  // Agora o valor de d vai ser copiado em e, e não mais fazerá referencia
let f = e;

console.log(d, e)

d.push('d') //somente d vai ser alterado
console.log(d, e);

e.pop(); //somente e vai ser alterado
console.log(d, e);


//reference

const g= {
    nome: 'Ailton',
    lastName: 'Ferreira'
};

const h = g;

g.nome = 'João' // g e h serão alterados, pois são object(reference), para fazer cópia deveremos colocar os três pontos na linha acima, tal como fizemos no array.
console.log(h);
