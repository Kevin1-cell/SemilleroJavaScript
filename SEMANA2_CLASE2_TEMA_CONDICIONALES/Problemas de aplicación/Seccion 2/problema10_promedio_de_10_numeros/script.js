/*
10.Cree un programa que calcule el promedio de 10 números.
*/

let numero = 0;
let suma = 0;
alert("Ingrese 10 numeros");

for (let i = 1; i <= 10; i++) {
  numero = parseFloat(prompt("Numero " + i));
  suma += numero;
}
let promedio = suma / 10;

console.log("El promedio de los 10 numeros ingresados es de: ", promedio);
