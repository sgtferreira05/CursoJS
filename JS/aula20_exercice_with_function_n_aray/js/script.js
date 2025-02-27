const people = [];

function myScope () {
    const form = document.querySelector('.form');

    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('it was sent')
    // }

    const result = document.querySelector('.result');
    const people = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const name = form.querySelector('.name');
        const last_name = form.querySelector('.last_name');
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');

        people.push({
            name: name.value,
            last_name: last_name.value,
            weight: weight.value,
            height: height.value,
        });

        console.log(people);
        result.innerHTML += `<p>${name.value} ${last_name.value} ${weight.value} ${height.value} </p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}
myScope();