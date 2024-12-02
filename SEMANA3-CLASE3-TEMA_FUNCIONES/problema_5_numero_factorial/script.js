/*
5. Escriba una función que reciba un número n como parámetro y genere su factorial.
*/

//Funciones
function numeroFactorial(numero) {
  let factorial = 1;
  if (numero === 0) {
    return factorial;
  } else {
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
  }
  return factorial;
}

//Datos de entrada.
let numero = prompt("Ingrese el numero para calcular el factorial");

alert("El factorial de " + numero + " es:" + numeroFactorial(numero));
