/*
Ejercicio
Resuelva la siguiente expresión paso a paso:
11) 5 * (4 / 4 * 4 - (44 + 4 / - 4)) - 6 % 9

--Solución
5 * (4 / 4 * 4 - (44 + 4 / - 4)) - 6 % 9;
5 * (1 * 4 -(44 -1))-6;
5 * (4 - 43) - 6;
5 * -39 - 6,
-195 - 6;
= -201;
*/

let resultado = 5*(4/4*4-(44+4/-4))-6%9;
console.log("El resultado es: ",resultado);