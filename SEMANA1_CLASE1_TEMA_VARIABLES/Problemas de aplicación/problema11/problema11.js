/*
11. Cree un programa que simule el lanzamiento de dos dados y muestre la suma de los
resultados
*/

let dado1 = Math.floor(Math.random()*6)+1;
let dado2 = Math.floor(Math.random()*6)+1;

alert("!Lanzandooo!...El numero obtenido por el dado uno es "+dado1);
alert("!Lanzandooo!...El numero obtenido por el dado uno es "+dado2);

let suma = dado1 + dado2;
alert("La suma de ambos es de "+suma);