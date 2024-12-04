/*
14. Cree una función que reciba un arreglo de números enteros no repetidos y lo retorne
ordenado de menor a mayor según el valor de tales elementos.
*/

function ordenarNumeros(arr) {
  return arr.sort((a, b) => a - b);
}

let numeros = [10, 2, 7, 5, 3];
console.log(ordenarNumeros(numeros));
