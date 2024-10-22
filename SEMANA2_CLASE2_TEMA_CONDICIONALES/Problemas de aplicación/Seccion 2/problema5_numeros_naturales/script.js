/*
5. Cree un programa que muestre los números naturales de 1 a n. Use ciclo while.
*/

//Uso un ciclo while porque no sé hasta donde llega

let numero = parseInt(prompt("Ingrese el numero"));

let aux = 1;
while (aux <= numero) {
  console.log(aux);
  aux++;
}
