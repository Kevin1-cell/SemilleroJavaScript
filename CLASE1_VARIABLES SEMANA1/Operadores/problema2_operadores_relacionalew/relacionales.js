/*
Ejercicio
Resuelva la siguiente expresión paso a paso:

Entero a = 3, b = 7;

(5 * b % (17 - 4 % 7 + 3)) > b == (b - a * 4.7) > 23

--Solución

(5 * 7 % (17 - 4 % 7 + 3)) > 7 == (7 - 3 * 4.7) > 23    
(35 % (17 - 4 + 3)) > 7 == (7 - 14.1) > 23
(35 % 16) > 7 == -7.1 > 23
3 > 7 == -7.1 > 23
false == false

El resultado es true ya que los operadores son iguales
*/

let a = 3, b = 7;

let resultado = (5 * b % (17 - 4 % 7 + 3)) > b == (b - a * 4.7) > 23;
console.log("El resultado es: ",resultado);