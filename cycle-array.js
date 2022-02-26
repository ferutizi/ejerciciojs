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

function imprimirNumeros2(a) {
    let finish = false;
    while (!finish) {
        if (a == 1) {
            finish = true;
        }
        a = a -1;
        console.log(a);
    }
}
//EJERCICIO 1

 function elemento() {
    for(let i = 0; i < array.length; i++) {
        console.log('el elemento de la posicion ' + i + ' es: ' + array[i]);
    }
}

function elemento2() {
    let i = 0;
    while(i < array.length) {
        console.log('el elemento de la posicion ' + i + ' es: ' + array[i]);
        i++;
    }
}

let array = [4, 5, 2];
elemento(array);
elemento2(array);

let array2 = [3, 4, 2, 1, 8, 5];
posicionPar(array2);

function posicionPar() {
    for(let i = 0; i < array2.length; i++) {
        if(i % 2 == 0) {
            array2[i] = 0;
        }
        else{
            array2[i] = i;
        }
    }
    console.log(array2)
}

//EJERCICIO 3

function agregarElemento() {
    array2.push(0);
    console.log(array2)
}

agregarElemento(array2);

//EJERCICIO 4
function pertenece(arr, s) {
    if(arr.includes(s)){
        sPertenece = true;
    }
    else {
        sPertenece = false;
    }
return sPertenece;
}

let sPertenece;
let arr = ['papa', 'tomate', 'pera'];
pertenece(arr, 'tomate');
pertenece(arr, 'manzana');