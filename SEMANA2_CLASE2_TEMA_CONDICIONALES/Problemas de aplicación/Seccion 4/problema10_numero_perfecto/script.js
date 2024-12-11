/*
10. Haga un programa que diga si un número es o no perfecto. Un número N es perfecto si la suma de
sus divisores (excluido el propio N) es N. por ejemplo 28 es perfecto, pues sus divisores (excluido el
28) son 1,2,4,7 y 14 su suma da 28.
*/

let N = parseInt(prompt("Ingrese un número entero:"));

let suma = 0;

for (let i = 1; i < N; i++) {
  if (N % i === 0) {
    // Si i es divisor de N
    suma += i; // Sumar el divisor
  }
}

if (suma === N) {
  alert("El número ingresado es un número perfecto");
} else {
  alert("El número no es perfecto");
}
