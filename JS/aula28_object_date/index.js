
// const data = new Date(0); // 1 de janeiro de 1970, 00:00:00 UTC

// const data = new Date();
// const data = new Date(1996, 8, 5, 22); // ano, mês (0-11), dia, hora, minuto, segundo, milissegundo


// const data = new Date('1996-09-05 22:14'); // data ISO 8601
// const data = new Date(1744706905382); 

// console.log('Dia', data.getDate()); // Dia do mês (1-31)
// console.log('Mês', data.getMonth() + 1); // Mês (0-11)
// console.log('Ano', data.getFullYear()); // Ano (4 dígitos)
// console.log('Hora', data.getHours()); // Hora (0-23)
// console.log('Minuto', data.getMinutes()); // Minuto (0-59)
// console.log('Segundo', data.getSeconds()); // Segundo (0-59)
// console.log('Milissegundo', data.getMilliseconds()); // Milissegundo (0-999)
// console.log('Dia da semana', data.getDay()); // Dia da semana (0-6, 0 = domingo)

// console.log(data.toString());
// console.log(Date.now())   // Timestamp em milissegundos desde 1 de janeiro de 1970, 00:00:00 UTC

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function dataFormat(data) {
    return `${zeroAEsquerda(data.getDate())}/${zeroAEsquerda(data.getMonth() + 1)}/${zeroAEsquerda(data.getFullYear())} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}:${zeroAEsquerda(data.getSeconds())}`
}

const data = new Date()
const brasilData = dataFormat(data)
console.log(brasilData) // 5/9/1996 22:14:55