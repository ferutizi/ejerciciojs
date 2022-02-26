//ARRAYS
let arreglo = [1, 2, 3 , 4, 5];

console.log(arreglo);
console.log(arreglo[0]);
console.log(arreglo[2]);

//cycles FOR

function imprimirNumeros(cantidad) {
    for(let i = 0; i<= cantidad; i++) {
        console.log(i);
    }
}

imprimirNumeros(10);

//WHILE

let finish = false;
let a = 5;
while (!finish) {
    if (a == 1) {
        finish = true;
    }
    a = a -1;
    console.log(a);
}

//EJERCICIO 1

