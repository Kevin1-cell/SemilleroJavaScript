/*
20. Dado el arreglo [15, 7, 9, 12, 1] usar ciclo forEach y una variable contadora para
mostrar la suma de sus elementos.
*/

let numeros = [15, 7, 9, 12, 1];
let suma = 0;

numeros.forEach(num => {
  suma += num;
});

console.log(`Suma de los elementos: ${suma}`);
