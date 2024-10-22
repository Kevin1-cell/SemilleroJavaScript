/*
6. Cree un programa que calcula la suma de los primeros n números naturales.
*/

let numero = parseInt(prompt("Ingrese un numero natural"));
while (isNaN(numero)) {
  numero = parseInt(prompt("Por favor, ingrese un numero natural valido"));
}

let aux = 1,
  suma = 0;

while (aux <= numero) {
  suma += aux;
  aux++;
}
console.log("La suma calculada es: ", suma);
