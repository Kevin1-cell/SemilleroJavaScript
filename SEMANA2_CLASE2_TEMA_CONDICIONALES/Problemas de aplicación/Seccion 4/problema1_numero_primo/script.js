/*
1. Construir un programa que reciba un número entero positivo no superior a 1.000.000.000 e indique si
el número es primo. Por ejemplo: Dado el número 73 indicar true. Dado el número 35 indicar false
*/

let numero = parseInt(
  prompt("Ingrese un número entero positivo no superior a 1,000,000,000")
);

while (isNaN(numero) || numero <= 1 || numero > 1000000000) {
  numero = parseInt(
    prompt("Por favor, ingrese un número válido (entre 2 y 1,000,000,000):")
  );
}

function esPrimo(numero) {
  if (numero <= 1) return false;
  if (numero === 2) return true;
  if (numero % 2 === 0) return false;

  for (let i = 3; i <= numero / 2; i += 2) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

alert(esPrimo(numero) ? "Es primo" : "No es primo");
