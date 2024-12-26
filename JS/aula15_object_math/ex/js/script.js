const number = Number(prompt('Enter a number: '));
const titleNumber = window.document.getElementById('title-number');
const text = window.document.getElementById('text');


titleNumber.innerHTML = number;
text.innerHTML += `<p>Your number + 2 =  ${number + 2}</p>`;
text.innerHTML += `<p>The square root of your number =  ${number ** 0.5}</p>`;
text.innerHTML +=  `<p>${number} is Integer? ${Number.isInteger(number)} </p>`;
text.innerHTML +=  `<p>Is it a NaN? ${Number.isNaN(number)}</p>`;
text.innerHTML +=  `<p> Your number around down =  ${Math.floor(number)}</p>`;
text.innerHTML +=  `<p>Your number around up =  ${Math.ceil(number)}</p>`;
text.innerHTML +=  `<p>Your number arounded to two decimal places =  ${number.toFixed(2)}</p>`;
