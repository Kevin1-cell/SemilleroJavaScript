/*
8. Cree un programa que muestre los números impares entre 1 y n.
*/

let numero = parseInt(prompt("Ingrese un numero natural"));

while (isNaN(numero)) {
  numero = parseInt(prompt("por favor, ingrese un numero natural valido"));
}

let aux = 1;
while (aux <= numero) {
  if (aux % 2 === 1) {
    console.log(aux);
  }
  aux++;
}
