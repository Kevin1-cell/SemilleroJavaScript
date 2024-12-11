/*
7. Escriba un algoritmo que calcule la potencia de a
b

potencial = a * a * a * ... * a (b veces)
*/

let num1 = prompt("Ingrese a");
let num2 = prompt("Ingrese b");

let multiplicacion = 1;
for (let i = 0; i < num2; i++) {
  multiplicacion *= num1;
}

console.log(multiplicacion);
