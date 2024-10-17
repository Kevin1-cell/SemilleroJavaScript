/*
Ejercicio
Resuelva la siguiente expresión paso a paso:
1) 10%2*5/10+3*(5+2*3)%60

--Solución
10 % 2 * 5 / 10 + 3 * (5 + 2 * 3) % 60
10 % 10 / 10 + 3 * (5 + 6) % 60
0 / 10 + 33 % 60
= 33
*/

let resultado = 10%2*5/10+3*(5+2*3)%60;
console.log("El resultado es: ",resultado);