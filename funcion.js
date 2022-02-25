
//ejercicio1
function mostrar() {
   console.log('hola');
}

mostrar();

//ejercicio2
function bool() {
   console.log(true);
}

bool();

//ejercicio3

function parametros(st1, st2) {
   console.log(st1);
   console.log(st2);
}

parametros('hola ', 'señor');

//ejercicio4
function concat(st1, st2) {
   let mostrar4 = st1 + st2;
   console.log(mostrar4);
}

concat('hola ', 'profesor');

//ejercicio5
function exp(n1, n2) {
   console.log(n1**n2);
}

exp(3, 4);

//ejercicio6
function exp2(n1, n2) {
  return (n1**n2);
}

resultadoExp = exp2(3, 4);

//ejercicio7
//PROGRAMA 1
function suma(a, b) {
   return a + b;
 }
 let resultado1 = 4;
 let resultado2;
 resultado1 = suma(1,2);
 resultado2 = suma(2,2);
 resultado = suma(resultado1, resultado2);
 console.log(resultado);
 
 //PROGRAMA 2

 function suma(a, b) {
   return a + b;
 }
 console.log(suma(suma(1,2), suma(2,2)));
 