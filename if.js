//CONDICIONALES

function esPositivo(numero) {
    if (numero > 0) {
        positivo = true;
        } else {
            positivo = false;
        }
    return positivo;
}

let numeroPositivo = esPositivo(5);
let numeroNegativo = esPositivo(-6);

//EJERCICIO 1
function esPar(numero) {
    let par;
    if (numero % 2 == 0) {
        par = true;
        } else {
            par = false;
        }
    return par;
}

let esPar2 = esPar(4);

//EJERCICIO 2
function operar(a,b, operacion) {
    if (operacion == 'suma') {
        return a + b;
    } else {
        return a - b;
    }
}

operar(5, 4, 'suma');
operar(5, 4, 'resta');

//EJERCICIO 3
function division(a, b) {
    if (a % b == 0) {
        return (a / b) + ' exacto';
    } else {
        return Math.round(a / b) + ' no exacto';
    }
}

division(20, 5);
division(10, 3);

//EJERCICIO 4
function año(año1, año2) {
    if (año1 - año2 > 0) {
        console.log('pasaron ' + (año1 - año2) + ' años');
    } else {
        console.log('faltan ' + (Math.abs(año1 - año2)) + ' años');
    }
}

año(2022, 1998);
año(2022, 2035);