/*
12. Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] 1
arreglo2 = [“Manzana”, “Banano”, “Lechuga”, “Perejíl”] Ordene los arreglos de tal
manera que los elementos(frutas y verduras) queden en el arreglo que les
corresponde. Use ciclos.
*/

let arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"];
let arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];

let frutas = [];
let verduras = [];

arreglo1.forEach((item) => {
  if (["Pera", "Limón"].includes(item)) frutas.push(item);
  else verduras.push(item);
});

arreglo2.forEach((item) => {
  if (["Manzana", "Banano"].includes(item)) frutas.push(item);
  else verduras.push(item);
});

console.log("Frutas:", frutas);
console.log("Verduras:", verduras);
