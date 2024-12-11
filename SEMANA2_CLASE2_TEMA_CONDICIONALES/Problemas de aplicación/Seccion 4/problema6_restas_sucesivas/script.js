/*
Construya un programa que dados dos números enteros, encuentre su cociente mediante restas sucesivas.
*/

let num1 = prompt("Ingrese un número enteros");
let num2 = prompt("Ingrese otro número enteros");

let cosciente = 0;
while (num1 >= num2) {
  num1 -= num2;
  cosciente++;
}

console.log(`El cosciente de ${num1} y ${num2} es ${cosciente}`);
