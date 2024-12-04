/*
19. Dado el arreglo [-2, 8, 99, 1, 7] usar ciclo forEach y una variable contadora para
mostrar la suma de los cuadrados de sus elementos.
*/

let numeros = [-2, 8, 99, 1, 7];
let sumaCuadrados = 0;

numeros.forEach((num) => {
  sumaCuadrados += num ** 2;
});

console.log(`Suma de los cuadrados: ${sumaCuadrados}`);
