/*
12.Cree un programa que calcule la suma de los cuadrados de los números entre 1 y n.
*/

let numeros = parseInt(prompt("Ingrese un numero:"));
let suma = 0;
for (let i = 1; i <= numeros; i++) {
  suma += Math.pow(i, 2);
}

console.log("la suma de los cuadrados de los números entre 1 y "+numeros+" es "+suma);
