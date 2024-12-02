/*
13. Escriba una función que reciba un número entero y dicha función pueda determinar
si el número enviado es positivo o negativo.
*/

function esPositivo(numero) {
  if (numero > 0) {
    return true;
  } else {
    return false;
  }
}

let numero = parseInt(prompt("Ingrese un numero"));

if (esPositivo(numero)) {
  alert("El numero ingresado es positivo");
} else {
  alert("El numero ingresado es negativo");
}
