/*
13. Cree un programa que calcule el factorial de 5
*/

let numero = 5;

let factorial = 5 * 4 * 3 * 2 * 1;

alert("El factorial de 5 es: "+factorial);

let resultado = 1;
for(let index = 1; index <= numero; index++){
    resultado *= index;
}

alert("El factorial de 5 es: "+resultado);
