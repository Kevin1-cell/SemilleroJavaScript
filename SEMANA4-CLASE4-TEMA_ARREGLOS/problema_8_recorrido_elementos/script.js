/*
8. Cree una función que reciba como argumento el siguiente arreglo [2, 5, 7, 9] y lo
recorra, imprimiendo cada uno de sus elementos.
*/

function recorrerArreglo(k) {
  k.forEach((element) => {
    console.log(element);
  });
}

let k = [2, 5, 7, 9];

recorrerArreglo(k);
