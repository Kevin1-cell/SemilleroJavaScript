/*
Ejercicio
Resuelva la siguiente expresión paso a paso:

Real b = 3.7;

(15 >= 7 * b) || ((43 - 8 * 2 / 4) != (b * 5 / 2));

--Solución

(15 >= 7 * 3.7) || ((43 - 8 * 2 / 4) != (3.7 * 5 / 2));
(15 >= 25.9) || ((43 - 16 / 4) != (18.5 / 2));
(15 >= 25.9) || ((43 - 4.75) != 9.25));
(15 >= 25.9) || (38.25 != 9.25);
false || true
= true...Es true porque alguna de las dos son verdaderas.
*/

let b = 3.7;

let resultado = (15 >= 7 * b) || ((43 - 8 * 2 / 4) != (b * 5 / 2));
console.log("El resultado es: ",resultado);