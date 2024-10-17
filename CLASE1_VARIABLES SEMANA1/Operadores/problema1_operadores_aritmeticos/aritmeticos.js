/*
Ejercicio
Resuelva la siguiente expresión paso a paso:

Entero a = 3, b = 7;
Constante Real  c = 1.5;

5 * b - (17 - 4 % 7 + 3) * c - a;

--Solución

5 * 7 - (17 - 4 % 7 + 3) * 1.5 - 3;
35 - (17 - 4 + 3) * 1.5 -3;
35 - (16) * 1.5 - 3
35 - 24 - 3
11 - 3
8
*/

let a = 3, b = 7;
const c = 1.5;

let resultado = 5 * b - (17 - 4 % 7 + 3) * c - a;
console.log("El resultado es: ",resultado);