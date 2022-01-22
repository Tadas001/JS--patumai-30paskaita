const celsius = prompt ('Įveskite laipsnius');

const atsakymas = celsiusToFahrenheit(celsius);

alert(atsakymas);


function eurToRub(eur) {
    return eur * 88.05;
}

function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}